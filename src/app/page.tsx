'use client'

import { useState, useEffect } from 'react'
import {
  Github,
  ExternalLink,
  Star,
  Code,
  Calendar,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

import Header from '@/components/Header'
import { Repository } from '@/lib/types'
import Projects from '@/components/Projects'


interface Language {
  [key: string]: number
}

export default function Portfolio() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [repoLanguages, setRepoLanguages] = useState<Language>({})
  const [modalOpen, setModalOpen] = useState(false)

  // Replace with your GitHub username
  const username = 'ugarz'

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
        )

        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }

        const data: Repository[] = await response.json()
        console.log('Fetched repositories:', data)
        const orderedData: Repository[] = data.sort(
          (previousRepo: Repository, nextRepo: Repository) =>
            new Date(nextRepo.updated_at).getTime() -
            new Date(previousRepo.updated_at).getTime()
        )
        setRepositories(orderedData)
      } catch (err) {
        setError(
          'Error fetching repositories. Please check your GitHub username.'
        )
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  const handleRepoClick = async (repo: Repository) => {
    setSelectedRepo(repo)
    setModalOpen(true)

    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/languages`
      )
      if (response.ok) {
        const languages = await response.json()
        setRepoLanguages(languages)
      }
    } catch (err) {
      console.error('Error fetching languages:', err)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Header githubUsername={username} linkedinUsername={username} />
        <Projects error={error} loading={loading} handleRepoClick={handleRepoClick} repositories={repositories} />

        {/* Project Details Modal */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-lg">
            {selectedRepo && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">
                    {selectedRepo.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-muted-foreground mb-6">
                    {selectedRepo.description || 'No description available'}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm">
                        {selectedRepo.stargazers_count} stars
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">
                        Updated {formatDate(selectedRepo.pushed_at)}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="text-sm font-medium mb-2 flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Languages
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(repoLanguages).length > 0 ? (
                        Object.keys(repoLanguages).map((lang) => (
                          <Badge key={lang} variant="secondary">
                            {lang}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          No language data available
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedRepo.topics && selectedRepo.topics.length > 0 && (
                    <div className="mb-6">
                      <h5 className="text-sm font-medium mb-2">Topics</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedRepo.topics.map((topic) => (
                          <Badge key={topic} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end space-x-2 mt-6">
                    {selectedRepo.homepage && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            selectedRepo.homepage || 'no name',
                            '_blank'
                          )
                        }
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </Button>
                    )}
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(selectedRepo.html_url, '_blank')
                      }
                      className="flex items-center gap-1"
                    >
                      <Github className="h-3 w-3" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
