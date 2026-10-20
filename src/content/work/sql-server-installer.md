---
title: One installer for every SQL Server build
summary: A single install script standardised SQL Server across 400+ VMs and saved an estimated 300+ engineering hours.
role: Systems Engineer
date: 2023-06-01
tags: [SQL Server, PowerShell, Automation]
featured: true
draft: false
---

Every new SQL Server install used to be a manual job, and no two servers ended up configured quite the same.

I wrote one installation script that sets up the instance the same way every time: the same settings, the same checks, no one clicking through a wizard. It has since been used on more than 400 VMs. What took hours per server now runs with no hands on it, which I estimate saved over 300 engineering hours.

The bigger win is consistency. When every server starts from the same baseline, the next incident is easier to diagnose.
