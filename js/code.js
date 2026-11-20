window.onload = init;

var state = {
    dress: 1,
    shoe: 1,
    hair: 1
};

const TOTAL_ITEMS = 3;

function init() {
    updateDress();
    updateShoe();
    updateHair();
}

/* --- Vêtements --- */
function nextdress() {
    state.dress = (state.dress % TOTAL_ITEMS) + 1;
    updateDress();
}

function prevdress() {
    state.dress = (state.dress - 2 + TOTAL_ITEMS) % TOTAL_ITEMS + 1;
    updateDress();
}

function updateDress() {
    document.getElementById("clothes").className = "layer dress" + state.dress;
}

/* --- Chaussures --- */
function nextshoe() {
    state.shoe = (state.shoe % TOTAL_ITEMS) + 1;
    updateShoe();
}

function prevshoe() {
    state.shoe = (state.shoe - 2 + TOTAL_ITEMS) % TOTAL_ITEMS + 1;
    updateShoe();
}

function updateShoe() {
    document.getElementById("shoes").className = "layer shoe" + state.shoe;
}

/* --- Coiffure --- */
function nexthair() {
    state.hair = (state.hair % TOTAL_ITEMS) + 1;
    updateHair();
}

function prevhair() {
    state.hair = (state.hair - 2 + TOTAL_ITEMS) % TOTAL_ITEMS + 1;
    updateHair();
}

function updateHair() {
    document.getElementById("hairback").className = "layer hairback";
    document.getElementById("hairfront").className = "layer hairfront" + state.hair;
}