$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.banner img').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (scrollTop) / elementHeight;
      }
    });
  });
  