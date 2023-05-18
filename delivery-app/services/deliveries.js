import { BASE_URL } from '../utils/constants'

export async function getDeliveriesService(token) {
  const response = await fetch(BASE_URL + '/api/deliveries', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  return await response.json()
}

export async function getDeliveryService(deliveryId, token) {
  const response = await fetch(BASE_URL + '/api/deliveries/' + deliveryId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  return await response.json()
}

export async function updateDeliveryService(deliveryId, data, token) {
  const response = await fetch(BASE_URL + '/api/deliveries/' + deliveryId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export async function createDeliveryService(data, token) {
  const response = await fetch(BASE_URL + '/api/deliveries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}
