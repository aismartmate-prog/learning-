const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: סכום זוויות במשולש (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Low",
        "question_text": "במשולש נתונות שתי זוויות: 50° ו-70°. מהו גודלה של <strong>הזווית השלישית</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120'><polygon points='30,100 150,100 80,30' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='50' y='95' font-size='12' fill='#1e293b'>50°</text><text x='115' y='95' font-size='12' fill='#1e293b'>70°</text><text x='80' y='50' font-size='12' fill='red'>?</text></svg></div>",
        "hint": "זכרו שסכום כל שלוש הזוויות בכל משולש הוא תמיד 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שתי הזוויות הידועות לנו.", "math_expression": "50 + 70 = 120" },
            { "verbal_explanation": "נחסיר את הסכום שמצאנו מתוך סך המעלות במשולש (180).", "math_expression": "180 - 120 = 60" }
        ],
        "final_answer": "60°",
        "options": ["50°", "60°", "70°", "80°"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, זווית הראש היא 40°. מהו הגודל של <strong>כל אחת מזוויות הבסיס</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120'><polygon points='90,20 40,100 140,100' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='90' y='45' font-size='12' text-anchor='middle'>40°</text><text x='55' y='95' font-size='12'>?</text><text x='120' y='95' font-size='12'>?</text></svg></div>",
        "hint": "במשולש שווה שוקיים זוויות הבסיס שוות זו לזו. החסירו את זווית הראש מ-180 וחלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את סכום שתי זוויות הבסיס יחד.", "math_expression": "180 - 40 = 140" },
            { "verbal_explanation": "מכיוון שזוויות הבסיס שוות, נחלק את הסכום ל-2.", "math_expression": "140 ÷ 2 = 70" }
        ],
        "final_answer": "70°",
        "options": ["40°", "70°", "140°", "100°"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "במשולש, זווית אחת גדולה פי 2 מהשנייה, והזווית השלישית גדולה פי 3 מהשנייה. מהו גודלה של <strong>הזווית הקטנה ביותר</strong>?",
        "hint": "סמנו את הזווית הקטנה ב-X. שאר הזוויות יהיו 2X ו-3X. חברו הכל ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הזוויות באמצעות X.", "math_expression": "x, 2x, 3x" },
            { "verbal_explanation": "נחבר את כל הזוויות למשוואה אחת השווה ל-180.", "math_expression": "x + 2x + 3x = 180 \u2192 6x = 180" },
            { "verbal_explanation": "נחלק ב-6 כדי למצוא את X (הזווית הקטנה).", "math_expression": "180 ÷ 6 = 30" }
        ],
        "final_answer": "30°",
        "options": ["20°", "30°", "60°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, אחת הזוויות החדות היא 35°. מהו גודלה של <strong>הזווית החדה השנייה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><polygon points='20,20 20,80 120,80' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><rect x='20' y='70' width='10' height='10' fill='none' stroke='#b09151'/><text x='100' y='75' font-size='11'>35°</text><text x='25' y='35' font-size='12' fill='red'>?</text></svg></div>",
        "hint": "במשולש ישר זווית יש זווית אחת של 90°. שתי הזוויות האחרות חייבות להשלים יחד ל-90°.",
        "solution_steps": [
            { "verbal_explanation": "הזווית הישרה היא 90°. לכן שתי הזוויות האחרות סכומן 90°.", "math_expression": "180 - 90 = 90" },
            { "verbal_explanation": "נחסיר את הזווית הידועה מ-90°.", "math_expression": "90 - 35 = 55" }
        ],
        "final_answer": "55°",
        "options": ["55°", "65°", "45°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "נתון משולש שבו זוויות הבסיס הן X ו- X+20. זווית הראש היא 80°. מצאו את <strong>ערכו של X</strong>.",
        "hint": "חברו את שלוש הזוויות (X, X+20, 80) והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה עבור סכום הזוויות.", "math_expression": "x + (x + 20) + 80 = 180" },
            { "verbal_explanation": "נכנס איברים דומים: 2X ועוד 100 שווה 180.", "math_expression": "2x + 100 = 180" },
            { "verbal_explanation": "נעביר אגפים ונחלק ב-2.", "math_expression": "2x = 80 \u2192 x = 40" }
        ],
        "final_answer": "40",
        "options": ["30", "40", "50", "60"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Medium",
        "question_text": "במשולש שווה צלעות, מהו הגודל של <strong>כל זווית</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='60,10 10,90 110,90' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><line x1='30' y1='50' x2='40' y2='50' stroke='#b09151' stroke-width='2'/><line x1='80' y1='50' x2='90' y2='50' stroke='#b09151' stroke-width='2'/><line x1='55' y1='95' x2='65' y2='95' stroke='#b09151' stroke-width='2'/></svg></div>",
        "hint": "במשולש שווה צלעות, כל שלוש הזוויות שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "סכום הזוויות הוא 180 מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נחלק את הסכום ב-3 זוויות שוות.", "math_expression": "180 ÷ 3 = 60" }
        ],
        "final_answer": "60°",
        "options": ["60°", "90°", "45°", "180°"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "זווית אחת במשולש גדולה ב-20° מהשנייה וב-40° מהשלישית. מהו גודל <strong>הזווית הגדולה ביותר</strong>?",
        "hint": "סמנו את הזווית הגדולה ב-X. השנייה תהיה X-20 והשלישית X-40.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: x + (x-20) + (x-40) = 180.", "math_expression": "3x - 60 = 180" },
            { "verbal_explanation": "נעביר אגף: 3X = 240.", "math_expression": "3x = 240" },
            { "verbal_explanation": "נחלק ב-3 למציאת הזווית הגדולה.", "math_expression": "x = 80" }
        ],
        "final_answer": "80°",
        "options": ["60°", "80°", "100°", "70°"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Low",
        "question_text": "האם קיים משולש שזוויותיו הן: 40°, 60°, 90°?",
        "hint": "בדקו האם סכום המספרים נותן בדיוק 180.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את שלוש הזוויות.", "math_expression": "40 + 60 + 90 = 190" },
            { "verbal_explanation": "מכיוון שהסכום גדול מ-180, משולש כזה אינו יכול להתקיים.", "math_expression": "190 \u2260 180" }
        ],
        "final_answer": "לא, הסכום גדול מדי",
        "options": ["כן", "לא, הסכום גדול מדי", "רק אם הוא שווה שוקיים", "רק בגיאומטריה מיוחדת"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, זווית בסיס אחת היא 55°. מהו גודל <strong>זווית הראש</strong>?",
        "hint": "זכרו שיש שתי זוויות בסיס שוות. חברו אותן והחסירו מ-180.",
        "solution_steps": [
            { "verbal_explanation": "סכום שתי זוויות הבסיס.", "math_expression": "55 + 55 = 110" },
            { "verbal_explanation": "נחסיר מהסך הכל (180) כדי למצוא את הראש.", "math_expression": "180 - 110 = 70" }
        ],
        "final_answer": "70°",
        "options": ["55°", "70°", "110°", "125°"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "היחס בין זוויות המשולש הוא 1:2:3. מהן <strong>שלוש הזוויות</strong>?",
        "hint": "חלקו את 180 ל-6 יחידות יחס (1+2+3).",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הערך של יחידת יחס אחת (X).", "math_expression": "180 ÷ (1+2+3) = 180 ÷ 6 = 30" },
            { "verbal_explanation": "נכפיל את יחידת היחס בערכי היחס הנתונים.", "math_expression": "30\u00d71, 30\u00d72, 30\u00d73" }
        ],
        "final_answer": "30°, 60°, 90°",
        "options": ["30, 60, 90", "20, 40, 60", "40, 80, 60", "10, 20, 30"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "זווית חיצונית למשולש היא 120°. אחת הזוויות הפנימיות שאינה צמודה לה היא 50°. מהו גודלה של <strong>הזווית הפנימית השלישית</strong>?",
        "hint": "משפט: זווית חיצונית שווה לסכום שתי הזוויות הפנימיות שאינן צמודות לה.",
        "solution_steps": [
            { "verbal_explanation": "לפי המשפט: זווית חיצונית (120) = זווית פנימית א (50) + זווית פנימית ב.", "math_expression": "120 = 50 + x" },
            { "verbal_explanation": "נחסיר 50 מ-120.", "math_expression": "120 - 50 = 70" }
        ],
        "final_answer": "70°",
        "options": ["50°", "70°", "60°", "110°"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית שווה שוקיים, מהו גודל <strong>זוויות הבסיס</strong>?",
        "hint": "הזווית הישרה היא 90°. שתי האחרות שוות ומשלימות ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נוריד את ה-90° מהסך הכל.", "math_expression": "180 - 90 = 90" },
            { "verbal_explanation": "נחלק את הנותר ל-2 זוויות שוות.", "math_expression": "90 ÷ 2 = 45" }
        ],
        "final_answer": "45°",
        "options": ["45°", "30°", "60°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "במשולש ABC, זווית A היא X, זווית B גדולה ב-10° מזווית A, וזווית C גדולה ב-10° מזווית B. מצאו את <strong>זווית B</strong>.",
        "hint": "הזוויות הן: X, X+10, X+20.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: x + (x+10) + (x+20) = 180.", "math_expression": "3x + 30 = 180" },
            { "verbal_explanation": "נפתור עבור X: 3X = 150, לכן X = 50.", "math_expression": "x = 50" },
            { "verbal_explanation": "זווית B היא X+10.", "math_expression": "50 + 10 = 60" }
        ],
        "final_answer": "60°",
        "options": ["50°", "60°", "70°", "40°"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "Low",
        "question_text": "אם נחבר שתי זוויות של משולש ונקבל 110°, מה גודל <strong>הזווית הנותרת</strong>?",
        "hint": "השתמשו ישירות בהגדרה של סכום הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "נחסיר את סכום שתי הזוויות מ-180.", "math_expression": "180 - 110 = 70" }
        ],
        "final_answer": "70°",
        "options": ["70°", "110°", "90°", "180°"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "סכום זוויות במשולש",
        "difficulty": "High",
        "question_text": "נתון משולש ABC. זווית A שווה לזווית B. זווית C קטנה ב-30° מזווית A. מהו גודל <strong>זווית C</strong>?",
        "hint": "סמנו A=X, B=X, C=X-30.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: x + x + (x-30) = 180.", "math_expression": "3x = 210 \u2192 x = 70" },
            { "verbal_explanation": "נמצא את זווית C (שהיא X-30).", "math_expression": "70 - 30 = 40" }
        ],
        "final_answer": "40°",
        "options": ["70°", "40°", "110°", "30°"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: שטח משולש (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "שטח משולש",
        "difficulty": "Low",
        "question_text": "מהו <strong>שטח</strong> משולש שבסיסו 12 ס\"מ והגובה שלו הוא 8 ס\"מ?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='20,80 140,80 100,20' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><line x1='100' y1='20' x2='100' y2='80' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><text x='80' y='95' font-size='12'>12</text><text x='105' y='50' font-size='12'>8</text></svg></div>",
        "hint": "נוסחת שטח משולש: (בסיס × גובה) ÷ 2.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את אורך הבסיס בגובה.", "math_expression": "12 × 8 = 96" },
            { "verbal_explanation": "נחלק את התוצאה ב-2.", "math_expression": "96 ÷ 2 = 48" }
        ],
        "final_answer": "48 סמ\"ר",
        "options": ["96 סמ\"ר", "48 סמ\"ר", "24 סמ\"ר", "20 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "שטח משולש",
        "difficulty": "Medium",
        "question_text": "שטח משולש הוא 35 סמ\"ר. אורך הבסיס הוא 10 ס\"מ. מהו אורך <strong>הגובה</strong>?",
        "hint": "השתמשו בנוסחה ההפוכה: גובה = (2 × שטח) ÷ בסיס.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את השטח ב-2.", "math_expression": "35 × 2 = 70" },
            { "verbal_explanation": "נחלק באורך הבסיס.", "math_expression": "70 ÷ 10 = 7" }
        ],
        "final_answer": "7 ס\"מ",
        "options": ["3.5 ס\"מ", "7 ס\"מ", "10 ס\"מ", "5 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "במשולש ישר זווית, אורך ניצב אחד הוא 6 ס\"מ והשטח הוא 24 סמ\"ר. מהו אורך <strong>הניצב השני</strong>?",
        "hint": "במשולש ישר זווית הניצבים משמשים כבסיס וגובה זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את השטח ב-2.", "math_expression": "24 × 2 = 48" },
            { "verbal_explanation": "נחלק בניצב הידוע.", "math_expression": "48 ÷ 6 = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["4 ס\"מ", "8 ס\"מ", "12 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "נתון מלבן במידות 10 ס\"מ על 6 ס\"מ. בתוכו חסום משולש כך שבסיסו על צלע המלבן וקודקודו על הצלע המקבילה. מהו <strong>שטח המשולש</strong>?",
        "hint": "שטח משולש כזה הוא תמיד חצי משטח המלבן שעוטף אותו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח המלבן.", "math_expression": "10 × 6 = 60" },
            { "verbal_explanation": "נחלק ב-2 למציאת שטח המשולש.", "math_expression": "60 ÷ 2 = 30" }
        ],
        "final_answer": "30 סמ\"ר",
        "options": ["60 סמ\"ר", "30 סמ\"ר", "15 סמ\"ר", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "שטח משולש",
        "difficulty": "Medium",
        "question_text": "משולש א' וב' הם בעלי אותו בסיס. הגובה של משולש א' גדול פי 2 מהגובה של משולש ב'. פי כמה גדול <strong>שטח משולש א'</strong>?",
        "hint": "השטח תלוי ביחס ישר בגובה כאשר הבסיס קבוע.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את הנוסחה: אם הגובה (h) מוכפל פי 2, גם כל המכפלה תוכפל פי 2.", "math_expression": "Area \u221d h" }
        ],
        "final_answer": "פי 2",
        "options": ["פי 2", "פי 4", "השטחים שווים", "פי 1.5"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "שטח משולש",
        "difficulty": "Low",
        "question_text": "במשולש ישר זווית הניצבים הם 10 ו-10. מהו <strong>השטח</strong>?",
        "hint": "אל תשכחו לחלק ב-2 בסוף!",
        "solution_steps": [
            { "verbal_explanation": "מכפלת הניצבים.", "math_expression": "10 × 10 = 100" },
            { "verbal_explanation": "חלוקה ב-2.", "math_expression": "100 ÷ 2 = 50" }
        ],
        "final_answer": "50",
        "options": ["100", "50", "20", "200"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "נתון משולש קהה זווית שבסיסו 6 ס\"מ והגובה החיצוני אליו הוא 4 ס\"מ. מהו <strong>השטח</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><polygon points='40,80 100,80 140,20' fill='#f8fafc' stroke='#b09151' stroke-width='3'/><line x1='140' y1='20' x2='140' y2='80' stroke='gray' stroke-dasharray='3'/><line x1='100' y1='80' x2='140' y2='80' stroke='gray' stroke-dasharray='3'/><text x='70' y='95' font-size='11'>6</text><text x='150' y='50' font-size='11'>4</text></svg></div>",
        "hint": "גם כשהגובה מחוץ למשולש, נוסחת השטח נשארת (בסיס × גובה) ÷ 2.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את הבסיס האמיתי (6) בגובה החיצוני (4).", "math_expression": "6 × 4 = 24" },
            { "verbal_explanation": "נחלק ב-2.", "math_expression": "24 ÷ 2 = 12" }
        ],
        "final_answer": "12",
        "options": ["24", "12", "10", "48"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "שטח משולש",
        "difficulty": "Medium",
        "question_text": "אם נגדיל את הבסיס של משולש פי 2 ואת הגובה שלו פי 2, <strong>פי כמה יגדל השטח</strong>?",
        "hint": "חשבו: (2*בסיס) כפול (2*גובה) חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "בנוסחה המקורית יש בסיס פעם אחת וגובה פעם אחת. כאן שניהם הוכפלו.", "math_expression": "2 × 2 = 4" }
        ],
        "final_answer": "פי 4",
        "options": ["פי 2", "פי 4", "פי 8", "לא ישתנה"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "שטח משולש הוא 12X. אם הגובה הוא 6, מהו <strong>אורך הבסיס</strong>?",
        "hint": "הציבו בנוסחה: (בסיס * 6) / 2 = 12X.",
        "solution_steps": [
            { "verbal_explanation": "נפשט את הביטוי: 3 כפול בסיס שווה 12X.", "math_expression": "3 \u00d7 base = 12x" },
            { "verbal_explanation": "נחלק ב-3 למציאת הבסיס.", "math_expression": "12x ÷ 3 = 4x" }
        ],
        "final_answer": "4X",
        "options": ["2X", "4X", "6X", "X"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "שטח משולש",
        "difficulty": "Medium",
        "question_text": "מהו שטח המשולש שקודקודיו בנקודות (0,0), (8,0) ו-(0,6) במערכת צירים?",
        "hint": "הבסיס הוא 8 (על ציר X) והגובה הוא 6 (על ציר Y). זהו משולש ישר זווית.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל בסיס בגובה.", "math_expression": "8 × 6 = 48" },
            { "verbal_explanation": "נחלק ב-2.", "math_expression": "48 ÷ 2 = 24" }
        ],
        "final_answer": "24",
        "options": ["48", "24", "14", "10"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים שבסיסו 12 ס\"מ, השטח הוא 48 סמ\"ר. מהו <strong>אורך הגובה</strong> לבסיס?",
        "hint": "השתמשו בנוסחה: גובה = (2 * שטח) / בסיס.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את השטח ב-2.", "math_expression": "48 × 2 = 96" },
            { "verbal_explanation": "נחלק בבסיס 12.", "math_expression": "96 ÷ 12 = 8" }
        ],
        "final_answer": "8",
        "options": ["4", "8", "6", "10"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "שטח משולש",
        "difficulty": "Low",
        "question_text": "איזה מהנתונים הבאים <strong>לא נדרש</strong> כדי לחשב שטח משולש?",
        "hint": "חשבו על נוסחת השטח.",
        "solution_steps": [
            { "verbal_explanation": "בנוסחה יש צורך רק בבסיס ובגובה.", "math_expression": "(b \u00d7 h)/2" }
        ],
        "final_answer": "אורך השוקיים",
        "options": ["אורך הבסיס", "אורך הגובה", "אורך השוקיים", "חלוקה ב-2"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "במשולש ששטחו 50, הבסיס והגובה שווים זה לזה. מהו <strong>אורך הבסיס</strong>?",
        "hint": "X כפול X חלקי 2 שווה 50. לכן X בריבוע שווה 100.",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: X\u00b2 / 2 = 50.", "math_expression": "x\u00b2 = 100" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "x = 10" }
        ],
        "final_answer": "10",
        "options": ["5", "10", "25", "50"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "שטח משולש",
        "difficulty": "High",
        "question_text": "נתון משולש ABC שבו הגובה לצלע BC הוא 10. אם נגדיל את הצלע BC ב-4 ס\"מ, ב<strong>כמה סמ\"ר יגדל השטח</strong>?",
        "hint": "התוספת לשטח היא בעצם שטח של משולש קטן שבסיסו 4 וגובהו 10.",
        "solution_steps": [
            { "verbal_explanation": "הגובה קבוע (10). התוספת לבסיס היא 4.", "math_expression": "4 \u00d7 10 = 40" },
            { "verbal_explanation": "נחלק ב-2 כדי למצוא את תוספת השטח.", "math_expression": "40 ÷ 2 = 20" }
        ],
        "final_answer": "ב-20 סמ\"ר",
        "options": ["ב-4 סמ\"ר", "ב-20 סמ\"ר", "ב-40 סמ\"ר", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "שטח משולש",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, הניצבים הם 3 ס\"מ ו-4 ס\"מ והיתר הוא 5 ס\"מ. מהו <strong>שטח</strong> המשולש?",
        "hint": "השתמשו רק בניצבים לחישוב השטח. היתר אינו רלוונטי לנוסחה זו.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את הניצבים.", "math_expression": "3 × 4 = 12" },
            { "verbal_explanation": "נחלק ב-2.", "math_expression": "12 ÷ 2 = 6" }
        ],
        "final_answer": "6",
        "options": ["6", "10", "7.5", "12"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 3: סוגי משולשים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "סוגי משולשים",
        "difficulty": "Low",
        "question_text": "איך נקרא משולש שבו <strong>כל הצלעות שוות</strong> זו לזו?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><polygon points='50,10 10,90 90,90' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/></svg></div>",
        "hint": "במשולש כזה גם כל הזוויות שוות (60 מעלות).",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שכל הצלעות שוות, השם נגזר מכך.", "math_expression": "Equilateral" }
        ],
        "final_answer": "משולש שווה צלעות",
        "options": ["משולש שווה שוקיים", "משולש שווה צלעות", "משולש שונה צלעות", "משולש ישר זווית"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "משולש שזוויותיו הן 30°, 60° ו-90° הוא משולש:<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100'><polygon points='20,10 20,90 80,90' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><rect x='20' y='80' width='10' height='10' fill='none' stroke='#b09151'/></svg></div>",
        "hint": "הסתכלו על הזווית של ה-90 מעלות. היא זו שקובעת את שם המשולש לפי זוויות.",
        "solution_steps": [
            { "verbal_explanation": "זווית של 90 מעלות נקראת זווית ישרה.", "math_expression": "90° = Right angle" }
        ],
        "final_answer": "ישר זווית",
        "options": ["חד זווית", "קהה זווית", "ישר זווית", "שווה שוקיים"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "סוגי משולשים",
        "difficulty": "Low",
        "question_text": "במשולש <strong>שווה שוקיים</strong>, כמה צלעות שוות יש לפחות?",
        "hint": "השם מעיד על כך שיש 'שוקיים' (זוג).",
        "solution_steps": [
            { "verbal_explanation": "ההגדרה של משולש שווה שוקיים היא משולש שיש לו לפחות שתי צלעות שוות.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["1", "2", "3", "אף אחת"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "משולש שבו זווית אחת היא 110° נקרא משולש:<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='80'><polygon points='20,60 160,60 60,20' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='65' y='55' font-size='10'>110°</text></svg></div>",
        "hint": "זווית שגדולה מ-90 מעלות נקראת זווית קהה.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שיש זווית אחת הגדולה מ-90, המשולש מוגדר לפי הזווית הזו.", "math_expression": "110 > 90" }
        ],
        "final_answer": "קהה זווית",
        "options": ["חד זווית", "ישר זווית", "קהה זווית", "שווה צלעות"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "סוגי משולשים",
        "difficulty": "High",
        "question_text": "האם ייתכן משולש שהוא גם <strong>ישר זווית</strong> וגם <strong>שווה צלעות</strong>?",
        "hint": "חשבו מה גודל הזוויות במשולש שווה צלעות, והאם אחת מהן יכולה להיות 90.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות כל הזוויות הן תמיד 60 מעלות.", "math_expression": "60, 60, 60" },
            { "verbal_explanation": "במשולש ישר זווית חייבת להיות זווית של 90 מעלות. לכן זה בלתי אפשרי.", "math_expression": "90 \u2260 60" }
        ],
        "final_answer": "לא, זה בלתי אפשרי",
        "options": ["כן", "לא, זה בלתי אפשרי", "רק אם הצלעות גדולות מאוד", "רק אם הוא גם שווה שוקיים"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "איך נקרא משולש שבו אורכי הצלעות הם 5 ס\"מ, 7 ס\"מ ו-9 ס\"מ?",
        "hint": "בדקו האם יש צלעות שוות.",
        "solution_steps": [
            { "verbal_explanation": "כל שלוש הצלעות באורכים שונים.", "math_expression": "5 \u2260 7 \u2260 9" }
        ],
        "final_answer": "משולש שונה צלעות",
        "options": ["שווה שוקיים", "שווה צלעות", "שונה צלעות", "ישר זווית"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "סוגי משולשים",
        "difficulty": "High",
        "question_text": "נתון משולש שווה שוקיים שבו זווית הראש היא 90°. מהו שמו הנוסף של משולש זה?",
        "hint": "הוא משלב שתי תכונות: שוויון שוקיים וזווית ישרה.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שיש לו זווית ישרה הוא 'ישר זווית'. מכיוון שיש לו שוקיים שוות הוא 'שווה שוקיים'.", "math_expression": "Right + Isosceles" }
        ],
        "final_answer": "משולש ישר זווית ושווה שוקיים",
        "options": ["משולש שווה צלעות", "משולש קהה זווית", "משולש ישר זווית ושווה שוקיים", "משולש חד זווית"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "סוגי משולשים",
        "difficulty": "Low",
        "question_text": "במשולש חד זווית, כמה זוויות חדות (קטנות מ-90°) יש?",
        "hint": "במשולש כזה, כל הזוויות חייבות להיות קטנות מ-90.",
        "solution_steps": [
            { "verbal_explanation": "לפי ההגדרה, כל שלוש הזוויות הן חדות.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["1", "2", "3", "אף אחת"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "סוגי משולשים",
        "difficulty": "High",
        "question_text": "האם קיים משולש שבו יש <strong>שתי זוויות ישרות</strong>?",
        "hint": "חשבו מה יהיה סכום הזוויות אם היו שתי זוויות של 90 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "נחבר שתי זוויות ישרות: 90 + 90 = 180.", "math_expression": "180" },
            { "verbal_explanation": "מכיוון שסכום שתי זוויות כבר הגיע ל-180, לא נשאר מקום לזווית שלישית (היא תצטרך להיות 0), ולכן לא יכול להיווצר משולש.", "math_expression": "Sum > 180" }
        ],
        "final_answer": "לא, זה בלתי אפשרי",
        "options": ["כן", "לא, זה בלתי אפשרי", "רק אם הוא גדול מאוד", "רק במרובע"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "משולש שבו שתי זוויות הן בנות 45° הוא משולש:<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><polygon points='20,20 20,100 100,100' fill='#fdfbf7' stroke='#b09151' stroke-width='3'/><text x='25' y='45' font-size='11'>45°</text><text x='70' y='95' font-size='11'>45°</text></svg></div>",
        "hint": "חשבו קודם את הזווית השלישית (180 פחות 45 פחות 45).",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הזווית השלישית.", "math_expression": "180 - (45 + 45) = 90" },
            { "verbal_explanation": "מכיוון שיש זווית של 90 מעלות ושתי זוויות שוות, הוא ישר זווית ושווה שוקיים.", "math_expression": "Right Isosceles" }
        ],
        "final_answer": "ישר זווית ושווה שוקיים",
        "options": ["חד זווית", "שווה צלעות", "ישר זווית ושווה שוקיים", "קהה זווית"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "סוגי משולשים",
        "difficulty": "Low",
        "question_text": "איזה משולש הוא תמיד <strong>חד זווית</strong>?",
        "hint": "חשבו על משולש שבו כל הזוויות הן 60 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות כל הזוויות הן תמיד 60 מעלות, ו-60 היא זווית חדה.", "math_expression": "60 < 90" }
        ],
        "final_answer": "משולש שווה צלעות",
        "options": ["משולש שווה שוקיים", "משולש שווה צלעות", "משולש ישר זווית", "אף אחד מהם"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, זווית הראש היא 120°. איזה סוג משולש זה לפי זוויותיו?",
        "hint": "הסתכלו על זווית הראש - היא גדולה מ-90.",
        "solution_steps": [
            { "verbal_explanation": "זווית של 120 מעלות היא זווית קהה. לכן המשולש הוא קהה זווית.", "math_expression": "120 > 90" }
        ],
        "final_answer": "קהה זווית",
        "options": ["חד זווית", "ישר זווית", "קהה זווית", "שווה צלעות"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "סוגי משולשים",
        "difficulty": "High",
        "question_text": "אם במשולש שווה שוקיים אחת מזוויות הבסיס היא 60°, איזה סוג משולש זה <strong>בפועל</strong>?",
        "hint": "חשבו את כל שלוש הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות הבסיס שוות, לכן שתיהן 60°.", "math_expression": "60, 60" },
            { "verbal_explanation": "נמצא את זווית הראש.", "math_expression": "180 - (60 + 60) = 60" },
            { "verbal_explanation": "מכיוון שכל הזוויות הן 60°, המשולש הוא שווה צלעות.", "math_expression": "Equilateral" }
        ],
        "final_answer": "שווה צלעות",
        "options": ["שווה שוקיים בלבד", "ישר זווית", "שווה צלעות", "קהה זווית"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "סוגי משולשים",
        "difficulty": "High",
        "question_text": "במשולש ישר זווית, אחת הזוויות החדות היא 45°. מהו הקשר בין <strong>ניצבי</strong> המשולש?",
        "hint": "מצאו את הזווית החדה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הזווית השלישית: 180 - 90 - 45 = 45.", "math_expression": "45" },
            { "verbal_explanation": "מכיוון שיש שתי זוויות שוות (45), המשולש הוא שווה שוקיים. לכן הניצבים שווים.", "math_expression": "Sides are equal" }
        ],
        "final_answer": "הניצבים שווים זה לזה",
        "options": ["הניצבים שווים זה לזה", "ניצב אחד כפול מהשני", "אין קשר", "היתר שווה לניצב"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "סוגי משולשים",
        "difficulty": "Medium",
        "question_text": "מה ניתן לומר על משולש שבו זווית אחת גדולה מסכום שתי הזוויות האחרות?",
        "hint": "אם סכום שתי זוויות קטן מ-90, אז השלישית חייבת להיות גדולה מ-90.",
        "solution_steps": [
            { "verbal_explanation": "נניח ששתי זוויות הן A ו-B והשלישית C. נתון ש- C > A+B.", "math_expression": "C > A + B" },
            { "verbal_explanation": "ידוע ש- A + B + C = 180. לכן 2C > 180, מה שאומר ש- C > 90.", "math_expression": "C > 90" },
            { "verbal_explanation": "מכאן שהזווית C היא קהה.", "math_expression": "Obtuse" }
        ],
        "final_answer": "הוא משולש קהה זווית",
        "options": ["הוא משולש חד זווית", "הוא משולש ישר זווית", "הוא משולש קהה זווית", "לא ניתן לדעת"],
        "correctAnswer": 2
    }
];