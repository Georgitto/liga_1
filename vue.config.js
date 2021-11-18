const path = require('path');

module.exports = {
    chainWebpack: (config) => {
        config.module.rule('file')
        .test(/\.(pdf|gif|png|jpe?g|svg)$/)
        .use('file-loader')
        .loader('file-loader')
        .end()
    }
}