var images = ["estro.gif", "sky_top_left.gif"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 2);
	event.target.src = images[imgState];
});
