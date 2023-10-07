export const GET = async () => {
  console.log('api', 'GET')
  return new Response(
    JSON.stringify({
      status: 200,
      statusText: 'ok'
    }),
    {
      status: 200,
      statusText: 'ok'
    }
  )
}
