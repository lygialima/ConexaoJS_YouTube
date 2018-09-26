// Este é um exemplo de objeto; é preciso escrever algumas propriedades que vão definir o objeto

class Mamiferos {

	voz = "latido";
	corDoOlho = "preto";

	falar() {
		console.log(this.voz);
		/*
		this é uma variável que se refere à classe Mamiferos ao qual essa função
		falar() se encontra dentro dela
		*/
	}
}

export default Mamiferos;


/*
ANOTAÇÃO ANTERIOR
Agora, este objeto está definido mas ainda não existe.
Para existir, quando criamos um objeto real a gente instancia,
por isso, vamos importar esse objeto lá na classe Main.
*/
