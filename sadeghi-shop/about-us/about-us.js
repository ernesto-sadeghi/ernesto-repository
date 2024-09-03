

const backBtn = document.querySelector(".navbar-brand")











backBtn.addEventListener(('click'),()=>{
    console.log(location);
    history.go(-1)
    
    })