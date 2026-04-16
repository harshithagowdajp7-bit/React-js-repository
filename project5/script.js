document.getElementById("load-btn").addEventListener("click",() => {
    document.getElementById("status").innerText="Loading...";
    let promise=new Promise((resolve,reject) => {
        if(Math.random() >  0.5){
            setTimeout(() => {
               resolve("Data Loaded");
            }, 2000);
        }else{
            setTimeout(() => {
               resolve("Data Not Loaded");
            }, 2000);
        }
    });
    promise.then((Data) => {
        document.getElementById("status").innerText=Data;
        });
    promise.catch((error) => {
        document.getElementById("status").innerText=error;
        });
    promise.finally(() => {
        document.getElementById("status").innerText="Loading Completed";
        });
});