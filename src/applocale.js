import { DateTime } from "luxon";

export class AppLocale {
  static formatDateTime(value) {
    const tmp = DateTime.fromJSDate(value);
    return tmp.setLocale("de-DE").toLocaleString(DateTime.DATETIME_MED);
  }

  static formatCalendarDate(value) {
    const date = DateTime.fromISO(value);
    return date.toLocaleString({ month: "long", year: "numeric" });
  }

  static toISODate(value) {
    const today = DateTime.fromJSDate(value);
    return today.toISODate();
  }

  static fromISODate(value) {
    return DateTime.fromISO(value);
  }

  static formatDateTimeRange(startValue, endValue) {
    const locale = "de-DE";
    const startLuxon = DateTime.fromJSDate(startValue).setLocale(locale);
    const endLuxon = DateTime.fromJSDate(endValue).setLocale(locale);

    if (startLuxon.zoneName !== endLuxon.zoneName) {
      const tmp1 = startLuxon.toLocaleString(DateTime.DATETIME_FULL);
      const tmp2 = endLuxon.toLocaleString(DateTime.DATETIME_FULL);
      return `${tmp1} - ${tmp2}`;
    }
    const startDate = startLuxon.toFormat("yyyyLLdd");
    const endDate = endLuxon.toFormat("yyyyLLdd");

    let prefix = "";
    let postfix = "";
    if (startDate === endDate) {
      prefix = startLuxon.toLocaleString(DateTime.DATETIME_MED);
      postfix = endLuxon.toFormat("HH:mm");
    } else {
      prefix = startLuxon.toLocaleString(DateTime.DATETIME_MED);
      postfix = endLuxon.toLocaleString(DateTime.DATETIME_MED);
    }
    return `${prefix} - ${postfix}`;
  }
}
