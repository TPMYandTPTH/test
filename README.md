# TP Careers Landing Page - Enhanced with Interview Booking

## Summary of Changes

I've enhanced your recruitment landing page by adding a creative two-step application process **only for agent positions**. All your existing functionality has been preserved.

## What Was Added

### 1. Enhanced Modal Design
- The application modal now shows a professional two-step process
- **Step 1**: Submit Your Application (applies to ALL positions)
  - Primary "Apply Online Now" button (black)
  - QR code as a secondary option (smaller, on the side)
  
- **Step 2**: Book Your Interview (only shows for agent positions)
  - Green "Schedule Interview Now" button
  - Automatically links to the correct language-specific booking URL

### 2. Smart Interview Booking Logic
The interview booking link **only appears** when users select these job types:
- Customer Service
- Content Moderator (Content Mod)
- Technical Support
- Any position with: Agent, Support, Representative, Specialist, Associate, Advisor, Care

### 3. Language-Specific Interview Links
Each language automatically maps to the correct Outlook booking URL:
- **Mandarin/Cantonese**: Chinese team booking link
- **Korean**: Korea-specific interview link
- **Japanese**: Japan-specific interview link
- **English/Malay**: Combined EN&MY booking link
- **Thai**: Thailand-specific booking link

### 4. All Translations Added
The new modal content is fully translated in all 6 languages:
- English
- Mandarin (Chinese)
- Japanese
- Thai
- Malay
- Korean

## What Was NOT Changed

✅ All your existing code and functionality preserved
✅ data.json integration still works
✅ UTM parameter tracking still works
✅ Dynamic dropdowns still work
✅ Thai video section still works
✅ All existing translations preserved
✅ Hot Job of the Week feature unchanged
✅ Same color scheme (black, white, gray)
✅ Same clean, simple design

## Files Modified

1. **index.html** - Updated modal structure to show two steps
2. **styles.css** - Added styling for the new step indicators and buttons
3. **script.js** - Added interview booking logic and translations

## How It Works

1. User selects language, location, and job type
2. User clicks "Generate QR Code & Apply Now!"
3. Modal opens showing Step 1 (application link + QR code)
4. If job is an agent position, Step 2 automatically appears with interview booking link
5. If job is NOT an agent position, only Step 1 shows

## Testing Recommendations

1. Test with agent positions (Customer Service, Content Mod, etc.) - should show 2 steps
2. Test with non-agent positions (Sales, Management, etc.) - should show only 1 step
3. Test each language to ensure correct interview booking links open
4. Verify all existing functionality still works (dropdowns, UTM tracking, etc.)

## Design Philosophy

The design maintains your original clean, professional aesthetic with:
- Clear visual hierarchy (numbered steps)
- Primary action (Apply) is prominent in black
- Secondary action (Interview) is in green to differentiate
- QR code positioned as an alternative option, not the primary focus
- Responsive design works on all devices
