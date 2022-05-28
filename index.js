const { writeFileSync, readFileSync, existsSync } = require('fs');
var jsonFormat = require('json-format');
const { exit } = require('process');
const csvFilePath = 'input.csv';
const jsonFilePath = 'output.json';

/*Verifica se existe arquivo csv. Caso não exista, exibe mensagem informando.
Caso contrário, dá prosseguimento*/
if(!existsSync(csvFilePath)) {
    console.log('Arquivo input.csv não encontrado na raiz do projeto. Forneça o arquivo para conversão.');
    exit();
}

const csv = readFileSync(csvFilePath, 'utf-8');

const linesCsv = csv.toString().split("\n");
const headerCsv = linesCsv[0];
let valuesCsv = linesCsv;
valuesCsv.shift();

//Verifica se string possui address, e retorna, caso exista
const isAddress = (str)=>{
    return str.search(/\s/) >= 0 ? str.split(' ') : false;
}

//Verifica se string possui grupo, caso exista, retorna
const getGroups = (str)=>{
    return str.match(/Sala \d|Turma \d|Noturno|Diurno/g);
}

//Cria uma estrutura para armazenar valores do addresses, de acordo com header
const formatAddresses = (addressesArr)=>{

    return addressesArr.map(str=>{
        let result = isAddress(str);
        if(result){
            let obj = {};
            obj.type = result[0];
            result.shift();
            obj.tags = result;
            return obj;
        }
        return str;
    });

}

//Formata telefones no padrão esperado. Ex.: 5521987654321
const formatPhones = (phonesArr)=>{
    return phonesArr.map(phone=>`55${phone.replace(/\D/g, '')}`);
}

//Encontra addresses
const getAddresses = (type, str)=>{
    if(type === 'email') return str.match(/\w+.?\w+@\w+.com/g);
    if(type === 'phone'){
        let phones = str.match(/\(?\d{2}\)?\s*\d{5}-?\d{4}/g);

        return !phones ? phones : formatPhones(phones);

    }
}

//Procura por linhas que possuem mesmo eid e mescla
const mergeLines = (linesArr)=>{
    
    let eids = [...new Set(linesArr.map(line=>line.eid))];

    return eids.map(eid=>{
        return linesArr
            .filter(line=>line.eid === eid)
            .reduce((acc, current)=>{
                let newObj = {};
                Object
                    .entries(current)
                    .forEach(entry=>{
                        if(typeof entry[1] === 'object'){
                            let beforeArr = acc[entry[0]] ? acc[entry[0]] : [];
                            newObj[entry[0]] = [...new Set([...beforeArr, ...entry[1]])];
                            return false;
                        }
                        newObj[entry[0]] = entry[1]
                    });
                return Object.assign(acc, newObj);
            }, {});
    });

}

//Gera json formatado com os valores do csv
const generateJSON = (header, values)=>{

    let newArr = [];
    let headerArr = header.replace(/[""]/g, '').split(',');
    headerArr = formatAddresses(headerArr);
    valuesArr = values.map(str=>{
        return str.replace(/"((Turma|Sala) \d)\s*,\s*((Turma|Sala) \d)"/gi, "$1/$3").split(',');
    });

    valuesArr.forEach(arr=>{
        let obj = {};
        obj.fullname = '';
        obj.eid = '';
        obj.groups = [];
        obj.addresses = [];

        headerArr.forEach((field, index)=>{

            if(field === 'group'){
                let groups = getGroups(arr[index]);
                obj.groups = [...obj.groups, ...(groups ? groups : [])];
                return false;
            }

            if(['invisible', 'see_all'].includes(field)){
                obj[field] = !arr[index] ? false : ['yes', '1', 1].includes(arr[index]);
                return false;
            }

            if(typeof field !== 'object') return obj[field] = arr[index];
            if(!arr[index]) return false;
            
            let addressesArr = getAddresses(field.type, arr[index]);
            if(!addressesArr || addressesArr.length === 0) return false;

            obj.addresses = [...obj.addresses, ...addressesArr.map(str=>{
                return {...field, address: str};
            })];

        });
        newArr.push(obj);
    });

    return mergeLines(newArr);

}

//Cria arquivo final com o json
writeFileSync(jsonFilePath, jsonFormat(generateJSON(headerCsv, valuesCsv)));