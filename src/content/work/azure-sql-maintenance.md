---
title: Azure SQL maintenance on autopilot
summary: Azure Automation runbooks run index rebuilds, statistics updates and maintenance windows with no manual steps.
role: Systems Engineer
date: 2024-08-01
tags: [Azure SQL, Azure Automation, PowerShell]
featured: true
draft: false
---

Routine maintenance on Azure SQL was something someone had to remember to do.

Azure Automation runbooks now handle index rebuilds, statistics updates and the maintenance windows themselves. They run on a schedule and alert when something deviates, so the team only gets involved when a run needs attention.
