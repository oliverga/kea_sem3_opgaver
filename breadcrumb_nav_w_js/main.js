"use strict";

// Definer et array af breadcrumb-objekter
const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Funktion til at generere breadcrumbs
function generateBreadcrumbs () {
    // Hent brødkrumme-container elementet
    const breadcrumbs = document.querySelector(".breadcrumbs");
    
    // Generer breadcrumb-links. Fjern det sidste objekt.
    const links = bc.slice(0, -1).map(item => `<li><a href="${item.link}">${item.name}</a></li>`).join('');
    
    // Generer det sidste breadcrumb-element (uden link)
    const lastItem = `<li>${bc[bc.length - 1].name}</li>`;
    
    // Indstil breadcrumb HTML-indholdet
    breadcrumbs.innerHTML = links + lastItem;
    
}