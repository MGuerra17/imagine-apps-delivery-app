export const BASE_URL = 'http://192.168.20.87:3000'

export const TOKEN_KEY = 'auth-token'

export const DELIVERY_STATUS = {
  all: 'Todos',
  pending: 'Pendiente',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
  onTheWay: 'En camino'
}

export const DELIVERY_STATUS_OPTIONS = [
  { label: 'Pendiente', value: 'pending' },
  { label: 'Entregado', value: 'delivered' },
  { label: 'Cancelado', value: 'cancelled' },
  { label: 'En camino', value: 'onTheWay' }
]

export const FILTER_OPTIONS = [
  { label: 'Todos', value: 'all' },
  { label: 'Pendientes', value: 'pending' },
  { label: 'Entregados', value: 'delivered' },
  { label: 'Cancelados', value: 'cancelled' },
  { label: 'En camino', value: 'onTheWay' }
]

export const CITIES_COORDS = {
  bogota: {
    latitude: 4.60971,
    longitude: -74.08175
  },
  medellin: {
    latitude: 6.25184,
    longitude: -75.56359
  },
  cali: {
    latitude: 3.43722,
    longitude: -76.5225
  },
  barranquilla: {
    latitude: 10.96854,
    longitude: -74.78132
  },
  cartagena: {
    latitude: 10.39972,
    longitude: -75.51444
  },
  bucaramanga: {
    latitude: 7.12539,
    longitude: -73.1198
  },
  pereira: {
    latitude: 4.81333,
    longitude: -75.69611
  },
  santaMarta: {
    latitude: 11.24079,
    longitude: -74.19904
  },
  manizales: {
    latitude: 5.06889,
    longitude: -75.51738
  },
  ibague: {
    latitude: 4.43889,
    longitude: -75.23222
  },
  villavicencio: {
    latitude: 4.15329,
    longitude: -73.63508
  },
  valledupar: {
    latitude: 10.46314,
    longitude: -73.25383
  },
  monteria: {
    latitude: 8.74798,
    longitude: -75.88143
  },
  armenia: {
    latitude: 4.53389,
    longitude: -75.68111
  },
  cucuta: {
    latitude: 7.89391,
    longitude: -72.50782
  },
  neiva: {
    latitude: 2.9273,
    longitude: -75.28189
  },
  sincelejo: {
    latitude: 9.30472,
    longitude: -75.39774
  }
}

export const CITIES_OPTIONS = [
  { label: 'Bogotá', value: 'bogota' },
  { label: 'Medellín', value: 'medellin' },
  { label: 'Cali', value: 'cali' },
  { label: 'Barranquilla', value: 'barranquilla' },
  { label: 'Cartagena', value: 'cartagena' },
  { label: 'Bucaramanga', value: 'bucaramanga' },
  { label: 'Pereira', value: 'pereira' },
  { label: 'Santa Marta', value: 'santaMarta' },
  { label: 'Manizales', value: 'manizales' },
  { label: 'Ibagué', value: 'ibague' },
  { label: 'Villavicencio', value: 'villavicencio' },
  { label: 'Valledupar', value: 'valledupar' },
  { label: 'Montería', value: 'monteria' },
  { label: 'Armenia', value: 'armenia' },
  { label: 'Cúcuta', value: 'cucuta' },
  { label: 'Neiva', value: 'neiva' },
  { label: 'Sincelejo', value: 'sincelejo' }
]
