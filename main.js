console.log("HELLO WORLD");
var Legumes = document.getElementsByClassName("Legumes")
// console.log(Legumes);
// bouton d'incrémentation et décrémentation 

for (let i=0; i<Legumes.length; i++){
    let moins = Legumes[i].children[5].children[0]
    // console.log(moins);
    let plus = Legumes[i].children[5].children[2]
    // console.log(plus);
    let number = Legumes[i].children[5].children[1]
    // console.log(number);
    let valeur= parseInt(number.innerHTML)
    // console.log( valeur);
    let detail = Legumes[i].children[3].children[1]
    // console.log(detail);
    let numdetail =parseInt(detail.innerHTML)
     // console.log(numdetail);
    let prix =Legumes[i].children[4].children[1]
    //  console.log(prix);
     let numtotal = parseInt(prix.innerHTML)
     // console.log(numtotal);
   
//  bouton d'incrémentation

    plus.addEventListener( 'click',function(){
        valeur++ ;
        number.innerHTML =  valeur ;
        //  console.log(valeur);
         prix.innerHTML = numtotal =  numdetail *  valeur ;
        somme()
       
        // console.log(numtotal);
     })
 //  boutonn de décrémentation

    moins.addEventListener( 'click',function(){
        if( valeur!=0)
        valeur-- ;
        number.innerHTML =  valeur ;
         // console.log(valeur);
        prix.innerHTML  = numtotal = numdetail *  valeur
         //  console.log(numtotal);
         somme()
     })

}
 // bouton panier sommme total

function somme() {
    let sum = 0 ;
    let prixunit = document.getElementsByClassName("prix")
    // console.log(prixunit);
        
    let panier = document.getElementById("num-cart")
    // console.log(panier);

 for( let i=0; i<prixunit.length; i++){
       let cart = prixunit[i]
        //   console.log(cart);
       let valeurpanier = parseInt(cart.innerHTML)
        //    console.log(valeurpanier);
   sum = sum + valeurpanier

}
   panier.innerHTML = sum
 }
// bouton like 

var boutonlike = document.querySelectorAll("#like");
    // console.log(boutonlike);
    
for( let i=0; i<boutonlike.length; i++){
 let aimer = boutonlike[i].children[0]
//  console.log(aimer);

aimer.addEventListener( 'click', function(){
    if (aimer.style.color === 'red') {
       aimer.style.color = 'black';
    } else {
          aimer.style.color = 'red';
        }
      });
} 
// bouton supprime

 var legum = document.querySelectorAll("#ndougg");
//      console.log(legum);

for(let i=0; i<legum.length; i++){
  let supprim = legum[i]
    //  console.log(supprim);
 
         let clicksuprim =legum[i].children[0].children[1].children[0]
        //    console.log(clicksuprim);
             clicksuprim.addEventListener("click", function(){
            if ( clicksuprim){
                   supprim.remove(legum)
                 } 
         })
}

 
  