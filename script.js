document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('resultsSection');
    const noResultsMessage = document.getElementById('noResultsMessage');

    const scenepacks = [
        { name: "Batman Arkham Origins", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/FcIGCBIC" },
        { name: "Batman Arkham Knight", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/IVAQFRTD" },
        { name: "Batman Arkham City", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/0cYA3ZaI" },
        { name: "Batman Arkham Asylum", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/cdQ2DJCJ" },
        { name: "Captain America: The First Avenger", url: "https://mega.nz/folder/BNpXXDyY#EWIXd80RjXlcAuoQhOKz2g" },
        { name: "Captain Marvel", url: "https://mega.nz/folder/ZQhXAb6A#PznAW_PrWzRCkCfcJKODmQ" },
        { name: "Iron Man (2008)", url: "https://mega.nz/folder/YdBn2BTC#o9Bsf3Llx3WnAcxz1OGirg" },
        { name: "Iron Man 2", url: "https://mega.nz/folder/0JoxmQbL#vNKzSDkZl2oRZzyn2B-CDg" },
        { name: "The Incredible Hulk", url: "https://mega.nz/folder/NIBEDLIL#9s25BiHwLErGOpvO3P6f6Q" },
        { name: "Thor & Dark World", url: "https://mega.nz/folder/xa5RUaCJ#hH03WSSB82gkG9l3PhEOVQ" },
        { name: "The Avengers", url: "https://mega.nz/folder/ZKBTCTzL#woYBjsldDB8QyDiPSxuUKA" },
        { name: "Iron Man 3", url: "https://mega.nz/folder/YQg3QLDS#muAfaKEnbgg75xPjZ5AMnA" },
        { name: "Captain America The Winter Soldier", url: "https://mega.nz/folder/RZxjHaIL#XaFmuWkytexnMvHM1daqmw" },
        { name: "Guardians of the Galaxy", url: "https://mega.nz/folder/ZTxkHBpb#s1tWiUsdxY3lx1YmxsMy3g" },
        { name: "Guardians of the Galaxy Vol. 2", url: "https://mega.nz/folder/VFQQ2arR#_LVyUmCm92SOzvp3RvJHvg" },
        { name: "Guardians of the Galaxy Vol. 3", url: "https://mega.nz/folder/NLo1VZSY#dnRq1BA_0I-po0wii-CPRQ" },
        { name: "Avengers: Age of Ultron", url: "https://mega.nz/folder/gc5TQJRQ#8YG0k6VD8Jspi-RTUV4bvQ" },
        { name: "Ant-Man", url: "https://mega.nz/folder/BG5VDTja#Oeec7Wbnx7PtSjgV9HQPSA" },
        { name: "Captain America: Civil War", url: "https://mega.nz/folder/QKxzwaTb#BUvNiSaXiDyyaLyQm18amg" },
        { name: "Black Widow", url: "https://mega.nz/folder/UVgU2IwD#kFYoqHARsWv9mMx_QFZ9gA" },
        { name: "Spider-Man: Homecoming", url: "https://mega.nz/folder/xYpSWBiL#covzkLP70NFEhynbb_hODA" },
        { name: "Black Panther", url: "https://mega.nz/folder/RU4GjChD#kSQTbJ2Gu9myysp2sTSfiw" },
        { name: "Doctor Strange", url: "https://mega.nz/folder/wVxwFKjY#wfJ9xGh5j0ezLUn7rMTCgQ" },
        { name: "Thor: Ragnarok", url: "https://mega.nz/folder/wLhByJbB#wcmB0d1uRlX8WAZyr6fmGQ" },
        { name: "Ant-Man and the Wasp", url: "https://mega.nz/folder/hI5TwDLS#4gmpo-K0NJEcG57MtKOKzA" },
        { name: "Avengers: Infinity War", url: "https://mega.nz/folder/MPoXiCBS#oVJ5xD4X5BP_pjKPvhCNug" },
        { name: "Avengers: Endgame", url: "https://mega.nz/folder/hZ53HIJR#xXz9ljhfzIcrV9y-JvFNzg" },
        { name: "Spider-Man: Far From Home", url: "https://mega.nz/folder/FdRjyBLY#5StneS_8m5M6GtSjnvwlbA" },
        { name: "Shang-Chi and the Legend of the Ten Rings", url: "https://mega.nz/folder/cf4ECbQB#mvdhvpqL_RstR-tTjDgxeg" },
        { name: "Eternals", url: "https://mega.nz/folder/hE4znIQB#zfChvtwvUghB3TeGxChogg" },
        { name: "Spider-Man: No Way Home", url: "https://mega.nz/folder/JBwQ1b6L#OFIORJ0-AsJVDT3_Rw1kag" },
        { name: "Doctor Strange in the Multiverse of Madness", url: "https://mega.nz/folder/INgG0LBY#QfCVgSy_2jMi4llCmDG3Ig" },
        { name: "Thor: Love and Thunder", url: "https://mega.nz/folder/YBZHAKJZ#I3OlHTB-vtHfZFm00vlDxA" },
        { name: "Black Panther: Wakanda Forever", url: "https://mega.nz/folder/NZRUhLwK#uBts_UO2GKoaCEZprL11aw" },
        { name: "Ant-Man and the Wasp: Quantumania", url: "https://mega.nz/folder/BBJVhDYb#DGYvknV5HzT55KCR697txw" },
        { name: "The Marvels", url: "https://mega.nz/folder/FGgy1aLQ#5DP6bkGRB9idsVSRsXrO6g" },
        { name: "Deadpool & Wolverine", url: "https://mega.nz/folder/wN413KhK#s3t7tJ5EQnfnWdSk49qtaA" },
        { name: "Captain America: Brave New World", url: "https://mega.nz/folder/wPxRlYSI#Zxdk_GbMzgk8Y-B10fYwLw" },
        { name: "Thunderbolts*", url: "https://drive.google.com/file/d/1rrMvIdCg9cB8ufvTwHXF2FHMqmEWHrYA/view?usp=drive_link" },
        { name: "Spider-Man (2002)", url: "https://mega.nz/folder/8JxwFCAC#ZxJCwyuSpdd4BeSo79on_A" },
        { name: "Spider-Man 2 (2004)", url: "https://mega.nz/folder/8EQ0mYxA#0ZI1vYY8vAzuz3kfFjEinA" },
        { name: "Spider-Man 3 (2007)", url: "https://mega.nz/folder/MARB0Rba#rmyqxb8zWbSfLjgq3w_rGw" },
        { name: "The Amazing Spider-Man (2012)", url: "https://mega.nz/folder/URRSjTaJ#qCtqGSc2xR8FERRF7CmHFg" },
        { name: "The Amazing Spider-Man 2 (2014)", url: "https://mega.nz/folder/5U42QaRS#6huIP2gQwZz_pY1rrw-gqg" },
        { name: "Spider-Man: Into the Spider-Verse", url: "https://mega.nz/folder/wAIxXQoQ#BrZt2JY-GSh9HiJ_EITN4w" },
        { name: "Spider-Man: Across the Spider-Verse", url: "https://mega.nz/folder/dF4gRazZ#9fMqyfm4RgTKAI1_BaS0iw" },
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
        { name: "Star Wars: Episode V - The Empire Strikes Back", url: "https://mega.nz/folder/9H5UWL4b#T1AWF3U-J3l69KjtkAeTHg" },
        { name: "Star Wars: Episode IV – A New Hope", url: "https://mega.nz/folder/oaJhhR6Y#2QgkmQn4r5aBlrkheCLYZQ" },
        { name: "Star Wars: Episode III – Revenge of the Sith", url: "https://mega.nz/folder/5aAwgbhJ#CYZHhOScROgvgWH8mieDlg" },
        { name: "Star Wars: Episode II - Attack of the Clones", url: "https://mega.nz/folder/JShUkJYC#3tNh4NGbIq7BGsVaOMnNXw" },
        { name: "Star Wars: Episode I – The Phantom Menace", url: "https://mega.nz/folder/MaJhESzA#_tGcgI8QrqW33g1AKToF4w" },
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
