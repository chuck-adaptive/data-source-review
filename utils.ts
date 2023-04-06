export const arrayToHtmlUl = (arr: string[]) => {
    const asLiElements = arr.map(rawString => `<li>${rawString}</li>`)

    return `<ul>${asLiElements.join('')}</ul>`
}

export const nameAndUrlToMdLink = (name: string, url: string) => {
    return `[${name}](${url})`
}