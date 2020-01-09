class SongModel {
    constructor(picture, artist, name, audio) {
        this.picture = picture;
        this.artist = artist;
        this.name = name;
        this.audio = audio;
    }
}

// Data Fields
const song_artist = document.querySelector('#song_artist');
const song_name = document.querySelector('#song_name');
const song_audio = document.querySelector('#song_audio');
const song_picture = document.querySelector('#song_picture');

// Save button
const form_btn = document.querySelector('#save_btn');

// Input Data 
form_btn.addEventListener('click', () => addSong())

const addSong = () => {
    const artist = song_artist.value;
    const name = song_name.value;
    const audio = song_audio.value;
    const picture = song_picture.value;

    const song = new SongModel(artist, name, audio, picture);

    console.log(song)
}