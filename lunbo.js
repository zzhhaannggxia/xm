/*
* @Author: 18634746074
* @Date:   2018-09-03 19:47:27
* @Last Modified by:   18634746074
* @Last Modified time: 2018-09-03 22:07:56
*/
// img   需要轮播的图片集合
// dot   需要轮播的点的集合
// leftn左箭头，元素
// rightn右箭头，元素
// width 轮播图的宽度，整数
// active 轮播点选中效果的类名
function banner_dj(imga,dot,leftn,rightn,width,active){

 let imga=document.querySelectorAll(".elevteen .container .two .qq");
	let dot=document.querySelectorAll(".elevteen .container .two .bot .bot1");
	let container=document.querySelectorAll(".elevteen .container")[0];
	let leftn=document.querySelectorAll(".elevteen .container .two .control-left")[0];
	let rightn=document.querySelectorAll(".elevteen .container .two .control-right")[0];
	let width=parseInt(getComputedStyle(imga[0],null).width);
	// console.log(img,dot,container,leftn,rightn,width);
	imga[0].style.left=0;
	dot[0].classList.add("active");

	let before=after=0;
	let flag1=true;
	function change(){
		after++;
		if(after==imga.length){
			after=0;
		}
		imga[after].style.left=width+"px";
		animate(imga[before],{left:-width});
		animate(imga[after],{left:0});
		dot[before].classList.remove("active");
		dot[after].classList.add("active");
		before=after;

	}

	function changel(){
		after--;
		if(after==-1){
			after=imga.length-1;
		}
		imga[after].style.left=-width+"px";
		animate(imga[before],{left:width});
		animate(imga[after],{left:0});
		dot[before].classList.remove("active");
		dot[after].classList.add("active");
		before=after;

	}


	leftn.onclick=function(){
		if(!flag){
     		return;
     	}
        if(before==0){
            return;
        }
     	flag=false;
		changel()
	}
	rightn.onclick=function(){
		if(!flag){
     		return;
     	}
       if(before==imga.length-1){
            return;
        }
     	flag=false;
		change()
	}

	for(let j=0;j<dot.length;j++){
         dot[j].onclick=function () {
             if(before==j){
                 return;
			 }
			 else if(before<j){
                 imga[j].style.left=`${width}px`;
                 animate(imga[j],{left:0});
                 animate(imga[before],{left:-widths});
                 dot[before].classList.remove("active");
                 dot[j].classList.add("active");
                 before=after=j;
			 }
             else if(before>j){
                 imga[j].style.left=`${-width}px`;
                 animate(imga[j],{left:0});
                 animate(imga[before],{left:width});
                 dot[before].classList.remove("active");
                 dot[j].classList.add("active");
                 before=after=j;
             }

         }
	 }
}