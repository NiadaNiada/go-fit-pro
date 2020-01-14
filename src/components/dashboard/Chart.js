import React from 'react';
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';

class Chart extends React.Component {
    constructor() {
        super();
        this.state = {
            num: ''
        };

    }

    render() {
        let data = {
            labels: ['Protein', 'Fats', 'Carbohydrates'],
            datasets: [{
                label: 'Macros',
                data: [this.props.fitnessGoals.protein, this.props.fitnessGoals.fat, this.props.fitnessGoals.carbs],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 5
            }]

        }
        return (
            <div style={{ width: 500, height: 300, marginTop: 50 }}>
                <Doughnut data={data} options={{ maintainAspectRatio: true }} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fitnessGoals: state.fitnessGoals
    };
};
export default connect(mapStateToProps)(Chart);