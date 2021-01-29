import React from "react";


const ProfileList = ({prof, name, loading}) =>{
    if (loading) {
        return <h2>loading.....</h2>
    }
    var renderedList = [];
    if(name === ""){
         renderedList = prof.filter((profile)=>{
            return profile
        }).map((profile)=>{
            return (
                <div key={profile.CreditCardNumber}className="ui horizontal list" style={{border: "1px solid black", borderRadius: "5px", margin: "10px", padding: "10px"}}>
                <div className="item">
                    <div className="content">
                        <div className="header">
                            {profile.FirstName +" "+profile.LastName}
                        </div>
                        
                        <p> Gender: {profile.Gender}</p>
                        <p> Card-type:{profile.CreditCardType}</p>
                        <p> PhoneNumber:{profile.PhoneNumber}</p>
                    </div>
                </div>
            </div> 
            )
        })
    }else {
        renderedList = prof.filter((profile)=>{
            return profile.FirstName.toLowerCase() === name.toLowerCase()|| profile.CreditCardType.toLowerCase() === name.toLowerCase()|| profile.Gender.toLowerCase() === name.toLowerCase();
        }) 
        .map((profile) => {
            return ( 
            <div key={profile.CreditCardNumber}className="ui horizontal list" style={{border: "1px solid black", borderRadius: "5px", margin: "10px", padding: "10px"}}>
                <div className="item">
                    <div className="content">
                        <div className="header">
                            <p>{profile.FirstName +" "+profile.LastName}</p>
                        </div>
                        <p> Gender: {profile.Gender}</p>
                        <p> Card-type:{profile.CreditCardType}</p>
                        <p> PhoneNumber:{profile.PhoneNumber}</p>
                    
                    </div>
                </div>
            </div>
        )
    })
}

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default ProfileList;