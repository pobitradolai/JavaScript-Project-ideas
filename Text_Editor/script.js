function saveFile() {
  var content = document.getElementById("editor").value;
  var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
  var url = URL.createObjectURL(blob);
  
  var a = document.createElement('a');
  a.href = url;
  a.download = "text_file.txt";
  document.body.appendChild(a);
  a.click();
  
  window.URL.revokeObjectURL(url);
}

function loadFile() {
  var input = document.createElement('input');
  input.type = 'file';
  
  input.onchange = function() {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    
    reader.onload = function() {
      var text = reader.result;
      document.getElementById("editor").value = text;
    };
    
    reader.onerror = function() {
      console.log('Unable to read file');
    };
  };
  
  input.click();
}
