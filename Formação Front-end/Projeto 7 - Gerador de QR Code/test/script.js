function carregarCSV() {
    var input = document.getElementById("inputTeste");
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = function (e) {
            var csvContent = e.target.result;
            var jsonArray = csvToJSON(csvContent);
            exibirJSON(jsonArray);
        };

        reader.onerror = function (e) {
            console.log("Erro ao ler o arquivo");
        };
    }
}

function csvToJSON(csvContent) {
    var lines = csvContent.trim().split("\n");
    var result = [];
    var headers = lines[0].split(";");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(";");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = currentLine[j].trim();
        }

        result.push(obj);
    }

    return result;
}

function exibirJSON(jsonArray) {
    var jsonDiv = document.getElementById("area-de-inputs");

    console.log(jsonArray);

    jsonArray.forEach(array => {
        jsonDiv.insertAdjacentHTML('beforeend', `
        <h3> ${array.titulo}</h3>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${array.url}&bgcolor=ffffff00&format=png" alt="Imagem exemplo" srcset="">
        `)
    });

}