import WebPage from '../pages/WebPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../ErrorPage'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import WelcomeSection from '../pages/WelcomeSection'
import Root from '../layout/Root'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
        <Route path='/' index='true' element={<WelcomeSection/>}/>
        <Route path='/web-projects' element={<WebPage/>}/>
        <Route path='/post-projects' element={<PostPage/>}/>
      </Route>
    )
)