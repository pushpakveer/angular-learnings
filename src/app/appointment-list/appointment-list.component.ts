import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();

appointments : Appointment[]=[];

ngOnInit(): void {
    let savedAppointments=localStorage.getItem("appointments");

    this.appointments=savedAppointments?JSON.parse(savedAppointments) : [] 
}

addAppointment()
{  
  if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
  {
    let newAppointment : Appointment=
    {
      id:Date.now(),
      date:this.newAppointmentDate,
      title:this.newAppointmentTitle
    }

    this.appointments.push(newAppointment);

    localStorage.setItem("appointments",JSON.stringify(this.appointments));

    this.newAppointmentTitle="";
    this.newAppointmentDate=new Date();
  }   
   
}

deleteAppointment(index: number)
{

  this.appointments.splice(index,1);
  localStorage.setItem("appointments",JSON.stringify(this.appointments));

}

}
