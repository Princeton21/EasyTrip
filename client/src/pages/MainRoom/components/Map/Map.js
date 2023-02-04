import {
  config,
  // ...
} from "@maptiler/client";

// You must bring your own node-compatible fetch,
// unles you are using a version of Nodejs that already contains fetch (>=18)
import fetch from "node-fetch";

config.fetch = fetch;
