// lesson 33
import http from 'k6/http';
import { sleep, group, check } from 'k6';
import { baseUrl } from './urls/urls.ts';

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<250'],
        'group_duration{group:::Main Page}':  ['p(95)<250'],
        'group_duration{group:::Main Page::Assets}':  ['p(95)<250']
    }
}

export default function () {

    group('Main page', function () {
        let res = http.get(baseUrl);
        check(res, { 'status is 200': (r) => r.status === 200 });
    
        group('Assets', function () {
            http.get('https://quickpizza.grafana.com/test.k6.io/static/css/site.css');
            http.get('https://quickpizza.grafana.com/test.k6.io/static/js/prisms.js');
        });
    });


    group('News page', function () {
        http.get(newsUrl);
    });

    sleep(1);
}

/**
 * 
 */



/** 
 To get detailed groups report use command with summary-mode flag set to full.
 Example: k6 run <file-name> --summary-mode=full
 to get what you see in the video recording, you need to set the flag to 'legacy'
 */ 