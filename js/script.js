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
    const value = document.getElementById('noakhaliInputField').value;
    const userHas = getInnerText('userMoney');
    if(validate(value, userHas) === -1){
        document.getElementById('noakhaliInputField').value = '';
        return;
    }
    const noakhaliDonated = getInnerText('noakhaliDonation');
    const totalDonated = parseFloat(value) + parseFloat(noakhaliDonated);
    const userChange = parseFloat(userHas) - parseFloat(value);
    noakhaliDonate.innerText = totalDonated.toFixed(2);
    userMoney.innerText = userChange.toFixed(2);
    document.getElementById('noakhaliInputField').value = '';
    historyUpdate(historyUl, value, noakhaliTitle.innerText);
    modal.showModal();
});

feniDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = document.getElementById('feniInputField').value;
    const userHas = getInnerText('userMoney');
    if(validate(value, userHas) === -1){
        document.getElementById('feniInputField').value = '';
        return;
    }
    const feniDonated = getInnerText('feniDonation');
    const totalDonated = parseFloat(value) + parseFloat(feniDonated);
    const userChange = parseFloat(userHas) - parseFloat(value);
    feniDonate.innerText = totalDonated.toFixed(2);
    userMoney.innerText = userChange.toFixed(2);
    document.getElementById('feniInputField').value = '';
    historyUpdate(historyUl, value, feniTitle.innerText);
    modal.showModal();
});
quotaDonateBtn.addEventListener('click', function(event){
    event.preventDefault();
    const value = document.getElementById('quotaInputField').value;
    const userHas = getInnerText('userMoney');
    if(validate(value, userHas) === -1){
        document.getElementById('quotaInputField').value = '';
        return;
    }
    const quotaDonated = getInnerText('quotaDonation');
    const totalDonated = parseFloat(value) + parseFloat(quotaDonated);
    const userChange = parseFloat(userHas) - parseFloat(value);
    quotaDonate.innerText = totalDonated.toFixed(2);
    userMoney.innerText = userChange.toFixed(2);
    document.getElementById('quotaInputField').value = '';
    historyUpdate(historyUl, value, quotaTitle.innerText);
    modal.showModal();
});