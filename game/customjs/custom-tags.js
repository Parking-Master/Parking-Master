document.createElement('url');
var customT_styles = document.createElement('link');
customT_styles.rel = 'stylesheet';
customT_styles.type = 'text/css';
customT_styles.href = 'https://cdn.jsdelivr.net/gh/Parking-Master/Parking-Master/game/customjs/custom-tags.css';
document.head.appendChild(customT_styles);
check_text$$ = setTimeout(function(){
document.documentElement.innerHTML = document.documentElement.innerHTML.replace('<url' + document.querySelector('url').attributes + '>', '<url' + document.querySelector('url').attributes + '></url;');
document.querySelector('url').innerText = document.querySelector('url').getAttribute('text');
document.querySelector('url').addEventListener('click', function(){
  var url_loc = document.querySelector('url').getAttribute('to');
  window.location.href = url_loc;
});
if (document.querySelector('url').innerText === document.querySelector('url').getAttribute('text')) {
  window.clearInterval(check_text$$);
}
}, 1);
