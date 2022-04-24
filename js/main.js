//transição navbar scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.topo').addClass("sticky")
        } else {
            $('.topo').removeClass("sticky")
        }
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:8,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
