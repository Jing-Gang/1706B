const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()

app.get('/getdata',(req,res)=>{
    let obj = JSON.parse(fs.readFileSync("./mock/data.json","utf-8"))
    res.send(obj)
})
app.get('/tabdata',(req,res)=>{
    // console.log(req)
    let tab=req.query
    let tablist= []
    console.log(tab.type)
    const List = JSON.parse(fs.readFileSync("./mock/data.json","utf-8"))
    // console.log(List)
    if (tab.type=='全部') {
        tablist = List
    }else{
        let result = List.filter((item)=>{
            return item.type == tab.type
        })
        console.log(result)
        tablist=result
    }
    res.send(tablist)
})

app.get('/changedata',(req,res)=>{
    let obj= req.query
    let changedata = []
    const List = JSON.parse(fs.readFileSync("./mock/data.json","utf-8"))
    changedata = List.filter((item)=>{
        return item.title.includes(obj.name) || item.type.includes(obj.name)
    })
    res.send(changedata)
})




app.listen(2001,()=>{
    console.log('succ')
})
