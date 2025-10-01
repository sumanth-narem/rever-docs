# Bill stages

In Rever, every bill passes through a structured lifecycle to ensure **accuracy, validation,
compliance, and accountability**. Understanding each stage helps users track
progress, identify bottlenecks, and take corrective actions when necessary.


### Stage 1: Draft


- A bill enters the **Draft** stage immediately after it is created in the system. This can
    happen via:
       - **Manual creation** (using the “Create Bill” option)
       - **PDF upload** (single or bulk)
       - **Email ingestion** (sent to the organization’s dedicated AP email ID)

**Purpose:**

- Allows users to **verify and correct details** before the bill is reviewed or sent for
    approval.

**Actions & Features in Draft:**

- Edit mandatory fields: Vendor Name, Invoice Number, Invoice Date, Amount, and Tax Details.
- Add PO references if applicable.
- OCR-extracted details can be reviewed and corrected here.
- System performs **duplicate detection** automatically and flags potential duplicates.

### Stage 2: Under Review

<!-- **Definition:** -->

- After saving the Draft, the bill moves to **Under Review**.

**Purpose:**

- Ensures **validation of data and accuracy** before entering the approval workflow.

**Actions & Features in Under Review:**

- System checks:
    - All mandatory fields are completed
    - Duplicate invoices are flagged
    - OCR extraction accuracy is confirmed
- Users can still make edits to correct mismatches or add missing information.
- This stage acts as the **last checkpoint** before the bill enters the formal approval process.


### Stage 3: Under Approval

<!-- **Definition:** -->

- Once the bill passes review, it is routed into the **Approval Workflow** , where it is marked as **Under Approval**.

**Purpose:**

- Ensures **compliance and internal control** by routing the bill through multi-level approvers.

**Actions & Features in Under Approval:**

- Notifies all relevant approvers via **dashboard alerts**, **email**, and **In-app notifications**.
- Approvers review the bill against Pos and Goods Confirmation
- Approvers have two options:
    - **Approve:** The bill moves to the next level of approval (or final posting if
       this is the last approver).
    - **Reject:** The bill returns to the original creator (member user) with
       **Rejected status** for correction.
- Supports **delegation** , where an alternate approver can handle approvals in the
    absence of the primary approver.
- System tracks **SLA timelines** and auto-escalates overdue approvals.

### Stage 4: Posted

<!-- **Definition:** -->

- After all approvers confirm the bill, it moves to the **Posted/Approved** stage. (Posting stage if the Application is Integrated with QuickBooks Online)

**Purpose:**

- Marks the bill as **finalized and ready for payment**.
- Prevents further edits unless a reversal or credit note is initiated.

**Actions & Features in Posted:**

- Bill becomes visible in the **payment queue** for finance teams.
- System logs all approvals, edits, and actions in the **audit trail** for compliance.
- Can be used for **reconciliation**, **reporting**, and **accounting purposes**.


### Rejected Bills

<!-- **Definition:** -->

- If a bill is rejected at any approval level, it **returns to the creator** with the **Rejected status**.

**Actions & Features for Rejected Bills:**

- AP users receive notifications about the rejection and reason code (e.g., price
    mismatch, missing GRN, incorrect vendor).
- Users can correct errors and resubmit the bill, which restarts the approval
    workflow.
- **Export Option:** Download the Selected Bills as CSV for internal review.

![Rever Setup](/img/productScreens/Export%20Bill.jpg)

