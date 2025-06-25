module.exports = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/self-hosted',
        'getting-started/environment-variables',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core/transaction-controls',
        'core/document-automation',
        'core/approvals',
        'core/dms',
        'core/accounting-automation',
        'core/compliance',
        'core/analytics',
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: [
        'guides/creating-rules',
        'guides/uploading-documents',
        'guides/approval-flow',
        'guides/integrating-erp',
        'guides/data-export',
      ],
    },
    {
      type: 'category',
      label: 'Admin & Configuration',
      items: [
        'admin/user-roles',
        'admin/audit-logs',
        'admin/settings',
      ],
    },
    {
      type: 'category',
      label: 'Developer Docs',
      items: [
        'developer/api-overview',
        'developer/authentication',
        'developer/endpoints',
        'developer/webhooks',
        'developer/integrations',
        'developer/sdk',
      ],
    },
    {
      type: 'category',
      label: 'AI & Automation',
      items: [
        'ai/overview',
        'ai/document-tagging',
        'ai/data-validation',
        'ai/model-feedback',
        'ai/privacy',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/overview',
        'security/data-encryption',
        'security/compliance',
        'security/reporting',
      ],
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'releases/changelog',
        'releases/roadmap',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/self-hosting',
        'faq/security',
        'faq/integrations',
      ],
    },
  ],
};
