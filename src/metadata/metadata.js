module.exports = {
  name: 'Eric Smekens',
  title: 'Software Engineer',
  facts: {
    'Residence': '<a href="https://www.google.nl/maps/place/Dorst/"><i class="fa fa-home fact-icon"></i>Dorst</a>',
    'LinkedIn': `<a href="https://www.linkedin.com/in/eric-smekens-b587b968/"><i class="fa-brands fa-linkedin fact-icon"></i>Eric Smekens</a>`,
    'GitHub': `<a href="https://github.com/EricSmekens"><i class="fa-brands fa-github fact-icon"></i>EricSmekens</a>`,
    'Email': '<a href="mailto:ericsmekens@msn.com"><i class="fa fa-envelope fact-icon"></i>ericsmekens@msn.com</a>'
  },
  skills: [
    ['C#', 100],
    ['SQL', 100],
    ['RabbitMQ', 75],
    ['Node.js', 75],
    ['Kubernetes', 75],
    ['Angular', 50]
  ],
  positions: [
    {
      title: 'Lead Developer at CM.com',
      period: '2016 - 2023',
      skills: ['C#', 'SQL', 'RabbitMQ', 'Angular'],
      contents: `
Working in the Messaging team within CM.com as Lead Developer. Biggest challenge here is: Complex domain knowledge combined with scale.

Working on several exciting projects: WhatsApp, SMS, Operator Determination, Prices and Smart Message Routing.
Using C# (.NET Framework/netcore) daily together with MS SQL, thinking about how we will process, store route millions of messages a day. 
Writing frontends (Angular/React/Vue.js) to provide internal tooling for the organisation, and using Kubernetes and helm to host hundreds of containers.

Also guiding several other colleagues to grow their personal skills as well, and also communicating and aligning with several big partners as well. (Meta, Vodafone, etc.)

Lead Developer (6B) 01-09-2022 -->

Lead Developer (6A) 01-09-2021 <-> 01-09-2022

Sr. Developer (level 5B) - 01-09-2019 <-> 31-08-2021

Sr. Developer (level 5A) - 01-09-2018 <-> 31-08-2019

Developer (level 4A) - 01-01-2017 <-> 31-08-2018

Jr. Developer (level 3A) - 01-09-2016 <-> 31-12-2016

`
    },
    {
      title: 'Software Engineer at Krohne Oil & Gas',
      period: '2013 – 2016',
      skills: ['C#', 'Node.js', 'JavaScript'],
      contents: `
Development of HMI software for oil and gas projects.
Working with a small team, on a WPF application that allowed colleagues in the project department to design Oil/Gas/Water systems.
The resulting design, would then be translated to a Node.js/C# backend with a Knockout.js frontend, where the customers would then be able to monitor and control pipelines etc.
`
    },
    {
      title: 'Graduation Internship',
      period: '2013',
      skills: ['C++', 'Node.js', 'JavaScript'],
      contents: `
Implemented the Webinos Vehicle API based on OBD-II.
And created two Node.js packages for communicating with the OBD protocol. 
`
    }
  ],
  experience: [
    {
      header: 'JSEP',
      skills: ['JavaScript', 'Node.js'],
      contents: `
Used this as a dependency in my first job. Spent some free time on it, to learn more and try to extend it. 
Eventually became a collaborator, and now the maintainer of the package. Thanks to the original author as well for the great work.
`
    },
    {
      header: 'OBD',
      skills: ['C++', 'Node.js'],
      contents: `
Part of my graduation internship. It perfectly describes the way how I like to work. 
Learning obd and node.js at the same time, and making something that is shareable to the rest of the community. 
It is definitely not the best package out there, but it is still a place of shareable information.
`
    }
  ]
};
