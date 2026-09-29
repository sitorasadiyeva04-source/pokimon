const grid = document.getElementById('pokemonGrid');

const pokemonsData = [
    { name: "Bulbasaur", type: "Grass,Poison", candy: "25", weight: "6.9 kg", res: "Fire,Ice,Flying,Psychic", time: "20:00" },
    { name: "Ivysaur", type: "Grass,Poison", candy: "100", weight: "13.0 kg", res: "Fire,Ice,Flying,Psychic", time: "07:00" },
    { name: "Venusaur", type: "Grass,Poison", candy: "undefined", weight: "100.0 kg", res: "Fire,Ice,Flying,Psychic", time: "11:30" },
    { name: "Charmander", type: "Fire", candy: "25", weight: "8.5 kg", res: "Water,Ground,Rock", time: "08:45" },
    { name: "Charmeleon", type: "Fire", candy: "100", weight: "19.0 kg", res: "Water,Ground,Rock", time: "19:00" },
    { name: "Charizard", type: "Fire,Flying", candy: "undefined", weight: "90.5 kg", res: "Water,Electric,Rock", time: "13:34" },
    { name: "Squirtle", type: "Water", candy: "25", weight: "9.0 kg", res: "Electric,Grass", time: "04:25" },
    { name: "Wartortle", type: "Water", candy: "100", weight: "22.5 kg", res: "Electric,Grass", time: "07:02" },
    { name: "Blastoise", type: "Water", candy: "undefined", weight: "85.5 kg", res: "Electric,Grass", time: "00:06" },
    { name: "Caterpie", type: "Bug", candy: "12", weight: "2.9 kg", res: "Fire,Flying,Rock", time: "16:35" },
    { name: "Metapod", type: "Bug", candy: "50", weight: "9.9 kg", res: "Fire,Flying,Rock", time: "02:11" },
    { name: "Butterfree", type: "Bug,Flying", candy: "undefined", weight: "32.0 kg", res: "Fire,Electric,Ice,Flying,Rock", time: "05:23" },
    { name: "Weedle", type: "Bug,Poison", candy: "12", weight: "3.2 kg", res: "Fire,Flying,Psychic,Rock", time: "02:21" },
    { name: "Kakuna", type: "Bug,Poison", candy: "50", weight: "10.0 kg", res: "Fire,Flying,Psychic,Rock", time: "02:30" },
    { name: "Beedrill", type: "Bug,Poison", candy: "undefined", weight: "29.5 kg", res: "Fire,Flying,Psychic,Rock", time: "04:50" },
    { name: "Pidgey", type: "Normal,Flying", candy: "12", weight: "1.8 kg", res: "Electric,Rock", time: "01:34" },
    { name: "Pidgeotto", type: "Normal,Flying", candy: "50", weight: "30.0 kg", res: "Electric,Rock", time: "01:30" },
    { name: "Pidgeot", type: "Normal,Flying", candy: "undefined", weight: "39.5 kg", res: "Electric,Rock", time: "01:50" },
    { name: "Rattata", type: "Normal", candy: "25", weight: "3.5 kg", res: "Fighting", time: "01:55" },
    { name: "Raticate", type: "Normal", candy: "undefined", weight: "18.5 kg", res: "Fighting", time: "01:56" },
    { name: "Spearow", type: "Normal,Flying", candy: "50", weight: "2.0 kg", res: "Electric,Rock", time: "02:00" },
    { name: "Fearow", type: "Normal,Flying", candy: "undefined", weight: "38.0 kg", res: "Electric,Rock", time: "02:05" },
    { name: "Ekans", type: "Poison", candy: "50", weight: "6.9 kg", res: "Ground,Psychic", time: "02:10" },
    { name: "Arbok", type: "Poison", candy: "undefined", weight: "65.0 kg", res: "Ground,Psychic", time: "02:15" },
    { name: "Pikachu", type: "Electric", candy: "50", weight: "6.0 kg", res: "Ground", time: "03:00" },
    { name: "Raichu", type: "Electric", candy: "undefined", weight: "30.0 kg", res: "Ground", time: "03:05" },
    { name: "Sandshrew", type: "Ground", candy: "50", weight: "12.0 kg", res: "Water,Grass,Ice", time: "03:10" },
    { name: "Sandslash", type: "Ground", candy: "undefined", weight: "29.5 kg", res: "Water,Grass,Ice", time: "03:15" },
    { name: "Nidoran♀", type: "Poison", candy: "25", weight: "7.0 kg", res: "Ground,Psychic", time: "03:20" },
    { name: "Nidorina", type: "Poison", candy: "100", weight: "20.0 kg", res: "Ground,Psychic", time: "03:25" },
    { name: "Nidoqueen", type: "Poison,Ground", candy: "undefined", weight: "60.0 kg", res: "Water,Ice,Ground,Psychic", time: "03:30" },
    { name: "Nidoran♂", type: "Poison", candy: "25", weight: "9.0 kg", res: "Ground,Psychic", time: "03:35" },
    { name: "Nidorino", type: "Poison", candy: "100", weight: "19.5 kg", res: "Ground,Psychic", time: "03:40" },
    { name: "Nidoking", type: "Poison,Ground", candy: "undefined", weight: "62.0 kg", res: "Water,Ice,Ground,Psychic", time: "03:45" },
    { name: "Clefairy", type: "Fairy", candy: "50", weight: "7.5 kg", res: "Poison,Steel", time: "04:00" },
    { name: "Clefable", type: "Fairy", candy: "undefined", weight: "40.0 kg", res: "Poison,Steel", time: "04:05" },
    { name: "Vulpix", type: "Fire", candy: "50", weight: "9.9 kg", res: "Water,Ground,Rock", time: "04:10" },
    { name: "Ninetales", type: "Fire", candy: "undefined", weight: "19.9 kg", res: "Water,Ground,Rock", time: "04:15" },
    { name: "Jigglypuff", type: "Normal,Fairy", candy: "50", weight: "5.5 kg", res: "Fighting,Poison", time: "04:20" },
    { name: "Wigglytuff", type: "Normal,Fairy", candy: "undefined", weight: "12.0 kg", res: "Fighting,Poison", time: "04:25" },
    { name: "Zubat", type: "Poison,Flying", candy: "50", weight: "7.5 kg", res: "Electric,Ice,Psychic,Rock", time: "12:28" },
    { name: "Golbat", type: "Poison,Flying", candy: "undefined", weight: "55.0 kg", res: "Electric,Ice,Psychic,Rock", time: "12:30" },
    { name: "Oddish", type: "Grass,Poison", candy: "25", weight: "5.4 kg", res: "Fire,Ice,Flying,Psychic", time: "05:00" },
    { name: "Gloom", type: "Grass,Poison", candy: "100", weight: "8.6 kg", res: "Fire,Ice,Flying,Psychic", time: "05:05" },
    { name: "Vileplume", type: "Grass,Poison", candy: "undefined", weight: "18.6 kg", res: "Fire,Ice,Flying,Psychic", time: "05:10" },
    { name: "Paras", type: "Bug,Grass", candy: "50", weight: "5.4 kg", res: "Fire,Ice,Poison,Flying,Bug,Rock", time: "05:15" },
    { name: "Parasect", type: "Bug,Grass", candy: "undefined", weight: "29.5 kg", res: "Fire,Ice,Poison,Flying,Bug,Rock", time: "05:20" },
    { name: "Venonat", type: "Bug,Poison", candy: "50", weight: "30.0 kg", res: "Fire,Flying,Psychic,Rock", time: "05:25" },
    { name: "Venomoth", type: "Bug,Poison", candy: "undefined", weight: "12.5 kg", res: "Fire,Flying,Psychic,Rock", time: "05:30" },
    { name: "Diglett", type: "Ground", candy: "50", weight: "0.8 kg", res: "Water,Grass,Ice", time: "12:35" },
    { name: "Dugtrio", type: "Ground", candy: "undefined", weight: "33.3 kg", res: "Water,Grass,Ice", time: "12:37" },
    { name: "Meowth", type: "Normal", candy: "50", weight: "4.2 kg", res: "Fighting", time: "02:54" },
    { name: "Persian", type: "Normal", candy: "undefined", weight: "32.0 kg", res: "Fighting", time: "02:44" },
    { name: "Psyduck", type: "Water", candy: "50", weight: "19.6 kg", res: "Electric,Grass", time: "03:41" },
    { name: "Golduck", type: "Water", candy: "undefined", weight: "76.6 kg", res: "Electric,Grass", time: "23:06" },
    { name: "Mankey", type: "Fighting", candy: "50", weight: "28.0 kg", res: "Flying,Psychic,Fairy", time: "12:52" },
    { name: "Primeape", type: "Fighting", candy: "undefined", weight: "32.0 kg", res: "Flying,Psychic,Fairy", time: "12:33" },
    { name: "Growlithe", type: "Fire", candy: "50", weight: "19.0 kg", res: "Water,Ground,Rock", time: "03:57" },
    { name: "Arcanine", type: "Fire", candy: "undefined", weight: "155.0 kg", res: "Water,Ground,Rock", time: "03:11" },
    { name: "Poliwag", type: "Water", candy: "25", weight: "12.4 kg", res: "Electric,Grass", time: "03:40" },
    { name: "Poliwhirl", type: "Water", candy: "100", weight: "20.0 kg", res: "Electric,Grass", time: "09:14" },
    { name: "Poliwrath", type: "Water,Fighting", candy: "undefined", weight: "54.0 kg", res: "Electric,Grass,Flying,Psychic,Fairy", time: "01:32" },
    { name: "Abra", type: "Psychic", candy: "25", weight: "19.5 kg", res: "Bug,Ghost,Dark", time: "04:30" },
    { name: "Kadabra", type: "Psychic", candy: "100", weight: "56.5 kg", res: "Bug,Ghost,Dark", time: "11:25" },
    { name: "Alakazam", type: "Psychic", candy: "undefined", weight: "48.0 kg", res: "Bug,Ghost,Dark", time: "12:33" },
    { name: "Machop", type: "Fighting", candy: "25", weight: "19.5 kg", res: "Flying,Psychic,Fairy", time: "01:55" },
    { name: "Machoke", type: "Fighting", candy: "100", weight: "70.5 kg", res: "Flying,Psychic,Fairy", time: "10:32" },
    { name: "Machamp", type: "Fighting", candy: "undefined", weight: "130.0 kg", res: "Flying,Psychic,Fairy", time: "02:55" },
    { name: "Bellsprout", type: "Grass,Poison", candy: "25", weight: "4.0 kg", res: "Fire,Ice,Flying,Psychic", time: "04:10" },
    { name: "Weepinbell", type: "Grass,Poison", candy: "100", weight: "6.4 kg", res: "Fire,Ice,Flying,Psychic", time: "09:45" },
    { name: "Victreebel", type: "Grass,Poison", candy: "undefined", weight: "15.5 kg", res: "Fire,Ice,Flying,Psychic", time: "12:19" },
    { name: "Tentacool", type: "Water,Poison", candy: "50", weight: "45.5 kg", res: "Electric,Ground,Psychic", time: "03:20" },
    { name: "Tentacruel", type: "Water,Poison", candy: "undefined", weight: "55.0 kg", res: "Electric,Ground,Psychic", time: "23:36" },
    { name: "Geodude", type: "Rock,Ground", candy: "25", weight: "20.0 kg", res: "Water,Grass,Ice,Fighting,Ground,Steel", time: "12:40" },
    { name: "Graveler", type: "Rock,Ground", candy: "100", weight: "105.0 kg", res: "Water,Grass,Ice,Fighting,Ground,Steel", time: "04:53" },
    { name: "Golem", type: "Rock,Ground", candy: "undefined", weight: "300.0 kg", res: "Water,Grass,Ice,Fighting,Ground,Steel", time: "12:16" },
    { name: "Ponyta", type: "Fire", candy: "50", weight: "30.0 kg", res: "Water,Ground,Rock", time: "02:50" },
    { name: "Rapidash", type: "Fire", candy: "undefined", weight: "95.0 kg", res: "Water,Ground,Rock", time: "04:00" },
    { name: "Slowpoke", type: "Water,Psychic", candy: "50", weight: "36.0 kg", res: "Electric,Grass,Bug,Ghost,Dark", time: "07:12" },
    { name: "Slowbro", type: "Water,Psychic", candy: "undefined", weight: "78.5 kg", res: "Electric,Grass,Bug,Ghost,Dark", time: "02:56" },
    { name: "Magnemite", type: "Electric,Steel", candy: "50", weight: "6.0 kg", res: "Fire,Water,Ground", time: "04:04" },
    { name: "Magneton", type: "Electric,Steel", candy: "undefined", weight: "60.0 kg", res: "Fire,Water,Ground", time: "15:25" },
    { name: "Farfetch'd", type: "Normal,Flying", candy: "undefined", weight: "15.0 kg", res: "Electric,Rock", time: "01:09" },
    { name: "Doduo", type: "Normal,Flying", candy: "50", weight: "39.2 kg", res: "Electric,Rock", time: "05:10" },
    { name: "Dodrio", type: "Normal,Flying", candy: "undefined", weight: "85.2 kg", res: "Electric,Rock", time: "02:12" },
    { name: "Seel", type: "Water", candy: "50", weight: "90.0 kg", res: "Electric,Grass", time: "06:46" },
    { name: "Dewgong", type: "Water,Ice", candy: "undefined", weight: "120.0 kg", res: "Electric,Grass,Fighting,Rock", time: "06:04" },
    { name: "Grimer", type: "Poison", candy: "50", weight: "30.0 kg", res: "Ground,Psychic", time: "15:11" },
    { name: "Muk", type: "Poison", candy: "undefined", weight: "30.0 kg", res: "Ground,Psychic", time: "01:28" },
    { name: "Shellder", type: "Water", candy: "25", weight: "4.0 kg", res: "Electric,Grass", time: "07:39" },
    { name: "Cloyster", type: "Water,Ice", candy: "undefined", weight: "132.5 kg", res: "Electric,Grass,Fighting,Rock", time: "11:22" },
    { name: "Gastly", type: "Ghost,Poison", candy: "25", weight: "0.1 kg", res: "Ground,Psychic,Ghost,Dark", time: "08:15" },
    { name: "Haunter", type: "Ghost,Poison", candy: "100", weight: "0.1 kg", res: "Ground,Psychic,Ghost,Dark", time: "09:12" },
    { name: "Gengar", type: "Ghost,Poison", candy: "undefined", weight: "40.5 kg", res: "Ground,Psychic,Ghost,Dark", time: "03:55" },
    { name: "Onix", type: "Rock,Ground", candy: "undefined", weight: "210.0 kg", res: "Water,Grass,Ice,Fighting,Ground,Steel", time: "01:18" },
    { name: "Drowzee", type: "Psychic", candy: "50", weight: "32.4 kg", res: "Bug Ghost Dark", time: "01:51" },
    { name: "Hypno", type: "Psychic", candy: "undefined", weight: "75.6 kg", res: "Bug Ghost Dark", time: "02:17" },
    { name: "Krabby", type: "Water", candy: "50", weight: "6.5 kg", res: "Electric Grass", time: "03:33" },
    { name: "Kingler", type: "Water", candy: "undefined", weight: "60.0 kg", res: "Electric Grass", time: "03:44" },
    { name: "Voltorb", type: "Electric", candy: "50", weight: "10.4 kg", res: "Ground", time: "04:36" },
    { name: "Electrode", type: "Electric", candy: "undefined", weight: "66.6 kg", res: "Ground", time: "04:10" },
    { name: "Exeggcute", type: "Grass Psychic", candy: "50", weight: "2.5 kg", res: "Fire Ice Poison Flying Bug Ghost Dark", time: "09:09" },
    { name: "Exeggutor", type: "Grass Psychic", candy: "undefined", weight: "120.0 kg", res: "Fire Ice Poison Flying Bug Ghost Dark", time: "12:34" },
    { name: "Cubone", type: "Ground", candy: "50", weight: "6.5 kg", res: "Water Grass Ice", time: "01:51" },
    { name: "Marowak", type: "Ground", candy: "undefined", weight: "45.0 kg", res: "Water Grass Ice", time: "03:59" },
    { name: "Hitmonlee", type: "Fighting", candy: "undefined", weight: "49.8 kg", res: "Flying Psychic Fairy", time: "03:59" },
    { name: "Hitmonchan", type: "Fighting", candy: "undefined", weight: "50.2 kg", res: "Flying Psychic Fairy", time: "05:58" },
    { name: "Lickitung", type: "Normal", candy: "undefined", weight: "65.5 kg", res: "Fighting", time: "02:46" },
    { name: "Koffing", type: "Poison", candy: "50", weight: "1.0 kg", res: "Ground Psychic", time: "08:16" },
    { name: "Weezing", type: "Poison", candy: "undefined", weight: "9.5 kg", res: "Ground Psychic", time: "12:17" },
    { name: "Rhyhorn", type: "Ground Rock", candy: "50", weight: "115.0 kg", res: "Water Grass Ice Fighting Ground Steel", time: "03:21" },
    { name: "Rhydon", type: "Ground Rock", candy: "undefined", weight: "120.0 kg", res: "Water Grass Ice Fighting Ground Steel", time: "05:50" },
    { name: "Chansey", type: "Normal", candy: "undefined", weight: "34.6 kg", res: "Fighting", time: "04:46" },
    { name: "Tangela", type: "Grass", candy: "undefined", weight: "35.0 kg", res: "Fire Ice Poison Flying Bug", time: "23:13" },
    { name: "Kangaskhan", type: "Normal", candy: "undefined", weight: "80.0 kg", res: "Fighting", time: "02:40" },
    { name: "Horsea", type: "Water", candy: "50", weight: "8.0 kg", res: "Electric Grass", time: "02:53" },
    { name: "Seadra", type: "Water", candy: "undefined", weight: "25.0 kg", res: "Electric Grass", time: "03:18" },
    { name: "Goldeen", type: "Water", candy: "50", weight: "15.0 kg", res: "Electric Grass", time: "03:14" },
    { name: "Seaking", type: "Water", candy: "undefined", weight: "39.0 kg", res: "Electric Grass", time: "05:21" },
    { name: "Staryu", type: "Water", candy: "50", weight: "34.5 kg", res: "Electric Grass", time: "22:59" },
    { name: "Starmie", type: "Water Psychic", candy: "undefined", weight: "80.0 kg", res: "Electric Grass Bug Ghost Dark", time: "06:57" },
    { name: "Mr. Mime", type: "Psychic", candy: "undefined", weight: "54.5 kg", res: "Bug Ghost Dark", time: "01:51" },
    { name: "Scyther", type: "Bug Flying", candy: "undefined", weight: "56.0 kg", res: "Fire Electric Ice Flying Rock", time: "05:43" },
    { name: "Jynx", type: "Ice Psychic", candy: "undefined", weight: "40.6 kg", res: "Fire Bug Rock Ghost Dark Steel", time: "05:41" },
    { name: "Electabuzz", type: "Electric", candy: "undefined", weight: "30.0 kg", res: "Ground", time: "04:28" },
    { name: "Magmar", type: "Fire", candy: "undefined", weight: "44.5 kg", res: "Water Ground Rock", time: "20:36" },
    { name: "Pinsir", type: "Bug", candy: "undefined", weight: "55.0 kg", res: "Fire Flying Rock", time: "03:25" },
    { name: "Tauros", type: "Normal", candy: "undefined", weight: "88.4 kg", res: "Fighting", time: "00:37" },
    { name: "Magikarp", type: "Water", candy: "400", weight: "10.0 kg", res: "Electric Grass", time: "14:26" },
    { name: "Gyarados", type: "Water Flying", candy: "undefined", weight: "235.0 kg", res: "Electric Rock", time: "02:15" },
    { name: "Lapras", type: "Water Ice", candy: "undefined", weight: "220.0 kg", res: "Electric Grass Fighting Rock", time: "08:59" },
    { name: "Ditto", type: "Normal", candy: "undefined", weight: "4.0 kg", res: "Fighting", time: "N/A" },
    { name: "Eevee", type: "Normal", candy: "25", weight: "6.5 kg", res: "Fighting", time: "05:32" },
    { name: "Vaporeon", type: "Water", candy: "undefined", weight: "29.0 kg", res: "Electric Grass", time: "10:54" },
    { name: "Jolteon", type: "Electric", candy: "undefined", weight: "24.5 kg", res: "Ground", time: "02:30" },
    { name: "Flareon", type: "Fire", candy: "undefined", weight: "25.0 kg", res: "Water Ground Rock", time: "07:02" },
    { name: "Porygon", type: "Normal", candy: "undefined", weight: "36.5 kg", res: "Fighting", time: "02:49" },
    { name: "Omanyte", type: "Rock Water", candy: "50", weight: "7.5 kg", res: "Electric Grass Fighting Ground", time: "10:23" },
    { name: "Omastar", type: "Rock Water", candy: "undefined", weight: "35.0 kg", res: "Electric Grass Fighting Ground", time: "05:04" },
    { name: "Kabuto", type: "Rock Water", candy: "50", weight: "11.5 kg", res: "Electric Grass Fighting Ground", time: "00:05" },
    { name: "Kabutops", type: "Rock Water", candy: "undefined", weight: "40.5 kg", res: "Electric Grass Fighting Ground", time: "23:40" },
    { name: "Aerodactyl", type: "Rock Flying", candy: "undefined", weight: "59.0 kg", res: "Water Electric Ice Rock Steel", time: "23:40" },
    { name: "Snorlax", type: "Normal", candy: "undefined", weight: "460.0 kg", res: "Fighting", time: "23:40" },
    { name: "Articuno", type: "Ice Flying", candy: "undefined", weight: "55.4 kg", res: "Fire Electric Rock Steel", time: "N/A" },
    { name: "Zapdos", type: "Electric Flying", candy: "undefined", weight: "52.6 kg", res: "Ice Rock", time: "N/A" },
    { name: "Moltres", type: "Fire Flying", candy: "undefined", weight: "60.0 kg", res: "Water Electric Rock", time: "N/A" },
    { name: "Dratini", type: "Dragon", candy: "25", weight: "3.3 kg", res: "Ice Dragon Fairy", time: "06:41" },
    { name: "Dragonair", type: "Dragon", candy: "100", weight: "16.5 kg", res: "Ice Dragon Fairy", time: "11:57" },
    { name: "Dragonite", type: "Dragon Flying", candy: "undefined", weight: "210.0 kg", res: "Ice Rock Dragon Fairy", time: "23:38" },
    { name: "Mewtwo", type: "Psychic", candy: "undefined", weight: "122.0 kg", res: "Bug Ghost", time: "N/A" },
    { name: "Mew", type: "Psychic", candy: "undefined", weight: "4.0 kg", res: "Bug Ghost", time: "N/A" },
    { name: "MissingNo", type: "Normal", candy: "undefined", weight: "10.0 kg", res: "Fighting", time: "N/A" }
];

// Цикл генерации всех 152 карточек
for (let i = 1; i <= 151; i++) {
    const formattedIndex = String(i).padStart(3, '0');
    const p = pokemonsData[i - 1] || {
        name: `Pokemon ${formattedIndex}`,
        type: "Normal",
        candy: "25",
        weight: "10.0 kg",
        res: "Fighting",
        time: "12:00"
    };

    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.innerHTML = `
        <div class="pokemon-index">${formattedIndex}</div>
        <div class="pokemon-name">${p.name}</div>
        <div class="pokemon-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png" alt="${p.name}">
        </div>
        <div class="pokemon-info">
            <span class="type">${p.type}</span>
            <p>Candy count: ${p.candy}</p>
            <p>${p.weight}</p>
            <p>${p.res}</p>
        </div>
        <button class="p-btn">${p.time}</button>
    `;
    grid.appendChild(card);
}

// Функция поиска
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function filterPokemons() {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.pokemon-card');

    cards.forEach(card => {
        const name = card.querySelector('.pokemon-name').textContent.toLowerCase();
        if (name.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', filterPokemons);
searchInput.addEventListener('input', filterPokemons);