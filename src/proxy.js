export class Proxy {
  constructor(backendUrl) {
    this.backendUrl = backendUrl;
  }

  async test() {
    const response = await fetch(`${this.backendUrl}/fail`);
    const json = await response.json();
    if (!json.ok) {
      throw new Error('Error')
    }
    return json
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
