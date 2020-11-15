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
        { userId: 1, name: "user-1", presence: Presence.PRESENT },
        { userId: 2, name: "user-2", presence: Presence.PRESENT },
        { userId: 3, name: "user-3", presence: Presence.PRESENT },
      ],
      "5e1ouudn8cc3sr1atbqqi3dvon@google.com": [
        { userId: 1, name: "user-1", presence: Presence.PRESENT },
        { userId: 2, name: "user-2", presence: Presence.UNKNOWN },
        { userId: 3, name: "user-3", presence: Presence.ABSENT },
        { userId: 4, name: "user-4", presence: Presence.ABSENT },
        { userId: 5, name: "user-5", presence: Presence.PRESENT },
        { userId: 6, name: "user-6", presence: Presence.ABSENT },
      ],
    };
  }

  getPresence(userId, eventId) {
    const event = this.presenceList[eventId];
    if (!event) {
      return Presence.UNKNOWN;
    }
    const presence = event.find((element) => element.userId === userId);
    console.log(presence.presence);
    return presence.presence;
  }

  setPresence(userId, eventId, newPresence) {
    const event = this.presenceList[eventId];
    if (!event) {
      return null;
    }
    const presence = event.find((element) => element.userId === userId);
    return (presence.presence = newPresence);
  }
}
