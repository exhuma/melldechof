import { DateTime } from "luxon";
import { v4 as uuidv4 } from "uuid";
export class Event {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.start = startDate;
    this.end = endDate;
    this.id = uuidv4();
  }

  static fromISO(name, startDate, endDate) {
    const start = DateTime.fromISO(startDate);
    const end = DateTime.fromISO(endDate);
    return new Event(name, start.toJSDate(), end.toJSDate());
  }
}
