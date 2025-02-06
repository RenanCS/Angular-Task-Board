import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  template: '<p>category works</p>',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
