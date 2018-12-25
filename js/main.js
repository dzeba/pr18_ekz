var $grid = $('.grid').isotope({
    itemSelector: '.image',
    layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {

        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');

    });
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false

});
$('.slider1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

});


var map ="";
function initMap() {
    var uluru = {lat: 47.251, lng: -123.125};
    map = new google.maps.Map(document.getElementById('map'), {zoom: 14, center: uluru});
    var marker = new google.maps.Marker({
        position: uluru,
        icon: "img/marker.png",
        map: map
    })
}

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);


$('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

});

