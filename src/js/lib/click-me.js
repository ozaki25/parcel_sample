$(function() {
  // variables
  const $button = $('#click-me');

  // listeners
  $button.on('click', onClick);

  // functions
  function onClick() {
    const color = ((Math.random() * 0xffffff) | 0).toString(16);
    const randomColor = `#${('000000' + color).slice(-6)}`;
    $(this).css('background-color', randomColor);
  }
});
