import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

  posts: IPost[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    })
  }
}
