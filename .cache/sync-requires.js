const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/pages/404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/pages/archive.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/templates/index.js"))),
  "component---src-templates-location-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/templates/location.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Volumes/Data/Git/fpworld/src/templates/tags.js")))
}

