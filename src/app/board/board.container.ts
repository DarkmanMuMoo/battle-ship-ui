import { Component } from '@angular/core'
import { of } from 'rxjs'
@Component({
  selector: 'app-board-container',
  template: `<app-board [data] = "data$ | async"  on-fire="onFire($event)" ></app-board>`,
  styleUrls: ['./board.component.css']
})
export class BoardContainerComponent {
  data$ = of([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])

  onFire({value, cordinate: {x, y}}) {
    alert(`value:${value} at cordinate: { ${x} ,${y} }`)
  }
}
