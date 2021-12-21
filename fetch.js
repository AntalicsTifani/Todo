const FIREBASE_DOMAIN = "https://todo-fd7fb-default-rtdb.europe-west1.firebasedatabase.app/";

export function get(){
   return fetch( `${FIREBASE_DOMAIN}/todo.json`)
    .then(resp => resp.json())
}

