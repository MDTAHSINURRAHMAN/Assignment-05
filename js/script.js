const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");
const noakhaliDonateBtn = document.getElementById('noakhaliDonateBtn');
const noakhaliDonate = document.getElementById('noakhaliDonation');
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
    if(value >= 0){
        const noakhaliDonated = parseInt(getInnerText('noakhaliDonation'));
        const userHas = parseInt(getInnerText('userMoney'));
        const totalDonated = parseInt(value) + noakhaliDonated;
        const userChange = userHas - parseInt(value);
        noakhaliDonate.innerText = totalDonated;
        userMoney.innerText = userChange;
        document.getElementById('noakhaliInputField').value = '';
    }
    else{
        document.getElementById('noakhaliInputField').value = '';
        alert('ki baler taka diso??');
    }
});
