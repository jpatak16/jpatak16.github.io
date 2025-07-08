---
title: Skill Curve Analysis
subtitle: Analytics; Basketball
layout: default
modal-id: sc-ortg-analysis
date: 2025-07-07
thumbnail: dort-curve.jpg
project-date: In Progress
category: bball analytics
gh-link: https://github.com/jpatak16/NBA-ORTG
gh-repo-name: NBA-ORTG
---

<h3>Brief Overview</h3>

<p>This project was inspired by <b>Chapter 19: The Problem with Scorers</b> in the Basketball Analytics classic Basketball on Paper, by Dean Oliver. The offensive skill curve is the building block of this chapter by Oliver. It essentially shows how a player can produce higher offensive ratings when they don’t have to carry as much of the load on offense. Or, vice versa, it shows that the higher usage a player accounts for, the less efficient they can be with it.</p>

<img src="{{ site.url }}/img/portfolio/oliver-skill-curve.jpg" style="justify-content: center; width: 95%; margin-bottom: 0px;">

<p>The starting point of this project is trying to recreate Oliver's skill curves on today's NBA players. Once that concept is nailed down, there are different applications I can try to apply it to. In the book, Oliver solves for the optimal usage rate that each of the 5 players on the court should have to maximize team ORTG. There is analysis that can be done down this route for todays NBA. I am also curious about how players' skill curves develop through the cycle of a career. Lastly, I had the idea of building an app that could calculate ORTG for theoretical lineups, so users could see how ORTG would be expected to change when substituting one player in for another. </p>

<h3>Recent Application of the Concept</h3>

<p> After T.J. McConnell impressed many basketball viewers in the NBA Finals, a tweet went sort of viral for all the wrong reasons.</p>

<img src="{{ site.url }}/img/portfolio/tj-tweet.png" style="justify-content: center; width: 95%; margin-bottom: 0px;">

<p> If @NBA_University was familiar with the concept of a skill curve, they would understand how wrong they were. Take a look at my calculated skill curves for the two players.</p>

<img src="{{ site.url }}/img/portfolio/tj-vs-brunson.png" style="justify-content: center; width: 95%; margin-bottom: 0px;">

<p> As you can see, at each level of usage, Brunson can produce a higher ORTG on that volume than McConnell can, and my skills curves are probably making it look closer than it really is, considering I'm still working out some low-sample/padding adjustments that I want to make. </p>



