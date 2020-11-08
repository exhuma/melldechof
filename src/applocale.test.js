import { AppLocale } from "./applocale.js";
import { DateTime } from "luxon";

test("date formatting", () => {
  const testDate = new Date(1, 2, 3, 4, 5);
  expect(AppLocale.formatDateTime(testDate)).toBe("3. März 1901, 04:05");
});

test("date formatting for the calendar view", () => {
  const testDate = "1900-01-01T23:10:20+0100";
  expect(AppLocale.formatCalendarTitle(testDate)).toBe("Januar 1900");
});

test("date ISO formatting", () => {
  const testDate = new Date(1, 2, 3, 4, 5);
  expect(AppLocale.toISODate(testDate)).toBe("1901-03-03");
});

test("date ISO parsing", () => {
  const testDate = "1900-01-01T23:10:20+0100";
  const expected = DateTime.fromISO("1900-01-01T23:10:20+0100");
  expect(AppLocale.fromISODate(testDate)).toStrictEqual(expected);
});

test("Range formatting: same day", () => {
  const start = new Date(1, 2, 3, 4, 5);
  const end = new Date(1, 2, 3, 10, 10);
  let result = AppLocale.formatDateTimeRange(start, end);
  let expected = "3. März 1901, 04:05 - 10:09";
  expect(result).toBe(expected);
});

test("Range formatting: different day", () => {
  const start = new Date(1, 2, 3, 4, 5);
  const end = new Date(2, 3, 4, 4, 5);
  let result = AppLocale.formatDateTimeRange(start, end);
  let expected = "3. März 1901, 04:05 - 4. Apr. 1902, 04:05";
  expect(result).toBe(expected);
});
