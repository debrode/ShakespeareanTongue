var btntranslate=document.querySelector("#tran");
var textInput=document.querySelector("#input");
var textOutput=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/shakespeare";


function gettranslationURL(text){
    return serverURL+ "?" + "text=" + text;
}

function errorhandle()
{
    console.log("error occured",error);
}

function clickhandler()
{
    var inputtxt=textInput.value;
    fetch(gettranslationURL(inputtxt))
    .then(response=>response.json())
    .then(json =>{
        var translatedtext=json.contents.translated;
        textOutput.innerText =translatedtext;
    })
    .catch(errorhandle)

}

btntranslate.addEventListener("click",clickhandler);