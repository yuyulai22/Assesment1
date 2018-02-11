 
var webStyle = document.getElementById("menu");
var pos = 0;
var height = 340;

// When Open <button> is clicked on, change the menu style’s left to 0px.
//  When Close <button> is clicked on, change the menu style’s left back to -110px 

 document.getElementById("open").addEventListener("click", function(){
                 webStyle.style.left = pos + "px";



            })


document.getElementById("close").addEventListener("click", function(){
                 webStyle.style.left = -110 + "px";



            })




document.getElementById("makeBg").addEventListener("click", function(){

		currentback1 = document.getElementById("zoom").style.backgroundImage;
		document.getElementById("bg").style.backgroundImage = currentback1;



 })


document.getElementById("reset").addEventListener("click", function(){

		
		document.getElementById("bg").style.backgroundImage = "none";



 })

document.getElementById("showApp").addEventListener("click", function(){

		
		document.getElementById("app1").style.display = "block";



 })

document.getElementById("hideApp").addEventListener("click", function(){

		
		document.getElementById("app1").style.display = "none";



 })

document.getElementById("zoom").addEventListener("click", function(){

		
		document.getElementById("zoomcontrols").style.display = "block";


 })


document.getElementById("big").addEventListener("click", function(){
		
		height = height + 10;
		document.getElementById("zoom").style.height = height + "px";


 })


document.getElementById("small").addEventListener("click", function(){

		
		// currW = document.getElementById("zoom").style.width;
		// document.getElementById("zoom").style.width = (currW  * 0.93);

		zoom1 = document.getElementById("zoom");
		height = height - 10;
		zoom1.style.height = height + "px";


 })