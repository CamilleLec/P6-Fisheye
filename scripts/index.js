import recipes from "/recipes.js";

let ingredientsSet = new Set();
let applianceSet = new Set();
let ustensilsSet = new Set();
const listIngredients = document.getElementById("listIngredients");

recipes.forEach(function (recipe) {
    recipe.ingredients.forEach(function (ingredient) {
        ingredientsSet.add(ingredient.ingredient);
    });
    recipe.ustensils.forEach(function (ustensil) {
        ustensilsSet.add(ustensil);
    });
    applianceSet.add(recipe.appliance);
});

ingredientsSet.forEach(function (ingredient) {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("py-1.5", "hover:bg-amber-300", "pl-4", "listOfIngredients");

    li.addEventListener("click", () => {
        const newSpan = document.createElement("span");
        newSpan.classList.add(
            "bg-amber-300",
            "p-4",
            "rounded-xl",
            "w-48",
            "flex",
            "items-center",
            "justify-between",
            "cursor-pointer",
            "mt-4"
        );
        newSpan.textContent = ingredient;
        const close = document.createElement("i");
        close.classList.add("fa-solid", "fa-xmark");
        newSpan.appendChild(close);

        close.addEventListener("click", () => {
            newSpan.classList.add("hidden");
        });

        newSpan.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        const existingSpan = SearchInDropdownMenu.querySelector("span");

        if (existingSpan) {
            SearchInDropdownMenu.replaceChild(newSpan, existingSpan);
        } else {
            SearchInDropdownMenu.appendChild(newSpan);
        }
    });
    listIngredients.appendChild(li);
});

applianceSet.forEach(function (appliance) {
    const li = document.createElement("li");
    li.textContent = appliance;
    li.classList.add("py-1.5", "hover:bg-amber-300", "pl-4");
    li.addEventListener("click", () => {
        const newSpan = document.createElement("span");
        newSpan.classList.add(
            "bg-amber-300",
            "p-4",
            "rounded-xl",
            "w-48",
            "flex",
            "items-center",
            "justify-between",
            "cursor-pointer",
            "mt-4"
        );
        newSpan.textContent = appliance;
        const close = document.createElement("i");
        close.classList.add("fa-solid", "fa-xmark");
        newSpan.appendChild(close);

        close.addEventListener("click", () => {
            newSpan.classList.add("hidden");
        });

        newSpan.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        const existingSpan = SearchInDropdownMenuAppliance.querySelector("span");

        if (existingSpan) {
            SearchInDropdownMenuAppliance.replaceChild(newSpan, existingSpan);
        } else {
            SearchInDropdownMenuAppliance.appendChild(newSpan);
        }
    });
    document.getElementById("listAppliance").appendChild(li);
});

ustensilsSet.forEach(function (ustensil) {
    const li = document.createElement("li");
    li.textContent = ustensil;
    li.classList.add("py-1.5", "hover:bg-amber-300", "pl-4");
    li.addEventListener("click", () => {
        const newSpan = document.createElement("span");
        newSpan.classList.add(
            "bg-amber-300",
            "p-4",
            "rounded-xl",
            "w-48",
            "flex",
            "items-center",
            "justify-between",
            "cursor-pointer",
            "mt-4"
        );
        newSpan.textContent = ustensil;
        const close = document.createElement("i");
        close.classList.add("fa-solid", "fa-xmark");
        newSpan.appendChild(close);

        close.addEventListener("click", () => {
            newSpan.classList.add("hidden");
        });

        newSpan.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        const existingSpan = SearchInDropdownMenuUstensils.querySelector("span");

        if (existingSpan) {
            SearchInDropdownMenuUstensils.replaceChild(newSpan, existingSpan);
        } else {
            SearchInDropdownMenuUstensils.appendChild(newSpan);
        }
    });
    document.getElementById("listUstensils").appendChild(li);
});

// ------------------- Ouverture/Fermeture des champs de recherche

const SearchInDropdownMenu = document.getElementById("SearchInDropdownMenu");
const DropDownIngredient = document.getElementById("DropDownIngredient");
const SearchInDropdownMenuAppliance = document.getElementById("SearchInDropdownMenuAppliance");
const DropDownAppliance = document.getElementById("DropDownAppliance");
const SearchInDropdownMenuUstensils = document.getElementById("SearchInDropdownMenuUstensils");
const DropDownUstensils = document.getElementById("DropDownUstensils");

let close = true;
let open = false;
let ouvert = false;

function swap() {
    close = !close;

    if (!close) {
        SearchInDropdownMenu.classList.add("hidden");
        DropDownIngredient.classList.remove("hidden");
    } else {
        SearchInDropdownMenu.classList.remove("hidden");
        DropDownIngredient.classList.add("hidden");
    }
}

function swap2() {
    if (!open) {
        SearchInDropdownMenuAppliance.classList.add("hidden");
        DropDownAppliance.classList.remove("hidden");
    } else {
        SearchInDropdownMenuAppliance.classList.remove("hidden");
        DropDownAppliance.classList.add("hidden");
    }
    open = !open;
}

function swap3() {
    ouvert = !ouvert;
    if (!ouvert) {
        SearchInDropdownMenuUstensils.classList.remove("hidden");
        DropDownUstensils.classList.add("hidden");
    } else {
        SearchInDropdownMenuUstensils.classList.add("hidden");
        DropDownUstensils.classList.remove("hidden");
    }
}

SearchInDropdownMenu.addEventListener("click", () => swap());
DropDownIngredient.addEventListener("click", () => swap());

SearchInDropdownMenuAppliance.addEventListener("click", () => swap2());
DropDownAppliance.addEventListener("click", () => swap2());

SearchInDropdownMenuUstensils.addEventListener("click", () => swap3());
DropDownUstensils.addEventListener("click", () => swap3());

searchIngredient.addEventListener("click", (e) => {
    e.stopPropagation();
});

searchAppliance.addEventListener("click", (e) => {
    e.stopPropagation();
});

searchUstensil.addEventListener("click", (e) => {
    e.stopPropagation();
});

// ---------------- Total recettes

const totalRecipe = document.getElementById("totalRecipe");

// ---------------- Création des cartes

recipes.forEach(function (recipe) {
    const article = document.createElement("article");
    article.classList.add("w-96", "h-730", "bg-white", "rounded-xl", "shadow-2xl");
    const picture = document.createElement("img");
    picture.src = "/Photos/" + recipe.image;
    picture.classList.add("rounded-t-xl", "h-64", "w-full", "object-cover");
    article.appendChild(picture);
    document.getElementById("recipes").appendChild(article);
    const div = document.createElement("div");
    div.classList.add("textContent", "p-8");
    const h2 = document.createElement("h2");
    h2.textContent = recipe.name;
    h2.classList.add("text-lg");
    const span = document.createElement("span");
    span.textContent = `RECETTE`;
    span.classList.add("text-xs", "font-bold", "text-zinc-500", "pt-6", "pb-3", "block");
    const p = document.createElement("p");
    p.textContent = recipe.description;
    p.classList.add("h-20", "truncate", "text-wrap", "text-sm");
    const span2 = document.createElement("span");
    span2.textContent = `INGREDIENTS`;
    span2.classList.add("text-xs", "font-bold", "text-zinc-500", "block", "pt-8", "pb-4");
    const section = document.createElement("section");
    section.classList.add("grid", "grid-cols-2", "gap-3.5");

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);
    div.appendChild(span2);
    div.appendChild(section);

    recipe.ingredients.forEach(function (ingredient) {
        const p = document.createElement("p");
        if (ingredient.quantity === undefined && ingredient.unit === undefined) {
            p.textContent = ingredient.ingredient;
        } else if (ingredient.unit === undefined) {
            p.innerHTML =
                ingredient.ingredient + "<br>" + `<span class="text-zinc-500">` + ingredient.quantity + "</span>";
        } else if (ingredient.quantity != undefined && ingredient.unit != undefined) {
            p.innerHTML =
                ingredient.ingredient +
                "<br>" +
                `<span class="text-zinc-500">` +
                ingredient.quantity +
                " " +
                ingredient.unit +
                "</span>";
        }
        p.classList.add("text-sm", "font-medium");
        section.appendChild(p);
    });
    article.appendChild(div);
});

// ---------------------- Champ de Recherche

const ingredientArray = Array.from(ingredientsSet);

function resultSearch() {}

searchIngredient.addEventListener("input", () => {
    const valueIngredient = searchIngredient.value;
    const result = ingredientArray.filter((ingredient) =>
        ingredient.toLowerCase().includes(valueIngredient.toLowerCase())
    );
    if (valueIngredient.length >= 3 && result != 0) {
        listIngredients.innerHTML = "";
        result.forEach(function (ingredient) {
            const li = document.createElement("li");
            li.textContent = ingredient;
            li.classList.add("py-1.5", "hover:bg-amber-300", "pl-4", "listOfIngredients");
            listIngredients.appendChild(li);
        });
    }
    //     else if (valueIngredient.length >= 3 && result === 0 ){
    //         listIngredients.innerHTML = "";
    // }
});

// const searchIngredient = document.getElementById("searchIngredient");
// const searchAppliance = document.getElementById("searchAppliance");
// const searchUstensil = document.getElementById("searchUstensil");

// searchIngredient.addEventListener("input", () => {
//     const valueIngredient = searchIngredient.value;

//     const searchMatch = ingredientArray.some((ingredient) => ingredient.toLowerCase().includes(valueIngredient));

//     if (valueIngredient.length >= 3 && searchMatch) {
//         const listOfIngredients = document.querySelectorAll(".listOfIngredients");
//         listOfIngredients.forEach(function (el) {
//             el.remove();

//         });

//         console.log(`yep`);
//     } else {
//         console.log("no");
//     }
// });
