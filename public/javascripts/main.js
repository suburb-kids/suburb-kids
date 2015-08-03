(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sectionJS = {
  references: function() {
    $('.img-wrap a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
};


(function($) {
  function loadSection(locationHash, options) {

    var locationHash = location.hash || locationHash;

    $('section, header a').removeClass('active');
    $(locationHash)
      .add('a[href="' + locationHash + '"]')
      .addClass('active');

    // Exec section specific javascript
    var sectionFunction = sectionJS[locationHash.substr(1)];

    if (sectionFunction && typeof(sectionFunction) === 'function') {
      sectionFunction();
    }

    if (!(options && options.initial)) {
      if ($('#nav-toggle').is(':visible')) {
        $(window).scrollTo('.header-inner', 284);
      } else {
        $(window).scrollTo(0, 284);
      }
    }
  }


  $(window).on('hashchange', function(e) {
    e.preventDefault();
    loadSection();
  });


  $(function() {
    loadSection('#home', { initial: true });
    $('body').css('visibility', 'visible');

    var nav = responsiveNav('nav.nav-collapse', {
      animate: true,
      transition: 284,
      customToggle: 'nav-toggle'
    });
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvamF2YXNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgc2VjdGlvbkpTID0ge1xuICByZWZlcmVuY2VzOiBmdW5jdGlvbigpIHtcbiAgICAkKCcuaW1nLXdyYXAgYScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5cbihmdW5jdGlvbigkKSB7XG4gIGZ1bmN0aW9uIGxvYWRTZWN0aW9uKGxvY2F0aW9uSGFzaCwgb3B0aW9ucykge1xuXG4gICAgdmFyIGxvY2F0aW9uSGFzaCA9IGxvY2F0aW9uLmhhc2ggfHwgbG9jYXRpb25IYXNoO1xuXG4gICAgJCgnc2VjdGlvbiwgaGVhZGVyIGEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgJChsb2NhdGlvbkhhc2gpXG4gICAgICAuYWRkKCdhW2hyZWY9XCInICsgbG9jYXRpb25IYXNoICsgJ1wiXScpXG4gICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgLy8gRXhlYyBzZWN0aW9uIHNwZWNpZmljIGphdmFzY3JpcHRcbiAgICB2YXIgc2VjdGlvbkZ1bmN0aW9uID0gc2VjdGlvbkpTW2xvY2F0aW9uSGFzaC5zdWJzdHIoMSldO1xuXG4gICAgaWYgKHNlY3Rpb25GdW5jdGlvbiAmJiB0eXBlb2Yoc2VjdGlvbkZ1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2VjdGlvbkZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyAmJiBvcHRpb25zLmluaXRpYWwpKSB7XG4gICAgICBpZiAoJCgnI25hdi10b2dnbGUnKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG8oJy5oZWFkZXItaW5uZXInLCAyODQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvKDAsIDI4NCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvYWRTZWN0aW9uKCk7XG4gIH0pO1xuXG5cbiAgJChmdW5jdGlvbigpIHtcbiAgICBsb2FkU2VjdGlvbignI2hvbWUnLCB7IGluaXRpYWw6IHRydWUgfSk7XG4gICAgJCgnYm9keScpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICB2YXIgbmF2ID0gcmVzcG9uc2l2ZU5hdignbmF2Lm5hdi1jb2xsYXBzZScsIHtcbiAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICB0cmFuc2l0aW9uOiAyODQsXG4gICAgICBjdXN0b21Ub2dnbGU6ICduYXYtdG9nZ2xlJ1xuICAgIH0pO1xuICB9KTtcbn0pKGpRdWVyeSk7XG4iXX0=
