$(function() {
	$.ajax({
		url: '/api/topics/hot.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		if (!data) return;
		var html = '';
		for (var i = 0; i < data.length; i++) {
			var item = data[i]
			html += `<li><a href="${item.url}">${item.title}<a></li>`;
		}
		$('#app').html(html);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});