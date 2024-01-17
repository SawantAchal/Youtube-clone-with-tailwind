import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppComponent } from './Context/contextApi';
import Feed from './Components/Feed'
import SearchResult from './Components/SearchResult'
import VideoDetails from './Components/VideoDetails'
import Header from './Components/Header'

function App() {
  return (
    <>
      <AppComponent>
        <BrowserRouter>
          <div>
            <Header/>
            <Routes>
              <Route path='/' exact element={<Feed />}/>
              <Route path='/searchResult/:searchQuery' element={< SearchResult/>}/>
              <Route path='/video/:id' element={<VideoDetails />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AppComponent>
    </>
  );
}

export default App;
