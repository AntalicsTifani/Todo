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

export function teendo(){
    let newTeendo = document.querySelector("#new");
    
    newTeendo.addEventListener("click", function(){
        let uj = prompt("Írj egy új teendőt");

        let li = document.createElement("li");
        let ul = document.querySelector("ul");
        ul.appendChild(li);

        li.innerHTML = uj;

        li.addEventListener("click", function(){
            if( li.classList.contains("kesz")){
                li.classList.remove("kesz");
            }else{
                li.classList.add("kesz");
            }
        })
    })


}