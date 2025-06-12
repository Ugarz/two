import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function Header({ githubUsername, linkedinUsername }: {
  githubUsername: string;
  linkedinUsername: string;
}) {
  return (
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
          <Link target="_blank" href={`https://github.com/${githubUsername}`}>
            Github
          </Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4" />
          <Link
            target="_blank" href={`https://linkedin.com/in/${linkedinUsername}`}>
            LinkedIn
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}