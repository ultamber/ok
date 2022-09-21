// exports.forgotPassword=async(req:Request,res:Response,next:any)=>{
//     const {email}=req.body;

//     try {
//         const user:User | null= await user.findOne({user:email});
//         if (!user){
//             return next(new ErrorResponse("Email could not be sent",404));
//         }
//         const resetToken=user.getResetPasswordToken();
//         await user.save();

//         const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
//         const message = `
//         <h1> You have requested a password reset </h1>
//         <p> Please go to this link to reset your password </p>
//         <a href=${resetUrl} clicktracking=off>${resetUrl}</a> 
//         `
//         try {
//            await sendEmail({
//                to: user.email,
//                text:message,
//                subject:message

//            }); 
//            res.status(200)
//            .json({
//                success: true,
//                data:"Email Sent"
//            })
//         } catch (error) {
//             user.resetPasswordToken=undefined;
//             user.resetPasswordExpire=undefined;
//             await user.save();

//             return next(new ErrorResponse("Email could not be sent", 500))

//         }
//     } catch (error) {
//         next(error);
//     }
// };