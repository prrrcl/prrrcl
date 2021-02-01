import { random } from 'lodash'
import { COLORS_ARRAY } from 'styles'
import { getStart } from './comps'

const Work = ({ data, from }) => {
  return (
    <>
    <div className="work">
        {data.name}
    </div>
    <style jsx>{`
    .work {
      background: ${data.color || COLORS_ARRAY[random(0, COLORS_ARRAY.length - 1)]};
      position: absolute;
      left: ${getStart(from, data.startAt)}%;
      width: ${getStart(from, data.endAt || new Date()) - getStart(from, data.startAt)}%;
      padding: 15px;
      border-radius: 10px;
      font-weight: bold;
    }
    `}</style>
    </>
  )
}

export default function Works ({ data, date }) {
  return (
    <>
    <div className="container">
      {data?.map(w => (
    <Work key={w.name} data={w} from={date} />
      )) || 'loading...'}
    </div>
    <style jsx>{`
    .container {
      position: relative;
    }
    `}</style>
    </>
  )
}
