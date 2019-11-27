

$(document).ready(function () {

    let data = JSON.parse(localStorage.getItem("adestradores"));
    console.log(data)
    mostrarinfo(data)
    


})

function mostrarinfo (dbinfo){
    console.log(dbinfo.formul[0].nome)
    console.log(dbinfo.formul.length)
    let adestradores = "";

    for (i=0;i < dbinfo.formul.length;i++){
        console.log(dbinfo.formul[i].nome)
        adestradores += `
        <div class="adestrador">
                <div class="foto">
                <img src="${dbinfo.formul[i].urlimagem}" alt="">
                </div>
                
                <div class="nome">
                <h4> ${dbinfo.formul[i].nome}</h4>
                </div>

                <div class="sexo">
                <h4> ${dbinfo.formul[i].sexo}</h4>
                </div>
                <div class="cidade">
                <h4> ${dbinfo.formul[i].cidade}</h4>
                </div>
                <div class="estado">
                <h4> ${dbinfo.formul[i].estado}</h4>
                </div>
                <div class="email">
                <h4> ${dbinfo.formul[i].email}</h4>
                </div>
                <div class="especialização">
                <h4> ${dbinfo.formul[i].especialização}</h4>
                </div>
                <div class="experiencia">
                <h4> ${dbinfo.formul[i].experiencia}</h4>
                </div>
                </div>
                        `
        ;

    }
    $("#conteudo").append(adestradores);
} 






    













