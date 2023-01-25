//Declare an image array same as calling new Array();
var img = []
img[0] = "sky_top_left.gif";
img[1] = "face.gif";
img[2] = "estro.gif";

//Select all elements on the page with the name attribute equal to test
var images = document.querySelectorAll('[class=test]');

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

//Declare an image array same as calling new Array();
var img1 = []
img1[0] = "sky_middle_left.gif";
img1[1] = "leg_left.gif";
img1[2] = "green_screen.gif";

//Select all elements on the page with the name attribute equal to test
var images1 = document.querySelectorAll('[class=test1]');

//For each image bind the click event
for(var i=0; i < images1.length; i++)
{
  var image1 = images1[i];
  //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
  image1.addEventListener('click', imageClicked1(), false);
}

function imageClicked1()
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
    this.src = img1[counter % img1.length];
  }
}
