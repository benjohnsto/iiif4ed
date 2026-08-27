---
title: "Finding Manifests"
layout: default
sortorder: 3
category: introduction 
next: "assignment1.html"
prev: "presentation-manifest.html"
---

## {{page.title}}
<p>Every digital object (book, painting, drawing, sculpture...) that is available in IIIF has a <strong>manifest URL</strong>. The manifest URL is the key to using these objects in the various IIIF tools. You need to select and copy the URL to start working with the images and metadata.</p>
<p>IIIF is used by a growing number of institutions, but is not yet used everywhere, so the object of your choice might not yet have a manifest URL.</p>
<p><img src="{{site.baseurl}}/assets/images/IIIF.svg" alt="IIIF.svg" width="120" height="107" align="right" />One easy way to know that an object is IIIF-enabled is to look for the IIIF icon on an item's detail page. As an example, visit the following item page on UCLA's digital collection website:</p>
<p><a class="inline_disabled" href="https://digital.library.ucla.edu/catalog/ark:/21198/zz002b5w64" target="_blank" rel="noopener">https://digital.library.ucla.edu/catalog/ark:/21198/zz002b5w64</a></p>
<p>Scroll down the page until you see the IIIF logo on the right. Clicking on the logo will open the manifest.</p>
<p>The next example, from the Princeton University Art Museum, also displays the IIIF logo. Notice however, that in this instance, clicking on the logo results in opening the work in a viewer.&nbsp; To get the manifest URL in this viewer (called the Mirador Viewer), click the hamburger icon in the upper left (the three horizontal lines) and then scroll to the bottom of the metadata where you will find a link to the manifest.</p>
<p><a class="inline_disabled" href="https://artmuseum.princeton.edu/collections/objects/27933" target="_blank" rel="noopener">https://artmuseum.princeton.edu/collections/objects/27933</a></p>
<p><img style="width: 33%; margin-left: 1em;" src="{{site.baseurl}}/assets/images/yale-1.jpg" alt="yale-1.jpg" align="right" />The viewer shown to the right is called Universal Viewer and is used at many institution websites. The IIIF /link/logo might be displayed in the bottom left-hand corner of the viewer, or you may have to click the <em>Share icon</em> to access the link to the IIIF manifest. This is the case with <a class="inline_disabled" href="https://collections.library.yale.edu/catalog/10013180" target="_blank" rel="noopener">Yale Digital Collections</a>.</p>
<h2 id="copy-the-url">Copy the URL</h2>
<div class="redactor">
    <ul>
        <li>Select and copy the URL. This is the key you need to work with this object.</li>
        <li>Sometimes it will also be possible to drag and drop the IIIF logo next to the URL.</li>
        <li>If you click on the URL, the manifest will open in your web browser. You will see a page filled with json code. Don't panic! You don't need the code, only the URL.</li>
    </ul>
</div>
<p>&nbsp;</p>
<p>Unfortunately, each institution presents their IIIF manifest links in slightly different way, so you may have to hunt and peck.</p>
<h2 id="where-to-find-manifest-urls">Activity: Finding manifests</h2>
<p>See if you can find the manifest URL in the following repositories.</p>
<div class="redactor">
    <p><strong>Specific institutions: Look for the words 'IIIF manifest URL' or the IIIF logo in the metadata (descriptions) of an item in the institution's online catalogue. Some examples, all starting from an item's individual record (catalogue description):</strong></p>
    <ul>
        <li><a href="https://digital.library.ucla.edu/" target="_blank" rel="noopener">UCLA Library Digital Collections</a> &gt; On a single object page, a link to the manifest appears with the IIIF icon just below the zooming viewer.</li>
        <li><a href="https://lib.ugent.be/" target="_blank" rel="noopener">Ghent University Library</a> &gt; go to &lsquo;For developers&rsquo;</li>
        <li><a href="https://bib.kuleuven.be/" target="_blank" rel="noopener">KU Leuven</a> &gt; go to &lsquo;View online&rsquo; &gt; open the manuscript in Teneo &gt; go to &lsquo;information&rsquo; (&lsquo;Permalink IIIF manifest&rsquo;)</li>
        <li><a href="https://gallica.bnf.fr/accueil/fr/content/accueil-fr?mode=desktop" target="_blank" rel="noopener">Gallica BnF</a> &gt; click on the IIIF logo in the left sidebar &gt; click on the information 'i' logo in the right upper corner to open the metadata for the object &gt; the manifest is at the bottom of the metadata</li>
        <li><a href="https://cudl.lib.cam.ac.uk/" target="_blank" rel="noopener">Cambridge University Digital Library</a> Many options, among others the obvious 'Manifest URL' button.</li>
        <li><a href="https://search.getty.edu/gateway/search?q=&amp;cat=highlight&amp;f=%22Open+Content+Images%22&amp;rows=10&amp;srt=a&amp;dir=s&amp;pg=1" target="_blank" rel="noopener">Getty Museum</a> &gt; Filter on 'open content images' &gt; search for object &gt; manifest is at the bottom of the record, under 'APIs &amp; other identifiers'</li>
        <li><a href="https://www.museabrugge.be/collecties/doorzoek" target="_blank" rel="noopener">Musea Brugge</a> &gt; manifest is at the bottom of the record, under 'Linked Open Data'</li>
        <li><a href="https://catalog.loc.gov/" target="_blank" rel="noopener">Library of Congress</a> &gt; 'manifest' is listed at the bottom of the record &gt; open the manifest &gt; copy the URL</li>
        <li><a href="https://iiif.biblissima.fr/collections/" target="_blank" rel="noopener">Biblissima IIIF Collections</a>: This website tries to gather <em>all </em>of the available manifests of manuscripts and rare books in the world (but is not exhaustive yet). Some 100.000 IIIF compliant manuscripts and rare books! Includes giant collections like <a href="https://gallica.bnf.fr/accueil/fr/content/accueil-fr?mode=desktop" target="_blank" rel="noopener">Gallica (BnF)</a> and <a href="https://www.e-codices.unifr.ch/en" target="_blank" rel="noopener">e-codices</a>.</li>
        <li><a href="https://fragmentarium.ms/" target="_blank" rel="noopener">Fragmentarium</a>: Circa 5400 IIIF compliant medieval manuscript fragments.</li>
        <li><a href="https://archive.org/" target="_blank" rel="noopener">Internet Archive</a>: Millions of texts, images, audio and video available in IIIF. The manifests URLs are not published but can be reconstructed quite easily by inserting an item's identifier into a URL structure (see this <a href="https://guides.iiif.io/guides/archive.org/" target="_blank" rel="noopener">3-step guide</a>).</li>
        <li><a href="https://francearchives.gouv.fr/en" target="_blank" rel="noopener">FranceArchives</a>: National aggregator for French archives. IIIF already implemented for <a href="https://francearchives.gouv.fr/fr/article/714850036">these collections</a>, and growing.</li>
        <li><a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" target="_blank" rel="noopener">Wikidata</a>: Contains manifest URLs for thousands of objects (but not consistently). You can search directly in Wikidata, or search for the item you are interested in on Wikipedia &gt; click on 'wikidata item' &gt; the manifest URL is listed under 'statements' (e.g. <a href="https://www.wikidata.org/wiki/Q698487">The Kiss</a> by Gustave Klimt).</li>
    </ul>
</div>

{%- include nextprev.html -%}


