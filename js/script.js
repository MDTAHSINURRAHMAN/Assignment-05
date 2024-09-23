const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

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
