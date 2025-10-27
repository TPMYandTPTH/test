# What Was Changed

## ONLY 3 Changes Made to Your Code:

### 1. script.js - Added at the TOP (lines 1-23):
```javascript
// Interview booking logic
const interviewLinks = { ... };
const agentJobKeywords = [ ... ];
function isAgentPosition(jobType) { ... }
function getInterviewLink(languageOption) { ... }
```

### 2. script.js - Modified openQrModal function (around line 520):
BEFORE:
```javascript
function openQrModal(url) {
    // creates QR code
    // shows modal
}
```

AFTER:
```javascript
function openQrModal(url, selectedLanguage, selectedJob) {
    // creates QR code
    // NEW: checks if agent position
    // NEW: shows/hides interview step
    // shows modal
}
```

### 3. script.js - Updated function call (around line 630):
BEFORE:
```javascript
openQrModal(finalLink);
```

AFTER:
```javascript
openQrModal(finalLink, selectedLanguage, selectedJob);
```

### 4. Added translations to all 6 languages:
- step_one, step_one_desc, apply_online, or_scan
- step_two, step_two_desc, book_interview, interview_note, share_opportunity

### 5. HTML - Only changed the modal structure (lines 217-305)
- Added Step 1 and Step 2 divs
- QR code moved to right side
- Interview booking section (hidden by default)

### 6. CSS - Only added new styles at the end (lines 366-456)
- .application-step, .step-header, .step-number, .step-title
- .btn-apply, .btn-interview
- .qr-canvas, .interview-note

## Everything Else is EXACTLY THE SAME:
✓ All dropdown functionality
✓ UTM parameter tracking
✓ JSON data loading
✓ Language switching
✓ Thai video section
✓ Hot job of the week
✓ All existing translations
✓ Share buttons
✓ All original design and colors

## How to Test:
1. Put data.json, index.html, styles.css, and script.js in the same folder
2. Open index.html in browser
3. Select: Japanese, Kuala Lumpur, Customer Service Representative
4. Click "Generate QR Code & Apply Now!"
5. You should see BOTH steps (because Customer Service is an agent position)
6. Try with a non-agent position - you'll only see Step 1

## Interview Links:
- Mandarin → Chinese booking
- Cantonese → Chinese booking  
- Korean → Korean booking
- Japanese → Japanese booking
- English → EN&MY booking
- Malay → EN&MY booking
- Thai → Thai booking
