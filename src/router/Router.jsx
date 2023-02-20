import WebPage from '../pages/WebPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../ErrorPage'
import { createBrowserRouter} from 'react-router-dom'
import WelcomeSection from '../pages/WelcomeSection'
import Root from '../root/Root'
import PostProject from '../components/PostProject'
import { webProjectsLoader } from '../pages/WebPage'
import WebProjectContainer from '../components/WebProjectContainer'
import { postProjectsLoader } from '../pages/PostPage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/web-projects',
        element: <WebPage/>,
        loader: webProjectsLoader,
        children: [
          {
            path:'/web-projects/:webproject',
            element: <WebProjectContainer />
          }
        ]
      },
      {
        path: '/post-projects',
        element: <PostPage/>,
        loader: postProjectsLoader,
        children: [
          {
            path:'/post-projects',
            element: <PostProject />,
            index:true,
          },
          {
            path:'/post-projects/:postproject',
            element: <PostProject />
          }
        ]
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
