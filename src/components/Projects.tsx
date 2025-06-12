import { Separator } from "@radix-ui/react-separator";
import { AlertCircleIcon, Star, User, Briefcase, Code } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Repository } from "@/lib/types";

type ProjectsProps = { error: string | null, loading: boolean, repositories: Repository[], handleRepoClick: (repo: Repository) => void }

export default function Projects({ error, loading, repositories, handleRepoClick }: ProjectsProps) {
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
            {repositories.map((repo: Repository) => (
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
              I&apos;m a passionate software engineer with expertise in web
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
  )
}