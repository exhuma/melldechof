import { Event } from "@/event.js";
import { Presence } from "@/enums.js";
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
  }

  loadGatherings() {
    this.gatherings = [];
    fetch("http://localhost:8000/ical").then((response) => {
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

  loadPresences() {
    this.presenceList = {
      "4oatu5678cld8gfh0euluj3ip3@google.com": [
        { name: "user-1", presence: Presence.PRESENT },
        { name: "user-2", presence: Presence.PRESENT },
        { name: "user-3", presence: Presence.PRESENT },
      ],
      "5e1ouudn8cc3sr1atbqqi3dvon@google.com": [
        { name: "user-1", presence: Presence.PRESENT },
        { name: "user-2", presence: Presence.UNKNOWN },
        { name: "user-3", presence: Presence.ABSENT },
        { name: "user-4", presence: Presence.ABSENT },
        { name: "user-5", presence: Presence.PRESENT },
        { name: "user-6", presence: Presence.ABSENT },
      ],
    };
  }
}
