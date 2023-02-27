import WebPage, { webProjectsLoader } from '../pages/WebPage'
import PostPage, { postProjectsLoader } from '../pages/PostPage'
import BlogPage, { entriesLoader } from '../pages/BlogPage'
import WelcomeSection from '../pages/WelcomeSection'
import ErrorPage from '../ErrorPage'
import { createBrowserRouter} from 'react-router-dom'
import Root from '../root/Root'
import WebProjectContainer from '../components/utils/WebProjectContainer'
import PostProjectContainer from '../components/utils/PostProjectContainer'
import BlogContainer from '../components/utils/BlogContainer'
import AboutPage from '../pages/AboutPage'
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
        loader: entriesLoader,
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
