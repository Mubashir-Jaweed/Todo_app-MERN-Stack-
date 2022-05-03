const route = require('express').Router()
const mongoose = require('mongoose')
const list = mongoose.model('list')

route.get('/',(req,res)=>{
    res.send('Hello Server 👐')
})
 // get data
route.get('/list/sync',(req,res)=>{
    list.find((err,data)=>{
        if(err){
            res.status(500).send('err',err)
        }else{
            res.status(200).send(data)
        }
    })
})
// post data
route.post('/list/new',(req,res)=>{
    const todo = req.body
    if(!todo ){
        return res.status(500).send('Required')
    }
    // try{
    //     new list({
    //         todo,
    //         iscompleted:'false'
    //     }).save()
    //     res.status(201).send('Created')
    // }catch(err){
    //     res.status(500).send("Error",err)
    // }
    list.create(todo,(err,data)=>{
        if(err){
            res.status(500).send('err',err)
        }
        else{
            res.status(201).send('Created')
        }
    })
})
//delete data
route.delete('/list/:id',(req,res)=>{
    list.findByIdAndDelete(req.params.id,(err)=>{
        if(!err){
            res.status(100)
        }
        else{
            res.send('err',err)
        }
    })
})
//edit data
route.put('/list/:id',(req,res)=>{
    list.findByIdAndUpdate({_id:req.params.id},{todo:req.body.todo},(err,update)=>{
        if(err){
            res.status(500).json('err',err)
        }else{
            res.status(200).json({'update':update})
        }
    })
})
// get data for editroute
route.get('/list/:id',(req,res)=>{
    list.findById({_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500).send('err',err)
        }else{
            res.status(200).send(data)
        }
    })
    
})


module.exports = route