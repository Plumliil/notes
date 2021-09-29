// 鼠标拖尾
// 鼠标拖尾
document.addEventListener('mousemove', function (e) {
    var newSpan = document.createElement('span');
    document.body.appendChild(newSpan);
    newSpan.style.left = e.pageX - 10 + 'px';
    newSpan.style.top = e.pageY - 10 + 'px';
    newSpan.style.border = '3px solid ' + getColor() + ' ';
    newSpan.className = 'mouseTail';
    var opacity = parseFloat(1);
    var toppx = (e.pageY + 20);
    // 设置一秒逐渐消失
    var setInterval = window.setInterval(function () {
        if (opacity <= 0) {
            window.clearInterval(setInterval);
            newSpan.remove();
        } else {
            opacity = (opacity - 0.1);
            newSpan.style.opacity = opacity;
        }
    }, 50)
})