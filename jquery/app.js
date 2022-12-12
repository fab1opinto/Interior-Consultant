//função exibir e ocultar active
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

//função esconder container
$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".container").toggle();
    });
});
