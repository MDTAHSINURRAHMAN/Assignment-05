const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");
const noakhaliDonateBtn = document.getElementById('noakhaliDonateBtn');
const feniDonateBtn = document.getElementById('feniDonateBtn');
const quotaDonateBtn = document.getElementById('quotaDonateBtn');
const noakhaliDonate = document.getElementById('noakhaliDonation');
const feniDonate = document.getElementById('feniDonation');
const noakhaliTitle = document.getElementById('noakhaliTitle');
const feniTitle = document.getElementById('feniTitle');
const quotaTitle = document.getElementById('quotaTitle');
const quotaDonate = document.getElementById('quotaDonation');
const userMoney = document.getElementById('userMoney');
const historyUl = document.getElementById('historyUl');
const modal = document.getElementById('successModal');

donationBtn.addEventListener('click', function(event){
    event.preventDefault();
    donationSection.classList.remove('hidden');
    donationBtn.classList.remove('bg-gray-200');
    donationBtn.classList.add('bg-btnColor');
    donationBtn.classList.add('hover:bg-btnColor');
    historySection.classList.add('hidden');
    historyBtn.classList.remove('bg-btnColor');
    historyBtn.classList.remove('hover:bg-btnColor');
    historyBtn.classList.add('bg-gray-200');
});
historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    historySection.classList.remove('hidden');
    historyBtn.classList.remove('bg-gray-200');
    historyBtn.classList.add('bg-btnColor');
    historyBtn.classList.add('hover:bg-btnColor');
    donationSection.classList.add('hidden');
    donationBtn.classList.remove('bg-btnColor');
    donationBtn.classList.remove('hover:bg-btnColor');
    donationBtn.classList.add('bg-gray-200');
});

function loadBlog(){
    window.location.href = "blog.html"
}
function loadHome(){
    window.location.href = "index.html"
}

noakhaliDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('noakhaliInputField');
    if(value >= 0){
        const noakhaliDonated = parseInt(getInnerText('noakhaliDonation'));
        const userHas = parseInt(getInnerText('userMoney'));
        const totalDonated = parseInt(value) + noakhaliDonated;
        const userChange = userHas - parseInt(value);
        if(userChange < 0){
            document.getElementById('noakhaliInputField').value = '';
            return alert("Insufficient Amount");
        }
        noakhaliDonate.innerText = totalDonated;
        userMoney.innerText = userChange;
        document.getElementById('noakhaliInputField').value = '';
        historyUpdate(historyUl, value, noakhaliTitle.innerText);
        modal.showModal();
    }
    else{
        document.getElementById('noakhaliInputField').value = '';
        return alert('Give Valid Input');
    }
});

feniDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('feniInputField');
    if(value >= 0){
        const feniDonated = parseInt(getInnerText('feniDonation'));
        const userHas = parseInt(getInnerText('userMoney'));
        const totalDonated = parseInt(value) + feniDonated;
        const userChange = userHas - parseInt(value);
        if(userChange < 0){
            document.getElementById('feniInputField').value = '';
            return alert("Insufficient Amount");
        }
        feniDonate.innerText = totalDonated;
        userMoney.innerText = userChange;
        document.getElementById('feniInputField').value = '';
        historyUpdate(historyUl, value, feniTitle.innerText);
        modal.showModal();
    }
    else{
        document.getElementById('feniInputField').value = '';
        return alert('Give Valid Input');
    }
});

quotaDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('quotaInputField');
    if(value >= 0){
        const quotaDonated = parseInt(getInnerText('quotaDonation'));
        const userHas = parseInt(getInnerText('userMoney'));
        const totalDonated = parseInt(value) + quotaDonated;
        const userChange = userHas - parseInt(value);
        if(userChange < 0){
            document.getElementById('quotaInputField').value = '';
            return alert("Insufficient Amount");
        }
        quotaDonate.innerText = totalDonated;
        userMoney.innerText = userChange;
        document.getElementById('quotaInputField').value = '';
        historyUpdate(historyUl, value, quotaTitle.innerText);
        modal.showModal();
    }
    else{
        document.getElementById('quotaInputField').value = '';
        return alert('Give Valid Input');
    }
});