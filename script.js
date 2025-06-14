document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('resultsSection');
    const noResultsMessage = document.getElementById('noResultsMessage');

    const scenepacks = [
        { name: "Batman Arkham Origins", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FcIGCBIC" },
        { name: "Batman Arkham Knight", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/IVAQFRTD" },
        { name: "Batman Arkham City", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/0cYA3ZaI" },
        { name: "Batman Arkham Asylum", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/cdQ2DJCJ" },
        { name: "Arkham Series Trailers", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/QAIC2Bpb" },
        { name: "FNAF (Springtrap)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/UIZ0BbjK" },
        { name: "Ghost Of Tsushima", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/pYBESD7D" },
        { name: "God of War (2018)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/tFYyhTwC" },
        { name: "God of War Ragnarök", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/IdRGhZLL" },
        { name: "God Of War III", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/1EQEnL4T" },
        { name: "Marvel Rivals", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FI5DjJLC" },
        { name: "Marvel's Spider-Man Remastered", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/0M4zgBKY" },
        { name: "Marvel's Spider-Man Remastered Main Story (All characters)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/sFRgHDCY" },
        { name: "Marvel's Spider-Man Remastered DLC 1 (The Heist)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/oZBgFJxK" },
        { name: "Marvel's Spider-Man Remastered DLC 2 (Turf Wars)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FdYwTT5Y" },
        { name: "Marvel's Spider-Man Remastered DLC 3 (Silver Lining)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/5cZWWRAY" },
        { name: "Marvel's Spider-man 2", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/9YICzLLS" },
        { name: "Marvels Spider-Man Miles Morales All Characters", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/sYIm3BJL" },
        { name: "Marvel's Wolverine Trailer", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/dVZyiJLY" },
        { name: "Mortal Kombat 1", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/JMQxwD7S" },
        { name: "Mortal Kombat 11 (Intro scenes)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/RMJmSRKK" },
        { name: "Mortal Kombat X", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FJASzDQR" },
        { name: "Overwatch 2", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/gZYmRZZC" },
        { name: "Overwatch 2 (DPS)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/tNYiQLBD" },
        { name: "Overwatch 2 (Support)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BBRiQDZS" },
        { name: "Overwatch 2 (Tank)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BZZECLRL" },
        { name: "Suicide Squad Kill The Justice League", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/4IBWSDDB" },
        { name: "The Last Of Us Part I", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/EQRi1DQK" },
        { name: "The Last Of Us Part II", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/RBICiD4K" },
        { name: "Rise Of The Tomb Raider", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/5AYW0JjR" },
        { name: "Shadow Of The Tomb Raider", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/YERgSbLT" },
        { name: "Valorant (Reyna Only)", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/ERYQCbbC" }
    ];

    function displayResults(results) {
        resultsSection.innerHTML = ''; // clear previous results

        if (results.length === 0) {
            resultsSection.classList.add('hidden');
            noResultsMessage.classList.remove('hidden');
            return;
        }

        noResultsMessage.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        results.forEach((pack, index) => {
            const card = document.createElement('div');
            card.className = 'scenepack-card';

            const link = document.createElement('a');
            link.href = pack.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.className = "text-xl font-bold underline hover:opacity-80";
            link.textContent = pack.name;

            link.addEventListener('click', () => {
                if (typeof window.trackScenepackClick === 'function') {
                    window.trackScenepackClick(pack.name);
                } else {
                    console.warn("Analytics function 'trackScenepackClick' not found. Make sure analytics.js is loaded before script.js.");
                }
            });

            card.appendChild(link);

            resultsSection.appendChild(card);

            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
    }

    // Event listener for the search input
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        if (searchTerm === '') {
            resultsSection.classList.add('hidden');
            noResultsMessage.classList.add('hidden');
            return;
        }

        const filtered = scenepacks.filter(pack =>
            pack.name.toLowerCase().includes(searchTerm)
        );
        displayResults(filtered);
    });

    document.getElementById('searchButton').addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filtered = scenepacks.filter(pack =>
            pack.name.toLowerCase().includes(searchTerm)
        );
        displayResults(filtered);
    });
});