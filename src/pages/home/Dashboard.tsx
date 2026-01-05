import Loader from "../../components/common/Loader"
import { useAuth } from "../../context/AuthContext"
const Dashboard = () => {
  const {logout,isLoading} = useAuth()
  return (
    <div className="text-white">
      {
        isLoading?<Loader />:
      <button className="text-white bg-red-500 rounded py-2 px-4" onClick={()=>logout()}>Logout</button>
    }
    </div>
  )
}

export default Dashboard