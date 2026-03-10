const questionsDB = [
    // ==========================================
    // --- תת נושא 1: מבוא (15 שאלות) ---
    // ==========================================
    {
        "id": 1,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את השבר הפשוט 1/4 לאחוזים.",
        "hint": "אחוז הוא שבר עם מכנה 100. הרחיבו את המכנה פי 25.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר למכנה 100 על ידי כפל ב-25.", "math_expression": "(1 × 25) / (4 × 25) = 25/100" },
            { "verbal_explanation": "שלב 2: נמיר את השבר בעל מכנה 100 לייצוג באחוזים.", "math_expression": "25%" }
        ],
        "final_answer": "25%",
        "options": ["10%", "25%", "40%", "50%"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "הפכו את המספר העשרוני 0.3 לאחוזים.",
        "hint": "0.3 הן 3 עשיריות, שהן בדיוק 30 מאיות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב את המספר העשרוני כשבר עם מכנה 100.", "math_expression": "0.3 = 30/100" },
            { "verbal_explanation": "שלב 2: נתרגם את השבר לסימן האחוז.", "math_expression": "30%" }
        ],
        "final_answer": "30%",
        "options": ["3%", "30%", "0.3%", "300%"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "מבוא",
        "difficulty": "High",
        "question_text": "איזה שבר פשוט מצומצם שווה ל-50%?",
        "hint": "כתבו 50 מתוך 100 וצמצמו את המונה והמכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את האחוז כשבר פשוט.", "math_expression": "50% = 50/100" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר על ידי חלוקה ב-50.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/2", "1/4", "1/5", "1/100"],
        "correctAnswer": 0
    },
    {
        "id": 4,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את השבר 1/10 לאחוזים.",
        "hint": "הרחיבו את המכנה פי 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה והמכנה ב-10.", "math_expression": "(1 × 10) / (10 × 10) = 10/100" },
            { "verbal_explanation": "שלב 2: כתיבה כאחוז.", "math_expression": "10%" }
        ],
        "final_answer": "10%",
        "options": ["1%", "10%", "100%", "20%"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו 75% למספר עשרוני.",
        "hint": "חלקו את המספר ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את האחוז כשבר מאיות.", "math_expression": "75% = 75/100" },
            { "verbal_explanation": "שלב 2: נהפוך לשבר עשרוני.", "math_expression": "0.75" }
        ],
        "final_answer": "0.75",
        "options": ["7.5", "0.75", "0.075", "75.0"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "מבוא",
        "difficulty": "High",
        "question_text": "בכיתה 25 תלמידים. 5 מהם מרכיבים משקפיים. מהו אחוז הילדים המרכיבים משקפיים?",
        "hint": "כתבו שבר של 5 מתוך 25 והרחיבו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כתיבת כמות הילדים כשבר מתוך הכל.", "math_expression": "5/25" },
            { "verbal_explanation": "שלב 2: הרחבה למכנה 100 (כפל פי 4).", "math_expression": "(5 × 4) / (25 × 4) = 20/100" },
            { "verbal_explanation": "שלב 3: המרה לאחוזים.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["10%", "20%", "25%", "5%"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "מבוא",
        "difficulty": "Low",
        "question_text": "כמה אחוזים מייצג השלם (1)?",
        "hint": "השלם הוא תמיד 100 מתוך 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת השלם כשבר מלא.", "math_expression": "1 = 100/100" },
            { "verbal_explanation": "שלב 2: כתיבה כאחוז.", "math_expression": "100%" }
        ],
        "final_answer": "100%",
        "options": ["1%", "10%", "100%", "0.1%"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את השבר 1/5 לאחוזים.",
        "hint": "הרחיבו את המכנה 5 פי 20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר למכנה 100.", "math_expression": "(1 × 20) / (5 × 20) = 20/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["5%", "20%", "25%", "15%"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "מבוא",
        "difficulty": "High",
        "question_text": "המירו את המספר 1.5 לאחוזים.",
        "hint": "1 הוא 100%, ועוד חצי הוא עוד 50%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את המספר לשבר מאיות.", "math_expression": "1.5 = 150/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "150%" }
        ],
        "final_answer": "150%",
        "options": ["15%", "105%", "150%", "1.5%"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "איזה שבר מצומצם שווה ל-25%?",
        "hint": "25 מתוך 100 זה רבע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כתיבה כשבר.", "math_expression": "25/100" },
            { "verbal_explanation": "שלב 2: צמצום ב-25.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1/2", "1/4", "1/5", "1/10"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את 0.08 לאחוזים.",
        "hint": "אלו 8 מאיות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הערך כמאיות.", "math_expression": "0.08 = 8/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "8%" }
        ],
        "final_answer": "8%",
        "options": ["8%", "80%", "0.8%", "0.08%"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את השבר 3/4 לאחוזים.",
        "hint": "הרחיבו פי 25.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הרחבה למכנה 100.", "math_expression": "(3 × 25) / (4 × 25) = 75/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "75%" }
        ],
        "final_answer": "75%",
        "options": ["30%", "75%", "40%", "60%"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מבוא",
        "difficulty": "Medium",
        "question_text": "המירו את השבר 4/5 לאחוזים.",
        "hint": "הרחיבו פי 20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הרחבה למכנה 100.", "math_expression": "(4 × 20) / (5 × 20) = 80/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "80%" }
        ],
        "final_answer": "80%",
        "options": ["40%", "80%", "45%", "100%"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "מבוא",
        "difficulty": "High",
        "question_text": "המירו את השבר 1/20 לאחוזים.",
        "hint": "פי כמה צריך להכפיל את 20 כדי להגיע ל-100?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל פי 5.", "math_expression": "(1 × 5) / (20 × 5) = 5/100" },
            { "verbal_explanation": "שלב 2: המרה לאחוזים.", "math_expression": "5%" }
        ],
        "final_answer": "5%",
        "options": ["20%", "5%", "10%", "1%"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "מבוא",
        "difficulty": "High",
        "question_text": "איזה שבר פשוט מצומצם שווה ל-60%?",
        "hint": "צמצמו את 60/100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כתיבה כשבר.", "math_expression": "60/100" },
            { "verbal_explanation": "שלב 2: צמצום ב-20.", "math_expression": "3/5" }
        ],
        "final_answer": "3/5",
        "options": ["3/5", "6/10", "1/6", "2/3"],
        "correctAnswer": 0
    },

    // ==========================================
    // --- תת נושא 2: חישוב ערך האחוז וחישוב האחוז (15 שאלות) ---
    // ==========================================
    {
        "id": 16,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "חשבו כמה הם 10% מתוך 200 ₪.",
        "hint": "למציאת 10% פשוט חלקו את המספר ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את השלם ב-10 למציאת עשירית.", "math_expression": "200 ÷ 10 = 20" },
            { "verbal_explanation": "שלב 2: הוספת יחידות המטבע לתוצאה.", "math_expression": "20 ₪" }
        ],
        "final_answer": "20 ₪",
        "options": ["10 ₪", "20 ₪", "30 ₪", "2 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "מחיר חולצה הוא 120 ₪. יש הנחה של 25%. מהו סכום ההנחה?",
        "hint": "25% הם בדיוק רבע מהשלם. חלקו את המחיר ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ש-25% הם רבע ונחלק את המחיר ב-4.", "math_expression": "120 ÷ 4 = 30" },
            { "verbal_explanation": "שלב 2: נקבע את סכום ההנחה הסופי.", "math_expression": "30 ₪" }
        ],
        "final_answer": "30 ₪",
        "options": ["25 ₪", "30 ₪", "40 ₪", "60 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "בכיתה יש 40 תלמידים. 60% מהם בנות. כמה בנות יש בכיתה?",
        "hint": "חשבו 10% מהכיתה ואז הכפילו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה הם 10% מהתלמידים.", "math_expression": "40 ÷ 10 = 4" },
            { "verbal_explanation": "שלב 2: נכפיל את התוצאה ב-6 כדי למצוא 60%.", "math_expression": "4 × 6 = 24" },
            { "verbal_explanation": "שלב 3: נקבע את מספר הבנות.", "math_expression": "24 בנות" }
        ],
        "final_answer": "24 בנות",
        "options": ["20 בנות", "24 בנות", "16 בנות", "30 בנות"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "חשבו 50% מהמספר 84.",
        "hint": "50% זה בדיוק חצי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המספר ב-2.", "math_expression": "84 ÷ 2 = 42" }
        ],
        "final_answer": "42",
        "options": ["40", "42", "50", "34"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "סמארטפון עלה 1,000 ₪. מחירו עלה ב-15%. מהו סכום ההתייקרות?",
        "hint": "מצאו 10%, מצאו 5% וחברו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב 10% מהמחיר.", "math_expression": "1000 ÷ 10 = 100" },
            { "verbal_explanation": "שלב 2: נחשב 5% (חצי מהשלב הקודם).", "math_expression": "100 ÷ 2 = 50" },
            { "verbal_explanation": "שלב 3: נחבר לקבלת 15%.", "math_expression": "100 + 50 = 150 ₪" }
        ],
        "final_answer": "150 ₪",
        "options": ["100 ₪", "115 ₪", "150 ₪", "15 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "במפעל 500 עובדים. 4% מהם נעדרו. כמה עובדים נעדרו?",
        "hint": "מצאו 1% והכפילו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה הוא 1% מהעובדים.", "math_expression": "500 ÷ 100 = 5" },
            { "verbal_explanation": "שלב 2: נכפיל פי 4.", "math_expression": "5 × 4 = 20" }
        ],
        "final_answer": "20 עובדים",
        "options": ["4 עובדים", "20 עובדים", "40 עובדים", "5 עובדים"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "מוצר עלה 200 ₪ ונמכר ב-160 ₪. מהו אחוז ההנחה?",
        "hint": "מצאו את סכום ההנחה בשקלים ובדקו איזה אחוז הוא מהמקור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חישוב סכום ההנחה בשקלים.", "math_expression": "200 - 160 = 40" },
            { "verbal_explanation": "שלב 2: בדיקה איזה חלק מהווה 40 מתוך 200.", "math_expression": "40 / 200 = 20/100" },
            { "verbal_explanation": "שלב 3: המרה לאחוזים.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["10%", "20%", "40%", "15%"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "כמה הם 20% מתוך 50?",
        "hint": "חשבו 10% והכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת 10% מהמספר.", "math_expression": "50 ÷ 10 = 5" },
            { "verbal_explanation": "שלב 2: הכפלה פי 2.", "math_expression": "5 × 2 = 10" }
        ],
        "final_answer": "10",
        "options": ["5", "10", "15", "20"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "מצאו את השלם אם ידוע ש-10% ממנו הם 12.",
        "hint": "אם עשירית היא 12, השלם גדול פי 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את הערך פי 10.", "math_expression": "12 × 10 = 120" }
        ],
        "final_answer": "120",
        "options": ["100", "112", "120", "240"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "בסל 40 פירות. 75% מהם תפוחים. כמה תפוחים בסל?",
        "hint": "75% הם 3/4. מצאו רבע והכפילו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה הוא רבע מהפירות.", "math_expression": "40 ÷ 4 = 10" },
            { "verbal_explanation": "שלב 2: נכפיל פי 3 לקבלת שלושה רבעים.", "math_expression": "10 × 3 = 30" }
        ],
        "final_answer": "30 תפוחים",
        "options": ["20 תפוחים", "30 תפוחים", "35 תפוחים", "10 תפוחים"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "חשבו 1% מתוך 8,000.",
        "hint": "הורידו שני אפסים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק ב-100.", "math_expression": "8000 ÷ 100 = 80" }
        ],
        "final_answer": "80",
        "options": ["8", "80", "800", "1%"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "מהו המחיר לאחר הנחה של 10% על מוצר שעלה 60 ₪?",
        "hint": "מצאו הנחה והחסירו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חישוב סכום ההנחה.", "math_expression": "60 ÷ 10 = 6" },
            { "verbal_explanation": "שלב 2: חיסור ההנחה מהמקור.", "math_expression": "60 - 6 = 54 ₪" }
        ],
        "final_answer": "54 ₪",
        "options": ["50 ₪", "54 ₪", "56 ₪", "6 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "כמה הם 30% מתוך 90?",
        "hint": "מצאו 10% והכפילו פי 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת 10%.", "math_expression": "90 ÷ 10 = 9" },
            { "verbal_explanation": "שלב 2: הכפלה פי 3.", "math_expression": "9 × 3 = 27" }
        ],
        "final_answer": "27",
        "options": ["18", "27", "30", "9"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "High",
        "question_text": "חבילה שוקלת 20 ק\"ג. הוסיפו לה 5% ממשקלה. מהו המשקל החדש?",
        "hint": "מצאו 5% והוסיפו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה הם 10% מהמשקל.", "math_expression": "20 ÷ 10 = 2" },
            { "verbal_explanation": "שלב 2: נמצא 5% (חצי מעשירית).", "math_expression": "2 ÷ 2 = 1" },
            { "verbal_explanation": "שלב 3: נוסיף למקור.", "math_expression": "20 + 1 = 21 ק\"ג" }
        ],
        "final_answer": "21 ק\"ג",
        "options": ["20.5 ק\"ג", "21 ק\"ג", "25 ק\"ג", "1 ק\"ג"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "חישוב ערך האחוז וחישוב האחוז",
        "difficulty": "Medium",
        "question_text": "חשבו 5% מתוך 400.",
        "hint": "מצאו 1% והכפילו פי 5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת 1%.", "math_expression": "400 ÷ 100 = 4" },
            { "verbal_explanation": "שלב 2: הכפלה פי 5.", "math_expression": "4 × 5 = 20" }
        ],
        "final_answer": "20",
        "options": ["5", "10", "20", "40"],
        "correctAnswer": 2
    }
];