var dadosformu = {
    formul: [
        {
            nome: 'Luis Atonio Santos',
            idade:'40',
            sexo: 'Masculino',
            cidade: 'Nova Lima',
            estado: 'Minas Gerais',
            email: 'dogensina@gmail.com',
            especializacao: 'Cachorro e Gato',
            experiencia: '2 Anos',
            imgData: 'adestradorluis.jpg'
        },
        {
            nome: 'Marcia Camila Antonia',
            idade:'30',
            sexo: 'Feminino',
            cidade: 'São Paulo',
            estado: 'São Paulo',
            email: 'adestreseupet@gmail.com',
            especializacao: 'Gato e Cachoro',
            experiencia: '5 Anos',
            imgData: 'adestradormarcia.jpg'
        },
        {
            nome: 'Lucas Alves',
            idade:'32',
            sexo: 'Masculino',
            cidade: 'Duque de Caxias',
            estado: 'Rio de Janeiro',
            email: 'adestreseupetrj@gmail.com',
            especializacao: 'Cachorro e Gato',
            experiencia: '1 Ano',
            imgData: 'lucas.jpg'
        },
        {
            nome: 'Ludmila Stefany Santos',
            idade:'23',
            sexo: 'Feminino',
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
            email: 'seupetbh@gmail.com',
            especializacao: 'Cachorro e Gato',
            experiencia: '4 Anos',
            imgData: 'lud.jpg'
        },
    ]
}

$(document).ready(function() {

        let database = localStorage.getItem("adestradores");
    
        database = !database ? localStorage.setItem("adestradores", JSON.stringify(dadosformu)) : JSON.parse(database);
        

})



