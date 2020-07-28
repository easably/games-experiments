import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.scss'],
})
export class VideoGameComponent {

  private readonly MAX_MISTAKES: number = 3;
  private readonly VIDEO_DURATION: number = 10;
  currentMistakes: number = 0;
  wordLength: number = 10;
  private STEP: number = (this.VIDEO_DURATION / 2) / this.wordLength;

  _currentTime: number = this.VIDEO_DURATION / 2;
  get currentTime(): number {
    return this._currentTime;
  }

  set currentTime(newTime: number) {
    console.log('newTime = ', newTime);
    if (newTime === 0) {
      alert('you loser');
    } else if (newTime === this.VIDEO_DURATION) {
      alert('you winner');
    }
    this._currentTime = newTime;
  }

  constructor() {
  }

  increase() {
    this.currentTime += this.STEP;
  }

  decrease() {
    this.currentTime -= this.currentTime / (this.MAX_MISTAKES - this.currentMistakes);
    this.currentMistakes++;
  }

}
