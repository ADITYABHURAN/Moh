import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';

/**
 * Service for managing patient data
 * In a real application, this would make HTTP calls to a backend API
 */
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private mockPatients: Patient[] = [
    {
      id: '1',
      firstName: 'Ashley',
      lastName: 'Citarella',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      dateOfBirth: '07/02/1958',
      sex: 'Female',
      residence: 'Boston, MA',
      mrn: 'YTK12345678',
      idNumber: 'NHL1234578',
      lastFourSSN: '0000',
      phoneNumber: '(000)-000-0000',
      emailAddress: 'ashleycitarella@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'COPD, CHF, Diabetes (Type II)',
      nextAppointment: {
        date: 'Today',
        time: '9:00 am'
      }
    },
    {
      id: '2',
      firstName: 'Albert',
      lastName: 'Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      dateOfBirth: '01/15/1952',
      sex: 'Male',
      residence: 'Waltham, MA',
      mrn: 'YTK12345675',
      idNumber: 'NHL1234578',
      lastFourSSN: '1111',
      phoneNumber: '(111)-111-1111',
      emailAddress: 'albertjohnson1952@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: {
        date: 'Today',
        time: '10:00 pm'
      }
    },
    {
      id: '3',
      firstName: 'Leslie Isabelle',
      lastName: 'Wang',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      dateOfBirth: '03/12/1985',
      sex: 'Female',
      residence: 'Moosehearttotis, ME',
      mrn: 'YTK12345675',
      idNumber: 'NHL1234578',
      lastFourSSN: '2222',
      phoneNumber: '(222)-222-2222',
      emailAddress: 'leslie.isabelle.wang@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: {
        date: 'Today',
        time: '11:00 pm'
      }
    },
    {
      id: '4',
      firstName: 'Adela',
      lastName: 'Bašić',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      dateOfBirth: '03/12/1950',
      sex: 'Female',
      residence: 'Boston, MA',
      mrn: 'YTK12345675',
      idNumber: 'NHL1234578',
      lastFourSSN: '3333',
      phoneNumber: '(333)-333-3333',
      emailAddress: 'adelabasic50@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: {
        date: 'Today',
        time: '1:30 pm'
      }
    },
    {
      id: '5',
      firstName: 'Reza',
      lastName: 'Saatchi',
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      dateOfBirth: '03/12/1957',
      sex: 'Male',
      residence: 'Boston, MA',
      mrn: 'YTK12345675',
      idNumber: 'NHL1234578',
      lastFourSSN: '4444',
      phoneNumber: '(444)-444-4444',
      emailAddress: 'reza.saatchi@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: {
        date: 'Today',
        time: '2:30 pm'
      }
    },
    {
      id: '6',
      firstName: 'Arjun',
      lastName: 'Chandrasekar',
      avatarUrl: 'https://i.pravatar.cc/150?img=14',
      dateOfBirth: '03/12/1958',
      sex: 'Male',
      residence: 'New York City, NY',
      mrn: 'YTK12345675',
      idNumber: 'NHL1234578',
      lastFourSSN: '5555',
      phoneNumber: '(555)-555-5555',
      emailAddress: 'arjun.chandras@mail.com',
      hospital: 'Massachusetts Medical Group',
      department: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      conditions: 'CHF',
      nextAppointment: {
        date: 'Today',
        time: '3:30 pm'
      }
    }
  ];

  constructor() { }

  /**
   * Get all patients
   * @returns Observable of Patient array
   */
  getPatients(): Observable<Patient[]> {
    return of(this.mockPatients);
  }

  /**
   * Search patients by criteria
   * In a real app, this would filter based on the search parameters
   * @param searchCriteria Search parameters
   * @returns Observable of filtered Patient array
   */
  searchPatients(searchCriteria: any): Observable<Patient[]> {
    // For now, just return all patients
    // In a real implementation, you would filter based on criteria
    return of(this.mockPatients);
  }
}
