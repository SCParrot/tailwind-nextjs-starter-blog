interface Project {
  title: string
  description: string
  href: string
  github: string
  slug: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'n8n Tracker Grafana Dashboard',
    description: `A Grafana-style monitoring dashboard built with Nuxt 4 + Vue 3 for tracking n8n workflow executions, featuring shadcn-vue, Tailwind CSS v4, ECharts visualization, and one-click Vercel deployment.`,
    imgSrc: '/static/images/logo.png',
    slug: 'n8n-tracker-grafana-dashboard',
    href: 'https://n8n-tracker-v2.2086666.xyz',
    github: 'https://github.com/SCParrot/n8n-tracker-v2',
  },
  {
    title: 'saas-template',
    description: `A free Next.js landing page template designed to showcase open source projects, SaaS products, online services, and more.`,
    imgSrc: '/static/images/logo.png',
    slug: 'saas-template',
    href: 'https://landing.2086666.xyz',
    github: 'https://github.com/SCParrot/saas-template',
  },
  {
    title: 'n8n execution monitor',
    description: `A workflow execution tracking panel built with Next.js + ECharts + Tailwind CSS for visualizing N8N workflow execution status.`,
    imgSrc: '/static/images/logo.png',
    slug: 'n8n-execution-monitor',
    href: 'https://n8n-tracker.2086666.xyz',
    github: 'https://github.com/SCParrot/N8N-Workflow-Execution-Tracking-Panel',
  },
  {
    title: 'Windmill Dashboard Nuxt3',
    description: `An open-source Windmill Dashboard template rebuilt with Nuxt3 + Vue3, featuring shadcn/vue UI, Tailwind CSS, fully componentized architecture, and ready-to-use static dashboard structure.`,
    imgSrc: '/static/images/logo.png',
    slug: 'windmill-dashboard-nuxt3',
    href: 'https://dashboard.2086666.xyz',
    github: 'https://github.com/SCParrot/windmill-dashboard-nuxt3',
  },
  {
    title: 'blog github project',
    description: `my data about this blog`,
    imgSrc: '/static/images/logo.png',
    slug: 'tailwind-nextjs-starter-blog',
    href: 'https://blog.2086666.xyz',
    github: 'https://github.com/SCParrot/tailwind-nextjs-starter-blog',
  },
]

export default projectsData
