# Google Apps Script Setup Instructions

## Current Issue
The script is showing "Script function not found: doPost" which means it wasn't deployed correctly.

## Step-by-Step Deployment Instructions

### 1. Create the Script
1. Go to https://script.google.com/
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script-updated.js`

### 2. Save the Script
1. Click the save icon or press Ctrl+S
2. Give your project a name like "Nichify Contact Form"

### 3. Deploy as Web App
1. Click "Deploy" button (top right)
2. Choose "New deployment"
3. Click the gear icon next to "Type"
4. Select "Web app"
5. Set these options:
   - Description: "Nichify Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web app URL that appears

### 4. Test the Deployment
The URL should look like:
`https://script.google.com/macros/s/[SCRIPT_ID]/exec`

### 5. Update Environment Variables
Replace the URL in your .env file with the new deployment URL.

## Troubleshooting
- Make sure you clicked "Deploy" not just "Save"
- Ensure "Execute as: Me" is selected
- Ensure "Who has access: Anyone" is selected
- If you get permission errors, you may need to authorize the script first

## Testing
Once deployed correctly, you should be able to test it with:
```bash
curl -X GET "YOUR_DEPLOYMENT_URL"
```
This should return: "Google Apps Script is working! Use POST to submit form data."