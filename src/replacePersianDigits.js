export const replacePersianDigits = (value) => {
    return value
        .toString()
        .replace(/[\u06F0-\u06F9\u0660-\u0669]/g, (char) =>
            String.fromCharCode(char.charCodeAt(0) - 1728)
        );
}