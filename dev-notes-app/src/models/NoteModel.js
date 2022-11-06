export class NoteModel {
    constructor(_id, _author, _theme, _title, _text, _pub_date) {
        this.id = _id;
        this.author = _author;
        this.theme = _theme;
        this.title = _title;
        this.text = _text;
        this.pub_date = _pub_date;
    }
}