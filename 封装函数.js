/*
* @Author: lenovo
* @Date:   2018-08-31 17:12:06
* @Last Modified by:   lenovo
* @Last Modified time: 2018-09-03 15:00:07
*/
// 双下标自动轮播   banner_oi
// 双下标点击轮播   banner_dj
// imgs   需要轮播的图片集合
// dots   需要轮播的点的集合
// banner 放轮播图的盒子，元素
// leftBtn左箭头，元素
// rightBtn右箭头，元素
// widths 轮播图的宽度，整数
// active 轮播点选中效果的类名
// time   轮播间隔的时间
function banner_oi(imgs,dots,banner,leftBtn,rightBtn,widths,active,time){
	imgs[0].style.left=0;
	dots[0].classList.add("active");
	let now=0,next=0;
	let flag=true;
	let t=setInterval(move,time);
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		// 确保下一张图永远在最右侧
		imgs[next].style.left=widths+"px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
    }
    function movel(){
    	next--;
		if(next==-1){
			next=imgs.length-1;
		}
		// 确保下一张图永远在最右侧
		imgs[next].style.left=-widths+"px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0},function(){
			flag=true;
		});
		dots[now].classList.remove("active");
		dots[next].classList.add("active");
		now=next;
    }
    // 在一次点击效果没有执行完成之前不能开始下一次的执行
    leftBtn.onclick=function(){
    	if(!flag){
    		return;
    	}
    	flag=false;
    	movel()
    }
    rightBtn.onclick=function(){
    	if(!flag){
    		return;
    	}
    	flag=false;
    	move()
    }
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(move,time);
    }
    for(let i=0;i<dots.length;i++){
    	dots[i].onmouseover=function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
    	        imgs[j].style.left=widths+"px";
			}
			imgs[i].style.left=0;
		    dots[i].classList.add("active");
			now=i;
			next=i;
        }
    }
    window.onblur=function(){
    	clearInterval(t);
    }
    window.onfocus=function(){
    	t=setInterval(move,time);
    }

}







// imgs   需要轮播的图片集合
// dots   需要轮播的点的集合
// leftBtn左箭头，元素
// rightBtn右箭头，元素
// widths 轮播图的宽度，整数
// active 轮播点选中效果的类名
function banner_dj(imgs,dots,leftBtn,rightBtn,widths,active){
	 imgs[0].style.left=0;
	 dots[0].classList.add("active");
	 let now=0,next=0;
	 let flag=true;
	 function move(){
	 	next++;
	 	if(next==imgs.length){
	 		next=0;
	 	}
	 	// 确保下一张图永远在最右侧
	 	imgs[next].style.left=widths+"px";
	 	animate(imgs[now],{left:-widths});
	 	animate(imgs[next],{left:0},function(){
	 		flag=true;
	 	});
	 	dots[now].classList.remove("active");
	 	dots[next].classList.add("active");
	 	now=next;
     }
     function movel(){
     	next--;
	 	if(next==-1){
	 		next=imgs.length-1;
	 	}
	 	// 确保下一张图永远在最左侧
	 	imgs[next].style.left=-widths+"px";
	 	animate(imgs[now],{left:widths});
	 	animate(imgs[next],{left:0},function(){
	 		flag=true;
	 	});
	 	dots[now].classList.remove("active");
	 	dots[next].classList.add("active");
	 	now=next;
     }
     // 在一次点击效果没有执行完成之前不能开始下一次的执行
     leftBtn.onclick=function(){
     	if(!flag){
     		return;
     	}
        if(now==0){
            return;
        }
     	flag=false;
     	movel()
     }
     rightBtn.onclick=function(){
     	if(!flag){
     		return;
     	}
        if(now==imgs.length-1){
            return;
        }
     	flag=false;
     	move()
     }
     for(let i=0;i<dots.length;i++){
         dots[i].onclick=function () {
             if(now==i){
                 return;
			 }
			 else if(now<i){
                 imgs[i].style.left=`${widths}px`;
                 animate(imgs[i],{left:0});
                 animate(imgs[now],{left:-widths});
                 dots[now].classList.remove("active");
                 dots[i].classList.add("active");
                 next=now=i;
			 }
             else if(now>i){
                 imgs[i].style.left=`${-widths}px`;
                 animate(imgs[i],{left:0});
                 animate(imgs[now],{left:widths});
                 dots[now].classList.remove("active");
                 dots[i].classList.add("active");
                 next=now=i;
             }

         }
	 }
}