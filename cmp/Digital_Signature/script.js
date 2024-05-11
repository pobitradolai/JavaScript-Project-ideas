window.onload = function() {
  var canvas = document.getElementById('signatureCanvas');
  var ctx = canvas.getContext('2d');
  var clearButton = document.getElementById('clearButton');
  var saveButton = document.getElementById('saveButton');

  var drawing = false;
  var prevX = 0;
  var prevY = 0;

  canvas.addEventListener('mousedown', function(e) {
    drawing = true;
    prevX = e.clientX - canvas.offsetLeft;
    prevY = e.clientY - canvas.offsetTop;
  });

  canvas.addEventListener('mousemove', function(e) {
    if (drawing) {
      var x = e.clientX - canvas.offsetLeft;
      var y = e.clientY - canvas.offsetTop;

      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();

      prevX = x;
      prevY = y;
    }
  });

  canvas.addEventListener('mouseup', function() {
    drawing = false;
  });

  clearButton.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  saveButton.addEventListener('click', function() {
    var signatureImage = canvas.toDataURL(); // Convert canvas to base64 image
    // You can now send signatureImage to your backend for further processing
    console.log(signatureImage);
    alert('Signature saved!');
  });
};
