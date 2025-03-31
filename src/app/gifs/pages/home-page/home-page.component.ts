import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CardListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor ( private gifsService: GifsService ) {}

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  get gifs(): Gif[] {
    return this.gifsService.gifsList;
  }

  get latestTag(): string {
    return this.tagsHistory.length > 0 ? this.tagsHistory[0] : '';
  }

  printTagsHistory() {
    console.log(this.gifsService.tagsHistory);
  }
}
