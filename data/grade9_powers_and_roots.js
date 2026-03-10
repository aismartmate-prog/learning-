const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חוקי חזקות עם מעריך טבעי ואפס (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Low",
        "question_text": "פשטו את הביטוי הבא בעזרת חוקי החזקות: <strong>2³ * 2⁴</strong>. הציגו פתרון מלא הכולל את ההיגיון שמאחורי הפעולה.<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='90' viewBox='0 0 220 90'><rect x='10' y='10' width='200' height='70' rx='10' fill='#f0fdf4' stroke='#22c55e' stroke-width='2'/><text x='110' y='50' font-size='22' text-anchor='middle' font-weight='bold' fill='#166534'>2³ * 2⁴ = ?</text></svg></div>",
        "hint": "כאשר אנו כופלים חזקות בעלות בסיס זהה, עלינו לחבר את המעריכים (המספרים הקטנים למעלה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מבנה התרגיל. לפנינו פעולת כפל בין שתי חזקות בעלות בסיס זהה, שהוא המספר 2.", "math_expression": "2³ * 2⁴" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק הכפל של חזקות בעלות בסיס זהה. החוק קובע שיש להשאיר את הבסיס כפי שהוא ולחבר את המעריכים.", "math_expression": "2^(3 + 4)" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החיבור הפשוטה במעריך החזקה.", "math_expression": "2⁷" },
            { "verbal_explanation": "שלב 4: נחשב את הערך המספרי הסופי (הכפלת המספר 2 בעצמו 7 פעמים: 2 * 2 * 2 * 2 * 2 * 2 * 2).", "math_expression": "128" }
        ],
        "final_answer": "128",
        "options": ["128", "64", "2¹²", "14"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא: <strong>(a⁵)³</strong>. הציגו את חוק החזקות המתאים.",
        "hint": "זהו מצב הנקרא 'חזקה על חזקה'. במצב כזה יש לכפול את המעריך שבתוך הסוגריים במעריך שמחוץ להם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המבנה - בסיס המועלה לחזקה, וכל הביטוי הזה מועלה לחזקה נוספת מחוץ לסוגריים.", "math_expression": "(a⁵)³" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק 'חזקה של חזקה'. החוק אומר שכאשר מעלים חזקה בחזקה נוספת, יש לכפול את המעריכים זה בזה.", "math_expression": "a^(5 * 3)" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת הכפל כדי לקבל את הביטוי הסופי והמפושט.", "math_expression": "a¹⁵" }
        ],
        "final_answer": "a¹⁵",
        "options": ["a⁸", "a¹⁵", "a²", "5a³"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Low",
        "question_text": "חשבו את ערכו של הביטוי הבא: <strong>12⁰</strong>. נמקו את תשובתכם.",
        "hint": "קיים חוק מתמטי ברור הקובע מה קורה לכל מספר (שאינו אפס) המועלה לחזקת אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן את הביטוי. הבסיס הוא המספר 12 והמעריך (החזקה) הוא המספר אפס.", "math_expression": "12⁰" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק 'חזקת אפס'. החוק קובע שכל מספר בעולם (שאינו אפס בעצמו) המועלה לחזקת אפס, ערכו תמיד שווה ל-1.", "math_expression": "a⁰ = 1" },
            { "verbal_explanation": "שלב 3: לכן, התוצאה הסופית עבור התרגיל שלנו היא אחת.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["0", "12", "1", "לא מוגדר"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי: <strong>(4x)³</strong>. הקפידו לטפל נכון גם במספר וגם באות.",
        "hint": "חזקה הנמצאת מחוץ לסוגריים מתייחסת לכל אחד מהאיברים הנמצאים בתוך הסוגריים בנפרד (גם למספר וגם לאות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שבתוך הסוגריים קיימת מכפלה בין המקדם המספרי (4) לבין המשתנה (איקס).", "math_expression": "(4 * x)³" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק 'חזקה של מכפלה'. החוק מחייב להעלות לחזקה כל אחד מהגורמים בנפרד.", "math_expression": "4³ * x³" },
            { "verbal_explanation": "שלב 3: נחשב את הערך המספרי של 4 בחזקת 3 (ארבע כפול ארבע כפול ארבע שווה שישים וארבע).", "math_expression": "64 * x³" },
            { "verbal_explanation": "שלב 4: נרשום את הביטוי הסופי בצורה נכונה ונקייה.", "math_expression": "64x³" }
        ],
        "final_answer": "64x³",
        "options": ["4x³", "12x³", "64x³", "64x"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "פשטו את שבר החזקות הבא: <strong>b⁹ / b⁵</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100' viewBox='0 0 120 100'><text x='60' y='35' font-size='24' text-anchor='middle' font-weight='bold' fill='#1e293b'>b⁹</text><line x1='30' y1='50' x2='90' y2='50' stroke='#3b82f6' stroke-width='3'/><text x='60' y='85' font-size='24' text-anchor='middle' font-weight='bold' fill='#1e293b'>b⁵</text></svg></div>",
        "hint": "בחילוק של חזקות בעלות בסיס זהה, אנו שומרים על הבסיס ומבצעים פעולת חיסור בין המעריכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שמדובר בפעולת חילוק (שבר) בין שני ביטויים בעלי בסיס זהה, שהוא האות בי.", "math_expression": "b⁹ / b⁵" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק חילוק חזקות. החוק מורה לנו להחסיר את מעריך המכנה מתוך מעריך המונה.", "math_expression": "b^(9 - 5)" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת החיסור הפשוטה במעריך (תשע פחות חמש) לקבלת התוצאה.", "math_expression": "b⁴" }
        ],
        "final_answer": "b⁴",
        "options": ["b¹⁴", "b⁴", "b", "4b"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "High",
        "question_text": "חשבו את ערכו של הביטוי הבא על ידי צמצום חזקות: <strong>(3² * 3⁴) / 3³</strong>. הציגו את כל שלבי הדרך.",
        "hint": "לפי סדר פעולות החשבון, פשטו קודם את המונה (פעולת כפל פירושה חיבור מעריכים), ורק לאחר מכן בצעו את החילוק (חיסור מעריכים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל תחילה במונה של השבר. כפל של בסיסים זהים (המספר 3) מחייב לחבר את המעריכים שתיים וארבע.", "math_expression": "3^(2 + 4) = 3⁶" },
            { "verbal_explanation": "שלב 2: נרשום את התרגיל מחדש עם המונה המפושט.", "math_expression": "3⁶ / 3³" },
            { "verbal_explanation": "שלב 3: כעת נשתמש בחוק החילוק בין בסיסים זהים ונחסר את מעריך המכנה ממעריך המונה.", "math_expression": "3^(6 - 3)" },
            { "verbal_explanation": "שלב 4: נחשב את התוצאה של חיסור המעריכים.", "math_expression": "3³" },
            { "verbal_explanation": "שלב 5: נחשב את הערך המספרי הסופי. שלוש בחזקת שלוש זה שלוש כפול שלוש כפול שלוש.", "math_expression": "3 * 3 * 3 = 27" }
        ],
        "final_answer": "27",
        "options": ["9", "81", "27", "243"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא ככל הניתן: <strong>(x² * y)⁴ * x³</strong>. הקפידו לפתוח סוגריים בצורה נכונה.",
        "hint": "התחילו בפתיחת הסוגריים - העלו גם את איקס וגם את וואי בחזקת ארבע. לאחר מכן, כנסו את האיברים הדומים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק 'חזקה של מכפלה' כדי לפתוח את הסוגריים. החזקה הרביעית פועלת על כל אחד מהגורמים בפנים.", "math_expression": "(x²)⁴ * y⁴ * x³" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק 'חזקה על חזקה' (נכפיל מעריכים) כדי לפשט את האיקס הראשון.", "math_expression": "x⁸ * y⁴ * x³" },
            { "verbal_explanation": "שלב 3: נסדר את הביטוי ונקרב את האיברים בעלי הבסיס הזהה (המשתנה איקס) זה לזה.", "math_expression": "x⁸ * x³ * y⁴" },
            { "verbal_explanation": "שלב 4: נשתמש בחוק כפל חזקות ונחבר את המעריכים של איקס (שמונה ועוד שלוש).", "math_expression": "x¹¹ * y⁴" },
            { "verbal_explanation": "שלב 5: נרשום את הביטוי הסופי המצומצם ביותר.", "math_expression": "x¹¹y⁴" }
        ],
        "final_answer": "x¹¹y⁴",
        "options": ["x¹¹y⁴", "x⁹y⁴", "x²⁴y⁴", "x⁸y⁷"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Low",
        "question_text": "איזה מהביטויים הבאים שווה למכפלה: <strong>a * a * a * b * b</strong>?",
        "hint": "חזקה נועדה לקצר כתיבה של כפל חוזר. ספרו כמה פעמים מופיעה האות איי וכמה פעמים מופיעה האות בי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נספור כמה פעמים הבסיס הראשן (איי) מוכפל בעצמו. האות איי מופיעה 3 פעמים.", "math_expression": "a * a * a = a³" },
            { "verbal_explanation": "שלב 2: נספור כמה פעמים הבסיס השני (בי) מוכפל בעצמו. האות בי מופיעה 2 פעמים.", "math_expression": "b * b = b²" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות לפעולת כפל אחת מקוצרת.", "math_expression": "a³ * b²" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה הסופית המקובלת ללא סימן הכפל ביניהם.", "math_expression": "a³b²" }
        ],
        "final_answer": "a³b²",
        "options": ["3a + 2b", "a³b²", "a³ + b²", "(ab)⁵"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "חשבו וקבעו מה גדול יותר: <strong>(2³)²</strong> או <strong>2³ * 2²</strong>?",
        "hint": "פתרו כל ביטוי בנפרד. הביטוי הראשון דורש כפל מעריכים, והביטוי השני דורש חיבור מעריכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הביטוי הראשון, שהוא 'חזקה על חזקה'. נכפיל את שלוש בשתיים.", "math_expression": "2^(3 * 2) = 2⁶" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של שתיים בחזקת שש.", "math_expression": "2⁶ = 64" },
            { "verbal_explanation": "שלב 3: נחשב את הביטוי השני, שהוא כפל של בסיסים זהים. כאן נחבר את שלוש ושתיים.", "math_expression": "2^(3 + 2) = 2⁵" },
            { "verbal_explanation": "שלב 4: נחשב את הערך של שתיים בחזקת חמש.", "math_expression": "2⁵ = 32" },
            { "verbal_explanation": "שלב 5: נבצע השוואה מספרית. שישים וארבע גדול מ-32, לכן הביטוי הראשון גדול יותר.", "math_expression": "64 > 32" }
        ],
        "final_answer": "(2³)² גדול יותר.",
        "options": ["הם שווים", "(2³)² גדול יותר.", "2³ * 2² גדול יותר.", "שניהם שווים ל-12"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי המורכב הבא: <strong>(x⁴ / x³)⁵</strong>. הקפידו על סדר פעולות נכון.",
        "hint": "תמיד קל יותר קודם לפשט את מה שנמצא בתוך הסוגריים (בעזרת חוק חיסור מעריכים), ורק אז להתייחס לחזקה החיצונית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד בשבר שבתוך הסוגריים. נשתמש בחוק החילוק המחייב לחסר מעריכים (ארבע פחות שלוש).", "math_expression": "x^(4 - 3) = x¹" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה שקיבלנו בחזרה לתוך הסוגריים עם החזקה החיצונית חמש.", "math_expression": "(x¹)⁵" },
            { "verbal_explanation": "שלב 3: נשתמש בחוק חזקה על חזקה (כפל מעריכים).", "math_expression": "x^(1 * 5)" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה הסופית המפושטת ביותר.", "math_expression": "x⁵" }
        ],
        "final_answer": "x⁵",
        "options": ["x²⁰", "x⁵", "x", "x⁹"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "High",
        "question_text": "מה ההבדל בחישוב בין <strong>-5²</strong> לבין <strong>(-5)²</strong>? הסבירו ממה נובע ההבדל.",
        "hint": "במתמטיקה חזקה קודמת לפעולת כפל (והמינוס משמעותו כפל במינוס 1). אם המינוס לא מוגן בסוגריים, החזקה לא פועלת עליו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ננתח את הביטוי הראשון: מינוס חמש בריבוע ללא סוגריים. לפי סדר הפעולות, החזקה חלה רק על המספר 5. פעולת המינוס מיושמת בסוף.", "math_expression": "- (5 * 5) = -25" },
            { "verbal_explanation": "שלב 2: ננתח את הביטוי השני. הפעם המינוס מוקף בסוגריים יחד עם המספר, מה שאומר שהחזקה מכפילה את המינוס בעצמו.", "math_expression": "(-5) * (-5) = +25" },
            { "verbal_explanation": "שלב 3: נשווה בין התוצאות כדי להוכיח שהן אינן זהות. מספר שלילי אינו שווה למספר חיובי.", "math_expression": "-25 ≠ 25" }
        ],
        "final_answer": "הראשון הוא 25- והשני הוא 25.",
        "options": ["שניהם 25", "שניהם 25-", "הראשון הוא 25- והשני הוא 25.", "הראשון הוא 25 והשני הוא 25-"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Medium",
        "question_text": "מהו חצי מהמספר העצום <strong>2⁸</strong>? הציגו את התשובה כחזקה של 2.",
        "hint": "המילה 'חצי' משמעותה חילוק ב-2. חלקו את החזקה הנתונה ב-2 (זכרו ש-2 בלי חזקה הוא בעצם 2 בחזקת 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את השאלה המילולית לביטוי מתמטי של שבר.", "math_expression": "2⁸ / 2" },
            { "verbal_explanation": "שלב 2: נרשום את המכנה כחזקה מפורשת כדי למנוע בלבול. המספר שתיים מיוצג כ-שתיים בחזקת אחת.", "math_expression": "2⁸ / 2¹" },
            { "verbal_explanation": "שלב 3: נשתמש בחוק המנה לחזקות עם בסיס זהה, ונחסר את מעריך המכנה ממעריך המונה.", "math_expression": "2^(8 - 1)" },
            { "verbal_explanation": "שלב 4: נרשום את החזקה הסופית המייצגת את התוצאה.", "math_expression": "2⁷" }
        ],
        "final_answer": "2⁷",
        "options": ["1⁸", "2⁴", "2⁷", "128"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "High",
        "question_text": "מצאו את הנעלם איקס במשוואה המעריכית הבאה: <strong>5^x * 5³ = 5¹²</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='80' viewBox='0 0 180 80'><text x='90' y='45' font-size='20' text-anchor='middle' font-weight='bold' fill='#1e293b'>5<tspan dy='-10' font-size='14' fill='#ef4444'>x</tspan><tspan dy='10'> * 5</tspan><tspan dy='-10' font-size='14'>3</tspan><tspan dy='10'> = 5</tspan><tspan dy='-10' font-size='14'>12</tspan></text></svg></div>",
        "hint": "השתמשו בחוק כפל החזקות כדי לאחד את אגף שמאל, ולאחר מכן, מאחר והבסיסים זהים, פשוט השוו בין המעריכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל באגף שמאל. בעזרת חוק כפל חזקות בעלות בסיס זהה, נחבר את המעריכים שלו.", "math_expression": "5^(x + 3) = 5¹²" },
            { "verbal_explanation": "שלב 2: נבחין ששני אגפי המשוואה בנויים מהבסיס 5. אם הבסיסים שווים, גם המעריכים חייבים להיות שווים לחלוטין.", "math_expression": "x + 3 = 12" },
            { "verbal_explanation": "שלב 3: נפתור את המשוואה הפשוטה שנוצרה מבידוד האיקס. נעביר את המספר 3 אגף בסימן חיסור.", "math_expression": "x = 12 - 3" },
            { "verbal_explanation": "שלב 4: נחשב ונגיע לתוצאה הסופית של הנעלם.", "math_expression": "x = 9" }
        ],
        "final_answer": "9",
        "options": ["4", "9", "15", "36"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "Low",
        "question_text": "פשטו את הביטוי הבא: <strong>x⁶ * x⁰ * x</strong>. שימו לב לחוקים הנסתרים של אפס ושל אחד.",
        "hint": "חשוב לזכור: כל אות או מספר שאין להם חזקה מפורשת נמצאים בעצם בחזקת 1. כמו כן, חזקת אפס ערכה 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למנוע בלבול, נרשום מחדש את הביטוי כשכל המעריכים גלויים ומפורשים לעין.", "math_expression": "x⁶ * x⁰ * x¹" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק חיבור המעריכים, הפועל על כפל של גורמים בעלי אותו בסיס.", "math_expression": "x^(6 + 0 + 1)" },
            { "verbal_explanation": "שלב 3: נחבר את כל המעריכים: שש ועוד אפס ועוד אחת.", "math_expression": "x⁷" },
            { "verbal_explanation": "שלב 4: נרשום את הביטוי הסופי.", "math_expression": "x⁷" }
        ],
        "final_answer": "x⁷",
        "options": ["x⁶", "x⁷", "x⁰", "6x"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "חוקי חזקות עם מעריך טבעי ואפס",
        "difficulty": "High",
        "question_text": "חשבו את הערך המספרי של שבר החזקות: <strong>(10² * 10⁵) / (10⁴ * 10³)</strong>.",
        "hint": "אל תיבהלו ממספרים גדולים. פשטו קודם את המונה בנפרד ואת המכנה בנפרד בעזרת חיבור מעריכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל במונה של השבר. כפל בסיסים דורש מאיתנו לחבר את המעריכים שתיים וחמש.", "math_expression": "10^(2 + 5) = 10⁷" },
            { "verbal_explanation": "שלב 2: נטפל במכנה של השבר. נחבר את המעריכים ארבע ושלוש.", "math_expression": "10^(4 + 3) = 10⁷" },
            { "verbal_explanation": "שלב 3: נרשום את השבר המפושט שקיבלנו.", "math_expression": "10⁷ / 10⁷" },
            { "verbal_explanation": "שלב 4: נזהה שמדובר בחלוקה של ביטוי בעצמו, או נשתמש בחוק החיסור (שבע פחות שבע).", "math_expression": "10⁰" },
            { "verbal_explanation": "שלב 5: נסיים עם חוק חזקת האפס שקובע שהתוצאה היא תמיד אחת.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["10", "100", "1", "0"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: חוקי חזקות עם מעריך שלילי (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Low",
        "question_text": "חשבו את הערך המספרי של הביטוי בעל החזקה השלילית: <strong>3⁻²</strong>. הציגו כשבר פשוט.",
        "hint": "חזקה שלילית היא הוראה מתמטית לבצע הופכי לבסיס, ולאחר מכן להפוך את מעריך החזקה למספר חיובי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הבסיסי והחשוב ביותר של חזקות שליליות.", "math_expression": "a⁻ⁿ = 1 / aⁿ" },
            { "verbal_explanation": "שלב 2: ניישם את החוק על התרגיל: נהפוך את הבסיס 3 לשבר שבו 3 במכנה, ואת החזקה ל-2 חיובי.", "math_expression": "1 / 3²" },
            { "verbal_explanation": "שלב 3: נחשב את ערך החזקה שבמכנה (שלוש כפול שלוש).", "math_expression": "1 / 9" }
        ],
        "final_answer": "1/9",
        "options": ["-9", "1/6", "1/9", "-1/6"],
        "correctAnswer": 2
    },
    {
        "id": 17,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא: <strong>x⁻⁴ * x⁶</strong>. הציגו את התשובה הסופית ללא חזקות שליליות.",
        "hint": "זכרו שחוקי החזקות הרגילים (כמו חיבור המעריכים בפעולת כפל) עובדים בדיוק באותה צורה גם עם מספרים שליליים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לפנינו כפל של איברים בעלי אותו בסיס. לכן, נרשום את הבסיס ונחבר את המעריכים.", "math_expression": "x^(-4 + 6)" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת החשבון במעריך: מינוס ארבע ועוד שש שווה לשתיים חיובי.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 3: מכיוון שהתוצאה יצאה עם מעריך חיובי, אין צורך בשימוש בחוקי חזקה שלילית להמשך פישוט." }
        ],
        "final_answer": "x²",
        "options": ["x¹⁰", "x²", "1/x²", "x⁻¹⁰"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "חשבו את ערכו של שבר המועלה לחזקה שלילית: <strong>(1/2)⁻³</strong>.<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='100' viewBox='0 0 120 100'><text x='50' y='55' font-size='24' text-anchor='middle' font-weight='bold' fill='#1e293b'>(</text><text x='70' y='35' font-size='18' text-anchor='middle' font-weight='bold' fill='#1e293b'>1</text><line x1='60' y1='45' x2='80' y2='45' stroke='#1e293b' stroke-width='2'/><text x='70' y='65' font-size='18' text-anchor='middle' font-weight='bold' fill='#1e293b'>2</text><text x='90' y='55' font-size='24' text-anchor='middle' font-weight='bold' fill='#1e293b'>)</text><text x='110' y='35' font-size='18' text-anchor='middle' font-weight='bold' fill='#ef4444'>⁻³</text></svg></div>",
        "hint": "כאשר שבר שלם מועלה לחזקה שלילית, הדרך הקלה ביותר היא להפוך את השבר (מונה למכנה ולהיפך) ואז לשנות את החזקה לחיובית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק ההופכי לשברים. נהפוך את החצי ל-'שתיים חלקי אחת', ונשנה את החזקה לשלוש חיובי.", "math_expression": "(2 / 1)³" },
            { "verbal_explanation": "שלב 2: שתיים חלקי אחת הוא פשוט המספר השלם שתיים.", "math_expression": "2³" },
            { "verbal_explanation": "שלב 3: נחשב את החזקה המוכרת (שתיים כפול שתיים כפול שתיים).", "math_expression": "8" }
        ],
        "final_answer": "8",
        "options": ["1/8", "6", "8", "-8"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא והציגו את התשובה ללא חזקות שליליות: <strong>(a⁻² / a⁻⁵)⁴</strong>.",
        "hint": "התחילו תמיד בפישוט הביטוי שבתוך הסוגריים. בחילוק אנו מחסרים מעריכים – היזהרו ממינוס כפול מינוס!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד בשבר שבתוך הסוגריים ונבצע חיסור מעריכים. חובה לרשום את המינוס של החוק ואת המינוס של המספר.", "math_expression": "a^(-2 - (-5))" },
            { "verbal_explanation": "שלב 2: נהפוך את שני המינוסים הרצופים לסימן פלוס ונחשב את המעריך החדש (מינוס שתיים ועוד חמש).", "math_expression": "a³" },
            { "verbal_explanation": "שלב 3: נציב את התוצאה המפושטת חזרה לתוך הסוגריים המועלים לחזקה הרביעית.", "math_expression": "(a³)⁴" },
            { "verbal_explanation": "שלב 4: נשתמש בחוק חזקה על חזקה ונכפול את המעריכים (שלוש כפול ארבע).", "math_expression": "a¹²" }
        ],
        "final_answer": "a¹²",
        "options": ["a¹²", "a⁻¹²", "a⁷", "1/a¹²"],
        "correctAnswer": 0
    },
    {
        "id": 20,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "מהו הערך המספרי של הביטוי: <strong>(-2)⁻⁴</strong>?",
        "hint": "הפכו את הביטוי לשבר עם חזקה חיובית. זכרו את הכלל: חזקה זוגית תמיד 'מעלימה' את סימן המינוס של הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניישם את חוק החזקה השלילית על ידי כתיבת אחד חלקי הביטוי, כשהחזקה הופכת לחיובית.", "math_expression": "1 / (-2)⁴" },
            { "verbal_explanation": "שלב 2: נחשב את המכנה. מכיוון שהמעריך (ארבע) הוא מספר זוגי, תוצאת ההכפלה של מספר שלילי בעצמו מספר זוגי של פעמים תהיה חיובית.", "math_expression": "(-2) * (-2) * (-2) * (-2) = +16" },
            { "verbal_explanation": "שלב 3: נרשום את השבר הסופי המצומצם.", "math_expression": "1 / 16" }
        ],
        "final_answer": "1/16",
        "options": ["-1/16", "1/16", "16", "-16"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Low",
        "question_text": "כיצד ניתן לכתוב את השבר <strong>1 / x⁷</strong> בצורה של שורה אחת בעזרת חזקה שלילית?",
        "hint": "זוהי פעולה הפוכה לחוק שלמדנו: כאשר רוצים להעלות איבר מהמכנה למעלה למונה, פשוט משנים את סימן המעריך שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את האיבר הנמצא במכנה של השבר, שמעריכו הוא 7 חיובי.", "math_expression": "x⁷" },
            { "verbal_explanation": "שלב 2: נעלה את האיבר ממקומו במכנה לשורה אחת (המונה), ותוך כדי כך נשנה את סימנו של המעריך למעריך נגדי.", "math_expression": "x⁻⁷" }
        ],
        "final_answer": "x⁻⁷",
        "options": ["x⁷", "x⁻⁷", "7x⁻¹", "1⁻⁷"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא והציגו את התשובה ללא חזקות שליליות כלל: <strong>(3x⁻² * y³)⁻²</strong>.",
        "hint": "החזקה החיצונית (מינוס שתיים) פועלת על כל אחד ואחד מהגורמים שבתוך הסוגריים. זכרו להפעיל אותה גם על המספר שלוש!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את החזקה החיצונית לכל הגורמים בתוך הסוגריים לפי חוק חזקה של מכפלה.", "math_expression": "3⁻² * (x⁻²)⁻² * (y³)⁻²" },
            { "verbal_explanation": "שלב 2: נטפל במספר. חזקה שלילית אומרת להפוך לשבר. שלוש בריבוע זה תשע, ולכן נקבל תשיעית.", "math_expression": "3⁻² = 1 / 3² = 1 / 9" },
            { "verbal_explanation": "שלב 3: נטפל באותיות בעזרת חוק כפל מעריכים.", "math_expression": "x⁴ * y⁻⁶" },
            { "verbal_explanation": "שלב 4: נרכיב את כל החלקים יחד. את האיברים עם חזקה חיובית נשאיר במונה, ואת האיברים עם חזקה שלילית נוריד למכנה.", "math_expression": "(1 * x⁴) / (9 * y⁶)" },
            { "verbal_explanation": "שלב 5: נרשום את השבר הסופי והנקי.", "math_expression": "x⁴ / 9y⁶" }
        ],
        "final_answer": "x⁴ / 9y⁶",
        "options": ["9x⁴ / y⁶", "x⁴ / 9y⁶", "x⁴ / -6y⁶", "x⁻⁴y⁻⁶"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "האם הטענה הבאה נכונה? <strong>4⁻¹ + 4⁻¹ = 8⁻¹</strong>",
        "hint": "זהירות! חוקי חיבור וחיסור מעריכים עובדים אך ורק בפעולות כפל וחילוק בין בסיסים! בחיבור רגיל חובה לחשב כל איבר בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את האיבר הראשון. ארבע בחזקת מינוס אחד הוא למעשה השבר רבע.", "math_expression": "4⁻¹ = 1/4" },
            { "verbal_explanation": "שלב 2: נחבר את שני האיברים באגף השמאלי (רבע ועוד רבע שווה לחצי).", "math_expression": "1/4 + 1/4 = 2/4 = 1/2" },
            { "verbal_explanation": "שלב 3: נחשב את האגף הימני. שמונה בחזקת מינוס אחד הוא השבר שמינית.", "math_expression": "8⁻¹ = 1/8" },
            { "verbal_explanation": "שלב 4: נשווה בין התוצאות. חצי אינו שווה לשמינית ולכן הטענה שגויה מיסודה.", "math_expression": "1/2 ≠ 1/8" }
        ],
        "final_answer": "לא, הטענה שגויה.",
        "options": ["כן, הטענה נכונה.", "לא, הטענה שגויה.", "רק במספרים אי זוגיים.", "אי אפשר לחשב זאת."],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "High",
        "question_text": "פשטו וחשבו את התוצאה של: <strong>(1/3)⁻² * 27⁻¹</strong>. רמז: נסו להגיע לבסיס משותף.",
        "hint": "הכוח של חוקי החזקות מתגלה כשיש בסיס זהה. נסו לבטא את שני האיברים כחזקות של הבסיס שלוש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נטפל באיבר הראשון. הפיכת השבר תשנה את החזקה לחיובית (שלוש חלקי אחת בחזקת שתיים).", "math_expression": "(3/1)² = 3²" },
            { "verbal_explanation": "שלב 2: נטפל באיבר השני. נמיר את המספר 27 לחזקה של שלוש (שלוש בשלישית).", "math_expression": "27 = 3³" },
            { "verbal_explanation": "שלב 3: נציב את החזקה שמצאנו בחזרה לתרגיל ונשתמש בחוק כפל מעריכים.", "math_expression": "(3³)⁻¹ = 3⁻³" },
            { "verbal_explanation": "שלב 4: נרשום את התרגיל המעודכן ונשתמש בחוק חיבור מעריכים לכפל בסיסים.", "math_expression": "3² * 3⁻³ = 3^(2 + -3)" },
            { "verbal_explanation": "שלב 5: נחשב את החזקה (מינוס אחד) ואת הערך הסופי (שליש).", "math_expression": "3⁻¹ = 1/3" }
        ],
        "final_answer": "1/3",
        "options": ["1", "3", "1/3", "9"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Low",
        "question_text": "מהו המספר ה<strong>הופכי</strong> למספר <strong>10⁻⁴</strong>?",
        "hint": "ההופכי של כל מספר הוא התוצאה של אחת לחלק לאותו מספר. השתמשו בחוקי החזקות כדי לפשט את השבר שנוצר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את הפעולה המתמטית של הופכי. אחת חלקי הביטוי הנתון.", "math_expression": "1 / (10⁻⁴)" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק שמאפשר לנו להעלות חזקה שלילית מהמכנה אל המונה תוך הפיכת סימן המעריך לחיובי.", "math_expression": "10⁴" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית (הספרה אחת ואחריה ארבעה אפסים).", "math_expression": "10,000" }
        ],
        "final_answer": "10,000",
        "options": ["0.0001", "10,000", "-10,000", "40"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "סדרו את החזקות הבאות מהערך הקטן ביותר לגדול ביותר: <strong>3⁻², 3⁰, 3⁻¹</strong>.",
        "hint": "כדי להשוות בצורה המדויקת והבטוחה ביותר, חשבו את הערך המספרי של כל חזקה בנפרד, רצוי כשברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את 3 בחזקת מינוס שתיים. התוצאה היא אחד חלקי תשע.", "math_expression": "1 / 3² = 1/9" },
            { "verbal_explanation": "שלב 2: נחשב את 3 בחזקת מינוס אחת. התוצאה היא אחד חלקי שלוש (שליש).", "math_expression": "1 / 3¹ = 1/3" },
            { "verbal_explanation": "שלב 3: נחשב את 3 בחזקת אפס. כל מספר בחזקת אפס שווה לאחת.", "math_expression": "3⁰ = 1" },
            { "verbal_explanation": "שלב 4: נסדר את המספרים לפי גודלם. תשיעית קטנה משליש, ושליש קטן משלם.", "math_expression": "1/9 < 1/3 < 1" },
            { "verbal_explanation": "שלב 5: נחזיר למבנה החזקות המקורי לפי הסדר שמצאנו.", "math_expression": "3⁻² < 3⁻¹ < 3⁰" }
        ],
        "final_answer": "3⁻², 3⁻¹, 3⁰",
        "options": ["3⁰, 3⁻¹, 3⁻²", "3⁻², 3⁻¹, 3⁰", "3⁻¹, 3⁻², 3⁰", "אי אפשר להשוות"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "High",
        "question_text": "פשטו את ביטוי השברים הבא: <strong>(x / y)⁻³ * (y / x)⁻²</strong>. נסו להגיע לביטוי הפשוט ביותר ללא חזקות שליליות.",
        "hint": "מומלץ כצעד ראשון להפוך את המונים והמכנים בתוך הסוגריים כדי להיפטר מהחזקות השליליות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את השבר הראשון ובתמורה נשנה את מעריך החזקה לשלוש חיובי.", "math_expression": "(y / x)³" },
            { "verbal_explanation": "שלב 2: נהפוך את השבר השני ובתמורה נשנה את מעריך החזקה לשתיים חיובי.", "math_expression": "(x / y)²" },
            { "verbal_explanation": "שלב 3: נפתח את כל הסוגריים כדי לראות את המונים והמכנים בבירור.", "math_expression": "(y³ / x³) * (x² / y²)" },
            { "verbal_explanation": "שלב 4: נקבץ הכל לשבר אחד גדול.", "math_expression": "(y³ * x²) / (x³ * y²)" },
            { "verbal_explanation": "שלב 5: נצמצם את המשתנים הדומים בעזרת חיסור מעריכים. לאיקס יישאר מעריך 1 במכנה, ולוואי יישאר מעריך 1 במונה.", "math_expression": "y / x" }
        ],
        "final_answer": "y / x",
        "options": ["x / y", "y / x", "x⁵ / y⁵", "1"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של חישוב הביטוי: <strong>- (5⁻²)</strong>? שימו לב למיקום של סימן המינוס.",
        "hint": "המינוס אינו כלוא בסוגריים, ולכן אינו חלק מהבסיס של החזקה. חשבו את החזקה והוסיפו את המינוס רק בסוף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתעלם לרגע מסימן המינוס החיצוני ונחשב את החזקה השלילית. חמש בחזקת מינוס שתיים שווה לאחת חלקי חמש בריבוע.", "math_expression": "5⁻² = 1 / 5²" },
            { "verbal_explanation": "שלב 2: נחשב את המכנה.", "math_expression": "1 / 25" },
            { "verbal_explanation": "שלב 3: כעת נחזיר את סימן המינוס המקורי למקומו לפני השבר.", "math_expression": "- 1/25" }
        ],
        "final_answer": "-1/25",
        "options": ["1/25", "-25", "-1/25", "25"],
        "correctAnswer": 2
    },
    {
        "id": 29,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "High",
        "question_text": "מצאו מהו הערך של הנעלם איקס במשוואה המעריכית הבאה: <strong>4^x = 1 / 64</strong>.",
        "hint": "כדי לפתור משוואה מעריכית, עלינו להגיע לבסיס זהה בשני האגפים. נסו להציג את השבר מימין בעזרת הבסיס ארבע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמספר שישים וארבע הוא למעשה החזקה השלישית של ארבע.", "math_expression": "64 = 4³" },
            { "verbal_explanation": "שלב 2: נחליף את המספר במשוואה ונקבל שבר עם חזקה במכנה.", "math_expression": "1 / 4³" },
            { "verbal_explanation": "שלב 3: נשתמש בחוק ההופכי של החזקות כדי להעלות את הבסיס מהמכנה למונה, תוך שינוי סימן המעריך לשלילי.", "math_expression": "4⁻³" },
            { "verbal_explanation": "שלב 4: כעת המשוואה שלנו היא ארבע בחזקת איקס שווה לארבע בחזקת מינוס שלוש. מכיוון שהבסיסים שווים, גם המעריכים שווים.", "math_expression": "x = -3" }
        ],
        "final_answer": "-3",
        "options": ["3", "-3", "1/4", "16"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "חוקי חזקות עם מעריך שלילי",
        "difficulty": "Medium",
        "question_text": "פשטו וחשבו את הערך של: <strong>(10⁻²)⁻¹</strong>.",
        "hint": "זהו מקרה קלאסי של חזקה על חזקה. הכפילו את המעריכים וזכרו את חוקי הכפל במספרים שליליים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניישם את חוק 'חזקה של חזקה' הקובע שיש לכפול את המעריכים זה בזה.", "math_expression": "10^(-2 * -1)" },
            { "verbal_explanation": "שלב 2: נחשב את פעולת הכפל. מינוס שתיים כפול מינוס אחת נותן שתיים חיובי.", "math_expression": "10²" },
            { "verbal_explanation": "שלב 3: נחשב את הערך המספרי הסופי (עשר כפול עשר).", "math_expression": "100" }
        ],
        "final_answer": "100",
        "options": ["0.1", "0.01", "100", "-100"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 3: כתיב מדעי (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "כתיב מדעי",
        "difficulty": "Low",
        "question_text": "מהי ההגדרה המדויקת של מספר הכתוב ב<strong>כתיב מדעי</strong> תקני?",
        "hint": "כתיב מדעי מורכב ממכפלה של מספר מסוים בחזקה של 10. חשבו מהן המגבלות החלות על המספר המכפיל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את התבנית הכללית של הכתיב המדעי המורכבת ממקדם וחזקה של עשר.", "math_expression": "a * 10ⁿ" },
            { "verbal_explanation": "שלב 2: נציין את המגבלה על המקדם. הוא חייב להיות מספר הגדול או שווה לאחת וקטן מעשר.", "math_expression": "1 ≤ a < 10" },
            { "verbal_explanation": "שלב 3: נציין את המגבלה על המעריך. המעריך חייב להיות מספר שלם (חיובי או שלילי).", "math_expression": "n = מספר שלם" },
            { "verbal_explanation": "שלב 4: נסיק כי כל מספר שאינו עומד בתנאי של המקדם אינו נחשב לכתיב מדעי תקני." }
        ],
        "final_answer": "מספר בין 1 ל-10 (לא כולל 10) המוכפל בחזקה של 10.",
        "options": ["כל מספר המוכפל ב-10.", "מספר בין 1 ל-10 המוכפל בחזקה של 10.", "מספר שלם המועלה בחזקה.", "מספר הגדול מ-10 המוכפל ב-10."],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "כתבו את המספר <strong>7,000,000</strong> בכתיב מדעי תקני.<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='70' viewBox='0 0 220 70'><text x='20' y='40' font-size='24' font-weight='bold' fill='#1e293b'>7,000,000</text><path d='M 155 45 Q 145 55 135 45 Q 125 55 115 45 Q 105 55 95 45 Q 85 55 75 45 Q 65 55 55 45 Q 45 55 35 45' fill='none' stroke='#ef4444' stroke-width='2'/><text x='80' y='65' font-size='12' fill='#ef4444' font-weight='bold'>6 קפיצות שמאלה</text></svg></div>",
        "hint": "ספרו כמה מקומות עליכם להזיז את הנקודה העשרונית שמאלה עד שתגיעו למספר שנמצא בין 1 ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את מיקום הנקודה העשרונית המקורית הנמצאת בסוף המספר השלם.", "math_expression": "7,000,000.0" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה שמאלה עד שנקבל מספר בין 1 ל-10. במקרה זה נקבל את המספר 7.", "math_expression": "7.0" },
            { "verbal_explanation": "שלב 3: נספור את כמות הצעדים שהנקודה זזה ממקומה המקורי. זזנו בדיוק 6 מקומות.", "math_expression": "צעדים = 6" },
            { "verbal_explanation": "שלב 4: נרכיב את הכתיב המדעי: המספר שמצאנו כפול עשר בחזקת מספר הצעדים.", "math_expression": "7 * 10⁶" }
        ],
        "final_answer": "7 * 10⁶",
        "options": ["7 * 10⁵", "7 * 10⁶", "70 * 10⁵", "0.7 * 10⁷"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "כתבו את המספר <strong>0.0005</strong> בכתיב מדעי תקני.",
        "hint": "במספרים קטנים מאוד, אנו מזיזים את הנקודה ימינה. המעריך של עשר יהיה מספר שלילי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המיקום הנוכחי של הנקודה העשרונית.", "math_expression": "0.0005" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה ימינה עד שנקבל את המספר הראשון שאינו אפס (המספר 5).", "math_expression": "5.0" },
            { "verbal_explanation": "שלב 3: נספור את כמות הצעדים שהנקודה עברה ימינה. זזנו 4 מקומות.", "math_expression": "צעדים = 4" },
            { "verbal_explanation": "שלב 4: מכיוון שהזזנו את הנקודה ימינה (המספר המקורי קטן מאחת), המעריך יהיה שלילי.", "math_expression": "5 * 10⁻⁴" }
        ],
        "final_answer": "5 * 10⁻⁴",
        "options": ["5 * 10⁻³", "5 * 10⁻⁴", "0.5 * 10⁻³", "5 * 10⁴"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "המירו את המספר הבא מכתיב מדעי למספר רגיל: <strong>3.2 * 10⁴</strong>",
        "hint": "חזקה חיובית של עשר מציינת שעלינו להזיז את הנקודה ימינה, כלומר להגדיל את ערך המספר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המספר המקורי ללא החזקה.", "math_expression": "3.2" },
            { "verbal_explanation": "שלב 2: נזהה את המעריך. המעריך הוא 4, לכן עלינו להזיז את הנקודה 4 מקומות ימינה.", "math_expression": "4 צעדים ימינה" },
            { "verbal_explanation": "שלב 3: נבצע את ההזזה. צעד ראשון הופך את המספר ל-32. עלינו להוסיף עוד שלושה אפסים כדי להשלים 4 צעדים.", "math_expression": "32,000" }
        ],
        "final_answer": "32,000",
        "options": ["320", "3,200", "32,000", "320,000"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "כתיב מדעי",
        "difficulty": "High",
        "question_text": "בצעו את פעולת הכפל הבאה והציגו את התוצאה בכתיב מדעי תקני: <strong>(2 * 10⁵) * (4 * 10³)</strong>",
        "hint": "כפלו את המקדמים בנפרד ואת חזקות העשר בנפרד (בעזרת חוק חיבור המעריכים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק החילוף של הכפל כדי לקבץ את המקדמים יחד ואת חזקות העשר יחד.", "math_expression": "(2 * 4) * (10⁵ * 10³)" },
            { "verbal_explanation": "שלב 2: נחשב את מכפלת המקדמים המספריים.", "math_expression": "2 * 4 = 8" },
            { "verbal_explanation": "שלב 3: נחשב את מכפלת חזקות העשר על ידי חיבור המעריכים שלהן.", "math_expression": "10^(5 + 3) = 10⁸" },
            { "verbal_explanation": "שלב 4: נאחד את שתי התוצאות לביטוי אחד. נבדוק אם המקדם 8 נמצא בטווח התקני (בין 1 ל-10). התשובה היא כן.", "math_expression": "8 * 10⁸" }
        ],
        "final_answer": "8 * 10⁸",
        "options": ["8 * 10¹⁵", "6 * 10⁸", "8 * 10⁸", "8 * 10²"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "כתיב מדעי",
        "difficulty": "High",
        "question_text": "חשבו והציגו בכתיב מדעי תקני: <strong>(6 * 10⁴) * (3 * 10²)</strong>. שימו לב לתיקון המקדם בסוף.",
        "hint": "אם לאחר הכפל המקדם שמתקבל גדול מעשר, עליכם להמיר אותו בעצמו לכתיב מדעי ולחבר את החזקות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המקדמים ואת החזקות בנפרד.", "math_expression": "(6 * 3) * (10⁴ * 10²)" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאות הראשוניות.", "math_expression": "18 * 10⁶" },
            { "verbal_explanation": "שלב 3: נזהה שהמספר 18 אינו תקני (גדול מעשר). נהפוך אותו לכתיב מדעי.", "math_expression": "18 = 1.8 * 10¹" },
            { "verbal_explanation": "שלב 4: נשלב את המקדם החדש עם חזקת העשר המקורית.", "math_expression": "(1.8 * 10¹) * 10⁶" },
            { "verbal_explanation": "שלב 5: נחבר את המעריכים לקבלת התוצאה הסופית והתקנית.", "math_expression": "1.8 * 10⁷" }
        ],
        "final_answer": "1.8 * 10⁷",
        "options": ["18 * 10⁶", "1.8 * 10⁷", "1.8 * 10⁸", "1.8 * 10⁶"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "איזה מהמספרים הבאים הוא הגדול ביותר? <strong>(א) 2.5 * 10⁴ (ב) 9.8 * 10³ (ג) 1.1 * 10⁴</strong>",
        "hint": "הסתכלו קודם כל על המעריך של עשר. חזקה גדולה יותר מעידה תמיד על מספר גדול יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את המעריכים של כל אחת מהאפשרויות.", "math_expression": "10⁴ לעומת 10³" },
            { "verbal_explanation": "שלב 2: נפסול את אפשרות (ב) מכיוון שמעריך 3 קטן ממעריך 4. המעריך קובע את סדר הגודל של המספר.", "math_expression": "10⁴ > 10³" },
            { "verbal_explanation": "שלב 3: נשווה בין האפשרויות שנותרו בעלות המעריך הזהה (4). נשווה רק את המקדמים שלהן.", "math_expression": "2.5 לעומת 1.1" },
            { "verbal_explanation": "שלב 4: מכיוון ש-2.5 גדול מ-1.1, המספר הגדול ביותר הוא 2.5 כפול עשר בחזקת 4.", "math_expression": "25,000 > 11,000" }
        ],
        "final_answer": "2.5 * 10⁴",
        "options": ["2.5 * 10⁴", "9.8 * 10³", "1.1 * 10⁴", "הם שווים"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "כתיב מדעי",
        "difficulty": "High",
        "question_text": "בצעו את פעולת החילוק הבאה: <strong>(9 * 10⁸) / (3 * 10⁵)</strong>. הציגו תוצאה בכתיב מדעי.",
        "hint": "חלקו את המקדמים בנפרד ואת חזקות העשר בנפרד על ידי חיסור המעריכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המקדמים המספריים זה בזה.", "math_expression": "9 / 3 = 3" },
            { "verbal_explanation": "שלב 2: נבצע חילוק בין חזקות העשר על ידי חיסור מעריך המכנה ממעריך המונה.", "math_expression": "10^(8 - 5)" },
            { "verbal_explanation": "שלב 3: נחשב את המעריך החדש.", "math_expression": "10³" },
            { "verbal_explanation": "שלב 4: נאחד את התוצאות לביטוי אחד.", "math_expression": "3 * 10³" }
        ],
        "final_answer": "3 * 10³",
        "options": ["3 * 10¹³", "3 * 10³", "6 * 10³", "27 * 10³"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "כתיב מדעי",
        "difficulty": "Low",
        "question_text": "מה מייצג המעריך <strong>9</strong> במספר <strong>10⁹</strong> כאשר כותבים אותו בצורה רגילה?",
        "hint": "חשבו על המספר 10, 100, 1000. מה הקשר בין החזקה לכמות האפסים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן דוגמאות פשוטות. עשר בחזקת אחת הוא עשר (אפס אחד). עשר בחזקת שתיים הוא מאה (שני אפסים).", "math_expression": "10¹ = 10 , 10² = 100" },
            { "verbal_explanation": "שלב 2: נסיק את הכלל עבור בסיס עשר ומעריך טבעי: מספר האפסים זהה לערך המעריך.", "math_expression": "10ⁿ = 100...0 (n אפסים)" },
            { "verbal_explanation": "שלב 3: בתרגיל שלנו המעריך הוא 9, לכן יופיעו בדיוק 9 אפסים אחרי הספרה 1." }
        ],
        "final_answer": "כמות האפסים המופיעים אחרי הספרה 1.",
        "options": ["כמות הספרות במספר.", "כמות האפסים המופיעים אחרי הספרה 1.", "המספר אליו כופלים את 10.", "את מספר הקפיצות ימינה של ה-1."],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "מרחק מסוים בחלל הוא כ- <strong>2,500,000,000 קילומטרים</strong>. כתבו את המרחק בכתיב מדעי.",
        "hint": "הזיזו את הנקודה העשרונית שמאלה עד שתקבלו את המספר 2.5 וספרו את הצעדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנקודה המקורית בסוף המספר הגדול.", "math_expression": "2,500,000,000.0" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה 9 מקומות שמאלה כדי לקבל מקדם תקין בין 1 ל-10.", "math_expression": "2.5" },
            { "verbal_explanation": "שלב 3: נרשום את המעריך כחזקה של עשר לפי מספר הצעדים.", "math_expression": "2.5 * 10⁹" }
        ],
        "final_answer": "2.5 * 10⁹",
        "options": ["2.5 * 10⁸", "25 * 10⁸", "2.5 * 10⁹", "0.25 * 10¹⁰"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "המירו את המספר הבא לצורה רגילה: <strong>8 * 10⁻³</strong>",
        "hint": "מעריך שלילי מציין שעלינו להזיז את הנקודה שמאלה, מה שיוצר מספר קטן מאוד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המקדם 8 כנקודה עשרונית.", "math_expression": "8.0" },
            { "verbal_explanation": "שלב 2: נזהה את המעריך השלילי מינוס שלוש. עלינו להזיז את הנקודה 3 מקומות שמאלה.", "math_expression": "3 צעדים שמאלה" },
            { "verbal_explanation": "שלב 3: נבצע את ההזזה ונמלא את המקומות הריקים באפסים.", "math_expression": "0.008" }
        ],
        "final_answer": "0.008",
        "options": ["0.008", "0.08", "8000", "0.0008"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "כתיב מדעי",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא והציגו בכתיב מדעי תקני: <strong>(4 * 10⁻²) / (2 * 10⁻⁵)</strong>.",
        "hint": "היזהרו בחיסור המעריכים: מינוס שתיים פחות מינוס חמש הופך לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המקדמים המספריים.", "math_expression": "4 / 2 = 2" },
            { "verbal_explanation": "שלב 2: נבצע חיסור בין מעריכי חזקות העשר.", "math_expression": "10^(-2 - (-5))" },
            { "verbal_explanation": "שלב 3: נהפוך את המינוס הכפול לפלוס ונחשב את התוצאה.", "math_expression": "10^(-2 + 5) = 10³" },
            { "verbal_explanation": "שלב 4: נאחד את התוצאה הסופית.", "math_expression": "2 * 10³" }
        ],
        "final_answer": "2 * 10³",
        "options": ["2 * 10⁻⁷", "2 * 10³", "2 * 10⁻³", "2 * 10⁷"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "כתיב מדעי",
        "difficulty": "Low",
        "question_text": "מהו הערך המספרי של <strong>1.5 * 10⁰</strong>?",
        "hint": "זכרו מהו הערך של כל מספר (שאינו אפס) בחזקת אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הערך של עשר בחזקת אפס.", "math_expression": "10⁰ = 1" },
            { "verbal_explanation": "שלב 2: נכפיל את המקדם בתוצאה שקיבלנו.", "math_expression": "1.5 * 1 = 1.5" }
        ],
        "final_answer": "1.5",
        "options": ["0", "15", "1.5", "150"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "כתיב מדעי",
        "difficulty": "Medium",
        "question_text": "איזה מהמספרים הבאים <strong>אינו</strong> כתוב בצורה תקנית של כתיב מדעי?",
        "hint": "בדקו האם המקדם (המספר משמאל) נמצא בטווח שבין 1 ל-10 (כולל 1 אך לא כולל 10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את האפשרות 0.4 כפול עשר בחמישית. המקדם הוא 0.4.", "math_expression": "0.4 < 1" },
            { "verbal_explanation": "שלב 2: מכיוון שהמקדם קטן מאחת, הוא אינו עומד בתנאי של כתיב מדעי תקני." }
        ],
        "final_answer": "0.4 * 10⁵",
        "options": ["2.3 * 10³", "9.9 * 10⁻⁴", "0.4 * 10⁵", "5 * 10⁰"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "כתיב מדעי",
        "difficulty": "High",
        "question_text": "המירו את המכפלה הבאה לכתיב מדעי תקני: <strong>500 * 4000</strong>. בצעו קודם את המרת המספרים עצמם.",
        "hint": "מומלץ להמיר כל מספר בנפרד לכתיב מדעי ולאחר מכן לבצע את הכפל לפי חוקי החזקות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרת 500 לכתיב מדעי.", "math_expression": "5 * 10²" },
            { "verbal_explanation": "שלב 2: המרת 4000 לכתיב מדעי.", "math_expression": "4 * 10³" },
            { "verbal_explanation": "שלב 3: ביצוע פעולת הכפל בין שני הביטויים.", "math_expression": "(5 * 4) * (10² * 10³)" },
            { "verbal_explanation": "שלב 4: חישוב המכפלה הראשונית.", "math_expression": "20 * 10⁵" },
            { "verbal_explanation": "שלב 5: תיקון המקדם לכתיב מדעי תקני.", "math_expression": "2 * 10⁶" }
        ],
        "final_answer": "2 * 10⁶",
        "options": ["2 * 10⁵", "2 * 10⁶", "20 * 10⁵", "2 * 10⁷"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: שורש ריבועי ומשוואות עם שורשים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Low",
        "question_text": "מהו הערך המספרי של <strong>√64</strong>?",
        "hint": "פעולת השורש הריבועי שואלת: איזה מספר חיובי, אם נכפיל אותו בעצמו, ייתן לנו את התוצאה 64?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש מספר שבחזקת שתיים שווה ל-64.", "math_expression": "x² = 64" },
            { "verbal_explanation": "שלב 2: נבדוק מספרים מוכרים בלוח הכפל. שמונה כפול שמונה הוא שישים וארבע.", "math_expression": "8 * 8 = 64" },
            { "verbal_explanation": "שלב 3: נסיק שערכו של השורש הריבועי הוא 8.", "math_expression": "8" }
        ],
        "final_answer": "8",
        "options": ["8", "7", "32", "6.4"],
        "correctAnswer": 0
    },
    {
        "id": 47,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "חשבו את ערך הביטוי בעזרת חוקי השורשים: <strong>√4 * √25</strong>.",
        "hint": "ניתן לחשב כל שורש בנפרד ואז לכפול את התוצאות שהתקבלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השורש הריבועי של 4.", "math_expression": "√4 = 2" },
            { "verbal_explanation": "שלב 2: נחשב את השורש הריבועי של 25.", "math_expression": "√25 = 5" },
            { "verbal_explanation": "שלב 3: נכפיל את שתי התוצאות זו בזו.", "math_expression": "2 * 5 = 10" }
        ],
        "final_answer": "10",
        "options": ["29", "10", "100", "7"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא: <strong>√(9 / 16)</strong>. הציגו כפתרון מלא.",
        "hint": "חוק השורשים קובע ששורש של שבר שלם שווה לשורש המונה בנפרד חלקי שורש המכנה בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפצל את השורש למונה ולמכנה לפי חוק המנה.", "math_expression": "√9 / √16" },
            { "verbal_explanation": "שלב 2: נחשב את שורש המונה (3 בריבוע הוא 9).", "math_expression": "√9 = 3" },
            { "verbal_explanation": "שלב 3: נחשב את שורש המכנה (4 בריבוע הוא 16).", "math_expression": "√16 = 4" },
            { "verbal_explanation": "שלב 4: נרכיב את השבר הסופי מהתוצאות.", "math_expression": "3 / 4" }
        ],
        "final_answer": "3/4",
        "options": ["9/16", "3/8", "3/4", "0.5"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה עבור איקס: <strong>√x = 12</strong>.",
        "hint": "הפעולה ההפוכה לשורש ריבועי היא העלאה בחזקת שתיים (ריבוע).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שעלינו לבטל את פעולת השורש כדי לבודד את הנעלם איקס.", "math_expression": "√x = 12" },
            { "verbal_explanation": "שלב 2: נעלה את שני אגפי המשוואה בריבוע.", "math_expression": "(√x)² = 12²" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאות. באגף שמאל הריבוע והשורש מבטלים זה את זה.", "math_expression": "x = 144" },
            { "verbal_explanation": "שלב 4: נבצע בדיקה על ידי הצבה - שורש של 144 הוא אכן 12. התוצאה נכונה." }
        ],
        "final_answer": "144",
        "options": ["6", "24", "12", "144"],
        "correctAnswer": 3
    },
    {
        "id": 50,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "חשבו את ערך הביטוי בעזרת חוק המכפלה בתוך שורש: <strong>√(49 * 100)</strong>.",
        "hint": "חוק השורשים קובע כי שורש של מכפלה שווה למכפלת השורשים של כל גורם בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפרק את השורש הכללי לשני שורשים נפרדים.", "math_expression": "√49 * √100" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של השורש הראשון.", "math_expression": "√49 = 7" },
            { "verbal_explanation": "שלב 3: נחשב את הערך של השורש השני.", "math_expression": "√100 = 10" },
            { "verbal_explanation": "שלב 4: נכפיל את שתי התוצאות לקבלת הערך הסופי.", "math_expression": "7 * 10 = 70" }
        ],
        "final_answer": "70",
        "options": ["4900", "70", "149", "17"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה הכוללת ביטוי בתוך שורש: <strong>√(x + 7) = 5</strong>. הציגו פתרון מלא.",
        "hint": "כדי להגיע לנעלם, עליכם קודם כל לבטל את השורש על ידי העלאת כל אגפי המשוואה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את שני אגפי המשוואה בחזקה שנייה.", "math_expression": "(√(x + 7))² = 5²" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת הריבוע. באגף שמאל השורש מתבטל.", "math_expression": "x + 7 = 25" },
            { "verbal_explanation": "שלב 3: נבודד את איקס על ידי העברת המספר 7 אגף בחיסור.", "math_expression": "x = 25 - 7" },
            { "verbal_explanation": "שלב 4: נחשב את ערכו של הנעלם.", "math_expression": "x = 18" },
            { "verbal_explanation": "שלב 5: בדיקה - שורש של (18 ועוד 7) הוא שורש 25, השווה בדיוק ל-5. התשובה תקינה." }
        ],
        "final_answer": "18",
        "options": ["18", "32", "2", "25"],
        "correctAnswer": 0
    },
    {
        "id": 52,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא ככל הניתן: <strong>√(a⁶)</strong>. התייחסו לחוקי חזקות ושורשים.",
        "hint": "פעולת השורש הריבועי מחפשת ביטוי שבריבוע ייתן את מה שכתוב בפנים. חשבו איזה ביטוי כשנכפיל אותו בעצמו ייתן איי בחזקת שש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בקשר שבין שורש לחזקה (שורש שווה לחזקת חצי).", "math_expression": "(a⁶)^(0.5)" },
            { "verbal_explanation": "שלב 2: נשתמש בחוק חזקה על חזקה ונכפול את המעריכים.", "math_expression": "a^(6 * 0.5)" },
            { "verbal_explanation": "שלב 3: נחשב את המעריך החדש (חצי משש הוא שלוש).", "math_expression": "a³" },
            { "verbal_explanation": "שלב 4: בדיקה - איי בשלישית כפול איי בשלישית (חיבור מעריכים) שווה לאיי בשישית. התוצאה נכונה." }
        ],
        "final_answer": "a³",
        "options": ["a⁶", "a⁴", "a³", "3a"],
        "correctAnswer": 2
    },
    {
        "id": 53,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "האם התוצאה של <strong>√16 + √9</strong> שווה לתוצאה של <strong>√(16 + 9)</strong>? נמקו בעזרת חישוב.",
        "hint": "חשבו כל אגף בנפרד לפי סדר הפעולות. זכרו שחוק השורשים תקף למכפלה ולמנה, אך לא לחיבור וחיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את האגף הראשון (סכום השורשים). שורש 16 זה 4, שורש 9 זה 3.", "math_expression": "4 + 3 = 7" },
            { "verbal_explanation": "שלב 2: נחשב את האגף השני (שורש של סכום). קודם נחבר בתוך השורש.", "math_expression": "√(25) = 5" },
            { "verbal_explanation": "שלב 3: נשווה בין שתי התוצאות.", "math_expression": "7 ≠ 5" },
            { "verbal_explanation": "שלב 4: נסיק כי חוק השורשים אינו חל על פעולת החיבור. אי אפשר לפצל שורש של חיבור." }
        ],
        "final_answer": "לא, הראשון הוא 7 והשני הוא 5.",
        "options": ["כן, שניהם 5", "כן, שניהם 7", "לא, הראשון הוא 7 והשני הוא 5.", "לא, הראשון הוא 5 והשני הוא 7"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה: <strong>2 * √x = 10</strong>.",
        "hint": "בודדו קודם את השורש על ידי חלוקה במקדם (2), ולאחר מכן העלו את שני האגפים בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את שני אגפי המשוואה במספר 2 כדי להשאיר את השורש לבדו באגף שמאל.", "math_expression": "√x = 10 / 2" },
            { "verbal_explanation": "שלב 2: נחשב את תוצאת החילוק.", "math_expression": "√x = 5" },
            { "verbal_explanation": "שלב 3: נבטל את השורש על ידי העלאה בריבוע של שני האגפים.", "math_expression": "x = 5²" },
            { "verbal_explanation": "שלב 4: נמצא את ערכו של איקס.", "math_expression": "x = 25" }
        ],
        "final_answer": "25",
        "options": ["5", "10", "25", "100"],
        "correctAnswer": 2
    },
    {
        "id": 55,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "חשבו את הערך של הביטוי הבא: <strong>√(4³ + 6 * 6)</strong>.",
        "hint": "בצעו קודם את כל הפעולות בתוך השורש לפי סדר פעולות חשבון (חזקה וכפל לפני חיבור), ורק בסוף הוציאו שורש לתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את 4 בחזקת 3.", "math_expression": "4 * 4 * 4 = 64" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה (6 כפול 6).", "math_expression": "36" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות בתוך השורש.", "math_expression": "√(64 + 36) = √100" },
            { "verbal_explanation": "שלב 4: נחשב את השורש הריבועי הסופי.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["10", "14", "100", "8"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "מהו שורש של שורש? חשבו את ערך הביטוי: <strong>√(√81)</strong>.",
        "hint": "חשבו קודם את השורש הפנימי ביותר, ועל התוצאה שלו בצעו שוב פעולת שורש ריבועי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד בשורש הפנימי. המספר שבריבוע נותן 81 הוא 9.", "math_expression": "√81 = 9" },
            { "verbal_explanation": "שלב 2: נחליף את הביטוי הפנימי בתוצאה שמצאנו, ונשמור את השורש החיצוני.", "math_expression": "√9" },
            { "verbal_explanation": "שלב 3: נחשב את השורש הנותר.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["9", "3", "81", "1"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "חשבו והציגו בכתיב מדעי: <strong>√(4 * 10⁶)</strong>. השתמשו בחוק השורש על מכפלה.",
        "hint": "פצלו לשני שורשים נפרדים. עבור החזקה של עשר, זכרו ששורש שקול להפחתת המעריך בחצי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפריד את השורש לשני שורשים נפרדים המוכפלים זה בזה.", "math_expression": "√4 * √(10⁶)" },
            { "verbal_explanation": "שלב 2: נחשב את שורש המקדם המספרי.", "math_expression": "√4 = 2" },
            { "verbal_explanation": "שלב 3: נחשב את שורש חזקת העשר. חצי מהמעריך שש הוא שלוש.", "math_expression": "10³" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה הסופית המשלבת את שניהם.", "math_expression": "2 * 10³" }
        ],
        "final_answer": "2 * 10³",
        "options": ["2 * 10³", "2 * 10⁶", "4 * 10³", "2 * 10²"],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הריבועית הבאה: <strong>x² = 25</strong>. שימו לב לכל הפתרונות האפשריים.",
        "hint": "בניגוד לפעולת השורש שנותרת חיובית תמיד, למשוואה ריבועית קלאסית יש שני פתרונות (חיובי ושלילי) כי מינוס כפול מינוס זה פלוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שמדובר במשוואה ריבועית המחפשת את כל המספרים שבריבוע שווים ל-25.", "math_expression": "x² = 25" },
            { "verbal_explanation": "שלב 2: נבצע פעולת שורש על שני האגפים, ונוסיף סימן פלוס-מינוס לתשובה.", "math_expression": "x = ±√25" },
            { "verbal_explanation": "שלב 3: נסיק את שני הערכים המקיימים את המשוואה.", "math_expression": "x = 5 , x = -5" }
        ],
        "final_answer": "5 ו- (5-)",
        "options": ["5 בלבד", "5- בלבד", "5 ו- (5-)", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "Medium",
        "question_text": "מהו שטח ריבוע שאורך צלעו הוא <strong>√7 סנטימטרים</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120' viewBox='0 0 120 120'><rect x='20' y='20' width='80' height='80' fill='#fdfbf7' stroke='#b09151' stroke-width='2'/><text x='60' y='115' font-size='12' fill='#1e293b' text-anchor='middle'>√7 ס\"מ</text></svg></div>",
        "hint": "שטח ריבוע מחושב על ידי הכפלת אורך הצלע בעצמה (העלאה בריבוע).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את נוסחת שטח הריבוע.", "math_expression": "S = צלע²" },
            { "verbal_explanation": "שלב 2: נציב את אורך הצלע הנתון (שורש שבע) בתוך הנוסחה.", "math_expression": "S = (√7)²" },
            { "verbal_explanation": "שלב 3: נשתמש בכלל האומר שריבוע מבטל שורש ריבועי, והמספר נשאר כפי שהוא.", "math_expression": "S = 7" }
        ],
        "final_answer": "7 סמ\"ר",
        "options": ["49 סמ\"ר", "7 סמ\"ר", "שורש 7 סמ\"ר", "14 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "שורש ריבועי ומשוואות עם שורשים",
        "difficulty": "High",
        "question_text": "סדרו את המספרים הבאים מהקטן ביותר לגדול ביותר: <strong>2, √5, √3</strong>.",
        "hint": "קשה להשוות בין שורשים למספרים שלמים. כדי להשוות בקלות, העלו את כל המספרים בריבוע ובדקו את התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את המספר הראשון (המספר השלם) בריבוע.", "math_expression": "2² = 4" },
            { "verbal_explanation": "שלב 2: נעלה את המספר השני בריבוע. השורש והריבוע מתבטלים.", "math_expression": "(√5)² = 5" },
            { "verbal_explanation": "שלב 3: נעלה את המספר השלישי בריבוע.", "math_expression": "(√3)² = 3" },
            { "verbal_explanation": "שלב 4: נסדר את תוצאות הריבועים מהקטן לגדול.", "math_expression": "3 < 4 < 5" },
            { "verbal_explanation": "שלב 5: נחזיר למספרים המקוריים לפי אותו סדר שגילינו.", "math_expression": "√3 < 2 < √5" }
        ],
        "final_answer": "√3, 2, √5",
        "options": ["2, √3, √5", "√3, 2, √5", "√5, 2, √3", "√3, √5, 2"],
        "correctAnswer": 1
    }
];