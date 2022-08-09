const data = require("../../input.json")
const { riskCategory, bmiCategory } = require("../../constants/constants")

const getPeopleBmiData = () => {
    const bmiData = [];
    data.forEach((item) => {
        item.BMI = (item.WeightKg / ((item.HeightCm / 100) * (item.HeightCm / 100))).toFixed(2)
        for (const key in bmiCategory) {
            if (bmiCategory.hasOwnProperty(key)) {
                const lowerLimitCheck = bmiCategory[key].lowerLimit ? (bmiCategory[key].lowerLimit < item.BMI) : true;
                const upperLimitCheck = bmiCategory[key].upperLimit ? (bmiCategory[key].upperLimit > item.BMI) : true;
                if (lowerLimitCheck && upperLimitCheck) {
                    item["BMI Category"] = key
                    item["Health Risk"] = riskCategory[key]
                    break
                }
            }
        }
        bmiData.push(item);
    });
    return data
}

const getOverweightPeopleCount = () => {
    return data
}

module.exports = {
    getPeopleBmiData
}