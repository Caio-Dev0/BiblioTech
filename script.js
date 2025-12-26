class Livro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
}


let ArrLivros = [new Livro("Meu amigo carinhoso", 'Robero', 15), new Livro("Aprendendo Javascript", 'Robeto', 550), new Livro("CSS Eficiente", 'Robepo', 195), new Livro("O que é o Java?", 'Ropero', 2300)]

let ArrLivros300 = ArrLivros.filter(a => a.paginas >= 300)

console.log(ArrLivros300)