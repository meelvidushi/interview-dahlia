import express, { Request, Response } from 'express';
import User from '../models/User'; 

const router = express.Router();

router.post('/storeUserDetails', async (req: Request, res: Response) => {
  const { username, clerkUserId, email, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ clerkUserId });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = new User({
      username,
      clerkUserId,
      email,
      firstName,
      lastName,
    });

    await newUser.save();
    res
      .status(201)
      .json({
        success: true,
        message: 'User details successfully stored',
        newUser,
      });
  } catch (error) {
    console.error('Failed to store user details:', error);
    res
      .status(500)
      .json({ success: false, message: 'Error saving user details' });
  }
});

export default router;
