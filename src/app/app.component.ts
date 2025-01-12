import { Component, NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentListComponent], // Import AppointmentListComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  title = 'appointment-app';
}

export class AppModule {}
