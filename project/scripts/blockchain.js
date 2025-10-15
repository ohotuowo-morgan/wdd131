document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    });
});

const blockchains = [
    {
        name: "Bitcoin",
        type: "Public",
        purpose: "Peer-to-peer digital currency",
        consensus: "Proof of Work",
        launch: 2009
    },
    {
        name: "Ethereum",
        type: "Public",
        purpose: "Smart contracts and decentralized apps",
        consensus: "Proof of Stake",
        launch: 2015
    },
    {
        name: "Polygon",
        type: "Layer 2",
        purpose: "Scalable Ethereum network",
        consensus: "Proof of Stake",
        launch: 2017
    },
    {
        name: "Solana",
        type: "Public",
        purpose: "High-speed decentralized apps",
        consensus: "Proof of History",
        launch: 2020
    }
];

const features = [
    "Decentralization",
    "Transparency",
    "Security",
    "Immutability",
    "Smart Contracts"
];

// Display blockchain features using array methods
function displayFeatures() {
    const featureList = document.getElementById("featureList");
    featureList.innerHTML = features.map(feature => `<li>${feature}</li>`).join("");
}

// Show blockchain info dynamically
function showNetworkInfo() {
    const select = document.getElementById("networkSelect");
    const infoDiv = document.getElementById("networkInfo");

    select.addEventListener("change", () => {
        const selected = select.value;
        if (!selected) {
            infoDiv.innerHTML = "<p>Please select a network to view details.</p>";
            return;
        }

        // Find the blockchain object using array method
        const network = blockchains.find(b => b.name.toLowerCase() === selected);

        if (network) {
            infoDiv.innerHTML = `
                <div class="network-card">
                    <h3>${network.name}</h3>
                    <p><strong>Type:</strong> ${network.type}</p>
                    <p><strong>Purpose:</strong> ${network.purpose}</p>
                    <p><strong>Consensus:</strong> ${network.consensus}</p>
                    <p><strong>Launched:</strong> ${network.launch}</p>
                    <p>${getNetworkAge(network.launch)}</p>
                </div>
            `;
        } else {
            infoDiv.innerHTML = "<p>Network not found. Try again.</p>";
        }
    });
}

// Calculate how long the network has existed
function getNetworkAge(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    return `🕓 ${age} years since launch`;
}

// Run functions
displayFeatures();
showNetworkInfo();
