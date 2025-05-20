// lesson 31
// using this url for API calls: https://designer.mocky.io/design

import http from 'k6/http'

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    'http_req_duration{status:200}': ['p(95)<1000'],
    'http_req_duration{status:201}': ['p(95)<1000']
  }
}

export default function () {
  http.get('https://run.mocky.io/v3/ca4e1499-3d08-4ece-ae10-e4ae4e9c178f') 
  http.get('https://run.mocky.io/v3/92108202-3748-4908-bcc6-dcc23b85d03c?mocky-delay=200ms')
}