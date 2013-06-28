/*
* jquery.slideUpdate v0.1
* Animated HTML element updating
*
* https://github.com/KurtPreston/jquery.slideUpdate
*/

(function($, doc, win) {
  "use strict";

  function SlideUpdate(el, opts){
    this.$el = $(el);

    this.defaults = {
      text: '',
      html: '',
      selector: ''
    }

    this.opts = $.extend(this.defaults, opts, {
      text: this.$el.data('slideupdate-text'),
      html: this.$el.data('slideupdate-html'),
      selector: this.$el.data('slideupdate-selector')
    });

    this.init();
  }

  $.fn.jquery.slideUpdate = function(opts) {
    return this.each(function() {
      new SlideUpdate(this, opts);
    });
  }

  SlideUpdate.prototype.init = function() {
    var oldElement = $(this);
    var newElement;

    if (selector != '') {
      newElement = $(selector).clone()
    } else if (html != '') {
      newElement = oldElement.clone()
      newElement.html(html);
    } else if (text != '') {
      newElement = oldElement.clone()
      newElement.text(text);
    }
    newElement.hide();

    oldElement.after(newElement);
    newElement = oldElement.next();
    oldElement.slideDown(500);
    newElement.slideUp(500);
  };
})(jQuery, document, window);
