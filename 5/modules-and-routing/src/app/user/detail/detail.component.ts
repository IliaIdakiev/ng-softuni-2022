import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot.data, this.activatedRoute.snapshot.params);
    this.activatedRoute.params.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
