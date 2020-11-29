import { Presence } from "@/enums.js";

export class PresenceManager {
  async togglePresence(storage, presence, eventId) {
    const currentPresence = await storage.getPresence(presence.userId, eventId);
    const map = {};
    map[Presence.PRESENT] = Presence.ABSENT;
    map[Presence.ABSENT] = Presence.UNKNOWN;
    map[Presence.UNKNOWN] = Presence.PRESENT;
    let newPresence = map[currentPresence];
    await storage.setPresence(presence.userId, eventId, newPresence);
  }
}
