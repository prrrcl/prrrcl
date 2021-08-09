class AppService {
  baseUrl: string

  postConfig: any

  constructor() {
    this.baseUrl = "/api"
    this.postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

  private prepareBody(body: any) {
    return { ...this.postConfig, body: JSON.stringify(body) }
  }

  private manageResponse(res: Response) {
    return res.json()
  }

  getMessages() {
    return fetch(`${this.baseUrl}/messages`).then(this.manageResponse)
  }

  postMessage(message: string) {
    return fetch(
      `${this.baseUrl}/messages/add`,
      this.prepareBody({ message })
    ).then(this.manageResponse)
  }
}

const appService = new AppService()

export default appService
