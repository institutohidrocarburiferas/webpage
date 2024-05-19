import fs from 'node:fs'
import path from 'node:path'

// To send Slider component
export function getEventPhotos ({dir}) {
  const dataDirectory = path.join(process.cwd(), 'public', dir)

  const photos = fs.readdirSync(dataDirectory)

  return photos.map(photo => {
    const title = photo.replace(/\.jpg$/, '')

    return {
      id: title,
      title: '',
      image: `${dir}/${photo}`
    }
  })
}
