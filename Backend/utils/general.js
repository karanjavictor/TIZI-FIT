import bcrypt from 'bcryptjs'
export const isRegistrationValid = async (email, password) => {
    if (!(email && password)) {
        throw new Error("All Register details are required")
    }
    if (!/.{6,}/.test(password)) {
        throw new Error("Password must have atleast 6 characters.");
    }
    if (!/[a-z]/.test(password) || !/[0-9]/.test(password)) {
        throw new Error("Password must have atleast one character and one number.");
    }
    return;
}
export const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error(error.message);
    }
}
export const isValidLogin = async (email, password) => {
    if (!(email && password)) {
        throw new Error("All Login details are required")
    }
    return;
}