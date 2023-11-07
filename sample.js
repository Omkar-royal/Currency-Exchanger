  
//USING XHTTP

    let usdd;

    const selectElement1 = document.getElementById('selectcountry1');
    const selectElement2 = document.getElementById('selectcountry2');
    //
   
    var ul="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

function loadDOC() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        countries = JSON.parse(xhttp.responseText);
       

const Keys = Object.keys(countries);
const values = Object.values(countries);


Keys.forEach((key, index) => {
    const option = document.createElement('option');
    option.value = key;
    option.text = key+" - " + values[index]; 
    selectElement1.appendChild(option);
    
  });
  Keys.forEach((key, index) => {
    const option = document.createElement('option');
    option.value = key;
    option.text =  key+" - " + values[index]; 
    
    selectElement2.appendChild(option);

  });

    }
    xhttp.open("GET",ul , true);
    xhttp.send();
}
var bb;
var cc;
var inputamount;
var exchange_result=document.getElementById('Exchange-result');
// amountInput.addEventListener('change',()=>{
//     console.log(amountInput.value);
//     inputamount=amountInput.value;
//     console.log(inputamount);
//  })
 selectElement1.addEventListener('change',()=>{
    console.log(selectElement1.value);
    bb=selectElement1.value;
    
 })

 selectElement2.addEventListener('change',()=>{
    console.log(selectElement2.value);
    cc=selectElement2.value;
 })
 var amountValue;
 const amountInput=document.getElementById("amount");
 amountInput.addEventListener('change',()=>{

     console.log(amountInput.value);
     amountValue=amountInput.value;
 })

 async function clickLoad(){

    var ull=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${bb}.json`;
    var tit=document.getElementById('result');
    
   
    fetch(ull,{
        method:'GET'
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
       
     results=()=>{
        const result=(data[bb][cc]); 
        const finalResult=result*amountValue;
        console.log(finalResult)
        exchange_result.innerHTML=`<h6 class=' fs-5 fw-bold' >${amountValue} &nbsp; ${bb} =</h6>
                                       <h2 class='fw-bold fs-1'>${finalResult}&nbsp; ${cc}</h2>`;
       
    }
    results();

  

    })
 
  

}
window.addEventListener('DOMContentLoaded', (event) => {
 
    loadDOC();
   event.preventDefault();

    })


   






