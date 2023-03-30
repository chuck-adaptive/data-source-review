import toml from 'toml'
import fs from 'fs'
import { markdownTable } from 'markdown-table'

import arrayToHtmlUl from './array-to-html-ul'

interface ITomlDataSourceEntry {
    name: string;
    link: string;
    free_offerings: string[];
    client_libraries: string[];
    protocols: string[];
    author_comments: string;
}

const HEADER_ROW = ['Name', 'Link', 'Free Offerings', 'Client Libraries', 'Protocols', 'Author Comments']
const SEED_PHRASE = '{{SEED_PHRASE}}'

try {
    // Read in seed markdown file
    let seedContent = fs.readFileSync('./SEED.md', 'utf-8')
    if (!seedContent.includes(SEED_PHRASE)) {
        throw Error('Seed Phrase Not Detected')
    } else {
        seedContent = seedContent.replace(SEED_PHRASE, new Date().toDateString())
    }
    
    // Generate markdown table from toml file of data
    const tomlString = fs.readFileSync('./features.toml', 'utf-8')
    const parsedToml = toml.parse(tomlString)
    const tableContent: string[][] = [HEADER_ROW]
    parsedToml.products.forEach((dataSource: ITomlDataSourceEntry) => {
        const dataSourceRow = [
            dataSource.name,
            dataSource.link,
            arrayToHtmlUl(dataSource.free_offerings),
            arrayToHtmlUl(dataSource.client_libraries),
            arrayToHtmlUl(dataSource.protocols),
            dataSource.author_comments
        ]

        tableContent.push(dataSourceRow)
    })

    const tableToWrite = markdownTable(tableContent)

    // Recreate a new README
    fs.writeFileSync('./README.md', `${seedContent}${tableToWrite}`, 'utf-8')
} catch (e) {
    console.error('Error Building README', e)
}