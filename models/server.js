const express = require('express')
const cors =require('cors')
class Server{
	constructor(){
		this.app = express()
		this.port = process.env.PORT
		this.middlewares()
		this.routes()
	}

	routes(){
		this.app.use('/api/usuarios',require('../routes/user'))
	}
	listen(){
		this.app.listen(this.port,()=>{
			console.log('run dev server',this.port)
		})
	}
	middlewares(){
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(express.static('public'))
	}
}
module.exports= Server