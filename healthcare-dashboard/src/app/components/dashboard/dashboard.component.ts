import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

/**
 * Main dashboard component
 * Displays patient search form and list of patients
 */
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
    // Initialize the reactive form
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    // Load patients on component initialization
    this.loadPatients();
  }

  /**
   * Load all patients from the service
   */
  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (patients) => {
        this.patients = patients;
      },
      error: (error) => {
        console.error('Error loading patients:', error);
      }
    });
  }

  /**
   * Switch between Basic and Advanced search tabs
   */
  setActiveTab(tab: 'basic' | 'advanced'): void {
    this.activeTab = tab;
  }

  /**
   * Handle search form submission
   */
  onSearch(): void {
    const searchCriteria = this.searchForm.value;
    console.log('Search criteria:', searchCriteria);
    
    // In a real application, this would filter the patients
    this.patientService.searchPatients(searchCriteria).subscribe({
      next: (patients) => {
        this.patients = patients;
      },
      error: (error) => {
        console.error('Error searching patients:', error);
      }
    });
  }
}
