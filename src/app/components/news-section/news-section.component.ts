import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
})
export class NewsSectionComponent {
  latestNews = [
    {
      imgSrc: '../../../assets/tea-2-news.webp',
      header: 'U.S. downs suspected Chinese spy balloon over the Alantic coast',
      dateAdded: '04/05/2023',
    },
    {
      imgSrc: '../../../assets/tea-3-news.jpg',
      header: 'U.S. downs suspected Chinese spy balloon over the Alantic coast',
      dateAdded: '04/05/2023',
    },
    {
      imgSrc: '../../../assets/tea-4-news.webp',
      header: 'U.S. downs suspected Chinese spy balloon over the Alantic coast',
      dateAdded: '04/05/2023',
    },
    {
      imgSrc: '../../../assets/tea-2-news.webp',
      header: 'U.S. downs suspected Chinese spy balloon over the Alantic coast',
      dateAdded: '04/05/2023',
    },
  ];

  btnType = '1';

  changeBtnType(type: string) {
    this.btnType = type;
    if (type === '1') {
      this.latestNews = [
        {
          imgSrc: '../../../assets/tea-2-news.webp',
          header:
            'U.S. downs suspected Chinese spy balloon over the Alantic coast',
          dateAdded: '04/05/2023',
        },
        {
          imgSrc: '../../../assets/tea-3-news.jpg',
          header:
            'U.S. downs suspected Chinese spy balloon over the Alantic coast',
          dateAdded: '04/05/2023',
        },
        {
          imgSrc: '../../../assets/tea-4-news.webp',
          header:
            'U.S. downs suspected Chinese spy balloon over the Alantic coast',
          dateAdded: '04/05/2023',
        },
        {
          imgSrc: '../../../assets/tea-2-news.webp',
          header:
            'U.S. downs suspected Chinese spy balloon over the Alantic coast',
          dateAdded: '04/05/2023',
        },
      ];
    } else {
      this.latestNews = [
        {
          imgSrc: '../../../assets/tea-2-news.webp',
          header:
            'U.S. downs suspected Chinese spy balloon over the Alantic coast',
          dateAdded: '04/05/2023',
        },
      ];
    }
  }
}
