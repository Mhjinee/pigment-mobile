$(function(){
    $('.more').click(function(){
        $('.pany').css('display','block');
        $('.more').css('display','none');
        $('.less').css('display','block');
    });
    $('.less').click(function(){
        $('.pany').css('display','none');
        $('.less').css('display','none');
        $('.more').css('display','block');
    });
});