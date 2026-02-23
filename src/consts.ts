import type { Metadata, Site, Socials } from '@types'

export const SITE: Site = {
  TITLE: 'Commit.D',
  DESCRIPTION: 'a blog about stuff I found interesting',
  EMAIL: 'fill-in-later@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
}

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Astro Micro is an accessible theme for Astro.',
}

export const POSTS: Metadata = {
  TITLE: 'Posts',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const PROJECTS: Metadata = {
  TITLE: 'Projects',
  DESCRIPTION: 'A collection of my projects with links to repositories and live demos.',
}

export const SOCIALS: Socials = [
  {
    NAME: 'GitHub',
    HREF: 'https://github.com/sudhir4ev',
  },
  {
    NAME: 'LinkedIn',
    HREF: 'https://www.linkedin.com/in/sudhir-meher/',
  },
]
