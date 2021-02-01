import cvService from 'components/services/cv'
import { eachYearOfInterval, format } from 'date-fns'
import { useEffect, useState } from 'react'
import { getStart, WrapperCv, Year } from './comps'
import Works from './works'

const sinceDate = new Date('01-01-2019')
const today = new Date()
const diff = eachYearOfInterval({ start: sinceDate, end: today })

export default function CV () {
  const [cv, setCv] = useState(null)
  useEffect(() => {
    cvService.getCv().then(setCv)
  }, [])
  return (
    <WrapperCv>
      <Works data={cv?.studies} date={sinceDate} total={diff.length} />
      <div style={{ display: 'flex' }}>
      {diff.map((y, i) => (
        <Year key={y} index={i} total={diff.length}>
          <div className="year">{format(y, 'y')}</div>
        </Year>
      ))}
      </div>
      <div className="today" />
      <Works data={cv?.works} date={sinceDate} total={diff.length} />
      <style jsx>{`
        .today {
          position:absolute;
          left: ${getStart(sinceDate, new Date())}%;
          width: ${100 - getStart(sinceDate, new Date())}%;
          height: 100%;
          background: rgba(255,255,255,.8);
          filter: blur(10px)
        }
      `}</style>
    </WrapperCv>
  )
}
