const { connect } = require("mongoose")

const dbConnnection = async() => {

    try{
       
        await connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log('Data base connected');
        
    }catch(error){
        console.log(error)
    }
}

module.exports = dbConnnection;

