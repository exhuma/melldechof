import { AppLocale } from "@/applocale.js";
import { v4 as uuidv4 } from "uuid";
export class Event {
  constructor(name, startDate, endDate, id) {
    this.name = name;
    this.start = startDate;
    this.end = endDate;
    if (id) {
      this.id = id;
    } else {
      this.id = uuidv4();
    }
  }

  static fromISO(name, startDate, endDate) {
    const start = AppLocale.fromISODate(startDate);
    const end = AppLocale.fromISODate(endDate);
    return new Event(name, start.toJSDate(), end.toJSDate());
  }
}
