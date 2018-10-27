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

$('#cook').on('click', function(){
    $('.cookie').fadeOut();
});
/*
$.ajax({
	url:'text.json',
	method: 'GET',
	dataType: 'json',
	success: function (articoli){
	 for (var i = 0; i < articoli.length; i++) {
        $('#prova').append("<p>" + articoli[i].text + "<p>");
      }  
	} 

});*/
$.ajax({
	url:'art1.json',
	method: 'GET',
	dataType: 'json',
	success: function (articolo){ 
	
        $('#articolo1').append("<h3>" + articolo[0].text + "</h3>");
        $('#articolo1').append("<img src=" + articolo[1].text + ">");		 
		  $('#articolo1').append("<p>" + articolo[2].text + "</p>");
      }});     