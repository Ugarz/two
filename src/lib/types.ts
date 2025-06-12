export interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
  created_at: string
  pushed_at: string
  updated_at: string
  topics: string[]
  homepage: string | null
  clone_url: string
}