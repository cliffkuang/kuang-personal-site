$(function() {

    $('#wave-picture').waypoint(function() {
        console.log('Waypoint!');
        $('#first-text-fade-in').addClass('post_text-box--fade-in');

    }, {
        offset: '40%'

    });

    $('#forrest-picture').waypoint(function() {
        console.log('Waypoint!');
        $('#second-text-fade-in').addClass('post_text-box--fade-in');

    }, {
        offset: '40%'

    });

    $('.single-item').slick({
        infinite: true,
        speed: 800,
        fade: true,
    });


});
