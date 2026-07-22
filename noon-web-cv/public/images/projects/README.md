# Project images

Each item in `src/data/portfolioProjects.json` has an `images` array. Put project assets under `public/images/projects/<project-name>/`, then add entries like:

```json
{"src":"/images/projects/reelcast/dashboard.png","alt":"ReelCast dashboard","caption":"Optional caption"}
```

The first image is the project cover; every image is shown as a selectable thumbnail in the detail page.
