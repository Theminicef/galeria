const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
var numero = 0;

//abrir modal 
enlaces.forEach( (enlace,indice) => {
	enlace.addEventListener("click", evento => {
		evento.preventDefault();
		numero = indice;
		imgModal.setAttribute("src",rutasImg[numero]);
		modal.classList.add("visible");
	});
});

// cerrar modal 
modal.addEventListener("click",() => {
	modal.classList.remove("visible");
});

//navegacion modal
flechas.forEach((flecha,indice) => {
	flecha.addEventListener("click", evento => {
	evento.stopPropagation();
	if(indice == 0){
		numero = numero > 0 ? numero - 1 : enlaces.length - 1;
	}else{
		numero = numero < enlaces.length - 1 ? numero + 1 : 0; 
		
	}
	imgModal.setAttribute("src",rutasImg[numero]);
  });
});
