import React from 'react';

export default class Clock extends React.Component{
    constructor(props) {
      super(props);
      this.state = { date: new Date() }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("get derived")
        console.log(nextProps)
        console.log("1111")
        console.log(prevState)
        return {...nextProps, value: prevState }
    }
    componentDidMount() {
        console.log("clock did mount")
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        console.log("clock will unmount")
        clearInterval(this.timerID)
    }
    componentDidUpdate() {
        console.log("clock did update")
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div style={{ fontSize: "14px", paddingTop: "10px"}}>
                <h1>Demo clock for react's life-cycle-hook</h1>
                <h2>It is {this.state.date.toLocaleString() }</h2>
            </div>
        )
    }
}