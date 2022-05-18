import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CounterService} from "../api/counter/counter.service";

@Component({
  selector: 'app-giveaway',
  templateUrl: './giveaway.component.html',
  styleUrls: ['./giveaway.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiveawayComponent implements OnInit {
  data: any;

  constructor(private counter: CounterService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.counter.connect();
    this.counter.message.subscribe(this.handleMessage);
  }

  private handleMessage = (data: any): void => {
    this.data = data;
    this.changeDetector.detectChanges();
  };
}
