export default class Comment {
  constructor(name, message) {
    this.name = name;
    this.message = message;
    this.replies = [];
  }
}
