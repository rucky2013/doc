const Doc = {
  getDocs(userId, catalogId) {
    return [
      { code: 'user.get', id: 1 },
      { code: 'doc.get', id: 2 },
      { code: 'catalog.get', id: 3 }
    ]
  },
  getDoc(docId) {
    return {
      code: 'user.get',
      name: '获取用户接口',
      tags: ['标签1', '标签2'],
      content: '## 接口'
    }
  }
}
export default Doc