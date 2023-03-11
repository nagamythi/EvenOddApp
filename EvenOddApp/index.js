// Write your code here
import { component } from "react";
import './index.css'
class EvenOddApp extends component{
    state ={count:0}

    onIncreament=()=>{
        const num=()=>Math.floor(Math.random()*100)
        this.setState(prevState=>({count: prevState.count+num()}))
    }
    render({
        const [count]=this.state
        const value= count%2 === 0 ? "Even":"Odd"
        return (
            <div className="con">
                <div className="card">
                    <h1 className="head">Count {count}</h1>
                    <p className="des">Count is {value}</p>
                    <button type="button" className='btn' onClick={this.onIncreament}>Increment</button>
                    <p className="des2">*Increased By Randomn Number Between 0 to 100</p>
                </div>
            </div>
        )
    })
}
export default EvenOddApp