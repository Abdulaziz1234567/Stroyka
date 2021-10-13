$(function () {
    $(".fa-bars").click(function () {
        $(".header_menu-links ul").css({
            transform: 'translateY(0)'
        })
        $(".header_background").css({
            transform: 'translate(0, 0) skew(0)'
        })
        $(".fa-times").css({
            transform: 'translateX(0) rotate(0)'
        })
        $(".header_menu-linke1").css({
            transform: 'translateX(0)'
        })
        $(".header_menu-linke2").css({
            transform: 'translate(0, 0)'
        })
        $(".header_menu-linke3").css({
            transform: 'translateY(0)'
        })
        $(".header_menu-linke4").css({
            transform: 'translateX(0)'
        })
       
    })
    $(".header_background").click(function () {
        $(".header_menu-links ul").css({
            transform: 'translateY(-350%)'
        })
        $(".header_background").css({
            transform: 'translate(100%, 100%) skew(-45deg)'
        })
        $(".fa-times").css({
            transform: 'translateX(5000%) rotate(10000deg)'
        })
        $(".header_menu-linke1").css({
            transform: 'translateX(800%)'
        })
        $(".header_menu-linke2").css({
            transform: 'translate(-700%, 200%)'
        })
        $(".header_menu-linke3").css({
            transform: 'translateX(800%)'
        })
        $(".header_menu-linke4").css({
            transform: 'translateX(800%)'
        })
    })
    $(".header_menu-links ul a").click(function () {
        $(".header_background").css({
            transform: 'translate(100%, 100%) skew(-45deg)'
        })
    })
    $(".fa-times").click(function () {
        $(".header_background").css({
            transform: 'translate(100%, 100%) skew(-45deg)'
        })
        $(".header_menu-links ul").css({
            transform: 'translateY(-350%)'
        })
        $(".fa-times").css({
            transform: 'translateX(5000%) rotate(10000deg)'
        })
        $(".header_menu-linke1").css({
            transform: 'translateX(800%)'
        })
        $(".header_menu-linke2").css({
            transform: 'translate(-700%, 200%)'
        })
        $(".header_menu-linke3").css({
            transform: 'translateY(800%)'
        })
        $(".header_menu-linke4").css({
            transform: 'translateX(800%)'
        })
    })
})