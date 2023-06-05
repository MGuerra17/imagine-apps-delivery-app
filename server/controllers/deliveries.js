import {
  createDelivery,
  deleteDelivery,
  getDeliveries,
  getDelivery,
  updateDelivery
} from '../services/deliveries.js'

export async function getDeliveriesController(req, res) {
  const { data, error } = await getDeliveries()
  if (error) return res.status(500).json({ error })
  return res.status(200).json({ data })
}

export async function getDeliveryController(req, res) {
  const { id } = req.params
  const { data, error } = await getDelivery(id)
  if (error) return res.status(500).json({ error })
  return res.status(200).json({ data })
}

export async function createDeliveryController(req, res) {
  const {
    origin_location,
    destination_location,
    estimated_delivery_date,
    status
  } = req.body
  const { data, error } = await createDelivery({
    origin_location,
    destination_location,
    estimated_delivery_date,
    status
  })
  if (error) return res.status(500).json({ error })
  return res.status(200).json({ data })
}

export async function updateDeliveryController(req, res) {
  const { id } = req.params
  const {
    origin_location,
    destination_location,
    estimated_delivery_date,
    status
  } = req.body
  const { data, error } = await updateDelivery(id, {
    origin_location,
    destination_location,
    estimated_delivery_date,
    status
  })
  if (error) return res.status(500).json({ error })
  return res.status(200).json({ data })
}

export async function deleteDeliveryController(req, res) {
  const { id } = req.params
  const { data, error } = await deleteDelivery(id)
  if (error) return res.status(500).json({ error })
  return res.status(200).json({ data })
}
