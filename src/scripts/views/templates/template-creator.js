import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
        <article class="post_item">
        <img class="lazyload restorant_image" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" 
        />
        
        <div  class="post_detail">
            <div class="city">
            <h3 tabindex="0">Kota : ${restaurant.city}</h3>
            </div>
            <div class="post-item__content">
            <h3 class="post-item-title"><a class="post-item-anchor"href="${`/#/detail/${restaurant.id}`}" style="text-decoration: none;">${restaurant.name}</a></h3>
            <p tabindex="0" class="post-item__description">${restaurant.description}</p>
            <p tabindex="0" class="reting">Rating : ${restaurant.rating}</p>
        </div>

        </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />  

  <div class="restaurant__info">
  <h3 tabindex="0">Information :</h3>
    
    <h4 tabindex="0">Kota ${restaurant.city}</h4>
    <p tabindex="0">${restaurant.address}</p>
    <h4 tabindex="0">description</h4>
    <p tabindex="0">${restaurant.description}</p>
    <h4 tabindex="0">Category</h4>
    <p tabindex="0">${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4 tabindex="0">Menu Minuman</h4>
    <p tabindex="0">
        ${restaurant.menus.drinks.map((food) => `${food.name}`).join(', ')}
    </p>
    <h4 tabindex="0">Menu Makanan</h4>
    <p tabindex="0">
        ${restaurant.menus.foods.map((food) => `${food.name}`).join(', ')}
    </p>
    <h4 tabindex="0">Rating:  ${restaurant.rating}</h4>
  </div>


  <div class="restaurant__overview">
    <h4 tabindex="0">Customer Reviews</h4>
    <div class="restaurantInfo">${restaurant.customerReviews.map((review) => `
        <div class="restaurantInfoList">
            <h6 tabindex="0" >${review.name}</h6>
            <p tabindex="0" class="date">${review.date}</p>
            <p tabindex="0" >${review.review}</p>
        </div>
    `).join('')}
    </div>
  </div>
  <div tabindex="0"id="likeButtonContainer"></div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this movie" id="likeButton" class="like">
     <i tabindex="0"class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this movie" id="likeButton" class="like liked">
    <i tabindex="0"class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
