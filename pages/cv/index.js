import cvService from 'components/services/cv'
import { eachYearOfInterval, format } from 'date-fns'
import { Year, Download } from 'components/app/cv/comps'
import { Work } from 'components/app/cv/works'
import { COLORS_ARRAY } from 'styles'

const sinceDate = new Date('01-01-2019')
const today = new Date()
const diff = eachYearOfInterval({ start: sinceDate, end: today })

export default function Cv ({ cv }) {
  return (
    <>
    {cv && Object.keys(cv).map(type => cv[type].map((w, i) => (
      <Work key={i} data={w} from={sinceDate} index={i} />
    )))}
    {diff.map((y, i) => (
        <Year key={y} index={i} total={diff.length}>
          <div className="year">{format(y, 'y')}</div>
          {i === diff.length - 1 && (
          <a href="/cv.pdf" className="download" target="_blank">
            <Download>
              <h4>Download pdf version</h4>
            </Download>
          </a>
          )}
        </Year>
    ))}

    <style jsx>{`
      .download {
        position: absolute;
        width: 30px;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%)
      }
      h4 {
        background: ${COLORS_ARRAY[4]};
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        position: absolute;
        bottom: 100%;
        transform: translateY(20%)
      }
    `}</style>
    </>
  )
}

export async function getServerSideProps () {
  try {
    const cv = await cvService.getCv()
    return {
      props: { cv }
    }
  } catch (e) {
    console.log('Cv error ->', e)
    return {
      props: { error: e }
    }
  }
}
