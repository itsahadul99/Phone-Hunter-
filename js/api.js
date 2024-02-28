const loadData = async (brandName = '11',isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName}`)
    const data = await res.json()
    // console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayCard(phones,isShowAll);
}
const displayCard = (phones,isShowAll) => {
    console.log(phones);
    // show all button container
    const showAllButtonContainer = document.getElementById('show-all-button-container');
    if(phones.length > 12 && !isShowAll){
        showAllButtonContainer.classList.remove('hidden');
    }
    else{
        showAllButtonContainer.classList.add('hidden')
    }
    // cheek condition to control load data
    if(!isShowAll){
        phones = phones.slice(0, 12)
    }
    // get the phone data and show it by card
    const phoneCardContainer = document.getElementById('card-container');
    // clear the div after searching
    phoneCardContainer.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 py-10 pt-10 bg-[#0D6EFD0D]">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
            <div class="card-body items-center text-center space-y-5">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary text-xs lg:text-xl">Show Details</button>
                </div>
            </div>
        </div>
        `
        phoneCardContainer.appendChild(phoneCard);
        spinner(false);
    });
}
const searchField = (isShowAll) => {
    // show the spinner
    spinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadData(searchText, isShowAll);
}
// show all handler
const showAll = () => {
    searchField(true);
}
// spinner or loading icon 
const spinner = (isSpinner) => {
    const spinnerContainer = document.getElementById('spinner-container');
    if(isSpinner){
        spinnerContainer.classList.remove('hidden')
    }else{
        spinnerContainer.classList.add('hidden');
    }
}


loadData();