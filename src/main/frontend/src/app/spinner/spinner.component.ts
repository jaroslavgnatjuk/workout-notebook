import { Component } from '@angular/core';
import {SpinnerService} from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  spinnerState;

  constructor(private spinnerService: SpinnerService) {
    this.spinnerState = this.spinnerService.getSpinner();
  }
}
