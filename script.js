document.addEventListener('DOMContentLoaded', () => {

    const scenepacks = [
        { name: "Batman Arkham Origins", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FcIGCBIC" },
        { name: "Batman Arkham Knight", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/IVAQFRTD" },
        { name: "Batman Arkham City", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/0cYA3ZaI" },
        { name: "Batman Arkham Asylum", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/cdQ2DJCJ" },
        { name: "Arkham Series Trailers", type: "game", genre: "Trailer", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/QAIC2Bpb" },
        { name: "Captain America: The First Avenger", type: "movie", genre: "Action", url: "https://mega.nz/folder/BNpXXDyY#EWIXd80RjXlcAuoQhOKz2g" },
        { name: "Captain Marvel", type: "movie", genre: "Action", url: "https://mega.nz/folder/ZQhXAb6A#PznAW_PrWzRCkCfcJKODmQ" },
        { name: "Iron Man (2008)", type: "movie", genre: "Action", url: "https://mega.nz/folder/YdBn2BTC#o9Bsf3Llx3WnAcxz1OGirg" },
        { name: "Iron Man 2", type: "movie", genre: "Action", url: "https://mega.nz/folder/0JoxmQbL#vNKzSDkZl2oRZzyn2B-CDg" },
        { name: "The Incredible Hulk", type: "movie", genre: "Action", url: "https://mega.nz/folder/NIBEDLIL#9s25BiHwLErGOpvO3P6f6Q" },
        { name: "Thor & Dark World", type: "movie", genre: "Action", url: "https://mega.nz/folder/xa5RUaCJ#hH03WSSB82gkG9l3PhEOVQ" },
        { name: "The Avengers", type: "movie", genre: "Action", url: "https://mega.nz/folder/ZKBTCTzL#woYBjsldDB8QyDiPSxuUKA" },
        { name: "Iron Man 3", type: "movie", genre: "Action", url: "https://mega.nz/folder/YQg3QLDS#muAfaKEnbgg75xPjZ5AMnA" },
        { name: "Captain America The Winter Soldier", type: "movie", genre: "Action", url: "https://mega.nz/folder/RZxjHaIL#XaFmuWkytexnMvHM1daqmw" },
        { name: "Guardians of the Galaxy", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/ZTxkHBpb#s1tWiUsdxY3lx1YmxsMy3g" },
        { name: "Guardians of the Galaxy Vol. 2", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/VFQQ2arR#_LVyUmCm92SOzvp3RvJHvg" },
        { name: "Guardians of the Galaxy Vol. 3", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/NLo1VZSY#dnRq1BA_0I-po0wii-CPRQ" },
        { name: "Avengers: Age of Ultron", type: "movie", genre: "Action", url: "https://mega.nz/folder/gc5TQJRQ#8YG0k6VD8Jspi-RTUV4bvQ" },
        { name: "Ant-Man", type: "movie", genre: "Action", url: "https://mega.nz/folder/BG5VDTja#Oeec7Wbnx7PtSjgV9HQPSA" },
        { name: "Captain America: Civil War", type: "movie", genre: "Action", url: "https://mega.nz/folder/QKxzwaTb#BUvNiSaXiDyyaLyQm18amg" },
        { name: "Black Widow", type: "movie", genre: "Action", url: "https://mega.nz/folder/UVgU2IwD#kFYoqHARsWv9mMx_QFZ9gA" },
        { name: "Spider-Man: Homecoming", type: "movie", genre: "Action", url: "https://mega.nz/folder/xYpSWBiL#covzkLP70NFEhynbb_hODA" },
        { name: "Black Panther", type: "movie", genre: "Action", url: "https://mega.nz/folder/RU4GjChD#kSQTbJ2Gu9myysp2sTSfiw" },
        { name: "Doctor Strange", type: "movie", genre: "Fantasy", url: "https://mega.nz/folder/wVxwFKjY#wfJ9xGh5j0ezLUn7rMTCgQ" },
        { name: "Thor: Ragnarok", type: "movie", genre: "Action", url: "https://mega.nz/folder/wLhByJbB#wcmB0d1uRlX8WAZyr6fmGQ" },
        { name: "Ant-Man and the Wasp", type: "movie", genre: "Action", url: "https://mega.nz/folder/hI5TwDLS#4gmpo-K0NJEcG57MtKOKzA" },
        { name: "Avengers: Infinity War", type: "movie", genre: "Action", url: "https://mega.nz/folder/MPoXiCBS#oVJ5xD4X5BP_pjKPvhCNug" },
        { name: "Avengers: Endgame", type: "movie", genre: "Action", url: "https://mega.nz/folder/hZ53HIJR#xXz9ljhfzIcrV9y-JvFNzg" },
        { name: "Spider-Man: Far From Home", type: "movie", genre: "Action", url: "https://mega.nz/folder/FdRjyBLY#5StneS_8m5M6GtSjnvwlbA" },
        { name: "Shang-Chi and the Legend of the Ten Rings", type: "movie", genre: "Action", url: "https://mega.nz/folder/cf4ECbQB#mvdhvpqL_RstR-tTjDgxeg" },
        { name: "Eternals", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/hE4znIQB#zfChvtwvUghB3TeGxChogg" },
        { name: "Spider-Man: No Way Home", type: "movie", genre: "Action", url: "https://mega.nz/folder/JBwQ1b6L#OFIORJ0-AsJVDT3_Rw1kag" },
        { name: "Doctor Strange in the Multiverse of Madness", type: "movie", genre: "Fantasy", url: "https://mega.nz/folder/INgG0LBY#QfCVgSy_2jMi4llCmDG3Ig" },
        { name: "Thor: Love and Thunder", type: "movie", genre: "Action", url: "https://mega.nz/folder/YBZHAKJZ#I3OlHTB-vtHfZFm00vlDxA" },
        { name: "Black Panther: Wakanda Forever", type: "movie", genre: "Action", url: "https://mega.nz/folder/NZRUhLwK#uBts_UO2GKoaCEZprL11aw" },
        { name: "Ant-Man and the Wasp: Quantumania", type: "movie", genre: "Action", url: "https://mega.nz/folder/BBJVhDYb#DGYvknV5HzT55KCR697txw" },
        { name: "The Marvels", type: "movie", genre: "Action", url: "https://mega.nz/folder/FGgy1aLQ#5DP6bkGRB9idsVSRsXrO6g" },
        { name: "Deadpool & Wolverine", type: "movie", genre: "Action", url: "https://mega.nz/folder/wN413KhK#s3t7tJ5EQnfnWdSk49qtaA" },
        { name: "Captain America: Brave New World", type: "movie", genre: "Action", url: "https://mega.nz/folder/wPxRlYSI#Zxdk_GbMzgk8Y-B10fYwLw" },
        { name: "Thunderbolts*", type: "movie", genre: "Action", url: "https://drive.google.com/file/d/1rrMvIdCg9cB8ufvTwHXF2FHMqmEWHrYA/view?usp=drive_link" },
        { name: "Spider-Man (2002)", type: "movie", genre: "Action", url: "https://mega.nz/folder/8JxwFCAC#ZxJCwyuSpdd4BeSo79on_A" },
        { name: "Spider-Man 2 (2004)", type: "movie", genre: "Action", url: "https://mega.nz/folder/8EQ0mYxA#0ZI1vYY8vAzuz3kfFjEinA" },
        { name: "Spider-Man 3 (2007)", type: "movie", genre: "Action", url: "https://mega.nz/folder/MARB0Rba#rmyqxb8zWbSfLjgq3w_rGw" },
        { name: "The Amazing Spider-Man (2012)", type: "movie", genre: "Action", url: "https://mega.nz/folder/URRSjTaJ#qCtqGSc2xR8FERRF7CmHFg" },
        { name: "The Amazing Spider-Man 2 (2014)", type: "movie", genre: "Action", url: "https://mega.nz/folder/5U42QaRS#6huIP2gQwZz_pY1rrw-gqg" },
        { name: "Spider-Man: Into the Spider-Verse", type: "movie", genre: "Animation", url: "https://mega.nz/folder/wAIxXQoQ#BrZt2JY-GSh9HiJ_EITN4w" },
        { name: "Spider-Man: Across the Spider-Verse", type: "movie", genre: "Animation", url: "https://mega.nz/folder/dF4gRazZ#9fMqyfm4RgTKAI1_BaS0iw" },
        { name: "Star Wars: Episode V - The Empire Strikes Back", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/9H5UWL4b#T1AWF3U-J3l69KjtkAeTHg" },
        { name: "Star Wars: Episode IV – A New Hope", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/oaJhhR6Y#2QgkmQn4r5aBlrkheCLYZQ" },
        { name: "Star Wars: Episode III – Revenge of the Sith", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/5aAwgbhJ#CYZHhOScROgvgWH8mieDlg" },
        { name: "Star Wars: Episode II - Attack of the Clones", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/JShUkJYC#3tNh4NGbIq7BGsVaOMnNXw" },
        { name: "Star Wars: Episode I – The Phantom Menace", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/MaJhESzA#_tGcgI8QrqW33g1AKToF4w" },
        { name: "FNAF (Springtrap)", type: "movie", genre: "Horror", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/UIZ0BbjK" },
        { name: "Ghost Of Tsushima", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/pYBESD7D" },
        { name: "God of War (2018)", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/tFYyhTwC" },
        { name: "God of War Ragnarök", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/IdRGhZLL" },
        { name: "God Of War III", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/1EQEnL4T" },
        { name: "Marvel Rivals", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FI5DjJLC" },
        { name: "Marvel's Spider-Man Remastered", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/0M4zgBKY" },
        { name: "Marvel's Spider-Man Remastered Main Story (All characters)", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/sFRgHDCY" },
        { name: "Marvel's Spider-Man Remastered DLC 1 (The Heist)", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/oZBgFJxK" },
        { name: "Marvel's Spider-Man Remastered DLC 2 (Turf Wars)", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FdYwTT5Y" },
        { name: "Marvel's Spider-Man Remastered DLC 3 (Silver Lining)", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/5cZWWRAY" },
        { name: "Marvel's Spider-man 2", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/9YICzLLS" },
        { name: "Marvels Spider-Man Miles Morales All Characters", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/sYIm3BJL" },
        { name: "Marvel's Wolverine Trailer", type: "game", genre: "Trailer", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/dVZyiJLY" },
        { name: "Mortal Kombat 1", type: "game", genre: "Fighting", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/JMQxwD7S" },
        { name: "Mortal Kombat 11 (Intro scenes)", type: "game", genre: "Fighting", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/RMJmSRKK" },
        { name: "Mortal Kombat X", type: "game", genre: "Fighting", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FJASzDQR" },
        { name: "Overwatch 2", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/gZYmRZZC" },
        { name: "Overwatch 2 (DPS)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/tNYiQLBD" },
        { name: "Overwatch 2 (Support)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BBRiQDZS" },
        { name: "Overwatch 2 (Tank)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BZZECLRL" },
        { name: "Suicide Squad Kill The Justice League", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/4IBWSDDB" },
        { name: "The Last Of Us Part I", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/EQRi1DQK" },
        { name: "The Last Of Us Part II", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/RBICiD4K" },
        { name: "Rise Of The Tomb Raider", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/5AYW0JjR" },
        { name: "Shadow Of The Tomb Raider", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/YERgSbLT" },
        { name: "Valorant (Reyna Only)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/ERYQCbbC" },
    ];

    function normalizeString(str) {
        if (typeof str !== 'string') return '';
        str = str.toLowerCase();
        str = str.replace(/[-:()*,]/g, ' ');
        str = str.replace(/'/g, '');
        str = str.replace(/\s+/g, ' ');
        return str.trim();
    }

    function displayResults(results, containerElement, noResultsMessageElement, resultsSectionElement) {
        containerElement.innerHTML = '';

        if (results.length === 0) {
            noResultsMessageElement.classList.remove('hidden');
            resultsSectionElement.classList.add('show-results');
            return;
        }

        noResultsMessageElement.classList.add('hidden');
        resultsSectionElement.classList.add('show-results');

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
            containerElement.appendChild(card);

            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        });
    }

    function setupMainSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const resultsSection = document.getElementById('resultsSection');
        const scenepackResultsContainer = document.getElementById('mainScenepackResults');
        const noResultsMessage = document.getElementById('noResultsMessage');

        resultsSection.classList.remove('show-results');

        searchButton.addEventListener('click', performMainSearch);
        searchInput.addEventListener('input', performMainSearch);

        function performMainSearch() {
            const query = normalizeString(searchInput.value);
            let filteredScenepacks = [];

            if (query === '') {
                resultsSection.classList.remove('show-results');
                noResultsMessage.classList.add('hidden');
                scenepackResultsContainer.innerHTML = '';
                return;
            }

            filteredScenepacks = scenepacks.filter(pack =>
                normalizeString(pack.name).includes(query)
            );

            displayResults(filteredScenepacks, scenepackResultsContainer, noResultsMessage, resultsSection);
        }
    }

    function setupCategoryPage(categoryType, searchInputId, genreFilterId, resultsContainerId, noResultsMsgId, resultsSectionId) {
        const searchInput = document.getElementById(searchInputId);
        const genreFilter = document.getElementById(genreFilterId);
        const resultsContainer = document.getElementById(resultsContainerId);
        const noResultsMessage = document.getElementById(noResultsMsgId);
        const resultsSection = document.getElementById(resultsSectionId);

        const allItemsForCategory = scenepacks.filter(item => item.type === categoryType);

        const uniqueGenres = [...new Set(allItemsForCategory.map(item => item.genre).filter(Boolean))];
        uniqueGenres.sort().forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });

        filterAndDisplayItems();

        searchInput.addEventListener('input', filterAndDisplayItems);
        genreFilter.addEventListener('change', filterAndDisplayItems);

        function filterAndDisplayItems() {
            const searchQuery = normalizeString(searchInput.value);
            const selectedGenre = genreFilter.value;

            let filteredItems = allItemsForCategory.filter(item => {
                const matchesSearch = normalizeString(item.name).includes(searchQuery);
                const matchesGenre = selectedGenre === "" || (item.genre && normalizeString(item.genre) === normalizeString(selectedGenre));
                return matchesSearch && matchesGenre;
            });

            displayResults(filteredItems, resultsContainer, noResultsMessage, resultsSection);
        }
    }

    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        setupMainSearch();
    } else if (currentPage === 'movies.html') {
        setupCategoryPage('movie', 'movieSearchInput', 'movieGenreFilter', 'movieScenepackResults', 'noMovieResultsMessage', 'movieResultsSection');
    } else if (currentPage === 'games.html') {
        setupCategoryPage('game', 'gameSearchInput', 'gameGenreFilter', 'gameScenepackResults', 'noGameResultsMessage', 'gameResultsSection');
    } else if (currentPage === 'tvshows.html') {
        setupCategoryPage('tvshow', 'tvshowSearchInput', 'tvshowGenreFilter', 'tvshowScenepackResults', 'noTvShowResultsMessage', 'tvshowResultsSection');
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkHrefFileName = link.href.split('/').pop();
        const currentFileName = currentPage;

        if (linkHrefFileName === currentFileName) {
            link.classList.add('active-nav-link');
        } else if (currentFileName === '' && linkHrefFileName === 'index.html') {
            link.classList.add('active-nav-link');
        } else {
            link.classList.remove('active-nav-link');
        }
    });
});