import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlanets } from '../redux/planets';

import Planet from './planet';

class PlanetList extends Component{

    componentDidMount(){
        this.props.getPlanets();
    }
    render() {
        const { data, loading, errMsg } = this.props;
        const planetComponents = data.map((planet, i) => <Planet key={planet.name + i}{...planet}></Planet>)
        if (loading) {
            return (
                <div> 
                    ...Loading
                </div>
            )
        } else if(errMsg){
            return(
                <div>
                    {errMsg}
                </div>
            )
        } else {
            return (
                <div>
                    {planetComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.planets;
}

export default connect(mapStateToProps, { getPlanets }) (PlanetList);