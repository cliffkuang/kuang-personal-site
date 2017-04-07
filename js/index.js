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

    // $('.single-item').slick({
    //     dots: true,
    //     speed: 500,
    //     fade: true,
    // });


});
