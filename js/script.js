$(function(){
	 flag = 0;
	var position={top:0};
	var toplayerTop = $(".toplayer-top");
	var toplayerMiddle = $(".toplayer-middle");
	var toplayerBottom = $(".toplayer-bottom");
	var toplayerHotline = $(".toplayer-hotline");
	var smoothbtn = $(".smoothbtn");
	// console.log($(window).innerHeight());
	toplayerTop.css({height:""+$(window).innerHeight()+"px"});
	toplayerMiddle.css({height:""+$(window).innerHeight()+"px"});
	toplayerBottom.css({height:""+$(window).innerHeight()+"px"});
	toplayerHotline.css({height:""+$(window).innerHeight()+"px"});
	smoothbtn.on("click",function(){
		// $(this).data("am-smooth-scroll")="{position: " +$(window).innerHeight()+" , speed: 2000}";
		// console.log($(this).data("am-smooth-scroll"));

		$(this).attr("data-am-smooth-scroll","{position: " +$(window).innerHeight()+" , speed: 1000}")
		// console.log($(this).attr("data-am-smooth-scroll").position);
	});
	// *********************************************************************************
		var navbarNavLi = $(".navbar-nav li");
		navbarNavLi.on("click",function(){
			console.log($(this).index());
			$(this).attr("data-am-smooth-scroll","{position: " +$(window).innerHeight()*$(this).index()+" , speed: 1000}")
		});

	// *********************************************************************************
		var swiperNav = $(".swiperNav");
		var swiperCover = $(".swiperCover");
		var licover = $(".licover");
		var li = $(".swiperImg li");
		var ul = $(".swiperImg ul");
		ul.css({width:licover.length*li.width()+"px"});
		// console.log(swiperNav.width());
		$("body").stop().on("mouseover",".licover",function(){
			 var that = $(this);
			 swiperCover.animate({top:that.parent("li").position().top +"px"},300,function(){});
			 console.log(li.width());
			  ul.animate({left:-that.parent("li").data("target")*li.width()+"px"},500,function(){
			  });
		});

	// *************************************************************************************
		
			$(window).on('mousewheel', function(event) { 
				if(flag == 0)
				{
				flag = 1;

			 	// console.log(event.originalEvent.wheelDelta);
			 	var delta = event.originalEvent.wheelDelta;
			 	// console.log(delta);
		        //var direction = delta > 0 ? 'Up' : 'Down';
		        var step = $(window).height();            //可视区高度
		        var cur_top = $(window).scrollTop();    //当前滚过的高度
		        var direction = delta > 0 ? -1 : 1;
		        var height = cur_top + direction *step;
		        var x_height = Math.floor(height/step)*step;    //滚过整数倍的可视区大小
		        // console.log(cur_top);
		        // console.log($("body").height()-$(window).height());
		        $("body,html").animate({ scrollTop: x_height },1200,function(){
		        	flag = 0;  
		        });    
		        
		         return false;
		        }
	    	});
		
		 
	// *************************************************************************************



	var that;
		$("body").on("mouseover",".cover",function(){
			that = $(this);
			that.siblings(".tip").show();
			that.siblings(".coverTop").stop().animate({"top":"-424px","left":"-357px"});
			that.siblings(".coverBottom").stop().animate({"top":"-10px","left":"102px"},300,function(){
				 that.siblings(".tip").stop().animate({height:"100px",marginTop:"-50px"},100,function(){
				 });
				that.siblings(".tip").addClass("rotate");
				// console.log($(this));
			});
		});
		$("body").on("mouseout",".cover",function(){
			$(".tip").hide();
			$(".tip").removeClass("rotate");
			$(".tip").css({"height":"0px","marginTop":"0"});
			$(".coverTop").stop().animate({"top":"-642px","left":"-642px"});
			$(".coverBottom").stop().animate({"top":"342px","left":"342px"},function(){
			});

		});

	$('body').vegas({
		 slides: [
		 { src: 'img/wallpaper1_1.jpg' },
		 { src: 'img/wallpaper1_2.jpg' },
		 { src: 'img/wallpaper1_3.jpg' },
		 { src: 'img/wallpaper1_4.jpg' },
		 ],
		  // transition: 'blur',
		  animation: 'kenburns'
	});

	new WOW().init();
});