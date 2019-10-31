import React from 'react'

export default class SnapshotSample extends React.Component{
    state = {
        messages: []
    }
    handleNewMessage() {
        this.setState(
            prev => ({
                messages: [`msg ${prev.messages.length}`, ...prev.messages]
            })
        )
    }
    componentDidMount() {
        console.log("component did mount")
        for(let i = 0; i < 20; i++) this.handleNewMessage();
        this.interval = window.setInterval(
              () => {
                if(this.state.messages.length > 200) {
                    window.clearInterval(this.interval);
                    return
                }
                this.handleNewMessage();
            }, 1000);
    }
    componentWillUnmount() {
        console.log("component will unmount")
        window.clearInterval(this.interval);
    }
    getSnapshotBeforeUpdate() {
        console.log("component snapshot before update")
        return this.rootNode.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
    const scrollTop = this.rootNode.scrollTop;
    if (scrollTop < 5) return;
    this.rootNode.scrollTop =
      scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
  }
    render() {
        return (
            <div className="snapshot-sample" style={{overflow: "auto", height: "200px", width: "300px",border: "1px solid #eee", padding: "15px", fontSize: "16px"}} ref={ n => ( this.rootNode = n)}>
                { this.state.messages.map(msg => (
                    <div style={{ textAlign: "left"}} key={msg}>{msg}</div>
                ))}
            </div>
        )
    }
}