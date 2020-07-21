
$(function(){
    // Fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos,introH);

    $(window).on("scroll resize",function(){
        introH = intro.innerHeight();
        scrollPos=$(this).scrollTop();

        checkScroll(scrollPos,introH);

    })

    function checkScroll(scrollPos,introH){
        if(scrollPos>introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
})

   

    // Smooth scroll
    $("[data-scroll]").on("click",function(event){
        event.preventDefault(); // отмен станд повед ссылки

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html,body").animate({
            scrollTop: elementOffset - 70

        },700);

    });

    // navToggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on('click',function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });

    // rewiews https://kenwheeler.github.io/slick/
    var slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots:true
      });


