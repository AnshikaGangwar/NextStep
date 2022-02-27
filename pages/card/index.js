
const Card = () => {
    const data = [
        {
        color:"#FFF4E5",
        id:1,    
        title:"Become a trader at trinkerr today",
        description:"Create your own customized portfolio and  upload it on trinkerr today. ",
    },
    {
        color:"#EDFAFF",
        id:2,
        title:"Track your portfolio performance",
        description:"Track performance of portfolios via our dashboard",
    },
    {
        color:"#FFF0F0",
        id:3,
        title:"Connect all of your broker accounts",
        description:"Connect to multiple brokerage accounts at one place",
    },]
    return(
        <div className='outer-container'>
            {data.map(entry => {
            return(
            <div key={entry.id} className='card-wrapper' >
                <div className='img-wrapper' style={{backgroundColor:entry.color,}}></div>
                <div className='title-wrapper'>
                    <span>{entry.title}</span>
                </div>
                <div className='desc-wrapper'>
                    <span>{entry.description}</span>
                </div>
            </div>);
        })}
        </div>
        
    )
    
}

export default Card;