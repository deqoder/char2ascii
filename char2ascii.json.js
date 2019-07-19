// test data: convert 0-9 to a-i, space to '[SPACE]'
var test_ranges = [
{"start": '0', "conv": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']},
{"start": ' ', "conv": ['[SPACE]']},
{"start": ',', "conv": ['[COMMA]']}
];
var ranges = [
	{
		'start': 'α', 
		'conv': [
			'a', 'b', 'g', 'd',
			'e', 'z', 'ae', 'th', 
			'i', 'k', 'l', 'm', 'n', 'ks', 
			'o', 'p',  'r', 's', 's', 't', 
			'y', 'ph', 'kh', 'ps', 'au'
		]
	},{
		'start': 'Α', 
		'conv': [
			'A', 'B', 'G', 'D', 
			'E', 'Z', 'Ae', 'Th', 
			'I', 'K', 'L', 'M', 'N', 'Ks', 
			'O', 'P', 'R', '', 'S', 'T', 
			'Y', 'Ph', 'Kh', 'Ps', 'Au'
		]
	}, {
		'start': 'а',
		'conv': [
			'a', 'b', 'v', 'g', 'd',
			'ye', 'zh', 'z',
			'i', 'y', 'k', 'l', 'm', 'n',
			'o', 'p', 'r', 's', 't',
			'u', 'f', 'h', 'ts', 'ch', 'sh', 'shi',
			'\'', 'er', '\'i', 'e', 'yu', 'ya'
		]
	}
];
