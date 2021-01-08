$(function () {
    $('.profile').click(function () {
        var str = $(this).text();
        $('#loading-content').load('dataSearch.php?' + str, hideLoader);
    });
});