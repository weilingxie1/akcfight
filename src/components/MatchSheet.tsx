import React, { useState } from 'react'
import Result from './Result'
import ResultButtons from './ResultButtons'
import { Fight, Score } from '../types/Types'
import InitialFights from '../default/InitialFights.json'
import InitialScore from '../default/InitialScore.json'

const MatchSheet = () => {
    const [fights, setFights ] = useState<Fight[]>(InitialFights);
    const [score, setScore] = useState<Score[]>(InitialScore);    

    const addScore = (team:string) => {
        let newScore = [...score];

        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
            return i;
        });

        newScore[index]= {...newScore[index], score: newScore[index].score+1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        
        setScore(newScore);
    }

    const removeScore = (team:string) => {
        let newScore = [...score];
        let index = -1;
        newScore.map((t, i) => {
            if(t.name === team) index = i;
            return i;
        });
        newScore[index]= {...newScore[index], score: newScore[index].score-1};

        newScore.sort((team1,team2)=>(team1.score>team2.score) ? -1 : 1)
        
        setScore(newScore);
    }
    
    const setResult = (index:number, type: string, winTeam: string): void => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:winTeam};
        setFights(newFights);
        
        addScore(winTeam);
    }

    const resetResult = (index:number, type: string, resetTeam:string) => {
        let newFights = [...fights];
        newFights[index] = {...newFights[index], [type]:""};
        setFights(newFights);
        removeScore(resetTeam);
    }

    const changeColor = (index:number) => {
        let newFights = [...fights];
        let team1Color = newFights[index].team1.color;
        let team2Color = newFights[index].team2.color;
        newFights[index].team1.color =  team2Color;
        newFights[index].team2.color =  team1Color;
        setFights(newFights);
    }

    return (       
        <div>
            <h3 className="text-center">Score Board</h3>
            <table className="table table-striped">                
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        score.map((t, index) => (
                            <tr key={index+999}>
                                <td>{t.name}</td>
                                <td>{t.score}</td>
                            </tr>
                        ))                                                                                 
                    }
                </tbody>
            </table>
            <hr />
            <h3  className="text-center">Fights</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Versus</th>
                        <th>Suburi</th>
                        <th>Kihon</th>
                        <th>Kata</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>                    
                    {
                        fights.map((fight,index)=>{
                            let { id, team1, team2, suburi, kihon, kata } = fight;                                                      

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{team1.name}-{team2.name}</td>                                    
                                    <td>{suburi==="" ? <ResultButtons index={index} type='suburi' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='suburi' result={suburi} resetResult={resetResult} />}</td>
                                    <td>{kihon==="" ? <ResultButtons index={index} type='kihon' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='kihon' result={kihon} resetResult={resetResult} />}</td>
                                    <td>{kata==="" ? <ResultButtons index={index} type='kata' team1={team1} team2={team2} setResult={setResult} /> : <Result index={index} type='kata' result={kata} resetResult={resetResult} />}</td>                                    
                                    <td><button className="btn btn-sm btn-success" onClick={()=>changeColor(index)}>switch color</button></td>
                                </tr>
                            )                        
                        })
                    }                
                </tbody>
            </table>
        </div>
    );
}

export default MatchSheet;