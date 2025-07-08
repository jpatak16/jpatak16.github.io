---
title: CBB Prescout Portal
subtitle: Development; Analytics; Basketball
layout: default
modal-id: cbb-prescout
date: 2024-07-02
thumbnail: cbb-prescout-oo.png
project-date: October 2023
category: dev analytics bball
gh-link: https://github.com/jpatak16/CBB-Prescout
gh-repo-name: CBB-Prescout
---

<h3>Brief Overview</h3>

<p> This is one of my favorite projects I've ever worked on. I wanted to teach myself Shiny, so I decided I would create a "Pre-Scout" app for college coaches where they could click through multiple different tools and get a good overview of a team they may be unfamiliar with. This could act as a precursor or supplement to film review. After I developed this portal, I ran it throughout the length of the 2023-24 college basketball season for 4 programs, all of which were NCAA Tournament teams that season. Each team had their own team specific portal and URL that automatically updated for them daily as the season progressed.</p>

<h3>Backend</h3>

<p>To gather the data for this portal, I set a job for a webscraping script I wrote to run daily. I used the piggyback package and github releases to store, update, and retrieve the data into the apps. My daily webscrape included scraping data from sites like Sports Reference, ESPN, and Kenpom, as well as downloading and cleaning play-by-play data straight from the NCAA's website. At any given time, the user could select from any of their next three opponents to view the tools for within the pre-scout portal.</p>

<h3>Graphical Metric Comparison</h3>

<p>A simple tool that allows you simply view the your own and the opponent's play style metrics compared to the other teams on your schedule that season, or compared to the top teams in the NCAA acorrding to NET or the AP Poll. This tool allows you to get a high level overview of the opponents strengths and weaknesses, see how they compare to your own, and relate them to teams you may be more familiar with.</p>

<img src="{{ site.url }}/img/portfolio/prescout-gmc-1.png" style="width: 95%;">
<img src="{{ site.url }}/img/portfolio/prescout-gmc-2.png" style="width: 95%;">

<h3>Player Personnel</h3>

<p>The player personnel table aggregates many standard statistics and player info, but allows you to simply filter, sort, and customize to just the information you want to see. You can sort to see who takes 3s at the highest rate, a breakdown on how often each player is estimated to be playing each of the 5 positions, or filter to bigs and see how many minutes each play per game. None of the information in this table is unique to this portal, but I believe it's presented in a way to maximize efficient usefulness. </p>

<img src="{{ site.url }}/img/portfolio/prescout-pp-1.png" style="width: 95%;">
<img src="{{ site.url }}/img/portfolio/prescout-pp-2.png" style="width: 95%;">

<h3>Player Style Comparison</h3>

<p>This tool provides an at a glance overview of the playstyle of opposing players. Broken down into a handful of categories, the plot shows you which segments of the game each player excels or does not impact the game in across several key categories that are different for each position. It then compares those skills to a stylistically-similar NBA player. The intended purpose of this tool is for coaches getting ready for an early season game against an unfamiliar small school to be able to relate their opponent to players they have more skillset familiarity of.</p>

<img src="{{ site.url }}/img/portfolio/prescout-psc-1.png" style="width: 95%;">
<img src="{{ site.url }}/img/portfolio/prescout-psc-2.png" style="width: 95%;">

<p>Even though it looks like it, when computing similar player styles, headshots are not taken into account!</p>

<h3>Opponent Trends</h3>

<p>The Opponent Trends tools allows users to see how their opponent has performed in key offensive and defensive categories throughout the season, game by game. Is the opponent in the middle of an extended 3P shooting slump? Has the opponent been playing with higher pace this month than the last two? You can use this tool to try and find insights such as these much more quickly that clicking through game logs.</p>

<img src="{{ site.url }}/img/portfolio/prescout-ot-2.png" style="width: 95%;">

<p>This tool also allows users to insert trend lines split by multiple categories. Does you opponent rebound at a much higher rate at home than on the road? Do they draw a significantly higher rate of fouls in wins than losses? These insights could provide things to key in on for film study, and possible be keys to the game. </p>

<img src="{{ site.url }}/img/portfolio/prescout-ot-1.png" style="width: 95%;">

<h3>Rotation Visualization</h3>

<p>Lastly, the rotation visualization tool. This tool lets you see when players for the opposing team are most commonly in and when they most often take their rest on the bench.</p>

<img src="{{ site.url }}/img/portfolio/prescout-rv-1.png" style="width: 95%;">

<p>You can also filter the information in some useful ways. Want to see how much the starters have been playing in the last 5 games? Or how about what the guard rotation was in your matchup against them from last month?</p>

<div class="portfolio-image-group">
  <img src="{{ site.url }}/img/portfolio/prescout-rv-2.png">
  <img src="{{ site.url }}/img/portfolio/prescout-rv-3.png">
</div>
