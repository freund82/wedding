function changeImage() {
    var img = document.getElementsByTagName('img')[0];
    var audio = document.getElementById('audio');
    if (img.src == 'https://thumb.tildacdn.com/tild6363-3564-4135-b235-613335383565/-/format/webp/1.png') {
        img.src = 'https://thumb.tildacdn.com/tild3638-6530-4631-a535-363130616134/-/format/webp/21.png';
        audio.play()
    } else {
        img.src = 'https://thumb.tildacdn.com/tild6363-3564-4135-b235-613335383565/-/format/webp/1.png';
        audio.pause();
	    audio.currentTime = 0;
    }
}

