export function kihuzas(){
    let listaElem = document.querySelectorAll("li");

    for(let i = 0; i < listaElem.length; i = i + 1){
        listaElem[i].addEventListener("click", function(){
            if( listaElem[i].classList.contains("kesz")){
                listaElem[i].classList.remove("kesz");
            }else{
                listaElem[i].classList.add("kesz");
            }
        })
    }
}