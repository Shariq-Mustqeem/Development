const budgetForm = document.querySelector(".budget-form");
const budgetInput = document.querySelector(".budget-input");
const budgetAmount = document.querySelector("#budget-amount");
const expenseForm = document.querySelector("#expense-form");
const expenseInput = document.querySelector("#expense-input");
const amountInput = document.querySelector("#amount-input");
const expenseList = document.querySelector(".expense-list");
const expenseAmount = document.querySelector(".expense-amount");

budgetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const budgetInputValue = budgetInput.value;
  if (!budgetInputValue) {
    return alert("please fill the input ");
  }
  const budgetInputValueNumber = parseInt(budgetInputValue);
  budgetAmount.innerHTML = budgetInputValueNumber;
  budgetInput.value = "";
});

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const expenseInputValue = expenseInput.value;
  const amountInputValue = amountInput.value;

  if (!expenseInputValue || !amountInputValue) {
    return alert("please fill the input ");
  }

  expenseList.innerHTML += `<div class="expense">
  <div class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-title mb-0 text-uppercase list-item">
      ${expenseInputValue}
    </h6>
    <h5 class="expense-amount mb-0 list-item">${amountInputValue}</h5>

    <div class="expense-icons list-item">
      <a href="#" class="delete-icon">
        <i class="fas fa-trash"></i>
      </a>
    </div>
  </div>
</div>`;
  expenseInput.value = "";
  amountInput.value = "";
  updateCartPrice();
});

expenseList.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (currentElement.className === "fas fa-trash" && confirm("ARE YOU SURE")) {
    currentElement.parentElement.parentElement.parentElement.remove();
    updateCartPrice();
  }
  // updateCartPrice();
});

function updateCartPrice() {
  const expense = document.querySelectorAll(".expense");
  const expenseDollor = document.querySelector("#expense-dollor");
  const budgetAmountMix = document.querySelector("#budget-amount");
  const balanceAmount = document.querySelector("#balance-amount");

  if (expense.length > 0) {
    let total = 0;

    expense.forEach(function (singleCart) {
      const expenseHeadingFive =
        singleCart.querySelector(".expense-amount")?.innerText;
      const expenseHeadingFiveNumber = parseInt(expenseHeadingFive);

      total += expenseHeadingFiveNumber;
    });

    expenseDollor.innerText = total;
    const expenseDollorBudgetAmountMix =
      expenseDollor.innerText - budgetAmountMix.innerText;
    balanceAmount.innerHTML = expenseDollorBudgetAmountMix;
  }
}


1024

#custom-slider-section .wash-slider-child h1 {
  font-size: 46px;
}
.white-btn {
  font-size: 12px;
}








// about

@media only screen and (max-width: 1200px) {
  #custom-banner-section .banner-name {
    font-size: 50px;
}
  .custom-header .list-menu a {
    font-size: 14px;
  }
  .custom-header .header__heading-link {
    width: 160px;
  }
  #custom-left-text-section h2 {
    font-size: 26px;
  }
  #custom-left-text-section p {
    font-size: 16px;
    line-height: 30px;
  }
  #custom-right-text-section p {
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  #custom-left-text-section img {
      height: 555px;
  }
  #custom-right-text-section img {
      height: 364px;
  }
  #custom-right-text-section h2 {
    font-size: 26px;
  }
  #custom-webinar-section #webinar-title h1 {
    font-size: 2.6rem;
  }
  #custom-webinar-section .webinar-img {
    width: 65%;
  }
}



















1440

#custom-banner-section .banner-name {
  font-size: 50px;
}
#custom-left-text-section p {
  font-size: 17px;
  line-height: 30px;
}
#custom-left-text-section img {
  height: 500px;
}
#custom-right-text-section h2 {
  font-size: 34px;
  margin-bottom: 20px;
}
#custom-right-text-section p {
  font-size: 17px;
  line-height: 30px;
}


1024
#custom-banner-section .banner-name {
  font-size: 38px;
} 
#custom-right-text-section h2 {
  font-size: 23px;
  margin-bottom: 16px;
}

#custom-left-text-section p {
  font-size: 16px;
  line-height: 25px;
}
#custom-right-text-section img {
  height: 380px;
}
#custom-right-text-section p {
  font-size: 16px;
  margin-bottom: 18px;
  line-height: 25px;
}
#custom-webinar-section #webinar-title h1 {
  font-size: 2.6rem;
}
#custom-webinar-section #webinar-title a {
  font-size: 1.8rem;
}
#custom-webinar-section #webinar-title p {
  font-size: 1.5rem;
}
#footer-section ul a {
  font-size: 14px;
}

991

.custom-header .list-menu a {
  font-size: 11px;
  padding: 5px;
}
#custom-banner-section .banner-name {
  font-size: 30px;
}

#custom-left-text-section img {
  height: 380px;
}
#custom-right-text-section img {
  height: 380px;
}
#footer-section ul li {
  margin-right: 14px;
}
#footer-section ul a {
  font-size: 12px;
}
#footer-section .footer-logo img {
  width: 76%;
}

768



425

#custom-banner-section .banner-name {
  font-size: 18px;
}
#custom-left-text-section p {
  font-size: 13px;
}
#custom-right-text-section p {
  font-size: 13px;
}
#custom-right-text-section h2 {
  font-size: 20px;
}