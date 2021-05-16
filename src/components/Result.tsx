import React from 'react'

interface ResultProps {
    index:number,
    type:string,
    result:string,
    resetResult:(index:number,type:string, result:string)=>void
}

const Result = ({index, type, result, resetResult} :ResultProps)  => {
    
    return (       
        <div>
            <span>{result} </span>
            <button 
                className="btn btn-sm btn-outline-primary" 
                onClick={()=> resetResult(index,type, result)}>
                reset
            </button>
        </div>         
    );
}

export default Result;