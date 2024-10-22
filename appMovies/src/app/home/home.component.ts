import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // subscriptions: Subscription[] = [];
  // $dataInterval: Observable<number> = interval(1000);
  // $data!:Observable<string>;
  // ngOnInit(): void {
  //   let intervalSub = this.$dataInterval.subscribe((data: any) => {
  //     console.log(data);
  //   })
  //   this.subscriptions.push(intervalSub);
     // let obsSub = this.setIntervalObs().subscribe((res: any) => {
    //   console.log(res);
    // });
    // this.subscription.push(obsSub);
  //   this.getData().subscribe({
  //     next: (res: any) => {
  //       this.$data = res;
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     },
  //     complete: () => { },
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub: any) => {
  //     if (sub) {
  //       sub.unsubscribe();
  //     }
  //   })
  // }

  // setIntervalObs(): Observable<number> {
  //   let obs = new Observable<number>((obs: any) => {
  //     let count = 0;
  //     setInterval(() => {
  //       obs.next(count);
  //       count++;
  //     }, 1000);
  //   })
  //   return obs;
  // }

  // getData(): Observable<string> {
  //   let data = new Observable<string>((obs: any) => {
  //     setTimeout(() => {
  //       obs.next('data obs 1');
  //     }, 2000);
  //     setTimeout(() => {
  //       obs.next('data obs 2');
  //     }, 4000);
  //     setTimeout(() => {
  //       obs.next('data obs 3');
  //     }, 7000);
  //     setTimeout(() => {
  //       obs.error('errorrrrrrrrrrrr');
  //     }, 9000);
  //     setTimeout(() => {
  //       obs.complete();
  //     }, 10000);
  //   })
  //   return data;
  // }

}
