import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ipPort: string;

  constructor(private http: HttpClient) {
    this.ipPort = environment.ipPort;
  }

  public getAllUsers(pageNo: number, limit: number) {
    return this.http.get(this.ipPort + "/flyway/users?page=" + pageNo + "&size="  + limit).map(
      (response: Response[]) => response
    );
  }
}
