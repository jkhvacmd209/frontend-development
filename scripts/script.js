// JavaScript Document

//hamburger menu
var navigation = document.querySelector('header nav:nth-of-type(2)');
var openButton = document.querySelector('header nav:nth-of-type(1) button');
var closeButton = document.querySelector('header nav:nth-of-type(2) button');

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

function toggleMenu() {
	navigation.classList.toggle('open');
}

//buy en like buttons
var buyButtons = document.querySelectorAll('.buy');
var likeButtons = document.querySelectorAll('.like');
var shoppingCartAmount = document.querySelector('.winkelwagen span');
var wishlistAmount = document.querySelector('.favorieten span');

var currentCartAmount;
var currentWishlistAmount;

buyButtons.forEach(buyButton => buyButton.addEventListener("click", addToShoppingCart));

likeButtons.forEach(likeButton => likeButton.addEventListener("click", addToFavorites));

function addToShoppingCart() {

	currentCartAmount = parseInt(shoppingCartAmount.innerHTML);
	newCartAmount = currentCartAmount + 1;
	shoppingCartAmount.innerHTML = newCartAmount;

	if(newCartAmount == 0) {
		shoppingCartAmount.style.display = 'none';
	} else {
		shoppingCartAmount.style.display = 'flex';
	}

}

function addToFavorites() {
	var clickedHeart = event.target;

	if (clickedHeart.tagName == 'IMG') {
		clickedHeart = clickedHeart.parentElement;
	}

	console.log(clickedHeart);
	
	currentWishlistAmount = parseInt(wishlistAmount.innerHTML);
 
	if (clickedHeart.parentElement.classList.contains("liked")) {
	newWishlistAmount = currentWishlistAmount - 1;
	wishlistAmount.innerHTML = newWishlistAmount;
	clickedHeart.parentElement.classList.remove("liked");
	} else {
	newWishlistAmount = currentWishlistAmount + 1;
	wishlistAmount.innerHTML = newWishlistAmount;
	clickedHeart.parentElement.classList.add("liked");
	}

	if(newWishlistAmount == 0) {
		wishlistAmount.style.display = 'none';
	} else {
		wishlistAmount.style.display = 'flex';
	}
	
}