function resizeMenu(menu, btn, swithClass) {
	
	window.onresize = function() {
        if (window.innerWidth > 920 || btn.classList.contains(swithClass)) {
            menu.style.display = "flex";
            btn.classList.remove(swithClass);
        } else if (window.innerWidth < 921) {
            menu.style.display = "none";
        }
	}
	
	btn.onclick = function() {
        btn.classList.toggle(swithClass);
        if (btn.classList.contains(swithClass)) {
            menu.style.display = "flex"; 			//использовать проперти в style.css
        } else {
            menu.style.display = "none";
        }
	}
	
}

let resizeMen = new resizeMenu(document.getElementById("menu"), document.querySelector(".top-nav-btn"), "change");

/*

	//	Простой пример

document.querySelector(".top-nav-btn").onclick = function() {
	let menu = document.getElementById("menu");
	this.classList.toggle("change");
	
	if (this.classList.contains("change")) {
		menu.style.display = "flex";			//использовать проперти в style.css
	} else {
		menu.style.display = "none";
	}
}

window.onresize = function() {
	let menu = document.getElementById("menu");
	let btn = document.querySelector(".top-nav-btn");
	if (window.innerWidth > 920 || btn.classList.contains("change")) {
		menu.style.display = "flex";
		btn.classList.remove("change");
	} else if (window.innerWidth < 921) {
		menu.style.display = "none";
	}
}
*/

