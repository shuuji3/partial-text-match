export function useSearch(words: string[]) {
  function search(q: string | undefined) {
    if (!q) {
      return []
    }

    const regex = interleavedPattern(q)
    return words.filter(word => regex.test(word))

  }

  function mark(word: string, q: string): string {
    const regex = interleavedPattern(q)
    const matchedChars = [...word.matchAll(regex)][0].slice(1,)

    let marked = ''
    let currentIndex = 0
    for (const char of matchedChars) {
      const index = word.slice(currentIndex).indexOf(char)
      if (index === -1) {
        break
      }

      marked += word.slice(currentIndex, currentIndex + index) + `<mark>${char}</mark>`
      currentIndex = currentIndex + index + 1
    }
    marked += word.slice(currentIndex)

    return marked
  }

  // `word` => `(w).*(o).*(r).*(d)`
  function interleavedPattern(q: string): RegExp {
    const pattern = q?.split('').map(char => `(${char})`).join('.*');
    return new RegExp(pattern, 'g')
  }

  return { search, mark }
}
