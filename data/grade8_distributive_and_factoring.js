const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חוק הפילוג המורחב (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים בביטוי הבא: <strong>(x + 2)(x + 3)</strong>",
        "hint": "השתמשו בשיטת הקשתות: כפלו את האיבר הראשון בכל אחד מאיברי הסוגריים השניים, ואז את האיבר השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את איקס מהסוגריים הראשונים בשני האיברים שבסוגריים השניים.", "math_expression": "x * x + x * 3 = x² + 3x" },
            { "verbal_explanation": "שלב 2: נכפול את המספר 2 מהסוגריים הראשונים בשני האיברים שבסוגריים השניים.", "math_expression": "2 * x + 2 * 3 = 2x + 6" },
            { "verbal_explanation": "שלב 3: נחבר את כל התוצאות שקיבלנו לביטוי אחד ארוך.", "math_expression": "x² + 3x + 2x + 6" },
            { "verbal_explanation": "שלב 4: נבצע כינוס איברים דומים (נחבר את 3 איקס ו-2 איקס יחד).", "math_expression": "x² + 5x + 6" }
        ],
        "final_answer": "x² + 5x + 6",
        "options": ["x² + 5x + 6", "x² + 6", "x² + 2x + 3", "2x + 5"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים: <strong>(x + 5)(x - 4)</strong>",
        "hint": "שימו לב לסימן המינוס לפני ה-4. זכרו שפלוס כפול מינוס נותן מינוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את איקס באיקס ובמינוס 4.", "math_expression": "x² - 4x" },
            { "verbal_explanation": "שלב 2: נכפול את 5 באיקס ובמינוס 4.", "math_expression": "5x - 20" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות ונבצע כינוס איברים דומים (מינוס 4 איקס ועוד 5 איקס).", "math_expression": "x² + x - 20" }
        ],
        "final_answer": "x² + x - 20",
        "options": ["x² - 4x + 5", "x² + x - 20", "x² - x - 20", "x² + 9x - 20"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "מהו שטח המלבן שאורכו <strong>x + 6</strong> ורוחבו <strong>x + 4</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120'><rect x='20' y='20' width='140' height='80' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><text x='75' y='15' font-size='12'>x + 6</text><text x='10' y='65' font-size='12' writing-mode='tb'>x + 4</text></svg></div>",
        "hint": "שטח מלבן מחושב על ידי מכפלה של האורך ברוחב. עליכם להכפיל את שני הביטויים שבסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב את תרגיל השטח כמכפלה של שני הביטויים.", "math_expression": "(x + 6)(x + 4)" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים לפי חוק הפילוג המורחב.", "math_expression": "x² + 4x + 6x + 24" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים (4 איקס ועוד 6 איקס).", "math_expression": "x² + 10x + 24" }
        ],
        "final_answer": "x² + 10x + 24",
        "options": ["x² + 24", "2x + 10", "x² + 10x + 24", "x² + 6x + 4"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "פתחו סוגריים ופשטו: <strong>(2x + 1)(x + 5)</strong>",
        "hint": "אל תשכחו להכפיל את המקדם 2 בכל אחד מהאיברים בסוגריים השניים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את 2 איקס באיקס וב-5.", "math_expression": "2x² + 10x" },
            { "verbal_explanation": "שלב 2: נכפול את 1 באיקס וב-5.", "math_expression": "x + 5" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות ונכנס איברים דומים.", "math_expression": "2x² + 11x + 5" }
        ],
        "final_answer": "2x² + 11x + 5",
        "options": ["2x² + 5", "3x + 6", "2x² + 11x + 5", "2x² + 10x + 5"],
        "correctAnswer": 2
    },
    {
        "id": 5,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "High",
        "question_text": "פתחו סוגריים: <strong>(x - 3)(x - 7)</strong>",
        "hint": "זהירות! כשמכפילים מינוס 3 במינוס 7, התוצאה הופכת לחיובית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את איקס באיקס ובמינוס 7.", "math_expression": "x² - 7x" },
            { "verbal_explanation": "שלב 2: נכפול את מינוס 3 באיקס ובמינוס 7.", "math_expression": "-3x + 21" },
            { "verbal_explanation": "שלב 3: נחבר הכל: מינוס 7 איקס ומינוס 3 איקס יחד הם מינוס 10 איקס.", "math_expression": "x² - 10x + 21" }
        ],
        "final_answer": "x² - 10x + 21",
        "options": ["x² - 10x - 21", "x² + 10x + 21", "x² - 10x + 21", "x² - 21"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "פשטו את הביטוי הבא: <strong>(x + 2)(x + 4) - x²</strong>",
        "hint": "פתחו קודם את הסוגריים, ורק לאחר מכן החסירו את האיקס בריבוע מהתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים בעזרת חוק הפילוג המורחב.", "math_expression": "x² + 4x + 2x + 8 = x² + 6x + 8" },
            { "verbal_explanation": "שלב 2: נחזיר את האיבר שהיה מחוץ לסוגריים לביטוי.", "math_expression": "x² + 6x + 8 - x²" },
            { "verbal_explanation": "שלב 3: נחסיר איקס בריבוע מאיקס בריבוע. הם מבטלים זה את זה.", "math_expression": "6x + 8" }
        ],
        "final_answer": "6x + 8",
        "options": ["x² + 6x + 8", "6x + 8", "2x² + 6x + 8", "14x"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "High",
        "question_text": "פתחו סוגריים: <strong>(3x - 2)(2x + 4)</strong>",
        "hint": "עבדו לאט: כפלו מספר במספר ואיקס באיקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול 3 איקס ב-2 איקס וב-4.", "math_expression": "6x² + 12x" },
            { "verbal_explanation": "שלב 2: נכפול מינוס 2 ב-2 איקס וב-4.", "math_expression": "-4x - 8" },
            { "verbal_explanation": "שלב 3: נבצע כינוס איברים דומים (12 איקס פחות 4 איקס).", "math_expression": "6x² + 8x - 8" }
        ],
        "final_answer": "6x² + 8x - 8",
        "options": ["6x² - 8", "5x² + 8x - 8", "6x² + 8x - 8", "6x² + 16x - 8"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "מהו הביטוי המייצג את שטח הריבוע שצלעו היא <strong>x + 5</strong>?",
        "hint": "שטח ריבוע הוא צלע כפול עצמה, כלומר (x + 5) כפול (x + 5).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל כמכפלת סוגריים זהים.", "math_expression": "(x + 5)(x + 5)" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים: איקס כפול איקס, איקס כפול 5, 5 כפול איקס, ו-5 כפול 5.", "math_expression": "x² + 5x + 5x + 25" },
            { "verbal_explanation": "שלב 3: נחבר את האיברים הדומים באמצע.", "math_expression": "x² + 10x + 25" }
        ],
        "final_answer": "x² + 10x + 25",
        "options": ["x² + 25", "x² + 10x + 25", "2x + 10", "x² + 5x + 25"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "High",
        "question_text": "פתחו סוגריים ופשטו: <strong>(x + 1)(x - 1) + 1</strong>",
        "hint": "שימו לב מה קורה לאיקסים כשמכפילים (x+1) ב-(x-1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים.", "math_expression": "x² - x + x - 1" },
            { "verbal_explanation": "שלב 2: נבחין שמינוס איקס ופלוס איקס מבטלים זה את זה. נשארנו עם איקס בריבוע פחות 1.", "math_expression": "x² - 1" },
            { "verbal_explanation": "שלב 3: נוסיף את ה-1 שנמצא בסוף הביטוי המקורי.", "math_expression": "x² - 1 + 1" },
            { "verbal_explanation": "שלב 4: מינוס 1 ופלוס 1 מבטלים זה את זה.", "math_expression": "x²" }
        ],
        "final_answer": "x²",
        "options": ["x² + 2", "x² - 1", "x²", "2x"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Low",
        "question_text": "כמה איברים נקבל מיד לאחר פתיחת הסוגריים <strong>(a + b)(c + d)</strong> לפני שנבצע כינוס?",
        "hint": "כל איבר בסוגריים הראשונים מוכפל בכל איבר בסוגריים השניים. כמה זוגות כאלו יש?",
        "solution_steps": [
            { "verbal_explanation": "בסוגריים הראשונים יש 2 איברים ובסוגריים השניים יש 2 איברים.", "math_expression": "2 * 2 = 4" }
        ],
        "final_answer": "4",
        "options": ["2", "3", "4", "1"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "High",
        "question_text": "פתחו סוגריים: <strong>(x² + 2)(x + 3)</strong>",
        "hint": "זכרו שאיקס בריבוע כפול איקס שווה לאיקס בשלישית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את איקס בריבוע באיקס וב-3.", "math_expression": "x³ + 3x²" },
            { "verbal_explanation": "שלב 2: נכפול את 2 באיקס וב-3.", "math_expression": "2x + 6" },
            { "verbal_explanation": "שלב 3: נחבר את כל האיברים. מכיוון שאין איברים מדרגה זהה, זהו הביטוי הסופי.", "math_expression": "x³ + 3x² + 2x + 6" }
        ],
        "final_answer": "x³ + 3x² + 2x + 6",
        "options": ["x³ + 3x² + 2x + 6", "x² + 3x + 5", "3x³ + 6", "x³ + 5x + 6"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "פתחו סוגריים: <strong>(10 - x)(x + 2)</strong>",
        "hint": "התחילו בהכפלת המספר 10 בשני האיברים, ואז עברו למינוס איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 10 כפול איקס ו-10 כפול 2.", "math_expression": "10x + 20" },
            { "verbal_explanation": "שלב 2: מינוס איקס כפול איקס ומינוס איקס כפול 2.", "math_expression": "-x² - 2x" },
            { "verbal_explanation": "שלב 3: נחבר ונכנס איברים דומים (10 איקס פחות 2 איקס).", "math_expression": "-x² + 8x + 20" }
        ],
        "final_answer": "-x² + 8x + 20",
        "options": ["-x² + 12x + 20", "-x² + 8x + 20", "x² + 8x + 20", "10x - 20"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>(x + 3)(x + 3) - (x + 1)(x + 5)</strong>",
        "hint": "פתחו כל זוג סוגריים בנפרד. היזהרו מהמינוס שבין שני הביטויים - הוא הופך את כל הסימנים של התוצאה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הזוג הראשון.", "math_expression": "x² + 6x + 9" },
            { "verbal_explanation": "שלב 2: נפתח את הזוג השני.", "math_expression": "x² + 6x + 5" },
            { "verbal_explanation": "שלב 3: נחסיר את התוצאה השנייה מהראשונה (נשנה סימנים לשנייה).", "math_expression": "x² + 6x + 9 - (x² + 6x + 5) = x² + 6x + 9 - x² - 6x - 5" },
            { "verbal_explanation": "שלב 4: איקס בריבוע מתבטל, 6 איקס מתבטל. נשאר 9 פחות 5.", "math_expression": "4" }
        ],
        "final_answer": "4",
        "options": ["4", "2x² + 12x + 14", "x² + 4", "14"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Medium",
        "question_text": "פתחו סוגריים: <strong>(2x - 3)(x - 1)</strong>",
        "hint": "כפל של שני מספרים שליליים נותן תוצאה חיובית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 2 איקס כפול איקס ו-2 איקס כפול מינוס 1.", "math_expression": "2x² - 2x" },
            { "verbal_explanation": "שלב 2: מינוס 3 כפול איקס ומינוס 3 כפול מינוס 1.", "math_expression": "-3x + 3" },
            { "verbal_explanation": "שלב 3: נכנס איברים (מינוס 2 איקס ומינוס 3 איקס יחד).", "math_expression": "2x² - 5x + 3" }
        ],
        "final_answer": "2x² - 5x + 3",
        "options": ["2x² - 5x - 3", "2x² + 5x + 3", "2x² - 5x + 3", "2x² - 3"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "חוק הפילוג המורחב",
        "difficulty": "Low",
        "question_text": "איזה ביטוי שווה ל- <strong>(x + a)(x + b)</strong>?",
        "hint": "בצעו את פתיחת הסוגריים עם האותיות a ו-b בדיוק כמו עם מספרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים: x כפול x, x כפול b, a כפול x, ו-a כפול b.", "math_expression": "x² + bx + ax + ab" },
            { "verbal_explanation": "שלב 2: נוציא את איקס כגורם משותף מהאיברים האמצעיים כדי לסדר את הביטוי.", "math_expression": "x² + (a + b)x + ab" }
        ],
        "final_answer": "x² + (a + b)x + ab",
        "options": ["x² + ab", "x² + a + b", "x² + (a + b)x + ab", "ax + bx"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 2: הוצאת גורם משותף (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים את הביטוי: <strong>4x + 12</strong>",
        "hint": "חפשו את המספר הגדול ביותר שמחלק גם את 4 וגם את 12 ללא שארית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמספר 4 הוא הגורם המשותף הגדול ביותר לשני האיברים.", "math_expression": "4 * (x) + 4 * (3)" },
            { "verbal_explanation": "שלב 2: נרשום את ה-4 מחוץ לסוגריים ובתוכם את מה שנשאר מכל איבר.", "math_expression": "4(x + 3)" }
        ],
        "final_answer": "4(x + 3)",
        "options": ["4(x + 12)", "4(x + 3)", "12(x + 4)", "4x + 3"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים: <strong>x² + 7x</strong>",
        "hint": "חפשו את המשתנה (האות) שמופיע בכל אחד מהאיברים בביטוי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהאות איקס מופיעה בשני האיברים.", "math_expression": "x * (x) + x * (7)" },
            { "verbal_explanation": "שלב 2: נוציא איקס אחד מחוץ לסוגריים.", "math_expression": "x(x + 7)" }
        ],
        "final_answer": "x(x + 7)",
        "options": ["x(x + 7)", "x²(1 + 7)", "7(x + 1)", "x(x + 7x)"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>6x² - 9x</strong>",
        "hint": "כאן ניתן להוציא גם מספר (המחלק המשותף של 6 ו-9) וגם את האות איקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק המשותף הגדול ביותר של 6 ו-9 הוא 3. בנוסף, האות איקס משותפת לשניהם.", "math_expression": "3x" },
            { "verbal_explanation": "שלב 2: נחלק את 6 איקס בריבוע ב-3 איקס (נשאר 2 איקס). נחלק את מינוס 9 איקס ב-3 איקס (נשאר מינוס 3).", "math_expression": "3x(2x - 3)" }
        ],
        "final_answer": "3x(2x - 3)",
        "options": ["3(2x² - 3x)", "x(6x - 9)", "3x(2x - 3)", "3x(2x + 3)"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>-5x - 10</strong>",
        "hint": "מומלץ להוציא את המינוס מחוץ לסוגריים כדי שהביטוי בפנים יהיה חיובי ופשוט יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את מינוס 5 כגורם משותף.", "math_expression": "-5" },
            { "verbal_explanation": "שלב 2: נחלק את כל אחד מהאיברים במינוס 5. זכרו: מינוס חלקי מינוס נותן פלוס.", "math_expression": "-5(x + 2)" }
        ],
        "final_answer": "-5(x + 2)",
        "options": ["-5(x - 2)", "5(-x - 2)", "-5(x + 2)", "5(x + 2)"],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>3x³ + 6x² + 12x</strong>",
        "hint": "חפשו את המספר הגדול ביותר ואת החזקה הקטנה ביותר של איקס שמופיעה בכל האיברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק המשותף של 3, 6 ו-12 הוא 3. החזקה הכי נמוכה של איקס היא איקס בחזקת 1.", "math_expression": "3x" },
            { "verbal_explanation": "שלב 2: נוציא 3 איקס מחוץ לסוגריים ונחלק כל איבר בו.", "math_expression": "3x(x² + 2x + 4)" }
        ],
        "final_answer": "3x(x² + 2x + 4)",
        "options": ["3x(x² + 2x + 4)", "3(x³ + 2x² + 4x)", "x(3x² + 6x + 12)", "3x(x² + 3x + 9)"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "מה נשאר בתוך הסוגריים אם נוציא <strong>8</strong> מהביטוי <strong>8x + 8</strong>?",
        "hint": "זכרו שכשמוציאים את כל האיבר החוצה, נשאר במקומו המספר 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכתוב את הביטוי כפעולות כפל ב-8.", "math_expression": "8 * (x) + 8 * (1)" },
            { "verbal_explanation": "שלב 2: נוציא את ה-8 מחוץ לסוגריים.", "math_expression": "8(x + 1)" }
        ],
        "final_answer": "x + 1",
        "options": ["x", "x + 1", "x + 8", "1"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>15a + 20b</strong>",
        "hint": "במקרה זה אין אות משותפת, לכן חפשו רק מחלק משותף למספרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק המשותף הגדול ביותר של 15 ו-20 הוא 5.", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: נחלק את שני האיברים ב-5 ונקבל את מה שנותר בסוגריים.", "math_expression": "5(3a + 4b)" }
        ],
        "final_answer": "5(3a + 4b)",
        "options": ["5(3a + 4b)", "5(10a + 15b)", "15(a + 5b)", "5ab(3 + 4)"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>x(y + 3) + 2(y + 3)</strong>",
        "hint": "לפעמים הגורם המשותף הוא סוגריים שלמים! שימו לב מה חוזר על עצמו פעמיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחין שהביטוי (y + 3) מופיע בשני חלקי התרגיל.", "math_expression": "(y + 3)" },
            { "verbal_explanation": "שלב 2: נתייחס לסוגריים האלו כגורם משותף ונוציא אותם החוצה.", "math_expression": "(y + 3)(x + 2)" }
        ],
        "final_answer": "(y + 3)(x + 2)",
        "options": ["(y + 3)(x + 2)", "xy + 3x + 2y + 6", "3y(x + 2)", "x + 2 + y + 3"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "איזה מהביטויים הבאים <strong>אינו</strong> ניתן לפירוק על ידי הוצאת גורם משותף?",
        "hint": "חפשו ביטוי שאין לו מחלק מספרי משותף ואין לו אות שחוזרת על עצמה.",
        "solution_steps": [
            { "verbal_explanation": "בביטוי 3x + 10 אין שום מספר שמחלק את 3 ו-10, ואין אות משותפת.", "math_expression": "אין גורם משותף" }
        ],
        "final_answer": "3x + 10",
        "options": ["5x + 10", "x² + x", "3x + 10", "4x - 8y"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "צמצמו את השבר הבא בעזרת הוצאת גורם משותף: <strong>(5x + 15) / 5</strong>",
        "hint": "הוציאו קודם גורם משותף במונה (למעלה), ורק אז צמצמו עם המכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא את המספר 5 כגורם משותף במונה.", "math_expression": "5(x + 3) / 5" },
            { "verbal_explanation": "שלב 2: נצמצם את ה-5 מהמונה והמכנה.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3",
        "options": ["x + 15", "5x + 3", "x + 3", "x + 5"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Low",
        "question_text": "הוציאו גורם משותף מביטוי זה: <strong>-x² + x</strong>",
        "hint": "עדיף להוציא מינוס איקס כדי לקבל ביטוי יפה בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא מינוס איקס מחוץ לסוגריים.", "math_expression": "-x" },
            { "verbal_explanation": "שלב 2: נחלק את מינוס איקס בריבוע במינוס איקס (נקבל איקס). נחלק את איקס במינוס איקס (נקבל מינוס 1).", "math_expression": "-x(x - 1)" }
        ],
        "final_answer": "-x(x - 1)",
        "options": ["-x(x + 1)", "x(x - 1)", "-x(x - 1)", "x(-x + 0)"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>12x² + 18x</strong>",
        "hint": "חפשו את המחלק המשותף הגדול ביותר של 12 ו-18.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המחלק הכי גדול של 12 ו-18 הוא 6. גם האות איקס משותפת.", "math_expression": "6x" },
            { "verbal_explanation": "שלב 2: נחלק את איברי הביטוי ב-6 איקס.", "math_expression": "6x(2x + 3)" }
        ],
        "final_answer": "6x(2x + 3)",
        "options": ["6x(2x + 3)", "3x(4x + 6)", "6(2x² + 3x)", "12x(x + 1.5)"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פרקו לגורמים את הביטוי: <strong>(x + 4)² + 5(x + 4)</strong>",
        "hint": "הגורם המשותף הוא הביטוי (x + 4). זכרו שבחלק הראשון יש שניים כאלו (ריבוע).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא (x + 4) אחד מחוץ לסוגריים.", "math_expression": "(x + 4)" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים מרובעים ונרשום את מה שנשאר: איקס ועוד 4, ועוד 5.", "math_expression": "(x + 4)[(x + 4) + 5]" },
            { "verbal_explanation": "שלב 3: נחבר את 4 ו-5 בתוך הסוגריים.", "math_expression": "(x + 4)(x + 9)" }
        ],
        "final_answer": "(x + 4)(x + 9)",
        "options": ["(x + 4)(x + 5)", "(x + 4)(x + 9)", "(x + 4)² + 5", "9(x + 4)"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "Medium",
        "question_text": "מהי הפעולה ההפוכה לפירוק לגורמים?",
        "hint": "חשבו איך מחזירים ביטוי של מכפלה לצורה של סכום או הפרש.",
        "solution_steps": [
            { "verbal_explanation": "פירוק לגורמים יוצר מכפלה. כדי לחזור לביטוי המקורי אנו משתמשים בפתיחת סוגריים.", "math_expression": "חוק הפילוג" }
        ],
        "final_answer": "חוק הפילוג",
        "options": ["העלאה בריבוע", "חוק הפילוג", "כינוס איברים דומים", "הוצאת שורש"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "הוצאת גורם משותף",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>ax + ay + 3x + 3y</strong>",
        "hint": "שיטת הפירוק לפי קבוצות: הוציאו גורם משותף מכל זוג בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג הראשון (ax + ay) נוציא את a. מהזוג השני (3x + 3y) נוציא את 3.", "math_expression": "a(x + y) + 3(x + y)" },
            { "verbal_explanation": "שלב 2: כעת נוציא את הסוגריים המשותפים (x + y).", "math_expression": "(x + y)(a + 3)" }
        ],
        "final_answer": "(x + y)(a + 3)",
        "options": ["(x + a)(y + 3)", "(x + y)(a + 3)", "ax + 3y", "a(x + y + 3)"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: נוסחאות הכפל המקוצר (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים לפי נוסחת הכפל המקוצר: <strong>(x + 3)²</strong>",
        "hint": "השתמשו בנוסחה: (a + b)² = a² + 2ab + b². זכרו שהאיבר האמצעי הוא פעמיים המכפלה של שניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את האיבר הראשון בריבוע.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר האמצעי: 2 כפול איקס כפול 3.", "math_expression": "2 * x * 3 = 6x" },
            { "verbal_explanation": "שלב 3: נעלה את האיבר השני בריבוע.", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 4: נחבר את כל החלקים לביטוי אחד.", "math_expression": "x² + 6x + 9" }
        ],
        "final_answer": "x² + 6x + 9",
        "options": ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "2x + 6"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים: <strong>(x - 4)²</strong>",
        "hint": "השתמשו בנוסחה: (a - b)² = a² - 2ab + b². שימו לב שהמינוס מופיע רק לפני האיבר האמצעי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את איקס בריבוע.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר האמצעי עם סימן מינוס: 2 כפול איקס כפול 4.", "math_expression": "-8x" },
            { "verbal_explanation": "שלב 3: נעלה את מינוס 4 בריבוע (התוצאה תמיד חיובית).", "math_expression": "(-4)² = 16" },
            { "verbal_explanation": "שלב 4: נחבר הכל.", "math_expression": "x² - 8x + 16" }
        ],
        "final_answer": "x² - 8x + 16",
        "options": ["x² - 16", "x² - 4x + 16", "x² - 8x + 16", "x² + 8x + 16"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "פתחו את הסוגריים לפי נוסחת 'הפרש ריבועים': <strong>(x - 5)(x + 5)</strong>",
        "hint": "השתמשו בנוסחה: (a - b)(a + b) = a² - b². האיברים האמצעיים מתבטלים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את האיבר הראשון (איקס) ונעלה אותו בריבוע.", "math_expression": "x²" },
            { "verbal_explanation": "שלב 2: נזהה את האיבר השני (5) ונעלה אותו בריבוע.", "math_expression": "5² = 25" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה כהפרש בין הריבועים.", "math_expression": "x² - 25" }
        ],
        "final_answer": "x² - 25",
        "options": ["x² + 25", "x² - 10x + 25", "x² - 25", "2x"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פתחו את הסוגריים: <strong>(2x + 3)²</strong>",
        "hint": "זהירות! כשמעלים 2x בריבוע, מעלים גם את ה-2 וגם את האיקס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעלה את 2 איקס בריבוע.", "math_expression": "(2x)² = 4x²" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר האמצעי: 2 כפול 2 איקס כפול 3.", "math_expression": "2 * 2x * 3 = 12x" },
            { "verbal_explanation": "שלב 3: נעלה את 3 בריבוע.", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 4: נחבר הכל.", "math_expression": "4x² + 12x + 9" }
        ],
        "final_answer": "4x² + 12x + 9",
        "options": ["2x² + 12x + 9", "4x² + 9", "4x² + 6x + 9", "4x² + 12x + 9"],
        "correctAnswer": 3
    },
    {
        "id": 35,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פתחו את הסוגריים: <strong>(3x - 1)²</strong>",
        "hint": "העלו את 3x בריבוע, החסירו פעמיים את המכפלה, והוסיפו את 1 בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: (3 איקס) בריבוע הם 9 איקס בריבוע.", "math_expression": "9x²" },
            { "verbal_explanation": "שלב 2: 2 כפול 3 איקס כפול 1 הם 6 איקס (עם סימן מינוס לפני).", "math_expression": "-6x" },
            { "verbal_explanation": "שלב 3: 1 בריבוע הוא 1.", "math_expression": "1" },
            { "verbal_explanation": "שלב 4: הביטוי המלא.", "math_expression": "9x² - 6x + 1" }
        ],
        "final_answer": "9x² - 6x + 1",
        "options": ["9x² - 1", "9x² - 6x + 1", "3x² - 6x + 1", "9x² + 6x + 1"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי הבא בעזרת נוסחאות הכפל המקוצר: <strong>(x + 2)² - (x - 2)²</strong>",
        "hint": "פתחו כל זוג סוגריים בנפרד, ואז בצעו את החיסור בזהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים הראשונים.", "math_expression": "x² + 4x + 4" },
            { "verbal_explanation": "שלב 2: נפתח את הסוגריים השניים.", "math_expression": "x² - 4x + 4" },
            { "verbal_explanation": "שלב 3: נחסיר את השני מהראשון (המינוס הופך את כל הסימנים בסוגריים השניים).", "math_expression": "(x² + 4x + 4) - (x² - 4x + 4) = x² + 4x + 4 - x² + 4x - 4" },
            { "verbal_explanation": "שלב 4: נצמצם: איקס בריבוע ומינוס איקס בריבוע מתבטלים, 4 ומינוס 4 מתבטלים. נשאר 4 איקס ועוד 4 איקס.", "math_expression": "8x" }
        ],
        "final_answer": "8x",
        "options": ["0", "8x", "2x² + 8", "4x"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "לפניכם איור של שטח ריבוע המחולק ל-4 חלקים. איזה ביטוי מתאר את שטח הריבוע הגדול כולו?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='160'><rect x='20' y='20' width='80' height='80' fill='#f1f5f9' stroke='#1e293b'/><rect x='100' y='20' width='40' height='80' fill='#cbd5e1' stroke='#1e293b'/><rect x='20' y='100' width='80' height='40' fill='#cbd5e1' stroke='#1e293b'/><rect x='100' y='100' width='40' height='40' fill='#94a3b8' stroke='#1e293b'/><text x='55' y='65' font-size='12'>x²</text><text x='115' y='65' font-size='12'>xy</text><text x='55' y='125' font-size='12'>xy</text><text x='115' y='125' font-size='12'>y²</text></svg></div>",
        "hint": "הריבוע מורכב מריבוע אחד של x, ריבוע אחד של y, ושני מלבנים של xy.",
        "solution_steps": [
            { "verbal_explanation": "השטח הכולל הוא סכום של כל ארבעת השטחים הקטנים באיור.", "math_expression": "x² + xy + xy + y²" },
            { "verbal_explanation": "נחבר את שני המלבנים הזהים (xy + xy).", "math_expression": "x² + 2xy + y²" }
        ],
        "final_answer": "x² + 2xy + y²",
        "options": ["x² + y²", "x² + xy + y²", "x² + 2xy + y²", "(x + y) + (x + y)"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים בעזרת נוסחאות הכפל המקוצר: <strong>x² + 10x + 25</strong>",
        "hint": "זוהי הפעולה ההפוכה. חפשו איזה מספר כפול עצמו נותן 25, והאם פעמיים אותו מספר נותן 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמספר החופשי (25) הוא 5 בריבוע.", "math_expression": "5² = 25" },
            { "verbal_explanation": "שלב 2: נבדוק אם האיבר האמצעי (10 איקס) מתאים למבנה הנוסחה (פעמיים המכפלה).", "math_expression": "2 * x * 5 = 10x" },
            { "verbal_explanation": "שלב 3: מכיוון שהכל מתאים, נרשום זאת כדו-איבר בריבוע.", "math_expression": "(x + 5)²" }
        ],
        "final_answer": "(x + 5)²",
        "options": ["(x + 10)²", "(x + 5)²", "(x + 25)²", "(x + 5)(x - 5)"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>x² - 100</strong>",
        "hint": "זהו הפרש ריבועים. איזה מספר בריבוע שווה ל-100?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ש-100 הוא הריבוע של המספר 10.", "math_expression": "10² = 100" },
            { "verbal_explanation": "שלב 2: נשתמש בנוסחת הפרש הריבועים לפירוק לשני זוגות סוגריים.", "math_expression": "(x - 10)(x + 10)" }
        ],
        "final_answer": "(x - 10)(x + 10)",
        "options": ["(x - 10)²", "(x - 50)(x + 50)", "(x - 10)(x + 10)", "x - 10"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "איזה איבר חסר כדי שהביטוי יהיה ריבוע של דו-איבר? <strong>x² + 12x + ____</strong>",
        "hint": "האיבר האמצעי (12) הוא פעמיים המספר החסר. חלקו את 12 ב-2, ואז העלו את התוצאה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את המספר שבתוך הסוגריים. נחלק את המקדם של איקס (12) ב-2.", "math_expression": "12 / 2 = 6" },
            { "verbal_explanation": "שלב 2: נעלה את 6 בריבוע כדי למצוא את האיבר החופשי.", "math_expression": "6² = 36" }
        ],
        "final_answer": "36",
        "options": ["6", "12", "36", "144"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פשטו את הביטוי: <strong>(2x - 5)(2x + 5) - 4x²</strong>",
        "hint": "פתחו את הסוגריים בעזרת נוסחת הפרש ריבועים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים. (2 איקס) בריבוע פחות 5 בריבוע.", "math_expression": "4x² - 25" },
            { "verbal_explanation": "שלב 2: נחזיר את האיבר שהיה מחוץ לסוגריים לביטוי.", "math_expression": "4x² - 25 - 4x²" },
            { "verbal_explanation": "שלב 3: 4 איקס בריבוע ומינוס 4 איקס בריבוע מבטלים זה את זה. נשארנו עם מינוס 25.", "math_expression": "-25" }
        ],
        "final_answer": "-25",
        "options": ["25", "-25", "0", "8x² - 25"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "פתחו סוגריים: <strong>(x² + 1)²</strong>",
        "hint": "התייחסו ל-x² כאל האיבר הראשון. כשתעלו אותו בריבוע תקבלו x בחזקת 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ריבוע של האיבר הראשון.", "math_expression": "(x²)² = x⁴" },
            { "verbal_explanation": "שלב 2: פעמיים המכפלה: 2 כפול איקס בריבוע כפול 1.", "math_expression": "2x²" },
            { "verbal_explanation": "שלב 3: ריבוע של האיבר השני.", "math_expression": "1² = 1" },
            { "verbal_explanation": "שלב 4: נחבר הכל.", "math_expression": "x⁴ + 2x² + 1" }
        ],
        "final_answer": "x⁴ + 2x² + 1",
        "options": ["x⁴ + 1", "x⁴ + 2x² + 1", "x² + 2x + 1", "x⁴ + x² + 1"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Medium",
        "question_text": "מהו הפירוק לגורמים של <strong>4x² - 9</strong>?",
        "hint": "גם כאן זה הפרש ריבועים. מצאו מהו השורש של 4x² ומהו השורש של 9.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השורש של 4 איקס בריבוע הוא 2 איקס.", "math_expression": "2x" },
            { "verbal_explanation": "שלב 2: השורש של 9 הוא 3.", "math_expression": "3" },
            { "verbal_explanation": "שלב 3: נרכיב את שני זוגות הסוגריים (אחד עם פלוס ואחד עם מינוס).", "math_expression": "(2x - 3)(2x + 3)" }
        ],
        "final_answer": "(2x - 3)(2x + 3)",
        "options": ["(2x - 3)²", "(2x - 3)(2x + 3)", "(4x - 9)(4x + 9)", "(2x + 3)²"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "High",
        "question_text": "אם נגדיל צלע של ריבוע שאורכה <strong>x</strong> ב-<strong>1 ס\"מ</strong>, בכמה יגדל <strong>שטח</strong> הריבוע?",
        "hint": "השטח המקורי הוא x². השטח החדש הוא (x + 1)². מצאו את ההפרש ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את השטח החדש בעזרת נוסחת הכפל המקוצר.", "math_expression": "(x + 1)² = x² + 2x + 1" },
            { "verbal_explanation": "שלב 2: נחסיר את השטח המקורי (איקס בריבוע) מהשטח החדש.", "math_expression": "x² + 2x + 1 - x²" },
            { "verbal_explanation": "שלב 3: נקבל שהשטח גדל ב- 2x + 1.", "math_expression": "2x + 1" }
        ],
        "final_answer": "2x + 1",
        "options": ["1", "2x", "2x + 1", "x + 1"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "נוסחאות הכפל המקוצר",
        "difficulty": "Low",
        "question_text": "איזה ביטוי מתאר נכון את נוסחת הריבוע של הפרש?",
        "hint": "חפשו את הנוסחה שבה המינוס מופיע רק באמצע.",
        "solution_steps": [
            { "verbal_explanation": "נוסחת ריבוע ההפרש קובעת שהאיבר הראשון והאחרון תמיד חיוביים, ורק איבר המכפלה הוא שלילי.", "math_expression": "a² - 2ab + b²" }
        ],
        "final_answer": "a² - 2ab + b²",
        "options": ["a² - b²", "a² - 2ab - b²", "a² - 2ab + b²", "(a - b)(a + b)"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 4: פירוק לפי קבוצות (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים: <strong>ax + ay + bx + by</strong>",
        "hint": "חלקו את האיברים לשני זוגות. הוציאו גורם משותף מכל זוג בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג הראשון (ax + ay) נוציא את a.", "math_expression": "a(x + y)" },
            { "verbal_explanation": "שלב 2: מהזוג השני (bx + by) נוציא את b.", "math_expression": "b(x + y)" },
            { "verbal_explanation": "שלב 3: נזהה שיש לנו כעת סוגריים משותפים (x + y) ונוציא אותם החוצה.", "math_expression": "(x + y)(a + b)" }
        ],
        "final_answer": "(x + y)(a + b)",
        "options": ["(x + a)(y + b)", "(x + y)(a + b)", "ab(x + y)", "ax + by"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים את הביטוי: <strong>x² + 3x + 2x + 6</strong>",
        "hint": "הוציאו איקס מהזוג הראשון, והוציאו 2 מהזוג השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג x² + 3x נוציא x.", "math_expression": "x(x + 3)" },
            { "verbal_explanation": "שלב 2: מהזוג 2x + 6 נוציא 2.", "math_expression": "2(x + 3)" },
            { "verbal_explanation": "שלב 3: נוציא את הסוגריים המשותפים (x + 3).", "math_expression": "(x + 3)(x + 2)" }
        ],
        "final_answer": "(x + 3)(x + 2)",
        "options": ["(x + 3)(x + 2)", "x(x + 5) + 6", "(x + 6)(x + 1)", "5x + 6"],
        "correctAnswer": 0
    },
    {
        "id": 48,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>5x + 5y + ax + ay</strong>",
        "hint": "שימו לב שגם כאן ניתן לחלק לזוגות לפי המספר 5 ולפי האות a.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הוצאת 5 מהזוג הראשון.", "math_expression": "5(x + y)" },
            { "verbal_explanation": "שלב 2: הוצאת a מהזוג השני.", "math_expression": "a(x + y)" },
            { "verbal_explanation": "שלב 3: הוצאת הגורם המשותף הסופי.", "math_expression": "(x + y)(5 + a)" }
        ],
        "final_answer": "(x + y)(5 + a)",
        "options": ["5a(x + y)", "(x + y)(5 + a)", "(5x + a)(5y + a)", "5x + ay"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>x² - 4x + 3x - 12</strong>",
        "hint": "היזהרו עם סימני המינוס בזוג הראשון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא x מהזוג הראשון.", "math_expression": "x(x - 4)" },
            { "verbal_explanation": "שלב 2: נוציא 3 מהזוג השני.", "math_expression": "3(x - 4)" },
            { "verbal_explanation": "שלב 3: נרכיב את המכפלה הסופית.", "math_expression": "(x - 4)(x + 3)" }
        ],
        "final_answer": "(x - 4)(x + 3)",
        "options": ["(x + 4)(x - 3)", "(x - 4)(x - 3)", "(x - 4)(x + 3)", "(x - 12)(x + 1)"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים את הביטוי הבא: <strong>x³ + x² + x + 1</strong>",
        "hint": "הוציאו x² מהזוג הראשון. מה נשאר במקום ה-x²?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג x³ + x² נוציא את החזקה הכי נמוכה - איקס בריבוע.", "math_expression": "x²(x + 1)" },
            { "verbal_explanation": "שלב 2: נשים לב שהזוג השני הוא כבר (x + 1), זה כמו להוציא 1 כגורם משותף.", "math_expression": "1(x + 1)" },
            { "verbal_explanation": "שלב 3: נוציא את הסוגריים המשותפים.", "math_expression": "(x + 1)(x² + 1)" }
        ],
        "final_answer": "(x + 1)(x² + 1)",
        "options": ["x²(x + 1)", "(x + 1)(x² + 1)", "(x + 1)³", "x⁴ + 1"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>2x² + 4x + xy + 2y</strong>",
        "hint": "חפשו מה משותף לכל זוג. במספרים זה 2 ובאותיות זה y.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג הראשון נוציא 2x.", "math_expression": "2x(x + 2)" },
            { "verbal_explanation": "שלב 2: מהזוג השני נוציא y.", "math_expression": "y(x + 2)" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה.", "math_expression": "(x + 2)(2x + y)" }
        ],
        "final_answer": "(x + 2)(2x + y)",
        "options": ["(x + 2)(2x + y)", "(2x + 2)(x + y)", "2xy(x + 2)", "(x + 2y)(2x + 1)"],
        "correctAnswer": 0
    },
    {
        "id": 52,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>3x + 3 + ax + a</strong>",
        "hint": "הוציאו 3 מהחלק הראשון ו-a מהחלק השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פירוק הזוג הראשון.", "math_expression": "3(x + 1)" },
            { "verbal_explanation": "שלב 2: פירוק הזוג השני.", "math_expression": "a(x + 1)" },
            { "verbal_explanation": "שלב 3: איחוד הגורמים.", "math_expression": "(x + 1)(3 + a)" }
        ],
        "final_answer": "(x + 1)(3 + a)",
        "options": ["3a(x + 1)", "(x + 1)(3 + a)", "(x + 3)(a + 1)", "3x + a"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>a² - ab - 3a + 3b</strong>",
        "hint": "זהירות עם סימן המינוס כשמוציאים גורם משותף מהזוג השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא a מהזוג הראשון.", "math_expression": "a(a - b)" },
            { "verbal_explanation": "שלב 2: נוציא מינוס 3 מהזוג השני. זכרו: פלוס 3b לחלק למינוס 3 נותן מינוס b.", "math_expression": "-3(a - b)" },
            { "verbal_explanation": "שלב 3: נרשום את המכפלה.", "math_expression": "(a - b)(a - 3)" }
        ],
        "final_answer": "(a - b)(a - 3)",
        "options": ["(a - b)(a + 3)", "(a + b)(a - 3)", "(a - b)(a - 3)", "a² - 3b"],
        "correctAnswer": 2
    },
    {
        "id": 54,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים את הביטוי: <strong>x² + 5x - 2x - 10</strong>",
        "hint": "זוהי למעשה דרך לפתור את הטרינום x² + 3x - 10 על ידי פיצול האיבר האמצעי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוציא x מהזוג הראשון.", "math_expression": "x(x + 5)" },
            { "verbal_explanation": "שלב 2: נוציא מינוס 2 מהזוג השני.", "math_expression": "-2(x + 5)" },
            { "verbal_explanation": "שלב 3: פירוק סופי.", "math_expression": "(x + 5)(x - 2)" }
        ],
        "final_answer": "(x + 5)(x - 2)",
        "options": ["(x + 5)(x - 2)", "(x - 5)(x + 2)", "(x + 10)(x - 1)", "(x + 5)(x + 2)"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Medium",
        "question_text": "מה ניתן לומר על ביטוי כמו <strong>ax + by + ay + bx</strong>?",
        "hint": "סדרו את האיברים מחדש כך שיהיה לכם גורם משותף נוח לזוגות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסדר מחדש: ax + ay (זוג עם a) וגם bx + by (זוג עם b).", "math_expression": "(ax + ay) + (bx + by)" },
            { "verbal_explanation": "שלב 2: נוציא גורמים משותפים.", "math_expression": "a(x + y) + b(x + y)" },
            { "verbal_explanation": "שלב 3: פירוק סופי.", "math_expression": "(x + y)(a + b)" }
        ],
        "final_answer": "ניתן לפרק אותו ל- (x + y)(a + b)",
        "options": ["לא ניתן לפרק אותו", "התוצאה היא abxy", "ניתן לפרק אותו ל- (x + y)(a + b)", "הוא שווה ל- (ax+by)²"],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Medium",
        "question_text": "פרקו לגורמים: <strong>x² + x + ax + a</strong>",
        "hint": "הוציאו x מהזוג הראשון. מה נשאר במקום ה-x השני? (רמז: 1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פירוק הזוג הראשון.", "math_expression": "x(x + 1)" },
            { "verbal_explanation": "שלב 2: פירוק הזוג השני (הוצאת a).", "math_expression": "a(x + 1)" },
            { "verbal_explanation": "שלב 3: איחוד.", "math_expression": "(x + 1)(x + a)" }
        ],
        "final_answer": "(x + 1)(x + a)",
        "options": ["x(x + a + 1)", "(x + 1)(x + a)", "(x + a)(x + 1) + a", "x² + a"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Low",
        "question_text": "פרקו לגורמים את הביטוי הפשוט: <strong>x(x + 2) + 3(x + 2)</strong>",
        "hint": "הגורם המשותף כבר 'מוכן' עבורכם. זהו הסוגריים (x + 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה ש-(איקס ועוד 2) מופיע בשני חלקי הביטוי.", "math_expression": "(x + 2)" },
            { "verbal_explanation": "שלב 2: נרשום אותו פעם אחת מחוץ לסוגריים החדשים.", "math_expression": "(x + 2)(x + 3)" }
        ],
        "final_answer": "(x + 2)(x + 3)",
        "options": ["(x + 2)(x + 3)", "x² + 5x + 6", "3x(x + 2)", "(x + 5)²"],
        "correctAnswer": 0
    },
    {
        "id": 58,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>2x³ - 4x² + 3x - 6</strong>",
        "hint": "הוציאו 2x² מהזוג הראשון ו-3 מהזוג השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהזוג 2x³ - 4x² נוציא 2x².", "math_expression": "2x²(x - 2)" },
            { "verbal_explanation": "שלב 2: מהזוג 3x - 6 נוציא 3.", "math_expression": "3(x - 2)" },
            { "verbal_explanation": "שלב 3: נשלים את הפירוק.", "math_expression": "(x - 2)(2x² + 3)" }
        ],
        "final_answer": "(x - 2)(2x² + 3)",
        "options": ["(x - 2)(2x² + 3)", "(x + 2)(2x² - 3)", "2x²(x - 2) + 3", "(x - 2)³"],
        "correctAnswer": 0
    },
    {
        "id": 59,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "High",
        "question_text": "פרקו לגורמים: <strong>x² + 7x + 10</strong> (על ידי פיצול ל-x² + 2x + 5x + 10)",
        "hint": "זוהי שיטת הטרינום. המספרים 2 ו-5 נבחרו כי סכומם 7 ומכפלתם 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק לזוגות: (x² + 2x) ו-(5x + 10).", "math_expression": "(x² + 2x) + (5x + 10)" },
            { "verbal_explanation": "שלב 2: נוציא גורמים משותפים.", "math_expression": "x(x + 2) + 5(x + 2)" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה הסופית.", "math_expression": "(x + 2)(x + 5)" }
        ],
        "final_answer": "(x + 2)(x + 5)",
        "options": ["(x + 7)(x + 10)", "(x + 2)(x + 5)", "(x - 2)(x - 5)", "x(x + 7) + 10"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "פירוק לפי קבוצות",
        "difficulty": "Low",
        "question_text": "מתי נשתמש בטכניקה של 'פירוק לפי קבוצות'?",
        "hint": "חשבו על מספר האיברים בביטוי.",
        "solution_steps": [
            { "verbal_explanation": "פירוק לפי קבוצות הוא אידיאלי כאשר יש לנו ביטוי עם 4 איברים (או יותר) שאין להם גורם משותף אחד לכולם, אך ניתן לחלק אותם לזוגות בעלי גורם משותף.", "math_expression": "4 Terms" }
        ],
        "final_answer": "כאשר יש 4 איברים שניתן לחלק לזוגות.",
        "options": ["רק כשיש איקס בריבוע", "כשיש 4 איברים שניתן לחלק לזוגות", "רק כשיש מספרים שלמים", "תמיד בכל תרגיל"],
        "correctAnswer": 1
    }
];