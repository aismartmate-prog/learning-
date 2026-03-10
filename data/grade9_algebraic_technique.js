const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חוק הפילוג המורחב (פתיחת סוגריים) (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים וכנסו איברים דומים: <strong>(x + 2)(x + 3)</strong><br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120' viewBox='0 0 180 120'><rect x='20' y='20' width='140' height='80' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><line x1='80' y1='20' x2='80' y2='100' stroke='#1e293b' stroke-width='1'/><line x1='20' y1='70' x2='160' y2='70' stroke='#1e293b' stroke-width='1'/><text x='45' y='15' font-size='14'>x</text><text x='115' y='15' font-size='14'>3</text><text x='5' y='50' font-size='14'>x</text><text x='5' y='90' font-size='14'>2</text></svg></div>",
        "hint": "כדי לפתוח סוגריים כפולים, יש להכפיל כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים (שיטת 'כל אחד עם כל אחד').",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את האיבר הראשון (x) בסוגריים הראשונים בכל איבר בסוגריים השניים. x כפול x שווה ל-x². x כפול 3 שווה ל-3x.", "math_expression": "x² + 3x" },
            { "verbal_explanation": "שלב 2: נכפיל את האיבר השני (2) בסוגריים הראשונים בכל איבר בסוגריים השניים. 2 כפול x שווה ל-2x. 2 כפול 3 שווה ל-6.", "math_expression": "+ 2x + 6" },
            { "verbal_explanation": "שלב 3: נרשום את כל הביטוי הארוך שקיבלנו ברצף אחד.", "math_expression": "x² + 3x + 2x + 6" },
            { "verbal_explanation": "שלב 4: נכנס איברים דומים. האיברים 3x ו-2x הם מאותה משפחה ולכן נחבר אותם ל-5x.", "math_expression": "x² + 5x + 6" }
        ],
        "final_answer": "x² + 5x + 6",
        "options": ["x² + 5x + 6", "x² + 6x + 5", "x² + 5", "2x + 5"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "פתחו ופשטו את הביטוי: <strong>(a - 4)(a + 5)</strong>",
        "hint": "שימו לב לסימן המינוס שלפני ה-4. הוא הולך איתו לכל הכפלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת a בסוגריים השניים נותנת a² ו-5a.", "math_expression": "a² + 5a" },
            { "verbal_explanation": "שלב 2: הכפלת מינוס 4 בסוגריים השניים נותנת מינוס 4a ומינוס 20.", "math_expression": "- 4a - 20" },
            { "verbal_explanation": "שלב 3: כתיבת הביטוי המלא.", "math_expression": "a² + 5a - 4a - 20" },
            { "verbal_explanation": "שלב 4: כינוס איברים דומים: 5a פחות 4a משאיר a אחד בודד.", "math_expression": "a² + a - 20" }
        ],
        "final_answer": "a² + a - 20",
        "options": ["a² - a - 20", "a² + 9a - 20", "a² + a - 20", "a² - 20"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי: <strong>(2x + 1)(x - 3)</strong>",
        "hint": "כאשר ל-x יש מקדם (כמו 2), עליכם לכפול גם את המקדמים וגם את הנעלמים (2x כפול x ייתן 2x²).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול 2x ב-x לקבלת 2x², ו-2x במינוס 3 לקבלת מינוס 6x.", "math_expression": "2x² - 6x" },
            { "verbal_explanation": "שלב 2: נכפול 1 ב-x לקבלת x, ו-1 במינוס 3 לקבלת מינוס 3.", "math_expression": "+ x - 3" },
            { "verbal_explanation": "שלב 3: נרכיב את הביטוי המלא.", "math_expression": "2x² - 6x + x - 3" },
            { "verbal_explanation": "שלב 4: נכנס איברים דומים: מינוס 6x ועוד x שווה למינוס 5x.", "math_expression": "2x² - 5x - 3" }
        ],
        "final_answer": "2x² - 5x - 3",
        "options": ["2x² - 7x - 3", "2x² - 5x - 3", "2x² + 5x - 3", "3x - 3"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פתחו סוגריים: <strong>(3y - 2)(2y - 4)</strong>",
        "hint": "היזהרו מהכפלת שני מספרים שליליים: מינוס 2 כפול מינוס 4 ייתן תוצאה חיובית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול 3y ב-2y (נותן 6y²) ובמינוס 4 (נותן מינוס 12y).", "math_expression": "6y² - 12y" },
            { "verbal_explanation": "שלב 2: נכפול מינוס 2 ב-2y (נותן מינוס 4y) ובמינוס 4 (נותן פלוס 8!).", "math_expression": "- 4y + 8" },
            { "verbal_explanation": "שלב 3: חיבור החלקים.", "math_expression": "6y² - 12y - 4y + 8" },
            { "verbal_explanation": "שלב 4: כינוס איברים. מינוס 12 ומינוס 4 נותן מינוס 16.", "math_expression": "6y² - 16y + 8" }
        ],
        "final_answer": "6y² - 16y + 8",
        "options": ["6y² - 8y - 8", "6y² - 16y + 8", "6y² + 16y + 8", "5y² - 16y - 8"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פשטו לחלוטין את הביטוי: <strong>-2(x - 5)(x + 1)</strong>",
        "hint": "סדר הפעולות קריטי: קודם פתחו את שני זוגות הסוגריים לתוך סוגריים מרובעים גדולים, ורק בסוף הכפילו הכל במינוס 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשמור את המינוס 2 בחוץ, ונפתח את הסוגריים לתוך סוגריים חדשים.", "math_expression": "-2 * [x(x) + x(1) - 5(x) - 5(1)]" },
            { "verbal_explanation": "שלב 2: נחשב את הביטוי הפנימי.", "math_expression": "-2 * [x² + x - 5x - 5]" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים בתוך הסוגריים.", "math_expression": "-2 * [x² - 4x - 5]" },
            { "verbal_explanation": "שלב 4: נכניס את המינוס 2 פנימה על ידי הכפלת כל איבר. שימו לב להחלפת הסימנים.", "math_expression": "-2x² + 8x + 10" }
        ],
        "final_answer": "-2x² + 8x + 10",
        "options": ["-2x² - 8x - 10", "-2x² + 8x + 10", "-2x² - 4x - 5", "2x² - 8x - 10"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "פתחו סוגריים: <strong>(x + 10)(x - 10)</strong>",
        "hint": "שימו לב מה קורה לאיבר האמצעי שמכיל את x. האם הוא נשאר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול x ב-x (לקבלת x²) ו-x במינוס 10 (לקבלת מינוס 10x).", "math_expression": "x² - 10x" },
            { "verbal_explanation": "שלב 2: נכפול 10 ב-x (לקבלת 10x) ו-10 במינוס 10 (לקבלת מינוס 100).", "math_expression": "+ 10x - 100" },
            { "verbal_explanation": "שלב 3: נרשום יחד.", "math_expression": "x² - 10x + 10x - 100" },
            { "verbal_explanation": "שלב 4: נכנס איברים דומים. המינוס 10x והפלוס 10x מבטלים זה את זה (שווים לאפס).", "math_expression": "x² - 100" }
        ],
        "final_answer": "x² - 100",
        "options": ["x² - 100", "x² - 20x - 100", "x² + 100", "x² - 20"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הכולל שני משתנים: <strong>(x + y)(x - 2y)</strong>",
        "hint": "התייחסו ל-y בדיוק כמו אל מספר רגיל. x כפול y נכתב כ-xy.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת x בשני האיברים בסוגריים השניים.", "math_expression": "x² - 2xy" },
            { "verbal_explanation": "שלב 2: הכפלת y בשני האיברים בסוגריים השניים.", "math_expression": "+ xy - 2y²" },
            { "verbal_explanation": "שלב 3: נרשום את הביטוי המלא.", "math_expression": "x² - 2xy + xy - 2y²" },
            { "verbal_explanation": "שלב 4: נכנס את האיברים הדומים המכילים xy. מינוס 2xy פלוס xy שווה למינוס xy.", "math_expression": "x² - xy - 2y²" }
        ],
        "final_answer": "x² - xy - 2y²",
        "options": ["x² - 3xy - 2y²", "x² - xy - 2y²", "x² - 2y²", "x² + xy - 2y²"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פתחו את הסוגריים (דו-איבר כפול תלת-איבר): <strong>(a - 2)(a² + 3a - 1)</strong>",
        "hint": "שיטת הפעולה לא משתנה, רק מתארכת. הכפילו את a בכל שלושת האיברים, ואז את מינוס 2 בכל שלושת האיברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את a בכל תלת-האיבר.", "math_expression": "a³ + 3a² - a" },
            { "verbal_explanation": "שלב 2: נכפול את מינוס 2 בכל תלת-האיבר.", "math_expression": "- 2a² - 6a + 2" },
            { "verbal_explanation": "שלב 3: נחבר את כל הביטוי הארוך שנוצר.", "math_expression": "a³ + 3a² - a - 2a² - 6a + 2" },
            { "verbal_explanation": "שלב 4: נכנס איברים. את ה-a² עם ה-a² (3 פחות 2 = 1). ואת ה-a עם ה-a (מינוס 1 מינוס 6 = מינוס 7).", "math_expression": "a³ + a² - 7a + 2" }
        ],
        "final_answer": "a³ + a² - 7a + 2",
        "options": ["a³ + 5a² - 7a - 2", "a³ + a² - 7a + 2", "a³ - a² + 7a + 2", "a³ + a² - 5a - 2"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי: <strong>(1/2x - 4)(2x + 6)</strong>",
        "hint": "הכפלת חצי במספר זוגי היא פשוטה - היא נותנת את המחצית שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חצי איקס כפול שני איקס שווה לאיקס בריבוע. חצי איקס כפול 6 שווה ל-3x.", "math_expression": "x² + 3x" },
            { "verbal_explanation": "שלב 2: מינוס 4 כפול 2x שווה מינוס 8x. מינוס 4 כפול 6 שווה מינוס 24.", "math_expression": "- 8x - 24" },
            { "verbal_explanation": "שלב 3: הרכבת הביטוי המלא.", "math_expression": "x² + 3x - 8x - 24" },
            { "verbal_explanation": "שלב 4: כינוס איברים דומים (3x פחות 8x).", "math_expression": "x² - 5x - 24" }
        ],
        "final_answer": "x² - 5x - 24",
        "options": ["x² - 5x - 24", "x² - 11x - 24", "x² + 5x + 24", "0.5x² - 5x - 24"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי המורכב: <strong>(x + 2)(x - 3) - (x - 1)(x + 4)</strong>",
        "hint": "פתחו כל זוג סוגריים בנפרד לתוך סוגריים מרובעים. אל תשכחו שהמינוס באמצע יהפוך את כל הסימנים של התוצאה השנייה!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את זוג הסוגריים הראשון בנפרד.", "math_expression": "(x² - 3x + 2x - 6) = (x² - x - 6)" },
            { "verbal_explanation": "שלב 2: נפתח את זוג הסוגריים השני בנפרד, ונשאיר אותו בתוך סוגריים בגלל המינוס שממתין בחוץ.", "math_expression": "(x² + 4x - x - 4) = (x² + 3x - 4)" },
            { "verbal_explanation": "שלב 3: נרשום את התרגיל עם התוצאות, נפעיל את המינוס על הסוגריים השניים ונפתח אותם.", "math_expression": "(x² - x - 6) - (x² + 3x - 4) = x² - x - 6 - x² - 3x + 4" },
            { "verbal_explanation": "שלב 4: נכנס איברים דומים. ה-x² מבטל את עצמו. מינוס x ומינוס 3x הופכים למינוס 4x. מינוס 6 פלוס 4 הם מינוס 2.", "math_expression": "-4x - 2" }
        ],
        "final_answer": "-4x - 2",
        "options": ["2x² + 2x - 10", "-4x - 2", "4x - 10", "-2x - 2"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "מהי התוצאה של פתיחת הסוגריים: <strong>(m + 1)(m + 1)</strong>?",
        "hint": "פעלו כרגיל. זהו למעשה הביטוי 'm פלוס 1 בריבוע'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: m כפול m נותן m². m כפול 1 נותן m.", "math_expression": "m² + m" },
            { "verbal_explanation": "שלב 2: 1 כפול m נותן m. 1 כפול 1 נותן 1.", "math_expression": "+ m + 1" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים. m ועוד m הם 2m.", "math_expression": "m² + 2m + 1" }
        ],
        "final_answer": "m² + 2m + 1",
        "options": ["m² + 1", "m² + m + 1", "m² + 2m + 1", "2m + 2"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי: <strong>(3x - 5)(2x - 1)</strong>",
        "hint": "שימו לב להכפלת מינוס 5 במינוס 1 בסוף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 3x כפול 2x נותן 6x². 3x כפול מינוס 1 נותן מינוס 3x.", "math_expression": "6x² - 3x" },
            { "verbal_explanation": "שלב 2: מינוס 5 כפול 2x נותן מינוס 10x. מינוס 5 כפול מינוס 1 נותן פלוס 5.", "math_expression": "- 10x + 5" },
            { "verbal_explanation": "שלב 3: נחבר את החלקים ונכנס איברים דומים.", "math_expression": "6x² - 3x - 10x + 5" },
            { "verbal_explanation": "שלב 4: התוצאה הסופית.", "math_expression": "6x² - 13x + 5" }
        ],
        "final_answer": "6x² - 13x + 5",
        "options": ["6x² - 15x + 5", "6x² - 13x - 5", "6x² - 13x + 5", "5x² - 13x + 5"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>x(x - 2)(x + 5)</strong>",
        "hint": "בכפל של שלושה גורמים, הכפילו קודם כל את שני הסוגריים זה בזה, ושמרו את התוצאה בתוך סוגריים גדולים. רק בסוף הכפילו ב-x החיצוני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתעלם מה-x החיצוני לרגע ונפתח את הסוגריים.", "math_expression": "(x - 2)(x + 5) = x² + 5x - 2x - 10" },
            { "verbal_explanation": "שלב 2: נכנס איברים בתוך הסוגריים שקיבלנו.", "math_expression": "x² + 3x - 10" },
            { "verbal_explanation": "שלב 3: עכשיו נכפיל את כל הביטוי הזה ב-x החיצוני שחיכה לנו.", "math_expression": "x * (x² + 3x - 10)" },
            { "verbal_explanation": "שלב 4: בחוק הפילוג, כפל ב-x מעלה את החזקה של כל איבר באחד.", "math_expression": "x³ + 3x² - 10x" }
        ],
        "final_answer": "x³ + 3x² - 10x",
        "options": ["x³ + 3x² - 10x", "x³ - 3x² + 10x", "x² + 3x - 10", "3x³ - 10x²"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "מהי התוצאה של <strong>(x + 4)(2 + y)</strong>?",
        "hint": "אין כאן איברים דומים לכינוס. פשוט כתבו את ארבעת האיברים שמתקבלים מההכפלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכפלת x.", "math_expression": "2x + xy" },
            { "verbal_explanation": "שלב 2: הכפלת 4.", "math_expression": "+ 8 + 4y" },
            { "verbal_explanation": "שלב 3: נרשום יחד. מכיוון שאין איברים מאותה משפחה, זהו המצב הסופי.", "math_expression": "2x + xy + 8 + 4y" }
        ],
        "final_answer": "2x + xy + 4y + 8",
        "options": ["6xy + 8", "2x + xy + 4y + 8", "2xy + 12", "x + y + 8"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא וכינסו איברים דומים: <strong>(2a - 3b)(a + 4b)</strong>",
        "hint": "הכפילו לאט ושימו לב ש-b כפול a שווה ל-ab (האותיות מסודרות לפי סדר אלפביתי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את 2a ב-a וב-4b.", "math_expression": "2a² + 8ab" },
            { "verbal_explanation": "שלב 2: נכפול את מינוס 3b ב-a וב-4b.", "math_expression": "- 3ab - 12b²" },
            { "verbal_explanation": "שלב 3: נרכיב את הביטוי המלא.", "math_expression": "2a² + 8ab - 3ab - 12b²" },
            { "verbal_explanation": "שלב 4: נכנס את האיברים המשותפים שמכילים ab.", "math_expression": "2a² + 5ab - 12b²" }
        ],
        "final_answer": "2a² + 5ab - 12b²",
        "options": ["2a² + 11ab - 12b²", "2a² - 5ab - 12b²", "2a² + 5ab - 12b²", "2a² + 5ab + 12b²"],
        "correctAnswer": 2
    },
    {
        "id": 16,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פשטו: <strong>(x² + 2)(x² - 5)</strong>",
        "hint": "כאשר כופלים חזקה בחזקה זהה מחברים את המעריכים. כלומר איקס בריבוע כפול איקס בריבוע הוא איקס ברביעית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: x² כפול x² שווה ל-x⁴. x² כפול מינוס 5 שווה למינוס 5x².", "math_expression": "x⁴ - 5x²" },
            { "verbal_explanation": "שלב 2: 2 כפול x² שווה ל-2x². 2 כפול מינוס 5 שווה למינוס 10.", "math_expression": "+ 2x² - 10" },
            { "verbal_explanation": "שלב 3: נכנס את האיברים הדומים המכילים x².", "math_expression": "x⁴ - 3x² - 10" }
        ],
        "final_answer": "x⁴ - 3x² - 10",
        "options": ["x⁴ - 7x² - 10", "x⁴ - 3x² - 10", "x⁴ + 3x² - 10", "2x² - 3x - 10"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "איזה ביטוי שווה ל- <strong>(5 - x)(2 + x)</strong>?",
        "hint": "היזהרו מהמינוס של ה-x בחלק הראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 5 כפול 2 שווה 10. 5 כפול x שווה 5x.", "math_expression": "10 + 5x" },
            { "verbal_explanation": "שלב 2: מינוס x כפול 2 שווה מינוס 2x. מינוס x כפול x שווה מינוס x².", "math_expression": "- 2x - x²" },
            { "verbal_explanation": "שלב 3: איחוד וכינוס.", "math_expression": "10 + 3x - x²" },
            { "verbal_explanation": "שלב 4: נהוג לסדר את החזקות מהגבוהה לנמוכה.", "math_expression": "-x² + 3x + 10" }
        ],
        "final_answer": "-x² + 3x + 10",
        "options": ["-x² + 7x + 10", "x² + 3x + 10", "-x² + 3x + 10", "-x² - 3x + 10"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Low",
        "question_text": "מלאו את החסר: <strong>(x + 2)(x + 4) = x² + __ + 8</strong>",
        "hint": "חשבו רק על האיברים האמצעיים שמתכנסים יחד.",
        "solution_steps": [
            { "verbal_explanation": "האיבר האמצעי מורכב מסכום הכפלת הקצוות: (x*4) ועוד (2*x).", "math_expression": "4x + 2x = 6x" }
        ],
        "final_answer": "6x",
        "options": ["8x", "6x", "2x", "4x"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>(x - 1)(x + 1)(x + 2)</strong>",
        "hint": "פתחו קודם את שני הסוגריים הראשונים. שימו לב שהם יוצרים ביטוי מאוד נוח וקצר (x² - 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את (x-1) ב-(x+1).", "math_expression": "(x² + x - x - 1) = (x² - 1)" },
            { "verbal_explanation": "שלב 2: כעת נכפיל את התוצאה המצומצמת בסוגריים השלישיים.", "math_expression": "(x² - 1)(x + 2)" },
            { "verbal_explanation": "שלב 3: נשתמש שוב בחוק הפילוג המורחב.", "math_expression": "x³ + 2x² - x - 2" }
        ],
        "final_answer": "x³ + 2x² - x - 2",
        "options": ["x³ + 2x² + x - 2", "x³ + 2x² - x - 2", "x³ - x² - 2", "x³ - 2"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "חוק הפילוג המורחב (פתיחת סוגריים)",
        "difficulty": "Medium",
        "question_text": "פשטו: <strong>3(x - 2)(2x + 1)</strong>",
        "hint": "קודם פתחו את זוג הסוגריים, ורק בסוף הכפילו הכל ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת הסוגריים הכפולים (ה-3 ממתין בחוץ).", "math_expression": "3 * [2x² + x - 4x - 2]" },
            { "verbal_explanation": "שלב 2: כינוס איברים בפנים.", "math_expression": "3 * [2x² - 3x - 2]" },
            { "verbal_explanation": "שלב 3: הכפלת כל איבר פנימי ב-3.", "math_expression": "6x² - 9x - 6" }
        ],
        "final_answer": "6x² - 9x - 6",
        "options": ["6x² - 9x - 6", "6x² - 3x - 2", "5x² - 9x - 6", "6x² - 15x - 6"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: הוצאת גורם משותף (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים על ידי הוצאת גורם משותף: <strong>5x + 15</strong>",
        "hint": "מצאו את המספר הגדול ביותר שמתחלק גם ב-5 וגם ב-15. הוציאו אותו מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש את המחלק המשותף המקסימלי של המספרים 5 ו-15. המספר הוא 5.", "math_expression": "גורם משותף = 5" },
            { "verbal_explanation": "שלב 2: נרשום 5 מחוץ לסוגריים. כעת נשאל את עצמנו: 5 כפול מה ייתן לנו 5x? התשובה היא x.", "math_expression": "5(x ...)" },
            { "verbal_explanation": "שלב 3: נשאל: 5 כפול מה ייתן לנו 15? התשובה היא 3.", "math_expression": "5(x + 3)" },
            { "verbal_explanation": "שלב 4: נוודא על ידי פתיחת סוגריים בראש שאכן חוזרים לביטוי המקורי." }
        ],
        "final_answer": "5(x + 3)",
        "options": ["5(x + 15)", "5(x + 3)", "3(x + 5)", "x(5 + 15)"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "הוציאו גורם משותף מתוך הביטוי: <strong>x² + 4x</strong>",
        "hint": "הפעם הגורם המשותף הוא לא מספר, אלא אות שמסתתרת בשני האיברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמשתנה x מופיע בשני האיברים (ב-x² יש פעמיים x, וב-4x יש פעם אחת).", "math_expression": "גורם משותף = x" },
            { "verbal_explanation": "שלב 2: נרשום x מחוץ לסוגריים ונחלק כל איבר מקורי ב-x.", "math_expression": "x( ... )" },
            { "verbal_explanation": "שלב 3: x² חלקי x משאיר x. 4x חלקי x משאיר 4.", "math_expression": "x(x + 4)" }
        ],
        "final_answer": "x(x + 4)",
        "options": ["x(x + 4x)", "x(x + 4)", "4(x² + 1)", "x²(1 + 4x)"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>6x² - 18x</strong>",
        "hint": "כאן יש גורם משותף 'כפול' - גם מספר (המתחלק ב-6 ו-18) וגם משתנה (x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הגורם המספרי הגדול ביותר המשותף ל-6 ו-18, והוא 6.", "math_expression": "גורם מספרי = 6" },
            { "verbal_explanation": "שלב 2: נזהה את הנעלם המשותף בחזקה הנמוכה ביותר, והוא x.", "math_expression": "גורם נעלם = x" },
            { "verbal_explanation": "שלב 3: הגורם המשותף המלא הוא 6x. נרשום אותו מחוץ לסוגריים.", "math_expression": "6x( ... )" },
            { "verbal_explanation": "שלב 4: נחלק: 6x² חלקי 6x נותן x. מינוס 18x חלקי 6x נותן מינוס 3.", "math_expression": "6x(x - 3)" }
        ],
        "final_answer": "6x(x - 3)",
        "options": ["6(x² - 3x)", "x(6x - 18)", "6x(x - 3)", "3x(2x - 6)"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "הוציאו את הגורם המשותף המקסימלי מתוך: <strong>14a³ + 21a²</strong>",
        "hint": "חשבו: מהו המספר הגדול ביותר שמחלק גם את 14 וגם את 21? ומהי החזקה המקסימלית של a שניתן להוציא?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר הגדול שמחלק את 14 ו-21 הוא 7.", "math_expression": "גורם מספרי = 7" },
            { "verbal_explanation": "שלב 2: שתי החזקות הן a³ ו-a². החזקה המשותפת הגבוהה ביותר ששניהם יכולים 'לתת' היא a².", "math_expression": "גורם נעלם = a²" },
            { "verbal_explanation": "שלב 3: נוציא 7a² החוצה. 14a³ חלקי 7a² משאיר 2a. 21a² חלקי 7a² משאיר 3.", "math_expression": "7a²(2a + 3)" }
        ],
        "final_answer": "7a²(2a + 3)",
        "options": ["7a(2a² + 3a)", "7a²(2a + 3)", "7(2a³ + 3a²)", "a²(14a + 21)"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "הוציאו גורם משותף <strong>שלילי</strong> מתוך הביטוי הבא: <strong>-4x - 12</strong>",
        "hint": "כאשר מוציאים גורם משותף עם סימן מינוס, חובה להפוך את הסימנים של האיברים שנשארים בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהגורם המשותף המספרי הוא 4. נוציא החוצה מינוס 4 כפי שנתבקשנו.", "math_expression": "גורם משותף = -4" },
            { "verbal_explanation": "שלב 2: נחלק כל איבר במינוס 4. מינוס 4x חלקי מינוס 4 שווה לפלוס x.", "math_expression": "-4(x ... )" },
            { "verbal_explanation": "שלב 3: מינוס 12 חלקי מינוס 4 שווה לפלוס 3. שימו לב להחלפת הסימן!", "math_expression": "-4(x + 3)" }
        ],
        "final_answer": "-4(x + 3)",
        "options": ["-4(x - 3)", "-4(x + 3)", "4(-x - 3)", "4(x - 3)"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "פרקו את הביטוי הבא: <strong>ab + ac</strong>",
        "hint": "איזו אות חוזרת על עצמה בשני החלקים של התרגיל?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהאות a מופיעה כגורם מכפיל בשני האיברים.", "math_expression": "גורם משותף = a" },
            { "verbal_explanation": "שלב 2: נוציא את a מחוץ לסוגריים.", "math_expression": "a(b + c)" }
        ],
        "final_answer": "a(b + c)",
        "options": ["a(b + ac)", "a(b + c)", "ab(1 + c)", "b(a + c)"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>8x³ - 4x² + 2x</strong>",
        "hint": "מצאו גורם משותף לשלושה איברים. מהו המספר שמחלק את 8, 4 ו-2? מהי החזקה הנמוכה ביותר של x?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק המשותף הגדול ביותר של 8, 4 ו-2 הוא 2.", "math_expression": "2" },
            { "verbal_explanation": "שלב 2: החזקה הנמוכה ביותר של הנעלם מבין כל האיברים היא x בודד.", "math_expression": "x" },
            { "verbal_explanation": "שלב 3: נרשום 2x מחוץ לסוגריים ונחלק כל אחד משלושת האיברים ב-2x.", "math_expression": "2x(4x² - 2x + 1)" },
            { "verbal_explanation": "שלב 4: חשוב לשים לב: כאשר מחלקים את האיבר האחרון (2x) בעצמו (2x), התוצאה היא 1 ולא 0!" }
        ],
        "final_answer": "2x(4x² - 2x + 1)",
        "options": ["2x(4x² - 2x)", "2x(4x² - 2x + 1)", "2(4x³ - 2x² + x)", "4x(2x² - x + 0.5)"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פירוק מורכב: מהו הגורם המשותף המלא לביטוי <strong>15x²y³ - 25x³y²</strong>?",
        "hint": "טפלו בנפרד במספרים, בנעלם x ובנעלם y. הוציאו מכל אחד את המקסימום האפשרי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מספרים - המחלק הגדול ביותר ל-15 ו-25 הוא 5.", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: נעלם x - החזקה הקטנה יותר בין x² ל-x³ היא x².", "math_expression": "x²" },
            { "verbal_explanation": "שלב 3: נעלם y - החזקה הקטנה יותר בין y³ ל-y² היא y².", "math_expression": "y²" },
            { "verbal_explanation": "שלב 4: הגורם המשותף המלא הוא 5x²y². נוציא אותו החוצה ונחלק.", "math_expression": "5x²y²(3y - 5x)" }
        ],
        "final_answer": "5x²y²(3y - 5x)",
        "options": ["5xy(3xy² - 5x²y)", "5x²y²(3y - 5x)", "5x³y³(3/x - 5/y)", "25x²y²(0.6y - x)"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>x(m + n) + y(m + n)</strong>",
        "hint": "הסתכלו על הביטוי כעל שני גושים גדולים. מה משותף לשניהם? הגורם המשותף לא חייב להיות איבר בודד, הוא יכול להיות סוגריים שלמים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהסוגריים (m + n) מופיעים כגורם בשני צידי הפלוס.", "math_expression": "גורם משותף = (m + n)" },
            { "verbal_explanation": "שלב 2: נוציא את הסוגריים האלו כיחידה אחת מחוץ לסוגריים חדשים.", "math_expression": "(m + n)[ ... ]" },
            { "verbal_explanation": "שלב 3: נרשום בתוך הסוגריים החדשים את מה שנשאר: מצידו השמאלי נשאר x, ומצידו הימני נשאר פלוס y.", "math_expression": "(m + n)(x + y)" }
        ],
        "final_answer": "(m + n)(x + y)",
        "options": ["(m + n)(xy)", "x(m+n)y", "(m + n)(x + y)", "(x + y)mn"],
        "correctAnswer": 2
    },
    {
        "id": 30,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "הוציאו גורם משותף ופרקו: <strong>2a(x - 1) - 3b(x - 1)</strong>",
        "hint": "בדומה לשאלה הקודמת, הגורם המשותף הוא הביטוי (x - 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הסוגריים (x - 1) כגורם המשותף.", "math_expression": "(x - 1)" },
            { "verbal_explanation": "שלב 2: נוציא אותו החוצה. מהאיבר הראשון נשאר לנו 2a.", "math_expression": "(x - 1)(2a ... )" },
            { "verbal_explanation": "שלב 3: מהאיבר השני נשאר לנו מינוס 3b. נחבר את השאריות.", "math_expression": "(x - 1)(2a - 3b)" }
        ],
        "final_answer": "(x - 1)(2a - 3b)",
        "options": ["(x - 1)(2a + 3b)", "(x - 1)(2a - 3b)", "(2a - 3b)x - 1", "2a(-3b)(x - 1)"],
        "correctAnswer": 1
    },
    {
        "id": 31,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "איזה ביטוי שקול ל- <strong>7x - 7</strong> לאחר הוצאת גורם משותף?",
        "hint": "אל תשכחו שכאשר מוציאים גורם משותף שהוא זהה לאיבר כולו, נשאר במקומו 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר 7 מופיע בשני האיברים.", "math_expression": "7( ... )" },
            { "verbal_explanation": "שלב 2: 7x חלקי 7 משאיר x. מינוס 7 חלקי 7 משאיר מינוס 1.", "math_expression": "7(x - 1)" }
        ],
        "final_answer": "7(x - 1)",
        "options": ["7(x)", "7(x - 1)", "7x(-1)", "7(x - 7)"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו את הביטוי: <strong>-x² - 5x</strong>",
        "hint": "הוציאו מינוס x כגורם משותף כדי להשאיר את הסוגריים חיוביים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא גורם משותף שלילי -x.", "math_expression": "-x( ... )" },
            { "verbal_explanation": "שלב 2: מינוס x² חלקי מינוס x הופך ל-x חיובי.", "math_expression": "-x(x ... )" },
            { "verbal_explanation": "שלב 3: מינוס 5x חלקי מינוס x הופך לפלוס 5.", "math_expression": "-x(x + 5)" }
        ],
        "final_answer": "-x(x + 5)",
        "options": ["-x(x - 5)", "x(-x - 5)", "-x(x + 5)", "x(x + 5)"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "הוציאו גורם משותף: <strong>a(x - y) + b(y - x)</strong>",
        "hint": "שימו לב שהסוגריים כמעט זהים, אבל הפוכים בסימן. איך אפשר להפוך את (y - x) ל-(x - y)? על ידי הוצאת מינוס 1 החוצה!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשנה את הסימן של האיבר השני על ידי הוצאת מינוס. הפלוס b יהפוך למינוס b, ובתוך הסוגריים הסימנים יתהפכו ל-(x - y).", "math_expression": "a(x - y) - b(x - y)" },
            { "verbal_explanation": "שלב 2: כעת יש לנו גורם משותף מושלם שהוא הסוגריים (x - y).", "math_expression": "(x - y)[ ... ]" },
            { "verbal_explanation": "שלב 3: נוציא אותו החוצה, ומה שנשאר זה a פחות b.", "math_expression": "(x - y)(a - b)" }
        ],
        "final_answer": "(x - y)(a - b)",
        "options": ["(x - y)(a + b)", "(x - y)(a - b)", "(y - x)(a - b)", "ab(x - y)"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>100x³ - 10x</strong>",
        "hint": "מצאו את המספר הגדול ביותר וה-x בעל החזקה הגדולה ביותר שמשותפים לשניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: גורם מספרי משותף הוא 10. גורם נעלם הוא x. הגורם השלם: 10x.", "math_expression": "10x( ... )" },
            { "verbal_explanation": "שלב 2: נחלק את האיבר הראשון: 100x³ חלקי 10x שווה 10x².", "math_expression": "10x(10x² ... )" },
            { "verbal_explanation": "שלב 3: נחלק את האיבר השני: מינוס 10x חלקי 10x שווה מינוס 1.", "math_expression": "10x(10x² - 1)" }
        ],
        "final_answer": "10x(10x² - 1)",
        "options": ["10x(10x²)", "10x(10x² - x)", "10(10x³ - x)", "10x(10x² - 1)"],
        "correctAnswer": 3
    },
    {
        "id": 35,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "האם הוצאת הגורם המשותף בביטוי הבא נכונה: <strong>3x + 6 = 3(x + 3)</strong>?",
        "hint": "פתחו את הסוגריים בצד ימין כדי לבדוק אם חוזרים לביטוי המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק על ידי פתיחת סוגריים (חוק הפילוג).", "math_expression": "3 * x + 3 * 3" },
            { "verbal_explanation": "שלב 2: התוצאה היא 3x + 9.", "math_expression": "3x + 9" },
            { "verbal_explanation": "שלב 3: מכיוון ש-3x+9 אינו שווה לביטוי המקורי (3x+6), הפירוק שגוי. הפירוק הנכון הוא 3(x+2).", "math_expression": "3x + 6 ≠ 3x + 9" }
        ],
        "final_answer": "לא, הפירוק שגוי.",
        "options": ["כן, הפירוק נכון.", "לא, הפירוק שגוי.", "הפירוק נכון רק אם x חיובי", "אי אפשר לפרק ביטוי זה"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "הוציאו גורם משותף שהוא שבר: <strong>(1/2)x² + (1/2)x</strong>",
        "hint": "הגורם המשותף הוא החצי יחד עם ה-x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את חצי (0.5) ואת x כגורמים המשותפים לשני האיברים.", "math_expression": "0.5x( ... )" },
            { "verbal_explanation": "שלב 2: חלוקת האיבר הראשון ב-0.5x תשאיר רק x.", "math_expression": "0.5x(x ... )" },
            { "verbal_explanation": "שלב 3: חלוקת האיבר השני (חצי איקס) בעצמו, תשאיר 1.", "math_expression": "0.5x(x + 1)" }
        ],
        "final_answer": "1/2x(x + 1)",
        "options": ["1/2(x² + x)", "1/2x(x + 1)", "x(1/2x + 1/2)", "1/2x²(1 + x)"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>x²y + xy²</strong>",
        "hint": "הוציאו גם x וגם y בחזקה המינימלית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשתנים x ו-y נמצאים בשני האיברים. החזקה הקטנה ביותר של שניהם היא 1.", "math_expression": "xy( ... )" },
            { "verbal_explanation": "שלב 2: x²y חלקי xy משאיר x אחד.", "math_expression": "xy(x + ... )" },
            { "verbal_explanation": "שלב 3: xy² חלקי xy משאיר y אחד.", "math_expression": "xy(x + y)" }
        ],
        "final_answer": "xy(x + y)",
        "options": ["x(xy + y²)", "y(x² + xy)", "xy(x + y)", "x²y²(x + y)"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פרקו לגורמים על ידי <strong>פירוק לפי קבוצות</strong>: <strong>ax + ay + bx + by</strong>",
        "hint": "זהו שלב מקדים לטרינום. קחו את שני האיברים הראשונים והוציאו מהם גורם, וקחו את השניים האחרונים והוציאו גורם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא a מהזוג הראשון.", "math_expression": "a(x + y) + bx + by" },
            { "verbal_explanation": "שלב 2: נוציא b מהזוג השני.", "math_expression": "a(x + y) + b(x + y)" },
            { "verbal_explanation": "שלב 3: כעת יש לנו גורם משותף חדש שהוא הסוגריים (x+y).", "math_expression": "(x + y)[ ... ]" },
            { "verbal_explanation": "שלב 4: נוציא אותו החוצה, והשאריות מרכיבות את הסוגריים השניים.", "math_expression": "(x + y)(a + b)" }
        ],
        "final_answer": "(x + y)(a + b)",
        "options": ["(a + x)(b + y)", "(x + y)(a + b)", "ab(x + y)", "xy(a + b)"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "הוציאו גורם משותף: <strong>24x - 8</strong>",
        "hint": "מהו המספר הגדול ביותר שמחלק גם את 24 וגם את 8?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק המשותף הגדול ביותר הוא 8.", "math_expression": "8( ... )" },
            { "verbal_explanation": "שלב 2: נחלק. 24x חלקי 8 נותן 3x.", "math_expression": "8(3x - ... )" },
            { "verbal_explanation": "שלב 3: מינוס 8 חלקי 8 נותן מינוס 1.", "math_expression": "8(3x - 1)" }
        ],
        "final_answer": "8(3x - 1)",
        "options": ["8(3x - 8)", "4(6x - 2)", "8(3x - 1)", "8x(3 - 1)"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>x³ - x²</strong>",
        "hint": "חפשו את חזקת ה-x הנמוכה מבין השתיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החזקה הנמוכה יותר היא x². נוציא אותה.", "math_expression": "x²( ... )" },
            { "verbal_explanation": "שלב 2: x³ חלקי x² משאיר x. מינוס x² חלקי x² משאיר מינוס 1.", "math_expression": "x²(x - 1)" }
        ],
        "final_answer": "x²(x - 1)",
        "options": ["x(x² - x)", "x²(x - 1)", "x³(1 - 1/x)", "x²(x - 0)"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: נוסחאות הכפל המקוצר (20 שאלות) ---
    // ==============================================================
    {
        "id": 41,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים בעזרת נוסחת הכפל המקוצר: <strong>²(x + 5)</strong><br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120' viewBox='0 0 120 120'><rect x='10' y='10' width='100' height='100' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='80' x2='110' y2='80' stroke='#1e293b' stroke-width='1' stroke-dasharray='4'/><line x1='80' y1='10' x2='80' y2='110' stroke='#1e293b' stroke-width='1' stroke-dasharray='4'/><text x='40' y='45' font-size='16'>x²</text><text x='90' y='45' font-size='14'>5x</text><text x='40' y='100' font-size='14'>5x</text><text x='90' y='100' font-size='14'>25</text></svg></div>",
        "hint": "השתמשו בנוסחה: האיבר הראשון בריבוע, ועוד פעמיים (הראשון כפול השני), ועוד השני בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנוסחה המתאימה - נוסחת סכום בריבוע. התבנית היא: a² + 2ab + b².", "math_expression": "(a + b)²" },
            { "verbal_explanation": "שלב 2: האיבר הראשון (x) עולה בריבוע.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 3: נחשב את האיבר האמצעי - פעמיים האיבר הראשון כפול האיבר השני (2 כפול x כפול 5).", "math_expression": "2 * x * 5 = 10x" },
            { "verbal_explanation": "שלב 4: האיבר השני (5) עולה בריבוע.", "math_expression": "5² = 25" },
            { "verbal_explanation": "שלב 5: נחבר את כל החלקים ליצירת התלת-איבר הסופי.", "math_expression": "x² + 10x + 25" }
        ],
        "final_answer": "x² + 10x + 25",
        "options": ["x² + 25", "x² + 5x + 25", "x² + 10x + 25", "2x + 10"],
        "correctAnswer": 2
    },
    {
        "id": 42,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פתחו את הביטוי: <strong>²(m - 3)</strong>",
        "hint": "הנוסחה להפרש בריבוע זהה לקודמת, פרט לכך שהסימן של האיבר האמצעי הוא מינוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בנוסחת ההפרש בריבוע: a² - 2ab + b².", "math_expression": "(a - b)²" },
            { "verbal_explanation": "שלב 2: נעלה את הראשון (m) בריבוע.", "math_expression": "m²" },
            { "verbal_explanation": "שלב 3: האיבר האמצעי הוא מינוס פעמיים הראשון כפול השני. 2 כפול m כפול 3 עם מינוס.", "math_expression": "-2 * m * 3 = -6m" },
            { "verbal_explanation": "שלב 4: נעלה את השני (3) בריבוע. מינוס 3 כפול מינוס 3 תמיד הופך לפלוס.", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 5: נרכיב את התשובה המלאה.", "math_expression": "m² - 6m + 9" }
        ],
        "final_answer": "m² - 6m + 9",
        "options": ["m² - 9", "m² - 6m + 9", "m² + 6m - 9", "m² - 3m + 9"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "השתמשו בנוסחת 'הפרש ריבועים' כדי לפתוח את: <strong>(x + 7)(x - 7)</strong>",
        "hint": "כאשר מכפילים סכום של שני איברים בהפרש שלהם, התוצאה היא הראשון בריבוע פחות השני בריבוע. האיבר האמצעי נעלם!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את התבנית הקלאסית של כפל סכום בהפרש.", "math_expression": "(a + b)(a - b) = a² - b²" },
            { "verbal_explanation": "שלב 2: ניקח את האיבר הראשון (x) ונעלה אותו בריבוע.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 3: ניקח את האיבר השני (7) ונעלה אותו בריבוע.", "math_expression": "7² = 49" },
            { "verbal_explanation": "שלב 4: נרשום את ההפרש ביניהם.", "math_expression": "x² - 49" }
        ],
        "final_answer": "x² - 49",
        "options": ["x² + 49", "x² - 14x + 49", "x² - 49", "2x - 14"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פתחו את הסוגריים: <strong>²(2x + 1)</strong>",
        "hint": "היזהרו! האיבר הראשון הוא 2x, ולכן כאשר מעלים אותו בריבוע, גם ה-2 וגם ה-x עולים בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את כל האיבר הראשון בריבוע.", "math_expression": "(2x)² = 4x²" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר האמצעי (2 כפול הראשון כפול השני).", "math_expression": "2 * (2x) * 1 = 4x" },
            { "verbal_explanation": "שלב 3: נעלה את האיבר השני (1) בריבוע.", "math_expression": "1² = 1" },
            { "verbal_explanation": "שלב 4: נחבר הכל יחד.", "math_expression": "4x² + 4x + 1" }
        ],
        "final_answer": "4x² + 4x + 1",
        "options": ["2x² + 4x + 1", "4x² + 2x + 1", "4x² + 1", "4x² + 4x + 1"],
        "correctAnswer": 3
    },
    {
        "id": 45,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פתחו את הביטוי: <strong>(3a - 4)(3a + 4)</strong>",
        "hint": "זוהי נוסחת הפרש הריבועים. העלו כל אחד מהאיברים בריבוע ושימו מינוס ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את התבנית של 'כפל סכום בהפרש'.", "math_expression": "(a - b)(a + b) = a² - b²" },
            { "verbal_explanation": "שלב 2: נעלה את האיבר הראשון (3a) בריבוע. 3 בריבוע זה 9, ו-a בריבוע זה a².", "math_expression": "(3a)² = 9a²" },
            { "verbal_explanation": "שלב 3: נעלה את האיבר השני (4) בריבוע.", "math_expression": "4² = 16" },
            { "verbal_explanation": "שלב 4: נחסיר את התוצאות.", "math_expression": "9a² - 16" }
        ],
        "final_answer": "9a² - 16",
        "options": ["9a² + 16", "9a² - 16", "3a² - 16", "9a² - 24a - 16"],
        "correctAnswer": 1
    },
    {
        "id": 46,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פתחו את הסוגריים הכוללים שני משתנים: <strong>²(5x - 2y)</strong>",
        "hint": "עבדו לאט ולפי הנוסחה. האיבר האמצעי יכלול גם x וגם y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: האיבר הראשון (5x) בריבוע.", "math_expression": "(5x)² = 25x²" },
            { "verbal_explanation": "שלב 2: האיבר האמצעי: מינוס 2 כפול (5x) כפול (2y). נכפול קודם מספרים: 2*5*2=20.", "math_expression": "-2 * 5x * 2y = -20xy" },
            { "verbal_explanation": "שלב 3: האיבר השני (2y) בריבוע.", "math_expression": "(2y)² = 4y²" },
            { "verbal_explanation": "שלב 4: נרכיב את התוצאה המלאה.", "math_expression": "25x² - 20xy + 4y²" }
        ],
        "final_answer": "25x² - 20xy + 4y²",
        "options": ["25x² - 4y²", "25x² - 10xy + 4y²", "25x² - 20xy + 4y²", "5x² - 20xy - 2y²"],
        "correctAnswer": 2
    },
    {
        "id": 47,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים על ידי שימוש הפוך בנוסחה: <strong>x² - 81</strong>",
        "hint": "זהו 'הפרש ריבועים'. איזה מספר כפול עצמו נותן 81?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהביטוי הוא חיסור של שני איברים שכל אחד מהם הוא ריבוע מושלם.", "math_expression": "a² - b²" },
            { "verbal_explanation": "שלב 2: השורש של x² הוא x. השורש של 81 הוא 9.", "math_expression": "a = x , b = 9" },
            { "verbal_explanation": "שלב 3: נרשום זאת בצורה של מכפלת סכום בהפרש.", "math_expression": "(x - 9)(x + 9)" }
        ],
        "final_answer": "(x - 9)(x + 9)",
        "options": ["(x - 9)²", "(x + 9)²", "(x - 81)(x + 1)", "(x - 9)(x + 9)"],
        "correctAnswer": 3
    },
    {
        "id": 48,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פרקו את הטרינום המושלם הבא לגורמים: <strong>x² + 12x + 36</strong>",
        "hint": "הביטו באיבר הראשון והאחרון. מה השורש של x²? מה השורש של 36? האם כפליים המכפלה שלהם שווה לאיבר האמצעי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא שורש לאיבר הראשון (x²) ונקבל x.", "math_expression": "a = x" },
            { "verbal_explanation": "שלב 2: נוציא שורש לאיבר השלישי (36) ונקבל 6.", "math_expression": "b = 6" },
            { "verbal_explanation": "שלב 3: נבדוק את האיבר האמצעי. האם פעמיים x כפול 6 שווה ל-12x? התשובה היא כן.", "math_expression": "2 * x * 6 = 12x" },
            { "verbal_explanation": "שלב 4: מכיוון שהסימן האמצעי הוא פלוס, נסגור את הפירוק כסכום בריבוע.", "math_expression": "(x + 6)²" }
        ],
        "final_answer": "(x + 6)²",
        "options": ["(x + 6)(x - 6)", "(x + 12)²", "(x + 6)²", "(x + 36)²"],
        "correctAnswer": 2
    },
    {
        "id": 49,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>m² - 14m + 49</strong>",
        "hint": "זהו טרינום מושלם עם סימן מינוס. מצאו את השורש של 49.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שורש של m² הוא m. שורש של 49 הוא 7.", "math_expression": "a = m , b = 7" },
            { "verbal_explanation": "שלב 2: בדיקת איבר אמצעי: פעמיים m כפול 7 אכן שווה 14m.", "math_expression": "2 * 7 * m = 14m" },
            { "verbal_explanation": "שלב 3: מכיוון שהאיבר האמצעי הוא שלילי (-14m), נשתמש בנוסחת ההפרש בריבוע.", "math_expression": "(m - 7)²" }
        ],
        "final_answer": "(m - 7)²",
        "options": ["(m - 7)(m + 7)", "(m - 7)²", "(m + 7)²", "(m - 49)²"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פרקו את הביטוי המורכב: <strong>16x² - 25</strong>",
        "hint": "שימו לב ש-16 הוא גם ריבוע מושלם. מה השורש של 16x²?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה חיסור של שני ריבועים.", "math_expression": "a² - b²" },
            { "verbal_explanation": "שלב 2: השורש של 16x² הוא 4x (כי 4 כפול 4 זה 16).", "math_expression": "a = 4x" },
            { "verbal_explanation": "שלב 3: השורש של 25 הוא 5.", "math_expression": "b = 5" },
            { "verbal_explanation": "שלב 4: נציב בנוסחת (a-b)(a+b).", "math_expression": "(4x - 5)(4x + 5)" }
        ],
        "final_answer": "(4x - 5)(4x + 5)",
        "options": ["(16x - 5)(16x + 5)", "(4x - 5)²", "(4x - 5)(4x + 5)", "(4x - 25)(4x + 1)"],
        "correctAnswer": 2
    },
    {
        "id": 51,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "השלימו את האיבר החסר כדי שיתקבל 'טרינום מושלם' שניתן לסגור לפי הנוסחה:<br><strong>x² + ___ + 64</strong>",
        "hint": "האיבר האמצעי הוא תמיד פעמיים השורש של הראשון כפול השורש של האחרון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את השורש של האיבר האחרון (64).", "math_expression": "√64 = 8" },
            { "verbal_explanation": "שלב 2: שורש האיבר הראשון הוא x.", "math_expression": "√x² = x" },
            { "verbal_explanation": "שלב 3: האיבר האמצעי החסר מחושב כפעמיים (2) כפול השורש הראשון כפול השורש השני.", "math_expression": "2 * x * 8 = 16x" }
        ],
        "final_answer": "16x",
        "options": ["8x", "16x", "32x", "64x"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "השלימו את המספר החסר:<br><strong>²(x - 4) = x² - 8x + ___</strong>",
        "hint": "האיבר האחרון בנוסחה הוא תמיד האיבר השני שבתוך הסוגריים מועלה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בסוגריים, האיבר השני שלנו הוא 4.", "math_expression": "b = 4" },
            { "verbal_explanation": "שלב 2: לפי הנוסחה a² - 2ab + b², המספר האחרון חייב להיות b בריבוע.", "math_expression": "4²" },
            { "verbal_explanation": "שלב 3: נחשב 4 כפול 4.", "math_expression": "16" }
        ],
        "final_answer": "16",
        "options": ["8", "16", "4", "-16"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "חשבו בדרך חכמה ללא מחשבון: <strong>41 * 39</strong>",
        "hint": "חשבו על 41 כ-(40 פלוס 1) ועל 39 כ-(40 פחות 1). איך זה עוזר לנו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל בעזרת המספר 40 שהוא נוח לחישוב.", "math_expression": "(40 + 1)(40 - 1)" },
            { "verbal_explanation": "שלב 2: נזהה שזוהי בדיוק התבנית של הפרש ריבועים (a+b)(a-b).", "math_expression": "40² - 1²" },
            { "verbal_explanation": "שלב 3: נחשב את הריבועים. 40 בריבוע זה 1600 (4 כפול 4 ועוד שני אפסים). 1 בריבוע זה 1.", "math_expression": "1600 - 1" },
            { "verbal_explanation": "שלב 4: נבצע את החיסור.", "math_expression": "1599" }
        ],
        "final_answer": "1599",
        "options": ["1599", "1601", "1521", "1600"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>²(x + 2) פחות ²(x - 2)</strong>",
        "hint": "פתחו כל נוסחה בנפרד לתוך סוגריים מרובעים. אל תשכחו שהמינוס באמצע הופך את כל הסימנים של התוצאה השנייה!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פתיחת הנוסחה הראשונה.", "math_expression": "(x² + 4x + 4)" },
            { "verbal_explanation": "שלב 2: פתיחת הנוסחה השנייה ושמירתה בסוגריים כי יש מינוס לפנייה.", "math_expression": "- (x² - 4x + 4)" },
            { "verbal_explanation": "שלב 3: הכנסת המינוס פנימה - כל סימן מתהפך.", "math_expression": "x² + 4x + 4 - x² + 4x - 4" },
            { "verbal_explanation": "שלב 4: כינוס איברים דומים. ה-x² מתבטל, ה-4 מתבטל, ונשאר רק 4x ועוד 4x.", "math_expression": "8x" }
        ],
        "final_answer": "8x",
        "options": ["8x", "2x² + 8", "0", "-8x"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "איזה ביטוי מבין הבאים <strong>אינו</strong> שווה ל- (x-3)(x-3)?",
        "hint": "שימו לב: (x-3)(x-3) זה פשוט (x-3) בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הביטוי (x-3)(x-3) הוא בעצם העלאה בריבוע של ההפרש.", "math_expression": "(x - 3)²" },
            { "verbal_explanation": "שלב 2: נפתח את הנוסחה כדי לראות מה היא שווה.", "math_expression": "x² - 6x + 9" },
            { "verbal_explanation": "שלב 3: כל ביטוי שהוא x² - 9, חסר בו האיבר האמצעי, ולכן אינו נכון.", "math_expression": "x² - 9 ≠ x² - 6x + 9" }
        ],
        "final_answer": "x² - 9",
        "options": ["²(x - 3)", "x² - 6x + 9", "x² - 9", "כל התשובות שוות לביטוי"],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פרקו את הביטוי על ידי הוצאת גורם משותף ואז נוסחה: <strong>2x² - 18</strong>",
        "hint": "שלבו שיטות. קודם הוציאו את 2 החוצה מחוץ לסוגריים. מה נשאר בפנים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר 2 מתחלק גם ב-2 וגם ב-18. נוציא אותו כגורם משותף.", "math_expression": "2(x² - 9)" },
            { "verbal_explanation": "שלב 2: נסתכל בתוך הסוגריים. זהו 'הפרש ריבועים' קלאסי שאנו מכירים.", "math_expression": "x² - 9 = (x - 3)(x + 3)" },
            { "verbal_explanation": "שלב 3: נרכיב את הפירוק המלא יחד עם ה-2 שממתין בחוץ.", "math_expression": "2(x - 3)(x + 3)" }
        ],
        "final_answer": "2(x - 3)(x + 3)",
        "options": ["(2x - 9)(x + 2)", "2(x - 3)(x + 3)", "2(x - 9)²", "2x(x - 9)"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פרקו: <strong>x⁴ - 1</strong>",
        "hint": "זוהי נוסחת הפרש ריבועים פעמיים. x ברביעית הוא x בריבוע כפול x בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הריבועים. x⁴ הוא הריבוע של x². 1 הוא הריבוע של 1.", "math_expression": "(x² - 1)(x² + 1)" },
            { "verbal_explanation": "שלב 2: נסתכל על החלק הראשון (x² - 1). גם הוא הפרש ריבועים שניתן לפרק שוב!", "math_expression": "(x - 1)(x + 1)" },
            { "verbal_explanation": "שלב 3: החלק השני (x² + 1) הוא חיבור, ולכן לא ניתן לפרק אותו מעבר לכך באלגברה בסיסית.", "math_expression": "(x - 1)(x + 1)(x² + 1)" }
        ],
        "final_answer": "(x - 1)(x + 1)(x² + 1)",
        "options": ["(x² - 1)²", "(x - 1)⁴", "(x - 1)(x + 1)(x² + 1)", "(x² - 1)(x² - 1)"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פתחו את: <strong>²(1/2x + 4)</strong>",
        "hint": "היזהרו עם השבר. חצי בריבוע זה רבע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: איבר ראשון בריבוע. חצי x כפול חצי x.", "math_expression": "(1/4)x²" },
            { "verbal_explanation": "שלב 2: איבר אמצעי. פעמיים כפול חצי x כפול 4. (2 כפול חצי מתבטל ל-1, ונשאר 4x).", "math_expression": "2 * (1/2)x * 4 = 4x" },
            { "verbal_explanation": "שלב 3: איבר שני בריבוע.", "math_expression": "4² = 16" },
            { "verbal_explanation": "שלב 4: הרכבת התוצאה.", "math_expression": "(1/4)x² + 4x + 16" }
        ],
        "final_answer": "1/4x² + 4x + 16",
        "options": ["1/2x² + 4x + 16", "1/4x² + 4x + 16", "1/4x² + 2x + 16", "1/4x² + 16"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "איזה מהנוסחאות הבאות היא <strong>שגויה</strong>?",
        "hint": "קראו בעיון. האם סכום בריבוע שווה לסכום הריבועים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: (a-b)(a+b) = a²-b². זו נוסחה נכונה ואמיתית.", "math_expression": "אמת" },
            { "verbal_explanation": "שלב 2: (a+b)² = a² + 2ab + b². זו נוסחה נכונה ואמיתית.", "math_expression": "אמת" },
            { "verbal_explanation": "שלב 3: (a+b)² = a² + b². זהו כשל נפוץ מאוד! חסר האיבר האמצעי 2ab. לכן נוסחה זו שגויה לחלוטין.", "math_expression": "שגיאה נפוצה" }
        ],
        "final_answer": "(a+b)² = a² + b²",
        "options": ["(a-b)(a+b) = a² - b²", "(a+b)² = a² + 2ab + b²", "(a-b)² = a² - 2ab + b²", "(a+b)² = a² + b²"],
        "correctAnswer": 3
    },
    {
        "id": 60,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פתחו ופשטו: <strong>²(x + y) - ²(x - y)</strong>",
        "hint": "פתחו כל סוגריים לפי הנוסחה המתאימה לו, ואז החסירו ביניהם. רוב האיברים יבטלו זה את זה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הנוסחה הראשונה.", "math_expression": "x² + 2xy + y²" },
            { "verbal_explanation": "שלב 2: נפתח את הנוסחה השנייה, ונשאיר אותה בסוגריים כי יש מינוס בחוץ.", "math_expression": "- (x² - 2xy + y²)" },
            { "verbal_explanation": "שלב 3: נפעיל את המינוס כדי להפוך סימנים בסוגריים השניים.", "math_expression": "x² + 2xy + y² - x² + 2xy - y²" },
            { "verbal_explanation": "שלב 4: נכנס איברים. ה-x² מתבטל, ה-y² מתבטל. נשארנו רק עם פעמיים 2xy.", "math_expression": "2xy + 2xy = 4xy" }
        ],
        "final_answer": "4xy",
        "options": ["2x² + 2y²", "0", "4xy", "-4xy"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 4: פירוק טרינום ריבועי (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים את הטרינום: <strong>x² + 7x + 10</strong>",
        "hint": "חפשו שני מספרים שהסכום שלהם הוא 7 והמכפלה (כפל) שלהם היא 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את דרישות הטרינום. אנו מחפשים שני מספרים, נקרא להם m ו-n.", "math_expression": "m + n = 7 (האמצעי)" },
            { "verbal_explanation": "שלב 2: אותם שני מספרים בדיוק חייבים לקיים גם את תנאי המכפלה.", "math_expression": "m * n = 10 (האחרון)" },
            { "verbal_explanation": "שלב 3: נסקור את הגורמים של 10. (1 ו-10), (2 ו-5). נבדוק למי מהם סכום 7. התשובה היא 2 ו-5.", "math_expression": "2 + 5 = 7" },
            { "verbal_explanation": "שלב 4: נרשום את התוצאה בתוך שני סוגריים.", "math_expression": "(x + 2)(x + 5)" }
        ],
        "final_answer": "(x + 2)(x + 5)",
        "options": ["(x + 1)(x + 10)", "(x + 2)(x + 5)", "(x + 3)(x + 4)", "(x - 2)(x - 5)"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Low",
        "question_text": "פרקו את: <strong>x² - 6x + 8</strong>",
        "hint": "כאשר המכפלה חיובית (8) והסכום שלילי (6-), שני המספרים חייבים להיות שליליים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: דרישת סכום.", "math_expression": "m + n = -6" },
            { "verbal_explanation": "שלב 2: דרישת מכפלה.", "math_expression": "m * n = 8" },
            { "verbal_explanation": "שלב 3: זוגות כופלים של 8: (1,8), (2,4). מכיוון שהסכום שלילי נבדוק את (-2) ו-(-4). סכומם אכן מינוס 6.", "math_expression": "-2 + -4 = -6" },
            { "verbal_explanation": "שלב 4: נרכיב את הסוגריים.", "math_expression": "(x - 2)(x - 4)" }
        ],
        "final_answer": "(x - 2)(x - 4)",
        "options": ["(x + 2)(x + 4)", "(x - 1)(x - 8)", "(x - 2)(x - 4)", "(x - 3)(x - 3)"],
        "correctAnswer": 2
    },
    {
        "id": 63,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>x² + 2x - 15</strong>",
        "hint": "מכפלה שלילית (-15) פירושה שמספר אחד חיובי ואחד שלילי. סכום חיובי (2) פירושו שהמספר הגדול מביניהם הוא החיובי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכפלה היא מינוס 15, סכום הוא 2.", "math_expression": "m*n = -15 , m+n = 2" },
            { "verbal_explanation": "שלב 2: נבדוק זוגות כופלים של 15: 1 ו-15, 3 ו-5. נשים לב של-3 ול-5 יש הפרש של 2.", "math_expression": "5 ו-3" },
            { "verbal_explanation": "שלב 3: נקבע את הסימנים. אנו צריכים שהסכום יהיה פלוס 2. לכן ה-5 יהיה חיובי וה-3 שלילי.", "math_expression": "+5 ו- -3" },
            { "verbal_explanation": "שלב 4: כתיבה סופית.", "math_expression": "(x + 5)(x - 3)" }
        ],
        "final_answer": "(x + 5)(x - 3)",
        "options": ["(x - 5)(x + 3)", "(x + 5)(x - 3)", "(x + 15)(x - 1)", "(x - 15)(x + 1)"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>x² - x - 12</strong>",
        "hint": "הסכום הוא 1- והמכפלה 12-. חפשו שני מספרים עוקבים או קרובים שהכפל שלהם הוא 12.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת מטרות הטרינום.", "math_expression": "כפל = -12 , סכום = -1" },
            { "verbal_explanation": "שלב 2: נחשוב על המספרים 3 ו-4, שהכפל שלהם הוא 12 וההפרש שלהם הוא 1.", "math_expression": "3 , 4" },
            { "verbal_explanation": "שלב 3: מכיוון שהסכום המבוקש הוא מינוס 1, המספר הגדול יותר חייב לקבל את המינוס.", "math_expression": "-4 , +3" },
            { "verbal_explanation": "שלב 4: סגירת סוגריים.", "math_expression": "(x - 4)(x + 3)" }
        ],
        "final_answer": "(x - 4)(x + 3)",
        "options": ["(x + 4)(x - 3)", "(x - 6)(x + 2)", "(x - 4)(x + 3)", "(x - 12)(x + 1)"],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "מה יהיה הפירוק של: <strong>x² - 11x + 30</strong>",
        "hint": "המכפלה 30 חיובית, לכן שני המספרים בעלי אותו סימן. הסכום 11- שלילי, לכן שניהם שליליים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת דרישות.", "math_expression": "m*n = 30 , m+n = -11" },
            { "verbal_explanation": "שלב 2: חיפוש זוגות הנותנים 30: (1,30), (2,15), (3,10), (5,6).", "math_expression": "הזוג המתאים: 5,6" },
            { "verbal_explanation": "שלב 3: כדי לקבל סכום של מינוס 11, שניהם חייבים להיות שליליים.", "math_expression": "-5 , -6" },
            { "verbal_explanation": "שלב 4: כתיבה סופית.", "math_expression": "(x - 5)(x - 6)" }
        ],
        "final_answer": "(x - 5)(x - 6)",
        "options": ["(x + 5)(x + 6)", "(x - 5)(x - 6)", "(x - 10)(x - 3)", "(x - 15)(x + 2)"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Low",
        "question_text": "אם אני מחפש לפרק טרינום שבו הסכום הוא 9 והמכפלה היא 20. מהם שני המספרים שלי?",
        "hint": "לוח הכפל פשוט. מה כפול מה זה 20?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על גורמים של 20.", "math_expression": "1*20, 2*10, 4*5" },
            { "verbal_explanation": "שלב 2: נבדוק איזה מהזוגות נותן סכום של 9.", "math_expression": "4 + 5 = 9" },
            { "verbal_explanation": "שלב 3: מצאנו את המספרים בהצלחה.", "math_expression": "4 ו-5" }
        ],
        "final_answer": "4 ו-5",
        "options": ["2 ו-10", "4 ו-5", "1 ו-20", "3 ו-6"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>a² + 10a + 24</strong>",
        "hint": "אל תתבלבלו בין 6 ו-4 לבין 12 ו-2. מי מהזוגות ייתן 10 בחיבור?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכפלה 24, סכום 10.", "math_expression": "m*n = 24 , m+n = 10" },
            { "verbal_explanation": "שלב 2: זוגות של 24: (2,12), (3,8), (4,6).", "math_expression": "נבחר 4 ו-6" },
            { "verbal_explanation": "שלב 3: 4 ועוד 6 זה 10, ו-4 כפול 6 זה 24. מושלם.", "math_expression": "(a + 4)(a + 6)" }
        ],
        "final_answer": "(a + 4)(a + 6)",
        "options": ["(a + 2)(a + 12)", "(a + 3)(a + 8)", "(a + 4)(a + 6)", "(a - 4)(a - 6)"],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "פרקו בעזרת שילוב שיטות: <strong>2x² + 14x + 20</strong>",
        "hint": "לפני שמתחילים טרינום, חפשו גורם משותף למספרים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כל המקדמים זוגיים. נוציא 2 כגורם משותף מחוץ לסוגריים.", "math_expression": "2(x² + 7x + 10)" },
            { "verbal_explanation": "שלב 2: כעת נבצע טרינום רק על החלק שבתוך הסוגריים. כפל 10, חיבור 7.", "math_expression": "5 ו-2" },
            { "verbal_explanation": "שלב 3: נרשום את הפירוק של הטרינום בתוך הסוגריים.", "math_expression": "(x + 2)(x + 5)" },
            { "verbal_explanation": "שלב 4: נוסיף חזרה את ה-2 שהוצאנו בהתחלה.", "math_expression": "2(x + 2)(x + 5)" }
        ],
        "final_answer": "2(x + 2)(x + 5)",
        "options": ["(2x + 4)(x + 5)", "(x + 2)(2x + 10)", "2(x + 2)(x + 5)", "2(x² + 7x + 10)"],
        "correctAnswer": 2
    },
    {
        "id": 69,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>x² - 13x - 30</strong>",
        "hint": "מכפלה 30- (אחד פלוס אחד מינוס). סכום 13-. נסו את המספרים 15 ו-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מטרות: כפל מינוס 30, חיבור מינוס 13.", "math_expression": "m*n = -30 , m+n = -13" },
            { "verbal_explanation": "שלב 2: המספרים 15 ו-2 יוצרים 30 בכפל ורווח של 13 ביניהם.", "math_expression": "15, 2" },
            { "verbal_explanation": "שלב 3: הסכום שלילי, לכן הגדול חייב להיות המינוס.", "math_expression": "-15 , +2" },
            { "verbal_explanation": "שלב 4: נרכיב.", "math_expression": "(x - 15)(x + 2)" }
        ],
        "final_answer": "(x - 15)(x + 2)",
        "options": ["(x - 10)(x - 3)", "(x - 15)(x + 2)", "(x + 15)(x - 2)", "(x - 5)(x + 6)"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "פשטו: <strong>3x² - 3x - 18</strong>",
        "hint": "שלב ראשון חובה: הוצאת הגורם המשותף 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הוצאת 3 החוצה מכל האיברים.", "math_expression": "3(x² - x - 6)" },
            { "verbal_explanation": "שלב 2: פירוק הטרינום הפנימי. כפל שווה 6-, סכום שווה 1-.", "math_expression": "-3 ו- +2" },
            { "verbal_explanation": "שלב 3: סגירת הטרינום.", "math_expression": "(x - 3)(x + 2)" },
            { "verbal_explanation": "שלב 4: הוספת הגורם מההתחלה.", "math_expression": "3(x - 3)(x + 2)" }
        ],
        "final_answer": "3(x - 3)(x + 2)",
        "options": ["3(x - 2)(x + 3)", "3(x - 3)(x + 2)", "(3x - 9)(x + 2)", "(x - 3)(3x + 6)"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Low",
        "question_text": "פרקו את: <strong>y² + 8y + 12</strong>",
        "hint": "מה כפול מה נותן 12 וביחד נותן 8?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת יעדים.", "math_expression": "כפל 12, חיבור 8" },
            { "verbal_explanation": "שלב 2: המספרים הם 2 ו-6. 2*6=12 ו- 2+6=8.", "math_expression": "2, 6" },
            { "verbal_explanation": "שלב 3: שניהם חיוביים. נסגור סוגריים.", "math_expression": "(y + 2)(y + 6)" }
        ],
        "final_answer": "(y + 2)(y + 6)",
        "options": ["(y + 3)(y + 4)", "(y + 2)(y + 6)", "(y - 2)(y - 6)", "(y + 1)(y + 12)"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "מה קורה כשהמכפלה היא 0? פרקו: <strong>x² + 5x + 0</strong> (שזה בעצם x² + 5x)",
        "hint": "טרינום עם 0 בסוף הוא למעשה מקרה של הוצאת גורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם המכפלה (c) היא אפס, אחד מהמספרים חייב להיות אפס.", "math_expression": "m*0 = 0" },
            { "verbal_explanation": "שלב 2: הסכום הוא 5, לכן המספר השני הוא 5.", "math_expression": "0 + 5 = 5" },
            { "verbal_explanation": "שלב 3: כתיבה בשיטת הטרינום תיראה כך: (x+0)(x+5).", "math_expression": "(x + 0)(x + 5)" },
            { "verbal_explanation": "שלב 4: פישוט מוביל אותנו חזרה להוצאת גורם משותף.", "math_expression": "x(x + 5)" }
        ],
        "final_answer": "x(x + 5)",
        "options": ["(x + 1)(x + 4)", "x(x + 5)", "(x + 2.5)²", "לא ניתן לפירוק"],
        "correctAnswer": 1
    },
    {
        "id": 73,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "האם ניתן לפרק את הטרינום <strong>x² + 2x + 5</strong> מעל המספרים השלמים?",
        "hint": "נסו למצוא שני מספרים שלמים שכפלם 5 וחיבורם 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש מחלקים למספר 5. 5 הוא מספר ראשוני ולכן הגורמים השלמים היחידים שלו הם (1,5) או (-1,-5).", "math_expression": "5*1 או -5*-1" },
            { "verbal_explanation": "שלב 2: נבדוק סכומים. 5 ועוד 1 זה 6. מינוס 5 ועוד מינוס 1 זה מינוס 6.", "math_expression": "6 ≠ 2" },
            { "verbal_explanation": "שלב 3: אף זוג לא נותן את הסכום הדרוש (2). לכן הטרינום לא פריק במספרים שלמים.", "math_expression": "לא פריק" }
        ],
        "final_answer": "לא, אי אפשר לפרק אותו.",
        "options": ["כן, (x+1)(x+5)", "כן, (x-1)(x-5)", "לא, אי אפשר לפרק אותו.", "כן, בעזרת שברים"],
        "correctAnswer": 2
    },
    {
        "id": 74,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>a² - 12a + 20</strong>",
        "hint": "כפל חיובי (20) וסכום שלילי (12-). שניהם שליליים. בדקו את 2 ו-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יעדים: כפל 20, חיבור מינוס 12.", "math_expression": "m*n=20, m+n=-12" },
            { "verbal_explanation": "שלב 2: המספרים המתאימים הם מינוס 2 ומינוס 10. הכפל שלהם פלוס 20 והחיבור מינוס 12.", "math_expression": "-2 , -10" },
            { "verbal_explanation": "שלב 3: כתיבה סופית.", "math_expression": "(a - 2)(a - 10)" }
        ],
        "final_answer": "(a - 2)(a - 10)",
        "options": ["(a - 4)(a - 5)", "(a + 2)(a + 10)", "(a - 2)(a - 10)", "(a - 20)(a + 1)"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "מצאו טעות: תלמיד פירק את x² - x - 20 לביטוי (x - 4)(x + 5). מה התשובה הנכונה?",
        "hint": "בדקו מה הסכום של מינוס 4 ופלוס 5. זה יוצא פלוס 1, אבל אנחנו צריכים מינוס 1!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את דרישת הסכום בטרינום המקורי. המקדם של x הוא מינוס 1.", "math_expression": "m + n = -1" },
            { "verbal_explanation": "שלב 2: נבדוק את הסכום של התלמיד. מינוס 4 פלוס 5 שווה לפלוס 1. מכאן הטעות.", "math_expression": "-4 + 5 = 1 ≠ -1" },
            { "verbal_explanation": "שלב 3: כדי לקבל מינוס בתוצאה, המספר הגדול (5) צריך לקבל את המינוס.", "math_expression": "-5 , +4" },
            { "verbal_explanation": "שלב 4: הפירוק הנכון.", "math_expression": "(x - 5)(x + 4)" }
        ],
        "final_answer": "(x - 5)(x + 4)",
        "options": ["התלמיד צדק", "(x + 10)(x - 2)", "(x - 5)(x + 4)", "(x - 20)(x + 1)"],
        "correctAnswer": 2
    },
    {
        "id": 76,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Low",
        "question_text": "פרקו: <strong>x² + 9x + 20</strong>",
        "hint": "מהם שני המספרים שכפלם 20 וסכומם 9?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל 20, חיבור 9.", "math_expression": "m*n=20, m+n=9" },
            { "verbal_explanation": "שלב 2: המספרים הם 4 ו-5.", "math_expression": "4, 5" },
            { "verbal_explanation": "שלב 3: הרכבה.", "math_expression": "(x + 4)(x + 5)" }
        ],
        "final_answer": "(x + 4)(x + 5)",
        "options": ["(x + 2)(x + 10)", "(x + 4)(x + 5)", "(x - 4)(x - 5)", "(x + 1)(x + 20)"],
        "correctAnswer": 1
    },
    {
        "id": 77,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>m² + m - 42</strong>",
        "hint": "ההפרש ביניהם הוא 1. חפשו זוג כופלים קרובים מאוד זה לזה בלוח הכפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל -42, חיבור 1.", "math_expression": "כפל -42, חיבור 1" },
            { "verbal_explanation": "שלב 2: בלוח הכפל 6*7=42. ההפרש ביניהם הוא 1.", "math_expression": "6, 7" },
            { "verbal_explanation": "שלב 3: הסכום חיובי, אז ה-7 יהיה בפלוס וה-6 במינוס.", "math_expression": "+7 , -6" },
            { "verbal_explanation": "שלב 4: הרכבה.", "math_expression": "(m + 7)(m - 6)" }
        ],
        "final_answer": "(m + 7)(m - 6)",
        "options": ["(m - 7)(m + 6)", "(m + 7)(m - 6)", "(m + 21)(m - 2)", "(m - 42)(m + 1)"],
        "correctAnswer": 1
    },
    {
        "id": 78,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "איזה מספר יש לשים במקום הריק כדי שניתן יהיה לפרק את הטרינום (למספרים שלמים)? <strong>x² + ___x + 12</strong>",
        "hint": "האמצע הוא סכום. חשבו על כל הזוגות שכופלים ל-12 וחברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זוגות של 12 הם: (1,12), (2,6), (3,4).", "math_expression": "גורמי 12" },
            { "verbal_explanation": "שלב 2: סכומים אפשריים: 1+12=13, 2+6=8, 3+4=7.", "math_expression": "13, 8, 7" },
            { "verbal_explanation": "שלב 3: לכן, כל אחד מהמספרים הללו (או השליליים שלהם) יאפשר פירוק.", "math_expression": "7" }
        ],
        "final_answer": "7 (או 8, או 13)",
        "options": ["10", "5", "7", "1"],
        "correctAnswer": 2
    },
    {
        "id": 79,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "Medium",
        "question_text": "פרקו: <strong>y² - 15y + 50</strong>",
        "hint": "כפל 50, חיבור מינוס 15. איזה זוג מספרים קופץ לראש שמדברים על 50?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספרים 5 ו-10 נותנים 50 בכפל ו-15 בחיבור.", "math_expression": "5*10=50, 5+10=15" },
            { "verbal_explanation": "שלב 2: מכיוון שהסכום נדרש להיות שלילי, שני המספרים חייבים להיות שליליים.", "math_expression": "-5 , -10" },
            { "verbal_explanation": "שלב 3: כתיבת סוגריים.", "math_expression": "(y - 5)(y - 10)" }
        ],
        "final_answer": "(y - 5)(y - 10)",
        "options": ["(y + 5)(y + 10)", "(y - 5)(y - 10)", "(y - 25)(y - 2)", "(y - 50)(y - 1)"],
        "correctAnswer": 1
    },
    {
        "id": 80,
        "subTopic": "פירוק טרינום ריבועי",
        "difficulty": "High",
        "question_text": "פרקו בשילוב שיטות: <strong>-x² + 6x - 8</strong>",
        "hint": "מאוד קשה לעשות טרינום כשה-x² שלילי. הוציאו מינוס 1 כגורם משותף קודם!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא מינוס החוצה, ונהפוך את כל הסימנים בפנים.", "math_expression": "-(x² - 6x + 8)" },
            { "verbal_explanation": "שלב 2: נבצע טרינום רגיל על מה שבסוגריים. כפל 8, חיבור מינוס 6.", "math_expression": "-2 ו- -4" },
            { "verbal_explanation": "שלב 3: נסגור סוגריים לטרינום.", "math_expression": "(x - 2)(x - 4)" },
            { "verbal_explanation": "שלב 4: לא לשכוח להחזיר את המינוס לתחילת התשובה.", "math_expression": "-(x - 2)(x - 4)" }
        ],
        "final_answer": "-(x - 2)(x - 4)",
        "options": ["(x - 2)(x - 4)", "-(x + 2)(x + 4)", "-(x - 2)(x - 4)", "(-x - 2)(x - 4)"],
        "correctAnswer": 2
    }
];