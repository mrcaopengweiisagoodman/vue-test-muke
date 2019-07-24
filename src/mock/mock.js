import Mock from 'mockjs';
Mock.mock(/getNewsList/, { 
 	// 生成数据模板
 	// 5条数据
	'list|5': [
		{	
			// 随机生成url
			'url': '@url',
			// 随机生成标题，c代表为chinese，字符长度区间为5-20
			'title': '@ctitle(5,20)',
		}
	]
})