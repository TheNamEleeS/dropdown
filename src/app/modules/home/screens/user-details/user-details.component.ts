import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userData: any;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()?.extras?.state?.['userData']) {
      this.userData =
        this.router.getCurrentNavigation()?.extras?.state?.['userData'];
    }
  }

  ngOnInit(): void {}

  onBackClick() {
    this.router.navigateByUrl('/home/drop-down-list')
  }
}
