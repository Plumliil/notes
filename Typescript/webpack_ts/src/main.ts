// import './01/数据类型及操作'
// import './01/函数的参数类型'
// import './01/对象类型'
// import './04/泛型'

import axios from "axios";


axios.get('https://game.gtimg.cn/images/lol/act/img/js/items/items.js?ts=2741700')
    .then(res => {
        console.log(res);
    })

    console.log(11);
    
    document.getElementById