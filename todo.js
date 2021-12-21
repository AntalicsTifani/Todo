export function kihuzas(){
    let listaElem = document.querySelectorAll("li");
    let box = document.querySelectorAll(".box")

    for(let q = 0; q < box.length; q = q + 1){
        for(let i = 0; i < listaElem.length; i = i + 1){
            box[q].addEventListener("change", function(e){
                if(!e.target.checked){
                    listaElem[q].classList.remove("kesz");
                }else{
                    listaElem[q].classList.add("kesz");
                }
            })
        }
    }
    
}

export function teendo(){
    let newTeendo = document.querySelector("#new");
    
    newTeendo.addEventListener("click", function(){
        let uj = prompt("Írj egy új teendőt");

        let li = document.createElement("li");
        let ul = document.querySelector("ul");
        ul.appendChild(li);

        li.innerHTML = "<input type='checkbox' class='box'>" + uj;

        let box = document.querySelectorAll(".box")

        for(let q = 0; q < box.length; q = q + 1){
            box[q].addEventListener("change", function(e){
                if(!e.target.checked){
                    li.classList.remove("kesz");
                }else{
                    li.classList.add("kesz");
                }
            })
        }

        /* li.addEventListener("click", function(){
            if( li.classList.contains("kesz")){
                li.classList.remove("kesz");
            }else{
                li.classList.add("kesz");
            }
        }) */
    })
}

export function torles(){
    let torlesbtn = document.querySelector("#delete");
    
    torlesbtn.addEventListener("click", function(){
       let li = document.querySelectorAll("li"); 

        for(let i = 0; i < li.length; i = i + 1){
            if(li[i].classList.contains("kesz")){
                li[i].remove();
            }
        }
        
    })
}