export async function submitToGoogleSheets(formData: FormData) {
    const GOOGLE_FORM_ACTION_URL = "https://script.google.com/macros/s/AKfycbylp5ffkb3dDRpTY9rlCCTNEyYJyhwfu_vq7j9uETfdoJSlE9x8duYlTBt2i1xWCQ/exec";

    // Convert FormData to URL parameters for GET request (Apps Script compatibility)
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
        params.append(key, value.toString());
    });

    try {
        // POST request with URL-encoded form data (e.parameter in Apps Script)
        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });
        return true;
    } catch (error) {
        console.error("Form submission error:", error);
        return false;
    }
}
