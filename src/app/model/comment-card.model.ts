export class CommentsList {
    count: number;
    results: CommentCard[];
    constructor(obj?:any) {
        this.count= obj && obj.count || null;
        this.results= obj && obj.results && obj.results.map((el:any)=> new CommentCard(el)) || null;
    }
}

export class CommentCard {
    cards: number;
    text: string;
    author: string;
    date: Date;
    _id: number;
    constructor(obj?:any) {
        this.cards = obj && obj.cards || null;
        this.text = obj && obj.text || '';
        this.author = obj && obj.author || '';
        this.date = obj && obj.date || new Date();
        this._id = obj && obj._id || null; 
    }
}