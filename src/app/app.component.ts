import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  youtubeUrl: string = '';
  sanitizedUrl!: SafeResourceUrl;
  startThumb: number = 0;
  endThumb: number = 100;

  constructor(private sanitizer: DomSanitizer) {}

  loadVideo() {
    // Extract the video ID from the YouTube URL
    // const videoId = this.youtubeUrl.split('v=')[1].split('&')[0];
    const videoId = this.youtubeUrl;
    
    // Construct the embed URL using the video ID
    const embedUrl = 'https://www.youtube.com/embed/' + videoId;

    // Sanitize the URL to embed the YouTube video
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  cropVideo() {
    // Logic to crop the video based on startThumb and endThumb values
  }
}
