import User from "./user";

describe("User", () => {
    let user: User;

    beforeEach(() => {
        user = new User("JohnDoe", "johndoe@example.com", 123456789, "password");
    });

    it("should have the correct nickname", () => {
        expect(user.nickname).toBe("JohnDoe");
    });

    it("should have the correct email", () => {
        expect(user.email).toBe("johndoe@example.com");
    });

    it("should have the correct cpf", () => {
        expect(user.cpf).toBe(123456789);
    });

    it("should have the correct password", () => {
        expect(user.password).toBe("password");
    });

    it("should have emailVerified set to false by default", () => {
        expect(user.emailVerified).toBe(false);
    });

    it("should be able to set a new nickname", () => {
        user.nickname = "JaneDoe";
        expect(user.nickname).toBe("JaneDoe");
    });

    it("should be able to set a new email", () => {
        user.email = "janedoe@example.com";
        expect(user.email).toBe("janedoe@example.com");
    });

    it("should be able to set a new cpf", () => {
        user.cpf = 987654321;
        expect(user.cpf).toBe(987654321);
    });

    it("should be able to set a new password", () => {
        user.password = "newpassword";
        expect(user.password).toBe("newpassword");
    });

    it("should be able to set emailVerified to true", () => {
        user.emailVerified = true;
        expect(user.emailVerified).toBe(true);
    });

    it("should be able to login with the correct email and password", () => {
        user.login("johndoe@example.com", "password");
        expect(user.emailVerified).toBe(true); // Assuming email verification is required for login
    });

    it("should throw an error when trying to login with an incorrect password", () => {
        expect(() => {
            user.login("johndoe@example.com", "wrongpassword");
        }).toThrowError("Email ou senha incorretos");
    });

    it("should throw an error when trying to login with an incorrect email", () => {
        expect(() => {
            user.login("janedoe@example.com", "password");
        }).toThrowError("Email ou senha incorretos");
    });

    it("should be able to verify the email", () => {
        user.verifyEmail("johndoe@example.com");
        expect(user.emailVerified).toBe(true);
    });

    it("should be able to create a new account", () => {
        const newUser = new User("JaneDoe", "janedoe@example.com", 987654321, "newpassword");
        expect(newUser).toBeDefined();
        // Add more assertions if needed
    });

    it("should be able to delete the account", () => {
        user.deleteAccount("johndoe@example.com", "password");
        // Add your assertions here
    });

    it("should be able to update the account", () => {
        user.updateAccount("JaneDoe", "janedoe@example.com", 987654321, "newpassword");
        // Add your assertions here
    });

    it("should be able to change the password", () => {
        user.changePassword("johndoe@example.com", "password", "newpassword");
        expect(user.password).toBe("newpassword");
    });
});
