import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from '@/components/pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <HomePage />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  )
}

export default App