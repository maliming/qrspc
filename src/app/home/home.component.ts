import { AuthService, LocalizationPipe } from '@abp/ng.core';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [LocalizationPipe],
})
export class HomeComponent implements OnInit {
  private authService = inject(AuthService);

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  login() {
    this.authService.navigateToLogin();
  }
  //校验登录状态 未登录状态跳到登录页
  ngOnInit(): void {    
    if (!this.authService.isAuthenticated) {
      this.authService.navigateToLogin();
    }
  }
}
