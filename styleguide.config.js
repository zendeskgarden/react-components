var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var cssnext = require("postcss-cssnext");
var importer = require("postcss-import");
var inlineSvg = require("postcss-inline-svg");
var inputRange = require("sunesimonsen-postcss-input-range");

var sourceDir = path.join(__dirname, "src");

module.exports = {
  title: "Zendesk Garden / React Style Guide",
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: "Components",
      content: "./src/index.md",
      components: "./src/*/index.js"
    },
    {
      name: "Theming",
      content: "./src/utils/theming/index.md",
      components: "./src/utils/theming/*/index.js"
    },
    { name: "Tooltips", components: "./src/utils/tooltips/*/index.js" },
    {
      name: "Core",
      content: "./src/core/index.md",
      components: "./src/core/*/index.js"
    },
    {
      name: "Styleguide",
      content: "./src/styleguide/index.md",
      components: "./src/styleguide/*/index.js"
    }
  ],
  serverPort: 5000,
  template: "./src/styleguide/index.html",
  require: ["babel-polyfill"],
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: sourceDir,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          include: sourceDir,
          loaders: [
            "style-loader",
            "css-loader?module&importLoaders=1&localIdentName=rc-[local]-[hash:base64:5]!postcss-loader"
          ]
        },
        {
          test: /\.(svg|png|jpg|gif|woff|woff2)$/,
          include: [
            sourceDir,
            path.join(
              __dirname,
              "node_modules",
              "@zendesk",
              "garden-svg-icons",
              "src"
            )
          ],
          loaders: ["url-loader?limit=1000"]
        },
        {
          test: /\.json$/,
          include: sourceDir,
          loader: "json-loader"
        }
      ]
    },
    resolve: {
      alias: {
        "rsg-components/Wrapper": path.join(__dirname, "src/styleguide/Wrapper")
      }
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: "src/styleguide/images/*.{png,jpeg,svg}",
          to: "images/[name].[ext]"
        }
      ]),
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          context: __dirname,
          postcss: [
            importer({
              path: [
                path.resolve(__dirname, "node_modules"),
                path.resolve(__dirname, "src")
              ]
            }),
            inputRange(),
            cssnext(),
            inlineSvg({
              path: path.join(
                __dirname,
                "node_modules",
                "@zendesk",
                "garden-svg-icons",
                "src"
              )
            })
          ]
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  },
  theme: {
    base: "#555",
    link: "#30aabc",
    linkHover: "#30aabc"
  },
  styles: {
    StyleGuide: {
      sidebar: {
        left: "300px",
        background: "#fff",
        width: "220px"
      },
      footer: {
        display: "none"
      },
      logo: {
        display: "none"
      }
    },
    ComponentsList: {
      heading: {
        fontWeight: "600 !important"
      },
      list: {
        paddingLeft: "18px",
        marginTop: "16px"
      },
      item: {
        color: "#777",
        fontWeight: "300"
      }
    },
    TableOfContents: {
      search: {
        paddingBottom: "0"
      }
    },
    Link: {
      link: {
        fontWeight: "inherit !important",
        fontSize: "14px !important",
        color: "inherit !important",
        "&, &:link, &:visited": {
          color: "inherit"
        },
        "&:hover, &:active": {
          color: "inherit"
        }
      }
    },
    Heading: {
      heading: {
        color: "#30aabc",
        letterSpacing: "1.9px",
        fontSize: "35px",
        fontWeight: "400"
      }
    },
    ReactComponent: {
      heading: {
        margin: "0 0 12px",
        color: "#555"
      },
      primaryHeading: {
        lineHeight: "1.78571",
        letterSpacing: ".04em",
        fontSize: "25px",
        color: "#555"
      }
    },
    Props: {
      cellHeading: {
        color: "#555",
        fontWeight: "400"
      }
    },
    Markdown: {
      para: {
        color: "#555",
        fontSize: "15px"
      }
    }
  }
};
