// Funkció a Facebook Container ellenőrzésére Firefox böngészőben
function checkFacebookContainerInFirefox() {
    const isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox azonosítás
    if (isFirefox) {
        const testUrl = "https://www.facebook.com/";
        fetch(testUrl, { mode: 'no-cors' })
            .then(() => showWarning(true))  // Ha sikerül, valószínűleg aktív a Facebook Container
            .catch(() => {}); // Nincs hibaüzenet, ha nem aktív
    }
}

// Figyelmeztetés megjelenítése gombműködés nélkül
function showWarning(isContainerActive) {
    if (isContainerActive) {
        const warningBox = document.createElement('div');
        warningBox.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
                <div style="background: white; padding: 20px; border-radius: 8px; max-width: 400px; text-align: center;">
                    <h2>Facebook Container kiegészítő aktív Firefoxban</h2>
                    <p>A teljes funkcionalitás eléréséhez ajánlott a Facebook Container kiegészítő kikapcsolása.</p>
                    <button id="refreshButton" style="margin-right: 10px;">Az oldal frissítése</button>
                    <button id="proceedButton">Tovább kikapcsolás nélkül (alacsonyabb élmény)</button>
                </div>
            </div>
        `;
        document.body.appendChild(warningBox);

        // Gomb események (csak bezárják a figyelmeztetést)
        document.getElementById('refreshButton').onclick = () => warningBox.remove();
        document.getElementById('proceedButton').onclick = () => warningBox.remove();
    }
}

// Meghívjuk a funkciót az ellenőrzéshez
checkFacebookContainerInFirefox();
