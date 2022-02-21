export default {
    install(app) {
        console.log('plugin_objct');
        app.config.globalProperties.$name='plumli';
    }
}