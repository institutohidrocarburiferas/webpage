import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiHandler, NextApiResponse } from 'next'

const DEFAULT_LOCALE = 'es'

// It should match next.config::i18n.defaultLocale
const PREFERRED_LOCALE_COOKIE = 'NEXT_LOCALE'

const languaje: NextApiHandler = (req, res) => {
  console.log(req.url)
  if (req.method === 'GET') {
    const preferredLocale = req.cookies[PREFERRED_LOCALE_COOKIE] || ''

    return res.status(200).json({
      preferredLocale,
      defaultLocale: DEFAULT_LOCALE,
    })
  }

  if (req.method === 'POST') {
    const newPreferredLocale = req.body.preferredLocale as
      | string
      | undefined

    setCookie(res, PREFERRED_LOCALE_COOKIE, newPreferredLocale, {
      // Heads-up: the NEXT_LOCALE must be set to the `/` path
      path: '/',
    })

    // 307 (temporary) redirect to homepage
    res.redirect('/')
    return res.end()
  }

  // Not other supported method
  res.status(405).end()
}

function setCookie (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge!)
    options.maxAge! /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

export default languaje
