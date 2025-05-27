import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const userCredentials = new SharedArray('users with credentials', function () {
    return papaparse.parse(open('./users.csv'), { header: true }).data;
});

export default function () {

    userCredentials.forEach((item) => console.log(item.username));

}

// using: https://www.papaparse.com/
// using: https://grafana.com/docs/k6/latest/examples/data-parameterization/#from-a-csv-file