//confirmation du mot de passe
//vérifions si le mot de passe et la confirmation sont bonnes

var mdp1 = document.querySelector('.mdp1');
var mdp1 = document.querySelector('.mdp2');
mdp2.onkeyup = function () {
    //évènement lorsque l'on écrit dans le champs : confirmation du mot de passe
    message_error = document.querySelector('.message_error');
    if (mdp1.value != mdp2.value) {//s'il ne sont pas égaux
        //on affiche un message d'erreur
        message_error.innertext = "Les mots de passe ne sont pas conformes";
    } else {//si non 
        //on écrit rien dans message_error
        message_error.innertext = ""

    }

}