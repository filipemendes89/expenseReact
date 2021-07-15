import {Route} from 'react-router'
import { Home } from '../views/Home'
import { Login } from '../views/Login'
import { SignUp } from '../views/SignUp'

export const ApplicationRoutes = () => (
    <>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
    </>
)