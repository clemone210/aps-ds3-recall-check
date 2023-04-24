var results = [];

function checkNumber() {
  var number = document.getElementById("number").value;
  var result = "";
  if (number >= 702000119357 && number <= 702000252356 || number >= 703000195463 && number <= 703000350272 || number >= 704000060801 && number <= 704000102800) {
    result = "❌ Your device is affected by the recall!";
  } else {
    result = "✅ Your device is not affected by the recall!";
  }
  results.push({number: number, result: result});
  displayResults();
}

function displayResults() {
  var history = document.getElementById("history");
  while (history.rows.length > 1) {
      history.deleteRow(1);
  }
  for (var i = 0; i < results.length; i++) {
    var tr = document.createElement("tr");
    var tdNumber = document.createElement("td");
    tdNumber.innerHTML = results[i].number;
    tr.appendChild(tdNumber);
    var tdResult = document.createElement("td");
    tdResult.innerHTML = results[i].result;
    tr.appendChild(tdResult);
    history.appendChild(tr);
  }
}

document.getElementById("number").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkNumber();
    }
});
