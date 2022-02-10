import { ExternalLinkIcon } from '@heroicons/react/solid'
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
      <h2 className='text-xl py-2'>Some of my Github projects ({data.length})</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sortedProjects.map(project => (
          <div key={project.id} className="w-full text-black flex flex-col order-{project.updated_at}">
            <div className="rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center">
              <div className='w-2/6 h-full'>
                <img className='object-cover h-60 w-96 rounded-l-lg' alt="my github avatar" src={project.owner.avatar_url} />
              </div>
              <div className='w-4/6 h-full flex flex-col'>
                <header className='basis-1/4'>
                  <strong className='text-lg'>{project.name}</strong> <br />
                </header>
                <main className='basis-1/4'>
                  <span>{project.description}</span>
                </main>
                <footer className=''>
                  <div className='flex'>
                    <a className='w-auto rounded py-1 px-2 bg-teal-300' href={project.html_url} target="_blank">Go to project <ExternalLinkIcon className='h-5' /></a>
                  </div>
                  <div className='basis-1/2'>
                    <span className="">{project.language}</span>
                    <span className=""><StarIcon className='h-5' />{project.stargazers_count}</span>
                    <span>Last update in {new Date(project.updated_at).getFullYear()}</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
