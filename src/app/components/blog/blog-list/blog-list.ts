import { Component } from '@angular/core';
import { Blog } from '../../../services/blog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss'
})
export class BlogList {

  blogs: any[] = [];

  constructor(private blogService: Blog) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }
}
