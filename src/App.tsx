import Navbar from "@/components/Navbar"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-10">
      <LoginPage />
      <RegisterPage />
      </div>
    </>
  )
}

export default App
