$(document).ready(function() {
  $.fn.tooltip = function() {
    return this.each(function() {
      var $tooltip_message = $("<div class='tooltip_message'></div"),
          changeTipPosition = function(event) {
            var xPos = event.pageX - 20,
                yPos = event.pageY - 45;
            $tooltip_message.css({
              transform: 'translate3d(' + xPos + 'px,' + yPos + 'px, 0)'
            });
          },
          showTip = function(event) {
            var popup_content = $(this).attr("data-popup-content");
            hideTip();
            setTipContent(popup_content);
            changeTipPosition(event);
          },
          hideTip = function() {
            $(".tooltip_message").remove();
          },
          setTipContent = function(popup_content) {
            $tooltip_message
              .html(popup_content)
              .appendTo('body');
          };

      $(this).bind({
        mousemove: changeTipPosition,
        mouseenter: showTip,
        mouseleave: hideTip
      });
    });
  };
});
