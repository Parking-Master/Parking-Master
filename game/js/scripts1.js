for(var allButton=document.querySelectorAll("button"),allHrefs=document.querySelectorAll("a"),i=0;i<allHrefs;i++)for(var c=0;c<allButton;c++)var A=allHrefs[i],B=allButton[i];for(var button=document.querySelectorAll("button"),i=0;i<button.length;i++){var buttons=button[i];buttons.className=buttons.className+"",buttons.classList.add("out"),$(buttons).hover(function(){$(this).removeClass("out").addClass("over")},function(){$(this).removeClass("over").addClass("out")})}for(var a=document.querySelectorAll("a"),i=0;i<a.length;i++)aEl=a[i],aEl.onmousedown=function(e){e.preventDefault()};var newPointerDown=new PointerEvent("pointerdown"),newPointerUp=new PointerEvent("pointerup");function mouseUp(){cancelAnimationFrame(animate)}function mouseRightUp(){cancelAnimationFrame(animate2)}function mouseLeftUp(){cancelAnimationFrame(animate3)}function mouseReverseUp(){cancelAnimationFrame(animate4)}document.querySelector("#arrowleft").addEventListener("pointerdown",function(e){let t=window.getComputedStyle(this).getPropertyValue("width");var n=e.target.getBoundingClientRect(),o=e.clientX-n.left,e=e.clientY-n.top,n=Math.floor(t/2),n=t.substr(0,n);o>t||o<=n||(this.querySelector("#l-").style.position="relative",this.querySelector("#l-").style.left=o+"%",this.querySelector("#l-").style.top=e-e-e+"%")}),document.querySelector("#arrowleft").onmouseup=function(){this.querySelector("#l-").style=""},document.querySelector("#arrowright").addEventListener("pointerdown",function(e){let t=window.getComputedStyle(this).getPropertyValue("width");var n=e.target.getBoundingClientRect(),o=e.clientX-n.left,e=e.clientY-n.top,n=Math.floor(t/2),n=t.substr(0,n);o>t||o<=n||(this.querySelector("#r-").style.position="relative",this.querySelector("#r-").style.left=o+"%",this.querySelector("#r-").style.top=e-e-e+"%")}),document.querySelector("#arrowright").onmouseup=function(){this.querySelector("#r-").style=""},window.onload=function(){var e=document.getElementById("canvas").getContext("2d");e.beginPath(),e.rect(0,20,110,65),e.rect(x+5,y+58,30,10),e.rect(x+75,y+58,30,10),e.rect(x+5,y-3,30,10),e.rect(x+75,y-3,30,10),e.fillStyle="#000000",e.fill()},document.querySelector(".buttonDrive").addEventListener("mousedown",mouseDown),document.querySelector(".buttonDrive").addEventListener("mouseup",mouseUp),document.querySelector(".buttonReverse").addEventListener("mousedown",mouseReverseDown),document.querySelector(".buttonReverse").addEventListener("mouseup",mouseReverseUp),document.querySelector("#arrowright").addEventListener("mousedown",mouseRightDown),document.querySelector("#arrowright").addEventListener("mouseup",mouseRightUp),document.querySelector("#arrowleft").addEventListener("mousedown",mouseLeftDown),document.querySelector("#arrowleft").addEventListener("mouseup",mouseLeftUp),document.querySelector(".buttonDrive").addEventListener("mouseout",mouseUp),document.querySelector(".buttonReverse").addEventListener("mouseout",mouseReverseUp),document.querySelector("#arrowright").addEventListener("mouseout",mouseRightUp),document.querySelector("#arrowleft").addEventListener("mouseout",mouseLeftUp);var canvas,animate,animate2,animate3,animate4,alerted=!1;function parkingLot(e){ctx.fillRect(590,0,10,canvas.height),ctx.fillRect(450,0,140,10),ctx.fillRect(450,90,140,10),ctx.fillRect(450,180,140,10),ctx.fillStyle="#333",ctx.fillRect(450,270,20,10),ctx.fillRect(480,270,20,10),ctx.fillRect(510,270,20,10),ctx.fillRect(540,270,20,10),ctx.fillRect(570,270,20,10),ctx.fillStyle="#333",ctx.fillRect(450,360,20,10),ctx.fillRect(480,360,20,10),ctx.fillRect(510,360,20,10),ctx.fillRect(540,360,20,10),ctx.fillRect(570,360,20,10)}function parkDetector(){var e=["Good","Good job!","Nice!"],t=e[Math.floor(Math.random()*e.length)],e=document.createElement("div");e.innerHTML='<span style="color:#444;">Try <span style="color:#DB4437;text-decoration:underline;">parking again</span> or <span style="color:#DB4437;text-decoration:underline;">get closer</span> to the spot.',280<y&&y<300&&460<x?(swal({icon:"success",title:t,text:"You parked! Click Next to continue.",button:"Next",closeOnClickOutside:!0,closeOnEnterKey:!0}).then(function(){location.replace("/lvl2.html")}),setInterval(function(){document.querySelector(".swal-button").style.backgroundColor="#6cc22e"},100)):swal({icon:"error",title:"You didn't park",content:e}).then(function(){swal.close()}),document.querySelector(".swal-button").style.backgroundColor="#DB4437"}function mouseDown(){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.beginPath(),ctx.rect(x,y,110,65),ctx.rect(x+5,y+58,30,10),ctx.rect(x+75,y+58,30,10),ctx.rect(x+5,y-3,30,10),ctx.rect(x+75,y-3,30,10),ctx.fillStyle="#000000",ctx.fill(),x+=5,animate=requestAnimationFrame(mouseDown),500<x&&GameOver(),parkingLot()}function mouseRightDown(e){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.beginPath(),ctx.rect(x,y,110,65),ctx.rect(x+5,y+58,30,10),ctx.rect(x+75,y+58,30,10),ctx.rect(x+5,y-3,30,10),ctx.rect(x+75,y-3,30,10),ctx.fillStyle="#000000",ctx.fill(),y+=1.5,x+=.3,y>canvas.height-66&&GameOver(),animate2=requestAnimationFrame(mouseRightDown),parkingLot()}function mouseLeftDown(e){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.beginPath(),ctx.rect(x,y,110,65),ctx.rect(x+5,y+58,30,10),ctx.rect(x+75,y+58,30,10),ctx.rect(x+5,y-3,30,10),ctx.rect(x+75,y-3,30,10),ctx.fillStyle="#000000",ctx.fill(),y+=-1.5,x+=.3,y<-1&&GameOver(),animate3=requestAnimationFrame(mouseLeftDown),parkingLot()}function mouseReverseDown(e){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.beginPath(),ctx.rect(x,y,110,65),ctx.rect(x+5,y+58,30,10),ctx.rect(x+75,y+58,30,10),ctx.rect(x+5,y-3,30,10),ctx.rect(x+75,y-3,30,10),ctx.fillStyle="#000000",ctx.fill(),x+=-4,x<-2&&GameOver(),animate4=requestAnimationFrame(mouseReverseDown),parkingLot()}function detectEnterKey(){window.onkeyup=function(e){"Enter"===e.key&&(parkDetector(),window.onkeyup=function(e){if("Enter"===e.key)return setTimeout(detectEnterKey,100),!1})}}function GameOver(){gameoverfunction=GameOver;setTimeout(function(){GameOver=gameoverfunction;},900);GameOver=function(){void(0)};if(0===localStorage.lives||"0"===document.getElementById("lives").textContent)return window.addEventListener=function(){return!1},mouseDown=function(e){return e.preventDefault(),!1},mouseLeftDown=function(e){return e.preventDefault(),!1},mouseRightDown=function(e){return e.preventDefault(),!1},mouseReverseDown=function(e){return e.preventDefault(),!1},!0===alerted||(swal({icon:"https://user-images.githubusercontent.com/88283567/133125808-dc7f4b5b-f810-4132-b1bf-b65b1b640001.png",title:"Game Over",text:"You crashed!",button:"Close",closeOnEsc:!1,closeOnClickOutside:!1}).then(function(){localStorage.removeItem('lives');location.replace("/?pts=1&k=6150645367556B58703273357638792F423F4528482B4D6251655468576D597133743677397A24432646294A404E635266556A586E327234753778214125442A&s=FcHeMhPkRpUrWtZw3y5B8DaGdJfMjQmSpVs")}),document.querySelector(".swal-button").style.backgroundColor="#222",document.querySelector(".swal-icon").style.width="20%",alerted=!1),void(lives=0);1!==localStorage.lives&&"1"!==document.getElementById("lives").textContent||(localStorage.setItem("lives",1),document.getElementById("lives").style.display="none"),lives--,localStorage.setItem("lives",lives),document.getElementById("lives").textContent=lives}!async function(){localStorage.lives&&(0===localStorage.lives?GameOver():(function(){document.getElementById("lives").textContent=localStorage.lives;document.getElementById('lives').style.animation='warning .7s';setTimeout(function(){document.getElementById('lives').style.animation=''},700)})())}();detectEnterKey(),window.addEventListener("keydown",function(e){var t=!1;if(e.preventDefault(),"ArrowUp"===e.key&&!1===t)return t=!0,mouseUp(),mouseDown(),!1}),window.addEventListener("keyup",function(e){return e.preventDefault(),mouseUp(),!1}),window.addEventListener("keydown",function(e){var t=!1;e.preventDefault(),"ArrowLeft"===e.key&&!1===t&&(t=!0,mouseLeftUp(),mouseLeftDown()),window.addEventListener("keyup",function(e){return e.preventDefault(),mouseLeftUp(),!1})}),window.addEventListener("keydown",function(e){var t=!1;e.preventDefault(),"ArrowRight"===e.key&&!1===t&&(t=!0,mouseRightUp(),mouseRightDown()),window.addEventListener("keyup",function(e){return e.preventDefault(),mouseRightUp(),!1})}),window.addEventListener("keydown",function(e){var t=!1;e.preventDefault(),"ArrowDown"===e.key&&!1===t&&(t=!0,mouseReverseUp(),mouseReverseDown()),window.addEventListener("keyup",function(e){return e.preventDefault(),mouseReverseUp(),!1})}),canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),last=performance.now(),x=0,y=20,parkingLot();
