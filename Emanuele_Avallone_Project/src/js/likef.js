const $=require('jquery');

//raccolgo tutti gli elementi della classe like
var like = document.getElementsByClassName('like');
//mi giro tutti gli elemtni della classe like e se avviene l'evento click attiva la funzione likef

/*for ( var i = 0; i < like.length; i++ ) {
	like[i].addEventListener('click', function(){


		if(this.style.backgroundColor === "green"){
			this.style.color = "black";
			this.style.backgroundColor = "white";	
			

		} else 
			this.style.backgroundColor = "green";
			this.style.color = "white";    
			
	});
}*/

$('.btn, .btn-default').on('click',event =>{
	$(event.currentTarget).toggleClass('btn-default2');
});

$('#cook').on('click', function(){
    $('.cookie').fadeOut('slow');
});


$.ajax({
	url:'articoli.json',
	method: 'GET',
	dataType: 'json',
	success: function (articolo){ 
	
        $('#articolo1').append("<h3>" + articolo[0].text + "</h3>");
        $('#articolo1').append("<img src=" + articolo[1].text + ">");
        $('#articolo1').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[2].text + "</span></h4>");		 
		$('#articolo1').append("<p>" + articolo[3].text + "</p>");

		 $('#articolo2').append("<h3>" + articolo[4].text + "</h3>");
        $('#articolo2').append("<img src=" + articolo[5].text + ">");
        $('#articolo2').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[6].text + "</span></h4>");		 
		$('#articolo2').append("<p>" + articolo[7].text + "</p>");

		$('#articolo3').append("<h3>" + articolo[8].text + "</h3>");
        $('#articolo3').append("<img src=" + articolo[9].text + ">");
        $('#articolo3').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[10].text + "</span></h4>");		 
		$('#articolo3').append("<p>" + articolo[11].text + "</p>");

		$('#articolo4').append("<h3>" + articolo[12].text + "</h3>");
        $('#articolo4').append("<img src=" + articolo[13].text + ">");
        $('#articolo4').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[14].text + "</span></h4>");		 
		$('#articolo4').append("<p>" + articolo[15].text + "</p>");

}});