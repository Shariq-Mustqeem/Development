const allShopItems = document.querySelector(".shop-item-container");
const addCartItems = document.querySelector(".cart-items");
const cartRow = document.querySelector(".cart-row");

allShopItems.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  const shopItemBtn = currentElement.classList.contains("shop-item-button");

  if (shopItemBtn) {
    const mainShopItem = currentElement.closest(".shop-item");
    const shopItemTitle = mainShopItem.querySelector(".shop-item-title");
    const shopItemImage = mainShopItem.querySelector(".shop-item-image");
    const shopItemPrice = mainShopItem.querySelector(".shop-item-price");

    const createDiv = document.createElement("div");
    createDiv.className = "cart-row";
    createDiv.innerHTML += `<div class="cart-item cart-column">
           <img
             class="cart-item-image"
             src="${shopItemImage.src}"
             width="100"
             height="100"
           />
           <span class="cart-item-title">${shopItemTitle.innerText}</span>
         </div>
         <span class="cart-price cart-exact-price cart-column">${shopItemPrice.innerText}</span>
         <div class="cart-quantity cart-column">
           <input class="cart-quantity-input" type="number" value="1" />
           <button class="btn btn-danger cart-delete-btn" type="button">
             REMOVE
           </button>
         </div>`;
    addCartItems.append(createDiv);
    // bindDeletebtn();
    updateCartTotal();
  }
});

addCartItems.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  // console.log(currentElement.className, "currentElement");
  if (
    currentElement.className === "btn btn-danger cart-delete-btn" &&
    confirm("are you sure")
  ) {
    currentElement.parentElement.parentElement.remove();
    updateCartTotal();
  }
});

// function bindDeletebtn() {
//   const selectAllBtn = document.querySelectorAll(".cart-delete-btn");
//   selectAllBtn.forEach(function (singleItems) {
//     singleItems.addEventListener("click", function (e) {
//       e.preventDefault();
//       const currentElement = e.target;
//       currentElement.parentElement.parentElement.remove();
//     });
//   });
// }

function updateCartTotal() {
  const cartItemCartRow = document.querySelectorAll(".cart-items .cart-row");
  const cartTotalPrice = document.querySelector(".cart-total-price");

  if (cartItemCartRow?.length > 0) {
    let total = 0;
    cartItemCartRow.forEach(function (singleCart) {
      const cartPriceText = singleCart.querySelector(".cart-price")?.innerText;

      const cartPrice = parseFloat(cartPriceText.replace("$", ""));

      const cartQuantityInput = singleCart.querySelector(
        ".cart-quantity-input"
      );

      total += cartPrice * cartQuantityInput?.value;

      // cartQuantityInput.addEventListener("change", function (e) {
      //   // e.preventDefault(); yeh nhi aata hai
      //   const currentElement = e.target;
      //   if (currentElement.value <= 0) {
      //     currentElement.value = 1;
      //   }
      //   updateCartTotal();
      // });
    });
    cartTotalPrice.innerText = `$ ${total.toFixed(2)}`;
  } else {
    cartTotalPrice.innerText = `$ 0`;
  }
}

function updateCartTotal() {
  const cartItemCartRow = document.querySelectorAll(".cart-items .cart-row");
  const cartTotalPrice = document.querySelector(".cart-total-price");

  let total = 0;
  cartItemCartRow.forEach(function (singleCart) {
    const cartPriceText = singleCart.querySelector(".cart-price")?.innerText;

    const cartPrice = parseFloat(cartPriceText.replace("$", ""));

    const cartQuantityInput = singleCart.querySelector(".cart-quantity-input");

    total += cartPrice * cartQuantityInput?.value;
  });
  cartTotalPrice.innerText = `$ ${total.toFixed(2)}`;
}
