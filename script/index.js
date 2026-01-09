function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// heart count 
const heartbtns = document.getElementsByClassName("heart-btn")
for (let heartButton of heartbtns) {
    heartButton.addEventListener("click", function () {
        console.log('heart click')
        const heartCount = getElement("heart-count").innerText;
        const currentHeart = Number(heartCount) + Number(1);
        getElement("heart-count").innerText = currentHeart;
    })
}



// cart add 
const callcartbtn = document.getElementsByClassName("call-cart-btn")
// console.log(callcartbtn);

for (let cartButton of callcartbtn) {
    cartButton.addEventListener("click", function () {

        const serviceTitle = cartButton.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].innerText;


        const serviceNumber = cartButton.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].innerText;


        const serviceTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        alert(`Calling ${serviceTitle} ${serviceNumber}...`);


        const totalCoins = getElement("total-coins").innerText;
        const currentCoins = Number(totalCoins) - Number(20);
        getElement("total-coins").innerText = currentCoins;



        const cartAddSections = getElement("cart-add-sections");

        const newCart = document.createElement("div");
        newCart.innerHTML = `
         <div class="bg-gray-100 rounded-xl p-3 gap-4 flex justify-between items-center">
                                <div>
                                    <h2 class="text-md font-semibold mb-2">${serviceTitle}</h2>
                                    <p class="text-gray-500">${serviceNumber}</p>
                                </div>
                                <div>
                                    <p>${serviceTime}</p>
                                </div>
                            </div>
        `;
        cartAddSections.append(newCart);

    })
}