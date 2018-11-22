////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Do after resize
function doneResizing(){
//bigGalleryWidth();
sliderHeight(),centerVerticalNavigation()}function centerVerticalNavigation(){768<$(document).width()&&$(".nav-btn-only .navigation-links").css("padding-top",$(window).height()/2-$(".navigation .container").height()-$(".nav-btn-only .navigation-links").height()/2-40)}function sliderHeight(){if($(".hero-section").find(".container").height()>$(window).height()){var e=$("nav.navigation").height();$(".hero-section .wrapper .hero-title").css("padding-top",e+"px"),$(".hero-section").height($(".hero-section").find(".container").height()+e),$(".hero-section .owl-stage-outer").height($(".hero-section").children(".wrapper").height()+e),console.log("bigger")}else $(".hero-section").height($(window).height()),$(".hero-section .owl-stage-outer").height($(window).height()),console.log("smaller");
//$(".hero-section").css( "min-height", $(window).height() + "px" );
//$(".hero-section .owl-stage-outer").css( "min-height", $(window).height() + "px" );
}function bigGalleryWidth(){$(document).width()<768&&$(".big-gallery .slide .container").width($(document).width())}function initializeOwl(){$(".owl-carousel").length&&$(".owl-carousel").each(function(){var e=parseInt($(this).attr("data-owl-items"),10);e||(e=1);var t=parseInt($(this).attr("data-owl-nav"),2);t||(t=0);var a=parseInt($(this).attr("data-owl-dots"),2);a||(a=0);var o=parseInt($(this).attr("data-owl-center"),2);o||(o=0);var i=parseInt($(this).attr("data-owl-loop"),2);i||(i=0);var r=parseInt($(this).attr("data-owl-margin"),2);r||(r=0);var s=parseInt($(this).attr("data-owl-auto-width"),2);s||(s=0);var n=$(this).attr("data-owl-nav-container");n||(n=0);var l=$(this).attr("data-owl-autoplay");l||(l=0);var d=$(this).attr("data-owl-fadeout");d=d?"fadeOut":0,$(this).owlCarousel({navContainer:n,animateOut:d,autoplaySpeed:2e3,autoplay:l,autoheight:1,autoWidth:s,items:e,center:o,loop:i,margin:r,nav:t,dots:a,autoHeight:!0,navText:[],responsive:{0:{items:1,autoWidth:!1,center:!1},768:{autoWidth:s,items:e,center:o}}})})}function simpleMap(e,t,a,o){var i="map";if("light"==o)var r=[{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#d3d3d3"}]},{featureType:"transit",stylers:[{color:"#808080"},{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#b3b3b3"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:1.8}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#d7d7d7"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#ebebeb"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#a7a7a7"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#efefef"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#696969"}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#737373"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#d6d6d6"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#dadada"}]}];else"dark"==o&&(r=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]);var s,n={zoom:13,center:new google.maps.LatLng(e,t),disableDefaultUI:!0,scrollwheel:!1,styles:r},l=document.getElementById(i),d=new google.maps.Map(l,n),c=new google.maps.Marker({position:new google.maps.LatLng(e,t),map:d,icon:a})}function equalHeight(e){var t=0,a=0,o=new Array,i,r=0;$(e).find(".equal-height").each(function(){if(i=$(this),$(i).height("auto"),topPostion=i.position().top,a!=topPostion){for(currentDiv=0;currentDiv<o.length;currentDiv++)o[currentDiv].height(t);o.length=0,// empty the array
a=topPostion,t=i.height(),o.push(i)}else o.push(i),t=t<i.height()?i.height():t;for(currentDiv=0;currentDiv<o.length;currentDiv++)o[currentDiv].height(t)})}var resizeId;$(document).ready(function(o){"use strict";
//bigGalleryWidth();
if(sliderHeight(),0<o(".read-more").length&&o(".read-more").each(function(){var e=parseInt(o(this).attr("data-read-more-collapse-height"),10);e||(e=200);var t=o(this).attr("data-read-more-more-link");t||(t="Read more");var a=o(this).attr("data-read-more-less-link");a||(a="Read less"),o(this).readmore({speed:500,collapsedHeight:e,moreLink:'<div class="read-more-btn"><a href="#" class="btn btn-framed btn-primary btn-light-frame btn-rounded">'+t+"</a></div>",lessLink:'<div class="read-more-btn"><a href="#" class="btn btn-framed btn-primary btn-light-frame btn-rounded">'+a+"</a></div>"})}),
//  Smooth Scroll
o('.main-nav a[href^="#"], a[href^="#"].scroll').on("click",function(e){e.preventDefault();var t=this.hash,a=o(t);o("html, body").stop().animate({scrollTop:a.offset().top},2e3,"swing",function(){window.location.hash=t})}),o(".nav-btn").on("click",function(){o(".page-wrapper").toggleClass("show-navigation")}),o(".navigation-links, .hero-section, #page-content, #page-footer").on("click",function(){o(".page-wrapper").removeClass("show-navigation")}),o(window).scroll(function(){1<o(window).scrollTop()?o(".navigation").addClass("show-background"):o(".navigation").removeClass("show-background")}),
//  Responsive Video Scaling
0<o(".video").length&&o(this).fitVids(),
//  Magnific Popup
0<o(".image-popup").length&&o(".image-popup").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-fade",overflowY:"scroll"}),0<o(".video-popup").length&&o(".video-popup").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade",overflowY:"scroll",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"}}),
//  Scroll Reveal
768<o(window).width()&&o("[data-scroll-reveal]").length&&(window.scrollReveal=new scrollReveal),o(".count-down").length){var e=parseInt(o(".count-down").attr("data-countdown-year"),10),t=parseInt(o(".count-down").attr("data-countdown-month"),10)-1,a=parseInt(o(".count-down").attr("data-countdown-day"),10);o(".count-down").countdown({until:new Date(e,t,a),padZeroes:!0})}
//  Form Validation
o("form .btn[type='submit']").on("click",function(){var t=o(this),a=o(this).closest("form");t.prepend("<div class='status'></div>"),a.validate({submitHandler:function(){return o.post("assets/php/email.php",a.serialize(),function(e){
//console.log(response);
//$('#form-subscribe .form-contact-status').html(response);
t.find(".status").append(e),a.addClass("submitted")}),!1}})}),o("[data-background-color-custom]").each(function(){o(this).css("background-color",o(this).attr("data-background-color-custom"))}),o("body").hasClass("links-hover-effect")&&o("a, button").each(function(){if(!(o(this).hasClass("image-popup")||o(this).hasClass("video-popup")||o(this).hasClass("arrow-up")||o(this).hasClass("image")||o(this).hasClass("no-hover-effect"))){o(this).addClass("hover-effect");var e=o(this).html();o(this).text(""),o(this).append("<span><div class='hover-element'>"+e+"</div><div class='hover-element'>"+e+"</div></span>")}}),o("body").hasClass("has-loading-screen")?Pace.on("done",function(){o(".page-wrapper").addClass("loading-done"),setTimeout(function(){o(".page-wrapper").addClass("hide-loading-screen")},500),o.each(o("#page-header .animate"),function(e){var t=o(this);setTimeout(function(){t.addClass("show")},150*e)})}):o.each(o("#page-header .animate"),function(e){var t=o(this);setTimeout(function(){t.addClass("show")},150*e)}),o(".bg-transfer").each(function(){o(this).css("background-image","url("+o(this).find("img").attr("src")+")")}),o('.modal-body a[data-toggle="tab"]').on("shown.bs.tab",function(e){var t=o(o(this).attr("href")).find(".one-item-carousel");t.hasClass("owl-carousel")||o(t).owlCarousel({autoheight:1,loop:0,margin:0,items:1,nav:0,dots:1,autoHeight:!0,navText:[]})})}),
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On Load
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function(){if(768<$(document).width())for(var e=$(".container"),t=0;t<e.length;t++)equalHeight(e);initializeOwl(),centerVerticalNavigation()}),$(window).resize(function(){clearTimeout(resizeId),resizeId=setTimeout(doneResizing,250)}),$(document).ready(function(){$("#form-wel").on("submit",function(e){e.preventDefault();var t=$(this);t.parsley().validate(),t.parsley().isValid()&&alert("valid")})});