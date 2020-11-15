import { AppLocale } from "@/applocale.js";
import { v4 as uuidv4 } from "uuid";
export class Event {
  constructor(name, startDate, endDate, id) {
    this.name = name || "Unknown";
    this.start = startDate || null;
    this.end = endDate || null;
    this.id = id || uuidv4();
  }

  static fromISO(name, startDate, endDate) {
    const start = AppLocale.fromISODate(startDate);
    const end = AppLocale.fromISODate(endDate);
    return new Event(name, start.toJSDate(), end.toJSDate());
  }
}
