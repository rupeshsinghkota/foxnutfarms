export async function submitToGoogleSheets(formData: FormData) {
    // 🚨 REPLACE THIS WITH YOUR GOOGLE FORM ACTION URL
    // Example: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc.../formResponse"
    const GOOGLE_FORM_ACTION_URL = "YOUR_GOOGLE_FORM_ACTION_URL_HERE";

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
