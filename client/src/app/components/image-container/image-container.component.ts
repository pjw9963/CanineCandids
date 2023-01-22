import { Component } from '@angular/core';
import { DogCmsApiService } from '../../services/dog-cms-api.service';
import { PoetryApiService } from '../../services/poetry-api.service';
import { DogImage } from '../../models/dog-image';


@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent {

  constructor(
    private dogAPI: DogCmsApiService,
    private poemAPI: PoetryApiService) { }

  images: DogImage[] | undefined;


  ngOnInit() {
    this.dogAPI.getImages().subscribe((imgs: any) => {

      this.poemAPI.getPoetry(3, imgs.totalDocs).subscribe((poems: any) => {

        this.images = imgs.docs.map((img: any, index: number) => {
          return {
            tags: img.tags,
            url: img.url,
            title: img.title,
            poem: poems[poems.length - 1 - index].lines,
          }
        });

      })

    });
  }

}
