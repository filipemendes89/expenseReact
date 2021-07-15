import {Route} from 'react-router'
import { Home } from '../views/Home'
import { Login } from '../views/Login'

export const ApplicationRoutes = () => (
    <>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
    </>
)