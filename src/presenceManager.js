import { Presence } from "@/enums.js";

export class PresenceManager {
  togglePresence(storage, presence, eventId) {
    const currentPresence = storage.getPresence(presence.userId, eventId);
    const map = {};
    map[Presence.PRESENT] = Presence.ABSENT;
    map[Presence.ABSENT] = Presence.UNKNOWN;
    map[Presence.UNKNOWN] = Presence.PRESENT;
    let newPresence = map[currentPresence];
    storage.setPresence(presence.userId, eventId, newPresence);
  }
}
