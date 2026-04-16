document.getElementById("getBtn").addEventListener("click", getData);

async function getData(){
    try{
        const response=await fetch("https://api.exchangerate-api.com/v4/latest/GBP");
        let data=await response.json();
        document.getElementById("status").innerText=data.rates.INR;
    }
    catch(error){
        console.log(error);
    }
}