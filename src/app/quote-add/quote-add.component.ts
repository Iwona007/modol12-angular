import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../service/quote.service';
import {Image} from '../model/image';

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {
  showAdd: boolean = false;
  newImage: Image = new NewImage();
  isNewImageAdded: boolean = false;
  image: Image;

  constructor(private service: QuoteService) {
  }

  ngOnInit(): void {
  }

  showForm() {
    this.showAdd = !this.showAdd;
  }

  addImage() {
    this.service.addImage(this.newImage).subscribe((image) => {
      this.newImage = image;
      console.log(image);
    });
    this.isNewImageAdded = true;
  }

}

class NewImage implements Image {
  constructor() {
  }
}
