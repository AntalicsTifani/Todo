import { get, postdata } from "./fetch.js";

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
    let text = document.querySelector(".text");
    
    newTeendo.addEventListener("click", function(){
        postdata()
        .then(adatok => {
            let li = document.createElement("li");
            let ul = document.querySelector("ul");
            ul.appendChild(li);

            li.innerHTML = "<input type='checkbox' class='box'>" + text.value;

            let lista = document.querySelectorAll("li");

            let box = document.querySelectorAll(".box")

            for(let q = 0; q < box.length; q = q + 1){
                for(let p = 0; p < lista.length; p = p + 1){
                    box[q].addEventListener("change", function(e){
                        if(!e.target.checked){
                            lista[q].classList.remove("kesz");
                        }else{
                            lista[q].classList.add("kesz");
                        }
                    })
                }
                

            }

            text.value = "";

        })
        
        
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

export function elrejt(){
    let elrejtes = document.querySelector("#elrejtes");
    


    elrejtes.addEventListener("click", function(){
        let li = document.querySelectorAll("li");

        for(let i = 0; i < li.length; i = i + 1){
            if( li[i].classList.contains("kesz")){
                li[i].style.display = "none";
            }
        }
    })
}

export function mutat(){
    let mutatas = document.querySelector("#mutatas");

    mutatas.addEventListener("click", function(){
        let li = document.querySelectorAll("li");

        for(let i = 0; i < li.length; i = i + 1){
            if( li[i].classList.contains("kesz")){
                li[i].style.display = "block";
            }
        }
    })
}

export function adatok(){
    get()
    .then(adatok => {
        let tomb = [];
        for( let key in adatok){
            let obj = {
                id: key,
                ...adatok[key]
            }
            tomb.push(obj);
        }
        
        let ul = document.querySelector("ul");
        

        for(let i = 0; i < tomb.length; i = i + 1){
            let li = document.createElement("li");
            ul.appendChild(li);

            li.innerHTML = "<input type='checkbox' class='box'> " +tomb[i].feladat;
        }

        kihuzas();
    })
}

