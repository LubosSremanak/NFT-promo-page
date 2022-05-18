import {Injectable, NgZone} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WheelService {
  private delta: number;
  private readonly _onMouseDown: Subject<number>;
  private readonly _onMouseUp: Subject<number>;

  constructor(private ngZone: NgZone) {
    this.delta = 0;
    this._onMouseUp = new Subject<number>();
    this._onMouseDown = new Subject<number>();
  }


  get onMouseUp(): Subject<number> {
    return this._onMouseUp;
  }

  get onMouseDown(): Subject<number> {
    return this._onMouseDown;
  }

  public handleScroll = (event: any) => {
    this.ngZone.runOutsideAngular(() => {
      const newScrollY = event.deltaY;
      if (newScrollY > 0) {
        this.onMouseDown.next(newScrollY);
      } else {
        this.onMouseUp.next(newScrollY);
      }
    });
  };
}
