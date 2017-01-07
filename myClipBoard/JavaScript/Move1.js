// JavaScript Document
//为了清除 border margin 和ppadding的影响
function getStyle(obj,attr){//获取样式
	if(obj.currentStyle){//针对IE浏览器
		return obj.currentStyle[attr];
		}
	else{//针对火狐或谷歌
		return getComputedStyle(obj,false)[attr];
		}
	}

function startMove(obj,json,fn){
	var flag = true;//假设所有的运动都到达目标值
	clearInterval(obj.timer);
     obj.timer = setInterval(function(){
		 
		 
		for(var attr in json){//同时运动的循环
			
			var icur = 0;
		if(attr == 'opacity'){//判断样式 获取样式值
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}
		else{
			icur = parseInt(getStyle(obj,attr));
		}
		//设置速度值
		var speed = (json[attr]-icur)/8; 
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		//判断是否所有的属性到达目标值
		if(icur != json[attr]){
			flag = false;
			}
	   //执行动画
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(icur+speed)+')';
				obj.style.opacity = (icur+speed)/100;
				}
			else{
				obj.style[attr] = icur+speed+'px';
			}
		//所有值都到达目标值	
		if(flag == true){
			clearInterval(obj.timer);
			if(fn){fn();}
			}
		}
		},30)
			
	}
		
		
		
	
	