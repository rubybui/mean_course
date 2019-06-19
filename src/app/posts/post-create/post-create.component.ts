import { Component, EventEmitter, Output } from '@angular/core'; //import a package
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = "";
  enteredTitle = "";
  @Output() postCreated = new EventEmitter();
  onAddPost(){

    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
  //name with on signal a method trigger upon event
}
