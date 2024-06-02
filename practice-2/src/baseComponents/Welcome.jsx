function Welcome(){
    //Dynamically Changing Classs Name
    const impMsg = "offerClosed"
    // const impMsg = "importantMsg"
    return(
        <div>
            <h1 className="companyName">Welcome to Webvoid Technologies</h1>
            <h3 className="slogan">Learn more be smart</h3>
            <h3 className={impMsg}>Offer Closes Soon</h3>
        </div>
    );
}

export default Welcome