import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../../services/blog';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetail implements OnInit, AfterViewInit {

  blog?: any;
  constructor(private route: ActivatedRoute, private blogService: Blog
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // or rename param to 'slug' if you prefer
    if (id) {
      this.blogService.getBlogById(id).subscribe((b) => {
        this.blog = b;
      });
    }

  }

  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const elements = document.querySelectorAll('.blog-post h1, .blog-post h2, .blog-post h3, .blog-post p, .blog-post img');
    elements.forEach((el, i) => {
      el.setAttribute('data-aos', 'fade-up');
      el.setAttribute('data-aos-delay', (i * 100).toString());
    });
  }
}
