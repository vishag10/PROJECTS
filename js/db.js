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
                <div class="content">
                  <div class="img">
                  <a href="../pages/page2.html?id=${product.id}">
                      <img src="${product.thumbnail}" alt="" class="img2" >
                  </a>
                  </div>
                  <div class="title">
                     <h2 class="name">${product.title.length<15?product.title:product.title.substring(0,15)+"..."}</h2>
                     <h4 class="price">$${product.price}</h4>
                     <h3 class="discount">Min.${product.discountPercentage}% Off</h3>
                  </div>
                </div>
                </div>
                
            `
        })
        document.getElementById("container").innerHTML=str;
    } catch (error) {

    }
}

fetData()