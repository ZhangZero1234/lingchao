	var eduTop = $(".eduTop");
	var eduMiddle = $('.eduMiddle');
	var eduCover = $(".eduCover");
	var imgBox = $(".imgBox");
	var toplayerHotline = $(".toplayer-hotline");
	var flag2 = 0;
	eduTop.css({height:""+$(window).height()+"px"});
	eduMiddle.css({height:""+$(window).height()+"px"});
	toplayerHotline.css({height:""+$(window).height()+"px"});

// **************************************************************************
	

	eduMiddle.on("mouseover",".imgBox",function(){
		eduCover.show();
		eduCover.animate({top:$(this).offset().top+"px",left:$(this).offset().left+"px"},200);
		// console.log($(this).offset().top);
		// console.log($(this).offset().left);
	});
	// imgBox.on("mouseout",function(){
		
	// });








// **************************************************************************
	$('body').vegas({
			 slides: [
			 { src: 'img/wallpaper1_1.jpg' },
			 { src: 'img/wallpaper1_2.jpg' },
			 { src: 'img/wallpaper1_3.jpg' },
			 { src: 'img/wallpaper1_4.jpg' },
			 ],
			   animation: 'kenburnsDown'
		});
		new WOW().init();

//**************************************************************************

$(window).on('mousewheel', function(event) { 
				if(flag2 == 0)
				{
					flag2 = 1;
			        var step = $(window).height();            //可视区高度
					var cur_top = $(window).scrollTop();    //当前滚过的高度
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
			        	flag2 = 0;  
			        });    
			        
			         
		        } 
		        });    