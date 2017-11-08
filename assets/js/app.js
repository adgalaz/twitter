function add(){
	//tenemos que tomar el texto ingresado en el text area
  var comments = document.getElementById('comment').value;

  //Limpiar el text area
  document.getElementById('comment').value = '';

  //Contenedor de comentarios
  var cont = document.getElementById('cont');

  //creamos el div que contiene cada comentario
  var newComments = document.createElement('div');

  //Validar que text area tenga un mensaje
  if(comments.length == 0 || comments == null){
    alert('Debes ingresar un mensaje');
    return false;
	}

  //crear checkbox
  var chck = document.createElement('input');
  chck.type = 'checkbox';

  //creando icono de corazon
  var heart = document.createElement('i');
  heart.classList.add('fa', 'fa-heart', 'heart');

  //creando icono de basura
  var trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash', 'trash');

  //nodos de texto de text area
  var textNewComment = document.createTextNode(comments);

  //se crea elemento p y se asignan iconos y texto de los comentarios
  var contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(chck);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments);

	//remover comentario
	trash.addEventListener('click', function(){
		cont.removeChild(newComments); 
	})

	//corazon rojo
	heart.addEventListener('click', function(){
		heart.classList.toggle('red');
	})
};


var myText = document.getElementById('comment')

myText.onkeyup = function () {
  document.getElementById('wordCount').innerHTML = "Characters left: " + (140 - this.value.length);

  if (myText.value.length >= 119){
       document.getElementById('wordCount').className = 'gray';
     }

  if (myText.value.length >= 120){
       document.getElementById('wordCount').className = 'green';
     }

  if (myText.value.length >= 130) {
       document.getElementById('wordCount').className = 'pink';
     }

};


/*
En HTML.
<div class="characterCount"><span id="wordCount">0</span> Characters</div>

En JS.
var myText = document.getElementById("comment");
var wordCount = document.getElementById("wordCount");

myText.addEventListener("keyup",function(){
	var characters = myText.value.split('');
  wordCount.innerText = characters.length;
  if(characters.length > 140){
  	myText.value = myText.value.substring(0,140);
    wordCount.innerText = 140;
  }
});*/
