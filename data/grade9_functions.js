const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חזרה על פונקציה קווית (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך שתי הנקודות הבאות: <strong>(2, 5)</strong> ו- <strong>(4, 11)</strong>. הציגו את כל שלבי החישוב.",
        "hint": "התחילו במציאת השיפוע בעזרת נוסחת הפרש הגבהים חלקי הפרש המרחקים האופקיים. לאחר מכן מצאו את נקודת החיתוך עם ציר ה-וואי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את שתי הנקודות הנתונות כנקודה ראשונה ונקודה שנייה.", "math_expression": "A(2, 5) , B(4, 11)" },
            { "verbal_explanation": "שלב 2: נשתמש בנוסחה למציאת השיפוע (מסומן באות m) העובר דרך שתי נקודות.", "math_expression": "m = (y2 - y1) / (x2 - x1)" },
            { "verbal_explanation": "שלב 3: נציב את הערכים המספריים מהנקודות לתוך הנוסחה.", "math_expression": "m = (11 - 5) / (4 - 2)" },
            { "verbal_explanation": "שלב 4: נחשב את תוצאת המונה ואת תוצאת המכנה בנפרד.", "math_expression": "m = 6 / 2" },
            { "verbal_explanation": "שלב 5: נבצע את פעולת החילוק לקבלת ערך השיפוע הסופי.", "math_expression": "m = 3" },
            { "verbal_explanation": "שלב 6: נבחר את אחת הנקודות (למשל 2,5) ונציב אותה יחד עם השיפוע במשוואת הישר הכללית כדי למצוא את b.", "math_expression": "5 = 3 * 2 + b" },
            { "verbal_explanation": "שלב 7: נפתר את המשוואה ונגלה את ערכו של b.", "math_expression": "5 = 6 + b  =>  b = -1" },
            { "verbal_explanation": "שלב 8: נרשום את משוואת הישר המלאה.", "math_expression": "y = 3x - 1" }
        ],
        "final_answer": "y = 3x - 1",
        "options": ["y = 3x + 1", "y = 3x - 1", "y = 2x + 1", "y = 6x - 7"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודות החיתוך של הישר <strong>y = -2x + 6</strong> עם שני צירי המערכת (ציר האיקס וציר הוואי).<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='160' viewBox='0 0 200 160'><line x1='10' y1='130' x2='180' y2='130' stroke='#64748b' stroke-width='2'/><line x1='40' y1='150' x2='40' y2='20' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='130' y2='150' stroke='#3b82f6' stroke-width='3'/><circle cx='40' cy='44' r='5' fill='#ef4444'/><circle cx='106' cy='130' r='5' fill='#ef4444'/><text x='185' y='135' font-size='12'>איקס</text><text x='45' y='25' font-size='12'>וואי</text></svg></div>",
        "hint": "לחיתוך עם ציר הוואי הציבו איקס שווה אפס. לחיתוך עם ציר האיקס הציבו וואי שווה אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא תחילה את החיתוך עם ציר הוואי על ידי הצבת איקס שווה לאפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "שלב 2: נציב זאת במשוואה ונחשב.", "math_expression": "y = -2 * (0) + 6  =>  y = 6" },
            { "verbal_explanation": "שלב 3: נרשום את נקודת החיתוך כזוג סדור.", "math_expression": "(0, 6)" },
            { "verbal_explanation": "שלב 4: כעת נמצא את החיתוך עם ציר האיקס על ידי הצבת וואי שווה לאפס.", "math_expression": "y = 0" },
            { "verbal_explanation": "שלב 5: נבנה משוואה שבה אנו משווים את הפונקציה לאפס.", "math_expression": "0 = -2x + 6" },
            { "verbal_explanation": "שלב 6: נעביר את מינוס שני איקס לצד השני כדי שיהיה חיובי.", "math_expression": "2x = 6" },
            { "verbal_explanation": "שלב 7: נחלק במקדם של איקס.", "math_expression": "2x = 6  / :2  =>  x = 3" },
            { "verbal_explanation": "שלב 8: נרשום את נקודת החיתוך השנייה.", "math_expression": "(3, 0)" }
        ],
        "final_answer": "(0, 6) ו- (3, 0)",
        "options": ["(0, 6) ו- (3, 0)", "(0, -2) ו- (6, 0)", "(6, 0) ו- (0, 3)", "(0, 6) ו- (-3, 0)"],
        "correctAnswer": 0
    },
    {
        "id": 3,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "High",
        "question_text": "נתון הישר <strong>y = 5x - 4</strong>. מצאו את משוואת הישר ה<strong>מקביל</strong> לו, העובר דרך הנקודה <strong>(1, 8)</strong>.",
        "hint": "זכרו שלישרים מקבילים יש את אותו שיפוע בדיוק. השתמשו בשיפוע של הישר הנתון ובנקודה החדשה כדי למצוא את האיבר החופשי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע של הישר הנתון. המקדם של איקס הוא 5.", "math_expression": "m = 5" },
            { "verbal_explanation": "שלב 2: מכיוון שהישרים מקבילים, גם לישר החדש יהיה אותו שיפוע.", "math_expression": "m_חדש = 5" },
            { "verbal_explanation": "שלב 3: נשתמש בנוסחה למציאת משוואת ישר בעזרת נקודה ושיפוע.", "math_expression": "y - y1 = m * (x - x1)" },
            { "verbal_explanation": "שלב 4: נציב את הנקודה (1, 8) ואת השיפוע 5 בתוך הנוסחה.", "math_expression": "y - 8 = 5 * (x - 1)" },
            { "verbal_explanation": "שלב 5: נפתח סוגריים בעזרת חוק הפילוג.", "math_expression": "y - 8 = 5x - 5" },
            { "verbal_explanation": "שלב 6: נבודד את וואי על ידי העברת מינוס 8 לצד ימין בסימן פלוס.", "math_expression": "y = 5x - 5 + 8" },
            { "verbal_explanation": "שלב 7: נבצע חיבור סופי.", "math_expression": "y = 5x + 3" }
        ],
        "final_answer": "y = 5x + 3",
        "options": ["y = 5x + 8", "y = 5x + 3", "y = -5x + 13", "y = 5x - 3"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Low",
        "question_text": "האם הישר שמשוואתו <strong>y = -4x + 10</strong> הוא ישר עולה או יורד? נמקו בעזרת השיפוע.",
        "hint": "הסתכלו על המספר המכפיל את האיקס. האם הוא חיובי או שלילי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את ערך השיפוע מתוך משוואת הישר.", "math_expression": "m = -4" },
            { "verbal_explanation": "שלב 2: נבדוק את סימן השיפוע. מכיוון שהמספר הוא מינוס 4, השיפוע הוא שלילי.", "math_expression": "-4 < 0" },
            { "verbal_explanation": "שלב 3: נשתמש בכלל האומר ששיפוע שלילי משמעותו ירידה בערכי הוואי ככל שהאיקס גדל.", "math_expression": "שיפוע שלילי = ירידה" },
            { "verbal_explanation": "שלב 4: נסיק את המסקנה הסופית." }
        ],
        "final_answer": "ישר יורד, כי השיפוע שלילי.",
        "options": ["ישר עולה, כי 10 הוא מספר חיובי.", "ישר יורד, כי השיפוע הוא 4-.", "ישר אופקי, כי אין איקס בריבוע.", "לא ניתן לדעת."],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מצאו את שטח המשולש שיוצר הישר <strong>y = x + 4</strong> עם צירי המערכת (המשולש בפינת הצירים).<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='160' viewBox='0 0 180 160'><line x1='10' y1='100' x2='170' y2='100' stroke='black' stroke-width='1'/><line x1='90' y1='150' x2='90' y2='10' stroke='black' stroke-width='1'/><line x1='40' y1='150' x2='140' y2='50' stroke='#10b981' stroke-width='3'/><polygon points='90,100 90,50 40,100' fill='#dcfce7' opacity='0.7'/></svg></div>",
        "hint": "שטח משולש ישר זווית הוא מכפלת הניצבים חלקי שתיים. מצאו את המרחק מהראשית לכל נקודת חיתוך.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את נקודת החיתוך עם ציר הוואי (נציב איקס שווה אפס).", "math_expression": "y = 0 + 4 = 4  =>  (0, 4)" },
            { "verbal_explanation": "שלב 2: נמצא את נקודת החיתוך עם ציר האיקס (נציב וואי שווה אפס).", "math_expression": "0 = x + 4  =>  x = -4  =>  (-4, 0)" },
            { "verbal_explanation": "שלב 3: נזהה את אורכי הניצבים של המשולש. אורך הוא תמיד חיובי, לכן אורכי הניצבים הם 4 ו-4.", "math_expression": "ניצב 1 = 4 , ניצב 2 = 4" },
            { "verbal_explanation": "שלב 4: נשתמש בנוסחת השטח (בסיס כפול גובה חלקי 2).", "math_expression": "שטח = (4 * 4) / 2" },
            { "verbal_explanation": "שלב 5: נחשב את התוצאה.", "math_expression": "16 / 2 = 8" }
        ],
        "final_answer": "8 יחידות שטח",
        "options": ["16 יחידות שטח", "4 יחידות שטח", "8 יחידות שטח", "12 יחידות שטח"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Low",
        "question_text": "נתון הישר <strong>y = 3x - 7</strong>. מהי נקודת החיתוך של הישר עם <strong>ציר הוואי</strong>?",
        "hint": "נקודת חיתוך עם ציר הוואי היא הנקודה שבה ערך האיקס הוא תמיד אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התנאי למציאת נקודה על ציר הוואי.", "math_expression": "x = 0" },
            { "verbal_explanation": "שלב 2: נציב אפס בתוך משוואת הפונקציה הנתונה.", "math_expression": "y = 3 * (0) - 7" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה. שלוש כפול אפס זה אפס.", "math_expression": "y = 0 - 7  =>  y = -7" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה כנקודה מלאה (איקס פסיק וואי).", "math_expression": "(0, -7)" }
        ],
        "final_answer": "(0, -7)",
        "options": ["(0, 7)", "(-7, 0)", "(0, -7)", "(3, -7)"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "High",
        "question_text": "מצאו את נקודת המפגש (החיתוך) בין שני הישרים הבאים: <br> <strong>y = 2x + 4</strong> <br> <strong>y = -x + 10</strong>",
        "hint": "בנקודת המפגש, שני הישרים מגיעים לאותו גובה בדיוק. השוו את שני האגפים זה לזה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת השוואה בין שתי הפונקציות.", "math_expression": "2x + 4 = -x + 10" },
            { "verbal_explanation": "שלב 2: נעביר את האיקסים לצד אחד (צד שמאל) ואת המספרים לצד השני (צד ימין).", "math_expression": "2x + x = 10 - 4" },
            { "verbal_explanation": "שלב 3: נחבר ונחסר איברים דומים.", "math_expression": "3x = 6" },
            { "verbal_explanation": "שלב 4: נחלק במקדם של איקס כדי למצוא את שיעור האיקס של המפגש.", "math_expression": "3x = 6  / :3  =>  x = 2" },
            { "verbal_explanation": "שלב 5: נציב את האיקס שמצאנו באחת המשוואות כדי למצוא את שיעור הוואי.", "math_expression": "y = 2 * (2) + 4  =>  y = 4 + 4 = 8" },
            { "verbal_explanation": "שלב 6: נרשום את נקודת המפגש המלאה.", "math_expression": "(2, 8)" }
        ],
        "final_answer": "(2, 8)",
        "options": ["(2, 8)", "(8, 2)", "(3, 10)", "(1, 6)"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "סדרו את המשוואה הבאה כדי למצוא את השיפוע שלה: <strong>2y - 6x = 8</strong>",
        "hint": "המטרה היא להביא את המשוואה לצורה המפורשת שבה הוואי נמצא לבד באגף שמאל (y = mx + b).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בהעברת האיבר עם האיקס לאגף ימין בסימן הפוך (פלוס).", "math_expression": "2y = 6x + 8" },
            { "verbal_explanation": "שלב 2: נחלק את כל אגפי המשוואה במספר 2 כדי לבודד את וואי.", "math_expression": "2y = 6x + 8  / :2" },
            { "verbal_explanation": "שלב 3: נבצע את החילוק לכל איבר בנפרד.", "math_expression": "y = (6/2)x + (8/2)" },
            { "verbal_explanation": "שלב 4: נפשט את השברים לקבלת המשוואה המפורשת.", "math_expression": "y = 3x + 4" },
            { "verbal_explanation": "שלב 5: נזהה את השיפוע - זהו המספר המכפיל את האיקס.", "math_expression": "m = 3" }
        ],
        "final_answer": "3",
        "options": ["6", "3", "2", "4"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מהו תחום ה<strong>חיוביות</strong> של הפונקציה <strong>y = 4x - 12</strong>?",
        "hint": "פונקציה חיובית היא פונקציה שערכי הוואי שלה גדולים מאפס. פתרו את האי-שוויון המתאים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה אי-שוויון שבו הפונקציה גדולה מאפס.", "math_expression": "4x - 12 > 0" },
            { "verbal_explanation": "שלב 2: נעביר את מינוס 12 לצד ימין בסימן פלוס.", "math_expression": "4x > 12" },
            { "verbal_explanation": "שלב 3: נחלק את שני האגפים במקדם של איקס.", "math_expression": "4x > 12  / :4" },
            { "verbal_explanation": "שלב 4: נקבל את התחום שבו הגרף נמצא מעל ציר האיקס.", "math_expression": "x > 3" }
        ],
        "final_answer": "x > 3",
        "options": ["x > 3", "x < 3", "x > 12", "x > -3"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Low",
        "question_text": "מהו השיפוע של הישר האופקי <strong>y = 5</strong>?",
        "hint": "בישר אופקי הגובה לא משתנה לעולם. כמה מדרגות עולים על כל צעד ימינה בקו ישר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את משוואת הישר בצורה הכוללת את המשתנה איקס.", "math_expression": "y = 0 * x + 5" },
            { "verbal_explanation": "שלב 2: נזהה את המקדם של איקס (השיפוע m).", "math_expression": "m = 0" },
            { "verbal_explanation": "שלב 3: נסביר שמכיוון שאין שינוי בגובה, קצב השינוי הוא אפס." }
        ],
        "final_answer": "0",
        "options": ["5", "1", "0", "לא קיים"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "High",
        "question_text": "חשבו את המרחק בין שתי הנקודות הבאות: <strong>(1, 1)</strong> ו- <strong>(4, 5)</strong>.",
        "hint": "השתמשו בנוסחת המרחק (דיסטנס) המבוססת על משפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את נוסחת המרחק בין שתי נקודות.", "math_expression": "d = שורש של [(x2-x1)^2 + (y2-y1)^2]" },
            { "verbal_explanation": "שלב 2: נציב את הערכים מהנקודות בתוך הנוסחה.", "math_expression": "d = √[(4 - 1)^2 + (5 - 1)^2]" },
            { "verbal_explanation": "שלב 3: נחשב את ההפרשים בתוך הסוגריים.", "math_expression": "d = √[3^2 + 4^2]" },
            { "verbal_explanation": "שלב 4: נחשב את ערכי החזקות.", "math_expression": "d = √[9 + 16]" },
            { "verbal_explanation": "שלב 5: נחבר את המספרים בתוך השורש.", "math_expression": "d = √25" },
            { "verbal_explanation": "שלב 6: נוציא שורש ריבועי לקבלת התוצאה הסופית.", "math_expression": "d = 5" }
        ],
        "final_answer": "5 יחידות",
        "options": ["3 יחידות", "7 יחידות", "5 יחידות", "שורש 14"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "האם הנקודה <strong>(3, 10)</strong> נמצאת על גרף הפונקציה <strong>y = 4x - 2</strong>? נמקו בעזרת הצבה.",
        "hint": "הציבו 3 במקום איקס ובדקו האם התוצאה המתקבלת היא 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את ערך האיקס לבדיקה.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 2: נציב את האיקס בתוך משוואת הישר.", "math_expression": "y = 4 * (3) - 2" },
            { "verbal_explanation": "שלב 3: נחשב את תוצאת המכפלה.", "math_expression": "y = 12 - 2" },
            { "verbal_explanation": "שלב 4: נבצע את פעולת החיסור.", "math_expression": "y = 10" },
            { "verbal_explanation": "שלב 5: נשווה את התוצאה לערך הוואי של הנקודה. מכיוון ש-10 שווה ל-10, הנקודה נמצאת על הגרף." }
        ],
        "final_answer": "כן, הנקודה נמצאת על הגרף.",
        "options": ["כן", "לא", "רק אם השיפוע ישתנה", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מהו תחום ה<strong>שליליות</strong> של הפונקציה <strong>y = -2x + 10</strong>?",
        "hint": "פונקציה שלילית כאשר הגרף שלה נמצא מתחת לציר האיקס (וואי קטן מאפס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה אי-שוויון שבו הפונקציה קטנה מאפס.", "math_expression": "-2x + 10 < 0" },
            { "verbal_explanation": "שלב 2: נעביר את המספר 10 אגף בסימן הפוך.", "math_expression": "-2x < -10" },
            { "verbal_explanation": "שלב 3: נחלק במינוס 2. שימו לב: בחלוקה במספר שלילי הופכים את כיוון הסימן!", "math_expression": "-2x < -10  / :(-2)  =>  x > 5" },
            { "verbal_explanation": "שלב 4: המסקנה היא שהפונקציה שלילית עבור כל איקס שגדול מ-5." }
        ],
        "final_answer": "x > 5",
        "options": ["x < 5", "x > 5", "x < -5", "x > 10"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך ראשית הצירים (0,0) ודרך הנקודה <strong>(5, 15)</strong>.",
        "hint": "מכיוון שהישר עובר בראשית, המספר החופשי (b) הוא אפס. חשבו רק את השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שתי הנקודות.", "math_expression": "(0, 0) , (5, 15)" },
            { "verbal_explanation": "שלב 2: נחשב את השיפוע בעזרת נוסחת ההפרשים.", "math_expression": "m = (15 - 0) / (5 - 0)" },
            { "verbal_explanation": "שלב 3: נבצע את החילוק.", "math_expression": "m = 15 / 5 = 3" },
            { "verbal_explanation": "שלב 4: מכיוון שהישר עובר ב-(0,0), ערכו של b הוא 0.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 5: נרכיב את המשוואה.", "math_expression": "y = 3x" }
        ],
        "final_answer": "y = 3x",
        "options": ["y = 3x", "y = 5x", "y = 15x", "y = 3x + 5"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "חזרה על פונקציה קווית",
        "difficulty": "High",
        "question_text": "נתון הישר <strong>y = -x + 4</strong>. מצאו את משוואת הישר ה<strong>מאונך</strong> לו (ב-90 מעלות) העובר בנקודה <strong>(0, 0)</strong>.",
        "hint": "שיפועים של ישרים מאונכים הם 'הופכי ונגדי'. אם שיפוע אחד הוא 1-, מה יהיה השיפוע השני?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שיפוע הישר הנתון.", "math_expression": "m1 = -1" },
            { "verbal_explanation": "שלב 2: נשתמש בכלל של ישרים מאונכים: מכפלת השיפועים היא מינוס 1.", "math_expression": "m1 * m2 = -1" },
            { "verbal_explanation": "שלב 3: נמצא את השיפוע הנגדי וההופכי.", "math_expression": "m2 = 1" },
            { "verbal_explanation": "שלב 4: מכיוון שהישר עובר בראשית הצירים (0,0), ה-b שלו הוא אפס.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 5: נכתוב את המשוואה החדשה.", "math_expression": "y = 1x  =>  y = x" }
        ],
        "final_answer": "y = x",
        "options": ["y = -x", "y = x + 4", "y = x", "y = 2x"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: היכרות עם הפרבולה (y=ax²+bx+c) (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Low",
        "question_text": "נתונה הפונקציה הריבועית: <strong>y = 2x² - 8x + 5</strong>. מהם ערכי הפרמטרים <strong>a, b, c</strong>?",
        "hint": "a הוא המקדם של האיקס בריבוע, b הוא המקדם של האיקס (שימו לב לסימן), ו-c הוא המספר החופשי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את המשוואה שקיבלנו לתבנית הכללית של פרבולה.", "math_expression": "y = ax^2 + bx + c" },
            { "verbal_explanation": "שלב 2: נזהה את a כיושב לפני האיקס בריבוע.", "math_expression": "a = 2" },
            { "verbal_explanation": "שלב 3: נזהה את b כיושב לפני האיקס. שימו לב שיש לפניו מינוס.", "math_expression": "b = -8" },
            { "verbal_explanation": "שלב 4: נזהה את c כמספר הבודד בסוף.", "math_expression": "c = 5" }
        ],
        "final_answer": "a=2, b=-8, c=5",
        "options": ["a=2, b=8, c=5", "a=2, b=-8, c=5", "a=-8, b=2, c=5", "a=2, b=-8, c=-5"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Low",
        "question_text": "האם הפרבולה שמשוואתה <strong>y = -3x² + 5x - 2</strong> היא פרבולה 'צוחקת' (קעורה כלפי מעלה) או 'בוכה' (קעורה כלפי מטה)?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100' viewBox='0 0 120 100'><path d='M 20 80 Q 60 -10 100 80' fill='none' stroke='#ef4444' stroke-width='4'/></svg></div>",
        "hint": "הסתכלו רק על הפרמטר a. אם הוא חיובי היא צוחקת, אם הוא שלילי היא בוכה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המקדם a במשוואה.", "math_expression": "a = -3" },
            { "verbal_explanation": "שלב 2: נבדוק את סימנו של a. מכיוון שמינוס 3 קטן מאפס, המקדם הוא שלילי.", "math_expression": "-3 < 0" },
            { "verbal_explanation": "שלב 3: נשתמש בחוק האומר שפרבולה עם מקדם שלילי פונה כלפי מטה (צורת הר).", "math_expression": "שלילי = בוכה" }
        ],
        "final_answer": "בוכה (קעורה כלפי מטה).",
        "options": ["צוחקת", "בוכה", "קבועה", "לא פרבולה"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "מהי נקודת החיתוך של הפרבולה <strong>y = x² - 4x - 7</strong> עם <strong>ציר הוואי</strong>?",
        "hint": "כמו בישר, חיתוך עם ציר הוואי מתקבל כאשר מציבים איקס שווה אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התנאי לחיתוך עם ציר הוואי.", "math_expression": "x = 0" },
            { "verbal_explanation": "שלב 2: נציב אפס בכל מקום שמופיע איקס במשוואה.", "math_expression": "y = (0)^2 - 4 * (0) - 7" },
            { "verbal_explanation": "שלב 3: נבצע את החישובים. האיברים עם האפס מתבטלים.", "math_expression": "y = 0 - 0 - 7  =>  y = -7" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה כנקודה מסודרת.", "math_expression": "(0, -7)" }
        ],
        "final_answer": "(0, -7)",
        "options": ["(0, -7)", "(-7, 0)", "(0, 7)", "(0, -4)"],
        "correctAnswer": 0
    },
    {
        "id": 19,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "High",
        "question_text": "נתונה הפרבולה הבסיסית y = x². אם נבצע לה <strong>הזזה אנכית</strong> של 3 יחידות למעלה ו<strong>הזזה אופקית</strong> של 4 יחידות ימינה, מה תהיה משוואתה החדשה?",
        "hint": "השתמשו בתבנית ההזזות: וואי שווה (איקס פחות ההזזה ימינה) בריבוע, ועוד ההזזה למעלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בתבנית הקודקוד של הפרבולה.", "math_expression": "y = (x - p)^2 + k" },
            { "verbal_explanation": "שלב 2: נציב את ההזזה האופקית. הזזה ימינה של 4 יחידות אומרת ש-p שווה 4.", "math_expression": "(x - 4)^2" },
            { "verbal_explanation": "שלב 3: נציב את ההזזה האנכית. הזזה למעלה של 3 יחידות אומרת ש-k שווה 3.", "math_expression": "+ 3" },
            { "verbal_explanation": "שלב 4: נרכיב את המשוואה הסופית.", "math_expression": "y = (x - 4)^2 + 3" }
        ],
        "final_answer": "y = (x - 4)² + 3",
        "options": ["y = (x + 4)^2 + 3", "y = (x - 4)^2 + 3", "y = (x - 3)^2 + 4", "y = x^2 + 7"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "חשבו את ערך הפונקציה <strong>y = 3x² - 2x + 1</strong> עבור <strong>x = -2</strong>.",
        "hint": "הציבו מינוס 2 בתוך סוגריים בכל מקום שבו כתוב איקס. היזהרו בחישוב החזקה של מספר שלילי!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב את פעולת ההצבה עם סוגריים למניעת טעויות סימנים.", "math_expression": "y = 3 * (-2)^2 - 2 * (-2) + 1" },
            { "verbal_explanation": "שלב 2: נחשב קודם את החזקה (מינוס 2 בריבוע הוא פלוס 4).", "math_expression": "y = 3 * (4) - 2 * (-2) + 1" },
            { "verbal_explanation": "שלב 3: נבצע את פעולות הכפל. שימו לב: מינוס כפול מינוס הופך לפלוס.", "math_expression": "y = 12 + 4 + 1" },
            { "verbal_explanation": "שלב 4: נחבר את כל המספרים.", "math_expression": "y = 17" }
        ],
        "final_answer": "17",
        "options": ["17", "9", "13", "21"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Low",
        "question_text": "מבין הפרבולות הבאות, איזו פרבולה היא ה<strong>צרה ביותר</strong>? <br> (1) y = x² <br> (2) y = 5x² <br> (3) y = 0.5x²",
        "hint": "ככל שהמספר שלפני האיקס בריבוע (בערכו המוחלט) גדול יותר, כך הפרבולה 'מטפסת' מהר יותר והיא נראית צרה יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את המקדמים של איקס בריבוע בכל אחת מהאפשרויות.", "math_expression": "a1 = 1 , a2 = 5 , a3 = 0.5" },
            { "verbal_explanation": "שלב 2: נזהה את המקדם הגדול ביותר.", "math_expression": "5 > 1 > 0.5" },
            { "verbal_explanation": "שלב 3: נשתמש בכלל האומר שמקדם גדול גורם לשינוי מהיר יותר בערכי הוואי ולכן הפרבולה תהיה קרובה יותר לציר הוואי (צרה).", "math_expression": "מסקנה: 5x^2" }
        ],
        "final_answer": "y = 5x²",
        "options": ["y = x²", "y = 5x²", "y = 0.5x²", "כולן באותו רוחב"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "נתונה הפרבולה <strong>y = x² + c</strong>. ידוע שהיא עוברת בנקודה <strong>(3, 11)</strong>. מצאו את ערכו של הפרמטר c.",
        "hint": "הציבו את האיקס והוואי של הנקודה בתוך משוואת הפרבולה ופתרו משוואה פשוטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את שיעורי הנקודה (3, 11) בתוך המשוואה.", "math_expression": "11 = (3)^2 + c" },
            { "verbal_explanation": "שלב 2: נחשב את הריבוע של שלוש.", "math_expression": "11 = 9 + c" },
            { "verbal_explanation": "שלב 3: נעביר את המספר 9 לצד השני בחיסור.", "math_expression": "11 - 9 = c" },
            { "verbal_explanation": "שלב 4: נמצא את התוצאה הסופית.", "math_expression": "c = 2" }
        ],
        "final_answer": "2",
        "options": ["2", "3", "11", "9"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "High",
        "question_text": "איזו מהמשוואות הבאות מייצגת פרבולה <strong>בוכה</strong> שקודקודה נמצא בנקודה <strong>(0, -4)</strong>?",
        "hint": "פרבולה בוכה דורשת מקדם a שלילי. קודקוד ב-(0, -4) אומר שאין הזזה אופקית (p=0) ויש הזזה למטה (k=-4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: דרישה ראשונה - פרבולה בוכה. המקדם של איקס בריבוע חייב להיות קטן מאפס.", "math_expression": "a < 0" },
            { "verbal_explanation": "שלב 2: דרישה שנייה - קודקוד על ציר הוואי (x=0). זה אומר שאין סוגריים עם איקס פלוס/מינוס משהו.", "math_expression": "y = ax^2 + k" },
            { "verbal_explanation": "שלב 3: דרישה שלישית - גובה הקודקוד הוא מינוס 4. זה אומר שהמספר החופשי בסוף הוא 4-.", "math_expression": "k = -4" },
            { "verbal_explanation": "שלב 4: נחפש משוואה שמשלבת את כל התנאים.", "math_expression": "y = -x^2 - 4" }
        ],
        "final_answer": "y = -x² - 4",
        "options": ["y = x² - 4", "y = -x² + 4", "y = -x² - 4", "y = -(x - 4)²"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "נתונה הפרבולה <strong>y = (x + 5)²</strong>. לאיזה כיוון ובכמה יחידות היא הוזזה ביחס לפרבולה y = x²?",
        "hint": "הסתכלו על המספר בתוך הסוגריים. זכרו שבתוך הסוגריים הסימן הוא תמיד 'הפוך' מהכיוון הגרפי האמיתי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את תבנית ההזזה האופקית.", "math_expression": "y = (x - p)^2" },
            { "verbal_explanation": "שלב 2: נשווה את התבנית למשוואה הנתונה. מכיוון שכתוב פלוס 5, הרי שערכו של p הוא מינוס 5.", "math_expression": "x - (-5) = x + 5" },
            { "verbal_explanation": "שלב 3: ערך p שלילי (5-) משמעותו תזוזה שמאלה במערכת הצירים.", "math_expression": "p = -5 => Left" },
            { "verbal_explanation": "שלב 4: המסקנה היא הזזה של 5 יחידות שמאלה." }
        ],
        "final_answer": "5 יחידות שמאלה",
        "options": ["5 יחידות ימינה", "5 יחידות שמאלה", "5 יחידות למעלה", "5 יחידות למטה"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "High",
        "question_text": "מצאו את נקודת החיתוך של הפרבולה <strong>y = 2x²</strong> עם הישר <strong>y = 8</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='160' viewBox='0 0 180 160'><path d='M 40 20 Q 90 180 140 20' fill='none' stroke='#10b981' stroke-width='3'/><line x1='10' y1='60' x2='170' y2='60' stroke='#ef4444' stroke-width='2' stroke-dasharray='4'/><circle cx='55' cy='60' r='5' fill='black'/><circle cx='125' cy='60' r='5' fill='black'/></svg></div>",
        "hint": "השוו את שתי הפונקציות: שתי איקס בריבוע שווה שמונה. פתרו את המשוואה וגלו את ערכי האיקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואת השוואה.", "math_expression": "2x^2 = 8" },
            { "verbal_explanation": "שלב 2: נחלק את שני האגפים במקדם של איקס בריבוע.", "math_expression": "2x^2 = 8  / :2  =>  x^2 = 4" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי משני הצדדים.", "math_expression": "x = שורש של 4" },
            { "verbal_explanation": "שלב 4: נזכור שיש שתי תוצאות לשורש.", "math_expression": "x = 2 , x = -2" },
            { "verbal_explanation": "שלב 5: נרשום את שתי נקודות המפגש (הוואי שלהן כבר ידוע והוא 8).", "math_expression": "(2, 8) , (-2, 8)" }
        ],
        "final_answer": "(2, 8) ו- (2-, 8)",
        "options": ["(2, 8) ו- (-2, 8)", "(4, 8)", "(0, 8)", "(8, 2)"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "נתונה הפרבולה <strong>y = x² + 2x + 1</strong>. הראו בעזרת נוסחאות הכפל המקוצר איך ניתן לרשום אותה בצורה של 'סוגריים בריבוע'.",
        "hint": "חפשו את התבנית של דו-איבר בריבוע: a בריבוע ועוד פעמיים ab ועוד b בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את חלקי המשוואה לפי נוסחת הכפל המקוצר.", "math_expression": "a^2 = x^2  =>  a = x" },
            { "verbal_explanation": "שלב 2: נזהה את האיבר האחרון.", "math_expression": "b^2 = 1  =>  b = 1" },
            { "verbal_explanation": "שלב 3: נבדוק אם האיבר האמצעי מתאים לפעמיים ab.", "math_expression": "2 * x * 1 = 2x  =>  מתאים!" },
            { "verbal_explanation": "שלב 4: נרשום את הביטוי המקוצר בסוגריים.", "math_expression": "y = (x + 1)^2" }
        ],
        "final_answer": "y = (x + 1)²",
        "options": ["y = (x - 1)^2", "y = (x + 1)^2", "y = (x + 2)^2", "y = x^2 + 1"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Low",
        "question_text": "מה קורה לפרבולה y = x² אם נכפול את האיקס בריבוע במספר <strong>10</strong>? (y = 10x²)",
        "hint": "האם הערכים יגדלו מהר יותר או לאט יותר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה בין קצב הצמיחה של x² לעומת 10x².", "math_expression": "10 > 1" },
            { "verbal_explanation": "שלב 2: נבין שעבור כל איקס, התוצאה תהיה גדולה פי 10 מהמקור.", "math_expression": "צמיחה מהירה מאוד" },
            { "verbal_explanation": "שלב 3: צמיחה מהירה גורמת לענפי הפרבולה 'להיצמד' לציר הוואי ולהיראות צרים מאוד.", "math_expression": "מסקנה: הפרבולה תהיה צרה יותר." }
        ],
        "final_answer": "היא הופכת לצרה יותר.",
        "options": ["היא הופכת לרחבה יותר", "היא הופכת לצרה יותר", "היא זזה למעלה", "היא זזה ימינה"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "מהו קודקוד הפרבולה <strong>y = x² - 16</strong>?",
        "hint": "מכיוון שאין איבר עם איקס (b=0), הקודקוד נמצא בדיוק על ציר הוואי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הפרמטרים במשוואה.", "math_expression": "a = 1 , b = 0 , c = -16" },
            { "verbal_explanation": "שלב 2: נשתמש בנוסחה למציאת איקס קודקוד.", "math_expression": "x = -b / 2a  =>  x = -0 / 2 = 0" },
            { "verbal_explanation": "שלב 3: נציב איקס שווה אפס במשוואה כדי למצוא את הוואי של הקודקוד.", "math_expression": "y = 0^2 - 16  =>  y = -16" },
            { "verbal_explanation": "שלב 4: נרשום את הנקודה.", "math_expression": "(0, -16)" }
        ],
        "final_answer": "(0, -16)",
        "options": ["(0, 16)", "(16, 0)", "(0, -16)", "(0, 0)"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "High",
        "question_text": "מצאו את המרחק בין שתי נקודות האפס של הפרבולה <strong>y = x² - 9</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120' viewBox='0 0 180 120'><line x1='10' y1='60' x2='170' y2='60' stroke='black' stroke-width='1'/><path d='M 50 10 Q 90 140 130 10' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='64' cy='60' r='4' fill='#ef4444'/><circle cx='116' cy='60' r='4' fill='#ef4444'/><text x='75' y='55' font-size='10' fill='#ef4444'>מרחק?</text></svg></div>",
        "hint": "מצאו את שתי נקודות החיתוך עם ציר האיקס, וחשבו כמה יחידות יש ביניהן על הציר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את נקודות האפס על ידי השוואה לאפס.", "math_expression": "x^2 - 9 = 0" },
            { "verbal_explanation": "שלב 2: נעביר אגף ונוציא שורש.", "math_expression": "x^2 = 9  =>  x = 3 , x = -3" },
            { "verbal_explanation": "שלב 3: נרשום את הנקודות על הציר.", "math_expression": "(-3, 0) , (3, 0)" },
            { "verbal_explanation": "שלב 4: נחשב את המרחק ביניהן. המרחק ממינוס שלוש עד אפס הוא 3 יחידות, ומאפס עד שלוש הוא עוד 3 יחידות.", "math_expression": "מרחק = 3 - (-3) = 6" }
        ],
        "final_answer": "6 יחידות",
        "options": ["3 יחידות", "9 יחידות", "6 יחידות", "0 יחידות"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "היכרות עם הפרבולה (y=ax²+bx+c)",
        "difficulty": "Medium",
        "question_text": "לאיזה כיוון ובכמה יחידות זזה הפרבולה <strong>y = x² - 10</strong> ביחס למקור?",
        "hint": "הסתכלו על המספר החופשי בסוף. הוא קובע את התנועה לאורך ציר הוואי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סוג ההזזה. מספר המתווסף או מחוסר בסוף הפונקציה (מחוץ לאיקס) הוא הזזה אנכית.", "math_expression": "Vertical Shift" },
            { "verbal_explanation": "שלב 2: נבחן את הסימן. מינוס פירושו ירידה כלפי מטה.", "math_expression": "-10 < 0" },
            { "verbal_explanation": "שלב 3: המסקנה היא תזוזה של 10 יחידות למטה." }
        ],
        "final_answer": "10 יחידות למטה",
        "options": ["10 יחידות למעלה", "10 יחידות למטה", "10 יחידות ימינה", "10 יחידות שמאלה"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: קודקוד, ציר סימטריה ונקודות אפס (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מצאו את שיעור האיקס של קודקוד הפרבולה שמשוואתה: <strong>y = x² - 6x + 5</strong>. הציגו פתרון מלא הכולל את הנוסחה.",
        "hint": "השתמשו בנוסחה למציאת האיקס של הקודקוד: מינוס b חלקי פעמיים a.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הפרמטרים a ו-b מתוך משוואת הפרבולה הנתונה.", "math_expression": "a = 1 , b = -6" },
            { "verbal_explanation": "שלב 2: נרשום את הנוסחה למציאת שיעור האיקס של נקודת הקודקוד.", "math_expression": "x = -b / (2 * a)" },
            { "verbal_explanation": "שלב 3: נציב את הערכים שזיהינו בתוך הנוסחה. שימו לב שהמינוס של הנוסחה והמינוס של המספר הופכים לפלוס.", "math_expression": "x = -(-6) / (2 * 1)" },
            { "verbal_explanation": "שלב 4: נחשב את המונה והמכנה בנפרד.", "math_expression": "x = 6 / 2" },
            { "verbal_explanation": "שלב 5: נבצע את פעולת החילוק לקבלת התוצאה הסופית.", "math_expression": "x = 3" }
        ],
        "final_answer": "3",
        "options": ["-3", "6", "3", "5"],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "בהמשך לשאלה הקודמת (עבור <strong>y = x² - 6x + 5</strong>), מצאו את <strong>שיעור הוואי</strong> של נקודת הקודקוד.",
        "hint": "אחרי שמצאנו ששיעור האיקס של הקודקוד הוא 3, עלינו להציב אותו במשוואת הפונקציה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח את ערך האיקס שמצאנו בשלב הקודם עבור הקודקוד.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 2: נציב את המספר 3 במקום כל איקס שמופיע במשוואת הפרבולה.", "math_expression": "y = (3)² - 6 * (3) + 5" },
            { "verbal_explanation": "שלב 3: נחשב קודם כל את תוצאת החזקה.", "math_expression": "y = 9 - 6 * (3) + 5" },
            { "verbal_explanation": "שלב 4: נחשב את תוצאת המכפלה.", "math_expression": "y = 9 - 18 + 5" },
            { "verbal_explanation": "שלב 5: נבצע את פעולות החיבור והחיסור משמאל לימין.", "math_expression": "y = -9 + 5  =>  y = -4" },
            { "verbal_explanation": "שלב 6: נרשום את נקודת הקודקוד המלאה כזוג סדור.", "math_expression": "(3, -4)" }
        ],
        "final_answer": "-4",
        "options": ["5", "3", "-4", "0"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Low",
        "question_text": "מהי משוואת <strong>ציר הסימטריה</strong> של פרבולה שקודקודה נמצא בנקודה <strong>(5, 2-)</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='140' viewBox='0 0 160 140'><line x1='10' y1='100' x2='150' y2='100' stroke='black' stroke-width='1'/><line x1='80' y1='130' x2='80' y2='10' stroke='black' stroke-width='1'/><path d='M 110 20 Q 130 180 150 20' fill='none' stroke='#3b82f6' stroke-width='2' transform='translate(-85,0)'/><line x1='45' y1='10' x2='45' y2='130' stroke='#ef4444' stroke-width='2' stroke-dasharray='4'/><text x='15' y='25' font-size='10' fill='#ef4444'>ציר סימטריה</text></svg></div>",
        "hint": "ציר הסימטריה הוא ישר אנכי שחוצה את הפרבולה, ולכן המשוואה שלו היא תמיד הערך של האיקס בנקודת הקודקוד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שיעור האיקס מתוך נקודת הקודקוד הנתונה.", "math_expression": "Vertex = (5, -2)  =>  x = 5" },
            { "verbal_explanation": "שלב 2: נבין שציר הסימטריה הוא קו ישר המקביל לציר הוואי ועובר בדיוק באמצע הפרבולה.", "math_expression": "קו אנכי" },
            { "verbal_explanation": "שלב 3: משוואת קו אנכי נכתבת תמיד כאיקס שווה למספר מסוים.", "math_expression": "x = 5" }
        ],
        "final_answer": "x = 5",
        "options": ["y = -2", "x = 5", "x = -2", "y = 5"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מצאו את <strong>נקודות האפס</strong> של הפרבולה: <strong>y = x² - 16</strong>. הציגו פתרון משוואה מלא.",
        "hint": "נקודות אפס מתקבלות כאשר הגובה (וואי) שווה לאפס. פתרו את המשוואה איקס בריבוע פחות 16 שווה אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב אפס במקום וואי כדי למצוא חיתוך עם ציר האיקס.", "math_expression": "0 = x² - 16" },
            { "verbal_explanation": "שלב 2: נעביר את המספר 16 לאגף השני כדי לבודד את האיקס.", "math_expression": "x² = 16" },
            { "verbal_explanation": "שלב 3: נבצע פעולת שורש ריבועי על שני אגפי המשוואה.", "math_expression": "x = ±√16" },
            { "verbal_explanation": "שלב 4: נחלץ את שתי התוצאות האפשריות (חיובית ושלילית).", "math_expression": "x1 = 4 , x2 = -4" },
            { "verbal_explanation": "שלב 5: נרשום את התוצאה כנקודות מלאות על הציר.", "math_expression": "(4, 0) , (-4, 0)" }
        ],
        "final_answer": "(4, 0) ו- (4-, 0)",
        "options": ["(16, 0)", "(4, 0) ו- (-4, 0)", "(0, 4) ו- (0, -4)", "(4, 4)"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "High",
        "question_text": "מצאו את נקודות האפס של הפרבולה: <strong>y = x² - 8x + 15</strong> בעזרת פירוק לטרינום.",
        "hint": "חפשו שני מספרים שמכפלתם היא 15 וסכומם הוא 8-.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את הפונקציה לאפס.", "math_expression": "x² - 8x + 15 = 0" },
            { "verbal_explanation": "שלב 2: נחפש שני מספרים שחיבורם נותן את המקדם האמצעי (8-) ומכפלתם נותנת את המספר החופשי (15).", "math_expression": "(-3) * (-5) = 15 , (-3) + (-5) = -8" },
            { "verbal_explanation": "שלב 3: נרשום את הביטוי הריבועי ככפל של שני סוגריים.", "math_expression": "(x - 3)(x - 5) = 0" },
            { "verbal_explanation": "שלב 4: נמצא את ערכי האיקס שמאפסים כל אחד מהסוגריים.", "math_expression": "x - 3 = 0  =>  x = 3 | x - 5 = 0  =>  x = 5" },
            { "verbal_explanation": "שלב 5: נרשום את נקודות החיתוך המלאות.", "math_expression": "(3, 0) , (5, 0)" }
        ],
        "final_answer": "(3, 0) ו- (5, 0)",
        "options": ["(3, 0) ו- (5, 0)", "(-3, 0) ו- (-5, 0)", "(15, 0) ו- (8, 0)", "אין נקודות חיתוך"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "High",
        "question_text": "נתונה הפרבולה <strong>y = -x² + 4x + 12</strong>. מצאו את נקודת המקסימום שלה.",
        "hint": "הקודקוד של פרבולה בוכה הוא נקודת המקסימום. מצאו קודם את האיקס בעזרת הנוסחה ואז הציבו למציאת הוואי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המקדמים. a שווה מינוס 1 (לכן זו פרבולה בוכה) ו-b שווה 4.", "math_expression": "a = -1 , b = 4" },
            { "verbal_explanation": "שלב 2: נחשב את שיעור האיקס של הקודקוד.", "math_expression": "x = -4 / (2 * -1) = -4 / -2 = 2" },
            { "verbal_explanation": "שלב 3: נציב את האיקס שמצאנו (2) בתוך משוואת הפרבולה כדי לגלות את הגובה שלה.", "math_expression": "y = -(2)² + 4 * (2) + 12" },
            { "verbal_explanation": "שלב 4: נחשב בזהירות: שתיים בריבוע זה 4, עם המינוס בחוץ זה מינוס 4.", "math_expression": "y = -4 + 8 + 12" },
            { "verbal_explanation": "שלב 5: נחבר את כל הערכים.", "math_expression": "y = 4 + 12 = 16" },
            { "verbal_explanation": "שלב 6: נרשום את נקודת המקסימום המלאה.", "math_expression": "(2, 16)" }
        ],
        "final_answer": "(2, 16)",
        "options": ["(2, 16)", "(2, 12)", "(4, 16)", "(-2, 0)"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "ידוע שנקודות האפס של פרבולה מסוימת הן ב- <strong>x = 2</strong> וב- <strong>x = 10</strong>. מהו שיעור האיקס של הקודקוד?",
        "hint": "פרבולה היא צורה סימטרית לחלוטין. הקודקוד תמיד נמצא בדיוק באמצע הדרך בין שתי נקודות האפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בתכונת הסימטריה. שיעור האיקס של הקודקוד הוא הממוצע של נקודות האפס.", "math_expression": "x_קודקוד = (x1 + x2) / 2" },
            { "verbal_explanation": "שלב 2: נציב את שתי נקודות האפס הנתונות.", "math_expression": "x = (2 + 10) / 2" },
            { "verbal_explanation": "שלב 3: נחבר את המונה.", "math_expression": "x = 12 / 2" },
            { "verbal_explanation": "שלב 4: נבצע את פעולת החילוק.", "math_expression": "x = 6" }
        ],
        "final_answer": "6",
        "options": ["4", "8", "6", "5"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "High",
        "question_text": "כמה נקודות חיתוך יש לפרבולה <strong>y = x² + 10</strong> עם ציר האיקס? נמקו ללא חישוב ארוך.",
        "hint": "חשבו איפה נמצאת נקודת המינימום ולאיזה כיוון פונים ענפי הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את קודקוד הפרבולה. מכיוון שאין איבר עם איקס (b=0), הקודקוד נמצא בגובה 10 מעל ראשית הצירים.", "math_expression": "(0, 10)" },
            { "verbal_explanation": "שלב 2: נזהה את כיוון הפתיחה. המקדם a הוא 1 (חיובי), לכן הפרבולה 'צוחקת' ועולה למעלה.", "math_expression": "צוחקת (עולה)" },
            { "verbal_explanation": "שלב 3: נפעיל היגיון: אם הנקודה הכי נמוכה היא בגובה 10 (מעל ציר האיקס), והפרבולה רק עולה משם, היא לעולם לא תרד לגעת בציר.", "math_expression": "אין חיתוך עם x" }
        ],
        "final_answer": "0 (אין נקודות חיתוך כלל).",
        "options": ["0", "1", "2", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודות החיתוך של הפרבולה <strong>y = -x² + 25</strong> עם שני הצירים.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='160' viewBox='0 0 180 160'><line x1='10' y1='130' x2='170' y2='130' stroke='black' stroke-width='1'/><line x1='90' y1='150' x2='90' y2='10' stroke='black' stroke-width='1'/><path d='M 40 150 Q 90 -20 140 150' fill='none' stroke='#ef4444' stroke-width='3'/><circle cx='90' cy='30' r='5' fill='#f59e0b'/><circle cx='46' cy='130' r='5' fill='#f59e0b'/><circle cx='134' cy='130' r='5' fill='#f59e0b'/></svg></div>",
        "hint": "חיתוך וואי: הציבו איקס שווה אפס. חיתוך איקס: הציבו וואי שווה אפס ופתרו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיתוך עם ציר הוואי (נציב איקס שווה אפס).", "math_expression": "y = -(0)² + 25 = 25  =>  (0, 25)" },
            { "verbal_explanation": "שלב 2: חיתוך עם ציר האיקס (נציב וואי שווה אפס).", "math_expression": "0 = -x² + 25" },
            { "verbal_explanation": "שלב 3: נעביר אגפים.", "math_expression": "x² = 25" },
            { "verbal_explanation": "שלב 4: נוציא שורש ונקבל שתי תוצאות.", "math_expression": "x = 5 , x = -5  =>  (5, 0) , (-5, 0)" }
        ],
        "final_answer": "(0,25) , (5,0) , (5-,0)",
        "options": ["(0,25) , (5,0)", "(0,25) , (5,0) , (-5,0)", "(25,0) , (0,5)", "רק (5,0)"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "High",
        "question_text": "לפרבולה קודקוד בנקודה <strong>(3, 4)</strong> ואחת מנקודות האפס שלה היא ב- <strong>x = 5</strong>. מהי נקודת האפס השנייה?",
        "hint": "השתמשו בסימטריה סביב ציר הסימטריה איקס שווה 3. המרחק מנקודת האפס לקודקוד זהה בשני הצדדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את ציר הסימטריה. הוא עובר דרך האיקס של הקודקוד.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 2: נחשב את המרחק האופקי מנקודת האפס הידועה (5) אל ציר הסימטריה (3).", "math_expression": "מרחק = 5 - 3 = 2 יחידות" },
            { "verbal_explanation": "שלב 3: בשל הסימטריה, נקודת האפס השנייה חייבת להיות באותו מרחק של 2 יחידות לכיוון השני (שמאלה).", "math_expression": "x = 3 - 2" },
            { "verbal_explanation": "שלב 4: נבצע את החישוב ונקבל את נקודת האפס השנייה.", "math_expression": "x = 1  =>  (1, 0)" }
        ],
        "final_answer": "(1, 0)",
        "options": ["(-1, 0)", "(1, 0)", "(0, 0)", "(2, 0)"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מהו קודקוד הפרבולה <strong>y = (x - 4)² + 7</strong>?",
        "hint": "זוהי תבנית שבה הקודקוד 'קופץ' ישר לעין. האיקס הוא הערך המאפס את הסוגריים והוואי הוא המספר החופשי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את תבנית הקודקוד (הזזות מהראשית).", "math_expression": "y = a(x - p)² + k" },
            { "verbal_explanation": "שלב 2: נחלץ את ערך האיקס של הקודקוד (p). שימו לב שרשום x-4 ולכן הערך הוא 4 חיובי.", "math_expression": "x = 4" },
            { "verbal_explanation": "שלב 3: נחלץ את ערך הוואי של הקודקוד (k) המופיע בסוף המשוואה.", "math_expression": "y = 7" },
            { "verbal_explanation": "שלב 4: נרשום את הנקודה הסופית.", "math_expression": "(4, 7)" }
        ],
        "final_answer": "(4, 7)",
        "options": ["(-4, 7)", "(4, 7)", "(4, -7)", "(7, 4)"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "High",
        "question_text": "עבור הפרבולה <strong>y = x² - 10x + c</strong>, מה צריך להיות ערכו של <strong>c</strong> כדי שהקודקוד יהיה על ציר האיקס?",
        "hint": "אם הקודקוד על ציר האיקס, סימן שהגובה (וואי) שלו הוא אפס. מצאו קודם את האיקס של הקודקוד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את שיעור האיקס של הקודקוד בעזרת הנוסחה.", "math_expression": "x = -(-10) / (2 * 1) = 5" },
            { "verbal_explanation": "שלב 2: נקבע את התנאי - הקודקוד על ציר האיקס אומר וואי שווה אפס.", "math_expression": "y = 0" },
            { "verbal_explanation": "שלב 3: נציב איקס שווה 5 ווואי שווה אפס במשוואת הפרבולה המקורית.", "math_expression": "0 = (5)² - 10 * (5) + c" },
            { "verbal_explanation": "שלב 4: נחשב את הערכים המספריים.", "math_expression": "0 = 25 - 50 + c  =>  0 = -25 + c" },
            { "verbal_explanation": "שלב 5: נבודד את c.", "math_expression": "c = 25" }
        ],
        "final_answer": "25",
        "options": ["10", "-25", "25", "5"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מצאו את המרחק בין שתי נקודות האפס של הפרבולה <strong>y = x² - 8x</strong>.",
        "hint": "מצאו את נקודות החיתוך עם ציר האיקס בעזרת הוצאת גורם משותף איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את הפונקציה לאפס.", "math_expression": "x² - 8x = 0" },
            { "verbal_explanation": "שלב 2: נוציא את איקס מחוץ לסוגריים כגורם משותף.", "math_expression": "x(x - 8) = 0" },
            { "verbal_explanation": "שלב 3: נמצא את שני הפתרונות (איקס שווה אפס או שהסוגריים שווים לאפס).", "math_expression": "x = 0 , x = 8" },
            { "verbal_explanation": "שלב 4: נחשב את המרחק בין הנקודות (0,0) ו- (8,0) על גבי הציר.", "math_expression": "מרחק = 8 - 0 = 8 יחידות" }
        ],
        "final_answer": "8 יחידות",
        "options": ["8", "4", "0", "16"],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Low",
        "question_text": "מהן נקודות האפס של הפונקציה <strong>y = (x - 2)(x + 6)</strong>?",
        "hint": "הפונקציה כבר רשומה כמכפלה. אילו ערכי איקס יגרמו לאחד הסוגריים להיות שווה לאפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בכלל שמכפלה שווה לאפס אם לפחות אחד הגורמים הוא אפס.", "math_expression": "x - 2 = 0  או  x + 6 = 0" },
            { "verbal_explanation": "שלב 2: נפתור את המשוואה הראשונה.", "math_expression": "x = 2" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה השנייה.", "math_expression": "x = -6" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה כנקודות חיתוך.", "math_expression": "(2, 0) , (-6, 0)" }
        ],
        "final_answer": "(2, 0) ו- (6-, 0)",
        "options": ["(2, 0) ו- (-6, 0)", "(-2, 0) ו- (6, 0)", "(0, 2) ו- (0, -6)", "(2, 6)"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "קודקוד, ציר סימטריה ונקודות אפס",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודת החיתוך של הפרבולה <strong>y = 2x² + 5x - 3</strong> עם ציר הוואי.",
        "hint": "שימו לב: תמיד בחיתוך עם ציר הוואי מציבים איקס שווה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב x = 0 במשוואה.", "math_expression": "y = 2 * (0)² + 5 * (0) - 3" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה. המקדמים של איקס מתאפסים.", "math_expression": "y = 0 + 0 - 3  =>  y = -3" },
            { "verbal_explanation": "שלב 3: נרשום את הנקודה.", "math_expression": "(0, -3)" }
        ],
        "final_answer": "(0, -3)",
        "options": ["(0, -3)", "(0, 3)", "(-3, 0)", "(0, 5)"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: תחומי עלייה וירידה, חיוביות ושליליות (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "מצאו את <strong>תחום העלייה</strong> של הפרבולה: <strong>y = x² - 4x + 7</strong>. הציגו חישוב מלא של הקודקוד.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='140' viewBox='0 0 180 140'><line x1='10' y1='100' x2='170' y2='100' stroke='black' stroke-width='1'/><path d='M 50 20 Q 90 180 130 20' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 90 100 L 130 20' fill='none' stroke='#10b981' stroke-width='5' opacity='0.7'/><text x='110' y='60' font-size='10' fill='#10b981' font-weight='bold'>עלייה</text></svg></div>",
        "hint": "מצאו תחילה את האיקס של הקודקוד. מאחר וזו פרבולה צוחקת, היא מתחילה לעלות מימין לקודקוד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המקדמים a = 1 ו- b = -4. מאחר ו-a חיובי, הפרבולה היא קערה (צוחקת).", "math_expression": "a > 0" },
            { "verbal_explanation": "שלב 2: נחשב את איקס הקודקוד (נקודת המינימום).", "math_expression": "x = -(-4) / (2 * 1) = 4 / 2 = 2" },
            { "verbal_explanation": "שלב 3: נבין שבפרבולה צוחקת, הפונקציה יורדת עד שהיא מגיעה לקודקוד (x=2) ומתחילה לטפס (לעלות) משם והלאה.", "math_expression": "מנקודה 2 וימינה" },
            { "verbal_explanation": "שלב 4: נרשום את התחום כאי-שוויון.", "math_expression": "x > 2" }
        ],
        "final_answer": "x > 2",
        "options": ["x < 2", "x > 2", "x > 4", "כל איקס"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "מצאו את <strong>תחום הירידה</strong> של הפרבולה: <strong>y = -x² + 10x</strong>.",
        "hint": "זו פרבולה בוכה (a שלילי). היא עולה עד לפסגה ואז מתחילה לרדת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המקדמים a = -1 ו- b = 10.", "math_expression": "a = -1 , b = 10" },
            { "verbal_explanation": "שלב 2: נחשב את שיעור האיקס של הקודקוד (הפסגה).", "math_expression": "x = -10 / (2 * -1) = -10 / -2 = 5" },
            { "verbal_explanation": "שלב 3: בפרבולה שפתוחה כלפי מטה (הר), הפונקציה יורדת בכל הערכים שנמצאים מימין לפסגה.", "math_expression": "מנקודה 5 וימינה" },
            { "verbal_explanation": "שלב 4: נרשום את התחום.", "math_expression": "x > 5" }
        ],
        "final_answer": "x > 5",
        "options": ["x < 5", "x > 5", "x > 10", "x < 0"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Low",
        "question_text": "מהו המושג המתמטי המתאר את התחום שבו גרף הפונקציה נמצא <strong>מתחת לציר האיקס</strong>?",
        "hint": "מתחת לציר האיקס אומר שערכי הוואי (התוצאות) הם מספרים קטנים מאפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת המיקום במערכת צירים. כל הנקודות שערך הוואי שלהן שלילי נמצאות בחלק התחתון.", "math_expression": "y < 0" },
            { "verbal_explanation": "שלב 2: המונח המקצועי למצב זה הוא 'תחום שליליות'." }
        ],
        "final_answer": "תחום שליליות.",
        "options": ["תחום עלייה.", "תחום חיוביות.", "תחום שליליות.", "תחום ירידה."],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "מצאו את <strong>תחום החיוביות</strong> של הפרבולה: <strong>y = x² - 9</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='140' viewBox='0 0 180 140'><line x1='10' y1='60' x2='170' y2='60' stroke='black' stroke-width='1'/><path d='M 40 10 Q 90 140 140 10' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 40 10 L 58 60' fill='none' stroke='#f59e0b' stroke-width='5' opacity='0.7'/><path d='M 122 60 L 140 10' fill='none' stroke='#f59e0b' stroke-width='5' opacity='0.7'/><text x='15' y='40' font-size='10' fill='#f59e0b' font-weight='bold'>חיובי</text><text x='145' y='40' font-size='10' fill='#f59e0b' font-weight='bold'>חיובי</text></svg></div>",
        "hint": "מצאו תחילה את נקודות האפס. מכיוון שזו פרבולה צוחקת, היא חיובית 'בצדדים' (מחוץ לנקודות האפס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את נקודות האפס (חיתוך ציר איקס).", "math_expression": "x² - 9 = 0  => x = 3 , x = -3" },
            { "verbal_explanation": "שלב 2: נזהה את סוג הפרבולה. a חיובי (צוחקת), לכן הגרף הוא בצורת קערה.", "math_expression": "קערה" },
            { "verbal_explanation": "שלב 3: נבין את המבנה. בפרבולה צוחקת, החלק שבין 3- ל-3 נמצא בתוך האדמה (שלילי), והחלקים שמימין ל-3 ומשמאל ל-3- עולים לאוויר (חיובי).", "math_expression": "מעל הציר" },
            { "verbal_explanation": "שלב 4: נרשום את שני תחומי החיוביות.", "math_expression": "x > 3  או  x < -3" }
        ],
        "final_answer": "x > 3 או x < -3",
        "options": ["בין -3 ל-3", "x > 3 או x < -3", "x > 9", "כל איקס"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "מצאו את <strong>תחום השליליות</strong> של הפרבולה: <strong>y = -x² + 16</strong>.",
        "hint": "זו פרבולה בוכה (הר). היא שלילית 'בשוליים' (מחוץ לנקודות האפס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא נקודות אפס.", "math_expression": "-x² + 16 = 0  => x² = 16  => x = 4, -4" },
            { "verbal_explanation": "שלב 2: נזהה שהפרבולה בוכה. הפסגה שלה נמצאת מעל הציר.", "math_expression": "הר" },
            { "verbal_explanation": "שלב 3: נבין שהגרף נמצא מתחת לציר האיקס רק ב'זנבות' הימני והשמאלי, כלומר מחוץ לטווח של 4- עד 4.", "math_expression": "שלילי בשוליים" },
            { "verbal_explanation": "שלב 4: נרשום את התחום.", "math_expression": "x > 4  או  x < -4" }
        ],
        "final_answer": "x > 4 או x < -4",
        "options": ["בין -4 ל-4", "x > 4 או x < -4", "x > 16", "אף פעם"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "מהו תחום החיוביות של הפונקציה <strong>y = (x - 5)²</strong>?",
        "hint": "כל מספר שמעלים בריבוע נותן תוצאה חיובית, חוץ מהמספר שגורם לסוגריים להיות אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ננתח את הביטוי. ביטוי בריבוע תמיד יהיה גדול מאפס או שווה לאפס.", "math_expression": "(...)² ≥ 0" },
            { "verbal_explanation": "שלב 2: נמצא מתי הפונקציה נוגעת בציר (וואי שווה אפס).", "math_expression": "(x - 5)² = 0  =>  x = 5" },
            { "verbal_explanation": "שלב 3: בכל שאר הערכים של איקס, התוצאה תהיה חיובית (גדולה מאפס).", "math_expression": "x ≠ 5" }
        ],
        "final_answer": "כל איקס פרט ל-5.",
        "options": ["כל איקס.", "כל איקס פרט ל-5.", "x > 5", "x < 5"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "מתי הפונקציה <strong>y = x² + 4</strong> היא שלילית?",
        "hint": "ציירו סקיצה מהירה בראש: קערה שמתחילה בגובה 4 ועולה למעלה. האם היא תיכנס לאדמה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את נקודת המינימום. היא נמצאת ב-(0, 4).", "math_expression": "הכי נמוך = 4" },
            { "verbal_explanation": "שלב 2: נבין שמכיוון שהגובה הכי נמוך של הפרבולה הוא מעל ציר האיקס, היא תמיד תישאר חיובית.", "math_expression": "Never below x" }
        ],
        "final_answer": "אף פעם. הפונקציה תמיד חיובית.",
        "options": ["כשאיקס קטן מ-4.", "אף פעם. הפונקציה תמיד חיובית.", "כשאיקס גדול מ-4.", "כל איקס."],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "האם ייתכן שפונקציה תהיה גם <strong>עולה</strong> וגם <strong>שלילית</strong> באותו זמן?",
        "hint": "חישבו על פרבולה צוחקת שנמצאת עמוק מתחת לציר האיקס ומתחילה לטפס לכיוון האפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 'עולה' פירושו שהגרף מטפס למעלה ככל שזזים ימינה.", "math_expression": "Increasing" },
            { "verbal_explanation": "שלב 2: 'שלילית' פירושו שהגרף נמצא מתחת לקו האפס.", "math_expression": "Below axis" },
            { "verbal_explanation": "שלב 3: פרבולה שקודקודה ב-(0, 10-) תהיה עולה מצד ימין ועדיין תישאר מתחת לציר עד שהיא תגיע לנקודת האפס שלה.", "math_expression": "דוגמה: y = x - 5" }
        ],
        "final_answer": "כן, אלו שני מאפיינים שונים.",
        "options": ["כן.", "לא, פונקציה עולה היא תמיד חיובית.", "לא, פונקציה שלילית תמיד יורדת.", "רק בנקודת הקודקוד."],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "עבור הפרבולה <strong>y = x² - 8x + 12</strong>, מהו התחום שבו הפונקציה היא <strong>גם יורדת וגם שלילית</strong>?",
        "hint": "מצאו קודקוד (4) ואפסים (2 ו-6). איפה היא יורדת? ואיפה היא בתוך האדמה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את שיעור האיקס של הקודקוד.", "math_expression": "x = -(-8) / 2 = 4" },
            { "verbal_explanation": "שלב 2: תחום ירידה בפרבולה צוחקת הוא משמאל לקודקוד.", "math_expression": "x < 4" },
            { "verbal_explanation": "שלב 3: נמצא נקודות אפס (טרינום של 2 ו-6).", "math_expression": "(x-2)(x-6)=0" },
            { "verbal_explanation": "שלב 4: תחום שליליות (הבטן של הקערה) הוא בין 2 ל-6.", "math_expression": "2 < x < 6" },
            { "verbal_explanation": "שלב 5: נחפש את הערכים שמקיימים גם 'קטן מ-4' וגם 'בין 2 ל-6'.", "math_expression": "2 < x < 4" }
        ],
        "final_answer": "2 < x < 4",
        "options": ["x < 2", "2 < x < 4", "4 < x < 6", "x > 6"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "נתונה הפונקציה <strong>y = -2(x - 3)² - 5</strong>. מהו תחום החיוביות שלה?",
        "hint": "זו פרבולה בוכה. הפסגה שלה היא ב-(3, 5-). האם היא אי פעם מגיעה לאפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סוג הפרבולה. המקדם הוא מינוס 2 (בוכה).", "math_expression": "a < 0" },
            { "verbal_explanation": "שלב 2: נזהה את נקודת המקסימום מתוך המשוואה.", "math_expression": "(3, -5)" },
            { "verbal_explanation": "שלב 3: נפעיל היגיון: אם הנקודה הכי גבוהה של הפונקציה נמצאת במינוס חמש, שום נקודה אחרת לא יכולה להיות חיובית.", "math_expression": "Max < 0" }
        ],
        "final_answer": "אף פעם. היא תמיד שלילית.",
        "options": ["x > 3", "כל איקס", "אף פעם. היא תמיד שלילית.", "x < -5"],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "מהו תחום העלייה של <strong>y = 3x² + 12x</strong>?",
        "hint": "מצאו את איקס הקודקוד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: x = -12 / (2 * 3) = -2.", "math_expression": "x = -2" },
            { "verbal_explanation": "שלב 2: הפרבולה צוחקת (המקדם 3 הוא חיובי).", "math_expression": "צוחקת" },
            { "verbal_explanation": "שלב 3: בקערה צוחקת, תחום העלייה הוא תמיד מימין לקודקוד.", "math_expression": "x > -2" }
        ],
        "final_answer": "x > -2",
        "options": ["x < -2", "x > -2", "x > 0", "כל איקס"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "נתונה הפרבולה <strong>y = x² - 25</strong>. באיזה תחום היא גם <strong>עולה</strong> וגם <strong>חיובית</strong>?",
        "hint": "עולה אחרי אפס. חיובית מחוץ ל-5 ומינוס 5. מצאו את החיתוך.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תחום עלייה (קודקוד ב-0, צוחקת).", "math_expression": "x > 0" },
            { "verbal_explanation": "שלב 2: תחום חיוביות (אפסים ב-5 ובמינוס 5, צוחקת).", "math_expression": "x > 5  או  x < -5" },
            { "verbal_explanation": "שלב 3: נמצא את האיקסים שמקיימים את שני התנאים יחד. רק איקס שגדול מ-5 מתאים לשניהם.", "math_expression": "x > 5" }
        ],
        "final_answer": "x > 5",
        "options": ["x > 0", "x < -5", "x > 5", "0 < x < 5"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Low",
        "question_text": "מדוע בנקודת הקודקוד עצמה הפונקציה לא נחשבת עולה ולא יורדת?",
        "hint": "חישבו על מה שקורה באותה מאית שנייה בודדת בקרקעית הקערה או בראש ההר.",
        "solution_steps": [
            { "verbal_explanation": "הקודקוד הוא רגע המעבר. בו השינוי בגובה הוא אפס לרגע קט לפני שהוא משנה כיוון.", "math_expression": "נקודת מפנה" }
        ],
        "final_answer": "כי בנקודה זו היא משנה כיוון (רגע המעבר).",
        "options": ["כי היא תמיד חיובית שם.", "כי בנקודה זו היא משנה כיוון (רגע המעבר).", "כי האיקס שם תמיד 0.", "זו טעות, היא כן עולה שם."],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "High",
        "question_text": "עבור הפרבולה <strong>y = -2x² + 12x - 10</strong>, מהו תחום העלייה?",
        "hint": "מצאו קודקוד. זכרו שהיא בוכה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב איקס קודקוד.", "math_expression": "x = -12 / (2 * -2) = 3" },
            { "verbal_explanation": "שלב 2: הפרבולה בוכה (a שלילי), לכן היא מטפסת (עולה) משמאל עד שהיא מגיעה לפסגה.", "math_expression": "עולה עד 3" },
            { "verbal_explanation": "שלב 3: התחום הוא משמאל ל-3.", "math_expression": "x < 3" }
        ],
        "final_answer": "x < 3",
        "options": ["x > 3", "x < 3", "x < 12", "כל איקס"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "תחומי עלייה וירידה, חיוביות ושליליות",
        "difficulty": "Medium",
        "question_text": "פרבולה צוחקת שקודקודה נמצא ב- (3, 0). מהו תחום ה<strong>שליליות</strong> שלה?",
        "hint": "הקודקוד נמצא בדיוק על ציר האיקס, והיא עולה למעלה. האם היא נכנסת מתחת לציר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין את המצב הגרפי. הנקודה הכי נמוכה של הקערה נוגעת בציר האיקס בנקודה 3.", "math_expression": "Minimum on axis" },
            { "verbal_explanation": "שלב 2: מכיוון שזו הנקודה הכי נמוכה וכל שאר הגרף מעליה, אין אף חלק של הפרבולה שנמצא מתחת לציר.", "math_expression": "אין חלק שלילי" }
        ],
        "final_answer": "אף פעם. אין לה תחום שליליות.",
        "options": ["x < 3", "x > 3", "אף פעם. אין לה תחום שליליות.", "כל איקס."],
        "correctAnswer": 2
    },,

    // ========================================================================
    // תת נושא: פרבולות ושטחים
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `לפניכם הפרבולה שמשוואתה: y = -x² + 8x. <br>ישר אופקי שמשוואתו y = 12 חותך את הפרבולה בשתי נקודות. בנוסף, הפרבולה חותכת את ציר ה-x בשתי נקודות (שורשים).<br>ארבע הנקודות הללו יוצרות יחד טרפז שווה שוקיים.<br>מהו שטחו המדויק של טרפז זה?<br><br>
        <svg viewBox="0 0 250 160" style="width:100%; max-width:250px; display:block; margin:10px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <line x1="20" y1="130" x2="230" y2="130" stroke="#94a3b8" stroke-width="2"/>
            <line x1="40" y1="10" x2="40" y2="150" stroke="#94a3b8" stroke-width="2"/>
            <path d="M 40,130 Q 120,-30 200,130" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="40,130 80,50 160,50 200,130" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
            <line x1="20" y1="50" x2="230" y2="50" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="205" y="45" font-size="10" fill="#ef4444" font-weight="bold">y=12</text>
        </svg>`,
        options: ["72 יח\"ר", "96 יח\"ר", "48 יח\"ר", "60 יח\"ר"],
        correctAnswer: 0,
        hint: "הבסיס התחתון של הטרפז הוא המרחק בין שורשי הפרבולה. הבסיס העליון הוא המרחק בין נקודות החיתוך של הפרבולה עם הישר. הגובה של הטרפז נתון על ידי הישר עצמו (12). השתמשו בנוסחת שטח טרפז.",
        solution_steps: [
            { verbal_explanation: "נמצא את שורשי הפרבולה המהווים את קצות הבסיס התחתון שעל ציר ה-x. נוציא גורם משותף.", math_expression: "-x² + 8x = 0" },
            { verbal_explanation: "פתרונות המשוואה הם אפס ושמונה. אורך הבסיס התחתון הוא המרחק ביניהם.", math_expression: "x = 0 , x = 8" },
            { verbal_explanation: "נמצא את נקודות החיתוך עם הישר כדי לחשב את אורך הבסיס העליון.", math_expression: "-x² + 8x = 12" },
            { verbal_explanation: "נעביר אגפים ונפתור את המשוואה הריבועית.", math_expression: "x² - 8x + 12 = 0" },
            { verbal_explanation: "הפתרונות הם 2 ו-6. הבסיס העליון הוא המרחק בין נקודות אלו.", math_expression: "6 - 2 = 4" },
            { verbal_explanation: "גובה הטרפז שווה למרחק הישר מציר ה-x. נציב הכל בנוסחת שטח טרפז.", math_expression: "S = (8 + 4) × 12 / 2 = 72" }
        ],
        final_answer: "72 יח\"ר"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה משפחת הפרבולות: y = -x² + 4x + c (כאשר c הוא פרמטר).<br>ידוע ששטח המשולש הנוצר בין קודקוד הפרבולה לבין שתי נקודות החיתוך שלה עם ציר ה-x הוא בדיוק 27 יח\"ר.<br>מהו ערכו של הפרמטר c?",
        options: ["5", "4", "9", "3"],
        correctAnswer: 0,
        hint: "זהו תרגיל בחשיבה הפוכה. מצאו את ה-x של הקודקוד, והציבו אותו במשוואה כדי לקבל את הגובה (כתלות ב-c). כעת בדקו את התשובות האפשריות: הציבו c=5, מצאו שורשים, וחשבו אם השטח יוצא 27.",
        solution_steps: [
            { verbal_explanation: "נמצא את ה-x של הקודקוד על ידי נוסחת ציר הסימטריה (מינוס b חלקי פעמיים a).", math_expression: "x = -4 / -2 = 2" },
            { verbal_explanation: "נציב את ה-x במשוואה כדי להביע את גובה הקודקוד באמצעות הפרמטר c.", math_expression: "y = -2² + 4 × 2 + c = c + 4" },
            { verbal_explanation: "נבדוק את התשובה הראשונה (c=5). אם היא נכונה, הגובה יהיה 9.", math_expression: "c = 5  =>  y = 9" },
            { verbal_explanation: "כעת נשווה את הפרבולה לאפס כדי למצוא את אורך בסיס המשולש.", math_expression: "-x² + 4x + 5 = 0" },
            { verbal_explanation: "השורשים הם 5 ומינוס 1. המרחק ביניהם (הבסיס) הוא 6 יחידות.", math_expression: "x = 5 , x = -1" },
            { verbal_explanation: "נבדוק את שטח המשולש שנוצר (בסיס 6, גובה 9). השטח מתאים לנתון, לכן התשובה נכונה.", math_expression: "S = 6 × 9 / 2 = 27" }
        ],
        final_answer: "5"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `בתוך הפרבולה y = -x² + 15 חסום מלבן כך שהבסיס התחתון שלו מונח במלואו על ציר ה-x, ושני הקודקודים העליונים שלו נוגעים בגרף הפרבולה.<br>ידוע שהמלבן החסום הוא למעשה ריבוע מושלם. מהו שטחו של ריבוע זה?<br><br>
        <svg viewBox="0 0 200 160" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#94a3b8" stroke-width="2"/>
            <line x1="100" y1="10" x2="100" y2="150" stroke="#94a3b8" stroke-width="2"/>
            <path d="M 40,150 Q 100,-50 160,150" fill="none" stroke="#ef4444" stroke-width="2"/>
            <rect x="75" y="47" width="50" height="83" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <text x="110" y="85" font-size="12" font-weight="bold">ריבוע</text>
        </svg>`,
        options: ["36 יח\"ר", "25 יח\"ר", "16 יח\"ר", "64 יח\"ר"],
        correctAnswer: 0,
        hint: "הריבוע סימטרי סביב ציר ה-y. סמנו את חצי רוחבו כ-x, ולכן הרוחב הכולל הוא 2x. מכיוון שזה ריבוע, גם הגובה חייב להיות 2x. הציבו ערך זה כ-y במשוואת הפרבולה.",
        solution_steps: [
            { verbal_explanation: "חצי מרוחב הריבוע מונח על ציר ה-x החיובי. נסמן אותו כ-x. הרוחב השלם הוא פעמיים x.", math_expression: "2x" },
            { verbal_explanation: "בגלל תכונות הריבוע, הגובה (y) שווה בדיוק לרוחב.", math_expression: "y = 2x" },
            { verbal_explanation: "הקודקוד העליון נוגע בפרבולה. נציב את הגובה כתחליף ל-y במשוואה.", math_expression: "2x = -x² + 15" },
            { verbal_explanation: "נסדר את המשוואה לצורה קלאסית השווה לאפס.", math_expression: "x² + 2x - 15 = 0" },
            { verbal_explanation: "נפתור. הפתרון החיובי למחצית הרוחב הוא 3. לכן צלע הריבוע כולה שווה ל-6.", math_expression: "x = 3" },
            { verbal_explanation: "נחשב את שטח הריבוע על ידי הכפלת צלע בעצמה.", math_expression: "S = 6 × 6 = 36" }
        ],
        final_answer: "36 יח\"ר"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונות שתי פרבולות שונות החולקות את אותן נקודות חיתוך עם ציר ה-x. <br>הפרבולה הראשונה: y = x² - 4x - 12 <br>הפרבולה השנייה: y = -x² + 4x + 12 <br>חיבור של ארבעת הקודקודים (שני קודקודי הפרבולות יחד עם שני שורשיהן המשותפים) יוצר מעוין. מהו שטחו?",
        options: ["128 יח\"ר", "64 יח\"ר", "256 יח\"ר", "96 יח\"ר"],
        correctAnswer: 0,
        hint: "שטח מעוין הוא מכפלת האלכסונים חלקי שתיים. האלכסון האופקי הוא המרחק בין השורשים המשותפים. האלכסון האנכי הוא המרחק בין נקודות הקודקוד של שתי הפרבולות על ציר הסימטריה המשותף.",
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים המשותפים המרכיבים את האלכסון האופקי.", math_expression: "x² - 4x - 12 = 0" },
            { verbal_explanation: "השורשים הם 6 ומינוס 2. אורך האלכסון האופקי הוא המרחק המוחלט ביניהם.", math_expression: "6 - (-2) = 8" },
            { verbal_explanation: "נמצא את ציר הסימטריה המשותף (ה-x של הקודקודים).", math_expression: "x = -(-4) / 2 = 2" },
            { verbal_explanation: "נציב את ה-x בשתי הפרבולות כדי למצוא את קצוות האלכסון האנכי.", math_expression: "y = -16 , y = 16" },
            { verbal_explanation: "המרחק האנכי בין שני הקודקודים הללו הוא 32 יחידות.", math_expression: "16 - (-16) = 32" },
            { verbal_explanation: "נחשב את שטח המעוין כמחצית ממכפלת שני האלכסונים.", math_expression: "S = 8 × 32 / 2 = 128" }
        ],
        final_answer: "128 יח\"ר"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `נתונה הפרבולה y = -x² + 6x, ונתון הישר y = -x + 6.<br>הישר והפרבולה נחתכים בשתי נקודות. חיבור של שתי נקודות החיתוך הללו יחד עם ראשית הצירים (0,0) יוצר משולש.<br>מהו שטח המשולש שנוצר?`,
        options: ["15 יח\"ר", "21 יח\"ר", "18 יח\"ר", "12 יח\"ר"],
        correctAnswer: 0,
        hint: "השוו את משוואת הישר לפרבולה כדי למצוא את נקודות החיתוך. אחת מהן תהיה מונחת בדיוק על ציר ה-x ותשמש כקצה הבסיס. הנקודה השנייה תספק את הגובה.",
        solution_steps: [
            { verbal_explanation: "נשווה בין משוואת הפרבולה למשוואת הישר כדי למצוא את המפגש ביניהם.", math_expression: "-x² + 6x = -x + 6" },
            { verbal_explanation: "נעביר אגפים ליצירת משוואה ריבועית ונפתור אותה.", math_expression: "x² - 7x + 6 = 0" },
            { verbal_explanation: "פתרונות ה-x הם 1 ו-6.", math_expression: "x = 1 , x = 6" },
            { verbal_explanation: "נציב בישר למציאת הגבהים. הנקודה ב-x=6 נוגעת בציר ה-x (בסיס המשולש מראשית הצירים). הנקודה ב-x=1 מעניקה את הגובה.", math_expression: "y = 0 , y = 5" },
            { verbal_explanation: "נחשב את השטח לפי בסיס (6) וגובה (5).", math_expression: "S = 6 × 5 / 2 = 15" }
        ],
        final_answer: "15 יח\"ר"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `נתונה הפרבולה y = -x² + 10x. <br>ישר אופקי שמשוואתו y = 16 חותך את הפרבולה ויוצר שתי נקודות. <br>חיבור של שתי הנקודות הללו יחד עם קודקוד הפרבולה יוצר משולש.<br>מהו שטחו של המשולש הזה?`,
        options: ["27 יח\"ר", "18 יח\"ר", "36 יח\"ר", "54 יח\"ר"],
        correctAnswer: 0,
        hint: "השוו את הפרבולה ל-16 כדי למצוא את שתי נקודות החיתוך (זה יהיה הבסיס). לאחר מכן מצאו את קודקוד הפרבולה. המרחק האנכי בין הקודקוד לישר (16) הוא גובה המשולש.",
        solution_steps: [
            { verbal_explanation: "נשווה את הפרבולה לגובה הישר כדי למצוא את אורכו של בסיס המשולש האופקי.", math_expression: "-x² + 10x = 16" },
            { verbal_explanation: "נפתור את המשוואה הריבועית שהתקבלה.", math_expression: "x² - 10x + 16 = 0" },
            { verbal_explanation: "הנקודות הן 2 ו-8. המרחק ביניהן מהווה את הבסיס.", math_expression: "8 - 2 = 6" },
            { verbal_explanation: "נמצא את ה-x של קודקוד הפרבולה (אמצע הבסיס) ואת ערך ה-y שלו על ידי הצבה.", math_expression: "x = 5  =>  y = -25 + 50 = 25" },
            { verbal_explanation: "גובה המשולש הוא המרחק משיא הקודקוד ועד לקו הבסיס.", math_expression: "25 - 16 = 9" },
            { verbal_explanation: "נחשב שטח משולש סטנדרטי.", math_expression: "S = 6 × 9 / 2 = 27" }
        ],
        final_answer: "27 יח\"ר"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה הפרבולה y = x² - 8x + 12.<br>ישר עולה עובר במדויק דרך נקודת החיתוך של הפרבולה עם ציר ה-y, ודרך קודקוד הפרבולה. <br>הישר ממשיך לחתוך גם את ציר ה-x. מהו שטח המשולש שנוצר בין הישר ושני הצירים?",
        options: ["18 יח\"ר", "24 יח\"ר", "12 יח\"ר", "36 יח\"ר"],
        correctAnswer: 0,
        hint: "מצאו את נקודת החיתוך עם y. מצאו את קודקוד הפרבולה. כעת, מצאו את שיפוע הישר ואת משוואתו. לאחר מכן, מצאו היכן הישר חותך את ציר x לחשבון הבסיס.",
        solution_steps: [
            { verbal_explanation: "נקודת החיתוך של הפרבולה עם ציר ה-y מתקבלת בהצבת אפס.", math_expression: "x = 0  =>  y = 12" },
            { verbal_explanation: "מיקום הקודקוד מחושב לפי הנוסחה ולאחריו הצבה לפונקציה.", math_expression: "x = 4  =>  y = -4" },
            { verbal_explanation: "נחשב את שיפוע הישר (m) העובר דרך שתי הנקודות.", math_expression: "m = (-4 - 12) / 4 = -4" },
            { verbal_explanation: "משוואת הישר התגלתה. כעת נמצא את חיתוכו עם ציר x (הבסיס).", math_expression: "0 = -4x + 12  =>  x = 3" },
            { verbal_explanation: "המשולש כלוא בין הצירים. בסיסו 3 וגובהו 12. נחשב שטח.", math_expression: "S = 3 × 12 / 2 = 18" }
        ],
        final_answer: "18 יח\"ר"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `נתונה הפרבולה y = -x² + 2x + 15.<br>נבנה טרפז ישר זווית (המונח על צידו) שקודקודיו הם:<br>1. ראשית הצירים.<br>2. נקודת החיתוך עם ציר ה-y.<br>3. קודקוד הפרבולה.<br>4. ההיטל האנכי של הקודקוד על ציר ה-x.<br>מהו שטחו של הטרפז הזה?`,
        options: ["15.5 יח\"ר", "16.0 יח\"ר", "31.0 יח\"ר", "15.0 יח\"ר"],
        correctAnswer: 0,
        hint: "זהו טרפז 'עומד'. הבסיס האנכי הראשון (על ציר y) הוא עד לנקודת החיתוך. הבסיס האנכי השני הוא הגובה של הקודקוד. המרחק האופקי ביניהם (על ציר x) משמש כגובה הטרפז.",
        solution_steps: [
            { verbal_explanation: "הבסיס הראשון של הטרפז מונח על ציר ה-y ואורכו כנקודת החיתוך.", math_expression: "x = 0  =>  y = 15" },
            { verbal_explanation: "המרחק האופקי של הטרפז מחושב כ-x של ציר הסימטריה והוא מהווה את גובה הטרפז המוטה.", math_expression: "x = -2 / -2 = 1" },
            { verbal_explanation: "הבסיס השני (הגדול) הוא הגובה אליו מגיע קודקוד הפרבולה עצמו.", math_expression: "x = 1  =>  y = -1 + 2 + 15 = 16" },
            { verbal_explanation: "נציב את הבסיסים ואת המרחק האופקי בתוך נוסחת שטח טרפז סטנדרטית.", math_expression: "S = (15 + 16) × 1 / 2 = 15.5" }
        ],
        final_answer: "15.5 יח\"ר"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה פונקציה ריבועית. ביצענו חישובים וגילינו את הדברים הבאים:<br>שטח המשולש בין השורשים לחיתוך ציר ה-y הוא 8 יח\"ר.<br>שטח המשולש בין השורשים לקודקוד הוא 16 יח\"ר.<br>מהו היחס בין גובה הקודקוד לגובה נקודת החיתוך עם ציר ה-y?",
        options: ["הקודקוד גבוה פי 2 מנקודת החיתוך עם ציר ה-y", "הקודקוד גבוה פי 4", "הם נמצאים בדיוק באותו הגובה", "הקודקוד נמוך פי 2 מנקודת החיתוך"],
        correctAnswer: 0,
        hint: "לשני המשולשים יש בדיוק את אותו בסיס משותף (המרחק שבין השורשים על ציר ה-x). אם למשולש אחד יש שטח גדול פי 2 מהמשולש השני, זה אומר שהגובה שלו חייב להיות גדול פי 2.",
        solution_steps: [
            { verbal_explanation: "שטח של משולש מוגדר על ידי מכפלת הבסיס בגובה חלקי שתיים.", math_expression: "S = b × h / 2" },
            { verbal_explanation: "לשני המשולשים בבעיה יש בדיוק את אותו הבסיס המונח על ציר ה-x.", math_expression: "b1 = b2" },
            { verbal_explanation: "מכאן ניתן להסיק שהיחס בין השטחים שווה בדיוק ליחס שבין הגבהים.", math_expression: "16 / 8 = 2" },
            { verbal_explanation: "מסקנה מוחלטת: הגובה של הקודקוד גדול פי שתיים מהגובה של נקודת החיתוך עם הציר האנכי.", math_expression: "" }
        ],
        final_answer: "הקודקוד גבוה פי 2 מנקודת החיתוך עם ציר ה-y"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה הפרבולה y = x² - 6x - 7. אנו יוצרים מרובע שקודקודיו הם לפי הסדר הבא: ראשית הצירים, החיתוך עם ציר ה-y (השלילי), קודקוד הפרבולה, והשורש החיובי שלה. מהו שטחו הכולל של מרובע זה?",
        options: ["66.5 יח\"ר", "60.0 יח\"ר", "72.5 יח\"ר", "55.0 יח\"ר"],
        correctAnswer: 0,
        hint: "המרובע אינו צורה תקנית. חתכו אותו בקו מאונך שיורד מהקודקוד אל ציר ה-x. תקבלו טרפז שמאלי (בין ציר ה-y לקודקוד) ומשולש ימני (בין הקודקוד לשורש).",
        solution_steps: [
            { verbal_explanation: "תחילה נאתר את כל הנקודות. החיתוך עם ציר ה-y, הקודקוד, והשורש החיובי.", math_expression: "(0, -7) , (3, -16) , (7, 0)" },
            { verbal_explanation: "נפצל את השטח הכולל בקו האנכי של הקודקוד. נקבל טרפז שמאלי ומשולש ימני.", math_expression: "S = S1 + S2" },
            { verbal_explanation: "נחשב את שטח הטרפז. הבסיסים הם המרחקים האנכיים והגובה הוא המרחק האופקי.", math_expression: "S1 = (7 + 16) × 3 / 2 = 34.5" },
            { verbal_explanation: "נחשב את שטח המשולש שנותר. הבסיס מונח על הקרן האופקית והגובה הוא העומק.", math_expression: "S2 = 4 × 16 / 2 = 32" },
            { verbal_explanation: "נחבר את שני השטחים שחישבנו לקבלת שטח המרובע השלם.", math_expression: "S = 34.5 + 32 = 66.5" }
        ],
        final_answer: "66.5 יח\"ר"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "בתוך הפרבולה y = -2x² + 12x חסום טרפז שווה שוקיים. הבסיס התחתון מונח על ציר ה-x ומחבר את שני שורשי הפרבולה. הבסיס העליון מחבר שתי נקודות על הפרבולה בגובה שבו y = 16. מהו שטח הטרפז?",
        options: ["64 יח\"ר", "48 יח\"ר", "72 יח\"ר", "56 יח\"ר"],
        correctAnswer: 0,
        hint: "הבסיס התחתון הוא המרחק בין שורשי הפרבולה. כדי למצוא את הבסיס העליון, הציבו y=16 בפרבולה ומיצאו את המרחק בין פתרונות ה-x. גובה הטרפז הוא 16.",
        solution_steps: [
            { verbal_explanation: "נמצא את השורשים כדי לקבוע את אורך הבסיס התחתון והגדול.", math_expression: "-2x² + 12x = 0  =>  x = 0 , x = 6" },
            { verbal_explanation: "אורך הבסיס הגדול, המונח על הציר, מתגלה כ-6 יחידות.", math_expression: "6 - 0 = 6" },
            { verbal_explanation: "נציב את הגובה הנתון של הטרפז במשוואת הפרבולה כדי לאתר את קצות הבסיס העליון.", math_expression: "-2x² + 12x = 16" },
            { verbal_explanation: "נחלק בשתיים להקלה, ונפתור לאיתור המרחק המהווה את הבסיס הקטן.", math_expression: "x² - 6x + 8 = 0  =>  x = 2 , x = 4" },
            { verbal_explanation: "נציב את כל הערכים בנוסחת השטח (סכום בסיסים כפול גובה הנתון חלקי שתיים).", math_expression: "S = (6 + 2) × 16 / 2 = 64" }
        ],
        final_answer: "64 יח\"ר"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "בתוך הפרבולה y = -x² + 16 חסום מלבן סימטרי. צלעו התחתונה מונחת על ציר ה-x, וקודקודיו העליונים נוגעים בפרבולה. נתון שגובה המלבן המדויק הוא 7 יחידות. מהו שטחו של המלבן?",
        options: ["42 יח\"ר", "49 יח\"ר", "35 יח\"ר", "28 יח\"ר"],
        correctAnswer: 0,
        hint: "הגובה הוא 7, לכן ערך ה-y של הנקודות הנוגעות הוא 7. הציבו y=7 במשוואת הפרבולה, מצאו את שיעורי ה-x. המרחק ביניהם הוא רוחב המלבן.",
        solution_steps: [
            { verbal_explanation: "גובה המלבן נתון כ-7. נציב נתון זה כגובה הפרבולה כדי למצוא את גבולות הרוחב.", math_expression: "7 = -x² + 16" },
            { verbal_explanation: "נעביר איברים ונפתור למציאת נקודות הקצה של המלבן.", math_expression: "x² = 9  =>  x = 3 , x = -3" },
            { verbal_explanation: "הקודקודים נמצאים במרחקים שווים מהציר. הרוחב הכולל הוא המרחק המוחלט ביניהם.", math_expression: "3 - (-3) = 6" },
            { verbal_explanation: "נכפיל את הרוחב שנמצא בגובה שסופק בנתונים לקבלת השטח.", math_expression: "S = 6 × 7 = 42" }
        ],
        final_answer: "42 יח\"ר"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה הפרבולה y = x² - 10x + 25. ישר אופקי y = 9 חותך אותה בשתי נקודות. חיבור שתי נקודות אלו יחד עם קודקוד הפרבולה יוצר משולש. מהו שטחו?",
        options: ["27 יח\"ר", "18 יח\"ר", "36 יח\"ר", "24 יח\"ר"],
        correctAnswer: 0,
        hint: "המשוואה היא נוסחת כפל מקוצר מושלמת, ולכן הקודקוד מונח בדיוק על ציר ה-x (הגובה שלו הוא 0). גובה המשולש יהיה המרחק מהקודקוד לישר (9). את הבסיס מוצאים על ידי הצבת 9 במשוואה.",
        solution_steps: [
            { verbal_explanation: "המשוואה מורכבת מריבוע של דו-איבר, מה שאומר שהפרבולה משיקה לציר ה-x.", math_expression: "y = (x - 5)²  =>  (5, 0)" },
            { verbal_explanation: "גובה המשולש נמדד מקודקוד זה המונח על הציר, ועד לישר החותך אותו ממעל.", math_expression: "9 - 0 = 9" },
            { verbal_explanation: "נמצא את נקודות החיתוך העליונות למציאת אורך בסיס המשולש.", math_expression: "(x - 5)² = 9" },
            { verbal_explanation: "נוציא שורש ונקבל שתי משוואות לינאריות עבור שני הצדדים.", math_expression: "x - 5 = 3  ,  x - 5 = -3" },
            { verbal_explanation: "הבסיס הוא המרחק בין שתי תוצאות אלו.", math_expression: "x = 8 , x = 2  =>  8 - 2 = 6" },
            { verbal_explanation: "נחשב את השטח בקלות בעזרת הנוסחה למשולש.", math_expression: "S = 6 × 9 / 2 = 27" }
        ],
        final_answer: "27 יח\"ר"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: "נתונה פרבולה: y = a(x - 2)(x - 10) כאשר a שלילי. נתון כי הגובה המקסימלי ביותר (הקודקוד) הוא בדיוק 32. עליכם למצוא את a, ואז לחשב את שטח המשולש שקודקודיו הם נקודת החיתוך עם ציר ה-y, ושני שורשיה על ציר ה-x.",
        options: ["160 יח\"ר", "80 יח\"ר", "120 יח\"ר", "200 יח\"ר"],
        correctAnswer: 0,
        hint: "הקודקוד ממוקם בדיוק באמצע ב-x=6. הציבו x=6 ו-y=32 בפונקציה כדי למצוא את a. לאחר מכן, מצאו את החיתוך עם ציר ה-y (זה הגובה החדש), ובסיס המשולש הוא בין השורשים (2 ו-10).",
        solution_steps: [
            { verbal_explanation: "ציר הסימטריה (עליו יושב הקודקוד) ממוקם תמיד באמצע שבין שני השורשים הנתונים בנוסחה.", math_expression: "x = (2 + 10) / 2 = 6" },
            { verbal_explanation: "נציב את נתוני הקודקוד (גובה 32) כדי למצוא את המקדם של הפונקציה.", math_expression: "32 = a(6 - 2)(6 - 10)" },
            { verbal_explanation: "נחלץ את המקדם.", math_expression: "32 = a(4)(-4)  =>  a = -2" },
            { verbal_explanation: "המשוואה כעת מלאה. נמצא את נקודת החיתוך עם ציר ה-y (נציב x=0).", math_expression: "x = 0  =>  y = -2(-2)(-10) = -40" },
            { verbal_explanation: "המשולש המבוקש מורכב מבסיס על הציר (בין 2 ל-10) וגובה שהוא נקודת החיתוך שמצאנו הרגע.", math_expression: "10 - 2 = 8" },
            { verbal_explanation: "נחשב את השטח השלם של המשולש התחתון הרחב.", math_expression: "S = 8 × 40 / 2 = 160" }
        ],
        final_answer: "160 יח\"ר"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "פונקציות (קווית, ריבועית וכללית)",
        subTopic: "פרבולות ושטחים",
        question: `שער כניסה למפעל בנוי בצורת פרבולה: y = -0.5x² + 18. הקרקע השטוחה מהווה את ציר ה-x.<br>משאית מלבנית שרוחבה 8 מטרים מעוניינת לעבור באמצע השער במדויק.<br>מהו הגובה המקסימלי המותר למשאית כדי שתעבור מבלי שפינותיה יתקעו בתקרה?`,
        options: ["10 מטרים", "8 מטרים", "14 מטרים", "12 מטרים"],
        correctAnswer: 0,
        hint: "המשאית נוסעת באמצע, כלומר מרחבה מתפרס ממינוס 4 ועד פלוס 4 (סה\"כ רוחב 8). הציבו את נקודת הקצה הפגיעה ביותר (x=4) במשוואת השער כדי לבדוק מהו הגובה בנקודה הקריטית הזו.",
        solution_steps: [
            { verbal_explanation: "רוחב המשאית מתחלק שווה בשווה סביב ציר ה-y המשמש כמרכז השער. המשאית תתפרס על פני הציר האופקי.", math_expression: "x = 4 , x = -4" },
            { verbal_explanation: "הגובה המקסימלי מוגבל על ידי הנקודה הנמוכה ביותר של הקשת מעל פינת המשאית. נבדוק גובה זה.", math_expression: "x = 4" },
            { verbal_explanation: "נציב את הנתון אל תוך משוואת הפרבולה.", math_expression: "y = -0.5(4²) + 18" },
            { verbal_explanation: "נחשב את ערך המשוואה.", math_expression: "y = -8 + 18 = 10" },
            { verbal_explanation: "כל משאית הגבוהה מעשרה מטרים, הפינה העליונה שלה תתנגש במעטפת השער המקושתת.", math_expression: "h = 10" }
        ],
        final_answer: "10 מטרים"
    }
];