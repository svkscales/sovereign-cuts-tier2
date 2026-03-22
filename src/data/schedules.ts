export const barberSchedules: Record<string, { time: string; status: 'available' | 'booked' }[]> = {
  "solomon-vane": [
    { time: '09:00 AM', status: 'available' },
    { time: '10:30 AM', status: 'booked' }, // Booked as requested in audio
    { time: '12:00 PM', status: 'available' },
    { time: '01:30 PM', status: 'booked' },
    { time: '03:00 PM', status: 'available' },
    { time: '04:30 PM', status: 'available' },
    { time: '06:00 PM', status: 'booked' },
  ],
  "dorian-cross": [
    { time: '09:00 AM', status: 'booked' },
    { time: '10:30 AM', status: 'available' },
    { time: '12:00 PM', status: 'booked' },
    { time: '01:30 PM', status: 'available' },
    { time: '03:00 PM', status: 'booked' },
    { time: '04:30 PM', status: 'available' },
    { time: '06:00 PM', status: 'available' },
  ],
  "finn-ashby": [
    { time: '09:00 AM', status: 'available' },
    { time: '10:30 AM', status: 'available' },
    { time: '12:00 PM', status: 'available' },
    { time: '01:30 PM', status: 'booked' },
    { time: '03:00 PM', status: 'available' },
    { time: '04:30 PM', status: 'booked' },
    { time: '06:00 PM', status: 'booked' },
  ],
  "default": [
    { time: '09:00 AM', status: 'available' },
    { time: '10:30 AM', status: 'available' },
    { time: '12:00 PM', status: 'available' },
    { time: '01:30 PM', status: 'available' },
    { time: '03:00 PM', status: 'available' },
    { time: '04:30 PM', status: 'available' },
    { time: '06:00 PM', status: 'available' },
  ]
};

export const sharedDates = [
  { day: 'Mon', date: '12', status: 'available' },
  { day: 'Tue', date: '13', status: 'available' },
  { day: 'Wed', date: '14', status: 'booked' },
  { day: 'Thu', date: '15', status: 'available' },
  { day: 'Fri', date: '16', status: 'available' },
  { day: 'Sat', date: '17', status: 'booked' },
];
