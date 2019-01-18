---
title: Getting started
description: From zero to docs deployed on Netlify in just a few minutes
---

If you're working on a new [Cloud Native Computing Foundation](https://cncf.io) (CNCF) project, an older project that wants to revamp its site and docs, or a project that's not affiliated with the CNCF at all, you can deploy a project by:

* [Installing dependencies](#prereqs)
* [Cloning the Docs in a Box repo](#clone)
* [Creating a new repo for your project](#repo)
* [Run the site locallt](#run)
* [Setting up Netlify](#netlify)

## Install Docs in a Box dependencies

### macOS

```shell
brew install hugo
```

> Make sure to install the version of Hugo specified in the [`netlify.toml`](https://github.com/cncf/docs-in-a-box/blob/master/netlify.toml) configuration file.

## Clone the repo {#clone}

To get started with Docs in a Box from the CNCF

```shell
git clone https://github.com/cncf/docs-in-a-box && cd docs-in-a-box
```

## Create a new repo {#repo}

In order to publish your Docs in a Box project [on Netlify](#netlify), create a new [GitHub](https://github.com) repo for the project.


## Run your project locally

To run the project locally:

```shell
make serve
```

Navigate to http://localhost:1313 in your browser and you should see this exact same site up and running locally!

## Set up Netlify

[Netlify](https://netlify.com) is the default publishing platform for Docs in a Box projects.

To run your project on Netlify:

* Create a Netlify account
* Create a new Netlify project
* Link the project to your 
