// do proměnné si uložíme prvek ve stránce,
// kam budeme vypisovat výsledek
let vysledek = document.getElementById('vysledek');
// ihned po načtení stránky zavoláme funkci,
// která přečte hodnotu z Local Storage a zobrazí ji
nactiHodnotu();
// funkce pro načtení a zobrazení hodnoty z Local Storage
function nactiHodnotu() {
	// načteme z Local Storage
	let hodnotaLS = localStorage.mojehodnota;
	// pokud hodnota nexistuje, vypíšeme chybu
	if (hodnotaLS === null || hodnotaLS === undefined) {
		vysledek.textContent = 'nic';
	}
	// jinak hodnota existuje a vypíšeme ji
 else {
		vysledek.textContent = hodnotaLS;
	}
	let buttonElement = document.querySelector('.btn-ulozit');
	buttonElement.onclick = ulozHodnotu;
	let buttonElement2 = document.querySelector('.btn-smazat');
	buttonElement2.onclick = smazatHodnotu;
}

// funkce pro uložení hodnoty do Local Storage
function ulozHodnotu() {
	// hodnotu načteme z pole formuláře
	let hodnota = document.querySelector('#hodnota').value;
	// a uložíme do local storage pod jménem "mojehodnota"
	localStorage.mojehodnota = JSON.stringify(hodnota);
	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	nactiHodnotu();
}

// funkce pro smazání hodnoty z Local Storage
function smazatHodnotu() {
	// smažeme hodnotu uloženou pod jménem "mojehodnota",
	// pokud takový klíč neexistuje, nestane se nic
	localStorage.clear();
	// a hned zavoláme funkci pro zobrazení hodnoty,
	// aby se změna v Local Storage promítla i na stránce
	nactiHodnotu();
}