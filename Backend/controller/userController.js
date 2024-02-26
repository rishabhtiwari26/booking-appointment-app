const user=require('../models/userModel')


exports.getUsers=(req,res,next)=>{
    user.findAll()
        .then(users=>{
            res.send(users)
        })
        .catch(err=>console.log('inside getUser controller Error:- ',err))
}

exports.addUser=(req,res,next)=>{
    console.log('REQESTS',req.body,req.params,req.query)
    const userName=req.body.name
    const  email= req.body.email
    const mobile = req.body.mobile
    try{user.create({
        userName:userName,
        emailid:email,
        mobileNo:mobile
    }).then(result=>{
        // console.log()
        console.log('User Added')
        res.send(result)
        
    }).catch(err=>console.log(err))}
    catch(e ){
        throw new Error(e)
    }
    
    
    // const userId= req.body.id
    // user.findAll()
    //     .then(users=>{
    //         console.log(users)
    //     })
    //     .catch(err=>console.log('inside getUser controller Error:- ',err))
}

// http://localhost:5000/users/add-user?userName=rishabh&mobileNo=8272837800&emailId=risjadkaj

exports.getUserById=(req,res,next)=>{

    const userById= req.params.userById
    user.findByPk(userById)
        .then(user=>{
            console.log(user)
            res.send(user)
        })
        .catch(err=>console.log('inside getUser controller Error:- ',err))
}

exports.deleteUser=(req,res,next)=>{
    user.findByPk(req.body.id)
        .then(user=>{
            user.destroy()
        }).catch(err=>console.log(err))
}