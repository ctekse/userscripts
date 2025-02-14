// ==UserScript==
// @name         icMED - validare servicii
// @name:en      icMED - service validator
// @namespace    https://github.com/ctekse/userscripts
// @version      1.0.2
// @description  Acest script valideaza serviciile nevalidate de pe pagina Servicii din icMED
// @description:en   This script is used to validate the unvalidated services on icMED software's Servicii page.
// @author       Csaba Tekse
// @match        https://app1.icmed.ro/Main/Reports/CentralizatoareRapoarteCAS/Servicii.module.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=icmed.ro
// @grant        none
// @license      MIT
// ==/UserScript==

/* globals jQuery */

(function() {
    setInterval(function () {
        var messagePopup = jQuery("#card-message");
        var radioNevalidate = jQuery("input[name$='rblValidare']");

        if(radioNevalidate.is(':checked') && messagePopup.is(':hidden')) {
            var validationBtns = jQuery("input[name$='btnValideaza']");
            validationBtns.first().click();
        }
    }, 5000);
})();