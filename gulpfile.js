// This build script is transpiling JavaScript and CSS file by file into a lib
// folder. The folder structure will be kept and JavaScript files will be
// transpiled to ES5. CSS files will be transpiled to JavaScript files that will
// return a CSS-modules hash and insert the actual CSS in the head. When a CSS
// file composes another CSS file from node_modules it will be transpiled in to
// the folder lib/deps and a dependency will be added to the composed file.
// This ensured that composed CSS modules will be shared among the files
// referencing them.

const gulp = require("gulp");
const postcss = require("gulp-postcss");
const babel = require("gulp-babel");
const modules = require("postcss-modules");
const transform = require("gulp-transform");
const cleanCSS = require("gulp-clean-css");
const cssnext = require("postcss-cssnext");
const importer = require("postcss-import");
const inlineSvg = require("postcss-inline-svg");
const inputRange = require("sunesimonsen-postcss-input-range");
const rename = require("gulp-rename");
const path = require("path");
const unique = require("array-unique");
const clean = require("gulp-clean");
const adler32 = require("adler32");

const sourceDir = path.resolve(__dirname, "src");
const nodeModulesDir = path.resolve(__dirname, "node_modules");
const svgDir = path.join(
  __dirname,
  "node_modules",
  "@zendesk",
  "garden-svg-icons",
  "src"
);

const styleMappings = {};
const composes = {};
const fileDependencies = {};

// Template for the transpiled CSS-modules file
const cssToJSTemplate = (css, styles, dependencies) =>
  `\
'use strict';

exports.__esModule = true;

${css ? "var appendStyles = require('append-styles')" : ""}
${dependencies}
${css
    ? `
appendStyles({
  css: ${JSON.stringify(css)},
  id: 'rc-styles',
  before: 'ssc-styles'
})
`
    : ""}
exports.default = ${JSON.stringify(styles)}
`;

// This function transforms a CSS file to JavaScript that will return the
// CSS-modules hash and insert the actual CSS in the head.
const cssToJS = (contents, file) => {
  const relativePath = path.relative(
    path.dirname(file.path),
    path.join(__dirname, "src")
  );

  return cssToJSTemplate(
    contents,
    styleMappings[file.path],
    unique(fileDependencies[file.path] || [])
      .map(dependency => {
        const dependencyPath = path.join(
          relativePath,
          "deps",
          `${dependency}.js`
        );
        return `require('${dependencyPath}')`;
      })
      .join("\n")
  );
};

// This function collects all composes references to external node_modules and
// records them into the composes variable. Furthermore it records a file
// dependency between this CSS file and the CSS files it is composing - this
// information is kept in the fileDependencies variable.
const collectCompose = (contents, file) => {
  const composeRegexp = /composes: (.*) from ['"]([^/.].*)['"];/g;
  const dependencies = [];

  let match;
  while ((match = composeRegexp.exec(contents))) {
    const classes = match[1].trim().split(" ");
    const reference = match[2];

    composes[reference] = composes[reference] || {};
    classes.forEach(composedClass => {
      composes[reference][composedClass] = composedClass;
    });

    dependencies.push(reference);
  }

  fileDependencies[file.path] = dependencies;

  return contents;
};

// Runs collect composes for all CSS files in the project.
gulp.task("collect-composes", cb => {
  return gulp
    .src("src/**/*.css")
    .pipe(transform(collectCompose, { encoding: "utf8" }));
});

// When we have collected all the references to composed CSS files,
// we can then transpile each of the them into JavaScript files that will be
// stored in the lib/deps folder.
gulp.task("process-composed-files", ["collect-composes"], () => {
  const sources = Object.keys(composes).map(module => require.resolve(module));

  return gulp
    .src(sources, { base: path.join(__dirname, "node_modules") })
    .pipe(
      postcss([
        modules({
          generateScopedName: (name, filename, css) => {
            const hash = adler32.sum(Buffer.from(css)).toString(16);
            return `rc-${name}-${hash}`;
          },
          getJSON: (cssFileName, json) => {
            styleMappings[cssFileName] = json;
          }
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(transform(cssToJS, { encoding: "utf8" }))
    .pipe(
      rename(path => {
        path.basename = path.dirname.split("/").slice(0, -1).join("/");
        path.dirname = "deps/";
        path.extname = ".js";
      })
    )
    .pipe(gulp.dest("lib/"));
});

// This function will externalize all composes referencing CSS files
// node_modules. We have already collected all the composes and transpiled the
// referenced CSS files. So now we just replaced all composed class names with
// their hashed CSS-module name from the global scope.
const externalizeComposes = (contents, file) =>
  contents.replace(
    /composes: (.*) from ['"]([^/.].*)['"];/g,
    ($0, $1, module) => {
      const cssFileName = require.resolve(module);
      const styles = styleMappings[cssFileName];
      const classes = $1.trim().split(" ").map(c => styles[c]).join(" ");

      return `composes: ${classes} from global;`;
    }
  );

// When we have processed all external composes we are ready to transpile the
// CSS files in our project. We externalize the composes to point to the
// composed CSS class names. Then we transpile the CSS-module and place the
// resulting JavaScript file in the lib folder.
gulp.task("css", ["clean", "process-composed-files"], () => {
  return gulp
    .src(["src/**/*.css", "!src/themes/base-theme/*.css"])
    .pipe(transform(externalizeComposes, { encoding: "utf8" }))
    .pipe(
      postcss([
        importer({
          path: [sourceDir, nodeModulesDir]
        }),
        cssnext(),
        inputRange(),
        inlineSvg({
          path: svgDir
        }),
        modules({
          generateScopedName: (name, filename, css) => {
            const hash = adler32.sum(Buffer.from(css)).toString(16);
            return `rc-${name}-${hash}`;
          },
          getJSON: (cssFileName, json) => {
            styleMappings[cssFileName] = json;
          }
        })
      ])
    )
    .pipe(cleanCSS())
    .pipe(transform(cssToJS, { encoding: "utf8" }))
    .pipe(
      rename(path => {
        path.extname = ".js";
      })
    )
    .pipe(gulp.dest("lib/"));
});

const cssImports = contents =>
  contents.replace(/(import.*from (['"]).*)\.css['"]/g, "$1$2");

// This task will transpile all JavaScript ES5 files in the lib folder and
// replace imported CSS files to point to the transpiled CSS-module.
gulp.task("js", ["clean"], () => {
  return gulp
    .src(["src/**/*.js", "!src/**/spec.js", "!src/**/*.spec.js"])
    .pipe(transform(cssImports, { encoding: "utf8" }))
    .pipe(
      babel({
        babelrc: false,
        plugins: ["inline-react-svg", "transform-runtime"],
        presets: [
          ["es2015", { loose: true, modules: false }],
          "react",
          "stage-0"
        ]
      })
    )
    .pipe(gulp.dest("lib/"));
});

/**
 * Used to include static assets that are required by the Components
 */
gulp.task("assets", ["clean"], () => {
  return gulp.src(["src/**/*.gif"]).pipe(gulp.dest("lib/"));
});

gulp.task("watch", () => {
  const watcher = gulp.watch("src/**/*.{css,js}", ["default"]);
  watcher.on("change", event => {
    console.log(
      "File " + event.path + " was " + event.type + ", running tasks..."
    );
  });
});

gulp.task("clean", () => {
  return gulp.src("lib/", { read: false }).pipe(clean());
});

gulp.task("default", ["css", "js", "assets"]);
