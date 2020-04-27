import React from 'react';
import Event from './event';

const Events =(props)=>{
    return(
        <React.Fragment>
            <h3 style={{padding:'10px'}}>EVENT {props.values.id}</h3>
                <Event values={props.values}/>
                {/* {props.values.map((val, i)=>{
                    return <Event values={val} key={i}/> 
                    //<Event id={val.id} date={val.date} time={val.time} key={i} name={val.name}/>
                })} */}
        </React.Fragment>
    )
}

export default Events;