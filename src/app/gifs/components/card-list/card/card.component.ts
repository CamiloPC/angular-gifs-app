import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';
import { LazyImageComponent } from '../../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if( !this.gif ){
      throw new Error('Gif property is required');
    }
  }

  getGifTitle(title: string | null | undefined): string {
    return title && title.trim() !== "" ? title : "No title";
  }

}
