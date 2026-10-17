
export type ProjectCategory =
  | 'Backend'
  | 'AI'
  | 'Gaming'
  | 'Systems'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  stack: string[]
  highlights: string[]
  status: 'Completed' | 'In Progress' | 'Concept'
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'virtual-architect-ai',
    title: 'Virtual Architect AI',
    category: 'AI',
    description:
      'An AI-powered spatial analysis application combining computer vision, OCR, LLM integration, and an interactive React frontend.',
    stack: [
      'Python',
      'FastAPI',
      'React',
      'Tailwind CSS',
      'OpenCV',
      'Pytesseract',
    ],
    highlights: [
      'Analyze spatial layouts using computer vision',
      'Integrate OCR and language model workflows',
      'Connect frontend interactions to backend APIs',
    ],
    status: 'Completed',
    github: 'https://github.com/rajatrajat0210/Virtual-ArchitectAI',
  },
  {
    id: 'game-backend',
    title: 'Game Backend Platform',
    category: 'Backend',
    description:
      'A Spring Boot backend for managing players, scores, progression, and scheduled game events using PostgreSQL.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    highlights: [
      'Model player and progression data',
      'Design APIs for scores and player management',
      'Handle scheduled game events',
    ],
    status: 'Completed',
    github: 'https://github.com/rajatrajat0210/game-backend',
  },
  {
    id: 'cloud-native-voting',
    title: 'Cloud-Native Voting App',
    category: 'Systems',
    description:
      'A voting application demonstrating a Go-based API, MongoDB persistence, Docker containers, and Kubernetes deployment.',
    stack: ['Go', 'MongoDB', 'Docker', 'Kubernetes'],
    highlights: [
      'Connect an API to persistent storage',
      'Package application components into containers',
      'Explore Kubernetes deployment architecture',
    ],
    status: 'Completed',
    github: 'https://github.com/rajatrajat0210/Cloud-Native-Voting-app',
  },
]
