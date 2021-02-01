import { Route } from 'react-router-dom';
import NavigationAndHeader from '../container/nevigation-and-header';
const Main = (props) => {
  return (
    <div>
      <Route component={NavigationAndHeader} />
    </div>
  )
}

export default Main;