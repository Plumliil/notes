import dayjs from 'dayjs'
export default function registerDirectives(app) {
    app.directive('format-time', {
        mounted(el,bindings) {
            let formatString=bindings.value;
            // console.log(formatString);
            if(!formatString){
                formatString='YYYY-MM-DD  hh:mm:ss';
            }
            const textContent = el.textContent;
            let timestamp = parseInt(textContent)
            if (timestamp.length === 10) {
                timestamp = timestamp * 1000
            }
            el.textContent = dayjs(timestamp).format(formatString)
            // console.log(typeof textContent);
        },
    })
}