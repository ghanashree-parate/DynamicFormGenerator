
var templateData = [
    { labelName: "First Name", type: "txt" },
     { labelName: "Middle Name", type: "txt" },
      { labelName: "Last Name", type: "txt" },
       { labelName: "City", type: "txt" },
    { labelName: "Gender", type: "radiobutton", textvalue: { "Male": "1", "Female": "0" } },
     { labelName: "Select Course", type: "optionset", textvalue: { "BCA": "1", "BSc": "2", "BBA": "3" } },
    { labelName: "Accept Terms And Conditions", type: "checkbox", textvalue: { "Yes": "1", "No": "0" } },
    { labelName: "Submit", type: "button", event: {"onclick":""}},
];

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
                    radio.name = j;
                    radio.value = templateData[i].textvalue[j];

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
                    checkbox.name = k;
                    checkbox.value = templateData[i].textvalue[k];

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


        }
    }
}