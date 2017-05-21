
G Website Snapper
===================


A easy to use website thumbnail engines utilizing Google's PageSpeed API and some jQuery

----------


Setup
-------------

 1. First include jQuery following their setup instructions jQuery's
    website. I typically use a CDN from either jQuery or Google
    
 2. After Including jQuery's Script tag host the GWebsiteSnapper.js file
    on your server.
    
 3. Embed it using something like the following:
    
        <script src="GWebsiteSnapper.js"></script>

You may need to modify the path to the file if you don't have it stored in the same folder as the html.


----------


Usage
-------------
With the necessary scripts included you will need to configure it first.

 1. Open the GWebsiteSnapper.js file with your preferred code editor.
 
 2. Find the GWSConfig array and modify the values to fit your needs.
	 3. The following options are available:
		 4. selector:  jquery selectory for img tags 
			 - Example: ".myClass img"
		 5. device: ("desktop" or "mobile") device type for rendering screenshots of the website
		 - Example: "desktop"
		 6. fadeIn:  wether to fade image in once loaded
		 - Example: True
		 7. fadeInDuration: fade in animation duration in ms
		 - Example: 1000
		 8. ClientStorage: true wether to have the client cache the base64 strings for the specefied urls indefinitly.
		 - Example: True
 3. Save the file to your server with the modifications.

 4. modify your img tags to have a data-src attribute with the url of the website you want rendered through the library.

```
<img data-src="https://www.google.com" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
```

 5. Enjoy your new website thumbnails.

> **Notes:**

> - Library is designed for website thumbnails only. Not intended for high usage rates or high resolution.


Library is provided as is without warranty. If you have any suggestions please open an issue.

Enjoy '(^,^)'
