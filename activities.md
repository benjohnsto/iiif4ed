---
title: Lab Activities
layout: default
---

## {{page.title}}

<ul>
{% for page in site.pages | sort: 'title' %}
{% if page.url contains 'lessons/' %}
<li><a href="{{site.baseurl}}/{{ page.url }}" id="{{page.name}}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>


### IIIF Literacy

#### Learning the Ropes

Activity: Students become acquainted with the IIIF Image API, using an image manipulation tool to resize, rotate,and crop a IIIF enabled image.

{%- include activity_list.html category='basics' -%}

### Close Viewing

#### Single Item Close-Viewing

Activity: Students explore a single work, such as a book, a scroll, or other detailed work looking for details that interest them or that might suggest further research. Presented with a manifest loaded in Mirador, students look for details they would like to discuss in class or that they would like to research further. The students' ideas and contributions are submitted to a discussion board. 

{%- include activity_list.html category='close-viewing' -%}

#### Tile Puzzle

Activity: Using a tile puzzle tool, students are presented with an image consisting of a grid of random tiles. Clicking on a tile moves that tile to an open space allowing one to progressively solve the puzzle and view the original image.

#### Collection Overview

Activity: Students are presented with a collection of materials, such as a thematically-related set of books or artwork and tasked with finding examples of some aspect of the collection and by reflecting upon the collection as a whole. Students submit their reflections in a discussion board.

#### Comparative Close-Viewing

Activity: Provide students with a manifest for a single work that exists in multiple versions (e.g., a specific painting held by two different museums, or a hand-copied manuscript found in different collections). Students load both manifests into side-by-side panes in Mirador. Students might be tasked with identifing differences or variations in color, marginalia, or physical damage—and write a short justification for how these physical differences might alter the interpretation of the work's history or its conservation state. The students' contributions are submitted to a discussion board.

### Annotation

#### Simple Cropping Activity

Activity:   
Task:

#### Collaborative annotation

Activity: Using the online **Liiive** tool, students add annotations to a shared IIIF object.  
Task: 


### Maps

#### Georeferencing Maps

{%- include activity_list.html category='maps' -%}

### Digital Narratives

#### Digital Exhibit on single Item

Activity: Students create a detailed ‘tour’ around a single image using the Storiiies tool.  
Task:

#### Digital Exhibit with Multiple Items

Activity: Students use the Exhibit tool to create a sequential narrative across multiple images and IIIF manifests.   
Task: The development of the online exhibit is the culmination of curatorial work by students in collecting IIIF resources, determining a sequence of step, and in composing descriptions for each of those steps.  
