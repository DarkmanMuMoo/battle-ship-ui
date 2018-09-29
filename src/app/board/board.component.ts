import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core'
import { zip } from 'lodash'
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  @Input()
  data: number[][]

  @Output() fire = new EventEmitter<any>()
  constructor() {}

  ngOnInit() {
    this.data = this.reverseTranspose(this.data)
  }
  private reverseTranspose(data: number[][]): number[][] {
    return zip(...data).reverse()
  }

  onClick(value: number, {x, y}: { x: number; y: number; }) {
    this.fire.emit({ value, cordinate: this.transposeCordinate(x, y)})
  }
  transposeCordinate(x, y) {
        return { x: x, y: Math.abs(y - (this.data.length - 1))}
  }

}

