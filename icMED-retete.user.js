// ==UserScript==
// @name         icMED - urcare rețete în SIPE
// @name:en      icMED - offline receipt uploader
// @namespace    https://github.com/ctekse/userscripts
// @version      1.0.2
// @description  Acest script ajută la urcarea rețetelor în SIPE pe pagina Rețete în icMED
// @description:en   This script is used to upload the receipts into the SIPE system from the icMED software's Retete page
// @author       Csaba Tekse
// @match        https://app1.icmed.ro/Main/Reports/CentralizatoareRapoarteCAS/Retete.module.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=icmed.ro
// @grant        none
// @license      MIT
// ==/UserScript==
 
/* globals jQuery */
 
(function() {
    setInterval(function () {
        var linesWithSyncBtns = jQuery("input[name$='btnSincronizeazaOffline']").closest('tr');
        var linesWithErrors = jQuery("input[name$='imgArrow']").closest('tr');
        var syncBtns = linesWithSyncBtns.not(linesWithErrors).find("input[name$='btnSincronizeazaOffline']");
        syncBtns.first().click();
    }, 8000);
})();