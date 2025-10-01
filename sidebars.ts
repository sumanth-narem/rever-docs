import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      items: [
        "getting-started/overview",
        "getting-started/self-hosted",
        "getting-started/environment-variables",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Core Concepts",
      items: [
        "core/transaction-controls",
        "core/document-automation",
        "core/approvals",
        "core/dms",
        "core/accounting-automation",
        "core/compliance",
        "core/analytics",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "User Guides",
      items: [
        "guides/creating-rules",
        "guides/uploading-documents",
        "guides/approval-flow",
        "guides/integrating-erp",
        "guides/data-export",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Admin & Configuration",
      items: [
        "admin/user-roles",
        "admin/audit-logs",
        "admin/settings",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Developer Docs",
      items: [
        "developer/api-overview",
        "developer/authentication",
        "developer/endpoints",
        "developer/webhooks",
        "developer/integrations",
        "developer/sdk",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "AI & Automation",
      items: [
        "ai/overview",
        "ai/document-tagging",
        "ai/data-validation",
        "ai/model-feedback",
        "ai/privacy",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Security",
      items: [
        "security/overview",
        "security/data-encryption",
        "security/compliance",
        "security/reporting",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Releases",
      items: [
        "releases/changelog",
        "releases/roadmap",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "FAQ",
      items: [
        "faq/general",
        "faq/self-hosting",
        "faq/security",
        "faq/integrations",
      ],
    },
  ],
};

export default sidebars;