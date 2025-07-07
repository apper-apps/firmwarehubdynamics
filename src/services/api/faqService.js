import faqData from '@/services/mockData/faqData.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const faqService = {
  async getAll() {
    await delay(250)
    return [...faqData]
  },

  async getById(id) {
    await delay(200)
    const faq = faqData.find(item => item.Id === id)
    if (!faq) {
      throw new Error('FAQ not found')
    }
    return { ...faq }
  },

  async create(faqInfo) {
    await delay(350)
    const newId = Math.max(...faqData.map(item => item.Id)) + 1
    const newFaq = {
      ...faqInfo,
      Id: newId
    }
    faqData.push(newFaq)
    return { ...newFaq }
  },

  async update(id, updateData) {
    await delay(300)
    const index = faqData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('FAQ not found')
    }
    
    faqData[index] = { ...faqData[index], ...updateData }
    return { ...faqData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = faqData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('FAQ not found')
    }
    
    const deleted = faqData.splice(index, 1)[0]
    return { ...deleted }
  }
}