import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  visible = false;
  size: 'large' | 'default' = 'default';

  openNewProspects(): void {
    this.visible = true;
  }

  closeNewProspects(): void {
    this.visible = false;
  }
}
