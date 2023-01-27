//Declare an image array same as calling new Array();
var img = []
img[0] = "estro.gif";
img[1] = "sky_top_left.gif";
img[2] = "face.gif";

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

var img1 = []
img1[0] = "green_screen.gif";
img1[1] = "sky_middle_left.gif";
img1[2] = "leg_left.gif";

var images1 = document.querySelectorAll('[class=test1]');

for(var i=0; i < images1.length; i++)
{
  var image1 = images1[i];
  image1.addEventListener('click', imageClicked1(), false);
}

function imageClicked1()
{
  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img1[counter % img1.length];
  }
}


var img2 = []
img2[0] = "teeth.gif";
img2[1] = "sky_middle_right.gif";
img2[2] = "leg_right.gif";

var images2 = document.querySelectorAll('[class=test2]');

for(var i=0; i < images2.length; i++)
{
  var image2 = images2[i];
  image2.addEventListener('click', imageClicked2(), false);
}

function imageClicked2()
{
  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img2[counter % img2.length];
  }
}


var img3 = []
img3[0] = "hand_top.gif";
img3[1] = "sky_top_right.gif";
img3[2] = "blue.gif";

var images3 = document.querySelectorAll('[class=test3]');

for(var i=0; i < images3.length; i++)
{
  var image3 = images3[i];

  image3.addEventListener('click', imageClicked3(), false);
}

function imageClicked3()
{

  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img3[counter % img3.length];
  }
}
