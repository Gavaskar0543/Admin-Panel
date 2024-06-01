const Admin = require('../../../Model/Admin_Model');
const Employee = require('../../../Model/Employee_Model');
module.exports.createSession = async function(req,res){
    try{
       let user = await Employee.findOne({email:req.body.email});
       if(!user || user.password != req.body.password){
        return res.status(401).json({
            message:'Invalid UserName or Password',
            success:false
        });
    
       }
       return res.status(200).json({
        message:"User Signin Successfull",
        success:true,
        data:  {
            token: jwt.sign(user.toJSON(),process.env.JWT_KEY, {expiresIn:  '100000'})
        }
       })
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
    }
    /**Add new Admin */
module.exports.addAdmin = async (req,res)=>{
    try{
        const {email} = req.body;
      let isAdmin = Admin.findOne({email:email});
      if(!isAdmin){
        await Admin.create(req.body);
        return res.status(201).json({
            message:'Admin added successfully!',
            success:true
        })
      }
      else{
        return res.status(409).json({
            message:'Admin already exists!',
            success:false
        })
      }
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

/**forgot password */
module.exports.adminForgotPassword = async (req,res)=>{
    try{
        let email = req.body.email;
        let isAdmin = Admin.findOne({email:email});
        if(isAdmin){
        //send mail

        return res.status(200).json({
            message:"Reset Link sent",
            success:true
        })
        }
        else{
            return res.status(404).json({
                message:"No user found!",
                success:false
            })
        }
      
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}
/**Reset password */
module.exports.admiResetPassword = async (req,res)=>{
    try{
        let email = req.body.email;
        let password = req.body.password;
        let isAdmin = Admin.findOne({email:email});
        if(isAdmin){
            await Admin.updateOne({email:email},{$set:{password:password}});
            return res.status(200).json({
                message:"Password reset successfully",
                success:true
            })
        }
        else{
            return res.status(404).json({
                message:"Something went wrong",
                success:false
            })
        }
     
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

    /**Employee Apis */

/*add new Employee */
module.exports.addNewEmployee = async (req,res)=>{
    try{
        await Employee.create(req.body);
        return res.status(200).json({
            message:"User Added",
            success:true
        })

    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}


/*Remove Emplooyee */
module.exports.delteUser = async (req,res)=>{
    try{
    await Employee.deleteOne({_id:req.params.id});
    return res.status(200).json({
        message:"User Deleted",
        success:true
    })
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}
 /*Update Employee */
module.exports.updateUser = async (req,res)=>{
    try{
    let user = Employee.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    return res.status(200).json({
        message:"User Updated",
        success:true,
        data:user
    })
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

module.exports.getAllEmployee = async (req,res)=>{
    try{
    let user = Employee.find();
    return res.status(200).json({
        message:"User Fetched",
        success:true,
        data:user
    })
    }
    catch(error){
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}

/**search Employee */
module.exports.searchEmployee = async (req, res) => {
    const { query } = req.query; // Get the search term
  
    // Build the search query based on the search term
    let searchQuery = {};
    if (query) {
      searchQuery = { $text: { $search: query } }; 
    }
  
    try {
      const results = await Employee.find(searchQuery);
      res.json(results);
    } catch (err) {
      res.status(500).json({ message: 'Error searching documents' });
    }
  };