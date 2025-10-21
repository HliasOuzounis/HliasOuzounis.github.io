---
title: "Analysis of the Dual EC DRBG Algorithm Backdoor"
date: "2024-6"
description: "Analyzing the Dual EC DRBG algorithm and its potential backdoor."
tags: ["Elliptic Curves", "Cryptography", "Python", "Group Theory"]
image: "/projects/dual-ec-drbg/dual-ec-drbg.png"
link: "https://github.com/HliasOuzounis/Dual-EC-DRBG-Analysis"
priority: 2
---

This project is an analysis of the DUAL EC DRGB algorithm proposed by NIST in 2006. Despite the backlash and the possibility of the existance of a backdoor, the algorihtm was standardized until 2014 when it was finally removed from the NIST standards.

![Dual EC DRBG](/projects/dual-ec-drbg/dual-ec-drbg.png)

The goal of this project was to understand the theory behind an elliptic curve algorithm and how the backdoor could have been designed. The effectiveness of the bakcdoor is also analyzed through some custom examples that simulate the potential backdoor.
