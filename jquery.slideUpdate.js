/*
* jquery.slideUpdate v0.1
* Animated HTML element updating
*
* https://github.com/KurtPreston/jquery.slideUpdate
*/

(function($, doc, win) {
  "use strict";

  function SlideUpdate(el, opts, callback){
    this.$el = $(el);

    this.defaults = {
      text: '',
      html: '',
      selector: '',
      duration: 500
    }

    this.opts = $.extend(this.defaults, opts, {
      text: this.$el.data('slideupdate-text'),
      html: this.$el.data('slideupdate-html'),
      selector: this.$el.data('slideupdate-selector'),
      duration: this.$el.data('slideupdate-duration')
    });

    this.callback = callback;

    this.init();
  }

  $.fn.slideUpdate = function(opts, callback) {
    return this.each(function() {
      new SlideUpdate(this, opts, callback);
    });
  }

  SlideUpdate.prototype.init = function() {
    // Load in options
    var selector = this.opts.selector;
    var html = this.opts.html;
    var text = this.opts.text;
    var duration = this.opts.duration;
    var callback = this.callback;

    var parentElement = this.$el;
    parentElement.wrapInner("<div class='slideupdate'></div>");
    var oldElement = parentElement.find('.slideupdate');

    // Create new element
    var newElement;
    if (selector != '') {
      newElement = $(selector).clone();
    } else if (html != '') {
      newElement = oldElement.clone();
      newElement.html(html);
    } else if (text != '') {
      newElement = oldElement.clone();
      newElement.text(text);
    }
    newElement.hide();

    // Swap out old element for new
    oldElement.after(newElement);
    newElement = oldElement.next();
    oldElement.slideUp({
      duration: duration,
      complete: function() {
        // Remove the 'slideupdate' div
        this.remove();
      }
    });
    newElement.slideDown({
      duration: duration,
      complete: function() {
        // Remove the 'slideupdate' div
        $(this).replaceWith(newElement.html());

        // Perform callback on parent element
        $.proxy(callback, parentElement)();
      }
    });
  };
})(jQuery, document, window);
