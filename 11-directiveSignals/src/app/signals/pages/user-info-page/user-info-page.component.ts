import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css'],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);

  public userWasFound = signal(true);

  public fullName = computed<string>(() => {
    if (!this.currentUser) return 'User was not found';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number): void {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    // this.userService.getUserBy(id).subscribe((user) => {
    //   this.currentUser.set(user);
    //   this.userWasFound.set(true);
    // });
    this.userService.getUserBy(id).subscribe(
      {
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: (error) => {
          console.error('Error loading user', error);
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }

      }
    )

  }
}
