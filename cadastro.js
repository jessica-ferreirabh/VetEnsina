$("#enviar").on("click", function () {

    var contents = []
    var content = $('form').serializeArray()
    for (let i = 0; i < content.length; i++) {
        contents[contents.length] = content[i].value
    };

    const nome = contents[0];
    const idade = 23;
    const sexo = contents[1];
    const cidade = contents[2];
    const estado = contents[3];
    const email = contents[5];

    const formulario = {

        nome: nome,
        idade: idade,
        sexo: sexo,
        cidade: cidade,
        estado: estado,
        email: email,
        especialização: "",
        experiencia: '4 Anos',
        urlimagem: 'lud.jpg',

    }

    let i = 0;

    while (contents[i] !== "" && i < contents.length) i++;

    if (i != contents.length)
        alert("Favor prencher todos os campos!")
    else {
        salvar(formulario);
        alert("Cadastro realizado com sucesso!")
    }
})


function salvar(data) {
    let db = JSON.parse(localStorage.getItem("adestradores"));
    db.formul.push(data);

    localStorage.setItem("adestradores", JSON.stringify(db))
}


