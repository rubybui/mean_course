import { Component, Input } from '@angular/core'; //import a package
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() storedPosts = [];

  onPostAdded(post){
    this.storedPosts.push(post);
  }
}
