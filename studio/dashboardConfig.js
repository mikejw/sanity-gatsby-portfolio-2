export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61791e24294c5dec512f16ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-nggeo9xk',
                  apiId: '6bd367de-5806-4377-9f29-cb27260907a5'
                },
                {
                  buildHookId: '61791e24bc1da5c36ca5f7fa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-v2iy1g2j',
                  apiId: 'd1445b99-b9a2-4f44-8bf0-082fe34f93f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikejw/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-v2iy1g2j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
