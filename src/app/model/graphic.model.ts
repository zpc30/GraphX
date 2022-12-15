export class GraphicList {
    count: number;
    results: Graphic[]
    constructor(obj?: any) {
        this.count = obj && obj.count || null
        this.results = obj && obj.results && obj.results.map((el:any)=> new Graphic(el)) || []
    }
}

export class Graphic {
    _id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    grade: number;
    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.title = obj && obj.title || '';
        this.subtitle = obj && obj.subtitle || '';
        this.description = obj && obj.description || '';
        this.image = obj && obj.image || '';
        this.grade = obj && obj.grade || 0;
    }
}