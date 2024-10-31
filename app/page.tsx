import { Github, Linkedin, Twitter } from "lucide-react"
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Aleksandar Ilic</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Full-stack developer passionate about creating elegant solutions to complex problems. When I'm not coding, you can find me boxing or experimenting with new recipes in the kitchen.
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {(["React", "Vue", "TypeScript", "Python", "Node.js", "Express.js", "Next.js"] as const).map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Connect with me</h2>
                <div className="flex space-x-4">
                  <SocialButton icon={<Github className="h-5 w-5" />} label="GitHub" href="https://github.com/" />
                  <SocialButton icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" href="https://www.linkedin.com/" />
                  <SocialButton icon={<Twitter className="h-5 w-5" />} label="Twitter" href="https://twitter.com" />
                </div>
              </div>
            </div>
            <div className="sm:flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Aleksandar Ilic"
                width={300}
                height={300}
                className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  )
}