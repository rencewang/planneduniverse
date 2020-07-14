module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800,"quality":100},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Planned Universe","short_name":"planned-universe","start_url":"/","background_color":"#292a2d","theme_color":"#292a2d","display":"minimal-ui","icon":"src/images/hello-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"20d2ef53a71d2dd13985c679b0f8e708"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
