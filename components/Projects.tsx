import { StarIcon } from '@heroicons/react/solid'
import useSWR from 'swr'

import { GithubRepos } from '../types/index'

const fetcher = (endpoint: string) => fetch(endpoint).then((res) => res.json());
// const fetcher = (...args: any) => fetch(...args: any).then((res) => res.json())

export default function Projects() {
  const { data, error } = useSWR('https://api.github.com/users/Ugarz/repos', fetcher)

  if (error) return <div>Oopsie, Failed to load</div>
  if (!data) return <div>Loading...</div>

  const currentDate = new Date()
  const limitDate = currentDate.getFullYear() - 2;

  // Filter for the most up to date repositories from Github
  const filteredRepos = data.filter((repo: GithubRepos) => new Date(repo.updated_at).getFullYear() >= limitDate)
  const sortedProjects = filteredRepos.sort((a: GithubRepos, b: GithubRepos) => a.updated_at > b.updated_at)
  console.log("sorted", filteredRepos)


  return (
    <div>
      <h2 className='md:text-lg my-8'>Some of my projects since {limitDate}</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map((project: GithubRepos) => (
          <div key={project.id} className="flex flex-col drop-shadow-lg">
            <a href={project.html_url} target="_blank" rel="noreferrer">
              <div className="transition duration-100 flex flex-col p-2 md:rounded-lg bg-slate-900 hover:bg-slate-700 text-white">
                <h3 className='text-xl font-share'><strong>{project.name}</strong></h3>
                <span className='italic text-sm my-8'>{project.description}</span>
                <div className='flex flex-row items-baseline text-xs h-5'>
                  <div className="flex-1 inline-flex items-baseline"><strong className='flex-1'>{project.language}</strong></div>
                  <div className="flex-1 inline-flex items-baseline">
                    <div className='flex flex-row flex-1 justify-center'>
                      <StarIcon className='max-h-5' /><strong>{project.stargazers_count}</strong>
                    </div>
                  </div>
                  <div className="flex-1 inline-flex items-baseline">Updated in {new Date(project.updated_at).getFullYear()}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
