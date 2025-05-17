import http from "k6/http"
import { sleep } from "k6"

export const options = {
  vus: 20,
  duration: '10s'
} 

export default function() {
  http.get('https://quickpizza.grafana.com/test.k6.io/')
  sleep(1)
}
/**
Total time = Latency
Show the number of requesters handled over a period of time = Throughput (check web page copacity)
Iterations = repeating multiple times action
SLO => Service-Level Objective

k6 covering: performance tests, Load tests, Stress tests, Spike tests 
Vertical system scaling is limited and cost more because we are adding additional RAM memory and have to use fasters CPU
Horsontal (Elastic) system scaling more usable and save money because using multiple servers (microcervices architecture).
Relatively easy to scale



 */
