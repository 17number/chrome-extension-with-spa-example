(() => {
  'use strict';
  if (document.getElementById('from-content'))
    document.getElementById('from-content').remove();
  document.body.firstElementChild.insertAdjacentHTML(
    'afterEnd',
    `<button id="from-content">hello from content: ${Math.random()}</button>`
  );
})();
