var fl = 0;

var ablumTop = $(".ablumTop");
var ablumMiddle = $(".ablumMiddle");
var ablumBottom = $(".ablumBottom");
ablumTop.css({height:""+$(window).height()+"px"});
ablumMiddle.css({height:""+$(window).height()+"px"});
ablumBottom.css({height:""+$(window).height()+"px"});
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


	$(window).on('mousewheel', function(event) { 
				if(fl == 0)
				{
				fl = 1;

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
		        	fl = 0;  
		        });    
		        
		         return false;
		        }
	    	});