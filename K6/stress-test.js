import http from "k6/http"
import { sleep } from "k6"

export const options = {
  stages: [
    {
      duration: '10s', // actual data 5m
      target: 1000 //total users - actual data (Hight load - upper average) !!! // increace number slow
    },
    {
      duration: '30s', // actual data: 30m
      target: 1000 //total users - actual data (Hight load - upper average) !!!
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
 * Stress testing assesses how the application performs when 
 * loads are heavier than usual, often using increased virtual 
 * users (VUs) and mimicking real-world rush-hour or surge situations.
 * 
 *   █ TOTAL RESULTS

    HTTP
    http_req_duration.......................................................: avg=41.61ms min=27.29ms med=40.11ms max=564.84ms p(90)=48.71ms p(95)=55.28ms
      { expected_response:true }............................................: avg=41.61ms min=27.29ms med=40.11ms max=564.84ms p(90)=48.71ms p(95)=55.28ms
    http_req_failed.........................................................: 0.00%  0 out of 24855
    http_reqs...............................................................: 24855  465.226792/s

    EXECUTION
    iteration_duration......................................................: avg=5.14s   min=5.09s   med=5.12s   max=9.38s    p(90)=5.2s    p(95)=5.28s
    iterations..............................................................: 8285   155.075597/s
    vus.....................................................................: 43     min=43         max=1000
    vus_max.................................................................: 1000   min=1000       max=1000

    NETWORK
    data_received...........................................................: 73 MB  1.4 MB/s
    data_sent...............................................................: 5.6 MB 105 kB/s
 */