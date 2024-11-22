function displayCart(){
    console.log(localStorage.length);
    
    str=``;
    discount=0;
    fultotal=0;
    fuldisc=0;

    for (let i = 0; i < localStorage.length; i++) {
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))

        discount=prod.price*(prod.discountPercentage/100);
        let total=Math.round(prod.price);
        fultotal+=total;
        fuldisc+=discount;
        p=Math.round(prod.price)
        str+=`
            <div class="carted-items">
                <div class="imgdiv">
                    <img src="${prod.thumbnail}" alt="">
                </div>
                <div class="item-deatils">
                    <h2>${prod.title}</h2>
                    <h4>$${p}</h4>
                    <h4 class="dis">${prod.discountPercentage}%Off</h4>
                    <button onclick="removeProd(${prod.id})">REMOVE</button>
                </div>
            </div>
        `
        
    }
    tot=fultotal-fuldisc
    document.getElementById("items").innerHTML=str
    document.getElementById("bill").innerHTML=`
     <table >
                            <tr>
                                <th>PRODUCT DEATILS</th>
                            </tr>
                            <tr>
                                <td>PRICE</td>
                                <td>$${fultotal}</td>
                            </tr>
                            <tr>
                                <td>DISCOUNT</td>
                                <td class="drate">$${fuldisc}</td>
                            </tr>
                            <tr>
                                <td>DELIVERY CHARGE</td>
                                <td >Free</td>
                            </tr>
                            <tr >
                                <td class="tm" >TOTAL AMOUNT</td>
                                <td class="tm">$${tot}</td>
                            </tr>
                        </table>
    
    `

}

displayCart()

function removeProd(id){
    localStorage.removeItem(id)
    displayCart()
}