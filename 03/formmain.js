


var templateData = [
    { labelName: "First Name",id:"Fname", type: "txt" },
     { labelName: "Middle Name", id: "Mname", type: "txt" },
      { labelName: "Last Name", id: "Lname", type: "txt" },
       { labelName: "City", id: "city", type: "txt" },
    { labelName: "Gender", type: "radiobutton", id: "gender", textvalue: { "Male": "11", "Female": "2", "Other": "3" } },
     { labelName: "Select Course", type: "optionset", id: "course", textvalue: { "BCA": "1", "BSc": "2", "BBA": "3", "MBA": "4" } },
    { labelName: "Accept Terms And Conditions", type: "checkbox",id:"terms", textvalue: { "Yes": "1", "No": "0" } },
    { labelName: "Submit", type: "button", event: { "onclick": "clickAlert" }, Id: "submit_form" },
];
function ShowData()
{
    var record = new Object();

    for (var i in templateData) {
        var type = templateData[i].type;
        switch (type) {
            case "txt":
                var controleId = templateData[i].id;
                        var labelName = templateData[i].labelName;
                        record[labelName] = document.getElementById(controleId).value;
                break;
            case "radiobutton":
                var controleId = templateData[i].id;
                        var labelName = templateData[i].labelName;
                        record[labelName] = document.querySelector('input[name = "gender"]:checked').value;
                break;
            case "optionset":
                var controleId = templateData[i].id;
                var labelName = templateData[i].labelName;
                record[labelName] = document.querySelector('option:checked').value;
                break;
            case "checkbox":
                var controleId = templateData[i].id;
                var labelName = templateData[i].labelName;
                record[labelName] = document.querySelector('input[name = "terms"]:checked').value;
                break;

        }
        var jsonString = JSON.stringify(record);
        document.getElementById("formTextArea").innerHTML = jsonString;
    }

    
}

function CreateTableFromJSON() {
    var data = document.getElementById("formTextArea").value;
    var dataObj = JSON.parse(data);

    document.getElementById('tableContainer').innerHTML = "";

    var headerList = null;
    for (var i in dataObj) {
        headerList = Object.keys(dataObj);
        break;
    }

        var divTableContainer = document.getElementById('tableContainer');

        var table = document.createElement("table");

        var headerTr = table.insertRow(-1);
        for (var i in headerList) {
            var th = document.createElement("th");
            th.innerHTML =headerList[i];
            headerTr.appendChild(th);
        }
        tr = table.insertRow(-1);
    for (x in dataObj) {
       
        var cellValue = dataObj[x];
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = cellValue;
    }

    divTableContainer.appendChild(table);

}
function onLoad()
{
    //get containor div object
    var divLabelContainer = document.getElementById('divFormGenerate');

    //set label on form
    for (var i in templateData)
    {
        var type = templateData[i].type;
        switch (type)
        {
            case "txt":
                //create new lable
                var label = document.createElement("LABEL");
               
                //add label into div container
                divLabelContainer.appendChild(label);
                //Get Label Name
                var labeldata = templateData[i].labelName;
                label.innerHTML = labeldata;

                var textbox = document.createElement("INPUT");
                textbox.id = templateData[i].id;
                divLabelContainer.appendChild(textbox);

                //add newline
                divLabelContainer.appendChild(document.createElement("br"));
                divLabelContainer.appendChild(document.createElement("br"));
                break;

            case "radiobutton":
                //create new lable
                var label = document.createElement("LABEL");
                //add label into div container
                divLabelContainer.appendChild(label);
                //Get Label Name
                var labeldata = templateData[i].labelName;
                label.innerHTML = labeldata;

                for (var j in templateData[i].textvalue)
                {
                    var radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = "gender";
                    radio.id = j;
                    radio.value = j;

                    divLabelContainer.appendChild(radio);
                    var textvalue = divLabelContainer.appendChild(document.createElement("span"));
                    textvalue.innerHTML = j;

                }
                //add newline
                divLabelContainer.appendChild(document.createElement("br"));
                divLabelContainer.appendChild(document.createElement("br"));
                break;

            case "checkbox":
                //create new lable
                var label = document.createElement("LABEL");
                //add label into div container
                divLabelContainer.appendChild(label);
                //Get Label Name
                var labeldata = templateData[i].labelName;
                label.innerHTML = labeldata;
                for (var k in templateData[i].textvalue) {
                 
                    var checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.name = "terms";
                    checkbox.value = k;

                    divLabelContainer.appendChild(checkbox);
                    var textvalue = divLabelContainer.appendChild(document.createElement("span"));
                    textvalue.innerHTML = k;

                }
                //add newline
                divLabelContainer.appendChild(document.createElement("br"));
                divLabelContainer.appendChild(document.createElement("br"));
                break;

            case "optionset":
                //create new lable
                var label = document.createElement("LABEL");
                //add label into div container
                divLabelContainer.appendChild(label);
                //Get Label Name
                var labeldata = templateData[i].labelName;
                label.innerHTML = labeldata;
                var select = document.createElement("SELECT");
                //select.setAttribute("id", "mySelect");
                divLabelContainer.appendChild(select);
                for (var l in templateData[i].textvalue) {
                   
                    var optionset = document.createElement("option");
                    optionset.text = l;
                   
                    //document.getElementById("mySelect").appendChild(optionset);
                    select.appendChild(optionset);

                }
                //add newline
                divLabelContainer.appendChild(document.createElement("br"));
                divLabelContainer.appendChild(document.createElement("br"));
                break;

            case "button":
                var button = document.createElement("BUTTON");
                var t = document.createTextNode("Submit");
                button.appendChild(t);
                divLabelContainer.appendChild(button);
                button.type = "submit";
                button.id = "myBtn";
                
                document.getElementById("myBtn").onclick = ShowData;
      
                

        }
    }
}
