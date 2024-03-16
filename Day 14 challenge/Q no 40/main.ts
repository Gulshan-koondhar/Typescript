/* Q no 40 Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album.*/


function make_album(artist: string, title: string, tracks?: number) {
    let album = { 
        artist : artist, 
        title : title
    };
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
console.log(make_album("Artist Two", "The Second Album", 10));
console.log(make_album("Artist Three", "The Third Album"));