const datSharedFiles = require('dat-shared-files')

const Query = {
  listLinks: (_, {}) => new Promise((resolve, reject) => {
    return datSharedFiles.listLinks((err, links) => {
      if (err) reject(err)
      else resolve(links)
    })
  }),
  datLink: (_, { hash }) => new Promise((resolve, reject) => {
    return datSharedFiles.datLink(hash, (err, link) => {
      if (err) reject(err)
      else resolve(JSON.stringify(link))
    })
  }),
}

const Mutation = {
  removeLink: (_, { hash }) => new Promise((resolve, reject) => {
    datSharedFiles.removeLink(hash, (err, datLink) => {
      if (err) reject(err)
      else resolve(true)
    })
  }),
  // ,
  shareAll: (_, { }) => new Promise((resolve, reject) => {
    datSharedFiles.shareAll((err, links) => {
      if (err) console.error(err)
      else resolve(links)
    })
  }),
  // shareFiles,
  shareFile: (_, { path }) => new Promise((resolve, reject) => {
    datSharedFiles.shareFile(path, (err, datLink) => {
      if (err) reject(err)
      else resolve(datLink)
    })
  }),
}

module.exports = {
  Query,
  Mutation,
}