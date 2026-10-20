---
title: Post-patch health checks for MarkLogic
summary: Automated verification after patching cut per-server validation from 15 minutes to 5, a 67% reduction.
role: Systems Engineer
date: 2025-03-01
tags: [MarkLogic, Bash, Automation]
featured: true
draft: false
---

After every patch cycle, each MarkLogic server had to be checked by hand before it could go back into service. It took about 15 minutes per server, and the time added up across a cycle.

I built health-check automation that runs the verification and reports the result. Validation per server dropped to about 5 minutes, a 67% cut, which shortens the recovery window on every cycle.
