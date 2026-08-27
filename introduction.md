---
title: An Introduction to IIIF
layout: default
next: introduction/image-manifest.html
---

## {{page.title}}

<ul>
{% assign sorted_pages = site.pages | sort: 'sortorder' %}

{% for page in sorted_pages %}
{% if page.url contains 'introduction/' %}
<li><a href="{{site.baseurl}}/{{ page.url }}" id="{{page.name}}">{{ page.title }}</a></li>
{% endif %}
{% endfor %}
</ul>

<p>The <strong>International Image Interoperability Framework</strong> (IIIF) defines a set of open standards for describing and delivering high-quality images over the web. The standards are the result of collaborative efforts across universities, museums, libraries, and other cultural heritage institutions around the world and provide a standard practice for making images (and other media) available. <strong>IIIF</strong> is not software, it is a protocol, a lingua-franca, for sharing images, collections, and metadata.</p>
<p>IIIF-enabled media is delivered via <em><strong>manifests</strong></em>. A manifests is a list. On ships, a manifest would have an entry for every passenger, crew member, and officer, as well as a detailed inventory of all cargo and livestock brought aboard and unloaded. To similarly account for global transport of digitized library and museum collections online, the IIIF movers and shakers relied upon the age's-old technique: just make a list and sort it out at the other end. A <strong>IIIF manifest</strong> is an aggregated string of media links and descriptive metadata (basic information about the media) that a source institution wants to make available to users at the end of a media item's journey from its home page.</p>
<p>IIIF manifests are heavily dependent upon <strong>URIs</strong>.&nbsp; You may have heard of a <strong>URL</strong> (Uniform Resource Locator). A URL is the same as a web address. It is the address you put in the browser search bar to go to a website. URI is slightly (but only slightly) different. URI stands for <strong>U</strong>niform<strong> R</strong>esource <strong>I</strong>dentifier: it is a unique identifier, in the form of an address, assigned to a particular resource (such as a digital image) on the web.&nbsp; A URL gets something for you, whereas a URI identifies it.&nbsp; Most often a URI can be used in the same way you might use a URL. So, following a URI that you find in one of the manifests mentioned above might lead you to another manifest or to a digital image.</p>
<p>In the IIIF world, there are two types of manifests: an <strong>image manifest</strong> and a <strong>presentation manifest</strong>.&nbsp; As you might guess, an image manifest contains information about an image, such as width and height. But IIIF is oriented toward the delivery of large, high-quality images, images that the end user can zoom in on and see close details.&nbsp; For this reason, an image manifest might also contain information about the various zoom levels afforded by the image. The <strong>presentation manifest</strong> is responsible for containing information about real-world objects. A presentation manifest might contain a list of metadata about an object, links to images of the object, or descriptive annotations about the object.&nbsp; A presentation manifest might also simply be a list of objects that for a <strong>collection</strong>.</p>
<p>To be honest, you will most likely never need to look at what is contained within a manifest. Manifests are written in a "machine-readable" format that can be a little intimidating. Much more important is being able to make use of these various manifests to work with digital images.</p>


{%- include nextprev.html -%}

