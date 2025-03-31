import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
  public textInput!: ElementRef<HTMLInputElement>;


  constructor( private gifsService: GifsService ) {}

  searchInput () {
    const newTag = this.textInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.textInput.nativeElement.value = '';
  }
}
