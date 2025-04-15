// Old Audio Player (Incompatible interface)
class OldAudioPlayer {
    playOldAudio(filename: string): void {
      console.log("Playing old audio file: " + filename);
    }
  }
  
  // New Audio Player (Incompatible interface)
  class NewAudioPlayer {
    playNewAudio(filename: string): void {
      console.log("Playing new audio file: " + filename);
    }
  }
  
  // Adapter (Common interface)
  class AudioPlayer {
    private oldPlayer: OldAudioPlayer;
    private newPlayer: NewAudioPlayer;
  
    constructor() {
      this.oldPlayer = new OldAudioPlayer();
      this.newPlayer = new NewAudioPlayer();
    }
  
    play(filename: string): void {
      if (filename.endsWith(".mp3")) {
        this.oldPlayer.playOldAudio(filename);
      } else if (filename.endsWith(".mp4")) {
        this.newPlayer.playNewAudio(filename);
      } else {
        console.log("Invalid audio format.");
      }
    }
  }
  
  const audioPlayer = new AudioPlayer();
  audioPlayer.play("song.mp3"); // Output: Playing old audio file: song.mp3
  audioPlayer.play("video.mp4"); // Output: Playing new audio file: video.mp4
  audioPlayer.play("audio.wav"); // Output: Invalid audio format.