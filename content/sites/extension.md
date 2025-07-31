---
title: "I rebuilt Extension"
description: "The UC Berkeley Extension site barely worked. I made it marginally better."
sections:
  - title: How it was
    subsection: Issues to address
    image:
        src: "/images/old-extension.jpg"
        alt: "Screenshot of the Berkeley Extension site in 2015, link to the Way Back Machine record"
        link: "https://web.archive.org/web/20151006020430/http://extension.berkeley.edu/public/category/programArea.do?method=load&selectedProgramAreaId=11461"
    list:
      -  Confusing information architecture
      -  Inflexible CMS layout for product pages
      -  Lack of places to feature student stories effectively
      -  Antiquated design
      -  No place to feature international programs
      -  Failed accessibility audits, poor SEO performance
  - title: How I built it
    subsection: Highlights
    image:
        src: "/images/new-extension.jpg"
        alt: Screenshot of the current Art and Design page on the Berkeley Extension site, link goes to the live site
        link: "https://extension.berkeley.edu/academic-areas/art-and-design/"
    list:
      -  Rebuilt JSP templates to allow for improved accessibility, SEO, and customizeability of all pages
      -  Fresh design focused on skimmability and ease of access to conversion using modern CSS precompilers (first LASS then SCSS)
      -  Built Headless Drupal server to parses the CMS's APIs and makes course and program data available in more lightweight custom APIs
      -  Built Drupal 7 <a href="https://voices.berkeley.edu">Voices Blog</a> to give content creators more flexibility, searchability and features in highlighting stories
      -  Integrated Voices Blog and product content across the site with AngularJS directives
---
