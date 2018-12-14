function offCanvasToggle() {
  $('.navbar-burger').click(function() {
    $('.off-canvas').toggleClass('is-visible');
    $('.canvas').toggleClass('is-pushed');
  });
}

$(function() {
  offCanvasToggle();
});
