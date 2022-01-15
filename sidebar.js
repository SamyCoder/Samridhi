
//This is for the sidebar hamburger button
let sidebar = document.querySelector(".intro-options");
let bttn = document.querySelector("#btn");
bttn.addEventListener("click", ()=>{
   sidebar.classList.toggle("open");
});

//This is for clearly indicating which page the user is on currently
var urlPage = document.URL.substring(
    document.URL.lastIndexOf("/") + 1, 
    document.URL.lastIndexOf(".html")
);

//console.log(urlPage);
var style = document.createElement('style');

if (urlPage === "index"){
    //bxs-home
    style.innerHTML =
	'.bxs-home {' +
		'font-size: 3em;' +
		'background-color: rgb(153, 160, 160);' +
	'}';

}else if(urlPage === "education"){
    //bxs-graduation
    style.innerHTML =
	'.bxs-graduation {' +
		'font-size: 3em;' +
		'background-color: rgb(153, 160, 160);' +
	'}';

}else if(urlPage === "experiences"){
    //bx-buildings
    style.innerHTML =
	'.bx-buildings {' +
		'font-size: 3em;' +
		'background-color: rgb(153, 160, 160);' +
	'}';

}else if(urlPage === "projects"){
    //bx-code-alt
    style.innerHTML =
	'.bx-code-alt {' +
		'font-size: 3em;' +
		'background-color: rgb(153, 160, 160);' +
	'}';

}else if(urlPage === "extras"){
    //bxs-ball
    style.innerHTML =
	'.bxs-ball {' +
		'font-size: 3em;' +
		'background-color: rgb(153, 160, 160);' +
	'}';
}

// Get script tag
var ref = document.querySelector('script');
// Insert style
ref.parentNode.insertBefore(style, ref);