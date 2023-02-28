import { Shape } from "./Shape";
export class Container implements Shape {
    constructor(private shapes: Array<Shape>){}
    square(){
        return this.shapes.reduce((res, cur) => res + cur.square(), 0);
    }
    perimeter(){
        return this.shapes.reduce((res, cur) => res + cur.perimeter(), 0);
    }
}