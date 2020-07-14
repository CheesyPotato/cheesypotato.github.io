function draw(){
  //github pages isnt working bruh moment
  //bruh moment 2
  var elem = document.getElementById('canvas');
  function collides(rects, x, y) {
      var isCollision = false;
      for (var i = 0, len = rects.length; i < len; i++) {
          var left = rects[i].x, right = rects[i].x+rects[i].w;
          var top = rects[i].y, bottom = rects[i].y+rects[i].h;
          if (right >= x
              && left <= x
              && bottom >= y
              && top <= y) {
              isCollision = rects[i];
          }
      }
      return isCollision;
  }

  // check if context exist
  if (elem && elem.getContext) {

      var rects = []
      for (i=0;i < 4 ; i++){
        for (j=0; j < 4;j++){
          var e = {x: j * 100, y: i * 100, w: 100, h: 100}
          rects.push(e)
        }
      }

    // get context
    var context = elem.getContext('2d');
    if (context) {

        for (var i = 0, len = rects.length; i < len; i++) {

          if (i == 0 || j == 0){
            context.beginPath();
            context.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
            context.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
            context.stroke();
          }
          else{
            context.beginPath();
            context.rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
            context.stroke();
          }

    }
    context.beginPath();
    context.rect(rects[0].x, rects[0].y,400,400);
    context.stroke();

      // listener, using W3C style for example
      elem.addEventListener('click', function(e) {
          var rect = collides(rects, e.offsetX, e.offsetY);
          if (rect) {
            var pixelData = context.getImageData(e.offsetX, e.offsetY, 1, 1).data;

              //if transparent draw blue
              if (pixelData[2] == 0 && pixelData[0] == 0){
                context.fillStyle = "rgba(0,0,255,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById('you').innerHTML = parseInt(document.getElementById('you').innerHTML) + 1
              }
              //if red draw blue
              else if (pixelData[0] == 255 && pixelData[2] == 0 ){
                context.fillStyle = "rgba(0,0,255,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById('you').innerHTML = parseInt(document.getElementById('you').innerHTML) + 1
                document.getElementById("opponent").innerHTML = parseInt(document.getElementById("opponent").innerHTML) - 1
              }
              //if white draw blue
              else if (pixelData[0] == 255 && pixelData[2] == 255 ){
                context.fillStyle = "rgba(0,0,255,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById('you').innerHTML = parseInt(document.getElementById('you').innerHTML) + 1
              }
              //if blue draw white
              else{

                context.fillStyle = "rgba(255,255,255,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById('you').innerHTML = parseInt(document.getElementById('you').innerHTML) - 1
              }
          } else {
          }
      }, false);

      elem.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          var rect = collides(rects, e.offsetX, e.offsetY);
          if (rect) {
            var pixelData = context.getImageData(e.offsetX, e.offsetY, 1, 1).data;

              //if transparent draw red
              if (pixelData[2] == 0  && pixelData[0] == 0){
                context.fillStyle = "rgba(255,0,0,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById("opponent").innerHTML = parseInt(document.getElementById("opponent").innerHTML) + 1
              }
              //if blue draw red
              else if (pixelData[2] == 255 && pixelData[0] == 0 ){
                context.fillStyle = "rgba(255,0,0,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById("opponent").innerHTML = parseInt(document.getElementById("opponent").innerHTML) + 1
                document.getElementById('you').innerHTML = parseInt(document.getElementById('you').innerHTML) - 1

              }
              //if white draw red
              else if (pixelData[0] == 255 && pixelData[2] == 255 ){
                context.fillStyle = "rgba(255,0,0,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById("opponent").innerHTML = parseInt(document.getElementById("opponent").innerHTML) + 1
              }
              //if red draw white
              else{

                context.fillStyle = "rgba(255,255,255,255)";
                context.fillRect(rect.x, rect.y, rect.w, rect.h);
                context.beginPath();
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.rect(rect.x, rect.y, rect.w, rect.h);
                context.stroke();
                document.getElementById("opponent").innerHTML = parseInt(document.getElementById("opponent").innerHTML) - 1
              }
          } else {
          }
          return false;
      }, false);
      document.addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
    // of course, you still do not know what you prevent here...
    // You could also check event.ctrlKey/event.shiftKey/event.altKey
    // to not prevent something useful.
  }
}, false);
  }
}
}
