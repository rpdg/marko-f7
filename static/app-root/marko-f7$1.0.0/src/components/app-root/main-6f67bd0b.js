$_mod.def("/marko-f7$1.0.0/src/components/app-root/main", function(require, exports, module, __filename, __dirname) { var Framework7 = require('/framework7$1.6.0/dist/js/framework7'/*'framework7'*/)
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
});