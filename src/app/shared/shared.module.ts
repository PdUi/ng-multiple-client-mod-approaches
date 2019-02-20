import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { TriangleComponent } from './triangle/triangle.component';
import { RectangleComponent } from './rectangle/rectangle.component';

@NgModule({
  declarations: [CircleComponent, SquareComponent, TriangleComponent, RectangleComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleComponent, SquareComponent, TriangleComponent, RectangleComponent],
  entryComponents: [CircleComponent, SquareComponent, TriangleComponent, RectangleComponent]
})
export class SharedModule { }
