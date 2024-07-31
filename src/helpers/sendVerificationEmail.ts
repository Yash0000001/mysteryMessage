import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from:"yashqwe58@gmail.com",
            to:email,
            subject:"Verification email from mystery message",
            react: VerificationEmail({username,otp:verifyCode}),
        })
        return {success:false,message:"Verification email send successfully"}
    } catch (error) {
        console.error("Error sending verification email", error)
        return {success:false,message:"Failed to send verification email"}

    }
}