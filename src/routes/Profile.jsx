import { useAuthContext } from "@/context/AuthContext";
import styles from '@/styles/Profile.module.css'

const Profile = () => {
    const { user } = useAuthContext()
    return ( 
        <div>
           <h1>Profile page</h1> 
           <div className={styles.profile}>
            <h2>Hello, {user}</h2>
           </div>
        </div>
     );
}
 
export default Profile;