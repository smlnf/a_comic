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

var img4 = []
img4[0] = "thorns_left.gif";
img4[1] = "sky_bottom_left.gif";
img4[2] = "glitch_left.gif";

var images4 = document.querySelectorAll('[class=test4]');

for(var i=0; i < images4.length; i++)
{
  var image4 = images4[i];

  image4.addEventListener('click', imageClicked4(), false);
}

function imageClicked4()
{

  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img4[counter % img4.length];
  }
}

var img5 = []
img5[0] = "thorns_right.gif";
img5[1] = "sky_bmiddle_left.gif";
img5[2] = "leg.gif";

var images5 = document.querySelectorAll('[class=test5]');

for(var i=0; i < images5.length; i++)
{
  var image5 = images5[i];

  image5.addEventListener('click', imageClicked5(), false);
}

function imageClicked5()
{

  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img5[counter % img5.length];
  }
}

var img6 = []
img6[0] = "mouth.gif";
img6[1] = "sky_bmiddle_right.gif";
img6[2] = "glitch.gif";

var images6 = document.querySelectorAll('[class=test6]');

for(var i=0; i < images6.length; i++)
{
  var image6 = images6[i];

  image6.addEventListener('click', imageClicked6(), false);
}

function imageClicked6()
{

  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img6[counter % img6.length];
  }
}

var img7 = []
img7[0] = "hand_bottom.gif";
img7[1] = "sky_bottom_right.gif";
img7[2] = "drip.gif";

var images7 = document.querySelectorAll('[class=test7]');

for(var i=0; i < images7.length; i++)
{
  var image7 = images7[i];

  image7.addEventListener('click', imageClicked7(), false);
}

function imageClicked7()
{

  var counter = 0;
  return function(event)
  {
    counter++;
    this.src = img7[counter % img7.length];
  }
}
