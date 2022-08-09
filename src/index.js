const { App } = require('express')
const app = App()
app.listen(3001, () => {
    console.log(`app listening at http://localhost:${port}`)
});