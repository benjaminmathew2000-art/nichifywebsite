# Complete Setup Instructions for Nichify Contact Form

## 🎯 Quick Setup (5 minutes)

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet → Name it "Nichify Contact Enquiries"
3. **Add these exact headers in Row 1:**
   ```
   Date | Name | Email | Company | ProjectType | Services | Message
   ```

### Step 2: Set Up Google Apps Script
1. In your sheet: **Extensions** → **Apps Script**
2. Delete all existing code
3. Copy this code:

```javascript
const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)
  
  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1
    
    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
      
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  } finally {
    lock.releaseLock()
  }
}
```

4. **Save** the project as "Nichify Contact Form"
5. **Run `initialSetup` function once** (click the function dropdown → select `initialSetup` → click Run)

### Step 3: Deploy as Web App
1. Click **Deploy** → **New Deployment**
2. Settings:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
3. Click **Deploy**
4. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC123.../exec`)

### Step 4: Configure Your Website
1. In Replit, click the **lock icon** (Secrets)
2. Add new secret:
   - **Name:** `VITE_GOOGLE_SCRIPT_URL`
   - **Value:** Your Web App URL from Step 3

## ✅ Testing

1. Visit your website contact form
2. Submit a test enquiry
3. Check your Google Sheet - it should appear instantly!

## 🔧 Troubleshooting

**Form not submitting?**
- Check the Google Apps Script URL is correct
- Verify the sheet headers match exactly: `Date | Name | Email | Company | ProjectType | Services | Message`
- Make sure you ran `initialSetup` function

**Sheet not updating?**
- Check Google Apps Script execution transcript for errors
- Ensure "Anyone" has access to the web app
- Try redeploying the web app

## 🌐 Domain Issues Explained

Your domain `nichifymarketing.com` might not work yet because:

1. **DNS Propagation** - New domains take 24-48 hours to work worldwide
2. **SSL Certificate** - HTTPS setup can take several hours
3. **Domain Configuration** - Your domain registrar settings might need adjustment
4. **Replit Custom Domain** - May require additional setup in Replit

**Test your domain:**
```bash
# Check if domain resolves
nslookup nichifymarketing.com

# Test if accessible  
curl -I https://nichifymarketing.com
```

The contact form will work perfectly on any functioning domain once Google Apps Script is set up!