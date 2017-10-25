'use strict'

const fs = require('fs')
const assert = require('assert')
const path = require('path')

const writeGood = require('write-good')
const nodehun = require('nodehun')
const spellcheck = require('nodehun-sentences')

// To add additional dictionaries, just copy .aff & .dic file to dictionaries folder
// and add to the mapping
const dictMap = {
  us: ['en_US.aff', 'en_US.dic'],
  za: ['en_US.aff', 'en_US.dic']
}

function sanitizeText (text = '') {
  return text
    .replace(/(\r\n|\n|\r)+/gm, ' ') // Remove newline & return
    .replace(/\s{2,}/g, ' ') // Remove multiple spaces
    .trim()
}

function performSpellCheck (affPath, dirPath, str = '') {
  const hunspell = new nodehun(
    fs.readFileSync(affPath),
    fs.readFileSync(dirPath)
  )
  return new Promise((resolve, reject) => {
    spellcheck(hunspell, str, function (error, typos) {
      if (error) {
        return reject(error)
      }

      resolve(typos)
    })
  })
}

function proofRead (
  text = '',
  {
    dictionary = 'za',
    passive = true,
    illusion = true,
    so = true,
    thereIs = true,
    weasel = true,
    adverb = true,
    tooWordy = true,
    cliches = true,
    eprime = true
  } = {}
) {
  assert(
    dictMap[dictionary],
    `Please specify one of the availiable dictionaries: ${Object.keys(
      dictMap
    ).join(',')}`
  )

  const str = sanitizeText(text)
  const suggestions = writeGood(str, {
    passive,
    illusion,
    so,
    thereIs,
    weasel,
    adverb,
    tooWordy,
    cliches,
    eprime
  })

  const affPath = path.join(__dirname, 'dictionaries', dictMap[dictionary][0])
  const dicPath = path.join(__dirname, 'dictionaries', dictMap[dictionary][1])

  return performSpellCheck(affPath, dicPath, str).then(typos => ({
    suggestions,
    typos
  }))
}

module.exports = proofRead
