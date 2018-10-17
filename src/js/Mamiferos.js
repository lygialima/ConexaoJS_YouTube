/* Vamos criar um método falar() dentro da classe Mamiferos */

class Mamiferos {

	voz = "";
	corDoOlho = "";

	falar() {
		/* this representa a classe Mamiferos;
		voz é a variável que estou pegando dentro dessa classe */
		console.log(this.voz);
	}
}

export default Mamiferos;


/* ANOTAÇÃO ANTERIOR */

/* Este é um exemplo de objeto; é preciso escrever algumas propriedades que vão
definir o objeto */

// class Mamiferos {
// 	voz = "";
// 	corDoOlho = "preto";
// }

// export default Mamiferos;

/*
Agora, este objeto está definido mas ainda não existe.
Para existir, quando criamos um objeto real a gente instancia,
por isso, vamos importar esse objeto lá na classe Main.
*/
