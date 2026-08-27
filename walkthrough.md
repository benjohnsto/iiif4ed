---
layout: default
---


# IIIF Walkthrough

## Finding IIIF Resources

Many library and museum digital collection repositories are IIIF enabled and, frustratingly, many are not. Even among the repositories that are IIIF-enabled, it may take some searching to find the IIIF icons and/or links. Below are a few repositories that are IIIF-enabled and do have IIIF links.

1. Visit one of the repositories below, find a collection that interests you, and try to find the icon/link to IIIF on one or several of the item pages within that collection  
2. Note that it may appear as a colored icon as shown to the right, as a small gray icon within the zooming viewer, or as a simple link.

Princeton University Library  
[https://dpul.princeton.edu/?tag=Library+Collections](https://dpul.princeton.edu/?tag=Library+Collections)

Bodleian Libraries, University of Oxford  
[https://digital.bodleian.ox.ac.uk/](https://digital.bodleian.ox.ac.uk/)

Brown University Libraries  
[https://repository.library.brown.edu/studio/collections/library/](https://repository.library.brown.edu/studio/collections/library/)

UCLA Library  
[https://digital.library.ucla.edu/](https://digital.library.ucla.edu/)

Harvard Library  
[https://library.harvard.edu/collections/explore-collections](https://library.harvard.edu/collections/explore-collections)

Note: You can find many other IIIFenabled repositories by looking at the IIIF consortium member map: https://iiif.io/community/map/

## A IIIF Manifest

<img src="{{site.baseurl}}/assets/images/walkthrough/image2.png" style="float:right;padding:0 0 20px 20px"/>Click on the IIIF icon/link that you found. You should be confronted with a webpage full of what looks like computer programming code or perhaps data. This is called a **manifest**. The manifest is the essential information container for IIIF. The good news is that **you don’t need to understand** this page at all. All you really need to know is how to get to it. The manifest contains **information about an object**. An object usually relates to an existing, physical object held in a repository, such as a book, painting, manuscript, Gutenberg Bible, or the Declaration of Independence. The file likely includes metadata, such as title, date, author, artist, and one, several, or many depictions of the object. Depictions, here, almost always refer to images, but could possibly be other media.

The important part of this manifest is not so much what it contains \- you don’t need to read or even look at it if you don’t want to.  The important bit is the web address, or URL.

1. Highlight and copy the URL of the manifest in your browser’s address bar.

## The Universal Viewer

<img src="{{site.baseurl}}/assets/images/walkthrough/image3.jpg" style="float:right;padding:0 0 20px 20px"/>A manifest requires a viewer to code the manifest and display the riches within. One of the most popular and common viewers is called the Universal Viewer. In fact, this is the viewer that is used in Princeton Library’s DPUL ([Digital Princeton University Library](https://dpul.princeton.edu/)).<img src="{{site.baseurl}}/assets/images/walkthrough/image1.png" style="float:right;padding:0 0 20px 20px"/>

1. Go to the homepage of the Universal Viewer at: [https://universalviewer.io/](https://universalviewer.io/)  
2. Scroll down to the section labeled **View a IIIF Manifest.**  
3. Paste your manifest url in the field and click **View**.  
4. Your object should appear within the viewer on a new page.  
5. Explore the object a bit by clicking the thumbnail images and zooming in.  
6. After you have zoomed into a detail that interests you, click the small, share icon in the lower-left hand corner of the viewer. (This icon looks like three dots connected with lines.)  
7. Copy the URL that appears under the **Share** tab and email it to yourself or bookmark it. This URL not only leads you back to this viewer loaded with this object, it also stores information about the zoom and detail that you chose\!  
   

## The Mirador Viewer

Another very popular and common viewer is the Mirador Viewer.  Mirador doesn’t allow you to share your zoom and detail (at least not as easily), but it does allow you to work with a **collection of objects** and to juxtapose objects side-by-side.

1. Again, copy the manifest URL of an object from a IIIF enabled repository.  
2. Go to [https://mcgrawcenter.github.io/mirador/](https://mcgrawcenter.github.io/mirador/)  
3. This will open a ‘blank’ Mirador Viewer. Notice on the left-hand side a blue button. While the viewer is empty, this button should read “**Start Here**”.  
4. Click the blue Start Here button and then at the bottom of the resulting window, click **Add Resource** and paste your url into the field.  Then, click **Add**.   
5. The item will be added to a list.  Items within this list can be clicked to view them in a window within the viewer.  
6. You may continue adding more IIIF URLs, but remember, there is no save function. If you close the Mirador viewer, your list will be lost.

## Cropping Tool

The cropping tool is a homegrown tool built to satisfy a specific need: to facilitate long-form annotation course activities within the learning management system (Canvas, Blackboard, etc.). It is however entirely useable outside of Canvas.

1. Visit the cropping tool at: [https://mcgrawcenter.github.io/croppingtool/](https://mcgrawcenter.github.io/croppingtool/)  
2. Copy a manifest URL and paste it in the text field labeled ‘Enter the URL of a IIIF manifest’ and then click Submit  
3. After a  moment or two the individual images that constitute the manifest object should appear in a gallery.   
4. Select an image from the gallery by clicking it to open it in the right-hand viewer.  
5. Turn on the cropping tool in the upper-right hand corner of the viewer and draw a box.  
6. A preview of your crop should appear in a toolbar across the bottom of the screen along with several buttons for copying the image to your clipboard and opening the image in a new tab.  Note, the size of the exported image depends upon the setting just below the text area above (Actual, Full).

