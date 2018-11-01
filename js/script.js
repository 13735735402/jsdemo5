var imgs = [
	"img/01.jpg",
	"img/02.jpg",
	"img/03.jpg",
	"img/04.jpg",
	"img/05.jpg"
];
var id = 1;
var img = document.getElementById("img");
var timer = setInterval(autoplay,1500);
var liNodes = document.getElementById("count").getElementsByTagName("li");
function autoplay(){
	if(id<5){
		img.src = imgs[id];
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		liNodes[id].classList.add("current");
		id++;
	}else{
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		liNodes[0].classList.add("current");
		img.src = "img/01.jpg";
		id = 1;
	}
}
 
for(var i = 0;i<liNodes.length;i++){
	liNodes[i].index = i;
	liNodes[i].onmouseover = function(){
		clearInterval(timer);
		for(var j = 0;j<liNodes.length;j++){
			liNodes[j].classList.remove("current");
		}
		this.classList.add("current");
		id = this.index;
		img.src = imgs[this.index];
	};
	liNodes[i].onmouseout=function(){
		timer = setInterval(autoplay,1500);
	}
}
/*-----------------------------------------------------------*/
var xid = 1;
var xtimer = setInterval(play,1500);
var box4 = document.getElementById("box4");
var xliNodes = document.getElementById("count2").getElementsByTagName("li");
function play (){
	if(xid<5){
		$("#box4").animate({marginLeft:-xid*100+"%"});
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[xid].classList.add("current");
		xid++;
	}else{
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[0].classList.add("current");
		box4.style.marginLeft = "0";
		xid = 1;
	}
}
for(var i = 0;i<xliNodes.length;i++){
	xliNodes[i].index = i;
	xliNodes[i].onmouseover = function(){
		clearInterval(xtimer);
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		this.classList.add("current");
		xid = this.index;
		box4.style.marginLeft = -xid*100+"%";
	};
	xliNodes[i].onmouseout=function(){
		xtimer = setInterval(play,1500);
	}
}
var next = document.getElementById("next");
var prev = document.getElementById("prev");
next.onmouseover = function(){
	clearInterval(xtimer);
}
next.onmouseout = function(){
	xtimer = setInterval(play,1500);
}
prev.onmouseover = function(){
	clearInterval(xtimer);
}
prev.onmouseout = function(){
	xtimer = setInterval(play,1500);
}
next.onclick = function(){
	if(xid<5){
		$("#box4").animate({marginLeft:-(xid)*100+"%"});
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[xid].classList.add("current");
		xid++;
	}else{
		box4.style.marginLeft = 0;
		xid = 1;
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[0].classList.add("current");
	}
	
}
prev.onclick = function(){
	if(xid<=5&&xid>1){
		$("#box4").animate({marginLeft:-(xid-2)*100+"%"});
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[xid-2].classList.add("current");
		xid--;
	}else{
		box4.style.marginLeft = "-400%";
		xid = 5;
		for(var j = 0;j<xliNodes.length;j++){
			xliNodes[j].classList.remove("current");
		}
		xliNodes[4].classList.add("current");
	}
}
