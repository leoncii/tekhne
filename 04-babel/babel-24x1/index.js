import fetch from 'node-fetch'

//Please fix this file, contains errors

fetch('https://github.com/tecnocrata').then(res => {
  // console.log(res)
  console.log(res.ok)
  console.log('------')
  console.log(res.status)
  console.log('------')
  console.log(res.statusText)
  console.log('------')
  console.log(res.headers.raw())
  console.log('------')
  console.log(res.headers.get('content-type'))
})
