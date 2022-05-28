# Instruções para uso #

1 - Clonar progeto
2 - Rodar na raiz do projeto o comando npm install
3 - Criar arquivo input.csv na raiz do projeto com o dados para converter para json
4 - Rodar comando npm start
Será gerado um arquivo chamado output.json na raiz do projeto, com os valores do csv

# Informações adicionais #

1 - Para mudar o caminho que a aplicação espera que o arquivo .csv esteja, basta mudar na constante csvFilePath
2 - Para mudar o caminho que a aplicação irá gerar o arquivo .json, basta mudar na constante jsonFilePath


# Dados para testes #

# Exemplo 1
Conteúdo do arquivo csv:
fullname,eid,email Student,phone Student,"email Pedagogical Responsible","phone Pedagogical Responsible","email Financial Responsible","phone Financial Responsible",group,group,invisible,see_all
John Appleseed,104,john.appleseed@exemplo.com :(,kkkkkkk,dad.appleseed@exemplo.com,(11) 99991-1234,mom.appleseed@exemplo.com,(11) 99992-1234,Sala 1 / Sala 2,Sala 3,1,no
John Appleseed,104,john.appleseed1@exemplo.com,(11) 99990-1235,dad.appleseed1@exemplo.com/dad.appleseed2@exemplo.com,(11) 99991-1235,,,"Sala 2,Sala 5", Sala 6,1,no
Mary Knight,105,mary.knight@exemplo.com,12 99990-1235,dad.knight@exemplo.com,,mom.knight@exemplo.com,,Sala 4,"Sala 5, Sala 6",no,
Jack Littleton,106,jack.littleton@exemplo.com,(13) 99990,,(13) 99991-1236,mom.littleton@exemplo.com,(13) 999921236,Sala 1,,,0
Kate Goldman,107,kate.goldman@exemplo.com,14999901237,dad.goldman@exemplo.com,,mom.goldman@exemplo.com,(14) 99992-1237,Sala 6,Sala 7,,yes

Conteúdo do arquivo json:
[
	{
		"fullname": "John Appleseed",
		"eid": "104",
		"groups": [
			"Sala 1",
			"Sala 2",
			"Sala 3",
			"Sala 5",
			"Sala 6"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "john.appleseed@exemplo.com"
			},
			{
				"type": "email",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "dad.appleseed@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "5511999911234"
			},
			{
				"type": "email",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "mom.appleseed@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "5511999921234"
			},
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "john.appleseed1@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Student"
				],
				"address": "5511999901235"
			},
			{
				"type": "email",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "dad.appleseed1@exemplo.com"
			},
			{
				"type": "email",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "dad.appleseed2@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "5511999911235"
			}
		],
		"invisible": true,
		"see_all": false
	},
	{
		"fullname": "Mary Knight",
		"eid": "105",
		"groups": [
			"Sala 4",
			"Sala 5",
			"Sala 6"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "mary.knight@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Student"
				],
				"address": "5512999901235"
			},
			{
				"type": "email",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "dad.knight@exemplo.com"
			},
			{
				"type": "email",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "mom.knight@exemplo.com"
			}
		],
		"invisible": false,
		"see_all": false
	},
	{
		"fullname": "Jack Littleton",
		"eid": "106",
		"groups": [
			"Sala 1"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "jack.littleton@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "5513999911236"
			},
			{
				"type": "email",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "mom.littleton@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "5513999921236"
			}
		],
		"invisible": false,
		"see_all": false
	},
	{
		"fullname": "Kate Goldman",
		"eid": "107",
		"groups": [
			"Sala 6",
			"Sala 7"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "kate.goldman@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Student"
				],
				"address": "5514999901237"
			},
			{
				"type": "email",
				"tags": [
					"Pedagogical",
					"Responsible"
				],
				"address": "dad.goldman@exemplo.com"
			},
			{
				"type": "email",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "mom.goldman@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Financial",
					"Responsible"
				],
				"address": "5514999921237"
			}
		],
		"invisible": false,
		"see_all": true
	}
]

# Exemplo 2
Conteúdo do arquivo csv:
fullname,eid,group,group,group,"email Student","phone Student","email Parent","phone Parent",invisible,see_all
John Appleseed,1121,Turma 1 / Turma 2 / Turma 3,"Turma 6",Noturno,john.appleseed@exemplo.com,kkkkkkk,dad.appleseed@exemplo.com,(11) 99991-1234,1,1
John Appleseed,1222,"Turma 2,Turma 5", Turma 6,Diurno,john.appleseed1@exemplo.com,(11) 99990-1235,dad.appleseed1@exemplo/dad.appleseed2@exemplo.com,(11) 99991-1235,yes,no
Mary Knight,1123,,,,mary.knightexemplo.com,12 99990-1235,dad.knight@exemplo.com,,0,
Jack Littleton,1124,Sala 1,,,jack.littleton@exemplo.com,13 99990,,(13) 99991-1236,,1

Conteúdo do arquivo json:
[
	{
		"fullname": "John Appleseed",
		"eid": "1121",
		"groups": [
			"Turma 1",
			"Turma 2",
			"Turma 3",
			"Turma 6",
			"Noturno"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "john.appleseed@exemplo.com"
			},
			{
				"type": "email",
				"tags": [
					"Parent"
				],
				"address": "dad.appleseed@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Parent"
				],
				"address": "5511999911234"
			}
		],
		"invisible": true,
		"see_all": true
	},
	{
		"fullname": "John Appleseed",
		"eid": "1222",
		"groups": [
			"Turma 2",
			"Turma 5",
			"Turma 6",
			"Diurno"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "john.appleseed1@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Student"
				],
				"address": "5511999901235"
			},
			{
				"type": "email",
				"tags": [
					"Parent"
				],
				"address": "dad.appleseed2@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Parent"
				],
				"address": "5511999911235"
			}
		],
		"invisible": true,
		"see_all": false
	},
	{
		"fullname": "Mary Knight",
		"eid": "1123",
		"groups": [],
		"addresses": [
			{
				"type": "phone",
				"tags": [
					"Student"
				],
				"address": "5512999901235"
			},
			{
				"type": "email",
				"tags": [
					"Parent"
				],
				"address": "dad.knight@exemplo.com"
			}
		],
		"invisible": false,
		"see_all": false
	},
	{
		"fullname": "Jack Littleton",
		"eid": "1124",
		"groups": [
			"Sala 1"
		],
		"addresses": [
			{
				"type": "email",
				"tags": [
					"Student"
				],
				"address": "jack.littleton@exemplo.com"
			},
			{
				"type": "phone",
				"tags": [
					"Parent"
				],
				"address": "5513999911236"
			}
		],
		"invisible": false,
		"see_all": true
	}
]