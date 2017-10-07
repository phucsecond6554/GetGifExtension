(function(){
  function create_image(url){
    var image = document.getElementById("image");
    image.src = url;
    image.onload = function(){
      timer();
      console.log("Loaded");
    }
  };

  var timer = function(){
    var time = 10;
    var loop = setInterval(function(){
      document.getElementById("timeout").innerHTML = time--;

      if(time == 0){
        clearInterval(loop);
        get_random_image();
      }
    }, 1000);
  } // Ham dem nguoc thoi gian

  function get_random_image(){
    var tag = document.getElementById("tag").value; // Lay tag nguoi dung muon
    var key = "WpjKa9QGhqZloHgpgWrXmOxG7d8rgLR4";
    var url = `http://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`; // Url

    document.getElementById("current_tag").innerHTML = tag;

    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      create_image(data.data.image_url);
    })
  }

  get_random_image();
  //clearInterval(loop);

})();
