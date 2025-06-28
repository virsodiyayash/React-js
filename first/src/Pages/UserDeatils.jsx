import { useParams } from "react-router";
import Medium from "../Medium/Medium";
import Header from "../Header/Header";

function UserDetails(){
    const {userName} = useParams();

    return(
        <div>
            <Header userName = {userName}/>
            <Medium userName={userName}/>
        </div>
    )
}

export default UserDetails;