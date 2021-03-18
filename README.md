# Digital Home @ Apistolic

> Privacy for digital homes & communities... Portability enabling social media competition

## Digital "Land" Ownership

Land and home ownership is a hallmark of advanced civilizations. The Digital Home Initiative establishes 'digital home ownership' by creating control, privacy and security conventions needed by individuals, families & communities to thrive in cyberspace, where they can live and gather freely without unwanted surveillance.

## Digital "Roads & Services"

Physical communities take for granted the roads and services that connect us: road and car standards e.g. the stop sign; the USPS for seamless communication; POTS telephone service to talk to anybody, anywhere, anytime.

Digital civilization needs to catch up. If I choose to leave FB or LinkedIn, I shouldn't have to sacrifice the digital communities I've established there. I also may choose to live in a digital place with less or no billboards, or billboard diversity.

We need our digital roads paved and connected, our digital communications secured, global, reliable.

## Digital "Architecture" Advances

Romans used architecture to change their empire.

Where most other industries are using digitization techniques to break up fiefdoms and silos, current social networks use their fiefdoms to control their empires.

DHI proposes modern digital architectures to break up the digital fiefdoms created by 1st-gen social media, and replace them with communities that value security, privacy, and portability.

## Digital "Short Stack"

Today's tech standards like REST, JSON and others make it easy for social networks to connect, while maintaining their proprietary innovation that separates them from others.

Like language standards, DHI has an opinionated tech stack that remains light for everyone to dig into.

## DHI Folder structure

```console
├── blog: DHI blog
├── docs: DHI docs
│   └── api
└── static
    ├── css
    └── img
```

Blog Posts use Docusaurus & Githum front-matter options:

```markdown
---
slug: unique-blog-post-slug
title: Blog Post Title For H1
author: John Doe
tags: []
---
```

### Full list of DHI Front-Matter options

- **id**: A unique document id; defaults to its filename
- **title**: defaults to id
- **hide_title**: hide title; default: false
- **hide_table_of_contents**: hide in TOC right sidebar; default: false
- **sidebar_label**: text shown in document left sidebar and in next/previous button; defaults to title
- **custom_edit_url**: URL for editing this document; defaults to editUrl from docusaurus-plugin-content-docs
- **keywords**: Keywords for search engines
- **description**: description used by search engines; defaults to first line of contents
- **image**: Cover/thumbnail image used when displaying the link

## Website Framework: Docusaurus v2

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), focusing on simplified Markdown-formatted documents.

## Local Docusaurus Installation

Once you clone repo, the 'package.json' can be used to install Docusaurus locally. Use 'yarn install' to docusaurus locally. The 'yarn start' command starts a local development server and open up a browser window to preview the site.

```console
yarn install

yarn start
```
