$(document).ready(function() {
	
	var mylib = MyLibrary();
	var text = $("#someitemtext");
	var butt = $(":button");
	var prior = $("#priority");
	butt.on("click", function() {
		var txtinput = text.val();
		var txt = document.createElement('p');
		txt.innerHTML = txtinput;
		
		var txt2 = $(txt);
		var p = prior.val();
		if (p == "High")
		{
			$('.high').append('<div style="color:red" class="input"><input type="checkbox" name="item" class="item" value="' + txtinput + '" /> '+ txtinput +'</div>');
		}
		if (p == "Medium")
		{
			$('.medium').append('<div style="color:orange" class="input"><input type="checkbox" name="item" class="item" value="' + txtinput + '" /> '+ txtinput +'</div>');
		}
		if (p == "Low")
		{
			$('.low').append('<div style="color:black" class="input"><input type="checkbox" name="item" class="item" value="' + txtinput + '" /> '+ txtinput +'</div>');
		}
		txt2.css("opacity", 0.0);
		txt2.animate({
			opacity: 1.0
		}, 1000, function() {});
		text.val("");	
	});
	$(document).on('change', '.item', function() {
        	if( $(this).is(':checked') ){
            		var parentElem = $(this).parent();
                	parentElem.remove();
        	}
    	});
});










