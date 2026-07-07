---
title: Finding IIIF Resources
layout: default
---

## {{page.title}}

<iframe src="https://www.google.com/maps/d/embed?mid=1SC128VPRmKrwYWUu5xQSr1W60vdXyno&ehbc=2E312F&noprof=1" width="80%" height="480"></iframe>

<form id="searchrepositories" style="margin:1em 0">
<input type='text' id='search' placeholder='Search'/> <input type="submit" class='button' id='dosearch' value="Search"/>
</form>



<ul id="list" style="margin:1em 0">
    {% for item in site.data.master limit:10 %}
      <li><a href="{{item.URL}}" target="_blank">{{item.Name}}</a><br />{{item.Pedagogy}}</li>
    {% endfor %}
</ul>

<script>

var list = {{site.data.master | jsonify}}

jQuery("#searchrepositories").submit(function(e){
  //doSearch();
  e.preventDefault();
});

jQuery("#dosearch").on('click', function(e){
  doSearch();
  e.preventDefault();
});

function doSearch() {
  var str = jQuery("#search").val();
  const flags = "gi"; // Optional: g = global, i = case-insensitive
  const regex = new RegExp(str, flags);
  jQuery("#list").empty();
  list.forEach((item)=>{
    if(item.Name.search(regex)>= 0 || item.Pedagogy.search(regex)>= 0) { 
      jQuery("#list").append("<li><a href='"+item.URL+"' target='_blank'>"+item.Name+"</a><br />"+item.Pedagogy+"</li>");
     }
  });
}

</script>
