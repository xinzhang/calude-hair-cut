export interface Appointment {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  stylist: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export type AppointmentFormData = Omit<Appointment, 'id' | 'created_at' | 'status'>;
