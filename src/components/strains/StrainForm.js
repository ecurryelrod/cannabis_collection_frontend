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

    render() {
        return (
            <form>
                <input name="name" placeholder="Strain Name" /><br/>
                <input name="description" placeholder="description" /><br/>
                <input name="terpene" placeholder="aroma/flavor" /><br/>
                <input name="thc" placeholder="THC Amount" /><br/>
                <input name="cbd" placeholder="CBD Amount" /><br/>
                <input name="cbg" placeholder="CBG Amount" /><br/>
                <input type="submit" />
            </form>
        )
    }
}

export default StrainForm