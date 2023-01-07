function hotelCost(numNight) {
    return numNight * 140;
}

function flyCost(cityName, numNight) {

    let totalPrice = 0;
    if (cityName === "barcelona" || cityName === "madrid") {
        totalPrice = numNight * 90;
    }

    else if (cityName === "sevilla") {
        totalPrice = numNight * 50;
    }
    else if (cityName === "valencia") {
        totalPrice = numNight * 40;
    }

    if (numNight > 3) {
        totalPrice = totalPrice - (totalPrice * 0, 1)

    }

    return totalPrice;


}

function carCost(numDays) {
    let totalPrice = numDays * 40;

    if (numDays => 3 && numDays < 7) {
        totalPrice = totalPrice - 20;

    }

    else if (numDays => 7) {
        totalPrice = totalPrice - 50;
    }

    return totalPrice;
}

function totalCost() {
    const selectCity = document.querySelector("#select-city");
    const numberNights = document.querySelector("#nights");
    const numberDaysRentCar = document.querySelector("#rent-car");
    const totalPrice = document.querySelector("#total-price");
    totalPrice.innerText = hotelCost(numberNights.value) +
        flyCost(selectCity.value, numberNights.value) +
        carCost(numberDaysRentCar.value);
}

const calculateForm = document.querySelector("#calculate-form");
calculateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    totalCost();
});