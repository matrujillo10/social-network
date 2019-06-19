import { Component, OnInit, Input } from '@angular/core';
import { Post, User, Comment } from '../models';
import { WallService } from '../wall.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() currentUser: User;
  @Input() deletePost: () => {};
  @Input() index: number;

  newComment: string;

  constructor(private wallService: WallService, private session: SessionService) { }

  ngOnInit() { }

  getImage(p: Post): string {
    const path = p.images[0].path;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return this.wallService.getImage(filename);
  }

  createComment(post: Post): void {
    this.session.getSession()
      .subscribe((usuario: User) => {
        if (this.newComment.trim()) {
          this.wallService.createComment(post.id, usuario, this.newComment)
            .subscribe((c: Comment) => {
              post.comments.push(c);
              this.newComment = '';
            });
        }
      })
  }
}
