class Post {
    constructor (title, subtitle, tag, body, link, date) {
        this.title = title;
        this.subtitle = subtitle;
        this.tags.push(tag);
        this.body = body;
        this.link = link;
        this.date = date;
    }
}

export default Post;