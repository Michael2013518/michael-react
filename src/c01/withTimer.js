import React from 'react';

export default function withTime(WrapComponent) {
    return class extends React.Component{
        state = {
            time: new Date()
        }
        componentDidMount() {
            this.timeID = setInterval(() => {
               this.tick() 
            }, 1000);
        }
        componentWillMount() {
            clearInterval(this.timeID)
        }
        tick() {
            this.setState({
                time: new Date()
            })
        }
        render() {
            return <WrapComponent time={this.state.time} {...this.props} />;
        }
    }
}