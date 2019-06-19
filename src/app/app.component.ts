import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() storedPosts = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
