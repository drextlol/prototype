$(document).ready(function() {
	
	var feed = new Instafeed({
	    get: 'tagged',
        tagName: 'redbull',
        clientId: '60ef0c75dc8d46ea949008e809beefdf',
        limit: 12,
        resolution: 'low_resolution',
        template: '<a href="{{link}}" target="_blank"><span class="wing"></span><img src="{{image}}" alt="{{caption}}" /></a>'
    });

    feed.run();
});