var $searchbox = $('.search');
var $paras = $('p');
var paras = [];

for (var i = 0; i < $paras.length; i++){
		paras.push($paras[i].innerHTML.toLowerCase());
	}

$searchbox.on('input', function(){
	for (var i = 0; i < paras.length; i++){
		if (paras[i].includes($searchbox.val().toLowerCase()) === false){
			$($paras[i]).parent('a').hide();
		} else {
			$($paras[i]).parent('a').show();
		}
	}
});

$('#pics').featherlightGallery({
	filter: 'a:visible',
	previousIcon: '&#60;',
	nextIcon: '&#62;',
	beforeOpen: function(){
		$('img').css("width", "10px");
		$('a').css("margin", "0");
	},
	beforeClose: function(){
		$('img').css("width", "200px");
		$('a').css("margin", "30px");
	},	
	afterContent: function() {
		var caption = this.$currentTarget.find('p').text();
		this.$instance.find('.caption').remove();
		$('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
	}
});
