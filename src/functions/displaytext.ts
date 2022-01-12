import raw from 'raw.macro'

export function displaytext(filename: string) {
  let filetext: string = ''
  try {
    filetext = raw(`../texts/${filename}.txt`)
  } catch (error) {
    filetext = 'no text file'
  }
  return filetext
}
