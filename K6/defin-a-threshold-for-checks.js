import http from "k6/http";
import { check } from 'k6'
import { sleep } from 'k6'
import exec, { scenario } from 'k6/execution'

export const options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    http_req_duration: ['p(90)<200'],
    http_req_duration: ['max<200'],
    http_req_failed: ['rate<0.01'],
    http_reqs: ['count>20'],
    http_reqs: ['rate>4'],
    vus: ['value>9'],
    checks: ['rate>=0.98']
  }
}

export default function () {
  const resp = http.get('https://quickpizza.grafana.com/test.k6.io/' + (exec.scenario.iterationInTest === 1 ? 'foo' : ""))
  console.log(exec.scenario.iterationInTest)
   check(resp, {
    'status is 200': (r) => r.status === 200,
    'page is startpage': (r) => r.body.includes('QuickPizza Legacy')
   })
   sleep(2)
}