$(document).ready(function(){
    $('.hamMenu').on('click', function(){
        $(this).hide();
        $('.cancelMenu').show();
    })

    $('.cancelMenu').on('click', function(){
        $(this).hide();
        $('.hamMenu').show();
    })

    $('.menu').click(function(){
        $('#links').toggle(1000);
    })
})