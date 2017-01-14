const ipc = require('electron').ipcRenderer
const cover = require('cover-art')

ipc.send('subscribe')

var song = {}

// Update Playing Status
ipc.on('status', function(event, arg){

	// Changed
	// if (arg.name != song.name) {
		song.name = arg.name
		song.artist = arg.artist
		update();
	// }

})

function update() {
	// Get cover
	cover(song.artist, song.name, function(err, url) {
		if (!err)
			song.cover = url
		else
			console.log(err)


		// var name = document.getElementById("name")
		// name.innerHTML = song.name

		// var artist = document.getElementById("artist")
		// artist.innerHTML = song.artist

		var img = document.getElementById("cover")
		img.src = song.cover

		console.log(song)
	})
}
