export async function submitToGoogleSheets(formData: FormData) {
    const GOOGLE_FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbzVWDDZTSSgmX6Iat-qNTX3Ewf1Tidr-0O07jsLrFqSknM8IKfgMn51FZjsImsXWXdg/exec";

    // Convert FormData to JSON object
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
        data[key] = value.toString();
    });

    try {
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return true;
    } catch (error) {
        console.error("Form submission error:", error);
        return false;
    }
}
