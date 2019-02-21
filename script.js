

var item = 1;
function Jukebox(){
    this.Playlist = [{song: "01%20Electric%20Love.mp3", picture: "https://is1-ssl.mzstatic.com/image/thumb/Music7/v4/54/bf/e5/54bfe5f0-79ae-469b-19ce-92f38d66bb58/UMG_cvrart_00602547550712_01_RGB72_1500x1500_14UMGIM54259.jpg/1200x630bb.jpg", title: "Electric Love by Borns"}, {song: "Gentlemen%20Hall%20-%20Sail%20Into%20The%20Sun%20(Official%20Lyric%20Video).mp3", picture: "https://m.media-amazon.com/images/I/81oyF3tUlFL._SS500_.jpg", title: "Sail into the Sun by Gentlemen hall"},{song: "03%20I'm%20Ready.mp3", picture: "https://upload.wikimedia.org/wikipedia/en/d/d2/I%27m_Ready_%28Official_Single_Cover%29_by_AJR.png", title: "I'm Ready by AJR"},{song:"08%20Magic%20(feat.%20Rivers%20Cuomo).mp3",picture: "https://images.genius.com/5ccb093f082385a2b94eb3de98acd8dd.1000x1000x1.jpg", title: "Magic by B.O.B"}, {song: "04%20Somewhere%20in%20Neverland.mp3", picture: "https://images.shazam.com/coverart/t65938601-b554040020_s400.jpg", title: "Somewhere in Neverland by All Time Low"}] //all songs with title, link and picture link   

    this.play = function(){
       var audio = document.getElementById("audio");
       audio.play();
    
    }
    this.pause = function(){
        var audio = document.getElementById("audio");
       audio.pause(); 
    }
    this.picture = function(){
        document.getElementById("picture_art").src = this.Playlist[item].picture
    }
    this.title = function(){
    document.getElementById("title-display").innerHTML = jukebox.Playlist[item].title;
    }
    this.skip = function(){
        var audio = document.getElementById("audio");
        console.log(item)
       audio.src = this.Playlist[item].song;
        audio.play()
        this.picture()
        this.title()
        if (item == 4){
            item = 0
        }else{
            item +=1
        }
        
    }

    this.end = function(){
        this.skip();
    }
    
    this.skipTo = function(pick){
        item = pick
        this.skip()
    }
    
}

var jukebox = new Jukebox();








