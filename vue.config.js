// const path = require('path');

// // const DEV_MODE = process.env.NODE_ENV === 'development';
// const PRO_MODE = process.env.NODE_ENV === 'production';

// function resolve(dir) {
//     return path.join(__dirname, dir);
// }
module.exports = {
    // css: {
    //     loaderOptions: {
    //         // sass: {
    //         //     data: "@import '~@/styles/mixins', '~@/styles/variables';"
    //         // }
    //     }
    // },
    // assetsDir: 'static',
    // productionSourceMap: false,
    // publicPath: PRO_MODE ? '' : '/',
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@core', resolve('src/components'))
    //         .set('services', resolve('src/services'));
    // },
    devServer: {
        // overlay: { // 让浏览器 overlay 同时显示警告和错误
        //   warnings: true,
        //   errors: true
        // },
        // open: false, // 是否打开浏览器
        // host: "localhost",
        port: "8088", // 代理断就
        // https: false,
        // hotOnly: false, // 热更新
        proxy: {
            "/api": {
                target: "https://m.maoyan.com/ajax/movieOnInfoList", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
};