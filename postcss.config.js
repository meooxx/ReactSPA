
const postcss = require('postcss')

module.exports = {
	plugins:[ 
		//	postcss([ require('postcss-autoreset')]),
			require('postcss-smart-import')({  }), 
    //�ٷ�������˵����ֱ���� 
		//̫�������� ��ᣬmd,�����ܼ�
  
			postcss([
			require('precss')({ /* options */ })
			]),
  
		// 
		
		require('postcss-cssnext')({ }), 
		
	]
}

