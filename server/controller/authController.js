import userModel from "../models/userModel.js"
import orderModel from "../models/orderModel.js";
import JWT from 'jsonwebtoken'
export const registerController = async(req,res)=>{

      try {
       const {name,email,password,phone,address,answer} = req.body;
       //validation
       if(!name){
        return res.send({message:'Name is required'})
       }
       if(!email){
        return res.send({message:'Email is required'})
       }
       if(!password){
        return res.send({message:'Password is required'})
       }
       if(!phone){
        return res.send({message:'Phone is required'})
       }
       if(!address){
        return res.send({message:'Address is required'})
       }
       if(!answer){
        return res.send({message:'Answer is required'})
       }

      // check user
      const existinguser = await userModel.findOne({email})
   if(existinguser){
    return res.status(200).send({
        success:false,
        message:'Already Register please login'
    })
   }
   //save 
   const user = await new userModel({
      name,
      email,
      password,
      phone,
      address,
      answer
   }).save();
      res.status(201).send({
        success:true,
        message:'user register succesfully',
        user
      })

      } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Register',
            error
        })
      }
}


//post login
 
export const loginController = async (req,res) =>{
  try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = (password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      //await use there
      const token =  JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
}

export const forgotPasswordController = async(req,res)=>{
  try {
    const {email,answer,newPassword}= req.body
    if(!email){
      res.status(400).send({message:"email is required"})
    }
    if(!answer){
      res.status(400).send({message:"answer is required"})
    }
    if(!newPassword){
      res.status(400).send({message:"New Password is required"})
    }

    // check 
    const user = await userModel.findOne({email,answer})
    // validation
    if(!user){
      return res.status(404).send({
        success:false,
        message:"wrong email or answer"
      })
    }
    
     await userModel.findByIdAndUpdate(user._id,{password:newPassword});
     res.status(200).send({
      success:true,
      message:"password reset succesfully",
     });

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"something went wrong",
      error
    })
  }
};

//test controller
export const testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };



  //update prfole
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    // hashPassword
    const hashedPassword = password ? await (password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//orders

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate({
        path: "products",
        select: "-photo", // Exclude photo initially
        populate: { path: "photo", select: "url" } // Populate photo field with URL
      })
      .populate("buyer", "name");

    // Modify product objects to include photo URL
    orders.forEach(order => {
      order.products.forEach(product => {
        if (product.photo) {
          product.photo = product.photo.url; // Assuming URL property is "url"
        }
      });
    });

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting orders",
      error,
    });
  }
};


//order status controllerrr
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    // Ensure status is provided
    if (!status) {
      return res.status(400).send({
        success: false,
        message: "Status is required",
      });
    }

    // Find and update the order status
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    // If the order is not found
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "Order not found",
      });
    }

    // Successful update response
    res.json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error("Error while updating order status:", error);
    res.status(500).send({
      success: false,
      message: "Error while updating order status",
      error: error.message,
    });
  }
};
