# HealthCare
Calculate the BMI as well as health risk based upon the BMI category


POST : calculate and return the BMI index along with the health risks

curl --location --request POST 'http://localhost:3000/calculatePeopleBmiData' \
--header 'Content-Type: application/json' \
--data-raw '[
  {
    "Gender": "Male",
    "HeightCm": 171,
    "WeightKg": 96
  },
  {
    "Gender": "Male",
    "HeightCm": 161,
    "WeightKg": 85
  },
  {
    "Gender": "Male",
    "HeightCm": 180,
    "WeightKg": 77
  }
]'

GET : Returns the BMI index along with the health risks from inputs.json

curl --location --request GET 'http://localhost:3000/totalOverweightPeople'
