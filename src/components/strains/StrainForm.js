import React, {Component} from "react";

class StrainForm extends Component {
    state = {
        name: "",
        description: "",
        terpene: "",
        thc: "",
        cbd: "",
        cbg: "",
    }

    handleOnChange = e => this.setState({[e.target.name]: e.target.value})

    handleOnSubmit = e => {
        e.preventDefault()
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        name="name" 
                        placeholder="Strain Name"
                        onChange={this.handleOnChange}
                    /><br/>
                    <input 
                        name="description" 
                        placeholder="description" 
                        onChange={this.handleOnChange}
                    /><br/>
                    <input name="terpene" placeholder="aroma/flavor" /><br/>
                    <input name="thc" placeholder="THC Amount" /><br/>
                    <input name="cbd" placeholder="CBD Amount" /><br/>
                    <input name="cbg" placeholder="CBG Amount" /><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default StrainForm