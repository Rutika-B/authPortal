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
      const { returedData, error } = await this.supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https//example.com/welcome",
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async loginToact({ email, password }) {
    try {
      const { returndData, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();
export default authService;
