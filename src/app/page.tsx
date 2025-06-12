'use client'

import { useState, useEffect } from 'react'
import {
  Github,
  ExternalLink,
  Star,
  Code,
  Calendar,
  User,
  Mail,
  Briefcase,
  AlertCircleIcon,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

// Types for GitHub API responses
interface Repository {
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

interface Language {
  [key: string]: number
}

export default function Portfolio() {
  const [repos, setRepos] = useState<Repository[]>([])
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
        const orderedData = data.sort(
          (previousRepo: Repository, nextRepo: Repository) =>
            new Date(nextRepo.updated_at).getTime() -
            new Date(previousRepo.updated_at).getTime()
        )
        setRepos(orderedData)
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

  // Job experience data
  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      start: '2021',
      end: 'Present',
    },
    {
      title: 'Software Developer',
      company: 'Digital Solutions Ltd.',
      start: '2018',
      end: '2021',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header Section */}
        <Card className="mb-12 border-none shadow-none bg-transparent">
          <CardHeader className="text-center space-y-2 pb-2">
            <CardTitle className="text-4xl md:text-5xl font-bold">
              Ugo Arzur
            </CardTitle>
            <CardDescription className="text-xl md:text-2xl">
              Software Engineer
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center space-x-4 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <Link target="_blank" href={`https://github.com/${username}`}>
                Profile
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Resume
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Button>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Tabs defaultValue="projects" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            {error && (
              <div className="w-full max-w-2/3 mx-auto mb-8">
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>Whoops</AlertTitle>
                  <AlertDescription>
                    <p>{error}</p>
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                    </CardHeader>
                    <CardContent className="pb-2">
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-24" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo: Repository) => (
                  <Card
                    key={repo.id}
                    className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-[220px] flex flex-col"
                    onClick={() => handleRepoClick(repo)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{repo.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {repo.description || 'No description available'}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2 flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-muted-foreground">
                          {repo.stargazers_count}
                        </span>
                      </div>
                      {repo.language && (
                        <Badge variant="secondary" className="font-normal">
                          {repo.language}
                        </Badge>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm a passionate software engineer with expertise in web
                  development, focusing on creating efficient and user-friendly
                  applications. My technical skills include JavaScript,
                  TypeScript, React, Next.js, and more.
                </p>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" /> Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((job, idx) => (
                      <div key={job.title + job.company}>
                        <div className="flex justify-between">
                          <h4 className="font-medium">{job.title}</h4>
                          <span className="text-muted-foreground text-sm">
                            {job.start} - {job.end}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{job.company}</p>
                        {idx !== experience.length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                    <Code className="h-5 w-5" /> Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'JavaScript',
                      'TypeScript',
                      'React',
                      'Next.js',
                      'Node.js',
                      'CSS',
                      'Tailwind',
                      'Git',
                      'CI/CD',
                    ].map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
