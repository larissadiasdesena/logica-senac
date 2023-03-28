 ////////////////////// Multiplicação dos números //////////////////////////////
 
 var numero1 = document.getElementById("numero1");
 var numero2 = document.getElementById("numero2");
var resul = document.querySelector(".resultado")

 function calcula (){
    var calculo = numero1.value * numero2.value;

    resul.innerHTML = "<p>O resultado é : </p>" + calculo;
   
 }

 ////////////// Fim da multiplicação ////////////



 ///////////// Inicio da verificação ///////////////

 var entrada1 = document.getElementById("verificacao1");
 var entrada2 = document.getElementById("verificacao2");

 function verificar (){
    if(entrada1.value > entrada2.value){
        console.log("Variável  1 = " + entrada1.value + " é Maior que a variável 2 = " + entrada2.value);
        
  

    }else{
        console.log("variavel 2 = " + entrada2.value + " é maior que a variavel 1 =  " + entrada1.value);
        
  
    }
    entrada1.value = "";
    entrada2.value = "";
    
 }

/////// Fim da verificação //////////



/////// Inicio da data /////////////
 function data(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getUTCFullYear();
    
    var data_agora = dia + "-" + (mes + 1 ) + "-" + ano;

    console.log(data_agora);
 }

 ////// Fim da data //////////




