import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser= asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"OK Mahendra Singh Sisodiya "
    })
})

export { registerUser }