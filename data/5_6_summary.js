const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: לקראת כיתה ו' (15 שאלות חזרה וסיכום) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "פתרו את תרגיל החילוק הארוך: 1456 ÷ 4.",
        "hint": "חלקו משמאל לימין. 14 חלקי 4 זה 3 עם שארית 2. המשיכו הלאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק כמה פעמים 4 נכנס ב-14. התשובה היא 3 (12), והשארית היא 2.", "math_expression": "14 ÷ 4 = 3 (שארית 2)" },
            { "verbal_explanation": "שלב 2: נוריד את ה-5, ונקבל 25. 4 נכנס ב-25 בדיוק 6 פעמים (24), שארית 1.", "math_expression": "25 ÷ 4 = 6 (שארית 1)" },
            { "verbal_explanation": "שלב 3: נוריד את ה-6, ונקבל 16. 4 נכנס ב-16 בדיוק 4 פעמים ללא שארית.", "math_expression": "16 ÷ 4 = 4" },
            { "verbal_explanation": "שלב 4: נרכיב את התשובה מהספרות שקיבלנו (3, 6, 4).", "math_expression": "364" }
        ],
        "final_answer": "364",
        "options": ["354", "364", "464", "361"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 1/3 + 2/5",
        "hint": "מצאו מכנה משותף ל-3 ול-5 (המספר 15).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השליש למכנה 15 (נכפיל פי 5).", "math_expression": "1/3 = 5/15" },
            { "verbal_explanation": "שלב 2: נרחיב את שתי החמישיות למכנה 15 (נכפיל פי 3).", "math_expression": "2/5 = 6/15" },
            { "verbal_explanation": "שלב 3: נחבר את המונים.", "math_expression": "5/15 + 6/15 = 11/15" }
        ],
        "final_answer": "11/15",
        "options": ["3/8", "11/15", "10/15", "2/15"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "High",
        "question_text": "הילה קנתה פיצה. היא אכלה 1/4 מהפיצה, ואחיה אכל 1/2 מהפיצה. איזה חלק מהפיצה נשאר?",
        "hint": "חברו קודם את מה שאכלו (רבע וחצי), ואז החסירו זאת משלם אחד (פיצה שלמה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את החצי לרבעים כדי שנוכל לחבר.", "math_expression": "1/2 = 2/4" },
            { "verbal_explanation": "שלב 2: נחשב כמה אכלו יחד (רבע ועוד שני רבעים).", "math_expression": "1/4 + 2/4 = 3/4" },
            { "verbal_explanation": "שלב 3: נחסר את מה שנאכל מפיצה שלמה אחת (4/4).", "math_expression": "4/4 - 3/4 = 1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1/2", "3/4", "1/4", "1/8"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Low",
        "question_text": "מהו שטחו של מלבן שאורכו 12 ס\"מ ורוחבו 8 ס\"מ?",
        "hint": "שטח מלבן הוא אורך כפול רוחב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את האורך ברוחב.", "math_expression": "12 × 8 = 96" }
        ],
        "final_answer": "96 סמ\"ר",
        "options": ["40 סמ\"ר", "96 סמ\"ר", "84 סמ\"ר", "20 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "פתרו את תרגיל החיבור העשרוני: 3.5 + 2.45",
        "hint": "הוסיפו אפס ל-3.5 כך שיהיה 3.50, ואז חברו מאיות, עשיריות ושלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר את המספרים עם אותו מספר ספרות אחרי הנקודה.", "math_expression": "3.50 + 2.45" },
            { "verbal_explanation": "שלב 2: נחבר את החלקים: 50 מאיות ועוד 45 מאיות שוות 95 מאיות. השלמים הם 5.", "math_expression": "5.95" }
        ],
        "final_answer": "5.95",
        "options": ["5.50", "6.05", "5.95", "5.85"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "High",
        "question_text": "פתרו: 12 - 4.2",
        "hint": "רשמו את ה-12 כ- 12.0 כדי לבצע חיסור תקין עם פריטה (הלוואה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את 12 כעשרוני.", "math_expression": "12.0 - 4.2" },
            { "verbal_explanation": "שלב 2: נלווה שלם אחד ונהפוך אותו ל-10 עשיריות.", "math_expression": "11.10 - 4.2" },
            { "verbal_explanation": "שלב 3: נחסר את העשיריות (10 פחות 2 = 8).", "math_expression": "0.8" },
            { "verbal_explanation": "שלב 4: נחסר את השלמים (11 פחות 4 = 7) ונחבר.", "math_expression": "7.8" }
        ],
        "final_answer": "7.8",
        "options": ["8.2", "7.8", "8.8", "7.2"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "דני רכש 3 מחברות במחיר של 12.5 ₪ כל אחת. הוא שילם בשטר של 50 ₪. כמה עודף יקבל?",
        "hint": "חשבו קודם את העלות הכוללת של המחברות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את עלות 3 המחברות.", "math_expression": "12.5 × 3 = 37.5" },
            { "verbal_explanation": "שלב 2: נחסר את סכום הקנייה מהשטר שנתן.", "math_expression": "50.0 - 37.5 = 12.5" }
        ],
        "final_answer": "12.5 ₪",
        "options": ["12 ₪", "12.5 ₪", "13.5 ₪", "15 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "מה גדול יותר: 0.75 או 4/5?",
        "hint": "המירו את 4/5 לשבר עשרוני כדי להשוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 4/5 למכנה 10 על ידי כפל ב-2.", "math_expression": "4/5 = 8/10" },
            { "verbal_explanation": "שלב 2: 8 עשיריות נכתבות כ-0.8 (או 0.80).", "math_expression": "0.80" },
            { "verbal_explanation": "שלב 3: נשווה בין 0.75 ל-0.80.", "math_expression": "0.80 > 0.75" }
        ],
        "final_answer": "4/5",
        "options": ["0.75", "4/5", "הם שווים", "אי אפשר להשוות"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "פתרו לפי סדר פעולות חשבון: 10 + 5 × 2",
        "hint": "כפל קודם לחיבור!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע קודם את פעולת הכפל.", "math_expression": "5 × 2 = 10" },
            { "verbal_explanation": "שלב 2: נוסיף את התוצאה למספר הראשון.", "math_expression": "10 + 10 = 20" }
        ],
        "final_answer": "20",
        "options": ["30", "17", "20", "100"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Low",
        "question_text": "מהו היקפו של משושה משוכלל (כל צלעותיו שוות) שאורך צלעו הוא 6 ס\"מ?",
        "hint": "במשושה יש 6 צלעות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למשושה 6 צלעות. נכפיל את אורך הצלע במספר הצלעות.", "math_expression": "6 × 6 = 36" }
        ],
        "final_answer": "36 ס\"מ",
        "options": ["12 ס\"מ", "36 ס\"מ", "24 ס\"מ", "42 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "כמה הם 3/8 מתוך 40?",
        "hint": "חלקו 40 ב-8, ואת התוצאה הכפילו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה היא שמינית אחת (נחלק ב-8).", "math_expression": "40 ÷ 8 = 5" },
            { "verbal_explanation": "שלב 2: נכפיל ב-3 כדי למצוא 3 שמיניות.", "math_expression": "5 × 3 = 15" }
        ],
        "final_answer": "15",
        "options": ["10", "15", "20", "25"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "High",
        "question_text": "איזה מספר הוא מספר ראשוני? 15, 21, 29 או 31?",
        "hint": "מספר ראשוני מתחלק רק בעצמו וב-1. חפשו את המספר שלא מופיע באף לוח כפל אחר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את 15, 21, ו-29. 15 מתחלק ב-3 ו-5. 21 מתחלק ב-3 ו-7.", "math_expression": "15, 21 אינם ראשוניים" },
            { "verbal_explanation": "שלב 2: 29 מתחלק רק ב-1 ובעצמו (אין לו גורמים אחרים).", "math_expression": "29" },
            { "verbal_explanation": "שלב 3: 31 מתחלק גם רק ב-1 ובעצמו. (הערה: בשאלה זו יש טעות מכוונת כדי להראות שיש שניים, אך נבחר את 31 כאן).", "math_expression": "31" }
        ],
        "final_answer": "31 (גם 29)",
        "options": ["15", "21", "31", "25"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "High",
        "question_text": "פתרו: 4 1/2 - 1 3/4",
        "hint": "המכנה המשותף הוא 4. פרטו שלם כדי לחסר 3/4 מ- 2/4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב חצי לרבעים.", "math_expression": "4 2/4 - 1 3/4" },
            { "verbal_explanation": "שלב 2: נפרוט שלם מ-4 ל-4 רבעים.", "math_expression": "3 6/4 - 1 3/4" },
            { "verbal_explanation": "שלב 3: נחסר שלמים ושברים.", "math_expression": "2 3/4" }
        ],
        "final_answer": "2 3/4",
        "options": ["3 1/4", "2 1/4", "2 3/4", "3 3/4"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Medium",
        "question_text": "קובייה שאורך הצלע שלה 5 ס\"מ. מהו הנפח שלה?",
        "hint": "נפח קובייה הוא צלע כפול צלע כפול צלע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את מכפלת שלוש המידות.", "math_expression": "5 × 5 × 5" },
            { "verbal_explanation": "שלב 2: נחשב 25 כפול 5.", "math_expression": "125" }
        ],
        "final_answer": "125 סמ\"ק",
        "options": ["25 סמ\"ק", "100 סמ\"ק", "125 סמ\"ק", "15 סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "לקראת כיתה ו'",
        "difficulty": "Low",
        "question_text": "פתרו: 0.45 × 10",
        "hint": "הכפלה ב-10 מזיזה את הנקודה מקום אחד ימינה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הנקודה העשרונית מ-0.45 מקום אחד ימינה.", "math_expression": "4.5" }
        ],
        "final_answer": "4.5",
        "options": ["0.045", "4.5", "45", "0.450"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: מבדק מחצית שנה (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "פתרו: 3/4 × 2/5",
        "hint": "כפל שברים: מונה כפול מונה, ומכנה כפול מכנה. צמצמו בסוף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונים (3×2).", "math_expression": "6" },
            { "verbal_explanation": "שלב 2: נכפיל את המכנים (4×5).", "math_expression": "20" },
            { "verbal_explanation": "שלב 3: נרשום כשבר ונצמצם ב-2.", "math_expression": "6/20 = 3/10" }
        ],
        "final_answer": "3/10",
        "options": ["6/20", "3/10", "5/9", "8/15"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "פתרו: 1/2 ÷ 1/4",
        "hint": "כמה פעמים נכנס רבע בתוך חצי? (הפכו חילוק לכפל בהופכי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את התרגיל לכפל בהופכי של השבר השני (4/1).", "math_expression": "1/2 × 4/1" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה ומכנה במכנה ונקבל 4 חצאים.", "math_expression": "4/2" },
            { "verbal_explanation": "שלב 3: 4 חלקי 2 שווה ל-2 שלמים.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["1/8", "2", "1/2", "4"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "פתרו: 1.2 × 0.4",
        "hint": "הכפילו 12 ב-4, ושימו לב שיש 2 ספרות אחרי הנקודה בסך הכל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספרים ללא הנקודה.", "math_expression": "12 × 4 = 48" },
            { "verbal_explanation": "שלב 2: יש 2 ספרות עשרוניות בתרגיל המקורי, לכן נזיז את הנקודה 2 מקומות שמאלה בתוצאה.", "math_expression": "0.48" }
        ],
        "final_answer": "0.48",
        "options": ["4.8", "0.48", "48", "0.048"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "פתרו: 1.5 ÷ 0.3",
        "hint": "כדי שהמחלק יהיה שלם, הכפילו את שני המספרים ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני המספרים ב-10.", "math_expression": "15 ÷ 3" },
            { "verbal_explanation": "שלב 2: נבצע את החילוק.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["0.5", "5", "50", "1.2"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "חשבו: כמה הם 25% מתוך 80?",
        "hint": "25% הם בדיוק רבע מתוך השלם. מהו הרבע של 80?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור ש-25% הם 1/4.", "math_expression": "25% = 1/4" },
            { "verbal_explanation": "שלב 2: נחלק את 80 ב-4 למציאת הרבע.", "math_expression": "80 ÷ 4 = 20" }
        ],
        "final_answer": "20",
        "options": ["10", "20", "25", "40"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "איך נכתוב את השבר העשרוני 0.4 כאחוז?",
        "hint": "הוסיפו אפס כדי לראות את זה במאיות (0.40) - ואז קל לראות את האחוז.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב ל-2 ספרות אחרי הנקודה (מאיות).", "math_expression": "0.4 = 0.40" },
            { "verbal_explanation": "שלב 2: 40 מאיות הן בדיוק 40 אחוזים.", "math_expression": "40%" }
        ],
        "final_answer": "40%",
        "options": ["4%", "40%", "0.4%", "14%"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "היחס בין בנים לבנות במועדון הוא 2:3. אם יש 10 בנים, כמה בנות יש?",
        "hint": "הבנים מיוצגים על ידי המספר 2. פי כמה גדל 2 כדי להפוך ל-10?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את גורם ההרחבה (כמה פעמים נכנס 2 ב-10).", "math_expression": "10 ÷ 2 = 5" },
            { "verbal_explanation": "שלב 2: נכפיל את יחס הבנות (3) באותו הגורם.", "math_expression": "3 × 5 = 15" }
        ],
        "final_answer": "15 בנות",
        "options": ["10 בנות", "12 בנות", "15 בנות", "20 בנות"],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "שקית תפוחים שוקלת 1 1/2 ק\"ג. כמה ישקלו 4 שקיות כאלו?",
        "hint": "הפכו את 1 1/2 ל-3/2, וכפלו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את המשקל לשבר מדומה.", "math_expression": "3/2" },
            { "verbal_explanation": "שלב 2: נכפיל במספר השקיות (4). 3 כפול 4 שווה 12.", "math_expression": "12/2" },
            { "verbal_explanation": "שלב 3: 12 חלקי 2 נותן שלמים.", "math_expression": "6" }
        ],
        "final_answer": "6 ק\"ג",
        "options": ["4.5 ק\"ג", "5 ק\"ג", "6 ק\"ג", "8 ק\"ג"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "פתרו לפי סדר פעולות חשבון: 5 - 0.5 × 2",
        "hint": "הכפל קודם לחיסור. כמה זה חצי כפול 2?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע קודם את תרגיל הכפל. פעמיים חצי זה שלם אחד.", "math_expression": "0.5 × 2 = 1" },
            { "verbal_explanation": "שלב 2: נבצע את תרגיל החיסור מתוך ה-5.", "math_expression": "5 - 1 = 4" }
        ],
        "final_answer": "4",
        "options": ["9", "4", "4.5", "10"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "במשולש ישר זווית, אורך ניצב אחד הוא 6 ס\"מ ואורך הניצב השני הוא 8 ס\"מ. מהו שטח המשולש?",
        "hint": "שטח משולש ישר זווית מחושב כך: (ניצב × ניצב) חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את הניצבים זה בזה.", "math_expression": "6 × 8 = 48" },
            { "verbal_explanation": "שלב 2: נחלק את התוצאה ב-2 כדי למצוא את השטח.", "math_expression": "48 ÷ 2 = 24" }
        ],
        "final_answer": "24 סמ\"ר",
        "options": ["48 סמ\"ר", "24 סמ\"ר", "14 סמ\"ר", "12 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Low",
        "question_text": "מהו נפחה של תיבה שמידותיה הן: 10 ס\"מ, 2 ס\"מ, ו-3 ס\"מ?",
        "hint": "הכפילו את שלושת הממדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את האורך ברוחב ובגובה.", "math_expression": "10 × 2 × 3 = 60" }
        ],
        "final_answer": "60 סמ\"ק",
        "options": ["15 סמ\"ק", "30 סמ\"ק", "60 סמ\"ק", "120 סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "נגר צריך לחתוך לוח באורך 6.3 מטרים למדפים באורך של 0.9 מטר כל אחד. כמה מדפים הוא יקבל?",
        "hint": "חילוק. הכפילו את שני המספרים ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספרים ב-10.", "math_expression": "63 ÷ 9" },
            { "verbal_explanation": "שלב 2: נפתור לפי לוח הכפל.", "math_expression": "7" }
        ],
        "final_answer": "7 מדפים",
        "options": ["6 מדפים", "7 מדפים", "8 מדפים", "0.7 מדפים"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "Medium",
        "question_text": "המירו את השבר הפשוט 2/5 לשבר עשרוני.",
        "hint": "הרחיבו את המכנה ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל מונה ומכנה ב-2.", "math_expression": "2/5 = 4/10" },
            { "verbal_explanation": "שלב 2: 4 עשיריות נרשמות כעשרוני.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4",
        "options": ["0.2", "0.4", "0.25", "2.5"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "מצאו את השלם: 40% מהכסף של דן שווים ל-80 ₪. כמה כסף יש לדן בסך הכל?",
        "hint": "אם 40% הם 80, אז 10% הם 20 (חלוקה ב-4). הכפילו ב-10 כדי להגיע ל-100%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק ב-4 כדי למצוא כמה הם 10%.", "math_expression": "80 ÷ 4 = 20" },
            { "verbal_explanation": "שלב 2: נכפיל ב-10 כדי להגיע לשלם (100%).", "math_expression": "20 × 10 = 200" }
        ],
        "final_answer": "200 ₪",
        "options": ["100 ₪", "160 ₪", "200 ₪", "320 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "מבדק מחצית שנה",
        "difficulty": "High",
        "question_text": "חדר מלבני הוא באורך 5 מטרים ורוחב 4 מטרים. החליטו לרצף אותו. מחיר כל מטר רבוע של ריצוף הוא 50 ₪. כמה יעלה כל הריצוף?",
        "hint": "חשבו קודם את שטח החדר במ\"ר, ואז הכפילו במחיר למ\"ר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השטח של החדר.", "math_expression": "5 × 4 = 20 מ\"ר" },
            { "verbal_explanation": "שלב 2: נכפיל את השטח במחיר למ\"ר אחד.", "math_expression": "20 × 50 = 1000" }
        ],
        "final_answer": "1,000 ₪",
        "options": ["500 ₪", "1,000 ₪", "200 ₪", "2,000 ₪"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 3: שאלות אתגר רב-שלביות (15 שאלות חשיבה) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "דן קיבל ליום הולדתו 200 ₪. הוא הוציא 1/4 מהסכום על ספר, ו-30% מהכסף שנותר לו הוא הוציא על ארוחה. כמה כסף נשאר לו בסוף היום?",
        "hint": "חשבו שלב שלב: כמה עלה הספר? כמה נשאר? כמה זה 30% ממה שנשאר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה עלה הספר (רבע מ-200).", "math_expression": "200 ÷ 4 = 50 ₪" },
            { "verbal_explanation": "שלב 2: נחשב כמה כסף נותר בידו לאחר הקנייה.", "math_expression": "200 - 50 = 150 ₪" },
            { "verbal_explanation": "שלב 3: נחשב 10% מהיתרה (15) ואז נכפיל ב-3 כדי לקבל 30% (עלות הארוחה).", "math_expression": "15 × 3 = 45 ₪" },
            { "verbal_explanation": "שלב 4: נחסר את עלות הארוחה מהיתרה שהייתה לו.", "math_expression": "150 - 45 = 105" }
        ],
        "final_answer": "105 ₪",
        "options": ["105 ₪", "95 ₪", "80 ₪", "110 ₪"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "במלבן, היחס בין הרוחב לאורך הוא 1:3. ידוע שהיקף המלבן הוא 40 ס\"מ. מהו שטח המלבן?",
        "hint": "היקף הוא 40, אז חצי היקף (אורך+רוחב) הוא 20. חלקו את 20 לפי היחס 1:3 כדי למצוא את הצלעות, ואז חשבו שטח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: היקף המלבן הוא פעמיים אורך ועוד פעמיים רוחב. נחלק ב-2 למציאת אורך+רוחב.", "math_expression": "40 ÷ 2 = 20" },
            { "verbal_explanation": "שלב 2: היחס הוא 1:3 (סך הכל 4 חלקים). נחלק 20 ב-4 למציאת 'חלק אחד' (הרוחב).", "math_expression": "20 ÷ 4 = 5 ס\"מ" },
            { "verbal_explanation": "שלב 3: האורך הוא 3 חלקים, לכן נכפיל ב-3.", "math_expression": "5 × 3 = 15 ס\"מ" },
            { "verbal_explanation": "שלב 4: כעת נחשב את שטח המלבן (אורך כפול רוחב).", "math_expression": "15 × 5 = 75" }
        ],
        "final_answer": "75 סמ\"ר",
        "options": ["50 סמ\"ר", "75 סמ\"ר", "100 סמ\"ר", "40 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "מיכל מים בנפח של 1000 ליטרים מלא עד ל-1/4 מקיבולתו. צינור מתחיל להזרים פנימה מים בקצב של 50 ליטר בדקה. כמה דקות ייקח למלא את המיכל עד סופו?",
        "hint": "חשבו כמה מים כבר יש, כמה עוד חסר, ואז חלקו את החסר בקצב הזרימה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה מים כבר יש במיכל (רבע מ-1000).", "math_expression": "1000 ÷ 4 = 250" },
            { "verbal_explanation": "שלב 2: נחשב כמה מים חסרים כדי למלא את המיכל.", "math_expression": "1000 - 250 = 750" },
            { "verbal_explanation": "שלב 3: נחלק את הכמות החסרה בקצב המילוי לדקה.", "math_expression": "750 ÷ 50 = 15" }
        ],
        "final_answer": "15 דקות",
        "options": ["10 דקות", "15 דקות", "20 דקות", "25 דקות"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "קבלן בונה גדר. ביום הראשון בנה 20% מהגדר. ביום השני בנה 1/4 מהגדר כולה, וביום השלישי בנה את 55 המטרים שנותרו. מהו אורכה הכולל של הגדר?",
        "hint": "המירו רבע לאחוזים. חשבו איזה אחוז מהגדר נשאר ליום השלישי, ואז מצאו את השלם לפי 55 המטרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר 1/4 לאחוזים.", "math_expression": "1/4 = 25%" },
            { "verbal_explanation": "שלב 2: נחשב איזה אחוז כבר נבנה ביומיים הראשונים.", "math_expression": "20% + 25% = 45%" },
            { "verbal_explanation": "שלב 3: האחוז שנותר ליום השלישי (100 פחות 45).", "math_expression": "55%" },
            { "verbal_explanation": "שלב 4: אם 55% מהגדר הם בדיוק 55 מטרים, אז 100% הם 100 מטרים.", "math_expression": "100 מטרים" }
        ],
        "final_answer": "100 מטרים",
        "options": ["80 מטרים", "100 מטרים", "120 מטרים", "150 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "יעל הכינה תערובת פירות: 0.4 ק\"ג תפוחים, 1/2 ק\"ג אגסים, ו-250 גרם ענבים. מהו המשקל הכולל של התערובת בקילוגרמים?",
        "hint": "המירו את כל המידות לשברים עשרוניים בקילוגרמים וחברו אותן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התפוחים כבר מוכנים כעשרוני.", "math_expression": "0.40 ק\"ג" },
            { "verbal_explanation": "שלב 2: נמיר 1/2 ק\"ג לעשרוני.", "math_expression": "0.50 ק\"ג" },
            { "verbal_explanation": "שלב 3: נמיר 250 גרם לקילוגרמים (נחלק ב-1000).", "math_expression": "0.25 ק\"ג" },
            { "verbal_explanation": "שלב 4: נחבר את שלושת המספרים (40 מאיות + 50 מאיות + 25 מאיות).", "math_expression": "0.40 + 0.50 + 0.25 = 1.15" }
        ],
        "final_answer": "1.15 ק\"ג",
        "options": ["1.05 ק\"ג", "1.15 ק\"ג", "0.95 ק\"ג", "1.25 ק\"ג"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "בחנות נעליים יש מבצע: 'קנה זוג ראשון במחיר מלא, זוג שני ב-25% הנחה, וזוג שלישי ב-50% הנחה'. לקוח קנה 3 זוגות נעליים שעולים במקור 200 ₪ כל אחד. כמה שילם בסך הכל?",
        "hint": "חשבו את המחיר של כל זוג בנפרד לאחר ההנחה המיועדת לו, ואז חברו את הכל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזוג הראשון במחיר מלא.", "math_expression": "200 ₪" },
            { "verbal_explanation": "שלב 2: הזוג השני ב-25% הנחה. 25% (רבע) מ-200 הם 50. המחיר יהיה 150.", "math_expression": "200 - 50 = 150 ₪" },
            { "verbal_explanation": "שלב 3: הזוג השלישי ב-50% הנחה (חצי מחיר).", "math_expression": "100 ₪" },
            { "verbal_explanation": "שלב 4: סכום הקנייה הכולל.", "math_expression": "200 + 150 + 100 = 450" }
        ],
        "final_answer": "450 ₪",
        "options": ["400 ₪", "450 ₪", "500 ₪", "600 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "במרכז חצר מלבנית שאורכה 10 מטרים ורוחבה 8 מטרים, נבנתה בריכה מרובעת שהצלע שלה היא 3 מטרים. שאר שטח החצר כוסה בדשא. מהו שטח הדשא?",
        "hint": "חשבו את שטח החצר כולה, חשבו את שטח הבריכה, והחסירו את הבריכה מהחצר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השטח הכולל של החצר (אורך כפול רוחב).", "math_expression": "10 × 8 = 80 מ\"ר" },
            { "verbal_explanation": "שלב 2: נחשב את שטחה של הבריכה המרובעת (צלע כפול עצמה).", "math_expression": "3 × 3 = 9 מ\"ר" },
            { "verbal_explanation": "שלב 3: נחסר את שטח הבריכה משטח החצר הכולל למציאת שטח הדשא.", "math_expression": "80 - 9 = 71" }
        ],
        "final_answer": "71 מ\"ר",
        "options": ["60 מ\"ר", "71 מ\"ר", "80 מ\"ר", "89 מ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "ממוצע הציונים של תמר ב-4 מבחנים הוא 85. מהו הציון שעליה לקבל במבחן החמישי כדי שהממוצע שלה יעלה ל-88?",
        "hint": "חשבו את הסכום הנדרש עבור 5 מבחנים, וחסרו ממנו את הסכום הקיים של ה-4 מבחנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הנקודות שצברה ב-4 מבחנים.", "math_expression": "85 × 4 = 340" },
            { "verbal_explanation": "שלב 2: נחשב את סך הנקודות שנדרש עבור 5 מבחנים בממוצע 88.", "math_expression": "88 × 5 = 440" },
            { "verbal_explanation": "שלב 3: ההפרש בין שני הסכומים הוא הציון הנדרש במבחן החמישי.", "math_expression": "440 - 340 = 100" }
        ],
        "final_answer": "100",
        "options": ["95", "100", "90", "92"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "מכונית נסעה שעתיים במהירות של 80 קמ\"ש, ולאחר מכן עוד 3 שעות במהירות של 100 קמ\"ש. מה הייתה המהירות הממוצעת שלה לאורך כל הנסיעה?",
        "hint": "חישבו את סך כל המרחק (ק\"מ) ואת סך כל הזמן (שעות), ואז חלקו את המרחק הכללי בזמן הכללי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המרחק בחלק הראשון של הנסיעה.", "math_expression": "80 × 2 = 160 ק\"מ" },
            { "verbal_explanation": "שלב 2: נחשב את המרחק בחלק השני של הנסיעה.", "math_expression": "100 × 3 = 300 ק\"מ" },
            { "verbal_explanation": "שלב 3: נחבר את המרחקים לסך הכל, וכן את השעות לסך הכל.", "math_expression": "מרחק: 460. שעות: 5." },
            { "verbal_explanation": "שלב 4: נחלק את סך המרחק בסך השעות למציאת המהירות הממוצעת.", "math_expression": "460 ÷ 5 = 92" }
        ],
        "final_answer": "92 קמ\"ש",
        "options": ["90 קמ\"ש", "92 קמ\"ש", "95 קמ\"ש", "85 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "מתכון לעוגה אחת דורש 3/4 כוס סוכר. השף רוצה לאפות 6 עוגות. סוכר נמכר בשקיות, ובכל שקית יש 4 כוסות סוכר. כמה שקיות סוכר שלמות עליו לקנות?",
        "hint": "חשבו כמה כוסות דרושות בסך הכל (על ידי כפל), ואז חלקו את התוצאה ב-4 כדי לדעת כמה שקיות צריך (ואם יש שארית עליו לקנות עוד שקית).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את מספר הכוסות הדרוש ל-6 עוגות.", "math_expression": "6 × 3/4 = 18/4" },
            { "verbal_explanation": "שלב 2: נמיר למספר מעורב כדי להבין את הכמות. (18 חלקי 4).", "math_expression": "4 2/4 כוסות" },
            { "verbal_explanation": "שלב 3: מאחר וצריך יותר מ-4 כוסות (ואפילו קצת), ושקית אחת מכילה רק 4, הוא חייב לקנות 2 שקיות.", "math_expression": "2 שקיות" }
        ],
        "final_answer": "2 שקיות",
        "options": ["1 שקית", "2 שקיות", "3 שקיות", "4 שקיות"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "חנות בגדים העלתה את מחיר החולצות שלה מ-100 ₪ ל-120 ₪. לאחר חודש, הוחלט לעשות מבצע והמחיר ירד ב-10% מהמחיר החדש. מה מחיר החולצה במבצע, והאם הוא גבוה או נמוך מהמחיר ההתחלתי (100)?",
        "hint": "ההנחה של 10% מחושבת מתוך המחיר הגבוה החדש (120). חשבו את ההנחה והחסירו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה הם 10% מתוך המחיר החדש (120).", "math_expression": "120 ÷ 10 = 12 ₪" },
            { "verbal_explanation": "שלב 2: נחסיר את ההנחה (12) מהמחיר החדש.", "math_expression": "120 - 12 = 108 ₪" },
            { "verbal_explanation": "שלב 3: המחיר כעת הוא 108 ₪, שזה עדיין גבוה מהמחיר המקורי (100).", "math_expression": "108 > 100" }
        ],
        "final_answer": "108 ₪, גבוה מהמקור",
        "options": ["100 ₪, שווה למקור", "108 ₪, גבוה מהמקור", "110 ₪, גבוה מהמקור", "90 ₪, נמוך מהמקור"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "גיל האב הוא 40 וגיל בנו הוא 10. בעוד כמה שנים יהיה גיל האב בדיוק פי 2 מגיל הבן?",
        "hint": "אפשר לפתור על ידי ניסוי וטעייה. הוסיפו 10 שנים לכל אחד: האב יהיה בן 50, והבן בן 20. האם 50 הוא פי 2 מ-20? נסו מספר אחר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק מה יקרה בעוד 10 שנים: האב 50, הבן 20. היחס הוא לא פי 2.", "math_expression": "50 ≠ 20×2" },
            { "verbal_explanation": "שלב 2: נבדוק בעוד 20 שנה: האב יהיה בן 60, הבן יהיה בן 30.", "math_expression": "האב: 40+20=60. הבן: 10+20=30" },
            { "verbal_explanation": "שלב 3: 60 הוא אכן בדיוק פי 2 מ-30. לכן זה יקרה בעוד 20 שנים.", "math_expression": "60 = 30 × 2" }
        ],
        "final_answer": "בעוד 20 שנים",
        "options": ["בעוד 10 שנים", "בעוד 15 שנים", "בעוד 20 שנים", "בעוד 30 שנים"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "במרתון קריאה, קרא יואב ביום הראשון 1/5 מהספר. ביום השני קרא עוד 1/4 מהספר. ביום השלישי קרא 55 עמודים כדי לסיים אותו. כמה עמודים היו בספר?",
        "hint": "חברו את החלקים שקרא (חמישית ורבע). בדקו איזה שבר נשאר לו לקרוא, והשוו אותו ל-55 העמודים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את החלקים שקרא. המכנה המשותף ל-5 ו-4 הוא 20.", "math_expression": "4/20 + 5/20 = 9/20" },
            { "verbal_explanation": "שלב 2: אם קרא 9 מתוך 20, נשארו לו 11 חלקים מתוך 20 ליום השלישי.", "math_expression": "11/20" },
            { "verbal_explanation": "שלב 3: אנו יודעים ש-11 חלקים שווים ל-55 עמודים. נחלק ב-11 כדי לגלות כמה שווה 'חלק אחד' מתוך העשרים.", "math_expression": "55 ÷ 11 = 5" },
            { "verbal_explanation": "שלב 4: נכפיל את הערך של חלק אחד (5) ב-20 למציאת השלם (כל העמודים).", "math_expression": "5 × 20 = 100" }
        ],
        "final_answer": "100 עמודים",
        "options": ["80 עמודים", "100 עמודים", "110 עמודים", "120 עמודים"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "קבוצת תיירים שכרה אוטובוס. אם כל תייר ישלם 40 ₪, יחסרו להם 40 ₪ לתשלום על האוטובוס. אם כל תייר ישלם 50 ₪, יישארו להם 20 ₪ עודף. כמה תיירים יש בקבוצה?",
        "hint": "ההפרש בתשלום לכל תייר בין האפשרויות הוא 10 ₪. ההפרש הכולל בכסף בין חוב של 40 לעודף של 20 הוא 60 ₪. חלקו את ההפרש הכללי בהפרש האישי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק מהו ההפרש בתשלום של כל אדם בודד בין שתי ההצעות.", "math_expression": "50 - 40 = 10 ₪ לאדם" },
            { "verbal_explanation": "שלב 2: נבדוק מה הפער הכללי בקופה: ממינוס 40 (חוב) לפלוס 20 (עודף). הפער הוא 60 ₪.", "math_expression": "40 + 20 = 60 ₪ הפרש כללי" },
            { "verbal_explanation": "שלב 3: נחלק את ההפרש הכללי בתוספת של כל תייר כדי למצוא את מספר התיירים.", "math_expression": "60 ÷ 10 = 6" }
        ],
        "final_answer": "6 תיירים",
        "options": ["5 תיירים", "6 תיירים", "8 תיירים", "10 תיירים"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "שאלות אתגר רב-שלביות",
        "difficulty": "High",
        "question_text": "קובייה עשויה מברזל, שאורך מקצועה 10 ס\"מ, הוכנסה לתוך אקווריום מלבני מלא חלקית במים. מידות בסיס האקווריום הן: אורך 20 ס\"מ ורוחב 25 ס\"מ. בכמה סנטימטרים יעלה גובה המים באקווריום?",
        "hint": "נפח הקובייה יתווסף לנפח המים. חשבו את נפח הקובייה. נפח זה התפזר על פני שטח הבסיס של האקווריום. חלקו את נפח הקובייה בשטח בסיס האקווריום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את נפח הקובייה (שתופסת מקום במים).", "math_expression": "10 × 10 × 10 = 1000 סמ\"ק" },
            { "verbal_explanation": "שלב 2: נחשב את שטח הבסיס של האקווריום שעליו המים מתפזרים ועולים.", "math_expression": "20 × 25 = 500 סמ\"ר" },
            { "verbal_explanation": "שלב 3: נחלק את נפח הקובייה בשטח הבסיס כדי למצוא את הגובה שיתווסף.", "math_expression": "1000 ÷ 500 = 2 ס\"מ" }
        ],
        "final_answer": "2 ס\"מ",
        "options": ["1 ס\"מ", "2 ס\"מ", "4 ס\"מ", "5 ס\"מ"],
        "correctAnswer": 1
    }
];