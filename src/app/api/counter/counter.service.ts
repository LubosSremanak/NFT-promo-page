import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  private sse: EventSource | undefined;
  private readonly _message: Subject<any>;

  constructor() {
    this._message = new Subject<any>();
  }

  public connect(): void {
    this.sse = new EventSource("/api/giveaway/index.php");
    this.handleEvents();
  }

  private handleEvents(): void {
    const sse = this.sse;
    if (sse) {
      sse.onmessage = this.onMessage;
    }
  }

  private onMessage = (event: any): void => {
    const data = JSON.parse(event.data);
    this._message.next(data)
  };

  public get message(): Subject<any> {
    return this._message;
  }
}
