import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.scss']
})
export class TagContainerComponent {

  @Input() tags: string[] = ['test'];

}
