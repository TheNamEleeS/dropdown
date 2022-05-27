import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonAPIService } from '../../services/common-api.service';

@Component({
  selector: 'app-list-screen',
  templateUrl: './list-screen.component.html',
  styleUrls: ['./list-screen.component.css'],
})
export class ListScreenComponent implements OnInit {
  dataList: any[] = [];
  nameList: any[] = [];
  selectedUser: any = 0;
  form = new FormGroup({
    website: new FormControl(''),
  });

  constructor(
    private commonAPIService: CommonAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.commonAPIService.callFirstApi().subscribe({
      next: (v) => {
        this.dataList = v.data;
        this.nameList = this.filterData(this.dataList);
      },
      error: (e) => console.error(e),
    });
  }

  filterData(dataList: any[]): Array<any> {
    let nameList: any[] = [];

    dataList.forEach((element: { first_name: any; last_name: any }) => {
      nameList.push(element.first_name + ' ' + element.last_name);
    });
    return nameList.sort();
  }

  onChange(event: any) {
    this.commonAPIService.callSecondApi(event).subscribe({
      next: (v) => {
        this.router.navigateByUrl('/home/user-details', {
          state: { userData: v.data },
        });
      },
      error: (e) => console.error(e),
    });
  }
}
