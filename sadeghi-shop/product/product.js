
const h2Element = document.querySelector(".name")
const backBtn = document.querySelector(".navbar-brand")

const pic = document.querySelector("#pic")
const infoContainer=document.querySelector("#infos")


// let products=[{id: 1,name:"1لوازم خانگی",price:"100,000,000", picture:"../svgs-and-images/a.svg" , description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
// {id: 2,name:"2لوازم خانگی",price:"200,000,000", picture:"../svgs-and-images/b.svg" , description:"2لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "آمریکا" ,color:"نقره ای/مشکی",warranty:"14 ماهه"} },
// {id: 3,name:"3لوازم خانگی",price:"300,000,000", picture:"../svgs-and-images/c.svg" , description:"3لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "ایران" ,color:"سفید/مشکی",warranty:"36 ماهه"} },
// {id: 4,name:"4لوازم خانگی",price:"400,000,000",  picture:"../svgs-and-images/d.svg", description:"4لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "آلمان" ,color:"طلایی",warranty:"2 ماهه"} },
// {id: 5,name:"5لوازم خانگی",price:"500,000,000", picture:"../svgs-and-images/a.svg" , description:"5لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "تایوان" ,color:"نقره ای",warranty:"4 ماهه"} },
// {id: 6,name:"6لوازم خانگی",price:"600,000,000", picture:"../svgs-and-images/b.svg" , description:"6لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "هند" ,color:"سفید",warranty:"14 ماهه"} }


// ]

let products=[
  {id: 1,name:"1لپ تاپ",price:"100,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 2,name:"2لپ تاپ",price:"200,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop"   ,description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"}  },
  {id: 3,name:"3لپ تاپ",price:"300,000,000", picture:"../svgs-and-images/a.svg" ,  category:"laptop"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 4,name:"4لپ تاپ",price:"400,000,000",  picture:"../svgs-and-images/a.svg",  category:"laptop"   ,description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"}  },
  {id: 5,name:"1کنسول",price:"500,000,000", picture:"../svgs-and-images/c.svg" , category:"game" ,   description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 6,name:"2کنسول",price:"650,000,000", picture:"../svgs-and-images/c.svg" ,  category:"game" ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 7,name:"3کنسول",price:"60,000,000", picture:"../svgs-and-images/c.svg" ,  category:"game" ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 8,name:"4کنسول",price:"87,000,000", picture:"../svgs-and-images/c.svg" , category:"game" ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"}  },
  {id: 9,name:"1لوازم خانگی",price:"320,000", picture:"../svgs-and-images/d.svg" , category:"appliences" ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"}  },
  {id: 10,name:"2لوازم خانگی",price:"570,000,000", picture:"../svgs-and-images/d.svg" , category:"appliences"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 11,name:"لوازم خانگی3",price:"5,000,000", picture:"../svgs-and-images/d.svg" , category:"appliences"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 12,name:"لوازم خانگی4",price:"400,000", picture:"../svgs-and-images/d.svg" , category:"appliences"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 13,name:"1موبایل",price:"670,060,000", picture:"../svgs-and-images/b.svg" , category:"mobile"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 14,name:"2موبایل",price:"10,770,000", picture:"../svgs-and-images/b.svg" , category:"mobile"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 15,name:"3موبایل",price:"6,200,000", picture:"../svgs-and-images/b.svg" , category:"mobile"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} },
  {id: 16,name:"4موبایل",price:"11,200,000", picture:"../svgs-and-images/b.svg" , category:"mobile"  ,  description:"1لپ تاپ ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و" ,feacher:{rigion: "چین" ,color:"مشکی",warranty:"24 ماهه"} }
  
  
  ]





backBtn.addEventListener(('click'),()=>{
console.log(location);
history.go(-1)

})











window.addEventListener("load",()=>{
    
    
    let locationSearch = location.search;
    // console.log(locationSearch);

    let locationSearchURL = new URLSearchParams(locationSearch)
    let id = locationSearchURL.get("id")
     console.log(id);
  let mainProduct = products.filter((product)=>{
return product.id == id

     })
      
     let mainPro = mainProduct[0]

// console.log(mainPro.price.length);
pic.insertAdjacentHTML("afterbegin",`   <div class="container d-flex justify-content-center  pic-con">
            <img src="${mainPro.picture}" class="img-fluid" alt="...">
        </div>`)


infoContainer.insertAdjacentHTML("afterbegin",`
                    <h3>${mainPro.name}</h3>
                    <br>
                    <p class="text-muted"> ${mainPro.description}</p>
                        
                        <p class="red fs-4 ms-auto">${mainPro.price} ﷼</p>

                        <a class="btn btn-outline-dark j" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                           ویژگی های محصول
                          </a>
                      
                          
                          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                              <h5 class="offcanvas-title red" id="offcanvasExampleLabel">فروشگاه صادقی</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                          <th scope="col">مشخصات</th>
                                          <th scope="col"></th>
                                          
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          
                                          <td>کشور سازنده </td>
                                          <td>${mainPro.feacher.rigion}</td>
                                        </tr>
                                        <tr>
                                          
                                          <td>رنگ </td>
                                          <td>${mainPro.feacher.color}</td>
                                        </tr>
                                        <tr>
                                          
                                          <td>گارانتی </td>
                                          <td>${mainPro.feacher.warranty} </td>
                                        </tr>
                                     
                                  </table>
                              </div>
                            </div>
                          </div>
`)



})














