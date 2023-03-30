const arrayToHtmlUl = (arr: string[]) => {
    const asLiElements = arr.map(rawString => `<li>${rawString}</li>`)

    return `<ul>${asLiElements.join('')}</ul>`
}

export default arrayToHtmlUl