import { Component, OnInit, Input } from '@angular/core';
import { CalendarEventTimesChangedEvent } from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() viewDate: Date;
  @Input() events;

  activeDayIsOpen: boolean = true;
  refresh: Subject<any> = new Subject();
  view: string = 'week';

  constructor() { }

  ngOnInit() {
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }
}
