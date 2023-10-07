import { sequence } from 'astro:middleware'

async function validation({ locals, params }, next: () => any) {
  console.log('validation request', params)
  locals.locale = params.locale
  const response = await next()
  console.log('validation response')
  return response
}

async function auth(_, next: () => any) {
  console.log('auth request')
  const response = await next()
  console.log('auth response')
  return response
}

async function greeting(_, next: () => any) {
  console.log('greeting request')
  const response = await next()
  console.log('greeting response')
  return response
}

const cookie = ({ cookies, locals }, next) => {
  locals.locale = cookies.has('locale') ? cookies.get('locale').value : 'en'
  locals.theme = cookies.has('theme') ? cookies.get('theme').value : 'dark'
  locals.user = cookies.has('user') ? cookies.get('user').value : ''
  console.log('Middleware', 'cookie', locals)
  return next()
}

export const onRequest = sequence(cookie)
