import http from "k6/http";
import { check } from 'k6'

export default function () {
  const resp = http.get('https://quickpizza.grafana.com/test.k6.io/')
   check(resp, {
    'status is 200': (r) => r.status === 200,
    'page is startpage': (r) => r.body.includes('QuickPizza Legacy')
   })
}

 
  

/**
 * █ TOTAL RESULTS

    checks_total.......................: 2       11.30751/s
    checks_succeeded...................: 100.00% 2 out of 2
    checks_failed......................: 0.00%   0 out of 2

    ✓ status is 200
    ✓ page is startpage

    HTTP
    http_req_duration.......................................................: avg=63.4ms   min=63.4ms   med=63.4ms   max=63.4ms   p(90)=63.4ms   p(95)=63.4ms
      { expected_response:true }............................................: avg=63.4ms   min=63.4ms   med=63.4ms   max=63.4ms   p(90)=63.4ms   p(95)=63.4ms
    http_req_failed.........................................................: 0.00%  0 out of 1
    http_reqs...............................................................: 1      5.653755/s

    EXECUTION
    iteration_duration......................................................: avg=176.87ms min=176.87ms med=176.87ms max=176.87ms p(90)=176.87ms p(95)=176.87ms
    iterations..............................................................: 1      5.653755/s

    NETWORK
    data_received...........................................................: 9.4 kB 53 kB/s
    data_sent...............................................................: 601 B  3.4 kB/s

 */