import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAllUsers(pageNo: number, limit: number) {
    return this.http.get("http://localhost:8080/flyway/users?page=" + pageNo + "&size="  + limit).map(
      (response: Response[]) => response
    );
  }
}
