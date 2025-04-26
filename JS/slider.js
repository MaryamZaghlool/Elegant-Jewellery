
/************************ slider **************************/

var slider = document.getElementsByClassName("slider")[0]
var image = document.getElementById("slider-image")
var left = document.getElementsByClassName("fa-chevron-left");
var right = document.getElementsByClassName("fa-chevron-right");
var recent = 0;
var allImages = ["https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://i.pinimg.com/736x/e2/b6/d6/e2b6d6654ff065f4d8bfdb4854606bf3.jpg", "https://i.pinimg.com/736x/91/8c/89/918c895878d70a7fd4f163dac8eb473d.jpg", "https://i.pinimg.com/736x/7e/f1/9a/7ef19afe84043427748c670e068c4ab6.jpg", "https://i.pinimg.com/736x/37/6d/7e/376d7e79b0e54fcaa59447e6d735f2e6.jpg"]
function nextImage() {
    recent = (recent + 1) % allImages.length;
    image.setAttribute("src", allImages[recent])
}
function previousImage() {
    recent = (recent - 1 + allImages.length) % allImages.length;
    image.setAttribute("src", allImages[recent])
}

setInterval(nextImage, 2000)