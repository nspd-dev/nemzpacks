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
    { name: "Black Widow", type: "movie", genre: "Action", url: "https://mega.nz/folder/UVgU2IwD#kFYoqHARsWv9mMx_QF9gA" },
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
    { name: "Captain America: Brave New World", type: "movie", genre: "Action", url: "https://drive.google.com/file/d/1rrMvIdCg9cB8ufvTwHXF2FHMqmEWHrYA/view?usp=drive_link" },
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
    { name: "FNAF (Springtrap)", type: "game", genre: "Horror", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/UIZ0BbjK" },
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
    { name: "Overwatch 2 (all)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/gZYmRZZC" },
    { name: "Overwatch 2 (DPS)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/tNYiQLBD" },
    { name: "Overwatch 2 (Support)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BBRiQDZS" },
    { name: "Overwatch 2 (Tank)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/BZZECLRL" },
    { name: "Suicide Squad Kill The Justice League", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/4IBWSDDB" },
    { name: "The Last Of Us Part I", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/EQRi1DQK" },
    { name: "The Last Of Us Part II", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/RBICiD4K" },
    { name: "Rise Of The Tomb Raider", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/5AYW0JjR" },
    { name: "Shadow Of The Tomb Raider", type: "game", genre: "Action-Adventure", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/YERgSbLT" },
    { name: "Valorant (Reyna Only)", type: "game", genre: "FPS", url: "https://mega.nz/folder/9RZUBIQB#SIExHB4wKQtZjYPhRtz39Q/folder/ERYQCbbC" },
    { name: "Beastars - Tem", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/xolrvgf6oapk" },
    { name: "Beastars - Seven", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/i4evwrq0e4s5" },
    { name: "Beastars - Melon", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/b7ttsn75chut" },
    { name: "Beastars - Louis", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/v52ltba8b48y" },
    { name: "Beastars - Legoshi", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/7ayyzl0vo5qy" },
    { name: "Beastars - Juno", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/di8i61g1y8yx" },
    { name: "Beastars - Haru", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/5c1gzo1pxec1" },
    { name: "Beastars - Dom", type: "anime", genre: "Fantasy", url: "https://buzzheavier.com/dvxgwaxjz1z8" },
    { name: "Toy Story 2 (1999) - Barbie", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/lchVFbRL" },
    { name: "Toy Story 2 (1999) - Bo Peep", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/1c5mnSAb" },
    { name: "Toy Story 2 (1999) - Bullseye", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/ldhjDQhL" },
    { name: "Toy Story 2 (1999) - Buzz Lightyear", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/QIxyFALT" },
    { name: "Toy Story 2 (1999) - Hamm", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/MJpWFAhI" },
    { name: "Toy Story 2 (1999) - Jesse", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/EdhknaJZ" },
    { name: "Toy Story 2 (1999) - Mr. Potato Head", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/0dpD2AoR" },
    { name: "Toy Story 2 (1999) - Mrs. Potato Head", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/tY4VmSJR" },
    { name: "Toy Story 2 (1999) - Rex", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/UI4xnRQC" },
    { name: "Toy Story 2 (1999) - Sarge", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/9Ug0VJIY" },
    { name: "Toy Story 2 (1999) - Slinky", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/ZF4mlR7L" },
    { name: "Toy Story 2 (1999) - Stinky Pete", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/BU423DTT" },
    { name: "Toy Story 2 (1999) - Woody", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/lJBk1JRC" },
    { name: "Toy Story 2 (1999) - Weezy", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/VI4CjLqA" },
    { name: "Toy Story 2 (1999) - Zurg", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/gJZUwbLA" },
    { name: "Toy Story 1 (1995) - Bo Peep", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/MYg21IYK" },
    { name: "Toy Story 1 (1995) - Buzz Lightyear", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/JBQihZSI" },
    { name: "Toy Story 1 (1995) - Hamm", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/ZYQ2XZQR" },
    { name: "Toy Story 1 (1995) - Mr. Potato Head", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/FYhECCqB" },
    { name: "Toy Story 1 (1995) - Rex", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/tUxmTaZY" },
    { name: "Toy Story 1 (1995) - Sarge", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/dBgiCZpZ" },
    { name: "Toy Story 1 (1995) - Scud", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/4UgSwL5a" },
    { name: "Toy Story 1 (1995) - Slinky", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/gMBiVJjY" },
    { name: "Toy Story 1 (1995) - Woody", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/JJp2BAID" },
    { name: "Brave (2012) - Brothers", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/9AhVgCSC" },
    { name: "Brave (2012) - Merida", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/1JgGXJQI" },
    { name: "Brave (2012) - King Fergus", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/dVwFzKKC" },
    { name: "Finding Nemo (2003) - Barracuda", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/BMgS3CYR" },
    { name: "Finding Nemo (2003) - Bruce", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/1YpERZbb" },
    { name: "Finding Nemo (2003) - Crush", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/pcwAAQ5R" },
    { name: "Finding Nemo (2003) - Dory", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/1UhkyQKb" },
    { name: "Finding Nemo (2003) - Gill", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/oRgmFBrS" },
    { name: "Finding Nemo (2003) - Marlin", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/dJQWnLpK" },
    { name: "Finding Nemo (2003) - Nemo", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/UdpTjZAS" },
    { name: "monsters, inc. (2001) - Boo", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/pJJwzTgB" },
    { name: "monsters, inc. (2001) - Henry J. Waternoose III", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/tYoDUSpS" },
    { name: "monsters, inc. (2001) - James P. Sullivan", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/FY4k1S6J" },
    { name: "monsters, inc. (2001) - Mike Wazowski", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/NR5HxSaZ" },
    { name: "monsters, inc. (2001) - Randal", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/URIA1RQL" },
    { name: "monsters, inc. (2001) - Yeti", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/xQoC1KZa" },
    { name: "the incredibles (2004) - Frozone", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/QBx1VBrR" },
    { name: "the incredibles (2004) - Bob Parr", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/YNZm2Ria" },
    { name: "the incredibles (2004) - Jack-Jack Parr", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/FNJmyZZQ" },
    { name: "the incredibles (2004) - Dash", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/JBphyJaB" },
    { name: "the incredibles (2004) - Elastigirl", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/oEgBBR6b" },
    { name: "the incredibles (2004) - Syndrome", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/IRJilJyC" },
    { name: "the incredibles (2004) - Violet Parr", type: "movie", genre: "Animation", url: "https://mega.nz/folder/IQIyhJyQ#krd2ZL3FSZ7Nik_7l1Cvsg/file/pcY0ATjA" },
    { name: "Batman Under the Red Hood (2010) - Batman", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/MmlilBLb" },
    { name: "Batman Under the Red Hood (2010) - Black Mask", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/tm8EQJbJ" },
    { name: "Batman Under the Red Hood (2010) - Joker", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/dikEWTYI" },
    { name: "Batman Under the Red Hood (2010) - Nightwing", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/x7923ZCA" },
    { name: "Batman Under the Red Hood (2010) - Ras", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/ZjlC2JjB" },
    { name: "Batman Under the Red Hood (2010) - Red Hood", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/g60CGRpB" },
    { name: "Batman Under the Red Hood (2010) - Robin", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Z7sCUTbZ" },
    { name: "Blue Beettle (2023) - Blue Beetle", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/ErkCCJaA" },
    { name: "Blue Beettle (2023) - Jaime Reyes", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/1jt0hBAB" },
    { name: "Blue Beettle (2023) - Jenny Kord", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/BilAhDyL" },
    { name: "Blue Beettle (2023) - Milagro Reyes", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/g6kwjL7B" },
    { name: "Blue Beettle (2023) - Rudy", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/h69igZpQ" },
    { name: "Cars (2006) - Lightning McQueen - (Best Scenes)", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Mj0gjBrL" },
    { name: "Cars (2006) - Lightning McQueen - (All Scenes)", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/xv0A1J4K" },
    { name: "Cars (2006) - Doc Hudson", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/li1wQTpT" },
    { name: "Cars (2006) - Mater", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Yq8gCZ4A" },
    { name: "Cars (2006) - Sally Carrera", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/4q0k2bbC" },
    { name: "Cars 2 (2011) - Finn McMissile", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/4m9mUDqZ" },
    { name: "Cars 2 (2011) - Francesco Bernoulli", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/J2kSyZ5I" },
    { name: "Cars 2 (2011) - Guido", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/8jlWSZoD" },
    { name: "Cars 2 (2011) - Holley Shiftwell", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/oj0yXbJJ" },
    { name: "Cars 2 (2011) - Lightning McQueen", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/w3kiEbTK" },
    { name: "Cars 2 (2011) - Professor Zundapp", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/5jkgXDbK" },
    { name: "Cars 2 (2011) - Sally Carrera", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/129kSTwD" },
    { name: "Cars 3 (2017) - Cruz Ramirez", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/l39iFRhS" },
    { name: "Cars 3 (2017) - Jackson Storm", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/w71GxDwQ" },
    { name: "Cars 3 (2017) - Lightning McQueen (All Scenes)", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/dntCkBRb" },
    { name: "Cars 3 (2017) - Lighting McQueen (Best Scenes)", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Nuk2EBQL" },
    { name: "Cars 3 (2017) - Mater", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Bu8QEJDL" },
    { name: "Cars 3 (2017) - Sally Carrera", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Bq0AyD5C" },
    { name: "Creed I (2015) - Adonis Johnson", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/171ClZxD" },
    { name: "Creed I (2015) - Bianca", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/4ytCCZzR" },
    { name: "Creed I (2015) - Rocky Balboa", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/JrkGQJZI" },
    { name: "creed I (2015) - Creed", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/FvsghZ7K" },
    { name: "creed I (2015) - Ricky", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Yus2nBRB" },
    { name: "Creed II (2018) - Adonis Johnson", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/xj8wxZxJ" },
    { name: "Creed II (2018) - Bianca", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/A28yWZTB" },
    { name: "Creed II (2018) - Rocky Balboa", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/57lGDbZT" },
    { name: "Creed II (2018) - Creed", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/lyli3RJS" },
    { name: "Creed II (2018) - Drago", type: "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/di8kRLSL" },
    { name: "Creed III (2023) - Adonis Johnson", type:  "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9u92zTJZ" },
    { name: "Creed III (2023) - Bianca", type:  "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/86k0WZaT" },
    { name: "Creed III (2023) - Creed", type:  "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9nl02JSb" },
    { name: "Creed III (2023) - Damian Anderson", type:  "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/c70gSJBL" },
    { name: "Creed III (2023) - Damian Anderson (Fight Scenes)", type:  "movie", genre: "Drama", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/sqlCUbAY" },
    { name: "Extraction (2020) - Tyler Rake", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/gr0wxZjJ" },
    { name: "Extraction (2020) - Tyler Rake (Fight Scenes)", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/c2tW3J6L" },
    { name: "Extraction 2 (2023) - Tyler Rake (Fight Scenes)", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9nlS1bpa" },
    { name: "Extraction 2 (2023) - Alcott", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/l6k0HbQZ" },
    { name: "Extraction 2 (2023) - Nik", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Uq0y2JTZ" },
    { name: "Extraction 2 (2023) - Yaz", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/4mtmnTQD" },
    { name: "Extraction 2 (2023) - Zurab", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/smtinTpB" },
    { name: "Godzilla (2014) - Elle", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/x202CD4R" },
    { name: "Godzilla (2014) - The Mutos", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Rjt0lT5Z" },
    { name: "Godzilla (2014) - Godzilla", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Qq8W1LSI" },
    { name: "Godzilla (2014) - Joe Brody", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/gj92HBZQ" },
    { name: "Godzilla (2014) - LT. Ford", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/V3tSCDiQ" },
    { name: "Godzilla King of the Monsters - Behemoth", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/BvkgSDBL" },
    { name: "Godzilla King of the Monsters - Godzilla", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/p3swUZrL" },
    { name: "Godzilla King of the Monsters - Dr Emma", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/xj9CwL4S" },
    { name: "Godzilla King of the Monsters - Dr Mark", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/ZmtgTDDS" },
    { name: "Godzilla King of the Monsters - King Ghidorah", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Ju9AxRCL" },
    { name: "Godzilla King of the Monsters - Madison", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/sjkSBRjL" },
    { name: "Godzilla King of the Monsters - Mothra", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Bi1gkZDY" },
    { name: "Godzilla King of the Monsters - Rodan", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/0j92xRyC" },
    { name: "Godzilla King of the Monsters - Scylla", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/d69klBzJ" },
    { name: "Godzilla vs Kong (2021) - Godzilla", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/gz1wTTIK" },
    { name: "Godzilla vs Kong (2021) - Kong", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9q80wT5I" },
    { name: "Godzilla vs Kong (2021) - Bernie", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/YutCgDSZ" },
    { name: "Godzilla vs Kong (2021) - Dr Llene", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/B3tSDJYY" },
    { name: "Godzilla vs Kong (2021) - Dr Mark", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/ZqsQVD4Q" },
    { name: "Godzilla vs Kong (2021) - Dr Nathan", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Qy0kTTyI" },
    { name: "Godzilla vs Kong (2021) - Josh", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/4y8UFLzA" },
    { name: "Godzilla vs Kong (2021) - Madison", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/069kVZgA" },
    { name: "Godzilla vs Kong (2021) - Mechagodzilla", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/p6tUiTSZ" },
    { name: "Godzilla vs Kong (2021) - Maia", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/QilUXRqZ" },
    { name: "Kong: Skull Island (2017) - Hank Marlow", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/F6lkkBjb" },
    { name: "Kong: Skull Island (2017) - Captian James", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Jq0mkbZC" },
    { name: "Kong: Skull Island (2017) - Kong", type : "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/5i0GxBBC" },
    { name: "Kong: Skull Island (2017) - Mason Weaver", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/J6tyCRoJ" },
    { name: "Kong: Skull Island (2017) - Preston Packard", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9qkiRZJC" },
    { name: "Kong: Skull Island (2017) - Skullcrawler", type: "movie", genre: "Thriller", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/IiliCJSa" },
    { name: "Rise of the Planet of the Apes (2011) - Caesar", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/9u0mQZYI" },
    { name: "Rise of the Planet of the Apes (2011) - Grey", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/t71gTLqI" },
    { name: "Rise of the Planet of the Apes (2011) - Koba", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Z3tAgDAS" },
    { name: "Rise of the Planet of the Apes (2011) - Maurice", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/1q9EwRpK" },
    { name: "Rise of the Planet of the Apes (2011) - Will", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Bq00GDQC" },
    { name: "Dawn of the Planet of the Apes (2014) - Caesar", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/dnsEUDIZ" },
    { name: "Dawn of the Planet of the Apes (2014) - Koba", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/wj0gDZJY" },
    { name: "Dawn of the Planet of the Apes (2014) - Maurice", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/w70yELaD" },
    { name: "Dawn of the Planet of the Apes (2014) - Blue Eyes", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Fzt2ELRZ" },
    { name: "War for the Planet of the Apes (2017) - Caesar", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Mqsw2Dia" },
    { name: "War for the Planet of the Apes (2017) - Koba", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Ir9AnTqC" },
    { name: "War for the Planet of the Apes (2017) - Maurice", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/VvkQhBCR" },
    { name: "War for the Planet of the Apes (2017) - Blue Eyes", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/FzswiTIT" },
    { name: "War for the Planet of the Apes (2017) - Cornelius", type: "movie", genre: "Sci-Fi", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Nq8QlbDa" },
    { name: "Puss in Boots: The Last Wish (2022) - Puss in Boots", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Iik23LSJ" },
    { name: "Puss in Boots: The Last Wish (2022) - Kitty Softpaws", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/knkWwDZY" },
    { name: "Puss in Boots: The Last Wish (2022) - Perrito", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/538GRRTa" },
    { name: "Puss in Boots: The Last Wish (2022) - Death", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/5290WL6C" },
    { name: "Puss in Boots: The Last Wish (2022) - Goldie Locks", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/wukm3TKZ" },
    { name: "Rise Of the Guardians (2012) - Jack Frost", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/k2sAwZgK" },
    { name: "Rise Of the Guardians (2012) - North", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/ZrtCzTra" },
    { name: "Rise Of the Guardians (2012) - Bunny mund", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Nu9Sgbba" },
    { name: "Rise Of the Guardians (2012) - Pitch Black", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/FztmzTrD" },
    { name: "Rise Of the Guardians (2012) - Sandman", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/gi8GCJ4Z" },
    { name: "Rise Of the Guardians (2012) - Tooth Fairy", type: "movie", genre: "Animation", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Rr1AHZKQ" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - April O'Neil", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Qi1wVDBS" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Donatello", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/w612jDQa" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Leonardo", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/Nj1wDLZa" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Michelangelo", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/J2lGFTYB" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Raphael", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/dvtkWJYZ" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Splinter", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/QjsiVDBY" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Shredder", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/8ilQGTLK" },
    { name: "Teenage Mutant Ninja Turtles Mutant Mayhem (2023) - Superfly", type: "movie", genre: "Action", url: "https://mega.nz/folder/Ej1jxKzI#S0XYgevWTXGVOy7Y3sKM8Q/file/EjtGnDab" },
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

        if (searchInput.value === '') {
            resultsSection.classList.remove('show-results');
            noResultsMessage.classList.add('hidden');
            scenepackResultsContainer.innerHTML = '';
        }

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

    const currentPathname = window.location.pathname;
    let pageIdentifier;

    if (currentPathname === '/' || currentPathname === '/index.html') {
        pageIdentifier = 'index';
    } else {
        const segments = currentPathname.split('/').filter(s => s !== '');
        pageIdentifier = segments[0];
    }

    if (pageIdentifier === 'index') {
        setupMainSearch();
    } else if (pageIdentifier === 'movies') {
        setupCategoryPage('movie', 'movieSearchInput', 'movieGenreFilter', 'movieScenepackResults', 'noMovieResultsMessage', 'movieResultsSection');
    } else if (pageIdentifier === 'games') {
        setupCategoryPage('game', 'gameSearchInput', 'gameGenreFilter', 'gameScenepackResults', 'noGameResultsMessage', 'gameResultsSection');
    } else if (pageIdentifier === 'tvshows') {
        setupCategoryPage('tvshow', 'tvshowSearchInput', 'tvshowGenreFilter', 'tvshowScenepackResults', 'noTvShowResultsMessage', 'tvshowResultsSection');
    } else if (pageIdentifier === 'anime') {
        setupCategoryPage('anime', 'animeSearchInput', 'animeGenreFilter', 'animeScenepackResults', 'noAnimeResultsMessage', 'animeResultsSection');
    }


    const navLinks = document.querySelectorAll('.nav-links a');
    const currentNormalizedPath = window.location.pathname.endsWith('/')
        ? window.location.pathname
        : window.location.pathname + '/';

    navLinks.forEach(link => {
        const linkPathname = new URL(link.href, window.location.origin).pathname;
        const normalizedLinkPath = linkPathname.endsWith('/')
            ? linkPathname
            : linkPathname + '/';

        if (linkPathname === '/' && currentNormalizedPath === '/') {
            link.classList.add('active-nav-link');
        } else if (linkPathname === currentNormalizedPath) {
            link.classList.add('active-nav-link');
        } else {
            link.classList.remove('active-nav-link');
        }
    });
});
