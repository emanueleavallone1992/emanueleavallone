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
        $('#articolo1').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[2].text + "</span></h4>");		 
		$('#articolo1').append("<p>" + articolo[3].text + "</p>");
		

      }});  

$.ajax({
	url:'art2.json',
	method: 'GET',
	dataType: 'json',
	success: function (articolo){ 
	
        $('#articolo2').append("<h3>" + articolo[0].text + "</h3>");
        $('#articolo2').append("<img src=" + articolo[1].text + ">");
        $('#articolo2').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[2].text + "</span></h4>");		 
		$('#articolo2').append("<p>" + articolo[3].text + "</p>");
		

      }});

$.ajax({
	url:'art3.json',
	method: 'GET',
	dataType: 'json',
	success: function (articolo){ 
	
        $('#articolo3').append("<h3>" + articolo[0].text + "</h3>");
        $('#articolo3').append("<img src=" + articolo[1].text + ">");
        $('#articolo3').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[2].text + "</span></h4>");		 
		$('#articolo3').append("<p>" + articolo[3].text + "</p>");
		

      }});

$.ajax({
	url:'art4.json',
	method: 'GET',
	dataType: 'json',
	success: function (articolo){ 
	
        $('#articolo4').append("<h3>" + articolo[0].text + "</h3>");
        $('#articolo4').append("<img src=" + articolo[1].text + ">");
        $('#articolo4').append("<h4><span class="+"'label label-primary tech'"+">" + articolo[2].text + "</span></h4>");		 
		$('#articolo4').append("<p>" + articolo[3].text + "</p>");
		

      }});