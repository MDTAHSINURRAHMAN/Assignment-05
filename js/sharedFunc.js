function validate(a, c){
    if(a <= 0 || isNaN(a) || a === ''){
        alert("Give a valid input");
        return -1;
    }
    const x = parseFloat(c) - parseFloat(a);
    if(x < 0){
        alert("Sorry! You don't have enough coins.");
        return -1;
    }
    return 1;
}

function getInnerText(id){
    const textValue = document.getElementById(id).innerText;
    return textValue;
}

function historyUpdate(history, money, title){
    const currentDate = new Date();
    const formattedDate = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;
    const forIndex = title.indexOf('for');
    const formattedTitle = title.substring(forIndex + 4).trim();
    history.innerHTML += `<li class="p-8 border border-gray-200 rounded-xl flex flex-col gap-4">
            <h1 class="font-bold text-lg lg:text-lg xl:text-xl">
            ${money} Taka is Donated for ${formattedTitle}
            </h1>
            <p class="text-moneyColor text-xs md:text-sm">
            Date: ${formattedDate} GMT +0600 (Bangladesh Standard Time)
            </p>
          </li>`
}