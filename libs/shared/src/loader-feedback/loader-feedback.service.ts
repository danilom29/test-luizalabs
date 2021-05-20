import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderFeedbackService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private list: Array<string> = [];

  constructor() {}
  addLoad(param: string): void {
    this.list.push(param);
    if (!this.isLoading.value) {
      this.isLoading.next(true);
    }
  }
  removeLoad(param: string): boolean {
    const index = this.list.indexOf(param);
    if (index === -1) {
      return false;
    }
    this.list.splice(index, 1);
    if (this.list.length === 0) {
      this.isLoading.next(false);
    }
    return true;
  }
}
