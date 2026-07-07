---
title: "Training Lab Activity: The IIIF Image URL"
layout: activity
sortorder: 6
category: basics
callout: "Learn how to manipulate a IIIF-enabled image using the IIIF Image API"
---

# IIIF Literacy


## Understanding the IIIF Image API URL

The **International Image Interoperability Framework (IIIF)** Image API lets you manipulate high-resolution images simply by changing the text inside the image's URL. Instead of downloading a massive file and editing it in Photoshop, you can crop, resize, rotate, and change the format of an image right in your web browser.

A standard IIIF Image API URL follows this exact structure:

> `{scheme}://{server}/{prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}`

To change how the image looks, you only need to edit the last five parameters: **region**, **size**, **rotation**, **quality**, and **format**.

---

### The Base Image

Let's assume you start with a base URL that displays the full, original image:
`[https://example.edu/iiif/demo/full/full/0/default.jpg](https://example.edu/iiif/demo/full/full/0/default.jpg)`

---

## 1. Region (Cropping)

The first parameter after the image ID controls what part of the image you see.

* **`full`**: Displays the entire image without any cropping.
* **`x,y,w,h` (Pixels):** Crops a specific rectangular area.
* `x` and `y` are the starting coordinates (in pixels) from the top-left corner.
* `w` and `h` are the width and height of the crop box.
* *Example:* `.../demo/100,200,500,500/...` selects a 500x500 pixel square starting 100 pixels from the left and 200 pixels down.


* **`pct:x,y,w,h` (Percentages):** Crops using percentages instead of exact pixels. This is highly useful if you don't know the exact dimensions of the image.
* *Example:* `.../demo/pct:25,25,50,50/...` selects a box right in the middle of the image, starting 25% from the top-left, spanning 50% of the total width and height.



---

## 2. Size (Scaling / Resizing)

The next parameter controls the display size of the output image.

* **`full`** or **`max`**: Delivers the image at its highest original resolution.
* **`w,` (Width only):** Sets the width to a specific pixel value and scales the height automatically to maintain the correct aspect ratio.
* *Example:* `.../demo/full/400,/0/...` makes the image exactly 400 pixels wide.


* **`,h` (Height only):** Sets the height to a specific pixel value and scales the width automatically.
* *Example:* `.../demo/full/,600/0/...` makes the image exactly 600 pixels tall.


* **`pct:n` (Percentage scale):** Scales the entire image by a percentage.
* *Example:* `.../demo/full/pct:50/0/...` shrinks the image to 50% of its original size.



---

## 3. Rotation (Tilting & Mirroring)

This parameter controls the orientation of the image.

* **`0`**: No rotation; standard layout.
* **`90`, `180`, `270**`: Rotates the image clockwise by the specified degrees.
* *Example:* `.../demo/full/full/180/default.jpg` turns the image completely upside down.


* **`!0`, `!90**`: Prepending an exclamation point (`!`) mirrors the image horizontally *before* applying any specified rotation.

---

## 4. Quality (Color & Rendering)

This parameter changes the color profile or color depth of the image.

* **`default`**: The native color profile of the original source image.
* **`color`**: Forces a color image output (if available).
* **`gray`**: Converts the image entirely to grayscale. Excellent for reading faded ink or studying text layouts without color distractions.
* **`bitonal`**: Converts the image strictly to black and white pixels (no shades of gray). This turns drawings or text into crisp, high-contrast silhouettes.

---

## 5. Format (File Type)

The final suffix specifies the file extension of the returned image.

* **`.jpg`**: Best for standard photographs, paintings, and manuscripts.
* **`.png`**: Useful if you are working with graphics or require lossless quality.

{%- include activity.html -%}


<p>Below is an image URL manipulation tool. Enter the URL of a IIIF image URL to view changes to the images in real-time. </p>
<p><iframe src="https://etcpanel.princeton.edu/IIIF/imagetool/" width="100%" height="800" loading="lazy" allowfullscreen="allowfullscreen"></iframe></p>

## Quick Cheat Sheet Examples

| Desired Action | Target URL Segment Changes |
| --- | --- |
| **View the full image normally** | `/full/full/0/default.jpg` |
| **Get a thumbnail (200px wide)** | `/full/200,/0/default.jpg` |
| **Rotate a manuscript page 90°** | `/full/full/90/default.jpg` |
| **Turn the page into grayscale** | `/full/full/0/gray.jpg` |
| **Crop a 50% square out of the center** | `/pct:25,25,50,50/full/0/default.jpg` |

### Try It Yourself:

Copy any valid IIIF image URL into your browser bar and try changing `/full/full/0/default.jpg` to `/full/pct:25/180/gray.jpg` to see the API execute your changes instantly!
