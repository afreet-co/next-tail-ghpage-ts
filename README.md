# Next Tail GitHub Page Typescript

## Introduction

- A project to be used as a starter for Next.js project which includes tailwind, it's configuration, typescript and also the github action workflow deployment to Github pages after pushing commit to the master branch.

- So, anyone can uptake this template and start using to build stuff using the same stack with just s little configuration in the deployment part which is explained below.

## Steps for configuring your deployment

- First, in `deploy.yml`, make sure the master/main branch is mentioned correctly according to your project, line number `8 and 10`.

  ```yml
  on:
    push:
      branches: [master]
    pull_request:
      branches: [master]
  ```

- You can also choose the nodejs version according to your need at line number `19`, you can refer this [link](https://github.com/actions/node-versions/releases) for release of node versions in Github Actions.

  ```yml
  node-version: [14.x]
  ```

- And the last part is, you have to config the repository name as your `NEXT_PUBLIC_PREFIX` env variable at line number `31`, so that the prefix can be applied to all the file paths in the build process, for correct references. !!IT IS IMPORTANT!!

  ```yml
  NEXT_PUBLIC_PREFIX: /next-tail-ghpage-ts
  ```
  
- Also, you need to enable the github page hosting from the setting of the repo in Github, then the pages options from sidebar, and then select gh-page and click Save. Then, the link will appear at top but when to try to open that link, maybe it will be `404: Not found`, for that we need to re-run the job, in order to get it right.

- We can run the job again, by navigating to Action in the repo, click on the recent executed job and then there will be `Re-run jobs` button. You can see the site hosted at the github page link of the page, the one you get in the page setting. 
