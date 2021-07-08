function elegirMunicipio(){
  var ss= SpreadsheetApp.openById("1TBdXBPz-qV2F9eQp5Fc06c5ER4MKUIUwBhGyOstO-AI");
  var sheet=ss.getSheetByName("Elegir");
  var valores= sheet.getDataRange().getValues();
  var nombresMunicipios=[];
    valores.forEach(row=>{
    nombresMunicipios.push(row[0]);
    });
  return nombresMunicipios;
};


//var argumento="CUETZALAN";
function ejecutando(){
  traerMunicipios("CUETZALAN");
}

function traerMunicipios(argumento){
 
  var ss= SpreadsheetApp.openById("1TBdXBPz-qV2F9eQp5Fc06c5ER4MKUIUwBhGyOstO-AI");
  var sheet=ss.getSheetByName("Municipios");
  var datos= sheet.getDataRange().getValues();
  var nombres=[];

  if (argumento=="ACAYUCAN"){
    datos.forEach(row=>{
    nombres.push(row[0]);
    });
  } else if(argumento=="CUETZALAN"){
    datos.forEach(row=>{
    nombres.push(row[1]);
    });
  } else if(argumento=="PACHUCA"){
    datos.forEach(row=>{
    nombres.push(row[2]);
    });
  } else {
    datos.forEach(row=>{
    nombres.push(row[3]);
    });
  }

  sheet.appendRow([new Date(),argumento]);

  return nombres;
 };





