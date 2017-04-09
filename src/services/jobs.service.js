'use strict'

// RxJS
import { Observable } from 'rxjs-es/Observable'
import { Subject } from 'rxjs-es/Subject'

class WebSocketService {

  constructor() {
    // The socket is an RxJS Subject. It inherits both an Observable (stream) and an Observer (subscriber).
    this.socket = null
  }

  /**
   * Connect to any given URL/Protocol and return an RxJS Subject in a singleton approach:
   * Only one socket per service instance.
   * @param url: string
   * @param protocol: string
   * @return socket: Rx.Subject<MessageEvent>
   */
  connect(url, protocol) {
    if (!this.socket) {
      this.socket = this.create(url, protocol)
      console.log(`The socket is successfully connected to ${url} using ${protocol}.`)
    }
    return this.socket
  }

  /**
   * Create an RxJS Subject that will be both Observable (stream) and Observer (subscriber).
   * The created Subject will watch the WebSocket for any incoming data
   * and will broadcast this data to any component(s) subscribed to this service.
   * @param url: string
   * @param protocol: string
   * @return socket: Rx.Subject<MessageEvent>
   */
  create(url, protocol) {
    let webSocket = new WebSocket(url, protocol)

    webSocket.onopen = (event) => {
        let message = {
          type: 'status-request'
        }
      webSocket.send(JSON.stringify(message))
    }

    let stream = Observable.create(
      (subscriber) => {
        webSocket.onmessage = subscriber.next.bind(subscriber)
        webSocket.onerror = subscriber.error.bind(subscriber)
        webSocket.onclose = subscriber.complete.bind(subscriber)
        return webSocket.close.bind(webSocket)
      })

      let subscriber = {
        next: (data) => {
          if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(JSON.stringify(data))
          }
        }
      }

    let socket = Subject.create(subscriber, stream)

    return socket
  }
}

module.exports = WebSocketService
