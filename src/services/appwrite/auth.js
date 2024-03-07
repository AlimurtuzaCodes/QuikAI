import {Account, Client, ID} from 'appwrite';
import conf from '../../utils/config';
import {showSnackBar} from '../../components/Utils';

const appwriteClient = new Client();

export class AuthService {
  account;
  constructor() {
    appwriteClient
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(appwriteClient);
  }

  async createUser({name, email, password}) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (user) {
        return this.loginUser({email, password});
      } else {
        return showSnackBar('Something Went Wrong!');
      }
    } catch (error) {
      showSnackBar(error.message);
    }
  }
  async loginUser({email, password}) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      showSnackBar(error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {}
  }

  async logoutUser() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      showSnackBar(error.message);
    }
  }
}

export default AuthService;
