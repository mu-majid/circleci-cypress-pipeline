## Problem

## Solution Steps:

### Step 1: Set Up GitHub Actions to Trigger CircleCI

GitHub Actions (Create .github/workflows/circleci-trigger.yml) will be responsible for:

 - Triggering a CircleCI pipeline when a PR is opened or updated.
 - Blocking the PR if any Cypress test fails.
 - This workflow is triggered on a pull request.
 - It sends a POST request to CircleCI's API to trigger a new pipeline.
 - You must store your CircleCI API token as a GitHub Secret (CIRCLECI_TOKEN).

### Step 2: Configure CircleCI to Run Cypress Tests

CircleCI (Create .circleci/config.yml) will:

 - Build the Docker container.
 - Start the container.
 - Run Cypress tests from outside the container.

### Step 3: Block PRs with Failing Tests

To enforce blocking PRs on test failure:

Require GitHub Actions & CircleCI to pass before merging.

 - In GitHub, go to Settings > Branches.
 - Enable Branch Protection Rules for main & develop.
 - Require GitHub Actions (Trigger CircleCI) and CircleCI Cypress Tests to pass before merging.

Use GitHub Checks API to report test results.

 - CircleCI automatically reports build statuses to GitHub.
 - If tests fail, the PR will be blocked from merging.


### Step 4: Store Secrets Securely

 - In GitHub, add CIRCLECI_TOKEN as a repository secret.
 - In CircleCI, store any required Docker credentials (if using a private registry).