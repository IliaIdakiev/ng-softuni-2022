import { Component, Inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, filter, take } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy {

  apiError$ = this.apiError.asObservable();

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router
  ) {
    this.apiError$.pipe(debounceTime(0), take(1), filter(val => !val)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnDestroy(): void {
    this.apiError.next(null);
  }

}
