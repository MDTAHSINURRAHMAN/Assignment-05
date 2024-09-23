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
    const currentDate = new Date();
    const formattedDate = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;
    history.innerHTML += `<li class="p-8 border border-gray-200 rounded-xl flex flex-col gap-4">
            <h1 class="font-bold text-lg lg:text-lg xl:text-xl">
            ${money} Taka is Donated for ${title}
            </h1>
            <p class="text-moneyColor text-xs md:text-sm">
            Date: ${formattedDate} GMT +0600 (Bangladesh Standard Time)
            </p>
          </li>`
}