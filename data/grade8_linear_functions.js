const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: שיפוע לפי 2 נקודות (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "מצאו את ה<strong>שיפוע</strong> (m) של הישר העובר דרך הנקודות (1, 2) ו-(3, 6).<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='120' viewBox='0 0 160 120'><line x1='10' y1='110' x2='150' y2='110' stroke='black' stroke-width='1'/><line x1='10' y1='10' x2='10' y2='110' stroke='black' stroke-width='1'/><circle cx='30' cy='90' r='4' fill='#ef4444'/><text x='35' y='105' font-size='12' fill='#ef4444' font-weight='bold'>(1,2)</text><circle cx='70' cy='50' r='4' fill='#ef4444'/><text x='75' y='45' font-size='12' fill='#ef4444' font-weight='bold'>(3,6)</text><line x1='10' y1='110' x2='120' y2='0' stroke='#3b82f6' stroke-width='2' stroke-dasharray='4'/></svg></div>",
        "hint": "שיפוע (m) מחושב על ידי הפרש ערכי ה-y חלקי הפרש ערכי ה-x של שתי הנקודות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את שיעורי הנקודות שלנו בצורה מסודרת. הנקודה הראשונה מספקת לנו את x1 ו-y1, והשנייה את x2 ו-y2.", "math_expression": "x1=1, y1=2 | x2=3, y2=6" },
            { "verbal_explanation": "שלב 2: נרשום את נוסחת השיפוע ונציב את הערכים. נחסיר את ה-y של הנקודה הראשונה מהשנייה, ואת ה-x של הראשונה מהשנייה.", "math_expression": "m = (y2 - y1) / (x2 - x1) = (6 - 2) / (3 - 1)" },
            { "verbal_explanation": "שלב 3: נבצע את פעולות החיסור במונה ובמכנה בנפרד.", "math_expression": "m = 4 / 2" },
            { "verbal_explanation": "שלב 4: נחלק את התוצאה לקבלת השיפוע הסופי. משמעות הדבר היא שעל כל צעד ימינה, הישר עולה ב-2 צעדים.", "math_expression": "m = 2" }
        ],
        "final_answer": "2",
        "options": ["1", "2", "4", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "מהו השיפוע של ישר העובר דרך ראשית הצירים (0, 0) ודרך הנקודה (4, 8)?",
        "hint": "ראשית הצירים היא תמיד הנקודה (0,0). השתמשו בה כנקודה הראשונה בנוסחת השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את שתי הנקודות הנתונות בשאלה.", "math_expression": "(0, 0) ו-(4, 8)" },
            { "verbal_explanation": "שלב 2: נציב בנוסחת השיפוע: הפרש ה-y (המספרים הימניים בזוג) חלקי הפרש ה-x (המספרים השמאליים בזוג).", "math_expression": "m = (8 - 0) / (4 - 0)" },
            { "verbal_explanation": "שלב 3: נפשט את השבר שקיבלנו.", "math_expression": "m = 8 / 4 = 2" }
        ],
        "final_answer": "2",
        "options": ["0.5", "4", "2", "8"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Medium",
        "question_text": "חשבו את השיפוע של הישר העובר דרך הנקודות (1-, 5) ו-(2, 4-). היזהרו עם סימני המינוס!",
        "hint": "זכרו שבנוסחת השיפוע, פחות מינוס הופך לפלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את שיעורי הנקודות כדי לא להתבלבל. x1=-1, y1=5 וגם x2=2, y2=-4.", "math_expression": "(-1, 5) , (2, -4)" },
            { "verbal_explanation": "שלב 2: נציב בזהירות בנוסחה. במכנה נקפיד לרשום 2 פחות מינוס 1.", "math_expression": "m = (-4 - 5) / (2 - (-1))" },
            { "verbal_explanation": "שלב 3: נחשב את הערכים. במונה: מינוס 4 פחות 5 שווה מינוס 9. במכנה: 2 פלוס 1 שווה 3.", "math_expression": "m = -9 / 3" },
            { "verbal_explanation": "שלב 4: נבצע את החילוק הסופי. השיפוע הוא שלילי, כלומר הישר יורד.", "math_expression": "m = -3" }
        ],
        "final_answer": "-3",
        "options": ["3", "-3", "-1", "0"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Medium",
        "question_text": "נתון ישר העובר דרך (2, 10) ו-(5, 10). מהו שיפוע הישר?",
        "hint": "הסתכלו על ערכי ה-y של שתי הנקודות. האם יש שינוי בגובה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שערכי ה-y בשתי הנקודות הם זהים (שניהם בגובה 10).", "math_expression": "y1 = 10, y2 = 10" },
            { "verbal_explanation": "שלב 2: נציב בנוסחת השיפוע ונראה שההפרש במונה הוא אפס.", "math_expression": "m = (10 - 10) / (5 - 2) = 0 / 3" },
            { "verbal_explanation": "שלב 3: חילוק של אפס בכל מספר נותן אפס. משמעות הדבר היא שזהו ישר אופקי שאינו עולה ואינו יורד.", "math_expression": "m = 0" }
        ],
        "final_answer": "0",
        "options": ["1", "0", "השיפוע אינו מוגדר", "10"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "High",
        "question_text": "שיפוע הישר העובר דרך הנקודות (2, 4) ו-(x, 10) הוא 3. מהו ערכו של הנעלם x?",
        "hint": "הפעם השיפוע מראש נתון לכם. בנו משוואה שבה נוסחת השיפוע שווה ל-3 וחלצו את x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את כל הנתונים הידועים (הנקודות והשיפוע) בתוך נוסחת השיפוע המוכרת.", "math_expression": "(10 - 4) / (x - 2) = 3" },
            { "verbal_explanation": "שלב 2: נפשט את המונה של השבר (10 פחות 4 הם 6).", "math_expression": "6 / (x - 2) = 3" },
            { "verbal_explanation": "שלב 3: נכפיל את שני אגפי המשוואה במכנה (x - 2) כדי לבטל את קו השבר.", "math_expression": "6 = 3 * (x - 2)" },
            { "verbal_explanation": "שלב 4: נפתח סוגריים באגף ימין בעזרת חוק הפילוג.", "math_expression": "6 = 3x - 6" },
            { "verbal_explanation": "שלב 5: נעביר את מינוס 6 לאגף שמאל בסימן פלוס ונחלק את התוצאה ב-3.", "math_expression": "12 = 3x -> x = 4" }
        ],
        "final_answer": "4",
        "options": ["2", "4", "6", "3"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Medium",
        "question_text": "מצאו את השיפוע של קו ישר העובר דרך הנקודות (3-, 2-) לבין (4, 1-).",
        "hint": "עבדו לאט מאוד עם המינוסים. הפרש ה-y במונה, הפרש ה-x במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב בנוסחה תוך שמירה על סוגריים לכל מספר שלילי.", "math_expression": "m = (1 - (-3)) / (-4 - (-2))" },
            { "verbal_explanation": "שלב 2: נהפוך את חיסור המינוסים לחיבור (פלוס).", "math_expression": "m = (1 + 3) / (-4 + 2)" },
            { "verbal_explanation": "שלב 3: נחשב את המונה והמכנה ונקבל את השבר הסופי.", "math_expression": "m = 4 / -2 = -2" }
        ],
        "final_answer": "-2",
        "options": ["2", "-2", "1", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "האם לישר העובר דרך (1, 1) ו-(2, 2) יש אותו שיפוע כמו לישר העובר דרך (5, 5) ו-(10, 10)?",
        "hint": "חשבו את השיפוע של כל זוג בנפרד והשוו בין התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השיפוע של הזוג הראשון.", "math_expression": "m1 = (2 - 1) / (2 - 1) = 1 / 1 = 1" },
            { "verbal_explanation": "שלב 2: נחשב את השיפוע של הזוג השני.", "math_expression": "m2 = (10 - 5) / (10 - 5) = 5 / 5 = 1" },
            { "verbal_explanation": "שלב 3: נראה שהתוצאות זהות לחלוטין. לשניהם שיפוע של 1.", "math_expression": "1 = 1" }
        ],
        "final_answer": "כן, לשניהם שיפוע 1.",
        "options": ["כן, לשניהם שיפוע 1.", "לא, הם שונים.", "רק אם הם נחתכים", "אי אפשר לחשב"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "High",
        "question_text": "ישר עובר דרך הנקודות (3, 8) ו-(3, 12). מהו השיפוע שלו?",
        "hint": "נסו להציב בנוסחה וראו מה קורה במכנה (בערכי ה-x). מה קורה כשמחלקים באפס?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שערכי ה-x בשתי הנקודות זהים (שניהם 3).", "math_expression": "x1 = 3, x2 = 3" },
            { "verbal_explanation": "שלב 2: ננסה להציב בנוסחה: הפרש ה-y הוא 4, אך הפרש ה-x הוא 0.", "math_expression": "m = (12 - 8) / (3 - 3) = 4 / 0" },
            { "verbal_explanation": "שלב 3: במתמטיקה מוחלט אסור לחלק ב-0. מצב זה מעיד על קו אנכי לחלוטין שאין לו שיפוע מוגדר.", "math_expression": "לא מוגדר" }
        ],
        "final_answer": "השיפוע אינו מוגדר (ישר אנכי).",
        "options": ["0", "4", "השיפוע אינו מוגדר (ישר אנכי).", "1"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "מהו השיפוע של ציר ה-x עצמו?",
        "hint": "בחרו שתי נקודות כלשהן שנמצאות על ציר ה-x, למשל (0,0) ו-(1,0), וחשבו את השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כל הנקודות על ציר ה-x הן בגובה 0, כלומר ערך ה-y שלהן הוא תמיד 0.", "math_expression": "y1 = 0, y2 = 0" },
            { "verbal_explanation": "שלב 2: לכן, הפרש ה-y במונה של הנוסחה יהיה תמיד אפס.", "math_expression": "m = 0 / הפרש x" },
            { "verbal_explanation": "שלב 3: חילוק של 0 בכל מספר נותן 0. מכאן ששיפוע ציר ה-x (וכל ישר המקביל לו) הוא 0.", "math_expression": "m = 0" }
        ],
        "final_answer": "0",
        "options": ["1", "0", "לא מוגדר", "-1"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Medium",
        "question_text": "מצאו את השיפוע של הישר העובר דרך (5, 2) ו-(7, 2-).",
        "hint": "שימו לב שהישר יורד: כשה-x גדל מ-5 ל-7, ה-y קטן מ-2 למינוס 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבה בתוך נוסחת השיפוע.", "math_expression": "m = (-2 - 2) / (7 - 5)" },
            { "verbal_explanation": "שלב 2: חישוב ההפרש במונה (מינוס 4) וההפרש במכנה (2).", "math_expression": "m = -4 / 2" },
            { "verbal_explanation": "שלב 3: חלוקה לקבלת התוצאה הסופית. השיפוע הוא שלילי כצפוי.", "math_expression": "m = -2" }
        ],
        "final_answer": "-2",
        "options": ["2", "-2", "0", "-4"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "High",
        "question_text": "האם הנקודות (1, 3), (2, 5) ו-(4, 9) נמצאות כולן על אותו קו ישר אחד?",
        "hint": "כדי להוכיח שנקודות הן על אותו ישר, הראו שהשיפוע בין כל זוג נקודות הוא זהה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השיפוע בין הזוג הראשון - (1,3) ל-(2,5).", "math_expression": "m1 = (5 - 3) / (2 - 1) = 2 / 1 = 2" },
            { "verbal_explanation": "שלב 2: נחשב את השיפוע בין הזוג השני - (2,5) ל-(4,9).", "math_expression": "m2 = (9 - 5) / (4 - 2) = 4 / 2 = 2" },
            { "verbal_explanation": "שלב 3: נשווה את התוצאות. מכיוון שהשיפוע זהה לכל אורך הדרך, הנקודות אכן שוכנות על אותו ישר.", "math_expression": "2 = 2" }
        ],
        "final_answer": "כן, כולן על אותו ישר.",
        "options": ["כן, כולן על אותו ישר.", "לא, הישר נשבר.", "רק שתיים מהן על ישר.", "אי אפשר לחשב."],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Medium",
        "question_text": "מצאו את שיפוע הישר העובר דרך הנקודות (10, 20) ו-(0, 0).",
        "hint": "חילוק פשוט של הפרשי המיקומים מהראשית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב בנוסחה. נעשה זאת כך שנחסיר את (10,20) מהראשית (0,0).", "math_expression": "m = (0 - 20) / (0 - 10)" },
            { "verbal_explanation": "שלב 2: נחשב ונקבל מינוס 20 חלקי מינוס 10.", "math_expression": "m = -20 / -10" },
            { "verbal_explanation": "שלב 3: המינוסים מתבטלים בפעולת החילוק ומקבלים מספר חיובי.", "math_expression": "m = 2" }
        ],
        "final_answer": "2",
        "options": ["10", "2", "0.5", "20"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "איך משפיע כיוון הקו בגרף על סימן השיפוע שלו?",
        "hint": "חשבו על גרף של עלייה משמאל לימין מול גרף של ירידה.",
        "solution_steps": [
            { "verbal_explanation": "במערכת צירים, כאשר אנו קוראים את הגרף משמאל לימין: ישר עולה מעיד על קצב גדילה ולכן השיפוע שלו חיובי. ישר יורד מעיד על הקטנה ולכן השיפוע שלו שלילי.", "math_expression": "עולה = (+), יורד = (-)" }
        ],
        "final_answer": "ישר עולה הוא בעל שיפוע חיובי.",
        "options": ["ישר עולה הוא בעל שיפוע חיובי.", "ישר עולה הוא בעל שיפוע שלילי.", "אין קשר בין הכיוון לשיפוע.", "השיפוע תמיד חיובי."],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "High",
        "question_text": "מצאו את השיפוע m אם ידוע שהישר עובר דרך הנקודות (a, b) ודרך (3a, 5b).",
        "hint": "אל תיבהלו מהאותיות. התייחסו אליהן כאילו היו מספרים רגילים והשתמשו בחוקי האלגברה הבסיסיים לכינוס איברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הביטויים האלגבריים במדויק בתוך נוסחת השיפוע.", "math_expression": "m = (5b - b) / (3a - a)" },
            { "verbal_explanation": "שלב 2: נכנס איברים דומים במונה (5b פחות b) ובמכנה (3a פחות a).", "math_expression": "m = 4b / 2a" },
            { "verbal_explanation": "שלב 3: נצמצם את המספרים בלבד. 4 חלקי 2 זה 2. האותיות נשארות כפי שהן.", "math_expression": "m = 2b / a" }
        ],
        "final_answer": "2b / a",
        "options": ["2b / a", "b / a", "2", "4b / 3a"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "שיפוע לפי 2 נקודות",
        "difficulty": "Low",
        "question_text": "מהו השיפוע של הישר העובר דרך (1, 10) ו-(2, 11)?",
        "hint": "קפיצה של יחידה אחת ב-x גורמת לקפיצה של כמה יחידות ב-y?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצבה מהירה בנוסחה למציאת הפערים.", "math_expression": "m = (11 - 10) / (2 - 1)" },
            { "verbal_explanation": "שלב 2: חישוב קצר מראה שעל כל צעד ב-x, ה-y גדל בצעד אחד.", "math_expression": "m = 1 / 1 = 1" }
        ],
        "final_answer": "1",
        "options": ["10", "1", "11", "2"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: משוואת ישר (נקודה ושיפוע) (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Low",
        "question_text": "מצאו את משוואת הישר שהשיפוע שלו הוא <strong>3</strong> והוא עובר דרך הנקודה <strong>(1, 5)</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='60' viewBox='0 0 120 60'><rect x='5' y='5' width='110' height='50' fill='#f8fafc' stroke='#1e293b' rx='5'/><text x='15' y='25' font-size='12'>m = 3</text><text x='15' y='45' font-size='12'>נקודה: (1, 5)</text></svg></div>",
        "hint": "השתמשו בתבנית הכללית של ישר: y = mx + b. הציבו את m, x ו-y כדי למצוא את המספר b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הנתונים הידועים לנו. השיפוע m הוא 3, ושיעורי הנקודה הם x=1 ו-y=5.", "math_expression": "m = 3 , x = 1 , y = 5" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים בתוך משוואת הישר הכללית כדי למצוא את המספר החופשי b.", "math_expression": "5 = 3 * 1 + b" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה הפשוטה שנוצרה. 5 שווה ל-3 פלוס b, ולכן b שווה ל-2.", "math_expression": "b = 2" },
            { "verbal_explanation": "שלב 4: כעת נרכיב את המשוואה המלאה בעזרת ה-m הנתון וה-b שמצאנו.", "math_expression": "y = 3x + 2" }
        ],
        "final_answer": "y = 3x + 2",
        "options": ["y = 3x + 5", "y = 3x + 2", "y = x + 3", "y = 3x - 2"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Low",
        "question_text": "מהי משוואת הישר בעל שיפוע <strong>2-</strong> העובר דרך הנקודה <strong>(0, 4)</strong>?",
        "hint": "שימו לב: בנקודה שבה ה-x הוא אפס, ערך ה-y הוא בדיוק נקודת החיתוך עם הציר (המספר b).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהנקודה הנתונה היא נקודת החיתוך עם ציר ה-y כי ה-x הוא 0. לכן המספר 4 הוא ה-b שלנו.", "math_expression": "b = 4" },
            { "verbal_explanation": "שלב 2: נציב את השיפוע הנתון m = -2 ואת b = 4 ישירות לתוך התבנית של משוואת הישר.", "math_expression": "y = -2x + 4" }
        ],
        "final_answer": "y = -2x + 4",
        "options": ["y = -2x + 4", "y = 2x + 4", "y = -2x", "y = 4x - 2"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך הנקודה <strong>(2, 3)</strong> והשיפוע שלו הוא <strong>0.5</strong>.",
        "hint": "הציבו חצי (0.5) במקום m במשוואה הכללית וחשבו בזהירות את ערך ה-b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחה הכללית: x=2, y=3 ו-m=0.5.", "math_expression": "3 = 0.5 * 2 + b" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה. חצי כפול 2 נותן 1.", "math_expression": "3 = 1 + b" },
            { "verbal_explanation": "שלב 3: נחסיר 1 משני האגפים כדי לבודד את b ולגלות את ערכו.", "math_expression": "b = 2" },
            { "verbal_explanation": "שלב 4: נרכיב את משוואת הישר הסופית.", "math_expression": "y = 0.5x + 2" }
        ],
        "final_answer": "y = 0.5x + 2",
        "options": ["y = 0.5x + 3", "y = 0.5x + 2", "y = 2x + 0.5", "y = x + 2"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר ששיפועו <strong>1</strong> והוא עובר דרך הנקודה <strong>(5-, 2)</strong>.",
        "hint": "היזהרו בעת הצבת ערך ה-y שהוא מספר שלילי. סדרו את המשוואה לאט.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את m=1 ואת הנקודה (2, 5-) לתוך התבנית y = mx + b.", "math_expression": "-5 = 1 * 2 + b" },
            { "verbal_explanation": "שלב 2: נפשט את המשוואה: מינוס 5 שווה לשתיים פלוס b.", "math_expression": "-5 = 2 + b" },
            { "verbal_explanation": "שלב 3: נעביר את ה-2 אגף בסימן מינוס. מינוס 5 פחות 2 הם מינוס 7.", "math_expression": "b = -7" },
            { "verbal_explanation": "שלב 4: נרשום את המשוואה המלאה.", "math_expression": "y = x - 7" }
        ],
        "final_answer": "y = x - 7",
        "options": ["y = x - 5", "y = x - 7", "y = x + 7", "y = 2x - 5"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "High",
        "question_text": "ישר חותך את ציר ה-x בנקודה <strong>(4, 0)</strong> והשיפוע שלו הוא <strong>0.25-</strong>. מהי משוואתו?",
        "hint": "השתמשו בנקודה שבה ה-y הוא אפס כדי לחשב כרגיל את המספר החופשי b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את השיפוע m = -0.25 ואת הנקודה (4, 0) במשוואה הכללית.", "math_expression": "0 = -0.25 * 4 + b" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה. מינוס רבע (0.25) כפול 4 נותן מינוס 1.", "math_expression": "0 = -1 + b" },
            { "verbal_explanation": "שלב 3: נעביר את מינוס 1 אגף ונגלה ש-b שווה ל-1 חיובי.", "math_expression": "b = 1" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה הסופית של משוואת הישר.", "math_expression": "y = -0.25x + 1" }
        ],
        "final_answer": "y = -0.25x + 1",
        "options": ["y = -0.25x + 1", "y = -4x + 1", "y = 0.25x - 1", "y = -x + 4"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Low",
        "question_text": "מהי משוואת הישר העובר דרך (2, 8) והוא <strong>מקביל לציר ה-x</strong>?",
        "hint": "ישר שמקביל לציר ה-x הוא אופקי, לכן בעל שיפוע אפס. המשוואה שלו היא תמיד y שווה למספר קבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם הישר מקביל לציר x, זה אומר ששיפועו לא קיים, כלומר m = 0.", "math_expression": "m = 0" },
            { "verbal_explanation": "שלב 2: במצב של שיפוע אפס, אין משמעות ל-x, וערך ה-y של כל הנקודות על הישר חייב להיות זהה לגובה הנקודה הנתונה.", "math_expression": "y = 8" }
        ],
        "final_answer": "y = 8",
        "options": ["x = 2", "y = 8", "y = 2x", "y = 0"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו משוואת ישר עם שיפוע <strong>4</strong> העובר דרך הנקודה <strong>(1-, 1-)</strong>.",
        "hint": "היזהרו עם הצבת שני המינוסים באותה משוואה במקביל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב x = -1, y = -1 ו- m = 4 בתוך הנוסחה y = mx + b.", "math_expression": "-1 = 4 * (-1) + b" },
            { "verbal_explanation": "שלב 2: נחשב את אגף ימין: מינוס 1 שווה למינוס 4 פלוס b.", "math_expression": "-1 = -4 + b" },
            { "verbal_explanation": "שלב 3: נעביר את ה-4 אגף בסימן פלוס ונקבל ש-b שווה ל-3 (מינוס 1 ועוד 4).", "math_expression": "b = 3" },
            { "verbal_explanation": "שלב 4: נרכיב את המשוואה הסופית.", "math_expression": "y = 4x + 3" }
        ],
        "final_answer": "y = 4x + 3",
        "options": ["y = 4x + 3", "y = 4x - 1", "y = 4x - 5", "y = -x + 4"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "High",
        "question_text": "האם הישר <strong>y = 2x + 10</strong> עובר דרך הנקודה <strong>(5, 20)</strong>?",
        "hint": "הציבו x=5 במשוואה ובדקו האם ה-y שמתקבל בחישוב אכן זהה ל-y (20) שנתון בנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע הצבה של ה-x מהנקודה (5) לתוך המשוואה הנתונה.", "math_expression": "y = 2 * 5 + 10" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה: 10 ועוד 10 שווה 20.", "math_expression": "y = 20" },
            { "verbal_explanation": "שלב 3: נשווה את התוצאה לערך ה-y של הנקודה. מכיוון שהם שווים, הוכחנו שהנקודה נמצאת בדיוק על הישר.", "math_expression": "20 = 20" }
        ],
        "final_answer": "כן, הנקודה על הישר.",
        "options": ["כן, הנקודה על הישר.", "לא, היא לא על הישר.", "רק אם נשנה את ה-b", "אי אפשר לחשב זאת"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו משוואת ישר העובר דרך ראשית הצירים ושיפועו <strong>3-</strong>.",
        "hint": "מושג מפתח: ראשית הצירים היא תמיד הנקודה (0,0), מה שאומר שהחיתוך עם ציר ה-y הוא באפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנתונים המיוחדים מהמילים. m = -3, ומכיוון שהוא עובר בראשית (0,0), ערך ה-b הוא אוטומטית 0.", "math_expression": "m = -3 , b = 0" },
            { "verbal_explanation": "שלב 2: נרשום את המשוואה ישירות בתבנית הישר ללא תוספת של b.", "math_expression": "y = -3x" }
        ],
        "final_answer": "y = -3x",
        "options": ["y = 3x", "y = -3x", "y = x - 3", "y = -3"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "High",
        "question_text": "נתון ישר ששיפועו <strong>2</strong>. הוא חותך את ציר ה-y בדיוק באותה נקודה שבה הישר <strong>y = 5x + 7</strong> חותך אותו. מהי משוואתו?",
        "hint": "זכרו: לישרים שחותכים את ציר ה-y באותו מקום יש בדיוק את אותו ערך b. גנבו את ה-b מהמשוואה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ה-b מהישר שניתן כרמז. במשוואה y = 5x + 7, המספר החופשי (ה-b) הוא 7.", "math_expression": "b = 7" },
            { "verbal_explanation": "שלב 2: נשתמש בשיפוע של הישר שלנו (m=2) וב-b שגנבנו מהרמז (b=7) כדי לבנות את המשוואה החדשה והסופית.", "math_expression": "y = 2x + 7" }
        ],
        "final_answer": "y = 2x + 7",
        "options": ["y = 2x + 7", "y = 5x + 2", "y = 2x + 5", "y = 7x + 2"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Low",
        "question_text": "איזו מהנקודות הבאות נמצאת על הישר <strong>y = 4x - 1</strong>?",
        "hint": "הציבו את ה-x של כל אחת מהאפשרויות במשוואה, וגלו באיזו מהן יוצא ה-y התואם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את האפשרות של הנקודה (1, 3). נציב את ה-x שלה, שהוא 1, בתוך המשוואה שלנו.", "math_expression": "y = 4 * 1 - 1 = 3" },
            { "verbal_explanation": "התוצאה שיצאה בחישוב (3) תואמת בדיוק לערך ה-y של הנקודה בזוג המקורי. לכן היא בהכרח נמצאת על הישר.", "math_expression": "3 = 3" }
        ],
        "final_answer": "(1, 3)",
        "options": ["(1, 4)", "(1, 3)", "(0, 1)", "(2, 9)"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו משוואת ישר העובר דרך הנקודה <strong>(4-, 10)</strong> ושיפועו הוא <strong>0</strong>.",
        "hint": "שיפוע 0 אומר שהמשוואה היא קו אופקי לחלוטין. ערך ה-y לא משתנה לעולם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אפשר להציב m=0 בתוך הנוסחה y = mx + b כדי לראות מה קורה.", "math_expression": "-4 = 0 * 10 + b" },
            { "verbal_explanation": "שלב 2: נחשב ונגלה ש-b שווה פשוט למינוס 4 (ערך ה-y בנקודה).", "math_expression": "b = -4" },
            { "verbal_explanation": "שלב 3: נרשום את המשוואה הסופית כפונקציה קבועה.", "math_expression": "y = -4" }
        ],
        "final_answer": "y = -4",
        "options": ["x = 10", "y = -4", "y = 10x - 4", "y = 0"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "High",
        "question_text": "משוואת ישר היא מהצורה <strong>y = mx + 2</strong>. ידוע שהישר עובר דרך הנקודה <strong>(3, 11)</strong>. מהו השיפוע m?",
        "hint": "הפעם ה-b נתון וחסר לכם ה-m. הציבו את ה-x וה-y של הנקודה בתוך המשוואה ופתרו כמערכת משוואות רגילה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע הצבה של הנקודה (3, 11) בתוך משוואת הישר הנתונה.", "math_expression": "11 = m * 3 + 2" },
            { "verbal_explanation": "שלב 2: נבודד את המשתנה מ: נעביר את המספר 2 לאגף השני בסימן חיסור.", "math_expression": "9 = 3m" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 כדי למצוא סופית את ערכו של השיפוע m.", "math_expression": "m = 3" }
        ],
        "final_answer": "3",
        "options": ["2", "3", "4", "1"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "Medium",
        "question_text": "מצאו משוואת ישר עם שיפוע <strong>1-</strong> העובר דרך הנקודה <strong>(5, 5)</strong>.",
        "hint": "הציבו את השיפוע השלילי (m = -1) וחשבו בזהירות את ערכו של b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב m = -1 ואת שיעורי הנקודה (5, 5) במשוואה הכללית.", "math_expression": "5 = -1 * 5 + b" },
            { "verbal_explanation": "שלב 2: נפשט את המשוואה שנוצרה: 5 שווה למינוס חמש פלוס b.", "math_expression": "5 = -5 + b" },
            { "verbal_explanation": "שלב 3: נעביר את ה-5 השמאלי לאגף הנגדי בסימן פלוס ונגלה ש-b שווה ל-10.", "math_expression": "b = 10" },
            { "verbal_explanation": "שלב 4: נרכיב את משוואת הישר.", "math_expression": "y = -x + 10" }
        ],
        "final_answer": "y = -x + 10",
        "options": ["y = -x", "y = -x + 10", "y = x", "y = -x + 5"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "משוואת ישר (נקודה ושיפוע)",
        "difficulty": "High",
        "question_text": "ישר חותך את ציר ה-x בנקודה <strong>(6, 0)</strong> ושיפועו הוא <strong>2/3</strong>. מהי משוואתו?",
        "hint": "אל תפחדו מהשבר! השתמשו בנקודת החיתוך (בה y=0) כדי למצוא את המספר b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים הידועים: x=6, y=0 ו-m=2/3 בתוך הנוסחה למציאת ישר.", "math_expression": "0 = (2/3) * 6 + b" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה המסובכת: לחשב שני שליש מתוך 6 נותן בדיוק 4.", "math_expression": "0 = 4 + b" },
            { "verbal_explanation": "שלב 3: נמצא את b על ידי העברת ה-4 אגף.", "math_expression": "b = -4" },
            { "verbal_explanation": "שלב 4: נרשום את המשוואה הסופית כשהיא מורכבת מהשבר ומה-b.", "math_expression": "y = 2/3x - 4" }
        ],
        "final_answer": "y = 2/3x - 4",
        "options": ["y = (2/3)x - 4", "y = (2/3)x + 4", "y = 6x + (2/3)", "y = x - 4"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 3: משוואת ישר (2 נקודות) (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Low",
        "question_text": "מצאו את משוואת הישר העובר דרך הנקודות <strong>(1, 2)</strong> ו- <strong>(3, 6)</strong>.",
        "hint": "כשנתונות שתי נקודות ואין שיפוע, השלב הראשון והחיוני הוא מציאת השיפוע m בעזרת הנוסחה (הפרש y חלקי הפרש x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קודם כל נחשב את השיפוע (m) על ידי חלוקת הפרש ה-y בהפרש ה-x של שתי הנקודות שקיבלנו.", "math_expression": "m = (6 - 2) / (3 - 1) = 4 / 2 = 2" },
            { "verbal_explanation": "שלב 2: עכשיו נבחר את אחת הנקודות (למשל (1, 2)) ונציב אותה יחד עם השיפוע שמצאנו במשוואה הכללית.", "math_expression": "2 = 2 * 1 + b" },
            { "verbal_explanation": "שלב 3: נפתור למציאת b. נגלה בקלות ש-b שווה לאפס.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 4: נרכיב את המשוואה המלאה לתשובה סופית.", "math_expression": "y = 2x" }
        ],
        "final_answer": "y = 2x",
        "options": ["y = 2x + 2", "y = 2x", "y = x + 2", "y = 4x"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך הנקודות <strong>(2, 5)</strong> ו- <strong>(4, 1)</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100' viewBox='0 0 120 100'><line x1='10' y1='90' x2='110' y2='90' stroke='black' stroke-width='1'/><line x1='10' y1='10' x2='10' y2='90' stroke='black' stroke-width='1'/><circle cx='30' cy='40' r='4' fill='#ef4444'/><circle cx='70' cy='80' r='4' fill='#ef4444'/><line x1='10' y1='20' x2='90' y2='100' stroke='#3b82f6' stroke-width='2' stroke-dasharray='3'/></svg></div>",
        "hint": "שימו לב היטב שהישר יורד משמאל לימין (ה-y קטן), ולכן השיפוע (m) שלו חייב לצאת מספר שלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השיפוע m בעזרת נוסחת המרחקים של שתי הנקודות.", "math_expression": "m = (1 - 5) / (4 - 2) = -4 / 2 = -2" },
            { "verbal_explanation": "שלב 2: נציב את הנקודה (2, 5) והשיפוע הטריי m = -2 בתוך התבנית הבסיסית y = mx + b.", "math_expression": "5 = -2 * 2 + b" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה למציאת b. חמש שווה למינוס ארבע פלוס b. לכן b שווה ל-9.", "math_expression": "b = 9" },
            { "verbal_explanation": "שלב 4: נרשום את המשוואה המלאה שיצרנו.", "math_expression": "y = -2x + 9" }
        ],
        "final_answer": "y = -2x + 9",
        "options": ["y = -2x + 9", "y = 2x + 9", "y = -2x + 1", "y = x - 2"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך הנקודות <strong>(0, 5)</strong> ו- <strong>(2, 5)</strong>.",
        "hint": "הסתכלו על ערכי ה-y בשתי הנקודות. האם הם משתנים? מה זה אומר לכם על נטיית הקו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שערכי ה-y זהים בשתי הנקודות הנתונות (שתיהן נמצאות בגובה 5).", "math_expression": "y1 = 5 , y2 = 5" },
            { "verbal_explanation": "שלב 2: במצב בו ערך ה-y אינו משתנה לעולם, השיפוע m הוא תמיד אפס.", "math_expression": "m = 0" },
            { "verbal_explanation": "שלב 3: ישר עם שיפוע 0 הוא קו אופקי לחלוטין. המשוואה שלו היא פשוט y שווה לערך הגובה הקבוע.", "math_expression": "y = 5" }
        ],
        "final_answer": "y = 5",
        "options": ["x = 0", "y = 5", "y = x + 5", "y = 5x"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "מצאו את משוואת הישר העובר דרך הנקודות <strong>(2-, 1-)</strong> ו- <strong>(4, 2)</strong>.",
        "hint": "היזהרו בחישוב השיפוע כאשר מעורבים מספרים שליליים במונה ובמכנה. זכרו: פחות מינוס הופך לפלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השיפוע m. נחסיר 2 פחות מינוס 1 במונה, ו-4 פחות מינוס 2 במכנה. נשמור על חוקי סימנים.", "math_expression": "m = (2 - (-1)) / (4 - (-2)) = 3 / 6 = 0.5" },
            { "verbal_explanation": "שלב 2: נציב את הנקודה (4, 2) שנוחה יותר (ללא מינוסים) ואת השיפוע 0.5 למציאת ה-b במשוואה.", "math_expression": "2 = 0.5 * 4 + b" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה: 2 שווה ל-2 פלוס b. מכאן ש-b הוא בדיוק אפס.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 4: נכתוב את המשוואה המצומצמת שהתקבלה.", "math_expression": "y = 0.5x" }
        ],
        "final_answer": "y = 0.5x",
        "options": ["y = 0.5x", "y = 2x", "y = 0.5x + 2", "y = -x"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "ישר עובר דרך הנקודות <strong>(3, 0)</strong> ו- <strong>(0, 6-)</strong>. מהי משוואתו?",
        "hint": "אלו הן נקודות החיתוך עם הצירים. השתמשו בנקודה שבה x=0 כדי לקבל את b באופן מיידי ולהקל על עצמכם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כרגיל, ראשית נמצא את השיפוע m בעזרת נוסחת המרחק בין שתי הנקודות.", "math_expression": "m = (-6 - 0) / (0 - 3) = -6 / -3 = 2" },
            { "verbal_explanation": "שלב 2: נזהה את b מתוך הנקודה (0, 6-) שעל ציר ה-y ללא צורך לחשב משוואה.", "math_expression": "b = -6" },
            { "verbal_explanation": "שלב 3: נרכיב מיד את משוואת הישר.", "math_expression": "y = 2x - 6" }
        ],
        "final_answer": "y = 2x - 6",
        "options": ["y = 2x - 6", "y = 2x + 6", "y = -6x + 3", "y = 3x - 6"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Low",
        "question_text": "מהו הצעד הראשון למציאת משוואת ישר העובר דרך הזוג המקרי (1, 4) ו-(3, 10)?",
        "hint": "חשבו על המאפיין הבסיסי ביותר של קו ישר שמגדיר את זווית העלייה או הירידה שלו.",
        "solution_steps": [
            { "verbal_explanation": "כאשר יש לנו שתי נקודות נתונות בשאלה, הצעד הראשוני וההכרחי תמיד הוא חישוב השיפוע (m) שמייצג את נטיית הישר כולו.", "math_expression": "חישוב שיפוע (m)" }
        ],
        "final_answer": "חישוב השיפוע m בעזרת הנוסחה.",
        "options": ["מציאת ה-b", "חישוב השיפוע m.", "סרטוט הגרף במחברת", "בחירת נקודה אקראית"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך <strong>(1, 10)</strong> ו- <strong>(5, 2)</strong>.",
        "hint": "חשבו קודם את השיפוע. שימו לב שה-y במגמת ירידה ככל שה-x עולה, אז השיפוע צפוי להיות שלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חישוב שיפוע m כהפרש גבהים חלקי הפרש מרחקים.", "math_expression": "m = (2 - 10) / (5 - 1) = -8 / 4 = -2" },
            { "verbal_explanation": "שלב 2: נבצע הצבה של הנקודה הראשונה (1, 10) בנוסחה הכללית למציאת b.", "math_expression": "10 = -2 * 1 + b" },
            { "verbal_explanation": "שלב 3: נפתור ונמצא ש-b שווה ל-12.", "math_expression": "b = 12" },
            { "verbal_explanation": "שלב 4: נרשום את משוואת הישר הסופית.", "math_expression": "y = -2x + 12" }
        ],
        "final_answer": "y = -2x + 12",
        "options": ["y = -2x + 12", "y = 2x + 12", "y = -2x + 10", "y = x + 9"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "ישר עובר דרך הנקודות <strong>(3-, 2)</strong> ו- <strong>(6, 1)</strong>. מהו ערך המספר החופשי (b) של הישר?",
        "hint": "מצאו את כל משוואת הישר בשיטה הרגילה והמלאה, ואז בסוף הביטו בערך המספרי של b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא תחילה את השיפוע של הישר בעזרת הנוסחה.", "math_expression": "m = (1 - (-3)) / (6 - 2) = 4 / 4 = 1" },
            { "verbal_explanation": "שלב 2: נציב את הנקודה העליונה (6, 1) ואת השיפוע 1 שקיבלנו לתוך התבנית.", "math_expression": "1 = 1 * 6 + b" },
            { "verbal_explanation": "שלב 3: נפתור: 1 שווה 6 פלוס b. מכאן נגזר ש-b שווה למינוס 5.", "math_expression": "b = -5" }
        ],
        "final_answer": "-5",
        "options": ["1", "-5", "5", "0"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מהי משוואת הישר העובר דרך הנקודות <strong>(4, 3)</strong> ו- <strong>(4, 7)</strong>?",
        "hint": "הסתכלו היטב על ערכי ה-x. מה קורה כשמנסים לחשב שיפוע כשה-x כלל לא משתנה בין נקודה לנקודה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה מיד שערכי ה-x זהים בשתי הנקודות (הם שניהם עומדים על קו רוחב 4).", "math_expression": "x1 = 4 , x2 = 4" },
            { "verbal_explanation": "שלב 2: אם ננסה לחשב שיפוע לפי הנוסחה, נוביל לחלוקה באפס, שזה אסור. לכן מדובר בישר אנכי לחלוטין.", "math_expression": "ישר אנכי" },
            { "verbal_explanation": "שלב 3: בישר אנכי המשוואה לא תלויה ב-y, אלא היא תמיד x שווה לערך הקבוע.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4",
        "options": ["y = 4", "x = 4", "y = x", "אין ישר כזה בנמצא"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Low",
        "question_text": "האם הנקודות <strong>(0, 0)</strong>, <strong>(1, 4)</strong> ו- <strong>(2, 8)</strong> נמצאות בדיוק על אותו קו ישר אחד?",
        "hint": "חשבו את השיפוע בין שני הזוגות הראשונים והשוו אותו לשיפוע שיוצא בבדיקה של שני הזוגות האחרונים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב שיפוע בסיסי בין הזוג הראשון (0,0) ל-(1,4).", "math_expression": "m1 = (4 - 0) / (1 - 0) = 4" },
            { "verbal_explanation": "שלב 2: נחשב שיפוע בין הזוג השני ברשימה (1,4) ל-(2,8).", "math_expression": "m2 = (8 - 4) / (2 - 1) = 4" },
            { "verbal_explanation": "שלב 3: מכיוון שהשיפועים של חלקי הגרף הללו זהים לחלוטין, מוכח שהנקודות יושבות על אותו ישר בדיוק.", "math_expression": "4 = 4" }
        ],
        "final_answer": "כן",
        "options": ["כן", "לא", "רק שתיים מהן על הישר", "אי אפשר לדעת מראש"],
        "correctAnswer": 0
    },
    {
        "id": 41,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "מצאו משוואת ישר החותך את ציר ה-x בנקודה <strong>3</strong> ואת ציר ה-y בנקודה <strong>9</strong>.",
        "hint": "הפכו את הנתונים המילוליים לנקודות אמיתיות במערכת הצירים: (3, 0) ו-(0, 9).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר נקודות מתמטיות מדויקות על סמך הטקסט: (3, 0) ו-(0, 9).", "math_expression": "x1=3, y1=0 | x2=0, y2=9" },
            { "verbal_explanation": "שלב 2: נחשב שיפוע m כנהוג מול שתי נקודות.", "math_expression": "m = (9 - 0) / (0 - 3) = 9 / -3 = -3" },
            { "verbal_explanation": "שלב 3: ה-b כבר נתון לנו בבירור מהחיתוך עם ציר y.", "math_expression": "b = 9" },
            { "verbal_explanation": "שלב 4: נרשום את משוואת הישר בשלמותה.", "math_expression": "y = -3x + 9" }
        ],
        "final_answer": "y = -3x + 9",
        "options": ["y = -3x + 9", "y = 3x + 9", "y = 9x + 3", "y = -3x"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מצאו את משוואת הישר העובר דרך <strong>(5, 5)</strong> ו- <strong>(10, 10)</strong>.",
        "hint": "שימו לב לקשר הישיר והפשוט בין ערכי ה-x לערכי ה-y בשתי הנקודות גם יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא שיפוע (הוא חייב להיות 1 לפי המבנה הזה).", "math_expression": "m = (10 - 5) / (10 - 5) = 1" },
            { "verbal_explanation": "שלב 2: נציב במשוואה כדי למצוא את חיתוך ציר ה-y שיהיה גם כן 0.", "math_expression": "5 = 1 * 5 + b -> b = 0" },
            { "verbal_explanation": "שלב 3: המשוואה המייצגת היא זהות מושלמת y = x.", "math_expression": "y = x" }
        ],
        "final_answer": "y = x",
        "options": ["y = x", "y = -x", "y = 10", "y = 0"],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "ישר עובר דרך <strong>(2, 7)</strong> ודרך נקודה נוספת שבה x=4. אם שיפועו נתון מראש כ-3, מהי משוואתו?",
        "hint": "למעשה, יש לכם כבר נקודה אחת מלאה ושיפוע נתון. המידע על הנקודה השנייה החסרה הוא הסחה שמיועדת לבלבל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בנתון האמיתי החשוב (m=3) ובנקודה השלמה (2, 7) כדי למצוא את b.", "math_expression": "7 = 3 * 2 + b" },
            { "verbal_explanation": "שלב 2: נמצא בחישוב קצר ש-b שווה ל-1.", "math_expression": "b = 1" },
            { "verbal_explanation": "שלב 3: נרשום את המשוואה המלאה ונתעלם משאר הנתונים העודפים.", "math_expression": "y = 3x + 1" }
        ],
        "final_answer": "y = 3x + 1",
        "options": ["y = 3x + 1", "y = 3x + 7", "y = 2x + 3", "y = x + 1"],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "Medium",
        "question_text": "מצאו משוואת ישר העובר דרך הנקודות <strong>(1-, 5)</strong> ו- <strong>(1-, 10-)</strong>.",
        "hint": "הסתכלו בעיון על ערכי ה-x. הם זהים! מה המסקנה על אופי הישר הזה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שערכי ה-x בשתי הנקודות הם בהכרח מינוס 1 ללא שינוי, מדובר בישר אנכי לגמרי.", "math_expression": "x = -1" }
        ],
        "final_answer": "x = -1",
        "options": ["y = -1", "x = -1", "y = x", "y = 0"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "משוואת ישר (2 נקודות)",
        "difficulty": "High",
        "question_text": "מצאו את משוואת הישר העובר דרך <strong>(2, 4)</strong> ושיפועו זהה בדיוק לשיפוע הישר העובר דרך <strong>(0, 0)</strong> ו- <strong>(1, 3)</strong>.",
        "hint": "חישבו קודם כל את השיפוע מהזוג השני והמשני של הנקודות, ואז השתמשו בתוצאה הזו כדי לבנות את המשוואה האמיתית המבוקשת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת השיפוע המשותף (m) מהזוג השני.", "math_expression": "m = (3 - 0) / (1 - 0) = 3" },
            { "verbal_explanation": "שלב 2: הצבת הנקודה המקורית שלנו (2, 4) יחד עם השיפוע 3 בתוך משוואת התבנית y = mx + b.", "math_expression": "4 = 3 * 2 + b" },
            { "verbal_explanation": "שלב 3: מציאת b בחילוץ מהיר של המשוואה הקטנה.", "math_expression": "b = -2" },
            { "verbal_explanation": "שלב 4: כתיבת התוצאה הסופית והנקייה.", "math_expression": "y = 3x - 2" }
        ],
        "final_answer": "y = 3x - 2",
        "options": ["y = 3x - 2", "y = 3x + 2", "y = 2x - 3", "y = x + 1"],
        "correctAnswer": 0
    },,
    // ==============================================================
    // --- תת נושא 4: מצב הדדי בין ישרים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Low",
        "question_text": "נתונים שני ישרים: <strong>y = 2x + 3</strong> ו- <strong>y = 2x + 7</strong>. מהו המצב ההדדי ביניהם?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='80' viewBox='0 0 120 80'><line x1='10' y1='30' x2='110' y2='30' stroke='#3b82f6' stroke-width='2'/><line x1='10' y1='60' x2='110' y2='60' stroke='#ef4444' stroke-width='2'/></svg></div>",
        "hint": "הביטו בשיפועים (המקדמים של x). אם הם זהים לחלוטין אך המספר החופשי (b) שונה, מה זה אומר על נטיית הישרים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע (m) של הישר הראשון. במשוואה y = 2x + 3 השיפוע הוא 2.", "math_expression": "m1 = 2" },
            { "verbal_explanation": "שלב 2: נזהה את השיפוע (m) של הישר השני. במשוואה y = 2x + 7 השיפוע הוא גם 2.", "math_expression": "m2 = 2" },
            { "verbal_explanation": "שלב 3: מכיוון שהשיפועים שווים (2 = 2) אך נקודות החיתוך עם ציר y שונות (3 לעומת 7), הישרים מקבילים ואינם יכולים להיפגש.", "math_expression": "m1 = m2 , b1 ≠ b2" }
        ],
        "final_answer": "הישרים מקבילים זה לזה.",
        "options": ["הישרים מקבילים זה לזה.", "הישרים נחתכים.", "הישרים מתלכדים.", "הישרים מאונכים."],
        "correctAnswer": 0
    },
    {
        "id": 47,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Low",
        "question_text": "נתונים הישרים: <strong>y = 4x - 1</strong> ו- <strong>y = 5x - 1</strong>. מהו המצב ההדדי ביניהם?",
        "hint": "האם לישרים יש את אותו שיפוע? אם קצב העלייה שלהם שונה, הם חייבים להיפגש מתישהו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפועים. הישר הראשון הוא בעל שיפוע 4 והשני בעל שיפוע 5.", "math_expression": "4 ≠ 5" },
            { "verbal_explanation": "שלב 2: כאשר השיפועים שונים (m1 ≠ m2), הישרים אינם מקבילים ולכן הם בהכרח יחתכו זה את זה בנקודה אחת יחידה במרחב.", "math_expression": "נחתכים" }
        ],
        "final_answer": "הישרים נחתכים בנקודה אחת.",
        "options": ["הישרים מקבילים.", "הישרים נחתכים בנקודה אחת.", "הישרים מתלכדים.", "אף אחד מהם."],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Medium",
        "question_text": "מצאו את נקודת המפגש של הישרים <strong>y = x + 4</strong> ו- <strong>y = -x + 10</strong>.",
        "hint": "כדי למצוא נקודת חיתוך בין שני ישרים, עלינו להשוות בין שני האגפים הימניים של המשוואות שלהם ולמצוא את ה-x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה בין הביטויים של y משתי המשוואות.", "math_expression": "x + 4 = -x + 10" },
            { "verbal_explanation": "שלב 2: נעביר את ה-x (בסימן מינוס) מאגף ימין לאגף שמאל (בפלוס), ואת ה-4 שמאלה לימין בחיסור.", "math_expression": "2x = 6" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 ונקבל את ערך ה-x של נקודת המפגש.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 4: נציב x=3 באחת המשוואות (למשל בראשונה) למציאת ה-y התואם.", "math_expression": "y = 3 + 4 = 7" }
        ],
        "final_answer": "(3, 7)",
        "options": ["(3, 7)", "(7, 3)", "(2, 6)", "(0, 4)"],
        "correctAnswer": 0
    },
    {
        "id": 49,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Medium",
        "question_text": "נתון הישר <strong>y = 6x - 2</strong>. מהי משוואת הישר ה<strong>מקביל</strong> לו ועובר בדיוק בראשית הצירים?",
        "hint": "לישרים מקבילים יש בדיוק את אותו שיפוע. ראשית הצירים היא תמיד הנקודה (0,0).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע של הישר הנתון. המקדם של x הוא 6.", "math_expression": "m = 6" },
            { "verbal_explanation": "שלב 2: מכיוון שהישרים מקבילים, גם לישר החדש שנבנה יהיה שיפוע 6.", "math_expression": "m_חדש = 6" },
            { "verbal_explanation": "שלב 3: נאמר שהישר עובר בראשית הצירים (0,0), לכן ערך ה-b שלו הוא אוטומטית אפס.", "math_expression": "b = 0" },
            { "verbal_explanation": "שלב 4: נרכיב את משוואת הישר החדשה.", "math_expression": "y = 6x" }
        ],
        "final_answer": "y = 6x",
        "options": ["y = 6x", "y = -6x", "y = x / 6", "y = 6"],
        "correctAnswer": 0
    },
    {
        "id": 50,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "נתונים הישרים: <strong>y = 3x + 1</strong> ו- <strong>3y = 9x + 3</strong>. מהו המצב ההדדי ביניהם?",
        "hint": "המשוואה השנייה לא מסודרת. נסו לחלק את כולה ב-3 כדי להביא אותה לצורה הסטנדרטית של y = mx + b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את כל איברי המשוואה השנייה ב-3 כדי לבודד את y.", "math_expression": "3y/3 = 9x/3 + 3/3" },
            { "verbal_explanation": "שלב 2: נרשום את המשוואה המפושטת שקיבלנו.", "math_expression": "y = 3x + 1" },
            { "verbal_explanation": "שלב 3: נשווה למשוואה הראשונה ונגלה ששתי המשוואות זהות לחלוטין אחד לאחד.", "math_expression": "ישר א = ישר ב" },
            { "verbal_explanation": "שלב 4: כאשר המשוואות זהות לחלוטין, הישרים מונחים בדיוק אחד על השני לכל אורכם.", "math_expression": "מתלכדים" }
        ],
        "final_answer": "הישרים מתלכדים.",
        "options": ["הישרים מקבילים.", "הישרים נחתכים.", "הישרים מתלכדים.", "הישרים מאונכים."],
        "correctAnswer": 2
    },
    {
        "id": 51,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "עבור איזה ערך של <strong>k</strong> הישרים <strong>y = kx + 8</strong> ו- <strong>y = 7x - 2</strong> יהיו בהכרח מקבילים?",
        "hint": "ישרים מקבילים חייבים להיות בעלי שיפוע (m) זהה בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את השיפוע של הישר השני במערכת (7).", "math_expression": "m2 = 7" },
            { "verbal_explanation": "שלב 2: נזהה שהשיפוע של הישר הראשון מיוצג על ידי האות k.", "math_expression": "m1 = k" },
            { "verbal_explanation": "שלב 3: כדי שהם יהיו מקבילים, חובה ששני השיפועים יהיו שווים זה לזה.", "math_expression": "k = 7" }
        ],
        "final_answer": "7",
        "options": ["8", "7", "-2", "0"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Medium",
        "question_text": "האם הישרים <strong>y = 2x + 10</strong> ו- <strong>y = -3x + 10</strong> נפגשים על ציר ה-y?",
        "hint": "בדקו מהו ה-b (נקודת החיתוך עם ציר y) של כל משוואה והשוו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את נקודת החיתוך b במשוואה הראשונה (המספר החופשי הוא 10).", "math_expression": "b1 = 10" },
            { "verbal_explanation": "שלב 2: נזהה את נקודת החיתוך b במשוואה השנייה (גם שם המספר החופשי הוא 10).", "math_expression": "b2 = 10" },
            { "verbal_explanation": "שלב 3: מכיוון ששני הישרים חותכים את ציר ה-y בדיוק באותו גובה, הם בוודאות נפגשים בנקודה (0, 10).", "math_explanation": "נכון" }
        ],
        "final_answer": "כן, הם נפגשים על ציר ה-y.",
        "options": ["כן, הם נפגשים על ציר ה-y.", "לא, הם לא נפגשים.", "רק אם השיפועים שווים", "אי אפשר לדעת מראש"],
        "correctAnswer": 0
    },
    {
        "id": 53,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Low",
        "question_text": "כמה נקודות חיתוך יכולות להיות לכל היותר לשני קווים ישרים שונים (שאינם מתלכדים)?",
        "hint": "דמיינו שני סרגלים ישרים וארוכים המונחים על שולחן ונחתכים.",
        "solution_steps": [
            { "verbal_explanation": "במישור הדו-מימדי, שני קווים ישרים שונים יכולים לחצות אחד את השני פעם אחת בלבד. לאחר שהם מצטלבים, הם הולכים ומתרחקים זה מזה לעד.", "math_expression": "נקודת חיתוך אחת בלבד" }
        ],
        "final_answer": "נקודה אחת",
        "options": ["0", "נקודה אחת", "2", "אינסוף"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "מצאו את נקודת החיתוך של הישר <strong>y = 3x - 12</strong> עם ציר ה-x.",
        "hint": "על ציר ה-x, ערך ה-y הוא תמיד 0. הציבו y=0 בתוך המשוואה ופתרו למציאת x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למצוא חיתוך עם ציר ה-x, נציב 0 במקום האות y במשוואה.", "math_expression": "0 = 3x - 12" },
            { "verbal_explanation": "שלב 2: נעביר את המספר מינוס 12 לאגף הנגדי בסימן פלוס.", "math_expression": "12 = 3x" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 למציאת x.", "math_expression": "x = 4" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה כזוג סדור של נקודה (x,y).", "math_expression": "(4, 0)" }
        ],
        "final_answer": "(4, 0)",
        "options": ["(0, -12)", "(4, 0)", "(3, 0)", "(12, 0)"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "נתון הישר <strong>y = -2x + 8</strong>. מצאו משוואת ישר אחר אשר <strong>מקביל</strong> לו ועובר דרך הנקודה <strong>(2, 10)</strong>.",
        "hint": "השתמשו בשיפוע של הישר הנתון (2-) ובנקודה החדשה כדי למצוא את המספר b של הישר החדש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת השיפוע. מכיוון שהישרים מתבקשים להיות מקבילים, לוקחים את השיפוע המקורי.", "math_expression": "m = -2" },
            { "verbal_explanation": "שלב 2: הצבת הנקודה (2, 10) והשיפוע -2 בתוך המשוואה y = mx + b.", "math_expression": "10 = -2 * 2 + b" },
            { "verbal_explanation": "שלב 3: חישוב קצר: 10 שווה למינוס 4 פלוס b. מכאן ש-b שווה ל-14.", "math_expression": "14 = b" },
            { "verbal_explanation": "שלב 4: הרכבת המשוואה החדשה והסופית.", "math_expression": "y = -2x + 14" }
        ],
        "final_answer": "y = -2x + 14",
        "options": ["y = -2x + 10", "y = -2x + 14", "y = 2x + 14", "y = -2x + 6"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Medium",
        "question_text": "האם הישרים <strong>y = 5</strong> ו- <strong>x = 3</strong> נחתכים?",
        "hint": "ישר y=5 הוא קו אופקי לחלוטין. ישר x=3 הוא קו אנכי לחלוטין. איפה הם ייפגשו במרחב?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הישר הראשון מחייב ש-y יהיה תמיד 5, ללא קשר ל-x.", "math_expression": "y = 5" },
            { "verbal_explanation": "שלב 2: הישר השני מחייב ש-x יהיה תמיד 3, ללא קשר ל-y.", "math_expression": "x = 3" },
            { "verbal_explanation": "שלב 3: הנקודה היחידה בעולם שמקיימת בו-זמנית את שתי הדרישות הללו היא הנקודה ההצטלבות (3, 5).", "math_expression": "(3, 5)" }
        ],
        "final_answer": "כן, בנקודה (3, 5).",
        "options": ["כן, בנקודה (3, 5).", "לא, הם לא נחתכים", "הם מקבילים", "הם מתלכדים"],
        "correctAnswer": 0
    },
    {
        "id": 57,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "נתון הישר y = 4x + 2. האם הישר שעובר דרך הנקודות (1, 10) ו-(2, 14) <strong>מקביל</strong> אליו?",
        "hint": "חשבו את השיפוע בין שתי הנקודות הללו והשוו אותו לשיפוע של הישר הנתון (4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השיפוע m העובר בין (1, 10) ו-(2, 14).", "math_expression": "m = (14 - 10) / (2 - 1) = 4 / 1 = 4" },
            { "verbal_explanation": "שלב 2: נשווה לשיפוע הישר הנתון לנו: 4 שווה ל-4. השיפועים אכן זהים.", "math_expression": "4 = 4" },
            { "verbal_explanation": "שלב 3: כעת עלינו לוודא שאלו אינם ישרים מתלכדים (אותו ישר בדיוק). נציב את הנקודה (1, 10) ב-y = 4x + 2. התוצאה היא 6 ולא 10, לכן אלו ישרים שונים והם מקבילים.", "math_explanation": "הישרים מקבילים באמת" }
        ],
        "final_answer": "כן, הם מקבילים.",
        "options": ["כן, הם מקבילים.", "לא, הם נחתכים.", "הם מתלכדים.", "אי אפשר לדעת."],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Low",
        "question_text": "איזה מצב הדדי מהבאים <strong>לא קיים</strong> עבור שני קווים ישרים במישור?",
        "hint": "חשבו על האפשרויות הגאומטריות המוגבלות של שני ישרים.",
        "solution_steps": [
            { "verbal_explanation": "בגיאומטריה, שני קווים ישרים יכולים להיפגש פעם אחת בדיוק (חיתוך), לא להיפגש בכלל (מקבילים) או להיפגש בכל נקודה אפשרית (מתלכדים).", "math_expression": "3 מצבים בלבד" },
            { "verbal_explanation": "אין שום תרחיש שבו הם מתעקמים ונפגשים בדיוק פעמיים.", "math_expression": "מפגש כפול אינו אפשרי" }
        ],
        "final_answer": "מפגש בשתי נקודות בדיוק.",
        "options": ["הקבלה", "חיתוך", "התלכדות", "מפגש בשתי נקודות בדיוק."],
        "correctAnswer": 3
    },
    {
        "id": 59,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "Medium",
        "question_text": "מהי נקודת החיתוך של הישר <strong>y = 2x - 10</strong> עם ציר ה-y?",
        "hint": "בנקודת חיתוך עם ציר ה-y, ערך ה-x הוא תמיד 0. אתם יכולים פשוט להסתכל על המספר החופשי b.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במשוואה מהצורה y = mx + b, המספר החופשי (b) מייצג באופן ישיר את גובה החיתוך עם ציר ה-y.", "math_expression": "b = -10" },
            { "verbal_explanation": "שלב 2: הנקודה המלאה תמיד תהיה מהצורה (0, b).", "math_expression": "(0, -10)" }
        ],
        "final_answer": "(0, -10)",
        "options": ["(0, -10)", "(0, 10)", "(5, 0)", "(0, 0)"],
        "correctAnswer": 0
    },
    {
        "id": 60,
        "subTopic": "מצב הדדי בין ישרים",
        "difficulty": "High",
        "question_text": "שני ישרים מקבילים חותכים את ציר ה-y. הראשון בנקודה <strong>(0, 5)</strong> והשני בנקודה <strong>(0, 3-)</strong>. מהו המרחק האנכי ביניהם לאורך הציר?",
        "hint": "חשבו על ההפרש (המרחק המוחלט) בין שני ערכי הגובה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הישר הראשון חותך בגובה חיובי 5. הישר השני חותך בגובה שלילי של מינוס 3.", "math_expression": "b1 = 5, b2 = -3" },
            { "verbal_explanation": "שלב 2: המרחק ביניהם מחושב על ידי חיסור הגובה הנמוך מהגבוה: 5 פחות מינוס 3.", "math_expression": "5 - (-3) = 8" }
        ],
        "final_answer": "8 יחידות.",
        "options": ["2 יחידות", "8 יחידות.", "5 יחידות", "3 יחידות"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 5: פונקציה קווית למקוטעין (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Low",
        "question_text": "מהי <strong>פונקציה קווית למקוטעין</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100' viewBox='0 0 150 100'><line x1='10' y1='90' x2='50' y2='50' stroke='#3b82f6' stroke-width='3'/><line x1='50' y1='50' x2='100' y2='50' stroke='#ef4444' stroke-width='3'/><line x1='100' y1='50' x2='140' y2='10' stroke='#22c55e' stroke-width='3'/></svg></div>",
        "hint": "הסתכלו על האיור. האם זהו קו ישר אחד ארוך וחלק או אוסף של כמה קטעים שונים המחוברים זה לזה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהגרף באיור אינו קו רציף אחד בעל נטייה אחידה, אלא מורכב מכמה קטעים שונים של קווים ישרים המחוברים זה לזה.", "math_expression": "חיבור של קטעים" },
            { "verbal_explanation": "שלב 2: נבין שבכל קטע (תחום) של x, הפונקציה מתנהגת לפי חוקיות אחרת - לפעמים עולה, לפעמים נחה, לפעמים משנה זווית.", "math_expression": "כלל שונה לכל תחום" }
        ],
        "final_answer": "פונקציה המורכבת מכמה קטעי קווים ישרים המחוברים זה לזה.",
        "options": ["פונקציה שהיא קו ישר אחד", "פונקציה המורכבת מכמה קטעים ישרים.", "פונקציה שהיא תמיד עקומה", "פונקציה ללא כל שיפוע"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Low",
        "question_text": "גרף מתאר מסע של רוכב אופניים (מרחק כפונקציה של זמן). ב-2 השעות הראשונות הוא רכב במהירות קבועה. לאחר מכן הוא <strong>עצר למנוחה</strong> בבית קפה למשך שעה. איך תיראה ה<strong>עצירה</strong> בגרף?",
        "hint": "בזמן מנוחה, הזמן (ציר x) ממשיך להתקדם כרגיל אך המרחק (ציר y) לא משתנה ונשאר קבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין מה קורה לערך ה-y (המרחק) בזמן עצירה. מכיוון שהוא לא מתקדם, המרחק נשאר קבוע לאורך זמן המנוחה.", "math_expression": "y = קבוע" },
            { "verbal_explanation": "שלב 2: קו במערכת צירים שבו ערך ה-y אינו משתנה לעולם הוא קו אופקי המקביל לציר ה-x.", "math_expression": "קו אופקי (שיפוע 0)" }
        ],
        "final_answer": "כקו אופקי המקביל לציר הזמן (ציר x).",
        "options": ["כקו עולה בזווית חדה", "כקו יורד מהר למטה", "כקו אופקי המקביל לציר הזמן (ציר x).", "כנקודה בודדת בלבד"],
        "correctAnswer": 2
    },
    {
        "id": 63,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "מכונית נסעה 100 ק\"מ במשך 2 שעות, עצרה למנוחה במשך שעה, ואז המשיכה ונסעה עוד 50 ק\"מ במשך שעה אחת. מהי <strong>המהירות הממוצעת</strong> של המכונית לכל אורך המסע?",
        "hint": "מהירות ממוצעת מחושבת על ידי חיבור כל המרחק (סה\"כ קילומטרים) וחלוקתו בסך כל הזמן (כולל זמני העצירות!).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל המרחק הכולל שעברה המכונית בקטעי הנסיעה השונים.", "math_expression": "100 + 50 = 150 קילומטר" },
            { "verbal_explanation": "שלב 2: נחשב את סך כל הזמן שעבר מתחילת הנסיעה ועד סופה. אנו חייבים לכלול גם את שעת העצירה.", "math_expression": "2 + 1 + 1 = 4 שעות" },
            { "verbal_explanation": "שלב 3: נחלק את סך המרחק בסך הזמן לקבלת המהירות הממוצעת הכוללת.", "math_expression": "150 / 4 = 37.5 קמ\"ש" }
        ],
        "final_answer": "37.5 קמ\"ש",
        "options": ["50 קמ\"ש", "37.5 קמ\"ש", "150 קמ\"ש", "40 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "בגרף למקוטעין, קטע א' עובר בין (0,0) ל-(2,10) וקטע ב' עובר בין <strong>(2, 10)</strong> ל- <strong>(5, 10)</strong>. מהו ה<strong>שיפוע</strong> של קטע ב'?",
        "hint": "הביטו היטב בערכי ה-y של קטע ב'. האם הם משתנים או נשארים זהים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את נקודות הקצה של קטע ב': הנקודה ההתחלתית היא (2, 10) והסופית (5, 10).", "math_expression": "(2,10) , (5,10)" },
            { "verbal_explanation": "שלב 2: נחשב שיפוע לפי הנוסחה. נראה שהפרש הגבהים (y) במונה הוא אפס.", "math_expression": "m = (10 - 10) / (5 - 2) = 0 / 3" },
            { "verbal_explanation": "שלב 3: חלוקת אפס בכל מספר חיובי נותנת אפס. זהו קטע המייצג עצירה או מנוחה.", "math_expression": "m = 0" }
        ],
        "final_answer": "0",
        "options": ["5", "2", "0", "10"],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "מיכל מים התמלא בקצב קבוע של 2 ליטרים לדקה במשך 5 דקות. מיד לאחר מכן פתחו את פקק הריקון, והמים התרוקנו בקצב של 5 ליטרים לדקה עד שהמיכל התרוקן לגמרי. כמה זמן ארך תהליך ה<strong>התרוקנות</strong>?",
        "hint": "חשבו קודם כל כמה ליטרים של מים היו במיכל בשיא המילוי (בסוף 5 הדקות הראשונות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את כמות המים המקסימלית שהצטברה במיכל (קצב המילוי כפול הזמן שלקח).", "math_expression": "2 * 5 = 10 ליטרים" },
            { "verbal_explanation": "שלב 2: כעת נבדוק כמה זמן לוקח למיכל מלא ב-10 ליטרים להתרוקן לגמרי, אם קצב היציאה הוא 5 ליטרים בכל דקה.", "math_expression": "10 / 5 = 2 דקות" }
        ],
        "final_answer": "2 דקות",
        "options": ["5 דקות", "2 דקות", "10 דקות", "1 דקה"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "מה ניתן להבין מקטע בגרף שבו ה<strong>שיפוע הוא שלילי</strong> (הקו יורד), אם הגרף מתאר 'מרחק מהבית כפונקציה של זמן'?",
        "hint": "שיפוע שלילי אומר שערך ה-y (המרחק הפיזי מהבית) הולך וקטן ככל שהזמן עובר קדימה.",
        "solution_steps": [
            { "verbal_explanation": "בגרף של מרחק, שיפוע חיובי (עלייה) אומר שהאדם מתרחק מנקודת המוצא. שיפוע שלילי אומר שהמרחק קטן.", "math_expression": "y קטן" },
            { "verbal_explanation": "הקטנת המרחק מהבית פירושה הפשוט הוא שהאובייקט הסתובב והוא נמצא בדרך חזרה לכיוון נקודת ההתחלה.", "math_expression": "חזרה הביתה" }
        ],
        "final_answer": "שהאובייקט חוזר לכיוון נקודת המוצא (הבית).",
        "options": ["הוא נוסע מהר יותר", "הוא עוצר במקום", "הוא חוזר לכיוון הבית.", "הוא מתרחק ללא הפסקה"],
        "correctAnswer": 2
    },
    {
        "id": 67,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "פונקציה למקוטעין מוגדרת בעזרת שני כללים: עבור x הנמצא בין 0 ל-3, הכלל הוא <strong>y = 2x</strong>. עבור x שגדול מ-3, הכלל הוא <strong>y = 6</strong>. מהו ערך הפונקציה (y) עבור <strong>x = 5</strong>?",
        "hint": "הסתכלו היטב על התנאים. בדקו לאיזה 'מקטע' (תחום של x) שייך המספר 5 שלנו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק היכן נופל ה-x שלנו (5). המספר 5 גדול מ-3, לכן הוא שייך בוודאות למקטע השני של הכללים.", "math_expression": "5 > 3" },
            { "verbal_explanation": "שלב 2: במקטע השני נאמר באופן פשוט שערך ה-y הוא תמיד 6, ללא שום קשר לערך המדויק של ה-x.", "math_expression": "y = 6" }
        ],
        "final_answer": "6",
        "options": ["10", "6", "5", "0"],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "נתון גרף מסע המורכב משני קטעי נסיעה. קטע א' הוא בעל שיפוע 40 וקטע ב' הוא בעל שיפוע 80. באיזה קטע מהירות הנסיעה הייתה <strong>גבוהה יותר</strong>?",
        "hint": "חשוב לזכור שבגרף של מרחק-זמן, השיפוע (הנטייה) של הקו מייצג במדויק את המהירות. קו תלול יותר = מהיר יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין ששיפוע גבוה ותלול יותר בגרף מסוג מרחק-זמן מעיד ישירות על קצב התקדמות (מהירות) מהיר יותר.", "math_expression": "שיפוע = מהירות" },
            { "verbal_explanation": "שלב 2: נשווה בין המספרים שניתנו: 80 גדול כפליים מ-40, לכן בקטע ב' המהירות הייתה גבוהה יותר בצורה ניכרת.", "math_expression": "80 > 40" }
        ],
        "final_answer": "בקטע ב'.",
        "options": ["בקטע א'", "בקטע ב'.", "המהירות הייתה זהה", "אי אפשר להסיק מהשיפוע"],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Low",
        "question_text": "איך נקראת הנקודה שבה הפונקציה עוברת ממקטע אחד למקטע אחר (הנקודה בה הקו נשבר)?",
        "hint": "חשבו על הנקודה שבה התחומים מתחברים ומשנים את כיוונם.",
        "solution_steps": [
            { "verbal_explanation": "הנקודה המדויקת שבה מסתיים תחום התנהגות אחד ומתחיל תחום חדש של הפונקציה (למשל מנסיעה לעצירה) נקראת לרוב נקודת החיבור או נקודת התפר.", "math_expression": "נקודת חיבור/תפר" }
        ],
        "final_answer": "נקודת חיבור (או נקודת תפר).",
        "options": ["נקודת אפס", "נקודת חיתוך עם הצירים", "נקודת חיבור.", "נקודת שיא מקסימלית"],
        "correctAnswer": 2
    },
    {
        "id": 70,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "מטוס טס במשך שעה בגובה שיוט של 10,000 מטר. לאחר מכן, הוא הנמיך במשך חצי שעה (0.5) עד שהגיע לגובה של 4,000 מטר. מה היה <strong>קצב ההנמכה</strong> של המטוס (מחושב במטרים לשעה)?",
        "hint": "חשבו קודם את הפרש הגובה הכולל (כמה ירד) ואז חלקו אותו בזמן המדויק של ההנמכה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא בכמה מטרים המטוס ירד בפועל משיא הגובה. נחסיר: 10,000 פחות 4,000.", "math_expression": "10,000 - 4,000 = 6,000 מטר" },
            { "verbal_explanation": "שלב 2: נזהה את הזמן שבו התבצעה הירידה עצמה. הנתון אומר - חצי שעה.", "math_expression": "0.5 שעות" },
            { "verbal_explanation": "שלב 3: נחלק את המרחק שירד בזמן כדי לקבל את הקצב השעתי.", "math_expression": "6,000 / 0.5 = 12,000" }
        ],
        "final_answer": "12,000 מטרים לשעה",
        "options": ["6,000 מטרים", "12,000 מטרים לשעה", "3,000 מטרים", "4,000 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "בגרף המורכב משני קטעים, נקודת החיבור בין הקטעים נמצאת ב- (4, 10). משוואת קטע א' (שמתחבר אליה) היא <strong>y = 2.5x</strong>. האם הפונקציה אכן רציפה בנקודת החיבור?",
        "hint": "הציבו x=4 בתוך המשוואה של קטע א' ובדקו האם ה-y שיוצא הוא אכן 10 כמו בנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי לוודא רציפות, נציב את ערך ה-x של נקודת החיבור (4) בתוך משוואת המקטע הראשון.", "math_expression": "y = 2.5 * 4" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה: 2.5 כפול 4 הם בדיוק 10.", "math_expression": "y = 10" },
            { "verbal_explanation": "שלב 3: מכיוון שערך ה-y שחישבנו זהה בדיוק לערך ה-y של נקודת החיבור המשותפת, הפונקציה מתחברת היטב והיא רציפה לחלוטין (אין 'קפיצה' או נתק בגרף).", "math_expression": "10 = 10" }
        ],
        "final_answer": "כן, היא רציפה.",
        "options": ["כן, היא רציפה.", "לא, יש בה קפיצה.", "רק אם נשנה את השיפוע", "אי אפשר לדעת ללא קטע ב'"],
        "correctAnswer": 0
    },
    {
        "id": 72,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "ספורטאי רץ מרחק של 10 ק\"מ במהירות של 10 קמ\"ש. לאחר מכן, הוא עבר להליכה והלך עוד 5 ק\"מ במהירות של 5 קמ\"ש. כמה <strong>זמן</strong> נטו ארך כל האימון שלו?",
        "hint": "חשבו בנפרד את הזמן של כל מקטע אימון (על ידי חלוקת המרחק במהירות) וחברו אותם יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זמן הריצה מחושב על ידי מרחק הריצה (10 ק\"מ) חלקי מהירות הריצה (10 קמ\"ש).", "math_expression": "10 / 10 = 1 שעה" },
            { "verbal_explanation": "שלב 2: זמן ההליכה מחושב על ידי מרחק ההליכה (5 ק\"מ) חלקי מהירות ההליכה (5 קמ\"ש).", "math_expression": "5 / 5 = 1 שעה" },
            { "verbal_explanation": "שלב 3: נחבר את שני הזמנים שקיבלנו לקבלת הזמן הכולל.", "math_expression": "1 + 1 = 2 שעות" }
        ],
        "final_answer": "2 שעות",
        "options": ["1.5 שעות", "2 שעות", "3 שעות", "10 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "בגרף למקוטעין של טמפרטורת החדר, הקצב ב-4 השעות הראשונות היה עלייה של 3 מעלות לכל שעה. מיד לאחר מכן הטמפרטורה ירדה ב-2 מעלות לשעה במשך 3 שעות רצופות. אם התחלנו את המדידה ב-10 מעלות, מה תהיה הטמפרטורה ב<strong>סוף</strong> התהליך?",
        "hint": "עבדו שלב אחר שלב באופן הגיוני: חשבו את סך השינוי במעלות בכל מקטע והוסיפו או החסירו אותו מהטמפרטורה ההתחלתית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך השינוי במקטע הראשון (חימום). 4 שעות כפול עלייה של 3 מעלות.", "math_expression": "4 * 3 = +12 מעלות" },
            { "verbal_explanation": "שלב 2: נחשב את סך השינוי במקטע השני (קירור). 3 שעות כפול ירידה של 2 מעלות.", "math_expression": "3 * (-2) = -6 מעלות" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית המצטברת: נקודת התחלה (10) ועוד העלייה (12) פחות הירידה (6).", "math_expression": "10 + 12 - 6 = 16 מעלות" }
        ],
        "final_answer": "16 מעלות",
        "options": ["22 מעלות", "16 מעלות", "10 מעלות", "12 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Low",
        "question_text": "איזה מהתיאורים המילוליים הבאים מתאים בהכרח לגרף של פונקציה קווית למקוטעין?",
        "hint": "חפשו סיפור שבו קצב הפעולה או הכלל משתנה באופן פתאומי בנקודה מסוימת.",
        "solution_steps": [
            { "verbal_explanation": "מכונית שנוסעת במהירות קבועה לחלוטין ללא הפסקה תיצור גרף שהוא פונקציה קווית רגילה וחלקה. מכונית שנוסעת, עוצרת בדרך, ואז ממשיכה, משנה את הכלל שלה בכל שלב ולכן התיאור שלה הוא גרף למקוטעין.", "math_expression": "שינוי כלל = למקוטעין" }
        ],
        "final_answer": "נסיעה של מכונית הכוללת עצירת מנוחה באמצע.",
        "options": ["נסיעה במהירות קבועה ללא עצירה.", "נסיעה הכוללת עצירת מנוחה באמצע.", "גוף הנופל בנפילה חופשית קבועה.", "קו ישר אינסופי שלא נגמר."],
        "correctAnswer": 1
    },
    {
        "id": 75,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "פונקציה מסוימת מורכבת מ-3 מקטעים שונים. הראשון מסתיים בנקודה בה x=2, המקטע השני מסתיים בנקודה בה x=6 והשלישי ממשיך הלאה עד הסוף. מהו ה<strong>תחום</strong> (גבולות ערכי ה-x) של המקטע השני בלבד?",
        "hint": "המקטע השני מתחיל בדיוק היכן שהמקטע הראשון נגמר, ומסתיים בנקודת החיבור הבאה שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המקטע הראשון מכסה את התחום שבו x נע מ-0 עד שהוא מגיע ל-2.", "math_expression": "0 ≤ x ≤ 2" },
            { "verbal_explanation": "שלב 2: המקטע השני נכנס לפעולה מיד אחריו (כש-x גדול מ-2) ומסתיים בנקודת המעבר הבאה שצוינה שהיא x=6.", "math_expression": "2 < x ≤ 6" }
        ],
        "final_answer": "בין 2 ל-6",
        "options": ["בין 0 ל-2", "בין 2 ל-6", "כל המספרים הגדולים מ-6", "כל הטווח מ-0 ועד 6"],
        "correctAnswer": 1
    },
    {
        "id": 76,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "בגרף המתאר מילוי של בריכת מים, קטע א' תלול יותר מקטע ב' (שניהם במגמת עלייה). מה ניתן להסיק מכך על המילוי?",
        "hint": "זכרו ששיפוע תלול יותר בגרף פירושו שינוי גדול ומהיר יותר בערך ה-y באותו פרק זמן נתון.",
        "solution_steps": [
            { "verbal_explanation": "בגרף של מילוי נפח על פני זמן, השיפוע של הקו מייצג ישירות את קצב זרימת המים לבריכה.", "math_expression": "שיפוע = קצב מילוי" },
            { "verbal_explanation": "מכיוון שקטע א' מצויר כתלול יותר וזקוף יותר, סימן שבזמן זה המים זרמו פנימה בקצב מהיר יותר מאשר בחלק של קטע ב'.", "math_expression": "קצב א' > קצב ב'" }
        ],
        "final_answer": "קצב המילוי בקטע א' היה מהיר וגדול יותר.",
        "options": ["הבריכה התרוקנה בקטע א'.", "קצב המילוי בקטע א' היה מהיר יותר.", "קצב המילוי בקטע ב' היה מהיר יותר.", "הבריכה כבר הייתה מלאה לחלוטין."],
        "correctAnswer": 1
    },
    {
        "id": 77,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "פונקציה למקוטעין עוברת דרך הנקודות (0,0) משם ל-(2,8) וממשיכה ל-(5,8). מהי המהירות הממוצעת הכוללת בטווח שבין תחילת המסע <strong>x=0</strong> ועד לסיומו ב-<strong>x=5</strong>?",
        "hint": "לחשב מהירות ממוצעת זה פשוט: חלקו את ערך המרחק (y) הסופי שהגענו אליו בזמן הכולל שלקח (x הסופי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את המרחק הכולל בנקודת הסוף של המסע. ערך ה-y בנקודה הסופית (5,8) הוא 8.", "math_expression": "מרחק סופי = 8" },
            { "verbal_explanation": "שלב 2: נמצא את הזמן הכולל שחלף מתחילת המסע. ערך ה-x בנקודה (5,8) הוא 5.", "math_expression": "זמן סופי = 5" },
            { "verbal_explanation": "שלב 3: נחשב מהירות ממוצעת על ידי חלוקת המרחק חלקי הזמן.", "math_expression": "8 / 5 = 1.6" }
        ],
        "final_answer": "1.6",
        "options": ["4", "1.6", "8", "0"],
        "correctAnswer": 1
    },
    {
        "id": 78,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Low",
        "question_text": "האם פונקציה למקוטעין חייבת בהכרח להיות רציפה (שהקווים תמיד יהיו מחוברים אחד לשני)?",
        "hint": "חישבו האם במתמטיקה מופשטת ייתכן גרף שבו 'קופצים' פתאום מגובה מסוים אחד לגובה אחר ללא קו שמחבר ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "בבעיות מציאותיות רבות במדעים (כמו מסע של רכב או מילוי מיכל מים) הפונקציה חייבת להיות רציפה כי אין 'טלפורטציה'. אולם, מבחינה מתמטית טהורה, פונקציה למקוטעין יכולה להכיל 'קפיצות' וחוסר רציפות.", "math_expression": "פונקציית מדרגה" }
        ],
        "final_answer": "לא, היא יכולה להכיל קפיצות, למרות שבבעיות מסע היא לרוב רציפה.",
        "options": ["כן, היא חייבת להיות מחוברת.", "לא, היא יכולה להכיל קפיצות ונתקים.", "רק אם השיפוע של כל חלקיה הוא 0.", "רק אם מדובר בקו ישר אחד ארוך."],
        "correctAnswer": 1
    },
    {
        "id": 79,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "Medium",
        "question_text": "בגרף מסוג מרחק-זמן, מה המשמעות הפיזית של קטע שחוזר ויורד עד שהוא נוגע בציר ה-x (כלומר מגיע לגובה 0)?",
        "hint": "זכרו שציר ה-x מייצג מרחק 0 מנקודת המוצא (הבית).",
        "solution_steps": [
            { "verbal_explanation": "כאשר הגרף נוגע בחזרה בציר ה-x, זה אומר שערך ה-y (המרחק מהבית) חזר להיות שווה לאפס. המשמעות היא שהאובייקט הנוסע הגיע בחזרה בדיוק לנקודת ההתחלה שלו שממנה יצא.", "math_expression": "y = 0 (מרחק=0)" }
        ],
        "final_answer": "הגעה חזרה לנקודת המוצא (הבית).",
        "options": ["התחלת נסיעה חדשה", "עצירה ארוכה למנוחה", "הגעה חזרה לנקודת המוצא.", "הגעה למהירות המקסימלית המותרת."],
        "correctAnswer": 2
    },
    {
        "id": 80,
        "subTopic": "פונקציה קווית למקוטעין",
        "difficulty": "High",
        "question_text": "כיצד מוצאים מתמטית את המשוואה של המקטע השני הנמצא בתוך גרף למקוטעין?",
        "hint": "התייחסו אליו כישר רגיל ועצמאי לכל דבר שעובר בין שתי נקודות הקצה המגדירות אותו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מזהים בבירור את שתי נקודות הקצה של המקטע הספציפי שאנו רוצים לחשב.", "math_expression": "(x1,y1) , (x2,y2)" },
            { "verbal_explanation": "שלב 2: מחשבים את השיפוע m על ידי הצבה בנוסחה בין שתי הנקודות הללו בלבד, תוך התעלמות משאר הגרף.", "math_expression": "חישוב m_המקטע" },
            { "verbal_explanation": "שלב 3: מוצאים את b על ידי הצבת אחת מנקודות הקצה של המקטע בתוך התבנית y=mx+b.", "math_expression": "חישוב b_המקטע" }
        ],
        "final_answer": "מחשבים שיפוע ו-b על סמך שתי נקודות הקצה של המקטע הנדון.",
        "options": ["משתמשים במשוואה של קטע א' ומשכפלים.", "מחשבים לפי נקודת ההתחלה הכללית (0,0).", "מחשבים שיפוע ו-b על סמך שתי נקודות הקצה של המקטע הנדון.", "אי אפשר למצוא משוואה לחלק מגרף."],
        "correctAnswer": 2
    }
];