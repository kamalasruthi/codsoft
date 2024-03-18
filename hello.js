$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleclass('fa-times');
        $('.navbar').toggleclass('nav-toggle');
    });
    $(window).on('load scroll',function(){
        $('#menu').removeclass('fa-times');
        $('.navbar').removeclass('nav-toggle');

    });
});