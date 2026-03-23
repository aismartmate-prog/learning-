const questionsDB = [
    // ==========================================
    // תת נושא 1: חוק החילוף והקיבוץ (10 שאלות)
    // ==========================================
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא בדרך המהירה ביותר: \\( 17 + 45 + 83 \\)&rlm;",
        "options": ["145", "135", "150", "125"],
        "correctAnswer": 0,
        "hint": "השתמשו בחוק החילוף. חברו קודם את המספרים שמשלימים זה את זה למאות שלמות.",
        "solution_steps": [
            { "verbal_explanation": "נשנה את הסדר ונחבר קודם את המספרים שמשלימים לעשרות שלמות.", "math_expression": "17 + 83 + 45" },
            { "verbal_explanation": "נחבר את שבע עשרה ושמונים ושלוש כדי לקבל מספר עגול ונוח.", "math_expression": "100 + 45" },
            { "verbal_explanation": "נחבר את התוצאה למספר שנותר.", "math_expression": "145" }
        ],
        "final_answer": "145"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא: \\( 4 \\times 13 \\times 25 \\)&rlm;",
        "options": ["1300", "1200", "1500", "130"],
        "correctAnswer": 0,
        "hint": "כפלו קודם את המספרים שיוצרים מכפלה של מאה.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את הסדר ונכפול קודם את המספרים שנותנים מאה.", "math_expression": "4 \\times 25 \\times 13" },
            { "verbal_explanation": "נחשב את המכפלה של ארבע בעשרים וחמש.", "math_expression": "100 \\times 13" },
            { "verbal_explanation": "נכפול במאה על ידי הוספת שני אפסים למספר הנותר.", "math_expression": "1300" }
        ],
        "final_answer": "1300"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא: \\( 125 \\times 7 \\times 8 \\)&rlm;",
        "options": ["7000", "8000", "7500", "875"],
        "correctAnswer": 0,
        "hint": "מאה עשרים וחמש כפול שמונה נותן אלף בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "נעזר בחוק החילוף כדי לקרב בין המספרים שנוח לכפול יחד.", "math_expression": "125 \\times 8 \\times 7" },
            { "verbal_explanation": "נחשב את המכפלה של מאה עשרים וחמש ושמונה. התוצאה היא אלף.", "math_expression": "1000 \\times 7" },
            { "verbal_explanation": "נכפול את התוצאה בשבע.", "math_expression": "7000" }
        ],
        "final_answer": "7000"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא: \\( 2.5 \\times 17 \\times 4 \\)&rlm;",
        "options": ["170", "17", "1700", "85"],
        "correctAnswer": 0,
        "hint": "שתיים וחצי כפול ארבע נותן תוצאה עגולה ויפה.",
        "solution_steps": [
            { "verbal_explanation": "נשנה את סדר המכפלות ונכפול קודם את המספר העשרוני בשלם שמשלים אותו לעשר.", "math_expression": "2.5 \\times 4 \\times 17" },
            { "verbal_explanation": "שתיים וחצי כפול ארבע שווה בדיוק לעשר.", "math_expression": "10 \\times 17" },
            { "verbal_explanation": "הכפלה בעשר פשוטה ומהירה.", "math_expression": "170" }
        ],
        "final_answer": "170"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל: \\( 36 + 89 + 64 \\)&rlm;",
        "options": ["189", "179", "199", "180"],
        "correctAnswer": 0,
        "hint": "אילו שני מספרים משלימים יחד למאה שלמה?",
        "solution_steps": [
            { "verbal_explanation": "נקבץ יחד את המספרים שמסתיימים בספרות המשלימות לעשר (שש וארבע).", "math_expression": "36 + 64 + 89" },
            { "verbal_explanation": "נחבר את שלושים ושש עם שישים וארבע. הסכום הוא מאה בדיוק.", "math_expression": "100 + 89" },
            { "verbal_explanation": "נוסיף את המספר שנותר לקבלת הפתרון הסופי.", "math_expression": "189" }
        ],
        "final_answer": "189"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל: \\( 5 \\times 19 \\times 20 \\)&rlm;",
        "options": ["1900", "190", "2000", "950"],
        "correctAnswer": 0,
        "hint": "חמש כפול עשרים שווה למאה.",
        "solution_steps": [
            { "verbal_explanation": "נפעיל את חוק החילוף כדי להכפיל קודם את המספרים שיוצרים מאה.", "math_expression": "5 \\times 20 \\times 19" },
            { "verbal_explanation": "נכפול חמש בעשרים.", "math_expression": "100 \\times 19" },
            { "verbal_explanation": "נכפול את התוצאה בתשע עשרה ונוסיף את האפסים.", "math_expression": "1900" }
        ],
        "final_answer": "1900"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו בעזרת חוק הקיבוץ: \\( 15 + (85 + 47) \\)&rlm;",
        "options": ["147", "137", "157", "140"],
        "correctAnswer": 0,
        "hint": "מותר לשנות את מיקום הסוגריים כאשר מדובר רק בפעולות חיבור.",
        "solution_steps": [
            { "verbal_explanation": "לפי חוק הקיבוץ, בחיבור בלבד נוכל לשנות את המקום של הסוגריים לנוחותנו.", "math_expression": "(15 + 85) + 47" },
            { "verbal_explanation": "נחבר את המספרים שבתוך הסוגריים החדשים.", "math_expression": "100 + 47" },
            { "verbal_explanation": "נחבר את התוצאה למספר שמחוץ לסוגריים.", "math_expression": "147" }
        ],
        "final_answer": "147"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא: \\( 2 \\times 9 \\times 50 \\)&rlm;",
        "options": ["900", "100", "90", "450"],
        "correctAnswer": 0,
        "hint": "שתיים כפול חמישים יוצר מאה עגולה.",
        "solution_steps": [
            { "verbal_explanation": "נשנה את הסדר כך שהשתיים והחמישים יהיו צמודים זה לזה.", "math_expression": "2 \\times 50 \\times 9" },
            { "verbal_explanation": "נחשב את המכפלה של שתיים וחמישים.", "math_expression": "100 \\times 9" },
            { "verbal_explanation": "נכפול בתשע לקבלת התשובה הקלה.", "math_expression": "900" }
        ],
        "final_answer": "900"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את סכום ארבעת המספרים הבאים: \\( 44 + 19 + 56 + 81 \\)&rlm;",
        "options": ["200", "190", "210", "180"],
        "correctAnswer": 0,
        "hint": "חפשו זוגות של מספרים שסכומם הוא מאה בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "נקבץ את המספרים לזוגות שמשלימים למאה שלמה.", "math_expression": "(44 + 56) + (19 + 81)" },
            { "verbal_explanation": "נחשב את הסכום של כל זוג בתוך הסוגריים.", "math_expression": "100 + 100" },
            { "verbal_explanation": "נחבר את שתי המאות יחד לסכום סופי וקליל.", "math_expression": "200" }
        ],
        "final_answer": "200"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק החילוף והקיבוץ",
        "question_text": "חשבו את התרגיל הבא: \\( 50 \\times 13 \\times 2 \\)&rlm;",
        "options": ["1300", "130", "2600", "650"],
        "correctAnswer": 0,
        "hint": "מותר לכפול קודם את חמישים בשתיים למרות שהם לא צמודים.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את המקום של השלוש עשרה והשתיים.", "math_expression": "50 \\times 2 \\times 13" },
            { "verbal_explanation": "נכפול את חמישים בשתיים כדי לקבל מאה.", "math_expression": "100 \\times 13" },
            { "verbal_explanation": "נכפול את המאה בשלוש עשרה.", "math_expression": "1300" }
        ],
        "final_answer": "1300"
    },

    // ==========================================
    // תת נושא 2: חוק הפילוג (10 שאלות)
    // ==========================================
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו בעזרת חוק הפילוג: \\( 7 \\times 102 \\)&rlm;",
        "options": ["714", "702", "720", "109"],
        "correctAnswer": 0,
        "hint": "פצלו את המספר מאה ושתיים למאה ועוד שתיים, וכפלו את שבע בכל אחד מהם.",
        "solution_steps": [
            { "verbal_explanation": "נפצל את המספר הגדול לסכום של מספרים שנוח יותר לכפול.", "math_expression": "7 \\times (100 + 2)" },
            { "verbal_explanation": "נשתמש בחוק הפילוג ונכפול את השבע בכל אחד מהמספרים שבתוך הסוגריים.", "math_expression": "7 \\times 100 + 7 \\times 2" },
            { "verbal_explanation": "נחשב את המכפלות בנפרד.", "math_expression": "700 + 14" },
            { "verbal_explanation": "נחבר את התוצאות לסכום סופי.", "math_expression": "714" }
        ],
        "final_answer": "714"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו בעזרת חוק הפילוג: \\( 5 \\times 99 \\)&rlm;",
        "options": ["495", "490", "505", "499"],
        "correctAnswer": 0,
        "hint": "במקום לחשב במאונך, פצלו את תשעים ותשע למאה פחות אחד.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את תשעים ותשע כתרגיל חיסור שקל לנו יותר לחשב איתו.", "math_expression": "5 \\times (100 - 1)" },
            { "verbal_explanation": "נפזר את הכפל על כל אחד מהמספרים שבתוך הסוגריים.", "math_expression": "5 \\times 100 - 5 \\times 1" },
            { "verbal_explanation": "נחשב את הכפל של כל איבר.", "math_expression": "500 - 5" },
            { "verbal_explanation": "נחסר ונגלה את התוצאה המדויקת.", "math_expression": "495" }
        ],
        "final_answer": "495"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו את התרגיל הבא בדרך הקלה: \\( 8 \\times 25 + 8 \\times 75 \\)&rlm;",
        "options": ["800", "100", "825", "400"],
        "correctAnswer": 0,
        "hint": "המספר שמונה מופיע בשני הצדדים. הוציאו אותו מחוץ לסוגריים (זהו חוק הפילוג ההפוך).",
        "solution_steps": [
            { "verbal_explanation": "נזהה שהמספר שמונה משותף לשתי המכפלות. נוציא אותו מחוץ לסוגריים ונקבץ את השאר בפנים.", "math_expression": "8 \\times (25 + 75)" },
            { "verbal_explanation": "נחשב תחילה את מה שבתוך הסוגריים. עשרים וחמש ועוד שבעים וחמש הם מאה שלמה.", "math_expression": "8 \\times 100" },
            { "verbal_explanation": "נכפול את המספר שמונה במאה.", "math_expression": "800" }
        ],
        "final_answer": "800"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו את התרגיל: \\( 12 \\times 35 + 12 \\times 65 \\)&rlm;",
        "options": ["1200", "1265", "1000", "1350"],
        "correctAnswer": 0,
        "hint": "המספר שנים עשר כופל גם את שלושים וחמש וגם את שישים וחמש. חברו את שני המספרים הללו בתוך סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נוציא את הגורם המשותף, שנים עשר, אל מחוץ לסוגריים.", "math_expression": "12 \\times (35 + 65)" },
            { "verbal_explanation": "נחבר את המספרים שבתוך הסוגריים.", "math_expression": "12 \\times 100" },
            { "verbal_explanation": "נבצע את הכפל במאה על ידי הוספת שני אפסים לתוצאה.", "math_expression": "1200" }
        ],
        "final_answer": "1200"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו בעזרת חוק הפילוג: \\( 4 \\times 105 \\)&rlm;",
        "options": ["420", "405", "450", "415"],
        "correctAnswer": 0,
        "hint": "פצלו את מאה וחמש למאה ועוד חמש.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המספר הגדול לסכום של מאה וחמש.", "math_expression": "4 \\times (100 + 5)" },
            { "verbal_explanation": "נכפול את ארבע פעם אחת במאה, ופעם אחת בחמש.", "math_expression": "4 \\times 100 + 4 \\times 5" },
            { "verbal_explanation": "נחשב את התוצאות הנפרדות.", "math_expression": "400 + 20" },
            { "verbal_explanation": "נחבר לקבלת סך הכל.", "math_expression": "420" }
        ],
        "final_answer": "420"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו את התרגיל הבא: \\( 6 \\times 98 \\)&rlm;",
        "options": ["588", "580", "598", "602"],
        "correctAnswer": 0,
        "hint": "המספר תשעים ושמונה קרוב מאוד למאה. פצלו אותו למאה פחות שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נשנה את תשעים ושמונה לתרגיל חיסור השווה לו בדיוק.", "math_expression": "6 \\times (100 - 2)" },
            { "verbal_explanation": "נשתמש בחוק הפילוג לכפל מעל חיסור.", "math_expression": "6 \\times 100 - 6 \\times 2" },
            { "verbal_explanation": "נחשב את המכפלות.", "math_expression": "600 - 12" },
            { "verbal_explanation": "נחסר בזהירות כדי לקבל את הפתרון.", "math_expression": "588" }
        ],
        "final_answer": "588"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "מהי הדרך המהירה לחשב את התרגיל: \\( 15 \\times 12 + 15 \\times 8 \\)?&rlm;",
        "options": ["300", "150", "280", "200"],
        "correctAnswer": 0,
        "hint": "שתי המכפלות מכילות את המספר חמש עשרה. הוציאו אותו החוצה כגורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "המספר חמש עשרה מופיע בשני חלקי התרגיל ככופל. נרכז את השאר בתוך סוגריים.", "math_expression": "15 \\times (12 + 8)" },
            { "verbal_explanation": "נחבר את המספרים הפנימיים בסוגריים ונקבל מספר נוח לכפל.", "math_expression": "15 \\times 20" },
            { "verbal_explanation": "נכפול חמש עשרה בעשרים ונרשום את התוצאה.", "math_expression": "300" }
        ],
        "final_answer": "300"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו בעזרת פילוג: \\( 3 \\times 210 \\)&rlm;",
        "options": ["630", "610", "603", "620"],
        "correctAnswer": 0,
        "hint": "פצלו את המאתיים ועשר למאתיים ועוד עשר.",
        "solution_steps": [
            { "verbal_explanation": "נפרק את המספר הגדול לשני חלקים שנוח להכפיל בעל פה.", "math_expression": "3 \\times (200 + 10)" },
            { "verbal_explanation": "נבצע את הכפל לכל חלק וחלק.", "math_expression": "3 \\times 200 + 3 \\times 10" },
            { "verbal_explanation": "נחשב את הכפל למספרים רגילים.", "math_expression": "600 + 30" },
            { "verbal_explanation": "נחבר הכל יחד.", "math_expression": "630" }
        ],
        "final_answer": "630"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו את התרגיל הבא: \\( 14 \\times 101 \\)&rlm;",
        "options": ["1414", "1401", "1410", "1514"],
        "correctAnswer": 0,
        "hint": "הוסיפו מאה ועוד אחד לתוך סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את מאה ואחת כסכום.", "math_expression": "14 \\times (100 + 1)" },
            { "verbal_explanation": "נכפול את המספר ארבע עשרה בכל חלק שבתוך הסוגריים.", "math_expression": "14 \\times 100 + 14 \\times 1" },
            { "verbal_explanation": "נחשב את המכפלות.", "math_expression": "1400 + 14" },
            { "verbal_explanation": "נחבר לתוצאה אחת מוגמרת.", "math_expression": "1414" }
        ],
        "final_answer": "1414"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "חוק הפילוג",
        "question_text": "חשבו בעזרת הוצאת גורם משותף (פילוג): \\( 9 \\times 45 - 9 \\times 35 \\)&rlm;",
        "options": ["90", "45", "900", "80"],
        "correctAnswer": 0,
        "hint": "המספר תשע כופל את שני המספרים וביניהם סימן חיסור. הוציאו אותו אל מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את המספר המשותף תשע פעם אחת בלבד מחוץ לסוגריים.", "math_expression": "9 \\times (45 - 35)" },
            { "verbal_explanation": "נבצע קודם את פעולת החיסור הכתובה בתוך הסוגריים.", "math_expression": "9 \\times 10" },
            { "verbal_explanation": "נכפול בעשר לקבלת התשובה הקלה.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },

    // ==========================================
    // תת נושא 3: סדר פעולות מורחב (10 שאלות)
    // ==========================================
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 20 - 4 \\times 3 + 2 \\)&rlm;",
        "options": ["10", "50", "4", "14"],
        "correctAnswer": 0,
        "hint": "סדר הפעולות קובע שכפל וחילוק קודמים תמיד לחיבור וחיסור.",
        "solution_steps": [
            { "verbal_explanation": "נחפש את פעולת הכפל בתרגיל ונבצע אותה ראשונה.", "math_expression": "20 - 12 + 2" },
            { "verbal_explanation": "כעת נותרו רק חיבור וחיסור. נבצע את הפעולות משמאל לימין כפי שהן כתובות. נתחיל בחיסור.", "math_expression": "8 + 2" },
            { "verbal_explanation": "נסיים בפעולת החיבור האחרונה.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( (15 + 5) \\div 4 \\times 2 \\)&rlm;",
        "options": ["10", "2.5", "5", "20"],
        "correctAnswer": 0,
        "hint": "הסוגריים הם החשובים ביותר ומחושבים ראשונים. לאחר מכן כפל וחילוק מצד שמאל לימין ברצף.",
        "solution_steps": [
            { "verbal_explanation": "נבצע ראשית את החיבור שנמצא בתוך הסוגריים.", "math_expression": "20 \\div 4 \\times 2" },
            { "verbal_explanation": "נותרו רק פעולות כפל וחילוק. כאשר הן מופיעות יחד, יש לפתור משמאל לימין לפי הסדר. נתחיל בחילוק.", "math_expression": "5 \\times 2" },
            { "verbal_explanation": "נבצע את הכפל האחרון לסיום התרגיל.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 50 \\div (25 - 5 \\times 3) \\)&rlm;",
        "options": ["5", "10", "2", "25"],
        "correctAnswer": 0,
        "hint": "כנסו לתוך הסוגריים, ובתוכם זכרו שוב לבצע את הכפל לפני החיסור.",
        "solution_steps": [
            { "verbal_explanation": "ניכנס לתוך הסוגריים. יש שם חיסור וכפל. הכפל קודם לכל השאר.", "math_expression": "50 \\div (25 - 15)" },
            { "verbal_explanation": "נסיים את הפעולה שבתוך הסוגריים על ידי ביצוע החיסור.", "math_expression": "50 \\div 10" },
            { "verbal_explanation": "נחלק את המספרים שנותרו לקבלת התשובה.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 3 \\times (8 + 2) - 15 \\div 3 \\)&rlm;",
        "options": ["25", "15", "5", "30"],
        "correctAnswer": 0,
        "hint": "פתרו את הסוגריים תחילה. לאחר מכן בצעו את הכפל והחילוק במקביל, ורק בסוף את החיסור שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נפתור קודם כל את תרגיל החיבור החבוי בתוך הסוגריים.", "math_expression": "3 \\times 10 - 15 \\div 3" },
            { "verbal_explanation": "נבצע את פעולת הכפל בצד שמאל ואת פעולת החילוק בצד ימין.", "math_expression": "30 - 5" },
            { "verbal_explanation": "נחסר את התוצאות זו מזו.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 100 - [20 + (15 - 5) \\times 2] \\)&rlm;",
        "options": ["60", "40", "80", "20"],
        "correctAnswer": 0,
        "hint": "כשיש סוגריים בתוך סוגריים, מתחילים תמיד מהסוגריים הפנימיים ביותר (העגולים).",
        "solution_steps": [
            { "verbal_explanation": "נתחיל לחשב מתוך הסוגריים הפנימיים העגולים בלבד.", "math_expression": "100 - [20 + 10 \\times 2]" },
            { "verbal_explanation": "בתוך הסוגריים המרובעים הגדולים, נבצע קודם את פעולת הכפל.", "math_expression": "100 - [20 + 20]" },
            { "verbal_explanation": "נסיים את החשבון בתוך הסוגריים המרובעים בחיבור פשוט.", "math_expression": "100 - 40" },
            { "verbal_explanation": "נחסר מהמאה שבחוץ את התוצאה שקיבלנו מהסוגריים כולם.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 36 \\div 6 \\times 2 + 8 \\)&rlm;",
        "options": ["20", "11", "5", "14"],
        "correctAnswer": 0,
        "hint": "אין כאן סוגריים. כפל וחילוק פותרים משמאל לימין. אל תכפלו לפני שחילקתם!",
        "solution_steps": [
            { "verbal_explanation": "בגלל שאין סוגריים, חילוק וכפל מבוצעים בדיוק לפי הסדר שבו הם כתובים משמאל לימין. נתחיל בחילוק.", "math_expression": "6 \\times 2 + 8" },
            { "verbal_explanation": "כעת נבצע את פעולת הכפל.", "math_expression": "12 + 8" },
            { "verbal_explanation": "נסיים עם פעולת החיבור.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 5 + 4 \\times (10 - 2 \\times 4) \\)&rlm;",
        "options": ["13", "18", "72", "36"],
        "correctAnswer": 0,
        "hint": "כנסו לסוגריים וזכרו שהכפל קודם לחיסור גם בתוכם.",
        "solution_steps": [
            { "verbal_explanation": "בתוך הסוגריים נבצע קודם כל את תרגיל הכפל הפנימי.", "math_expression": "5 + 4 \\times (10 - 8)" },
            { "verbal_explanation": "נסיים לפתור את כל מה שנשאר בתוך הסוגריים בחיסור.", "math_expression": "5 + 4 \\times 2" },
            { "verbal_explanation": "מחוץ לסוגריים, יש לנו חיבור וכפל. הכפל תמיד קודם לחיבור.", "math_expression": "5 + 8" },
            { "verbal_explanation": "נחבר את המספרים ונקבל את הפתרון הנדרש.", "math_expression": "13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( (40 - 8 \\times 3) \\div 4 + 10 \\)&rlm;",
        "options": ["14", "12", "16", "8"],
        "correctAnswer": 0,
        "hint": "פתרו קודם את הסוגריים, ובתוכם את הכפל תחילה.",
        "solution_steps": [
            { "verbal_explanation": "בתוך הסוגריים, נכפול קודם את שמונה בשלוש.", "math_expression": "(40 - 24) \\div 4 + 10" },
            { "verbal_explanation": "נבצע את החיסור שבתוך הסוגריים כדי להיפטר מהם.", "math_expression": "16 \\div 4 + 10" },
            { "verbal_explanation": "נבצע את פעולת החילוק לפני שנעבור לחיבור.", "math_expression": "4 + 10" },
            { "verbal_explanation": "נסיים לחבר ונקבל את התוצאה הסופית.", "math_expression": "14" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 12 \\times 2 - 18 \\div 6 + 4 \\)&rlm;",
        "options": ["25", "21", "15", "5"],
        "correctAnswer": 0,
        "hint": "בצעו את הכפל ואת החילוק בשלב הראשון, ואז סדרו את החיבור והחיסור משמאל לימין.",
        "solution_steps": [
            { "verbal_explanation": "נפתור במקביל את פעולת הכפל ואת פעולת החילוק משום שהן קודמות לשאר.", "math_expression": "24 - 3 + 4" },
            { "verbal_explanation": "נבצע את פעולת החיסור משום שהיא כתובה משמאל ומבוצעת ראשונה בסדר הקריאה.", "math_expression": "21 + 4" },
            { "verbal_explanation": "נחבר את המספרים בסיום.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "arithmetic_rules_grade_5_6",
        "subTopic": "סדר פעולות מורחב",
        "question_text": "חשבו את התרגיל הבא: \\( 60 \\div [15 - (3 + 2 \\times 3)] \\)&rlm;",
        "options": ["10", "6", "15", "5"],
        "correctAnswer": 0,
        "hint": "התחילו מהסוגריים העגולים בפנים. בתוכם בצעו קודם את הכפל.",
        "solution_steps": [
            { "verbal_explanation": "נפנה לסוגריים העגולים הפנימיים, ובתוכם נחשב את הכפל קודם.", "math_expression": "60 \\div [15 - (3 + 6)]" },
            { "verbal_explanation": "נשלים את החשבון בתוך הסוגריים העגולים ונחבר.", "math_expression": "60 \\div [15 - 9]" },
            { "verbal_explanation": "נבצע את פעולת החיסור בתוך הסוגריים המרובעים החיצוניים יותר.", "math_expression": "60 \\div 6" },
            { "verbal_explanation": "נחלק לקבלת התשובה הנכונה לתרגיל.", "math_expression": "10" }
        ],
        "final_answer": "10"
    }
];