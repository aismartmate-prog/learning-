const questionsDB = [
    // ==========================================
    // תת נושא 1: חישוב ערך האחוז (10 שאלות)
    // ==========================================
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "מהם 20% מתוך 50 שקלים?&rlm;",
        "options": ["10", "20", "5", "25"],
        "correctAnswer": 0,
        "hint": "אחוז הוא שבר שהמכנה שלו הוא מאה. כפלו את השלם (50) בשבר המייצג 20 אחוזים.",
        "solution_steps": [
            { "verbal_explanation": "נמיר תחילה את האחוז לשבר פשוט שבו המכנה הוא מאה.", "math_expression": "\\frac{20}{100}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בעשרים, כדי שיהיה קל יותר לחשב.", "math_expression": "\\frac{1}{5}" },
            { "verbal_explanation": "נכפול את השלם (הסכום המקורי) בשבר המצומצם שקיבלנו.", "math_expression": "50 \\times \\frac{1}{5}" },
            { "verbal_explanation": "נחלק חמישים בחמש ונקבל את ערך האחוז המבוקש.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "חשבו כמה הם 15% מתוך 200 תלמידים.&rlm;",
        "options": ["30", "15", "45", "20"],
        "correctAnswer": 0,
        "hint": "כאשר השלם הוא מאתיים, אפשר פשוט לכפול את האחוז פי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את התרגיל ככפל של השלם בשבר המייצג את האחוזים.", "math_expression": "200 \\times \\frac{15}{100}" },
            { "verbal_explanation": "נחלק תחילה את מאתיים במאה כדי לפשט את החישוב.", "math_expression": "200 \\div 100 = 2" },
            { "verbal_explanation": "כעת נכפול את התוצאה במונה (חמש עשרה).", "math_expression": "2 \\times 15" },
            { "verbal_explanation": "התוצאה היא שלושים תלמידים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "מהו הערך של 50% מתוך 120 קילוגרמים?&rlm;",
        "options": ["60", "50", "24", "100"],
        "correctAnswer": 0,
        "hint": "חמישים אחוזים הם בדיוק חצי מהכמות השלמה.",
        "solution_steps": [
            { "verbal_explanation": "חמישים אחוזים שווים לחמישים חלקי מאה, שזהו בדיוק חצי.", "math_expression": "\\frac{50}{100} = \\frac{1}{2}" },
            { "verbal_explanation": "כדי למצוא חצי מכמות מסוימת, נחלק את השלם בשתיים.", "math_expression": "120 \\div 2" },
            { "verbal_explanation": "נבצע את החלוקה לקבלת הערך.", "math_expression": "60" },
            { "verbal_explanation": "התשובה היא שישים קילוגרמים.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "בכיתה יש 60 תלמידים. 5% מהם מרכיבים משקפיים. כמה תלמידים מרכיבים משקפיים?&rlm;",
        "options": ["3", "5", "12", "6"],
        "correctAnswer": 0,
        "hint": "חשבו קודם כמה זה 10 אחוזים, ואז חלקו את התוצאה בשתיים כדי להגיע ל-5 אחוזים.",
        "solution_steps": [
            { "verbal_explanation": "קל מאוד לחשב עשרה אחוזים: פשוט מחלקים את השלם בעשר.", "math_expression": "60 \\div 10 = 6" },
            { "verbal_explanation": "מצאנו שעשרה אחוזים הם שישה תלמידים. חמישה אחוזים הם בדיוק חצי מעשרה אחוזים.", "math_expression": "6 \\div 2" },
            { "verbal_explanation": "נחלק שש בשתיים כדי למצוא את כמות התלמידים המהווים חמישה אחוזים.", "math_expression": "3" },
            { "verbal_explanation": "שלושה תלמידים בלבד מרכיבים משקפיים.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "חשבו כמה הם 25% מתוך 400 מטרים.&rlm;",
        "options": ["100", "50", "25", "200"],
        "correctAnswer": 0,
        "hint": "עשרים וחמישה אחוזים מהווים רבע (1/4) מהשלם.",
        "solution_steps": [
            { "verbal_explanation": "נמיר את האחוז לשבר מצומצם. עשרים וחמש מתוך מאה שווים לרבע.", "math_expression": "\\frac{25}{100} = \\frac{1}{4}" },
            { "verbal_explanation": "כדי למצוא רבע משלם כלשהו, נחלק את השלם בארבע.", "math_expression": "400 \\div 4" },
            { "verbal_explanation": "ארבע מאות לחלק לארבע נותן מאה.", "math_expression": "100" },
            { "verbal_explanation": "הערך המבוקש הוא מאה מטרים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "מחירו של מחשב הוא 350 שקלים. לקוח מקבל הנחה של 10%. כמה כסף שווה ההנחה?&rlm;",
        "options": ["35", "10", "350", "315"],
        "correctAnswer": 0,
        "hint": "עשרה אחוזים שווים לעשירית. חלקו את המחיר המקורי בעשר.",
        "solution_steps": [
            { "verbal_explanation": "עשרה אחוזים מייצגים עשירית מתוך השלם.", "math_expression": "\\frac{10}{100} = \\frac{1}{10}" },
            { "verbal_explanation": "נכפול את מחיר המחשב בעשירית, שזה בדיוק כמו לחלק אותו בעשר.", "math_expression": "350 \\div 10" },
            { "verbal_explanation": "מחיקת אפס אחד מהמספר נותנת את התוצאה.", "math_expression": "35" },
            { "verbal_explanation": "גובה ההנחה הוא שלושים וחמישה שקלים.", "math_expression": "35" }
        ],
        "final_answer": "35"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "מהם 75% מתוך 80?&rlm;",
        "options": ["60", "20", "75", "40"],
        "correctAnswer": 0,
        "hint": "שבעים וחמישה אחוזים הם שלושה רבעים מהשלם. חלקו בארבע וכפלו בשלוש.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את האחוז כשבר ונצמצם אותו. שבעים וחמש חלקי מאה הם שלושה רבעים.", "math_expression": "\\frac{75}{100} = \\frac{3}{4}" },
            { "verbal_explanation": "תחילה נחשב כמה שווה רבע אחד, על ידי חלוקת השלם בארבע.", "math_expression": "80 \\div 4 = 20" },
            { "verbal_explanation": "כעת נכפול את הרבע בשלוש כדי לקבל שלושה רבעים.", "math_expression": "20 \\times 3" },
            { "verbal_explanation": "התשובה הסופית היא שישים.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "חשבו כמה זה 1% מתוך 900.&rlm;",
        "options": ["9", "10", "90", "1"],
        "correctAnswer": 0,
        "hint": "אחוז אחד הוא מאית אחת. חלקו את המספר במאה.",
        "solution_steps": [
            { "verbal_explanation": "אחוז אחד מוגדר כחלק אחד מתוך מאה חלקים שווים.", "math_expression": "\\frac{1}{100}" },
            { "verbal_explanation": "כדי למצוא אחוז אחד של שלם, פשוט נחלק את השלם במאה.", "math_expression": "900 \\div 100" },
            { "verbal_explanation": "נסיר שני אפסים ונקבל את הפתרון.", "math_expression": "9" },
            { "verbal_explanation": "אחוז אחד מתוך תשע מאות שווה לתשע.", "math_expression": "9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "מהם 12% מתוך 50 שקלים?&rlm;",
        "options": ["6", "12", "60", "25"],
        "correctAnswer": 0,
        "hint": "כפל של האחוז בשלם הוא תהליך הפיך. 12% מ-50 זה בדיוק כמו לחשב 50% מ-12.",
        "solution_steps": [
            { "verbal_explanation": "נוכל להשתמש בטריק מתמטי: החלפת האחוז והשלם זה בזה אינה משנה את התוצאה.", "math_expression": "12\\% \\times 50 = 50\\% \\times 12" },
            { "verbal_explanation": "חמישים אחוזים הם בדיוק חצי. לכן, אנו פשוט מחפשים את החצי של שנים עשר.", "math_expression": "12 \\div 2" },
            { "verbal_explanation": "החצי של שנים עשר הוא שש.", "math_expression": "6" },
            { "verbal_explanation": "לכן שנים עשר אחוזים מתוך חמישים שווים לשישה שקלים.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "חישוב ערך האחוז",
        "question_text": "במפעל ייצרו 40 מוצרים. בעקבות דרישה גבוהה, תכננו לייצר כמות השווה ל-150% מהכמות הקודמת. כמה מוצרים מתוכננים לייצור כעת?&rlm;",
        "options": ["60", "150", "40", "100"],
        "correctAnswer": 0,
        "hint": "מאה וחמישים אחוזים פירושם: השלם כולו (100%) ועוד חצי ממנו (50%).",
        "solution_steps": [
            { "verbal_explanation": "נפרק את האחוז לשני חלקים שנוח לחשב: מאה אחוז ועוד חמישים אחוז.", "math_expression": "150\\% = 100\\% + 50\\%" },
            { "verbal_explanation": "מאה אחוזים הם הכמות המקורית השלמה.", "math_expression": "40" },
            { "verbal_explanation": "חמישים אחוזים הם חצי מהכמות המקורית.", "math_expression": "40 \\div 2 = 20" },
            { "verbal_explanation": "נחבר את שתי הכמויות יחד כדי לקבל מאה וחמישים אחוזים.", "math_expression": "40 + 20 = 60" }
        ],
        "final_answer": "60"
    },

    // ==========================================
    // תת נושא 2: מציאת השלם (10 שאלות)
    // ==========================================
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "10% ממספר מסוים הם 5. מהו המספר השלם (100%)?&rlm;",
        "options": ["50", "500", "20", "2"],
        "correctAnswer": 0,
        "hint": "עשרה אחוזים הם עשירית מהשלם. כדי להגיע לשלם המלא, כפלו בעשר.",
        "solution_steps": [
            { "verbal_explanation": "אנו יודעים שעשרה אחוזים שווים לחמש.", "math_expression": "10\\% = 5" },
            { "verbal_explanation": "מאה אחוזים הם השלם שלנו. מאה גדול מעשר בדיוק פי עשר.", "math_expression": "100\\% = 10 \\times 10\\%" },
            { "verbal_explanation": "נכפול את הכמות של עשרה אחוזים פי עשר כדי להגיע לשלם המלא.", "math_expression": "5 \\times 10" },
            { "verbal_explanation": "המספר השלם הוא חמישים.", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "25% מהתלמידים בחוג, שהם 12 תלמידים, אוהבים לצייר. כמה תלמידים יש בסך הכל בחוג?&rlm;",
        "options": ["48", "24", "36", "100"],
        "correctAnswer": 0,
        "hint": "עשרים וחמישה אחוזים הם רבע. אם רבע שווה ל-12, כפלו בארבע כדי למצוא את השלם.",
        "solution_steps": [
            { "verbal_explanation": "עשרים וחמישה אחוזים הם השבר רבע מתוך מאה אחוזים.", "math_expression": "25\\% = \\frac{1}{4}" },
            { "verbal_explanation": "נתון לנו שרבע מהתלמידים הם שנים עשר תלמידים.", "math_expression": "\\frac{1}{4} = 12" },
            { "verbal_explanation": "כדי למצוא את הכמות השלמה, המורכבת מארבעה רבעים, נכפול את הכמות בארבע.", "math_expression": "12 \\times 4" },
            { "verbal_explanation": "סך הכל ישנם ארבעים ושמונה תלמידים בחוג.", "math_expression": "48" }
        ],
        "final_answer": "48"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "20% ממשקלו של כלב הם 15 קילוגרמים. מה משקלו הכולל של הכלב?&rlm;",
        "options": ["75", "100", "30", "60"],
        "correctAnswer": 0,
        "hint": "עשרים אחוזים נכנסים חמש פעמים בתוך מאה אחוזים. כפלו בחמש.",
        "solution_steps": [
            { "verbal_explanation": "עשרים אחוזים שווים לחמש עשרה קילוגרמים.", "math_expression": "20\\% = 15" },
            { "verbal_explanation": "במאה אחוזים יש בדיוק חמש פעמים עשרים אחוזים.", "math_expression": "100 \\div 20 = 5" },
            { "verbal_explanation": "נכפול את המשקל שנתון לנו פי חמש כדי להגיע למשקל המלא.", "math_expression": "15 \\times 5" },
            { "verbal_explanation": "משקלו של הכלב כולו הוא שבעים וחמישה קילוגרמים.", "math_expression": "75" }
        ],
        "final_answer": "75"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "חצי ממשכורתו של אדם (50%) הם 45 שקלים לשעה. מהי משכורתו השלמה לשעה?&rlm;",
        "options": ["90", "45", "100", "22.5"],
        "correctAnswer": 0,
        "hint": "אם חצי שווה 45, השלם שווה לפעמיים 45.",
        "solution_steps": [
            { "verbal_explanation": "חמישים אחוזים הם החצי המדויק של מאה אחוזים.", "math_expression": "50\\% = \\frac{1}{2}" },
            { "verbal_explanation": "אנו יודעים שהחצי הזה שווה לארבעים וחמישה שקלים.", "math_expression": "\\frac{1}{2} = 45" },
            { "verbal_explanation": "כדי למצוא את השלם, נכפול את החצי בשתיים.", "math_expression": "45 \\times 2" },
            { "verbal_explanation": "המשכורת השלמה היא תשעים שקלים.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "5% מכמות מסוימת של מים הם 3 ליטרים. מהי הכמות השלמה במיכל?&rlm;",
        "options": ["60", "15", "100", "30"],
        "correctAnswer": 0,
        "hint": "כמה פעמים 5 נכנס בתוך 100? כפלו את ה-3 במספר הפעמים הזה.",
        "solution_steps": [
            { "verbal_explanation": "חמישה אחוזים שווים לשלושה ליטרים.", "math_expression": "5\\% = 3" },
            { "verbal_explanation": "נבדוק כמה פעמים חמישה אחוזים נכנסים בתוך מאה אחוז השלמים.", "math_expression": "100 \\div 5 = 20" },
            { "verbal_explanation": "נכפול את שלושת הליטרים בעשרים פעמים כדי לקבל את הכמות במיכל המלא.", "math_expression": "3 \\times 20" },
            { "verbal_explanation": "במיכל ישנם שישים ליטרים של מים.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "75% ממחירו של צעצוע הם 30 שקלים. מהו מחירו המלא של הצעצוע?&rlm;",
        "options": ["40", "90", "100", "22.5"],
        "correctAnswer": 0,
        "hint": "שבעים וחמישה אחוזים הם שלושה רבעים. חלקו בשלוש כדי למצוא רבע אחד, ואז כפלו בארבע.",
        "solution_steps": [
            { "verbal_explanation": "שבעים וחמישה אחוזים הם שלושה רבעים מתוך השלם.", "math_expression": "75\\% = \\frac{3}{4}" },
            { "verbal_explanation": "שלושה רבעים שווים לשלושים שקלים. נחלק בשלוש כדי למצוא כמה שווה רבע אחד בודד.", "math_expression": "30 \\div 3 = 10" },
            { "verbal_explanation": "רבע אחד שווה לעשרה שקלים. השלם מורכב מארבעה רבעים, לכן נכפול בארבע.", "math_expression": "10 \\times 4" },
            { "verbal_explanation": "מחירו המלא של הצעצוע הוא ארבעים שקלים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "12% ממספר מסוים הם 24. מהו המספר?&rlm;",
        "options": ["200", "288", "100", "50"],
        "correctAnswer": 0,
        "hint": "חלקו את 24 ב-12 כדי למצוא כמה שווה אחוז אחד. לאחר מכן כפלו ב-100.",
        "solution_steps": [
            { "verbal_explanation": "אנו יודעים ששנים עשר אחוזים שווים לעשרים וארבע.", "math_expression": "12\\% = 24" },
            { "verbal_explanation": "נחלק את עשרים וארבע בשנים עשר כדי לגלות למה שווה אחוז אחד בלבד.", "math_expression": "24 \\div 12 = 2" },
            { "verbal_explanation": "אחוז אחד שווה לשתיים. השלם הוא מאה אחוזים, לכן נכפול במאה.", "math_expression": "2 \\times 100" },
            { "verbal_explanation": "המספר השלם שחיפשנו הוא מאתיים.", "math_expression": "200" }
        ],
        "final_answer": "200"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "150% ממחירו המקורי של מוצר הם 60 שקלים. מה היה מחירו המקורי (100%) של המוצר?&rlm;",
        "options": ["40", "90", "150", "30"],
        "correctAnswer": 0,
        "hint": "150% הם פעם וחצי מהשלם. חלקו את 60 ב-3 כדי למצוא חצי (50%), ואז כפלו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "מאה וחמישים אחוזים הם כמו שלושה חצאים (כל חצי הוא חמישים אחוז).", "math_expression": "150\\% = 3 \\times 50\\%" },
            { "verbal_explanation": "הסכום של שישים שקלים מתחלק לשלושת החצאים הללו. נחלק בשלוש למציאת חמישים אחוז.", "math_expression": "60 \\div 3 = 20" },
            { "verbal_explanation": "חמישים אחוזים שווים לעשרים. מאה אחוזים הם פעמיים חמישים אחוזים.", "math_expression": "20 \\times 2" },
            { "verbal_explanation": "המחיר המקורי השלם הוא ארבעים שקלים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "40% מהעמודים בספר הם 16 עמודים. כמה עמודים יש בספר כולו?&rlm;",
        "options": ["40", "64", "100", "80"],
        "correctAnswer": 0,
        "hint": "חלקו את 16 ב-4 כדי למצוא כמה הם 10%, ואז כפלו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "ארבעים אחוזים שווים לשישה עשר עמודים.", "math_expression": "40\\% = 16" },
            { "verbal_explanation": "נחלק בארבע את שני הצדדים כדי למצוא כמה הם עשרה אחוזים.", "math_expression": "16 \\div 4 = 4" },
            { "verbal_explanation": "עשרה אחוזים הם ארבעה עמודים. כדי להגיע למאה אחוז, נכפול פי עשר.", "math_expression": "4 \\times 10" },
            { "verbal_explanation": "בספר כולו יש ארבעים עמודים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת השלם",
        "question_text": "2% מכמות כסף מסוימת שווים ל-8 שקלים. מהי כמות הכסף השלמה?&rlm;",
        "options": ["400", "16", "40", "800"],
        "correctAnswer": 0,
        "hint": "כדי להגיע מ-2% ל-100%, צריך להכפיל ב-50.",
        "solution_steps": [
            { "verbal_explanation": "שני אחוזים שווים לשמונה שקלים.", "math_expression": "2\\% = 8" },
            { "verbal_explanation": "נבדוק בכמה צריך לכפול את שתיים כדי להגיע למאה אחוזים.", "math_expression": "100 \\div 2 = 50" },
            { "verbal_explanation": "נכפול את השמונה שקלים בחמישים כדי לקבל את השלם.", "math_expression": "8 \\times 50" },
            { "verbal_explanation": "הסכום השלם עומד על ארבע מאות שקלים.", "math_expression": "400" }
        ],
        "final_answer": "400"
    },

    // ==========================================
    // תת נושא 3: מציאת אחוז (10 שאלות)
    // ==========================================
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "במבחן היו 60 שאלות. יוסי ענה נכון על 15 שאלות. איזה אחוז מהמבחן ענה יוסי נכון?&rlm;",
        "options": ["25%", "15%", "45%", "30%"],
        "correctAnswer": 0,
        "hint": "צרו שבר שבו החלק (15) נמצא במונה והשלם (60) במכנה. צמצמו את השבר והפכו אותו לאחוזים.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את היחס בין התשובות הנכונות לסך כל השאלות בצורת שבר.", "math_expression": "\\frac{15}{60}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בחמש עשרה.", "math_expression": "\\frac{15 \\div 15}{60 \\div 15} = \\frac{1}{4}" },
            { "verbal_explanation": "רבע אחד מתוך שלם שווה לעשרים וחמישה אחוזים.", "math_expression": "25\\%" }
        ],
        "final_answer": "25%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "בכיתה יש 50 תלמידים. 20 מתוכם הם בנים. איזה אחוז מהווים הבנים בכיתה?&rlm;",
        "options": ["40%", "20%", "50%", "30%"],
        "correctAnswer": 0,
        "hint": "השבר הוא 20 חלקי 50. הרחיבו את השבר כך שהמכנה יהיה 100.",
        "solution_steps": [
            { "verbal_explanation": "ניצור שבר של מספר הבנים מתוך כלל התלמידים בכיתה.", "math_expression": "\\frac{20}{50}" },
            { "verbal_explanation": "אחוז הוא שבר עם מכנה מאה. נרחיב את השבר פי שתיים כדי להגיע למכנה מאה.", "math_expression": "\\frac{20 \\times 2}{50 \\times 2}" },
            { "verbal_explanation": "נקבל ארבעים חלקי מאה.", "math_expression": "\\frac{40}{100}" },
            { "verbal_explanation": "ארבעים מתוך מאה הם ארבעים אחוזים.", "math_expression": "40\\%" }
        ],
        "final_answer": "40%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "מתוך 10 ימים, ב-9 ימים ירד גשם. באיזה אחוז מהימים ירד גשם?&rlm;",
        "options": ["90%", "9%", "10%", "81%"],
        "correctAnswer": 0,
        "hint": "כדי להפוך שבר למכנה 100, כפלו מונה ומכנה בעשר.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הימים הגשומים כשבר מתוך כלל הימים.", "math_expression": "\\frac{9}{10}" },
            { "verbal_explanation": "כדי להפוך לאחוזים, נרחיב את השבר פי עשר כך שהמכנה יהפוך למאה.", "math_expression": "\\frac{9 \\times 10}{10 \\times 10}" },
            { "verbal_explanation": "נקבל תשעים חלקי מאה.", "math_expression": "\\frac{90}{100}" },
            { "verbal_explanation": "תשעים חלקי מאה הם תשעים אחוזים.", "math_expression": "90\\%" }
        ],
        "final_answer": "90%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "לדן היו 48 שקלים, והוא קנה חטיף שעולה 12 שקלים. איזה אחוז מהכסף שלו הוא בזבז?&rlm;",
        "options": ["25%", "12%", "36%", "50%"],
        "correctAnswer": 0,
        "hint": "צמצמו את השבר 12 חלקי 48 כדי לראות איזה חלק פשוט הוא מייצג.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב שבר: מחיר החטיף לחלק לסכום הכסף ההתחלתי.", "math_expression": "\\frac{12}{48}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בשנים עשר.", "math_expression": "\\frac{12 \\div 12}{48 \\div 12}" },
            { "verbal_explanation": "נקבל את השבר רבע.", "math_expression": "\\frac{1}{4}" },
            { "verbal_explanation": "רבע מהשלם שווה תמיד לעשרים וחמישה אחוזים.", "math_expression": "25\\%" }
        ],
        "final_answer": "25%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "קבוצה של 150 אנשים יצאה לטיול. 30 מתוכם שכחו להביא כובע. איזה אחוז מהאנשים שכח כובע?&rlm;",
        "options": ["20%", "30%", "15%", "25%"],
        "correctAnswer": 0,
        "hint": "השבר הוא 30 חלקי 150. צמצמו על ידי חלוקת שני המספרים בעשר, ואז בשלוש.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את היחס כשבר. שלושים מתוך מאה וחמישים.", "math_expression": "\\frac{30}{150}" },
            { "verbal_explanation": "נצמצם את השבר. נחלק את המונה והמכנה בעשר (נוריד אפס).", "math_expression": "\\frac{3}{15}" },
            { "verbal_explanation": "נחלק את המונה והמכנה בשלוש ונקבל חמישית.", "math_expression": "\\frac{1}{5}" },
            { "verbal_explanation": "חמישית מתוך מאה אחוזים שווה לעשרים אחוזים.", "math_expression": "100 \\div 5 = 20\\%" }
        ],
        "final_answer": "20%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "בקופסה יש 60 עפרונות, מתוכם 3 עפרונות שבורים. איזה אחוז מהעפרונות בקופסה שבורים?&rlm;",
        "options": ["5%", "3%", "20%", "10%"],
        "correctAnswer": 0,
        "hint": "השבר הוא 3 חלקי 60. צמצמו אותו לשבר פשוט והמירו לאחוזים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מספר העפרונות השבורים חלקי סך העפרונות.", "math_expression": "\\frac{3}{60}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בשלוש. נקבל אחד חלקי עשרים.", "math_expression": "\\frac{1}{20}" },
            { "verbal_explanation": "כדי להגיע למכנה מאה, נרחיב את השבר פי חמש.", "math_expression": "\\frac{1 \\times 5}{20 \\times 5} = \\frac{5}{100}" },
            { "verbal_explanation": "חמש מתוך מאה הם בדיוק חמישה אחוזים.", "math_expression": "5\\%" }
        ],
        "final_answer": "5%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "מכונית עברה 45 קילומטרים מתוך מסלול כולל של 60 קילומטרים. איזה אחוז מהמסלול היא עברה?&rlm;",
        "options": ["75%", "45%", "60%", "25%"],
        "correctAnswer": 0,
        "hint": "צמצמו את השבר 45 חלקי 60 על ידי חלוקה ב-15.",
        "solution_steps": [
            { "verbal_explanation": "החלק שעברנו הוא ארבעים וחמש, והשלם הוא שישים. נרשום כשבר.", "math_expression": "\\frac{45}{60}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת המונה והמכנה בחמש עשרה.", "math_expression": "\\frac{45 \\div 15}{60 \\div 15}" },
            { "verbal_explanation": "נקבל שלושה רבעים.", "math_expression": "\\frac{3}{4}" },
            { "verbal_explanation": "שלושה רבעים משלם הם שבעים וחמישה אחוזים.", "math_expression": "75\\%" }
        ],
        "final_answer": "75%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "עץ הניב השנה 35 תפוחים. מתוכם 7 תפוחים היו רקובים. איזה אחוז מהתפוחים היו רקובים?&rlm;",
        "options": ["20%", "7%", "25%", "14%"],
        "correctAnswer": 0,
        "hint": "צמצמו את השבר 7 חלקי 35 כדי לראות איזה חלק הוא מהווה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הכמות הרקובה חלקי הכמות הכוללת כשבר.", "math_expression": "\\frac{7}{35}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקת שני המספרים בשבע.", "math_expression": "\\frac{1}{5}" },
            { "verbal_explanation": "הגענו לשבר של חמישית אחת.", "math_expression": "\\frac{1}{5}" },
            { "verbal_explanation": "חמישית ממאה אחוזים שווה לעשרים אחוזים.", "math_expression": "20\\%" }
        ],
        "final_answer": "20%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "בספרייה יש 200 ספרים. 24 מתוכם הם ספרי מדע בדיוני. איזה אחוז מהווים ספרי המדע הבדיוני?&rlm;",
        "options": ["12%", "24%", "48%", "10%"],
        "correctAnswer": 0,
        "hint": "השבר הוא 24 מתוך 200. צמצמו אותו כך שהמכנה יהיה בדיוק 100 כדי לקרוא את האחוז ישירות.",
        "solution_steps": [
            { "verbal_explanation": "החלק הוא עשרים וארבע, מתוך שלם של מאתיים.", "math_expression": "\\frac{24}{200}" },
            { "verbal_explanation": "כדי לקבל אחוזים, אנו צריכים מכנה של מאה. נחלק את השבר כולו בשתיים.", "math_expression": "\\frac{24 \\div 2}{200 \\div 2}" },
            { "verbal_explanation": "נקבל שנים עשר חלקי מאה.", "math_expression": "\\frac{12}{100}" },
            { "verbal_explanation": "לכן, אחוז ספרי המדע הבדיוני הוא שנים עשר אחוזים.", "math_expression": "12\\%" }
        ],
        "final_answer": "12%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "מציאת אחוז",
        "question_text": "היעד לאיסוף בקבוקים היה 40 בקבוקים. התלמידים אספו 60 בקבוקים. איזה אחוז מהיעד הם אספו?&rlm;",
        "options": ["150%", "120%", "60%", "100%"],
        "correctAnswer": 0,
        "hint": "כאשר אוספים יותר מהיעד (השלם), האחוז עובר את ה-100%. חברו את היעד (100%) עם החצי הנוסף (50%).",
        "solution_steps": [
            { "verbal_explanation": "הכמות שנאספה גדולה מהיעד עצמו. נרשום את היחס ביניהם כשבר.", "math_expression": "\\frac{60}{40}" },
            { "verbal_explanation": "שישים מורכב מארבעים (השלם) ועוד עשרים (חצי מהשלם).", "math_expression": "\\frac{40 + 20}{40} = 1 + \\frac{20}{40}" },
            { "verbal_explanation": "הגענו לשלם אחד ועוד חצי. שלם מייצג מאה אחוז, וחצי מייצג חמישים אחוז.", "math_expression": "100\\% + 50\\%" },
            { "verbal_explanation": "בסך הכל, הם אספו מאה וחמישים אחוזים מהיעד המקורי.", "math_expression": "150\\%" }
        ],
        "final_answer": "150%"
    },

    // ==========================================
    // תת נושא 4: בעיות התייקרות והוזלה (10 שאלות)
    // ==========================================
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "חולצה שמחירה 100 שקלים נמכרת עכשיו בהנחה של 20%. מהו מחיר החולצה לאחר ההנחה?&rlm;",
        "options": ["80", "120", "20", "100"],
        "correctAnswer": 0,
        "hint": "חשבו כמה כסף יורד מהמחיר, וחסרו אותו מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שווי ההנחה. עשרים אחוזים ממאה שקלים שווים לעשרים שקלים.", "math_expression": "100 \\times \\frac{20}{100} = 20" },
            { "verbal_explanation": "כדי למצוא את המחיר החדש, נחסר את ההנחה מהמחיר המקורי.", "math_expression": "100 - 20" },
            { "verbal_explanation": "המחיר לאחר ההנחה הוא שמונים שקלים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מחירו של כרטיס קולנוע הוא 50 שקלים. בגלל סרט ארוך במיוחד, המחיר התייקר ב-10%. מהו המחיר החדש של הכרטיס?&rlm;",
        "options": ["55", "60", "40", "45"],
        "correctAnswer": 0,
        "hint": "חשבו כמה הם עשרה אחוזים מ-50 שקלים (חלקו בעשר). הוסיפו את התוצאה למחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ערך ההתייקרות. עשרה אחוזים שווים לעשירית מהסכום.", "math_expression": "50 \\div 10 = 5" },
            { "verbal_explanation": "ההתייקרות היא של חמישה שקלים. נוסיף אותה למחיר המקורי.", "math_expression": "50 + 5" },
            { "verbal_explanation": "המחיר החדש הוא חמישים וחמישה שקלים.", "math_expression": "55" }
        ],
        "final_answer": "55"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "אופניים שעלו 200 שקלים מוצעים למכירה בהנחה של 15%. מהו מחיר האופניים כעת?&rlm;",
        "options": ["170", "185", "30", "230"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את שווי ההנחה, וחסרו מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סכום ההנחה. נכפול את המחיר השלם באחוז ההנחה.", "math_expression": "200 \\times \\frac{15}{100}" },
            { "verbal_explanation": "נחלק את מאתיים במאה כדי לקבל שתיים, ונכפול בחמש עשרה. ההנחה היא שלושים שקלים.", "math_expression": "2 \\times 15 = 30" },
            { "verbal_explanation": "נחסר את סכום ההנחה מהמחיר המקורי של האופניים.", "math_expression": "200 - 30" },
            { "verbal_explanation": "המחיר החדש עומד על מאה ושבעים שקלים.", "math_expression": "170" }
        ],
        "final_answer": "170"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מחיר משחק ירד מ-80 שקלים ל-60 שקלים. מהו אחוז ההנחה שניתן על המשחק?&rlm;",
        "options": ["25%", "20%", "75%", "33%"],
        "correctAnswer": 0,
        "hint": "חשבו בכמה שקלים ירד המחיר (ההפרש). לאחר מכן, בדקו איזה אחוז מהווה ההפרש הזה מתוך המחיר המקורי של 80.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את גובה ההנחה בשקלים על ידי חיסור המחיר החדש מהישן.", "math_expression": "80 - 60 = 20" },
            { "verbal_explanation": "ההנחה היא של עשרים שקלים. נבדוק איזה חלק זה מהמחיר המקורי של שמונים.", "math_expression": "\\frac{20}{80}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בעשרים. נקבל רבע.", "math_expression": "\\frac{1}{4}" },
            { "verbal_explanation": "רבע משלם הוא תמיד עשרים וחמישה אחוזים. זהו אחוז ההנחה.", "math_expression": "25\\%" }
        ],
        "final_answer": "25%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "לאחר הנחה של 20%, מחירו של ספר הוא 40 שקלים. מה היה מחירו המקורי (לפני ההנחה)?&rlm;",
        "options": ["50", "48", "60", "32"],
        "correctAnswer": 0,
        "hint": "אם הייתה הנחה של 20%, המחיר ששולם מהווה 80% מהמחיר המקורי. חפשו מספר ש-80% ממנו שווים ל-40.",
        "solution_steps": [
            { "verbal_explanation": "אם המחיר ירד בעשרים אחוזים, הלקוח שילם שמונים אחוזים מהמחיר המקורי השלם.", "math_expression": "100\\% - 20\\% = 80\\%" },
            { "verbal_explanation": "אנו יודעים ששמונים אחוזים מהמחיר המקורי שווים לארבעים שקלים.", "math_expression": "80\\% = 40" },
            { "verbal_explanation": "נחלק את השלם (מאה אחוז) בשמונים אחוז כדי למצוא את המכפיל, או נחלק את המחיר לארבע כדי למצוא עשרים אחוז.", "math_expression": "40 \\div 4 = 10" },
            { "verbal_explanation": "עשרים אחוזים שווים לעשרה שקלים. מאה אחוזים הם חמש פעמים עשרים אחוז.", "math_expression": "10 \\times 5 = 50" },
            { "verbal_explanation": "המחיר המקורי היה חמישים שקלים.", "math_expression": "50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מחירו של שעון הוא 120 שקלים. הוא מוצע למכירה בהנחה של 25%. מה מחירו החדש?&rlm;",
        "options": ["90", "100", "85", "30"],
        "correctAnswer": 0,
        "hint": "עשרים וחמישה אחוזים הם רבע מהסכום. חשבו כמה זה רבע מ-120 וחסרו את זה.",
        "solution_steps": [
            { "verbal_explanation": "הנחה של עשרים וחמישה אחוזים שקולה להנחה של רבע מהמחיר המקורי.", "math_expression": "\\frac{1}{4}" },
            { "verbal_explanation": "נחשב כמה שווה הרבע של מאה ועשרים שקלים.", "math_expression": "120 \\div 4 = 30" },
            { "verbal_explanation": "ההנחה היא בסך שלושים שקלים. נחסר אותה מהמחיר המקורי.", "math_expression": "120 - 30" },
            { "verbal_explanation": "המחיר הסופי לתשלום הוא תשעים שקלים.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "לאחר התייקרות של 10%, מחירו של מוצר עלה ל-110 שקלים. מה היה מחירו המקורי?&rlm;",
        "options": ["100", "99", "121", "90"],
        "correctAnswer": 0,
        "hint": "המחיר החדש מהווה 110% מהמחיר הישן (השלם בתוספת ההתייקרות).",
        "solution_steps": [
            { "verbal_explanation": "ההתייקרות גרמה למחיר החדש להיות מאה ועשרה אחוזים מהמחיר המקורי.", "math_expression": "100\\% + 10\\% = 110\\%" },
            { "verbal_explanation": "אנו יודעים שמאה ועשרה אחוזים שווים למאה ועשרה שקלים.", "math_expression": "110\\% = 110" },
            { "verbal_explanation": "מכאן ניתן להסיק שכל אחוז אחד שווה לשקל אחד בדיוק.", "math_expression": "1\\% = 1" },
            { "verbal_explanation": "המחיר המקורי, שמייצג מאה אחוזים, שווה למאה שקלים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מחירו המקורי של כרטיס טיסה הוא 300 שקלים. הוא קיבל שתי הנחות עוקבות (אחת אחרי השנייה) של 10% כל אחת. מה מחירו הסופי?&rlm;",
        "options": ["243", "240", "250", "270"],
        "correctAnswer": 0,
        "hint": "חשבו את ההנחה הראשונה, מצאו את המחיר החדש. ואז חשבו 10% הנחה על המחיר החדש.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההנחה הראשונה של עשרה אחוזים (עשירית) מתוך שלוש מאות. ההנחה היא שלושים שקלים.", "math_expression": "300 \\div 10 = 30" },
            { "verbal_explanation": "המחיר החדש לאחר ההנחה הראשונה הוא מאתיים ושבעים שקלים.", "math_expression": "300 - 30 = 270" },
            { "verbal_explanation": "כעת נחשב הנחה נוספת של עשרה אחוזים מתוך המחיר המעודכן. עשירית ממאתיים ושבעים היא עשרים ושבע.", "math_expression": "270 \\div 10 = 27" },
            { "verbal_explanation": "נחסר את ההנחה השנייה מהמחיר המעודכן כדי למצוא את המחיר הסופי.", "math_expression": "270 - 27 = 243" },
            { "verbal_explanation": "המחיר הסופי לאחר שתי ההנחות הוא מאתיים ארבעים ושלושה שקלים.", "math_expression": "243" }
        ],
        "final_answer": "243"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מוצר נמכר בחצי מחיר (בהנחה של 50%). הלקוח שילם עליו 45 שקלים. מה היה המחיר המקורי של המוצר?&rlm;",
        "options": ["90", "22.5", "100", "45"],
        "correctAnswer": 0,
        "hint": "ההנחה היא חצי מחיר, ולכן הלקוח שילם את החצי השני. אם חצי שווה 45, כפלו בשתיים כדי למצוא את השלם.",
        "solution_steps": [
            { "verbal_explanation": "חמישים אחוזים הם החצי המדויק של מאה אחוזים.", "math_expression": "50\\% = \\frac{1}{2}" },
            { "verbal_explanation": "המחיר ששולם הוא למעשה חצי מהמחיר המקורי.", "math_expression": "\\frac{1}{2} = 45" },
            { "verbal_explanation": "כדי למצוא את המחיר השלם המקורי, פשוט נכפיל את החצי ששולם בשתיים.", "math_expression": "45 \\times 2" },
            { "verbal_explanation": "המחיר המקורי עמד על תשעים שקלים.", "math_expression": "90" }
        ],
        "final_answer": "90"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות התייקרות והוזלה",
        "question_text": "מחירו של עט התייקר מ-40 שקלים ל-50 שקלים. מהו אחוז ההתייקרות?&rlm;",
        "options": ["25%", "10%", "20%", "50%"],
        "correctAnswer": 0,
        "hint": "חשבו בכמה שקלים עלה המחיר. לאחר מכן, בדקו איזה אחוז מהווה התוספת הזו מתוך המחיר המקורי (40).",
        "solution_steps": [
            { "verbal_explanation": "נחשב את תוספת המחיר בשקלים על ידי חיסור המחיר המקורי מהמחיר החדש.", "math_expression": "50 - 40 = 10" },
            { "verbal_explanation": "העט התייקר בעשרה שקלים. נבדוק איזה חלק מהווה ההתייקרות מתוך המחיר המקורי של ארבעים שקלים.", "math_expression": "\\frac{10}{40}" },
            { "verbal_explanation": "נצמצם את השבר על ידי מחיקת האפסים, ונקבל רבע.", "math_expression": "\\frac{1}{4}" },
            { "verbal_explanation": "רבע מהשלם מתורגם לעשרים וחמישה אחוזים. זהו אחוז ההתייקרות.", "math_expression": "25\\%" }
        ],
        "final_answer": "25%"
    },

    // ==========================================
    // תת נושא 5: בעיות אחוזים מורכבות (10 שאלות)
    // ==========================================
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "בכיתה יש 40 תלמידים. 60% מהתלמידים הן בנות. מתוך הבנות, 25% מרכיבות משקפיים. כמה בנות מרכיבות משקפיים יש בכיתה?&rlm;",
        "options": ["6", "10", "15", "24"],
        "correctAnswer": 0,
        "hint": "חשבו קודם כל כמה בנות יש בסך הכל בכיתה. לאחר מכן, חשבו 25% (רבע) מתוך התוצאה שקיבלתם.",
        "solution_steps": [
            { "verbal_explanation": "תחילה נחשב את מספר הבנות בכיתה. עשרה אחוזים מארבעים הם ארבעה תלמידים.", "math_expression": "40 \\div 10 = 4" },
            { "verbal_explanation": "שישים אחוזים הם פי שש מעשרה אחוזים. לכן ישנן עשרים וארבע בנות.", "math_expression": "4 \\times 6 = 24" },
            { "verbal_explanation": "כעת נבדוק כמה בנות מרכיבות משקפיים מתוך העשרים וארבע. עשרים וחמישה אחוזים הם רבע.", "math_expression": "\\frac{25}{100} = \\frac{1}{4}" },
            { "verbal_explanation": "נחלק את מספר הבנות הכולל בארבע.", "math_expression": "24 \\div 4 = 6" },
            { "verbal_explanation": "ישנן שש בנות שמרכיבות משקפיים בכיתה.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "משכורתו של עובד היא 10,000 שקלים. בחודש הראשון משכורתו עלתה ב-10%. בחודש שלאחריו (בגלל משבר) משכורתו קוצצה ב-10%. מהי משכורתו החדשה בסוף התהליך?&rlm;",
        "options": ["9,900", "10,000", "10,100", "9,000"],
        "correctAnswer": 0,
        "hint": "ההעלאה מחושבת מתוך 10,000. הקיצוץ, לעומת זאת, מחושב מתוך המשכורת החדשה והגבוהה יותר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את תוספת המשכורת. עשרה אחוזים מעשרת אלפים הם אלף שקלים.", "math_expression": "10000 \\div 10 = 1000" },
            { "verbal_explanation": "המשכורת החדשה לאחר ההעלאה היא אחד עשר אלף שקלים.", "math_expression": "10000 + 1000 = 11000" },
            { "verbal_explanation": "כעת מגיע קיצוץ של עשרה אחוזים מהמשכורת המעודכנת. עשירית מאחד עשר אלף הם אלף ומאה שקלים.", "math_expression": "11000 \\div 10 = 1100" },
            { "verbal_explanation": "נחסר את הקיצוץ מהמשכורת הגבוהה כדי לקבל את המשכורת הסופית.", "math_expression": "11000 - 1100" },
            { "verbal_explanation": "המשכורת הסופית היא תשעת אלפים ותשע מאות שקלים.", "math_expression": "9900" }
        ],
        "final_answer": "9,900"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "בכוס יש 200 גרם של מי מלח. ריכוז המלח בכוס הוא 10%. לתוך הכוס שפכו עוד 50 גרם של מלח נקי. מה יהיה הריכוז (באחוזים) של המלח בתערובת החדשה?&rlm;",
        "options": ["28%", "30%", "20%", "25%"],
        "correctAnswer": 0,
        "hint": "חשבו כמה מלח היה בהתחלה והוסיפו לו 50 גרם. שימו לב שגם המשקל הכולל של הכוס עלה ב-50 גרם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את כמות המלח המקורית. עשרה אחוזים ממאתיים הם עשרים גרם.", "math_expression": "200 \\div 10 = 20" },
            { "verbal_explanation": "הוספנו עוד חמישים גרם מלח. כמות המלח הכוללת כעת היא שבעים גרם.", "math_expression": "20 + 50 = 70" },
            { "verbal_explanation": "גם המשקל הכולל של התערובת בכוס גדל בחמישים גרם ועומד על מאתיים וחמישים.", "math_expression": "200 + 50 = 250" },
            { "verbal_explanation": "נחשב את האחוז החדש: כמות המלח לחלק למשקל התערובת הכולל.", "math_expression": "\\frac{70}{250}" },
            { "verbal_explanation": "נצמצם את השבר ונרחיב אותו למכנה מאה כדי לראות את האחוזים. התוצאה היא עשרים ושמונה אחוזים.", "math_expression": "\\frac{7}{25} = \\frac{28}{100} = 28\\%" }
        ],
        "final_answer": "28%"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "30% ממספר לא ידוע שווים ל-18. מה יהיו 50% מאותו המספר?&rlm;",
        "options": ["30", "60", "24", "45"],
        "correctAnswer": 0,
        "hint": "מצאו קודם כל את המספר השלם (100%). לאחר מכן, קל מאוד לחשב 50% ממנו (שזה החצי שלו).",
        "solution_steps": [
            { "verbal_explanation": "שלושים אחוזים הם שמונה עשרה. נחלק בשלוש כדי למצוא כמה הם עשרה אחוזים.", "math_expression": "18 \\div 3 = 6" },
            { "verbal_explanation": "עשרה אחוזים שווים לשש. כדי למצוא את השלם המלא (מאה אחוז), נכפול בעשר.", "math_expression": "6 \\times 10 = 60" },
            { "verbal_explanation": "המספר השלם הוא שישים. אנו מתבקשים למצוא חמישים אחוזים ממנו, כלומר את החצי.", "math_expression": "60 \\div 2" },
            { "verbal_explanation": "החצי של שישים הוא שלושים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "מחירו של פריט עלה ב-20%, ולאחר תקופה מסוימת המחיר ירד ב-20%. המחיר הסופי לאחר שני השינויים הוא 96 שקלים. מה היה מחירו המקורי של הפריט לפני שני השינויים?&rlm;",
        "options": ["100", "96", "104", "120"],
        "correctAnswer": 0,
        "hint": "נניח שהמחיר היה 100 שקלים. העלו ב-20% ואז הורידו 20%. כמה קיבלתם? נסו להשתמש בזה כדי לפתור.",
        "solution_steps": [
            { "verbal_explanation": "נניח לשם הבדיקה שהמחיר המקורי היה מאה שקלים.", "math_expression": "100" },
            { "verbal_explanation": "עלייה של עשרים אחוזים מביאה את המחיר למאה ועשרים שקלים.", "math_expression": "100 + 20 = 120" },
            { "verbal_explanation": "ירידה של עשרים אחוזים מהמחיר החדש מחושבת על סמך מאה ועשרים. עשרה אחוזים הם שנים עשר, ועשרים אחוזים הם עשרים וארבע.", "math_expression": "120 \\times \\frac{20}{100} = 24" },
            { "verbal_explanation": "נחסר את הירידה מהמחיר המעודכן: מאה ועשרים פחות עשרים וארבע שווה לתשעים ושש.", "math_expression": "120 - 24 = 96" },
            { "verbal_explanation": "התוצאה שלנו מההנחה זהה בדיוק לנתון בשאלה. מכאן שהמחיר המקורי היה אכן מאה שקלים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "בכיתה יש 40 תלמידים. ביום מסוים, 10% מהתלמידים נעדרו מבית הספר. מבין התלמידים שכן נכחו בכיתה באותו יום, 50% קיבלו ציון מעולה במבחן. כמה תלמידים קיבלו ציון מעולה?&rlm;",
        "options": ["18", "20", "16", "14"],
        "correctAnswer": 0,
        "hint": "חשבו קודם כמה תלמידים הגיעו לבית הספר (40 פחות הנעדרים). ואז חשבו את הציון מתוכם.",
        "solution_steps": [
            { "verbal_explanation": "תחילה נחשב כמה תלמידים נעדרו. עשרה אחוזים מתוך ארבעים הם ארבעה תלמידים.", "math_expression": "40 \\div 10 = 4" },
            { "verbal_explanation": "נחסר את הנעדרים מהכמות הכוללת כדי למצוא את כמות התלמידים שנכחו בכיתה.", "math_expression": "40 - 4 = 36" },
            { "verbal_explanation": "מתוך שלושים ושישה התלמידים שנכחו, חמישים אחוזים (שהם החצי) קיבלו ציון מעולה.", "math_expression": "36 \\div 2" },
            { "verbal_explanation": "שמונה עשר תלמידים קיבלו ציון מעולה באותו יום.", "math_expression": "18" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "פריט נמכר בהנחה של 25%. המחיר שהלקוח שילם לאחר ההנחה הוא 60 שקלים. כמה כסף נחסך ללקוח (בכמה שקלים ניתנה ההנחה)?&rlm;",
        "options": ["20", "15", "80", "25"],
        "correctAnswer": 0,
        "hint": "אם ההנחה היא 25%, הלקוח שילם 75% מהמחיר המקורי. מצאו את המחיר המקורי וחסרו ממנו את מה ששולם.",
        "solution_steps": [
            { "verbal_explanation": "הלקוח שילם שבעים וחמישה אחוזים מהמחיר המקורי (שהם שלושה רבעים), וסכום זה שווה לשישים שקלים.", "math_expression": "75\\% = \\frac{3}{4} = 60" },
            { "verbal_explanation": "כדי למצוא כמה שווה רבע אחד מהמחיר, נחלק את שישים בשלוש.", "math_expression": "60 \\div 3 = 20" },
            { "verbal_explanation": "רבע אחד מהמחיר המקורי הוא עשרים שקלים. זוהי בדיוק ההנחה (של עשרים וחמישה אחוזים) שקיבל הלקוח.", "math_expression": "20" },
            { "verbal_explanation": "סכום הכסף שנחסך ללקוח עומד על עשרים שקלים.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "אדם הפקיד בבנק סכום של 2,000 שקלים. תוכנית החיסכון שלו נותנת לו ריבית (רווח) של 5% בכל שנה. כמה כסף יהיה לו בבנק לאחר שנתיים, בהנחה שהריבית מחושבת בכל פעם על הסכום הכולל המעודכן?&rlm;",
        "options": ["2205", "2200", "2100", "2105"],
        "correctAnswer": 0,
        "hint": "חשבו כמה נוסף לו בשנה הראשונה, והוסיפו לסכום המקורי. אחר כך חשבו 5% מהסכום החדש שהתקבל.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הרווח בשנה הראשונה. חמישה אחוזים מאלפיים. עשרה אחוז הם מאתיים, לכן חמישה אחוז הם מאה.", "math_expression": "2000 \\times \\frac{5}{100} = 100" },
            { "verbal_explanation": "בסוף השנה הראשונה הצטברו בחשבון אלפיים ומאה שקלים.", "math_expression": "2000 + 100 = 2100" },
            { "verbal_explanation": "בשנה השנייה, הרווח מחושב על הסכום המעודכן. נחשב חמישה אחוזים מאלפיים ומאה. עשרה אחוז הם מאתיים ועשר, לכן חמישה אחוז הם מאה וחמש.", "math_expression": "2100 \\times \\frac{5}{100} = 105" },
            { "verbal_explanation": "נוסיף את הרווח של השנה השנייה לסכום המעודכן לקבלת התשובה הסופית.", "math_expression": "2100 + 105 = 2205" }
        ],
        "final_answer": "2205"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "הכמות של קבוצה א' גדולה ב-50% מהכמות של קבוצה ב'. ידוע שבקבוצה ב' יש 20 אנשים. כמה אנשים יש בקבוצה א'?&rlm;",
        "options": ["30", "10", "40", "25"],
        "correctAnswer": 0,
        "hint": "קבוצה א' מכילה את הכמות של קבוצה ב', ועוד תוספת של חצי ממנה (50%).",
        "solution_steps": [
            { "verbal_explanation": "נחשב מהי התוספת של חמישים אחוזים ביחס לקבוצה ב'. חמישים אחוזים מתוך עשרים הם עשרה אנשים (החצי).", "math_expression": "20 \\div 2 = 10" },
            { "verbal_explanation": "הכמות בקבוצה א' מורכבת מהכמות הבסיסית של קבוצה ב' ועוד התוספת שחישבנו.", "math_expression": "20 + 10" },
            { "verbal_explanation": "נבצע את החיבור ונקבל שקבוצה א' מונה שלושים אנשים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "percentages_grade_8",
        "subTopic": "בעיות אחוזים מורכבות",
        "question_text": "במפעל, 80% מהעובדים הם גברים והשאר נשים. מבין הגברים, רק 10% משמשים בתפקידי ניהול. איזה אחוז מכלל העובדים במפעל הם גברים בתפקיד ניהולי?&rlm;",
        "options": ["8%", "10%", "80%", "18%"],
        "correctAnswer": 0,
        "hint": "חשבו כמה הם עשרה אחוזים מתוך שמונים אחוזים. לא מתוך מאה.",
        "solution_steps": [
            { "verbal_explanation": "אחוז הגברים הכללי מתוך המפעל כולו עומד על שמונים אחוזים.", "math_expression": "80\\%" },
            { "verbal_explanation": "רק עשירית (עשרה אחוזים) מתוך קבוצת הגברים הזו הם מנהלים. נחשב עשירית מתוך שמונים.", "math_expression": "80 \\times \\frac{10}{100}" },
            { "verbal_explanation": "שמונים לחלק לעשר נותן שמונה.", "math_expression": "8" },
            { "verbal_explanation": "לכן, גברים מנהלים מהווים בדיוק שמונה אחוזים מכלל עובדי המפעל.", "math_expression": "8\\%" }
        ],
        "final_answer": "8%"
    }
];