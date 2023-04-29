interface ITech {
  title: string;
  stacks: string[];
}

export const technologies: ITech[] = [
  {
    title: 'FrontEnd',
    stacks: [
      'HTML',
      'CSS',
      'Javascript',
      'ReactJS',
      'Redux',
      'MaterialUI',
      'TailwindCSS',
      'Bootstrap',
    ],
  },
  {
    title: 'BackEnd',
    stacks: [
      'NodeJS',
      'GraphQL',
      'Apollo',
      'MongoDB',
      'Firebase',
      'AWS_EC2',
      'Heroku',
      'Docker',
    ],
  },
  {
    title: 'Other Tools',
    stacks: ['VSCode', 'GitHub', 'GraphQLPlayground', 'ChromeDevTools'],
  },
];
