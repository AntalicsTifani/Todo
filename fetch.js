import { feladatId } from "./todo.js";

const FIREBASE_DOMAIN = "https://todo-fd7fb-default-rtdb.europe-west1.firebasedatabase.app/";

export function get(){
   return fetch( `${FIREBASE_DOMAIN}/todo.json`)
    .then(resp => resp.json())
}

export function postdata(){
    let text = document.querySelector(".text");
    return fetch(`${FIREBASE_DOMAIN}/todo.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            feladat: text.value
        })
       
    })
     .then(resp => resp.json())
}

export function deletedata(){
    return fetch(`${FIREBASE_DOMAIN}/todo/${feladatId}.json`, {
        method: "DELETE"
    })
    .then(resp => resp.json())
}