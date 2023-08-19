import { Component} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rending-page',
  templateUrl: './rending-page.component.html',
  styleUrls: ['./rending-page.component.scss'],
})
export class RendingPageComponent {
  value = [30000, 70000];
  youtubeUrl: string = '';
  embedUrl: string = '';
  sanitizedUrl!: SafeResourceUrl;
  startThumb: number = 0;
  endThumb: number = 100;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router) {}

  extractVideoId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }

  loadVideo() {
    const videoId = this.extractVideoId(this.youtubeUrl);
    
    // Construct the embed URL using the video ID
    this.embedUrl = 'https://www.youtube.com/embed/' + videoId;

    // Sanitize the URL to embed the YouTube video
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  cropVideo() {
    this.router.navigate(['/download']);
  }
}
