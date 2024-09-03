import GtfsRealtimeBindings from "gtfs-realtime-bindings";
import fetch from "node-fetch";

(async () => {
  try {
    const response = await fetch("http://data.trilliumtransit.com/gtfs/sfbayferry-ca-us/sfbayferry-ca-us.zip", {
      // headers: {
        // "x-api-key": "<redacted>",
        // replace with your GTFS-realtime source's auth token
        // e.g. x-api-key is the header value used for NY's MTA GTFS APIs
      // },
    });
    if (!response.ok) {
      const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
      error.response = response;
      throw error;
      process.exit(1);
    }
    const buffer = await response.arrayBuffer();
    const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );
    feed.entity.forEach((entity) => {
      if (entity.tripUpdate) {
        console.log(entity.tripUpdate);
      }
    });
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
})();


const shuttleSite = "https://www.alamedaca.gov/Departments/Planning-Building-and-Transportation/Transportation/Oakland-Alameda-Water-Shuttle";
const ferrySite = "";

getData(shuttleSite)
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
});

/**
 * FUNCTIONS
 */
doSomething();
function doSomething() {
  console.log("did something else");
}