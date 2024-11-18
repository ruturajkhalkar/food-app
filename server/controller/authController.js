const useModel = require("../model/useModel");




 const  registerController = async (req,res)=>{
 try{
    const { userName, email, password, phone, address } = req.body;
    // if(!userName || !email || !password ||!phone){
    //     return res.status(500).send({
    //         success: false,
    //         message: "Please Provide All Fields",
    //       })
    //     }
    // const exists  = useModel.findOne({email})
    // if(exists){
    //     return res.status(500).send({
    //         success: false,
    //         message: "User alredy Present",
    //       })
    // }
    const user = await useModel.create({
        userName,
        email,
        password,
        address,
        phone,
      });
     res.status(200).send({
        success: true,  
        message: "Successfully Registered",
        user
     })


 }catch(err){
    console.log("Error : ",err)
    res.status(500).send({
    success:false,
    message:"Error In Register API",
    err
    })
   
 }
}

module.exports = {registerController}