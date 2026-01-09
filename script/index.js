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

// copy-button
const copybtns = document.getElementsByClassName("copy-btn")
for (let copyButton of copybtns) {
    copyButton.addEventListener("click", function () {

        const serviceNumber = copyButton.parentNode.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
        console.log(serviceNumber)

        navigator.clipboard.writeText(serviceNumber)

        alert(`Copied number: ${serviceNumber}`);


        const copyCount = getElement("copy-count").innerText;
        const currentCopy = Number(copyCount) + Number(1);
        getElement("copy-count").innerText = currentCopy;
    })
}

// cart add 
const callcartbtn = document.getElementsByClassName("call-cart-btn")

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



        const totalCoins = getElement("total-coins").innerText;
        if (totalCoins < 20) {
            alert("No coin for this service calling ");
            return;
        }
        else {
            alert(`Calling ${serviceTitle} ${serviceNumber}...`);
            const currentCoins = Number(totalCoins) - Number(20);
            getElement("total-coins").innerText = currentCoins;
        }




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
};


// clear button
document.getElementById("btn-clear").addEventListener("click", function () {
    const cartAddSections = getElement("cart-add-sections");
    cartAddSections.innerHTML = "";

});
