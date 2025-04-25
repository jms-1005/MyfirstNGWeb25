import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video, VideoResponse } from '../interfaces/video';

@Component({
  selector: 'app-videos',
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent implements OnInit {

  videoURL:string = 'https://hammerhead-app-4hcd6.ondigitalocean.app/api';
  localVideosArray:Video[] = [];

  constructor(private http:HttpClient, private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    console.log("Message during load");
    this.http.get<VideoResponse>(this.videoURL).subscribe(videos => {
      console.log(videos.items);
      this.localVideosArray = videos.items;
      console.log('Local videos array', this.localVideosArray);
    });
  }

  loadVideos(){

    this.http.get<VideoResponse>(this.videoURL).subscribe(videos => {
      console.log(videos.items);
      this.localVideosArray = videos.items;
      console.log('Local videos array', this.localVideosArray);
    });

  }

  safeURL(vid:string){
    let url = 'https://www.youtube.com/embed/'+vid;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
