var $searchbox = $('.search');

var $paras = $('p');
var paras = [];



for (var i = 0; i < $paras.length; i++){
		paras.push($paras[i].innerHTML.toLowerCase());
		
	}
	



$searchbox.on('input', function(){
		for (var i = 0; i < paras.length; i++){
		// console.log(paras[i].includes($searchbox.val()));
		
		if (paras[i].includes($searchbox.val().toLowerCase()) === false){
			
			$($paras[i]).parent('a').hide();
			
			console.log(paras[i].includes($searchbox.val().toLowerCase()), paras[i]);
		} else {
			
			$($paras[i]).parent('a').show();
			
			console.log(paras[i].includes($searchbox.val().toLowerCase()), paras[i]);
			
		}
	}
	
	console.log('\n');
	
	
	
});





$('#pics').featherlightGallery({
	
	filter: 'a:visible',
	previousIcon: '&#60;',
	nextIcon: '&#62;',
	
	
	beforeOpen: function(){
		$('img').css("width", "10px");
		$('a').css("margin", "0");
	}
	
	
	
	// beforeClose: 
	
	
	// afterContent: function() {
		
		// var caption = this.$currentTarget.find('p').text();
		// this.$instance.find('.caption').remove();
		// $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
	// }
	
	
	
	
	
	
});


		     
		//          
		// galleryFadeIn: 100,          
		// galleryFadeOut: 300          
	




// window.addEventListener('pageshow', function(event) {
    // console.log('pageshow:');
    // console.log(event);
	
		// for (var i = 0; i < paras.length; i++){
		// // console.log(paras[i].includes($searchbox.val()));
		
		// if (paras[i].includes($searchbox.val().toLowerCase()) === false){
			// $($paras[i]).parent('a').hide();
			// console.log(paras[i].includes($searchbox.val().toLowerCase()), paras[i]);
		// } else {
			
			// $($paras[i]).parent('a').show();
			// console.log(paras[i].includes($searchbox.val().toLowerCase()), paras[i]);
			
		// }
	// }
	// console.log('\n');
	
	
// });

