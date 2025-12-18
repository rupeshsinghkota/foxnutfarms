export async function submitToGoogleSheets(formData: FormData) {
    // 🚨 REPLACE THIS WITH YOUR GOOGLE FORM ACTION URL
    // Example: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc.../formResponse"
    // OR if using Apps Script:
    const GOOGLE_FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbzVWDDZTSSgmX6Iat-qNTX3Ewf1Tidr-0O07jsLrFqSknM8IKfgMn51FZjsImsXWXdg/exec";

    try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors", // Important for Google Forms
        });
        return true;
    } catch (error) {
        console.error("Form submission error:", error);
        return false;
    }
}
