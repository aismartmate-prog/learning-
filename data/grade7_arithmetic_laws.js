const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חוק החילוף והקיבוץ (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Low",
        "question_text": "נתון הביטוי: <strong>12 + 5 = 5 + ___</strong>. איזה מספר משלים את השוויון לפי חוק החילוף?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='60'><path d='M20,50 L180,50' stroke='#1e293b' stroke-width='2' stroke-dasharray='4'/><circle cx='60' cy='40' r='15' fill='#b09151'/><circle cx='140' cy='40' r='15' fill='#94a3b8'/><text x='100' y='20' font-family='Heebo' font-size='12' text-anchor='middle'>חוק החילוף</text></svg></div>",
        "hint": "חוק החילוף קובע שבפעולת חיבור, שינוי סדר המספרים לא משנה את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המספר החסר כ-X. אנו מחפשים מספר שישמור על שוויון בין שני האגפים.", "math_expression": "12 + 5 = 5 + X" },
            { "verbal_explanation": "שלב 2: לפי חוק החילוף בחיבור, הסדר אינו קובע. לכן, אם באגף שמאל מופיע 12, הוא חייב להופיע גם באגף ימין כדי שהתוצאה תהיה זהה.", "math_expression": "12 + 5 = 17" },
            { "verbal_explanation": "שלב 3: נסיק ש-X חייב להיות 12.", "math_expression": "X = 12" }
        ],
        "final_answer": "12",
        "options": ["5", "12", "17", "0"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "חשבו בדרך הקצרה ביותר בעזרת חוק הקיבוץ: <strong>(17 + 48) + 52 = ?</strong>",
        "hint": "חוק הקיבוץ מאפשר לנו להזיז את הסוגריים. חפשו שני מספרים שסכומם נותן מספר עגול (כמו 100).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התרגיל מחדש. נשים לב שהמספרים 48 ו-52 משלימים אחד את השני בדיוק ל-100.", "math_expression": "48 + 52 = 100" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק הקיבוץ כדי לשנות את מיקום הסוגריים ולחבר את הזוג הזה קודם.", "math_expression": "17 + (48 + 52)" },
            { "verbal_explanation": "שלב 3: נפתור את מה שבתוך הסוגריים ונוסיף לתוצאה את המספר שנותר.", "math_expression": "17 + 100 = 117" }
        ],
        "final_answer": "117",
        "options": ["100", "117", "115", "120"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Low",
        "question_text": "איזה מהביטויים הבאים <strong>אינו</strong> נכון לפי חוקי החילוף והקיבוץ?",
        "hint": "זכרו שחוקים אלו עובדים בחיבור ובכפל, אך לא בחיסור או בחילוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את האפשרות של חיסור. נבחר מספרים פשוטים כמו 10 ו-4.", "math_expression": "10 - 4 = 6" },
            { "verbal_explanation": "שלב 2: נחליף את הסדר ונראה אם התוצאה נשמרת.", "math_expression": "4 - 10 = -6" },
            { "verbal_explanation": "שלב 3: מכיוון ש-6 אינו שווה למינוס 6, חוק החילוף אינו תקף בחיסור.", "math_expression": "6 \u2260 -6" }
        ],
        "final_answer": "8 - 3 = 3 - 8",
        "options": ["5 + 4 = 4 + 5", "2 × 3 = 3 × 2", "8 - 3 = 3 - 8", "(1+2)+3 = 1+(2+3)"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "High",
        "question_text": "נתון התרגיל: <strong>25 × (4 × 13)</strong>. איך ניתן לפתור אותו בקלות בעל פה?",
        "hint": "חוק הקיבוץ בכפל מאפשר לנו להחליט אילו מספרים להכפיל קודם. חפשו זוג שנותן 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הקיבוץ כדי להזיז את הסוגריים כך שיקיפו את 25 ו-4.", "math_expression": "(25 × 4) × 13" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה שבתוך הסוגריים. אנו יודעים ש-4 פעמים 25 הם בדיוק 100.", "math_expression": "100 × 13" },
            { "verbal_explanation": "שלב 3: כפל ב-100 הוא פשוט. מוסיפים שני אפסים לסוף המספר.", "math_expression": "1300" }
        ],
        "final_answer": "1300",
        "options": ["1300", "130", "2500", "520"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "השלימו את החסר לפי חוק הקיבוץ בחיבור: <strong>(X + 10) + 20 = X + (___)</strong>",
        "hint": "חוק הקיבוץ אומר שאפשר לקבץ את המחברים בכל דרך שנבחר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתבונן באגף שמאל. הסוגריים מקבצים את ה-X עם ה-10.", "math_expression": "(X + 10) + 20" },
            { "verbal_explanation": "שלב 2: באגף ימין, אנו רוצים להשאיר את ה-X לבד ולקבץ את שני המספרים יחד.", "math_expression": "X + (10 + 20)" },
            { "verbal_explanation": "שלב 3: נחשב את סכום המספרים שקובצו יחד.", "math_expression": "10 + 20 = 30" }
        ],
        "final_answer": "30",
        "options": ["10", "20", "30", "X"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "High",
        "question_text": "השתמשו בחוקי החילוף והקיבוץ כדי לחשב: <strong>0.25 × 7 × 40 = ?</strong>",
        "hint": "זכרו ש-0.25 הוא רבע. מה קורה כשמכפילים רבע ב-40?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק החילוף כדי לסדר את המספרים כך שהמספרים שנוח להכפיל יהיו סמוכים.", "math_expression": "(0.25 × 40) × 7" },
            { "verbal_explanation": "שלב 2: נחשב את הסוגריים. רבע של 40 הוא בדיוק 10.", "math_expression": "10 × 7" },
            { "verbal_explanation": "שלב 3: נכפיל את התוצאה ב-7.", "math_expression": "70" }
        ],
        "final_answer": "70",
        "options": ["7", "70", "700", "28"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "מדוע חוק החילוף <strong>אינו</strong> מתקיים בפעולת החילוק? השתמשו בדוגמה: <strong>10 \u00f7 2</strong>.",
        "hint": "השוו בין התוצאה של 10 חלקי 2 לבין התוצאה של 2 חלקי 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את התרגיל המקורי: 10 חלקי 2.", "math_expression": "10 \u00f7 2 = 5" },
            { "verbal_explanation": "שלב 2: נחליף את הסדר (חוק החילוף) ונחשב: 2 חלקי 10.", "math_expression": "2 \u00f7 10 = 0.2" },
            { "verbal_explanation": "שלב 3: נראה שהתוצאות שונות לחלוטין (5 לעומת חמישית). לכן הסדר בחילוק הוא קריטי.", "math_expression": "5 \u2260 0.2" }
        ],
        "final_answer": "כי התוצאה משתנה כשמחליפים את סדר המספרים",
        "options": ["כי חילוק תמיד נותן שבר", "כי התוצאה משתנה כשמחליפים את סדר המספרים", "כי אי אפשר לחלק ב-0", "חוק החילוף דווקא כן עובד בחילוק"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Low",
        "question_text": "איזה ביטוי שווה לביטוי <strong>A + B + C</strong> לפי חוק הקיבוץ?",
        "hint": "חפשו אפשרות שבה הסוגריים מקבצים חלק מהאותיות יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חוק הקיבוץ מאפשר לנו להוסיף סוגריים מסביב לכל זוג מחברים שנרצה.", "math_expression": "A + B + C" },
            { "verbal_explanation": "שלב 2: נוכל לקבץ את שני הראשונים, או את שני האחרונים.", "math_expression": "(A + B) + C = A + (B + C)" }
        ],
        "final_answer": "A + (B + C)",
        "options": ["A × (B + C)", "A - (B + C)", "A + (B + C)", "(A + B) \u00f7 C"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "חשבו בעל פה: <strong>2 × 13 × 5 × 3 = ?</strong>",
        "hint": "השתמשו בחוק החילוף כדי לקרב את ה-2 וה-5 זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ש-2 כפול 5 נותן 10, מספר שנוח מאוד להכפיל בו.", "math_expression": "(2 \u00d7 5) \u00d7 (13 \u00d7 3)" },
            { "verbal_explanation": "שלב 2: נחשב כל סוגריים בנפרד.", "math_expression": "10 \u00d7 39" },
            { "verbal_explanation": "שלב 3: נוסיף אפס ל-39.", "math_expression": "390" }
        ],
        "final_answer": "390",
        "options": ["390", "130", "260", "39"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "High",
        "question_text": "נתון ש- <strong>X + Y = 50</strong>. למה שווה הערך של <strong>(X + 15) + Y</strong>?",
        "hint": "השתמשו בחוקי החילוף והקיבוץ כדי 'להוציא' את ה-15 מהסוגריים ולחבר קודם את X ו-Y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הקיבוץ והחילוף כדי לסדר מחדש את הביטוי.", "math_expression": "(X + Y) + 15" },
            { "verbal_explanation": "שלב 2: נציב במקום (X + Y) את הערך הידוע לנו מהנתון (50).", "math_expression": "50 + 15" },
            { "verbal_explanation": "שלב 3: נחשב את הסכום הסופי.", "math_expression": "65" }
        ],
        "final_answer": "65",
        "options": ["50", "65", "35", "15"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "איזה חוק מתמטי מאפשר לנו לכתוב <strong>A \u00d7 B \u00d7 C = C \u00d7 A \u00d7 B</strong>?",
        "hint": "הסתכלו על סדר האותיות. האם הוא השתנה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נראה שכל האותיות המקוריות נמצאות, אך המיקום שלהן בתוך המכפלה השתנה.", "math_expression": "חילוף מקומות" },
            { "verbal_explanation": "שלב 2: החוק המאפשר זאת בכפל נקרא 'חוק החילוף'.", "math_expression": "חוק החילוף" }
        ],
        "final_answer": "חוק החילוף בכפל",
        "options": ["חוק הקיבוץ", "חוק החילוף בכפל", "חוק הפילוג", "חוק האפס"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "High",
        "question_text": "האם ניתן להשתמש בחוק הקיבוץ בתרגיל הכולל גם כפל וגם חיבור, כמו: <strong>2 × (3 + 4)</strong>?",
        "hint": "נסו לשנות את מיקום הסוגריים ל- (2 × 3) + 4 ובדקו אם התוצאה נשארת זהה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב לפי הסדר המקורי (סוגריים קודם).", "math_expression": "2 \u00d7 7 = 14" },
            { "verbal_explanation": "שלב 2: ננסה 'להזיז' את הסוגריים בניגוד לחוק.", "math_expression": "(2 \u00d7 3) + 4 = 6 + 4 = 10" },
            { "verbal_explanation": "שלב 3: התוצאות שונות (14 לעומת 10). מסקנה: חוק הקיבוץ עובד רק כשיש את *אותה פעולה* לאורך כל התרגיל.", "math_expression": "14 \u2260 10" }
        ],
        "final_answer": "לא, חוק הקיבוץ דורש פעולה אחידה (רק חיבור או רק כפל)",
        "options": ["כן, תמיד", "לא, חוק הקיבוץ דורש פעולה אחידה", "רק אם המספרים חיוביים", "רק עם משתנים"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Low",
        "question_text": "חשבו בעזרת חוק הקיבוץ: <strong>(99 + 125) + 1 = ?</strong>",
        "hint": "חברו את 99 ו-1 קודם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נקבץ את 99 ו-1 יחד כדי לקבל מאה עגולה.", "math_expression": "(99 + 1) + 125" },
            { "verbal_explanation": "שלב 2: נחשב את הסוגריים.", "math_expression": "100 + 125" },
            { "verbal_explanation": "שלב 3: נחבר בקלות.", "math_expression": "225" }
        ],
        "final_answer": "225",
        "options": ["224", "225", "226", "230"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "Medium",
        "question_text": "האם השוויון הבא נכון: <strong> (12 \u00f7 6) \u00f7 2 = 12 \u00f7 (6 \u00f7 2) </strong>?",
        "hint": "פתרו כל צד בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: צד שמאל: 12 חלקי 6 הם 2, ואז 2 חלקי 2.", "math_expression": "2 \u00f7 2 = 1" },
            { "verbal_explanation": "שלב 2: צד ימין: 6 חלקי 2 הם 3, ואז 12 חלקי 3.", "math_expression": "12 \u00f7 3 = 4" },
            { "verbal_explanation": "שלב 3: 1 לא שווה ל-4. לכן השוויון לא נכון.", "math_expression": "1 \u2260 4" }
        ],
        "final_answer": "לא נכון",
        "options": ["נכון", "לא נכון", "נכון רק עבור X=1", "תלוי בסימנים"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "חוק החילוף והקיבוץ",
        "difficulty": "High",
        "question_text": "השתמשו בחוק הקיבוץ כדי למצוא את הערך של X בביטוי: <strong> (X + 45) + 55 = 200 </strong>",
        "hint": "קבצו את 45 ו-55 יחד קודם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הסוגריים כדי לחבר את המספרים הידועים.", "math_expression": "X + (45 + 55) = 200" },
            { "verbal_explanation": "שלב 2: נחשב את הסכום שבסוגריים (45 ועוד 55 הם בדיוק 100).", "math_expression": "X + 100 = 200" },
            { "verbal_explanation": "שלב 3: נחסיר 100 מהתוצאה כדי למצוא את X.", "math_expression": "X = 100" }
        ],
        "final_answer": "100",
        "options": ["100", "155", "45", "110"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: חוק הפילוג (8 שאלות ראשונות לחלק א') ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "חוק הפילוג",
        "difficulty": "Low",
        "question_text": "פתחו סוגריים בעזרת חוק הפילוג: <strong> 3 × (X + 5) </strong><br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><rect x='20' y='20' width='160' height='50' fill='none' stroke='#1e293b' stroke-width='2'/><line x1='80' y1='20' x2='80' y2='70' stroke='#1e293b'/><text x='50' y='50' font-size='14'>X</text><text x='130' y='50' font-size='14'>5</text><text x='10' y='50' font-size='14' text-anchor='end'>3</text></svg></div>",
        "hint": "חוק הפילוג אומר שצריך להכפיל את המספר שבחוץ בכל אחד מהאיברים שבתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספר 3 בנעלם הראשון X.", "math_expression": "3 \u00d7 X = 3X" },
            { "verbal_explanation": "שלב 2: נכפיל את המספר 3 במספר השני 5.", "math_expression": "3 \u00d7 5 = 15" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות לביטוי אחד.", "math_expression": "3X + 15" }
        ],
        "final_answer": "3X + 15",
        "options": ["3X + 5", "3X + 15", "8X", "15X"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "חשבו בעל פה בעזרת חוק הפילוג: <strong> 7 × 102 = ? </strong>",
        "hint": "פרקו את 102 ל- (100 + 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את 102 כסכום של שני מספרים שנוח להכפיל ב-7.", "math_expression": "7 \u00d7 (100 + 2)" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק הפילוג: נכפיל 7 ב-100 וגם 7 ב-2.", "math_expression": "700 + 14" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות.", "math_expression": "714" }
        ],
        "final_answer": "714",
        "options": ["702", "714", "720", "800"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "פתחו סוגריים ופשטו: <strong> 4(2X - 3) + 10 </strong>",
        "hint": "קודם כל פתחו את הסוגריים (הכפילו 4 ב-2X ובמינוס 3), ורק אז הוסיפו 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הפילוג על הסוגריים. 4 כפול 2X הם 8X, ו-4 כפול מינוס 3 הם מינוס 12.", "math_expression": "8X - 12 + 10" },
            { "verbal_explanation": "שלב 2: כעת נבצע 'כינוס איברים' - נחבר את המספרים החופשיים (מינוס 12 ועוד 10).", "math_expression": "8X - 2" }
        ],
        "final_answer": "8X - 2",
        "options": ["8X - 2", "8X + 10", "6X - 2", "8X - 12"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "איזה ביטוי מתאר את שטח המלבן הגדול שבשרטוט?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><rect x='20' y='20' width='160' height='50' fill='none' stroke='#b09151' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='70' stroke='#b09151'/><text x='60' y='50' font-size='14'>A</text><text x='140' y='50' font-size='14'>B</text><text x='10' y='50' font-size='14' text-anchor='end'>H</text></svg></div>",
        "hint": "שטח מלבן הוא צלע כפול צלע. צלע אחת היא H, והצלע השנייה מורכבת מ- A ו- B.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את אורך המלבן השלם כחיבור של שני החלקים.", "math_expression": "A + B" },
            { "verbal_explanation": "שלב 2: נכפיל את הגובה H בכל האורך.", "math_expression": "H × (A + B)" },
            { "verbal_explanation": "שלב 3: לפי חוק הפילוג, זה שווה לסכום השטחים של שני המלבנים הקטנים.", "math_expression": "HA + HB" }
        ],
        "final_answer": "H(A + B)",
        "options": ["H + A + B", "H(A + B)", "HAB", "H + AB"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "בצעו 'פירוק לגורמים' (הוצאת גורם משותף) לביטוי: <strong> 6X + 18 </strong>",
        "hint": "חפשו את המספר הגדול ביותר שגם 6 וגם 18 מתחלקים בו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ששני המספרים מתחלקים ב-6.", "math_expression": "6, 18" },
            { "verbal_explanation": "שלב 2: נוציא את 6 מחוץ לסוגריים. נשאל: 6 כפול מה ייתן 6X? (תשובה: X). 6 כפול מה ייתן 18? (תשובה: 3).", "math_expression": "6 \u00d7 (X + 3)" }
        ],
        "final_answer": "6(X + 3)",
        "options": ["6(X + 18)", "6(X + 3)", "3(2X + 6)", "X(6 + 18)"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "חוק הפילוג",
        "difficulty": "Low",
        "question_text": "איזה חוק מאפשר לנו לכתוב <strong> 5 × 12 = 5 \u00d7 10 + 5 \u00d7 2 </strong>?",
        "hint": "המספר 12 'התפלג' (התחלק) ל-10 ול-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פירקנו את אחד הגורמים לסכום והכפלנו את הגורם השני בכל חלק בנפרד.", "math_expression": "a(b + c) = ab + ac" },
            { "verbal_explanation": "שלב 2: חוק זה נקרא 'חוק הפילוג'.", "math_expression": "חוק הפילוג" }
        ],
        "final_answer": "חוק הפילוג",
        "options": ["חוק החילוף", "חוק הקיבוץ", "חוק הפילוג", "חוק האפס"],
        "correctAnswer": 2
    },
    {
        "id": 22,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "חשבו בעזרת חוק הפילוג: <strong> 8 × 99 = ? </strong>",
        "hint": "חשבו על 99 כ- (100 פחות 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את 99 כהפרש בין 100 ל-1.", "math_expression": "8 \u00d7 (100 - 1)" },
            { "verbal_explanation": "שלב 2: נפעיל את חוק הפילוג: 8 כפול 100 פחות 8 כפול 1.", "math_expression": "800 - 8" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית.", "math_expression": "792" }
        ],
        "final_answer": "792",
        "options": ["800", "792", "788", "720"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "פתחו סוגריים ופשטו: <strong> -2(X - 5) </strong>",
        "hint": "שימו לב לסימן המינוס! מינוס כפול מינוס נותן פלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המינוס 2 ב-X.", "math_expression": "-2X" },
            { "verbal_explanation": "שלב 2: נכפיל את המינוס 2 במינוס 5. זכרו ששני סימני מינוס בכפל הופכים לפלוס.", "math_expression": "-2 \u00d7 (-5) = +10" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות לביטוי אחד.", "math_expression": "-2X + 10" }
        ],
        "final_answer": "-2X + 10",
        "options": ["-2X - 10", "-2X + 10", "2X - 10", "-2X - 5"],
        "correctAnswer": 1
    },
    // ==============================================================
    // --- המשך תת נושא 2: חוק הפילוג (שאלות 24-30) ---
    // ==============================================================
    {
        "id": 24,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא בעזרת חוק הפילוג וכינוס איברים: <strong>5(X + 2) + 3(X - 1)</strong>",
        "hint": "פתחו כל זוג סוגריים בנפרד, ואז חברו את כל ה-X יחד ואת כל המספרים יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הפילוג על הסוגריים הראשונים. נכפיל 5 ב-X וגם 5 ב-2.", "math_expression": "5X + 10" },
            { "verbal_explanation": "שלב 2: כעת נפתח את הסוגריים השניים. נכפיל 3 ב-X וגם 3 במינוס 1.", "math_expression": "3X - 3" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות לביטוי אחד ארוך.", "math_expression": "5X + 10 + 3X - 3" },
            { "verbal_explanation": "שלב 4: נבצע 'כינוס איברים'. נחבר את ה-X (5 ועוד 3) ואת המספרים (10 פחות 3).", "math_expression": "8X + 7" }
        ],
        "final_answer": "8X + 7",
        "options": ["8X + 7", "8X + 13", "15X + 7", "8X - 7"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "מהו הביטוי הפשוט ביותר עבור: <strong>10 - (X + 4)</strong>?",
        "hint": "שימו לב: המינוס שלפני הסוגריים פועל כמו 'מינוס 1' שמוכפל בכל מה שבפנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתייחס למינוס שלפני הסוגריים כאל פעולת כפל במינוס 1. נפתח את הסוגריים ונשנה את הסימנים של כל מה שבפנים.", "math_expression": "10 - X - 4" },
            { "verbal_explanation": "שלב 2: נבצע חיסור בין המספרים החופשיים (10 פחות 4).", "math_expression": "6 - X" }
        ],
        "final_answer": "6 - X",
        "options": ["14 - X", "6 - X", "6 + X", "10 - X + 4"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה בעזרת חוק הפילוג: <strong>X(X + 3) = X² + 12</strong>",
        "hint": "פתחו את הסוגריים בצד שמאל. שימו לב שה-X בריבוע יתבטל משני הצדדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים באגף שמאל. נכפיל X ב-X וגם X ב-3.", "math_expression": "X² + 3X = X² + 12" },
            { "verbal_explanation": "שלב 2: נחסיר X² משני אגפי המשוואה כדי לפשט אותה.", "math_expression": "3X = 12" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 כדי למצוא את ערכו של X.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["3", "4", "12", "0"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "מצאו את הגורם המשותף הגבוה ביותר ופרקו לגורמים: <strong>12X + 8</strong>",
        "hint": "חפשו את המספר הגדול ביותר שגם 12 וגם 8 מתחלקים בו ללא שארית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק באילו מספרים מתחלקים 12 ו-8. שניהם מתחלקים ב-2, אך המספר הגדול ביותר ששניהם מתחלקים בו הוא 4.", "math_expression": "4" },
            { "verbal_explanation": "שלב 2: נוציא את 4 מחוץ לסוגריים. בתוך הסוגריים נרשום את התוצאה של חלוקת כל איבר ב-4.", "math_expression": "4 \u00d7 (12X ÷ 4 + 8 ÷ 4)" },
            { "verbal_explanation": "שלב 3: נרשום את הביטוי הסופי.", "math_expression": "4(3X + 2)" }
        ],
        "final_answer": "4(3X + 2)",
        "options": ["2(6X + 4)", "4(3X + 2)", "4(3X + 8)", "12(X + 8)"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "נתונים שני מלבנים צמודים. גובה שניהם הוא 5. רוחב הראשון הוא X ורוחב השני הוא 7. מהו הביטוי ל<strong>שטח הכולל</strong> של שניהם?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><rect x='20' y='20' width='60' height='50' fill='none' stroke='#1e293b' stroke-width='2'/><rect x='80' y='20' width='80' height='50' fill='none' stroke='#1e293b' stroke-width='2'/><text x='50' y='50' font-size='14'>X</text><text x='120' y='50' font-size='14'>7</text><text x='10' y='50' font-size='14' text-anchor='end'>5</text></svg></div>",
        "hint": "ניתן לחשב את השטח כסכום שני מלבנים או כמלבן אחד גדול שרוחבו הוא (X+7).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את אסטרטגיית החישוב. השטח הכולל הוא הגובה (5) כפול הרוחב המשותף של שניהם.", "math_expression": "5 \u00d7 (X + 7)" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק הפילוג כדי לפתוח את הביטוי. נכפיל 5 בכל חלק של הרוחב.", "math_expression": "5X + 35" }
        ],
        "final_answer": "5X + 35",
        "options": ["5X + 7", "5X + 35", "12X", "5 + X + 7"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "חוק הפילוג",
        "difficulty": "Medium",
        "question_text": "מהו הערך של הביטוי <strong>-(X - 10)</strong> כאשר <strong>X = 3</strong>?",
        "hint": "הציבו קודם את המספר בתוך הסוגריים, ואז הפכו את הסימן של התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הערך 3 במקום הנעלם X בתוך הסוגריים.", "math_expression": "-(3 - 10)" },
            { "verbal_explanation": "שלב 2: נחשב את הערך שבתוך הסוגריים. 3 פחות 10 נותן מינוס 7.", "math_expression": "-(-7)" },
            { "verbal_explanation": "שלב 3: מינוס של מינוס הופך לפלוס.", "math_expression": "7" }
        ],
        "final_answer": "7",
        "options": ["7-", "7", "13", "13-"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "חוק הפילוג",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>2(X + 3) - 2X</strong>",
        "hint": "פתחו את הסוגריים וראו מה קורה ל-X.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הפילוג כדי להכפיל את ה-2 בכל מה שבתוך הסוגריים.", "math_expression": "2X + 6 - 2X" },
            { "verbal_explanation": "שלב 2: נבצע כינוס איברים. נשים לב ש- 2X פחות 2X זה אפס.", "math_expression": "0 + 6" },
            { "verbal_explanation": "שלב 3: נשארנו עם המספר החופשי בלבד.", "math_expression": "6" }
        ],
        "final_answer": "6",
        "options": ["4X + 6", "6", "0", "2X"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 3: סדר פעולות מורחב (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Low",
        "question_text": "חשבו את תוצאת התרגיל: <strong>3 + 4²</strong>",
        "hint": "לפי סדר פעולות חשבון, חזקה קודמת לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את סדר העבודה. קודם עלינו לחשב את ערך החזקה.", "math_expression": "4\u00b2 = 4 \u00d7 4 = 16" },
            { "verbal_explanation": "שלב 2: כעת נוסיף את ה-3 לתוצאה שקיבלנו.", "math_expression": "3 + 16 = 19" }
        ],
        "final_answer": "19",
        "options": ["11", "19", "49", "25"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של: <strong>[2 \u00d7 (3 + 1)]²</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><path d='M20,20 L40,10 L140,10 L160,20' fill='none' stroke='#b09151' stroke-width='2'/><text x='90' y='55' font-family='Heebo' font-size='16' text-anchor='middle'>סוגריים בתוך סוגריים</text></svg></div>",
        "hint": "פתרו מהסוגריים הפנימיים ביותר החוצה, ורק בסוף העלו בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור את הסוגריים העגולים (הפנימיים). 3 ועוד 1.", "math_expression": "[2 \u00d7 4]\u00b2" },
            { "verbal_explanation": "שלב 2: נפתור את הסוגריים המרובעים. 2 כפול 4.", "math_expression": "8\u00b2" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החזקה האחרונה. 8 בריבוע.", "math_expression": "64" }
        ],
        "final_answer": "64",
        "options": ["16", "32", "64", "100"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "חשבו: <strong>\u221a25 + 2 \u00d7 3</strong>",
        "hint": "שורש נחשב באותה דרגת עדיפות של חזקה, לכן הוא מתבצע לפני הכפל והחיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הערך של שורש 25 (איזה מספר כפול עצמו נותן 25?).", "math_expression": "\u221a25 = 5" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת הכפל לפי סדר הפעולות.", "math_expression": "2 \u00d7 3 = 6" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות.", "math_expression": "5 + 6 = 11" }
        ],
        "final_answer": "11",
        "options": ["21", "11", "15", "30"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "High",
        "question_text": "מה ההבדל בין <strong>(-2)\u00b2</strong> לבין <strong>-2\u00b2</strong>?",
        "hint": "בביטוי הראשון המינוס בתוך הסוגריים והוא מוכפל בעצמו. בשני, החזקה פועלת רק על ה-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הביטוי הראשון. סוגריים אומרים שמינוס 2 כולו מוכפל במינוס 2. מינוס כפול מינוס נותן פלוס.", "math_expression": "(-2) \u00d7 (-2) = 4" },
            { "verbal_explanation": "שלב 2: נחשב את הביטוי השני. כאן החזקה חלה רק על המספר, והמינוס 'מחכה' בחוץ.", "math_expression": "-(2 \u00d7 2) = -4" },
            { "verbal_explanation": "שלב 3: המסקנה היא שהתוצאות הפוכות.", "math_expression": "4 \u2260 -4" }
        ],
        "final_answer": "הראשון הוא 4 והשני הוא 4-",
        "options": ["שניהם שווים ל-4", "שניהם שווים ל-4-", "הראשון הוא 4 והשני הוא 4-", "הראשון הוא 4- והשני הוא 4"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "High",
        "question_text": "חשבו את ערך הביטוי בשבר: <strong>(10 + 2 \u00d7 5) \u00f7 (2\u00b3 - 3)</strong>",
        "hint": "חשבו את המונה בנפרד ואת המכנה בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המונה (החלק העליון). כפל לפני חיבור.", "math_expression": "10 + 10 = 20" },
            { "verbal_explanation": "שלב 2: נחשב את המכנה (החלק התחתון). חזקה לפני חיסור.", "math_expression": "8 - 3 = 5" },
            { "verbal_explanation": "שלב 3: נבצע את החילוק בין המונה למכנה.", "math_expression": "20 \u00f7 5 = 4" }
        ],
        "final_answer": "4",
        "options": ["2", "4", "5", "10"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של: <strong>5 + 20 \u00f7 4 \u00d7 2</strong>?",
        "hint": "זכרו: כפל וחלוילוק הם באותה דרגה. מבצעים אותם לפי הסדר משמאל לימין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל עם החילוק (הפעולה הראשונה מבין הכפל והחילוק משמאל).", "math_expression": "20 \u00f7 4 = 5" },
            { "verbal_explanation": "שלב 2: כעת נבצע את הכפל בתוצאה שקיבלנו.", "math_expression": "5 \u00d7 2 = 10" },
            { "verbal_explanation": "שלב 3: לסיום, נוסיף את ה-5 שבתחילת התרגיל.", "math_expression": "5 + 10 = 15" }
        ],
        "final_answer": "15",
        "options": ["7.5", "15", "12.5", "25"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Low",
        "question_text": "חשבו: <strong>7\u00b0 + 5\u00b9</strong>",
        "hint": "כל מספר (חוץ מאפס) בחזקת 0 שווה ל-1. כל מספר בחזקת 1 שווה לעצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את האיבר הראשון. חוק החזקות קובע שכל מספר בחזקת אפס הוא 1.", "math_expression": "7\u00b0 = 1" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר השני. חמש בחזקת אחת הוא פשוט 5.", "math_expression": "5\u00b9 = 5" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות.", "math_expression": "1 + 5 = 6" }
        ],
        "final_answer": "6",
        "options": ["0", "6", "12", "35"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "מהו הערך של הביטוי <strong>2X\u00b2 + 5</strong> אם ידוע ש- <strong>X = 3</strong>?",
        "hint": "הציבו 3 ב-X. זכרו להעלות בריבוע לפני שמכפילים ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את המספר 3 במקום X.", "math_expression": "2 \u00d7 3\u00b2 + 5" },
            { "verbal_explanation": "שלב 2: נחשב את החזקה קודם כל.", "math_expression": "3\u00b2 = 9" },
            { "verbal_explanation": "שלב 3: נבצע את הכפל ב-2.", "math_expression": "2 \u00d7 9 = 18" },
            { "verbal_explanation": "שלב 4: נוסיף 5 לתוצאה.", "math_expression": "18 + 5 = 23" }
        ],
        "final_answer": "23",
        "options": ["41", "23", "14", "31"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "חשבו: <strong>\u221a100 - \u221a64</strong>",
        "hint": "חשבו כל שורש בנפרד ואז החסירו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא איזה מספר כפול עצמו נותן 100.", "math_expression": "10" },
            { "verbal_explanation": "שלב 2: נמצא איזה מספר כפול עצמו נותן 64.", "math_expression": "8" },
            { "verbal_explanation": "שלב 3: נבצע את החיסור ביניהם.", "math_expression": "10 - 8 = 2" }
        ],
        "final_answer": "2",
        "options": ["6", "4", "2", "36"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "High",
        "question_text": "חשבו: <strong>100 \u00f7 (2 \u00d7 5)\u00b2</strong>",
        "hint": "בצעו את הפעולות בתוך הסוגריים, העלו את התוצאה בריבוע, ורק אז חלקו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור את מה שבתוך הסוגריים. 2 כפול 5.", "math_expression": "100 \u00f7 10\u00b2" },
            { "verbal_explanation": "שלב 2: נחשב את החזקה של ה-10.", "math_expression": "10\u00b2 = 100" },
            { "verbal_explanation": "שלב 3: נחלק 100 ב-100.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["1", "10", "5", "0.5"],
        "correctAnswer": 0
    },
    {
        "id": 41,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של: <strong>2\u00b3 + 3\u00b2</strong>?",
        "hint": "חזקה שלישית (בשלישית) וחזקה שנייה (בריבוע).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב 2 בחזקת 3 (2 כפול 2 כפול 2).", "math_expression": "8" },
            { "verbal_explanation": "שלב 2: נחשב 3 בחזקת 2 (3 כפול 3).", "math_expression": "9" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות.", "math_expression": "8 + 9 = 17" }
        ],
        "final_answer": "17",
        "options": ["12", "15", "17", "25"],
        "correctAnswer": 2
    },
    {
        "id": 42,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "High",
        "question_text": "חשבו את הביטוי הכולל ערך מוחלט: <strong>|3 - 8| \u00d7 2</strong>",
        "hint": "חשבו קודם את הביטוי בתוך הערך המוחלט. זכרו שערך מוחלט תמיד הופך את התוצאה לחיובית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את החיסור בתוך הקווים האנכיים. 3 פחות 8.", "math_expression": "|-5|" },
            { "verbal_explanation": "שלב 2: נפעיל את הערך המוחלט. המרחק של מינוס 5 מהאפס הוא 5 חיובי.", "math_expression": "5" },
            { "verbal_explanation": "שלב 3: נכפיל את התוצאה ב-2.", "math_expression": "5 \u00d7 2 = 10" }
        ],
        "final_answer": "10",
        "options": ["10-", "10", "5", "22"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Medium",
        "question_text": "רוני קנתה 3 חבילות מדבקות ב-10 ש\"ח כל אחת, וקיבלה הנחה של 2 ש\"ח על כל חבילה. איזה ביטוי מייצג את המחיר ששילמה?",
        "hint": "החסירו את ההנחה מהמחיר המקורי בתוך סוגריים, ואז הכפילו בכמות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המחיר של חבילה אחת לאחר ההנחה.", "math_expression": "10 - 2" },
            { "verbal_explanation": "שלב 2: מכיוון שהיא קנתה 3 חבילות כאלו, נכפיל את כל הביטוי ב-3.", "math_expression": "3 \u00d7 (10 - 2)" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה (3 כפול 8).", "math_expression": "24" }
        ],
        "final_answer": "3 \u00d7 (10 - 2)",
        "options": ["3 \u00d7 10 - 2", "3 \u00d7 (10 - 2)", "3 + 10 - 2", "10 \u00d7 (3 - 2)"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "Low",
        "question_text": "חשבו: <strong>20 \u00f7 (2 + 3)</strong>",
        "hint": "סוגריים הם תמיד במקום הראשון!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב קודם את הסכום שבתוך הסוגריים.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: כעת נחלק את ה-20 בתוצאה שקיבלנו.", "math_expression": "20 \u00f7 5 = 4" }
        ],
        "final_answer": "4",
        "options": ["13", "4", "7", "10"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "סדר פעולות מורחב",
        "difficulty": "High",
        "question_text": "חשבו את הביטוי המורכב הבא: <strong>10\u00b2 \u00f7 (2 \u00d7 5) + 3</strong>",
        "hint": "בצעו חזקה וסוגריים, אחר כך חילוק, ובסוף חיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ערך החזקה ואת מה שבתוך הסוגריים.", "math_expression": "100 \u00f7 10 + 3" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת החילוק (לפני החיבור).", "math_expression": "10 + 3" },
            { "verbal_explanation": "שלב 3: נחבר את ה-3 לתוצאה.", "math_expression": "13" }
        ],
        "final_answer": "13",
        "options": ["13", "8", "23", "4"],
        "correctAnswer": 0
    }
];