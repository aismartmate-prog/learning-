const questionsDB = [
    // ==========================================
    // --- תת נושא 1: חקר נתונים (15 שאלות) ---
    // ==========================================
    {
        "id": 1,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "ציוניו של דן בשלושת המבחנים האחרונים בחשבון הם: 80, 90 ו-70. מהו הציון הממוצע שלו?",
        "hint": "כדי לחשב ממוצע, חברו את כל הציונים יחד וחלקו במספר המבחנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום כל הציונים שדן קיבל.", "math_expression": "80 + 90 + 70 = 240" },
            { "verbal_explanation": "שלב 2: נספור כמה מבחנים דן עשה.", "math_expression": "3" },
            { "verbal_explanation": "שלב 3: נחלק את סכום הציונים במספר המבחנים כדי למצוא את הממוצע.", "math_expression": "240 ÷ 3 = 80" }
        ],
        "final_answer": "80",
        "options": ["75", "80", "85", "90"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "חקר נתונים",
        "difficulty": "Low",
        "question_text": "לפניכם רשימה של מספר הספרים שקראו תלמידים בחופש: 2, 4, 3, 2, 5, 2, 1. מהו ה'שכיח' בקבוצת נתונים זו?",
        "hint": "שכיח הוא הנתון שמופיע הכי הרבה פעמים ברשימה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק כמה פעמים מופיע כל מספר ברשימה.", "math_expression": "המספר 2 מופיע 3 פעמים" },
            { "verbal_explanation": "שלב 2: מכיוון שהמספר 2 מופיע יותר מכל מספר אחר, הוא השכיח.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["4", "3", "2", "5"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "חקר נתונים",
        "difficulty": "High",
        "question_text": "הממוצע של שני מספרים הוא 15. אחד המספרים הוא 10. מהו המספר השני?",
        "hint": "אם הממוצע של שני מספרים הוא 15, מה הסכום שלהם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הסכום של שני המספרים (ממוצע כפול כמות המספרים).", "math_expression": "15 × 2 = 30" },
            { "verbal_explanation": "שלב 2: נחסיר את המספר הידוע מתוך הסכום הכולל.", "math_expression": "30 - 10 = 20" }
        ],
        "final_answer": "20",
        "options": ["15", "20", "25", "30"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "לפניכם טבלה המציגה את מספר הילדים בחוגים שונים. כמה ילדים יש בסך הכל בכל החוגים?<br><br><table border='1' style='margin:auto; border-collapse:collapse; width:80%; text-align:center;'><tr style='background-color:#1e293b; color:white;'><th>שם החוג</th><th>מספר ילדים</th></tr><tr><td>כדורגל</td><td>12</td></tr><tr><td>שחייה</td><td>8</td></tr><tr><td>ציור</td><td>15</td></tr></table>",
        "hint": "סכמו את כל המספרים המופיעים בעמודת 'מספר ילדים'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח את הנתונים מהטבלה ונחבר אותם יחד.", "math_expression": "12 + 8 + 15" },
            { "verbal_explanation": "שלב 2: נחשב את הסכום: 12 ועוד 8 זה 20, ועוד 15 שווה 35.", "math_expression": "35" }
        ],
        "final_answer": "35 ילדים",
        "options": ["25 ילדים", "30 ילדים", "35 ילדים", "40 ילדים"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "הדיאגרמה שלפניכם מציגה את מספר הממתקים שקיבל כל ילד. כמה ממתקים קיבלו יוסי ודנה יחד?<br><br><div style='text-align:center; direction:ltr;'><svg width='250' height='160' style='background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;'><line x1='30' y1='120' x2='230' y2='120' stroke='#1e293b' stroke-width='2'/><rect x='50' y='60' width='30' height='60' fill='#b09151'/><text x='65' y='50' text-anchor='middle'>6</text><text x='65' y='140' text-anchor='middle'>יוסי</text><rect x='110' y='40' width='30' height='80' fill='#b09151'/><text x='125' y='30' text-anchor='middle'>8</text><text x='125' y='140' text-anchor='middle'>דנה</text><rect x='170' y='80' width='30' height='40' fill='#b09151'/><text x='185' y='70' text-anchor='middle'>4</text><text x='185' y='140' text-anchor='middle'>רון</text></svg></div>",
        "hint": "קראו בדיאגרמה את המספר המופיע מעל העמודה של יוסי ואת המספר מעל העמודה של דנה, וחברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לפי הדיאגרמה, יוסי קיבל 6 ממתקים ודנה קיבלה 8 ממתקים.", "math_expression": "6, 8" },
            { "verbal_explanation": "שלב 2: נחבר את הכמויות של שניהם.", "math_expression": "6 + 8 = 14" }
        ],
        "final_answer": "14 ממתקים",
        "options": ["10 ממתקים", "12 ממתקים", "14 ממתקים", "18 ממתקים"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חקר נתונים",
        "difficulty": "Low",
        "question_text": "קבוצת משקלים בקילוגרמים של 5 אבטיחים היא: 2, 3, 2, 4, 2. מהו הטווח (ההפרש בין הגדול לקטן ביותר) של המשקלים?",
        "hint": "מצאו את המספר הגדול ביותר ברשימה ואת המספר הקטן ביותר, וחשבו את ההפרש ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המשקל הגדול ביותר והמשקל הקטן ביותר.", "math_expression": "מקסימום = 4, מינימום = 2" },
            { "verbal_explanation": "שלב 2: נחסיר את המינימום מהמקסימום כדי למצוא את הטווח.", "math_expression": "4 - 2 = 2" }
        ],
        "final_answer": "2 ק\"ג",
        "options": ["1 ק\"ג", "2 ק\"ג", "3 ק\"ג", "4 ק\"ג"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "חקר נתונים",
        "difficulty": "High",
        "question_text": "ממוצע הגילאים של 4 ילדים הוא 10 שנים. ילד נוסף בן 15 הצטרף לקבוצה. מהו הממוצע החדש של כל 5 הילדים?",
        "hint": "חשבו את סכום הגילאים של 4 הילדים, הוסיפו את גילו של הילד החדש, וחלקו הכל ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום הגילאים המקורי של 4 הילדים (ממוצע כפול מספר הילדים).", "math_expression": "10 × 4 = 40" },
            { "verbal_explanation": "שלב 2: נוסיף לסכום את גילו של הילד החדש.", "math_expression": "40 + 15 = 55" },
            { "verbal_explanation": "שלב 3: נחלק את הסכום החדש במספר הילדים המעודכן (5 ילדים).", "math_expression": "55 ÷ 5 = 11" }
        ],
        "final_answer": "11",
        "options": ["10.5", "11", "12", "12.5"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "משפחה רשמה את הוצאותיה על פירות במשך 4 שבועות: 50 ₪, 40 ₪, 60 ₪, 50 ₪. מהי ההוצאה הממוצעת לשבוע?",
        "hint": "חברו את כל ההוצאות וחלקו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל ההוצאות ב-4 השבועות.", "math_expression": "50 + 40 + 60 + 50 = 200" },
            { "verbal_explanation": "שלב 2: נחלק את הסכום הכולל ב-4 כדי למצוא את הממוצע השבועי.", "math_expression": "200 ÷ 4 = 50" }
        ],
        "final_answer": "50 ₪",
        "options": ["40 ₪", "45 ₪", "50 ₪", "55 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "חקר נתונים",
        "difficulty": "Low",
        "question_text": "צבעי המכוניות בחניון הם: לבן, שחור, לבן, כסף, לבן, אדום. איזה צבע הוא השכיח ביותר?",
        "hint": "איזה צבע מופיע הכי הרבה פעמים ברשימה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נספור כמה פעמים מופיע כל צבע. הצבע הלבן מופיע 3 פעמים, יותר מכל צבע אחר.", "math_expression": "לבן" }
        ],
        "final_answer": "לבן",
        "options": ["שחור", "כסף", "לבן", "אדום"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "חקר נתונים",
        "difficulty": "High",
        "question_text": "טל קיבל במבחנים את הציונים 80 ו-90. איזה ציון הוא חייב לקבל במבחן השלישי כדי שהממוצע שלו יהיה בדיוק 90?",
        "hint": "כדי שהממוצע של 3 מבחנים יהיה 90, הסכום שלהם צריך להיות 270.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב מה צריך להיות הסכום של 3 מבחנים כדי שהממוצע יהיה 90.", "math_expression": "90 × 3 = 270" },
            { "verbal_explanation": "שלב 2: נחשב את סכום הציונים שטל כבר קיבל.", "math_expression": "80 + 90 = 170" },
            { "verbal_explanation": "שלב 3: נחסיר את מה שקיבל מתוך היעד כדי למצוא את הציון החסר.", "math_expression": "270 - 170 = 100" }
        ],
        "final_answer": "100",
        "options": ["90", "95", "100", "85"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "בדיאגרמה הבאה מוצגות שעות השינה של נועה.<br>מהו ממוצע שעות השינה שלה בשלושת הימים?<br><br><div style='text-align:center; direction:ltr;'><svg width='250' height='160' style='background:#fefce8; border:1px solid #fef08a; border-radius:8px;'><line x1='30' y1='120' x2='230' y2='120' stroke='#854d0e' stroke-width='2'/><rect x='50' y='40' width='30' height='80' fill='#facc15'/><text x='65' y='30' text-anchor='middle'>8</text><text x='65' y='140' text-anchor='middle'>יום א'</text><rect x='110' y='50' width='30' height='70' fill='#facc15'/><text x='125' y='40' text-anchor='middle'>7</text><text x='125' y='140' text-anchor='middle'>יום ב'</text><rect x='170' y='30' width='30' height='90' fill='#facc15'/><text x='185' y='20' text-anchor='middle'>9</text><text x='185' y='140' text-anchor='middle'>יום ג'</text></svg></div>",
        "hint": "קראו את הנתונים (8, 7, 9), חברו אותם וחלקו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נאסוף את הנתונים מהתרשים ונחבר אותם.", "math_expression": "8 + 7 + 9 = 24" },
            { "verbal_explanation": "שלב 2: נחלק את הסכום במספר הימים (3) למציאת הממוצע.", "math_expression": "24 ÷ 3 = 8" }
        ],
        "final_answer": "8 שעות",
        "options": ["7 שעות", "8 שעות", "9 שעות", "7.5 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "חקר נתונים",
        "difficulty": "Low",
        "question_text": "מחירי הגלידות בקיוסק הם: 5 ₪, 8 ₪, 12 ₪, 5 ₪, 10 ₪. מהו מחיר הגלידה השכיח?",
        "hint": "המחיר השכיח הוא זה שמופיע הכי הרבה פעמים בתפריט.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש איזה מחיר מופיע יותר מפעם אחת ברשימה. המספר 5 מופיע פעמיים.", "math_expression": "5" }
        ],
        "final_answer": "5 ₪",
        "options": ["8 ₪", "12 ₪", "5 ₪", "10 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "חקר נתונים",
        "difficulty": "Medium",
        "question_text": "בתחרות קליעה למטרה, קבוצה א' צברה 50 נקודות ב-5 משחקים. קבוצה ב' צברה 40 נקודות ב-4 משחקים. לאיזו קבוצה יש ממוצע נקודות גבוה יותר למשחק?",
        "hint": "חשבו את הממוצע של כל קבוצה בנפרד (סכום חלקי מספר המשחקים) והשוו ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הממוצע של קבוצה א' (50 נקודות לחלק ל-5 משחקים).", "math_expression": "50 ÷ 5 = 10" },
            { "verbal_explanation": "שלב 2: נחשב את הממוצע של קבוצה ב' (40 נקודות לחלק ל-4 משחקים).", "math_expression": "40 ÷ 4 = 10" },
            { "verbal_explanation": "שלב 3: הממוצעים של שתי הקבוצות שווים.", "math_expression": "10 = 10" }
        ],
        "final_answer": "הממוצעים שווים",
        "options": ["קבוצה א'", "קבוצה ב'", "הממוצעים שווים", "אי אפשר לדעת"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "חקר נתונים",
        "difficulty": "High",
        "question_text": "אם נוסיף את המספר 0 לקבוצת המספרים (10, 20, 30), מה יקרה לממוצע שלהם?",
        "hint": "הממוצע המקורי הוא 20. אם נוסיף 0, הסכום נשאר 60 אבל מחלקים אותו ב-4 מספרים במקום ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב ממוצע מקורי: סכום 60 לחלק ל-3 שווה 20.", "math_expression": "60 ÷ 3 = 20" },
            { "verbal_explanation": "שלב 2: נוסיף 0: הסכום נשאר 60, אבל עכשיו מחלקים ב-4 מספרים.", "math_expression": "60 ÷ 4 = 15" },
            { "verbal_explanation": "שלב 3: הממוצע ירד מ-20 ל-15.", "math_expression": "הממוצע יקטן" }
        ],
        "final_answer": "הממוצע יקטן",
        "options": ["הממוצע יגדל", "הממוצע יישאר זהה", "הממוצע יקטן", "הסכום ישתנה"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "חקר נתונים",
        "difficulty": "Low",
        "question_text": "החציון של קבוצת נתונים מסודרת הוא המספר שנמצא בדיוק באמצע. מהו החציון בקבוצה הבאה: 1, 3, 5, 7, 9?",
        "hint": "הרשימה כבר מסודרת מהקטן לגדול. איזה מספר עומד בדיוק באמצע?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יש לנו 5 מספרים ברשימה. נחפש את המספר השלישי (שניים לפניו ושניים אחריו).", "math_expression": "1, 3, [5], 7, 9" },
            { "verbal_explanation": "שלב 2: המספר 5 עומד בדיוק באמצע, ולכן הוא החציון.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["3", "5", "7", "9"],
        "correctAnswer": 1
    },

    // ==========================================
    // --- תת נושא 2: ניתוח סיכויים (15 שאלות) ---
    // ==========================================
    {
        "id": 16,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "זורקים קוביית משחק רגילה (עליה מופיעים המספרים 1 עד 6). מהו הסיכוי לקבל את המספר 4?",
        "hint": "הסיכוי הוא שבר: המונה הוא מספר האפשרויות הרצויות (פעם אחת 4), והמכנה הוא כלל האפשרויות בקובייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לקובייה יש 6 פאות, כלומר 6 תוצאות אפשריות בסך הכל.", "math_expression": "סה\"כ אפשרויות = 6" },
            { "verbal_explanation": "שלב 2: המספר 4 מופיע רק על פאה אחת מתוך ה-6.", "math_expression": "אפשרויות רצויות = 1" },
            { "verbal_explanation": "שלב 3: נרשום את הסיכוי כשבר.", "math_expression": "1/6" }
        ],
        "final_answer": "1/6",
        "options": ["1/2", "1/4", "1/6", "4/6"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "בזריקת קוביית משחק רגילה, מהו הסיכוי לקבל מספר זוגי?",
        "hint": "כמה מספרים זוגיים יש בין 1 ל-6? (2, 4, 6).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בקובייה יש 3 מספרים זוגיים (2, 4, 6) מתוך 6 מספרים אפשריים.", "math_expression": "3 מתוך 6" },
            { "verbal_explanation": "שלב 2: נרשום כשבר ונצמצם ב-3.", "math_expression": "3/6 = 1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/3", "1/6", "1/2", "3/4"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Low",
        "question_text": "מטילים מטבע. מהו הסיכוי שהמטבע ייפול על 'עץ'?",
        "hint": "למטבע יש רק שני צדדים: עץ או פלי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למטבע 2 אפשרויות בלבד, וצד ה'עץ' הוא אפשרות אחת מתוכן.", "math_expression": "1 מתוך 2" },
            { "verbal_explanation": "שלב 2: נרשום את הסיכוי כשבר פשוט.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/3", "1/4", "1/2", "1/10"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "High",
        "question_text": "בשק אטום יש 3 כדורים אדומים ו-2 כדורים כחולים. מוציאים כדור אחד באקראי. מהו הסיכוי להוציא כדור אדום?",
        "hint": "חשבו קודם כמה כדורים יש בסך הכל בשק (זה יהיה המכנה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הכדורים בשק.", "math_expression": "3 + 2 = 5" },
            { "verbal_explanation": "שלב 2: מספר הכדורים האדומים (האפשרויות הרצויות) הוא 3 מתוך הסך הכל (5).", "math_expression": "3/5" }
        ],
        "final_answer": "3/5",
        "options": ["1/2", "2/5", "3/5", "1/3"],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "ברולטה (סביבון) המופיעה באיור יש 4 גזרות שוות בגודלן. מהו הסיכוי שהמחוג ייעצר על הצבע האדום?<br><br><div style='text-align:center; direction:ltr;'><svg width='140' height='140'><circle cx='70' cy='70' r='60' fill='#f8fafc' stroke='#334155' stroke-width='2'/><line x1='70' y1='10' x2='70' y2='130' stroke='#334155' stroke-width='2'/><line x1='10' y1='70' x2='130' y2='70' stroke='#334155' stroke-width='2'/><text x='35' y='50' font-size='14' text-anchor='middle'>אדום</text><text x='105' y='50' font-size='14' text-anchor='middle'>כחול</text><text x='35' y='100' font-size='14' text-anchor='middle'>ירוק</text><text x='105' y='100' font-size='14' text-anchor='middle'>צהוב</text><circle cx='70' cy='70' r='5' fill='#b09151'/><line x1='70' y1='70' x2='50' y2='40' stroke='#b09151' stroke-width='3'/></svg></div>",
        "hint": "האזור האדום הוא רק חלק אחד מתוך כל החלקים ברולטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ברולטה יש 4 גזרות שוות בסך הכל.", "math_expression": "4 גזרות" },
            { "verbal_explanation": "שלב 2: הגזרה האדומה מהווה חלק 1 מתוך ה-4.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1/2", "1/3", "1/4", "3/4"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Low",
        "question_text": "זורקים קוביית משחק רגילה (1-6). מהו הסיכוי לקבל את המספר 7?",
        "hint": "האם המספר 7 מופיע על הקובייה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לקוביית משחק אין פאה עם המספר 7.", "math_expression": "אין 7" },
            { "verbal_explanation": "שלב 2: מכיוון שזה אירוע בלתי אפשרי, הסיכוי שלו הוא אפס.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["1/6", "1", "0", "1/7"],
        "correctAnswer": 2
    },
    {
        "id": 22,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Low",
        "question_text": "זורקים קוביית משחק רגילה. מהו הסיכוי לקבל מספר קטן מ-10?",
        "hint": "כל המספרים בקובייה (1 עד 6) קטנים מ-10. זהו מאורע ודאי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כל 6 התוצאות האפשריות של הקובייה קטנות מ-10.", "math_expression": "6 מתוך 6" },
            { "verbal_explanation": "שלב 2: מאורע שתמיד קורה (ודאי ב-100%) מסומן בסיכוי של 1 (שלם).", "math_expression": "6/6 = 1" }
        ],
        "final_answer": "1",
        "options": ["0", "1/2", "6", "1"],
        "correctAnswer": 3
    },
    {
        "id": 23,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "High",
        "question_text": "בקופסה יש 4 כדורים לבנים ו-6 כדורים שחורים. מה הסיכוי להוציא באקראי כדור לבן?",
        "hint": "חשבו סך הכל כדורים (מכנה), ושימו את הלבנים במונה. אל תשכחו לצמצם את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך הכדורים בקופסה.", "math_expression": "4 + 6 = 10" },
            { "verbal_explanation": "שלב 2: יש 4 כדורים לבנים מתוך 10.", "math_expression": "4/10" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר ב-2.", "math_expression": "2/5" }
        ],
        "final_answer": "2/5",
        "options": ["4/6", "1/10", "2/5", "1/2"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "High",
        "question_text": "זורקים קוביית משחק רגילה. מהו הסיכוי לקבל מספר גדול מ-4?",
        "hint": "אילו מספרים על הקובייה גדולים מ-4? רק 5 ו-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בקובייה יש 2 מספרים שגדולים מ-4 (המספרים 5 ו-6).", "math_expression": "2 אפשרויות" },
            { "verbal_explanation": "שלב 2: נרשום כשבר מתוך סך כל 6 הפאות בקובייה.", "math_expression": "2/6" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר ב-2.", "math_expression": "1/3" }
        ],
        "final_answer": "1/3",
        "options": ["1/2", "1/3", "2/4", "1/6"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "בקערה יש 10 כרטיסיות ממוספרות מ-1 עד 10. שולפים כרטיס אחד. מה הסיכוי לשלוף את המספר 7?",
        "hint": "יש כרטיס אחד בלבד שעליו כתוב 7 מתוך כל ה-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יש כרטיס 1 שכתוב עליו 7.", "math_expression": "1" },
            { "verbal_explanation": "שלב 2: סך כל הכרטיסיות הוא 10. נרשום כשבר.", "math_expression": "1/10" }
        ],
        "final_answer": "1/10",
        "options": ["7/10", "1/7", "1/10", "1/2"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "High",
        "question_text": "מתוך קערה עם כרטיסיות מ-1 עד 10, מהו הסיכוי לשלוף מספר אי-זוגי?",
        "hint": "כמה מספרים אי זוגיים יש בין 1 ל-10? (1, 3, 5, 7, 9).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בין 1 ל-10 יש בדיוק 5 מספרים אי-זוגיים.", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: נרשום כשבר (5 מתוך 10) ונצמצם ב-5.", "math_expression": "5/10 = 1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/5", "1/3", "1/10", "1/2"],
        "correctAnswer": 3
    },
    {
        "id": 27,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "High",
        "question_text": "בהגרלה של בית הספר נמכרו 100 כרטיסים. דנה קנתה 5 כרטיסים. מה הסיכוי שלה לזכות בפרס הראשון?",
        "hint": "הסיכוי הוא מספר הכרטיסים של דנה מתוך סך הכרטיסים שנמכרו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מספר הכרטיסים המנצחים שבידי דנה הוא 5 מתוך 100.", "math_expression": "5/100" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר על ידי חלוקה ב-5.", "math_expression": "1/20" }
        ],
        "final_answer": "1/20",
        "options": ["1/5", "1/20", "5/10", "1/100"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "בשק יש כדור אדום אחד ו-3 כדורים צהובים. מהו הסיכוי **לא** להוציא כדור אדום?",
        "hint": "אם לא נוציא כדור אדום, איזה כדור נוציא? כמה כאלו יש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל הכדורים בשק.", "math_expression": "1 + 3 = 4" },
            { "verbal_explanation": "שלב 2: כדי לא להוציא אדום, עלינו להוציא צהוב. יש 3 צהובים.", "math_expression": "3 מתוך 4" },
            { "verbal_explanation": "שלב 3: נרשום כשבר.", "math_expression": "3/4" }
        ],
        "final_answer": "3/4",
        "options": ["1/4", "1/3", "3/4", "2/4"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Medium",
        "question_text": "באיזה מהמקרים הבאים יש סיכוי גדול יותר לזכות?<br>א. לבחור כדור כחול משק עם 2 כחולים ו-8 אדומים.<br>ב. לקבל מספר זוגי בזריקת קובייה.",
        "hint": "חשבו את הסיכוי של כל מאורע בנפרד (האם הסיכוי הוא רבע? חצי? עשירית?).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סיכוי לכדור כחול (2 מתוך 10, שהם חמישית).", "math_expression": "2/10 = 1/5" },
            { "verbal_explanation": "שלב 2: סיכוי למספר זוגי בקובייה (3 מתוך 6, שהם חצי).", "math_expression": "3/6 = 1/2" },
            { "verbal_explanation": "שלב 3: נשווה בין השברים. חצי גדול יותר מחמישית.", "math_expression": "1/2 > 1/5" }
        ],
        "final_answer": "לקבל מספר זוגי בקובייה",
        "options": ["לקבל כדור כחול משק", "לקבל מספר זוגי בקובייה", "הסיכויים שווים", "אי אפשר לחשב"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "ניתוח סיכויים",
        "difficulty": "Low",
        "question_text": "לפניכם רולטה שמחולקת ל-8 משולשים שווים. 4 משולשים צבועים באדום, 2 בכחול, ו-2 בלבן. מה הסיכוי שהרולטה תעצור על אדום?",
        "hint": "הסתכלו על הכמות של הצבע האדום ביחס לשאר הרולטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: האדום תופס 4 משולשים מתוך סך הכל 8.", "math_expression": "4/8" },
            { "verbal_explanation": "שלב 2: 4 מתוך 8 הם בדיוק חצי מהרולטה. נצמצם את השבר ב-4.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/4", "1/8", "1/2", "3/4"],
        "correctAnswer": 2
    }
];