export interface Image {
  id?: number;
  path: string;
}

export interface Post {
  id?: number;
  content: string;
  creator: User;
  recipient: User;
  comments: Comment[];
  images: Image[];
}

export interface Comment {
  id?: number;
  comment: string;
  user: User;
  post?: Post;
}

export interface Friend {
  id?: number;
  birthday: Date;
  email: string;
  lastname: string;
  name: string;
  phone: string;
  aboutMe: string;
}

export interface Friendship {
  id?: number;
  accepted: number;
  sender: Friend;
  recipient: Friend;
}

export interface User {
  id?: number;
  birthday: Date;
  email: string;
  lastname: string;
  name: string;
  password: string;
  phone: string;
  aboutMe: string;
  friendshipsSent: Friendship[];
  friendshipsRecieved: Friendship[];
  comments: Comment[];
  postsCreated: Post[];
  postsRecieved: Post[];
}
