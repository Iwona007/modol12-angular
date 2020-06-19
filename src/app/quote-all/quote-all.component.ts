import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../service/quote.service';
import {Image} from '../model/image';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-quote-all',
  templateUrl: './quote-all.component.html',
  styleUrls: ['./quote-all.component.css']
})
export class QuoteAllComponent implements OnInit {

  images: Array<Image> = null;
  isImageDelete: boolean = false;
  id: string;

  constructor(private service: QuoteService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.delete(this.id);
    this.refresh();
    console.log('id', this.id);
  }

  getAll() {
    this.service.getAll().subscribe((images) => {
        console.log();
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      });
  }

  delete(id: string) {
    this.service.delete(id).subscribe(() => {
      this.refresh();
      console.log();
      this.isImageDelete = true;
    });
  }

  refresh() {
    this.service.getAll().subscribe(image => {
        this.images = image;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      });
  }
}
