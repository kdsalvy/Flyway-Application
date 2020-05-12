import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private rowData: any[];
  private columnDefs: any[];
  private modules = AllCommunityModules;
  private loaded: boolean = false;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'User Name', field: 'username'},
      {headerName: 'First Name', field: 'firstName'},
      {headerName: 'Last Name', field: 'lastName'}
    ];
    this.getUsers(0, 5);
  }

  getUsers(pageNo: number, size: number) {
    this.service.getAllUsers(pageNo, size).subscribe(
      data =>  {
        console.log(data['_embedded']['users']);
        this.rowData = data['_embedded']['users'];
        if(data)
          this.loaded = true;
      }, error => {
        console.log(error.message);
      }
    )
  }
}
