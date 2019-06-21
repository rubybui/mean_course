import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({providedIn:'root'})
export class PostsService{
  private posts: Post[] = [];
  private postsUpdated = new Subject <Post[]>();
  getPosts(){
    return [...this.posts];
    //bc javascript object is reference type.
    //So to not copy the address have to do spread operator - add square brackets to create a new array
  }
  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPosts(title:string, content:string){
    const post: Post = {title:title, content:content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
