$(function () {
    //カウントダウン処理
    var time = 300;
    setInterval(function () {
        time--;
        $('#timer').text(time);
    }, 1000);
});