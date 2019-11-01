import React from 'react'


const enStrings = {
    submit: "Submit",
    cancel: "Cancel"
}

const cnStrings = {
    submit: "提交",
    cancel: "取消"
}

const LocaleContext = React.createContext(enStrings);

class LocaleProvider extends React.Component{
    state = {
        locale: cnStrings
    }
    toggleLocal = () => {
        console.log("111")
      const locale =   this.state.locale === enStrings ?
        cnStrings : enStrings;
        this.setState({locale})
    }
    render() {

        return (
            <LocaleContext.Provider value={this.state.locale}>
                <button onClick={this.toggleLocal}>
                    切换语言
                </button>
                {this.props.children}
            </LocaleContext.Provider>
            
        )
    }

}

class LocaledButton extends React.Component{
    handleClick(val) {
        console.log(val)
    }
    render() {
        return (
            <LocaleContext.Consumer>
                {
                    locale => (
                        <div>
                           <button onClick={ () => (this.handleClick(locale.cancel))}>{locale.cancel}</button> &nbsp; &nbsp; 
                           <button onClick={ () => (this.handleClick(locale.submit))}>{locale.submit}</button>
                        </div>
                    )
                }
            </LocaleContext.Consumer>
        )
    }
        
}

export default () => (
    <div style={{ fontSize: "14px"}}>
        <LocaleProvider>
            <div>
                <br />
              <LocaledButton />
            </div>
        </LocaleProvider>
        <br />
        <LocaledButton />
    </div>
)