jquery.slideUpdate
==================

A simple jQuery plugin for animated field updating.  It will slide out the previous value, and slide in the new one.

Examples
--------

```
  // Replace #some-element text with 'New text'
  // Animation lasts 1000ms (1s)
  $('#some-element').slideUpdate({text: 'New text', duration: 1000});
  
  // Replace #some-element with the html '<p>New text</p>'
  $('#some-element').slideUpdate({html: '<p>New text</p>'});
  
  // Replace #some-element with the div #other-element
  $('#some-element').slideUpdate({selector: '#other-element'});
```
