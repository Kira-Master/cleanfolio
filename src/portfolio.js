const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://fauzinurrokhim.my.id',
  title: 'FAUZI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fauzi Nurrokhim',
  role: 'Front End Engineer',
  description:
    'Just someone who loves the world of coding.',
  resume: 'https://fauzinurrokhim.my.id/cv.pdf',
  social: {
    linkedin: 'https://linkedin.com/fauzinurrokhim',
    github: 'https://github.com/Kira-Master',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BOT Whatsapp Multi Function',
    description:
      'Creating a Multi-Function WhatsApp BOT,using Librady Baileys',
    stack: 'NodeJS',
    sourceCode: 'https://github.com/Kira-Master/WhatsappBot-Zexxa',
    livePreview: 'https://github.com/Kira-Master/WhatsappBot-Zexxa',
  },
  {
    name: 'Restful-API Website',
    description:
      'Creating a Restful-API website to fulfill the features and needs of my Whatsapp BOT',
    stack: ['ExpressJS', 'NodeJS'],
    sourceCode: 'https://github.com/Kira-Master/MyFirstExpress',
    livePreview: 'https://web.fauzinurrokhim.my.id/',
  },
  {
    name: 'Personal Portfolio',
    description:
      'Create a personal portfolio using ReactJS',
    stack: ['SASS', 'React'],
    sourceCode: 'https://github.com/Kira-Master',
    livePreview: '/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Material UI',
  'Git',
  'MS Office',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fauzinurokhim1@gmail.com',
}

export { header, about, projects, skills, contact }
