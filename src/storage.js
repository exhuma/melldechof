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
    this.presenceList = {};
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
    json.presences.forEach((item) => {
      if (!(item["event_id"] in this.presenceList)) {
        this.presenceList[item["event_id"]] = {};
      }
      this.presenceList[item["event_id"]][item["user_id"]] = {
        userId: item["user_id"],
        userName: item["user_name"],
        presence: item["presence"],
      };
    });
  }

  async getPresence(userId, eventId) {
    let response = await fetch(
      `${this.baseUrl}/presences/${eventId}/${userId}`
    );
    if (!response.ok) {
      console.error(response);
      return "unknown";
    }
    let json = await response.json();
    return json["presence"];
  }

  async setPresence(userId, eventId, newPresence) {
    const url = `${this.baseUrl}/presence/${userId}/${eventId}/${newPresence}`;
    const response = await fetch(url, {
      method: "PUT",
    });
    if (response.ok) {
      this.presenceList[eventId][userId].presence = newPresence;
    }
  }
}
