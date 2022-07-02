
import { ChevronDown } from '../../icons/ChevronDown'
import './Filter.css'

export function Filter ({ regions, filter, visible, selectRegion, showContent }) {
  return (
    <div className='filter'>
      <div onClick={showContent} className='filter__select'>
        <p>{filter}</p>
        <ChevronDown isActive={visible} />
      </div>
      {visible && (
        <div className='filter__content'>
          <ul className='filter__list'>
            {
              regions.map(region => <li onClick={() => selectRegion(region)} key={region}>{region}</li>)
            }
          </ul>
        </div>
      )}
    </div>
  )
}
