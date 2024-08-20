import { Role } from "./role";

export interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role?: Role;
  phone : string;
  location:string;
  profileImage:string;
 
  
}