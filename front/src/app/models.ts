export interface Image {
  id?: number;
  path: string;
  filter?: number;
}

export interface Comment {
  id?: number;
  comment: string;
  user: User;
}

export interface Post {
  id?: number;
  content: string;
  creator: User;
  recipient: User;
  comments: Comment[];
  images: Image[];
}

export interface Friendship {
  id?: number;
  accepted: number;
  sender: Friend;
  recipient: Friend;
}

export interface User {
  id?: any;
  birthday: Date;
  email: string;
  lastname: string;
  name: string;
  password: string;
  phone: string;
  aboutMe: string;
  token: string;
}

export interface Friend extends User {
  accepted?: number;
  id?: {
    sender?: User;
    recipient?: User;
  };
  state?: number;
}
