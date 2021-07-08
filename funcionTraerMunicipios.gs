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



function traerMunicipios(argumentoMunicipio){
  var ss= SpreadsheetApp.openById("1TBdXBPz-qV2F9eQp5Fc06c5ER4MKUIUwBhGyOstO-AI");
  var sheet=ss.getSheetByName("Municipios");
  var datos= sheet.getDataRange().getValues();
  var nombres=[];

  if (argumentoMunicipio=="ACAYUCAN"){
    datos.forEach(row=>{
    nombres.push(row[0]);
    });
  } else if(argumentoMunicipio=="CUETZALAN"){
    datos.forEach(row=>{
    nombres.push(row[1]);
    });
  } else if(argumentoMunicipio=="PACHUCA"){
    datos.forEach(row=>{
    nombres.push(row[2]);
    });
  } else {
    datos.forEach(row=>{
    nombres.push(row[3]);
    });
  }
  //sheet.appendRow([new Date(),argumentoMunicipio]); // lo pone en la hoja
  return nombres;
 };





