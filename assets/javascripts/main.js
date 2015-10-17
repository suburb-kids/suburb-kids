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

sectionJS['mail-sent'] = function() {
  window.setTimeout(function() {
    window.location.href = '/';
  }, 5000);
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
