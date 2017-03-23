var $searchbox = $('.search');
var $paras = $('p');
var paras = [];

for (var i = 0; i < $paras.length; i++){
		paras.push($paras[i].innerHTML);
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


	// console.log($searchbox.val());
});






