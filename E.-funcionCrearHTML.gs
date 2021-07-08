function doGet(e) {
  var template= HtmlService.createTemplateFromFile("A.-index.html");

  //Aqui va las listas//
  //template.nombres= traerMunicipios();
  template.municipios=elegirMunicipio();
  
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); //para iframe 
};

// Incluir los css y los js en hojas aparte
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};



















