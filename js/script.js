const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");
const noakhaliDonateBtn = document.getElementById('noakhaliDonateBtn');
const feniDonateBtn = document.getElementById('feniDonateBtn');
const quotaDonateBtn = document.getElementById('quotaDonateBtn');
const noakhaliDonate = document.getElementById('noakhaliDonation');
const feniDonate = document.getElementById('feniDonation');
const quotaDonate = document.getElementById('quotaDonation');
const userMoney = document.getElementById('userMoney');

donationBtn.addEventListener('click', function(event){
    event.preventDefault();
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
});
historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    historySection.classList.remove('hidden');
    donationSection.classList.add('hidden');
});

noakhaliDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('noakhaliInputField');
    if(isNaN(value) && value >= 0){
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
    }
    else{
        document.getElementById('noakhaliInputField').value = '';
        return alert('Give Valid Input');
    }
});

feniDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('feniInputField');
    if(isNaN(value) && value >= 0){
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
    }
    else{
        document.getElementById('feniInputField').value = '';
        return alert('Give Valid Input');
    }
});

quotaDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = getInputValueById('quotaInputField');
    if(isNaN(value) && value >= 0){
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
    }
    else{
        document.getElementById('quotaInputField').value = '';
        return alert('Give Valid Input');
    }
});
