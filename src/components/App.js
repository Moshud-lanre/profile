import React, {useState, useEffect} from "react";
import enye from "../apis/enye";
import ProfileList from "./ProfileList";
import Pagination from "./Pagination";


const App = () => {
    // state={
    //     profiles:[], 
    //     text: '', 
    //     searchSubmit: '', 
    //     loading: false, 
    //     currentPage: 1,
    //     postPerPage: 20
    //     };
    const [profiles, setProfiles] = useState([]);
    const [text, setText] = useState([""]);
    const [submit, Setsubmit]= useState("");
    const [loading, setLoading]= useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [profilesPerPage] = useState(20);

    
            
    useEffect(()=>{
        setLoading(true);
        const loadProfile = async ()=>{
        
            const response = await enye.get("/challenge/records");
            setProfiles(response.data.records.profiles);
            setLoading(false);
        }
        loadProfile();
    

    
    }, []);    


    //  const onInputChange = (event) => {
    //     setText(event.target.value);
    // }

    const onFormSubmit = (event) => {
        event.preventDefault();
        Setsubmit(text);
        
    }

    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);  

    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return (
            <div className="ui container">
                <div className="search-ar ui segment">
                    <form className="ui form" onSubmit={onFormSubmit}>
                        <div className="field">
                            <label>Profile Search</label>
                            <input type='text' placeholder="Search by First-name or Card-type or Gender type" value={text} onChange={e => setText(e.target.value)} />
                        </div>
                    </form>
                </div>
                <Pagination profilesPerPage={profilesPerPage} totalProfile={profiles.length} paginate={paginate} />
                <ProfileList prof={currentProfiles}  name={submit} loading={loading}/>
                
            </div>
        );
    
}

export default App;