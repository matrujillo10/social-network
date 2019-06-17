import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionService } from '../session.service';
import { User, Post } from '../models';
import { WallService } from '../wall.service';
import { log } from 'util';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  currentUser: User;
  posts: Post[];

  newPost: string;
  selectedFile: ImageSnippet;

  showModal = false;

  constructor(private session: SessionService, private wallService: WallService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.parent.url.subscribe((urlPath) => {
      const id = urlPath[urlPath.length - 1].path;

      if (id !== 'me') {
        this.session.getSeeingProfile().subscribe(u => {
          this.currentUser = u;
          if (this.currentUser) {
            this.fetchPosts(this.currentUser);
          }
        });
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
      creator: { id: this.session.sessionUser.id },
      recipient: { id: toUser.id },
      comments: [],
      content: this.newPost,
      images: [
        {
          path: file
        }
      ]
    };

    this.wallService.createPost(this.session.sessionUser.id, post, this.selectedFile)
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
}
