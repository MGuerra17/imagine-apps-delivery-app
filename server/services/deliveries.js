import { pool } from '../index.js'

export async function getDeliveries() {
  try {
    const query = 'SELECT * FROM deliveries ORDER BY id DESC'
    const { rows } = await pool.query(query)
    return { data: rows }
  } catch (error) {
    console.error('Error al obtener los registros:', error)
    return { error: 'Error al obtener los registros' }
  }
}

export async function getDelivery(id) {
  try {
    const query = 'SELECT * FROM deliveries WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return { data: rows[0] }
  } catch (error) {
    console.error('Error al obtener el registro:', error)
    return { error: 'Error al obtener el registro' }
  }
}

export async function createDelivery(delivery) {
  try {
    const query =
      'INSERT INTO deliveries (origin_location, destination_location, estimated_delivery_date, status) VALUES ($1, $2, $3, $4) RETURNING *'
    const { rows } = await pool.query(query, [
      delivery.origin_location,
      delivery.destination_location,
      delivery.estimated_delivery_date,
      delivery.status
    ])
    return { data: rows[0] }
  } catch (error) {
    console.error('Error al crear un nuevo registro:', error)
    return { error: 'Error al crear un nuevo registro' }
  }
}

export async function updateDelivery(id, delivery) {
  try {
    const query =
      'UPDATE deliveries SET origin_location = $1, destination_location = $2, estimated_delivery_date = $3, status = $4 WHERE id = $5 RETURNING *'
    const { rows } = await pool.query(query, [
      delivery.origin_location,
      delivery.destination_location,
      delivery.estimated_delivery_date,
      delivery.status,
      id
    ])
    return { data: rows[0] }
  } catch (error) {
    console.error('Error al modificar el registro:', error)
    return { error: 'Error al modificar el registro' }
  }
}

export async function deleteDelivery(id) {
  try {
    const query = 'DELETE FROM deliveries WHERE id = $1'
    await pool.query(query, [id])
    return { data: true }
  } catch (error) {
    console.error('Error al eliminar el registro:', error)
    return { error: 'Error al eliminar el registro' }
  }
}
