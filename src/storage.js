import { Event } from "@/event.js";
import ical from "ical";

function convertIcs(ics) {
  const output = [];
  for (let k in ics) {
    // eslint-disable-next-line no-prototype-builtins
    if (ics.hasOwnProperty(k)) {
      const ev = ics[k];
      if (ev.type === "VEVENT") {
        output.push(new Event(ev.summary, ev.start, ev.end, ev.uid));
      }
    }
  }
  return output;
}

export class Storage {
  constructor() {
    this.gatherings = [];
    this.baseUrl = "http://localhost:8000";
  }

  loadGatherings() {
    this.gatherings = [];
    fetch(`${this.baseUrl}/ical`).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          const data = ical.parseICS(json.ics);
          const events = convertIcs(data);
          events.forEach((element) => {
            this.gatherings.push(element);
          });
        });
      } else {
        // TODO bubble up a toast
        console.error(response);
      }
    });
  }

  addGathering(name, start, end) {
    this.gatherings.push(new Event(name, start, end));
  }

  async loadPresences() {
    let response = await fetch(`${this.baseUrl}/presences`);
    let json = await response.json();
    let output = {};
    json.presences.forEach((item) => {
      if (!(item["event_id"] in output)) {
        output[item["event_id"]] = [];
      }
      output[item["event_id"]].push({
        userId: item["user_id"],
        userName: item["user_name"],
        presence: item["presence"],
      });
    });
    return output;
  }

  getPresence(userId, eventId) {
    console.log(userId, eventId); // TODO <- Remove this line!
    return "unknown";
  }

  async setPresence(userId, eventId, newPresence) {
    const url = `${this.baseUrl}/presence/${userId}/${eventId}/${newPresence}`;
    await fetch(url, {
      method: "PUT",
    });
  }
}
