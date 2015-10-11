import fs from 'fs'
import parse from 'csv-parse'

function readDic(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err) reject(err)
      parse(data, {delimiter: ':'}, (err, output) => {
        resolve(output)
      })
    })
  })
}

function csv2json(csv) {
  return csv.map(x => {
    return {
      'name': x[0],
      'yomi': x[1],
      'parts': x[2],
      'rank': Number(x[3]),
    }
  })
}

readDic('./data/pn_ja.dic')
.then(csv2json)
.then(data => fs.writeFile('./data/pn_ja.json', JSON.stringify(data, null, 2), 'utf8'))
