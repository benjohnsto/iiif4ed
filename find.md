---
title: Finding IIIF Resources
layout: default
---

## {{page.title}}
<!--
<iframe src="https://www.google.com/maps/d/embed?mid=1SC128VPRmKrwYWUu5xQSr1W60vdXyno&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
-->

<form id="searchrepositories" style="margin:1em 0">
<input type='text' id='search' placeholder='Search'/> <input type="submit" class='button' id='dosearch' value="Search"/>
</form>



<div class="tiles">
    {% for item in site.data.master %}
      {% assign tags = item.Tags | split: " " %}
      <a href="{{item.URL}}" class="tile" target="_blank"><h3>{{item.Name}}</h3>{{item.Tags}}</a>
    {% endfor %}
</div>

<script>

var list = {{site.data.master | jsonify}}
var notable = {{site.data.notable | jsonify}}


jQuery("#searchrepositories").submit(function(e){
  doSearch();
  e.preventDefault();
});

jQuery("#dosearch").on('click', function(e){
  doSearch();
  e.preventDefault();
});

function tileTemplate(o) {
  return `<div class="tile" target="_blank"><a href="${o.URL}"><h3>${o.Name}</h3></a>${o.Tags} ${o.notable}</div>
  `;
}

function getNotable(school) {
   const notableArr =  notable.filter((e) => school === e.From);
   const notableList = notableArr.map((e) => `${e.Title} `);
   return `<p><strong>Notable collections</strong>: ${notableList}</p>`;
}

function drawGallery(q = null) {
  if(q) {
     const flags = "gi"; // Optional: g = global, i = case-insensitive
     const regex = new RegExp(q, flags);
     jQuery(".tiles").empty();
     list.forEach((item)=>{
        console.log(item);
       if(item.Name.search(regex)>= 0) {
      
        jQuery(".tiles").append(tileTemplate(item));
       }

     });
  }
  else {
     jQuery(".tiles").empty();
     list.forEach((item)=>{
       //item.notable = getNotable(item.Name);
       jQuery(".tiles").append(tileTemplate(item));
     });
  }
}

function doSearch() {
  var str = jQuery("#search").val();
  drawGallery(str);
}


drawGallery();

</script>
