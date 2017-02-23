$(function(){
	var num = 0;
	var timer = null;
	clearInterval(timer);
	$(".cut li").each(function(index,ele){
		/*console.log($(this).children());*/
		$(this).css({"left":112*index+"px","transition-delay":0.2*index+"s"});
		$(this).children("div").css({
			"backgroundPosition":-index*112+"px"					
		});
	})
	$(".cut").on("mouseenter",function(){
		clearInterval(timer);
		$("span").css("display","block");			
	})
	$(".cut").on("mouseleave",function(){
		$("span").css("display","none");	
		timer = setInterval(function(){				
			num++;
			move();
		},2800);
	})
	$(".next").on("click",function(){
		clearInterval(timer);	
		num++;
		move();
	})
	$(".prev").on("click",function(){
		clearInterval(timer);
		num--;
		move();
	})

	function move(){
		$(".cut li").css("transform","rotateX("+num*90+"deg)");
	}

	timer = setInterval(function(){				
		num++;
		move();
	},2800);
})