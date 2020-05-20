$(document).ready(function(){
    $('div a').click(function(){
        $('a').removeClass("active");
        $(this).addClass("active");
    })
})