import { Injectable } from "@angular/core";
import { UserService } from "../user.service";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "./actions";
import { catchError, map, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Effects {

  loadUsers = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(({ filter }) => this.userService.loadUsers(filter).pipe(
      map(users => loadUsersSuccess({ users })),
      catchError(error => [loadUsersFailure({ error })])
    ))
  ))

  constructor(private actions$: Actions, private userService: UserService) { }
}