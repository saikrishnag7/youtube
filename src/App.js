import Body from './components/Body';
import Head from './components/Head';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

function App() {
  const routerprov = createBrowserRouter([{
    path : '/',
    element :<Body/>,
    children :[{
      path :'/',
      element : <VideoContainer/>
    },
    {
      path :'watch',
      element : <WatchPage/>
    }
      

    ]
  }
]

  )
    
  return (
    <Provider store ={store}>
    <div >
  
     
      <Head />
      <RouterProvider router={routerprov}/>
     
    </div>
    </Provider>
  );
}

export default App;
