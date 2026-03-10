const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חישוב ערך האחוז (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Low",
        "question_text": "כמה הם <strong>10%</strong> מתוך <strong>200</strong> שקלים?<br><div style='text-align:center; margin:15px 0;'><svg width='250' height='40'><rect x='10' y='10' width='200' height='20' fill='#f1f5f9' stroke='#1e293b' stroke-width='1'/><rect x='10' y='10' width='20' height='20' fill='#b09151'/><text x='110' y='40' font-size='12'>השלם (100%) = 200</text></svg></div>",
        "hint": "10% הם בדיוק עשירית (1/10) מתוך השלם. כדי למצוא 10% מכל מספר, פשוט מחלקים אותו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הדרך הקלה ביותר למצוא 10% מכל מספר היא להבין ש-10 נכנס בדיוק 10 פעמים בתוך 100. כלומר, מדובר בעשירית.", "math_expression": "10% = 1/10" },
            { "verbal_explanation": "שלב 2: לכן, ניקח את המספר השלם שלנו (200) ונחלק אותו ב-10.", "math_expression": "200 / 10" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה. הורדת אפס אחד מ-200 משאירה אותנו עם 20.", "math_expression": "20" }
        ],
        "final_answer": "20 שקלים",
        "options": ["20 שקלים", "10 שקלים", "40 שקלים", "190 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Low",
        "question_text": "מהו הערך של <strong>25%</strong> מתוך <strong>60</strong>?",
        "hint": "זכרו תמיד ש-25% מייצגים בדיוק רבע (1/4) מהשלם. חלקו את המספר ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: באחוזים, תמיד כדאי לזהות 'שברים מוכרים'. 25% הם 25 מתוך 100, שאם מצמצמים מקבלים בדיוק רבע.", "math_expression": "25% = 1/4" },
            { "verbal_explanation": "שלב 2: במקום לכפול באחוזים עשרוניים, פשוט נחשב כמה זה רבע מהמספר 60 (נחלק אותו ב-4).", "math_expression": "60 / 4" },
            { "verbal_explanation": "שלב 3: 60 לחלק ל-2 זה 30, ולחלק ל-2 שוב נותן 15.", "math_expression": "15" }
        ],
        "final_answer": "15",
        "options": ["12", "15", "25", "20"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Low",
        "question_text": "חשבו: כמה הם <strong>50%</strong> מתוך <strong>350</strong> ק\"ג?",
        "hint": "50% הם בדיוק מחצית (חצי) מהכמות. מהו החצי של 350?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 50% מהווים מחצית מדויקת מהשלם (50 חלקים מתוך 100 הם 1/2).", "math_expression": "50% = 1/2" },
            { "verbal_explanation": "שלב 2: נחלק את השלם שלנו (350) ב-2.", "math_expression": "350 / 2" },
            { "verbal_explanation": "שלב 3: נחשב את פעולת החילוק (חצי מ-300 זה 150, וחצי מ-50 זה 25). ביחד: 175.", "math_expression": "175" }
        ],
        "final_answer": "175 ק\"ג",
        "options": ["150 ק\"ג", "200 ק\"ג", "175 ק\"ג", "50 ק\"ג"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Medium",
        "question_text": "מחירו של תיק היה <strong>150 שקלים</strong>. החנות יצאה במבצע והעניקה <strong>20%</strong> הנחה. מהו <strong>סכום ההנחה</strong> בשקלים?",
        "hint": "שיטת המדרגות: מצאו קודם כמה הם 10% (חלקו ב-10). ואז, הכפילו את התוצאה פי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב בעזרת 'שיטת ה-10%'. כדי למצוא 10% מ-150, נחלק ב-10 ונקבל 15.", "math_expression": "10% = 15" },
            { "verbal_explanation": "שלב 2: אנו זקוקים ל-20%, שהם בדיוק פעמיים 10%.", "math_expression": "20% = 15 * 2" },
            { "verbal_explanation": "שלב 3: 15 כפול 2 נותן 30. זהו סכום ההנחה.", "math_expression": "30" }
        ],
        "final_answer": "30 שקלים",
        "options": ["20 שקלים", "30 שקלים", "120 שקלים", "15 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Medium",
        "question_text": "בכיתה יש <strong>40 תלמידים</strong>. נתון כי <strong>5%</strong> מתוכם שמאליים. כמה תלמידים שמאליים יש בכיתה?",
        "hint": "5% הם בדיוק החצי של 10%. מצאו את ה-10% (על ידי חלוקה ב-10), ואז חלקו את התוצאה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא תחילה כמה הם 10% מתוך 40. נחלק ב-10 ונקבל 4 תלמידים.", "math_expression": "10% = 40 / 10 = 4" },
            { "verbal_explanation": "שלב 2: מכיוון ש-5% הם חצי מ-10%, ניקח את ה-4 תלמידים שמצאנו ונחלק ב-2.", "math_expression": "5% = 4 / 2" },
            { "verbal_explanation": "שלב 3: התוצאה נותנת לנו את מספר התלמידים השמאליים.", "math_expression": "2" }
        ],
        "final_answer": "2 תלמידים",
        "options": ["4 תלמידים", "5 תלמידים", "2 תלמידים", "8 תלמידים"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Medium",
        "question_text": "משפחה במסעדה קיבלה חשבון של <strong>300 שקלים</strong>. הם השאירו טיפ של <strong>12%</strong>. כמה שקלים השאירו לטיפ?",
        "hint": "כאן כדאי להשתמש ב'שיטת ה-1%'. חלקו את החשבון ב-100 כדי לגלות כמה זה 1%, ואז הכפילו ב-12.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא למה שווה אחוז אחד מתוך החשבון. נחלק את השלם ב-100.", "math_expression": "1% = 300 / 100 = 3" },
            { "verbal_explanation": "שלב 2: מצאנו ש-1% שווה ל-3 שקלים. כעת, נכפיל את הערך הזה ב-12 כדי להגיע ל-12%.", "math_expression": "12% = 3 * 12" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה כדי לקבל את סכום הטיפ המדויק.", "math_expression": "36" }
        ],
        "final_answer": "36 שקלים",
        "options": ["30 שקלים", "36 שקלים", "12 שקלים", "42 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Medium",
        "question_text": "חשבו: כמה הם <strong>15%</strong> מתוך <strong>80</strong>?",
        "hint": "נסו לפרק את ה-15% לחלקים קלים: 10% (שזה עשירית) ועוד 5% (שזה חצי מהעשירית).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את 15% לסכום של 10% ועוד 5%.", "math_expression": "15% = 10% + 5%" },
            { "verbal_explanation": "שלב 2: נמצא את ה-10% מתוך 80 על ידי חלוקה ב-10.", "math_expression": "10% = 80 / 10 = 8" },
            { "verbal_explanation": "שלב 3: ה-5% הם בדיוק החצי של ה-10%, לכן החצי של 8 הוא 4.", "math_expression": "5% = 8 / 2 = 4" },
            { "verbal_explanation": "שלב 4: נחבר את שני החלקים שמצאנו.", "math_expression": "8 + 4 = 12" }
        ],
        "final_answer": "12",
        "options": ["15", "8", "12", "10"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "ביישוב מסוים מתגוררים <strong>1200 תושבים</strong>. מתוכם, <strong>75%</strong> יצאו להצביע בבחירות. כמה תושבים <strong>יצאו להצביע</strong>?",
        "hint": "75% הם שלושה רבעים (3/4). אפשר לחלק את התושבים ל-4, ואז להכפיל את התוצאה ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בשבר המוכר. 75% מהווים שלושה רבעים מהשלם.", "math_expression": "75% = 3/4" },
            { "verbal_explanation": "שלב 2: נמצא כמה זה רבע אחד מתוך 1200 תושבים. נחלק ב-4.", "math_expression": "1200 / 4 = 300" },
            { "verbal_explanation": "שלב 3: כעת נכפיל את הרבע ב-3, כדי לקבל 3 רבעים (שהם ה-75%).", "math_expression": "300 * 3 = 900" }
        ],
        "final_answer": "900 תושבים",
        "options": ["900 תושבים", "800 תושבים", "750 תושבים", "1000 תושבים"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "חשבו: כמה הם <strong>120%</strong> מתוך <strong>50</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='30'><rect x='10' y='10' width='100' height='15' fill='#b09151'/><text x='60' y='22' font-size='10' fill='white'>100%</text><rect x='115' y='10' width='20' height='15' fill='#cbd5e1'/><text x='125' y='22' font-size='10'>20%</text></svg></div>",
        "hint": "אחוז שיותר מ-100 אומר שהתוצאה תהיה גדולה מהמספר המקורי! חשבו 100% (המספר עצמו) והוסיפו לו עוד 20%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את האחוז הגדול מ-100 לשני חלקים שנוחים לחישוב: 100% ועוד 20%.", "math_expression": "120% = 100% + 20%" },
            { "verbal_explanation": "שלב 2: ה-100% של מספר הוא פשוט המספר עצמו (50).", "math_expression": "100% = 50" },
            { "verbal_explanation": "שלב 3: נמצא את ה-20% מתוך 50. (עשירית היא 5, אז שתי עשיריות הן 10).", "math_expression": "20% = 10" },
            { "verbal_explanation": "שלב 4: נחבר את השלם לתוספת.", "math_expression": "50 + 10 = 60" }
        ],
        "final_answer": "60",
        "options": ["70", "50", "60", "120"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Medium",
        "question_text": "טריק של אלופים: כמה הם <strong>18%</strong> מתוך <strong>50</strong>?",
        "hint": "הידעתם? אחוזים ניתן להפוך! 18% מ-50 ייתנו לכם בדיוק את אותה התוצאה כמו 50% מ-18. מה יותר קל לחשב?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חוק חילוף מיוחד באחוזים קובע ש- X% מתוך Y שווה בדיוק ל- Y% מתוך X.", "math_expression": "X% * Y = Y% * X" },
            { "verbal_explanation": "שלב 2: נהפוך את התרגיל למשהו קל: נחשב 50% מתוך 18 במקום 18% מ-50.", "math_expression": "50% * 18" },
            { "verbal_explanation": "שלב 3: 50% הם חצי, וחצי מ-18 הוא כמובן 9.", "math_expression": "9" }
        ],
        "final_answer": "9",
        "options": ["9", "18", "4.5", "10"],
        "correctAnswer": 0
    },
    {
        "id": 11,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "הנוסחה המלאה והרשמית לחישוב אחוז היא להכפיל את השלם בשבר של האחוז (חלקי 100). השתמשו בה כדי לחשב כמה הם <strong>8%</strong> מתוך <strong>250</strong>.",
        "hint": "הכפילו 250 ב-8, ואת התוצאה חלקו ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחת האחוזים הקלאסית.", "math_expression": "250 * (8 / 100)" },
            { "verbal_explanation": "שלב 2: נכפול תחילה 250 ב-8. (250 כפול 4 זה 1000, לכן כפול 8 זה 2000).", "math_expression": "2000 / 100" },
            { "verbal_explanation": "שלב 3: נבצע את החילוק ב-100 (הורדת שני אפסים).", "math_expression": "20" }
        ],
        "final_answer": "20",
        "options": ["8", "25", "20", "16"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "אם ידוע ש- <strong>33.33%</strong> (שליש אחוז מחזורי) שווים בדיוק לשבר פשוט של 1/3, כמה הם 33.33% מתוך <strong>90</strong>?",
        "hint": "המירו את האחוז העשרוני המפחיד לשבר הפשוט והידידותי שלו (שליש), וחלקו את השלם ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חשוב לזכור בעל פה שהאחוז 33.33% מייצג תמיד שליש.", "math_expression": "33.33% = 1/3" },
            { "verbal_explanation": "שלב 2: כדי למצוא שליש ממספר, פשוט נחלק אותו ב-3.", "math_expression": "90 / 3" },
            { "verbal_explanation": "שלב 3: נחשב את פעולת החילוק.", "math_expression": "30" }
        ],
        "final_answer": "30",
        "options": ["30", "33", "60", "9"],
        "correctAnswer": 0
    },
    {
        "id": 13,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "חשבו: כמה הם <strong>12.5%</strong> מתוך <strong>160</strong>?",
        "hint": "רמז זהב: 12.5% הם בדיוק חצי מ-25%. אם 25% הם רבע, אז 12.5% הם שמינית (1/8) מהשלם!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכיר שבר שכיח נוסף: 12.5% מתוך 100 הם בדיוק 1/8 (שמינית אחת).", "math_expression": "12.5% = 1/8" },
            { "verbal_explanation": "שלב 2: כדי למצוא שמינית מהשלם, פשוט נחלק אותו ב-8.", "math_expression": "160 / 8" },
            { "verbal_explanation": "שלב 3: נחשב: 16 לחלק ל-8 זה 2, נוסיף את האפס ונקבל 20.", "math_expression": "20" }
        ],
        "final_answer": "20",
        "options": ["12.5", "16", "20", "40"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "High",
        "question_text": "חשבו שבר עשרוני: כמה זה <strong>0.5%</strong> (חצי אחוז) מתוך <strong>400</strong>?",
        "hint": "מצאו קודם כמה שווה אחוז אחד שלם (1%). חצי אחוז יהיה בדיוק חצי מהסכום הזה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בשיטת ה-1%. נמצא כמה שווה אחוז אחד על ידי חלוקת השלם ב-100.", "math_expression": "1% = 400 / 100 = 4" },
            { "verbal_explanation": "שלב 2: אם 1% שווה ל-4, אז חצי אחוז (0.5%) יהיה שווה לחצי מהערך הזה.", "math_expression": "0.5% = 4 / 2" },
            { "verbal_explanation": "שלב 3: חצי מ-4 הם 2.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["20", "2", "8", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "חישוב ערך האחוז",
        "difficulty": "Low",
        "question_text": "במבחן אמריקאי היו <strong>50 שאלות</strong>. תומר ענה נכונה על <strong>80%</strong> מהן. על כמה שאלות <strong>ענה תומר נכונה</strong>?",
        "hint": "אפשרות א': למצוא את ה-20% שהוא טעה בהם (שזה עשירית כפול 2) ולהחסיר מ-50. אפשרות ב': להכפיל 10% פי 8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב בדרך הישירה. נמצא כמה הם 10% מ-50 (נחלק ב-10).", "math_expression": "10% = 50 / 10 = 5" },
            { "verbal_explanation": "שלב 2: תומר ענה על 80%, שהם 8 פעמים ה-10% שמצאנו.", "math_expression": "80% = 5 * 8" },
            { "verbal_explanation": "שלב 3: נחשב את הכפל ונקבל את כמות התשובות הנכונות.", "math_expression": "40" }
        ],
        "final_answer": "40 שאלות",
        "options": ["45 שאלות", "40 שאלות", "35 שאלות", "10 שאלות"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: מציאת השלם (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "מציאת השלם",
        "difficulty": "Low",
        "question_text": "ידוע ש- <strong>10%</strong> ממספר מסוים (החלק) שווים ל- <strong>7</strong>. מהו <strong>המספר השלם</strong>?",
        "hint": "בבעיות של 'מציאת השלם' אנחנו מחפשים את ה-100%. אם עשירית (10%) היא 7, בכמה נכפיל כדי להגיע ל-100%?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו יודעים את הערך של חלק קטן. 10% הם למעשה עשירית אחת (1/10) מתוך השלם.", "math_expression": "10% = 7" },
            { "verbal_explanation": "שלב 2: כדי להרכיב את השלם המלא (100%), עלינו לקחת 10 חתיכות כאלו של עשירית. נכפיל ב-10.", "math_expression": "100% = 7 * 10" },
            { "verbal_explanation": "שלב 3: התוצאה היא השלם שחיפשנו.", "math_expression": "70" }
        ],
        "final_answer": "70",
        "options": ["17", "70", "100", "7"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "מציאת השלם",
        "difficulty": "Low",
        "question_text": "נתון ש- <strong>50%</strong> מכמות מסוימת שוקלים <strong>42 ק\"ג</strong>. מהי <strong>הכמות הכוללת (השלם)</strong>?",
        "hint": "50% זה בדיוק חצי. אם חצי שוקל 42, כמה שוקלים שני החצאים יחד?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את האחוז לשבר. 50% מהווים מחצית מהשלם.", "math_expression": "1/2 = 42" },
            { "verbal_explanation": "שלב 2: אם חצי מהכמות שווה ל-42, השלם המלא (100%) יהיה מורכב מפעמיים הכמות הזו.", "math_expression": "100% = 42 * 2" },
            { "verbal_explanation": "שלב 3: נחשב את הכפל ונגלה את השלם.", "math_expression": "84" }
        ],
        "final_answer": "84 ק\"ג",
        "options": ["84 ק\"ג", "21 ק\"ג", "50 ק\"ג", "100 ק\"ג"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "דנה חסכה כסף לקניית אופניים. עד כה היא חסכה <strong>30 שקלים</strong>, שהם בדיוק <strong>25%</strong> ממחיר האופניים. מהו <strong>המחיר המלא</strong> של האופניים?",
        "hint": "25% הם רבע (1/4). אם רבע אחד מהמחיר הוא 30 שקלים, כמה שווים 4 רבעים (המחיר המלא)?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השבר הפשוט. 25% הם בדיוק רבע מהשלם.", "math_expression": "1/4 = 30" },
            { "verbal_explanation": "שלב 2: אם רבע עולה 30 שקלים, המחיר המלא יהיה שווה ל-4 פעמים הערך הזה.", "math_expression": "100% = 30 * 4" },
            { "verbal_explanation": "שלב 3: נחשב את הכפל כדי למצוא את מחיר האופניים.", "math_expression": "120" }
        ],
        "final_answer": "120 שקלים",
        "options": ["90 שקלים", "100 שקלים", "120 שקלים", "60 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "ידוע כי <strong>20%</strong> ממספר מסוים הם <strong>18</strong>. מהו המספר <strong>השלם</strong>?",
        "hint": "אפשרות א': 20% זה חמישית, אז תכפילו ב-5. אפשרות ב': חלקו את 18 ב-2 כדי להגיע ל-10%, ואז הכפילו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתור בעזרת שיטת השברים. 20 מתוך 100 הם בדיוק 1/5 (חמישית).", "math_expression": "1/5 = 18" },
            { "verbal_explanation": "שלב 2: אם חמישית מהשלם שווה 18, אז 5 חמישיות (שהם ה-100%) יהיו שוות ל-18 כפול 5.", "math_expression": "100% = 18 * 5" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה.", "math_expression": "90" }
        ],
        "final_answer": "90",
        "options": ["72", "90", "100", "36"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "הנוסחה הרשמית למציאת השלם היא 'הערך החלקי לחלק לאחוז (כשבר)'. אם <strong>5%</strong> הם <strong>4</strong>, מהו השלם?",
        "hint": "נסו את שיטת המדרגות: אם 5% הם 4, הכפילו את שניהם ב-2 כדי למצוא כמה הם 10%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בשיטת מדרגות. אם נכפיל את האחוז פי 2 נגיע ל-10% שקל לעבוד איתם. נכפיל גם את הערך.", "math_expression": "10% = 4 * 2 = 8" },
            { "verbal_explanation": "שלב 2: כעת אנו יודעים ש-10% מהשלם הם 8. כדי להגיע ל-100%, נכפיל את התוצאה ב-10.", "math_expression": "100% = 8 * 10" },
            { "verbal_explanation": "שלב 3: נקבל את השלם המלא.", "math_expression": "80" }
        ],
        "final_answer": "80",
        "options": ["40", "20", "80", "100"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "בכיתה ח'2 יש <strong>12 בנים</strong>, והם מהווים <strong>30%</strong> מכלל תלמידי הכיתה (בנים ובנות יחד). כמה תלמידים יש בכיתה <strong>בסך הכל</strong>?",
        "hint": "מצאו למה שווים 10%. אם 30% שווים ל-12 בנים, חלקו ב-3. אחר כך הכפילו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגלה כמה תלמידים מהווים 10%. כדי לרדת מ-30% ל-10%, נחלק את הנתונים ב-3.", "math_expression": "10% = 12 / 3 = 4" },
            { "verbal_explanation": "שלב 2: אם 10% מהכיתה הם 4 תלמידים, השלם המלא (100%) יהיה גדול פי 10.", "math_expression": "100% = 4 * 10" },
            { "verbal_explanation": "שלב 3: נחשב את סך כל התלמידים בכיתה.", "math_expression": "40" }
        ],
        "final_answer": "40 תלמידים",
        "options": ["36 תלמידים", "40 תלמידים", "30 תלמידים", "60 תלמידים"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "אם <strong>75%</strong> ממשקל של ארגז הם <strong>60 ק\"ג</strong>, כמה שוקל <strong>הארגז המלא (100%)</strong>?",
        "hint": "75% הם שלושה רבעים. אם 3 רבעים שווים 60, כמה שווה רבע אחד? (חלקו ב-3). ואז הכפילו ב-4 לשלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 75% שקולים ל-3/4. כלומר, 3 רבעים מהארגז שוקלים 60 ק\"ג.", "math_expression": "3/4 = 60" },
            { "verbal_explanation": "שלב 2: נמצא כמה שוקל רבע אחד בלבד (25%). לשם כך נחלק את ה-60 ב-3.", "math_expression": "1/4 = 60 / 3 = 20" },
            { "verbal_explanation": "שלב 3: השלם מכיל 4 רבעים. נכפיל את משקל הרבע ב-4 כדי לקבל את המשקל המלא.", "math_expression": "100% = 20 * 4 = 80" }
        ],
        "final_answer": "80 ק\"ג",
        "options": ["80 ק\"ג", "90 ק\"ג", "100 ק\"ג", "75 ק\"ג"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "על סמארטפון ניתנה הנחה של <strong>15%</strong>. ידוע שסכום ההנחה היה <strong>45 שקלים</strong>. מה היה מחיר הסמארטפון <strong>המקורי לפני ההנחה</strong>?",
        "hint": "אל תתבלבלו: ה-45 שקלים הם רק ההנחה (ה-15%). חלקו ב-15 כדי למצוא כמה זה אחוז אחד (1%), ואז הכפילו ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בשיטת ה-1% למציאת השלם. נחלק את החלק (45) באחוז שלו (15).", "math_expression": "1% = 45 / 15 = 3" },
            { "verbal_explanation": "שלב 2: מצאנו שכל אחוז אחד ממחיר המכשיר שווה ל-3 שקלים. המחיר המלא הוא 100%.", "math_expression": "100% = 3 * 100" },
            { "verbal_explanation": "שלב 3: התוצאה היא המחיר ההתחלתי.", "math_expression": "300" }
        ],
        "final_answer": "300 שקלים",
        "options": ["250 שקלים", "300 שקלים", "450 שקלים", "150 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "אם <strong>150%</strong> ממספר מסוים הם <strong>45</strong>, מהו <strong>המספר המקורי (ה-100%)</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='30'><rect x='10' y='10' width='100' height='15' fill='#cbd5e1'/><text x='50' y='22' font-size='10'>100%</text><rect x='115' y='10' width='50' height='15' fill='#b09151'/><text x='130' y='22' font-size='10'>50%</text></svg></div>",
        "hint": "150% מורכב מ-3 חצאים (50%+50%+50%). חלקו את ה-45 ב-3 כדי למצוא כמה שוקל חצי אחד (50%). ואז הכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 150% הם שלם וחצי. ניתן לחלק אותם ל-3 'בלוקים' של 50%. נחלק את ה-45 ב-3.", "math_expression": "50% = 45 / 3 = 15" },
            { "verbal_explanation": "שלב 2: גילינו שחצי מהמספר המקורי (50%) שווה ל-15. כדי למצוא את המספר השלם (100%), נכפיל ב-2.", "math_expression": "100% = 15 * 2" },
            { "verbal_explanation": "שלב 3: התוצאה היא השלם המקורי. (הוא קטן מ-45, וזה הגיוני כי 45 ייצג יותר מהשלם!)", "math_expression": "30" }
        ],
        "final_answer": "30",
        "options": ["60", "30", "15", "67.5"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "ידוע ש- <strong>1%</strong> ממשקל של רכב שווה ל- <strong>12 ק\"ג</strong>. מהו המשקל <strong>הכולל</strong> של הרכב?",
        "hint": "זו שאלה מתנה! כבר מצאו לכם את ה-1%. נשאר רק להכפיל אותו ב-100 כדי להגיע לשלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנתון מספק לנו ישירות את ערכו של אחוז אחד בודד.", "math_expression": "1% = 12" },
            { "verbal_explanation": "שלב 2: השלם תמיד עשוי מ-100 אחוזים כאלו. לכן, נכפיל ב-100.", "math_expression": "100% = 12 * 100" },
            { "verbal_explanation": "שלב 3: נוסיף את האפסים למספר 12.", "math_expression": "1200" }
        ],
        "final_answer": "1200 ק\"ג",
        "options": ["120 ק\"ג", "1000 ק\"ג", "1200 ק\"ג", "2400 ק\"ג"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "משפחה נסעה לטיול. לאחר שעברו <strong>24 ק\"מ</strong>, הילדים שאלו 'מתי מגיעים?'. האם ענתה: 'עברנו בדיוק <strong>60%</strong> מהדרך!'. מהו <strong>אורך הטיול כולו</strong> בק\"מ?",
        "hint": "חלקו את ה-24 ק\"מ ל-6 חלקים שווים כדי למצוא כמה שווים 10%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתון ש-60% מהדרך הם 24 ק\"מ. נרד למדרגה של 10% על ידי חלוקה ב-6.", "math_expression": "10% = 24 / 6 = 4" },
            { "verbal_explanation": "שלב 2: מצאנו שכל 10% של הטיול הם 4 ק\"מ. הטיול כולו הוא 100%. נכפיל ב-10.", "math_expression": "100% = 4 * 10" },
            { "verbal_explanation": "שלב 3: נחשב את הדרך הכוללת.", "math_expression": "40" }
        ],
        "final_answer": "40 ק\"מ",
        "options": ["40 ק\"מ", "30 ק\"מ", "36 ק\"מ", "60 ק\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "ידוע ש- <strong>12.5%</strong> ממספר הם <strong>10</strong>. מהו המספר השלם?",
        "hint": "כזכור, 12.5% הם בדיוק שמינית (1/8). אם שמינית אחת שווה 10, השלם מורכב מ-8 שמיניות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את האחוז העשרוני לשבר פשוט שקל לעבוד איתו. 12.5% שווים לשמינית.", "math_expression": "1/8 = 10" },
            { "verbal_explanation": "שלב 2: אם חלק אחד מתוך 8 שווה ל-10, אז כל 8 החלקים (השלם) יהיו שווים ל-10 כפול 8.", "math_expression": "100% = 10 * 8" },
            { "verbal_explanation": "שלב 3: נחשב את הכפל.", "math_expression": "80" }
        ],
        "final_answer": "80",
        "options": ["40", "80", "125", "100"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "בבדיקת רופא התברר שגובהו של יוני הוא <strong>105%</strong> מהגובה הממוצע לגילו. הגובה של יוני הוא <strong>147 ס\"מ</strong>. מהו <strong>הגובה הממוצע (השלם)</strong>?",
        "hint": "העזרו בשיטת ה-1%. מצאו כמה זה 1% על ידי חלוקת 147 ב-105.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יוני גבוה יותר מהממוצע, ולכן האחוז שלו (105%) עבר את השלם. נשתמש בחילוק ארוך כדי למצוא את ה-1%.", "math_expression": "1% = 147 / 105" },
            { "verbal_explanation": "שלב 2: 147 לחלק ל-105 שווה ל-1.4.", "math_expression": "1% = 1.4" },
            { "verbal_explanation": "שלב 3: כדי למצוא את הגובה הממוצע (100%), נכפיל את ה-1% שלנו ב-100.", "math_expression": "100% = 1.4 * 100 = 140" }
        ],
        "final_answer": "140 ס\"מ",
        "options": ["150 ס\"מ", "145 ס\"מ", "140 ס\"מ", "135 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "מציאת השלם",
        "difficulty": "Medium",
        "question_text": "שחקן קלע <strong>33.33%</strong> מכלל הנקודות של קבוצתו. הוא קלע <strong>25 נקודות</strong>. כמה נקודות קלעה <strong>הקבוצה כולה</strong>?",
        "hint": "33.33% זה שליש מהשלם. אם שליש הוא 25, אז השלם הוא...",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השבר המסתתר מאחורי האחוז. 33.33% מייצג בדיוק 1/3 (שליש).", "math_expression": "1/3 = 25" },
            { "verbal_explanation": "שלב 2: אם שליש מהנקודות שווה ל-25, הקבוצה כולה (3 שלישים) תהיה גדולה פי 3.", "math_expression": "100% = 25 * 3" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה.", "math_expression": "75" }
        ],
        "final_answer": "75 נקודות",
        "options": ["100 נקודות", "50 נקודות", "75 נקודות", "80 נקודות"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "מציאת השלם",
        "difficulty": "High",
        "question_text": "אם <strong>0.2%</strong> (שתי עשיריות האחוז) מכמות הם <strong>1</strong>, מהי <strong>הכמות כולה (100%)</strong>?",
        "hint": "כמה פעמים נכנס 0.2 בתוך 1 שלם? 5 פעמים. לכן 1% שווה ל-5. מה עכשיו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגלה קודם למה שווה אחוז אחד שלם (1%). מכיוון ש-0.2 הוא חמישית מאחד (0.2 * 5 = 1), נכפיל את הערך ב-5.", "math_expression": "1% = 1 * 5 = 5" },
            { "verbal_explanation": "שלב 2: כעת אנו יודעים ש-1% מהכמות שווה ל-5. נכפיל ב-100 כדי להגיע לשלם.", "math_expression": "100% = 5 * 100" },
            { "verbal_explanation": "שלב 3: השלם שלנו גדול מאוד, וזה הגיוני כי האחוז שניתן היה זעיר.", "math_expression": "500" }
        ],
        "final_answer": "500",
        "options": ["50", "200", "500", "1000"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 3: מציאת אחוז (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "מציאת אחוז",
        "difficulty": "Low",
        "question_text": "בכיתה יש <strong>50 תלמידים</strong>. <strong>10</strong> מתוכם מרכיבים משקפיים. איזה <strong>אחוז</strong> מתלמידי הכיתה מרכיבים משקפיים?",
        "hint": "כתבו את הנתונים בצורת שבר: 10 מתוך 50. כדי להפוך לאחוזים, הרחיבו את השבר כך שהמכנה יהיה 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את היחס בין החלק לשלם בתור שבר פשוט: 10 מתוך 50.", "math_expression": "10 / 50" },
            { "verbal_explanation": "שלב 2: אחוז פירושו 'מתוך מאה'. לכן, נרחיב את השבר כך שהמכנה יהיה 100. נכפיל את המונה והמכנה ב-2.", "math_expression": "(10 * 2) / (50 * 2)" },
            { "verbal_explanation": "שלב 3: קיבלנו 20 מתוך 100, שזה בדיוק ההגדרה של 20%.", "math_expression": "20 / 100 = 20%" }
        ],
        "final_answer": "20%",
        "options": ["10%", "20%", "5%", "50%"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "מציאת אחוז",
        "difficulty": "Low",
        "question_text": "תמר אכלה <strong>3 משולשי פיצה</strong> מתוך מגש שהכיל <strong>12 משולשים</strong>. איזה <strong>אחוז</strong> מהפיצה אכלה תמר?",
        "hint": "צמצמו את השבר '3 מתוך 12' לשבר פשוט יותר שאתם מכירים היטב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציג את החלק שאכלה תמר מתוך השלם בצורת שבר.", "math_expression": "3 / 12" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר על ידי חלוקת המונה והמכנה ב-3. נגלה שזה בדיוק רבע.", "math_expression": "1 / 4" },
            { "verbal_explanation": "שלב 3: נזכור בעל פה שהשבר רבע (1/4) שווה תמיד ל-25%.", "math_expression": "25%" }
        ],
        "final_answer": "25%",
        "options": ["30%", "25%", "33%", "20%"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "במפעל ייצרו <strong>300 נורות</strong>. בבדיקת איכות התגלה כי <strong>45 נורות</strong> פגומות. מהו <strong>אחוז النורות הפגומות</strong>?",
        "hint": "רשמו שבר: 45 חלקי 300. במקום להרחיב, נסו לצמצם את השבר (לחלק ב-3) כדי להגיע למכנה 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרכיב את שבר היחס. 45 פגומות מתוך 300.", "math_expression": "45 / 300" },
            { "verbal_explanation": "שלב 2: במקום לכפול, אפשר גם לחלק כדי להגיע ל-100! נחלק את המונה והמכנה ב-3.", "math_expression": "(45 / 3) / (300 / 3)" },
            { "verbal_explanation": "שלב 3: 45 חלקי 3 שווה 15. המכנה הפך ל-100. התוצאה היא 15 מתוך מאה.", "math_expression": "15%" }
        ],
        "final_answer": "15%",
        "options": ["15%", "10%", "45%", "25%"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "מתוך <strong>40</strong> תלמידים שיצאו לטיול, <strong>8</strong> שכחו להביא כובע. איזה <strong>אחוז</strong> מהתלמידים שכח כובע?",
        "hint": "8 מתוך 40. נסו לצמצם את השבר על ידי חלוקה ב-8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה את השבר: שמונה מתוך ארבעים.", "math_expression": "8 / 40" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר. גם 8 וגם 40 מתחלקים ב-8. נקבל חמישית.", "math_expression": "(8 / 8) / (40 / 8) = 1 / 5" },
            { "verbal_explanation": "שלב 3: חמישית (1/5) שווה תמיד ל-20 מתוך 100, כלומר 20%.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["8%", "20%", "25%", "40%"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "מציאת אחוז",
        "difficulty": "Low",
        "question_text": "קופסת עוגיות שוקלת קילוגרם אחד (<strong>1000 גרם</strong>). מתוכם, <strong>200 גרם</strong> הם שוקולד. איזה <strong>אחוז</strong> מהעוגיות הוא שוקולד?",
        "hint": "שימו לב שהשלם הוא 1000 גרם. 200 מתוך 1000. פשוט קזזו אפסים (חלקו ב-10) כדי להגיע ל-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את היחס בגרמים: 200 גרם מתוך 1000 גרם סך הכל.", "math_expression": "200 / 1000" },
            { "verbal_explanation": "שלב 2: כדי להפוך למכנה של 100 (אחוז), פשוט נחלק מונה ומכנה ב-10 (נוריד אפס אחד לכל מספר).", "math_expression": "20 / 100" },
            { "verbal_explanation": "שלב 3: 20 מתוך 100 הם 20%.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["2%", "10%", "20%", "50%"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "מציאת אחוז",
        "difficulty": "High",
        "question_text": "רוני ענה נכונה על <strong>18 שאלות</strong> במבחן מתוך <strong>24 שאלות בסך הכל</strong>. איזה <strong>אחוז</strong> מהמבחן פתר רוני נכונה?",
        "hint": "השבר הוא 18/24. צמצמו אותו קודם בעזרת לוח הכפל (למשל, שניהם מתחלקים ב-6) כדי לגלות שבר מוכר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: היחס הוא 18 מתוך 24.", "math_expression": "18 / 24" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר במקסימום. גם 18 וגם 24 מתחלקים ב-6. נקבל 3 במונה ו-4 במכנה.", "math_expression": "3 / 4" },
            { "verbal_explanation": "שלב 3: קיבלנו שלושה רבעים (3/4). אנו יודעים ששלושה רבעים שווים בדיוק ל-75%.", "math_expression": "75%" }
        ],
        "final_answer": "75%",
        "options": ["75%", "80%", "60%", "50%"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "בגינה ישנן <strong>35 נטיעות</strong>. <strong>7</strong> מתוכן הן עצי לימון. איזה אחוז מהוות הנטיעות של עצי הלימון?",
        "hint": "מהו הקשר בין 7 ל-35? כמה פעמים 7 נכנס ב-35?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרכיב את השבר: 7 עצי לימון מתוך 35 נטיעות בסך הכל.", "math_expression": "7 / 35" },
            { "verbal_explanation": "שלב 2: 35 הוא כפולה של 7. נצמצם את השבר בחלוקה ב-7 ונקבל חמישית.", "math_expression": "1 / 5" },
            { "verbal_explanation": "שלב 3: חמישית תמיד שווה ל-20%.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["14%", "35%", "20%", "25%"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "מציאת אחוז",
        "difficulty": "Low",
        "question_text": "מתוך <strong>10</strong> תרגילים שניתנו כשיעורי בית, יעל פתרה <strong>9</strong> תרגילים. איזה אחוז משיעורי הבית היא פתרה?",
        "hint": "השבר הוא 9 חלקי 10. הרחיבו אותו פי 10 כדי שהמכנה יהיה 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יעל פתרה 9 מתוך 10 תרגילים.", "math_expression": "9 / 10" },
            { "verbal_explanation": "שלב 2: כדי להגיע לאחוזים, נכפיל את המונה והמכנה ב-10.", "math_expression": "(9 * 10) / (10 * 10)" },
            { "verbal_explanation": "שלב 3: קיבלנו 90 מתוך 100. כלומר, 90 אחוזים.", "math_expression": "90 / 100 = 90%" }
        ],
        "final_answer": "90%",
        "options": ["9%", "90%", "80%", "10%"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "באולם קולנוע יש <strong>60</strong> מושבים, ו- <strong>12</strong> מהם כבר תפוסים. מהו אחוז המושבים התפוסים?",
        "hint": "נסו לגלות כמה פעמים 12 נכנס בתוך 60. זה ייתן לכם שבר מוכר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את היחס: 12 מושבים תפוסים מתוך 60 בסך הכל.", "math_expression": "12 / 60" },
            { "verbal_explanation": "שלב 2: נצמצם ב-12 (מכיוון ש- 12 כפול 5 זה 60). קיבלנו 1/5.", "math_expression": "1 / 5" },
            { "verbal_explanation": "שלב 3: חמישית מהווה בדיוק 20 אחוזים.", "math_expression": "20%" }
        ],
        "final_answer": "20%",
        "options": ["20%", "24%", "12%", "30%"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "מתוך <strong>400</strong> משתתפים בכנס, <strong>60</strong> ביקשו ארוחה צמחונית. איזה אחוז ביקשו ארוחה צמחונית?",
        "hint": "רשמו 60 חלקי 400. כדי להפוך למאה, פשוט חלקו את המונה והמכנה ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השבר המקורי: 60 מתוך 400.", "math_expression": "60 / 400" },
            { "verbal_explanation": "שלב 2: המכנה שלנו גדול מ-100, לכן עלינו לצמצם אותו (לחלק אותו). נחלק ב-4 כדי להגיע למכנה 100.", "math_expression": "(60 / 4) / (400 / 4)" },
            { "verbal_explanation": "שלב 3: 60 לחלק ל-4 זה 15. לכן, התוצאה היא 15 מתוך מאה.", "math_expression": "15%" }
        ],
        "final_answer": "15%",
        "options": ["10%", "20%", "15%", "60%"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "מציאת אחוז",
        "difficulty": "High",
        "question_text": "מיכל קיבולת מים תוכנן להכיל <strong>100 ליטרים</strong>. בגלל טעות, מילאו בו <strong>150 ליטרים</strong>. לכמה אחוזים מקיבולתו הרשמית מולא המיכל?",
        "hint": "כאשר החלק גדול מהשלם, האחוז יהיה בהכרח גדול מ-100%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השלם שלנו, הקיבולת הרשמית, היא 100.", "math_expression": "שלם = 100" },
            { "verbal_explanation": "שלב 2: הכמות בפועל היא 150. נרשום אותה מעל השלם.", "math_expression": "150 / 100" },
            { "verbal_explanation": "שלב 3: מכיוון שהמכנה הוא כבר 100, המונה הוא האחוז עצמו: מאה וחמישים אחוזים.", "math_expression": "150%" }
        ],
        "final_answer": "150%",
        "options": ["150%", "50%", "100%", "250%"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "מציאת אחוז",
        "difficulty": "High",
        "question_text": "רוכב אופניים תכנן לרכוב <strong>6 ק\"מ</strong>. הוא התעייף ועצר לאחר <strong>1.5 ק\"מ</strong>. איזה אחוז מהמסלול השלים?",
        "hint": "אל תיבהלו ממספרים עשרוניים. כמה פעמים 1.5 נכנס בתוך 6?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: היחס הוא 1.5 מתוך 6.", "math_expression": "1.5 / 6" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה והמכנה ב-2 כדי להיפטר מהעשרוני. נקבל 3 חלקי 12.", "math_expression": "(1.5 * 2) / (6 * 2) = 3 / 12" },
            { "verbal_explanation": "שלב 3: נצמצם את 3/12 ב-3 ונקבל 1/4 (רבע). רבע הוא בדיוק 25%.", "math_expression": "1 / 4 = 25%" }
        ],
        "final_answer": "25%",
        "options": ["15%", "20%", "25%", "33%"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "מציאת אחוז",
        "difficulty": "High",
        "question_text": "בחנות ישנם <strong>70 זוגות נעליים</strong>. מתוכם <strong>21 זוגות</strong> הם נעלי ספורט. מהו אחוז נעלי הספורט מתוך כלל הנעליים?",
        "hint": "כתבו 21/70. נסו לצמצם את שני המספרים. האם שניהם מופיעים בכפולה של 7?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב כשבר פשוט: 21 מתוך 70.", "math_expression": "21 / 70" },
            { "verbal_explanation": "שלב 2: נצמצם ב-7. במונה נקבל 3, ובמכנה 10.", "math_expression": "3 / 10" },
            { "verbal_explanation": "שלב 3: שלוש עשיריות הן 30 חלקי 100. לכן מדובר ב-30%.", "math_expression": "30 / 100 = 30%" }
        ],
        "final_answer": "30%",
        "options": ["21%", "30%", "33%", "20%"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "מציאת אחוז",
        "difficulty": "Medium",
        "question_text": "דני קלע <strong>11 פעמים לסל</strong> מתוך <strong>44 זריקות</strong> שזרק בסך הכל. מה אחוז הקליעות שלו?",
        "hint": "צמצמו את השבר ב-11.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יחס הקליעות הוא 11 מתוך 44.", "math_expression": "11 / 44" },
            { "verbal_explanation": "שלב 2: נצמצם ב-11 את המונה והמכנה ונקבל רבע.", "math_expression": "(11 / 11) / (44 / 11) = 1 / 4" },
            { "verbal_explanation": "שלב 3: רבע שווה ל-25 אחוזים.", "math_expression": "25%" }
        ],
        "final_answer": "25%",
        "options": ["11%", "44%", "25%", "50%"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "מציאת אחוז",
        "difficulty": "High",
        "question_text": "ספר מכיל <strong>180 עמודים</strong>. דנה קראה עד כה <strong>54 עמודים</strong>. איזה אחוז מהספר קראה דנה?",
        "hint": "רשמו 54/180. נסו לצמצם תחילה ב-18 (או קודם ב-9 ואז ב-2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השבר הוא 54 מתוך 180.", "math_expression": "54 / 180" },
            { "verbal_explanation": "שלב 2: נצמצם ב-18. ידוע ש-18 כפול 3 שווה 54, ו-18 כפול 10 שווה 180. לכן נקבל 3/10.", "math_expression": "3 / 10" },
            { "verbal_explanation": "שלב 3: 3 עשיריות שוות ל-30 מתוך 100. התשובה היא 30%.", "math_expression": "30%" }
        ],
        "final_answer": "30%",
        "options": ["30%", "25%", "40%", "20%"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: בעיות התייקרות והוזלה (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Low",
        "question_text": "מחיר חולצה היה <strong>100 שקלים</strong>. לקראת העונה החדשה מחירה <strong>התייקר ב-20%</strong>. מהו מחיר החולצה <strong>החדש</strong>?",
        "hint": "המחיר המקורי הוא 100%. התייקרות מוסיפה 20%. חשבו כמה הם 20% מ-100 והוסיפו למחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום ההתייקרות בלבד. מאחר שהשלם הוא בדיוק 100, 20% מתוך 100 שווים פשוט ל-20 שקלים.", "math_expression": "20% מ-100 = 20" },
            { "verbal_explanation": "שלב 2: התייקרות משמעותה שמוסיפים את הסכום הזה למחיר המקורי.", "math_expression": "100 + 20" },
            { "verbal_explanation": "שלב 3: נחשב את הסכום לקבלת המחיר החדש.", "math_expression": "120" }
        ],
        "final_answer": "120 שקלים",
        "options": ["120 שקלים", "80 שקלים", "20 שקלים", "100 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 47,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "זוג נעליים עולה <strong>200 שקלים</strong>. בסוף העונה ניתנה <strong>הנחה (הוזלה) של 15%</strong>. מהו מחירו <strong>החדש</strong> של זוג הנעליים לאחר ההנחה?",
        "hint": "חשבו קודם את שווי ההנחה: מצאו 10% (שהם 20) ועוד 5% (שהם 10). אז, החסירו זאת מ-200.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום ההנחה. 10% מ-200 שווים 20. 5% שווים 10. ביחד: ההנחה היא 30 שקלים.", "math_expression": "20 + 10 = 30" },
            { "verbal_explanation": "שלב 2: הוזלה (הנחה) מורידה מן המחיר המקורי, ולכן נבצע פעולת חיסור.", "math_expression": "200 - 30" },
            { "verbal_explanation": "שלב 3: המחיר שיישאר הוא המחיר החדש לתשלום בקופה.", "math_expression": "170" }
        ],
        "final_answer": "170 שקלים",
        "options": ["185 שקלים", "30 שקלים", "170 שקלים", "230 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Low",
        "question_text": "מחיר עציץ היה <strong>50 שקלים</strong>. עקב מחסור במים, מחירו <strong>התייקר ב-10%</strong>. מהו מחירו <strong>החדש</strong>?",
        "hint": "כמה הם 10% מ-50? מצאו את הערך והוסיפו ל-50.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום ההתייקרות. 10% מתוך 50 שווים ל-5 (על ידי חלוקת 50 ב-10).", "math_expression": "10% מ-50 = 5" },
            { "verbal_explanation": "שלב 2: מכיוון שזו התייקרות, נוסיף 5 שקלים למחיר ההתחלתי.", "math_expression": "50 + 5" },
            { "verbal_explanation": "שלב 3: המחיר החדש של העציץ התגלה.", "math_expression": "55" }
        ],
        "final_answer": "55 שקלים",
        "options": ["45 שקלים", "60 שקלים", "55 שקלים", "10 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "מחירו של מיקרוגל היה <strong>400 שקלים</strong>. לקראת החגים מחירו <strong>הוזל ב-25%</strong>. כמה עולה המיקרוגל כעת?",
        "hint": "25% הם רבע. מצאו את הרבע של 400, והפחיתו אותו מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום ההנחה. 25% הם רבע. רבע מתוך 400 שווה ל-100.", "math_expression": "400 / 4 = 100" },
            { "verbal_explanation": "שלב 2: נחסיר את סכום ההנחה (100) מהמחיר המקורי (400) כדי לקבל את המחיר לתשלום.", "math_expression": "400 - 100" },
            { "verbal_explanation": "שלב 3: התוצאה הסופית היא המחיר המעודכן.", "math_expression": "300" }
        ],
        "final_answer": "300 שקלים",
        "options": ["300 שקלים", "100 שקלים", "500 שקלים", "250 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 50,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "מחיר חולצה עלה מ- <strong>80 שקלים</strong> ל- <strong>100 שקלים</strong>. ב<strong>כמה אחוזים</strong> התייקרה החולצה?<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='30'><rect x='10' y='5' width='160' height='20' fill='#fefce8' stroke='#1e293b' stroke-width='1'/><text x='90' y='20' font-size='14' text-anchor='middle'>80 ₪ (100%)</text><path d='M180,15 L200,15' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><polygon points='200,10 210,15 200,20' fill='#b09151'/><text x='225' y='20' font-size='12' fill='red'>+20 ₪</text></svg></div>",
        "hint": "קודם חשבו את ההפרש בשקלים. אחר כך בידקו איזה חלק מהווה ההפרש מתוך המחיר המקורי (80).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ראשית, נמצא בכמה שקלים בדיוק עלה המחיר. נחסיר 80 מ-100.", "math_expression": "100 - 80 = 20" },
            { "verbal_explanation": "שלב 2: שנית, נבדוק איזה חלק מהווה ההפרש הזה (20) מתוך המחיר *ההתחלתי* שהיה (80). נרשום כשבר.", "math_expression": "20 / 80" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר (נחלק ב-20) ונקבל 1/4. אנו יודעים שרבע הוא 25%.", "math_expression": "1 / 4 = 25%" }
        ],
        "final_answer": "25%",
        "options": ["20%", "25%", "80%", "100%"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "מחיר כיסא ירד מ- <strong>120 שקלים</strong> ל- <strong>90 שקלים</strong>. ב<strong>כמה אחוזים</strong> הוזל הכיסא?",
        "hint": "חשבו את ההפרש בשקלים (30). בדקו כמה הם 30 מתוך המחיר המקורי (120). זהו שבר שאתם מכירים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההנחה בשקלים על ידי חיסור. 120 פחות 90 הם 30 שקלים הנחה.", "math_expression": "120 - 90 = 30" },
            { "verbal_explanation": "שלב 2: נרשום את ההנחה מתוך המחיר *המקורי* בלבד: 30 מתוך 120.", "math_expression": "30 / 120" },
            { "verbal_explanation": "שלב 3: נצמצם ב-30 ונקבל רבע. רבע שווה ל-25%.", "math_expression": "1 / 4 = 25%" }
        ],
        "final_answer": "25%",
        "options": ["30%", "25%", "15%", "12%"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "התקלה הקלאסית: מחיר ספה היה <strong>300 שקלים</strong>. המחיר <strong>הוזל ב-10%</strong>. כעבור חודש, המחיר החדש <strong>התייקר ב-10%</strong>. מהו מחירו <strong>הסופי</strong> של הכיסא?",
        "hint": "אל תיפלו למלכודת! המחיר לא חוזר ל-300. חשבו שלב אחרי שלב: הורידו 10% מ-300, ואז הוסיפו 10% לתוצאה החדשה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההוזלה. 10% מ-300 הם 30. המחיר לאחר ההוזלה הוא 300 פחות 30, כלומר 270 שקלים.", "math_expression": "300 - 30 = 270" },
            { "verbal_explanation": "שלב 2: כעת נחשב את ההתייקרות של 10%, אבל *מהמחיר החדש* (270). 10% מ-270 הם 27 שקלים.", "math_expression": "10% מ-270 = 27" },
            { "verbal_explanation": "שלב 3: נוסיף 27 שקלים ל-270, ונקבל 297 שקלים. (תמיד כשמוזילים ואז מייקרים באותו אחוז, נשארים עם פחות מההתחלה).", "math_expression": "270 + 27 = 297" }
        ],
        "final_answer": "297 שקלים",
        "options": ["300 שקלים", "297 שקלים", "303 שקלים", "270 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "מחיר משחק מחשב הוא <strong>150 שקלים</strong>. לכבוד החופש הגדול יש <strong>20% הנחה</strong>. מהו <strong>המחיר הסופי</strong> של המשחק?",
        "hint": "חשבו 10% (שזה 15), הכפילו ב-2 כדי למצוא את ההנחה (30), והחסירו מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום ההנחה. 10% מ-150 הם 15. נכפיל פי 2 לקבלת 20%, שזה 30.", "math_expression": "15 * 2 = 30" },
            { "verbal_explanation": "שלב 2: ההנחה היא 30 שקלים. נחסיר אותה ממחיר המשחק כדי לגלות כמה נשלם בפועל.", "math_expression": "150 - 30" },
            { "verbal_explanation": "שלב 3: נקבל את המחיר הסופי לתשלום.", "math_expression": "120" }
        ],
        "final_answer": "120 שקלים",
        "options": ["130 שקלים", "30 שקלים", "120 שקלים", "100 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "מוצר כלשהו <strong>התייקר ב-50%</strong>. מחירו החדש לאחר ההתייקרות הוא <strong>150 שקלים</strong>. מה היה מחירו <strong>לפני ההתייקרות</strong>?",
        "hint": "זה אומר ש-150% (המחיר המקורי ועוד החצי שלו) שווים ל-150 שקלים. כמה שווה ה-100% המקורי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחיר החדש מייצג את ה-100% המקורי ועוד 50% התייקרות. סך הכל: 150%.", "math_expression": "150% = 150" },
            { "verbal_explanation": "שלב 2: אם 150% הם 150 שקלים, זה אומר שכל אחוז אחד בודד שווה בדיוק שקל אחד.", "math_expression": "1% = 1" },
            { "verbal_explanation": "שלב 3: המחיר המקורי היה 100%, ולכן הוא שווה ל-100 שקלים.", "math_expression": "100% = 100" }
        ],
        "final_answer": "100 שקלים",
        "options": ["75 שקלים", "100 שקלים", "125 שקלים", "50 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "שולחן <strong>הוזל ב-20%</strong>. מחירו לאחר ההוזלה עומד על <strong>80 שקלים</strong>. מה היה מחירו <strong>לפני ההוזלה</strong>?",
        "hint": "אם ירדו 20%, זה אומר שהמחיר כעת מהווה רק 80% מהשלם. אם 80% שווים ל-80 שקלים, כמה שווה 100%?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לאחר שהורידו 20%, מה שנשאר לשלם הוא 80% מהמחיר המקורי.", "math_expression": "100% - 20% = 80%" },
            { "verbal_explanation": "שלב 2: נתון שה-80% האלו שווים ל-80 שקלים.", "math_expression": "80% = 80" },
            { "verbal_explanation": "שלב 3: אם 80 אחוזים שווים 80 שקלים, משמעות הדבר ש-100 אחוזים יהיו שווים ל-100 שקלים.", "math_expression": "100" }
        ],
        "final_answer": "100 שקלים",
        "options": ["100 שקלים", "96 שקלים", "120 שקלים", "64 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Low",
        "question_text": "שכרו של פועל היה <strong>5000 שקלים</strong> בחודש. הבוס הודיע לו על <strong>העלאה של 10%</strong>. מה תהיה משכורתו <strong>החדשה</strong> של הפועל?",
        "hint": "חשבו כמה שווים 10% מהשכר המקורי (רמז: הורידו אפס), והוסיפו את התוספת לשכר הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום ההעלאה בלבד. כדי למצוא 10% מתוך 5000, נחלק את 5000 ב-10.", "math_expression": "5000 / 10 = 500" },
            { "verbal_explanation": "שלב 2: נוסיף את התוספת שקיבלנו (500) למשכורת הבסיסית שהייתה (5000).", "math_expression": "5000 + 500" },
            { "verbal_explanation": "שלב 3: התוצאה היא המשכורת החדשה והמעודכנת של הפועל.", "math_expression": "5500" }
        ],
        "final_answer": "5500 שקלים",
        "options": ["5050 שקלים", "5500 שקלים", "6000 שקלים", "5100 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "מחיר מחשב בחו\"ל הוא <strong>2000 שקלים</strong> (ללא מע\"מ). במכס יש להוסיף <strong>מס של 5%</strong>. מה תהיה העלות <strong>הכוללת</strong> עם המס?",
        "hint": "מצאו 10% מהמחיר (200), חצו ל-2 כדי למצוא את ה-5%, והוסיפו לסכום המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב קודם את שווי ה-10% מהמחשב (נוריד אפס אחד). זה 200 שקלים.", "math_expression": "10% = 200" },
            { "verbal_explanation": "שלב 2: מס של 5% הוא בדיוק חצי מ-10%. לכן המס הוא 100 שקלים.", "math_expression": "5% = 100" },
            { "verbal_explanation": "שלב 3: נוסיף את סכום המס (100) למחיר המחשב (2000) כדי לקבל את הסכום הכולל לתשלום.", "math_expression": "2000 + 100 = 2100" }
        ],
        "final_answer": "2100 שקלים",
        "options": ["2050 שקלים", "2200 שקלים", "2100 שקלים", "2005 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "רכב חדש נקנה ב- <strong>50,000 שקלים</strong>. לאחר שנה, ערכו <strong>ירד ב-20%</strong>. מהו שווי הרכב <strong>היום</strong>?",
        "hint": "מצאו כמה הם 10% מ-50,000, הכפילו פי 2 (לירידה של 20%), והחסירו מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא למה שווים 10% על ידי חלוקה ב-10. 50,000 חלקי 10 זה 5,000.", "math_expression": "10% = 5000" },
            { "verbal_explanation": "שלב 2: ירידת הערך היא כפולה מזה (20%), כלומר היא שווה ל-10,000 שקלים.", "math_expression": "20% = 10000" },
            { "verbal_explanation": "שלב 3: נחסיר את ירידת הערך ממחיר הרכב ההתחלתי כדי למצוא את השווי כיום.", "math_expression": "50000 - 10000 = 40000" }
        ],
        "final_answer": "40,000 שקלים",
        "options": ["30,000 שקלים", "45,000 שקלים", "40,000 שקלים", "10,000 שקלים"],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "Medium",
        "question_text": "ספר שעלה <strong>60 שקלים</strong> נמכר כעת במבצע ב- <strong>45 שקלים</strong>. <strong>בכמה אחוזים</strong> הורידו את מחירו?",
        "hint": "חשבו קודם את ההפרש בשקלים (15 שקלים הוזלה). בדקו איזה שבר מהווים 15 שקלים מתוך ה-60 השלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סכום ההנחה (ההוזלה) שניתנה בשקלים על ידי חיסור פשוט.", "math_expression": "60 - 45 = 15" },
            { "verbal_explanation": "שלב 2: נרשום את סכום ההנחה מתוך המחיר *המקורי* בלבד, בצורת שבר.", "math_expression": "15 / 60" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר (נחלק ב-15) ונקבל 1/4. השבר רבע שווה כמובן ל-25%.", "math_expression": "1 / 4 = 25%" }
        ],
        "final_answer": "25%",
        "options": ["15%", "25%", "33%", "20%"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "בעיות התייקרות והוזלה",
        "difficulty": "High",
        "question_text": "זהירות, שאלת אתגר! מוצר עלה 100 שקלים. הוא קיבל <strong>הנחה של 50%</strong>. כעבור שבוע, עשו על המחיר החדש <strong>הנחה נוספת של 50%</strong>. מהו מחירו <strong>הסופי</strong>?",
        "hint": "זה לא חינם! הורידו 50% מה-100 המקורי, והגעתם ל-50. עכשיו, הורידו 50% *מתוך* ה-50 שנשארו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההנחה הראשונה. 50% (חצי) מ-100 שקלים. המחיר ירד ל-50 שקלים.", "math_expression": "100 * 50% = 50" },
            { "verbal_explanation": "שלב 2: ההנחה השנייה מופעלת על המחיר *החדש*. חצי מ-50 שקלים הוא 25 שקלים.", "math_expression": "50 * 50% = 25" },
            { "verbal_explanation": "שלב 3: המחיר יורד מ-50 ל-25. לכן, לאחר שתי הנחות רצופות של 50%, אנו משלמים 25 שקלים (כלומר 75% הנחה סך הכל!).", "math_expression": "25" }
        ],
        "final_answer": "25 שקלים",
        "options": ["0 שקלים (חינם)", "25 שקלים", "50 שקלים", "100 שקלים"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 5: בעיות אחוזים מורכבות (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "Medium",
        "question_text": "מחיר אופניים היה <strong>200 שקלים</strong>. בחודש יולי המחיר <strong>התייקר ב-10%</strong>. בחודש אוגוסט, המחיר החדש <strong>התייקר שוב ב-20%</strong>. מהו מחירו <strong>הסופי</strong> של הזוג?",
        "hint": "חשבו כל חודש בנפרד! קודם הוסיפו 10% ל-200. ואז, חשבו 20% מתוך המחיר *החדש* שקיבלתם והוסיפו גם אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההתייקרות הראשונה. 10% מתוך 200 הם 20 שקלים. לכן המחיר ביולי עלה ל-220 שקלים.", "math_expression": "200 + 20 = 220" },
            { "verbal_explanation": "שלב 2: ההתייקרות השנייה מחושבת מתוך המחיר החדש (220). נמצא 10% מ-220 שהם 22 שקלים.", "math_expression": "10% = 22" },
            { "verbal_explanation": "שלב 3: אנו זקוקים ל-20%, שהם פעמיים 22, כלומר 44 שקלים. נוסיף זאת ל-220 לקבלת המחיר הסופי.", "math_expression": "220 + 44 = 264" }
        ],
        "final_answer": "264 שקלים",
        "options": ["230 שקלים", "264 שקלים", "260 שקלים", "240 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "מוצר <strong>התייקר ב-25%</strong>. ב<strong>כמה אחוזים</strong> יש <strong>להוזיל</strong> אותו כעת כדי שיחזור בדיוק למחירו המקורי?",
        "hint": "נניח שהמוצר עלה 100 שקלים והתייקר ל-125. כעת עליכם להוריד 25 שקלים. איזה שבר מהווים 25 שקלים מתוך ה-125?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בדוגמה של 100 שקלים. לאחר התייקרות של 25%, המחיר הפך ל-125 שקלים.", "math_expression": "100 \u2192 125" },
            { "verbal_explanation": "שלב 2: כדי לחזור ל-100, עלינו לתת הנחה של 25 שקלים. אך ההנחה מחושבת מהמחיר *החדש* (125). נרשום כשבר: 25 מתוך 125.", "math_expression": "25 / 125" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר (נחלק ב-25). נקבל 1/5 (חמישית). חמישית היא תמיד 20%.", "math_expression": "1 / 5 = 20%" }
        ],
        "final_answer": "יש להוזיל ב-20%",
        "options": ["25%", "20%", "30%", "15%"],
        "correctAnswer": 1
    },
    {
        "id": 63,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "קניתם חולצה ב- <strong>100 שקלים</strong> ומכנסיים ב- <strong>200 שקלים</strong>. על החולצה קיבלתם <strong>20% הנחה</strong>, ועל המכנסיים קיבלתם <strong>10% הנחה</strong>. מהו <strong>סכום ההנחה הכולל</strong> בשקלים שקיבלתם על כל הקנייה?",
        "hint": "אל תחברו את האחוזים יחד! חשבו את ההנחה בשקלים לכל פריט בנפרד, ואז חברו את השקלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההנחה על החולצה. 20% מתוך 100 שקלים הם פשוט 20 שקלים.", "math_expression": "הנחה א' = 20" },
            { "verbal_explanation": "שלב 2: נחשב את ההנחה על המכנסיים. 10% מתוך 200 שקלים הם 20 שקלים.", "math_expression": "הנחה ב' = 20" },
            { "verbal_explanation": "שלב 3: נחבר את שתי ההנחות יחד כדי למצוא כמה כסף חסכנו בקופה.", "math_expression": "20 + 20 = 40" }
        ],
        "final_answer": "40 שקלים",
        "options": ["30 שקלים", "40 שקלים", "60 שקלים", "50 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "מחיר מחשב כולל מע\"מ (17%) הוא <strong>1170 שקלים</strong>. מה היה מחירו של המחשב <strong>ללא מע\"מ</strong>?",
        "hint": "המחיר הנתון כולל את המע\"מ, לכן הוא מהווה 117% (100% + 17%). חלקו את המחיר ב-117 כדי למצוא את ה-1%.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהמחיר כבר כולל תוספת מס של 17%, הוא בעצם שווה ל-117% מהמחיר המקורי.", "math_expression": "117% = 1170" },
            { "verbal_explanation": "שלב 2: נחלק ב-117 כדי למצוא למה שווה אחוז אחד בלבד. 1170 חלקי 117 שווה 10.", "math_expression": "1% = 10" },
            { "verbal_explanation": "שלב 3: כדי למצוא את המחיר ללא מס (100%), נכפיל את ה-1% שלנו פי 100.", "math_expression": "100% = 10 * 100 = 1000" }
        ],
        "final_answer": "1000 שקלים",
        "options": ["1000 שקלים", "1153 שקלים", "970 שקלים", "830 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 65,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "Medium",
        "question_text": "ידוע כי <strong>10%</strong> מהמספר <strong>50</strong> שווים ל- <strong>20%</strong> מהמספר <strong>Y</strong>. מהו ערכו של <strong>Y</strong>?",
        "hint": "חשבו קודם את הצד שאתם יודעים: כמה זה 10% מ-50? התוצאה הזו שווה ל-20% מ-Y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את החלק הידוע. 10% מתוך 50 הם 5.", "math_expression": "10% * 50 = 5" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה בחצי השני של המשפט: 20% מ-Y שווים ל-5.", "math_expression": "20% * Y = 5" },
            { "verbal_explanation": "שלב 3: 20% הם חמישית (1/5). אם חמישית מהמספר היא 5, השלם יהיה גדול פי 5. לכן נכפיל את 5 ב-5.", "math_expression": "Y = 5 * 5 = 25" }
        ],
        "final_answer": "25",
        "options": ["10", "25", "100", "50"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "בכיתה יש בנים ובנות. הבנות מהוות <strong>60%</strong> מהכיתה. מבין הבנות, <strong>25%</strong> משחקות כדורגל. איזה <strong>אחוז מכלל הכיתה</strong> מהוות הבנות שמשחקות כדורגל?",
        "hint": "אתם צריכים למצוא כמה זה 25% *מתוך* ה-60%. 25% הם רבע. כמה זה רבע מ-60?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו מחפשים 'אחוז מתוך אחוז'. השלם שלנו כרגע הוא קבוצת הבנות, שהן 60% מהכיתה.", "math_expression": "בנות = 60%" },
            { "verbal_explanation": "שלב 2: 25% מהבנות הללו משחקות כדורגל. נזכור ש-25% הם בדיוק רבע.", "math_expression": "1/4" },
            { "verbal_explanation": "שלב 3: נחשב כמה זה רבע מתוך 60. נחלק 60 ב-4 ונקבל 15. לכן הן מהוות 15% מכלל הכיתה.", "math_expression": "60 / 4 = 15%" }
        ],
        "final_answer": "15%",
        "options": ["25%", "35%", "15%", "10%"],
        "correctAnswer": 2
    },
    {
        "id": 67,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "Medium",
        "question_text": "שתי חנויות מוכרות את אותה חולצה ב-100 שקלים. חנות א' נתנה <strong>30% הנחה</strong>. חנות ב' נתנה <strong>20% הנחה</strong> ועל המחיר החדש נתנה <strong>עוד 10% הנחה בקופה</strong>. איזו חנות <strong>זולה יותר</strong>?",
        "hint": "בדקו כמה עולה החולצה בכל חנות. בחנות ב' ההנחה השנייה מחושבת על 80 שקלים, לא על 100!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בחנות א', 30% הנחה מ-100 משאירים מחיר של 70 שקלים.", "math_expression": "חנות א' = 70" },
            { "verbal_explanation": "שלב 2: בחנות ב', לאחר 20% הנחה, המחיר יורד ל-80 שקלים. כעת יש עוד 10% הנחה על ה-80. 10% מ-80 הם 8 שקלים.", "math_expression": "10% מ-80 = 8" },
            { "verbal_explanation": "שלב 3: נחסיר 8 שקלים מ-80 ונקבל 72 שקלים. חנות א' מוכרת ב-70, לכן היא הזולה יותר.", "math_expression": "70 < 72" }
        ],
        "final_answer": "חנות א' (מוכרת ב-70 שקלים)",
        "options": ["חנות ב' (מוכרת ב-72 שקלים)", "חנות א' (מוכרת ב-70 שקלים)", "הן מוכרות באותו מחיר בדיוק", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "פריט א' עולה <strong>50 שקלים</strong>. פריט ב' <strong>יקר ב-20%</strong> מפריט א'. פריט ג' <strong>זול ב-10%</strong> מפריט ב'. כמה עולה <strong>פריט ג'</strong>?",
        "hint": "חשבו בשרשרת. מצאו את מחירו של ב' (50 ועוד 20%). ואז, הורידו 10% מהמחיר שמצאתם לב'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את מחיר פריט ב'. 20% מ-50 הם 10 שקלים (עשירית כפול 2). פריט ב' יקר יותר ולכן מחירו 60 שקלים.", "math_expression": "ב' = 50 + 10 = 60" },
            { "verbal_explanation": "שלב 2: פריט ג' זול ב-10% מפריט ב'. נמצא 10% מתוך 60, שהם 6 שקלים.", "math_expression": "10% מ-60 = 6" },
            { "verbal_explanation": "שלב 3: נחסיר את ה-6 שקלים מפריט ב' (60) כדי לקבל את מחיר פריט ג'.", "math_expression": "60 - 6 = 54" }
        ],
        "final_answer": "54 שקלים",
        "options": ["50 שקלים", "54 שקלים", "55 שקלים", "60 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "כלל ברזל באחוזים: אם מחיר של מוצר <strong>עלה ב-20%</strong>, ולאחר מכן <strong>ירד ב-20%</strong>, האם המחיר הסופי יהיה שווה למחיר המקורי?",
        "hint": "חישבו על מוצר שעולה 100. עלה ל-120. עכשיו מורידים 20% מ-120. זה יוצא יותר מ-20 שקלים שמופחתים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח 100 כדוגמה. לאחר התייקרות של 20%, מחירו 120 שקלים.", "math_expression": "100 + 20 = 120" },
            { "verbal_explanation": "שלב 2: ההוזלה של ה-20% מחושבת על המחיר *הגדול* יותר (120). 20% מ-120 הם 24 שקלים.", "math_expression": "120 * 20% = 24" },
            { "verbal_explanation": "שלב 3: 120 פחות 24 משאירים אותנו עם 96 שקלים. תמיד לאחר עלייה וירידה באותו אחוז, נסיים עם פחות מההתחלה.", "math_expression": "96 < 100" }
        ],
        "final_answer": "לא, הוא תמיד יהיה נמוך יותר מהמחיר המקורי.",
        "options": ["כן, הוא חוזר בדיוק לאותו מחיר.", "לא, הוא תמיד יהיה גבוה יותר.", "לא, הוא תמיד יהיה נמוך יותר מהמחיר המקורי.", "תלוי אם המחיר המקורי זוגי או אי-זוגי."],
        "correctAnswer": 2
    },
    {
        "id": 70,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "ידוע שמעיל יקר מחולצה, כך שמחיר החולצה <strong>קטן ב-20%</strong> ממחיר המעיל. קניית שניהם יחד עלתה <strong>360 שקלים</strong>. כמה עולה <strong>המעיל</strong>?",
        "hint": "אם המעיל הוא 100% (x), אז החולצה היא 80% (0.8x). יחד הם מהווים 180% (1.8x) ששווים ל-360.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המעיל כשלם (x). החולצה זולה ב-20%, לכן היא מהווה 80% מ-x (שזה 0.8x).", "math_expression": "מעיל = x , חולצה = 0.8x" },
            { "verbal_explanation": "שלב 2: נבנה משוואה: סכום שניהם יחד הוא 360 שקלים.", "math_expression": "x + 0.8x = 360" },
            { "verbal_explanation": "שלב 3: נכנס איברים ונקבל 1.8x = 360. נחלק את המשוואה ב-1.8.", "math_expression": "x = 360 / 1.8 = 200" }
        ],
        "final_answer": "200 שקלים",
        "options": ["160 שקלים", "200 שקלים", "180 שקלים", "250 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "בחנות פירות, <strong>30%</strong> מהתפוחים האדומים שווים בכמותם ל- <strong>20%</strong> מהתפוחים הירוקים. אם יש בחנות <strong>40 תפוחים אדומים</strong>, כמה תפוחים <strong>ירוקים</strong> יש?",
        "hint": "חשבו תחילה כמה הם 30% מ-40 התפוחים האדומים. הכמות שתמצאו היא בדיוק ה-20% של הירוקים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב 10% מ-40 (שזה 4) ונכפיל ב-3. קיבלנו ש-30% מהאדומים הם 12 תפוחים.", "math_expression": "30% מ-40 = 12" },
            { "verbal_explanation": "שלב 2: הנתון אומר ש-12 תפוחים אלו הם בדיוק 20% מכלל התפוחים הירוקים. 20% שווים לחמישית.", "math_expression": "1/5 ירוקים = 12" },
            { "verbal_explanation": "שלב 3: אם חמישית מהירוקים שווה ל-12, השלם של הירוקים יהיה 12 כפול 5.", "math_expression": "12 * 5 = 60" }
        ],
        "final_answer": "60 תפוחים",
        "options": ["50 תפוחים", "60 תפוחים", "80 תפוחים", "30 תפוחים"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "במכירת סוף עונה הוכרז על <strong>20% הנחה</strong> על כל החנות. לקוח שיש לו 'כרטיס מועדון' מקבל <strong>עוד 10% הנחה על המחיר המוזל</strong>. מהו אחוז ההנחה <strong>הכולל</strong> שקיבל לקוח המועדון ממחיר הפריט המקורי?",
        "hint": "הציבו פריט של 100 שקלים. הורידו 20%. לאחר מכן הורידו 10% מה-80 הנותרים. בכמה אחוזים פחת ה-100 כולו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדמיין מוצר שעולה 100. לאחר ההנחה הראשונה של 20%, מחירו יורד ל-80 שקלים.", "math_expression": "100 - 20 = 80" },
            { "verbal_explanation": "שלב 2: ההנחה השנייה היא 10% מתוך ה-80. עשירית מ-80 היא 8 שקלים. המחיר החדש הוא 72 שקלים.", "math_expression": "80 - 8 = 72" },
            { "verbal_explanation": "שלב 3: המוצר התחיל ב-100 וסיים ב-72. ההפרש הכולל הוא 28 שקלים. מאחר שהתחלנו מ-100, ההנחה הכוללת היא בדיוק 28%.", "math_expression": "100 - 72 = 28%" }
        ],
        "final_answer": "28%",
        "options": ["30%", "28%", "25%", "32%"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "Medium",
        "question_text": "חשבון החשמל היה <strong>200 שקלים</strong>. מכיוון ששולם באיחור, נוסף קנס של <strong>10%</strong>. רגע לפני התשלום, הוחלט לתת <strong>הנחה של 10 שקלים</strong>. כמה שולם בסוף?",
        "hint": "עבדו לפי סדר הסיפור. קודם קנס (הוספת 10% ל-200), ואז מהתוצאה החסירו 10 שקלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הקנס. 10% מ-200 הם 20 שקלים. החשבון עולה ל-220 שקלים.", "math_expression": "200 + 20 = 220" },
            { "verbal_explanation": "שלב 2: ניתן פטור של 10 שקלים מהסכום המעודכן.", "math_expression": "220 - 10" },
            { "verbal_explanation": "שלב 3: נחשב את הסכום הסופי לתשלום.", "math_expression": "210" }
        ],
        "final_answer": "210 שקלים",
        "options": ["200 שקלים", "210 שקלים", "220 שקלים", "190 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "אורך של מלבן <strong>הוגדל ב-10%</strong>, ורוחבו <strong>הוגדל ב-10%</strong>. בכמה אחוזים <strong>גדל שטח המלבן</strong>?",
        "hint": "שטח הוא כפל של אורך ברוחב. דמיינו ריבוע של 10 על 10 (שטח 100). הגדילו כל צלע ל-11, וחשבו את השטח החדש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח צלעות נוחות של 10. שטח המלבן המקורי הוא 10 כפול 10, כלומר 100.", "math_expression": "10 * 10 = 100" },
            { "verbal_explanation": "שלב 2: נגדיל כל צלע ב-10%. 10% מ-10 זה 1. הצלעות החדשות הן 11.", "math_expression": "11 * 11" },
            { "verbal_explanation": "שלב 3: השטח החדש הוא 121. השטח המקורי היה 100. משמעות הדבר היא עלייה של 21 חלקים מתוך 100, כלומר 21%.", "math_expression": "121 - 100 = 21%" }
        ],
        "final_answer": "השטח גדל ב-21%",
        "options": ["השטח גדל ב-20%", "השטח גדל ב-100%", "השטח גדל ב-21%", "השטח לא השתנה"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "בעיות אחוזים מורכבות",
        "difficulty": "High",
        "question_text": "תמי הרוויחה <strong>X שקלים</strong>. היא ביזבזה <strong>20%</strong> מכספה על נעליים, ולאחר מכן ביזבזה <strong>50% ממה שנשאר לה</strong> על אוכל. איזה אחוז מהכסף המקורי <strong>נותר לה</strong> בסוף?",
        "hint": "תמי התחילה עם 100%. אחרי הנעליים נשארו לה 80%. אוכל לקח 50% (חצי) מה-80% שנשארו. כמה זה חצי מ-80?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לאחר הקנייה הראשונה (20%), נותרו בכיסה של תמי 80% מהכסף המקורי.", "math_expression": "100% - 20% = 80%" },
            { "verbal_explanation": "שלב 2: כעת היא מבזבזת 50% (חצי) ממה שנותר. חצי מתוך 80% זה 40%.", "math_expression": "80% / 2 = 40%" },
            { "verbal_explanation": "שלב 3: היו לה 80% והיא הוציאה 40%. לכן נותרו לה בדיוק 40% מהכסף שהיה לה בהתחלה.", "math_expression": "80% - 40% = 40%" }
        ],
        "final_answer": "נותרו לה 40%",
        "options": ["30%", "50%", "40%", "20%"],
        "correctAnswer": 2
    }
];