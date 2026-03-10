const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: משפט פיתגורס (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Low",
        "question_text": "במשולש ישר זווית, שתי הצלעות שיוצרות את הזווית הישרה (90°) נקראות 'ניצבים'. לצלע הארוכה ביותר שממול לזווית הישרה קוראים 'יתר'. מהי <strong>הנוסחה של משפט פיתגורס</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='120'><polygon points='20,100 120,100 20,20' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><rect x='20' y='90' width='10' height='10' fill='none' stroke='#1e293b' stroke-width='1'/><text x='60' y='115' font-size='12'>ניצב (a)</text><text x='5' y='60' font-size='12'>ניצב (b)</text><text x='75' y='50' font-size='12' fill='#b09151' font-weight='bold'>יתר (c)</text></svg></div>",
        "hint": "המשפט אומר שסכום השטחים של הריבועים הבנויים על הניצבים, שווה לשטח הריבוע הבנוי על היתר (בריבוע + בריבוע = בריבוע).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: משפט פיתגורס עובד אך ורק במשולשים ישרי זווית.", "math_expression": "זווית = 90°" },
            { "verbal_explanation": "שלב 2: נסמן את הניצבים ב-a ו-b, ואת היתר (הצלע הארוכה) ב-c.", "math_expression": "a, b, c" },
            { "verbal_explanation": "שלב 3: הנוסחה קובעת שניצב בריבוע ועוד הניצב השני בריבוע, שווים ליתר בריבוע.", "math_expression": "a² + b² = c²" }
        ],
        "final_answer": "a² + b² = c²",
        "options": ["a + b = c", "a² + b² = c²", "a * b = c", "a² - b² = c²"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Low",
        "question_text": "במשולש ישר זווית, אורך הניצב הראשון הוא <strong>3 ס\"מ</strong>, ואורך הניצב השני הוא <strong>4 ס\"מ</strong>. מהו אורך <strong>היתר (c)</strong>?",
        "hint": "הציבו בנוסחה a² + b² = c². חשבו 3 בריבוע ועוד 4 בריבוע. בסוף, אל תשכחו להוציא שורש ריבועי!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחת פיתגורס. a=3 ו- b=4.", "math_expression": "3² + 4² = c²" },
            { "verbal_explanation": "שלב 2: נחשב את החזקות. 3 בריבוע זה 9. 4 בריבוע זה 16.", "math_expression": "9 + 16 = c²" },
            { "verbal_explanation": "שלב 3: נחבר אותם ונקבל 25. כלומר, היתר בריבוע שווה ל-25.", "math_expression": "25 = c²" },
            { "verbal_explanation": "שלב 4: כדי למצוא את c עצמו, נוציא שורש ריבועי מ-25 (איזה מספר כפול עצמו שווה 25?).", "math_expression": "c = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["7 ס\"מ", "25 ס\"מ", "5 ס\"מ", "12 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Medium",
        "question_text": "אורכי הניצבים במשולש ישר זווית הם <strong>6 מטרים</strong> ו- <strong>8 מטרים</strong>. מהו אורך <strong>היתר</strong>?",
        "hint": "חישבו 6 בריבוע (36) ועוד 8 בריבוע (64). מצאו את השורש של התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הניצבים בנוסחה: a² + b² = c².", "math_expression": "6² + 8² = c²" },
            { "verbal_explanation": "שלב 2: נחשב את הריבועים. 6 כפול 6 זה 36. 8 כפול 8 זה 64.", "math_expression": "36 + 64 = c²" },
            { "verbal_explanation": "שלב 3: נחבר ונקבל 100. זהו היתר בריבוע.", "math_expression": "100 = c²" },
            { "verbal_explanation": "שלב 4: נוציא שורש ל-100 כדי למצוא את האורך האמיתי של הצלע.", "math_expression": "c = 10" }
        ],
        "final_answer": "10 מטרים",
        "options": ["14 מטרים", "10 מטרים", "100 מטרים", "48 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, אורך <strong>היתר</strong> (הצלע הארוכה) הוא <strong>13 ס\"מ</strong>. אורך אחד <strong>הניצבים</strong> הוא <strong>5 ס\"מ</strong>. מהו אורכו של הניצב השני?",
        "hint": "כאשר מחפשים ניצב ולא יתר, המשוואה הופכת לתרגיל חיסור: היתר בריבוע פחות הניצב בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב בנוסחה כשהפעם היתר (c) ידוע לנו.", "math_expression": "5² + b² = 13²" },
            { "verbal_explanation": "שלב 2: נחשב את החזקות. 25 ועוד b בריבוע שווים ל-169.", "math_expression": "25 + b² = 169" },
            { "verbal_explanation": "שלב 3: כדי לבודד את הניצב החסר, נעביר את ה-25 בחיסור לצד השני.", "math_expression": "b² = 169 - 25 = 144" },
            { "verbal_explanation": "שלב 4: נוציא שורש מ-144 כדי למצוא את אורך הניצב. (12 כפול 12 הם 144).", "math_expression": "b = 12" }
        ],
        "final_answer": "12 ס\"מ",
        "options": ["12 ס\"מ", "8 ס\"מ", "18 ס\"מ", "144 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "סולם באורך <strong>10 מטרים</strong> נשען על קיר. תחתית הסולם נמצאת במרחק של <strong>6 מטרים</strong> מבסיס הקיר. לאיזה גובה מגיע הסולם על הקיר?",
        "hint": "ציירו משולש ישר זווית בדמיון. הסולם הוא היתר (הצלע האלכסונית). הקיר והרצפה הם הניצבים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מרכיבי המשולש. הסולם אלכסוני ולכן הוא היתר (c=10). המרחק על הרצפה הוא ניצב אחד (a=6). גובה הקיר הוא הניצב השני (b).", "math_expression": "6² + b² = 10²" },
            { "verbal_explanation": "שלב 2: נחשב את הריבועים. 36 ועוד הגובה בריבוע שווים ל-100.", "math_expression": "36 + b² = 100" },
            { "verbal_explanation": "שלב 3: נחסיר 36 מ-100 כדי למצוא את הגובה בריבוע.", "math_expression": "b² = 100 - 36 = 64" },
            { "verbal_explanation": "שלב 4: נוציא שורש ריבועי מ-64 ונגלה את גובה הקיר.", "math_expression": "b = 8" }
        ],
        "final_answer": "8 מטרים",
        "options": ["16 מטרים", "4 מטרים", "8 מטרים", "64 מטרים"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Medium",
        "question_text": "האם משולש שצלעותיו הן <strong>2 ס\"מ, 3 ס\"מ ו-4 ס\"מ</strong> הוא משולש ישר זווית?",
        "hint": "זהו 'המשפט ההפוך של פיתגורס'. בדקו האם הצלע הקטנה בריבוע + האמצעית בריבוע, שוות לגדולה בריבוע. אם לא, הזווית אינה 90 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הצלע הארוכה ביותר (4) חייבת להיות היתר. נבדוק אם הנוסחה מתקיימת.", "math_expression": "2² + 3² ?= 4²" },
            { "verbal_explanation": "שלב 2: נחשב את הריבועים. 2 בריבוע זה 4. 3 בריבוע זה 9. 4 בריבוע זה 16.", "math_expression": "4 + 9 ?= 16" },
            { "verbal_explanation": "שלב 3: נחבר את הניצבים: 4 ועוד 9 הם 13. 13 לא שווה ל-16. לכן, זהו לא משולש ישר זווית.", "math_expression": "13 \u2260 16" }
        ],
        "final_answer": "לא",
        "options": ["כן", "לא", "אי אפשר לדעת", "רק אם הוא שווה שוקיים"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "מהו אורך <strong>האלכסון</strong> של מלבן שאורכו <strong>12 ס\"מ</strong> ורוחבו <strong>5 ס\"מ</strong>?",
        "hint": "אלכסון במלבן חוצה אותו לשני משולשים ישרי זווית. הצלעות 5 ו-12 הן הניצבים, והאלכסון הוא היתר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הניצבים. אורך המלבן ורוחבו הם הניצבים (a=5, b=12). אנו מחפשים את היתר (c).", "math_expression": "5² + 12² = c²" },
            { "verbal_explanation": "שלב 2: נחשב חזקות. 5 בריבוע זה 25. 12 בריבוע זה 144.", "math_expression": "25 + 144 = c²" },
            { "verbal_explanation": "שלב 3: נחבר אותם ונקבל 169.", "math_expression": "169 = c²" },
            { "verbal_explanation": "שלב 4: נוציא שורש ריבועי מ-169 כדי לקבל את אורך האלכסון.", "math_expression": "c = 13" }
        ],
        "final_answer": "13 ס\"מ",
        "options": ["17 ס\"מ", "13 ס\"מ", "60 ס\"מ", "169 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Low",
        "question_text": "משולש ישר זווית הוא גם <strong>שווה שוקיים</strong>. אורך כל אחד מהניצבים (השוקיים) הוא <strong>x</strong>. איזה ביטוי מתאר את <strong>היתר בריבוע (c²)</strong>?",
        "hint": "הציבו את x במקום a ו-b בנוסחת פיתגורס: x² + x².",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הניצבים שלנו שווים זה לזה ואורכם x. נציב בנוסחה.", "math_expression": "x² + x² = c²" },
            { "verbal_explanation": "שלב 2: נחבר איברים דומים (חיבור של שני איקס בריבוע).", "math_expression": "2x² = c²" },
            { "verbal_explanation": "שלב 3: היתר בריבוע שווה לפעמיים הצלע בריבוע.", "math_expression": "c² = 2x²" }
        ],
        "final_answer": "2x²",
        "options": ["x²", "2x²", "4x²", "x⁴"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Medium",
        "question_text": "במשולש ישר זווית, אורכי הניצבים הם <strong>15 ס\"מ ו- 20 ס\"מ</strong>. מהו <strong>היקף</strong> המשולש?",
        "hint": "כדי למצוא היקף, צריך לחבר את 3 הצלעות. קודם כל, מצאו את הצלע השלישית (היתר) בעזרת משפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את היתר. נציב בנוסחה: 15 בריבוע (225) ועוד 20 בריבוע (400) שווה ליתר בריבוע.", "math_expression": "225 + 400 = 625" },
            { "verbal_explanation": "שלב 2: נוציא שורש ל-625. השורש הוא 25. (זהו בעצם השילוש המוכר 3-4-5 שהוכפל פי 5).", "math_expression": "c = 25" },
            { "verbal_explanation": "שלב 3: כעת נחשב את ההיקף על ידי חיבור כל 3 הצלעות: שני הניצבים והיתר.", "math_expression": "15 + 20 + 25 = 60" }
        ],
        "final_answer": "60 ס\"מ",
        "options": ["35 ס\"מ", "60 ס\"מ", "300 ס\"מ", "85 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "במשולש ישר זווית, היתר הוא <strong>10 ס\"מ</strong> וניצב אחד הוא <strong>6 ס\"מ</strong>. מהו <strong>שטח המשולש</strong>?",
        "hint": "שטח משולש ישר זווית מחושב על ידי הכפלת שני הניצבים וחלוקה ב-2. קודם מצאו את הניצב החסר בעזרת פיתגורס!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הניצב השני. היתר (10) בריבוע פחות הניצב הקיים (6) בריבוע.", "math_expression": "b² = 100 - 36 = 64" },
            { "verbal_explanation": "שלב 2: נוציא שורש מ-64 ונגלה שהניצב השני הוא 8.", "math_expression": "b = 8" },
            { "verbal_explanation": "שלב 3: כעת נחשב שטח: ניצב אחד (6) כפול ניצב שני (8), לחלק ל-2.", "math_expression": "S = (6 * 8) / 2" },
            { "verbal_explanation": "שלב 4: 48 לחלק ל-2 הם 24.", "math_expression": "S = 24" }
        ],
        "final_answer": "24 סמ\"ר",
        "options": ["48 סמ\"ר", "60 סמ\"ר", "24 סמ\"ר", "30 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Medium",
        "question_text": "'שילוש פיתגורי' היא שלשה של מספרים שלמים שמקיימים את משפט פיתגורס (כמו 3,4,5). איזה מבין הבאים הוא גם <strong>שילוש פיתגורי</strong>?",
        "hint": "בדקו איזו שלשה מקיימת: הקטן בריבוע + האמצעי בריבוע = הגדול בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את 1,2,3: האם 1² + 2² = 3²? לא (5 לא שווה ל-9).", "math_expression": "1+4 \u2260 9" },
            { "verbal_explanation": "שלב 2: נבדוק את 5,12,13: האם 5² + 12² = 13²?", "math_expression": "25 + 144 = 169" },
            { "verbal_explanation": "שלב 3: 169 בהחלט שווה ל-169. לכן זו שלשה פיתגורית מפורסמת.", "math_expression": "169 = 169" }
        ],
        "final_answer": "5, 12, 13",
        "options": ["4, 5, 6", "1, 2, 3", "5, 12, 13", "7, 8, 9"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "אורי הלך מביתו <strong>12 ק\"מ צפונה</strong> ולאחר מכן פנה בזווית ישרה (90°) והלך <strong>9 ק\"מ מזרחה</strong>. מהו <strong>המרחק בקו אווירי ישר (אלכסון)</strong> מביתו לנקודה בה הוא נמצא כעת?",
        "hint": "ההליכה צפונה ומזרחה יוצרת משולש ישר זווית. אתם מחפשים את היתר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הניצבים (9 ו-12) במשפט פיתגורס.", "math_expression": "9² + 12² = c²" },
            { "verbal_explanation": "שלב 2: נחשב את הריבועים. 81 ועוד 144 שווים ל-225.", "math_expression": "81 + 144 = 225" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי מ-225 למציאת המרחק בקו אווירי (c).", "math_expression": "c = 15" }
        ],
        "final_answer": "15 ק\"מ",
        "options": ["21 ק\"מ", "15 ק\"מ", "225 ק\"מ", "10.5 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "נתון משולש ישר זווית שבו היתר הוא <strong>c</strong>, הניצב הראשון הוא <strong>a</strong> והניצב השני הוא <strong>b</strong>. אם נכפיל את אורכי שני הניצבים <strong>פי 2</strong>, מה יקרה לאורך היתר?",
        "hint": "נסו להציב שלשה מוכרת (למשל 3,4,5). אם נכפיל את הניצבים ל-6,8, מה יהיה היתר החדש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח דוגמה. משולש של 3,4,5. היתר המקורי הוא 5.", "math_expression": "3² + 4² = 5²" },
            { "verbal_explanation": "שלב 2: נכפיל את הניצבים פי 2, ונקבל 6 ו-8. נציב בפיתגורס: 36 ועוד 64 שווים 100.", "math_expression": "6² + 8² = 100" },
            { "verbal_explanation": "שלב 3: השורש של 100 הוא 10. היתר גדל מ-5 ל-10. מסקנה: כשהניצבים גדלים באותו יחס, גם היתר גדל באותו יחס בדיוק.", "math_expression": "יגדל פי 2" }
        ],
        "final_answer": "יגדל פי 2",
        "options": ["יגדל פי 4", "ישאר ללא שינוי", "יגדל פי 2", "אי אפשר לדעת"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "משפט פיתגורס",
        "difficulty": "High",
        "question_text": "במערכת צירים נתונות שתי נקודות: הנקודה A נמצאת ב- <strong>(0,0)</strong>, והנקודה B נמצאת ב- <strong>(3,4)</strong>. מהו המרחק ביניהן?",
        "hint": "ציירו משולש ישר זווית שבו הקו בין (0,0) ל-(3,4) הוא היתר. אורכי הניצבים הם הצעדים שעשיתם על ציר ה-x וה-y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הניצב האופקי (על ציר ה-x) הוא מ-0 ל-3, כלומר אורכו 3.", "math_expression": "a = 3" },
            { "verbal_explanation": "שלב 2: הניצב האנכי (על ציר ה-y) הוא מ-0 ל-4, כלומר אורכו 4.", "math_expression": "b = 4" },
            { "verbal_explanation": "שלב 3: המרחק בין הנקודות הוא היתר. נפעיל את המשפט: 3 בריבוע ועוד 4 בריבוע הם 25. השורש מ-25 הוא 5.", "math_expression": "c = 5" }
        ],
        "final_answer": "5",
        "options": ["7", "12", "5", "25"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "משפט פיתגורס",
        "difficulty": "Low",
        "question_text": "מתי <strong>לא ניתן</strong> להשתמש במשפט פיתגורס?",
        "hint": "מה הדרישה הבסיסית והכי חשובה של המשפט? הוא עובד רק על סוג אחד של משולשים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: משפט פיתגורס מתאר את היחס בין צלעות אך ורק כאשר יש זווית של 90 מעלות במדויק.", "math_expression": "חובה: זווית 90°" },
            { "verbal_explanation": "שלב 2: אם המשולש הוא חד זווית או קהה זווית, הנוסחה (a²+b²=c²) תיתן תוצאה שגויה.", "math_expression": "שגוי במשולש אחר" }
        ],
        "final_answer": "כאשר המשולש אינו משולש ישר זווית.",
        "options": ["כאשר הניצבים אינם שווים באורכם.", "כאשר מדובר במספרים עשרוניים.", "כאשר המשולש אינו משולש ישר זווית.", "תמיד ניתן להשתמש בו."],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: מנסרה ישרה (שטח ונפח) (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "מהי הנוסחה הכללית והפשוטה ביותר לחישוב <strong>נפח (V) של כל מנסרה ישרה</strong> (כמו תיבה, קובייה או מנסרה משולשת)?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><polygon points='20,80 80,80 60,60 0,60' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><polygon points='20,30 80,30 60,10 0,10' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><polygon points='0,10 20,30 20,80 0,60' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><polygon points='80,30 80,80 20,80 20,30' fill='#cbd5e1' stroke='#1e293b' stroke-width='2'/><text x='40' y='65' font-size='12' fill='black'>B (בסיס)</text><text x='10' y='55' font-size='12'>h</text></svg></div>",
        "hint": "כדי למצוא כמה 'מקום' תופסת המנסרה באוויר, מכפילים את שטח ה'רצפה' שלה בגובה שלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפח מנסרה מציין כמה חומר ניתן להכניס לתוכה.", "math_expression": "V = נפח" },
            { "verbal_explanation": "שלב 2: כדי למצוא את הנפח, אנו מחשבים את שטח הבסיס (B), ומכפילים אותו בגובה המנסרה (h).", "math_expression": "V = B * h" }
        ],
        "final_answer": "שטח הבסיס כפול גובה המנסרה.",
        "options": ["שטח הבסיס ועוד הגובה.", "שטח הבסיס כפול גובה המנסרה.", "אורך כפול רוחב בלבד.", "היקף הבסיס כפול הגובה."],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "מנסרה ישרה שבסיסה מלבן נקראת <strong>תיבה</strong>. מהו הנפח של תיבה שאורכה <strong>5 ס\"מ</strong>, רוחבה <strong>2 ס\"מ</strong>, וגובהה <strong>4 ס\"מ</strong>?",
        "hint": "בתיבה, הנפח מחושב בפשטות על ידי הכפלת כל שלושת הממדים יחד (אורך × רוחב × גובה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שטח הבסיס המלבני הוא אורך כפול רוחב. 5 כפול 2 שווה ל-10.", "math_expression": "B = 5 * 2 = 10" },
            { "verbal_explanation": "שלב 2: נכפיל את שטח הבסיס (10) בגובה התיבה (4).", "math_expression": "V = 10 * 4" },
            { "verbal_explanation": "שלב 3: התוצאה היא הנפח הכולל בסנטימטרים מעוקבים (סמ\"ק).", "math_expression": "V = 40" }
        ],
        "final_answer": "40 סמ\"ק",
        "options": ["11 סמ\"ק", "40 סמ\"ק", "20 סמ\"ק", "22 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "תיבה שכל צלעותיה ופאותיה שוות נקראת <strong>קובייה</strong>. מהו הנפח של קובייה שאורך מקצועה (הצלע שלה) הוא <strong>3 ס\"מ</strong>?",
        "hint": "בקובייה, האורך, הרוחב והגובה כולם שווים ל-3. כפלו 3 כפול 3 כפול 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בקובייה, כל הממדים זהים: a = 3.", "math_expression": "אורך=3, רוחב=3, גובה=3" },
            { "verbal_explanation": "שלב 2: נפח הקובייה מחושב על ידי הכפלת המקצוע בעצמו שלוש פעמים (בחזקת 3).", "math_expression": "V = 3 * 3 * 3 = 3³" },
            { "verbal_explanation": "שלב 3: נחשב: 3 כפול 3 זה 9. 9 כפול 3 זה 27.", "math_expression": "V = 27" }
        ],
        "final_answer": "27 סמ\"ק",
        "options": ["9 סמ\"ק", "27 סמ\"ק", "18 סמ\"ק", "12 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "נפחה של תיבה הוא <strong>100 סמ\"ק</strong>. ידוע ששטח הבסיס שלה הוא <strong>25 סמ\"ר</strong>. מהו <strong>הגובה</strong> של התיבה?",
        "hint": "הנפח (100) שווה לשטח הבסיס (25) כפול הגובה החסר. חלקו את הנפח בשטח הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחת הנפח: V = B * h.", "math_expression": "100 = 25 * h" },
            { "verbal_explanation": "שלב 2: כדי למצוא את הגובה החסר (h), נחלק את הנפח הכולל בשטח הבסיס.", "math_expression": "h = 100 / 25" },
            { "verbal_explanation": "שלב 3: 100 לחלק ל-25 שווה ל-4. לכן גובה התיבה הוא 4 ס\"מ.", "math_expression": "h = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["4 ס\"מ", "5 ס\"מ", "75 ס\"מ", "2500 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "לפניכם <strong>מנסרה משולשת</strong>. שטח משולש הבסיס שלה הוא <strong>12 סמ\"ר</strong>, וגובה המנסרה הוא <strong>10 ס\"מ</strong>. מהו <strong>נפח</strong> המנסרה?",
        "hint": "אל תיבהלו מצורת המשולש. נוסחת הנפח זהה לכל המנסרות: שטח הבסיס כפול גובה המנסרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנתון נותן לנו את שטח הבסיס (B) במלואו, לכן אין צורך לחשב שטח משולש מחדש.", "math_expression": "B = 12" },
            { "verbal_explanation": "שלב 2: נכפיל את שטח הבסיס בגובה המנסרה הנתון (h=10).", "math_expression": "V = 12 * 10" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה לקבלת הנפח הכולל.", "math_expression": "V = 120" }
        ],
        "final_answer": "120 סמ\"ק",
        "options": ["60 סמ\"ק", "120 סמ\"ק", "22 סמ\"ק", "100 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "High",
        "question_text": "במנסרה משולשת, הבסיס הוא משולש ישר זווית שניצביו הם <strong>3 ס\"מ ו-4 ס\"מ</strong>. גובה המנסרה הוא <strong>5 ס\"מ</strong>. מהו <strong>נפח המנסרה</strong>?",
        "hint": "שלב ראשון: חשבו את שטח משולש הבסיס (ניצב כפול ניצב לחלק ל-2). שלב שני: כפלו את שטח הבסיס בגובה המנסרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את שטח משולש הבסיס. שטח משולש ישר זווית הוא מכפלת הניצבים חלקי 2.", "math_expression": "B = (3 * 4) / 2 = 6" },
            { "verbal_explanation": "שלב 2: שטח הבסיס הוא 6. כעת נכפיל אותו בגובה המנסרה שניתן לנו (5).", "math_expression": "V = 6 * 5" },
            { "verbal_explanation": "שלב 3: נחשב ונקבל את נפח המנסרה הכולל.", "math_expression": "V = 30" }
        ],
        "final_answer": "30 סמ\"ק",
        "options": ["60 סמ\"ק", "30 סמ\"ק", "12 סמ\"ק", "15 סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "מה ההבדל בין <strong>שטח מעטפת</strong> לבין <strong>שטח פנים</strong> של מנסרה?",
        "hint": "מעטפת היא רק הקירות שמסביב. שטח הפנים כולל גם את הרצפה והתקרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שטח מעטפת כולל רק את חיבור השטחים של הפאות הצדדיות (הקירות העומדים).", "math_expression": "מעטפת = קירות" },
            { "verbal_explanation": "שלב 2: שטח פנים הוא כל המעטפת החיצונית של הצורה, ולכן הוא כולל גם את שני הבסיסים (למעלה ולמטה).", "math_expression": "פנים = מעטפת + 2 בסיסים" }
        ],
        "final_answer": "שטח הפנים כולל גם את שטח שני הבסיסים, ואילו המעטפת לא.",
        "options": ["הם בדיוק אותו הדבר.", "שטח הפנים כולל גם את שטח שני הבסיסים, ואילו המעטפת לא.", "המעטפת גדולה יותר משטח הפנים.", "שטח פנים מודד את הנפח הפנימי."],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "חשבו את <strong>שטח הפנים</strong> של קובייה שאורך מקצועה (הצלע) הוא <strong>4 ס\"מ</strong>.",
        "hint": "לקובייה יש 6 פאות (צדדים) שכולן ריבועים זהים. חשבו שטח של ריבוע אחד והכפילו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כל פאה (צד) של קובייה היא ריבוע. שטח של פאה אחת הוא צלע כפול צלע (4 כפול 4).", "math_expression": "S פאה = 4 * 4 = 16" },
            { "verbal_explanation": "שלב 2: לקובייה יש בדיוק 6 פאות שוות (כמו קוביית משחק עם מספרים 1 עד 6).", "math_expression": "6 פאות" },
            { "verbal_explanation": "שלב 3: נכפיל את השטח של פאה אחת ב-6 כדי למצוא את שטח הפנים הכולל.", "math_expression": "S פנים = 16 * 6 = 96" }
        ],
        "final_answer": "96 סמ\"ר",
        "options": ["64 סמ\"ר", "24 סמ\"ר", "96 סמ\"ר", "16 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "High",
        "question_text": "חשבו את <strong>שטח הפנים</strong> של תיבה שמידותיה: אורך <strong>5</strong>, רוחב <strong>3</strong>, וגובה <strong>2</strong>.",
        "hint": "בתיבה יש 3 זוגות של מלבנים זהים. חשבו שטח של כל מלבן שונה (5×3, 5×2, 3×2), חברו אותם והכפילו את התוצאה פי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב שטח של 'רצפה': 5 כפול 3 שווה 15.", "math_expression": "S1 = 5 * 3 = 15" },
            { "verbal_explanation": "שלב 2: נחשב שטח של 'קיר קדמי': 5 כפול 2 שווה 10.", "math_expression": "S2 = 5 * 2 = 10" },
            { "verbal_explanation": "שלב 3: נחשב שטח של 'קיר צדדי': 3 כפול 2 שווה 6.", "math_expression": "S3 = 3 * 2 = 6" },
            { "verbal_explanation": "שלב 4: נחבר את שלושתם: 15+10+6=31. מאחר ולכל פאה יש פאה נגדית זהה, נכפיל את הסכום פי 2.", "math_expression": "S פנים = 31 * 2 = 62" }
        ],
        "final_answer": "62 סמ\"ר",
        "options": ["30 סמ\"ר", "62 סמ\"ר", "31 סמ\"ר", "10 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "מיכל בצורת תיבה מכיל מים. אורך בסיס התיבה <strong>20 ס\"מ</strong> ורוחבו <strong>10 ס\"מ</strong>. יוצקים למיכל <strong>1000 סמ\"ק</strong> של מים. באיזה <strong>גובה</strong> יעמדו המים במיכל?",
        "hint": "המים מקבלים את צורת התיבה. הנפח ידוע (1000). שטח הבסיס ידוע (20 כפול 10 = 200). מהו הגובה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את שטח בסיס המיכל. 20 כפול 10 שווים 200 סמ\"ר.", "math_expression": "B = 20 * 10 = 200" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים בנוסחת הנפח (V = B * h). הנפח הוא כמות המים שנשפכה.", "math_expression": "1000 = 200 * h" },
            { "verbal_explanation": "שלב 3: נחלק את הנפח (1000) בשטח הבסיס (200) כדי למצוא את הגובה.", "math_expression": "h = 1000 / 200 = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["5 ס\"מ", "10 ס\"מ", "2 ס\"מ", "50 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 26,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "כמה סנטימטרים מעוקבים (סמ\"ק) יש ב- <strong>ליטר אחד</strong> של מים?",
        "hint": "לזכור בעל פה: ליטר מים שווה לנפח של קובייה שכל צלע שלה היא 10 ס\"מ (10×10×10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת הליטר בשיטה המטרית שווה לנפח של דצימטר מעוקב אחד (10 ס\"מ על 10 ס\"מ על 10 ס\"מ).", "math_expression": "1 L = 10cm * 10cm * 10cm" },
            { "verbal_explanation": "שלב 2: נכפיל ונקבל את התשובה בסנטימטרים מעוקבים.", "math_expression": "1 L = 1000 סמ\"ק" }
        ],
        "final_answer": "1000 סמ\"ק",
        "options": ["100 סמ\"ק", "10 סמ\"ק", "1000 סמ\"ק", "10,000 סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "High",
        "question_text": "יש לנו שתי קוביות. הצלע של קובייה ב' <strong>גדולה פי 2</strong> מהצלע של קובייה א'. פי כמה גדול <strong>נפחה</strong> של קובייה ב' מנפחה של קובייה א'?",
        "hint": "קחו דוגמה. קובייה א' עם צלע 1 (נפח 1). קובייה ב' עם צלע 2 (נפח 2 כפול 2 כפול 2). פי כמה הנפח גדל?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נניח שהצלע של קובייה א' היא 1. הנפח שלה הוא 1 בחזקת 3, שזה 1.", "math_expression": "V1 = 1 * 1 * 1 = 1" },
            { "verbal_explanation": "שלב 2: הצלע של קובייה ב' גדולה פי 2, לכן היא 2. הנפח שלה הוא 2 בחזקת 3.", "math_expression": "V2 = 2 * 2 * 2 = 8" },
            { "verbal_explanation": "שלב 3: נשווה את הנפחים. רואים שכאשר מגדילים צלע פי 2, הנפח גדל פי 8 (כי מכפילים את ההגדלה ב-3 הממדים).", "math_expression": "8 / 1 = 8" }
        ],
        "final_answer": "פי 8",
        "options": ["פי 2", "פי 4", "פי 6", "פי 8"],
        "correctAnswer": 3
    },
    {
        "id": 28,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "נפחה של תיבה שבסיסה <strong>ריבוע</strong> הוא <strong>200 סמ\"ק</strong>. גובה התיבה הוא <strong>8 ס\"מ</strong>. מהו אורך <strong>צלע הבסיס הריבועי</strong>?",
        "hint": "קודם מצאו את שטח הבסיס (200 לחלק ל-8 = 25). מכיוון שהבסיס ריבוע, איזה מספר כפול עצמו נותן 25?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא תחילה את שטח הבסיס כולו (B). נחלק את הנפח הכולל בגובה.", "math_expression": "B = 200 / 8 = 25" },
            { "verbal_explanation": "שלב 2: אנו יודעים שהבסיס הוא ריבוע. שטח ריבוע הוא צלע כפול צלע (a²).", "math_expression": "a² = 25" },
            { "verbal_explanation": "שלב 3: נוציא שורש ריבועי מ-25 כדי למצוא את אורך הצלע של הבסיס.", "math_expression": "a = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["12.5 ס\"מ", "5 ס\"מ", "25 ס\"מ", "4 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "הנוסחה ל<strong>שטח מעטפת</strong> של מנסרה היא: <strong>היקף הבסיס כפול גובה המנסרה</strong>. למנסרה משולשת יש בסיס שצלעותיו הן <strong>3, 4, ו-5</strong> ס\"מ. גובה המנסרה הוא <strong>10 ס\"מ</strong>. מהו <strong>שטח המעטפת</strong>?",
        "hint": "חשבו קודם את היקף משולש הבסיס (חיבור 3 הצלעות). ואז הכפילו את התוצאה ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההיקף (P) של הבסיס המשולש על ידי חיבור אורכי הצלעות שלו.", "math_expression": "P = 3 + 4 + 5 = 12" },
            { "verbal_explanation": "שלב 2: לפי הנוסחה, שטח המעטפת (שטח הקירות בלבד) שווה להיקף הבסיס כפול גובה המנסרה.", "math_expression": "מעטפת = P * h" },
            { "verbal_explanation": "שלב 3: נכפיל 12 ב-10 לקבלת התשובה.", "math_expression": "12 * 10 = 120" }
        ],
        "final_answer": "120 סמ\"ר",
        "options": ["60 סמ\"ר", "120 סמ\"ר", "300 סמ\"ר", "72 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "מנסרה ישרה (שטח ונפח)",
        "difficulty": "High",
        "question_text": "רוצים לצבוע את <strong>כל הפאות החיצוניות</strong> של ארגז עץ סגור, <strong>מלבד הבסיס התחתון</strong> (הרצפה שעליה הוא מונח). אורך הארגז <strong>4 מטר</strong>, רוחבו <strong>2 מטר</strong> וגובהו <strong>3 מטר</strong>. כמה <strong>מ\"ר</strong> של עץ נצטרך לצבוע?",
        "hint": "חשבו את שטח הפנים המלא כמו שלמדנו, ואז החסירו ממנו פעם אחת את השטח של רצפת הארגז (4x2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את שטח המעטפת (הקירות). קיר קדמי ואחורי: פעמיים 4x3 (24). קירות צדדיים: פעמיים 2x3 (12). סך הכל קירות: 36.", "math_expression": "מעטפת = 24 + 12 = 36" },
            { "verbal_explanation": "שלב 2: המשימה דורשת לצבוע גם את המכסה העליון (התקרה). שטחו הוא אורך כפול רוחב (4 כפול 2).", "math_expression": "תקרה = 4 * 2 = 8" },
            { "verbal_explanation": "שלב 3: אנו לא צובעים את הרצפה! לכן נחבר רק את שטח המעטפת ושטח התקרה.", "math_expression": "36 + 8 = 44" }
        ],
        "final_answer": "44 מ\"ר",
        "options": ["52 מ\"ר", "36 מ\"ר", "44 מ\"ר", "24 מ\"ר"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 3: גליל ישר (שטח ונפח) (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "גליל ישר הוא גוף מרחבי שבסיסיו הם שני עיגולים חופפים. מהי <strong>הנוסחה לחישוב הנפח (V)</strong> של גליל?",
        "hint": "בדיוק כמו במנסרה, הנפח הוא שטח הבסיס כפול הגובה. רק שכאן הבסיס הוא עיגול (ששטחו pi * r²).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: העיקרון של כל גוף ישר הוא שהנפח שווה לשטח הבסיס (B) כפול הגובה (h).", "math_expression": "V = B * h" },
            { "verbal_explanation": "שלב 2: בגליל, הבסיס הוא עיגול. שטח עיגול מחושב על ידי הכפלת פאי (pi) ברדיוס (r) בריבוע.", "math_expression": "B = pi * r²" },
            { "verbal_explanation": "שלב 3: נשלב את שני השלבים ונקבל את הנוסחה המלאה לנפח גליל.", "math_expression": "V = pi * r² * h" }
        ],
        "final_answer": "V = pi * r² * h",
        "options": ["V = 2 * pi * r * h", "V = pi * r² * h", "V = pi * r * h", "V = 2 * pi * r²"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "רדיוס הבסיס של גליל הוא <strong>3 ס\"מ</strong>, וגובהו הוא <strong>10 ס\"מ</strong>. מהו <strong>נפח הגליל</strong>? (השאירו את התשובה עם pi).",
        "hint": "הציבו בנוסחה V = pi * r² * h. קודם חשבו את הרדיוס בריבוע (3 כפול 3), ואז הכפילו בגובה (10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחת הנפח. הרדיוס r=3 והגובה h=10.", "math_expression": "V = pi * 3² * 10" },
            { "verbal_explanation": "שלב 2: נחשב את החזקה תחילה. 3 בריבוע (3 כפול 3) שווה ל-9.", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 3: נכפיל את שטח הבסיס (9) בגובה (10) ונצמיד את הסימן pi לתוצאה.", "math_expression": "V = 9 * 10 * pi = 90pi" }
        ],
        "final_answer": "90pi סמ\"ק",
        "options": ["60pi סמ\"ק", "30pi סמ\"ק", "90pi סמ\"ק", "100pi סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "נתון גליל ש<strong>קוטר</strong> הבסיס שלו הוא <strong>10 ס\"מ</strong>, וגובהו <strong>4 ס\"מ</strong>. מהו נפחו? (השאירו עם pi).<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><ellipse cx='75' cy='20' rx='50' ry='15' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><path d='M25,20 L25,80 A50,15 0 0,0 125,80 L125,20' fill='#e2e8f0' stroke='#1e293b' stroke-width='2'/><line x1='25' y1='20' x2='125' y2='20' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><text x='75' y='15' font-size='12' text-anchor='middle'>D = 10</text><text x='10' y='55' font-size='12'>h=4</text></svg></div>",
        "hint": "שימו לב למלכודת הקלאסית! נתון הקוטר השלם (D). כדי להשתמש בנוסחה חובה למצוא קודם את הרדיוס (r), שהוא חצי מהקוטר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הקוטר הוא 10. הרדיוס הוא בדיוק חצי מהקוטר, ולכן הרדיוס הוא 5.", "math_expression": "r = 10 / 2 = 5" },
            { "verbal_explanation": "שלב 2: נציב את הרדיוס והגובה בנוסחת הנפח (V = pi * r² * h).", "math_expression": "V = pi * 5² * 4" },
            { "verbal_explanation": "שלב 3: נחשב את הרדיוס בריבוע (5 כפול 5 = 25). כעת נכפיל 25 בגובה 4.", "math_expression": "V = 25 * 4 * pi = 100pi" }
        ],
        "final_answer": "100pi סמ\"ק",
        "options": ["400pi סמ\"ק", "100pi סמ\"ק", "40pi סמ\"ק", "200pi סמ\"ק"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "נפחו של גליל הוא <strong>200pi סמ\"ק</strong>. ידוע שרדיוס הבסיס שלו הוא <strong>5 ס\"מ</strong>. מהו <strong>גובה הגליל (h)</strong>?",
        "hint": "הציבו בנוסחה את מה שידוע: 200pi = pi * 5² * h. צמצמו את פאי משני הצדדים, וחלקו את הנפח ב-25.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים בנוסחה. במקום V נרשום 200pi, ובמקום r נרשום 5.", "math_expression": "200pi = pi * 5² * h" },
            { "verbal_explanation": "שלב 2: נחשב את שטח הבסיס. 5 בריבוע שווה 25, ולכן הבסיס הוא 25pi.", "math_expression": "200pi = 25pi * h" },
            { "verbal_explanation": "שלב 3: נבודד את h על ידי חלוקת שני האגפים ב-25pi.", "math_expression": "h = 200pi / 25pi" },
            { "verbal_explanation": "שלב 4: ה-pi מצטמצם. 200 לחלק ל-25 שווה ל-8.", "math_expression": "h = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["10 ס\"מ", "4 ס\"מ", "8 ס\"מ", "40 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "מהי הנוסחה לחישוב <strong>שטח המעטפת</strong> (הקיר העגול שמסביב) של גליל ישר?",
        "hint": "אם נפרוס את המעטפת, נקבל מלבן. אורך המלבן הוא היקף העיגול (2*pi*r) ורוחבו הוא גובה הגליל (h).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מעטפת הגליל בנויה כמלבן שהתעקם. השטח שלה הוא אורך המלבן כפול רוחבו.", "math_expression": "S מעטפת = אורך * גובה" },
            { "verbal_explanation": "שלב 2: אורך 'המלבן' הזה חייב להקיף את המעגל השלם, ולכן הוא שווה בדיוק להיקף המעגל.", "math_expression": "היקף מעגל = 2 * pi * r" },
            { "verbal_explanation": "שלב 3: נכפיל את היקף המעגל בגובה הגליל (h) לקבלת הנוסחה הסופית.", "math_expression": "S מעטפת = 2 * pi * r * h" }
        ],
        "final_answer": "2 * pi * r * h",
        "options": ["pi * r²", "pi * r * h", "2 * pi * r * h", "2 * pi * r² + h"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "חשבו את <strong>שטח המעטפת</strong> של גליל שהרדיוס שלו הוא <strong>4 ס\"מ</strong> והגובה שלו הוא <strong>5 ס\"מ</strong>.",
        "hint": "הציבו בנוסחה 2 * pi * r * h. כלומר: 2 כפול 4 כפול 5 כפול pi.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הנתונים שלנו (r=4, h=5) לתוך נוסחת המעטפת.", "math_expression": "S = 2 * pi * 4 * 5" },
            { "verbal_explanation": "שלב 2: נסדר את המספרים ונכפיל אותם קודם: 2 כפול 4 כפול 5.", "math_expression": "2 * 4 = 8 \u2192 8 * 5 = 40" },
            { "verbal_explanation": "שלב 3: נצמיד את ה-pi בסוף המספר.", "math_expression": "40pi" }
        ],
        "final_answer": "40pi סמ\"ר",
        "options": ["40pi סמ\"ר", "20pi סמ\"ר", "80pi סמ\"ר", "60pi סמ\"ר"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "High",
        "question_text": "גליל סגור בשני קצותיו. הרדיוס שלו הוא <strong>2 ס\"מ</strong> והגובה הוא <strong>3 ס\"מ</strong>. מהו <strong>שטח הפנים הכולל</strong> של הגליל?",
        "hint": "שטח הפנים כולל את שטח המעטפת (2*pi*r*h) ועוד שטח של *שני* הבסיסים (2 * pi*r²). חשבו כל חלק בנפרד וחברו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את שטח המעטפת לבד: פעמיים פאי כפול רדיוס (2) כפול גובה (3).", "math_expression": "מעטפת = 2 * pi * 2 * 3 = 12pi" },
            { "verbal_explanation": "שלב 2: נחשב את שטח הבסיסים. לגליל שני בסיסים. שטח בסיס יחיד הוא pi*2² שזה 4pi. פעמיים בסיס נותן 8pi.", "math_expression": "2 בסיסים = 2 * (pi * 2²) = 8pi" },
            { "verbal_explanation": "שלב 3: נחבר את המעטפת והבסיסים כדי לקבל את כלל המעטפת החיצונית (שטח פנים).", "math_expression": "12pi + 8pi = 20pi" }
        ],
        "final_answer": "20pi סמ\"ר",
        "options": ["12pi סמ\"ר", "20pi סמ\"ר", "16pi סמ\"ר", "24pi סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "High",
        "question_text": "יש לנו שני גלילים באותו גובה (h). לגליל א' יש רדיוס <strong>r</strong>. לגליל ב' יש רדיוס <strong>2r</strong> (גדול פי 2). <strong>פי כמה</strong> גדול נפחו של גליל ב' מנפחו של גליל א'?",
        "hint": "זכרו שבנוסחת הנפח, הרדיוס מועלה בריבוע (r²). לכן, אם מכפילים את הרדיוס פי 2, ההשפעה על הנפח תהיה 2 בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הנפח של הגליל המקורי.", "math_expression": "V1 = pi * r² * h" },
            { "verbal_explanation": "שלב 2: נציב את הרדיוס החדש (2r) בתוך הנוסחה. חובה להכניס אותו לסוגריים לפני שמעלים בריבוע!", "math_expression": "V2 = pi * (2r)² * h" },
            { "verbal_explanation": "שלב 3: נפתח את הסוגריים. 2 בריבוע זה 4. לכן הנפח החדש יהיה גדול פי 4.", "math_expression": "V2 = pi * 4r² * h = 4 * V1" }
        ],
        "final_answer": "פי 4",
        "options": ["פי 2", "פי 8", "פי 4", "הנפח זהה"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "מיכל בצורת גליל בעל רדיוס <strong>10 ס\"מ</strong> וגובה <strong>10 ס\"מ</strong> מלא במים. כמה <strong>ליטרים</strong> של מים יש במיכל? (השתמשו ב- pi=3.14)",
        "hint": "חשבו קודם את הנפח בסמ\"ק. אחר כך זכרו שכל 1000 סמ\"ק שווים לליטר אחד (חלקו ב-1000).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הנפח בסמ\"ק. הרדיוס בריבוע הוא 100 (10 כפול 10). נכפיל בגובה (10). נקבל 1000 כפול פאי.", "math_expression": "V = 3.14 * 10² * 10 = 1000 * 3.14" },
            { "verbal_explanation": "שלב 2: 1000 כפול 3.14 מזיז את הנקודה העשרונית ונותן 3140 סמ\"ק.", "math_expression": "V = 3140 סמ\"ק" },
            { "verbal_explanation": "שלב 3: כדי להמיר לליטרים נחלק ב-1000. התוצאה היא 3.14 ליטר.", "math_expression": "3140 / 1000 = 3.14 L" }
        ],
        "final_answer": "3.14 ליטר",
        "options": ["3.14 ליטר", "31.4 ליטר", "314 ליטר", "1000 ליטר"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "High",
        "question_text": "גליל ששטח המעטפת שלו הוא <strong>60pi סמ\"ר</strong>, וגובהו הוא <strong>10 ס\"מ</strong>. מהו אורך <strong>הקוטר (D)</strong> של בסיס הגליל?",
        "hint": "קודם מצאו את הרדיוס דרך נוסחת המעטפת (2*pi*r*h = 60pi). אחרי שתמצאו את הרדיוס, אל תשכחו להכפיל פי 2 כדי לקבל קוטר!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב נתונים בנוסחת המעטפת: 2 כפול רדיוס כפול גובה כפול פאי.", "math_expression": "60pi = 2 * pi * r * 10" },
            { "verbal_explanation": "שלב 2: נסדר את המשוואה. 2 כפול 10 שווה ל-20. נחלק את שני האגפים ב-20pi.", "math_expression": "20pi * r = 60pi" },
            { "verbal_explanation": "שלב 3: גילינו שהרדיוס הוא 3 (60 חלקי 20).", "math_expression": "r = 3" },
            { "verbal_explanation": "שלב 4: המשימה היא למצוא את הקוטר! הקוטר שווה לפעמיים הרדיוס.", "math_expression": "D = 3 * 2 = 6" }
        ],
        "final_answer": "6 ס\"מ",
        "options": ["3 ס\"מ", "6 ס\"מ", "12 ס\"מ", "5 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "High",
        "question_text": "חתכו גליל ישר בדיוק לחצי (לאורכו, מהבסיס העליון לתחתון). התקבל 'חצי גליל'. אם הרדיוס המקורי היה <strong>4 ס\"מ</strong> והגובה <strong>10 ס\"מ</strong>, מהו הנפח של <strong>חצי הגליל</strong>?",
        "hint": "חשבו את הנפח של הגליל השלם כאילו לא נחתך, ופשוט חלקו את התוצאה הסופית ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את נפח הגליל השלם. הרדיוס בריבוע הוא 16. נכפיל בגובה (10) וב-pi.", "math_expression": "V שלם = pi * 4² * 10 = 160pi" },
            { "verbal_explanation": "שלב 2: מאחר וחתכנו את הצורה בדיוק לשניים, גם הנפח שלה נחתך בדיוק לשניים.", "math_expression": "V חצי = V שלם / 2" },
            { "verbal_explanation": "שלב 3: 160pi חלקי 2 שווה ל-80pi.", "math_expression": "160pi / 2 = 80pi" }
        ],
        "final_answer": "80pi סמ\"ק",
        "options": ["160pi סמ\"ק", "40pi סמ\"ק", "80pi סמ\"ק", "100pi סמ\"ק"],
        "correctAnswer": 2
    },
    {
        "id": 42,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Medium",
        "question_text": "אם <strong>נכפיל</strong> את הגובה (h) של גליל פי 3, ונשאיר את הרדיוס ללא שינוי, פי כמה יגדל <strong>הנפח</strong> שלו?",
        "hint": "הגובה (h) אינו מועלה בריבוע בנוסחה. הוא מופיע פעם אחת. לכן, יחס הגדילה שלו עובר ישירות לנפח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנוסחה היא V = pi * r² * h. הגובה עומד בפני עצמו (בלי חזקה).", "math_expression": "V \u221d h" },
            { "verbal_explanation": "שלב 2: לכן, כל שינוי שנעשה לגובה, יקרה בדיוק באותו אופן לנפח הכולל.", "math_expression": "h * 3 \u2192 V * 3" },
            { "verbal_explanation": "שלב 3: הנפח פשוט יוכפל פי 3.", "math_expression": "פי 3" }
        ],
        "final_answer": "פי 3",
        "options": ["פי 9", "פי 3", "פי 6", "הנפח לא ישתנה"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "איזו צורה גיאומטרית מתקבלת אם אנו לוקחים מעטפת של גליל, חותכים אותה לאורך, ו<strong>פורסים אותה על השולחן</strong>?",
        "hint": "דמיינו שאתם גוזרים תווית של בקבוק קולה ומיישרים אותה. איזה מצולע אתם מקבלים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המעטפת של הגליל עוטפת את הבסיסים העגולים.", "math_expression": "גליל עגול" },
            { "verbal_explanation": "שלב 2: כאשר פורסים את המעטפת, האורך העגול נפתח לקו ישר ארוך (השווה להיקף הבסיס). הגובה נשאר ישר (הגובה של הגליל).", "math_expression": "פתיחה \u2192 קווים ישרים" },
            { "verbal_explanation": "שלב 3: הצורה הנוצרת משני קווים ישרים אופקיים ושניים אנכיים היא מלבן.", "math_expression": "מלבן" }
        ],
        "final_answer": "מלבן",
        "options": ["עיגול", "משולש", "מלבן", "טרפז"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "High",
        "question_text": "מיכל גלילי (ללא מכסה עליון) מיועד לצביעה <strong>מבחוץ בלבד</strong>. רדיוס הבסיס <strong>2 מטרים</strong> והגובה <strong>5 מטרים</strong>. מהו השטח שצריך לצבוע?",
        "hint": "צובעים את המעטפת מסביב (2*pi*r*h) ורק את הרצפה (pi*r²). אין מכסה למעלה!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את שטח המעטפת שמסביב למיכל. 2 כפול 2 כפול 5 כפול פאי שווה ל-20pi.", "math_expression": "מעטפת = 2 * pi * 2 * 5 = 20pi" },
            { "verbal_explanation": "שלב 2: נחשב את שטח הרצפה (בסיס אחד בלבד, כי אין מכסה). רדיוס בריבוע כפול פאי זה 4pi.", "math_expression": "בסיס יחיד = pi * 2² = 4pi" },
            { "verbal_explanation": "שלב 3: נחבר את שני השטחים שיש לצבוע יחד.", "math_expression": "20pi + 4pi = 24pi" }
        ],
        "final_answer": "24pi מ\"ר",
        "options": ["20pi מ\"ר", "28pi מ\"ר", "24pi מ\"ר", "40pi מ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "גליל ישר (שטח ונפח)",
        "difficulty": "Low",
        "question_text": "גליל א' וגליל ב' בעלי <strong>אותו נפח בדיוק</strong>. לגליל א' יש בסיס צר ושטחו קטן. מה ניתן להסיק בהכרח על <strong>הגובה</strong> של גליל א' לעומת ב'?",
        "hint": "תחשבו על כוס צרה וגבוהה לעומת קערה רחבה ונמוכה. אם הן מכילות אותה כמות מים, מי תהיה גבוהה יותר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנפח שווה למכפלה של שטח הבסיס בגובה. כלומר, V הוא קבוע לשניהם.", "math_expression": "V = B * h = קבוע" },
            { "verbal_explanation": "שלב 2: כדי שהמכפלה תישאר שווה, אם מקטינים משמעותית את שטח הבסיס (B קטן), חייבים לפצות על כך בהגדלת הגובה (h גדול).", "math_expression": "\u2193 B \u2192 \u2191 h" },
            { "verbal_explanation": "שלב 3: מכאן מסיקים שגליל א' (הצר) חייב להיות גבוה יותר מגליל ב'.", "math_expression": "גליל א' גבוה יותר" }
        ],
        "final_answer": "גליל א' חייב להיות גבוה יותר מגליל ב'.",
        "options": ["גובהם זהה.", "גליל א' חייב להיות גבוה יותר מגליל ב'.", "גליל ב' חייב להיות גבוה יותר מגליל א'.", "אי אפשר לדעת ללא מספרים."],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: זוויות במצולע וסכום זוויות (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Low",
        "question_text": "מהו סכום כל הזוויות הפנימיות בתוך <strong>משולש</strong>?",
        "hint": "זהו כלל היסוד של כל הגיאומטריה של מצולעים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: משולש הוא המצולע הפשוט ביותר האפשרי (בעל 3 צלעות).", "math_expression": "n = 3" },
            { "verbal_explanation": "שלב 2: משפט בסיסי בגיאומטריה קובע שסכום זוויותיו הפנימיות תמיד זהה, ולא משנה מהי צורתו.", "math_expression": "סכום = 180°" }
        ],
        "final_answer": "180 מעלות",
        "options": ["90 מעלות", "360 מעלות", "180 מעלות", "270 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 47,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Low",
        "question_text": "מהו סכום הזוויות הפנימיות בתוך כל <strong>מרובע</strong> (כולל ריבוע, מלבן, מקבילית או מרובע סתם)?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><polygon points='10,90 90,90 70,10 30,30' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='90' x2='70' y2='10' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/></svg></div>",
        "hint": "כל מרובע אפשר לחלק לשני משולשים (על ידי מתיחת אלכסון אחד). אם בכל משולש יש 180 מעלות, כמה יש בשניהם יחד?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניתן לחלק כל מרובע בדיוק ל-2 משולשים על ידי מתיחת אלכסון המחבר קודקודים נגדיים.", "math_expression": "מרובע = 2 משולשים" },
            { "verbal_explanation": "שלב 2: מכיוון שכל משולש מכיל 180 מעלות, נכפיל 180 ב-2.", "math_expression": "2 * 180" },
            { "verbal_explanation": "שלב 3: נקבל את סכום הזוויות הכולל של כל מרובע באשר הוא.", "math_expression": "360°" }
        ],
        "final_answer": "360 מעלות",
        "options": ["180 מעלות", "360 מעלות", "540 מעלות", "90 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "מהי <strong>הנוסחה הכללית</strong> לחישוב סכום הזוויות הפנימיות במצולע בעל <strong>n צלעות</strong>?",
        "hint": "הנוסחה מבוססת על כך שממצולע בעל n צלעות ניתן ליצור בדיוק (n-2) משולשים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מספר המשולשים שניתן ליצור מתוך קודקוד אחד במצולע תמיד קטן ב-2 ממספר הצלעות שלו.", "math_expression": "משולשים = (n - 2)" },
            { "verbal_explanation": "שלב 2: לכל משולש שנוצר יש 180 מעלות.", "math_expression": "כל משולש = 180°" },
            { "verbal_explanation": "שלב 3: נכפיל את מספר המשולשים האפשריים ב-180 מעלות לקבלת הנוסחה הכללית.", "math_expression": "S = 180(n - 2)" }
        ],
        "final_answer": "180 * (n - 2)",
        "options": ["180 * n", "360 * n", "180 * (n - 2)", "360 * (n - 2)"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "חשבו את סכום הזוויות הפנימיות של <strong>מחומש</strong> (מצולע בעל 5 צלעות).",
        "hint": "הציבו את המספר 5 במקום n בנוסחה: 180 כפול (5 פחות 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במחומש מספר הצלעות הוא חמש.", "math_expression": "n = 5" },
            { "verbal_explanation": "שלב 2: נציב בנוסחה למציאת הסכום (S).", "math_expression": "S = 180 * (5 - 2)" },
            { "verbal_explanation": "שלב 3: נחשב את הסוגריים (5 פחות 2 הם 3). כעת נכפיל 180 ב-3.", "math_expression": "S = 180 * 3 = 540" }
        ],
        "final_answer": "540 מעלות",
        "options": ["360 מעלות", "720 מעלות", "540 מעלות", "900 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "חשבו את סכום הזוויות הפנימיות של <strong>משושה</strong> (מצולע בעל 6 צלעות).",
        "hint": "הציבו 6 בנוסחה. תקבלו 180 כפול (6 פחות 2), שזה 180 כפול 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למשושה יש 6 צלעות.", "math_expression": "n = 6" },
            { "verbal_explanation": "שלב 2: נשתמש בנוסחת סכום הזוויות הפנימיות: 180 כפול (n-2).", "math_expression": "S = 180 * (6 - 2)" },
            { "verbal_explanation": "שלב 3: משושה מתחלק ל-4 משולשים. נכפיל 180 ב-4 ונקבל את סכום הזוויות.", "math_expression": "S = 180 * 4 = 720" }
        ],
        "final_answer": "720 מעלות",
        "options": ["540 מעלות", "720 מעלות", "900 מעלות", "1080 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Low",
        "question_text": "כיצד מוגדר <strong>מצולע משוכלל</strong> בגיאומטריה?",
        "hint": "המילה 'משוכלל' (Regular) משמעותה 'מושלם' וסימטרי לחלוטין מכל הכיוונים, כמו ריבוע למשל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי שמצולע ייקרא 'משוכלל' הוא חייב להיות סימטרי במלואו.", "math_expression": "סימטריה מלאה" },
            { "verbal_explanation": "שלב 2: התנאי הראשון: כל הצלעות שלו חייבות להיות שוות זו לזו באורכן.", "math_expression": "כל הצלעות שוות" },
            { "verbal_explanation": "שלב 3: התנאי השני: כל הזוויות הפנימיות שלו חייבות להיות שוות זו לזו בגודלן.", "math_expression": "כל הזוויות שוות" }
        ],
        "final_answer": "מצולע שכל צלעותיו שוות וגם כל זוויותיו שוות.",
        "options": ["מצולע שיש לו מספר זוגי של צלעות.", "מצולע שכל צלעותיו שוות וגם כל זוויותיו שוות.", "מצולע שיש בו רק זוויות חדות.", "מצולע שיש בו אלכסונים שווים."],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "מהו גודלה של <strong>זווית פנימית אחת</strong> במחומש <strong>משוכלל</strong>?",
        "hint": "מצאנו קודם שסכום כל הזוויות במחומש הוא 540 מעלות. מכיוון שהוא משוכלל, כל ה-5 שוות! חלקו 540 ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב או ניזכר בסכום הזוויות הכולל של מחומש. לפי הנוסחה (180 כפול 3) זה 540 מעלות.", "math_expression": "סכום = 540°" },
            { "verbal_explanation": "שלב 2: מכיוון שהוא משוכלל, ה-540 מעלות האלו מתחלקות באופן שווה בדיוק בין 5 הזוויות שלו.", "math_expression": "זווית = 540 / 5" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החילוק. 500 חלקי 5 זה 100, ו-40 חלקי 5 זה 8.", "math_expression": "זווית יחידה = 108°" }
        ],
        "final_answer": "108 מעלות",
        "options": ["72 מעלות", "108 מעלות", "90 מעלות", "120 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "מהו גודלה של <strong>זווית פנימית אחת</strong> במשושה <strong>משוכלל</strong>?",
        "hint": "סכום הזוויות במשושה הוא 720 מעלות. חלקו את הסכום הזה ל-6 זוויות שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניזכר שסכום כלל הזוויות במשושה הוא 720° (180 כפול 4).", "math_expression": "סכום = 720°" },
            { "verbal_explanation": "שלב 2: במשושה משוכלל יש 6 קודקודים שווים. נחלק את הסך הכל למספר הקודקודים.", "math_expression": "זווית = 720 / 6" },
            { "verbal_explanation": "שלב 3: 72 חלקי 6 זה 12, ועם האפס זה 120 מעלות לכל זווית.", "math_expression": "זווית יחידה = 120°" }
        ],
        "final_answer": "120 מעלות",
        "options": ["108 מעלות", "135 מעלות", "120 מעלות", "60 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "כלל ברזל מרתק בגיאומטריה: מהו סכום כל ה<strong>זוויות החיצוניות</strong> של <strong>כל מצולע קמור בעולם</strong> (משולש, משושה, או מצולע עם 100 צלעות)?",
        "hint": "זווית חיצונית היא הזווית שמשלימה ל-180 מעלות על קו ישר בחוץ. אם נאסוף את כל הסיבובים החיצוניים, נסגור תמיד מעגל שלם אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניגוד לזוויות הפנימיות שמשתנות וגדלות ככל שיש יותר צלעות, הזוויות החיצוניות שומרות על קבוע מדהים.", "math_expression": "פנימי גדל, חיצוני קבוע" },
            { "verbal_explanation": "שלב 2: אם נצעד מסביב לכל מצולע ונחבר את כל זוויות הפנייה החיצוניות, נסגור תמיד מעגל שלם.", "math_expression": "מעגל שלם" },
            { "verbal_explanation": "שלב 3: מעגל שלם תמיד שווה ל-360 מעלות. לכן סכום החיצוניות הוא 360° תמיד.", "math_expression": "סכום חיצוניות = 360°" }
        ],
        "final_answer": "360 מעלות",
        "options": ["180 מעלות", "360 מעלות", "720 מעלות", "תלוי במספר הצלעות"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "מתוך הכלל שלמדנו: מהו גודלה של <strong>זווית חיצונית אחת</strong> במתומן (8 צלעות) <strong>משוכלל</strong>?",
        "hint": "סכום כל הזוויות החיצוניות הוא 360. במתומן יש 8 פניות כאלו. חלקו 360 ב-8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו יודעים שסכום כל הזוויות החיצוניות של מצולע הוא תמיד 360 מעלות.", "math_expression": "סכום חיצוני = 360°" },
            { "verbal_explanation": "שלב 2: מכיוון שהמתומן משוכלל, כל 8 הזוויות החיצוניות שלו שוות בדיוק זו לזו.", "math_expression": "8 זוויות שוות" },
            { "verbal_explanation": "שלב 3: נחלק את הסכום הכולל ב-8. התוצאה היא 45 מעלות.", "math_expression": "360 / 8 = 45°" }
        ],
        "final_answer": "45 מעלות",
        "options": ["60 מעלות", "45 מעלות", "135 מעלות", "36 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 56,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "סכום הזוויות הפנימיות של מצולע מסוים הוא <strong>1080 מעלות</strong>. <strong>כמה צלעות</strong> יש למצולע הזה?",
        "hint": "השתמשו בנוסחה ההפוכה: 180(n-2) = 1080. חלקו ב-180 כדי למצוא את כמות המשולשים (n-2), ואז הוסיפו 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הסכום בנוסחת סכום הזוויות: 180 כפול (n-2) שווה 1080.", "math_expression": "180(n - 2) = 1080" },
            { "verbal_explanation": "שלב 2: נחלק את המשוואה ב-180. 1080 לחלק ל-180 הם בדיוק 6. זה אומר שיש בו 6 משולשים פנימיים.", "math_expression": "n - 2 = 6" },
            { "verbal_explanation": "שלב 3: נעביר את מינוס 2 לאגף השני כפלוס, ונגלה שמספר הצלעות n הוא 8. (זהו מתומן).", "math_expression": "n = 6 + 2 = 8" }
        ],
        "final_answer": "8 צלעות (מתומן)",
        "options": ["6 צלעות", "10 צלעות", "8 צלעות (מתומן)", "12 צלעות"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "למצולע משוכלל יש <strong>זווית חיצונית</strong> אחת שגודלה הוא <strong>30 מעלות</strong>. כמה צלעות יש למצולע?",
        "hint": "כל הזוויות החיצוניות יחד תמיד סוגרות 360 מעלות. כמה פניות של 30 מעלות צריך כדי להגיע ל-360?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום הזוויות החיצוניות במצולע הוא קבוע - 360 מעלות.", "math_expression": "סך הכל = 360°" },
            { "verbal_explanation": "שלב 2: כל זווית בודדת תורמת 30 מעלות למעגל השלם.", "math_expression": "זווית = 30°" },
            { "verbal_explanation": "שלב 3: נחלק את הסכום הכולל (360) בגודל של זווית אחת (30) כדי לגלות כמה זוויות/צלעות יש שם.", "math_expression": "n = 360 / 30 = 12" }
        ],
        "final_answer": "12 צלעות",
        "options": ["10 צלעות", "12 צלעות", "15 צלעות", "8 צלעות"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "Medium",
        "question_text": "במרובע סתמי, ידועות שלוש זוויות פנימיות: <strong>100°, 80°, ו- 70°</strong>. מה גודלה של <strong>הזווית הרביעית</strong>?",
        "hint": "סכום כל ארבע הזוויות במרובע הוא תמיד 360°. חברו את השלוש הידועות, והחסירו את התוצאה מ-360.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו יודעים שסך כל המעלות בכל מרובע הוא תמיד 360.", "math_expression": "סכום כללי = 360°" },
            { "verbal_explanation": "שלב 2: נחבר את שלוש הזוויות הידועות לנו: 100 ועוד 80 זה 180. ועוד 70 זה 250.", "math_expression": "100 + 80 + 70 = 250" },
            { "verbal_explanation": "שלב 3: הזווית החסרה היא מה שצריך כדי להשלים ל-360. נחסיר 250 מ-360 ונקבל 110.", "math_expression": "360 - 250 = 110" }
        ],
        "final_answer": "110 מעלות",
        "options": ["100 מעלות", "110 מעלות", "90 מעלות", "130 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "טריק של אלופים: מצולע משוכלל בעל זווית <strong>פנימית</strong> של <strong>144 מעלות</strong>. כמה צלעות יש לו?",
        "hint": "אל תסתבכו עם משוואות ארוכות! מצאו קודם את הזווית ה*חיצונית* (היא משלימה ל-180, לכן היא 36°). אז כמה פעמים 36 נכנס ב-360?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית פנימית וזווית חיצונית תמיד יושבות על קו ישר ומשלימות ל-180. אם הפנימית היא 144, החיצונית היא 36.", "math_expression": "חיצונית = 180 - 144 = 36°" },
            { "verbal_explanation": "שלב 2: סכום כל הזוויות החיצוניות יחד הוא 360. נמצא כמה זוויות של 36 מעלות נכנסות בו.", "math_expression": "n = 360 / 36" },
            { "verbal_explanation": "שלב 3: 360 חלקי 36 שווה 10. למצולע זה יש 10 צלעות.", "math_expression": "n = 10" }
        ],
        "final_answer": "10 צלעות",
        "options": ["8 צלעות", "12 צלעות", "10 צלעות", "9 צלעות"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "זוויות במצולע וסכום זוויות",
        "difficulty": "High",
        "question_text": "האם ייתכן שקיים <strong>מצולע משוכלל</strong> שהזווית הפנימית שלו היא בדיוק <strong>130 מעלות</strong>?",
        "hint": "מצאו את הזווית החיצונית (180 פחות 130 שווה 50). האם מספר הצלעות יכול להיות 360 לחלק ל-50? האם זו תוצאה שלמה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את הזווית החיצונית הצמודה לה. אם הפנימית היא 130, החיצונית חייבת להיות 50.", "math_expression": "חיצונית = 180 - 130 = 50°" },
            { "verbal_explanation": "שלב 2: מספר הצלעות חייב להיות מספר שלם, והוא מחושב על ידי חלוקת 360° בזווית החיצונית.", "math_expression": "n = 360 / 50" },
            { "verbal_explanation": "שלב 3: 360 לחלק ל-50 הם 7.2. לא ייתכן מצולע עם 7.2 צלעות! לכן צורה כזו אינה אפשרית מתמטית.", "math_expression": "7.2 אינו שלם" }
        ],
        "final_answer": "לא, הדבר אינו אפשרי מתמטית.",
        "options": ["כן, מדובר במצולע בעל 7 צלעות.", "לא, הדבר אינו אפשרי מתמטית.", "כן, אבל רק אם השטח שלו גדול מאוד.", "אפשרי רק במשולש."],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 5: אלכסונים במצולע (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Low",
        "question_text": "אלכסון מוגדר כקטע המחבר בין שני קודקודים שאינם סמוכים (לא שכנים). כמה אלכסונים ניתן להעביר מ<strong>קודקוד אחד</strong> במצולע בעל <strong>n צלעות</strong>?",
        "hint": "מקודקוד אחד אי אפשר להעביר אלכסון לעצמו, וגם לא לשני השכנים שלו מימין ומשמאל. לכן, מחסרים 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על קודקוד יחיד. אנו רוצים למתוח ממנו קווים (אלכסונים) לכל שאר הקודקודים.", "math_expression": "סה\"כ קודקודים = n" },
            { "verbal_explanation": "שלב 2: אי אפשר למתוח אלכסון אל הקודקוד עצמו (זה 1), ואי אפשר למתוח לשני השכנים שלו, כי אלו הן פשוט הצלעות של המצולע (זה עוד 2).", "math_expression": "נפסלים = 3" },
            { "verbal_explanation": "שלב 3: לכן, מתוך n קודקודים, תמיד נפסלים 3. הנוסחה היא n-3.", "math_expression": "n - 3" }
        ],
        "final_answer": "n - 3",
        "options": ["n - 2", "n - 3", "n / 2", "n - 4"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Low",
        "question_text": "כמה אלכסונים ניתן למתוח מ<strong>קודקוד אחד ויחיד</strong> בתוך <strong>מתומן</strong> (מצולע בעל 8 צלעות)?",
        "hint": "השתמשו בנוסחה מהשאלה הקודמת: חסרו 3 ממספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במתומן יש 8 צלעות (ולכן 8 קודקודים).", "math_expression": "n = 8" },
            { "verbal_explanation": "שלב 2: לפי הכלל, מקודקוד אחד ניתן למתוח אלכסונים לכל הקודקודים למעט שלושה (לעצמו ולשני שכניו).", "math_expression": "אלכסונים = n - 3" },
            { "verbal_explanation": "שלב 3: נציב: 8 פחות 3 שווה 5.", "math_expression": "8 - 3 = 5" }
        ],
        "final_answer": "5 אלכסונים",
        "options": ["8 אלכסונים", "4 אלכסונים", "6 אלכסונים", "5 אלכסונים"],
        "correctAnswer": 3
    },
    {
        "id": 63,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "מהי <strong>הנוסחה המלאה</strong> לחישוב מספר האלכסונים <strong>הכולל</strong> במצולע בעל n צלעות?",
        "hint": "מכל קודקוד יוצאים n-3 אלכסונים. כופלים במספר הקודקודים (n), אבל אז כל אלכסון נספר פעמיים (הלוך וחזור)! לכן מחלקים ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מקודקוד בודד יוצאים n-3 אלכסונים.", "math_expression": "מקודקוד אחד = n - 3" },
            { "verbal_explanation": "שלב 2: יש לנו n קודקודים כאלו במצולע. לכן נכפיל: n כפול (n-3).", "math_expression": "n * (n - 3)" },
            { "verbal_explanation": "שלב 3: מכיוון שאלכסון מ-A ל-B הוא אותו אלכסון כמו מ-B ל-A, ספרנו הכל כפול. לכן חייבים לחלק את התוצאה ב-2.", "math_expression": "n(n - 3) / 2" }
        ],
        "final_answer": "n(n - 3) / 2",
        "options": ["n(n - 2) / 2", "n(n - 3) / 2", "n(n - 3)", "180(n - 2)"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "כמה אלכסונים <strong>בסך הכל</strong> יש בתוך <strong>מחומש</strong> (5 צלעות)?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><polygon points='50,10 90,40 75,90 25,90 10,40' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><line x1='50' y1='10' x2='75' y2='90' stroke='#b09151' stroke-width='1.5'/><line x1='50' y1='10' x2='25' y2='90' stroke='#b09151' stroke-width='1.5'/><line x1='90' y1='40' x2='25' y2='90' stroke='#b09151' stroke-width='1.5'/><line x1='90' y1='40' x2='10' y2='40' stroke='#b09151' stroke-width='1.5'/><line x1='75' y1='90' x2='10' y2='40' stroke='#b09151' stroke-width='1.5'/></svg></div>",
        "hint": "הציבו את המספר 5 בנוסחה n(n-3)/2. (5 כפול 2 לחלק ל-2). צורת הכוכב שבפנים תעזור לכם לספור!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במחומש יש 5 צלעות.", "math_expression": "n = 5" },
            { "verbal_explanation": "שלב 2: נציב בנוסחת מספר האלכסונים הכולל.", "math_expression": "5 * (5 - 3) / 2" },
            { "verbal_explanation": "שלב 3: נחשב: 5 פחות 3 זה 2. 5 כפול 2 שווה 10. 10 לחלק ל-2 שווה 5. נוצר כוכב מושלם (פנטגרם) בעל 5 קווים.", "math_expression": "10 / 2 = 5" }
        ],
        "final_answer": "5 אלכסונים",
        "options": ["10 אלכסונים", "8 אלכסונים", "5 אלכסונים", "15 אלכסונים"],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Low",
        "question_text": "כמה אלכסונים <strong>בסך הכל</strong> יש בתוך <strong>משולש</strong>?",
        "hint": "חישבו בהיגיון: האם יש קודקוד במשולש שלא מחובר כבר לקודקוד אחר בעזרת צלע?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במשולש יש 3 צלעות ו-3 קודקודים.", "math_expression": "n = 3" },
            { "verbal_explanation": "שלב 2: כל קודקוד כבר מחובר לשני הקודקודים האחרים באמצעות צלעות. אין אף 'קודקוד רחוק'.", "math_expression": "כולם שכנים" },
            { "verbal_explanation": "שלב 3: נבדוק גם עם הנוסחה. הצבה של n=3 תיתן: 3 כפול (3-3) לחלק ל-2. שזה 0 לחלק ל-2.", "math_expression": "3 * 0 / 2 = 0" }
        ],
        "final_answer": "0 אלכסונים",
        "options": ["1 אלכסון", "3 אלכסונים", "0 אלכסונים", "2 אלכסונים"],
        "correctAnswer": 2
    },
    {
        "id": 66,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "כמה אלכסונים בסך הכל יש ב<strong>מתומן</strong> (מצולע בעל 8 צלעות)?",
        "hint": "הציבו n=8 בנוסחה. הכפילו 8 ב-(8-3), וחלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מספר הצלעות: 8.", "math_expression": "n = 8" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים בנוסחת האלכסונים.", "math_expression": "8 * (8 - 3) / 2" },
            { "verbal_explanation": "שלב 3: נחשב את הסוגריים: 8 כפול 5 הם 40. 40 לחלק ל-2 הם 20.", "math_expression": "40 / 2 = 20" }
        ],
        "final_answer": "20 אלכסונים",
        "options": ["40 אלכסונים", "16 אלכסונים", "24 אלכסונים", "20 אלכסונים"],
        "correctAnswer": 3
    },
    {
        "id": 67,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "כאשר מעבירים את כל האלכסונים האפשריים מ<strong>קודקוד אחד</strong> בלבד במצולע בעל n צלעות, המצולע מתחלק ל<strong>משולשים</strong>. לכמה משולשים מתחלק המצולע?",
        "hint": "בכל מצולע, מספר המשולשים שנוצרים תמיד קטן ב-2 ממספר הצלעות (זה גם הבסיס לנוסחת סכום הזוויות 180 כפול n-2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אלכסונים היוצאים מקודקוד אחד חותכים את המצולע כמו 'פרוסות פיצה' של משולשים.", "math_expression": "חלוקה למשולשים" },
            { "verbal_explanation": "שלב 2: במרובע (4 צלעות), אלכסון אחד יוצר 2 משולשים. במחומש (5 צלעות), 2 אלכסונים יוצרים 3 משולשים.", "math_expression": "דוגמאות: 4\u21922 , 5\u21923" },
            { "verbal_explanation": "שלב 3: החוקיות קובעת שמספר המשולשים תמיד קטן ב-2 ממספר הצלעות הכללי.", "math_expression": "n - 2" }
        ],
        "final_answer": "n - 2",
        "options": ["n - 3", "n - 2", "n / 2", "n - 1"],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "High",
        "question_text": "שאלה הפוכה: במצולע מסוים יש בדיוק <strong>9 אלכסונים בסך הכל</strong>. כמה <strong>צלעות</strong> יש למצולע זה?",
        "hint": "הציבו 9 כתוצאה של הנוסחה. איזה מספר כפול (המספר שקטן ממנו ב-3) שווה ל-18 (כי הכפלנו את ה-9 פי 2)? נסו להציב את התשובות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המשוואה: מספר האלכסונים הכולל שווה ל-9.", "math_expression": "n(n - 3) / 2 = 9" },
            { "verbal_explanation": "שלב 2: נכפיל את המשוואה ב-2 כדי להיפטר מהשבר.", "math_expression": "n(n - 3) = 18" },
            { "verbal_explanation": "שלב 3: עלינו למצוא שני מספרים שההפרש ביניהם הוא 3, ומכפלתם 18. אלו הם 6 ו-3.", "math_expression": "6 * 3 = 18" },
            { "verbal_explanation": "שלב 4: לכן, המספר הגדול (n) הוא 6. המצולע הוא משושה.", "math_expression": "n = 6" }
        ],
        "final_answer": "6 צלעות",
        "options": ["7 צלעות", "8 צלעות", "5 צלעות", "6 צלעות"],
        "correctAnswer": 3
    },
    {
        "id": 69,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "High",
        "question_text": "חידת הגיאומטריה: באיזה מצולע מספר האלכסונים <strong>הכולל</strong> שווה <strong>בדיוק</strong> למספר הצלעות שלו?",
        "hint": "חפשו מצולע שבו הנוסחה נותנת תוצאה זהה ל-n. (רמז: ראינו אותו כצורה של 'כוכב' לפני כמה שאלות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרכיב משוואה: מספר האלכסונים שווה למספר הצלעות (n).", "math_expression": "n(n - 3) / 2 = n" },
            { "verbal_explanation": "שלב 2: נחלק את שני האגפים ב-n (הרי n אינו אפס). נקבל (n-3) חלקי 2 שווה ל-1.", "math_expression": "(n - 3) / 2 = 1" },
            { "verbal_explanation": "שלב 3: נכפיל פי 2, ונקבל n-3 = 2.", "math_expression": "n - 3 = 2" },
            { "verbal_explanation": "שלב 4: נעביר את 3 אגף ונגלה שהתשובה היא 5. זהו המחומש (שיש בו 5 צלעות ו-5 אלכסונים).", "math_expression": "n = 5" }
        ],
        "final_answer": "מחומש (5 צלעות)",
        "options": ["מרובע (4 צלעות)", "משושה (6 צלעות)", "מחומש (5 צלעות)", "אין מצולע כזה"],
        "correctAnswer": 2
    },
    {
        "id": 70,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "כמה אלכסונים בסך הכל יש ב<strong>מרובע</strong> (4 צלעות)?",
        "hint": "חישבו על ריבוע רגיל. מכל פינה ניתן למתוח קו רק לפינה הנגדית לה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב n=4 בנוסחה או נצייר את זה בראש.", "math_expression": "n = 4" },
            { "verbal_explanation": "שלב 2: הנוסחה: 4 כפול (4-3) לחלק ל-2.", "math_expression": "4 * 1 / 2" },
            { "verbal_explanation": "שלב 3: 4 לחלק ל-2 הם בדיוק 2. בכל מרובע (כמו ריבוע או מלבן) תמיד יהיו שני אלכסונים בצורת X.", "math_expression": "2" }
        ],
        "final_answer": "2 אלכסונים",
        "options": ["4 אלכסונים", "2 אלכסונים", "1 אלכסון", "6 אלכסונים"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "מה ההפרש בין מספר האלכסונים הכולל ב<strong>משושה</strong> (6 צלעות) לבין מספר האלכסונים הכולל ב<strong>מחומש</strong> (5 צלעות)?",
        "hint": "חשבו כמה יש במשושה (6 כפול 3 חלקי 2). כמה יש במחומש כבר מצאנו קודם. החסירו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב למשושה (n=6). 6 כפול (6-3) זה 18. נחלק ב-2 ונקבל 9 אלכסונים למשושה.", "math_expression": "משושה = 9" },
            { "verbal_explanation": "שלב 2: נזכור או נחשב למחומש (n=5). 5 כפול (5-3) זה 10. נחלק ב-2 ונקבל 5 אלכסונים למחומש.", "math_expression": "מחומש = 5" },
            { "verbal_explanation": "שלב 3: ההפרש בין 9 ל-5 הוא 4.", "math_expression": "9 - 5 = 4" }
        ],
        "final_answer": "4",
        "options": ["2", "3", "4", "5"],
        "correctAnswer": 2
    },
    {
        "id": 72,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "High",
        "question_text": "במצולע מסוים יש <strong>14 אלכסונים בסך הכל</strong>. מהו שמו של המצולע (כמה צלעות יש לו)?",
        "hint": "הציבו את התשובות האפשריות מתוך האפשרויות ובדקו מי נותנת בדיוק 14 אלכסונים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשוואה היא n(n-3)/2 = 14.", "math_expression": "n(n - 3) / 2 = 14" },
            { "verbal_explanation": "שלב 2: נכפיל פי 2 לקבלת מכפלת מספרים. אנו מחפשים איזה מספר, כפול המספר שקטן ממנו ב-3, ייתן 28.", "math_expression": "n(n - 3) = 28" },
            { "verbal_explanation": "שלב 3: נחשוב על גורמים של 28. 7 כפול 4 הם 28. מכיוון ש-7 גדול מ-4 בדיוק ב-3, זוהי התשובה.", "math_expression": "7 * 4 = 28 \u2192 n=7" }
        ],
        "final_answer": "7 צלעות (משובע)",
        "options": ["6 צלעות", "7 צלעות (משובע)", "8 צלעות", "9 צלעות"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "High",
        "question_text": "אם <strong>מוסיפים צלע אחת</strong> למשולש כך שהוא הופך למרובע, <strong>כמה אלכסונים</strong> חדשים נוספים לצורה?",
        "hint": "כמה אלכסונים יש במשולש? וכמה יש במרובע? מהו ההפרש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למשולש (3 צלעות) אין שום אלכסונים כלל.", "math_expression": "משולש = 0" },
            { "verbal_explanation": "שלב 2: למרובע (4 צלעות) יש 2 אלכסונים מרכזיים בצורת X.", "math_expression": "מרובע = 2" },
            { "verbal_explanation": "שלב 3: המעבר ממשולש למרובע הוסיף לנו בדיוק 2 אלכסונים.", "math_expression": "2 - 0 = 2" }
        ],
        "final_answer": "נוספו 2 אלכסונים",
        "options": ["נוסף 1", "נוספו 2 אלכסונים", "נוספו 3", "נוספו 4"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "Medium",
        "question_text": "כמה אלכסונים בסך הכל יש במצולע בעל <strong>10 צלעות (מעושר)</strong>?",
        "hint": "הציבו 10 בנוסחה: 10 כפול 7, ואת התוצאה חלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מזהים n=10.", "math_expression": "n = 10" },
            { "verbal_explanation": "שלב 2: נציב: 10 כפול (10-3) זה 10 כפול 7. התוצאה היא 70.", "math_expression": "10 * 7 = 70" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 כפי שהנוסחה דורשת כדי למנוע ספירה כפולה. חצי מ-70 זה 35.", "math_expression": "70 / 2 = 35" }
        ],
        "final_answer": "35 אלכסונים",
        "options": ["70 אלכסונים", "45 אלכסונים", "35 אלכסונים", "40 אלכסונים"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "אלכסונים במצולע",
        "difficulty": "High",
        "question_text": "שאלת אתגר משולבת! במצולע מסוים יש בדיוק <strong>20 אלכסונים בסך הכל</strong>. מהו <strong>סכום הזוויות הפנימיות</strong> של המצולע הזה?",
        "hint": "פתרו בשני שלבים: 1. מצאו כמה צלעות (n) יש למצולע עם 20 אלכסונים. 2. הציבו את ה-n שמצאתם בנוסחת סכום הזוויות: 180(n-2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את n. הנוסחה נותנת 20, כלומר n(n-3) = 40. המספרים הם 8 ו-5 (הפרש 3 ומכפלה 40). לכן n=8 (זהו מתומן!).", "math_expression": "n(n-3) = 40 \u2192 n=8" },
            { "verbal_explanation": "שלב 2: כעת נחשב סכום זוויות למתומן. נציב n=8 בנוסחה 180(n-2).", "math_expression": "180 * (8 - 2)" },
            { "verbal_explanation": "שלב 3: 180 כפול 6 שווה ל-1080 מעלות. עשינו זאת!", "math_expression": "180 * 6 = 1080°" }
        ],
        "final_answer": "1080 מעלות",
        "options": ["720 מעלות", "900 מעלות", "1080 מעלות", "1440 מעלות"],
        "correctAnswer": 2
    }
];