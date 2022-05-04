// 打包这个模块,格式为global
// node scripts/dev.js reactivity -f global 
// -f format 自定义属性 
// minimist 用来解析命令行参数的 后边括号,引包执行
const args = require('minimist')(process.argv.slice(2));
const {
    build
} = require('esbuild');
const {
    resolve
} = require('path');
const target = args._[0] || 'reactivity';
const format = args.f || 'global';

// 开发环境只打包某一个
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));
// iife 立即执行函数
// cjs node中的模块
// esm 浏览器中esModule模块
const outputFormat = format.startsWith('global') ?
    'iife' : format === 'cjs' ?
    'cjs' : 'esm';
const outfile = resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`);


// 默认支持ts
build({
    // 入口是一个数组
    entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
    // 输出文件
    outfile,
    // 把所有包打包到一起
    bundle: true,
    sourcemap: true,
    // 输出格式
    format: outputFormat,
    // 打包全局名字
    globalName: pkg.buildOptions ?.name,
    // 平台
    platform: format === 'cjs' ? 'node' : 'browser',
    // 监控文件变化
    watch: {
        onRebuild(error) {
            if (!error) console.log('rebuilt~~~')
        }
    }
}).then(() => {
    console.log('watching~~~')
})