import * as fs from 'fs'
import { REGEXP_LINK, REGEXP_PARAGRAPH } from 'markdown-regex'

const REGEXP_H3 = /^### (.*$)/gim
const REGEXP_H2 = /^## (.*$)/gim
const REGEXP_H1 = /^# (.*$)/gim
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g
const REGEXP_DEL = /\~\~(.*?)\~\~/g
const REGEXP_Q = /\:\"(.*?)\"\:/g
const REGEXP_CODE = /`(.*?)`/g

const markdownParser = (text) => {
  const toHTML = text
    .replace(REGEXP_H1, '<h1 class="text-xl">$1</h1>') // h3 tag
    .replace(REGEXP_H2, '<h2 class="text-lg">$1</h2>')
    .replace(REGEXP_H3, '<h3 class="">$1</h3>')

    .replace(REGEXP_PARAGRAPH, '<p>$1</p>')

    .replace(REGEXP_CODE, '<code>$1</code>')
    .replace(REGEXP_STRONG, '<strong>$1</strong>')

    .replace(REGEXP_LINK, '<a href="$2">$1</a>')
    .replace(REGEXP_IMAGE, '<img src="$1" />')

  return toHTML.trim() // using trim method to remove any white space
}

fs.readFile('./this-website.md', 'utf8', (err, data) => {
  console.log(data)
  console.log('----------------\n')
  console.log(markdownParser(data))
})

/* markdownParser(file) */
