/*
G Website Snapper v1.0.0
Developed by Blaine Miller
Built using Google Pagespeed API & jQuery
*/
		
var GWSConfig = {
    selector: "#links a img", // jquery selectory for img-tags
    device: "desktop", //(desktop or mobile) device type for rendering screenshots of the website 
    fadeIn: true, //wether to fade image in once loaded
    fadeInDuration: 1000, //fade in animation duration
    ClientStorage: true //wether to have the client cache the base64 strings for the specefied urls indefinitly.
};

$(document).ready(function() {
    $(GWSConfig.selector).each(function() {
        var a = $(this);
        if (GWSConfig.ClientStorage) {
            var b = localStorage.getItem("GWSI" + $(this).data("src"));
            if (null !== b) if (GWSConfig.fadeIn) a.fadeOut(function() {
                a.attr("src", b).fadeIn(GWSConfig.fadeInDuration);
            }); else a.attr("src", b); else $.getJSON("https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&strategy=" + GWSConfig.device + "&url=" + encodeURIComponent($(this).data("src")), function(b) {
                if (GWSConfig.fadeIn) a.fadeOut(function() {
                    a.attr("src", "data:image/jpeg;base64," + b.screenshot.data).fadeIn(GWSConfig.fadeInDuration);
                }); else a.attr("src", "data:image/jpeg;base64," + b.screenshot.data);
                if (GWSConfig.ClientStorage) localStorage.setItem("GWSI" + a.data("src"), "data:image/jpeg;base64," + b.screenshot.data);
            });
        } else $.getJSON("https://www.googleapis.com/pagespeedonline/v1/runPagespeed?screenshot=true&strategy=" + GWSConfig.device + "&url=" + encodeURIComponent($(this).data("src")), function(b) {
            if (GWSConfig.fadeIn) a.fadeOut(function() {
                a.attr("src", "data:image/jpeg;base64," + b.screenshot.data).fadeIn(GWSConfig.fadeInDuration);
            }); else a.attr("src", "data:image/jpeg;base64," + b.screenshot.data);
            if (GWSConfig.ClientStorage) localStorage.setItem("GWSI" + a.data("src"), "data:image/jpeg;base64," + b.screenshot.data);
        });
    });
});
