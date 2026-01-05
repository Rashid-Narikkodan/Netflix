import ProtectedHeader from "../../components/layout/ProtectedHeader"
import { useAuth } from "../../context/AuthContext"
const Home = () => {
  const {logout,isLoading} = useAuth()
  return (
    <div className="text-white">
      <ProtectedHeader />
      <button onClick={()=>logout()} className="p-14">Logout</button>
    </div>
  )
}

export default Home