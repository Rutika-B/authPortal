import Conf from "../Conf/Conf";
import { createClient } from "@supabase/supabase-js";

export class AuthService {
  supabase;
  constructor() {
    console.log(Conf.supabseUrl);

    this.supabase = createClient(Conf.supabseUrl, Conf.supabseAPIkey);
  }
  async createAccount({ email, password }) {
    try {
      const { user, error } = await this.supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.log(error);
        return error;
      }
    } catch (error) {
      throw error;
    }
  }
  async loginToact({ email, password }) {
    try {
      const { user, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log(error);
        return error;
      }
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();
export default authService;
