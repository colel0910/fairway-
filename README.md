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

Course discovery searches a user-selected map area through the public Private.coffee Overpass service. Availability is not guaranteed; course lookup timed out in the development environment. Users can always add courses by name and optionally set coordinates or use the visible map center. Pars, tees, and green locations must be entered by the golfer. The map is not a surveyed course database.

GPS needs HTTPS and the golfer's browser permission. GPS accuracy varies, and physical on-course GPS was not verified during development. Shot distances are straight-line displacement between selected positions, not carry or ball-flight tracking. GPS stops when leaving the Play screen or hiding the app. Backups may contain coordinates from saved shots and green pins.

Swing videos stay on the device and are not uploaded. Multiplayer is local scoring on one phone. Stats omit unrecorded optional data. Scoring averages are not an official handicap index.

## Hosting

GitHub Pages serves the main branch at the repository root. No build process, API key, subscription, or paid backend is required.

## Checks

Run `node tests/core.test.cjs` for known geodesic distances, match play, incomplete holes, skins carryover, Stableford points, and stroke ranking. Browser checks covered the mobile layout, old-data compatibility, multiplayer scoring and full-round recap, stats, manual map pin yardages, shot measurement persistence, custom course saving, and backup export and merge.

## Map credits

Leaflet 1.9.4 (BSD-2-Clause); street map tiles and course data © OpenStreetMap contributors (ODbL). Course queries are served by Private.coffee Overpass. Satellite tiles © Esri, with Esri, Maxar, Earthstar Geographics, and the GIS User Community credited on-map. External services retain their own availability and terms.
