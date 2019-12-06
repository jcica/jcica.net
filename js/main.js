$(document).ready(function() {
	var item_num = 1;
	$.ajax({
		url: 'feed.xml',
		type: 'GET',
		dataType: 'xml',
		timeout: 5000, //设定超时
		cache: false, //禁用缓存
		error: function(xml) {
			alert("加载博客文章出错,请刷新重试或联系站点管理员.");
		},
		success: function(xml) {
			$(xml).find("item").each(function(i) { //查找所有item节点并遍历
				var item_title = $(this).children("title").text(); //取节点标题
				var item_description = $(this).children("description").text(); //取节点简介
				var item_link = $(this).children("link").text();
				$("#rss-new-book").append('<div id="item-' + item_num + '" class="rss-output"><a href="' + item_link +
					'" target="_blank"><h4><span class="glyphicon glyphicon-bookmark"></span> ' + item_title + '</h4></a><p>' + item_description + '</p></div>');
				item_num++;
			});
			$("#rss-new-book").append('<a href="/blog"><span class="glyphicon glyphicon-hand-right"></span> 查看所有文章</a>');
		}
	});
	if ($(document).width() <= 768) {
		$("#nav-title").html("陶大计协");
	}
});
