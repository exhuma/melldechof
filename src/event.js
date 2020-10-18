import { DateTime } from "luxon";
export class Event {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.start = startDate;
    this.end = endDate;
  }

  static fromISO(name, startDate, endDate) {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    return new Event(name, start.toJSDate(), end.toJSDate());
  }
}
