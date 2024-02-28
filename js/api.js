const loadData = async (brandName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    const data = await res.json()
    // console.log(data);
    const phones = data.data;
    // console.log(phones);
    displayCard(phones);
}
const displayCard = (phones) => {
    console.log(phones);
    // get the phone data and show it by card
    const phoneCardContainer = document.getElementById('card-container');
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
    });
}

loadData();