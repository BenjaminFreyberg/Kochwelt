function ausrechnen1() {
    const baseIngredients = [
        { id: "ingredients1", base: 125, unit: "g"},                // Brokkoli
        { id: "ingredients2", base: 150, unit: "g"},                // Hähnchenbrustfilet
        { id: "ingredients3", base: 50, unit: "g"},                 // Vollkornreis
        { id: "ingredients4", base: 12.5, unit: "ml"},              // Honig
        { id: "ingredients5", base: 22.5, unit: "ml"},              // Wasser
        { id: "ingredients8", base: 5, unit: "g"},                  // Sesamsamen
        { id: "ingredients9", base: 12.5, unit: "ml"},              // Sojasoße
        { id: "ingredients10", base: 2.5, unit: "g"}                // Speisestärke
    ];

    // Hole die Eingabe für die Menge
    const quantityInput = document.getElementById("quantity");
    const quantity = parseFloat(quantityInput.value) || 1; // Standardwert: 1 Portion

    // Menge der Zutaten und aktualisiere die Menge
    baseIngredients.forEach(ingredient => {
        const element = document.getElementById(ingredient.id);
        if (element) {
            const totalAmount = ingredient.base * quantity;

            // Überprüfen, ob die Menge 1000 g überschreitet
            if (ingredient.unit === "g" && totalAmount >= 1000) {
                const kiloAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${kiloAmount} kg`;
            } else if (ingredient.unit === "ml" && totalAmount >=1000)
                { const kiloAmount = (totalAmount /1000).toFixed(2);
                    element.innerHTML = `${kiloAmount} L`;
            } else {
                element.innerHTML = `${totalAmount.toFixed(0)} ${ingredient.unit}`;
            }
        }
    });
}

function ausrechnen2() {
    const baseIngredients = [
        { id: "ingredients1", base: 300, unit: "g" },               // Babyspinat
        { id: "ingredients2", base: 400, unit: "g"  },              // Erdnussbutter
        { id: "ingredients3", base: 250, unit: "ml"  },             // Palmöl
        { id: "ingredients4", base: 500, unit: "ml"  },             // Wasser
        { id: "ingredients6", base: 1, unit: "EL"  },               // Tomatenmark
        { id: "ingredients7", base: 2, unit:"Packungen" },          // Packungen Fumbwa
        { id: "ingredients8", base: 2, unit: "TL"   },              // Knoblauchpaste
        { id: "ingredients9", base: 1, unit: "TL"   },              // Muskatnuss
    ];

    // Hole die Eingabe für die Menge
    const quantityInput = document.getElementById("quantity");
    const quantity = parseFloat(quantityInput.value) || 1; // Standardwert: 1 Portion

    // Menge der Zutaten und aktualisiere die Menge
    baseIngredients.forEach(ingredient => {
        const element = document.getElementById(ingredient.id);
        if (element) {
            const totalAmount = ingredient.base * quantity;

            if (ingredient.unit === "g" && totalAmount >= 1000) {
                const kiloAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${kiloAmount} kg`;
            } else if (ingredient.unit === "ml" && totalAmount >= 1000) {
                const literAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${literAmount} l`;
            } else {
                element.innerHTML = `${totalAmount.toFixed(0)} ${ingredient.unit}`;
            }
        }
    });
}
function ausrechnen3() {
    const baseIngredients = [
        { id: "ingredients1", base: 300, unit: "g" },              // Babyspinat
        { id: "ingredients2", base: 400, unit: "g"  },             // Erdnussbutter
        { id: "ingredients3", base: 250, unit: "ml"  },            // Palmöl
        { id: "ingredients4", base: 500, unit: "ml"  },            // Wasser
        { id: "ingredients6", base: 1, unit: "EL"  },              // Tomatenmark
        { id: "ingredients7", base: 2, unit:"Packungen" },         // Packungen Fumbwa
        { id: "ingredients8", base: 2, unit: "TL"   },             // Knoblauchpaste
        { id: "ingredients9", base: 1, unit: "TL"   },             // Muskatnuss
    ];

    // Hole die Eingabe für die Menge
    const quantityInput = document.getElementById("quantity");
    const quantity = parseFloat(quantityInput.value) || 1; // Standardwert: 1 Portion

    // Menge der Zutaten und aktualisiere die Menge
    baseIngredients.forEach(ingredient => {
        const element = document.getElementById(ingredient.id);
        if (element) {
            const totalAmount = ingredient.base * quantity;

            if (ingredient.unit === "g" && totalAmount >= 1000) {
                const kiloAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${kiloAmount} kg`;
            } else if (ingredient.unit === "ml" && totalAmount >= 1000) {
                const literAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${literAmount} l`;
            } else {
                element.innerHTML = `${totalAmount.toFixed(0)} ${ingredient.unit}`;
            }
        }
    });
}
function ausrechnen4() {
    const baseIngredients = [
        { id: "ingredients1", base: 2, unit: "große" },         // Äpfel
        { id: "ingredients2", base: 2, unit: "M"  },            // Eier
        { id: "ingredients3", base: 150, unit: "g"  },          // Mehl
        { id: "ingredients4", base: 100, unit: "ml"  },         // Milch
        { id: "ingredients5", base: 60, unit: "g"  },           // Zucker
        { id: "ingredients6", base: 1, unit:"Päckchen" },       // Vanillezucker
        { id: "ingredients7", base: 0.25, unit: "TL"   },       // Backpulver
        { id: "ingredients8", base: 3, unit: "TL"   },          // Zucker
        { id: "ingredients9", base: 1, unit: "TL"   },          // Zimt
    ];

    // Hole die Eingabe für die Menge
    const quantityInput = document.getElementById("quantity");
    const quantity = parseFloat(quantityInput.value) || 1; // Standardwert: 1 Portion

    // Iteriere über die Zutaten und aktualisiere die Menge
    baseIngredients.forEach(ingredient => {
        const element = document.getElementById(ingredient.id);
        if (element) {
            const totalAmount = ingredient.base * quantity;

            if (ingredient.unit === "g" && totalAmount >= 1000) {
                const kiloAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${kiloAmount} kg`;
            } else if (ingredient.unit === "ml" && totalAmount >= 1000) {
                const literAmount = (totalAmount / 1000).toFixed(2);
                element.innerHTML = `${literAmount} l`;
            } else {
                element.innerHTML = `${totalAmount.toFixed(0)} ${ingredient.unit}`;
            }
        }
    });
}
