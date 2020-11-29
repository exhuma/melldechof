export class Proxy {
  constructor(backendUrl) {
    this.backendUrl = backendUrl;
  }

  async fetchGatherings() {
    const response = await fetch(`${this.backendUrl}/gatherings`);
    return response.json();
  }

  async fetcGathering(id) {
    return fetch(`${this.backendUrl}/gatherings/${id}`).then((response) =>
      response.json()
    );
  }
}
