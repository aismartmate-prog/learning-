const questionsDB = [
    // ==========================================
    // תת נושא 1: קריאת נתונים מטבלאות וגרפים (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בדיאגרמת המקלות מוצגים ציוני תלמידים. 4 תלמידים קיבלו 60, 8 קיבלו 70, 5 קיבלו 80 ו-3 קיבלו 90. כמה תלמידים יש סך הכל בכיתה?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:300px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='30' y1='120' x2='230' y2='120' stroke='#64748b' stroke-width='2'/><line x1='30' y1='20' x2='30' y2='120' stroke='#64748b' stroke-width='2'/><rect x='50' y='80' width='20' height='40' fill='#3b82f6'/><rect x='100' y='40' width='20' height='80' fill='#3b82f6'/><rect x='150' y='70' width='20' height='50' fill='#3b82f6'/><rect x='200' y='90' width='20' height='30' fill='#3b82f6'/></svg></div>",
        options: ["20", "22", "18", "24"],
        correctAnswer: 0,
        hint: "כדי למצוא את סך כל התלמידים בכיתה, עליכם לחבר את כל השכיחויות (מספר התלמידים) של כל הציונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי השכיחות של הציון הראשון.", math_expression: "f_1 = 4" },
            { verbal_explanation: "שלב 2: זיהוי השכיחות של הציון השני.", math_expression: "f_2 = 8" },
            { verbal_explanation: "שלב 3: זיהוי השכיחות של הציון השלישי.", math_expression: "f_3 = 5" },
            { verbal_explanation: "שלב 4: זיהוי השכיחות של הציון הרביעי.", math_expression: "f_4 = 3" },
            { verbal_explanation: "שלב 5: חיבור כל השכיחויות למציאת סך הכל.", math_expression: "n = 4 + 8 + 5 + 3" },
            { verbal_explanation: "שלב 6: ביצוע פעולת החיבור לקבלת גודל המדגם.", math_expression: "n = 20" },
            { verbal_explanation: "שלב 7: התוצאה הסופית המייצגת את מספר התלמידים.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 2
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בטבלה נתון התפלגות מספר הילדים במשפחה. לשתי משפחות יש ילד אחד, לחמש משפחות יש 2 ילדים, לשלוש משפחות יש 3 ילדים. מהו השכיח?",
        options: ["2", "5", "3", "1"],
        correctAnswer: 0,
        hint: "השכיח הוא הערך (מספר הילדים במקרה זה) המופיע מספר הפעמים הרב ביותר (בעל השכיחות הגבוהה ביותר).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי השכיחות עבור ילד אחד.", math_expression: "f_1 = 2" },
            { verbal_explanation: "שלב 2: זיהוי השכיחות עבור שני ילדים.", math_expression: "f_2 = 5" },
            { verbal_explanation: "שלב 3: זיהוי השכיחות עבור שלושה ילדים.", math_expression: "f_3 = 3" },
            { verbal_explanation: "שלב 4: מציאת השכיחות הגבוהה ביותר מבין המספרים.", math_expression: "5 > 3 > 2" },
            { verbal_explanation: "שלב 5: השיוך של השכיחות הגבוהה ביותר לערך המתאים לו.", math_expression: "f_{max} = 5" },
            { verbal_explanation: "שלב 6: קביעת הערך השכיח על סמך זאת.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 3
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בסקר על חיות מחמד, 10 אנשים אמרו כלב, 6 חתול, ו-4 אוגר. מהי השכיחות היחסית של האנשים שבחרו חתול?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='40' y='50' width='30' height='100' fill='#f59e0b'/><rect x='90' y='90' width='30' height='60' fill='#f59e0b'/><rect x='140' y='110' width='30' height='40' fill='#f59e0b'/><line x1='20' y1='150' x2='180' y2='150' stroke='#64748b' stroke-width='2'/></svg></div>",
        options: ["0.3", "0.5", "0.6", "0.2"],
        correctAnswer: 0,
        hint: "שכיחות יחסית היא השכיחות של הערך המבוקש חלקי סך כל השכיחויות. חשבו קודם את הסך הכל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתון של הקבוצה המבוקשת.", math_expression: "f_2 = 6" },
            { verbal_explanation: "שלב 2: סכימת כל משתתפי הסקר כדי למצוא את השלם.", math_expression: "n = 10 + 6 + 4" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור.", math_expression: "n = 20" },
            { verbal_explanation: "שלב 4: הגדרת נוסחת השכיחות היחסית.", math_expression: "P = \\dfrac{f_2}{n}" },
            { verbal_explanation: "שלב 5: הצבת הנתונים שמצאנו.", math_expression: "P = \\dfrac{6}{20}" },
            { verbal_explanation: "שלב 6: צמצום השבר והמרתו לעשרוני (חלוקת מונה ומכנה בשתיים).", math_expression: "P = \\dfrac{3}{10}" },
            { verbal_explanation: "שלב 7: הרישום הסופי לעשרוני.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 4
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בטבלת שכיחויות של מספר ספרים שקראו בחופש, טווח הנתונים הוא 5. הערך המינימלי בסקר הוא 2. מהו הערך המקסימלי?",
        options: ["7", "3", "10", "5"],
        correctAnswer: 0,
        hint: "טווח הנתונים מוגדר כהפרש שבין הערך המקסימלי לערך המינימלי בקבוצת הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הנוסחה לחישוב טווח נתונים.", math_expression: "R = x_{max} - x_{min}" },
            { verbal_explanation: "שלב 2: הצבת הטווח הידוע בנוסחה.", math_expression: "5 = x_{max} - x_{min}" },
            { verbal_explanation: "שלב 3: הצבת הערך המינימלי הידוע.", math_expression: "5 = x_{max} - 2" },
            { verbal_explanation: "שלב 4: הוספת שתיים לשני האגפים כדי לבודד את המקסימום.", math_expression: "x_{max} = 5 + 2" },
            { verbal_explanation: "שלב 5: חישוב הפעולה.", math_expression: "x_{max} = 7" },
            { verbal_explanation: "שלב 6: קבלת התשובה הסופית.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 5
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "נתונה קבוצת נתונים עם השכיחויות הבאות: הערך 1 מופיע 3 פעמים, הערך 2 מופיע 5 פעמים, והערך 3 מופיע איקס פעמים. סך הכל יש 10 נתונים. מהו איקס?",
        options: ["2", "5", "3", "1"],
        correctAnswer: 0,
        hint: "סכום כל השכיחויות חייב להיות שווה לסך כל הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת סכום השכיחויות.", math_expression: "3 + 5 + x = 10" },
            { verbal_explanation: "שלב 2: כינוס השכיחויות הידועות יחדיו.", math_expression: "8 + x = 10" },
            { verbal_explanation: "שלב 3: החסרת שמונה משני האגפים למציאת השכיחות החסרה.", math_expression: "x = 10 - 8" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 5: התשובה לערך הנעלם.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 6
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בגרף נתונות שעות שינה. 10% מהנשאלים ישנים 6 שעות, 50% ישנים 7 שעות, והשאר ישנים 8 שעות. מהו אחוז הנשאלים שישנים 8 שעות?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:50%; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='90' fill='none' stroke='#10b981' stroke-width='4'/><line x1='100' y1='100' x2='100' y2='10' stroke='#10b981' stroke-width='2'/><line x1='100' y1='100' x2='10' y2='100' stroke='#10b981' stroke-width='2'/></svg></div>",
        options: ["40", "60", "30", "50"],
        correctAnswer: 0,
        hint: "סך כל האחוזים במדגם שלם תמיד שווה למאה אחוז.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת סכום האחוזים של המדגם השלם.", math_expression: "100" },
            { verbal_explanation: "שלב 2: סכימת האחוזים הידועים מתוך הנתונים.", math_expression: "S = 10 + 50" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החיבור.", math_expression: "S = 60" },
            { verbal_explanation: "שלב 4: מציאת האחוז החסר על ידי חיסור מהשלם.", math_expression: "x = 100 - 60" },
            { verbal_explanation: "שלב 5: חישוב ההפרש.", math_expression: "x = 40" },
            { verbal_explanation: "שלב 6: הרישום הסופי להשלמת התרגיל.", math_expression: "40" }
        ],
        final_answer: "40"
    },

    // שאלה מספר 7
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "במפעל יש 50 עובדים. השכיחות היחסית של העובדים במחלקת ייצור היא 0.4. כמה עובדים יש במחלקת ייצור?",
        options: ["20", "40", "10", "25"],
        correctAnswer: 0,
        hint: "כדי למצוא את הכמות המספרית מתוך שכיחות יחסית, הכפילו את השכיחות היחסית בסך כל העובדים במפעל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי גודל המדגם השלם.", math_expression: "n = 50" },
            { verbal_explanation: "שלב 2: זיהוי השכיחות היחסית הנתונה.", math_expression: "P = 0.4" },
            { verbal_explanation: "שלב 3: כתיבת הנוסחה למציאת השכיחות על פי השלם והיחס.", math_expression: "f = P \\times n" },
            { verbal_explanation: "שלב 4: הצבת הנתונים.", math_expression: "f = 0.4 \\times 50" },
            { verbal_explanation: "שלב 5: ביצוע פעולת הכפל העשרוני.", math_expression: "f = 20" },
            { verbal_explanation: "שלב 6: התוצאה המספרית הסופית.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 8
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "מתוך 40 נשאלים, 12 ענו שהם אוהבים כדורסל. מהו אחוז האוהבים כדורסל מכלל הנשאלים?",
        options: ["30", "12", "40", "25"],
        correctAnswer: 0,
        hint: "חשבו את השכיחות היחסית ולאחר מכן הכפילו במאה כדי לקבל את התוצאה באחוזים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת שכיחות יחסית.", math_expression: "P = \\dfrac{12}{40}" },
            { verbal_explanation: "שלב 2: צמצום השבר. נחלק את המונה והמכנה בארבע.", math_expression: "P = \\dfrac{3}{10}" },
            { verbal_explanation: "שלב 3: המרה למספר עשרוני.", math_expression: "P = 0.3" },
            { verbal_explanation: "שלב 4: המרה מאחוזים לשבר על ידי הכפלה במאה.", math_expression: "p = 0.3 \\times 100" },
            { verbal_explanation: "שלב 5: חישוב התוצאה.", math_expression: "p = 30" },
            { verbal_explanation: "שלב 6: רישום האחוז.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 9
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "נתונה סדרה של גילאים: 12, 14, 14, 15, 17, 18. מהי השכיחות של הגיל 14?",
        options: ["2", "14", "1", "6"],
        correctAnswer: 0,
        hint: "שכיחות היא פשוט כמה פעמים ערך מסוים מופיע בתוך רשימת הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סריקת כל הנתונים המופיעים ברשימה.", math_expression: "12 , 14 , 14 , 15 , 17 , 18" },
            { verbal_explanation: "שלב 2: התמקדות בערך המבוקש למציאת השכיחות.", math_expression: "x = 14" },
            { verbal_explanation: "שלב 3: ספירת ההופעה הראשונה.", math_expression: "1" },
            { verbal_explanation: "שלב 4: ספירת ההופעה השנייה.", math_expression: "2" },
            { verbal_explanation: "שלב 5: סיכום הספירה.", math_expression: "f = 2" },
            { verbal_explanation: "שלב 6: הצגת התשובה.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 10
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "בטבלה נתונים מחירי ספרים בספרייה: 20 שקלים, 30 שקלים ו-40 שקלים. חצי מהספרים עולים 20 שקלים. ידוע שיש 100 ספרים בסך הכל. כמה עולים 20 שקלים?",
        options: ["50", "20", "100", "25"],
        correctAnswer: 0,
        hint: "המילה 'חצי' משמעותה שכיחות יחסית של 0.5. הכפילו זאת בסך כל הספרים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת המונח חצי כשכיחות יחסית.", math_expression: "P = 0.5" },
            { verbal_explanation: "שלב 2: זיהוי גודל המדגם שהוא מאה.", math_expression: "n = 100" },
            { verbal_explanation: "שלב 3: כתיבת הנוסחה למציאת השכיחות.", math_expression: "f = P \\times n" },
            { verbal_explanation: "שלב 4: הצבה של הערכים.", math_expression: "f = 0.5 \\times 100" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החילוק בשתיים (או כפל בחצי).", math_expression: "f = 50" },
            { verbal_explanation: "שלב 6: הפתרון למספר הספרים.", math_expression: "50" }
        ],
        final_answer: "50"
    },

    // שאלה מספר 11
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "מה יכול להיות סכום השכיחויות היחסיות של כל הערכים האפשריים במחקר סטטיסטי מלא תקין?",
        options: ["1", "100", "0", "תלוי בנתונים"],
        correctAnswer: 0,
        hint: "השכיחות היחסית מתארת חלק מתוך שלם. סכום כל החלקים המרכיבים שלם הוא תמיד אחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שכיחות יחסית היא שבר המתאר חלק מגודל המדגם הכולל.", math_expression: "P_i = \\dfrac{f_i}{n}" },
            { verbal_explanation: "שלב 2: סכום כל השכיחויות הרגילות שווה לגודל המדגם.", math_expression: "\\Sigma f = n" },
            { verbal_explanation: "שלב 3: הצבת סכום זה בסכום השכיחויות היחסיות.", math_expression: "\\Sigma P = \\dfrac{\\Sigma f}{n}" },
            { verbal_explanation: "שלב 4: החלפת המונה באות המייצגת את סך המדגם.", math_expression: "\\Sigma P = \\dfrac{n}{n}" },
            { verbal_explanation: "שלב 5: חלוקת מספר בעצמו שווה תמיד למספר קבוע.", math_expression: "\\Sigma P = 1" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה מספר 12
    {
        topic: "statistics_probability_172",
        subTopic: "קריאת נתונים מטבלאות וגרפים",
        question_text: "קבוצת נתונים מכילה את המספרים: 3, 3, 5, 8. מהו טווח הנתונים?",
        options: ["5", "3", "8", "6"],
        correctAnswer: 0,
        hint: "זכרו שטווח הוא הפער בין המספר הגדול ביותר לקטן ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סקירת הנתונים ואיתור הערך המינימלי.", math_expression: "x_{min} = 3" },
            { verbal_explanation: "שלב 2: איתור הערך המקסימלי מבין הנתונים.", math_expression: "x_{max} = 8" },
            { verbal_explanation: "שלב 3: שימוש בנוסחת הטווח.", math_expression: "R = x_{max} - x_{min}" },
            { verbal_explanation: "שלב 4: הצבת המספרים אל תוך הנוסחה.", math_expression: "R = 8 - 3" },
            { verbal_explanation: "שלב 5: חישוב החיסור.", math_expression: "R = 5" },
            { verbal_explanation: "שלב 6: בחירת התשובה.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // ==========================================
    // תת נושא 2: ממוצע וחציון (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "חשבו את הממוצע של קבוצת הציונים הבאה: 70, 80, 90.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='30' y='40' width='30' height='40' fill='#8b5cf6'/><rect x='85' y='30' width='30' height='50' fill='#8b5cf6'/><rect x='140' y='20' width='30' height='60' fill='#8b5cf6'/><line x1='10' y1='80' x2='190' y2='80' stroke='#64748b' stroke-width='2'/></svg></div>",
        options: ["80", "70", "90", "240"],
        correctAnswer: 0,
        hint: "הממוצע מחושב על ידי חיבור כל הנתונים וחלוקת הסכום במספר הנתונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הממוצע.", math_expression: "\\bar{x} = \\dfrac{70 + 80 + 90}{3}" },
            { verbal_explanation: "שלב 2: סכימת שני המספרים הראשונים.", math_expression: "70 + 80 = 150" },
            { verbal_explanation: "שלב 3: סכימת המונה השלם.", math_expression: "150 + 90 = 240" },
            { verbal_explanation: "שלב 4: כתיבת השבר במלואו.", math_expression: "\\bar{x} = \\dfrac{240}{3}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החילוק של מאתים וארבעים בשלוש.", math_expression: "\\bar{x} = 80" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "80" }
        ],
        final_answer: "80"
    },

    // שאלה מספר 14
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "מהו החציון של קבוצת הנתונים הבאה: 12, 15, 11, 18, 14?",
        options: ["14", "15", "12", "11"],
        correctAnswer: 0,
        hint: "לפני מציאת החציון חובה לסדר את הנתונים בסדר עולה! החציון הוא המספר שנמצא בדיוק באמצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סידור הנתונים מהקטן לגדול.", math_expression: "11 , 12 , 14 , 15 , 18" },
            { verbal_explanation: "שלב 2: ספירת כמות הנתונים לזיהוי זוגי או אי זוגי.", math_expression: "n = 5" },
            { verbal_explanation: "שלב 3: שימוש בנוסחה למיקום החציון כשיש מספר אי זוגי של נתונים.", math_expression: "L = \\dfrac{5 + 1}{2}" },
            { verbal_explanation: "שלב 4: חישוב המיקום.", math_expression: "L = 3" },
            { verbal_explanation: "שלב 5: איתור הנתון הנמצא במקום השלישי ברשימה המסודרת.", math_expression: "M_{e} = 14" },
            { verbal_explanation: "שלב 6: ציון התשובה.", math_expression: "14" }
        ],
        final_answer: "14"
    },

    // שאלה מספר 15
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "מצאו את החציון של סדרת המספרים הזוגית הבאה: 4, 8, 2, 10.",
        options: ["6", "4", "8", "5"],
        correctAnswer: 0,
        hint: "בסדרה זוגית, מסדרים את המספרים ועושים ממוצע חשבוני של שני המספרים האמצעיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סידור הרשימה בסדר עולה.", math_expression: "2 , 4 , 8 , 10" },
            { verbal_explanation: "שלב 2: מספר הנתונים הוא זוגי.", math_expression: "n = 4" },
            { verbal_explanation: "שלב 3: מציאת המיקום של שני המספרים האמצעיים.", math_expression: "L_1 = 2 \\quad , \\quad L_2 = 3" },
            { verbal_explanation: "שלב 4: זיהוי המספרים במיקומים אלו.", math_expression: "x_2 = 4 \\quad , \\quad x_3 = 8" },
            { verbal_explanation: "שלב 5: חישוב הממוצע של שני מספרים אלו למציאת החציון.", math_expression: "M_{e} = \\dfrac{4 + 8}{2}" },
            { verbal_explanation: "שלב 6: סכימה במונה.", math_expression: "M_{e} = \\dfrac{12}{2}" },
            { verbal_explanation: "שלב 7: חלוקה לקבלת התוצאה.", math_expression: "M_{e} = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 16
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "בטבלה מוצגים נתונים: הערך 5 מופיע פעמיים, הערך 10 מופיע 3 פעמים. מהו הממוצע?",
        options: ["8", "7.5", "5", "10"],
        correctAnswer: 0,
        hint: "הכפילו כל ערך בשכיחות שלו, חברו את התוצאות, וחלקו בסך כל השכיחויות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סך הכל מספר הנתונים בטבלה (סכום השכיחויות).", math_expression: "n = 2 + 3 = 5" },
            { verbal_explanation: "שלב 2: בניית המונה על ידי הכפלת כל ערך בשכיחותו.", math_expression: "\\Sigma x = (5 \\times 2) + (10 \\times 3)" },
            { verbal_explanation: "שלב 3: ביצוע כפל ראשון.", math_expression: "10" },
            { verbal_explanation: "שלב 4: ביצוע כפל שני.", math_expression: "30" },
            { verbal_explanation: "שלב 5: חיבור התוצאות במונה.", math_expression: "\\Sigma x = 10 + 30 = 40" },
            { verbal_explanation: "שלב 6: חלוקת סכום הערכים במספר הנתונים הכולל.", math_expression: "\\bar{x} = \\dfrac{40}{5}" },
            { verbal_explanation: "שלב 7: קבלת הממוצע.", math_expression: "\\bar{x} = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 17
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "ממוצע הציונים של שני מבחנים הוא 85. הציון הראשון הוא 80. מהו הציון השני?",
        options: ["90", "85", "100", "75"],
        correctAnswer: 0,
        hint: "סכום הציונים חלקי שתיים שווה ל-85. בנו משוואה והכפילו בשתיים כדי למצוא את הציון החסר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה המייצגת את חישוב הממוצע.", math_expression: "85 = \\dfrac{80 + x}{2}" },
            { verbal_explanation: "שלב 2: הכפלת שני האגפים בשתיים לביטול המכנה.", math_expression: "170 = 80 + x" },
            { verbal_explanation: "שלב 3: העברת שמונים אגף לשם בידוד הנעלם.", math_expression: "x = 170 - 80" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "90" },
            { verbal_explanation: "שלב 5: קביעת הציון השני.", math_expression: "x = 90" }
        ],
        final_answer: "90"
    },

    // שאלה מספר 18
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "לקבוצה של 4 ילדים נוסף ילד חמישי. הגיל הממוצע של 4 הילדים היה 10. הגיל של הילד החדש הוא גם 10. מהו הממוצע החדש?&rlm;",
        options: ["10", "12", "8", "50"],
        correctAnswer: 0,
        hint: "כאשר מוסיפים לקבוצה ערך ששווה בדיוק לממוצע הקיים שלה, הממוצע הכללי אינו משתנה כלל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת הכלל המתמטי של ממוצע.", math_expression: "x_{new} = \\bar{x}" },
            { verbal_explanation: "שלב 2: המסקנה המיידית מהוספת ערך השווה לממוצע.", math_expression: "\\bar{x}_{new} = \\bar{x}" },
            { verbal_explanation: "שלב 3: כדי לוודא, נחשב את סכום הגילאים הישן.", math_expression: "S_{old} = 4 \\times 10 = 40" },
            { verbal_explanation: "שלב 4: נוסיף את הילד החדש לסכום.", math_expression: "S_{new} = 40 + 10 = 50" },
            { verbal_explanation: "שלב 5: נחלק במספר הילדים המעודכן.", math_expression: "\\bar{x}_{new} = \\dfrac{50}{5}" },
            { verbal_explanation: "שלב 6: התוצאה כמובן זהה.", math_expression: "\\bar{x}_{new} = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 19
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "קבוצת נתונים מורכבת מ-99 מספרים שונים שכולם קטנים מ-100, ומספר אחד חריג ששווה ל-1,000,000. איזה מדד מרכזי ייצג את הקבוצה בצורה אמינה יותר, ממוצע או חציון?",
        options: ["חציון", "ממוצע", "שניהם שווים בטיבם", "אף אחד מהם"],
        correctAnswer: 0,
        hint: "מספר קיצוני וחריג משפיע בצורה דרסטית על הממוצע ומושך אותו לכיוונו, בעוד החציון אינו מושפע מערכים קיצוניים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת מבנה הנתונים ואיתור ערך קיצוני אחד בולט.", math_expression: "x_{100} = 1000000" },
            { verbal_explanation: "שלב 2: ניתוח תכונת הממוצע - מחושב על ידי סכימת כל הערכים ולכן מושפע מאוד מחריגים.", math_expression: "\\bar{x}" },
            { verbal_explanation: "שלב 3: ניתוח תכונת החציון - מבוסס רק על מיקום המספר האמצעי לאחר סידור, ולכן מתעלם מגודל הקצוות.", math_expression: "M_{e}" },
            { verbal_explanation: "שלב 4: המסקנה היא שהחציון נשאר באזור הערכים הטיפוסיים.", math_expression: "1 < M_{e} < 100" },
            { verbal_explanation: "שלב 5: הבחירה הנכונה המייצגת את הקבוצה היא כמובן החציון.", math_expression: "M_{e}" }
        ],
        final_answer: "חציון"
    },

    // שאלה מספר 20
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "ממוצע המשכורות של 5 עובדים הוא 6000 שקלים. עובד אחד שמשכורתו 6000 שקלים הוחלף בעובד שמשכורתו 7000 שקלים. מהו הממוצע החדש?",
        options: ["6200", "6000", "7000", "6500"],
        correctAnswer: 0,
        hint: "חשבו את סכום המשכורות הכולל המקורי, החסירו 6000, הוסיפו 7000, וחלקו חזרה ב-5.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת סכום המשכורות המקורי.", math_expression: "S_{old} = 5 \\times 6000" },
            { verbal_explanation: "שלב 2: החישוב.", math_expression: "S_{old} = 30000" },
            { verbal_explanation: "שלב 3: חישוב הסכום החדש לאחר ההחלפה (הוספה של אלף לשקלים).", math_expression: "S_{new} = 30000 - 6000 + 7000" },
            { verbal_explanation: "שלב 4: הסכום המעודכן.", math_expression: "S_{new} = 31000" },
            { verbal_explanation: "שלב 5: חלוקת הסכום במספר העובדים שנשאר זהה.", math_expression: "\\bar{x}_{new} = \\dfrac{31000}{5}" },
            { verbal_explanation: "שלב 6: חלוקה ארוכה.", math_expression: "\\bar{x}_{new} = 6200" },
            { verbal_explanation: "שלב 7: הממוצע עלה למספר זה.", math_expression: "6200" }
        ],
        final_answer: "6200"
    },

    // שאלה מספר 21
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "בכיתה יש 3 בנים ו-2 בנות. האם ניתן לחשב את 'ממוצע' המין של הכיתה?",
        options: ["לא", "כן", "רק אם ידוע הגיל", "כן, זה בנים"],
        correctAnswer: 0,
        hint: "ממוצע וחציון ניתנים לחישוב אך ורק על משתנים כמותיים (מספרים), ולא על משתנים איכותיים מילוליים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת סוג המשתנה - בנים ובנות הם תכונות ולא ערכים מספריים רציפים.", math_expression: "NaN" },
            { verbal_explanation: "שלב 2: נוסחת הממוצע מחייבת פעולות של חיבור וחילוק.", math_expression: "\\Sigma x : n" },
            { verbal_explanation: "שלב 3: לא ניתן לחבר מילים בצורה מתמטית.", math_expression: "x + y" },
            { verbal_explanation: "שלב 4: המדד היחיד שניתן למצוא למשתנה כזה הוא השכיח (הקבוצה הגדולה ביותר).", math_expression: "Mode" },
            { verbal_explanation: "שלב 5: מסקנה סופית לשאלה - לא ניתן.", math_expression: "0" }
        ],
        final_answer: "לא"
    },

    // שאלה מספר 22
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "מה קורה לממוצע של סדרת נתונים אם נוסיף לכל נתון בסדרה בדיוק את המספר 5?",
        options: ["יגדל ב-5", "יישאר ללא שינוי", "יוכפל ב-5", "יקטן ב-5"],
        correctAnswer: 0,
        hint: "הזזת כל הנתונים בסדרה כלפי מעלה בערך קבוע גוררת אחריה גם את נקודת המרכז והממוצע באותו הערך הקבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר המתמטי להזזה. סכום הנתונים החדש שווה לסכום הישן ועוד חמש כפול כמות הנתונים.", math_expression: "\\Sigma (x + 5) = \\Sigma x + 5n" },
            { verbal_explanation: "שלב 2: חלוקת המשוואה ב-n כדי למצוא את הממוצע החדש.", math_expression: "\\bar{x}_{new} = \\dfrac{\\Sigma x + 5n}{n}" },
            { verbal_explanation: "שלב 3: פירוק השבר לשני שברים נפרדים.", math_expression: "\\bar{x}_{new} = \\dfrac{\\Sigma x}{n} + \\dfrac{5n}{n}" },
            { verbal_explanation: "שלב 4: צמצום הביטויים.", math_expression: "\\bar{x}_{new} = \\bar{x}_{old} + 5" },
            { verbal_explanation: "שלב 5: התוצאה המילולית לבחירה.", math_expression: "+5" }
        ],
        final_answer: "יגדל ב-5"
    },

    // שאלה מספר 23
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "בטבלת שכיחויות נתון: לערך 1 יש שכיחות של 1, לערך 2 יש שכיחות של 2, לערך 3 יש שכיחות של 1. מהו החציון?",
        options: ["2", "1", "3", "1.5"],
        correctAnswer: 0,
        hint: "רשמו את כל המספרים אחד אחרי השני לפי השכיחויות שלהם. למשל, אחד, שתיים, שתיים... ומצאו את האמצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פריסת הנתונים לרשימה מפורשת על סמך השכיחות.", math_expression: "1 , 2 , 2 , 3" },
            { verbal_explanation: "שלב 2: ספירת כמות הנתונים.", math_expression: "n = 1 + 2 + 1 = 4" },
            { verbal_explanation: "שלב 3: הנתונים הם בכמות זוגית, נחפש את שני האמצעיים במקומות השני והשלישי.", math_expression: "L_1 = 2 \\quad , \\quad L_2 = 3" },
            { verbal_explanation: "שלב 4: מציאת המספרים במיקומים אלו.", math_expression: "x_2 = 2 \\quad , \\quad x_3 = 2" },
            { verbal_explanation: "שלב 5: ממוצע של מספרים זהים הוא המספר עצמו.", math_expression: "M_{e} = \\dfrac{2 + 2}{2}" },
            { verbal_explanation: "שלב 6: החציון שהתקבל.", math_expression: "M_{e} = 2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 24
    {
        topic: "statistics_probability_172",
        subTopic: "ממוצע וחציון",
        question_text: "במשפחה יש 3 אחים בני 10, 12, ו-14. מה ההבדל בין הממוצע לחציון שלהם?",
        options: ["0 (אין הבדל)", "2", "4", "12"],
        correctAnswer: 0,
        hint: "כאשר קבוצת מספרים מסודרת בקפיצות שוות (סדרה חשבונית), הממוצע תמיד שווה בדיוק לחציון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת החציון מתוך הרשימה המסודרת והאי-זוגית.", math_expression: "M_{e} = 12" },
            { verbal_explanation: "שלב 2: בניית משוואה לחישוב הממוצע.", math_expression: "\\bar{x} = \\dfrac{10 + 12 + 14}{3}" },
            { verbal_explanation: "שלב 3: חיבור שלושת הגילאים.", math_expression: "\\bar{x} = \\dfrac{36}{3}" },
            { verbal_explanation: "שלב 4: חלוקה בשלוש.", math_expression: "\\bar{x} = 12" },
            { verbal_explanation: "שלב 5: חישוב ההפרש בין שני המדדים.", math_expression: "D = 12 - 12" },
            { verbal_explanation: "שלב 6: ההפרש הוא אפס.", math_expression: "0" }
        ],
        final_answer: "0 (אין הבדל)"
    },

    // ==========================================
    // תת נושא 3: הסתברות קלאסית בסיסית (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "בכד יש 3 כדורים אדומים ו-7 כדורים כחולים. מוציאים באקראי כדור אחד. מה ההסתברות שהוא אדום?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 40 20 L 40 140 Q 40 180 100 180 Q 160 180 160 140 L 160 20' fill='none' stroke='#64748b' stroke-width='4'/><circle cx='80' cy='150' r='12' fill='#ef4444'/><circle cx='120' cy='150' r='12' fill='#ef4444'/><circle cx='100' cy='120' r='12' fill='#ef4444'/><circle cx='70' cy='110' r='12' fill='#3b82f6'/><circle cx='130' cy='110' r='12' fill='#3b82f6'/></svg></div>",
        options: ["0.3", "0.7", "0.5", "3"],
        correctAnswer: 0,
        hint: "הסתברות היא כמות המקרים הרצויים (כדורים אדומים) לחלק לסך כל המקרים האפשריים בכד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת כמות הכדורים הרצויים.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 2: סכימת כל הכדורים בכד.", math_expression: "n = 3 + 7 = 10" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת ההסתברות הקלאסית.", math_expression: "P = \\dfrac{m}{n}" },
            { verbal_explanation: "שלב 4: הצבת הנתונים שמצאנו.", math_expression: "P = \\dfrac{3}{10}" },
            { verbal_explanation: "שלב 5: המרת השבר למספר עשרוני.", math_expression: "P = 0.3" },
            { verbal_explanation: "שלב 6: התשובה.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 26
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "מטילים קוביית משחק הוגנת בעלת שש פאות. מה ההסתברות שיתקבל מספר זוגי?",
        options: ["1/2", "1/6", "1/3", "1"],
        correctAnswer: 0,
        hint: "רשמו את מרחב המדגם (1 עד 6) וספרו כמה מתוכם הם מספרים זוגיים. לאחר מכן הרכיבו שבר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי גודל מרחב המדגם של קוביה.", math_expression: "n = 6" },
            { verbal_explanation: "שלב 2: איתור האפשרויות המקיימות את התנאי הזוגי (שתיים, ארבע, שש).", math_expression: "m = 3" },
            { verbal_explanation: "שלב 3: הרכבת השבר וצמצומו.", math_expression: "P = \\dfrac{3}{6}" },
            { verbal_explanation: "שלב 4: צמצום של השבר.", math_expression: "P = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 5: הרישום הסופי כפי שנדרש באפשרויות.", math_expression: "1:2" }
        ],
        final_answer: "1/2"
    },

    // שאלה מספר 27
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "שולפים באקראי קלף מחפיסת קלפים סטנדרטית (52 קלפים ללא ג'וקרים). מה ההסתברות להוציא קלף אדום מסוג לב?",
        options: ["1/4", "1/2", "1/13", "1/52"],
        correctAnswer: 0,
        hint: "בחפיסה יש 4 צורות (לב, יהלום, עלה, תלתן), וכל צורה מכילה בדיוק 13 קלפים. לב הוא אחת מארבע הצורות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סך כל הקלפים בחפיסה.", math_expression: "n = 52" },
            { verbal_explanation: "שלב 2: ספירת כמות קלפי הלב בחפיסה.", math_expression: "m = 13" },
            { verbal_explanation: "שלב 3: הרכבת ההסתברות לפי הנוסחה.", math_expression: "P = \\dfrac{13}{52}" },
            { verbal_explanation: "שלב 4: צמצום השבר. שלוש עשרה נכנס בחמישים ושתיים בדיוק ארבע פעמים.", math_expression: "P = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 5: התשובה כשבר.", math_expression: "1:4" }
        ],
        final_answer: "1/4"
    },

    // שאלה מספר 28
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "מסובבים סביבון המחולק ל-8 גזרות שוות המסומנות בספרות 1 עד 8. מה ההסתברות שהחץ יעצור על מספר הגדול מ-5?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:50%; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='90' fill='none' stroke='#f59e0b' stroke-width='4'/><line x1='100' y1='10' x2='100' y2='190' stroke='#f59e0b' stroke-width='2'/><line x1='10' y1='100' x2='190' y2='100' stroke='#f59e0b' stroke-width='2'/><polygon points='100,100 120,40 90,40' fill='#ef4444'/></svg></div>",
        options: ["3/8", "5/8", "1/2", "4/8"],
        correctAnswer: 0,
        hint: "מנו את המספרים שגדולים מחמש, וראו כמה הם מתוך שמונה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כמות האפשרויות הכוללת.", math_expression: "n = 8" },
            { verbal_explanation: "שלב 2: איתור קבוצת המספרים העונים לתנאי (שש, שבע, שמונה).", math_expression: "m = 3" },
            { verbal_explanation: "שלב 3: הרכבת השבר וקבלת התוצאה.", math_expression: "P = \\dfrac{3}{8}" },
            { verbal_explanation: "שלב 4: הרישום לבוחן.", math_expression: "3:8" }
        ],
        final_answer: "3/8"
    },

    // שאלה מספר 29
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "בכיתה יש 20 בנים ו-15 בנות. בוחרים תלמיד אחד באקראי. מה ההסתברות שתיבחר בת?",
        options: ["3/7", "15/20", "3/4", "4/7"],
        correctAnswer: 0,
        hint: "זכרו לחבר קודם את הבנים והבנות כדי לדעת מהו גודל הכיתה כולה, ואז חלקו את מספר הבנות בכמות זו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מספר התלמידים הכולל.", math_expression: "n = 20 + 15 = 35" },
            { verbal_explanation: "שלב 2: קביעת מספר המקרים הרצויים (בנות).", math_expression: "m = 15" },
            { verbal_explanation: "שלב 3: כתיבת ההסתברות כשבר.", math_expression: "P = \\dfrac{15}{35}" },
            { verbal_explanation: "שלב 4: צמצום השבר. נחלק מונה ומכנה בחמש.", math_expression: "P = \\dfrac{3}{7}" },
            { verbal_explanation: "שלב 5: התשובה הרשמית לאחר צמצום.", math_expression: "3:7" }
        ],
        final_answer: "3/7"
    },

    // שאלה מספר 30
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "בקופסה יש 5 כדורים שחורים ו-5 לבנים. מה ההסתברות להוציא כדור צהוב?",
        options: ["0", "1", "0.5", "1/10"],
        correctAnswer: 0,
        hint: "זהו מאורע בלתי אפשרי. חשבו כמה כדורים צהובים יש בקופסה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת סך כל הכדורים.", math_expression: "n = 10" },
            { verbal_explanation: "שלב 2: ספירת המקרים הרצויים לצבע המבוקש.", math_expression: "m = 0" },
            { verbal_explanation: "שלב 3: הצבה בנוסחה.", math_expression: "P = \\dfrac{0}{10}" },
            { verbal_explanation: "שלב 4: חלוקת אפס בכל מספר היא תמיד אפס.", math_expression: "P = 0" },
            { verbal_explanation: "שלב 5: המסקנה.", math_expression: "0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 31
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "בקופסה יש רק 10 כדורים אדומים. מה ההסתברות להוציא כדור אדום?",
        options: ["1", "0", "0.5", "10"],
        correctAnswer: 0,
        hint: "כאשר כל המקרים האפשריים הם גם המקרים הרצויים, זהו מאורע ודאי. ההסתברות למאורע ודאי היא תמיד המספר המייצג שלמות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת כל הכדורים.", math_expression: "n = 10" },
            { verbal_explanation: "שלב 2: ספירת הכדורים האדומים.", math_expression: "m = 10" },
            { verbal_explanation: "שלב 3: הצבה בשבר.", math_expression: "P = \\dfrac{10}{10}" },
            { verbal_explanation: "שלב 4: חלוקת מספר בעצמו.", math_expression: "P = 1" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "1" }
        ],
        final_answer: "1"
    },

    // שאלה מספר 32
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "ההסתברות שיירד מחר גשם היא 0.3. מה ההסתברות שלא יירד מחר גשם?",
        options: ["0.7", "0.3", "0.5", "1"],
        correctAnswer: 0,
        hint: "סכום ההסתברויות של מאורע והמאורע המשלים שלו (ההפך ממנו) חייב להיות שווה לאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת חוק המאורע המשלים.", math_expression: "P(A) + P(B) = 1" },
            { verbal_explanation: "שלב 2: הצבת ההסתברות הנתונה לגשם.", math_expression: "0.3 + P(B) = 1" },
            { verbal_explanation: "שלב 3: העברת שבר עשרוני אגף לחילוץ המשלים.", math_expression: "P(B) = 1 - 0.3" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "P(B) = 0.7" },
            { verbal_explanation: "שלב 5: קבלת התוצאה להעדר גשם.", math_expression: "0.7" }
        ],
        final_answer: "0.7"
    },

    // שאלה מספר 33
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "בכד יש כדורים בצבעים ירוק, צהוב ואדום. ההסתברות להוציא ירוק היא 1/4 וההסתברות להוציא צהוב היא 1/2. מה ההסתברות להוציא אדום?",
        options: ["1/4", "3/4", "1/2", "1/8"],
        correctAnswer: 0,
        hint: "סכום ההסתברויות של כל האפשרויות השונות בתוך מרחב המדגם שווה תמיד לאחת. חברו את השברים וחסרו מאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת הסכום למרחב מדגם מלא.", math_expression: "P_{1} + P_{2} + P_{3} = 1" },
            { verbal_explanation: "שלב 2: הצבת השברים הידועים.", math_expression: "\\dfrac{1}{4} + \\dfrac{1}{2} + P_{3} = 1" },
            { verbal_explanation: "שלב 3: המרת החצי לרבעים כדי לאפשר חיבור שברים קל.", math_expression: "\\dfrac{1}{4} + \\dfrac{2}{4} + P_{3} = 1" },
            { verbal_explanation: "שלב 4: סכימת השברים.", math_expression: "\\dfrac{3}{4} + P_{3} = 1" },
            { verbal_explanation: "שלב 5: חיסור למציאת השארית.", math_expression: "P_{3} = 1 - \\dfrac{3}{4} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "1:4" }
        ],
        final_answer: "1/4"
    },

    // שאלה מספר 34
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "זורקים שתי קוביות משחק הוגנות במקביל. מה ההסתברות שסכום המספרים שיראו שתי הקוביות יהיה בדיוק 2?",
        options: ["1/36", "2/36", "1/12", "1/6"],
        correctAnswer: 0,
        hint: "בזריקת שתי קוביות יש שלושים ושש אפשרויות. מצאו את הזוג היחיד שסכומו שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב גודל מרחב המדגם לשתי קוביות כפעולת כפל.", math_expression: "n = 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 2: איתור הזוג או הזוגות שסכומם הוא שתיים (אחת בקובייה הראשונה ואחת בקובייה השנייה).", math_expression: "m = 1" },
            { verbal_explanation: "שלב 3: הרכבת ההסתברות כסיכוי יחיד מתוך הכלל.", math_expression: "P = \\dfrac{1}{36}" },
            { verbal_explanation: "שלב 4: התשובה.", math_expression: "1:36" }
        ],
        final_answer: "1/36"
    },

    // שאלה מספר 35
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "במפעל, יחס הנורות התקינות לפגומות הוא 9:1. מה ההסתברות לבחור נורה פגומה?",
        options: ["1/10", "1/9", "0.9", "0.11"],
        correctAnswer: 0,
        hint: "היחס אומר שעל כל תשע נורות תקינות יש אחת פגומה, כלומר בקבוצה שלמה יש עשר נורות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: סכימת החלקים כדי למצוא את סך היחידות ביחס.", math_expression: "n = 9 + 1 = 10" },
            { verbal_explanation: "שלב 2: כמות היחידות המייצגות נורות פגומות.", math_expression: "m = 1" },
            { verbal_explanation: "שלב 3: הרכבת השבר של ההסתברות.", math_expression: "P = \\dfrac{1}{10}" },
            { verbal_explanation: "שלב 4: זה נראה כעשירית.", math_expression: "1:10" }
        ],
        final_answer: "1/10"
    },

    // שאלה מספר 36
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות קלאסית בסיסית",
        question_text: "מטילים מטבע וזורקים קובייה במקביל. כמה תוצאות אפשריות שונות קיימות במרחב המדגם כולו?",
        options: ["12", "8", "6", "36"],
        correctAnswer: 0,
        hint: "לפי חוק המכפלה בקומבינטוריקה והסתברות, מכפילים את מספר האפשרויות של העצם הראשון במספר האפשרויות של העצם השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ספירת האפשרויות בהטלת מטבע (עץ או פלי).", math_expression: "n_{1} = 2" },
            { verbal_explanation: "שלב 2: ספירת האפשרויות בזריקת קובייה הוגנת.", math_expression: "n_{2} = 6" },
            { verbal_explanation: "שלב 3: הפעלת חוק המכפלה למציאת המרחב השלם של המאורע המשולב.", math_expression: "n = 2 \\times 6" },
            { verbal_explanation: "שלב 4: ביצוע הכפל.", math_expression: "n = 12" },
            { verbal_explanation: "שלב 5: התשובה המסכמת.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // ==========================================
    // תת נושא 4: הסתברות של מאורע דו-שלבי (עץ/טבלה) (12 שאלות)
    // ==========================================

    // שאלה מספר 37
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "כד מכיל 4 כדורים לבנים ו-6 כדורים שחורים. מוציאים באקראי כדור אחד, מחזירים אותו לכד, ומוציאים כדור שני. מה ההסתברות ששני הכדורים שהוצאו הם לבנים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='100' y1='20' x2='50' y2='80' stroke='#3b82f6' stroke-width='2'/><line x1='100' y1='20' x2='150' y2='80' stroke='#3b82f6' stroke-width='2'/><circle cx='50' cy='80' r='10' fill='#fff' stroke='#000' stroke-width='2'/><circle cx='150' cy='80' r='10' fill='#000'/></svg></div>",
        options: ["16/100", "4/10", "20/100", "8/10"],
        correctAnswer: 0,
        hint: "כיוון שהכדור מוחזר, ההוצאה השנייה אינה תלויה בראשונה (הכד נשאר אותו דבר). הכפילו את ההסתברות לכדור הלבן בעצמה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב כמות הכדורים הכללית בכד.", math_expression: "n = 4 + 6 = 10" },
            { verbal_explanation: "שלב 2: ההסתברות לכדור לבן בהוצאה הראשונה.", math_expression: "P_{1} = \\dfrac{4}{10}" },
            { verbal_explanation: "שלב 3: מאחר ויש החזרה, ההסתברות לכדור לבן בשנייה נשארת זהה.", math_expression: "P_{2} = \\dfrac{4}{10}" },
            { verbal_explanation: "שלב 4: הכפלת ההסתברויות במסלול העץ (לבן ואז לבן).", math_expression: "P = \\dfrac{4}{10} \\times \\dfrac{4}{10}" },
            { verbal_explanation: "שלב 5: כפל מונים וכפל מכנים.", math_expression: "P = \\dfrac{16}{100}" },
            { verbal_explanation: "שלב 6: הרישום הרשמי של התוצאה.", math_expression: "16:100" }
        ],
        final_answer: "16/100"
    },

    // שאלה מספר 38
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "באותו כד (ארבעה לבנים, שישה שחורים) מוציאים כדור, לא מחזירים אותו, ומוציאים כדור שני. מה ההסתברות ששניהם לבנים?",
        options: ["12/90", "16/100", "12/100", "4/90"],
        correctAnswer: 0,
        hint: "ללא החזרה, כמות הכדורים הכללית והלבנה יורדת באחת בהוצאה השנייה. עדכנו את השבר השני לפני הכפל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות לכדור לבן בהוצאה הראשונה.", math_expression: "P_{1} = \\dfrac{4}{10}" },
            { verbal_explanation: "שלב 2: לאחר שהוצאנו לבן, נותרו רק שלושה לבנים מתוך תשעה כדורים סך הכל.", math_expression: "P_{2} = \\dfrac{3}{9}" },
            { verbal_explanation: "שלב 3: הכפלת ההסתברויות במסלול המותנה של עץ ההסתברויות.", math_expression: "P = \\dfrac{4}{10} \\times \\dfrac{3}{9}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת כפל השברים.", math_expression: "P = \\dfrac{12}{90}" },
            { verbal_explanation: "שלב 5: התשובה נשארת כך ללא צמצום לפי האפשרויות.", math_expression: "12:90" }
        ],
        final_answer: "12/90"
    },

    // שאלה מספר 39
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "מטילים מטבע הוגן פעמיים. מה ההסתברות לקבל צד מסוים בדיוק פעם אחת (או עץ או פלי, אבל לא שניהם יחד)?",
        options: ["1/2", "1/4", "3/4", "1/3"],
        correctAnswer: 0,
        hint: "ישנם שני מסלולים מתאימים בעץ ההסתברויות: 'עץ ואז פלי' או 'פלי ואז עץ'. חברו את ההסתברויות של שניהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מסלול ראשון (עץ ואז פלי).", math_expression: "P_{1} = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 2: חישוב מסלול שני (פלי ואז עץ).", math_expression: "P_{2} = \\dfrac{1}{2} \\times \\dfrac{1}{2} = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 3: חיבור שני המסלולים שכן שניהם עונים להגדרה.", math_expression: "P = \\dfrac{1}{4} + \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 4: סכימת הרבעים.", math_expression: "P = \\dfrac{2}{4}" },
            { verbal_explanation: "שלב 5: צמצום השבר הסופי לשבר פשוט.", math_expression: "P = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "1:2" }
        ],
        final_answer: "1/2"
    },

    // שאלה מספר 40
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "קולע למטרה פוגע במטרה בסיכוי של 0.8 ומחטיא בסיכוי של 0.2 בכל ירייה. הוא יורה פעמיים. מה ההסתברות שיפגע פעמיים?",
        options: ["0.64", "0.8", "1.6", "0.16"],
        correctAnswer: 0,
        hint: "הנחת היסוד היא שהיריות בלתי תלויות. פשוט הכפילו את סיכוי הפגיעה בעצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת סיכוי הפגיעה בירייה בודדת.", math_expression: "P = 0.8" },
            { verbal_explanation: "שלב 2: הכפלת הסיכוי בירייה השנייה.", math_expression: "P_{2} = 0.8 \\times 0.8" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל העשרוני במחשבון.", math_expression: "P = 0.64" },
            { verbal_explanation: "שלב 4: תוצאת המסלול היחיד בעץ המסמל פגיעה כפולה.", math_expression: "0.64" }
        ],
        final_answer: "0.64"
    },

    // שאלה מספר 41
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "באותו מקרה של קולע למטרה, מה ההסתברות שיפגע לפחות פעם אחת מתוך שתי יריות?",
        options: ["0.96", "0.64", "0.32", "0.8"],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר היא לחשב את ההסתברות למאורע המשלים: שיחטיא בשתיהן, ואז לחסר את התוצאה מאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המסלול שבו הוא מחטיא פעמיים ברצף.", math_expression: "P_{miss} = 0.2 \\times 0.2 = 0.04" },
            { verbal_explanation: "שלב 2: שימוש בכלל המאורע המשלים, שכן כל תוצאה אחרת כוללת לפחות פגיעה אחת.", math_expression: "P = 1 - 0.04" },
            { verbal_explanation: "שלב 3: ביצוע החיסור.", math_expression: "P = 0.96" },
            { verbal_explanation: "שלב 4: התשובה הנבחרת.", math_expression: "0.96" }
        ],
        final_answer: "0.96"
    },

    // שאלה מספר 42
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "טבלה דו-ממדית מראה נתונים על 100 אנשים: 60 גברים ו-40 נשים. עשרים מהגברים מרכיבים משקפיים, ועשר מהנשים מרכיבות משקפיים. בחרו אדם באקראי. מה ההסתברות שהוא מרכיב משקפיים?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='20' y='20' width='160' height='160' fill='none' stroke='#64748b' stroke-width='2'/><line x1='20' y1='73' x2='180' y2='73' stroke='#64748b' stroke-width='1'/><line x1='20' y1='126' x2='180' y2='126' stroke='#64748b' stroke-width='1'/><line x1='73' y1='20' x2='73' y2='180' stroke='#64748b' stroke-width='1'/><line x1='126' y1='20' x2='126' y2='180' stroke='#64748b' stroke-width='1'/></svg></div>",
        options: ["0.3", "0.2", "0.1", "0.4"],
        correctAnswer: 0,
        hint: "סכמו את כל מרכיבי המשקפיים, גברים ונשים יחדיו, וחלקו בסך כל האנשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קריאת הנתון של נשים עם משקפיים.", math_expression: "m_1 = 10" },
            { verbal_explanation: "שלב 2: קריאת הנתון מהטבלה של גברים עם משקפיים.", math_expression: "m_2 = 20" },
            { verbal_explanation: "שלב 3: סכימת המקרים הרצויים בטבלה כדי למצוא את סך הכל מרכיבי המשקפיים.", math_expression: "m = 20 + 10 = 30" },
            { verbal_explanation: "שלב 4: מציאת ההסתברות מתוך הסך הכל הנתון.", math_expression: "P = \\dfrac{30}{100}" },
            { verbal_explanation: "שלב 5: צמצום אפסים להשגת שבר קטן.", math_expression: "P = \\dfrac{3}{10}" },
            { verbal_explanation: "שלב 6: המרה למספר עשרוני.", math_expression: "0.3" },
            { verbal_explanation: "שלב 7: הפתרון הסופי.", math_expression: "0.3" }
        ],
        final_answer: "0.3"
    },

    // שאלה מספר 43
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "באותה קבוצה, בחרו גבר באקראי. כלומר ידוע שהאדם שנבחר הוא גבר. מה ההסתברות שהוא מרכיב משקפיים?",
        options: ["1/3", "20/100", "1/5", "1/2"],
        correctAnswer: 0,
        hint: "זוהי הסתברות מותנית. מכיוון שידוע שנבחר גבר, מרחב המדגם (המכנה) מצטמצם לסך כל הגברים בלבד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה שהנתון המוקדם מצמצם את המכנה לסך כל הגברים.", math_expression: "n = 60" },
            { verbal_explanation: "שלב 2: המונה נשאר כמות הגברים שמרכיבים משקפיים בלבד.", math_expression: "m = 20" },
            { verbal_explanation: "שלב 3: הרכבת השבר של ההסתברות המותנית.", math_expression: "P = \\dfrac{20}{60}" },
            { verbal_explanation: "שלב 4: חלוקת המונה והמכנה בעשרים לשם צמצום השבר.", math_expression: "P = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 5: כתיבת התשובה בצורתה הסופית להצגה.", math_expression: "1:3" }
        ],
        final_answer: "1/3"
    },

    // שאלה מספר 44
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "בקופסה שלוש גולות אדומות ושתי כחולות. מוציאים גולה, רושמים את צבעה ומחזירים לקופסה. מבצעים זאת שוב. מה ההסתברות ששתי הגולות שונות בצבען?",
        options: ["12/25", "6/25", "9/25", "4/25"],
        correctAnswer: 0,
        hint: "שונות בצבען אומר: אדום ואז כחול או כחול ואז אדום. חשבו את שני המסלולים הללו בעץ וחברו אותם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת ההסתברויות הבסיסיות.", math_expression: "P_1 = \\dfrac{3}{5} \\quad , \\quad P_2 = \\dfrac{2}{5}" },
            { verbal_explanation: "שלב 2: חישוב המסלול הראשון (אדום ואז כחול).", math_expression: "P_{path1} = \\dfrac{3}{5} \\times \\dfrac{2}{5} = \\dfrac{6}{25}" },
            { verbal_explanation: "שלב 3: חישוב המסלול השני המבוקש (כחול ואז אדום).", math_expression: "P_{path2} = \\dfrac{2}{5} \\times \\dfrac{3}{5} = \\dfrac{6}{25}" },
            { verbal_explanation: "שלב 4: מאחר וזה מאורע של או, נחבר את תוצאות המסלולים.", math_expression: "P = \\dfrac{6}{25} + \\dfrac{6}{25}" },
            { verbal_explanation: "שלב 5: סכימת המונים לקבלת התשובה.", math_expression: "P = \\dfrac{12}{25}" },
            { verbal_explanation: "שלב 6: הרישום הרשמי של התוצאה.", math_expression: "12:25" }
        ],
        final_answer: "12/25"
    },

    // שאלה מספר 45
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "מטילים מטבע הוגן וזורקים קובייה בעלת שש פאות. מה ההסתברות שיתקבל פלי במטבע ומספר זוגי בקובייה?",
        options: ["1/4", "1/2", "1/12", "1/6"],
        correctAnswer: 0,
        hint: "אלו מאורעות בלתי תלויים. חשבו את ההסתברות של כל אחד בנפרד, והכפילו אותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ההסתברות לקבלת פלי במטבע.", math_expression: "P_1 = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 2: ההסתברות לקבלת מספר זוגי בקובייה (שלוש מתוך שש).", math_expression: "P_2 = \\dfrac{3}{6} = \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 3: הפעלת חוק המכפלה למאורעות שקורים ביחד.", math_expression: "P = \\dfrac{1}{2} \\times \\dfrac{1}{2}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל של השברים (מונה כפול מונה, מכנה כפול מכנה).", math_expression: "P = \\dfrac{1}{4}" },
            { verbal_explanation: "שלב 5: התשובה הינה רבע.", math_expression: "1:4" }
        ],
        final_answer: "1/4"
    },

    // שאלה מספר 46
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "זורקים שתי קוביות משחק הוגנות. בעזרת טבלת דו-ממד, מצאו מה ההסתברות שסכום המספרים בקוביות קטן מחמש.",
        options: ["6/36", "4/36", "10/36", "1/6"],
        correctAnswer: 0,
        hint: "מנו את הזוגות שסכומם הוא שתיים, שלוש או ארבע. אין צורך לחשב חמש כי נדרש קטן ממש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת הזוג שסכומו שתיים.", math_expression: "(1, 1)" },
            { verbal_explanation: "שלב 2: מציאת הזוגות שסכומם שלוש.", math_expression: "(1, 2) , (2, 1)" },
            { verbal_explanation: "שלב 3: מציאת הזוגות שסכומם ארבע.", math_expression: "(1, 3) , (3, 1) , (2, 2)" },
            { verbal_explanation: "שלב 4: ספירת סך כל המקרים שמצאנו בתוך הטבלה.", math_expression: "m = 1 + 2 + 3 = 6" },
            { verbal_explanation: "שלב 5: בניית ההסתברות מתוך שלושים ושש אפשרויות בטבלה הדו-ממדית.", math_expression: "P = \\dfrac{6}{36}" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "6:36" }
        ],
        final_answer: "6/36"
    },

    // שאלה מספר 47
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "זורקים שתי קוביות. מה ההסתברות שמכפלת שני המספרים שייצאו היא בדיוק שתים עשרה?",
        options: ["4/36", "2/36", "6/36", "3/36"],
        correctAnswer: 0,
        hint: "בדקו בטבלה של שש על שש. אילו מספרים בין אחד לשש, כשמכפילים אותם, נותנים שתים עשרה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: חיפוש כפולות מתאימות של שתיים ושש.", math_expression: "(2, 6) , (6, 2)" },
            { verbal_explanation: "שלב 2: חיפוש כפולות מתאימות של שלוש וארבע.", math_expression: "(3, 4) , (4, 3)" },
            { verbal_explanation: "שלב 3: ספירת המקרים שמקיימים את הדרישה.", math_expression: "m = 4" },
            { verbal_explanation: "שלב 4: הצבה ביחס למרחב המדגם המלא של שתי הקוביות.", math_expression: "P = \\dfrac{4}{36}" },
            { verbal_explanation: "שלב 5: הרישום לבחירה מרובה.", math_expression: "4:36" }
        ],
        final_answer: "4/36"
    },

    // שאלה מספר 48
    {
        topic: "statistics_probability_172",
        subTopic: "הסתברות של מאורע ממשי (עץ/טבלה)",
        question_text: "ההסתברות לאיחור של אוטובוס ביום מסוים היא עשירית. אם הוא איחר היום, ההסתברות שיאחר גם מחר היא שלוש עשיריות. מה ההסתברות שהוא יאחר במשך יומיים ברצף?",
        options: ["0.03", "0.1", "0.045", "0.3"],
        correctAnswer: 0,
        hint: "עקבו אחר ענף אחד ספציפי בעץ: איחור ביום הראשון, ואז איחור גם ביום השני תחת התנאי שאיחר בראשון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קריאת נתון ההסתברות ההתחלתית לאיחור ביום א.", math_expression: "P_{1} = 0.1" },
            { verbal_explanation: "שלב 2: קריאת ההסתברות המותנית לאיחור ביום ב.", math_expression: "P_{2} = 0.3" },
            { verbal_explanation: "שלב 3: כתיבת הפעולה לאורך הענף המבוקש בעץ.", math_expression: "P = 0.1 \\times 0.3" },
            { verbal_explanation: "שלב 4: ביצוע הכפל העשרוני (עשירית כפול שלוש עשיריות).", math_expression: "P = 0.03" },
            { verbal_explanation: "שלב 5: התשובה למסלול המסוים שנשאל עליו.", math_expression: "0.03" }
        ],
        final_answer: "0.03"
    }
];