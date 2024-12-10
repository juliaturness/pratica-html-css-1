const secao = document.createElement('section');
secao.classList.add('Depoimentos');

const titulo = document.createElement('h2');
titulo.classList.add('depoimentos__titulo');
titulo.textContent = 'Depoimentos';

secao.append(titulo);

const conteudo = document.createElement('div');
conteudo.classList.add('depoimentos__conteudo');

secao.append(conteudo);

const depoimentos = [
    {
        autor: 'zé ninguém' ,
        texto: ' o lugar é muito caro ' 
    },
    {
        autor: 'maria filó',
        texto: 'daora meu'
    },
    {
        autor: 'joao biriba',
        texto: 'poderia ter bebida'
    },
    {
        autor: 'ana do mé',
        texto: 'tinha wifi, faltou imersão!'
    }
]

depoimentos.forEach(Depoimentos => { 
    const container = document.createElement('div');
    container.classList.add('depoimentos__container');

    const texto = document.createElement('p');
    texto.classList.add('depoimentos__texto');
    texto.textContent = Depoimentos.texto;

    const autor = document.createElement('p');
    autor.classList.add('depoimentos__autor');
    autor.textContent = Depoimentos.autor;

    container.append(texto);
    container.append(autor);
    
    conteudo.append(container);


})

const main = document.querySelector('main');
main.lastElementChild.before(secao);
// main.append(secao);