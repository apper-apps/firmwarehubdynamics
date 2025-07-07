import deviceData from '@/services/mockData/deviceData.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const deviceService = {
  async getNewDevices(limit = 8) {
    await delay(350)
    return [...deviceData]
      .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
      .slice(0, limit)
  },

  async getAll() {
    await delay(300)
    return [...deviceData]
  },

  async getById(id) {
    await delay(200)
    const device = deviceData.find(item => item.Id === id)
    if (!device) {
      throw new Error('Device not found')
    }
    return { ...device }
  },

  async create(deviceInfo) {
    await delay(400)
    const newId = Math.max(...deviceData.map(item => item.Id)) + 1
    const newDevice = {
      ...deviceInfo,
      Id: newId
    }
    deviceData.push(newDevice)
    return { ...newDevice }
  },

  async update(id, updateData) {
    await delay(300)
    const index = deviceData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Device not found')
    }
    
    deviceData[index] = { ...deviceData[index], ...updateData }
    return { ...deviceData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = deviceData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Device not found')
    }
    
    const deleted = deviceData.splice(index, 1)[0]
    return { ...deleted }
  }
}