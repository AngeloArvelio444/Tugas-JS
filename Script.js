function generateInputs() {
    let name = document.getElementById("name").value;
    let count = parseInt(document.getElementById("count").value);
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    if (!name || isNaN(count) || count < 1) {
        alert("Harap masukkan nama dan jumlah pilihan yang valid.");
        return;
    }

    for (let i = 1; i <= count; i++) {
        choicesDiv.innerHTML += `<label>Pilihan ${i}: </label><input type='text' id='choice${i}' required><br><br>`;
    }
    
    choicesDiv.innerHTML += "<button onclick='generateSelection()'>OK</button>";
    choicesDiv.classList.remove("hidden");
}

function generateSelection() {
    let count = parseInt(document.getElementById("count").value);
    let selectionDiv = document.getElementById("selection");
    selectionDiv.innerHTML = "";

    selectionDiv.innerHTML += "<label>Pilihan: </label>";
    selectionDiv.innerHTML += "<select id='finalChoice'>";
    for (let i = 1; i <= count; i++) {
        let choice = document.getElementById(`choice${i}`).value;
        selectionDiv.innerHTML += `<option value='${choice}'>${choice}</option>`;
    }
    selectionDiv.innerHTML += "</select><br><br>";
    selectionDiv.innerHTML += "<button onclick='showResult()'>OK</button>";
    selectionDiv.classList.remove("hidden");
}

function showResult() {
    let name = document.getElementById("name").value;
    let count = parseInt(document.getElementById("count").value);
    let finalChoice = document.getElementById("finalChoice").value;
    let resultDiv = document.getElementById("result");
    
    let choicesList = [];
    for (let i = 1; i <= count; i++) {
        choicesList.push(document.getElementById(`choice${i}`).value);
    }
    
    resultDiv.innerHTML = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${count} pilihan yaitu ${choicesList.join(", ")}, dan saya memilih ${finalChoice}.`;
    resultDiv.classList.remove("hidden");
}
