animateItems = function animateItems($items,animationName,callback){
	$items.each(function(i,el) {
	    var $this = $(this);
	    setTimeout(function() {
	    	$this.removeClass('hide');
            $this.addClass(animationName);

            appendTextToCode("$this.addClass("+ animationName +");");

            if( i === $items.length-1 && callback && typeof(callback) === "function"){
            	callback();
            }

		}, i * 200);
	});	
};

appendTextToCode = function appendTextToCode(txt){
	//$('.code').html($('.code').html() + '<br/>' + txt);
}

arrangeFlowers = function(){
	var $lis = $('.nav-content.contact').find('li');
	var $li;
	for (var i=0; i <= $lis.length - 1; i++){
		$li = $($lis[i]);
		var angle = (90/($lis.length-1) * i) * (Math.PI/180) ;
		var x = 150 * Math.cos(angle) + 10;
		var y = 150 * Math.sin(angle) + 10;

		$li.css({'top': y + 'px', 'right' : x + 'px'});
	}

	var $lis = $('.nav-content.projects').find('li');
	var $li;
	for (var i=0; i <= $lis.length - 1; i++){
		$li = $($lis[i]);
		var angle = (90/($lis.length-1) * i) * (Math.PI/180) ;
		var x = 150 * Math.cos(angle) + 10;
		var y = 150 * Math.sin(angle) + 10;

		$li.css({'bottom': y + 'px', 'right' : x + 'px'});
	}

	var $lis = $('.sun .project');
	var $li;
	for (var i=0; i <= $lis.length - 1; i++){
		$li = $($lis[i]);
		var angle = (180/($lis.length-1) * i) * (Math.PI/180) ;
		var x = 80 * Math.cos(angle) + 45;
		var y = 80 * Math.sin(angle) + 50;

		$li.css({
			'bottom': y + 'px', 
			'right' : x + 'px',
			'transform' : 'rotate(' + (180/($lis.length-1) * i) + 'deg)'
		});
	}
}

scroll = function(){
	// var $sky = $('.sky');
	// var $triangles = $('.nav-wrapper .triangle');
	// var $sun = $('.sun');
	// var $sunset = $('.sunset');
	// var $clouds = $('.cloud');
	// var posY = $sky.offset().top - 300;
	
	// $( window ).scroll(function() {
	// 	closeAllNavs();
	// 	if($(window).scrollTop() > posY){
	// 		var per = ($(window).scrollTop() - posY)/$sky.height();
	// 		//$sun.css('top',per*100 + '%');
	// 		var pers = per*100 + '%';
	// 		$sun.css({
	// 			transform:'translateX(-50%) translateY('+ pers +')'
	// 		});
	// 		$sunset.css('opacity',per);
	// 		$clouds.css('opacity', 1-per);

	// 		// appendTextToCode("var per = ($(window).scrollTop() - posY)/$sky.height();");
	// 		// appendTextToCode("$sun.css('top',per*100 + '%');");
	// 		// appendTextToCode("$sunset.css('opacity',per);");
	// 		// appendTextToCode("$clouds.css('opacity', 1-per);");
	// 	}
	// 	if($(window).scrollTop() > 50){
	// 		$triangles.addClass('darker');
	// 	}else{
	// 		$triangles.removeClass('darker');
	// 	}

	// });
}

var $body;

$(document).ready(function(){

	$body = $('body');

	//scroll();

	animateIntro();
	//appendTextToCode("animateIntro();");

	arrangeFlowers();

	$('.nav-wrapper').click(function(){
		openNav($(this));
		appendTextToCode("openNav($(this));");
	});

	$('.nav-wrapper .projects li').click(function(){
		var goToId = $(this).attr('data-project');
		var posY = $('#' + goToId).position().top;
		$("html, body").animate({ scrollTop: posY + "px" });
	});

	//appendTextToCode('//bind click event to navigation items');
	//appendTextToCode("$('.nav-wrapper').click(function(){openNav($(this));});");
});

openNav = function openNav($navItem){

	if( $navItem.hasClass('selected') ){
		$navItem.find('li').removeClass('animated fadeInDown').addClass('hide');
		$navItem.removeClass('selected');

	} else {
		$('.nav-wrapper').removeClass('selected');
		$navItem.addClass('selected');
		
		$('.nav-wrapper:not(.selected) li').removeClass('animated fadeInDown').addClass('hide');
		
		for(var i=0; i <= $navItem.find('ul').length; i++){
			animateItems($($navItem.find('ul')[i]).find('li'), 'animated fadeInDown');
		}
	}
	appendTextToCode("if( $navItem.hasClass('selected') ){<br/>" + 
		"//animate in all li's in navigation item<br/>" + 
		"&nbsp;&nbsp;&nbsp;$navItem.find('ul li').removeClass('fadeInDown').addClass('hide');<br/>" + 
		"&nbsp;&nbsp;&nbsp;$navItem.removeClass('selected');<br/>" + 
		"} else {<br/>" + 
		"//animate animate out<br/>" + 
		"&nbsp;&nbsp;&nbsp;$('.nav-wrapper').removeClass('selected');<br/>" + 
		"&nbsp;&nbsp;&nbsp;$navItem.addClass('selected');<br/>" + 
		"&nbsp;&nbsp;&nbsp;for(var i=0; i <= $navItem.find('ul').length; i++){<br/>" +
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;animateItems($($navItem.find('ul')[i]).find('li'), 'animated fadeInDown');<br/>" +
		"&nbsp;&nbsp;&nbsp;}<br/>" +
		"}"
	);
}

closeAllNavs = function() {
	$('.nav-wrapper').removeClass('selected');
	$('.nav-wrapper li').removeClass('animated fadeInDown').addClass('hide');

	appendTextToCode("$('.nav-wrapper').removeClass('selected');");
	appendTextToCode("$('.nav-wrapper li').removeClass('animated fadeInDown').addClass('hide');");
}

animateIntro = function animateIntro(){
	var creativeCharacters = $('.creative').text().trim().split("");
	$('.creative').empty();
	$.each(creativeCharacters, function (i, el) {
	    $('.creative').append("<span class='hide'>" + el + "</span");
	});

	var developerCharacters = $('.developer').text().trim().split("");
	$('.developer').empty();
	$('.developer').append('>');
	$.each(developerCharacters, function (i, el) {
	    $('.developer').append("<span class='hide'>" + el + "</span");
	});

	appendTextToCode("var creativeCharacters = $('.creative').text().trim().split('');<br/>$('.creative').empty();<br/>$.each(creativeCharacters, function (i, el) {<br/>$('.creative').append('<span class='hide'>' + el + '</span');<br/>});");
	appendTextToCode("<br/>var developerCharacters = $('.developer').text().trim().split('');<br/>$('.developer').empty();<br/>$('.developer').append('>');<br/>$.each(developerCharacters, function (i, el) {<br/>$('.developer').append('<span class='hide'>' + el + '</span');});");
	appendTextToCode("animateItems($('.hero .creative span'), 'animated flipInX')");
	
	animateItems($('.hero .creative span'), 'animated flipInX', function(){
	    setTimeout(function(){
	        appendTextToCode("animateItems($('.hero .developer span'), '')");
			animateItems($('.hero .developer span'), 'show');  
			    
		}, 1000);  
		
		
	});
	$('body').css('overflow','auto');//不让下滑  
	setTimeout(function(){
	    appendTextToCode("<br/>$('.creative').addClass('animated moveUp');");
	    appendTextToCode("<br/>$('.developer').addClass('animated moveDown');");

	    $('.creative').addClass('animated moveUp');
	    $('.developer').addClass('animated moveDown');
	}, 3000);

	setTimeout(function(){
	    appendTextToCode("<br/>$('.my-pic').removeClass('hide').addClass('animated rotateInPic');");

		$('.my-pic').removeClass('hide').addClass('animated rotateInPic ');  
		
		// setTimeout(function(){
		// 	$('.my-pic').addClass('world'); 
		// },3000);
	}, 4000);


	// setTimeout(function(){

	// 	$('.nav-wrapper.left-top').removeClass('hide').addClass('animated rotateInDownRight');
	// 	$('.nav-wrapper.right-top').removeClass('hide').addClass('animated rotateInDownLeft');
	// 	$('.nav-wrapper.right-bottom').removeClass('hide').addClass('animated rotateInUpLeft');
	// 	$('.nav-wrapper.left-bottom').removeClass('hide').addClass('animated rotateInUpRight');	
	// 	$('.arrow-down').removeClass('hidden');
	// 	$('body').css('overflow','auto');

	// 	appendTextToCode("$('.nav-wrapper.left-top').removeClass('hide').addClass('animated rotateInDownRight');<br/>$('.nav-wrapper.right-top').removeClass('hide').addClass('animated rotateInDownLeft');<br/>$('.nav-wrapper.right-bottom').removeClass('hide').addClass('animated rotateInUpLeft');<br/>$('.nav-wrapper.left-bottom').removeClass('hide').addClass('animated rotateInUpRight');");
		
	// }, 7000);
}