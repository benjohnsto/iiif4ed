---
title: "Tools for working with IIIF"
layout: default
---

# {{page.title}}



## Storytelling & Digital Narratives
<div class="tiles">
{% assign filtered_tools = site.data.tools | where: "Category", "Storytelling & Digital Narratives" %}
{% for tool in filtered_tools %}
  <a href="{{ tool.URL }}" class="tile" target="_blank">
    <h3>{{ tool.Name }}</h3>
    {{ tool.Description }}
  </a>
{% endfor %}
</div>


## Collaborative Annotation & Transcription
<div class="tiles">
{% assign filtered_tools = site.data.tools | where: "Category", "Collaborative Annotation & Transcription" %}
{% for tool in filtered_tools %}
  <a href="{{ tool.URL }}" class="tile" target="_blank">
    <h3>{{ tool.Name }}</h3>
    {{ tool.Description }}
  </a>
{% endfor %}
</div>

## Visual Analysis
<div class="tiles">
{% assign filtered_tools = site.data.tools | where: "Category", "Visual Analysis" %}
{% for tool in filtered_tools %}
  <a href="{{ tool.URL }}" class="tile" target="_blank">
    <h3>{{ tool.Name }}</h3>
    {{ tool.Description }}
  </a>
{% endfor %}
</div>

