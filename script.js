const sub = document.querySelector(".btn")
const dis = document.querySelector(".dismiss")
const section = document.querySelector(".subscribed")
const main = document.querySelector(".container")
const mess = document.querySelector(".error")

sub.addEventListener("click" , ()=>{

    const input = document.querySelector(".input")
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(mailFormat)){
        main.style.display="none"
        section.style.display="flex"
    }
    else if(input.value == ""){
        mess.style.display="block"
        input.style.border="1px solid #FF693E"
        input.style.backgroundColor="#FFE8E6"
        input.style.color="#FF693E"
    }
    else{
        mess.style.display="block"
        input.style.border="1px solid #FF693E"
        input.style.backgroundColor="#FFE8E6"
        input.style.color="#FF693E"
    }
  
    
})


dis.addEventListener("click" , ()=>{
    window.location.href="index.html"
})




