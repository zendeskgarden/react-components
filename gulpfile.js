const gulp = require('gulp')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const modules = require('postcss-modules')
const transform = require('gulp-transform')
const cleanCSS = require('gulp-clean-css')
const cssnext = require('postcss-cssnext')
const importer = require('postcss-import')
const inputRange = require('postcss-input-range')
const rename = require('gulp-rename')
const path = require('path')
const unique = require('array-unique')

const sourceDir = path.resolve(__dirname, 'src')
const nodeModulesDir = path.resolve(__dirname, 'node_modules')

const styleMappings = {}
const composes = {}
const fileDependencies = {}

const cssToJSTemplate = (contents, styles, dependencies) => `\
${contents ? "import insertCss from 'insert-css'" : ''}
${dependencies}

${contents ? `insertCss(${JSON.stringify(contents)})` : ''}

export default ${JSON.stringify(styles)}
`

const cssToJS = (contents, file) => {
  const relativePath = path.relative(path.dirname(file.path), path.join(__dirname, 'src'))

  return cssToJSTemplate(
    contents,
    styleMappings[file.path],
    unique(fileDependencies[file.path] || []).map(dependency => {
      const dependencyPath = path.join(relativePath, 'garden', `${dependency}.js`)
      return `import '${dependencyPath}'`
    }).join('\n')
  )
}

const collectCompose = (contents, file) => {
  const composeRegexp = /composes: (.*) from '([^/.].*)';/g
  const dependencies = []

  let match
  while ((match = composeRegexp.exec(contents))) {
    const classes = match[1].trim().split(' ')
    const reference = match[2]

    composes[reference] = composes[reference] || {}
    classes.forEach((composedClass) => {
      composes[reference][composedClass] = composedClass
    })

    dependencies.push(reference)
  }

  fileDependencies[file.path] = dependencies

  return contents
}

gulp.task('collect-composes', (cb) => {
  return gulp.src('src/**/*.css')
    .pipe(transform(collectCompose, {encoding: 'utf8'}))
})

gulp.task('process-composed-files', ['collect-composes'], () => {
  const sources = Object.keys(composes).map((module) => (
    require.resolve(module)
  ))

  return gulp.src(sources, {base: path.join(__dirname, 'node_modules')})
    .pipe(postcss([
      modules({
        generateScopedName: 'rc-[local]-[hash:base64:5]',
        getJSON: (cssFileName, json) => {
          styleMappings[cssFileName] = json
        }
      })
    ]))
    .pipe(cleanCSS())
    .pipe(transform(cssToJS, {encoding: 'utf8'}))
    .pipe(rename((path) => {
      path.basename = path.dirname.split('/')[0]
      path.dirname = 'garden/'
      path.extname = '.js'
    }))
    .pipe(gulp.dest('lib/'))
})

const externalizeComposes = (contents, file) => (
  contents.replace(/composes: (.*) from '([^/.].*)';/g, ($0, $1, module) => {
    const cssFileName = require.resolve(module)
    const styles = styleMappings[cssFileName]
    const classes = $1.trim().split(' ').map(c => styles[c]).join(' ')

    return `composes: ${classes} from global;`
  })
)

gulp.task('css', ['process-composed-files'], () => {
  return gulp.src('src/**/*.css')
    .pipe(transform(externalizeComposes, {encoding: 'utf8'}))
    .pipe(postcss([
      importer({
        path: [sourceDir, nodeModulesDir]
      }),
      cssnext(),
      inputRange(),
      modules({
        generateScopedName: 'rc-[local]-[hash:base64:5]',
        getJSON: (cssFileName, json) => {
          styleMappings[cssFileName] = json
        }
      })
    ]))
    // .pipe(transform(log, {encoding: 'utf8'}))
    .pipe(cleanCSS())
    .pipe(transform(cssToJS, {encoding: 'utf8'}))
    .pipe(rename((path) => {
      path.extname = '.js'
    }))
    .pipe(gulp.dest('lib/'))
})

const cssImports = (contents) => contents.replace(/(import.*from '.*)\.css'/g, '$1\'')

gulp.task('js', () => {
  return gulp.src(['src/**/*.js', '!src/**/spec.js', '!src/**/*.spec.js'])
    .pipe(transform(cssImports, {encoding: 'utf8'}))
    .pipe(babel({
      babelrc: false,
      plugins: [
        'transform-runtime'
      ],
      presets: [
        ['latest', { es2015: { loose: true, modules: 'commonjs' } }],
        'react',
        'stage-0'
      ]
    }))
    .pipe(gulp.dest('lib/'))
})

gulp.task('watch', () => {
  const watcher = gulp.watch('src/**/*.{css,js}', ['default'])
  watcher.on('change', (event) => {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})

gulp.task('default', ['css', 'js'])
