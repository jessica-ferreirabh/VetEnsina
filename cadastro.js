var imgConvertedToBase64;

document.getElementById('inputImage').addEventListener('change', function(event) {
    
    var myCanvas = document.createElement("canvas");
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.src = '';
    img.addEventListener('load',function() {});
    img.onload = function(){
        myCanvas.width = img.width;
        myCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        var dataUrl = myCanvas.toDataURL('image/jpeg');
        imgConvertedToBase64 = dataUrl.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    img.src = URL.createObjectURL(event.target.files[0]);
});

$("#enviar").on("click", function () {

    var contents = []
    var content = $('form').serializeArray()
    for (let i = 0; i < content.length; i++) {
        contents[contents.length] = content[i].value
    };

    console.log("contents");
    console.log(contents);

    const nome = contents[0];
    const sexo = contents[1];
    const idade = contents[2];
    const cidade = contents[3];
    const estado = contents[4];
    const especializacao = contents[5];
    const experiencia = contents[6];
    const email = contents[7];

    const formulario = {
      nome: nome,
      idade: idade,
      sexo: sexo,
      cidade: cidade,
      estado: estado,
      email: email,
      especializacao: especializacao,
      experiencia: experiencia,
      imgData:imgConvertedToBase64
    }

    let i = 0;

    while (contents[i] !== "" && i < contents.length) 
      i++;

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

function getBase64Image(image) {
  

    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
