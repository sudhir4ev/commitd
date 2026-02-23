---
title: 'About — Frontend development'
description: 'Professional summary and approach to frontend engineering, architecture, and leadership.'
---

# Professional Summary

## Frontend Philosophy

I believe the frontend constitutes the product itself. For most users, it represents the company: the interface they interact with, the system they trust, and the aspect that fails them when issues arise. This intent navigates my approach to component design and performance matters.

I focus on being intentional constraint. I only add abstractions when they're truly needed. (Beware of overengineering.) A hard-to-use or black-box design system will keep people from adopting it. Every abstraction I introduce must be justified. Design system components that are difficult to adopt are often circumvented. API boundaries that expose implementation details can introduce persistent cross-team defects. Pipelines with excessive runtimes disrupt developer productivity and impede organisational efficiency. I prefer solutions that are reliable, composable, and efficient rather than those that are too complex or comprehensive.

I am particularly wary of overengineering. It's a habit I have struggled with in many projects and has triggered refactors, big and small, on many occasions.

I favor progressive disclosure of complexity: keeping things simple for basic use cases, while still making it possible to deal with complex situations when needed. I apply this idea to component APIs, state management, and deployment strategies.

## How I Think About Architecture

Every problem in frontend, like most other Computer Science layers, has many different solutions. And our job as engineers is to make well-informed tradeoffs at each layer. Before major design decisions, I consider the following questions:

* Where is state managed, and who owns it? Managing state at the wrong layer can create technical debt that persists throughout the product lifecycle.
* What is the likely impact of failure? Can a component fail without affecting the entire page ?
* How will this decision affect the team in six months? Architectural choices are both technical and organizational. A micro-frontend boundary defines team boundaries, and a shared library creates shared responsibility.
* Allow room for mistakes. As architects, we should remember that what we build today will be used in ways we cannot predict. People working on this project will probably question the choices we make now. The best thing we can do is make sure the system can adjust to these changes.

In practice, I prefer explicit over implicit solutions, keeping systems cohesive rather than centralized unless scaling demands otherwise, and focusing on measurable outcomes. I adopt patterns like monorepos, microfrontends, or SSG only when they solve a particular problem.

## Performance and Performance Scalability

Performance is a core product requirement. Cutting load times from minutes to seconds directly increases traffic and revenue. My approach to performance engineering follows a consistent methodology:

* Measurement comes before optimization. I instrument systems before making  improvements. Tools like Lighthouse, Web Vitals, bundle analysis (webpack-bundle-analyzer, source-map-explorer), and real-user monitoring form the basis of my process, rather than relying on intuition.
* Optimize at the appropriate layer. Network latency, render-blocking resources, loops, and JavaScript parse time typically have a bigger impact than component-level optimisations. I address the largest bottlenecks first.
* Integrate performance into the pipeline. Without enforcement, performance regresses. I include bundle size budgets and Lighthouse CI gates in CI/CD to catch regressions before production.
* Select rendering strategies based on context. SSG, SSR, ISR, and CSR are tools, not fixed rules. The appropriate strategy depends on content update frequency, SEO needs, audience scale, and personalization complexity. I have experience with all of them and understand when each is suitable.

One thing I've learned is that these priorities need to be balanced with business goals. If we can't clearly show the impact, these tasks often stay in the backlog.

## Working Across Backend, DevOps, and Product

Effective frontend engineering at scale requires close collaboration across disciplines. I have worked in cross-functional squads, partnering with Spring Boot backend engineers, AWS DevOps teams, AEM platform teams, and product owners. The best results come from frontend engineers who understand and communicate effectively with their collaborators.

With backend teams, I drive contract-first API design: agreeing on schema, error shapes, and pagination before a line of code is written. (Pact, OpenApi) This avoids the all-too-common situation where the frontend is blocked by an API that doesn't match what the UI actually needs.

In collaboration with DevOps and platform teams, I approach CI/CD pipelines and infrastructure as integral products. I have developed and maintained pipelines using GitHub Actions and Bitbucket Pipelines, managed deployments to AWS S3, and worked with Nomad-based container orchestration. I have setup VPS with Ansible and Tailscale access. I consider infrastructure a shared responsibility.

With product and design teams, I act as a translator. I evaluate technical feasibility, challenge designs that introduce unnecessary complexity, and advocate for design systems as a shared language between design and engineering.

## Leadership Style

My leadership style is servant-technical: I focus on elevating the capabilities of those around me rather than seeking to be the most knowledgeable person in the room.

In practice:

* I use architecture RFCs and PRD as educational tools. I write RFCs to document decisions, surface underlying assumptions, encourage constructive challenge, and foster shared understanding. Effective RFCs clarify tradeoffs and promote collective ownership of outcomes.
* I approach code review as an opportunity for mentorship. During pull request reviews, I prioritize asking questions, such as "What happens here if the API returns a 429?" This approach encourages critical reasoning rather than simply providing answers. One should also be mindful of long PR reviews comments, which can come across as intimidating. If there are several issues to address, it might be prudent to have an in-person chat.
* I promote standards through automation. Rules that depend on manual enforcement are prone to inconsistency. Tools such as ESLint, Prettier, commit-lint, and Husky hooks automate style and quality enforcement, allowing code reviews to focus on design considerations.
* I approach onboarding as a systematic process. I have conducted structured onboarding and training sessions for teams adopting shared platforms (DLS). I consider the onboarding experience a product: if a new engineer is not productive within the first week, this indicates a failure in documentation or tooling rather than individual capability.
* I prioritize psychological safety in technical decision-making. I actively encourage junior engineers to question architectural choices. Many of the most significant improvements have resulted from individuals asking, "why do we do it this way?"
