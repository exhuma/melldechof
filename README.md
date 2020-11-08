# melldechof

A web based presence/absence tracker for social gatherings. Social gatherings
can be club-meetings, orchestra-rehearsals, sports-trainings, e.t.c.

The application offers a overview of presences and absences for a given
gathering. It also provides a simple mobile UI to flag yourself as
present/absent.

Presences are *not* tracked automatically, they need to be marked manually for
privacy reasons.

## Intended Audience

The application is used by two groups of people:

* Staff Members

  They need to know who was present at which gathering. The information is
  provided as a summary view for each gathering.

* Members/Gathering Goers

  People visiting a gathering can optionally flag themselves as present or
  absent. Either before, during or after a gathering.

  They can also fill in additional information about themselves if necessary.

## Why

THe application was developed during the Covid-19 crisis in 2020, where it
became important to be able to tell who was present during a given gathering
for contact-tracing.

It was developed without strictly aiming for Covid-19 tracing. It can also be
helpful for any other presence-tracking for clubs.

## Design Decisions

* The application will *not* do any automatic track & tracing. In the first
  version this is neither needed nor wanted. Whether this makes it into a
  future version is still undecided/unknown. This removes most privacy
  questions from the get-go because everyone can add their own state manually.


## Technical Details

The application is written in JavaScript using VueJS. For persistent storage,
it requires the back-end at http://github.com/exhuma/melldechof-api.


# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
