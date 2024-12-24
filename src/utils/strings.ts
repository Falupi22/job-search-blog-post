export const truncateContent = (content: string): string => {
    const sentences = content.split('. ')
    return sentences.length > 1 ? sentences[0] + '...' : sentences[0]
}