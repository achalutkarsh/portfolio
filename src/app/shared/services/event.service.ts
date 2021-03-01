import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private colorSubject = new Subject<string>()

  sendFilterEvent(enabled): void {
    this.colorSubject.next(enabled)
  }
  getFilterEvent(): Subject<string> {
    return this.colorSubject
  }
}
