document.createElement('url');
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
