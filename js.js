window.addEventListener("resize", ()=>{
	if(screen.width > 1200){
		document.getElementById('iml').src="images/illustration-laptop-desktop.svg";
	}
	else{
		document.getElementById('iml').src="images/illustration-laptop-mobile.svg";
	}
});
if(screen.width > 1200){
		document.getElementById('iml').src="images/illustration-laptop-desktop.svg";
	}
	else{
		document.getElementById('iml').src="images/illustration-laptop-mobile.svg";
	}

window.addEventListener("scroll", ()=>{
	if(document.getElementsByTagName('div')[0].getBoundingClientRect().bottom < 80){
		$('nav').css("background-color","rgba(0,0,0,0.3)");
	}
	else{
		$('nav').css("background-color","transparent");
	}
});