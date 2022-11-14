import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-standalone-cmp',
  templateUrl: './standalone-cmp.component.html',
  styleUrls: ['./standalone-cmp.component.scss']
})
export class StandaloneCmpComponent {

  @Input() showValue = false;

}
