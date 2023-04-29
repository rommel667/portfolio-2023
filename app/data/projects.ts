export interface ILink {
  name: string;
  link: string;
}

interface IProject {
  id: number;
  title: string;
  description: string;
  images: string[];
  stacks: string[];
  github: ILink[];
  website?: ILink;
}

export const projects: IProject[] = [
  {
    title: 'Collab&Create',
    description:
      'A project management tool for a team. Assign task to members and track project progress. Updating task status made easy with drag and drop feature. Live update on members dashboard upon any change of project status. Also include note-taking feature shared on all project members.',
    images: ['/images/collab-and-create.png'],
    stacks: [
      'ReactJS',
      'NodeJS',
      'Redux',
      'MongoDB',
      'GraphQL',
      'Apollo',
      'TailwindCSS',
      'Docker',
      'AWS_EC2',
      'Firebase',
    ],
    github: [
      {
        name: 'Server Code',
        link: 'https://github.com/rommel667/collab_and_create_server',
      },
      {
        name: 'Client Code',
        link: 'https://github.com/rommel667/collab_and_create_client',
      },
    ],
    website: {
      name: 'Collab&Create',
      link: 'https://collab-and-create.web.app/',
    },
    id: 0,
  },
  {
    title: 'InstaLearn Reviewer for Web',
    description:
      'An online reviewer for aspiring engineers. Test your knowledge by either taking a pop quiz or a mock exam. Result for each test is saved on database to track students performance and show which subject/s need improvement. Also features a leaderboard for top performers, a chat and a real-time update of new top students.',
    images: ['/images/instalearn-web.png'],
    stacks: [
      'ReactJS',
      'NodeJS',
      'Redux',
      'MongoDB',
      'GraphQL',
      'Apollo',
      'MaterialUI',
      'Firebase',
    ],
    github: [
      {
        name: 'Server Code',
        link: 'https://github.com/rommel667/collab_and_create_server',
      },
      {
        name: 'Client Code',
        link: 'https://github.com/rommel667/collab_and_create_client',
      },
    ],
    website: {
      name: 'InstaLearn',
      link: 'https://insta-learn.web.app',
    },
    id: 1,
  },
  {
    title: 'InstaLearn Reviewer for Mobile',
    description:
      'An engineering reviewer for mobile users, data is in sync with the web application so the user can log from phone or from a computer.',
    images: [
      '/images/instalearn-mobile.png',
      '/images/instalearn-mobile-1.png',
      '/images/instalearn-mobile-2.png',
      '/images/instalearn-mobile-3.png',
    ],
    stacks: ['ReactNative', 'MongoDB', 'Redux', 'GraphQL', 'Apollo'],
    github: [
      {
        name: 'Server Code ',
        link: 'https://github.com/rommel667/collab_and_create_server',
      },
      {
        name: 'Client Code',
        link: 'https://github.com/rommel667/collab_and_create_client',
      },
    ],
    id: 2,
  },
  {
    title: 'Movie Watchlist',
    description:
      'Check out upcoming, latest and most rated movies. Save favorite movies on your watchlist.',
    images: ['/images/movie-watchlist.png'],
    stacks: ['ReactJS', 'Bootstrap', 'Redux', 'ReactRouterDom'],
    github: [
      {
        name: 'Client Code',
        link: 'https://github.com/rommel667/collab_and_create_client',
      },
    ],
    website: {
      name: 'Movie Watchlist',
      link: 'https://my-movie-watchlist.web.app/',
    },
    id: 3,
  },
];
