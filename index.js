var webStyle = document.getElementById("menu");
var pos = 0;
var zoom1 = document.getElementById("zoom");

 

 document.getElementById("bg1").addEventListener("click", function(){
             document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)";
             document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)";
             document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)";




            })


document.getElementById("bg2").addEventListener("click", function(){
             document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)";
             document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)";
             document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)";



            })

document.getElementById("bg3").addEventListener("click", function(){
             
             document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)";
             document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)";
             document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)";



            })


document.getElementById("bg4").addEventListener("click", function(){
		     document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)";
             document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)";
             document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)";


            })



//change background for first thumb
document.getElementById("ch1").onmouseenter = function() {
	mouseEnter1()
};

function mouseEnter1(){
		currentback = document.getElementById("ch1").style.backgroundImage;
		document.getElementById("zoom").style.backgroundImage = currentback;

}



//change background for second thumb
document.getElementById("ch2").onmouseenter = function() {
	mouseEnter2()
};

function mouseEnter2(){
		currentback = document.getElementById("ch2").style.backgroundImage;
		document.getElementById("zoom").style.backgroundImage = currentback;

}


//change background for third thumb
document.getElementById("ch3").onmouseenter = function() {
	mouseEnter3()
};

function mouseEnter3(){
		currentback = document.getElementById("ch3").style.backgroundImage;
		document.getElementById("zoom").style.backgroundImage = currentback;

}













