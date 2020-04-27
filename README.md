# abstr-dbi
Database independent interface

![Screenshot](_media/dbi-dia.png?raw=true)

---

### Example of use with the MongoDB driver 

```js
/*
* For function test work, it's necessary mongodb instance started.
*/
const DBI = require('abstr-dbi')
const dbi = DBI({ driver: 'mongodb' })

const database = 'mongodb://localhost:27017/abstr_dbi_test'

console.log(`Connecting to ${database}...`)
dbi.connect({connectionParams:database})
    .then(() => {
        console.log(`Connected to database successfully! Engine [ ${dbi.EngineType} ]`)
    })
    .catch((err) => {
        console.log('Failed to connect database', err.stack)
    })
```
