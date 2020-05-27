function menuscroll() {
	var $navmenu = $('.nav-menu');
	if ($(window).scrollTop() > 10) {
		$navmenu.addClass('is-scrolling');
	} else {
		$navmenu.removeClass('is-scrolling');
	}
}
menuscroll();
$(window).on('scroll', function() {
	menuscroll();
});

$('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

var siteNav = $('#navbar');
siteNav.on('show.bs.collapse', function(e) {
	$(this).parents('.nav-menu').addClass('menu-is-open');
});
siteNav.on('hide.bs.collapse', function(e) {
	$(this).parents('.nav-menu').removeClass('menu-is-open');
});

const h1width = () => {
	if (document.body.clientWidth < 992) {
		return $('#header-h1 h1').css({
			width: document.body.clientWidth
		});
	}
};
h1width();
