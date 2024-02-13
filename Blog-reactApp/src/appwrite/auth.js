// Importing necessary modules from the 'appwrite' package
import { Client, Account, ID } from 'appwrite';
import conf from "../conf/conf"
// Defining a class for handling authentication-related operations
export class AuthService {
    // Initializing Appwrite client and account objects
    client = new Client();
    account;

    constructor() {
        // Configuring the Appwrite client with endpoint and project ID
        this.client
            .setEndpoint(conf.appWriteUrl) // Assuming 'conf' is defined elsewhere
            .setProject(conf.appWriteProjectId); // Assuming 'conf' is defined elsewhere
        // Creating an instance of the Account class with the configured client
        this.account = new Account(this.client);
    }

    // Asynchronous method for creating a new user account
    async createAccount({ email, password, name }) {
        try {
            // Creating a new account using the provided email, password, and name
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // If account creation is successful, automatically login the user
                return this.login({ email, password });
            } else {
                // If account creation fails, return null or some error
                return userAccount;
            }
        } catch (error) {
            // Catching and rethrowing any errors that occur during the process
            throw error;
        }
    }

    // Asynchronous method for logging in a user with email and password
    async login({ email, password }) {
        try {
            // Creating a new session using the provided email and password
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // Catching and rethrowing any errors that occur during the process
            throw error;
        }
    }

    // Asynchronous method for retrieving information about the current user
    async getCurrentUser() {
        try {
            // Fetching details of the current user
            return await this.account.get();
        } catch (error) {
            // Catching and handling any errors that occur during the process
            throw error;
        }
        // This return statement is unreachable because the try block either returns the user data or throws an error
        return null;
    }

    // Asynchronous method for logging out the current user
    async logout() {
        try {
            // Deleting all sessions associated with the current user
            await this.account.deleteSessions();
        } catch (error) {
            // Catching and logging any errors that occur during the process
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// Creating an instance of the AuthService class
const authService = new AuthService();

// Exporting the instance of the AuthService class as the default export
export default authService;
