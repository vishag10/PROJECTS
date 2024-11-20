function displayCart(){
    console.log(localStorage.length);
    
    str=``
    for (let i = 0; i < localStorage.length; i++) {
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))
        str+=`
            <div class="carted-items">
                <div class="imgdiv">
                    <img src="${prod.thumbnail}" alt="">
                </div>
                <div class="item-deatils">
                    <h2>${prod.title}</h2>
                    <h4>$${prod.price}</h4>
                    <button onclick="removeProd(${prod.id})">REMOVE</button>
                </div>
            </div>
        `
        
    }
    document.getElementById("items").innerHTML=str
}

displayCart()

function removeProd(id){
    localStorage.removeItem(id)
    displayCart()
}