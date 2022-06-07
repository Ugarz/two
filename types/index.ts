export type GithubRepos = {
  id: string,
  name: string,
  fullName: string,
  description: string,
  clone_url: string,
  forks: number,
  hompage: string,
  html_url: string,
  owner: string,
  stargazers_count: number,
  pushed_at: string,
  created_at: string,
  updated_at: string,
  language: string
}

export type User = {
  id: number
  name: string
}

export type Availability = {
  available: boolean;
}