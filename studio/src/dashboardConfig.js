export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '600dc1a1df37f0a21e757637',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o6i786wn',
                  apiId: 'e5e3866b-7761-4d7f-8e6b-772b14322b8f'
                },
                {
                  buildHookId: '600dc1a2df37f0a6ad757659',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-62aogdca',
                  apiId: '4feb22a2-d104-425e-93cf-2e04548a2ab3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nsaicharan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-62aogdca.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
