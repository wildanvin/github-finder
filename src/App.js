import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import Alert from "./components/layout/Alert"
import NotFound from "./pages/NotFound"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/user/:login" component={User} />

                <Route path="/notfound" component={NotFound} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
