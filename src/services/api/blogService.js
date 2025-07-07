import blogData from '@/services/mockData/blogData.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const blogService = {
  async getRecentPosts(limit = 6) {
    await delay(400)
    return [...blogData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit)
  },

  async getAll() {
    await delay(300)
    return [...blogData]
  },

  async getById(id) {
    await delay(200)
    const post = blogData.find(item => item.Id === id)
    if (!post) {
      throw new Error('Blog post not found')
    }
    return { ...post }
  },

  async create(postData) {
    await delay(400)
    const newId = Math.max(...blogData.map(item => item.Id)) + 1
    const newPost = {
      ...postData,
      Id: newId
    }
    blogData.push(newPost)
    return { ...newPost }
  },

  async update(id, updateData) {
    await delay(300)
    const index = blogData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Blog post not found')
    }
    
    blogData[index] = { ...blogData[index], ...updateData }
    return { ...blogData[index] }
  },

  async delete(id) {
    await delay(300)
    const index = blogData.findIndex(item => item.Id === id)
    if (index === -1) {
      throw new Error('Blog post not found')
    }
    
    const deleted = blogData.splice(index, 1)[0]
    return { ...deleted }
  }
}