import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = 4;
    this.route.params.subscribe(this.handleCardId);
  }


  private handleCardId = (routeData: any) => {
    const id = parseInt(routeData.id?.split('card')[1]);
    if (id && id <= 7 && id >= 1) {
      this.id = id;
    } else {
      this.id = 1;
    }
  };

  ngOnInit(): void {
  }

}
