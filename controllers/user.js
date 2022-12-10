const {response} = require('express')

const getUser=(req=request,res=response)=>{
	const params =req.query
	res.json({
		params,
		msg:'get api controllers'
	})
}
const putUser=(req,res=response)=>{
	const params =req.params
	res.json({
		params,
		msg:'put api controllers'
	})
}
const postUser = (req,res=response)=>{
	const body=req.body
	res.json({
		body,	
		okey:true,
		msg:'post api controllers'
	})
}
const deleteUser=(req,res=response)=>{
	const id =req.params.id
	res.json({
		okey:true,
		msg:'delete api controllers',
		id
	})
}
module.exports ={
	getUser,
	putUser,
	postUser,
	deleteUser
}