(function () {
'use strict';

//disable animation extend plugin on everything by default, we only need this for grid_wrap in ToggleMenu function, with use of useCSSTransitions property.
$.setDisabledByDefault(true); //this option has been created by plugin

var player;

var img_path = 'assets/images/projects/';

//Get the page that we are on
var path = window.location.pathname;
var page = path.split("/").pop();


var projects = [
     {
         "id":1,
         "title": "Voila",
         "alias": "voila",
		 	 	 "total" : 6,
		 	 	 "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Voila was an app aimed at providing a quick online booking process for beauty, cosmetic and lifestyle services. A customer could book any of the available services, where the provider could arrive directly to them, whether at home or office, or they could have a reservation at the provider’s location, such as a salon or spa.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The client required a brand identity that would reflect the standard of quality of the providers listed on its directory, its target audience and their demographic. But it also sought a brand that presented the company as modern, professional, but also one that would be well suited for all digital platforms and mediums.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The company’s values were focused on being an app that was reliable, efficient and time saving for the customer, with a quick and easy-to-use interface. They were after a brand that would reflect these aspects, but also a brand that was vibrant, positive and gave the customer confidence in what it provided. </p>"
             },
			 {
                 "heading": "Logo Development",
                 "description" : "<p>Various concepts were created to capture and highlight the quick usability and performance of the app, which was the basis of its name ‘Voila!’. Additionally, the brand needed to be in homage to its market, beauty and lifestyle. It needed to be both modern and elegant.</p>"
             },
			 {
                 "heading": "Iconography",
                 "description" : "<p>As part of the brand’s development, one of the requirements was a series of icons that represented each category of services the app offered. The icons needed to appear contemporary, while incorporating a fun, youthful look and feel. They made use of the three main brand colours and used simple, thick edges that would be easy to recognise, and display well on digital screens and devices. </p>"
             },
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
	 {
         "id":2,
         "title": "Cambridge Summer Trail",
         "alias": "summer-trail",
		     "total" : 4,
		     "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>The Borough of Cambridgeshire Council wanted to launch a summer campaign to promote their bus services, but also to motivate children to partake in outdoor activities during the summer period. By using their bus routes, the idea was to create an engaging summer trail game, where free prizes would be available for whoever took part.</p>"
             },

			 {
                 "heading": "",
                 "description" : "<p>The objective was to visit various bus sites and to find three letters which would spell a simple word. If a participant collects all three letters and guesses the correct word, they would win a voucher.<br><br>The focus of the campaign was to feature summer themed elements and icons that would appeal to a younger audience, using bright, vivid colours with a vibrant and energetic look.</p>"
             },
			 {
			 	"heading":"",
				"description":""
			 },
			 {
                 "heading": "Campaign Execution",
                 "description" : "<p>The majority of the roll-out of the campaign was on printed materials, such as the campaign and individual letter posters that were designed, as well advertising collateral that was printed on A5 leaflets and published across local newspapers and magazine outlets.</p>"
             }
         ]
     },
	 {
         "id":3,
         "title": "Elisa & The Cottontail Bird",
         "alias": "elisa",
		     "total" : 5,
		     "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Elisa & The Cottontail Bird was a children’s book that tells the story of a fictional, magical bird that enters into a family’s home.<br><br>The development of the style combines both the use of two and three dimensional illustration.<br><br>A number of versions were sketched initially to help decide on the best composition, arrangement and focus of the characters, while also providing space for the text which would curve and fit around some of the elements in each illustration.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The characters, scenes and props were then sculpted and created using 3D animation software and arranged in the environment that was then lit to create accurate, realistic shadows and reflections.<br><br>Once the images were rendered, they were then digitally painted over, which was what achieved the completed style. This then became the basis of how the book’s illustrations would be done.</p>"
             },
			 {
                 "heading": "Composition",
                 "description" : "<p>By using 3D software initially to create the images, this allowed for any re-arrangement of elements, and became useful in scaling and moving objects to allow for more space if necessary and to improve the overall composition.</p>"
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
         "title": "Pro2Pac",
         "alias": "pro2pac",
		     "total" : 5,
		     "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Pro2Pac was part of a global exhibition hosted by The Montgomery Group at the Excel Center in London. It was one of their shows which showcased the latest products, technology, ideas and innovation for food packaging from various providers and manufacturing companies.<br><br>The brand needed to highlight the packaging developments of food and beverages, showcasing the ideas and innovation behind it. The identity needed to be exciting, innovative and inspiring to potential investors and businesses.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>From this, the idea of formation ran through as the central theme in all the ideas across the brand’s identity. The breaking apart and merging of packaging; from its skeletal structure to the formation of the finished, packaged product. This would also symbolically represent the unification of all the companies and suppliers who were attending the show.<br><br>For the logo’s motif, this would also be present, with the merging of two ‘P’s, while creating the negative space of the number two.</p>"
             },
			 {
                 "heading": "Print Media",
                 "description" : "<p>One of the key areas in innovation for the packaging industry was the advancements in print technology.  The latest developments in the use of RGB colour in print was a highlight of the show. This would also be demonstrated in its print advertising collateral, as well as making use of digital advertising screens in public spaces.</p>"
             }, {
                 "heading": "Social Media",
                 "description" : "<p>The example opposite demonstrates a video animation and how it could work for a campaign on social media. The animation would depict the product of a food item or beverage, where, broken into its packaged segments, the item would implode and explode in a loop. This would be stylised into an engaging and hypnotic visual, with a tagline to encourage the user to find out more about the show.</p>"
             },{
                 "heading": "Digital Media",
                 "description" : "<p>One of the brand’s key features is its use of a highly saturated and vibrant gradient palette. This is made prominent using the RGB version, across digital media and devices.<br><br>And to compliment the brands theme of formation, the same idea would apply to web objects or elements. These elements would follow the same idea of breaking and reforming when responding to user interaction, or acting as containers for content.</p>"
             }


         ]
     },
	 {
         "id":5,
         "title": "Sound Impression",
         "alias": "soundimpression",
		     "total" : 8,
		     "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>The intention behind Sound Impression was to become a social media platform that would allow music artists to publish or exhibit their own artworks, promoting themselves also as visual artists.</p><p>The platform would act as an exclusive hub for fans, where they could connect and follow their favourite music artists, while getting exclusive access to their shows and exhibitions.</p>"
             },
				 {
                 "heading": "",
                 "description" : "<p>The vision of Sound Impression was to act as a bridge between music and art and to allow for an alternative creative space where musicians could express themselves and showcase their other talents in the art space.</p><p>The client was looking for a brand identity that would convey this bridge, and to cohesively present itself not just as a social network, but as a creative platform.</p>"
             },
				 {
                 "heading": "",
                 "description" : ""
             },{
                 "heading": "",
                 "description" : ""
             },
			    {
                 "heading": "Logo Development",
                 "description" : "<p>The idea of visualising a sound wave and using it as a device became the basis of the brand concept. The movement, scale and fluidity of the sound wave acted as a representation of expression, free-thinking, originality and reach, and as a form of connection. The randomness of the shape would provide many uses across the brand scope, with its primary use being the logo itself, imitating the shape of a paint palette, and acting as another link to the art medium.</p>"
             },
			    {
                 "heading": "Digital Media",
                 "description" : "<p>The branding would extend itself to using fluid layouts and transitions between pages, making use of the wave device. It would act as a break between sections, but also be used in iconography and for interactive elements on the website.</p>"
             },
				  {
                 "heading": "Social Media",
                 "description" : "<p>The sound wave device could be mixed with imagery and could also be used in animations on various digital mediums as well as for social media campaigns, such as this Facebook carousel being one example.<br><br>The movement and morphology of the sound wave could be heavily emphasised in video or animated sequences to represent the expression and energy depicted in both art and music forms.</p>"
             },
				 {
                 "heading": "Print Media",
                 "description" : "<p>For print and advertising, references from famous musicians or artists regarding music, creativity or art would be used as a way of conveying the connection between music and art. Similar usage of the sound wave and imagery would be repeated as used on digital media.</p>"
             }
			    
		]
     },
	 {
         "id":6,
         "title": "Visit Oxford",
         "alias": "visit-oxford",
		     "total" : 5,
		     "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Oxfordshire Council were looking to update their current Visitor Brochure for 2020, to attract more visitors during what was a difficult year for the travel industry. They wanted to focus on domestic tourism, and to attract more visitors to Oxfordshire’s famous landmarks and iconic destinations.<br><br>The concept focused on featuring iconic, but also the less commonly known aspects of Oxfordshire, showcasing the authenticity and rural beauty of the county. Because of its history and heritage, this formed the idea of transferring photography into vintage illustration and depicting Oxford in its more classically renowned style.</p>"
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
                 "heading": "Style Development",
                 "description" : "<p>The development of the style involved the method of tracing and using photography portraying a variety of different iconic landmarks, as well as landscapes which depicted the true essence of Oxford.<br><br>Once the tracing was completed, various digital painting effects were applied, including the use of watercolour brushes that were used to convey a classical, old-fashioned look that would complete the overall style.</p>"
             },
			
			 {
                 "heading": "",
                 "description" : ""
             }
		]
     }
];


if(page == "illustration"){


var projects = [
     {
         "id":1,
         "title": "Awakening",
         "alias": "awakening",
         "subpath":"like-the-road",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
     {
         "id":2,
         "title": "We Came This Far",
         "alias": "we-came-this-far",
         "subpath":"like-the-road",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
     {
         "id":3,
         "title": "The Wanderer",
         "alias": "the-wanderer",
         "subpath":"like-the-road",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
     {
         "id":4,
         "title": "Life Was Like A Dream",
         "alias": "like-a-dream",
         "subpath":"like-the-road",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
     {
         "id":5,
         "title": "The Dog That Wanted Everything",
         "alias": "the-dog-that-wanted-everything",
         "subpath":"",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
     {
         "id":6,
         "title": "The Lost Girl & The Spirits of the Wild",
         "alias": "the-lost-girl",
         "subpath":"",
	  "total" : 1,
         "slides": [
             
			 {
                 "heading": "",
                 "description" : ""
             }

         ]
     },
	 {
         "id":7,
         "title": "Cambridge Summer Trail",
         "alias": "summer-trail",
         "subpath":"",
          "total" : 4,
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>The Borough of Cambridgeshire Council wanted to launch a summer campaign to promote their bus services, but also to motivate children to partake in outdoor activities during the summer period. By using their bus routes, the idea was to create an engaging summer trail game, where free prizes would be available for whoever took part.</p>"
             },

			 {
                 "heading": "",
                 "description" : "<p>The objective was to visit various bus sites and to find three letters which would spell a simple word. If a participant collects all three letters and guesses the correct word, they would win a voucher.<br><br>The focus of the campaign was to feature summer themed elements and icons that would appeal to a younger audience, using bright, vivid colours with a vibrant and energetic look.</p>"
             },
			 {
			 	"heading":"",
				"description":""
			 },
			 {
                 "heading": "Campaign Execution",
                 "description" : "<p>The majority of the roll-out of the campaign was on printed materials, such as the campaign and individual letter posters that were designed, as well advertising collateral that was printed on A5 leaflets and published across local newspapers and magazine outlets.</p>"
             }
         ]
     },
	 {
         "id":8,
         "title": "Elisa & The Cottontail Bird",
         "alias": "elisa",
         "subpath":"",
		     "total" : 5,
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Elisa & The Cottontail Bird was a children’s book that tells the story of a fictional, magical bird that enters into a family’s home.<br><br>The development of the style combines both the use of two and three dimensional illustration.<br><br>A number of versions were sketched initially to help decide on the best composition, arrangement and focus of the characters, while also providing space for the text which would curve and fit around some of the elements in each illustration.</p>"
             },
			 {
                 "heading": "",
                 "description" : "<p>The characters, scenes and props were then sculpted and created using 3D animation software and arranged in the environment that was then lit to create accurate, realistic shadows and reflections.<br><br>Once the images were rendered, they were then digitally painted over, which was what achieved the completed style. This then became the basis of how the book’s illustrations would be done.</p>"
             },
			 {
                 "heading": "Composition",
                 "description" : "<p>By using 3D software initially to create the images, this allowed for any re-arrangement of elements, and became useful in scaling and moving objects to allow for more space if necessary and to improve the overall composition.</p>"
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
         "id":9,
         "title": "Visit Oxford",
         "alias": "visit-oxford",
         "total" : 5,
         "subpath":"",
         "slides": [
             {
                 "heading": "Introduction",
                 "description" : "<p>Oxfordshire Council were looking to update their current Visitor Brochure for 2020, to attract more visitors during what was a difficult year for the travel industry. They wanted to focus on domestic tourism, and to attract more visitors to Oxfordshire’s famous landmarks and iconic destinations.<br><br>The concept focused on featuring iconic, but also the less commonly known aspects of Oxfordshire, showcasing the authenticity and rural beauty of the county. Because of its history and heritage, this formed the idea of transferring photography into vintage illustration and depicting Oxford in its more classically renowned style.</p>"
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
                 "heading": "Style Development",
                 "description" : "<p>The development of the style involved the method of tracing and using photography portraying a variety of different iconic landmarks, as well as landscapes which depicted the true essence of Oxford.<br><br>Once the tracing was completed, various digital painting effects were applied, including the use of watercolour brushes that were used to convey a classical, old-fashioned look that would complete the overall style.</p>"
             },
			
			 {
                 "heading": "",
                 "description" : ""
             }
		]
     }
];


}





var activeproject = {};

//parameters
var showcase = $('#showcase'),
	showcase_mobile = $('#showcase-mobile'),
	show,
	win_height = $(window).height(),
	//menu_icon = $('#menu'),
	mobile_nav = $('#mobile-nav'),
	menu_toggle = $('.menu-toggle'),
	grid_left = $('#grid-left'),
	grid_right = $('#grid-right'),
	grid_wrap = $('#grid-wrap'),
	win_width = $(window).width(),
	project = $('#project-section'),
	project_preview = $('#project-preview'),
	project_info = $('#project-info'),
	project_info_wrap = $('#project-info-wrap'),
	landing = $('#landing-section'),
	landing_cta = $('#landing-cta'),
	page = $('#page-template'),			
	bod = $('body');
	
	
	//render projects   
         var i;
         var ri = 1;
        
          
         var projectHTML = '<div class="row no-marg-bot col-fill-height" data-rowid="'+ri+'">';
         
         for(i=0; i <= projects.length-1;i++){
         
         		var subpath = projects[i].subpath !== "" ? "/" + projects[i].subpath + "/" :  "/";
         			
                     projectHTML += '<div class="col s12 m6 l4 grid-slide" data-slide="'+i+'">'
                              		  +'<div class="grid-title"><h3>'+projects[i].title+'</h3></div>'
                              		  +'<img src="assets/images/projects' + subpath + projects[i].alias+'/1.jpg" width="100%">'
                                            +'</div>';
                 if((i+1) % 3 === 0 && i != projects.length-1){
                	ri++;
                	projectHTML += '</div><div class="row no-marg-bot col-fill-height" data-rowid="'+(ri)+'">';
                }
                if(i == projects.length-1){
                
                	projectHTML += '</div>';
                }
         }
        
              
      showcase.html(projectHTML);
      showcase_mobile.html(projectHTML);
      
      var grid_slide = $('.grid-slide');
      var grid_slide_img = $('.grid-slide img');
	
                                                   
                                                   
                                                   console.log(projectHTML);

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
	
	landing.on('mousewheel DOMMouseScroll scroll touchmove mousemove' , function() {
		//console.log('scroll landing');
		hideLanding();
	});


	landing_cta.click(function(){
		//console.log('hide landing');
		hideLanding();
	});

	//track events
	$('*[data-event]').click(function(){
		var evt = $(this).attr('data-event');
		console.log(evt);
		//ga('send', 'event', 'Social Link', evt, evt);
	});
	
	
	//navigation
	$('*[data-href]').click(function(){
		var alias = $(this).attr('data-href');
		var template = $(this).attr('data-template');
		//console.log(page,template);
		navigatePage(alias,template);
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
		//toggleMenu();
		toggleMenu();
		
		/*loadProject(0);
		if(isMobile() === false){
			doResize(); //this breaks on mobile
		}*/
	});

	//check url for page
	var url = location.href.split('/');
	if(typeof url[3] !== undefined && url[3] !== ''){
		console.log(url[3]);
		$(projects).each(function(i){
			if(projects[i].alias === url[3]){
				hideLanding();
				toggleGrid();
				loadProject(i);
				updateUrl(i);
			}
		});
	}

	grid_slide.click(function(){
		var slideid = $(this).attr('data-slide');
		toggleGrid();
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
	//$('.project-nav').click(function(){ var direction = $(this).attr('data-direction'); changeProject(direction); });
	$('body').on('click','.project-nav',function(){ var direction = $(this).attr('data-direction'); changeProject(direction); });

});

function updateUrl(slideid){
	var alias = projects[slideid].alias;
	var title = projects[slideid].title;
	window.history.pushState(alias , title, 'http://milesholt.co.uk/'+alias );
	//ga('set', 'page', alias);
	//ga('send', 'pageview');
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

function navigatePage(alias,template){
	console.log(alias);
	console.log(template);
	
	switch(template){
		case 'article':	
			toggleGrid();
			closePage(project);
			loadPage(page);				
		break;
	}
		
       toggleMenu();		
	bod.addClass('disable-scroll');
	
}

function loadPage(page){
       page.animate({
				scrollTop: 0
			}, 600, function(){
				console.log('scrolled to top');
			});
	page.addClass('on');			
	page.fadeIn('fast');			
}

function closePage(page){
       page.removeClass('on');			
	page.fadeOut('fast');			
}


function loadProject(id){

	//console.log('loading project');
	//console.log(id);
	//var  h =0;

	//scroll to top
	$('#project-preview').animate({
		scrollTop: 0
	}, 600, function(){
		console.log('scrolled to top');
	});

	bod.addClass('disable-scroll');
	$('#select_project').val(id);
	activeproject = projects[id];
       project_preview.html('');

	//console.log(activeproject.title);
	
	$('#project-section').fadeIn('fast');
	
	$('#project-title h1').fadeTo(100,0, function(){ $(this).text(activeproject.title).fadeTo(300,1);  });
	$('#slide-subheading h2').fadeTo(100,0, function(){ $(this).text(activeproject.slides[0].title).fadeTo(300,1);  });
	$('#slide-desc').fadeTo(100,0, function(){ $(this).html(activeproject.slides[0].description).fadeTo(300,1);  });



    for(var i=0; i < activeproject.total; i++){

		
		var content = '<img class="project-slide" data-slideid="'+i+'" src="'+img_path+'/' + activeproject.alias + '/' + (i+1) + '.jpg" />';
		
		if(activeproject.subpath !== ""){
		
			content = '<img class="project-slide" data-slideid="'+i+'" src="'+img_path+'/' + activeproject.subpath +'/' + activeproject.alias + '/' + (i+1) + '.jpg" />';
		
		
		}
		
		
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
  $("#nav").toggleClass("menu-on");	
}

function toggleGrid(){

	if(bod.hasClass('desktop')){
		//if desktop, slide grid horizontally on/off
		if(grid_wrap.hasClass('on')){

			//slide left
			var l = parseInt('-'+(win_width-grid_right.width()));
			grid_wrap.animate({ left: l, avoidCSSTransitions:false }, { duration: 800, easing: "easeInOutCubic", complete: function(){
			 	//$('#project-section').fadeIn('fast'); //moved to loadProject
				grid_wrap.removeClass('on').addClass('off');
				bod.addClass('disable-scroll');
				//adjustProject(); //moved to loadProject
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
				//$('#project-section').fadeIn('fast'); //moved to loadProject
				bod.addClass('disable-scroll');
				grid_left.height($(window).height());
				$('html').css({'overflow': 'hidden'});
				//scroll to top
				//moved to loadProject
				/*$('#project-preview').animate({
						scrollTop: 0
					}, 600, function(){
						console.log('scrolled to top');
				});*/
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
	//gslide_img.css({'left': -((gslide.width()/2)/2) });
}

function adjustGrid(){

	//no longer needed, causes glitches on mobile, with regenerating rows. Now handled by css

	/*if(grid_wrap.hasClass('on')){
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

	}*/
	
	

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
        var r = false;
	 if( navigator.userAgent.match(/Android/i) ||
		 navigator.userAgent.match(/webOS/i) ||
		 navigator.userAgent.match(/iPhone/i)||
		 navigator.userAgent.match(/iPad/i) ||
		 navigator.userAgent.match(/iPod/i) ||
		 navigator.userAgent.match(/BlackBerry/i) ||
		 navigator.userAgent.match(/Windows Phone/i)
	 ){
		r = true;
	 }
	 else {
		r = false;
	 }
	 
	 
	 //extra check using classes
	 if(bod.hasClass('desktop')){
	 	r = false;
	 } else{
	 	r = true;
	 }
	 
	 //extra check using window width
	 if($(window).width() < 992){
	 	r = true;
	 }
	 return r;
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
	updateUrl(nid);
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
