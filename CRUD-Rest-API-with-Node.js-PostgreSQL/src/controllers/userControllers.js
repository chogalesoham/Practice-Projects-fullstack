import { createUsersService, deleteUserService, getAllUsersService, getUserByIdsService, updateUserService } from "../models/userModels.js"

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data
    })
}

export const createUser = async (req, res, next) => {
    const { name, email } = req.body
    try {
        const newUser = await createUsersService(name, email)
        handleResponse(res, 201, "User cerated successfully", newUser)
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const Users = await getAllUsersService()
        handleResponse(res, 200, "All Users", Users)
    } catch (error) {
        next(error)
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const User = await getUserByIdsService(req.params.id)
        if (!User) return handleResponse(res, 404, "User not found by this id")
        handleResponse(res, 200, "Users by id", User)
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body
    try {
        const User = await updateUserService(req.params.id, name, email)
        if (!User) return handleResponse(res, 404, "User not found by this id")
        handleResponse(res, 200, "User updated successfully", User)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const User = await deleteUserService(req.params.id)
        if (!User) return handleResponse(res, 404, "User not found by this id")
        handleResponse(res, 200, "Users Deleted successfully", User)
    } catch (error) {
        next(error)
    }
}