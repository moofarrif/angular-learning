import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}

  get tags() {
    if (!this.gifService.tagHistory || '') return;
    return this.gifService.tagHistory;
  }
  searchTag(tag: string) {
    return this.gifService.searchTag(tag);
  }
}
