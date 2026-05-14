// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    onClickTabItem(tabId)
  }
  const isActiveTab = isActive ? `active-list` : ''
  return (
    <li className="list-tab">
      <button
        type="button"
        className={`tab-name ${isActiveTab}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
