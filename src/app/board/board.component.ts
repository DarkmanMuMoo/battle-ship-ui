import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
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
  constructor() {}

  ngOnInit() {
    this.data = zip(...this.data).reverse()
  }
}
