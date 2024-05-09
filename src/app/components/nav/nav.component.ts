import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  url = '';
  navList = [
    {
      link: '/',
      name: 'Trang chủ',
    },
    {
      link: '/map',
      name: 'Bản đồ',
    },
    {
      link: '/event',
      name: 'Sự kiện',
    },
    {
      link: '/txng',
      name: 'TXNG',
    },
    {
      link: '/news',
      name: 'Tin tức',
    },
    {
      link: '/docs',
      name: 'Tài liệu - văn bản',
    },
  ];

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url; // Update url on each navigation end
      }
    });
  }
}
