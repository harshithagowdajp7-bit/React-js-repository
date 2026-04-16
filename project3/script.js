function createCounter(){
    let count=0;
    return function(){
        count++;
        document.getElementById.innerText=count;
    };
}

const counter = createCounter();
