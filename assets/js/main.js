$(document).ready(function() {

    $(document).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });

    // navbar toggle for mobile
    $(document).on("click", ".navbar-toggler", function() {
        $(".header").toggleClass("deskv");
    })

    // js for gallery images
    $(document).on("click", ".viewImg", function() {
        var imgUrlcls = $(this).attr("data-id");
        // alert(imgUrlcls);
        var imgUrl = $("." + imgUrlcls).attr("src");
        $('.modalImg').attr('src', imgUrl);
    })

    // testinomial slider
    var owl = $(".testiSlider");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true
    });

    // gallery slider
    var owl = $(".gallerySlider");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true
    });


})