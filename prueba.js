var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function CargarDatos(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {

            cargarXML(this);
        }

    };

    xhr.open("GET", "prueba.xml", true);
    xhr.send();

} 

function cargarXML(xml){

    var docXML = xml.responseXML;
    var cds = docXML.getElementsByTagName("tasks");

    //const title= cds.getElementsByTagName('title').textContent;
    const description= cds.getElementsByTagName('descripcion').textContent;
    title='texto de prueba'
    console.log(title);   
}

//CargarDatos()


