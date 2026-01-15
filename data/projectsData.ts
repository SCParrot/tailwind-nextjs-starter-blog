interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'saas-template',
    description: `A free Next.js landing page template designed to showcase open source projects, SaaS products, online services, and more.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/SCParrot/saas-template',
  },
  {
    title: 'n8n execution monitor',
    description: `A workflow execution tracking panel built with Next.js + ECharts + Tailwind CSS for visualizing N8N workflow execution status.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/SCParrot/N8N-Workflow-Execution-Tracking-Panel',
  },
  {
    title: 'blog github project',
    description: `my data about this blog`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/SCParrot/tailwind-nextjs-starter-blog',
  },
]

export default projectsData
