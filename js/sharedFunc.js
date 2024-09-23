function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    let arr = [];
    let f = 0;
    for(let x of inputValue){
        if(x >= '0' && x <= '9'){
            arr.push(x);
        }
        else{
            f = 1;
            break;
        }
    }
    if(f) return -1;
    else{
        if(arr.length === 0){
            return -1;
        }
        let val = "";
        for(let x of arr){
            val += x;
        }
        return val;
    }
}

function getInnerText(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}

function historyUpdate(history, money, title){

}