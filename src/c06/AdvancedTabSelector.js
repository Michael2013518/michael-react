import React from 'react';
import PropTypes from 'prop-types';

export  class AdvancedTabSelector extends React.Component{
    static propTypes = {
        value: PropTypes.object,
        options: PropTypes.array,
        onChange: PropTypes.func,
        children: PropTypes.func
    }
    static defaultProps = {
        value: null,
        options: [],
        onChange: () => {},
        children: () => {}
    }
    render() {
        const { options } = this.props
        return (
            <div className="tab-selector">
                <ul>
                    {
                        options.map( opt => (
                            <li
                              key={opt.value}
                              className={
                                  `tab-item 
                                  ${ opt.value === this.props.value ? "selected":""}
                                  `    
                              }
                              onClick={() => this.props.onChange(opt.value)}
                            >
                                {opt.name}
                            </li>
                        ))
                    }
                    <br/><br/><br/>
                    {this.props.value && this.props.children(this.props.value)}
                </ul>
            </div>
        )
    }
}
const colors = [
    { name: "Red", value: "red"},
    { name: "Blue", value: "blue"},
    { name:"Orange", value: "orange"}
];

const animals = [
    { name: "Tiger", value: "tiger"},
    { name: "Elephant", value: "elephant"},
    { name: "Cow", value: "cow"}
];

export default class AdvancedTabSelectorSample extends React.Component{
    state = {
        color: null
    };
    render() {
        return (
            <div>
                <h3>Select color: </h3>
                <AdvancedTabSelector 
                  options={colors}
                  value={this.state.color}
                  onChange={ c => this.setState({ color: c})}
                >
                    {
                        color => (
                            <span 
                              style={{
                                  display: "inline-block",
                                  backgroundColor: color,
                                  width: "40px",
                                  height: "40px"
                              }}
                            />
                        )
                    }
                </AdvancedTabSelector>
                <br /><br /><br />
                <h3>Select animal: </h3>
                <AdvancedTabSelector
                  options={animals}
                  value={this.state.animal}
                  onChange={c => this.setState({ animal: c })}
                >
                    {
                       animal => (
                           <img
                            width="100px"
                            alt={animal}
                            src={require(`../../images/${animal}.png`)}
                            />
                            )
                    }
                </AdvancedTabSelector>
            </div>
            
        )
    }
}