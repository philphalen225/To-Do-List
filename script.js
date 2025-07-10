let inputajout = document.querySelector(".inputajout") // je recupere le champ de saisi ajouter une tache
let boutonajout = document.querySelector(".buttonajout") // je recupere le bouton ajouter

// maintenant je crée un évenement au niveau du bouton pour que les taches a ajoute s'ajoute a la suite des taches de base 

boutonajout.addEventListener("click",function(e){
   e.preventDefault() // enpeche la page de recharger

   const recupereinputajout = document.querySelector(".inputajout").value.trim() // je recupere ce qui est écrit dans le champ inputajout et le trim() lui supprime les espaces unitiles
   // c'est le value qui me ma permis de recuperer ce qui est dans le champs
   
   if(recupereinputajout!==''){
    // on veut die que si le champ inputajout est different du vide alors on exécute quelque chose qui va suivre 

    const zoneajout = document.createElement("div") // je crée un nouvelle element qui sera la zone d'ajout de la nouvelle a ajouter dans se cas précis jais crée une div
    zoneajout.classList.add("divzoneajout") // j'ajoute une classe a la div crée
    const checkbox = document.createElement("input")  // je crée la case a cocher de la tache a ajouter
    checkbox.type = "checkbox" // j'ajoute le type de la case et c'est ce type ajouter qui fait que c'est une case a cocher
    checkbox.classList.add("box") // j'ajoute une classe a ma box
    const label = document.createElement("label") // je crée le label du formulaire qui contiendra le text a ajouter 
    label.textContent = recupereinputajout  // j'insere le text contenu dans le champ de saisi ajouter au label que je viens de crée
    const btn = document.createElement("button") // je crée le bouton de supprimer
    btn.classList.add("btn") // je luis ajouite une classe
    btn.textContent = "🚮" // j'insere du texte a l'interieur
    // je crée un évenement sur le bouton supprimer au click et lui di de supprimer la zone ajout crée si on click sur le bouton supprimer 
    btn.addEventListener("click",function(e){
        e.preventDefault()
        zoneajout.remove()
    })

    // maintenant je doit assembler tous mes nouvels élements crée dans la div crée comme zone d'ajout  et on le fait avec appenchild

    zoneajout.appendChild(checkbox)
    zoneajout.appendChild(label)
    zoneajout.appendChild(btn)

    // je recupere la zone ou la tache doit etre ajouté et je l'ajoute

    let vzoneajout = document.querySelector(".enfant2")
    vzoneajout.appendChild(zoneajout)
    inputajout.value = ""; // cette ligne vide le champs de saisi pour qu'on puissent y mettre autre chose 
     }
})
// fin de la condition



