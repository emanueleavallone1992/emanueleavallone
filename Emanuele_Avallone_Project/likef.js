//raccolgo tutti gli elementi della classe like
var like = document.getElementsByClassName('like');
//mi giro tutti gli elemtni della classe like e se avviene l'evento click attiva la funzione likef

for ( var i = 0; i < like.length; i++ ) {
	like[i].addEventListener('click', function(){


		if(this.style.backgroundColor === "green"){
			this.style.color = "black";
			this.style.backgroundColor = "white";	
			

		} else 
			this.style.backgroundColor = "green";
			this.style.color = "white";
			
	});
}



