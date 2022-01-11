import raw from 'raw.macro'

export default function Home() {
  const textfile = raw('../../texts/text.txt')
  return <div>{textfile || 'Loading...'}</div>
}
