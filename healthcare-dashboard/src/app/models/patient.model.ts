export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  dateOfBirth: string;
  sex: 'Male' | 'Female';
  residence: string;
  mrn: string;
  idNumber: string;
  lastFourSSN: string;
  phoneNumber: string;
  emailAddress: string;
  hospital: string;
  department: string;
  physician: string;
  conditions: string;
  nextAppointment: {
    date: string;
    time: string;
  };
}
