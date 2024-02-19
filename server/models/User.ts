import mongoose, { Schema, Document } from 'mongoose';
interface IUser extends Document {
  clerkUserId: string;
  username: string;
  email: string; 
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true, 
  },
  firstName: { 
    type: String,
    required: true, 
  },
  lastName: { 
    type: String,
    required: true, 
  },
});

export default mongoose.model<IUser>('User', UserSchema);
