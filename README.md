# HealthCare
Calculate the BMI as well as health risk based upon the BMI category

```
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
```

```
Response : 
[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96,
        "BMI": "32.83",
        "BMI Category": "Moderately Obese",
        "Health Risk": "Medium Risk"
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85,
        "BMI": "32.79",
        "BMI Category": "Moderately Obese",
        "Health Risk": "Medium Risk"
    },
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77,
        "BMI": "23.77",
        "BMI Category": "Normal Weight",
        "Health Risk": "Low Risk"
    },
    {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62,
        "BMI": "22.50",
        "BMI Category": "Normal Weight",
        "Health Risk": "Low Risk"
    },
    {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70,
        "BMI": "31.11",
        "BMI Category": "Moderately Obese",
        "Health Risk": "Medium Risk"
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82,
        "BMI": "29.40",
        "BMI Category": "Overweight",
        "Health Risk": "Enhance Risk"
    }
]
```

```

GET : Returns the BMI index along with the health risks from inputs.json

curl --location --request GET 'http://localhost:3000/totalOverweightPeople'

```

```

Response : 

[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96,
        "BMI": "32.83",
        "BMI Category": "Moderately Obese",
        "Health Risk": "Medium Risk"
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85,
        "BMI": "32.79",
        "BMI Category": "Moderately Obese",
        "Health Risk": "Medium Risk"
    },
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77,
        "BMI": "23.77",
        "BMI Category": "Normal Weight",
        "Health Risk": "Low Risk"
    }
]
```
