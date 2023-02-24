import WebPage from '../pages/WebPage'
import PostPage from '../pages/PostPage'
import ErrorPage from '../ErrorPage'
import { createBrowserRouter} from 'react-router-dom'
import WelcomeSection from '../pages/WelcomeSection'
import Root from '../root/Root'
import { webProjectsLoader } from '../pages/WebPage'
import WebProjectContainer from '../components/utils/WebProjectContainer'
import { postProjectsLoader } from '../pages/PostPage'
import PostProjectContainer from '../components/utils/PostProjectContainer'
import BlogPage from '../pages/BlogPage'
import BlogContainer from '../components/utils/BlogContainer'
import AboutPage from '../pages/ContactPage'
import Admin from '../pages/Admin'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/web-projects',
        element: <WebPage/>,
        loader:webProjectsLoader,
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
            path:'/post-projects/:postproject',
            element: <PostProjectContainer />
          }
        ]
      },
      {
        path: '/blog',
        element: <BlogPage/>,
        children: [
          {
            path:'/blog/:blogentry',
            element: <BlogContainer />
          }
        ]
      },
      {
        path: '/about',
        element: <AboutPage/>,
      }
    ]
  },
  {
    path: '/',
    index: true,
    element: <WelcomeSection/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: '/Admin',
    index: true,
    element: <Admin/>,
    errorElement:<ErrorPage/>,
  }
])
