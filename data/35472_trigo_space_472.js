const questionsDB = [
    // ==========================================
    // תת נושא 1: הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה) (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 50 L 120 50 L 120 130 L 40 130 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 70 20 L 150 20 L 150 100 L 70 100 Z\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><line x1=\"40\" y1=\"50\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"50\" x2=\"150\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"70\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg></div><br>בקובייה, סכום אורכי כל המקצועות הוא 144 ס''מ. מהו שטח פאה אחת של הקובייה?&rlm;",
        "options": ["144", "12", "100", "120"],
        "correctAnswer": 0,
        "hint": "לקובייה יש 12 מקצועות שווים. חלקו את הסכום הכולל ב-12 למציאת אורך מקצוע יחיד, ואז העלו בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את אורך מקצוע הקובייה במשתנה יחיד.", "math_expression": "a" },
            { "verbal_explanation": "לקובייה יש שנים עשר מקצועות זהים באורכם.", "math_expression": "n = 12" },
            { "verbal_explanation": "נרכיב משוואה המבטאת את סכום כל המקצועות.", "math_expression": "12 \\times a = 144" },
            { "verbal_explanation": "נחלק בשתים עשרה כדי למצוא את אורך המקצוע.", "math_expression": "a = \\dfrac{144}{12}" },
            { "verbal_explanation": "נחשב את אורך המקצוע הבודד.", "math_expression": "a = 12" },
            { "verbal_explanation": "פאה של קובייה היא ריבוע. נחשב את שטחו.", "math_expression": "S = a^{2}" },
            { "verbal_explanation": "נציב את הערך שמצאנו.", "math_expression": "S = 12^{2}" },
            { "verbal_explanation": "נקבל את שטח הפאה.", "math_expression": "S = 144" }
        ],
        "final_answer": "144"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "בתיבה שבסיסה ריבוע, גובה התיבה גדול ב-3 ס''מ מאורך מקצוע הבסיס. סכום כל מקצועות התיבה הוא 108 ס''מ. מהו אורך מקצוע הבסיס?&rlm;",
        "options": ["8", "6", "9", "7"],
        "correctAnswer": 0,
        "hint": "לתיבה יש 8 מקצועות בסיס ו-4 מקצועות צדדיים (גבהים).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את מקצוע הבסיס כנעלם.", "math_expression": "x" },
            { "verbal_explanation": "נגדיר את הגובה בעזרת הנעלם.", "math_expression": "h = x + 3" },
            { "verbal_explanation": "נרכיב משוואה לסכום הכולל. יש 8 מקצועות בסיס ו-4 גבהים.", "math_expression": "8x + 4h = 108" },
            { "verbal_explanation": "נציב את ביטוי הגובה.", "math_expression": "8x + 4(x + 3) = 108" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "8x + 4x + 12 = 108" },
            { "verbal_explanation": "נכנס איברים דומים.", "math_expression": "12x + 12 = 108" },
            { "verbal_explanation": "נחסר 12 משני האגפים.", "math_expression": "12x = 96" },
            { "verbal_explanation": "נחלק ב-12 לבידוד המשתנה.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "בפירמידה ישרה ומשוכללת, בסיס הפירמידה הוא ריבוע שאורך צלעו 10. אורך כל מקצוע צדדי הוא גם 10. מהו סכום כל המקצועות בפירמידה זו?&rlm;",
        "options": ["80", "60", "100", "40"],
        "correctAnswer": 0,
        "hint": "ספרו את מספר המקצועות בבסיס ואת מספר המקצועות הצדדיים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אורך מקצוע הבסיס.", "math_expression": "a = 10" },
            { "verbal_explanation": "נרשום את אורך המקצוע הצדדי.", "math_expression": "b = 10" },
            { "verbal_explanation": "בפירמידה מרובעת יש 4 מקצועות בסיס.", "math_expression": "n = 4" },
            { "verbal_explanation": "ויש 4 מקצועות צדדיים.", "math_expression": "m = 4" },
            { "verbal_explanation": "נחשב את סכום מקצועות הבסיס.", "math_expression": "S_1 = 4 \\times 10 = 40" },
            { "verbal_explanation": "נחשב את סכום המקצועות הצדדיים.", "math_expression": "S_2 = 4 \\times 10 = 40" },
            { "verbal_explanation": "נחבר את הסכומים.", "math_expression": "S = S_1 + S_2 = 40 + 40" },
            { "verbal_explanation": "הסכום הכולל התקבל.", "math_expression": "S = 80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "מנסרה משולשת ישרה מורכבת מבסיסים שהם משולשים שווי צלעות. ידוע כי אורך מקצוע הבסיס הוא 5, וגובה המנסרה הוא 10. מהו סכום כל מקצועות המנסרה?&rlm;",
        "options": ["60", "45", "50", "90"],
        "correctAnswer": 0,
        "hint": "למנסרה משולשת יש שני בסיסים (בכל בסיס 3 מקצועות) ו-3 מקצועות צדדיים (גבהים).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אורך מקצוע הבסיס.", "math_expression": "a = 5" },
            { "verbal_explanation": "במנסרה משולשת יש שישה מקצועות בסיס בסך הכל (עליון ותחתון).", "math_expression": "n = 6" },
            { "verbal_explanation": "נחשב את סכום אורכם.", "math_expression": "S_1 = 6 \\times 5 = 30" },
            { "verbal_explanation": "נרשום את גובה המנסרה.", "math_expression": "h = 10" },
            { "verbal_explanation": "ישנם שלושה מקצועות צדדיים.", "math_expression": "m = 3" },
            { "verbal_explanation": "נחשב את סכומם.", "math_expression": "S_2 = 3 \\times 10 = 30" },
            { "verbal_explanation": "נחבר את הסכומים.", "math_expression": "S = 30 + 30" },
            { "verbal_explanation": "זהו סכום כלל המקצועות.", "math_expression": "S = 60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "בתיבה שאינה קובייה, ידועים אורכי שלושה מקצועות היוצאים מאותו קודקוד: \\( a, b, c \\). איזה מהביטויים הבאים מייצג את מחצית מסכום כל מקצועות התיבה?&rlm;",
        "options": ["2(a+b+c)", "4(a+b+c)", "a+b+c", "2ab+2bc+2ac"],
        "correctAnswer": 0,
        "hint": "לתיבה יש 12 מקצועות, 4 מכל סוג.",
        "solution_steps": [
            { "verbal_explanation": "כל אחד מהממדים מופיע ארבע פעמים בתיבה.", "math_expression": "4a , 4b , 4c" },
            { "verbal_explanation": "נרכיב ביטוי לסכום המלא.", "math_expression": "S = 4a + 4b + 4c" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "S = 4(a + b + c)" },
            { "verbal_explanation": "נחלק את הסכום בשתיים.", "math_expression": "P = \\dfrac{4(a + b + c)}{2}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "P = 2(a + b + c)" }
        ],
        "final_answer": "2(a+b+c)"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "נתונה מנסרה ישרה שבסיסה משושה. כמה מקצועות, פאות וקודקודים יש למנסרה זו בהתאמה?&rlm;",
        "options": ["18, 8, 12", "12, 6, 8", "18, 6, 12", "24, 8, 16"],
        "correctAnswer": 0,
        "hint": "במנסרה עם בסיס של n צלעות: 3n מקצועות, n+2 פאות, ו-2n קודקודים.",
        "solution_steps": [
            { "verbal_explanation": "מספר הצלעות בבסיס משושה.", "math_expression": "n = 6" },
            { "verbal_explanation": "מספר המקצועות (פי שלושה).", "math_expression": "E = 3 \\times 6 = 18" },
            { "verbal_explanation": "מספר הפאות (מספר הצלעות פלוס שתיים).", "math_expression": "F = 6 + 2 = 8" },
            { "verbal_explanation": "מספר הקודקודים (פי שניים).", "math_expression": "V = 2 \\times 6 = 12" },
            { "verbal_explanation": "התוצאות בהתאמה.", "math_expression": "18 , 8 , 12" }
        ],
        "final_answer": "18, 8, 12"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "קובייה ותיבה ריבועית חולקות בדיוק את אותו אורך של מקצוע בסיס. גובה התיבה גדול פי 2 מאורך מקצוע זה. מהו היחס בין סכום המקצועות של התיבה לסכום המקצועות של הקובייה?&rlm;",
        "options": ["4:3", "3:2", "2:1", "5:4"],
        "correctAnswer": 0,
        "hint": "הביעו את סכום המקצועות בשני הגופים באמצעות אותו משתנה וחלקו אותם זה בזה.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מקצוע הבסיס המשותף במשתנה.", "math_expression": "a = x" },
            { "verbal_explanation": "נחשב את סכום המקצועות בקובייה.", "math_expression": "S_1 = 12x" },
            { "verbal_explanation": "נגדיר את גובה התיבה.", "math_expression": "h = 2x" },
            { "verbal_explanation": "נרשום משוואה לסכום המקצועות בתיבה.", "math_expression": "S_2 = 8x + 4h" },
            { "verbal_explanation": "נציב את הגובה.", "math_expression": "S_2 = 8x + 4(2x)" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "S_2 = 8x + 8x = 16x" },
            { "verbal_explanation": "נחשב את היחס.", "math_expression": "R = \\dfrac{16x}{12x}" },
            { "verbal_explanation": "נצמצם.", "math_expression": "R = \\dfrac{4}{3}" }
        ],
        "final_answer": "4:3"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "בפירמידה ישרה שבסיסה משולש, כמה מישורים שונים נוצרים על ידי פאות הפירמידה (כולל הבסיס)?&rlm;",
        "options": ["4", "3", "5", "6"],
        "correctAnswer": 0,
        "hint": "כל פאה של גוף במרחב מגדירה מישור יחיד.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את מספר המישורים על ידי מניית הפאות.", "math_expression": "P = F_1 + F_2" },
            { "verbal_explanation": "הבסיס מהווה פאה אחת.", "math_expression": "F_1 = 1" },
            { "verbal_explanation": "בפירמידה משולשת יש 3 פאות צדדיות.", "math_expression": "F_2 = 3" },
            { "verbal_explanation": "נחבר.", "math_expression": "P = 1 + 3" },
            { "verbal_explanation": "הסכום.", "math_expression": "P = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "נתונה תיבה בעלת אורכי מקצועות היוצאים מקודקוד אחד: \\( x, 2x, 3x \\). סכום כל מקצועות התיבה הוא 96. מצאו את ערכו של \\( x \\).&rlm;",
        "options": ["4", "3", "5", "6"],
        "correctAnswer": 0,
        "hint": "כל מקצוע מופיע 4 פעמים בתיבה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת סכום המקצועות בתיבה.", "math_expression": "S = 4a + 4b + 4c" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "S = 4(x) + 4(2x) + 4(3x)" },
            { "verbal_explanation": "נכפול.", "math_expression": "S = 4x + 8x + 12x" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "S = 24x" },
            { "verbal_explanation": "נציב את הסכום הנתון.", "math_expression": "96 = 24x" },
            { "verbal_explanation": "נחלק ב-24.", "math_expression": "x = \\dfrac{96}{24}" },
            { "verbal_explanation": "נקבל את הערך.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "הגדרות של גופים במרחב (תיבה, קובייה, מנסרה, פירמידה)",
        "question_text": "במנסרה ישרה, הבסיס הוא משולש ישר זווית שצלעותיו הן 3, 4, ו-5. גובה המנסרה הוא 10. מהו סכום כל מקצועות המנסרה?&rlm;",
        "options": ["54", "48", "60", "44"],
        "correctAnswer": 0,
        "hint": "חברו את כל צלעות הבסיס העליון, הבסיס התחתון, ושלושת הגבהים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את היקף בסיס המנסרה.", "math_expression": "P = 3 + 4 + 5 = 12" },
            { "verbal_explanation": "יש שני בסיסים.", "math_expression": "S_1 = 2 \\times 12 = 24" },
            { "verbal_explanation": "ישנם שלושה מקצועות צדדיים השווים לגובה.", "math_expression": "S_2 = 3 \\times 10 = 30" },
            { "verbal_explanation": "נחבר את סכומי המקצועות.", "math_expression": "S = S_1 + S_2 = 24 + 30" },
            { "verbal_explanation": "הסכום הכולל.", "math_expression": "S = 54" }
        ],
        "final_answer": "54"
    },

    // ==========================================
    // תת נושא 2: חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 50 L 120 50 L 120 130 L 40 130 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 70 20 L 150 20 L 150 100 L 70 100 Z\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><line x1=\"40\" y1=\"50\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"50\" x2=\"150\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"70\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><line x1=\"40\" y1=\"130\" x2=\"150\" y2=\"20\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>בתיבה מלבנית, אורכי מקצועות הבסיס הם 3 ו-4. גובה התיבה הוא 12. מהו אורך אלכסון התיבה (העובר מקצה לקצה בחלל הגוף)?&rlm;",
        "options": ["13", "15", "14.4", "12.5"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס המורחב: ריבוע אלכסון הגוף שווה לסכום ריבועי שלושת הממדים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את ממדי התיבה.", "math_expression": "a = 3 \\quad , \\quad b = 4 \\quad , \\quad c = 12" },
            { "verbal_explanation": "נשתמש בנוסחת האלכסון המרחבי.", "math_expression": "d^{2} = a^{2} + b^{2} + c^{2}" },
            { "verbal_explanation": "נציב את הממדים.", "math_expression": "d^{2} = 3^{2} + 4^{2} + 12^{2}" },
            { "verbal_explanation": "נחשב את הריבועים.", "math_expression": "d^{2} = 9 + 16 + 144" },
            { "verbal_explanation": "נסכם.", "math_expression": "d^{2} = 169" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "d = \\sqrt{169} = 13" },
            { "verbal_explanation": "מצאנו את אורך האלכסון.", "math_expression": "d = 13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בקובייה, נתון כי אורך האלכסון הראשי של הגוף הוא \\( \\sqrt{48} \\). מצאו את אורך המקצוע של הקובייה.&rlm;",
        "options": ["4", "6", "16", "3"],
        "correctAnswer": 0,
        "hint": "אלכסון קובייה מקיים קשר הכולל את שורש 3 עם מקצוע הקובייה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת אלכסון קובייה.", "math_expression": "d = a\\sqrt{3}" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "d^{2} = 3a^{2}" },
            { "verbal_explanation": "נציב את הנתון.", "math_expression": "(\\sqrt{48})^{2} = 3a^{2}" },
            { "verbal_explanation": "השורש מתבטל.", "math_expression": "48 = 3a^{2}" },
            { "verbal_explanation": "נחלק בשלוש.", "math_expression": "16 = a^{2}" },
            { "verbal_explanation": "נוציא שורש למציאת אורך המקצוע.", "math_expression": "a = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בפירמידה ישרה ומשוכללת בעלת בסיס ריבועי, אורך מקצוע הבסיס הוא 10 וגובה הפירמידה הוא 12. חשבו את גובה הפאה הצדדית.&rlm;",
        "options": ["13", "14.1", "15", "11"],
        "correctAnswer": 0,
        "hint": "הגובה, חצי ממקצוע הבסיס, וגובה הפאה מהווים משולש ישר זווית.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק למרכז הבסיס, שהוא מחצית מהמקצוע.", "math_expression": "x = \\dfrac{a}{2} = \\dfrac{10}{2} = 5" },
            { "verbal_explanation": "נרכיב משוואת פיתגורס עם גובה הפירמידה כניצב.", "math_expression": "h^{2} + x^{2} = m^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "12^{2} + 5^{2} = m^{2}" },
            { "verbal_explanation": "נחשב את הריבועים.", "math_expression": "144 + 25 = m^{2}" },
            { "verbal_explanation": "נחבר.", "math_expression": "169 = m^{2}" },
            { "verbal_explanation": "נוציא שורש לקבלת גובה הפאה (היתר).", "math_expression": "m = \\sqrt{169} = 13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה ריבוע, אורך מקצוע הבסיס הוא 8. גובה הפאה הצדדית הוא 5. מהו גובה הפירמידה?&rlm;",
        "options": ["3", "4", "6", "2.5"],
        "correctAnswer": 0,
        "hint": "מחצית אורך מקצוע הבסיס יחד עם גובה הפירמידה הם הניצבים. גובה הפאה הוא היתר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההיטל שהוא מחצית מקצוע הבסיס.", "math_expression": "x = \\dfrac{8}{2} = 4" },
            { "verbal_explanation": "נרכיב משוואת פיתגורס.", "math_expression": "h^{2} + x^{2} = m^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "h^{2} + 4^{2} = 5^{2}" },
            { "verbal_explanation": "נחשב חזקות.", "math_expression": "h^{2} + 16 = 25" },
            { "verbal_explanation": "נחסר.", "math_expression": "h^{2} = 25 - 16 = 9" },
            { "verbal_explanation": "נוציא שורש למציאת הגובה.", "math_expression": "h = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "במנסרה משולשת ישרה, הבסיס הוא משולש שווה צלעות שאורך צלעו 6. גובה המנסרה 8. חשבו את אורך האלכסון של אחת הפאות הצדדיות המלבניות.&rlm;",
        "options": ["10", "14", "8.5", "12"],
        "correctAnswer": 0,
        "hint": "הפאה היא מלבן שממדיו הם גובה המנסרה וצלע הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "במנסרה ישרה כל פאה צדדית היא מלבן.", "math_expression": "M = 6 \\times 8" },
            { "verbal_explanation": "ממדי המלבן הם מקצוע הבסיס והגובה.", "math_expression": "a = 6 \\quad , \\quad h = 8" },
            { "verbal_explanation": "נשתמש בפיתגורס למציאת האלכסון.", "math_expression": "d^{2} = a^{2} + h^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "d^{2} = 6^{2} + 8^{2}" },
            { "verbal_explanation": "נחשב.", "math_expression": "d^{2} = 36 + 64 = 100" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "d = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בתיבה, ממדי הבסיס הם 6 ו-8. אלכסון התיבה הראשי הוא 26. מצאו את גובה התיבה.&rlm;",
        "options": ["24", "20", "18", "22"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס המורחב ובודדו את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משוואת אלכסון התיבה.", "math_expression": "d^{2} = a^{2} + b^{2} + h^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "26^{2} = 6^{2} + 8^{2} + h^{2}" },
            { "verbal_explanation": "נחשב את הריבועים.", "math_expression": "676 = 36 + 64 + h^{2}" },
            { "verbal_explanation": "נחבר איברים משותפים.", "math_expression": "676 = 100 + h^{2}" },
            { "verbal_explanation": "נחסר.", "math_expression": "h^{2} = 576" },
            { "verbal_explanation": "נוציא שורש לקבלת הגובה.", "math_expression": "h = 24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בקובייה, אלכסון של אחת הפאות מיוצג על ידי הביטוי \\( \\sqrt{32} \\). מהו אורך אלכסון הגוף של קובייה זו?&rlm;",
        "options": ["6.93", "8", "16", "5.65"],
        "correctAnswer": 0,
        "hint": "אלכסון פאה הוא שורש שתיים כפול הצלע. אלכסון הגוף הוא שורש שלוש כפול הצלע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר בין אלכסון הפאה למקצוע.", "math_expression": "x = a\\sqrt{2}" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "x^{2} = 2a^{2}" },
            { "verbal_explanation": "נציב את הנתון.", "math_expression": "32 = 2a^{2}" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "a^{2} = 16 \\Rightarrow a = 4" },
            { "verbal_explanation": "נרשום את הקשר לאלכסון הגוף.", "math_expression": "d = a\\sqrt{3}" },
            { "verbal_explanation": "נציב ונחשב את הקירוב העשרוני.", "math_expression": "d = 4\\sqrt{3} \\approx 6.93" }
        ],
        "final_answer": "6.93"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בפירמידה ישרה שבסיסה מלבן, צלעות המלבן הן 5 ו-12. גובה הפירמידה הוא 8. מהו אורך המקצוע הצדדי של הפירמידה?&rlm;",
        "options": ["10.3", "12", "15", "9.6"],
        "correctAnswer": 0,
        "hint": "חשבו את אלכסון המלבן. חצי מהאלכסון יוצר עם הגובה משולש ישר זווית שהיתר שלו הוא המקצוע הצדדי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ריבוע אלכסון הבסיס המלבני.", "math_expression": "k^{2} = 5^{2} + 12^{2} = 25 + 144 = 169" },
            { "verbal_explanation": "נוציא שורש לאלכסון המלא.", "math_expression": "k = 13" },
            { "verbal_explanation": "נחשב את מחצית האלכסון כניצב.", "math_expression": "x = \\dfrac{13}{2} = 6.5" },
            { "verbal_explanation": "נרכיב משוואת פיתגורס למקצוע הצדדי.", "math_expression": "h^{2} + x^{2} = s^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "8^{2} + 6.5^{2} = s^{2}" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "64 + 42.25 = 106.25 = s^{2}" },
            { "verbal_explanation": "נוציא שורש מקורב.", "math_expression": "s \\approx 10.3" }
        ],
        "final_answer": "10.3"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "במנסרה ישרה שבסיסה ריבוע, אורך אלכסון הפאה הצדדית הוא 10, ואורך מקצוע הבסיס הוא 6. מצאו את גובה המנסרה.&rlm;",
        "options": ["8", "11.66", "10", "6"],
        "correctAnswer": 0,
        "hint": "הפאה היא מלבן שממדיו מקצוע הבסיס והגובה. הפעילו פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "הפאה הצדדית מלבנית. נשתמש בפיתגורס.", "math_expression": "a^{2} + h^{2} = d^{2}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "6^{2} + h^{2} = 10^{2}" },
            { "verbal_explanation": "נחשב ריבועים.", "math_expression": "36 + h^{2} = 100" },
            { "verbal_explanation": "נחסר.", "math_expression": "h^{2} = 100 - 36 = 64" },
            { "verbal_explanation": "נוציא שורש לקבלת הגובה.", "math_expression": "h = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי אורכי מקצועות, אלכסונים של פאות ואלכסון הגוף",
        "question_text": "בתיבה, ריבועי האלכסונים של שלוש הפאות השונות הנפגשות בקודקוד אחד הם 13, 20 ו-17. מצאו את אורך האלכסון הראשי של התיבה.&rlm;",
        "options": ["5", "10", "25", "7"],
        "correctAnswer": 0,
        "hint": "רשמו שלוש משוואות פיתגורס לפאות וחברו אותן יחד.",
        "solution_steps": [
            { "verbal_explanation": "משוואה לאלכסון הפאה הראשונה.", "math_expression": "a^{2} + b^{2} = 13" },
            { "verbal_explanation": "משוואה לאלכסון הפאה השנייה.", "math_expression": "a^{2} + c^{2} = 20" },
            { "verbal_explanation": "משוואה לאלכסון הפאה השלישית.", "math_expression": "b^{2} + c^{2} = 17" },
            { "verbal_explanation": "נחבר את שלוש המשוואות.", "math_expression": "2a^{2} + 2b^{2} + 2c^{2} = 13 + 20 + 17" },
            { "verbal_explanation": "נסכם את האגף הימני.", "math_expression": "2(a^{2} + b^{2} + c^{2}) = 50" },
            { "verbal_explanation": "נחלק בשתיים להשגת ריבוע האלכסון הראשי.", "math_expression": "a^{2} + b^{2} + c^{2} = 25 \\Rightarrow d^{2} = 25" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "d = 5" }
        ],
        "final_answer": "5"
    },

    // ==========================================
    // תת נושא 3: זווית בין ישר למישור (למשל אלכסון תיבה לבסיס) (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 50 L 120 50 L 120 130 L 40 130 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 70 20 L 150 20 L 150 100 L 70 100 Z\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><line x1=\"40\" y1=\"50\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"50\" x2=\"150\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"70\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><line x1=\"40\" y1=\"130\" x2=\"150\" y2=\"20\" stroke=\"#c5a059\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#c5a059\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg></div><br>בתיבה, אורך מקצוע הבסיס הוא 6, רוחבו הוא 8 וגובה התיבה הוא 10. מצאו את הזווית בין אלכסון התיבה למישור הבסיס.&rlm;",
        "options": ["45°", "30°", "60°", "35.2°"],
        "correctAnswer": 0,
        "hint": "חשבו את אלכסון הבסיס. השתמשו בטנגנס הזווית הנוצרת בינו לבין הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ריבוע אלכסון הבסיס.", "math_expression": "d^{2} = 6^{2} + 8^{2} = 36 + 64" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "d^{2} = 100" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את ההיטל.", "math_expression": "d = 10" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית, שווה לגובה חלקי ההיטל.", "math_expression": "\\tan A = \\dfrac{h}{d}" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "\\tan A = \\dfrac{10}{10}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\tan A = 1" },
            { "verbal_explanation": "נמצא את הזווית.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בקובייה, מהי הזווית שיוצר אלכסון הקובייה עם מישור הבסיס?&rlm;",
        "options": ["35.26°", "45°", "54.7°", "30°"],
        "correctAnswer": 0,
        "hint": "הביעו את הממדים בעזרת המקצוע a. השתמשו בטנגנס.",
        "solution_steps": [
            { "verbal_explanation": "הגובה שווה למקצוע הקובייה.", "math_expression": "h = a" },
            { "verbal_explanation": "אלכסון הבסיס הריבועי (ההיטל).", "math_expression": "d = a\\sqrt{2}" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית.", "math_expression": "\\tan A = \\dfrac{h}{d}" },
            { "verbal_explanation": "נציב את הביטויים.", "math_expression": "\\tan A = \\dfrac{a}{a\\sqrt{2}}" },
            { "verbal_explanation": "נצמצם את המשתנה.", "math_expression": "\\tan A = \\dfrac{1}{\\sqrt{2}}" },
            { "verbal_explanation": "נחשב ערך עשרוני.", "math_expression": "\\tan A \\approx 0.707" },
            { "verbal_explanation": "נחלץ את הזווית.", "math_expression": "A \\approx 35.26^{\\circ}" }
        ],
        "final_answer": "35.26°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה ריבוע, מקצוע הבסיס 10 וגובה הפירמידה 12. מהי הזווית שיוצר מקצוע צדדי עם מישור הבסיס?&rlm;",
        "options": ["59.5°", "45°", "60°", "50.2°"],
        "correctAnswer": 0,
        "hint": "ההיטל של מקצוע צדדי הוא מחצית מאלכסון הבסיס. השתמשו בטנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ריבוע אלכסון הבסיס.", "math_expression": "d^{2} = 10^{2} + 10^{2} = 200" },
            { "verbal_explanation": "נוציא שורש לאלכסון.", "math_expression": "d = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14" },
            { "verbal_explanation": "ההיטל הוא מחצית האלכסון.", "math_expression": "x = \\dfrac{14.14}{2} = 7.07" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית עם הגובה וההיטל.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{12}{7.07}" },
            { "verbal_explanation": "נחשב את היחס.", "math_expression": "\\tan A \\approx 1.697" },
            { "verbal_explanation": "נחלץ את הזווית.", "math_expression": "A \\approx 59.5^{\\circ}" }
        ],
        "final_answer": "59.5°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בפירמידה ישרה שבסיסה מלבן, צלעות המלבן הן 10 ו-24. גובה הפירמידה 13. מצאו את הזווית בין מקצוע צדדי למישור הבסיס.&rlm;",
        "options": ["45°", "30°", "60°", "54.7°"],
        "correctAnswer": 0,
        "hint": "חשבו את אלכסון הבסיס. ההיטל הוא חצי ממנו. השתמשו בטנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ריבוע אלכסון הבסיס.", "math_expression": "d^{2} = 10^{2} + 24^{2} = 100 + 576 = 676" },
            { "verbal_explanation": "נוציא שורש לאלכסון המלא.", "math_expression": "d = \\sqrt{676} = 26" },
            { "verbal_explanation": "נחשב את ההיטל (חצי אלכסון).", "math_expression": "x = \\dfrac{26}{2} = 13" },
            { "verbal_explanation": "נשתמש בטנגנס.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{13}{13} = 1" },
            { "verbal_explanation": "נמצא את הזווית.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "במנסרה ישרה שבסיסה ריבוע, אורך מקצוע הבסיס הוא 5 וגובה המנסרה 5. מהי הזווית שיוצר אלכסון פאה צדדית עם הבסיס?&rlm;",
        "options": ["45°", "30°", "60°", "35.2°"],
        "correctAnswer": 0,
        "hint": "היטל אלכסון הפאה הצדדית על הבסיס הוא מקצוע הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "במנסרה ישרה, הפאה מאונכת לבסיס.", "math_expression": "Projection = a" },
            { "verbal_explanation": "ההיטל הוא מקצוע הבסיס.", "math_expression": "x = 5" },
            { "verbal_explanation": "הגובה הוא ניצב במשולש.", "math_expression": "h = 5" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{5}{5} = 1" },
            { "verbal_explanation": "נחלץ את הזווית.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בתיבה, אורך אלכסון הבסיס הוא 10 ואורך אלכסון התיבה הוא 20. מהי הזווית שיוצר אלכסון התיבה עם מישור הבסיס?&rlm;",
        "options": ["60°", "30°", "45°", "75°"],
        "correctAnswer": 0,
        "hint": "ההיטל הוא 10 והיתר הוא 20. השתמשו בקוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "אלכסון הבסיס הוא ההיטל.", "math_expression": "x = 10" },
            { "verbal_explanation": "אלכסון התיבה הוא היתר.", "math_expression": "D = 20" },
            { "verbal_explanation": "נשתמש בקוסינוס הזווית.", "math_expression": "\\cos A = \\dfrac{x}{D}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\cos A = \\dfrac{10}{20}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\cos A = 0.5" },
            { "verbal_explanation": "נמצא את הזווית.", "math_expression": "A = 60^{\\circ}" }
        ],
        "final_answer": "60°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בקובייה, מהי הזווית שיוצר אלכסון פאה אחת עם מישור של פאה אחרת המאונכת לה?&rlm;",
        "options": ["45°", "30°", "60°", "35.2°"],
        "correctAnswer": 0,
        "hint": "ההיטל של אלכסון הפאה על פאה מאונכת הוא המקצוע המשותף. השתמשו בטנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מקצוע הקובייה.", "math_expression": "h = a" },
            { "verbal_explanation": "ההיטל על פאה מאונכת הוא המקצוע המשותף.", "math_expression": "x = a" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{a}{a}" },
            { "verbal_explanation": "המשתנה מצטמצם.", "math_expression": "\\tan A = 1" },
            { "verbal_explanation": "נמצא את הזווית.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה ריבוע, אורך המקצוע הצדדי הוא 10, ואורך אלכסון הבסיס הוא \\( 10\\sqrt{2} \\). מצאו את הזווית בין המקצוע הצדדי למישור הבסיס.&rlm;",
        "options": ["45°", "60°", "30°", "90°"],
        "correctAnswer": 0,
        "hint": "ההיטל הוא מחצית האלכסון. השתמשו בקוסינוס הזווית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אורך המקצוע הצדדי (היתר).", "math_expression": "s = 10" },
            { "verbal_explanation": "נחשב את ההיטל שהוא חצי מאלכסון הבסיס.", "math_expression": "x = \\dfrac{10\\sqrt{2}}{2} = 5\\sqrt{2}" },
            { "verbal_explanation": "נשתמש בקוסינוס לחישוב הזווית.", "math_expression": "\\cos A = \\dfrac{x}{s}" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "\\cos A = \\dfrac{5\\sqrt{2}}{10}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\cos A = \\dfrac{\\sqrt{2}}{2}" },
            { "verbal_explanation": "הזווית נגזרת מערך מוכר.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "מנסרה משולשת ישרה. הבסיס הוא משולש ישר זווית בעל ניצבים 6 ו-8. גובה המנסרה 14. מעבירים אלכסון בפאה המלבנית הגדולה ביותר. מהי הזווית שהוא יוצר עם הבסיס?&rlm;",
        "options": ["54.4°", "60.2°", "45°", "35.5°"],
        "correctAnswer": 0,
        "hint": "מצאו את יתר הבסיס שהוא ההיטל של האלכסון. השתמשו בטנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את יתר משולש הבסיס.", "math_expression": "c^{2} = 6^{2} + 8^{2} = 100" },
            { "verbal_explanation": "נוציא שורש לקבלת היתר המהווה בסיס לפאה.", "math_expression": "c = 10" },
            { "verbal_explanation": "ההיטל של האלכסון מתלכד עם היתר.", "math_expression": "x = 10" },
            { "verbal_explanation": "הגובה מהווה את הניצב השני.", "math_expression": "h = 14" },
            { "verbal_explanation": "נשתמש בטנגנס.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב ונחשב.", "math_expression": "\\tan A = \\dfrac{14}{10} = 1.4" },
            { "verbal_explanation": "נפעיל פונקציה הפוכה.", "math_expression": "A \\approx 54.4^{\\circ}" }
        ],
        "final_answer": "54.4°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין ישר למישור (למשל אלכסון תיבה לבסיס)",
        "question_text": "במנסרה נתון כי גובה המנסרה שווה לאורך צלע הבסיס שעליה נשענת אחת הפאות. מה תהיה הזווית של אלכסון פאה זו עם הבסיס?&rlm;",
        "options": ["45°", "60°", "30°", "לא ניתן לקבוע"],
        "correctAnswer": 0,
        "hint": "ההיטל הוא צלע הבסיס. הגובה הוא הצלע האנכית. כשהם שווים, הטנגנס שווה לאחת.",
        "solution_steps": [
            { "verbal_explanation": "במנסרה ישרה צלע הבסיס מתלכדת עם ההיטל.", "math_expression": "x = a" },
            { "verbal_explanation": "נתון שגובה המנסרה שווה לצלע הבסיס.", "math_expression": "h = a" },
            { "verbal_explanation": "נרכיב את משוואת הטנגנס.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{a}{a} = 1" },
            { "verbal_explanation": "הזווית הנובעת מיחס השווה לאחת.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },

    // ==========================================
    // תת נושא 4: זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה) (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 100 20 L 40 120 L 160 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><ellipse cx=\"100\" cy=\"115\" rx=\"60\" ry=\"15\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><line x1=\"100\" y1=\"100\" x2=\"160\" y2=\"115\" stroke=\"#c5a059\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"160\" y2=\"115\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>בפירמידה ישרה ומשוכללת שבסיסה ריבוע, אורך מקצוע הבסיס הוא 12 וגובה הפירמידה הוא 8. מהי הזווית בין פאה צדדית למישור הבסיס?&rlm;",
        "options": ["53.13°", "45°", "36.87°", "60°"],
        "correctAnswer": 0,
        "hint": "הזווית נמדדת במשולש שקודקודיו הם קודקוד הפירמידה, מרכז הבסיס, ואמצע מקצוע הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "המרחק ממרכז הריבוע ועד לצלעו שווה למחצית מאורך צלע הבסיס.", "math_expression": "x = \\dfrac{12}{2} = 6" },
            { "verbal_explanation": "הניצב האנכי הוא גובה הפירמידה.", "math_expression": "h = 8" },
            { "verbal_explanation": "נשתמש בטנגנס לחבר בין הניצבים.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב את המספרים.", "math_expression": "\\tan A = \\dfrac{8}{6}" },
            { "verbal_explanation": "נצמצם ונהפוך לשבר עשרוני.", "math_expression": "\\tan A = \\dfrac{4}{3} \\approx 1.333" },
            { "verbal_explanation": "נבצע את הפעולה ההפוכה במחשבון לחילוץ הזווית.", "math_expression": "A \\approx 53.13^{\\circ}" }
        ],
        "final_answer": "53.13°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "במנסרה משולשת ישרה שבה הבסיס הוא משולש שווה צלעות, מעבירים מישור אלכסוני דרך אחד ממקצועות הבסיס התחתון ועד לקודקוד הנגדי בבסיס העליון. אורך מקצוע הבסיס הוא 4 וגובה המנסרה הוא 6. מצאו את הזווית שיוצר המישור האלכסוני עם בסיס המנסרה.&rlm;",
        "options": ["60°", "30°", "45°", "54.7°"],
        "correctAnswer": 0,
        "hint": "הזווית נמדדת במשולש ישר זווית שהניצב האנכי שלו הוא גובה המנסרה והניצב האופקי שלו הוא גובה משולש הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הגובה של משולש הבסיס.", "math_expression": "h_1 = \\dfrac{a\\sqrt{3}}{2}" },
            { "verbal_explanation": "נציב את מקצוע הבסיס.", "math_expression": "h_1 = \\dfrac{4\\sqrt{3}}{2} = 2\\sqrt{3}" },
            { "verbal_explanation": "הניצב האנכי הוא גובה המנסרה.", "math_expression": "h_2 = 6" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית.", "math_expression": "\\tan A = \\dfrac{h_2}{h_1} = \\dfrac{6}{2\\sqrt{3}}" },
            { "verbal_explanation": "נפשט את השבר.", "math_expression": "\\tan A = \\dfrac{3}{\\sqrt{3}} = \\sqrt{3}" },
            { "verbal_explanation": "הזווית מזוהה מערך מוכר.", "math_expression": "A = 60^{\\circ}" }
        ],
        "final_answer": "60°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה משולש שווה צלעות, אורך כל אחד ממקצועות הבסיס הוא 10. הזווית שבין פאה צדדית למישור הבסיס היא 45 מעלות. מהו גובה הפירמידה?&rlm;",
        "options": ["2.88", "5", "8.66", "10"],
        "correctAnswer": 0,
        "hint": "בפירמידה משולשת ישרה, ההיטל של גובה הפאה על הבסיס שווה לשליש מגובה משולש הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הגובה של משולש הבסיס.", "math_expression": "h_1 = \\dfrac{10\\sqrt{3}}{2} = 5\\sqrt{3}" },
            { "verbal_explanation": "ההיטל הוא שליש מגובה הבסיס.", "math_expression": "x = \\dfrac{h_1}{3} = \\dfrac{5\\sqrt{3}}{3}" },
            { "verbal_explanation": "נחשב את הערך העשרוני המקורב של ההיטל.", "math_expression": "x \\approx \\dfrac{8.66}{3} \\approx 2.88" },
            { "verbal_explanation": "נרשום את משוואת הטנגנס עם הזווית הנתונה.", "math_expression": "\\tan(45^{\\circ}) = \\dfrac{h_2}{x}" },
            { "verbal_explanation": "ערך הטנגנס הוא אחת.", "math_expression": "1 = \\dfrac{h_2}{2.88} \\Rightarrow h_2 = 2.88" }
        ],
        "final_answer": "2.88"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בתיבה, בסיס התיבה הוא ריבוע בעל מקצוע 8. מישור אלכסוני מועבר דרך מקצוע הבסיס ומגיע למקצוע העליון הנגדי לו, כך שהוא יוצר זווית של 30 מעלות עם מישור הבסיס. מהו גובה התיבה?&rlm;",
        "options": ["4.62", "4", "8", "6"],
        "correctAnswer": 0,
        "hint": "המישור האלכסוני יוצר משולש ישר זווית (בחתך צדדי) בו הבסיס הוא 8 והזווית היא 30.",
        "solution_steps": [
            { "verbal_explanation": "בחתך הצד של התיבה, הניצב האופקי הוא מקצוע הבסיס.", "math_expression": "b = 8" },
            { "verbal_explanation": "הניצב האנכי הוא גובה התיבה.", "math_expression": "h" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית.", "math_expression": "\\tan(30^{\\circ}) = \\dfrac{h}{b} = \\dfrac{h}{8}" },
            { "verbal_explanation": "נבודד את הגובה.", "math_expression": "h = 8 \\times \\tan(30^{\\circ})" },
            { "verbal_explanation": "נציב את הערך העשרוני המקורב.", "math_expression": "h \\approx 8 \\times 0.577" },
            { "verbal_explanation": "נחשב את המכפלה לתוצאה הסופית.", "math_expression": "h \\approx 4.62" }
        ],
        "final_answer": "4.62"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה שבסיסה ריבוע, גובה הפירמידה שווה בדיוק למחצית מאורך אלכסון הבסיס. מהי הזווית שיוצרת פאה צדדית עם מישור הבסיס?&rlm;",
        "options": ["53.13°", "45°", "60°", "30°"],
        "correctAnswer": 0,
        "hint": "הביעו את הממדים בעזרת מקצוע הבסיס. אלכסון הבסיס הוא הצלע כפול שורש 2.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את אורך מקצוע הבסיס.", "math_expression": "a = x" },
            { "verbal_explanation": "אלכסון הבסיס הריבועי.", "math_expression": "d_1 = x\\sqrt{2}" },
            { "verbal_explanation": "נרכיב משוואה לגובה הפירמידה לפי הנתון.", "math_expression": "h = \\dfrac{d_1}{2} = \\dfrac{x\\sqrt{2}}{2}" },
            { "verbal_explanation": "המרחק ממרכז הריבוע לאמצע הצלע (ההיטל) הוא חצי צלע.", "math_expression": "p = \\dfrac{x}{2}" },
            { "verbal_explanation": "נרשום את פונקציית הטנגנס לזווית הנטייה.", "math_expression": "\\tan A = \\dfrac{h}{p} = \\dfrac{\\dfrac{x\\sqrt{2}}{2}}{\\dfrac{x}{2}}" },
            { "verbal_explanation": "נצמצם משתנים ומכנים.", "math_expression": "\\tan A = \\sqrt{2} \\approx 1.414" },
            { "verbal_explanation": "נפעיל פונקציה הפוכה למציאת הזווית.", "math_expression": "A \\approx 54.73^{\\circ}" }
        ],
        "final_answer": "54.73°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה משושה, אורך מקצוע הבסיס הוא 4 וגובה הפירמידה הוא 6. מצאו את הזווית שבין פאה צדדית למישור הבסיס.&rlm;",
        "options": ["60°", "45°", "30°", "53.1°"],
        "correctAnswer": 0,
        "hint": "ההיטל של גובה הפאה הצדדית על בסיס המשושה הוא גובה של אחד ממשולשי הבסיס שווי הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "במשושה, ההיטל הוא הגובה של משולש שווה צלעות פנימי.", "math_expression": "p = \\dfrac{a\\sqrt{3}}{2}" },
            { "verbal_explanation": "נציב את מקצוע הבסיס.", "math_expression": "p = \\dfrac{4\\sqrt{3}}{2} = 2\\sqrt{3}" },
            { "verbal_explanation": "גובה הפירמידה נתון.", "math_expression": "h = 6" },
            { "verbal_explanation": "נשתמש בטנגנס.", "math_expression": "\\tan A = \\dfrac{h}{p} = \\dfrac{6}{2\\sqrt{3}}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\tan A = \\dfrac{3}{\\sqrt{3}}" },
            { "verbal_explanation": "נפשט לשורש יחיד.", "math_expression": "\\tan A = \\sqrt{3}" },
            { "verbal_explanation": "הזווית היא שישים מעלות.", "math_expression": "A = 60^{\\circ}" }
        ],
        "final_answer": "60°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "קובייה נחתכת על ידי מישור העובר דרך שני קודקודים נגדיים של פאה עליונה וחותך את הפאות הצדדיות עד למקצוע התחתון הנגדי. מהי הזווית הדו-מישורית שנוצרת בין מישור החיתוך הזה לבין בסיס הקובייה?&rlm;",
        "options": ["45°", "30°", "60°", "54.7°"],
        "correctAnswer": 0,
        "hint": "חתך שעובר דרך מקצוע עליון ומקצוע תחתון נגדי יוצר משולש ישר זווית שבו הניצב האנכי הוא גובה הקובייה והניצב האופקי הוא צלע הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "בחתך הצד, הניצב האנכי הוא מקצוע הקובייה.", "math_expression": "h = a" },
            { "verbal_explanation": "הניצב האופקי הוא מקצוע הבסיס.", "math_expression": "x = a" },
            { "verbal_explanation": "נשתמש בטנגנס.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{a}{a}" },
            { "verbal_explanation": "השבר מצטמצם.", "math_expression": "\\tan A = 1" },
            { "verbal_explanation": "הזווית המקיימת זאת היא 45 מעלות.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה שבסיסה משולש שווה צלעות, שטח הבסיס הוא \\( \\sqrt{3} \\) סמ''ר. הזווית בין פאה צדדית למישור הבסיס היא בת 60 מעלות. מהו שטח הפנים של מעטפת הפירמידה (ללא הבסיס)?&rlm;",
        "options": ["3.46", "5.2", "6", "10.39"],
        "correctAnswer": 0,
        "hint": "לפי משפט ההיטל, שטח הבסיס שווה לשטח המעטפת כפול קוסינוס הזווית הדו-מישורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט ההיטל.", "math_expression": "S_1 = M \\times \\cos A" },
            { "verbal_explanation": "נציב את שטח הבסיס והזווית.", "math_expression": "\\sqrt{3} = M \\times \\cos(60^{\\circ})" },
            { "verbal_explanation": "נציב את ערך הקוסינוס.", "math_expression": "\\sqrt{3} = M \\times 0.5" },
            { "verbal_explanation": "נבודד את שטח המעטפת.", "math_expression": "M = \\dfrac{\\sqrt{3}}{0.5} = 2\\sqrt{3}" },
            { "verbal_explanation": "נחשב את הקירוב העשרוני.", "math_expression": "M \\approx 2 \\times 1.732 \\approx 3.46" }
        ],
        "final_answer": "3.46"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה שבסיסה מרובע, גובה הפירמידה שווה לאורך חצי מקצוע הבסיס. מהי הזווית בין הפאה הצדדית לבסיס?&rlm;",
        "options": ["45°", "60°", "30°", "53.1°"],
        "correctAnswer": 0,
        "hint": "ההיטל הוא גם כן חצי מקצוע הבסיס. הגובה שווה להיטל.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מקצוע הבסיס.", "math_expression": "a" },
            { "verbal_explanation": "גובה הפירמידה לפי הנתון.", "math_expression": "h = \\dfrac{a}{2}" },
            { "verbal_explanation": "היטל הפאה למרכז הבסיס.", "math_expression": "x = \\dfrac{a}{2}" },
            { "verbal_explanation": "נרשום משוואת טנגנס.", "math_expression": "\\tan A = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב.", "math_expression": "\\tan A = \\dfrac{\\dfrac{a}{2}}{\\dfrac{a}{2}}" },
            { "verbal_explanation": "הביטויים מצטמצמים לחלוטין.", "math_expression": "\\tan A = 1" },
            { "verbal_explanation": "הזווית המתקבלת.", "math_expression": "A = 45^{\\circ}" }
        ],
        "final_answer": "45°"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "זווית בין שני מישורים (למשל פאה צדדית לבסיס בפירמידה)",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה משושה, הזווית שבין פאה צדדית לבסיס היא 45 מעלות. מקצוע הבסיס הוא 4. מצאו את גובה הפירמידה.&rlm;",
        "options": ["3.46", "4", "2", "6.92"],
        "correctAnswer": 0,
        "hint": "ההיטל שווה לגובה, כיוון שהזווית היא 45. חשבו את ההיטל (גובה משולש שווה צלעות בבסיס).",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההיטל, שהוא גובה המשולש בבסיס.", "math_expression": "x = \\dfrac{4\\sqrt{3}}{2} = 2\\sqrt{3}" },
            { "verbal_explanation": "נשתמש בטנגנס למציאת הגובה.", "math_expression": "\\tan(45^{\\circ}) = \\dfrac{h}{x}" },
            { "verbal_explanation": "נציב את הערך של טנגנס 45.", "math_expression": "1 = \\dfrac{h}{2\\sqrt{3}}" },
            { "verbal_explanation": "הגובה שווה להיטל.", "math_expression": "h = 2\\sqrt{3}" },
            { "verbal_explanation": "נחשב את הערך העשרוני.", "math_expression": "h \\approx 2 \\times 1.732 \\approx 3.46" }
        ],
        "final_answer": "3.46"
    },

    // ==========================================
    // תת נושא 5: חישובי מעטפת, שטח פנים ונפח של גופים במרחב (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "תיבה בעלת הממדים 3, 4, ו-5. חשבו את נפח התיבה ואת שטח הפנים שלה בהתאמה.&rlm;",
        "options": ["V=60, S=94", "V=60, S=120", "V=120, S=94", "V=47, S=60"],
        "correctAnswer": 0,
        "hint": "הנפח הוא מכפלת כל שלושת הממדים. שטח הפנים הוא סכום ששת המלבנים (פעמיים כל זוג ממדים).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את ממדי התיבה.", "math_expression": "a = 3 \\quad , \\quad b = 4 \\quad , \\quad c = 5" },
            { "verbal_explanation": "נחשב את הנפח על ידי מכפלה משולשת.", "math_expression": "V = 3 \\times 4 \\times 5" },
            { "verbal_explanation": "התוצאה של הנפח.", "math_expression": "V = 60" },
            { "verbal_explanation": "נרשום את הנוסחה לשטח פנים.", "math_expression": "S = 2(ab + ac + bc)" },
            { "verbal_explanation": "נציב את הממדים.", "math_expression": "S = 2(3 \\times 4 + 3 \\times 5 + 4 \\times 5)" },
            { "verbal_explanation": "נחשב את המכפלות.", "math_expression": "S = 2(12 + 15 + 20) = 2(47)" },
            { "verbal_explanation": "נבצע את המכפלה הסופית.", "math_expression": "S = 94" }
        ],
        "final_answer": "V=60, S=94"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "קובייה בעלת נפח של 343 סמ''ק. מצאו את שטח הפנים שלה.&rlm;",
        "options": ["294", "343", "49", "196"],
        "correctAnswer": 0,
        "hint": "הוציאו שורש שלישי לנפח כדי למצוא את אורך המקצוע. לאחר מכן, חשבו את שטח הפנים (6 פעמים ריבוע המקצוע).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח של קובייה.", "math_expression": "V = a^{3} = 343" },
            { "verbal_explanation": "נוציא שורש שלישי למציאת המקצוע.", "math_expression": "a = \\sqrt[3]{343} = 7" },
            { "verbal_explanation": "נרשום את נוסחת שטח הפנים הכוללת את שש פאות הקובייה.", "math_expression": "S = 6 \\times a^{2}" },
            { "verbal_explanation": "נציב את המקצוע.", "math_expression": "S = 6 \\times 7^{2}" },
            { "verbal_explanation": "נחשב את הריבוע.", "math_expression": "S = 6 \\times 49" },
            { "verbal_explanation": "נבצע את המכפלה למציאת התשובה הסופית.", "math_expression": "S = 294" }
        ],
        "final_answer": "294"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "בפירמידה ישרה ומשוכללת שבסיסה ריבוע, אורך מקצוע הבסיס הוא 10 וגובה הפירמידה הוא 12. חשבו את נפח הפירמידה.&rlm;",
        "options": ["400", "1200", "600", "300"],
        "correctAnswer": 0,
        "hint": "נפח פירמידה שווה לשליש מכפלת שטח הבסיס בגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הבסיס הריבועי.", "math_expression": "S_1 = a^{2} = 10^{2}" },
            { "verbal_explanation": "השטח הוא 100.", "math_expression": "S_1 = 100" },
            { "verbal_explanation": "נרשום את נוסחת הנפח לפירמידה.", "math_expression": "V = \\dfrac{S_1 \\times h}{3}" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "V = \\dfrac{100 \\times 12}{3}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "V = 100 \\times 4" },
            { "verbal_explanation": "התוצאה הסופית התקבלה.", "math_expression": "V = 400" }
        ],
        "final_answer": "400"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "בפירמידה ישרה שבסיסה ריבוע, אורך מקצוע הבסיס הוא 10, ואורך גובה הפאה הצדדית הוא 13. חשבו את שטח הפנים הכולל של הפירמידה (כולל הבסיס).&rlm;",
        "options": ["360", "260", "160", "400"],
        "correctAnswer": 0,
        "hint": "שטח הפנים מורכב משטח הבסיס ועוד ארבעה משולשים המהווים את המעטפת.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הבסיס.", "math_expression": "S_1 = 10^{2} = 100" },
            { "verbal_explanation": "נחשב שטח של פאה צדדית אחת.", "math_expression": "S_{face} = \\dfrac{10 \\times 13}{2}" },
            { "verbal_explanation": "השלמת החישוב לפאה.", "math_expression": "S_{face} = 65" },
            { "verbal_explanation": "נחשב את שטח המעטפת (4 פאות).", "math_expression": "M = 4 \\times 65 = 260" },
            { "verbal_explanation": "נחבר את המעטפת לבסיס.", "math_expression": "S = S_1 + M" },
            { "verbal_explanation": "נציב ונחבר.", "math_expression": "S = 100 + 260" },
            { "verbal_explanation": "שטח הפנים הושג.", "math_expression": "S = 360" }
        ],
        "final_answer": "360"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "מנסרה משולשת ישרה שבסיסה משולש שווה צלעות באורך 4, וגובהה 10. חשבו את נפח המנסרה.&rlm;",
        "options": ["69.28", "120", "34.64", "48.2"],
        "correctAnswer": 0,
        "hint": "נפח מנסרה הוא שטח הבסיס כפול הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח משולש הבסיס.", "math_expression": "S_1 = \\dfrac{a^{2}\\sqrt{3}}{4}" },
            { "verbal_explanation": "נציב את המקצוע.", "math_expression": "S_1 = \\dfrac{4^{2}\\sqrt{3}}{4}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "S_1 = 4\\sqrt{3}" },
            { "verbal_explanation": "נחשב קירוב עשרוני לשטח.", "math_expression": "S_1 \\approx 4 \\times 1.732 \\approx 6.928" },
            { "verbal_explanation": "נרשום משוואת נפח.", "math_expression": "V = S_1 \\times h" },
            { "verbal_explanation": "נציב את הגובה.", "math_expression": "V = 6.928 \\times 10" },
            { "verbal_explanation": "נבצע את המכפלה.", "math_expression": "V \\approx 69.28" }
        ],
        "final_answer": "69.28"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "תיבה בעלת שטח פנים של 148. ממדי הבסיס הם 4 ו-5. מצאו את גובה התיבה.&rlm;",
        "options": ["6", "5", "8", "7"],
        "correctAnswer": 0,
        "hint": "הציבו את כל הידוע לכם בנוסחת שטח הפנים, ופתרו משוואה שבה הנעלם הוא הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת שטח הפנים.", "math_expression": "S = 2(ab + ah + bh)" },
            { "verbal_explanation": "נציב את הממדים הידועים.", "math_expression": "148 = 2(4 \\times 5 + 4 \\times h + 5 \\times h)" },
            { "verbal_explanation": "נכנס את הגורמים הדומים.", "math_expression": "148 = 2(20 + 9h)" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "74 = 20 + 9h" },
            { "verbal_explanation": "נעביר אגפים.", "math_expression": "54 = 9h" },
            { "verbal_explanation": "נחלק בתשע.", "math_expression": "h = \\dfrac{54}{9} = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "קובייה ותיבה ריבועית חולקות שטח פנים זהה של 150. לקובייה מקצוע באורך 5. רוחב בסיס התיבה שווה למקצוע הקובייה. מהו גובה התיבה?&rlm;",
        "options": ["5", "7.5", "10", "6.25"],
        "correctAnswer": 0,
        "hint": "אם רוחב בסיס התיבה זהה, והיא ריבועית, הבסיסים זהים. אם שטח הפנים זהה, הגופים זהים והגובה שווה למקצוע.",
        "solution_steps": [
            { "verbal_explanation": "אורך מקצוע הקובייה ידוע.", "math_expression": "a_{cube} = 5" },
            { "verbal_explanation": "בסיס התיבה הוא ריבוע, שווה לבסיס הקובייה.", "math_expression": "a_{box} = 5 \\quad , \\quad b_{box} = 5" },
            { "verbal_explanation": "נבנה משוואה לשטח הפנים של התיבה.", "math_expression": "S = 2(5^{2}) + 4(5 \\times h) = 150" },
            { "verbal_explanation": "נחשב את ריבוע הבסיס.", "math_expression": "50 + 20h = 150" },
            { "verbal_explanation": "נעביר את המספר לאגף השני.", "math_expression": "20h = 100" },
            { "verbal_explanation": "נחלק בעשרים למציאת הגובה.", "math_expression": "h = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "נפח פירמידה ישרה שבסיסה ריבוע הוא 400. גובה הפירמידה הוא 12. מהו אורך מקצוע הבסיס שלה?&rlm;",
        "options": ["10", "8", "12", "5"],
        "correctAnswer": 0,
        "hint": "הציבו בנוסחת נפח פירמידה וחלצו את המקצוע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח לפירמידה.", "math_expression": "V = \\dfrac{a^{2} \\times h}{3}" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "400 = \\dfrac{a^{2} \\times 12}{3}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "400 = 4 \\times a^{2}" },
            { "verbal_explanation": "נחלק בארבע.", "math_expression": "a^{2} = 100" },
            { "verbal_explanation": "נוציא שורש למציאת האורך.", "math_expression": "a = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "מנסרה ישרה בעלת בסיס שהוא משולש ישר זווית. ניצבי המשולש הם 3 ו-4. גובה המנסרה 10. חשבו את שטח הפנים הכולל של המנסרה.&rlm;",
        "options": ["132", "120", "144", "150"],
        "correctAnswer": 0,
        "hint": "שטח הפנים מורכב משני שטחי בסיס ומעטפת שהיא היקף הבסיס כפול גובה המנסרה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את היתר בבסיס.", "math_expression": "c^{2} = 3^{2} + 4^{2} = 25 \\Rightarrow c = 5" },
            { "verbal_explanation": "נחשב את היקף הבסיס.", "math_expression": "P = 3 + 4 + 5 = 12" },
            { "verbal_explanation": "נחשב שטח בסיס בודד.", "math_expression": "S_1 = \\dfrac{3 \\times 4}{2} = 6" },
            { "verbal_explanation": "נרשום משוואה לשטח פנים.", "math_expression": "S = 2 \\times S_1 + P \\times h" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "S = 2 \\times 6 + 12 \\times 10" },
            { "verbal_explanation": "נחשב את המכפלות.", "math_expression": "S = 12 + 120" },
            { "verbal_explanation": "הסכום הסופי התקבל.", "math_expression": "S = 132" }
        ],
        "final_answer": "132"
    },
    {
        "topic": "trigo_space_472",
        "subTopic": "חישובי מעטפת, שטח פנים ונפח של גופים במרחב",
        "question_text": "תיבה מלבנית שבה הממדים הם \\( x \\), \\( 2x \\), ו-\\( 3x \\). הנפח הכללי הוא 48. מהו שטח הפנים שלה?&rlm;",
        "options": ["88", "96", "44", "72"],
        "correctAnswer": 0,
        "hint": "חשבו את הנפח כפונקציה של x, והשוו ל-48 למציאת x. לאחר מכן, הציבו את הממדים בנוסחת שטח פנים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת הנפח במשתנה.", "math_expression": "V = x \\times 2x \\times 3x" },
            { "verbal_explanation": "נבצע את המכפלה.", "math_expression": "V = 6x^{3}" },
            { "verbal_explanation": "נשווה לנפח הנתון.", "math_expression": "6x^{3} = 48" },
            { "verbal_explanation": "נחלק בשש ונוציא שורש שלישי.", "math_expression": "x^{3} = 8 \\Rightarrow x = 2" },
            { "verbal_explanation": "נחשב את הממדים בפועל.", "math_expression": "a = 2 \\quad , \\quad b = 4 \\quad , \\quad c = 6" },
            { "verbal_explanation": "נציב בנוסחת שטח הפנים.", "math_expression": "S = 2(2 \\times 4 + 2 \\times 6 + 4 \\times 6)" },
            { "verbal_explanation": "נחשב את המכפלות הפנימיות.", "math_expression": "S = 2(8 + 12 + 24) = 2(44)" },
            { "verbal_explanation": "הכפלה סופית לקבלת השטח המלא.", "math_expression": "S = 88" }
        ],
        "final_answer": "88"
    }
];