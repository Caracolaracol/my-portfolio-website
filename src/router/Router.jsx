import WebPage from '../pages/WebPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../ErrorPage'
import { createBrowserRouter} from 'react-router-dom'
import WelcomeSection from '../pages/WelcomeSection'
import Root from '../root/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/web-projects',
        element: <WebPage/>
      },
      {
        path: '/post-projects',
        element: <PostPage/>
      }
    ]
  },
  {
    path: '/',
    index: true,
    element: <WelcomeSection/>,
    errorElement:<ErrorPage/>,
  }
])
