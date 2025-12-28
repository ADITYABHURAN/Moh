import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PatientCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;
  patients: Patient[] = [];
  activeTab: 'basic' | 'advanced' = 'basic';

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (patients) => this.patients = patients,
      error: (error) => console.error('Error loading patients:', error)
    });
  }

  setActiveTab(tab: 'basic' | 'advanced'): void {
    this.activeTab = tab;
  }

  onSearch(): void {
    this.patientService.searchPatients(this.searchForm.value).subscribe({
      next: (patients) => this.patients = patients,
      error: (error) => console.error('Error searching patients:', error)
    });
  }
}
