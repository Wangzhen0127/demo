function panduan() {
    var result = document.getElementById('result');
    var mytime = new Date(document.getElementById('mytime').value);
    // 获取当前日期
    var date = new Date();
    var day, hour, minute, second, interval;
    // 计算相差几天的算法
    interval = mytime - date;
    interval /= 1000;
    day = Math.round(interval / 60 / 60 / 24);
    hour = Math.round(interval / 60 / 60 % 24);
    minute = Math.round(interval / 60 % 60);
    second = Math.round(interval % 60);
    // 页面显示结果
    result.innerHTML = day + "天" + hour + "时" + minute + "分" + second + "秒";
}
