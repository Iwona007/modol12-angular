import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../service/quote.service';
import {Image} from '../model/image';

@Component({
  selector: 'app-quote-all',
  templateUrl: './quote-all.component.html',
  styleUrls: ['./quote-all.component.css']
})
export class QuoteAllComponent implements OnInit {

  images: Array<Image> = null;
  isImageDelete: boolean = false;
  id: number;
  private image: Image;

  constructor(private service: QuoteService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.delete(this.id);
    this.refresh();
  }

  getAll() {
    this.service.getAll().subscribe((images) => {
      this.images = images;
      console.log();
    });
  }

  // delete(image: Image) {
  //   this.service.delete(image).subscribe(() => {
  //     this.refresh();
  //     console.log();
  //   });
  //   // this.isImageDelete = true;
  // }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.refresh();
      console.log();
    });
    this.isImageDelete = true;
  }

  refresh() {
    this.service.getAll().subscribe(image => {
      this.images = image;
    });
  }
}
