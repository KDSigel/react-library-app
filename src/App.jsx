import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'
import Home from './views/Books/Home/Home'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/booklist" component={BookList} />
          <Route path="/bookdetail/:id" component={BookDetail} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
