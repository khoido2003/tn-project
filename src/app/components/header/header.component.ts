import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLanguage = 'Tiếng Việt';

  languageList = [
    {
      name: 'Tiếng Việt',
      flag: '../../../assets/vn-flag.svg',
    },
    {
      name: 'English',
      flag: '../../../assets/uk-flag.svg',
    },
  ];
}
