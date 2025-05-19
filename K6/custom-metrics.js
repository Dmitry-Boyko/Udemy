import http from 'k6/http'
import { sleep } from 'k6'
import {Counter} from 'k6/metrics'

export const options = {
  vus: 5,
  duration: '5s',
  thresholds: {
    http_req_duration: ['p(95)<250'],
    myCounter: ['count>10']
  }
}

let myCounter = new Counter('myCounter')

export default function () {
  const resp = http.get('https://quickpizza.grafana.com/test.k6.io')
  myCounter.add(1)
  sleep(2)
}