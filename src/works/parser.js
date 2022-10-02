import * as fs from 'node:fs'

const newLine = '\n'

const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g
const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, 'g')
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, 'g')
const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, 'g')
const REGEXP_BR = new RegExp(`((${newLine}){2,})`, 'g')
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g
const REGEXP_H3 = /^### (.*$)/gim
const REGEXP_H2 = /^## (.*$)/gim
const REGEXP_H1 = /^# (.*$)/gim
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g
const REGEXP_CODE = /`(.*?)`/g
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g
const REGEXP_DEL = /\~\~(.*?)\~\~/g
const REGEXP_Q = /\:\"(.*?)\"\:/g
const REGEXP_DATE = /@ (.*$)/gim

const markdownParser = (text) => {
  const toHTML = text
    .replace(REGEXP_H1, '') // remove title because the buttons define the title
    .replace(REGEXP_H2, '<h2 class="text-lg">$1</h2>')
    .replace(REGEXP_H3, '<h3 class="">$1</h3>')

    .replace(REGEXP_PARAGRAPH, '<p>$1</p>')

    .replace(REGEXP_CODE, '<code>$1</code>')
    .replace(REGEXP_STRONG, '<strong>$1</strong>')

    .replace(
      REGEXP_LINK,
      '<a target="_blank" class="text-blue-600 hover:underline" href="$2">$1</a>'
    )
    .replace(REGEXP_IMAGE, '<img src="$1" />')
    .replace(REGEXP_DATE, '<p class="text-orange-500">$1</p>')

  return toHTML.trim() // using trim method to remove any white space
}

const args = process.argv.slice(2)

const fileHeaderString =
  'export type Work = { title: string, content:string}; export const works:Work[] ='

const parseFile = (path) => {
  const data = fs.readFileSync(path, 'utf8')
  return {
    title: data.match(REGEXP_H1, '$1')[0].replace('# ', ''),
    content: markdownParser(data),
  }
}

const parseFiles = (paths) => paths.map((path) => parseFile(path))

fs.writeFileSync('./src/works/_output.ts', fileHeaderString)
fs.appendFileSync('./src/works/_output.ts', JSON.stringify(parseFiles(args)))

/* console.log(parseFiles(args)) */
