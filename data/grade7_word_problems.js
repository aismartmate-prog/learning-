const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: בעיות קנייה ומכירה (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "אייל קנה 5 מחברות ו-3 עטים. מחיר עט יקר ב-4 ש\"ח ממחיר מחברת. בסך הכל שילם אייל 52 ש\"ח. מהו <strong>מחיר מחברת אחת</strong>?",
        "hint": "סמנו את מחיר המחברת ב-X. בטאו את מחיר העט באמצעות X ובנו משוואה לסך הקנייה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר משתנים: מחיר מחברת = X, מחיר עט = X+4.", "math_expression": "x, x+4" },
            { "verbal_explanation": "נבנה משוואה עבור 5 מחברות ו-3 עטים.", "math_expression": "5x + 3(x+4) = 52" },
            { "verbal_explanation": "נפתח סוגריים ונכנס איברים.", "math_expression": "5x + 3x + 12 = 52 -> 8x = 40" },
            { "verbal_explanation": "נחלק ב-8 למציאת X.", "math_expression": "x = 5" }
        ],
        "final_answer": "5 ש\"ח",
        "options": ["5 ש\"ח", "9 ש\"ח", "6 ש\"ח", "4 ש\"ח"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "סוחר קנה 20 חולצות במחיר קבוע. 5 חולצות הוא מכר ברווח של 10 ש\"ח על כל חולצה, ואת השאר מכר בהפסד של 2 ש\"ח על כל חולצה. בסך הכל <strong>הרוויח</strong> הסוחר 20 ש\"ח. כמה שילם על <strong>כל החולצות יחד</strong> בעת הקנייה?",
        "hint": "שימו לב שהרווח הכולל מורכב מהרווח על הקבוצה הראשונה פחות ההפסד על השנייה. מחיר הקנייה המקורית אינו משפיע על חישוב ה'רווח נטו' בשאלה זו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב רווח מקבוצה א' (5 חולצות).", "math_expression": "5 × 10 = 50" },
            { "verbal_explanation": "נחשב הפסד מקבוצה ב' (15 חולצות).", "math_expression": "15 × (-2) = -30" },
            { "verbal_explanation": "נבדוק את הרווח הכולל (50 פחות 30).", "math_expression": "20" },
            { "verbal_explanation": "מכיוון שהרווח תואם לנתון, ואין לנו מידע על מחיר הקנייה המקורי X, לא ניתן לקבוע את המחיר הכולל.", "math_expression": "חסר נתון" }
        ],
        "final_answer": "חסר נתון לגבי מחיר הקנייה",
        "options": ["200 ש\"ח", "400 ש\"ח", "חסר נתון לגבי מחיר הקנייה", "100 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "מחיר כניסה לסרט לילד קטן ב-15 ש\"ח ממחיר כניסה למבוגר. קבוצה של 4 מבוגרים ו-5 ילדים שילמה 435 ש\"ח. מהו <strong>מחיר כרטיס למבוגר</strong>?",
        "hint": "סמנו מבוגר ב-X וילד ב- (X-15).",
        "solution_steps": [
            { "verbal_explanation": "מבוגר = X, ילד = X-15.", "math_expression": "x, x-15" },
            { "verbal_explanation": "משוואת התשלום הכולל.", "math_expression": "4x + 5(x-15) = 435" },
            { "verbal_explanation": "פישוט: 4X + 5X - 75 = 435.", "math_expression": "9x = 510" },
            { "verbal_explanation": "נחלק ב-9.", "math_expression": "x = 60" }
        ],
        "final_answer": "60 ש\"ח",
        "options": ["50 ש\"ח", "55 ש\"ח", "60 ש\"ח", "45 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "רונית קנתה 2 חולצות וזוג מכנסיים אחד ושילמה 200 ש\"ח. מחיר המכנסיים <strong>גבוה פי 3</strong> ממחיר החולצה. מהו מחיר החולצה?",
        "hint": "חולצה = X, מכנסיים = 3X.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר: חולצה = X, מכנסיים = 3X.", "math_expression": "x, 3x" },
            { "verbal_explanation": "2 חולצות ועוד מכנסיים אחד.", "math_expression": "2x + 3x = 200" },
            { "verbal_explanation": "נחבר איקסים ונחלק.", "math_expression": "5x = 200 -> x = 40" }
        ],
        "final_answer": "40 ש\"ח",
        "options": ["30 ש\"ח", "40 ש\"ח", "50 ש\"ח", "60 ש\"ח"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "בעל חנות קנה 20 ק\"ג תפוחים. חלק מהתפוחים נמכרו ב-8 ש\"ח לק\"ג והשאר ב-6 ש\"ח לק\"ג. בסך הכל קיבל המוכר 144 ש\"ח. כמה ק\"ג נמכרו <strong>במחיר היקר</strong>?",
        "hint": "סמנו את כמות הק\"ג היקר ב-X. הכמות הזולה תהיה (20 פחות X).",
        "solution_steps": [
            { "verbal_explanation": "כמות יקרה = X, כמות זולה = 20-X.", "math_expression": "x, 20-x" },
            { "verbal_explanation": "משוואת פדיון: מחיר כפול כמות.", "math_expression": "8x + 6(20-x) = 144" },
            { "verbal_explanation": "נפתח סוגריים: 8X + 120 - 6X = 144.", "math_expression": "2x = 24" },
            { "verbal_explanation": "נחלק ב-2.", "math_expression": "x = 12" }
        ],
        "final_answer": "12 ק\"ג",
        "options": ["10 ק\"ג", "12 ק\"ג", "15 ק\"ג", "8 ק\"ג"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "מחיר ספר יקר ב-20 ש\"ח ממחיר מחברת. דן קנה 2 ספרים ו-4 מחברות ושילם 160 ש\"ח. מה מחיר <strong>הספר</strong>?",
        "hint": "סמנו מחברת ב-X. ספר יהיה X+20. שימו לב שבסוף מבקשים את מחיר הספר!",
        "solution_steps": [
            { "verbal_explanation": "מחברת = X, ספר = X+20.", "math_expression": "x, x+20" },
            { "verbal_explanation": "בניית משוואה לסך הקנייה.", "math_expression": "2(x+20) + 4x = 160" },
            { "verbal_explanation": "2X + 40 + 4X = 160 -> 6X = 120.", "math_expression": "x = 20" },
            { "verbal_explanation": "נמצא את מחיר הספר: X+20.", "math_expression": "20 + 20 = 40" }
        ],
        "final_answer": "40 ש\"ח",
        "options": ["20 ש\"ח", "30 ש\"ח", "40 ש\"ח", "50 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Low",
        "question_text": "מחיר ק\"ג מלפפונים הוא X ש\"ח. מחיר ק\"ג עגבניות יקר ב-2 ש\"ח ממחיר המלפפונים. מהו הביטוי למחיר של <strong>3 ק\"ג עגבניות</strong>?",
        "hint": "מצאו קודם ביטוי לק\"ג אחד של עגבניות ואז הכפילו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "מחיר ק\"ג עגבניות.", "math_expression": "x + 2" },
            { "verbal_explanation": "מחיר 3 ק\"ג (הכפלת הביטוי בסוגריים).", "math_expression": "3(x + 2)" }
        ],
        "final_answer": "3(x + 2)",
        "options": ["3x + 2", "3(x + 2)", "x + 6", "3x + 6"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "מחיר כניסה לבריכה הוא 40 ש\"ח למבוגר ו-25 ש\"ח לילד. ביום מסוים נכנסו לבריכה 100 אנשים וההכנסה הייתה 3,100 ש\"ח. כמה <strong>ילדים</strong> נכנסו לבריכה?",
        "hint": "סמנו ילדים ב-X ומבוגרים ב- (100 פחות X).",
        "solution_steps": [
            { "verbal_explanation": "ילדים = X, מבוגרים = 100-X.", "math_expression": "x, 100-x" },
            { "verbal_explanation": "משוואת הכנסה.", "math_expression": "25x + 40(100-x) = 3100" },
            { "verbal_explanation": "25X + 4000 - 40X = 3100 -> -15X = -900.", "math_expression": "15x = 900" },
            { "verbal_explanation": "נחלק ב-15.", "math_expression": "x = 60" }
        ],
        "final_answer": "60 ילדים",
        "options": ["40", "50", "60", "70"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "מחיר פיצה משפחתית גדול פי 4 ממחיר פחית שתייה. משפחה קנתה 2 פיצות ו-3 פחיות שתייה ושילמה 121 ש\"ח. מה מחיר <strong>פחית שתייה</strong>?",
        "hint": "פחית = X, פיצה = 4X.",
        "solution_steps": [
            { "verbal_explanation": "שתייה = X, פיצה = 4X.", "math_expression": "x, 4x" },
            { "verbal_explanation": "סכום קנייה.", "math_expression": "2(4x) + 3x = 121" },
            { "verbal_explanation": "8X + 3X = 121 -> 11X = 121.", "math_expression": "11x = 121" },
            { "verbal_explanation": "נחלק ב-11.", "math_expression": "x = 11" }
        ],
        "final_answer": "11 ש\"ח",
        "options": ["10 ש\"ח", "11 ש\"ח", "12 ש\"ח", "44 ש\"ח"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "בקופת חיסכון היו מטבעות של 5 ש\"ח ומטבעות של 10 ש\"ח. מספר המטבעות של 5 ש\"ח היה <strong>גדול ב-6</strong> ממספר המטבעות של 10 ש\"ח. בסך הכל היו בקופה 180 ש\"ח. כמה מטבעות של <strong>10 ש\"ח</strong> היו בקופה?",
        "hint": "סמנו מטבעות 10 ש\"ח ב-X ומטבעות 5 ש\"ח ב- (X+6).",
        "solution_steps": [
            { "verbal_explanation": "10 ש\"ח = X, 5 ש\"ח = X+6.", "math_expression": "x, x+6" },
            { "verbal_explanation": "משוואת ערך כספי.", "math_expression": "10x + 5(x+6) = 180" },
            { "verbal_explanation": "10X + 5X + 30 = 180 -> 15X = 150.", "math_expression": "15x = 150" },
            { "verbal_explanation": "נחלק ב-15.", "math_expression": "x = 10" }
        ],
        "final_answer": "10 מטבעות",
        "options": ["8", "10", "12", "16"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "מחיר קילוגרם גרעינים הוא 30 ש\"ח. מחיר קילוגרם בוטנים הוא 20 ש\"ח. קנינו תערובת של 5 ק\"ג שעלתה בסך הכל 120 ש\"ח. כמה ק\"ג <strong>גרעינים</strong> יש בתערובת?",
        "hint": "גרעינים = X, בוטנים = 5-X.",
        "solution_steps": [
            { "verbal_explanation": "גרעינים = X, בוטנים = 5-X.", "math_expression": "x, 5-x" },
            { "verbal_explanation": "משוואת עלות.", "math_expression": "30x + 20(5-x) = 120" },
            { "verbal_explanation": "30X + 100 - 20X = 120 -> 10X = 20.", "math_expression": "x = 2" }
        ],
        "final_answer": "2 ק\"ג",
        "options": ["2 ק\"ג", "3 ק\"ג", "1.5 ק\"ג", "2.5 ק\"ג"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "כרטיס למשחק כדורגל עולה X ש\"ח. אם מזמינים באינטרנט, יש הנחה של 10 ש\"ח לכרטיס אך משלמים עמלה חד-פעמית של 15 ש\"ח על כל ההזמנה. אבא הזמין 3 כרטיסים ושילם 225 ש\"ח. מה מחיר <strong>כרטיס בקופה</strong> (ללא הנחה)?",
        "hint": "מחיר כרטיס מוזל הוא X-10. המשוואה היא: 3 כפול המחיר המוזל ועוד העמלה.",
        "solution_steps": [
            { "verbal_explanation": "מחיר כרטיס בקופה = X.", "math_expression": "x" },
            { "verbal_explanation": "משוואת הזמנה: 3 כרטיסים בהנחה + עמלה.", "math_expression": "3(x-10) + 15 = 225" },
            { "verbal_explanation": "3X - 30 + 15 = 225 -> 3X - 15 = 225.", "math_expression": "3x = 240" },
            { "verbal_explanation": "נחלק ב-3.", "math_expression": "x = 80" }
        ],
        "final_answer": "80 ש\"ח",
        "options": ["70 ש\"ח", "75 ש\"ח", "80 ש\"ח", "85 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Medium",
        "question_text": "מחיר שולחן יקר ב-300 ש\"ח ממחיר כיסא. קנו 4 כסאות ושולחן אחד ושילמו 1,500 ש\"ח. מה מחיר <strong>הכיסא</strong>?",
        "hint": "כיסא = X, שולחן = X+300.",
        "solution_steps": [
            { "verbal_explanation": "כיסא = X, שולחן = X+300.", "math_expression": "x, x+300" },
            { "verbal_explanation": "סך הכל קנייה.", "math_expression": "4x + (x+300) = 1500" },
            { "verbal_explanation": "5X = 1200.", "math_expression": "5x = 1200" },
            { "verbal_explanation": "נחלק ב-5.", "math_expression": "x = 240" }
        ],
        "final_answer": "240 ש\"ח",
        "options": ["200 ש\"ח", "240 ש\"ח", "300 ש\"ח", "540 ש\"ח"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "Low",
        "question_text": "קניתי 4 ק\"ג תפוזים ב-X ש\"ח לק\"ג וקיבלתי עודף של 20 ש\"ח משטר של 100 ש\"ח. איזה ביטוי מתאר את הקנייה?",
        "hint": "הכסף ששילמתם (4X) ועוד העודף (20) שווה ל-100.",
        "solution_steps": [
            { "verbal_explanation": "עלות התפוזים.", "math_expression": "4x" },
            { "verbal_explanation": "משוואת התשלום.", "math_expression": "4x + 20 = 100" }
        ],
        "final_answer": "4x + 20 = 100",
        "options": ["4x - 20 = 100", "4x = 100 + 20", "4x + 20 = 100", "20x + 4 = 100"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "בעיות קנייה ומכירה",
        "difficulty": "High",
        "question_text": "מחיר מוצר עלה ב-20%. לאחר ההתייקרות מחירו הוא 120 ש\"ח. מה היה המחיר <strong>לפני</strong> ההתייקרות?",
        "hint": "100% ועוד 20% הם 120%. כלומר 1.2 כפול המחיר המקורי שווה 120.",
        "solution_steps": [
            { "verbal_explanation": "מחיר מקורי = X. מחיר חדש הוא 120% מ-X.", "math_expression": "1.2x = 120" },
            { "verbal_explanation": "נחלק ב-1.2.", "math_expression": "x = 100" }
        ],
        "final_answer": "100 ש\"ח",
        "options": ["96 ש\"ח", "100 ש\"ח", "110 ש\"ח", "80 ש\"ח"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: בעיות תנועה (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מכונית נוסעת במהירות של 80 קמ\"ש במשך 3.5 שעות. איזו <strong>דרך</strong> היא עברה?",
        "hint": "השתמשו בנוסחה: דרך = מהירות × זמן.",
        "solution_steps": [
            { "verbal_explanation": "מהירות: 80, זמן: 3.5.", "math_expression": "S = V \u00d7 T" },
            { "verbal_explanation": "נכפיל את המהירות בזמן.", "math_expression": "80 \u00d7 3.5 = 280" }
        ],
        "final_answer": "280 ק\"מ",
        "options": ["240 ק\"מ", "260 ק\"מ", "280 ק\"מ", "300 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מטוס עובר מרחק של 1,200 ק\"מ ב-1.5 שעות. מהי <strong>מהירותו</strong> בקמ\"ש?",
        "hint": "מהירות = דרך חלקי זמן.",
        "solution_steps": [
            { "verbal_explanation": "דרך: 1,200, זמן: 1.5.", "math_expression": "V = S / T" },
            { "verbal_explanation": "נחלק 1,200 ב-1.5.", "math_expression": "1200 / 1.5 = 800" }
        ],
        "final_answer": "800 קמ\"ש",
        "options": ["600 קמ\"ש", "800 קמ\"ש", "900 קמ\"ש", "1,000 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "שתי ערים נמצאות במרחק 300 ק\"מ זו מזו. משתי הערים יצאו בו-זמנית שני רכבים זה לקראת זה. רכב א' נסע ב-60 קמ\"ש ורכב ב' ב-90 קמ\"ש. לאחר <strong>כמה זמן</strong> הם ייפגשו?",
        "hint": "כאשר רכבים נעים זה לקראת זה, מהירות ההתקרבות היא סכום המהירויות.",
        "solution_steps": [
            { "verbal_explanation": "נחשב מהירות משותפת.", "math_expression": "60 + 90 = 150 קמ\"ש" },
            { "verbal_explanation": "נחלק את סך המרחק במהירות המשותפת.", "math_expression": "300 / 150 = 2" }
        ],
        "final_answer": "שעתיים",
        "options": ["שעה וחצי", "שעתיים", "2.5 שעות", "3 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "הולך רגל יצא לדרך ב-4 קמ\"ש. לאחר שעתיים יצא בעקבותיו רוכב אופניים ב-12 קמ\"ש. תוך <strong>כמה זמן מרגע שיצא</strong> רוכב האופניים הוא ישיג את הולך הרגל?",
        "hint": "מצאו את המרחק שהולך הרגל צבר 'פור' (8 ק\"מ). רוכב האופניים סוגר את הפער במהירות של 8 קמ\"ש (12 פחות 4).",
        "solution_steps": [
            { "verbal_explanation": "המרחק שהולך הרגל עבר בשעתיים.", "math_expression": "4 \u00d7 2 = 8 ק\"מ" },
            { "verbal_explanation": "מהירות ה'סגירה' (הפרש המהירויות).", "math_expression": "12 - 4 = 8 קמ\"ש" },
            { "verbal_explanation": "זמן סגירת הפער (מרחק חלקי מהירות סגירה).", "math_expression": "8 / 8 = 1" }
        ],
        "final_answer": "שעה אחת",
        "options": ["שעה אחת", "שעתיים", "חצי שעה", "3 שעות"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מכונית נוסעת מעיר א' לעיר ב' ב-3 שעות. בדרכה חזרה היא מגדילה את מהירותה ב-20 קמ\"ש ומגיעה ב-2.5 שעות. מה היה <strong>המרחק</strong> בין הערים?",
        "hint": "הדרך הלוך (3 כפול V) שווה לדרך חזור (2.5 כפול (V+20)).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר מהירות הלוך = V. משוואת דרכים.", "math_expression": "3v = 2.5(v + 20)" },
            { "verbal_explanation": "נפתח סוגריים: 3V = 2.5V + 50.", "math_expression": "0.5v = 50 -> v = 100" },
            { "verbal_explanation": "נחשב את הדרך: 100 קמ\"ש כפול 3 שעות.", "math_expression": "300" }
        ],
        "final_answer": "300 ק\"מ",
        "options": ["200 ק\"מ", "250 ק\"מ", "300 ק\"מ", "350 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "רכבת נוסעת במהירות של 120 קמ\"ש. כמה קילומטרים תעבור ב-<strong>20 דקות</strong>?",
        "hint": "20 דקות הן שליש שעה. המירו את הזמן לשעות.",
        "solution_steps": [
            { "verbal_explanation": "המרת דקות לשעות.", "math_expression": "20 / 60 = 1/3 שעה" },
            { "verbal_explanation": "חישוב דרך: מהירות כפול זמן.", "math_expression": "120 \u00d7 1/3 = 40" }
        ],
        "final_answer": "40 ק\"מ",
        "options": ["40 ק\"מ", "60 ק\"מ", "30 ק\"מ", "20 ק\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "שני שליחים יוצאים מאותה נקודה לכיוונים <strong>מנוגדים</strong>. האחד ב-6 קמ\"ש והשני ב-4 קמ\"ש. לאחר כמה זמן המרחק ביניהם יהיה 25 ק\"מ?",
        "hint": "בכיוונים מנוגדים, המהירות המשותפת (התרחקות) היא סכום המהירויות.",
        "solution_steps": [
            { "verbal_explanation": "מהירות התרחקות.", "math_expression": "6 + 4 = 10 קמ\"ש" },
            { "verbal_explanation": "מרחק חלקי מהירות.", "math_expression": "25 / 10 = 2.5" }
        ],
        "final_answer": "2.5 שעות",
        "options": ["2 שעות", "2.5 שעות", "3 שעות", "5 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "אדם הלך 12 ק\"מ במהירות של 4 קמ\"ש, ואז רץ 12 ק\"מ במהירות של 6 קמ\"ש. כמה <strong>זמן</strong> ארך כל המסלול?",
        "hint": "חשבו זמן לכל שלב בנפרד (דרך חלקי מהירות) וחברו.",
        "solution_steps": [
            { "verbal_explanation": "זמן הליכה.", "math_expression": "12 / 4 = 3 שעות" },
            { "verbal_explanation": "זמן ריצה.", "math_expression": "12 / 6 = 2 שעות" },
            { "verbal_explanation": "סך הכל.", "math_expression": "3 + 2 = 5" }
        ],
        "final_answer": "5 שעות",
        "options": ["4 שעות", "5 שעות", "6 שעות", "4.5 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "מכונית עברה מרחק מסוים ב-5 שעות. לו הייתה נוסעת במהירות הגדולה ב-10 קמ\"ש, הייתה עוברת את אותו המרחק ב-4 שעות. מה הייתה <strong>מהירות המכונית</strong>?",
        "hint": "המרחק קבוע. השוו את הביטויים לדרך (V כפול 5 שווה ל-(V+10) כפול 4).",
        "solution_steps": [
            { "verbal_explanation": "משוואת דרכים.", "math_expression": "5v = 4(v + 10)" },
            { "verbal_explanation": "נפתח סוגריים: 5V = 4V + 40.", "math_expression": "v = 40" }
        ],
        "final_answer": "40 קמ\"ש",
        "options": ["40 קמ\"ש", "50 קמ\"ש", "60 קמ\"ש", "80 קמ\"ש"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "רפסודה נעה בנהר שבו מהירות הזרם היא 3 קמ\"ש. מה המרחק שתעבור הרפסודה ב-4 שעות (ללא מנוע)?",
        "hint": "לרפסודה ללא מנוע יש בדיוק את המהירות של הזרם.",
        "solution_steps": [
            { "verbal_explanation": "מהירות = 3 קמ\"ש, זמן = 4 שעות.", "math_expression": "3 \u00d7 4" },
            { "verbal_explanation": "חישוב דרך.", "math_expression": "12" }
        ],
        "final_answer": "12 ק\"מ",
        "options": ["7 ק\"מ", "12 ק\"מ", "15 ק\"מ", "9 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "ספורטאי רץ 30 ק\"מ במהירות קבועה. אם ירוץ ב-2 קמ\"ש מהר יותר, הוא יסיים ב-5 שעות. מהי <strong>מהירותו הנוכחית</strong>?",
        "hint": "מצאו קודם את המהירות החדשה (30 חלקי 5) ואז החסירו 2.",
        "solution_steps": [
            { "verbal_explanation": "מהירות חדשה (משופרת).", "math_expression": "30 / 5 = 6 קמ\"ש" },
            { "verbal_explanation": "נחזור למהירות המקורית.", "math_expression": "6 - 2 = 4" }
        ],
        "final_answer": "4 קמ\"ש",
        "options": ["4 קמ\"ש", "6 קמ\"ש", "5 קמ\"ש", "3 קמ\"ש"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "מכונית יוצאת לדרך של 400 ק\"מ. בשעתיים הראשונות נסעה ב-100 קמ\"ש. בשאר הדרך האט הנהג ל-50 קמ\"ש. כמה <strong>זמן</strong> ארכה הנסיעה כולה?",
        "hint": "חשבו כמה מרחק נשאר לאחר השעתיים הראשונות.",
        "solution_steps": [
            { "verbal_explanation": "מרחק שעבר בשעתיים.", "math_expression": "100 \u00d7 2 = 200 ק\"מ" },
            { "verbal_explanation": "מרחק שנותר.", "math_expression": "400 - 200 = 200 ק\"מ" },
            { "verbal_explanation": "זמן לנסיעת היתרה במהירות 50.", "math_expression": "200 / 50 = 4 שעות" },
            { "verbal_explanation": "סה\"כ זמן.", "math_expression": "2 + 4 = 6" }
        ],
        "final_answer": "6 שעות",
        "options": ["4 שעות", "5 שעות", "6 שעות", "8 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "כלב רודף אחרי חתול הנמצא 30 מטר לפניו. מהירות הכלב 10 מ' לשנייה ומהירות החתול 7 מ' לשנייה. כמה <strong>שניות</strong> יחלפו עד שהכלב יתפוס את החתול?",
        "hint": "חשבו את מהירות ה'סגירה' (הפרש המהירויות).",
        "solution_steps": [
            { "verbal_explanation": "הפרש מהירויות.", "math_expression": "10 - 7 = 3 מ'/שנייה" },
            { "verbal_explanation": "זמן סגירת מרחק של 30 מטר.", "math_expression": "30 / 3 = 10" }
        ],
        "final_answer": "10 שניות",
        "options": ["5 שניות", "10 שניות", "15 שניות", "30 שניות"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רוכב אופניים עבר 45 ק\"מ. ב-3 השעות הראשונות נסע במהירות X ובשעה הרביעית נסע ב-15 קמ\"ש. מהי המהירות X?",
        "hint": "3 כפול X ועוד 15 שווה לסך הדרך (45).",
        "solution_steps": [
            { "verbal_explanation": "בניית משוואת דרך כוללת.", "math_expression": "3x + 15 = 45" },
            { "verbal_explanation": "נחסיר 15.", "math_expression": "3x = 30" },
            { "verbal_explanation": "נחלק ב-3.", "math_expression": "x = 10" }
        ],
        "final_answer": "10 קמ\"ש",
        "options": ["8", "10", "12", "15"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "מכונית עוברת 240 ק\"מ. אם תוריד את מהירותה ב-20 קמ\"ש, זמן הנסיעה יגדל בשעה אחת. מה הייתה <strong>המהירות המקורית</strong>?",
        "hint": "זוהי שאלה של ניסוי וטעייה או משוואה ריבועית. נסו להציב 80 מהאפשרויות ולראות אם הזמן יוצא שלם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מהירות 80: זמן = 240/80 = 3 שעות.", "math_expression": "3" },
            { "verbal_explanation": "מהירות מופחתת ב-20 היא 60: זמן = 240/60 = 4 שעות.", "math_expression": "4" },
            { "verbal_explanation": "ההפרש בזמן הוא בדיוק שעה אחת, כפי שנדרש.", "math_expression": "4 - 3 = 1" }
        ],
        "final_answer": "80 קמ\"ש",
        "options": ["60 קמ\"ש", "80 קמ\"ש", "100 קמ\"ש", "120 קמ\"ש"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: בעיות גיאומטריות (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "אורך מלבן גדול ב-4 ס\"מ מרוחבו. היקף המלבן הוא 40 ס\"מ. מהו <strong>רוחב</strong> המלבן?",
        "hint": "סמנו את הרוחב ב-X. זכרו שהיקף מלבן הוא פעמיים האורך ועוד פעמיים הרוחב.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר: רוחב = X, אורך = X+4.", "math_expression": "x, x+4" },
            { "verbal_explanation": "נבנה משוואת היקף: 2 פעמים אורך + 2 פעמים רוחב.", "math_expression": "2x + 2(x+4) = 40" },
            { "verbal_explanation": "נפתח סוגריים: 2X + 2X + 8 = 40.", "math_expression": "4x = 32" },
            { "verbal_explanation": "נחלק ב-4 למציאת ה-X.", "math_expression": "x = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["8 ס\"מ", "12 ס\"מ", "10 ס\"מ", "6 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "במשולש, זווית אחת גדולה פי 2 מהשנייה, והזווית השלישית היא בת 60 מעלות. מהו גודל <strong>הזווית הקטנה ביותר</strong> במשולש?",
        "hint": "סכום הזוויות בכל משולש הוא 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "זווית א' = X, זווית ב' = 2X, זווית ג' = 60.", "math_expression": "x + 2x + 60 = 180" },
            { "verbal_explanation": "נחבר איקסים ונחסיר 60 משני האגפים.", "math_expression": "3x = 120" },
            { "verbal_explanation": "נחלק ב-3.", "math_expression": "x = 40" }
        ],
        "final_answer": "40 מעלות",
        "options": ["30 מעלות", "40 מעלות", "60 מעלות", "80 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "נתון מלבן שאורכו X ורוחבו קטן ב-2 ס\"מ מאורכו. אם נגדיל את האורך ב-3 ס\"מ, נקבל מלבן חדש ששטחו גדול ב-21 סמ\"ר משטח המלבן המקורי. מהו <strong>האורך X</strong>?",
        "hint": "שטח מלבן מקורי: X כפול (X-2). שטח מלבן חדש: (X+3) כפול (X-2).",
        "solution_steps": [
            { "verbal_explanation": "נבנה משוואה: שטח חדש פחות שטח ישן שווה 21.", "math_expression": "(x+3)(x-2) - x(x-2) = 21" },
            { "verbal_explanation": "נפתח סוגריים: X² + X - 6 - X² + 2X = 21.", "math_expression": "3x - 6 = 21" },
            { "verbal_explanation": "נפתור את המשוואה.", "math_expression": "3x = 27 -> x = 9" }
        ],
        "final_answer": "9 ס\"מ",
        "options": ["7 ס\"מ", "8 ס\"מ", "9 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "צלע של ריבוע היא X ס\"מ. אם נגדיל צלע אחת ב-20% ונקטין צלע סמוכה ב-20%, מה יקרה ל<strong>שטח הצורה</strong>?",
        "hint": "הצורה החדשה היא מלבן שצלעותיו הן 1.2X ו-0.8X.",
        "solution_steps": [
            { "verbal_explanation": "שטח ריבוע מקורי הוא X כפול X.", "math_expression": "x\u00b2" },
            { "verbal_explanation": "שטח המלבן החדש: 1.2X כפול 0.8X.", "math_expression": "1.2x \u00d7 0.8x = 0.96x\u00b2" },
            { "verbal_explanation": "נשווה בין השטחים: מ-100% ירדנו ל-96%.", "math_expression": "100% - 96% = 4%" }
        ],
        "final_answer": "השטח יקטן ב-4%",
        "options": ["השטח לא ישתנה", "השטח יגדל ב-4%", "השטח יקטן ב-4%", "השטח יקטן ב-20%"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "במשולש שווה שוקיים, זווית הראש גדולה ב-30 מעלות מזווית הבסיס. מהו גודל <strong>זווית הבסיס</strong>?",
        "hint": "במשולש שווה שוקיים יש שתי זוויות בסיס שוות (X). זווית הראש היא X+30.",
        "solution_steps": [
            { "verbal_explanation": "בסיס = X, בסיס = X, ראש = X+30.", "math_expression": "x + x + (x + 30) = 180" },
            { "verbal_explanation": "3X + 30 = 180.", "math_expression": "3x = 150" },
            { "verbal_explanation": "נחלק ב-3.", "math_expression": "x = 50" }
        ],
        "final_answer": "50 מעלות",
        "options": ["50 מעלות", "60 מעלות", "70 מעלות", "80 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "נתון ריבוע שצלעו X. חתכו ממנו מלבן שרוחבו 3 ס\"מ לכל אורך הריבוע. השטח שנותר הוא 28 סמ\"ר. מה היה <strong>אורך צלע הריבוע המקורי</strong>?",
        "hint": "השטח שנותר הוא מלבן שצלעותיו הן X ו- (X-3).",
        "solution_steps": [
            { "verbal_explanation": "בניית משוואת שטח: צלע אחת נשארה X והשנייה התקצרה.", "math_expression": "x(x - 3) = 28" },
            { "verbal_explanation": "נחפש מספר X שמתקיים: X כפול פחות 3 מעצמו שווה 28.", "math_expression": "7 \u00d7 4 = 28" },
            { "verbal_explanation": "לכן X חייב להיות 7.", "math_expression": "x = 7" }
        ],
        "final_answer": "7 ס\"מ",
        "options": ["5 ס\"מ", "6 ס\"מ", "7 ס\"מ", "8 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Low",
        "question_text": "היקף ריבוע הוא 4X. מהו <strong>שטח</strong> הריבוע?",
        "hint": "מצאו קודם את אורך הצלע של הריבוע על ידי חלוקת ההיקף ב-4.",
        "solution_steps": [
            { "verbal_explanation": "אורך צלע הריבוע.", "math_expression": "4x / 4 = x" },
            { "verbal_explanation": "שטח ריבוע הוא צלע כפול צלע.", "math_expression": "x \u00d7 x = x\u00b2" }
        ],
        "final_answer": "X²",
        "options": ["X", "2X", "X²", "16X²"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, אורך ניצב אחד הוא 8 ס\"מ. הניצב השני קטן ב-X ס\"מ מהניצב הראשון. שטח המשולש הוא 24 סמ\"ר. מהו <strong>הערך של X</strong>?",
        "hint": "שטח משולש ישר זווית הוא (ניצב א' כפול ניצב ב') חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "ניצב א' = 8, ניצב ב' = 8-X.", "math_expression": "8, 8-x" },
            { "verbal_explanation": "משוואת שטח: [8 כפול (8-X)] חלקי 2 שווה 24.", "math_expression": "4(8 - x) = 24" },
            { "verbal_explanation": "נחלק ב-4: 8 פחות X שווה 6.", "math_expression": "8 - x = 6" },
            { "verbal_explanation": "נמצא את X.", "math_expression": "x = 2" }
        ],
        "final_answer": "2",
        "options": ["2", "3", "4", "6"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "אם נגדיל צלע של ריבוע ב-3 ס\"מ, היקפו יהיה 32 ס\"מ. מה היה <strong>שטח הריבוע המקורי</strong>?",
        "hint": "מצאו קודם את הצלע של הריבוע החדש (היקף חלקי 4).",
        "solution_steps": [
            { "verbal_explanation": "צלע הריבוע החדש: 32 חלקי 4.", "math_expression": "8 ס\"מ" },
            { "verbal_explanation": "הצלע הוגדלה ב-3, לכן המקורית הייתה 5.", "math_expression": "8 - 3 = 5" },
            { "verbal_explanation": "שטח מקורי: 5 כפול 5.", "math_expression": "25" }
        ],
        "final_answer": "25 סמ\"ר",
        "options": ["25 סמ\"ר", "64 סמ\"ר", "16 סמ\"ר", "49 סמ\"ר"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "שטח מקבילית הוא 40 סמ\"ר. גובה המקבילית קטן ב-3 ס\"מ מהבסיס שלה. מהו <strong>אורך הבסיס</strong>?",
        "hint": "שטח מקבילית = בסיס × גובה. סמנו בסיס ב-X.",
        "solution_steps": [
            { "verbal_explanation": "בסיס = X, גובה = X-3.", "math_expression": "x(x - 3) = 40" },
            { "verbal_explanation": "נחפש מספר שההפרש בינו לבין זה שמוכפל בו הוא 3, ומכפלתם 40.", "math_expression": "8 \u00d7 5 = 40" },
            { "verbal_explanation": "לכן הבסיס (המספר הגדול) הוא 8.", "math_expression": "8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["5 ס\"מ", "8 ס\"מ", "10 ס\"מ", "4 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "קובייה שאורך מקצועה (צלעה) הוא X. אם נגדיל את הצלע פי 2, <strong>פי כמה יגדל נפח</strong> הקובייה?",
        "hint": "נפח קובייה הוא צלע בשלישית (X³).",
        "solution_steps": [
            { "verbal_explanation": "נפח מקורי.", "math_expression": "x\u00b3" },
            { "verbal_explanation": "נפח חדש עם צלע 2X.", "math_expression": "(2x)\u00b3 = 8x\u00b3" },
            { "verbal_explanation": "נראה פי כמה הנפח החדש גדול מהישן.", "math_expression": "8" }
        ],
        "final_answer": "פי 8",
        "options": ["פי 2", "פי 4", "פי 6", "פי 8"],
        "correctAnswer": 3
    },
    {
        "id": 42,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "שתי זוויות צמודות נמצאות על קו ישר. זווית אחת גדולה פי 4 מהשנייה. מהו גודל <strong>הזווית הגדולה</strong>?",
        "hint": "סכום זוויות צמודות על קו ישר הוא 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "זווית קטנה = X, גדולה = 4X.", "math_expression": "x + 4x = 180" },
            { "verbal_explanation": "5X = 180 -> X = 36.", "math_expression": "x = 36" },
            { "verbal_explanation": "נמצא את הזווית הגדולה: 4 כפול 36.", "math_expression": "144" }
        ],
        "final_answer": "144 מעלות",
        "options": ["36 מעלות", "144 מעלות", "150 מעלות", "120 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "מלבן שהיקפו 60 ס\"מ חולק לשני ריבועים זהים. מהו <strong>שטח המלבן</strong> כולו?",
        "hint": "אם המלבן בנוי משני ריבועים צמודים, אז האורך שלו הוא פעמיים הרוחב.",
        "solution_steps": [
            { "verbal_explanation": "רוחב = X, אורך = 2X. משוואת היקף.", "math_expression": "2(x + 2x) = 60" },
            { "verbal_explanation": "6X = 60 -> X = 10.", "math_expression": "x = 10" },
            { "verbal_explanation": "מידות המלבן הן 10 ו-20. נחשב שטח.", "math_expression": "10 \u00d7 20 = 200" }
        ],
        "final_answer": "200 סמ\"ר",
        "options": ["100 סמ\"ר", "200 סמ\"ר", "225 סמ\"ר", "150 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "High",
        "question_text": "בתוך ריבוע שצלעו 10 ס\"מ, מצויר ריבוע פנימי קטן יותר כך שהמרחק בין צלעות הריבועים הוא 2 ס\"מ מכל צד. מהו <strong>השטח שבין שני הריבועים</strong>?",
        "hint": "חשבו את שטח הריבוע הגדול, והחסירו ממנו את שטח הריבוע הקטן. צלע הקטן היא (10 פחות 2 פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "שטח ריבוע גדול.", "math_expression": "10 \u00d7 10 = 100" },
            { "verbal_explanation": "אורך צלע ריבוע פנימי: מורידים 2 ס\"מ מכל קצה.", "math_expression": "10 - 2 - 2 = 6" },
            { "verbal_explanation": "שטח ריבוע פנימי: 6 כפול 6.", "math_expression": "36" },
            { "verbal_explanation": "הפרש השטחים.", "math_expression": "100 - 36 = 64" }
        ],
        "final_answer": "64 סמ\"ר",
        "options": ["64 סמ\"ר", "36 סמ\"ר", "84 סמ\"ר", "20 סמ\"ר"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "בעיות גיאומטריות",
        "difficulty": "Medium",
        "question_text": "מהו היקף של עיגול שרדיוסו הוא 5 ס\"מ? (השתמשו ב- 3.14 עבור פאי).",
        "hint": "נוסחת היקף מעגל: 2 כפול פאי כפול רדיוס.",
        "solution_steps": [
            { "verbal_explanation": "נציב בנוסחה: 2 כפול 3.14 כפול 5.", "math_expression": "10 \u00d7 3.14" },
            { "verbal_explanation": "נחשב את המכפלה.", "math_expression": "31.4" }
        ],
        "final_answer": "31.4 ס\"מ",
        "options": ["15.7 ס\"מ", "31.4 ס\"מ", "78.5 ס\"מ", "62.8 ס\"מ"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: בעיות יחס (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "בעיות יחס",
        "difficulty": "Low",
        "question_text": "היחס בין מספר הבנים למספר הבנות בכיתה הוא 2:3. אם יש בכיתה 12 בנים, כמה <strong>בנות</strong> יש בכיתה?",
        "hint": "היחס אומר שעל כל 2 בנים יש 3 בנות. בדקו פי כמה גדול מספר הבנים האמיתי מהיחס.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את הגורם המרחיב: 12 חלקי 2.", "math_expression": "6" },
            { "verbal_explanation": "נכפיל את חלק הבנות ביחס באותו גורם.", "math_expression": "3 \u00d7 6 = 18" }
        ],
        "final_answer": "18 בנות",
        "options": ["12", "15", "18", "24"],
        "correctAnswer": 2
    },
    {
        "id": 47,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "סכום של 200 ש\"ח חולק בין דן ליוסי ביחס של 3:7 (יוסי קיבל את החלק הגדול). כמה כסף קיבל <strong>יוסי</strong>?",
        "hint": "חברו את חלקי היחס כדי לדעת לכמה 'חלקים' שווים חולק הכסף.",
        "solution_steps": [
            { "verbal_explanation": "סך כל החלקים ביחס.", "math_expression": "3 + 7 = 10" },
            { "verbal_explanation": "ערך של 'חלק' אחד: 200 חלקי 10.", "math_expression": "20" },
            { "verbal_explanation": "יוסי קיבל 7 חלקים.", "math_expression": "7 \u00d7 20 = 140" }
        ],
        "final_answer": "140 ש\"ח",
        "options": ["60 ש\"ח", "100 ש\"ח", "140 ש\"ח", "170 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "במתכון לעוגה היחס בין הקמח לסוכר הוא 5:2. אם השתמשנו ב-400 גרם סוכר, כמה <strong>גרם קמח</strong> דרושים?",
        "hint": "סדרו את היחס: קמח (5) מול סוכר (2).",
        "solution_steps": [
            { "verbal_explanation": "נמצא פי כמה גדלה כמות הסוכר מ-2 ל-400.", "math_expression": "400 / 2 = 200" },
            { "verbal_explanation": "נכפיל את חלק הקמח באותו יחס.", "math_expression": "5 \u00d7 200 = 1000" }
        ],
        "final_answer": "1000 גרם (1 ק\"ג)",
        "options": ["800 גרם", "1000 גרם", "1200 גרם", "600 גרם"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "question_text": "היחס בין הגילאים של אבא לבנו הוא 4:1. בעוד 5 שנים יהיה הבן בן 15. בן כמה <strong>האבא היום</strong>?",
        "hint": "מצאו קודם את גיל הבן היום.",
        "solution_steps": [
            { "verbal_explanation": "אם בעוד 5 שנים הבן יהיה בן 15, היום הוא בן 10.", "math_expression": "15 - 5 = 10" },
            { "verbal_explanation": "לפי היחס 4:1, האב מבוגר פי 4 מהבן.", "math_expression": "10 \u00d7 4 = 40" }
        ],
        "final_answer": "40",
        "options": ["35", "40", "45", "60"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "קנה המידה במפה הוא 1:50,000. המרחק בין שתי נקודות במפה הוא 4 ס\"מ. מהו <strong>המרחק האמיתי</strong> בקילומטרים?",
        "hint": "קנה מידה אומר שכל 1 ס\"מ במפה שווה ל-50,000 ס\"מ במציאות. זכרו: 100,000 ס\"מ הם 1 ק\"מ.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק בסנטימטרים במציאות.", "math_expression": "4 \u00d7 50,000 = 200,000" },
            { "verbal_explanation": "נמיר מקילומטרים לסנטימטרים (חלוקה ב-100,000).", "math_expression": "200,000 / 100,000 = 2" }
        ],
        "final_answer": "2 ק\"מ",
        "options": ["2 ק\"מ", "20 ק\"מ", "0.2 ק\"מ", "200 ק\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "question_text": "במסיבה היחס בין מספר המבוגרים לילדים היה 1:4. לאחר ש-5 מבוגרים נוספים הגיעו, היחס הפך ל-1:2. כמה <strong>ילדים</strong> היו במסיבה?",
        "hint": "סמנו מבוגרים כ-X וילדים כ-4X. בנו משוואה ליחס החדש.",
        "solution_steps": [
            { "verbal_explanation": "התחלה: מבוגרים=X, ילדים=4X. אחרי תוספת: מבוגרים=X+5.", "math_expression": "4x / (x + 5) = 2 / 1" },
            { "verbal_explanation": "נפתור את הפרופורציה (כפל בהצלבה).", "math_expression": "4x = 2x + 10" },
            { "verbal_explanation": "2X = 10 -> X = 5.", "math_expression": "x = 5" },
            { "verbal_explanation": "מספר הילדים הוא 4X.", "math_expression": "4 \u00d7 5 = 20" }
        ],
        "final_answer": "20 ילדים",
        "options": ["10", "15", "20", "25"],
        "correctAnswer": 2
    },
    {
        "id": 52,
        "subTopic": "בעיות יחס",
        "difficulty": "Low",
        "question_text": "מחיר 5 ק\"ג תפוחים הוא 30 ש\"ח. כמה יעלו <strong>8 ק\"ג</strong> תפוחים מאותו סוג?",
        "hint": "מצאו קודם מחיר לק\"ג אחד (היחס בין המחיר לכמות).",
        "solution_steps": [
            { "verbal_explanation": "מחיר לקילוגרם בודד.", "math_expression": "30 / 5 = 6 ש\"ח" },
            { "verbal_explanation": "נכפיל בכמות המבוקשת.", "math_expression": "6 \u00d7 8 = 48" }
        ],
        "final_answer": "48 ש\"ח",
        "options": ["40 ש\"ח", "48 ש\"ח", "50 ש\"ח", "38 ש\"ח"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "question_text": "היחס בין שלוש הזוויות במשולש הוא 1:2:3. מה גודלה של <strong>הזווית הגדולה ביותר</strong>?",
        "hint": "חלקו את 180 מעלות לסך כל חלקי היחס.",
        "solution_steps": [
            { "verbal_explanation": "סך כל החלקים ביחס.", "math_expression": "1 + 2 + 3 = 6" },
            { "verbal_explanation": "ערך של 'חלק' אחד במעלות.", "math_expression": "180 / 6 = 30" },
            { "verbal_explanation": "הזווית הגדולה היא 3 חלקים.", "math_expression": "3 \u00d7 30 = 90" }
        ],
        "final_answer": "90 מעלות",
        "options": ["60 מעלות", "80 מעלות", "90 מעלות", "100 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "בכלוב יש ארנבים ותוכים. היחס בין מספר הארנבים למספר התוכים הוא 2:5. בסך הכל יש בכלוב 35 חיות. כמה <strong>ארנבים</strong> יש בכלוב?",
        "hint": "השתמשו בשיטת יחידת היחס (סך הכל חלקי סכום היחס).",
        "solution_steps": [
            { "verbal_explanation": "סכום חלקי היחס.", "math_expression": "2 + 5 = 7" },
            { "verbal_explanation": "ערך כל יחידה.", "math_expression": "35 / 7 = 5" },
            { "verbal_explanation": "מספר ארנבים (2 יחידות).", "math_expression": "2 \u00d7 5 = 10" }
        ],
        "final_answer": "10 ארנבים",
        "options": ["10", "14", "25", "15"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "difficulty": "High",
        "question_text": "היחס בין אורכי הצלעות של מלבן הוא 2:5. היקף המלבן הוא 70 ס\"מ. מהו <strong>שטח</strong> המלבן?",
        "hint": "השתמשו ב-2X ו-5X לצלעות. זכרו שההיקף הוא פעמיים הסכום שלהן.",
        "solution_steps": [
            { "verbal_explanation": "משוואת היקף.", "math_expression": "2(2x + 5x) = 70" },
            { "verbal_explanation": "14X = 70 -> X = 5.", "math_expression": "x = 5" },
            { "verbal_explanation": "צלעות המלבן: 10 ס\"מ ו-25 ס\"מ.", "math_expression": "10 , 25" },
            { "verbal_explanation": "נחשב שטח.", "math_expression": "10 \u00d7 25 = 250" }
        ],
        "final_answer": "250 סמ\"ר",
        "options": ["150 סמ\"ר", "250 סמ\"ר", "350 סמ\"ר", "100 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "יחס המחירים בין קילו ענבים לקילו תפוחים הוא 3:1. אם 2 קילו ענבים ו-4 קילו תפוחים עולים 50 ש\"ח, מה מחיר <strong>קילו ענבים</strong>?",
        "hint": "תפוחים = X, ענבים = 3X.",
        "solution_steps": [
            { "verbal_explanation": "בניית משוואת עלות.", "math_expression": "2(3x) + 4x = 50" },
            { "verbal_explanation": "6X + 4X = 50 -> 10X = 50.", "math_expression": "x = 5" },
            { "verbal_explanation": "מחיר ענבים הוא 3X.", "math_expression": "3 \u00d7 5 = 15" }
        ],
        "final_answer": "15 ש\"ח",
        "options": ["5 ש\"ח", "10 ש\"ח", "15 ש\"ח", "20 ש\"ח"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "question_text": "היחס בין כמות השמן לכמות המים בתערובת הוא 1:8. אם בתערובת יש 4.5 ליטר נוזל בסך הכל, כמה <strong>מיליליטר (מ\"ל) שמן</strong> יש בה?",
        "hint": "חלקו את סך הליטרים ל-9 חלקים (1+8). זכרו ש-1 ליטר הוא 1000 מ\"ל.",
        "solution_steps": [
            { "verbal_explanation": "ערך כל חלק בליטרים.", "math_expression": "4.5 / 9 = 0.5 ליטר" },
            { "verbal_explanation": "נמיר למ\"ל.", "math_expression": "0.5 \u00d7 1000 = 500" }
        ],
        "final_answer": "500 מ\"ל",
        "options": ["400 מ\"ל", "500 מ\"ל", "450 מ\"ל", "100 מ\"ל"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "מפה משורטטת בקנה מידה של 1:2,000,000. אורך כביש במציאות הוא 100 ק\"מ. מה יהיה אורכו <strong>במפה</strong> בסנטימטרים?",
        "hint": "המרו קודם את הקילומטרים לסנטימטרים (הוסיפו 5 אפסים), ואז חלקו ביחס.",
        "solution_steps": [
            { "verbal_explanation": "המרת ק\"מ לס\"מ.", "math_expression": "100 \u00d7 100,000 = 10,000,000" },
            { "verbal_explanation": "חלוקה בקנה המידה.", "math_expression": "10,000,000 / 2,000,000 = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["2 ס\"מ", "5 ס\"מ", "10 ס\"מ", "50 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "בעיות יחס",
        "difficulty": "High",
        "question_text": "היחס בין החיסכון של יעל לחיסכון של גיא הוא 2:5. לאחר ששניהם חסכו 100 ש\"ח נוספים כל אחד, היחס השתנה ל-1:2. כמה כסף היה ל<strong>יעל</strong> בהתחלה?",
        "hint": "סמנו: יעל=2X, גיא=5X. בנו משוואת יחס חדש.",
        "solution_steps": [
            { "verbal_explanation": "משוואת יחס: (יעל+100) חלקי (גיא+100) שווה 1/2.", "math_expression": "(2x + 100) / (5x + 100) = 1 / 2" },
            { "verbal_explanation": "כפל בהצלבה: 2(2X + 100) = 5X + 100.", "math_expression": "4x + 200 = 5x + 100" },
            { "verbal_explanation": "נפתור: X = 100.", "math_expression": "x = 100" },
            { "verbal_explanation": "כסף של יעל בהתחלה (2X).", "math_expression": "200" }
        ],
        "final_answer": "200 ש\"ח",
        "options": ["100 ש\"ח", "200 ש\"ח", "400 ש\"ח", "500 ש\"ח"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "בעיות יחס",
        "difficulty": "Medium",
        "question_text": "מספר הג'ינסים למספר החולצות בארון הוא ביחס של 1:6. אם יש בארון 21 פריטים בסך הכל (רק ג'ינסים וחולצות), כמה <strong>חולצות</strong> יש בארון?",
        "hint": "סך כל החלקים הוא 7. מצאו את ערך החלק וחלקו את פריטי הלבוש.",
        "solution_steps": [
            { "verbal_explanation": "סכום היחס.", "math_expression": "1 + 6 = 7" },
            { "verbal_explanation": "ערך כל חלק.", "math_expression": "21 / 7 = 3" },
            { "verbal_explanation": "מספר חולצות (6 חלקים).", "math_expression": "6 \u00d7 3 = 18" }
        ],
        "final_answer": "18 חולצות",
        "options": ["15", "18", "20", "12"],
        "correctAnswer": 1
    }
];