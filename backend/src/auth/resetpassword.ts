// exports.resetPassword=async(req:Request,res:Response,next:any)=>{
//     const {password} = req.body
//     const resetPasswordToken = crypto.createHash("sha256")
//     .update(req.params.resetToken)
//     .digest('hex');
//     try {
//         const user: IUser | null   = await User.findOne({
//             resetPasswordToken,
//             resetPasswordExpire: {$gt: Date.now(),
//             }
//         })

//         if (!user){
//             return next(new ErrorResponse("Invalid Reset Token", 400));
//         }
//         user.password = password;
//         user.resetPasswordToken=undefined;
//         user.resetPasswordExpire= undefined; 
//         await user.save();
//         res.status(201)
//         .json({
//             success: true,
//             data:"Password Reset successful"
//         });

//     } catch (error) {
//         next(error);
//     }
// };