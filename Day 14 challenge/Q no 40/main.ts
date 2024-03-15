function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title};
    // This if loop is used because tracks in the function is optional.
    // This if loop checks if the track value is given it will show that in output.
    // if the value of tracks is not given it will not show
    // if this if loop is removed from the program then in output the tracks will be shown undefined.
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));