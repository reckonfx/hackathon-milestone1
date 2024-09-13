const button = document.getElementById("ShowButton") as HTMLButtonElement;
const reference = document.getElementById("reference") as HTMLElement;
button.addEventListener("click",()=>{
    if(reference.style.display === "none"){
        reference.style.display = "flex";
        button.style.position = "absolute";
        button.style.bottom = "-800";
        button.style.left = "350px"
    
    }
    else{
        reference.style.display="none"
    }
})