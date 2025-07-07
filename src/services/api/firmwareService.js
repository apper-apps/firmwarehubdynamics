import firmwareData from '@/services/mockData/firmwareData.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const firmwareService = {
  async searchFirmware(model, region = '') {
    await delay(300)
    
    let results = [...firmwareData]
    
    if (model) {
      results = results.filter(firmware => 
        firmware.model.toLowerCase().includes(model.toLowerCase())
      )
    }
    
    if (region) {
      results = results.filter(firmware => 
        firmware.region.toLowerCase() === region.toLowerCase()
      )
    }
    
    return results
  },

  async getAll() {
    await delay(200)
    return [...firmwareData]
  },

  async getById(id) {
    await delay(200)
    const firmware = firmwareData.find(item => item.Id === id)
    if (!firmware) {
      throw new Error('Firmware not found')
    }
    return { ...firmware }
  },

  async create(firmwareData) {
    await delay(300)
    const newId = Math.max(...firmwareData.map(item => item.Id)) + 1
    const newFirmware = {
      ...firmwareData,
      Id: newId
    }
    firmwareData.push(newFirmware)
    return { ...newFirmware }
  },

  async update(id, updateData) {
    await delay(300)
    const index = firmwareData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Firmware not found')
    }
    
    firmwareData[index] = { ...firmwareData[index], ...updateData }
    return { ...firmwareData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = firmwareData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Firmware not found')
    }
    
    const deleted = firmwareData.splice(index, 1)[0]
    return { ...deleted }
  }
}