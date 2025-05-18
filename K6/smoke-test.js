import http from "k6/http"
import { sleep } from "k6"

export const options = {
  vus: 1,
  duration: '30s'
} 

export default function() {
  http.get('https://quickpizza.grafana.com/test.k6.io/')
  sleep(1)
  http.get('https://quickpizza.grafana.com/contacts.php')
  sleep(2)
  http.get('https://quickpizza.grafana.com/news.php')
  sleep(2)
}

/**
 * 
 * Smoke test: 
    For the smoke test k6 using 1 to 3 virtual user (1 vu) amd one server (Minimal load) to establish baseline performance values.
    As a result we can see 'Baseline value'

    In the context of a smoke test using k6, how should throughput and duration typically be configured? =>
      Low throughput, brief duration.


 *   █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=67.84ms min=36.51ms med=67.93ms max=112.84ms p(90)=104.22ms p(95)=106.91ms
      { expected_response:true }............................................: avg=67.84ms min=36.51ms med=67.93ms max=112.84ms p(90)=104.22ms p(95)=106.91ms
    http_req_failed.........................................................: 0.00%  0 out of 18
    http_reqs...............................................................: 18     0.571852/s

    EXECUTION
    iteration_duration......................................................: avg=5.24s   min=5.18s   med=5.18s   max=5.53s    p(90)=5.36s    p(95)=5.44s
    iterations..............................................................: 6      0.190617/s
    vus.....................................................................: 1      min=1       max=1
    vus_max.................................................................: 1      min=1       max=1

    NETWORK
    data_received...........................................................: 54 kB  1.7 kB/s
    data_sent...............................................................: 4.3 kB 137 B/s
 */