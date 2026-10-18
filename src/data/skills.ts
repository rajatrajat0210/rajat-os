export type SkillCategory =
  | 'Languages'
  | 'Backend & APIs'
  | 'Data'
  | 'Cloud & DevOps'
  | 'AI & Automation'
  | 'Testing & Tools'
  | 'Engineering'

export type Skill = {
  name: string
  mark: string
  category: SkillCategory
  context: string
}

export const skills: Skill[] = [
  { name: 'Java 8', mark: 'J8', category: 'Languages', context: 'Production backend services and gameplay APIs.' },
  { name: 'Python', mark: 'Py', category: 'Languages', context: 'Automation tooling, internal assistants, and API work.' },
  { name: 'JavaScript', mark: 'JS', category: 'Languages', context: 'Interactive web interfaces and frontend projects.' },
  { name: 'SQL', mark: 'SQL', category: 'Languages', context: 'Database queries, data analysis, and query optimization.' },
  { name: 'C#', mark: 'C#', category: 'Languages', context: 'Unity gameplay logic and feature implementation.' },
  { name: 'C / C++', mark: 'C++', category: 'Languages', context: 'Included in the programming languages toolkit.' },
  { name: 'Bash', mark: '>_', category: 'Languages', context: 'Linux environments and automation workflows.' },

  { name: 'Spring Boot', mark: 'SB', category: 'Backend & APIs', context: 'Scalable services for live game systems.' },
  { name: 'Flask', mark: 'Fl', category: 'Backend & APIs', context: 'Python web framework in the backend toolkit.' },
  { name: 'FastAPI', mark: 'FA', category: 'Backend & APIs', context: 'Backend APIs for the Virtual Architect AI project.' },
  { name: 'REST APIs', mark: 'API', category: 'Backend & APIs', context: 'Client-server features and service integrations.' },
  { name: 'Apache Kafka', mark: 'K', category: 'Backend & APIs', context: 'Producers, consumers, topics, partitions, and consumer groups.' },
  { name: 'JPA / Hibernate', mark: 'JPA', category: 'Backend & APIs', context: 'Relational persistence for end-to-end game features.' },
  { name: 'Protocol Buffers', mark: 'PB', category: 'Backend & APIs', context: 'Structured payloads, persistence data, and settings.' },

  { name: 'PostgreSQL', mark: 'PG', category: 'Data', context: 'Persistent data for scalable backend services.' },
  { name: 'MySQL', mark: 'My', category: 'Data', context: 'Database in the VProfile multi-tier deployment project.' },
  { name: 'MongoDB', mark: 'Mg', category: 'Data', context: 'Document database included in the technical toolkit.' },
  { name: 'Redis', mark: 'Re', category: 'Data', context: 'In-memory caching to reduce database calls.' },
  { name: 'Guava', mark: 'G', category: 'Data', context: 'Java ecosystem library included in the technical toolkit.' },

  { name: 'AWS', mark: 'AWS', category: 'Cloud & DevOps', context: 'EC2, S3, RDS, and Route 53.' },
  { name: 'Docker', mark: 'Dk', category: 'Cloud & DevOps', context: 'Containerized multi-tier application deployments.' },
  { name: 'Kubernetes', mark: 'K8s', category: 'Cloud & DevOps', context: 'Container orchestration and cloud-native deployments.' },
  { name: 'Terraform', mark: 'Tf', category: 'Cloud & DevOps', context: 'Infrastructure provisioning as code.' },
  { name: 'Ansible', mark: 'An', category: 'Cloud & DevOps', context: 'Automated infrastructure and environment setup.' },
  { name: 'Jenkins', mark: 'Jk', category: 'Cloud & DevOps', context: 'CI/CD pipeline health and deployment workflows.' },
  { name: 'CI/CD', mark: 'CI', category: 'Cloud & DevOps', context: 'Build, deployment, and pipeline monitoring.' },
  { name: 'Linux / Ubuntu', mark: 'LX', category: 'Cloud & DevOps', context: 'Development and infrastructure environments.' },

  { name: 'LLMs', mark: 'LLM', category: 'AI & Automation', context: 'AI-powered assistants and application workflows.' },
  { name: 'LangChain', mark: 'LC', category: 'AI & Automation', context: 'Used in the Virtual Architect AI application.' },
  { name: 'FastMCP', mark: 'FM', category: 'AI & Automation', context: 'Internal automation and assistant tooling.' },
  { name: 'MCP', mark: 'MCP', category: 'AI & Automation', context: 'Model Context Protocol tools and workflows.' },
  { name: 'Claude API', mark: 'CA', category: 'AI & Automation', context: 'LLM integration in the automation toolkit.' },
  { name: 'GitHub Copilot', mark: 'GH', category: 'AI & Automation', context: 'AI-assisted development tool.' },
  { name: 'Python Automation', mark: 'Py+', category: 'AI & Automation', context: 'Automation that reduced manual QA effort by 35%.' },

  { name: 'Git / GitHub', mark: 'Git', category: 'Testing & Tools', context: 'Version control, collaboration, and code reviews.' },
  { name: 'Postman', mark: 'Pm', category: 'Testing & Tools', context: 'REST API testing and validation.' },
  { name: 'SoapUI', mark: 'SUI', category: 'Testing & Tools', context: 'Web service testing and reliability checks.' },
  { name: 'HP ALM', mark: 'ALM', category: 'Testing & Tools', context: 'Executed 500+ smoke, performance, and regression scripts.' },
  { name: 'Splunk', mark: 'Sp', category: 'Testing & Tools', context: 'Production monitoring and troubleshooting.' },

  { name: 'System Design', mark: 'SD', category: 'Engineering', context: 'Architecture for scalable backend systems.' },
  { name: 'Distributed Systems', mark: 'DS', category: 'Engineering', context: 'Reliable services operating across multiple server nodes.' },
  { name: 'Data Structures & Algorithms', mark: 'DSA', category: 'Engineering', context: 'Core computer engineering foundation.' },
  { name: 'SOLID Principles', mark: 'SOLID', category: 'Engineering', context: 'Design principles applied to maintainable software.' },
  { name: 'Design Patterns', mark: 'DP', category: 'Engineering', context: 'Reusable approaches to common software design problems.' },
  { name: 'Agile / SDLC', mark: 'Agile', category: 'Engineering', context: 'Collaborative delivery and software lifecycle practices.' },
]
