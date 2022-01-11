import raw from 'raw.macro'

export default function Home() {
  const defaultpath = '../../texts/'
  const textfile = raw(`${defaultpath}text.txt`)
  return <div>{textfile}</div>
}
