// Wedding Song Audio Controller (Tum Se - cut starting 12s)
class IndianWeddingAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio('/assets/song.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
    }
  }

  public play() {
    if (!this.audio) {
      this.audio = new Audio('/assets/song.mp3');
      this.audio.loop = true;
    }
    this.audio
      .play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch((err) => {
        console.warn('Audio play error, waiting for user gesture:', err);
      });
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new IndianWeddingAudioPlayer();
