import { login } from '../services/auth.js'
import jwt from 'jsonwebtoken'

export async function loginController(req, res) {
  try {
    const { username, password } = req.body
    const { user, error } = await login(username, password)

    if (error) return res.status(500).json({ error })
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Usuario y/o contraseña incorrectos' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
    res.status(200).json({ token })
  } catch (error) {
    console.error('Error al obtener el usuario:', error)
    res.status(500).json({ error: 'Error al obtener el usuario' })
  }
}
