import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TabSelector.css';


export class StatefulTabSelector extends PureComponent{
    static propTypes = {
        initialValue: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func
    }
    state = {
        value: null
    }
    static defaultProps = {
        value: null,
        options: [],
        onChange: () => {}
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('get derived');
        console.log(nextProps, prevState)
        // console.log({ ...prevState, value: nextProps.value || nextProps.initialValue})
        return { ...prevState, value: nextProps.value || nextProps.initialValue}
    }
    handleSelect = selected => {
        this.setState({ value: selected })
        this.props.onChange(selected)
    }
    render() {
        console.log('render')
        const { options } = this.props
        return (
            <div className="tab-selector">
                <ul>
                    {
                        options.map(opt => (
                            <li
                              key={opt.value}
                              className={ `
                                tab-item
                                ${
                                    opt.value === this.props.value ? "selected" : ""
                                }
                              `}
                              onClick = { () => this.handleSelect(opt.value) }
                            >
                              { opt.name }
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
}

const options = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
];

export default class TabSelectorSample extends React.Component{
    state = {
        color: null
    }
    render() {
        return (
            <div style={{ fontSize: "14px"}}>
                Select color: { " " }
                <StatefulTabSelector 
                  options = {options}
                  value = { this.state.color }
                  onChange = {c => this.setState({ color: c })}
                />
            </div>
        )
    }
}