let data
async function getProduct(){
    const searchUrl=window.location.search
    const urlParams= new URLSearchParams(searchUrl)
    const id=urlParams.get("id")
    const res=await fetch(`https://dummyjson.com/products/${id}`)
     data=await res.json();
    console.log(data);
    
     document.getElementById("main").innerHTML=`
      <nav class="topnav">
        
            <div class="logo1">
                
            </div>
            <div class="services">
                <a href="" class="link1">find a store</a>
                <div class="verticalline"></div>
                <a href="" class="link1">help</a>
                <div class="verticalline"></div>
                <a href="" class="link1">join us</a>
                <div class="verticalline"></div>
                <a href="" class="link2">sign in</a>

            </div>
        </nav>
        <nav class="nav">
            <div class="logo2">
            </div>
            <div class="ser">
                <ul class="category" role="menu">
                    <li><a href="" class="a1">Groceries</a></li>
                    <li><a href="" class="a1">Appliances</a></li>
                    <li><a href="" class="a1">Mobile</a></li>
                    <li><a href="" class="a1">Discount</a></li>
                    <li><a href="" class="a1">Sales</a></li>
                    <li><a href="" class="a1">Fashion</a></li>
                    <li><a href="" class="a1">SNKRS</a></li>
                </ul>
            </div>
            <div class="lastlogo">
                <div class="inp"><input type="text" class="inputsearch" placeholder="search"></div>
                <div class="heart"></div>
                
                













                
            </div>
        </div>
        </nav>


        <div class="session1">
            <div class="left">
                <div class="sideimg">
                    <img src="${data.thumbnail}" alt="">
                    <img src="${data.thumbnail}" alt="">
                    <img src="${data.thumbnail}" alt="">
                    <img src="${data.thumbnail}" alt="">
                </div>
                <div class="img">
                        <img src="${data.thumbnail}" alt="" class="mainimg">
                </div>
               
                   
            </div>
            <div class="right">
                    <h1 class="name">${data.title}</h1>
                    <div class="rating">
                        <span>${data.rating}★</span>
                    </div>

                    <h2 class="rate">$${data.price}</h2>


                <dl class="offer">
                    <dt class="">Available offers</dt>
                    <dd>➣ Bank OfferFlat ₹1,200 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure</dd>
                    <dd>➣ Bank OfferFlat ₹1,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure</dd>
                    <dd>➣ Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</dd>
                    <dd>➣Special PriceGet extra 80% off (price inclusive of cashback/coupon)</dd>
                </dl>
                    
                </div>
            </div>

            <div class="session2">
                <div class="bycart">
                    <div class="l">
                        ${localStorage.getItem(data.id)?`<button class="add " onclick='gotoCart()'>GO TO CART</button>`:`<button class="add " onclick='addToCart(${data.id})'>ADD TO CART</button>`}
                    </div>
                    <div class="r">
                        <button class="by">BY NOW</button>
                    </div>
                </div> 
            </div>
   `
}

getProduct()


function addToCart(id){
    console.log(data);
    localStorage.setItem(id,JSON.stringify(data));
    getProduct()
}

function gotoCart(){
    window.location.href="../pages/cart.html"
}