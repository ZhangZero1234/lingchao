
	flag1 = 0;
	var softTop = $(".softTop");
	var softMiddle = $(".softMiddle");
	var softBottom = $(".softBottom");
	var toplayerHotline = $(".toplayer-hotline");
	softTop.css({height:""+$(window).innerHeight()+"px"});
	softMiddle.css({height:""+$(window).innerHeight()+"px"});
	softBottom.css({height:""+$(window).innerHeight()+"px"});
	toplayerHotline.css({height:""+$(window).innerHeight()+"px"});


	// ******************************************************
	
	

	$('body').vegas({
		 slides: [
		 { src: 'img/wallpaper1_1.jpg' },
		 { src: 'img/wallpaper1_2.jpg' },
		 { src: 'img/wallpaper1_3.jpg' },
		 { src: 'img/wallpaper1_4.jpg' },
		 ],
		  // transition: 'blur',
		   transition: 'swirlRight'
	});
	new WOW().init();
	$(window).on('mousewheel', function(event) { 
				if(flag1 == 0)
				{
					flag1 = 1;
				 	// var delta = event.originalEvent.wheelDelta;
			        var step = $(window).height();            //可视区高度
					var cur_top = $(window).scrollTop();    //当前滚过的高度
					// console.log(cur_top);
			  //       var direction = event.originalEvent.wheelDelta > 0 ? -1 : 1;
			  //       var x_height = Math.floor(cur_top/step)*step + direction *step;    //滚过整数倍的可视区大小
			  //       console.log(x_height);
			  if(event.originalEvent.wheelDelta>0)
			  {
			  	var x_height = Math.floor(cur_top/step)*step - step;
			  	if(x_height <= 0)
			  	{
			  		x_height = 0;
			  	}
			  }
			  else{
			  	var x_height = Math.floor(cur_top/step)*step + step;
			  	if(x_height>=4*step)
			  	{
			  		x_height=4*step;
			  	}
			  }
			        $("body").stop().animate({ scrollTop: x_height },1200,function(){
			        	flag1 = 0;  
			        });    
			        
			         
		        }
	    	});