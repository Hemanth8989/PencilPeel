import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Blog {

  private blogUrl = '/data/blogs.json';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl);
  }

  getBlogById(id: string): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map((blogs) => blogs.find((b: any) => b.id === id))
    );
  }

}
