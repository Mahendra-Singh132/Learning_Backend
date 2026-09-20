import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError} from "../utils/apiErrors.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";



const registerUser= asyncHandler(async (req,res)=>{
    // res.status(200).json({
    //     message:"OK Mahendra Singh Sisodiya "
    //    })

// get user detailes from frontend
// validation - not empty
// check if user already exist or not
// check for images
// check for avatar
// upload them to cloudinary
// create user object - create entry in db
// remove password and refresh token field from response 
// check for user creation
// return res

const {fullname,email,username,password} = req.body;

console.log("email: ",email);

if([fullname,email,username,password].some((field)=> field?.trim()==="")){
    throw new ApiError(400,"all fields are cumpolsury and required!!!!!")
}

const existingUser = await User.findOne({
    $or:[{ email },{ username }]
})

if(existingUser){
    throw new ApiError(409, "User with userName or E-mail already Exist");
}

const avatarLocalPath = req.files?.avatar?.[0]?.path;
const coverImageLocaPath = req.files?.coverImage?.[0]?.path;

if(!avatarLocalPath)
{
    throw new ApiError(400," Avatar file is mandetory")
}

const avatar = await uploadOnCloudinary(avatarLocalPath);

const coverImage = await uploadOnCloudinary(coverImageLocaPath);

if(!avatar)
{
    throw new ApiError(400," Avatar file is mandetory")
}

const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
})


const createdUser = await User.findById(user._id).select("-password -refreshToken");

if(!createdUser){
    throw new ApiError(500,"something Went wrong while registrng user");
}

return res.status(201).json(
    new ApiResponse(200,createdUser,"user Registerd Succesfully")
)

})

export { registerUser }