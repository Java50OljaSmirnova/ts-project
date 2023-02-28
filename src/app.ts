import { displaySquarePerimeter } from "./displayProps";
import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
import { Container } from "./Container";
const rectangle: Rectangle = new Rectangle(3, 4);
const square: Square = new Square(10);
const container: Container = new Container([rectangle, square])
displaySquarePerimeter(container);


