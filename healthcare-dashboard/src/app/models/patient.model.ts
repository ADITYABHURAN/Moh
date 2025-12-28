/**
 * Patient model interface representing a healthcare patient's information
 */
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  dateOfBirth: string;
  sex: 'Male' | 'Female';
  residence: string;
  mrn: string; // Medical Record Number
  idNumber: string;
  lastFourSSN: string;
  phoneNumber: string;
  emailAddress: string;
  hospital: string;
  department: string;
  physician: string;
  conditions: string;
  nextAppointment: {
    date: string; // e.g., "Today"
    time: string; // e.g., "9:00 am"
  };
}
