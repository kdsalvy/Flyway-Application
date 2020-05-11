import { Component } from '@angular/core';
import { ModuleRegistry, AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-ui';

  constructor() {
    AllCommunityModules.forEach(module => ModuleRegistry.register(module));
  }
}
