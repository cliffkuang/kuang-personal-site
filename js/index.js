$(function() {

    $('#first-text-fade-in').waypoint(function() {
        console.log('Waypoint!');
        $('#first-text-fade-in').addClass('post_text-box--fade-in');

    }, {
        offset: '60%'

    });

    $('#second-text-fade-in').waypoint(function() {
        console.log('Waypoint!');
        $('#second-text-fade-in').addClass('post_text-box--fade-in');

    }, {
        offset: '60%'

    });
});
