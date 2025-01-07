import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navList: string[] = [
    'Home',
    'TV Shows',
    'News & Popular',
    'My List',
    'Browse by Language',
  ];
}
