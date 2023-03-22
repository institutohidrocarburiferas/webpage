import fs from 'node:fs'
import path from 'node:path'

// To send Slider component
export function getEventPhotos () {
  const dir = 'eventos/seminario-internacional-cuarta-revolucion-industrial/fotos'
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
