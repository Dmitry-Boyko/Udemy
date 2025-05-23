//lesson 45

import http from "k6/http"
import { urlApiGet } from "./urls/urls"

export default function () {
  const res = http.get(urlApiGet)
}

/**
 * to see good api response use: <k6 run --http-debug="full" debugging-http-json.js> command
 */