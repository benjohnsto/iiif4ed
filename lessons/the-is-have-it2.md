---
title: "The I's Have It"
layout: activity
sortorder: 0
category: [basics]
callout: "... "
---

## {{page.title}}

{%- include heading name="concept" -%}

<div id="kl_wrapper_3" class="kl_circle_left variation_2 kl_wrapper" style="border-style: none; color: #000000;">
    <div id="kl_custom_block_0" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;"><span style="font-size: 18pt;">💡 </span>Concept</h3>
        <p><span style="font-size: 12pt;">At first reading, one could assume that I is for <strong><span style="text-decoration: underline;">i</span>nteroperability</strong>. Or it's for <span style="text-decoration: underline;">i</span>nternational. Or it could be for <span style="text-decoration: underline;">i</span>mage. In fact, none of these is completely true. The very 21st-Century techno-jargonistic <em>acronym&nbsp;</em>or abbreviation of first initials, is officially pronounced "triple-eye-eff." It would perhaps be better written&nbsp;</span> <span style="font-size: 18pt;"><sup>👁👁👁</sup><strong>f</strong></span><span style="font-size: 14pt;">, <span style="font-size: 12pt;">that is, as a monstrous letter f with three peepers. The global community of librarians, archivists, museum curators, technologists, and educators who dreamed up the <strong>International Image Interoperability Framework</strong> conjured an acronymic logo </span></span><span style="font-size: 12pt;"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/International_Image_Interoperability_Framework_logo.png" alt="IIIF logo" width="35" height="35" /> that does, in fact, have awesome powers because it is also an icon. So what can you see with IIIF, and what is the relationship between icons and what you say when you are "reading" them?&nbsp;</span></p>
    </div>
    <div id="kl_custom_block_1" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">🖥️ &nbsp;<span style="color: #ffffff;">Activity</span></h3>
        <p><span style="font-size: 12pt;">For our second Digitl Lab Activity, we will explore some of the hidden powers in an<span style="font-size: 18pt;"> <span style="font-size: 24pt;"><strong>i</strong></span></span>mage that uses the IIIF URI API. This anachronistic acronym alphabet soup bears spelling out:&nbsp;</span></p>
        <ul>
            <li><span style="font-size: 12pt;"><strong>IIIF</strong> is the International Image Interoperability Framework: we're going to learn about it first-hand.</span></li>
            <li><span style="font-size: 12pt;"><strong>URI</strong> (<img src="https://em-content.zobj.net/source/microsoft-teams/363/index-pointing-at-the-viewer_1faf5.png" alt="Emoji for finger pointing at you" width="35" height="35" />= <span style="font-size: 18pt;"><sub>👁</sub></span> ) stands for <strong>U</strong>niform<strong> R</strong>esource <strong>I</strong>dentifier: it is a unique string of characters assigned to a particular resource (such as a digitl image); in most cases you've probably run across in life these days, a URI is the same as a URL (Uniform Resource Locator). A URL gets something for you, whereas a URI identifies it. In the IIIF universe, the term URI is preferred, but we will use it like an everyday URL, that is, the string of characters you see in your browser bar.</span></li>
            <li><span style="font-size: 12pt;"><strong>API </strong>is short for Application Programming Interface. It is a set of rules that computer programmers share to help their respective programs play nice with each other. Here it regularizes image URIs so we can maniipulate them with predictable results.</span></li>
        </ul>
        <p><span style="font-size: 12pt;">We're going to play with a IIIF image URI and see what it presents to us, depending upon modifications we make to its sequenced characters.</span></p>
    </div>
    <div id="kl_custom_block_4" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">🧱 Materials</h3>
        <pre>https://media.getty.edu/iiif/image/d5524600-64ba-4b21-b7fd-b20f2f79b00c/1355,4970,80,70/,600/0/bitonal.jpg</pre>
    </div>
    <div id="kl_custom_block_5" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">🛠️ Tools</h3>
        <iframe src="https://etcpanel.princeton.edu/IIIF/imagetool/" width="100%" height="700" loading="lazy" allowfullscreen="allowfullscreen"></iframe>
    </div>
    <div id="kl_custom_block_6" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">🪜 Steps</h3>
        <details style="color: #000000;">
            <summary><span style="color: #000000; font-size: 12pt;"><strong>IIIF Image URI API manipulation activity</strong><br />Read the following steps through, and then proceed one at a time through the activity. <span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
            <ol style="list-style-type: decimal;">
                <li><span style="font-size: 12pt;">First, see an image delivered using the URI in the grey box in Materials above, by pasting it into the IIIF Image URL tool. Look closely at it: how might the <span style="font-size: 18pt;">👁</span> in the image relate to the <span style="font-size: 18pt;">👁</span>conic expressions we've been discussing?</span></li>
                <li><span style="font-size: 12pt;">Then look at the diagram below, which includes a simplified URI, and illustrates what various parts of it can be specified to return just the part, size, and quality of an image you want.</span></li>
                <li><span style="font-size: 12pt;">Following the example shown, try making selective changes to the URI you pasted in the viewing tool above, for example:</span>
                    <ol style="list-style-type: disc;">
                        <li><span style="font-size: 12pt;">for region, try different numbers between the commas</span></li>
                        <li><span style="font-size: 12pt;">for size, try different percentages, e.g. /pct:25/, and then try different pixel sizes large and small for width and/or height, e.g. /200,200/ or /700,/ or /,700/</span></li>
                        <li><span style="font-size: 12pt;">for rotation, note that some servers, like this one, will only deliver in quarter turns, such as /0/ or /90/ or /180/ or /270/</span></li>
                        <li><span style="font-size: 12pt;">for quality, try: /grey.jpg or /color.jpg or /bitonal.jpg</span></li>
                    </ol>
                </li>
                <li><span style="font-size: 12pt;">Then take a look at the full image, by replacing pixel values or percentages with /full/full/ for region and size.&nbsp;</span></li>
                <li><span style="font-size: 12pt;">Zoom around and look at the image to see what you recognize. Look closely at the characters and symbols: what do you notice about their configuration, distribution, similarities and differences.</span></li>
                <li><span style="font-size: 12pt;">After you are done, take a step back to the previous Lab Activity and look again at the HTML code in the grey box. Does any of it look more intelligible now that you've learned about IIIF Image URIs?</span></li>
                <li><span style="font-size: 12pt;">To wrap up, using the URI tool, create an image you would like to share with the class in this Lab Activity, and post it with a brief reflective comment below.</span></li>
            </ol>
            <p><img src="https://iiif.io/api/image/1.0/images/iiif-order.png" alt="Diagram of IIIF Image URI API " width="100%" height="100%" /></p>
        </details>
        <details style="color: #000000;">
            <summary><span style="color: #000000; font-size: 12pt;"><strong>Posting with an image</strong><br />To add linked images to a discussion post&nbsp;<span style="color: #236fa1;"><em>(click to open and close)</em></span></span></summary>
            <ol>
                <li><span style="font-size: 12pt;">click Reply</span></li>
                <li><span style="font-size: 12pt;">to enter your image details, click the <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png" alt="Picture icon" width="35" height="31" />&nbsp;picture icon&nbsp;in the text editing toolbar. In the <strong>Upload Image</strong> popup, click the&nbsp;<strong>URL</strong> tab, and paste your URL in the <strong>File URL</strong> blank. Briefly describe your image in the Alt Text field (for the visually impaired), and click<span style="color: #000000;"> <strong>Post Reply </strong></span>.</span></li>
                <li><span style="font-size: 12pt;">repeat for additional images</span></li>
            </ol>
        </details>
    </div>
    <div id="kl_custom_block_7" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">✉️ Share</h3>
        <p><span style="font-size: 12pt;">Post an image detail you modified, or leave a comment about IIIF image manipulation as an experience and a set of possibilities</span></p>
    </div>
    <div id="kl_custom_block_8" class="">
        <h3 class="" style="background-color: #047590; color: #ffffff; padding: 0.2em 0.6em; border-radius: 30px;">🤝 Collaborate</h3>
        <p><span style="font-size: 12pt;">Look through the posts by other participants, and leave a comment if you are so inspired</span></p>
    </div>
</div>
