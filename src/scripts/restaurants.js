const Restaurants = () => {
    import('../public/data/DATA.json').then(({
        default: jsonData,
    }) => {
        const restaurants = jsonData.restaurants;
        let restoList = '';
        restaurants.forEach((resto) => {
            restoList +=
                `
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <div class="city-label">
                                <span class="city-label-text">
                                    Kota ${resto.city}
                                </span>
                            </div>
                            <img src="${resto.pictureId}" alt="Resto Makanan ${resto.name}">
                        </div>
                        <div class="card-body">
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <span>${resto.rating}</span>
                            </div>
                            <h3 class="card-title">
                                <a href="./restaurant/${resto.id}">${resto.name}</a>
                            </h3>
                            <p class="card-text">${resto.description}</p>
                        </div>
                    </div>
                </div>
                `;
        });
        document.querySelector('#resto-list').innerHTML = restoList;
    });
}

export default Restaurants;