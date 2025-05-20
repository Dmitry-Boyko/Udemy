// lesson 30
import http from 'k6/http'
import { sleep } from 'k6'
import {Counter, Trend} from 'k6/metrics'

export const options = {
  vus: 5,
  duration: '5s',
  thresholds: {
    http_req_duration: ['p(95)<250'],
    myCounter: ['count>10'],
    response_time_news_page: [' p(95)<50', 'p(99)<200']
  }
}

let myCounter = new Counter('myCounter');

let newsPageResponseTrend = new Trend('response_time_news_page');


export default function () {
  let resp = http.get('https://quickpizza.grafana.com/test.k6.io');
  myCounter.add(1);
  sleep(1);

  resp = http.get('https://quickpizza.grafana.com/news.php');
  newsPageResponseTrend.add(resp.timings.duration);
  sleep(1);
}