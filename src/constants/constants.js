
const bmiCategory = {
    "Under Weight": {
        upperLimit: 18.4
    },
    "Normal Weight": {
        lowerLimit: 18.5,
        upperLimit: 24.9
    },
    "Overweight": {
        lowerLimit: 25,
        upperLimit: 29.9
    },
    "Moderately Obese": {
        lowerLimit: 30,
        upperLimit: 34.9
    },
    "Severely Obese": {
        lowerLimit: 35,
        upperLimit: 39.9
    },
    "Very Severely Obese": {
        lowerLimit: 40
    }
}

const riskCategory = {
    "Under Weight": "Malnutrition Risk",
    "Normal Weight": "Low Risk",
    "Overweight": "Enhance Risk",
    "Moderately Obese": "Medium Risk",
    "Severely Obese": "High Risk",
    "Very Severely Obese": "Very High Risk"
}

module.exports = {
    riskCategory,
    bmiCategory
}