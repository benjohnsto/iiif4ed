---
title: "Hands on Digitl"
layout: activity
sortorder: 0
category: [methods]
callout: "... "
---

## {{page.title}}


{%- include heading name="concept" -%}


<p><img src="https://media.getty.edu/iiif/image/03e95f52-6f8a-440d-9cef-2e7655a5792a/107,4450,3883,1564/1400,/0/default.jpg" alt="Detail of an image from the Florentine Codex Book 12, showing the unloading of Spanish ships in New Spain" /></p>
<p><span style="font-size: 12pt;">A <strong>manifest </strong>is a list. On ships, a manifest would have an entry for every passenger, crew member, and officer, as well as a detailed inventory of all cargo and livestock brought aboard and unloaded. To similarly account for global transport of digitized library and museum collections online, the IIIF movers and shakers relied upon the age's-old technique: just make a list and sort it out at the other end. A IIIF manifest is an aggregated string of media links and descriptive metadata (basic information about the media) that a source institution wants to make available to users at the end of a media item's journey from its home page.</span></p>
    </div>
    <div id="kl_custom_block_1" class="" style="color: #000000;">

{%- include heading name="activity" -%}


<p><span style="font-size: 12pt;">For our 3rd installment of Unit 1 Digitl Lab Activities, we will ogle a real IIIF manifest. Then we will take hold of its handle, the Manifest URI, as some "end user" addressee of this content (a scholar, perhaps) might do, and load it into a IIIF-compatible Mirador Viewer for comparative analysis of multi-sourced worldly materiale. Penultimately, we will will try our own hand at close study and comparative detail analysis, using a custom-developed IIIF Cropping Tool, developed at Princeton University's McGraw Center. And, finally, we will reflect upon the value of such unique scholarly material, made available on site at any colegio or university <em>in one place </em>where it's really needed by the people who use it (and not back in the old world mouldering away in various cages, vaults, and jealously guarded websites).</span></p>

{%- include heading name="example" -%}


<details>
    <summary><span style="font-size: 14pt;"><span style="font-size: 12pt;"><strong>See a real manifest! </strong></span><em><span style="color: #236fa1; font-size: 12pt;">(Click to open and close)</span><br /></em><span style="font-size: 12pt;">This is just a small portion of the IIIF manifest for Volume 3 of the Digital Florentine Codex</span></span></summary>
            { "@context": "http://iiif.io/api/presentation/2/context.json", "@id": "https://media.getty.edu/iiif/manifest/d8a35385-d097-4306-89c0-1a15aa74e6da", "@type": "sc:Manifest", "attribution": [ "Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)", "Biblioteca Medicea Laurenziana - Firenze" ], "description": [ "\"catalogo:\" Bibliotheca Leopoldina Laurentiana, seu Catalogus manuscriptorum qui iussu Petri Leopoldi ... in Laurentianam translati sunt quae in singulis codicibus continentur ad quodvis litteraturae genus spectantia accuratissime describuntur edita supplentur et emendantur. Angelus Maria Bandinius ... recensuit illustravit edidit. Tomus 1. [-3.]. 3: Bibliotheca Leopoldina Laurentiana, seu Catalogus manuscriptorum qui nuper in Laurentianam translati sunt. Sub auspiciis Ferdinandi 3. ... Angelus Maria Bandinius ... recensuit illustravit edidit. Tomus 3. et ultimus. Accedunt indices auctorum, quorum opera recensentur, &amp; rerum notabilium locupletissimi {IT\\ICCU\\RAVE\\006311} {{261}}", "Preferred Citation: Firenze, Biblioteca Medicea Laurenziana, Ms. Med. Palat. 220. Su concessione del MiBACT" ], "label": "Historia general de las cosas de nueva Espana - Vol. 3", "logo": "http://www.getty.edu/museum/media/graphics/web/logos/getty.png", "metadata": [ { "label": "Variant Title", "value": [ "Florentine Codex Vol. 3" ] }, { "label": "Author/Creator", "value": [ "Sahag&Atilde;&ordm;n, Bernardino : de &lt;1499-1590&gt;" ] }, { "label": "Creation Date", "value": [ "1577" ] }, { "label": "Physical Desc.", "value": [ "cart. ; 310 x 212 mm ; 495 cc." ] }, { "label": "Language", "value": [ "spa", "nah" ] }, { "label": "Form/Genre", "value": [ "Text", "testo manoscritto" ] }, { "label": "ID/Accession No.", "value": [ "IT:FI0100_Med_Palat_220", "Med.Palat.220" ] }, { "label": "Is Part Of", "value": [ "Mediceo Palatino" ] } ], "related": "http://mss.bmlonline.it/s.aspx?Id=AWOS4CksI1A4r7GxMdb9&amp;c=Historia%20general%20de%20las%20cosas%20de%20nueva%20Espana%20-%20Vol.%203#/book", "sequences": [ { "@id": "https://media.getty.edu/iiif/manifest/d8a35385-d097-4306-89c0-1a15aa74e6da/default", "@type": "sc:Sequence", "canvases": [ { "@id": "https://media.getty.edu/iiif/manifest/3b7ed420-903a-426f-8d0f-f9be82cc1bf9", "@type": "sc:Canvas", "height": 7430, "images": [ { "@id": "https://media.getty.edu/iiif/manifest/annotation/anno-124afceb-1051-404a-91fb-df289963b74c.json", "@type": "oa:Annotation", "motivation": "sc:painting", "on": "https://media.getty.edu/iiif/manifest/3b7ed420-903a-426f-8d0f-f9be82cc1bf9", "resource": { "@id": "https://media.getty.edu/iiif/image/124afceb-1051-404a-91fb-df289963b74c/full/full/0/default.jpg", "@type": "dctypes:Image", "format": "image/jpeg", "height": 7430, "service": { "@context": "http://iiif.io/api/image/2/context.json", "@id": "https://media.getty.edu/iiif/image/124afceb-1051-404a-91fb-df289963b74c", "profile": "http://iiif.io/api/image/2/level2.json" }, "width": 1654 } } ], "label": "Image 0001", "width": 1654 },
</details>


{%- include heading name="materials" -%}



<span style="font-size: 12pt;"><span style="color: #3598db;"><span style="color: #000000;">Manifests are made available on web pages, with links called <strong>manifest URL</strong>s. You don't need to click the links, open the pages, or view the manifests. All you need to do is copy the manifest URL, and paste it into IIIF tools to access content. Below are the respective IIIF manifest URLs for each book of <em>The Florentine Codex,</em><em>&nbsp;</em>from the Bibiloteca Laurenziana.</span></span></span>
<h4><span style="font-size: 12pt;">Books 1-5</span></h4>
<pre><span style="font-size: 12pt;">https://media.getty.edu/iiif/manifest/ae8c3376-f8d6-447b-90a9-9c67b4cbe4d1</span></pre>
<h4><span style="font-size: 12pt;">Books 6-9</span></h4>
<pre><span style="font-size: 12pt;">https://media.getty.edu/iiif/manifest/3fa03fbc-a8c8-489e-83a5-1efc2d55fe5b</span></pre>
<h4><span style="font-size: 12pt;">Books 10-12</span></h4>
<pre><span style="font-size: 12pt;">https://media.getty.edu/iiif/manifest/d8a35385-d097-4306-89c0-1a15aa74e6da</span></pre>



{%- include heading name="tools" -%}


<details style="color: #000000;">
    <summary><span style="color: #000000; font-size: 12pt;"><strong>Mirador</strong><br />Use this tool to view IIIF item and collections manifests in one place for comparative study&nbsp; <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
    <iframe src="https://etcpanel.princeton.edu/IIIF/mirador/v3/" width="100%" height="700" loading="lazy"></iframe>
</details>
<details style="color: #000000;">
    <summary><span style="color: #000000; font-size: 12pt;"><strong>IIIF Cropping Tool</strong><br />Use this tool to find the URI for an image in a IIIF manifest, and to crop a detail from that image&nbsp; <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
    <iframe src="https://mcgrawcenter.github.io/croppingtool/#" width="100%" height="700" loading="lazy"></iframe>
</details>


{%- include heading name="steps" -%}



<details style="color: #000000;">
    <summary><span style="color: #000000; font-size: 12pt;"><strong>Comparative viewing in Mirador</strong><br />Read the following steps through, and then proceed one at a time through the activity. <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
    <ol style="list-style-type: decimal;">
        <li><span style="font-size: 12pt;">Copy a IIIF manifest URL</span></li>
        <li><span style="font-size: 12pt;">Click the <strong>+START HERE</strong> button in the upper left</span></li>
        <li><span style="font-size: 12pt;">Then click the <strong>+ADD RESOURCE </strong>button on the lower right (the page may jump down a bit)</span></li>
        <li><span style="font-size: 12pt;">Paste the manifest URL in the <strong>Resource location </strong>blank and click&nbsp;<strong>ADD</strong>. The item should load and display an item bar</span></li>
        <li><span style="font-size: 12pt;">Click the item bar to load the item in the viewer</span></li>
        <li><span style="font-size: 12pt;">For comparative viewing, repeat this process with another resource. You can do this multiple times</span></li>
        <li><span style="font-size: 12pt;">Zoom in and out, click through pages, and acclimate yourself to the many viewing settings, including thumbnail, single page, etc.</span></li>
    </ol>
</details>
<details style="color: #000000;">
    <summary><span style="color: #000000; font-size: 12pt;"><strong>Selecting and Cropping a IIIF image</strong><br />To access an image URL <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
    <ol style="list-style-type: decimal;">
        <li><span style="font-size: 12pt;">Copy and paste the IIIF manifest URL in the <strong>IIIF Cropping Tool</strong></span></li>
        <li><span style="font-size: 12pt;">Scroll through thumbnails on the left to find a page</span></li>
        <li><span style="font-size: 12pt;">Click the page thumbnail to load in the viewer</span></li>
        <li><span style="font-size: 12pt;">Zoom and view</span></li>
        <li><span style="font-size: 12pt;">If you would like the full image URL, click Copy&nbsp;</span></li>
        <li><span style="font-size: 12pt;">To crop a detail from the image, click the white pencil icon, and highlight the desired rectangle by clicking and dragging a rectangle from corner to corner</span></li>
        <li><span style="font-size: 12pt;">A thumbnail of your selected detail will appear in a slider at the bottom of the Cropping Tool. You can repeat to collect multiple details.</span></li>
        <li><span style="font-size: 12pt;">Click the <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Font_Awesome_5_regular_copy.svg/210px-Font_Awesome_5_regular_copy.svg.png" alt="Copy icon" width="23" height="26" /> Copy icon on the detail thumbnail for use in your assignment submission</span></li>
    </ol>
</details>
<details style="color: #000000;">
    <summary><span style="color: #000000; font-size: 12pt;"><strong>Posting with an image</strong><br />To add linked images to a discussion post <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
    <ol>
        <li><span style="font-size: 12pt;">Click Reply</span></li>
        <li><span style="font-size: 12pt;">Paste the image into the text field.&nbsp;</span></li>
        <li><span style="font-size: 12pt;">Add text and submit your reply</span></li>
        <li><span style="font-size: 12pt;">The image will automatically link to the full item loaded into a Mirador viewer</span></li>
    </ol>
</details>


{%- include heading name="share" -%}



<p><span style="font-size: 12pt;">Share a selection of 2 or more image details from at least 2 different IIIF item manifests that you feel have some relationship to each other (e.g. similarity, difference, type of thing, etc. Write a brief post explaining your choices, and provide a little context about the items from which they derived.</span></p>
<ul>
    <li><span style="font-size: 12pt;">Note that the Image Cropping Tool makes the same kinds of changes to an image URL that you did manually in the previous Lab Activity: how was the experience informed by your understanding of how linked IIIF imagery is structured?</span></li>
    <li><span style="font-size: 12pt;">Comment on the experience of deep zooming into an item to explore details: what did you see that you might not see at typical resolutions found in images optimized for websites?</span></li>
</ul>
<p><span style="font-size: 12pt;"><strong>Hint:</strong> for item information, look at their descriptions and metadata in the left side menu in Mirador</span></p>


{%- include heading name="collaborate" -%}



<p><span style="font-size: 12pt;">After you have posted, review posts by your peers and leave a comment if you'd like</span></p>
    </div>
</div>
