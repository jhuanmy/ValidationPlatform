var lkup5 = ["090","091","092","093","094","095","096","097","098","340","962","963","964","965","966"];

var lkup6 = ["13","14","17","18","19","20"];

var lkup7 = ["02","10","11","12","14","15","22","25","41"];

var lkup8 = ["17","18"];
 	
var lkup9 = ["10","11","12","13","14","15","25","26","27","28","29","30","32","33","35","36","37","41"];
	
var lkup10 = ["02","24","31","34","38","39","40"];
	
var lkup11 = ["01009","03100","03211","03213","03219","03311","03312","03321","03322","03324","03329","04191","05111","05112","05121","05122","05130","05201","05202","05204","06420","07111","07120","07130","07191","07210","07241","07431","07791"];
	
var lkup12 = ["08310","08410","17110","17120","17201","17202","17500","17600","18100","18200","18210","19310","19321","19322","19329","19330","20101","20102","20221","20222","20241","20242","20263","20291","23902","40120"];

var lkup13 = ["03930","07429","07432","07731","07732","08310","08320","08410","08420","13910","13993","14992","14994","14995","14999","16000","17110","17120","17201","17202","17500","17600","18100","18200","18210","18220","19100","19209","19310","19321","19322","19329","19330","19920","19930","19990","20101","20102","20210","20221","20222","20229","20241","20242","20251","20259","20263","20264","20269","20291","20293","20299","20300","20410","20420","20430","20501","20502","20504","20509","21000","22020","22039","22049","22090","23110","23121","23122","23201","23202","23300","23400","23500","23901","23902","23904","23906","23909","24101","24102","25091","26909","27120","31991","31993","32491","34320","35911","35912","35920","36409","38499","40120","41110","41120","41130","41299"];
	
var lkup14 = ["MISSISSAUGA", "MISTATIM", "MORELL", "MORDEN", "MORSE"];//incomplete

var lkup15 = ["ACONCHI", "ACTOPAN", "AGOSTITLAN", "AMACUZAC", "AMATEPEC", "AMAZCALA"];//incomplete

var lkup16 = ["CANADA", "MEXICO","AFGANISTAN", "ALBANIA", "ALGERIA", "ANDORRA", "ANGOLA", "ARGENTINA"];//incomplete

var lkup17 = [
	{
		"partial_naics" : "314",
		"sctg_2digit" : "35",
		"flag_value" : "1"
	},
	{
		"partial_naics" : "314",
		"sctg_2digit" : "34",
		"flag_value" : "2"
	},
	{
		"partial_naics" : "315",
		"sctg_2digit" : "10",
		"flag_value" : "3"
	},
	{
		"partial_naics" : "315",
		"sctg_2digit" : "30",
		"flag_value" : "0"
	},
	{
		"partial_naics" : "316",
		"sctg_2digit" : "36",
		"flag_value" : "2"
	}	
];//incomplete

var lkup18 = ["02","10","11","12","13","14","15","19","22","25","31","32","33"];

var lkup19 = ["16","17","18"];

var lkup20 = [
	{
	"mode": 1,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 2,
	"minWeight": 0,
	"maxWeight": 80000
	},
	{
	"mode": 3,
	"minWeight": 0,
	"maxWeight": 80000
	},	
	{
	"mode": 4,
	"minWeight": 5000,
	"maxWeight": Infinity
	},	
	{
	"mode": 5,
	"minWeight": 5000,
	"maxWeight": Infinity
	},
	{
	"mode": 6,
	"minWeight": 5000,
	"maxWeight": Infinity
	},
	{
	"mode": 8,
	"minWeight": 0,
	"maxWeight": 2000
	},
	{
	"mode":12,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 13,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 18,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 21,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 31,
	"minWeight": 0,
	"maxWeight": 150
	},
	{
	"mode": 81,
	"minWeight": 0,
	"maxWeight": 150
	}
];

var lkup21 = ["1","2","3"];

var lkup22 = ["4","5","6"];

var lkup23 = ["7","8","9"];

var lkup24 = ["10","11","12"];

var lkup25 = ["Y","N"];

var lkup26 = ["7"];

var lkup27 = ["1"];

var lkup28 = ["8"];

var lkup29 = ["2","3","4"];

var lkup30 = ["33","42","45"];

var lkup31 = [
	{
	"sctg": "08310",
	"unna": "1170"
	},
	{
	"sctg": "08310",
	"unna": "1986"
	},
	{
	"sctg": "08310",
	"unna": "1987"
	},
	{
	"sctg": "08310",
	"unna": "3065"
	},
	{
	"sctg": "08410",
	"unna": "3274"
	},
	{
	"sctg": "08410",
	"unna": "1987"
	},
	{
	"sctg": "08410",
	"unna": "1986"
	},
	{
	"sctg": "17110",
	"unna": "1203"
	},
	{
	"sctg": "17120",
	"unna": "1203"
	},
	{
	"sctg": "17201",
	"unna": "1863"
	},
	{
	"sctg": "17201",
	"unna": "1223"
	},
	{
	"sctg": "17202",
	"unna": "1863"
	},
	{
	"sctg": "17202",
	"unna": "1223"
	},
	{
	"sctg": "17500",
	"unna": "3475"
	},
	{
	"sctg": "17500",
	"unna": "1203"
	},
	{
	"sctg": "17600",
	"unna": "1170"
	},
	{
	"sctg": "17600",
	"unna": "1986"
	},
	{
	"sctg": "17600",
	"unna": "1987"
	},
	{
	"sctg": "18100",
	"unna": "1202"
	},
	{
	"sctg": "18100",
	"unna": "1993"
	},
	{
	"sctg": "18200",
	"unna": "1202"
	},
	{
	"sctg": "18200",
	"unna": "1993"
	},
	{
	"sctg": "18210",
	"unna": "1202"
	},
	{
	"sctg": "18210",
	"unna": "1993"
	},
	{
	"sctg": "19310",
	"unna": "1972"
	},
	{
	"sctg": "19321",
	"unna": "1075"
	},
	{
	"sctg": "19321",
	"unna": "1978"
	},
	{
	"sctg": "19322",
	"unna": "1075"
	},
	{
	"sctg": "19322",
	"unna": "1011"
	},
	{
	"sctg": "19329",
	"unna": "1964"
	},
	{
	"sctg": "19329",
	"unna": "1965"
	},
	{
	"sctg": "19330",
	"unna": "1964"
	},
	{
	"sctg": "19330",
	"unna": "1965"
	},
	{
	"sctg": "20101",
	"unna": "1824"
	},
	{
	"sctg": "20102",
	"unna": "1814"
	},
	{
	"sctg": "20221",
	"unna": "1050"
	},
	{
	"sctg": "20221",
	"unna": "1760"
	},
	{
	"sctg": "20221",
	"unna": "1789"
	},
	{
	"sctg": "20222",
	"unna": "1830"
	},
	{
	"sctg": "20222",
	"unna": "1831"
	},
	{
	"sctg": "20241",
	"unna": "1013"
	},
	{
	"sctg": "20242",
	"unna": "1006"
	},
	{
	"sctg": "20242",
	"unna": "1046"
	},
	{
	"sctg": "20242",
	"unna": "1049"
	},
	{
	"sctg": "20242",
	"unna": "1066"
	},
	{
	"sctg": "20242",
	"unna": "1072"
	},
	{
	"sctg": "20242",
	"unna": "1956"
	},
	{
	"sctg": "20263",
	"unna": "1402"
	},
	{
	"sctg": "20291",
	"unna": "1017"
	},
	{
	"sctg": "23902",
	"unna": "0331"
	},
	{
	"sctg": "23902",
	"unna": "0332"
	},	
	{
	"sctg": "23902",
	"unna": "1383"
	},
	{
	"sctg": "40120",
	"unna": "0012"
	},
	{
	"sctg": "40120",
	"unna": "0044"
	},
	{
	"sctg": "40120",
	"unna": "0161"
	}	
];

var lkup32 = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

var lkup33 = ["CANADA", "MEXICO"];

	