import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      collapsed: false,
      label: "Getting Started",
      items: [
        "introduction/home",
        "introduction/core-concepts",
        "introduction/quick-start",
        {
          type: "category",
          collapsed: false,
          label: "Workflow",
          items: [
            "workflow/vendor-management",
            "workflow/chart-of-accounts",
            "workflow/purchase-order",
            "workflow/bill-capture",
            "workflow/bill-stages",
            "workflow/matching",
            "workflow/approval-workflow",
            "workflow/settings-page",
            "workflow/confirmation",
            "workflow/notification",
            "workflow/dashboards",
          ],
        },
      ],
    }
  ],
};

export default sidebars;