import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  @Input() currentLanguage!: string;
  @Input() languageList!: { name: string; flag: string }[];
}
