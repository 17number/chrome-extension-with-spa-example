if (document.getElementById('from-background'))
  document.getElementById('from-background').remove();
document.body.firstElementChild.insertAdjacentHTML(
  'afterEnd',
  `<button id="from-background">hello from background: ${Math.random()}</button>`
);
