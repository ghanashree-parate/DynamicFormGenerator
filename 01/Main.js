
function myFunction() {
    //document.getElementById("myTextarea").value = "{\"First Name\": \"Sonu\",\"Last Name\": \"Parate\",\"City\": \"Bengaluru\"}";
    document.getElementById("myTextarea").value = "{\"records\":{\"01\": {\"First Name\": \"Sonu\",\"Last Name\": \"Parate\",\"City\": \"Bengaluru\"},\"02\": {\"First Name\": \"Piyush\",\"Last Name\": \"Parate\",\"City\": \"Bengaluru\"}}}";
}

function CreateTableFromJSON() {
    var data = document.getElementById("myTextarea").value;
    var dataObj = JSON.parse(data);
   
    document.getElementById('tableContainer').innerHTML = "";

    var headerList = null;
    for (var i in dataObj.records)
    {
        headerList = Object.keys(dataObj.records[i]);
        break;
    }

    var divTableContainer = document.getElementById('tableContainer');

    var table = document.createElement("table");
       
    var headerTr = table.insertRow(-1);
    for (var i in headerList) {
        var th = document.createElement("th");
        th.innerHTML = headerList[i];
        headerTr.appendChild(th);
    }

    

   
   
    for (x in dataObj.records) {
        tr = table.insertRow(-1);
        var cellValue = dataObj.records[x];
        for (var j in cellValue) {
            var tablecolumnvalue = cellValue[j];
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = tablecolumnvalue;
        }
       
    }

    divTableContainer.appendChild(table);

}