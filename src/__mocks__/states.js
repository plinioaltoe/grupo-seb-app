import img from '../assets/doctor.jpg'

export const STATE_NO_DOCTOR = {
  auth: {
    data: {
      id: 1,
      name: 'Plínio Altoé Costa Vieira',
      avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
      login: 'plinioaltoe',
      isDoctor: false,
    },
    loading: false,
    error: '',
  },
  appointments: {
    data: [
      {
        id: 1,
        name: 'Plínio Altoé Costa Vieira',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'plinioaltoe',
        isDoctor: false,
        appointmentDate: ['2019-05-01T15:00:00.000Z'],
        user_id: 1,
      },
      {
        id: 2,
        name: 'Plínio Altoé Costa Vieira',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'plinioaltoe',
        isDoctor: false,
        appointmentDate: ['2019-06-01T15:00:00.000Z'],
        user_id: 1,
      },
      {
        id: 3,
        name: 'Zé da silva',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'ze',
        isDoctor: false,
        appointmentDate: ['2019-07-01T15:00:00.000Z'],
        user_id: 2,
      },
    ],
    loading: false,
    error: '',
  },
}

export const STATE_DOCTOR = {
  auth: {
    data: {
      id: 1,
      name: 'doctor',
      avatar_url: img,
      login: 'doctor',
      isDoctor: true,
    },
  },
  appointments: {
    data: [
      {
        id: 1,
        name: 'Plínio Altoé Costa Vieira',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'plinioaltoe',
        isDoctor: false,
        appointmentDate: ['2019-05-01T15:00:00.000Z'],
        user_id: 1,
      },
      {
        id: 2,
        name: 'Plínio Altoé Costa Vieira',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'plinioaltoe',
        isDoctor: false,
        appointmentDate: ['2019-06-01T15:00:00.000Z'],
        user_id: 1,
      },
      {
        id: 3,
        name: 'Zé da silva',
        avatar_url: 'https://avatars1.githubusercontent.com/u/36741085?v=4',
        login: 'ze',
        isDoctor: false,
        appointmentDate: ['2019-07-01T15:00:00.000Z'],
        user_id: 2,
      },
    ],
    loading: false,
    error: '',
  },
}
