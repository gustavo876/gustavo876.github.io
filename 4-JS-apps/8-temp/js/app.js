//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append//add the <img> to the <div> in $overlay
($image);

$overlay.append//add the <p> as the caption to the <img>
($caption);

$("body").append//add the $overlay content to the <body> with its attachments 
($overlay);

$("#imageGallery a").click//when one of the images is clicked, do the below function statements
(function(event){
  event.preventDefault();//prevent the Default event when image is clicked (image was shown in a new blank page)
  var imageLocation = $(this).attr("href");//get the value of "href" property of the clicked image
  
  $image.attr("src", imageLocation);//change the "src" value to the newly clicked image  "href" value to appear over all the imgs
  
  $overlay.show();//display the <div> with all its attached elements
  
  var captionText = $(this)//a reference to the clicked image
  .children("img")//a reference to the <img> of the clicked image
  .attr("alt");//get the "alt" attribute value
  $caption.text(captionText);//set the text content of the $caption to "captionText" text
});

//When overlay is clicked
$overlay.click
(function(){
  //Hide the overlay
  $overlay.hide();
});