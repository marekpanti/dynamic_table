import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableService {
  precise(numberToFix: number) {
    return (
      Math.round(parseFloat((numberToFix * Math.pow(10, 5)).toFixed(5))) /
      Math.pow(10, 5)
    );
  }
}
