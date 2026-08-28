---
title: "The Presentation Manifest"
layout: tutorial
sortorder: 2
category: introduction 
next: "finding-manifests.html"
prev: "image-manifest.html"
---

## {{page.title}}
<p>The second type of manifest is the presentation manifest. This is the type of manifest that you are most likely to encounter when working with IIIF resources. A presentation manifest describes a digital object.&nbsp; To be more precise, a presentation manifest describes a digital representation of a real-world object. A presentation manifest most often contains <strong>metadata</strong> describing an object, it's provenance, and the holding institution, as well as a series of depictions of the object.&nbsp; A single manifest might have hundreds of images of a single object.&nbsp; A manifest for a book, for example, would contain information about the book, but might have links to images for each of its pages. This is, in fact, a very common use of IIIF manifests.</p>
<p>Let's look at an example:</p>
<p><iframe src="https://figgy.princeton.edu/viewer#?manifest=https://figgy.princeton.edu/concern/scanned_resources/4bc2f6b4-7378-4735-867d-f167f5f83ce3/manifest" width="800" height="600" loading="lazy" allowfullscreen="allowfullscreen"></iframe></p>
<p>This is an image viewer called <strong>Universal Viewer</strong>. It is one of several viewers that support IIIF and is commonly used on library and museum websites.&nbsp; This viewer, from the Princeton University Library, has taken a presentation manifest (https://figgy.princeton.edu/concern/scanned_resources/4bc2f6b4-7378-4735-867d-f167f5f83ce3/manifest) and displayed the images and metadata associated with this object. Notice the images on the left-hand side, representing the pages of the book. Expand the section on the right labeled "More information" to view the item's metadata.</p>
<p>As with the Image manifests, it is not really necessary to understand the contents of the manifest. It is much more important to be able to make use of manifests in viewers such as Universal Viewer.</p>
<p>Here is a link to another, very different presentation manifest:</p>
<p>https://figgy.princeton.edu/concern/scanned_resources/4cc590f8-999e-4ba4-86fb-4c274e35c06c/manifest</p>
<p>Try highlighting this URL and dragging it over the Universal Viewer and dropping it. The Viewer should now display the images and metadata for this new object.</p>


{%- include nextprev.html -%}
