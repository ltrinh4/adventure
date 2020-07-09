function progress(){
  var percent = document.querySelector('.percent');
  var progress = document.querySelector('.progress');
  var text = document.querySelector('.text');
  var count = 4;
  var per = 16;
  var loading = setInterval(animate, 50);
  function animate(){
    if(count == 100 && per == 400){
      percent.classList.add("text-blink");
      text.style.display = "block";
      clearInterval(loading);
    }else{
      per = per + 4;
      count = count + 1;
      progress.style.width = per + 'px';
      percent.textContent = count + '%';
    }
  }
}
progress();

$('body').append('<div style="" id="loadingDiv"><div class="loading">Loading...</div></div>');
$(window).on('load', function(){
  $( "#loadingDiv" ).show();
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).hide(); //makes page more lightweight
  });
}
