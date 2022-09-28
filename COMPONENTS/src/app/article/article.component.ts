import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols:number = 250;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';


  constructor() { }

  ngOnInit(): void {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore():void {
    this.articleDescLen += this.symbols;

    if(this.showReadMoreBtn === true) {
      this.descToShow = this.article.description;
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }else {
      this.descToShow = '';
      this.showHideBtn = false;
      this.showReadMoreBtn = true;
    }

    // if(this.articleDescLen < this.articleDesc.length) {
    //   this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    // }else if(this.articleDescLen >= this.articleDesc.length) {
    //   this.showHideBtn = true;
    //   this.showReadMoreBtn = false;
    //}
  }

  hideDesc():void {
      this.descToShow = '';
      this.articleDescLen = 0;
      this.showReadMoreBtn = true;
      this.showHideBtn = false;
  }

  toggleImage():void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image' ? 'Hide Image' : 'Show Image';
  }

}
