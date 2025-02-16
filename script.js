// Gérer la soumission du formulaire
document.getElementById("commande-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let produit = document.getElementById("produit").value;
    let quantite = document.getElementById("quantite").value;
    let nom = document.getElementById("nom").value;

    alert("Merci " + nom + " ! Vous avez commandé " + quantite + " " + produit + "(s). 🎂");
	// Réinitialiser le formulaire après la commande
	this.reset();
});
