class SongModel {
    constructor(picture, artist, name, audio) {
        this.picture = picture;
        this.artist = artist;
        this.name = name;
        this.audio = audio;
    }
}

// Save button.
const form_btn = document.querySelector('#save_btn');

// Input Data.
form_btn.addEventListener('click', () => addSong())

// Append to HTML.
const append = (song) => {

    console.log(`Song to Append ${song}`);

    const html = 
    `<tr>
        <td>${song.picture}</td>
        <td>${song.artist}</td>
        <td>${song.name}</td>
        <td>${song.audio}</td>
    </tr>`;

    console.log(`HTML to insert: ${html}`);
    
    $('.tableBody').append(html);
}

// Local Stroage helper - load songs.
const loadSongs = () => {
    return JSON.parse(localStorage.getItem('songs'));
}

// Local Storage helper - init storage.
const noSongsHandler = (song) => {
    // Songs array.
    const songs = [];

    // Create array an push a single song.
    songs.push(song);

    // Save it to Local Storage.
    localStorage.setItem('songs', JSON.stringify(songs));
}

// Local Storage helper - save.
const saveSongHandler = (song) => {

    // Songs array.
    const songs = loadSongs();

    // Add song to array
    songs.push(song);

    // Save it to Local Storage.
    localStorage.setItem('songs', JSON.stringify(songs));
}

// Save to Local Storage handler.
const saveToLocalStorage = (song) => {

    // If there are no songs in local storage
    if (loadSongs() === null) {
        noSongsHandler(song);
    } else {
        saveSongHandler(song);  
    }
}

// Save songs and add it to DOM.
const addSong = () => {

    // Data Fields.
    const song_artist = $('#song_artist').val();
    const song_name = $('#song_name').val();
    const song_audio = $('#song_audio').val();
    const song_picture = $('#song_picture').val();

    // Create a song object.
    const song = new SongModel(song_picture, song_artist, song_name, song_audio);

    // Append to DOM.
    append(song);

    // Save to Local Storage.
    saveToLocalStorage(song);
}

const initApp = (() => {
    // Songs from Local Storage.
    const songs = loadSongs();

    // Add songs to DOM.
    songs.forEach(song => append(song))
})();