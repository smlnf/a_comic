//Declare an image array same as calling new Array();
var img = []
img[0] = "http://2.bp.blogspot.com/-DNISePZjJ4g/U9bSB5NjEzI/AAAAAAAARCw/K7OGOPjQd0Q/s1600/2.png";
img[1] = "http://4.bp.blogspot.com/-MoL1MHN12Eo/U9bSB6EIS-I/AAAAAAAARCs/gUSKbzsg05g/s1600/3.png";
img[2] = "http://2.bp.blogspot.com/-8ChQ3SBxYOY/U9bSBt4bcMI/AAAAAAAARDE/zLDJ1kP903A/s1600/1.png";


//Select all elements on the page with the name attribute equal to VCRImage
var images = document.querySelectorAll('[id=test]');

//For each image bind the click event
for(var i=0; i < images.length; i++)
{
  var image = images[i];
  //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
  image.addEventListener('click', imageClicked(), false);
}

function imageClicked()
{
  //Use a closure to wrap the counter variable
  //so each image element has their own unique counter
  var counter = 0;
  return function(event)
  {
    //Increment counter
    counter++;
    //The context of "this" is the image element
    //Use a modulus
    this.src = img[counter % img.length];
  }
}
