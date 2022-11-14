import { Component } from '@angular/core';
import { GlobalLoaderService } from '../services/global-loader.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent {

  constructor(public globalLoaderService: GlobalLoaderService) { }

}
