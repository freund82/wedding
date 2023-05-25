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


/*Burger menu*/

/*var countDownDate=new Date("July 15, 2023 15:30:00 GMT+0500").getTime()+18000000*/

var countDownDate=new Date("July 15, 2023 13:30:00").getTime()

var x=setInterval(function(){
    var now=new Date().getTime();

    var distance=countDownDate-now
    var days=Math.floor(distance/(1000*60*60*24))
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    var minutes=Math.floor((distance%(1000*60*60))/(1000*60))
    var seconds=Math.floor((distance%(1000*60))/1000)

    if(days<10){
        days="0"+days
    }

    if(hours<10){
        hours="0"+hours
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds
    }

    document.querySelector("#days").innerHTML=days
    document.querySelector("#hours").innerHTML=hours
    document.querySelector("#minutes").innerHTML=minutes
    document.querySelector("#seconds").innerHTML=seconds
    
    if(distance<0){
        clearInterval(x)
        document.querySelector(".timerNumbers").innerHTML="Час настал!"
    }


}, 1000)




  