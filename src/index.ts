import { handleRequest, handleEvent} from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest())
})

addEventListener("scheduled", event => {
  event.waitUntil(handleEvent())
})
