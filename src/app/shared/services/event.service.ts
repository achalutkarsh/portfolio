import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private colorSubject = new Subject<string>()

  sendDarkColorEvent(enabled): void {
    this.colorSubject.next(enabled)
  }
  getDarkColorEvent(): Subject<string> {
    return this.colorSubject
  }
}
