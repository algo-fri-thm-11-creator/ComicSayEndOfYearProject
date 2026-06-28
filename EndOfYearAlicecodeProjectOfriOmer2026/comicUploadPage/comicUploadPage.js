function handleImageUpload() 
{
    var image = document.getElementById("upload").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("display-image").src = e.target.result;
    }
    reader.readAsDataURL(image);
}

function handleImageUpload2() 
{
    var image = document.getElementById("uploadPageBackground").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("display-image2").src = e.target.result;
    }
    reader.readAsDataURL(image);
}

function playMusic() {
      var musicFile = document.getElementById("uploadBackgroundMusic").files[0];
      var musicPlayer = document.getElementById("musicPlayer");
      musicPlayer.src = URL.createObjectURL(musicFile);
      musicPlayer.play();
    }