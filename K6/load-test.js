import http from "k6/http"
import { sleep } from "k6"

export const options = {
  stages: [
    {
      duration: '10s', // actual data 5m
      target: 10 //total users - actual data 100
    },
    {
      duration: '30s', // actual data: 30m
      target: 10 //total users - actual data 100
    },
    {
      duration: '10s',  // actual data 5m
      target: 0 //total users going down to 0
    }
  ]
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
   █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=68.35ms min=31.62ms med=58.41ms max=329.4ms p(90)=101.72ms p(95)=108.61ms
      { expected_response:true }............................................: avg=68.35ms min=31.62ms med=58.41ms max=329.4ms p(90)=101.72ms p(95)=108.61ms
    http_req_failed.........................................................: 0.00%  0 out of 246
    http_reqs...............................................................: 246    4.562893/s

    EXECUTION
    iteration_duration......................................................: avg=5.22s   min=5.12s   med=5.19s   max=5.52s   p(90)=5.32s    p(95)=5.44s
    iterations..............................................................: 82     1.520964/s
    vus.....................................................................: 1      min=1        max=10
    vus_max.................................................................: 10     min=10       max=10

    NETWORK
    data_received...........................................................: 718 kB 13 kB/s
    data_sent...............................................................: 55 kB  1.0 kB/s
 */