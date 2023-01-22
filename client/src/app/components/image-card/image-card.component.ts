import { Component, Input } from '@angular/core';
import { DogImage } from 'src/app/models/dog-image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

  @Input() image: DogImage | null = null;

  focused: boolean = false;

  onHover() {
    this.focused = true;
  }

  unHover() {
    this.focused = false;
  }

}
