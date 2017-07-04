/**********************************公用的js文件*************************************************/

//针对不同的设备，根据设备的独立像素宽度与基准设备的独立像素宽度之间的比值  ===  设备的html的font-size与基准设备的html的font-size
//由于在移动端中的meta已经设置了视口的宽度===设备的独立像素宽度
//因此可以通过document.documentElement.clientWidth（或者document.documentElement.offsetWidth）获取到不同设备的独立像素宽度

//页面加载事件
window.addEventListener( 'load', function(){
	//获取页面的独立像素宽度
	var page_width = document.documentElement.clientWidth;
	//设置html根标签的字体大小
	document.querySelector('html').style.fontSize = page_width/750 * 75 + 'px';
	
	//设置左上角的返回上一页按钮
	//判断是否有该dom元素
	//console.log(document.querySelector('.icon-fanhui'));   没有为null，有则为该元素
	if( document.querySelector('.icon-fanhui') ){
		//设置返回键
		document.querySelector('.icon-fanhui').addEventListener( 'touchstart',function(){
			window.history.back();
		} );
	}
	
	//设置右上角的菜单按钮
	//判断是否有该dom元素
	//console.log(document.querySelector('btn_menu'));   没有为null，有则为该元素
	if( document.querySelector('#btn_menu') ){
		//触摸点击右上角的菜单栏
		document.querySelector('#btn_menu').addEventListener( 'touchstart',function(){
			$( '.menu' ).toggle();
		} );
	}
	
} )
