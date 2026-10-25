# Fairway Golf

An independent, mobile-first golf companion with an 18Birdies-inspired workflow and Fairway's own branding. Not affiliated with 18Birdies.

## Features

- Home, Courses, Play, Stats, and More navigation.
- 9- and 18-hole rounds with up to four golfers on one device.
- Gross stroke play, two-player match play, gross Stableford, and points-only skins with carried ties.
- Satellite and street maps, user-placed front/center/back green pins, target measurement, optional browser GPS, and club suggestions from saved carry distances.
- Start/finish shot measurement, per-hole notes, and quick score entry with putts, fairways, greens, chips, sand shots, and penalties.
- Round recaps, scorecards, scoring trends, performance stats, seven practice games, a golf journal, and local slow-motion swing replay.
- Export and merge validated JSON backups. Offline application shell after a successful online visit; maps and course discovery require internet.

## Data and limitations

All personal data is saved in browser local storage on the current device. No cross-device accounts, cloud sync, social network, AI swing analysis, official handicap service, or proprietary course database is included. Existing Fairway rounds, practice scores, and clubs are retained.

The Courses screen includes a bundled OpenGolfAPI snapshot with 15,667 U.S. course entries (408 in New Jersey), name/city search, state filtering, pagination, saved favorites, and course profiles. The database is distributed as `data/courses.json.gz` under ODbL-1.0 with attribution and download links in the app. Modern browser gzip decompression is required. The app caches its compact directory with the offline shell.

Available per-hole pars load from the bundled snapshot. Live OpenGolfAPI detail requests supplement course profiles with tee sets, ratings, slopes, and per-tee yardages when available; responses are cached for seven days. A verified Ramblewood White/Blue detail snapshot is bundled as a resilient example. Missing hole pars are marked for review rather than presented as verified data. Green positions are not fabricated and still require manual placement where unavailable. The directory collapses exact name/city/state duplicates and prefers the entry with the most known pars. The source also contains older details and incomplete cards; confirm course details before playing.

The map explorer also filters the built-in directory within the visible map bounds, avoiding dependency on the public Overpass lookup during normal use. Existing custom courses remain available.

GPS needs HTTPS and the golfer's browser permission. GPS accuracy varies, and physical on-course GPS was not verified during development. Shot distances are straight-line displacement between selected positions, not carry or ball-flight tracking. GPS stops when leaving the Play screen or hiding the app. Backups may contain coordinates from saved shots and green pins.

Swing videos stay on the device and are not uploaded. Multiplayer is local scoring on one phone. Stats omit unrecorded optional data. Scoring averages are not an official handicap index.

## Hosting

GitHub Pages serves the main branch at the repository root. No build process, API key, subscription, or paid backend is required.

## Checks

Run `node tests/core.test.cjs` for known geodesic distances, match play, incomplete holes, skins carryover, Stableford points, and stroke ranking. Browser checks covered the mobile layout, old-data compatibility, multiplayer scoring and full-round recap, stats, manual map pin yardages, shot measurement persistence, custom course saving, and backup export and merge.

## Map credits

Leaflet 1.9.4 (BSD-2-Clause); street map tiles and course data © OpenStreetMap contributors (ODbL). Course queries are served by Private.coffee Overpass. Satellite tiles © Esri, with Esri, Maxar, Earthstar Geographics, and the GIS User Community credited on-map. External services retain their own availability and terms.


## Real course checks

Directory archive SHA256 was verified against the publisher checksum. The bundle has 15,667 unique source IDs and valid coordinates; missing pars remain null. Browser checks cover state/name filtering, a real Ramblewood profile, tee selection, saved favorites, and an 18-hole scorecard populated with par 72 and White tee yardages totaling 6,188 yards.

### Tee and green pins
Play → Find tee & green pins loads available course coordinates and a small OpenStreetMap extract. Blue outlines mark tee boxes; lime outlines mark greens. Unique numbered hole lines provide approximate start/green endpoints, not a surveyed tee color or today’s cup position. Missing or ambiguous hole numbers are left unassigned. Select Tee box / Center / Front / Back and tap to save a correction for this course, tee and hole. Corrections override imports in future rounds on this device. Fit hole frames the current pins. Distances use the marked tee until a ball position or GPS fix is available. Coverage varies. Mapping uses OpenStreetMap (ODbL), cached seven days. Corrections are local and are not separately included in backup exports; pins already in rounds are included.

### Round tools
Map hazard mode stores bunker, water, trees, out-of-bounds or other pins per hole and shows distance from the current ball or marked tee. Weather uses the course public coordinates and Open-Meteo forecast (temperature, feels-like, wind and precipitation); it does not request device GPS. Hole strategy notes stay with that round. Course notes are saved locally by course and appear in later visits. Round challenges track pars, birdies, fairways or avoiding doubles against your goal. Completed recaps compare with the five latest same-course, same-tee-length rounds. Share round exports a compact SVG scorecard image on devices supporting file share, or downloads it. Shot tracker history is listed per hole and remains in the recap. These features use browser storage and stay on this device.
