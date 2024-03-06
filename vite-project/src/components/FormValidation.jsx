export const validateName = (name) => {
    if(!name.trim()) {
        return 'Name is required';
    }
    return '';
};

export const validateEmail = (email) => {
    if(!email.trim())
 {
    return 'Email is required';
 } else if (!isValidEmail(email)) {
    return 'Invalid email address';
 }
 return '';
};

const isValidEmail = (email) => {
    const valid = /^([a-z0-9_\.-]+)@([\da-z\.]+)\.([a-z\.]{2-6})$/;
    return valid.test(String(email));
};

