
$(()=>{
new WOW().init();
	$('.menu').click(function(){
		$('.menu').toggleClass('change');
		if($('.menubar').css("display")=='none'){
			$('.menubar').css("display","block")
			$('.menubar a').addClass('animated');
		}
		else{
			$('.menubar').css("display","none")
			$('.menubar a').removeClass('animated');
		}
	});
	

	$(window).on("scroll",function(){
		  if($(window).scrollTop() <= 40){
      $('.topnav').removeClass('top_panel_fixed');
      $('.menubar').css("top","20vh")
    } else {
     $('.topnav').addClass('top_panel_fixed');
    $('.menubar').css("top","10vh")
 }
	});

	$('.brouche').on("click",function(){
		$(".brouche-content").addClass("brouche-visible");
		 $(".page-content").css("width","70%")
	});

	$(".brouche-content button").on("mouseover",function(){$(this).addClass("hoverbtn")});
	$(".brouche-content button").on("mouseleave",function(){$(this).removeClass("hoverbtn")});
	$(".brouche-content button").on("click",function(){
		$(".brouche-content").removeClass("brouche-visible");
		$(".page-content").css("width","100%")
	});

	$('.suite').on("click",function(){
		$(".suite-content").addClass("suite-visible");
		 $(".page-content").css("margin-left","30%")
	});
	$(".suite-content button").on("mouseover",function(){$(this).addClass("hoverbtn")});
	$(".suite-content button").on("mouseleave",function(){$(this).removeClass("hoverbtn")});
	$(".suite-content button").on("click",function(){
		$(".suite-content").removeClass("suite-visible");
		$(".page-content").css("margin-left","0")
	});
	
 	var modal = document.getElementById("myModal");
 
	$(".register").click(function(){
  		modal.style.display = "block";
  		$('body').css("overflow","hidden");
	});
	$('.close-register').click(function(){
		modal.style.display = "none";
		$('body').css("overflow","auto");
	});

	var slides = $('.slide-container img');
	var i =0;
	var size = $(slides[0]).prop("clientWidth");
	$('#nextcl').click(function(){
		++i;

		slides.css({"transition":"none"});
		if(i>=$('.slide-container img').length){
			i=0;	
		}
		else{
			slides.css({"transition":"2s","transition-timing-function":"ease"})
		}
		slides.css("transform","translateX("+(-1)*size*i+"px)");
	});
	$('#prevcl').click(function(){
		--i;
		slides.css({"transition":"none"});
		if(i<0)
			i=$('.slide-container img').length-1;
		else{
			slides.css({"transition":"2s","transition-timing-function":"ease"})
		}
		console.log($('.slide-container img').length);
		slides.css("transform","translateX("+(-1)*size*i+"px)");
	});
var t = setInterval(function(){
	$("#nextcl").trigger('click');
},3000);

});

