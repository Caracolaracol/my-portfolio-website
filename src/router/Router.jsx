import WebPage from '../pages/WebPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../ErrorPage'
import WebProject from '../components/WebProject'
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
        element: <WebPage/>,
        children: [
          {
            path:'/web-projects/',
            element: <WebProject />,
            index: true
          },
          {
            path:'/web-projects/:project',
            element: <WebProject />
          }
        ]
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
