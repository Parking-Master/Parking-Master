// initialize custom DOM elements
var doc = document;
var docEl = doc.documentElement;
docEl.html = doc.documentElement.innerHTML;

var build = function(elm, htm){
  var $xz = document.createElement(elm);
  $xz.innerHTML=htm;
  return $xz;
};
doc.createElement('d');
var ds_ = document.createElement('style');
ds_.innerText='d { border-bottom:1px solid #222; }';
setInterval(function(){
var dr = document.createElement('dr');
docEl.html.replace('<dr>', '<br><br>');
docEl.html.replace('<dr/>', '<br><br>');
docEl.html.replace('<dr />', '<br><br>');
},100);
//var allDR = document.querySelectorAll('dr');
/*for (var i=0;allDR.length<i;i++){
docEl.html.replace('<dr ' + allDR[i].attributes + '>', '<br ' + allDR[i].attributes + '><br>');
docEl.html.replace('<dr ' + allDR[i].attributes + '/>', '<br ' + allDR[i].attributes + '><br>');
docEl.html.replace('<dr ' + allDR[i].attributes + ' />', '<br ' + allDR[i].attributes + '><br>');
}*/
document.head.appendChild(ds_);
securityjs.auth('ip', '134.56.126.103', '64.134.172.10');
document.getElementById('start-a-server').addEventListener('click', function(){
  var opt = document.createElement('div');
  opt.innerHTML='<form><p>Availability:</p><input id="av_" type="radio" name="av_" onmouseup="if(document.getElementById(\'av_\').checked===true){document.getElementById(\'av_\').checked=false;}"><label for="av_">Local</label><br><p>Authorization</p><input id="at_" type="radio" name="at_"><label for="at_">Password</label><hr><a style="color:#333;font-size:1.5vw;" onclick="next1();" href="#">Next</a></form>';
  swal({
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVrgUk8qkCn5Fer46maNOxyfWphRH1I1N1A&usqp=CAU',
    title: 'Options',
    buttons: false,
    content: opt
  });
(function(rootElement) {
  if(!rootElement) rootElement = document;
  if(!window.radioChecked) window.radioChecked = {};
  window.radioClick = function(e) {
    const obj = e.target, name = obj.name || "unnamed";
    if(e.keyCode) return obj.checked = e.keyCode!=32;
    obj.checked = window.radioChecked[name] != obj;
    window.radioChecked[name] = obj.checked ? obj : null;
  }
  rootElement.querySelectorAll("input[type='radio']").forEach( radio => {
    radio.setAttribute("onclick", "radioClick(event)");
    radio.setAttribute("onkeyup", "radioClick(event)");
  });
})();
document.querySelector('.swal-icon').style.width = '15%';
});
function next1() {
  var ifLocal = document.getElementById('av_').checked===true;
  if (document.getElementById('at_').checked===true) {
    swal({
      title: 'Create a password',
      text: 'When you anyone enter\'s your server, they\'ll be prompted to enter this password.',
      content: 'input'
    }).then(function(val){
      if (ifLocal) {
        startLocal(val)
      } else {
        startPublic(val);
      }
    });
  } else {
    if (document.getElementById('av_').checked!==true || document.getElementById('av_').checked===false) {
      startPublic();
    } else {
      startLocal();
    }
  }
}
function startLocal(p){
if (p) {
location.href = 'server.html?server=' + localStorage['ip'] + '&p=' + p;
} else {
location.href = 'server.html?server=' + localStorage['ip']; 
}
}
function startPublic(p) {
if(p){
var rd = function() {
    return Math.random().toString(36).substr(2);
};

var tkn = function() {
    return rd() + rd();
};
location.href='server.html?server=' + tkn() + '&p=' + p;
} else {
var rd = function() {
    return Math.random().toString(36).substr(2);
};

var tkn = function() {
    return rd() + rd();
};
location.href='server.html?server=' + tkn(); 
}
}
newb__ = setInterval(function(){
  if (document.querySelector('.wpcc-btn').style.width==='100px'){
    clearInterval(newb__);
    return;
  } else {
  document.querySelector('.wpcc-btn').style.width = '100px';
  var newcB = document.createElement('a');
  newcB.className = 'wpcc-btn';
  newcB.tabindex = '0';
  newcB.innerText = 'Clear';
  newcB.style.width = '100px';
  newcB.style.position = 'relative';
  newcB.style.left = '150px';
  newcB.id = 'clearC';
  document.querySelector('.wpcc-compliance').appendChild(newcB);
  document.getElementById('clearC').addEventListener('click', function(){localStorage.clear();location.reload();});

  }
},100);
(function(){
time_remain_check__ = setInterval(function(){
if (localStorage['time_remain']) {
setInterval(function(){
  localStorage.setItem('time_remain', document.getElementById('time-remain-before').value);
}, 10);
document.getElementById('time-remain-before').value = localStorage['time_remain'];
document.getElementById('time-remain-before').stepUp(-1);

document.getElementById('time-remain').value = localStorage['time_remain'];
if (document.getElementById('time-remain').value === '0') {
    deleteLocalLobbies();
    document.getElementById('time-remain-before').value = '600';
    localStorage.setItem('time_remain', '600');
}
} else {
    localStorage.setItem('time_remain', '600');
}
}, 1000);
})();
function deleteLocalLobbies() {
  localStorage.setItem('current_lobbies', '');
    $.get("index.html", function(data, status){ 
    	$("body").html(data); 
    }); 
}
document.querySelector('button').addEventListener('click', function(){
document.getElementById('click-sound-mp3').currentTime = 0;
document.getElementById('click-sound-mp3').play();
});
document.getElementById("server_address").href = location.protocol + "//" + location.host + "/";
  (function(){
  document.getElementById("user").innerHTML = 'Not updated';
if (localStorage["user"])
{
    var user = localStorage["user"];
    document.getElementById("user").innerHTML = user;
}
else {

}

document.getElementById("save").addEventListener("click", function()
    {
        var user = document.getElementById("user").innerHTML;
        localStorage.setItem("user", user);
    } , false);
  })();
(function(){
var characters = [
  "a",
  "A",
  "b",
  "B",
  "c",
  "C",
  "d",
  "D",
  "e",
  "E",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "i",
  "I",
  "j",
  "J",
  "l",
  "L",
  "m",
  "M",
  "n",
  "N",
  "o",
  "O",
  "p",
  "P",
  "q",
  "Q",
  "r",
  "R",
  "s",
  "S",
  "t",
  "T",
  "u",
  "U",
  "v",
  "V",
  "w",
  "W",
  "x",
  "X",
  "y",
  "Y",
  "z",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "_"
];
var randomCharacter1 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter2 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter3 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter4 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter5 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter6 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter7 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter8 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter9 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter10 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter11 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter12 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter13 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter14 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter15 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter16 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter17 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter18 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter19 = characters[Math.floor(Math.random() * characters.length)];
var randomCharacter20 = characters[Math.floor(Math.random() * characters.length)];

var randomCharacter = randomCharacter1 + randomCharacter2 + randomCharacter3 + randomCharacter4 + randomCharacter5 + randomCharacter6 + randomCharacter7 + randomCharacter8 + randomCharacter9 + randomCharacter10 + randomCharacter11 + randomCharacter12 + randomCharacter13 + randomCharacter14 + randomCharacter15 + randomCharacter16 + randomCharacter17 + randomCharacter18 + randomCharacter19 + randomCharacter20;
var token = document.getElementById("user-token");
if (!localStorage['token']) {
token.innerText = randomCharacter;
return;
} else {
token.innerText = localStorage['token'];
}
})();
  (function(){
    var url = window.location.href;
    if (url.includes('?javascript=') || url.includes('&javascript=')) {
    const queryString = window.location.search;
    const commandurl = new URLSearchParams(queryString);    
    const command = commandurl.get('javascript');
    var commscripts = document.createElement('script');
    commscripts.innerHTML = command;
    document.body.appendChild(commscripts);
    }
})();
(function() {
        var pubnub = new PubNub({
            publishKey: 'pub-c-1287ae95-a235-4e93-a918-c7eef82de787',
            subscribeKey: 'sub-c-638fa8a4-fded-11eb-b38c-d287984b4121'
        });
        function $(id) {
            return document.getElementById(id);
        }
        var box = $('box'),
            input = $('input'),
            channel = '10chat-demo';
        pubnub.addListener({
            message: function(obj) {
                box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '' + box.innerHTML
            }
        });
        pubnub.subscribe({
            channels: [channel]
        });
document.getElementById('create-lobby').addEventListener("click", function(){
function containsOnlyKahmerCharakter(str) {
  return str.split('').some(function(char) {
    var charCode = char.charCodeAt('0')
    return (
      charCode >= 0x1780 && charCode <= 0x17FF 
      || charCode >= 0x19e0 && charCode <= 0x19FF
    );
  });
}
function createLobbyName(){
  var input = build('div', '<input />');
    swal({
    icon: "info",
    title: "Enter lobby name",
    content: 'input',
    allowOutsideClick: false,
    buttons: ['Cancel', 'Next →']
    }).then(function(val){
    var lobby_name = val;
    if (lobby_name.length < 6) {
        swal({
        icon: "info",
        title: "Error",
        text: "Lobby name must be over 6 characters."
        }).then(function(){swal.close();setTimeout(createLobbyName,200);});//
    } else if (val === " ") {
        swal({
        icon: "info",
        title: "Error",
        text: "Lobby name cannot contain only whitespace."
        }).then(function(){swal.close();setTimeout(createLobbyName,200);});
    } else if (val.includes(" ")) {
        swal({
        icon: "info",
        title: "Error",
        text: "Lobby name cannot contain whitespace."
        }).then(function(){swal.close();setTimeout(createLobbyName,200);});
    } else if (val.length > 20) {
        swal({
        icon: "info",
        title: "Error",
        text: "Lobby name cannot be over 20 characters."
        }).then(function(){swal.close();setTimeout(createLobbyName,200);});
        var slashback = '\\';
    } else if (containsOnlyKahmerCharakter(val)==true || val.includes('<') || val.includes('>') || val.includes('/') || val.includes(slashback) || val.includes("'") || val.includes('"') || val.includes('(') || val.includes(')') || val.includes('[') || val.includes(']') || val.includes('|')) {
        swal({
        icon: "info",
        title: "Error",
        text: "Invalid character."
        }).then(function(){swal.close();setTimeout(createLobbyName,200);});
    } else {
        document.getElementById('lobby-name').innerHTML = lobby_name;
        createLobbyConfirm();
    }
function createLobbyConfirm() {
                pubnub.publish({
                    channel: channel,
                    message: "lobby-created()"
                });
    var lobby_window = document.createElement('iframe');
    const lobby_name = document.getElementById("lobby-name").innerHTML;
    if (document.getElementById('lobby-name').innerHTML === '') {
      document.getElementById('lobby-name').innerHTML = 'Lobby';
    }
    lobby_window.src = "https://external-testing-3.w3spaces.com/gameLobby.html?lby_name=" + lobby_name + '&new_lobby=true';
    lobby_window.style = "border: 0; position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: 0; z-index: 9999; width: 100%; height: 100%;";
    lobby_window.frameborder = "0";
    document.body.appendChild(lobby_window);
}
    });
}
createLobbyName();
         checked_lobby_foo___ = true;
});
                setInterval(function(){
                var box = document.getElementById('box').innerHTML;
                if (box.includes('lobby-created()')) {        
                  get_lobby__ = setInterval(function() {
                    if (localStorage["current_lobbies"]) {
                      var current_lobbies = localStorage["current_lobbies"];
                      document.getElementById("current_lobbies").innerHTML = current_lobbies;
                      var lobby_name = document.getElementById('lobby-name').innerHTML;
                      clearInterval(get_lobby__);
                    }
                  }, 1000);
                var lobby_name = document.getElementById("lobby-name").innerHTML;
                pubnub.publish({
                  channel: channel,
                  message: "createPublicLobby()" 
                });
                check_lobby__ = setInterval(function(){
                if (checked_lobby_foo___===false) {
                  return;
                } else if (document.getElementById('box').innerHTML.includes('createPublicLobby()')) {
                checked_lobby_foo___ = false;
                clearInterval(check_lobby__);
                var lobby_name = document.getElementById('box').innerHTML;
                var lby_name = document.getElementById('lobby-name').innerHTML;
                const user_token = document.getElementById('user-token').innerHTML;
                document.getElementById('current_lobbies').innerHTML = document.getElementById('current_lobbies').innerHTML.replace(/No active lobbies/g, '')
                document.getElementById('current_lobbies').innerHTML += "<a href='https://" + location.host + "/gameLobby.html?lby_name=" + lby_name + "&user_token=" + user_token + "&new_lobby=true'>" + lby_name + "</a><br><small style='color: gray; opacity: 0.3;'><span id='hours'></span></small><hr><br>";
                function formatAMPM(date) {
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime = hours + ':' + minutes + ' ' + ampm;
                return strTime;
                }

                document.getElementById("hours").innerHTML = formatAMPM(new Date);
                }
                }, 10);
                document.getElementById('save2').click();
                }
                }, 500);
                function checkForLobbies() {
                setTimeout(function(){
                if (document.getElementById('box').includes("lobby-created()")) {
                  var lobby_name = document.getElementById('lobby-name').innerHTML;
                  document.getElementById('available-lobbies').innerHTML = lby_name;
                } else {
                  checkForLobbies();
                }
                }, 100);
                }
})();
function availableLobbies() {
document.getElementsByClassName('box')[0].style.display = 'block';
}
/*  document.getElementsByTagName("kbd")[0].onclick = function() {
    openBookmarkModal1();
  }*/
if (localStorage["current_lobbies"]) {
    document.getElementById("current_lobbies").innerHTML = localStorage["current_lobbies"];
}
else {

}

document.getElementById("save2").addEventListener("click", function()
    {
        var current_lobbies = document.getElementById("current_lobbies").innerHTML;
        localStorage.setItem("current_lobbies", current_lobbies);
    } , false);
/*    window.onload = function() {
  setInterval(function(){
  if (screen.width <= 600) {
    document.getElementsByTagName('kbd')[0].onclick = function() {
      openFaliureBMark2();
    }
  }
}, 100);
}*/
function openFaliureBMark2() {
  if (confirm("Click the share button and click 'Add to bookmarks'")) {
    if(confirm("Then, click 'Save'. Edit the bookmark and continue")) {
      if (confirm("Click 'OK' below to copy code line, and paste it into the 'URL' bar")) {
        alert("Done!\nYou have an offline browser app.");
      }
    }
  }
}
function fadeTrans() {
var transition = document.createElement('div');
transition.className = "transition";
transition.style.width = "100%";
transition.style.height = "100%";
transition.style.position = "absolute";
transition.style.left = "0";
transition.style.top = "0";
transition.style.backgroundColor = "#FFF";
transition.style.opacity = "0";
transition.style.zIndex = "9999";

var transitionStyle = document.createElement('style');
var innerCSS = document.createTextNode('.transition {vertical-align: top;}');
setTimeout(function(){  
document.getElementsByClassName("transition")[0].style.transition =  "opacity 0.8s";
document.getElementsByClassName("transition")[0].style.WebkitTransition = "opacity 0.8s";
document.getElementsByClassName("transition")[0].style.opacity =  "0";}, 500);
transitionStyle.appendChild(innerCSS);
document.body.appendChild(transition);
setTimeout(function(){ document.getElementsByClassName("transition")[0].style.opacity = "1";
}, 1000);
}
location.solo = function(url){
    function replace(){
  document.open();
  document.write('<iframe scrolling="no" oncontextmenu="return false;" style="overflow:hidden;border:0;width:100%;height:100%;margin:0;position:absolute;left:0;right:0;top:0;bottom:0;padding:0;z-index:99999;" src="' + url + '"></iframe>');
  document.close();
    }
    NProgress.start();
    var interval = setInterval(function() { NProgress.inc(); }, 1000);        

    setTimeout(function() {
        clearInterval(interval);
        NProgress.done();
    }, 500);
    if (NProgress.done) {
      setTimeout(function(){
      replace();
      }, 1000);
    }
    jQuery(window).unload(function() {
        NProgress.start();
    });
    document.querySelector('details').addEventListener('click', function(){
      document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        document.querySelector('details').click();
        document.querySelector('details').removeEventListener('click');
        document.removeEventListener('keydown');
      }
      });
    });
}
Parse.initialize("YzfPeLuKx1JmcXyeJ3qL36fmphqhzv7Ke9mXzmFv", "byPMDYRSUxmJ8GtwIiBZTebeL8qZB7geFXDLcJju");
Parse.serverURL = "https://parseapi.back4app.com/";
function opensignup(){location.solo('/signup.html');}
function openlogin(){location.solo('/log-in.html');}
function logout_user(){Parse.User.logOut();location.solo('/log-in.html');}
function openAccount(){location.solo('/account.html');}
function openProfile(){location.solo('/profile.html');}
(function(){
var currentUser = Parse.User.current();
if (!currentUser) {
  document.querySelector('details').remove();
  document.getElementById('lobby-wrapper1').innerHTML = '<div style="cursor:text;user-select:text;-ms-user-select:text;-moz-user-select:text;-wekit-user-select:text;color:#222;">Only <d style="cursor:text;user-select:text;-ms-user-select:text;-moz-user-select:text;-wekit-user-select:text;">Members</d> Can access this feature.<br><br><a onclick="opensignup()" href="#signup" style="color:#444;">Sign up</a> or <a onclick="openlogin()" href="#login" style="color:#444;">Login</a> to access this feature.</div>';
  if (!document.querySelector('details').remove) {
    document.querySelector('details').outerHTML = '';
  }
}
var name2 = currentUser.get('username');
var email_info = currentUser.get('email');

      document.getElementsByClassName('user-email')[0].innerText = email_info;
      document.getElementsByClassName('user-name')[0].innerText = name2;

  if (window.location.href.includes('logged-in=true') && window.location.href.includes('username') && window.location.href.includes('pass') || currentUser) {
    const email = new URLSearchParams(window.location.search).get('email');
    const name = new URLSearchParams(window.location.search).get('username');
    const pass = new URLSearchParams(window.location.search).get('pass');
    if (name === '' || document.getElementById('username').innerText === '') {
      document.getElementById('username').innerText = name2;
    } else {
    document.getElementById('username').innerText = name;
    }
    var pic = document.createElement('style');
    Parse.initialize("YzfPeLuKx1JmcXyeJ3qL36fmphqhzv7Ke9mXzmFv", "byPMDYRSUxmJ8GtwIiBZTebeL8qZB7geFXDLcJju");
    Parse.serverURL = "https://parseapi.back4app.com/";
    var currentUser = Parse.User.current();
    if (currentUser.get('profilePic')===undefined||currentUser.get('profilePic')==null) {
    pic.innerText='#profile-pic::before { content: ""; display: inline-block; width: 1vw; height: 1vw; background-image: url(https://us.123rf.com/450wm/happyvector071/happyvector0711904/happyvector071190415714/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg?ver=6); background-size: cover; }';
    document.querySelector('details').querySelector('summary').querySelector('li').appendChild(pic);
    return;
    } else {
    pic.innerText='#profile-pic::before { content: ""; display: inline-block; width: 1vw; height: 1vw; background-image: url(' + currentUser.get('profilePic') + '); background-size: cover; }';
    document.querySelector('details').querySelector('summary').querySelector('li').appendChild(pic);
    }
    document.getElementById('login-buttons-signup-2').innerHTML = '<button style="width:5.208333333333333vw;height:2.1vw;font-size:0.8vw;position: relative;left: 3.90625vw; top: 30%; margin-top: -8px;" class="pushy__btn pushy__btn--sm pushy__btn--simple" onclick="$run(logout_user());" onclick="$run(logout_user());">Log out</button>';
  }
})();
/*(function(){
    const url = window.location.href;
    if (url.includes("status=updated")) {
    document.getElementById("user").innerHTML += 'Updated = yes';
    document.getElementById("save").click();
    }
  const updtStatus = document.getElementById("user").innerHTML;
  if (updtStatus.includes("Updated = yes")) {
    document.getElementById('old-page-block').remove();
    if (document.getElementById('user').innerHTML.includes('Alerted = yes')) {
      console.log("updated");
    } else {
      swal({
        title: "Enjoy!",
        text: "The game has been updated to the latest version (v0.1.1). Enjoy!",
        icon: "success",
        button: "Close"
      });
      document.getElementById("user").innerHTML += ' Alerted = yes';
      document.getElementById("save").click();
    }
  } else if (updtStatus.includes('Not updated')) {
  swal({
  title: "As of 8/21/21 Game needs update",
  text: "Please update to get the best experience. The game will update to v0.1.1, more details while updating",
  icon: "info",
  buttons: true
}).then((yesupdate) => {
  if (yesupdate) {
    var swalupdtcont = document.createElement('div');
    swalupdtcont.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 5v-5h20v5h-20zm20 2v17h-20v-17h20zm-4 11h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1z"/></svg>Note: The game will only download on the browser.'
swal({
  title: 'Please wait about 1 minute to update.',
  text: 'Here are some details of the update:\n\n\t• Full package, 3 items (v0.1.1)\n\t• Bugs and serious fixes\n\t• Mobile/touch-device support\n\t• New "browser-resize" support\n\nFull data download size: 18.25kB (1.825e-5GB)\n',
  content: swalupdtcont,
  buttons: false,
  closeOnClickOutside: false,
  closeOnEsc: false
});
setTimeout(function(){ location.replace("https://parkingmaster.w3spaces.com/index.html?status=updated"); }, 50000);
  } else {
    swal({
      title: "Warning",
      text: "We recommend you update or content could get out-dated and not function correctly",
      icon: "warning",
      button: "Dismiss"
    });
    document.getElementsByClassName('swal-button--confirm')[0].style.backgroundColor = "#f3980c";
  }
  });
}
})();*/
function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function() {
// DOM is loaded and ready for manipulation here
});

document.getElementById("url").innerHTML = window.location.href;
window.onload = function() {
var url = document.getElementById("url").innerHTML;
  if (url.includes("score=1")) {
  document.getElementById("aval-score").innerHTML = '1pt';
  document.getElementById("mods").action = 'https://parkingmaster.w3spaces.com/mod-downloads.html?score=1';
  } else if (url.includes("score=2")) {
    document.getElementById("aval-score").innerHTML = '2pts';
    document.getElementById("mods").action = 'https://parkingmaster.w3spaces.com/mod-downloads.html?score=2';
  } else if (url.includes("score=3")) {
    document.getElementById("aval-score").innerHTML = '3pts';
    document.getElementById("mods").action = 'https://parkingmaster.w3spaces.com/mod-downloads.html?score=3';
  } else if (url.includes("score=4")) {
    document.getElementById("aval-score").innerHTML = '4pts';
    document.getElementById("mods").action = 'https://parkingmaster.w3spaces.com/mod-downloads.html?score=4';
  } else {
    document.getElementById("aval-score").innerHTML = '0pts';
  }
}
var index = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width" /></head><body><iframe oncontextmenu="return false;" src="lvl1.html" style="position:absolute; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; overflow:hidden; z-index:9999;">Your browser doesn\'t support iframes</iframe></body</html>';

function replaceIndexPage(NCindex) {
document.open();
document.write(NCindex);
document.close();
}
var url = document.getElementById("url").innerHTML;
function replaceContent() {
  replaceIndexPage(index);
}
function startIdle() {
 setTimeout(function(){ startTimeOut(); startTimer(); }, 15000);
 }
function startTimeOut() {
document.getElementById("paraGraph1").innerHTML = '<b>Warning:</b> you will Auto Quit in 00:<span id="time">15</span> seconds...&nbsp<a id="blackLine" href="javascript:refresh()">I&#8217m still here</a>';
 }
 function startTimer() {
 var time = document.getElementById("time");
setTimeout(function(){ time.innerHTML = '14'; }, 1000);
setTimeout(function(){ time.innerHTML = '13'; }, 2000);
setTimeout(function(){ time.innerHTML = '12'; }, 3000);
setTimeout(function(){ time.innerHTML = '11'; }, 4000);
setTimeout(function(){ time.innerHTML = '10'; }, 5000);
setTimeout(function(){ time.innerHTML = '09'; }, 6000);
setTimeout(function(){ time.innerHTML = '08'; }, 7000);
setTimeout(function(){ time.innerHTML = '07'; }, 8000);
setTimeout(function(){ time.innerHTML = '06'; }, 9000);
setTimeout(function(){ time.innerHTML = '05'; }, 10000);
setTimeout(function(){ time.innerHTML = '04'; }, 11000);
setTimeout(function(){ time.innerHTML = '03'; }, 12000);
setTimeout(function(){ time.innerHTML = '02'; }, 13000);
setTimeout(function(){ time.innerHTML = '01'; }, 14000);
setTimeout(function(){ time.innerHTML = '00'; }, 15000);
setTimeout(function(){ home(); }, 16000);
}
function home() {
  if (typeof window.home == 'function') {
    window.home();
  } else if (document.all) {
    window.location.href = "about:home";
  }
}
 function refresh() {
   location.reload();
 }
if( /Android|webOS|iPhone|iPad|Mahc|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

} else {
  
}
var diffKeys = navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl';
function openBookmarkModal1() {
swal({
title: "Step 1:",
text: "Press " + diffKeys + " + d on keyboard.",
button: "Next",
icon: "info"
}).then(function() {
    swal({
    title: "Step 2:",
    text: "Click \"Save\".",
    icon: "info",
    button: "Next"
    }).then(function() {
    swal({
    title: "Step 3:",
    text: "Edit the bookmark and click \"Copy\" below. Paste it in the \"URL\" box.",
    icon: "info",
    button: "Copy"
    }).then(function() {
  var copied_text = document.getElementById("text_input_copy");

  copied_text.select();
  copied_text.setSelectionRange(0, 99999);

  document.execCommand("copy");
  swal({
  title: "Done!",
  text: "Click the bookmark to play offline!",
  icon: "success"
  });
    });
});
});
}
   var elem = document.documentElement;
  var d = document.getElementById("myAudio"); 
function playAudio() {
  d.play();
  document.getElementById("pause-audio_9474").innerHTML = '<a id="audio-play_9573" href="javascript:pauseAudio();"><img src="https://user-images.githubusercontent.com/85320577/125478656-269b1674-a9d7-4dd3-9d1f-57ce617dbaa1.png" width="5%" /></a>';
}
function pauseAudio() {
  d.pause();
  d.currentTime = 0;
    document.getElementById("pause-audio_9474").innerHTML = '<a id="audio-play_9572" href="javascript:playAudio();"><img src="https://user-images.githubusercontent.com/85320577/125479052-7decfff4-fd49-4a4a-996f-7f190d3bfdc5.png" width="5%" /></a>';
}
