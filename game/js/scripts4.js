let doublePoints=false;
var doublePointsCheck=setInterval(function(){
    if (doublePoints) {
        clearInterval(doublePointsCheck);
        localStorage.setItem('dbl_pts', 'true');
    }
});
if (new URLSearchParams(location.search).get('dbl_pts') && new URLSearchParams(location.search).get('access_key')) {
  if (new URLSearchParams(location.search).get('access_key') == 'HO0wjY6zsNLY5cKwPBgP') {
    doublePoints=true;
    
  }
}
for (var allButton = document.querySelectorAll("button"), allHrefs = document.querySelectorAll("a"), i = 0; i < allHrefs; i++)
    for (var c = 0; c < allButton; c++) var A = allHrefs[i],
        B = allButton[i];
for (var button = document.querySelectorAll("button"), i = 0; i < button.length; i++) {
    var buttons = button[i];
    buttons.className = buttons.className + "", buttons.classList.add("out"), $(buttons).hover(function() {
        $(this).removeClass("out").addClass("over")
    }, function() {
        $(this).removeClass("over").addClass("out")
    })
}
for (var a = document.querySelectorAll("a"), i = 0; i < a.length; i++) aEl = a[i], aEl.onmousedown = function(t) {
    t.preventDefault()
};
var newPointerDown = new PointerEvent("pointerdown"),
    newPointerUp = new PointerEvent("pointerup");

function mouseUp() {
    cancelAnimationFrame(animate)
}

function mouseRightUp() {
    cancelAnimationFrame(animate2)
}

function mouseLeftUp() {
    cancelAnimationFrame(animate3)
}

function mouseReverseUp() {
    cancelAnimationFrame(animate4)
}
document.querySelector("#arrowleft").addEventListener("pointerdown", function(t) {
    let e = window.getComputedStyle(this).getPropertyValue("width");
    var l = t.target.getBoundingClientRect(),
        c = t.clientX - l.left,
        t = t.clientY - l.top,
        l = Math.floor(e / 2),
        l = e.substr(0, l);
    c > e || c <= l || (this.querySelector("#l-").style.position = "relative", this.querySelector("#l-").style.left = c + "%", this.querySelector("#l-").style.top = t - t - t + "%")
}), document.querySelector("#arrowleft").onmouseup = function() {
    this.querySelector("#l-").style = ""
}, document.querySelector("#arrowright").addEventListener("pointerdown", function(t) {
    let e = window.getComputedStyle(this).getPropertyValue("width");
    var l = t.target.getBoundingClientRect(),
        c = t.clientX - l.left,
        t = t.clientY - l.top,
        l = Math.floor(e / 2),
        l = e.substr(0, l);
    c > e || c <= l || (this.querySelector("#r-").style.position = "relative", this.querySelector("#r-").style.left = c + "%", this.querySelector("#r-").style.top = t - t - t + "%")
}), document.querySelector("#arrowright").onmouseup = function() {
    this.querySelector("#r-").style = ""
}, window.onload = function() {
    var t = document.getElementById("canvas").getContext("2d");
    t.beginPath(), t.fillStyle = "#000000", t.fillStyle = "#DE0909", t.fillRect(x, y, 46, 60), t.fillStyle = "#000000", t.fillRect(x + 1, y + -11.1, 44.5, 10), t.fillStyle = "#000000", t.fillRect(x - 10, y + 8, 10, 4), t.fillRect(x + 46, y + 8, 10, 4), t.fillStyle = "#DE0909", t.fillRect(x + 2, y - 28, 44, 17), t.fillStyle = "#000000", t.fillRect(x - 2, y + 50, 3, 20), t.fillRect(x - 1, y - 17, 3, 20), t.fillRect(x + 46, y + 50, 3, 20), t.fillRect(x + 45, y - 17, 3, 20), t.fillStyle = "#000000", t.fillRect(x - 2, y + 60, 48, 9), t.fillStyle = "#DE0909", t.fillRect(x, y + 61, 47, 15), t.fillStyle = "#781717", t.fillRect(x, y + 68, 15, 7), t.fillRect(x + 32, y + 68, 15, 7), t.fillStyle = "#FFFACD", t.fillRect(x + 31, y - 29, 15, 3), t.fillRect(x + 2, y - 29, 15, 3), t.fill()
}, document.querySelector(".buttonDrive").addEventListener("mousedown", mouseDown), document.querySelector(".buttonDrive").addEventListener("mouseup", mouseUp), document.querySelector(".buttonReverse").addEventListener("mousedown", mouseReverseDown), document.querySelector(".buttonReverse").addEventListener("mouseup", mouseReverseUp), document.querySelector("#arrowright").addEventListener("mousedown", mouseRightDown), document.querySelector("#arrowright").addEventListener("mouseup", mouseRightUp), document.querySelector("#arrowleft").addEventListener("mousedown", mouseLeftDown), document.querySelector("#arrowleft").addEventListener("mouseup", mouseLeftUp), document.querySelector(".buttonDrive").addEventListener("mouseout", mouseUp), document.querySelector(".buttonReverse").addEventListener("mouseout", mouseReverseUp), document.querySelector("#arrowright").addEventListener("mouseout", mouseRightUp), document.querySelector("#arrowleft").addEventListener("mouseout", mouseLeftUp);
var canvas, animate, animate2, animate3, animate4, alerted = !1;

function parkingLot(t) {
    ctx.fillStyle = "#000", ctx.fillRect(0, 0, 10, canvas.height), ctx.fillStyle = "#0000FF", ctx.fillRect(10, 0, 20, 10), ctx.fillRect(40, 0, 20, 10), ctx.fillRect(70, 0, 20, 10), ctx.fillRect(100, 0, 20, 10), ctx.fillRect(130, 0, 20, 10), ctx.fillRect(10, 90, 20, 10), ctx.fillRect(40, 90, 20, 10), ctx.fillRect(70, 90, 20, 10), ctx.fillRect(100, 90, 20, 10), ctx.fillRect(130, 90, 20, 10), ctx.fillStyle = "#000", ctx.fillRect(10, 180, 140, 10), ctx.fillRect(10, 270, 140, 10), ctx.fillRect(10, 360, 140, 10), ctx.fillRect(canvas.width - 10, 0, 10, canvas.height), ctx.fillRect(canvas.width - 150, 360, 140, 10), ctx.fillRect(canvas.width - 150, 270, 140, 10), ctx.fillRect(canvas.width - 150, 180, 140, 10), ctx.fillStyle = "#333", ctx.fillRect(canvas.width - 30, 90, 20, 10), ctx.fillRect(canvas.width - 60, 90, 20, 10), ctx.fillRect(canvas.width - 90, 90, 20, 10), ctx.fillRect(canvas.width - 120, 90, 20, 10), ctx.fillRect(canvas.width - 150, 90, 20, 10), ctx.fillRect(canvas.width - 30, 0, 20, 10), ctx.fillRect(canvas.width - 60, 0, 20, 10), ctx.fillRect(canvas.width - 90, 0, 20, 10), ctx.fillRect(canvas.width - 120, 0, 20, 10), ctx.fillRect(canvas.width - 150, 0, 20, 10)
}

function parkDetector() {
    var t = ["Good", "Good job!", "Nice!", "Awesome!", "Keep it up!", "Fantastic!"],
        e = t[Math.floor(Math.random() * t.length)];
    (t = document.createElement("div")).innerHTML = '<span style="color:#444;">Try <span style="color:#DB4437;text-decoration:underline;">parking again</span> or <span style="color:#DB4437;text-decoration:underline;">get closer</span> to the spot.', x >= canvas.width - 150 && y <= 40 && 0 < x && 0 < y ? (swal({
        icon: "success",
        title: e,
        text: "You parked! Click Next to continue.",
        button: "Next",
        closeOnClickOutside: !0,
        closeOnEnterKey: !0
    }).then(function() {
        var ifDoublePoints=localStorage['dbl_pts']?'?dbl_pts=true&access_key=HO0wjY6zsNLY5cKwPBgP':'';
        location.replace("/lvl5.html"+ifDoublePoints);
    }), setInterval(function() {
        document.querySelector(".swal-button").style.backgroundColor = "#6cc22e"
    }, 100)) : 10 < x && y <= 35 && 10 <= y && 0 < x && 0 < y && x < 65 ? (swal({
        icon: "https://cdn.jsdelivr.net/gh/Parking-Master/Parking-Master@latest/game/blue-checkmark.png",
        title: e,
        text: "+1 Point(s) for blue spot. Click Next to continue.",
        button: "Next",
        closeOnClickOutside: !0,
        closeOnEnterKey: !0
    }).then(function() {
        var ifTriplePoints=localStorage['dbl_pts']?'?trpl_pts=true&access_key=HO0wjY6zsNLY5cKwPBgP':'?dbl_pts=true&access_key=HO0wjY6zsNLY5cKwPBgP';
        location.replace("/lvl5.html"+ifTriplePoints);
    }), setInterval(function() {
        document.querySelector(".swal-button").style.backgroundColor = "#0000FF", document.querySelector(".swal-icon").querySelector("img").style.width = "20%"
    }, 100)) : swal({
        icon: "error",
        title: "You didn't park",
        content: t
    }).then(function() {
        swal.close()
    }), document.querySelector(".swal-button").style.backgroundColor = "#DB4437"
}
$(document).ready=function(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
};
function triggered() {
    return x <= 0 || x > canvas.width || x > canvas.width - 46 || y > canvas.height - 60 || y <= 0 || y < 0 || x <= 335 && y < 288 && x > 145
}

function mouseDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.fillStyle = "#000000", ctx.fillStyle = "#DE0909", ctx.fillRect(x, y, 46, 60), ctx.fillStyle = "#000000", ctx.fillRect(x + 1, y + -11.1, 44.5, 10), ctx.fillStyle = "#000000", ctx.fillRect(x - 10, y + 8, 10, 4), ctx.fillRect(x + 46, y + 8, 10, 4), ctx.fillStyle = "#DE0909", ctx.fillRect(x + 2, y - 28, 44, 17), ctx.fillStyle = "#000000", ctx.fillRect(x - 2, y + 50, 3, 20), ctx.fillRect(x - 1, y - 17, 3, 20), ctx.fillRect(x + 46, y + 50, 3, 20), ctx.fillRect(x + 45, y - 17, 3, 20), ctx.fillStyle = "#000000", ctx.fillRect(x - 2, y + 60, 48, 9), ctx.fillStyle = "#DE0909", ctx.fillRect(x, y + 61, 47, 15), ctx.fillStyle = "#781717", ctx.fillRect(x, y + 68, 15, 7), ctx.fillRect(x + 32, y + 68, 15, 7), ctx.fillStyle = "#FFFACD", ctx.fillRect(x + 31, y - 29, 15, 3), ctx.fillRect(x + 2, y - 29, 15, 3), ctx.fill(), animate = requestAnimationFrame(mouseDown), y += -6.5, triggered() && GameOver(), parkingLot(), drawObstacles()
}

function mouseRightDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.fillStyle = "#DE0909", ctx.fillRect(x - 8, y, 60, 46), ctx.fillStyle = "#000000", ctx.fillRect(x + 53, y + 1, 10, 44.5), ctx.fillStyle = "#000000", ctx.fillRect(x + 41, y - 10, 4, 10), ctx.fillRect(x + 41, y + 46, 4, 10), ctx.fillStyle = "#DE0909", ctx.fillRect(x + 64, y + 2, 17, 44), ctx.fillStyle = "#000000", ctx.fillRect(x + 49, y - 1, 20, 3), ctx.fillRect(x - 17, y - 2, 20, 3), ctx.fillRect(x + 50, y + 45, 20, 3), ctx.fillRect(x - 17, y + 46, 20, 3), ctx.fillStyle = "#000000", ctx.fillRect(x - 15, y, 9, 48), ctx.fillStyle = "#DE0909", ctx.fillRect(x - 22, y, 15, 47), ctx.fillStyle = "#781717", ctx.fillRect(x - 21, y, 7, 15), ctx.fillRect(x - 21, y + 32, 7, 15), ctx.fillStyle = "#FFFACD", ctx.fillRect(x + 78, y + 31, 3, 15), ctx.fillRect(x + 78, y + 2, 3, 15), ctx.fillStyle = "#000000", ctx.fill(), animate2 = requestAnimationFrame(mouseRightDown), x += 3, y += -1, triggered() && GameOver(), parkingLot(), drawObstacles()
}

function mouseLeftDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.fillStyle = "#DE0909", ctx.fillRect(x, y, 60, 46), ctx.fillStyle = "#000000", ctx.fillRect(x + -11.1, y + 1, 10, 44.5), ctx.fillRect(x + 8, y - 10, 4, 10), ctx.fillRect(x + 8, y + 46, 4, 10), ctx.fillStyle = "#DE0909", ctx.fillRect(x - 28, y + 2, 17, 44), ctx.fillStyle = "#000000", ctx.fillRect(x + 50, y - 2, 20, 3), ctx.fillRect(x - 17, y - 1, 20, 3), ctx.fillRect(x + 50, y + 46, 20, 3), ctx.fillRect(x - 17, y + 45, 20, 3), ctx.fillStyle = "#000000", ctx.fillRect(x + 60, y - 2, 9, 48), ctx.fillStyle = "#DE0909", ctx.fillRect(x + 61, y, 15, 47), ctx.fillStyle = "#781717", ctx.fillRect(x + 68, y, 7, 15), ctx.fillRect(x + 68, y + 32, 7, 15), ctx.fillStyle = "#FFFACD", ctx.fillRect(x - 29, y + 31, 3, 15), ctx.fillRect(x - 29, y + 2, 3, 15), ctx.fillStyle = "#000000", animate3 = requestAnimationFrame(mouseLeftDown), x += -3, y += -1, triggered() && GameOver(), parkingLot(), drawObstacles()
}

function mouseReverseDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.fillStyle = "#000000", ctx.fillStyle = "#DE0909", ctx.fillRect(x, y, 46, 60), ctx.fillStyle = "#000000", ctx.fillRect(x + 1, y + -11.1, 44.5, 10), ctx.fillStyle = "#000000", ctx.fillRect(x - 10, y + 8, 10, 4), ctx.fillRect(x + 46, y + 8, 10, 4), ctx.fillStyle = "#DE0909", ctx.fillRect(x + 2, y - 28, 44, 17), ctx.fillStyle = "#000000", ctx.fillRect(x - 2, y + 50, 3, 20), ctx.fillRect(x - 1, y - 17, 3, 20), ctx.fillRect(x + 46, y + 50, 3, 20), ctx.fillRect(x + 45, y - 17, 3, 20), ctx.fillStyle = "#000000", ctx.fillRect(x - 2, y + 60, 48, 9), ctx.fillStyle = "#DE0909", ctx.fillRect(x, y + 61, 47, 15), ctx.fillStyle = "#781717", ctx.fillRect(x, y + 68, 15, 7), ctx.fillRect(x + 32, y + 68, 15, 7), ctx.fillStyle = "#FFFACD", ctx.fillRect(x + 31, y - 29, 15, 3), ctx.fillRect(x + 2, y - 29, 15, 3), ctx.fill(), animate4 = requestAnimationFrame(mouseReverseDown), triggered() && GameOver(), y += 5, parkingLot(), drawObstacles()
}
function car(position, color, carX, carY) {
  if (position=='forward') {
      ctx.beginPath(), ctx.fillStyle = color, ctx.fillRect(carX, carY, 46, 60), ctx.fillRect(carX + 1, carY + -11.1, 44.5, 10), ctx.fillRect(carX - 10, carY + 8, 10, 4), ctx.fillRect(carX + 46, carY + 8, 10, 4), ctx.fillRect(carX + 2, carY - 28, 44, 17), ctx.fillStyle = "#000000", ctx.fillRect(carX - 2, carY + 50, 3, 20), ctx.fillRect(carX - 1, carY - 17, 3, 20), ctx.fillRect(carX + 46, carY + 50, 3, 20), ctx.fillRect(carX + 45, carY - 17, 3, 20), ctx.fillRect(carX - 2, carY + 60, 48, 9), ctx.fillRect(carX, carY + 61, 47, 15), ctx.fillRect(carX, carY + 68, 15, 7), ctx.fillRect(carX + 32, carY + 68, 15, 7), ctx.fillRect(carX + 31, carY - 29, 15, 3), ctx.fillRect(carX + 2, carY - 29, 15, 3), ctx.fill(), parkingLot()
  } else if (position=='left') {
      ctx.beginPath(), ctx.fillStyle = color, ctx.fillRect(carX, carY, 60, 46), ctx.fillRect(carX + -11.1, carY + 1, 10, 44.5), ctx.fillRect(carX + 8, carY - 10, 4, 10), ctx.fillRect(carX + 8, carY + 46, 4, 10), ctx.fillRect(carX - 28, carY + 2, 17, 44), ctx.fillStyle = "#000000", ctx.fillRect(carX + 50, carY - 2, 20, 3), ctx.fillRect(carX - 17, carY - 1, 20, 3), ctx.fillRect(carX + 50, carY + 46, 20, 3), ctx.fillRect(carX - 17, carY + 45, 20, 3), ctx.fillRect(carX + 60, carY - 2, 9, 48), ctx.fillRect(carX + 61, carY, 15, 47), ctx.fillRect(carX + 68, carY, 7, 15), ctx.fillRect(carX + 68, carY + 32, 7, 15), ctx.fillRect(carX - 29, carY + 31, 3, 15), ctx.fillRect(carX - 29, carY + 2, 3, 15), ctx.fill(), parkingLot()
  } else if (position=='right') {
      ctx.beginPath(), ctx.fillStyle = color, ctx.fillRect(carX, carY, 46, 60), ctx.fillRect(carX + 1, carY + -11.1, 44.5, 10), ctx.fillRect(carX - 10, carY + 8, 10, 4), ctx.fillRect(carX + 46, carY + 8, 10, 4), ctx.fillRect(carX + 2, carY - 28, 44, 17), ctx.fillStyle = "#000000", ctx.fillRect(carX - 2, carY + 50, 3, 20), ctx.fillRect(carX - 1, carY - 17, 3, 20), ctx.fillRect(carX + 46, carY + 50, 3, 20), ctx.fillRect(carX + 45, carY - 17, 3, 20), ctx.fillRect(carX - 2, carY + 60, 48, 9), ctx.fillRect(carX, carY + 61, 47, 15), ctx.fillRect(carX, carY + 68, 15, 7), ctx.fillRect(carX + 32, carY + 68, 15, 7), ctx.fillRect(carX + 31, carY - 29, 15, 3), ctx.fillRect(carX + 2, carY - 29, 15, 3), ctx.fill(), parkingLot()
  } else if (position=='back') {
      ctx.beginPath(), ctx.fillStyle = color, ctx.fillRect(carX, carY, 46, 60), ctx.fillRect(carX + 1, carY + -11.1, 44.5, 10), ctx.fillRect(carX - 10, carY + 8, 10, 4), ctx.fillRect(carX + 46, carY + 8, 10, 4), ctx.fillRect(carX + 2, carY - 28, 44, 17), ctx.fillStyle = "#000000", ctx.fillRect(carX - 2, carY + 50, 3, 20), ctx.fillRect(carX - 1, carY - 17, 3, 20), ctx.fillRect(carX + 46, carY + 50, 3, 20), ctx.fillRect(carX + 45, carY - 17, 3, 20), ctx.fillRect(carX - 2, carY + 60, 48, 9), ctx.fillRect(carX, carY + 61, 47, 15), ctx.fillRect(carX, carY + 68, 15, 7), ctx.fillRect(carX + 32, carY + 68, 15, 7), ctx.fillRect(carX + 31, carY - 29, 15, 3), ctx.fillRect(carX + 2, carY - 29, 15, 3), ctx.fill(), parkingLot()
  }
}
function truck(position, color, truckX, truckY) {
if (position=='forward') {
  ctx.beginPath();
  ctx.fillStyle = color;
  // body
  ctx.fillRect(truckX, truckY, 80, 200);
  ctx.fillStyle = '#29461B';
  // head
  ctx.fillRect(truckX+2, truckY-60, 76, 60);
  ctx.fillStyle = '#111';
  // left wheels
  ctx.fillRect(truckX-8, truckY+165, 8, 30);
  ctx.fillRect(truckX-8, truckY+120, 8, 30);
  // right wheels
  ctx.fillRect(truckX+80, truckY+120, 8, 30);
  ctx.fillRect(truckX+80, truckY+165, 8, 30);
  // front wheels
  ctx.fillRect(truckX-4, truckY-42, 6, 28);
  ctx.fillRect(truckX+78, truckY-42, 6, 28);
  //window
  ctx.fillRect(truckX+7, truckY-36, 66, 28);
}
}
var forward='forward', left='left', right='right', back='back';
function drawObstacles() {
truck(forward, '#a1a1a1', 225, 65);
car(left, '#333', 50, 300);
}
$(document).ready(function(){
drawObstacles();
});
function detectEnterKey() {
    window.onkeyup = function(t) {
        "Enter" === t.key && (parkDetector(), window.onkeyup = function(t) {
            if ("Enter" === t.key) return setTimeout(detectEnterKey, 100), !1
        })
    }
}

function GameOver() {
drawObstacles();
    window.addEventListener = function(t) {
        return !1
    }, mouseDown = function(t) {
        return t.preventDefault(), !1
    }, mouseLeftDown = function(t) {
        return t.preventDefault(), !1
    }, mouseRightDown = function(t) {
        return t.preventDefault(), !1
    }, mouseReverseDown = function(t) {
        return t.preventDefault(), !1
    }, !0 === alerted || (swal({
        icon: "https://user-images.githubusercontent.com/88283567/133125808-dc7f4b5b-f810-4132-b1bf-b65b1b640001.png",
        title: "Game Over",
        text: "You crashed!",
        button: "Close",
        closeOnEsc: !1,
        closeOnClickOutside: !1
    }).then(function() {
let ptsToAdd=undefined;
function param(p){
    return new URLSearchParams(location.search).get(p);
}
if (param('dbl_pts')&&param('access_key')){
  if (param('access_key')=='HO0wjY6zsNLY5cKwPBgP') {
    ptsToAdd=parseFloat(location.pathname.split('lvl').pop().split('.')[0])+1;
    doublePoints=true;
  } else {
      ptsToAdd=4;
  }
}
var ifLUndefined=setInterval(function(){
    if (ptsToAdd==undefined) {
        return;
    } else {
      clearInterval(ifLUndefined);
      top.location.replace("/?pts="+String(ptsToAdd)+"&k=6150645367556B58703273357638792F423F4528482B4D6251655468576D597133743677397A24432646294A404E635266556A586E327234753778214125442A&s=FcHeMhPkRpUrWtZw3y5B8DaGdJfMjQmSpVs");
    }
})
    }), document.querySelector(".swal-button").style.backgroundColor = "#222", document.querySelector(".swal-icon").style.width = "20%", alerted = !1)
}
detectEnterKey(), window.addEventListener("keydown", function(t) {
    var e = !1;
    if (t.preventDefault(), "ArrowUp" === t.key && !1 === e) return e = !0, mouseUp(), mouseDown(), !1
}), window.addEventListener("keyup", function(t) {
    return t.preventDefault(), mouseUp(), !1
}), window.addEventListener("keydown", function(t) {
    var e = !1;
    t.preventDefault(), "ArrowLeft" === t.key && !1 === e && (e = !0, mouseLeftUp(), mouseLeftDown()), window.addEventListener("keyup", function(t) {
        return t.preventDefault(), mouseLeftUp(), !1
    })
}), window.addEventListener("keydown", function(t) {
    var e = !1;
    t.preventDefault(), "ArrowRight" === t.key && !1 === e && (e = !0, mouseRightUp(), mouseRightDown()), window.addEventListener("keyup", function(t) {
        return t.preventDefault(), mouseRightUp(), !1
    })
}), window.addEventListener("keydown", function(t) {
    var e = !1;
    t.preventDefault(), "ArrowDown" === t.key && !1 === e && (e = !0, mouseReverseUp(), mouseReverseDown()), window.addEventListener("keyup", function(t) {
        return t.preventDefault(), mouseReverseUp(), !1
    })
}), canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d"), last = performance.now(), x = canvas.width - canvas.width / 2 + 45, y = canvas.height - 150, parkingLot();
