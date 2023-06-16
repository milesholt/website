(function () {
'use strict';

//disable animation extend plugin on everything by default, we only need this for grid_wrap in ToggleMenu function, with use of useCSSTransitions property.
$.setDisabledByDefault(true); //this option has been created by plugin

var player;

var img_path = 'assets/images/projects/';

var projects = [
         {
         "id":1,
         "title": "Renault",
         "alias": "renault",
		 	 	 "total" : 6,
         "slides": [
             {
                 "heading": "Brief",
                 "description" : "<p>Motorline Renault were looking to promote their Used Car event by featuring a selection of the Renault models available. The aim was to create a stylish, entrancing piece, showcasing the models, while enforcing Renault’s brand.</p>"
             },
			 {
                 "heading": "Solution",
                 "description" : "<p>With an understanding of the Renault ethos; playful, light-hearted and very true to its French roots, the approach was to find a means in how these values could be blended together, into an innovative and creative solution.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>My intention was to showcase the quality and precision of the car's performance and design. And as a nod to the Renault emblem, the final solution, became a fun, choreographic performance from the cars, forming geometric shapes within an abstract yet vibrant environment that enforces the brand's primary colour.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
	  {
         "id":2,
         "title": "Toni and Guy",
         "alias": "photography",
		     "total" : 5,
         "slides": [
             {
                 "heading": "",
                 "description" : "<p>Whilst a freelance photographer, I was requested to do a shoot on behalf of Toni&Guy, for a competition that they were entering for the L’Oreal Photography Awards.</p>"
             },

			 {
                 "heading": "",
                 "description" : ""
             },
			 {
			 	"heading":"",
				"description":"<p>My intention was to convey a certain character for each model, based on their look and what they were assigned to wear. Each character was developed and worked on throughout the shoot, where I directed the model through a thought process which then permeated into their disposition and expression.</p>"
			 },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : ""
             }
         ]
     },
	  {
         "id":3,
         "title": "M.U.D",
         "alias": "mud",
		     "total" : 5,
         "slides": [
             {
                 "heading": "",
                 "description" : "<p>M.U.D was a theatrical production which focused on the experiences and situations surrounding Leukemia. The script was a poem, shared between two characters.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : "<p>I became involved as creative director, to adapt the piece into an animation as part of a sister project. I worked with the writer, to develop a visual representation of the poem, and to formulate a style that would respect the tone of the piece.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
	  {
         "id":4,
         "title": "Lexus",
         "alias": "lexus",
		     "total" : 3,
         "slides": [
             {
                 "heading": "Brief",
                 "description" : "<p>The football club Leyton Orient were being sponsored by Lexus Woodford, so the aim of the material was to create a connection between the two parties by finding a balance between football and Lexus, but to emphasise Lexus Woodford’s support as the core message. I was responsible for the creation of the following concepts.</p>"
             },
			 {
                 "heading": "Solution",
                 "description" : "<p>The adverterials would be displayed in the F.C’s local stadium, so the target audience was primarily the club’s fans. With this in mind, the first step was to do research into the club and to gather any insights that could be used in the campaign. It was a priority for the message to be clear and obvious to the viewer.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>As a result, it was placed at the top of each concept, with the last line being a football-related pun, from which would unfold the visual. In one concept, the last line reads ‘Here’s to the O’s’, which is the nickname for the Leyton Orient F.C. In the image, both the ball and the wheel represent an O, and so the line, while in support of the club, could be interpreted as the love for both sport and cars.</p>"
             }


         ]
     },
	  {
         "id":5,
         "title": "Fail Deadly",
         "alias": "fail-deadly",
		     "total" : 3,
         "slides": [
             {
                 "heading": "",
                 "description" : "<p>This was a short film which I wrote, directed, and edited as part of practical course I took in filmmaking. The objective of the course at the end, was to work with a film crew and direct a short in two hours, where we were given three weeks to write a 1 min piece.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The film is a black comedy, set in Russia during 1941. The plot centre’s on two would be assassins, and their foiled attempt to assassinate Stalin.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The intention of the piece was to follow the format of a one line joke, as the piece could only be a minute. So the challenge was to introduce a story, or in this case, a situation, while being able to deliver a punchline at the end.</p>"
             }
		]
     },
	  {
         "id":6,
         "title": "Hear The Silence",
         "alias": "hearthesilence",
		     "total" : 7,
         "slides": [
             {
                 "heading": "",
                 "description" : "<p>The idea behind this concept was to be able to use our media symbolically in way that reflects or adds emphasis to ‘the silence’ of domestic abuse victims.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>Victims of domestic abuse are known to keep the matter private, and over time psychologically accommodate it. They want to speak up but are afraid to do so, therefore are silent to others, unless the abuse is physical and evident.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : "<p>In this concept, I wanted to communicate their inner voice, by means of breaking a sentence into a series of words that on their own, don’t have significance. They are just words, broken apart, lost within the surroundings.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },
			 {
                 "heading": "",
                 "description" : "<p>But through the use of social media, if people search the hashtag, they will be able to view all the billboards together, with the sentence decrypted and the sentence complete, suggesting their voice as being ‘heard’. The campaign is to bring awareness to this silence, and encourages people to look for the signs.</p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             },

		]
     }
];


var activeproject = {};

//parameters
var showcase = $('#showcase'),
	showcase_mobile = $('#showcase-mobile'),
	show,
	win_height = $(window).height(),
	//menu_icon = $('#menu'),
	mobile_nav = $('#mobile-nav'),
	menu_toggle = $('.menu-toggle'),
	grid_slide = $('.grid-slide'),
	grid_slide_img = $('.grid-slide img'),
	grid_left = $('#grid-left'),
	grid_right = $('#grid-right'),
	grid_wrap = $('#grid-wrap'),
	win_width = $(window).width(),
	project_preview = $('#project-preview'),
	project_info = $('#project-info'),
	project_info_wrap = $('#project-info-wrap'),
	landing = $('#landing-section'),
	landing_cta = $('#landing-cta'),
	bod = $('body');

//$(window).scroll(function() {
//   var hT = $('.m-video').height(),
//       wS = $(this).scrollTop();
//   if (wS > hT) {
//      player.pauseVideo();
//   }
//   else {
//      player.playVideo();
//   }
//});

$(window).on('load', function(){

	//if mobile user agent, add mobile-device class
	if(isMobile()){
		bod.addClass('mobile-device');
	}

	//$('#project-preview').scroll(function() {
	$('#project-section').on('scroll', '#project-preview',function() {
		console.log('scrolling');
	});


	$('html').css({'overflow': 'hidden'});

	landing_cta.click(function(){
		console.log('hide landing');
		hideLanding();
	});

	//track events
	$('*[data-event]').click(function(){
		var evt = $(this).attr('data-event');
		console.log(evt);
		ga('send', 'event', 'Social Link', evt, evt);
	});

	adjustMobile();
	//setTimeout(function(){
		adjustGrid();
		adjustProject();
	//},300);




	//load first project
 	// loadProject(0);

	//handle functions on resize
	$(window).resize(function() {
        //setTimeout(function(){
			doResize();
		//},300);
    });

	//click on an showcase image
	menu_toggle.click(function(){
		toggleMenu();
		loadProject(0);
	});

	//check url for page
	var url = location.href.split('/');
	if(typeof url[4] !== undefined && url[4] !== ''){
		console.log(url[4]);
		$(projects).each(function(i){
			if(projects[i].alias === url[4]){
				hideLanding();
				toggleMenu();
				loadProject(i);
				updateUrl(i);
			}
		});
	}

	grid_slide.click(function(){
		var slideid = $(this).attr('data-slide');
		toggleMenu();
		loadProject(slideid);
		updateUrl(slideid);
	});

	grid_slide.hover(
		function(){
			//console.log('on');
			//$(this).find('img').removeClass('blur-off').addClass('blur-on');
		},function(){
			//console.log('off');
			//$(this).find('img').addClass('blur-off').removeClass('blur-on');
		}
	);

	//project navigation
	$('.project-nav').click(function(){ var direction = $(this).attr('data-direction'); changeProject(direction); });
	//$('body').on('click','.project-nav',function(){ var direction = $(this).attr('data-direction'); changeProject(direction); });

});

function updateUrl(slideid){
	var alias = projects[slideid].alias;
	var title = projects[slideid].title;
	window.history.pushState(alias , title, '/v2/'+alias );
	ga('set', 'page', '/v2/'+alias);
	ga('send', 'pageview');
}

function doResize(){


	win_height = $(window).height();
	win_width = $(window).width();

	adjustMobile();
	adjustProject();
	adjustGrid();

	var resized;
	clearTimeout(resized);
  	resized = setTimeout(resizedw, 300);

}

function loadProject(id){

	console.log('loading project');
	console.log(id);
	//var  h =0;

	$('#project-preview').animate({
		scrollTop: 0
	}, 600, function(){
		console.log('scrolled to top');
	});

	bod.addClass('disable-scroll');
	$('#select_project').val(id);
	activeproject = projects[id];
    project_preview.html('');

	console.log(activeproject.title);

	$('#project-title h1').fadeTo(100,0, function(){ $(this).text(activeproject.title).fadeTo(300,1);  });
	$('#slide-subheading h2').fadeTo(100,0, function(){ $(this).text(activeproject.slides[0].title).fadeTo(300,1);  });
	$('#slide-desc').fadeTo(100,0, function(){ $(this).html(activeproject.slides[0].description).fadeTo(300,1);  });



    for(var i=0; i < activeproject.total; i++){

		var content = '<img class="project-slide" data-slideid="'+i+'" src="'+img_path+'/' + activeproject.alias + '/' + (i+1) + '.jpg" />';
		if(i===0){ content += '<div class="mobile_text_section mobile_title_section"><h1>'+activeproject.title+'</h1></div>';  }
		if(activeproject.slides[i].description !== ''){

			content += '<div class="mobile_text_section">'+
                       '<h4 class="light type-white" style="opacity: 1;">'+activeproject.slides[i].heading+'</h4>' +
                       activeproject.slides[i].description +
                       '</div>';
		}
		//h += $(content).height();
		$(content).appendTo(project_preview);
    }

	$('<div id="project_nav_mobile"><div id="prev_project" class="arrow arrow-prev project-nav" data-direction="prev"><img class="white-arrow" src="assets/icons/arrow-prev_dark.svg" width="60" onerror="this.onerror=null; this.src=\'assets/icons/arrow-prev_dark.png\'"></div><div id="next_project" class="arrow arrow-next project-nav" data-direction="next"><img class="white-arrow" src="assets/icons/arrow-next_dark.svg" width="60" onerror="this.onerror=null; this.src=\'assets/icons/arrow-next_dark.png\'"></div></div>').appendTo(project_preview);


	//show text while scrolling - desktop only

	//$('.left').html(text);
		//$('.left').scroll(function(){
	/*$('.left, #project-preview').on('mousewheel DOMMouseScroll scroll' , function() {
		console.log('scrolling');
	});
	*/

	//get full height of preview
	var h = 0;
	setTimeout(function(){
	 for(var a = 0; a < activeproject.slides.length; a++){
	 	h += $('.project-slide[data-slideid="'+a+'"]').height();
	 }
	},300);

	$('#project-preview').on('mousewheel DOMMouseScroll scroll' , function() {



	 //get project preview's top position
	 //var containertop = $(this).position().top;
	 var containertop = $(this).scrollTop();
	 //then find out how many slides
	 var totalslides = activeproject.slides.length;
	 //then get the height of each slide by finding the difference
	 var difference = (h / totalslides);
	 var lastcount = 0;
	 var range = [];
	 var midpoint = ((parseInt(containertop + $(this).height())/totalslides)+containertop);
	 //loop through slides
	 for(var i =0; i < totalslides; i++){
		 //push ranges for each slide
	 	range.push({"start":(lastcount+1),"end":(lastcount + difference)});
		//each start begins after next slide height
		lastcount = (lastcount + difference);
		//if we finished looping
		if(i === (totalslides-1)){
			//scroll position plus height of window, divided by total slides, then added to scroll position, gives halway point for each slide range.

			//loop again
			for(var j = 0; j < totalslides; j++){
				//but then determine if top position is within range of one of those slides
				if(midpoint > parseInt(range[j].start) && midpoint < parseInt(range[j].end) && $('#current_slide').val() !== String(j)){
					//if it is, set the slide number that we're on
					$('#current_slide').val(j);
					//and show the text for that slide
					if(activeproject.slides[j].description !== ''){
						showText(j,id);
					}
				}
			}
		}
	 }

	});
}

function showText(sid,pid){

	$('#current_slide').val(sid);

	var desc = activeproject.slides[sid].description;
	var hd;

	if(activeproject.slides[sid].heading === ''){

	} else{
		hd = activeproject.slides[sid].heading;
		$('#slide-subheading h2').stop().fadeTo(100,0, function(){ $(this).text(hd).fadeTo(300,1);  });
	}

	$('#slide-desc').stop().fadeTo(100,0, function(){ $(this).html(desc).fadeTo(300,1);  });
}


function toggleMenu(){

	if(bod.hasClass('desktop')){
		//if desktop, slide grid horizontally on/off
		if(grid_wrap.hasClass('on')){

			//slide left
			var l = parseInt('-'+(win_width-grid_right.width()));
			grid_wrap.animate({ left: l, avoidCSSTransitions:false }, { duration: 800, easing: "easeInOutCubic", complete: function(){
			 	$('#project-section').fadeIn('fast');
				grid_wrap.removeClass('on').addClass('off');
				bod.addClass('disable-scroll');
				adjustProject();
			 }
			 });

//			grid_wrap.animate({ left: l }, {
//				step: function (now, fx) {
//					$(this).css({"transform": "translate3d(" + now + "px, 0px, 0px)"});
//				},
//				duration: 800, easing: "easeInOutCubic", complete: function(){
//			 	$('#project-section').fadeIn('fast');
//				grid_wrap.removeClass('on').addClass('off');
//				grid_wrap.css({"left": l, "transform": ""}); //required for translate3d
//				bod.addClass('disable-scroll');
//				adjustProject();
//			 }
//			 });


		}else{

			//slide right
			$('#project-section').fadeOut('fast');
			grid_wrap.animate({ left: 0, avoidCSSTransitions:false }, { duration: 800, easing: "easeInOutCubic", complete: function(){
				grid_wrap.removeClass('off').addClass('on');
				bod.removeClass('disable-scroll');
			}});

//			$('#project-section').fadeOut('fast');
//			grid_wrap.animate({ left: 0 }, {
//				step: function (now, fx) {
//					$(this).css({"transform": "translate3d(" + now + "px, 0px, 0px)"});
//				},
//				duration: 800, easing: "easeInOutCubic", complete: function(){
//				grid_wrap.removeClass('off').addClass('on');
//				grid_wrap.css({"left": "0px", "transform": ""}); //required for translate3d
//				bod.removeClass('disable-scroll');
//			}});



		}
	}else{
		//if mobile, slide grid vertically on/off
		grid_right.css({'width' : 0});
		//var elemBottom = grid_wrap.offset().top + grid_wrap.height();
		//var winBottom = $(window).scrollTop() + $(window).height();
		//var winTop = $(window).scrollTop();

		if(grid_wrap.hasClass('on')){
			//slide up
			//set grid-left the height of the window
			//unfix menu, set to absolute
			//shift grid-wrap upward of height of window - menu height



			mobile_nav.css({'position': 'absolute'});
			grid_wrap.animate({'top': -(grid_wrap.height() - mobile_nav.height()), avoidCSSTransitions:false},{duration:800,ease:'easeInOutCubic', complete:function(){
				mobile_nav.removeAttr('style').css({'position': 'fixed', 'top':0});
				grid_wrap.removeClass('on').addClass('off');
				$('html').css({'overflow': 'visible'});
				$('#project-section').fadeIn('fast');
				bod.addClass('disable-scroll');
				grid_left.height($(window).height());
				$('html').css({'overflow': 'hidden'});
				//scroll to top
				$('#project-preview').animate({
						scrollTop: 0
					}, 600, function(){
						console.log('scrolled to top');
				});
			}});
//
//			grid_wrap.animate({'top': -(grid_wrap.height() - mobile_nav.height())},{
//				step: function (now, fx) {
//					$(this).css({"transform": "translate3d(0px, " + now + "px, 0px)",
//								 "transition-property": "-webkit-transform",
//								 "transition-duration": "800ms",
//								 "transition-timing-function": "ease-in-out"
//								});
//				},
//				duration:800,ease:'easeInOutCubic', complete:function(){
//				mobile_nav.removeAttr('style').css({'position': 'fixed', 'top':0});
//				grid_wrap.removeClass('on').addClass('off');
//				grid_wrap.css({"top": l, "transform": "", "transition-duration": "0s", "transition-timing-function": "ease", "transfor-property": "all"});
//				$('html').css({'overflow': 'visible'});
//				$('#project-section').fadeIn('fast');
//				bod.addClass('disable-scroll');
//				grid_left.height($(window).height());
//				$('html').css({'overflow': 'hidden'});
//				//scroll to top
//				$('#project-preview').animate({
//						scrollTop: 0
//					}, 600, function(){
//						console.log('scrolled to top');
//				});
//			}});
//
//			var t = -(grid_wrap.height() - mobile_nav.height());
//			grid_wrap.css({"transform":"translate3d(0px, " + t + "px, 0px)"});



		}else{
			//slide down
			//shift grid-wrap downward, set height to 0
			//fix menu
			//remove height or set height 100% for grid-left

			$('html').css({'overflow': 'hidden'});
			$('#project-section').fadeOut('fast');
			mobile_nav.removeAttr('style').css({'position': 'absolute','bottom':0});
			grid_wrap.animate({'top': 0, avoidCSSTransitions:false},{duration:800,ease:'easeInOutCubic',complete: function(){
				mobile_nav.css({'position': 'fixed'});
				grid_left.height('100%');
				grid_wrap.removeClass('off').addClass('on');
				$('html').css({'overflow': 'visible'});
				bod.removeClass('disable-scroll');
			}});

//			grid_wrap.animate({'top': 0},{
//				step: function (now, fx) {
//					$(this).css({"transform": "translate3d(0px, " + now + "px, 0px)",
//								 "transition-property": "-webkit-transform",
//								 "transition-duration": "800ms",
//								 "transition-timing-function": "ease-in-out"
//								});
//				},
//				duration:800,ease:'easeInOutCubic',complete: function(){
//				mobile_nav.css({'position': 'fixed'});
//				grid_left.height('100%');
//				grid_wrap.removeClass('off').addClass('on');
//				grid_wrap.css({"top": "0px", "transform": "", "transition-duration": "0s", "transition-timing-function": "ease", "transfor-property": "all"});
//				$('html').css({'overflow': 'visible'});
//				bod.removeClass('disable-scroll');
//			}});






		}

	}
}


function adjustGridSlide1(){

	if(grid_wrap.hasClass('resized')){
			adjustGridSlide2();
	} else{
		setTimeout(function(){
			adjustGridSlide1();
		},300);
	}
}


function adjustGridSlide2(){

	var padding = 0;
	var gslide = show.find(grid_slide);
	var gslide_img = show.find(grid_slide_img);

	if(gslide.width() > gslide.height()){
		console.log('width greater:' + gslide.width());
		gslide_img.height(gslide.width()+padding);
		gslide_img.width('auto');
	} else if(gslide.width() < gslide.height()){
		console.dir(gslide);
		console.log('height greater:' + gslide.height());
		gslide_img.height(gslide.height()+padding);
		gslide_img.width('auto');
	} else{
		gslide_img.height(gslide.width()+padding);
		gslide_img.width('auto');
	}
	gslide_img.css({'left': -((gslide.width()/2)/2) });
}

function adjustGrid(){

	if(grid_wrap.hasClass('on')){
		if(bod.hasClass('desktop')){
			show = showcase;
		}else{
			show = showcase_mobile;
		}

		//adjust showcase row heights
		show.find('.row').animate({
			height: (win_height/2)
		}, {
		   duration: 300,
		   easing: "easeInOutCubic",
		   complete: function(){
				var rowid =  $(this).attr('data-rowid');
				if(rowid === '2'){
					adjustGridSlide1();
				}
		   }
		});

	}

	//if grid is closed, maintain position
	if(grid_wrap.hasClass('off')){

		bod.addClass('disable-scroll');
		if(bod.hasClass('desktop') && grid_wrap.hasClass('resized')){
			grid_wrap.css({'left': parseInt('-'+(win_width-grid_right.width()))});
			grid_wrap.height('100%');

		}else if(bod.hasClass('mobile') && grid_wrap.hasClass('resized')){
			grid_wrap.css({'top': -($(window).height() - mobile_nav.height())});
			grid_left.height($(window).height());
			mobile_nav.removeAttr('style').css({'position': 'fixed', 'top':0});
			grid_wrap.height('auto');
		}

	} else if(grid_wrap.hasClass('on')){
		bod.removeClass('disable-scroll');
		if(bod.hasClass('desktop')){
		} else if(bod.hasClass('mobile')){
			grid_right.css({'width' : 0});
			grid_left.height('100%');
			grid_wrap.height('auto');
			mobile_nav.removeAttr('style').css({'position': 'fixed','bottom':0});
		}

	}
}

function adjustProject(){
		if(bod.hasClass('desktop')){
			project_info.width(500);
			project_info_wrap.width(project_info.width()-grid_right.width());
			project_preview.width($(window).width() - project_info.width());
		}else{
			project_preview.width('100%');
			project_info.width(0);
		}
}


function isMobile(){
	 if( navigator.userAgent.match(/Android/i) ||
		 navigator.userAgent.match(/webOS/i) ||
		 navigator.userAgent.match(/iPhone/i)||
		 navigator.userAgent.match(/iPad/i) ||
		 navigator.userAgent.match(/iPod/i) ||
		 navigator.userAgent.match(/BlackBerry/i) ||
		 navigator.userAgent.match(/Windows Phone/i)
	 ){
		return true;
	 }
	 else {
		return false;
	 }
}



function adjustMobile(){



	if($(window).width() < 992){
		grid_wrap.height('auto');
		if(bod.hasClass('desktop')){
			bod.removeClass('desktop').addClass('mobile');
			if(grid_wrap.hasClass('off')){
				grid_wrap.removeClass('resized');

				//if resized from desktop to mobile, but grid is off
				//1)slide the grid offscreen left
				//var l = parseInt('-'+(win_width));
				grid_wrap.animate({ left: -win_width, top: 0 }, { duration: 800, easing: "easeInOutCubic", complete: function(){
					//2)change grid position to top using css
					grid_wrap.removeAttr('style').css({'top': -$(this).height(), 'left': 0});
					//3)hide desktop menu
					grid_right.animate({width: 0}, { duration: 800, easing: "easeInOutCubic" });
					//4)slide grid down from top to mobile nav height
					grid_wrap.animate({ top: -($(this).height()-mobile_nav.height()) }, { duration: 800, easing: "easeInOutCubic" });
					//5)reveal mobile nav by rising it into view.
					mobile_nav.removeAttr('style').animate({ bottom: 0 }, { duration: 800, easing: "easeInOutCubic", complete: function(){
						$(this).css({'position':'absolute'});

					}});
				} });
			}else if(grid_wrap.hasClass('on')){
				//if resized from desktop to mobile, but grid is on
				grid_right.animate({width: 0}, { duration: 800, easing: "easeInOutCubic" });
				mobile_nav.animate({ bottom: 0 }, { duration: 800, easing: "easeInOutCubic" });
			}
		}
		if(!bod.hasClass('desktop') && !bod.hasClass('mobile')){
			//if page has just loaded and we are mobile
			bod.addClass('mobile');
			grid_right.animate({width: 0}, { duration: 800, easing: "easeInOutCubic" });
			mobile_nav.animate({ bottom: 0 }, { duration: 800, easing: "easeInOutCubic", complete: function(){
				$(this).css({'position':'fixed'});
			}});
		}
	}else{
		if(bod.hasClass('mobile')){
			bod.removeClass('mobile').addClass('desktop');
			if(grid_wrap.hasClass('off')){
				//if resized from mobile to desktop, but grid is off
				//1)grid is slide up
				//when resizing the window, we don't want any css conflicts while menu is animating
				grid_wrap.removeClass('resized');
				grid_left.removeAttr('style');
				grid_wrap.animate({ top: -$(this).height() },
					{ duration: 800, easing: "easeInOutCubic" , complete: function(){
						//2)change position to left offscreen
						grid_wrap.css({'top':0, 'left': parseInt('-'+(win_width)) });
						//hide mobile nav
						mobile_nav.removeAttr('style').animate({ bottom: '-50px' }, { duration: 800, easing: "easeInOutCubic" });
						grid_right.animate({width: '50px'}, { duration: 800, easing: "easeInOutCubic" });
						//3)slide right so menu is visible
						var k = -(win_width-50);
						grid_wrap.animate({ left: k }, { duration: 800, easing: "easeInOutCubic", complete: function(){
							//now animation is complete, re-add resize class
							grid_wrap.addClass('resized');
							grid_wrap.height('100%');
							adjustProject();
						} });
					}
				});
			}else if(grid_wrap.hasClass('on')){
				//if desktop, but grid is on

				grid_right.animate({width: '50px'}, { duration: 800, easing: "easeInOutCubic" });
				mobile_nav.animate({ bottom: '-50px' }, { duration: 800, easing: "easeInOutCubic" });
			}
		}
		if(!bod.hasClass('desktop') && !bod.hasClass('mobile')){
			//if page has just loaded and we are desktop
			bod.addClass('desktop');
			mobile_nav.animate({ bottom: '-50px' }, { duration: 800, easing: "easeInOutCubic" });
		}
	}
}

function changeProject(direction){
	var nid,id,totalprojects;
	id = parseInt($('#select_project').val());
	totalprojects = projects.length;
	switch(direction){
		case 'next':
			nid = (id+1);
			if(nid > (totalprojects-1)){ nid = 0; }
		break;
		case 'prev':
			nid = (id-1);
			if(nid < 0){ nid = (totalprojects-1); }
		break;
	}
	loadProject(nid);
}


function resizedw(){
     grid_wrap.addClass('resized');
}

function hideLanding(){
	landing.removeClass('on');
	landing.animate({"top": -$(window).height()},{ duration: 600, easing: "easeInOutCubic", complete: function(){
		$(this).hide();
		$('html').css({'overflow': 'visible'});
	} });
}




}());
