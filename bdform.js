var dadosformu = {
    formul: [
        {
            nome: 'Luis Atonio Santos',
            idade:'40  anos',
            sexo: 'Masculino',
            cidade: 'Nova Lima',
            estado: 'Minas Gerais',
            email: 'dogensina@gmail.com',
            especialização: 'Cachorro e Gato',
            experiencia: '2 Anos',

            urlimagem: 'adestradorluis.jpg',
        },

        {
            nome: 'Marcia Camila Antonia',
            idade:'30  anos',
            sexo: 'Feminino',
            cidade: 'São Paulo',
            estado: 'São Paulo',
            email: 'adestreseupet@gmail.com',
            especialização: 'Gato e Cachoro',
            experiencia: '5 Anos',

            urlimagem: 'adestradormarcia.jpg',

        },


        {
            nome: 'Lucas Alves',
            idade:'32  anos',
            sexo: 'Masculino',
            cidade: 'Duque de Caxias',
            estado: 'Rio de Janeiro',
            email: 'adestreseupetrj@gmail.com',
            especialização: 'Cachorro e Gato',
            experiencia: '1 Ano',

            urlimagem: 'lucas.jpg',

        },

        {
            nome: 'Ludmila Stefany Santos',
            idade:'23  anos',
            sexo: 'Feminino',
            cidade: 'Belo Horizonte',
            estado: 'Minas Gerais',
            email: 'seupetbh@gmail.com',
            especialização: 'Cachorro e Gato',
            experiencia: '4 Anos',

            urlimagem: 'lud.jpg',

        },
    ]
}

$(document).ready(function() {

        let database = localStorage.getItem("adestradores");
    
        database = !database ? localStorage.setItem("adestradores", JSON.stringify(dadosformu)) : JSON.parse(database);
        

})



