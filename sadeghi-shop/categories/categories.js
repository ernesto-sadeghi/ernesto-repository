
const title = document.querySelector(".mybrand")
const back = document.querySelector(".mybrandB")
const row = document.querySelector(".row")



let products=[
    {id: 1,name:"1لپ تاپ",price:"100,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop" },
    {id: 2,name:"2لپ تاپ",price:"200,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop" },
    {id: 3,name:"3لپ تاپ",price:"300,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop" },
    {id: 4,name:"4لپ تاپ",price:"400,000,000",  picture:"../svgs-and-images/a.svg",  category:"laptop" },
    {id: 5,name:"1کنسول",price:"500,000,000", picture:"../svgs-and-images/c.svg" , category:"game" },
    {id: 6,name:"2کنسول",price:"650,000,000", picture:"../svgs-and-images/c.svg" ,  category:"game"},
    {id: 7,name:"3کنسول",price:"60,000,000", picture:"../svgs-and-images/c.svg" ,  category:"game"},
    {id: 8,name:"4کنسول",price:"87,000,000", picture:"../svgs-and-images/c.svg" , category:"game" },
    {id: 9,name:"1لوازم خانگی",price:"320,000", picture:"../svgs-and-images/d.svg" , category:"appliences" },
    {id: 10,name:"2لوازم خانگی",price:"570,000,000", picture:"../svgs-and-images/d.svg" , category:"appliences" },
    {id: 11,name:"لوازم خانگی3",price:"5,000,000", picture:"../svgs-and-images/d.svg" , category:"appliences" },
    {id: 12,name:"لوازم خانگی4",price:"400,000", picture:"../svgs-and-images/d.svg" , category:"appliences" },
    {id: 13,name:"1موبایل",price:"670,060,000", picture:"../svgs-and-images/b.svg" , category:"mobile" },
    {id: 14,name:"2موبایل",price:"10,770,000", picture:"../svgs-and-images/b.svg" , category:"mobile" },
    {id: 15,name:"3موبایل",price:"6,200,000", picture:"../svgs-and-images/b.svg" , category:"mobile" },
    {id: 16,name:"4موبایل",price:"11,200,000", picture:"../svgs-and-images/b.svg" , category:"mobile" }
    
    
    ]




back.addEventListener(('click'),()=>{
    history.go(-1)
})


window.addEventListener("load",()=>{
    
    
    let locationSearch = location.search;
    // console.log(locationSearch);

    let locationSearchURL = new URLSearchParams(locationSearch)
    let  cat= locationSearchURL.get("cat")
   let cate = cat.slice(1,cat.length-1)

    console.log(cate);
    title.innerHTML=cate
    let mainPros = products.filter((pro)=>{
      return  pro.category == cate
    })

console.log(mainPros);
mainPros.forEach((main)=>{

row.insertAdjacentHTML("afterbegin",`<div class="col-12 justify-content-center d-flex col-md-4 mb-4">
                    <div class="card  good" style="width: 18rem;">
                        <img src="${main.picture}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${main.name}</h5>
                            
                            <p class="card-text text-muted text-end"> ${main.price} ﷼</p>
                            <a href="http://127.0.0.1:5500/product/product.html?id=${main.id}"
                                class="btn w-100 btn-outline-dark">مشخصات محصول</a>
                        </div>
                    </div>
                </div>`)

})

    
    
})





