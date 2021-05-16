import React from 'react'

interface ResultButtonProps {
    index:number,
    type:string,
    team1:{
        name:string,
        color:string,
    },
    team2:{
        name:string,
        color:string,
    },
    setResult : (index:number,type:string,name:string) => void
}

const ResultButtons = ({index, type, team1, team2, setResult} :ResultButtonProps)  => {
    
    return (       
        <div>
            <button 
                className= {`btn btn-${team1.color==='red'?'danger':'light'}`} 
                onClick={()=> setResult(index,type,team1.name)}>
                {team1.name}
            </button>
            <button  
                className= {`btn btn-${team2.color==='red'?'danger':'light'}`} 
                onClick={()=> setResult(index,type,team2.name)}>
                {team2.name}
            </button>
        </div>
    );
}

export default ResultButtons;