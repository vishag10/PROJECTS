let product=[]
async function fetData(){
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data=await res.json();
        product=[...data.products]
        str=``
        product.map((product)=>{
            str+=`
                <div class="card">
                  <div class="img">
                      <img src="${product.thumbnail}" alt="" >
                  </div>
                  <div class="title">
                     <h2 class="name">${product.title}</h2>
                     <h4 class="price">$${product.price}</h4>
                     <h3 class="discount">Min.${product.discountPercentage}% Off</h3>
                  </div>
                </div>
            `
        })
        document.getElementById("container").innerHTML=str;
    } catch (error) {

    }
}

fetData()