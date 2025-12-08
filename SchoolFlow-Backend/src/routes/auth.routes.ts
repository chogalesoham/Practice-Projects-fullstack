import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { loginSchema, registerSchema } from "../dtos/auth.dtos";
import { protect } from "../middlewares/auth";

const router = Router();

router.post("/register", validate(registerSchema), authCtrl.register);
router.post("/login", validate(loginSchema), authCtrl.login);
router.get("/me", protect, authCtrl.me);

export default router;
