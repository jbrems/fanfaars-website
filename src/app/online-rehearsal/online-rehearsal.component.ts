import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './online-rehearsal.component.html',
  styleUrls: ['./online-rehearsal.component.scss'],
})
export class OnlineRehearsalComponent {
  isRecording = false;
  showPlayback = false;
  showPrank = false;
  isPlaying = false;

  toggleRecording() {
    if (this.showPlayback) {
      this.playSound();
      return;
    }

    if (this.isRecording) {
      this.showPlayback = true;
      this.isRecording = false;
      return;
    }

    if (!this.isRecording) {
      this.startRecording();
    }
  }

  startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.isRecording = true;
    });
  }

  playSound() {
    this.isPlaying = true;
    const audio = new Audio();
    audio.src = '../../../assets/sounds/happy_birthday.mp3';
    audio.load();
    audio.play();

    setTimeout(() => {
      this.showPrank = true;
      this.isRecording = false;
      this.showPlayback = false;
      this.isPlaying = false;
    }, 20000);
  }
}
