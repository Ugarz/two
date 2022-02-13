import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Projects() {
  const { data, error } = useSWR('https://api.github.com/users/Ugarz/repos', fetcher)
  if (error) return <div>Oopsie, Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data[0].updated_at)
  const sortedProjects = data.sort((a, b) => a.updated_at - b.updated_at)
  console.log("sorted", sortedProjects)


  return (
    <div className='container mx-auto'>
      <h2 className='text-xl my-8'>Some of my Github projects ({data.length})</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map(project => (
          <div key={project.id} className="flex flex-col drop-shadow-lg">
            <a href={project.html_url} target="_blank">
              <div className="flex flex-col p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white">
                <h3 className='block text-lg'><strong>{project.name}</strong></h3>
                <span className='block italic text-sm my-8'>{project.description}</span>
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
