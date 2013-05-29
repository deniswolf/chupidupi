require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
//    console.log(app);
//    console.log('Running jQuery %s', $().jquery);
    $('document').ready(function(){
        setTimeout(function () {
            $('#chupi').removeClass().addClass('animated bounceIn');
        }, 300);

        setTimeout(function () {
            $('#dupi').removeClass().addClass('animated lightSpeedIn');
        }, 1300);

    });
});