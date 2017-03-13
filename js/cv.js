var cv = {
  "basics": {
    "name": "Eric Gossett",
    "label": "Graduate Student",
    "picture": "",
    "email": "ericmgossett@gmail.com",
    "phone": "(203) 907-6010",
    "website": "http://ericgossett.com",
    "summary": "Sint accumsan officiis est ex. Viderer accusamus sadipscing nec te, in nec ubique ocurreret suscipiantur. Vim solet alienum patrioque te. Amet primis mediocritatem pri ne. Ad cibo clita pertinax qui, sonet essent ea eum. Ex qui audire noluisse, ad aliquip consequuntur quo, ex has graeci noster volumus.",
    "location": {
      "address": "4225 Larchmont Rd. Apt. 734",
      "postalCode": "NC 27707",
      "city": "Durham",
      "countryCode": "US",
      "region": "North Carolina"
    },
    "profiles": [
      {
      "network": "Twitter",
      "username": "__egoss__",
      "url": "http://twitter.com/__egoss__"
      },
      {
      "network": "GitHub",
      "username": "ericgossett",
      "url": "http://github.com/ericgossett"
      }
    ]
  },
  "work": [{
    "company": "Company",
    "position": "President",
    "website": "http://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description...",
    "highlights": [
      "Started the company"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [
    {
      "institution": "Duke University",
      "area": "Computational Materials Science",
      "studyType": "PhD",
      "startDate": "2015-09-01",
      "endDate": "Present",
      "gpa": "3.9X",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    },
    {
      "institution": "Southern Connecticut State University",
      "area": "Physics",
      "studyType": "Bachelor",
      "startDate": "2010-09-01",
      "endDate": "2014-12-19",
      "gpa": "3.8X",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }
  ],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "website": "http://publication.com",
    "summary": "Description..."
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  }],
  "languages": [{
    "name": "English",
    "level": "Native speaker"
  }],
  "interests": [{
    "name": "Music",
    "keywords": [
      "Guitar",
      "Keyboard"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference..."
  }]
};


var app = new Vue({
  el: '#cv',
  data: cv,
})
