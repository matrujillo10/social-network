import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionService } from '../session.service';
import { User, Post } from '../models';
import { WallService } from '../wall.service';
import { log } from 'util';

export class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  currentUser: User;
  posts: Post[] = [];

  newPost: string;
  selectedFile: ImageSnippet;
  selectedFilter = 0;

  showModal = false;

  constructor(private session: SessionService, private wallService: WallService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.url.subscribe((urlPath) => {
      const id = urlPath[urlPath.length - 1].path;

      if (id !== 'me') {
        setTimeout(() => {
          this.session
            .getSeeingProfile()
            .subscribe(u => {
              this.currentUser = u;
              if (this.currentUser) {
                this.fetchPosts(this.currentUser);
              }
            });
        }, 100);
      }
      else {
        this.session
          .getSession()
          .subscribe(user => {
            this.currentUser = user;
            this.fetchPosts(this.currentUser);
          });
      }
    });
  }

  fetchPosts(user: User): void {
    this.wallService.getWall(user.id)
      .subscribe(posts => this.posts = posts);
  }

  createPost(toUser: User): void {
    const file = this.selectedFile ? this.selectedFile.file.name : undefined;
    const post: Post = {
      creator: this.session.sessionUser,
      recipient: toUser,
      comments: [],
      content: this.newPost,
      images: [
        {
          path: file
        }
      ]
    };

    this.wallService.createPost(this.session.sessionUser.id, post, this.selectedFile && this.selectedFile.file)
      .subscribe(p => {
        this.closeModal();
        this.fetchPosts(this.currentUser);
      });
  }

  processImage(imageInput) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.newPost = '';
    this.showModal = false;
  }

  deletePost(post: Post, index: number) {
    return () => {
      this.session.getSession()
        .subscribe((s: User) => {
          this.wallService.deletePost(s.id, post.id)
            .subscribe(_ => {
              this.posts.splice(index, 1);
            });
        });
    }
  }

  selectFilter(filter: number) {
    this.selectedFilter = filter;
  }
}
