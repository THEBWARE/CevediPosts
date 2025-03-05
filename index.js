// Function to show the holotheater
function showHolotheater(theaterId) {
    const theater = document.getElementById(theaterId);
    if (theater) {
        theater.style.display = "block";
    }
}

// Function to go back to posts
function goBackToPosts() {
    const theaters = document.querySelectorAll('.holo-theater');
    theaters.forEach(theater => {
        theater.style.display = "none";
    });
}

// Function to show the Quantum Alert
function showQuantumAlert() {
    document.getElementById('quantumOverlay').style.display = "block";
    document.getElementById('quantumAlert').style.display = "block";
}

// Function to hide the Quantum Alert
function hideQuantumAlert() {
    document.getElementById('quantumOverlay').style.display = "none";
    document.getElementById('quantumAlert').style.display = "none";
}

// Function to show the Xeno Alert
function showXenoAlert() {
    document.getElementById('xenoOverlay').style.display = "block";
    document.getElementById('xenoAlert').style.display = "block";
}

// Function to hide the Xeno Alert
function hideXenoAlert() {
    document.getElementById('xenoOverlay').style.display = "none";
    document.getElementById('xenoAlert').style.display = "none";
}

// Function to show the LDPlayer Alert
function showLdPlayerAlert() {
    document.getElementById('ldPlayerOverlay').style.display = "block";
    document.getElementById('ldPlayerAlert').style.display = "block";
}

// Function to hide the LDPlayer Alert
function hideLdPlayerAlert() {
    document.getElementById('ldPlayerOverlay').style.display = "none";
    document.getElementById('ldPlayerAlert').style.display = "none";
}

// Function to show the SSS Download Alert
function showSSSDownloadAlert() {
    document.getElementById('sssOverlay').style.display = "block";
    document.getElementById('sssDownloadAlert').style.display = "block";
}

// Function to hide the SSS Download Alert
function hideSSSDownloadAlert() {
    document.getElementById('sssOverlay').style.display = "none";
    document.getElementById('sssDownloadAlert').style.display = "none";
}

// Function to show the Atlantis Alert
function showAtlantisAlert() {
    document.getElementById('atlantisOverlay').style.display = "block";
    document.getElementById('atlantisAlert').style.display = "block";
}

// Function to hide the Atlantis Alert
function hideAtlantisAlert() {
    document.getElementById('atlantisOverlay').style.display = "none";
    document.getElementById('atlantisAlert').style.display = "none";
}

// Function to show the Cevor Executor Alert
function showCevorExecutorAlert() {
    document.getElementById('cevorExecutorOverlay').style.display = "block";
    document.getElementById('cevorExecutorAlert').style.display = "block";
}

// Function to hide the Cevor Executor Alert
function hideCevorExecutorAlert() {
    document.getElementById('cevorExecutorOverlay').style.display = "none";
    document.getElementById('cevorExecutorAlert').style.display = "none";
}

// Function to copy script to clipboard
function copyScript() {
    const scriptCode = document.getElementById('scriptCode').innerText;
    navigator.clipboard.writeText(scriptCode).then(() => {
        alert('Script copied to clipboard!');
    });
}

// Function to copy Thao Hub script to clipboard
function copyThaoHubScript() {
    const scriptCode = document.getElementById('thaoHubScriptCode').innerText;
    navigator.clipboard.writeText(scriptCode).then(() => {
        alert('Thao Hub script copied to clipboard!');
    });
}

// Function to copy Cevor MM2 script to clipboard
function copyCevorMM2Script() {
    const scriptCode = document.getElementById('cevorMM2ScriptCode').innerText;
    navigator.clipboard.writeText(scriptCode).then(() => {
        alert('Cevor MM2 script copied to clipboard!');
    });
}

// Function to copy AI Scripts to clipboard
function copyAIScripts() {
    const scriptCode = document.getElementById('aiScriptsCode').innerText;
    navigator.clipboard.writeText(scriptCode).then(() => {
        alert('AI Scripts copied to clipboard!');
    });
}

// Function to search posts
function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
