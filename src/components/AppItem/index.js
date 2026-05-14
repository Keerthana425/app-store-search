// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list">
      <img className="img-name" alt={appName} src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
