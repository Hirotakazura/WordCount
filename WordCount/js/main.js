(function() {
  'use strict';


  let comment = document.getElementById('comment');
  let label = document.getElementById('label');

  let LIMIT = 20;
  let WARNING = 10;

  label.innerHTML = LIMIT;

  comment.addEventListener('keyup', function() {
    let remaining = LIMIT - this.value.length;
    label.innerHTML = remaining;
    label.className = remaining < WARNING ? 'warning' : '';
    // if (remaining < WARNING) {
    //   label.className = 'warning';
    // } else {
    //   label.className = '';
    // }
  });

})();
