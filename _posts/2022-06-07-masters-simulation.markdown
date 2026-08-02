---
title: Predicting the Masters Using Simulation
subtitle: Analytics
layout: default
modal-id: masters-simulation
date: 2022-06-07
thumbnail: masters-thumbnail.webp
project-date: May 2022
category: analytics
gh-link: https://github.com/jpatak16/PGAtour_project
gh-repo-name: PGAtour_project
---

<img src="{{ site.url }}/img/portfolio/masters-thumbnail.webp" style="width: 75%">

<h3>Brief Overview</h3>

<p> For one of my term projects in school, I wanted to use data science to make predictions on that season's Master's Tournament. I first webscraped the player level results from 16 seasons worth of tournaments. After setting up the data, I developed predictors for my outcome variables (which were Round 1 and 2 scores at the Masters reletive to the median score, and Round 3 and 4 scores at the Masters reletive to the median score). </p>

<p> I then used my predicted round scores and calculated round standard deviation for each golfer in the Masters field to run 10,000 simulations. After the first two rounds in each simulation, players either make or miss the cut, then survivng players will have values simulated for their 3rd and 4th rounds. After running these simulations, I'm able to calculate how often each golfer wins, makes or misses the cut, or finishes top-10. I can then compare these predicted likilihoods to the betting market, and see if my modeling provided us an edge. </p>

<div class="portfolio-image-group">
  <img src="{{ site.url }}/img/portfolio/masters-res-1.png">
  <img src="{{ site.url }}/img/portfolio/masters-res-2.png">
</div>

<a href="{{ site.url }}/portfolio/PGAproject.html">
  <button class="btn-xl">Check Out The Full Project Write-Up!</button>
</a>