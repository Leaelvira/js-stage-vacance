
let som =0;

// metode 01:--------------fonction global--------
function add1 (a ,b){
som = a + b
return som
}
// result = add1(5,20);
// console.log(result);

// metode 02:--------------fonction global--------
function add2 (a ,b){
return a + b;
}
// result = add2(5,20);
// console.log(result);
// // metode 03:--------------fonction global-------
let add3 = function(a ,b){
return a + b;
}
// result = add3(1,20);
// console.log(result);
// metode 04:--------------fonction fleche-------
let add4 = (a ,b) =>{
return a + b;
}
// result = add4(2,20);
// console.log(result);
//  metode 04:--------------fonction fleche-------
let add5 = (a ,b) => a + b;
// result = add5(3,20);
// console.log(result);


let clickButton =document.querySelector('button')
console.log(clickButton);
// syntax
//clicKButton.addEventListerner('event',"fonction flechee")

 clickButton.addEventListener('click',
    ()=>{
        alert('click sur le button')
    
    })



let clickButtonClass =document.querySelector('.btn1')
console.log(clickButtonClass);

//clicKButton.addEventListerner('event',"fonction flechee")

 clickButtonClass.addEventListener('click',
    ()=>{
        alert('click sur le button')
    
    })

let clickButtonId =document.getElementById('btn2')
console.log(clickButtonId);

//clicKButton.addEventListerner('event',"fonction flechee")

 clickButtonId.addEventListener('click',
    ()=>{
        alert('click sur le button')
    
    })


/*click: se declacher lorsqu'un utilisateur clique sur un element.

mouseover :se produit losque l'utilisateur survole un element
 avec la souris

 mouseout: :se produit losqu'un utilisateur quitte un element
 avec la souris

 keydown: se declenchelorsqu'une touche du clavier est enfonncee.

 keyup: se delenche lorsqu'une touche du clavier est relachee

 submit: se produit lorsqu'un formulaire est soumis

 load: se decleche lorsque la page ou un element est completement charge .

 resize: se decleche lorsqu'une fenetre est redimensionnee .

 scroll : se produit lorsqu'un utilisateur fait defiler une page 
 ou un element .

 focus : se declache lorsqu'un element recoit le focus, comme
 lorsqu'un utilisateur clique sur un champ de texte .*/
