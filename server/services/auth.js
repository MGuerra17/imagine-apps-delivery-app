import { pool } from '../index.js'

export async function login(username, password) {
  try {
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2'
    const { rows } = await pool.query(query, [username, password])
    return { user: rows[0] }
  } catch (error) {
    console.error('Error al obtener el usuario:', error)
    return { error: 'Error al obtener el usuario' }
  }
}
