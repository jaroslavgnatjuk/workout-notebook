import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  private spinnerState = {
    counter: 0
  };

  addSpinner() {
    this.spinnerState.counter++;
  }

  removeSpinner() {
    this.spinnerState.counter--;

    if (this.spinnerState.counter < 0) {
      this.spinnerState.counter = 0;
    }
  }

  getSpinner() {
    return this.spinnerState;
  }
}
