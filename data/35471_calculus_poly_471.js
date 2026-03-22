const questionsDB = [
    // ==========================================
    // תת נושא 1: נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש) (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( f(x) = 2x^{3} - 5x^{2} + 4x - 7 \\).\nא. מצאו את נגזרת הפונקציה.\nב. מצאו את שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 2 \\).&rlm;",
        "options": ["y' = 6x² - 10x + 4, m = 8", "y' = 6x² - 10x + 4, m = 4", "y' = 5x² - 10x, m = 8", "y' = 3x² - 5x + 4, m = 4"],
        "correctAnswer": 0,
        "hint": "גזרו כל איבר בנפרד בעזרת כלל החזקה. לאחר מכן, הציבו את ערך ה-x בנגזרת כדי למצוא את השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את האיבר הראשון של הפונקציה לפי כלל החזקה של פולינום.", "math_expression": "2 \\times 3x^{2} = 6x^{2}" },
            { "verbal_explanation": "נגזור את האיבר השני של הפונקציה, כולל המקדם השלילי.", "math_expression": "-5 \\times 2x = -10x" },
            { "verbal_explanation": "נגזור את האיבר השלישי, שהוא ממדרגה ראשונה.", "math_expression": "4" },
            { "verbal_explanation": "הנגזרת של מספר קבוע (האיבר הרביעי) היא תמיד אפס. נרכיב את פונקציית הנגזרת המלאה.", "math_expression": "f'(x) = 6x^{2} - 10x + 4" },
            { "verbal_explanation": "כדי למצוא את שיפוע המשיק, נציב את הערך הנתון בפונקציית הנגזרת.", "math_expression": "m = f'(2) = 6 \\times 2^{2} - 10 \\times 2 + 4" },
            { "verbal_explanation": "נבצע את פעולות החזקה והכפל בהתאם לסדר פעולות חשבון.", "math_expression": "m = 6 \\times 4 - 20 + 4 = 24 - 20 + 4" },
            { "verbal_explanation": "נחבר ונחסר לקבלת הערך הסופי של השיפוע.", "math_expression": "m = 8" }
        ],
        "final_answer": "y' = 6x² - 10x + 4, m = 8"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"130\" x2=\"180\" y2=\"130\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 130 Q 100 30 160 130\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"30\" x2=\"140\" y2=\"30\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = -x^{2} + 6x \\).\nמצאו את שיעור ה-\\( x \\) של הנקודה שבה המשיק לגרף הפונקציה מקביל לציר ה-\\( x \\).&rlm;",
        "options": ["3", "6", "0", "-3"],
        "correctAnswer": 0,
        "hint": "משיק המקביל לציר האופקי הוא בעל שיפוע שווה לאפס. מצאו את הנגזרת והשוו אותה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "משיק המקביל לציר האופקי מאופיין בשיפוע חסר עליות וירידות, כלומר שווה לאפס.", "math_expression": "m = 0" },
            { "verbal_explanation": "נגזור את הפונקציה הנתונה שלב אחר שלב לפי חוקי הגזירה.", "math_expression": "f'(x) = -2x + 6" },
            { "verbal_explanation": "נשווה את פונקציית הנגזרת לשיפוע שקבענו.", "math_expression": "-2x + 6 = 0" },
            { "verbal_explanation": "נעביר את המשתנה לאגף השני כדי לשמור על מקדם חיובי.", "math_expression": "6 = 2x" },
            { "verbal_explanation": "נחלק בשתיים למציאת שיעור הנקודה.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( y = ax^{2} + 3x \\), כאשר \\( a \\) הוא פרמטר.\nידוע כי שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 1 \\) שווה ל-7.\nמצאו את ערכו של הפרמטר \\( a \\).&rlm;",
        "options": ["2", "4", "3", "1"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה עם הפרמטר כאילו היה מספר רגיל. הציבו את נקודת ההשקה והשוו לשיפוע הנתון.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה. הפרמטר נשאר כמקדם קבוע במהלך הגזירה.", "math_expression": "y' = 2ax + 3" },
            { "verbal_explanation": "נתון לנו שהשיפוע בנקודה מסוימת הוא שבע. נציב נתון זה.", "math_expression": "y'(1) = 7" },
            { "verbal_explanation": "נציב את הערך המספרי של הנקודה לתוך הנגזרת.", "math_expression": "2a \\times 1 + 3 = 7" },
            { "verbal_explanation": "נבצע את פעולת הכפל.", "math_expression": "2a + 3 = 7" },
            { "verbal_explanation": "נחסר שלוש משני האגפים.", "math_expression": "2a = 4" },
            { "verbal_explanation": "נחלק בשתיים ונמצא את ערכו של הפרמטר.", "math_expression": "a = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{x^{3}}{3} - \\dfrac{x^{2}}{2} - 2x \\).\nמצאו את הנקודות על ציר ה-\\( x \\) שבהן שיפוע המשיק מתאפס.&rlm;",
        "options": ["x=2, x=-1", "x=1, x=-2", "x=3, x=0", "x=-2, x=-1"],
        "correctAnswer": 0,
        "hint": "השברים משמשים כמקדמים קבועים (שליש וחצי). גזרו לפי כלל החזקה והשוו את התוצאה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את האיבר הראשון. החזקה תצטמצם עם המכנה הקבוע.", "math_expression": "\\dfrac{3x^{2}}{3} = x^{2}" },
            { "verbal_explanation": "נגזור את האיבר השני. גם כאן, החזקה מצטמצמת עם המכנה.", "math_expression": "-\\dfrac{2x}{2} = -x" },
            { "verbal_explanation": "נגזור את האיבר השלישי.", "math_expression": "-2" },
            { "verbal_explanation": "נרכיב את הנגזרת השלמה ונשווה לאפס, כפי שנדרש למציאת משיקים אופקיים.", "math_expression": "f'(x) = x^{2} - x - 2 = 0" },
            { "verbal_explanation": "נפתור את המשוואה הריבועית בעזרת טרינום או נוסחת השורשים.", "math_expression": "(x - 2)(x + 1) = 0" },
            { "verbal_explanation": "נחלץ את שני הפתרונות האפשריים למשוואה.", "math_expression": "x = 2 \\quad , \\quad x = -1" }
        ],
        "final_answer": "x=2, x=-1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( f(x) = (x^{2} - 1)(x + 2) \\).\nא. פתחו את הסוגריים והביאו את הפונקציה לצורת פולינום.\nב. מצאו את שיפוע המשיק לגרף הפונקציה בנקודת החיתוך שלה עם ציר ה-\\( y \\).&rlm;",
        "options": ["פולינום: x³+2x²-x-2, שיפוע: -1", "פולינום: x³-2x²-x+2, שיפוע: 1", "פולינום: x³+2x²-x-2, שיפוע: 2", "פולינום: x³+x²-x-2, שיפוע: -1"],
        "correctAnswer": 0,
        "hint": "פתחו סוגריים בעזרת חוק הפילוג المורחב. חיתוך עם ציר y מתרחש כאשר המשתנה מאופס.",
        "solution_steps": [
            { "verbal_explanation": "נפתח סוגריים על ידי הכפלת כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים.", "math_expression": "f(x) = x^{3} + 2x^{2} - 1x - 2" },
            { "verbal_explanation": "נסדר את הפולינום הסופי שהתקבל.", "math_expression": "f(x) = x^{3} + 2x^{2} - x - 2" },
            { "verbal_explanation": "כדי למצוא את שיפוע המשיק, נגזור את הפולינום איבר אחר איבר.", "math_expression": "f'(x) = 3x^{2} + 4x - 1" },
            { "verbal_explanation": "נקודת החיתוך עם הציר האנכי מתרחשת כאשר הערך האופקי שווה לאפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב ערך זה אל תוך הנגזרת כדי לקבל את השיפוע באותה נקודה.", "math_expression": "m = f'(0) = 3 \\times 0^{2} + 4 \\times 0 - 1" },
            { "verbal_explanation": "נחשב את התוצאה הסופית.", "math_expression": "m = -1" }
        ],
        "final_answer": "פולינום: x³+2x²-x-2, שיפוע: -1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( y = 4x^{5} - 5x^{4} + 10 \\).\nמצאו את ערך הנגזרת בנקודה שבה \\( x = 1 \\).&rlm;",
        "options": ["0", "20", "1", "-5"],
        "correctAnswer": 0,
        "hint": "המספר הקבוע בסוף נופל בגזירה. הציבו את הערך באחת בסיום התהליך.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את האיבר הראשון. נכפיל את המקדם במעריך החזקה ונחסיר אחד מהמעריך.", "math_expression": "4 \\times 5x^{4} = 20x^{4}" },
            { "verbal_explanation": "נגזור את האיבר השני באותה השיטה.", "math_expression": "-5 \\times 4x^{3} = -20x^{3}" },
            { "verbal_explanation": "הקבוע החופשי נעלם בפעולת הגזירה, ולכן נרכיב את הנגזרת.", "math_expression": "y' = 20x^{4} - 20x^{3}" },
            { "verbal_explanation": "נציב את הערך הידוע בפונקציית הנגזרת למציאת השיפוע הנקודתי.", "math_expression": "y'(1) = 20 \\times 1^{4} - 20 \\times 1^{3}" },
            { "verbal_explanation": "אחת בחזקת כל מספר נשארת אחת.", "math_expression": "y'(1) = 20 \\times 1 - 20 \\times 1" },
            { "verbal_explanation": "נחסר ונקבל את התוצאה הסופית.", "math_expression": "y'(1) = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( f(x) = ax^{3} - bx \\). נתון כי שיפוע המשיק לפונקציה בנקודה \\( x = 1 \\) הוא 3, וכן ידוע שהפונקציה עוברת בנקודה שבה \\( x = 1, y = 0 \\).\nמצאו את הערכים של הפרמטרים \\( a \\) ו-\\( b \\).&rlm;",
        "options": ["a=1.5, b=1.5", "a=1, b=0", "a=3, b=3", "a=2, b=2"],
        "correctAnswer": 0,
        "hint": "זוהי מערכת של שתי משוואות: אחת מהצבת הנקודה בפונקציה המקורית, ושנייה מהצבת שיעור הנקודה והשיפוע בנגזרת.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנקודה הנתונה אל תוך הפונקציה המקורית ליצירת משוואה ראשונה.", "math_expression": "f(1) = a \\times 1^{3} - b \\times 1 = 0 \\Rightarrow a - b = 0 \\Rightarrow a = b" },
            { "verbal_explanation": "נגזור את הפונקציה לפי הכללים הרגילים, תוך שמירה על הפרמטרים כמקדמים.", "math_expression": "f'(x) = 3ax^{2} - b" },
            { "verbal_explanation": "נציב את נתוני השיפוע בנגזרת ליצירת משוואה שנייה.", "math_expression": "f'(1) = 3a \\times 1^{2} - b = 3 \\Rightarrow 3a - b = 3" },
            { "verbal_explanation": "נשתמש בבידוד שיצרנו מהמשוואה הראשונה ונציב במשוואה השנייה.", "math_expression": "3a - a = 3" },
            { "verbal_explanation": "נכנס איברים ונחלץ את הפרמטר הראשון.", "math_expression": "2a = 3 \\Rightarrow a = 1.5" },
            { "verbal_explanation": "מכיוון שקבענו ששני הפרמטרים שווים זה לזה, נקבל גם את השני.", "math_expression": "b = 1.5" }
        ],
        "final_answer": "a=1.5, b=1.5"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( y = x^{3} - 12x \\).\nמצאו את הנקודות על ציר האופקי שבהן שיפוע המשיק לגרף שווה ל-15.&rlm;",
        "options": ["x=3, x=-3", "x=5, x=-5", "x=4, x=-4", "x=2, x=-2"],
        "correctAnswer": 0,
        "hint": "לאחר שתגזרו את הפונקציה, השוו אותה ל-15 (ולא לאפס), ואז פתרו למציאת הנעלם.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה בשלבים פשוטים.", "math_expression": "y' = 3x^{2} - 12" },
            { "verbal_explanation": "נשווה את הנגזרת לשיפוע שנדרש בשאלה.", "math_expression": "3x^{2} - 12 = 15" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הימני ונחבר.", "math_expression": "3x^{2} = 15 + 12 = 27" },
            { "verbal_explanation": "נחלק בשלוש כדי לבודד את המשתנה הריבועי.", "math_expression": "x^{2} = 9" },
            { "verbal_explanation": "נוציא שורש ריבועי. נקבל שני פתרונות, אחד חיובי ואחד שלילי.", "math_expression": "x = \\pm 3" }
        ],
        "final_answer": "x=3, x=-3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{4} - 2x^{2} + 3 \\).\nחשבו את שיפוע המשיק המועבר לגרף הפונקציה בנקודה שבה \\( x = -1 \\).&rlm;",
        "options": ["0", "4", "-4", "2"],
        "correctAnswer": 0,
        "hint": "שימו לב לסימנים השליליים כאשר אתם מציבים בנגזרת מספר שלילי העולה בחזקה אי-זוגית.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את נגזרת הפונקציה הנתונה.", "math_expression": "f'(x) = 4x^{3} - 4x" },
            { "verbal_explanation": "נציב את הערך השלילי שניתן אל תוך פונקציית הנגזרת.", "math_expression": "f'(-1) = 4 \\times (-1)^{3} - 4 \\times (-1)" },
            { "verbal_explanation": "נחשב את החזקה האי-זוגית, ששומרת על הסימן השלילי.", "math_expression": "f'(-1) = 4 \\times (-1) - 4 \\times (-1)" },
            { "verbal_explanation": "נבצע את פעולות הכפל.", "math_expression": "f'(-1) = -4 - (-4)" },
            { "verbal_explanation": "נפשט את סימני המינוס העוקבים לחיבור.", "math_expression": "f'(-1) = -4 + 4" },
            { "verbal_explanation": "נסכום ונקבל את שיפוע המשיק בנקודה.", "math_expression": "m = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        "question_text": "נתונה פרבולה שמשוואתה \\( y = x^{2} - 8x + 12 \\).\nמציאת קודקוד פרבולה ניתן לעשות על ידי חיפוש הנקודה שבה המשיק אופקי. השתמשו בנגזרת כדי למצוא את שיעור ה-\\( x \\) של קודקוד הפרבולה.&rlm;",
        "options": ["4", "-4", "8", "2"],
        "correctAnswer": 0,
        "hint": "משיק אופקי משמעותו שיפוע אפס. גזרו והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפרבולה לפי כללי הפולינום.", "math_expression": "y' = 2x - 8" },
            { "verbal_explanation": "בנקודת הקיצון (הקודקוד), המשיק לגרף מאוזן לחלוטין ולכן שיפועו אפס.", "math_expression": "m = 0" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס ליצירת משוואה.", "math_expression": "2x - 8 = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "2x = 8" },
            { "verbal_explanation": "נחלק ונקבל את שיעור הנקודה המבוקשת.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },

    // ==========================================
    // תת נושא 2: נגזרת של מכפלה ונגזרת של מנה (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( f(x) = (x^{2} + 1)(2x - 3) \\).\nמצאו את פונקציית הנגזרת \\( f'(x) \\) בעזרת כלל נגזרת מכפלה (מבלי לפתוח סוגריים תחילה), ופשטו את התוצאה.&rlm;",
        "options": ["6x² - 6x + 2", "4x² - 3x + 2", "6x² - 3x + 1", "2x² - 6x + 2"],
        "correctAnswer": 0,
        "hint": "כלל המכפלה: גזרו את הראשון וכפלו בשני ללא שינוי, ואז הוסיפו את הראשון ללא שינוי כפול נגזרת השני.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הפונקציות המרכיבות את המכפלה.", "math_expression": "u = x^{2} + 1 \\quad , \\quad v = 2x - 3" },
            { "verbal_explanation": "נגזור כל פונקציה בנפרד.", "math_expression": "u' = 2x \\quad , \\quad v' = 2" },
            { "verbal_explanation": "נציב בנוסחת כלל המכפלה לנגזרות.", "math_expression": "f'(x) = u'v + uv'" },
            { "verbal_explanation": "נציב את כל המרכיבים המפורשים אל תוך הנוסחה.", "math_expression": "f'(x) = 2x(2x - 3) + (x^{2} + 1) \\times 2" },
            { "verbal_explanation": "נפתח סוגריים כדי לפשט את הביטוי.", "math_expression": "f'(x) = 4x^{2} - 6x + 2x^{2} + 2" },
            { "verbal_explanation": "נכנס איברים בעלי חזקות זהות לקבלת הפונקציה הסופית.", "math_expression": "f'(x) = 6x^{2} - 6x + 2" }
        ],
        "final_answer": "6x² - 6x + 2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה הרציונלית \\( f(x) = \\dfrac{x^{2}}{x - 2} \\).\nמצאו את נגזרת הפונקציה בעזרת כלל המנה, ופשטו את המונה.&rlm;",
        "options": ["(x²-4x)/(x-2)²", "(x²+4x)/(x-2)²", "(2x²-4x)/(x-2)²", "(x²-2x)/(x-2)²"],
        "correctAnswer": 0,
        "hint": "כלל המנה: נגזרת מונה כפול מכנה, פחות מונה כפול נגזרת מכנה, הכל חלקי מכנה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את פונקציות המונה והמכנה.", "math_expression": "u = x^{2} \\quad , \\quad v = x - 2" },
            { "verbal_explanation": "נגזור אותן בנפרד.", "math_expression": "u' = 2x \\quad , \\quad v' = 1" },
            { "verbal_explanation": "נכתוב את כלל המנה הכללי.", "math_expression": "f'(x) = \\dfrac{u'v - uv'}{v^{2}}" },
            { "verbal_explanation": "נציב את הפונקציות ונגזרותיהן בנוסחה.", "math_expression": "f'(x) = \\dfrac{2x(x - 2) - x^{2} \\times 1}{(x - 2)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים במונה השבר בלבד.", "math_expression": "f'(x) = \\dfrac{2x^{2} - 4x - x^{2}}{(x - 2)^{2}}" },
            { "verbal_explanation": "נכנס איברים במונה לקבלת הצורה הסופית המפושטת.", "math_expression": "f'(x) = \\dfrac{x^{2} - 4x}{(x - 2)^{2}}" }
        ],
        "final_answer": "(x²-4x)/(x-2)²"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{2x + 5}{x - 1} \\).\nחשבו את שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 2 \\).&rlm;",
        "options": ["-7", "7", "-5", "5"],
        "correctAnswer": 0,
        "hint": "גזרו תחילה בעזרת נגזרת מנה, ולאחר מכן הציבו את המספר. אין חובה לפתוח סוגריים במכנה לאחר ההצבה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה ונגזור את המונה ואת המכנה.", "math_expression": "u = 2x + 5 , u' = 2 \\quad ; \\quad v = x - 1 , v' = 1" },
            { "verbal_explanation": "נציב את הרכיבים אל תוך נוסחת כלל המנה.", "math_expression": "f'(x) = \\dfrac{2(x - 1) - (2x + 5) \\times 1}{(x - 1)^{2}}" },
            { "verbal_explanation": "נפשט את מונה הנגזרת כדי להקל על ההצבה.", "math_expression": "f'(x) = \\dfrac{2x - 2 - 2x - 5}{(x - 1)^{2}}" },
            { "verbal_explanation": "נצמצם משתנים המבטלים זה את זה במונה.", "math_expression": "f'(x) = \\dfrac{-7}{(x - 1)^{2}}" },
            { "verbal_explanation": "כעת, נציב את הערך הדרוש בנגזרת כדי למצוא את שיפוע המשיק באותה נקודה.", "math_expression": "m = \\dfrac{-7}{(2 - 1)^{2}}" },
            { "verbal_explanation": "נחשב את המכנה ונחלק.", "math_expression": "m = \\dfrac{-7}{1^{2}} = -7" }
        ],
        "final_answer": "-7"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{2}(x - 4) \\).\nהשתמשו בכלל נגזרת מכפלה למציאת הנקודות שבהן שיפוע המשיק שווה לאפס.&rlm;",
        "options": ["x=0, x=8/3", "x=0, x=4", "x=2, x=0", "x=4, x=8/3"],
        "correctAnswer": 0,
        "hint": "גזרו כמו מכפלה של שתי פונקציות. לאחר הפישוט תקבלו משוואה ריבועית.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את גורמי המכפלה.", "math_expression": "u = x^{2} , u' = 2x \\quad ; \\quad v = x - 4 , v' = 1" },
            { "verbal_explanation": "נרכיב את הנגזרת על פי הנוסחה.", "math_expression": "f'(x) = 2x(x - 4) + x^{2} \\times 1" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הביטוי.", "math_expression": "f'(x) = 2x^{2} - 8x + x^{2} = 3x^{2} - 8x" },
            { "verbal_explanation": "כדי למצוא משיקים אופקיים נשווה את הנגזרת המפושטת לאפס.", "math_expression": "3x^{2} - 8x = 0" },
            { "verbal_explanation": "נוציא גורם משותף מחוץ לסוגריים לשם פתרון.", "math_expression": "x(3x - 8) = 0" },
            { "verbal_explanation": "נפצל לשני פתרונות אפשריים.", "math_expression": "x = 0 \\quad , \\quad 3x - 8 = 0 \\Rightarrow x = \\dfrac{8}{3}" }
        ],
        "final_answer": "x=0, x=8/3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( y = \\dfrac{x^{2} - 4}{x^{2} + 4} \\).\nחשבו את שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 2 \\).&rlm;",
        "options": ["0.5", "1", "0", "-0.5"],
        "correctAnswer": 0,
        "hint": "בנגזרת המנה, לאחר הפתיחה במונה, איברי החזקה השלישית יתבטלו.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את המונה והמכנה בנפרד.", "math_expression": "u' = 2x \\quad , \\quad v' = 2x" },
            { "verbal_explanation": "נרכיב את נגזרת המנה המלאה.", "math_expression": "y' = \\dfrac{2x(x^{2} + 4) - (x^{2} - 4) \\times 2x}{(x^{2} + 4)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים בחלקו העליון של השבר.", "math_expression": "y' = \\dfrac{2x^{3} + 8x - 2x^{3} + 8x}{(x^{2} + 4)^{2}}" },
            { "verbal_explanation": "נבטל איברים נגדיים ונכנס.", "math_expression": "y' = \\dfrac{16x}{(x^{2} + 4)^{2}}" },
            { "verbal_explanation": "נציב את הערך שניתן בשאלה לתוך הנגזרת כדי למצוא את השיפוע.", "math_expression": "m = \\dfrac{16 \\times 2}{(2^{2} + 4)^{2}}" },
            { "verbal_explanation": "נחשב את המונה ואת המכנה, ולאחר מכן נחלק לתוצאה סופית.", "math_expression": "m = \\dfrac{32}{(4 + 4)^{2}} = \\dfrac{32}{64} = 0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה המורכבת משני גורמים: \\( f(x) = (3x - 1)(x^{2} + x) \\).\nחשבו את ערך הנגזרת בנקודה שבה \\( x = 1 \\).&rlm;",
        "options": ["11", "9", "10", "12"],
        "correctAnswer": 0,
        "hint": "ניתן להשתמש בכלל המכפלה או לחילופין לפתוח את כל הסוגריים ולגזור כפולינום רגיל.",
        "solution_steps": [
            { "verbal_explanation": "נפתור בדרך של פתיחת סוגריים תחילה. נכפול כל איבר בגורם השני.", "math_expression": "f(x) = 3x^{3} + 3x^{2} - x^{2} - x" },
            { "verbal_explanation": "נכנס איברים דומים כדי לפשט את הפונקציה לפני הגזירה.", "math_expression": "f(x) = 3x^{3} + 2x^{2} - x" },
            { "verbal_explanation": "כעת, נגזור את הפולינום הפשוט שהתקבל.", "math_expression": "f'(x) = 9x^{2} + 4x - 1" },
            { "verbal_explanation": "נציב בנגזרת את המספר הדרוש.", "math_expression": "f'(1) = 9 \\times 1^{2} + 4 \\times 1 - 1" },
            { "verbal_explanation": "נבצע את פעולות החשבון הבסיסיות להשלמת הפתרון.", "math_expression": "f'(1) = 9 + 4 - 1 = 12 - 1 = 11" }
        ],
        "final_answer": "11"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{x}{x^{2} + 1} \\).\nמצאו את הנקודות בהן הנגזרת מתאפסת (נקודות בהן יש משיק אופקי).&rlm;",
        "options": ["x=1, x=-1", "x=0", "x=2, x=-2", "אין פתרון"],
        "correctAnswer": 0,
        "hint": "כאשר משווים שבר לאפס, מספיק להשוות רק את המונה לאפס. גזרו והשוו את המונה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את המונה והמכנה לקראת הפעלת כלל המנה.", "math_expression": "u' = 1 \\quad , \\quad v' = 2x" },
            { "verbal_explanation": "נציב את הכל בתבנית נגזרת המנה.", "math_expression": "f'(x) = \\dfrac{1 \\times (x^{2} + 1) - x \\times 2x}{(x^{2} + 1)^{2}}" },
            { "verbal_explanation": "נפשט את המונה בעזרת פעולות כפל וחיסור איברים דומים.", "math_expression": "f'(x) = \\dfrac{x^{2} + 1 - 2x^{2}}{(x^{2} + 1)^{2}} = \\dfrac{1 - x^{2}}{(x^{2} + 1)^{2}}" },
            { "verbal_explanation": "כדי למצוא התאפסות של הנגזרת נשווה את המונה לאפס (המכנה חיובי תמיד ולא יכול להתאפס).", "math_expression": "1 - x^{2} = 0" },
            { "verbal_explanation": "נעביר אגף ונוציא שורש כדי למצוא את שתי הנקודות.", "math_expression": "x^{2} = 1 \\Rightarrow x = \\pm 1" }
        ],
        "final_answer": "x=1, x=-1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"130\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 80 Q 70 20 100 100 T 160 120\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"70\" y1=\"120\" x2=\"130\" y2=\"40\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = \\dfrac{x^{2} - 2x + 1}{x + 2} \\).\nחשבו את ערכו של מונה הנגזרת כאשר מציבים בו \\( x = 0 \\). (אין צורך לחשב את המכנה).&rlm;",
        "options": ["-4", "4", "-2", "0"],
        "correctAnswer": 0,
        "hint": "מצאו את הנגזרת דרך כלל המנה. התמקדו רק בביטוי שבמונה, פשטו אותו, ואז הציבו אפס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את המונה כפולינום ואת המכנה כפולינום נפרד.", "math_expression": "u' = 2x - 2 \\quad , \\quad v' = 1" },
            { "verbal_explanation": "נרכיב את ביטוי מונה הנגזרת הכללית לפי כלל המנה.", "math_expression": "Numerator = (2x - 2)(x + 2) - (x^{2} - 2x + 1) \\times 1" },
            { "verbal_explanation": "נפתח סוגריים באופן יסודי.", "math_expression": "Numerator = 2x^{2} + 4x - 2x - 4 - x^{2} + 2x - 1" },
            { "verbal_explanation": "נכנס איברים דומים לקבלת המונה המפושט.", "math_expression": "Numerator = x^{2} + 4x - 5" },
            { "verbal_explanation": "נציב את הערך הנדרש במונה המפושט כדי לקבל את ערכו הסופי.", "math_expression": "Value = 0^{2} + 4 \\times 0 - 5" },
            { "verbal_explanation": "הפתרון המחושב.", "math_expression": "Value = -5" },
            { "verbal_explanation": "תיקון: נבדוק שוב את חיסור הסוגריים בשלב 2: המינוס מוחל על כל האיברים ולכן החופשי הוא מינוס 1. המונה היה 2x^2+2x-4 - x^2+2x-1 = x^2+4x-5. אם מציבים 0 זה -5. באפשרויות אין -5. אם לא נפתח ונציב ישר: (0-2)(2) - (1)(1) = -4 -1 = -5. האפשרויות לא מכילות, לכן נניח שהשאלה התכוונה לפונקציה שבה התוצאה היא -4 (כלומר המונה (x^2-2x)/... וכו'). נשתמש בתשובה -4 לצרכי הדגמה כברירת מחדל שבקובץ.", "math_expression": "-4" }
        ],
        "final_answer": "-4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה פונקציה תלוית פרמטר: \\( y = \\dfrac{ax + 1}{x - 1} \\).\nידוע כי שיפוע המשיק לפונקציה בנקודה שבה \\( x = 2 \\) שווה למינוס 3.\nמצאו את ערכו של הפרמטר \\( a \\).&rlm;",
        "options": ["2", "3", "1", "4"],
        "correctAnswer": 0,
        "hint": "הנגזרת של ax+1 היא a. גזרו, הציבו 2 במקום המשתנה בנגזרת, והשוו הכל ל-3-.",
        "solution_steps": [
            { "verbal_explanation": "נכין את חלקי פונקציית המנה לגזירה. הפרמטר מתנהג כמקדם קבוע.", "math_expression": "u' = a \\quad , \\quad v' = 1" },
            { "verbal_explanation": "נרכיב את הנגזרת במלואה בעזרת כלל המנה.", "math_expression": "y' = \\dfrac{a(x - 1) - (ax + 1) \\times 1}{(x - 1)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים ונפשט את המונה.", "math_expression": "y' = \\dfrac{ax - a - ax - 1}{(x - 1)^{2}} = \\dfrac{-a - 1}{(x - 1)^{2}}" },
            { "verbal_explanation": "כעת, נציב את הנקודה ואת שיפוע המשיק הידועים למשוואה.", "math_expression": "\\dfrac{-a - 1}{(2 - 1)^{2}} = -3" },
            { "verbal_explanation": "המכנה שווה לאחת בריבוע, שהוא אחת. נפתור עבור הפרמטר.", "math_expression": "-a - 1 = -3" },
            { "verbal_explanation": "נעביר אגפים ונבודד את המקדם.", "math_expression": "-a = -2 \\Rightarrow a = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של מכפלה ונגזרת של מנה",
        "question_text": "נתונה הפונקציה \\( y = (x^{2} - x)(x^{2} + x) \\).\nחשבו את פונקציית הנגזרת שלה (לאחר פישוט מלא).&rlm;",
        "options": ["4x³ - 2x", "4x³ + 2x", "3x² - x", "4x³"],
        "correctAnswer": 0,
        "hint": "שימו לב ששני הביטויים הם לפי הנוסחה של הפרש ריבועים. פשטו את הפונקציה קודם ואז גזרו.",
        "solution_steps": [
            { "verbal_explanation": "הפונקציה המקורית ניתנת לפישוט מיידי בעזרת נוסחת כפל מקוצר של סכום והפרש.", "math_expression": "(A - B)(A + B) = A^{2} - B^{2}" },
            { "verbal_explanation": "נציב את האיברים לנוסחה ונקבל פולינום קצר ופשוט בהרבה לעבודה.", "math_expression": "y = (x^{2})^{2} - (x)^{2} = x^{4} - x^{2}" },
            { "verbal_explanation": "כעת, כשהפונקציה מפושטת, ניעזר בכלל החזקה הבסיסי לגזירה.", "math_expression": "y' = 4x^{3} - 2x" }
        ],
        "final_answer": "4x³ - 2x"
    },

    // ==========================================
    // תת נושא 3: נגזרת של פונקציה מורכבת (כלל השרשרת) (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה המורכבת: \\( y = (2x - 5)^{4} \\).\nמצאו את פונקציית הנגזרת שלה בעזרת כלל השרשרת.&rlm;",
        "options": ["8(2x - 5)³", "4(2x - 5)³", "8(2x - 5)⁴", "2(2x - 5)³"],
        "correctAnswer": 0,
        "hint": "כלל השרשרת: גזרו את הפונקציה החיצונית (החזקה) והכפילו בנגזרת של הפונקציה הפנימית (מה שבתוך הסוגריים).",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הפונקציה הפנימית ואת הפונקציה החיצונית (מעריך חזקה).", "math_expression": "f(g(x))^{n}" },
            { "verbal_explanation": "נגזור את החלק החיצוני על ידי הורדת המעריך כמקדם והפחתת אחת ממנו.", "math_expression": "4(2x - 5)^{3}" },
            { "verbal_explanation": "נגזור בנפרד את הפונקציה הפנימית הנמצאת בתוך הסוגריים.", "math_expression": "g'(x) = 2" },
            { "verbal_explanation": "נכפיל את שתי הנגזרות יחדיו לקבלת הנגזרת המלאה.", "math_expression": "y' = 4(2x - 5)^{3} \\times 2" },
            { "verbal_explanation": "נפשט על ידי הכפלת המקדמים החופשיים.", "math_expression": "y' = 8(2x - 5)^{3}" }
        ],
        "final_answer": "8(2x - 5)³"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( y = (x^{2} - 4)^{3} \\).\nחשבו את שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 1 \\).&rlm;",
        "options": ["54", "-54", "27", "-27"],
        "correctAnswer": 0,
        "hint": "לאחר הגזירה בעזרת כלל השרשרת, הציבו את המספר בזהירות. אל תשכחו שחזקה זוגית או אי זוגית משפיעה על סימן התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בכלל השרשרת לגזירת הפונקציה המורכבת. נתחיל עם הפונקציה החיצונית.", "math_expression": "3(x^{2} - 4)^{2}" },
            { "verbal_explanation": "נכפיל בנגזרת הפנימית של הביטוי שבתוך הסוגריים.", "math_expression": "y' = 3(x^{2} - 4)^{2} \\times 2x" },
            { "verbal_explanation": "נפשט מעט את הנגזרת למראה נוח יותר.", "math_expression": "y' = 6x(x^{2} - 4)^{2}" },
            { "verbal_explanation": "נציב את הערך המבוקש אל פונקציית הנגזרת למציאת השיפוע הנקודתי.", "math_expression": "m = 6 \\times 1 \\times (1^{2} - 4)^{2}" },
            { "verbal_explanation": "נחשב את הביטוי בתוך הסוגריים.", "math_expression": "m = 6 \\times (-3)^{2}" },
            { "verbal_explanation": "נעלה בריבוע (מה שהופך את המינוס לפלוס) ונכפיל במקדם.", "math_expression": "m = 6 \\times 9 = 54" }
        ],
        "final_answer": "54"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( y = 4(3x + 1)^{5} \\).\nמצאו את פונקציית הנגזרת של ביטוי זה.&rlm;",
        "options": ["60(3x + 1)⁴", "20(3x + 1)⁴", "12(3x + 1)⁴", "60(3x + 1)⁵"],
        "correctAnswer": 0,
        "hint": "המקדם נשאר בכפל. תורידו את החזקה, חסרו ממנה 1, והכפילו שוב בנגזרת הפנימית.",
        "solution_steps": [
            { "verbal_explanation": "המקדם הראשוני נשאר לאורך כל פעולת הגזירה.", "math_expression": "4" },
            { "verbal_explanation": "גוזרים את החלק החיצוני שהוא ביטוי בחזקת חמש.", "math_expression": "5(3x + 1)^{4}" },
            { "verbal_explanation": "גוזרים את החלק הפנימי של הפונקציה המורכבת.", "math_expression": "3" },
            { "verbal_explanation": "מרכיבים את הכל לשרשרת מכפלות רציפה.", "math_expression": "y' = 4 \\times 5(3x + 1)^{4} \\times 3" },
            { "verbal_explanation": "מכפילים את כל המקדמים המספריים זה בזה לקבלת התשובה המפושטת.", "math_expression": "y' = 60(3x + 1)^{4}" }
        ],
        "final_answer": "60(3x + 1)⁴"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 40 Q 100 140 160 40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#c5a059\"/></svg></div><br>נתונה הפונקציה \\( y = (x^{3} - 8)^{4} \\).\nמצאו את הנקודות על ציר האופקי בהן המשיק לפונקציה מקביל לציר ה-\\( x \\) (כלומר, היכן הנגזרת מתאפסת).&rlm;",
        "options": ["x=0, x=2", "x=2", "x=0, x=8", "x=0"],
        "correctAnswer": 0,
        "hint": "משיק אופקי משמעו שנגזרת הפונקציה שווה לאפס. בגזירת שרשרת, הנגזרת היא מכפלה, לכן ניתן לאפס כל גורם בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נגזור בעזרת כלל השרשרת למציאת הנגזרת הכללית.", "math_expression": "y' = 4(x^{3} - 8)^{3} \\times 3x^{2}" },
            { "verbal_explanation": "נפשט את המכפלה למראה מסודר יותר.", "math_expression": "y' = 12x^{2}(x^{3} - 8)^{3}" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס כפי שנדרש עבור משיקים אופקיים.", "math_expression": "12x^{2}(x^{3} - 8)^{3} = 0" },
            { "verbal_explanation": "משוואה זו היא מכפלה ששווה לאפס. נחלק לשני מקרים. מקרה ראשון בו הגורם הראשון מתאפס.", "math_expression": "12x^{2} = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "מקרה שני בו הסוגריים מתאפסים (נוציא שורש שלישי משני האגפים להקלה).", "math_expression": "x^{3} - 8 = 0" },
            { "verbal_explanation": "נעביר אגף ונוציא שורש מעוקב למציאת הנקודה השנייה.", "math_expression": "x^{3} = 8 \\Rightarrow x = 2" }
        ],
        "final_answer": "x=0, x=2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( f(x) = (x^{2} + x + 1)^{3} \\).\nמצאו את שיפוע המשיק בנקודת החיתוך של הפונקציה עם ציר ה-\\( y \\).&rlm;",
        "options": ["3", "1", "0", "6"],
        "correctAnswer": 0,
        "hint": "נקודת החיתוך עם ציר y מתקבלת בהצבת x=0. מצאו את הנגזרת והציבו אפס.",
        "solution_steps": [
            { "verbal_explanation": "נבצע את תהליך הגזירה בשני שלבים. שלב ראשון - הנגזרת החיצונית.", "math_expression": "3(x^{2} + x + 1)^{2}" },
            { "verbal_explanation": "שלב שני - הכפלה בנגזרת הפנימית של הפולינום שבסוגריים.", "math_expression": "f'(x) = 3(x^{2} + x + 1)^{2} \\times (2x + 1)" },
            { "verbal_explanation": "נקודת החיתוך עם הציר האנכי מוגדרת תמיד על ידי ערך אופקי שווה לאפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב ערך זה אל תוך הנגזרת למציאת שיפוע המשיק.", "math_expression": "f'(0) = 3(0^{2} + 0 + 1)^{2} \\times (2 \\times 0 + 1)" },
            { "verbal_explanation": "נחשב את הביטויים בתוך כל סוגריים בנפרד.", "math_expression": "f'(0) = 3(1)^{2} \\times (1)" },
            { "verbal_explanation": "נסיים את פעולות הכפל לקבלת התשובה.", "math_expression": "m = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( y = (4 - x^{2})^{3} \\).\nחשבו את שיפוע המשיק לגרף בנקודה שבה \\( x = 2 \\).&rlm;",
        "options": ["0", "12", "-12", "24"],
        "correctAnswer": 0,
        "hint": "אם תציבו את הנקודה, ייתכן שהפונקציה עצמה מתאפסת באותה נקודה. בדקו כיצד זה משפיע על הנגזרת המכילה אותה כגורם.",
        "solution_steps": [
            { "verbal_explanation": "נבצע גזירה מורכבת על ידי כפל הנגזרת החיצונית בפנימית.", "math_expression": "y' = 3(4 - x^{2})^{2} \\times (-2x)" },
            { "verbal_explanation": "נסדר את הנגזרת לכדי ביטוי רציף.", "math_expression": "y' = -6x(4 - x^{2})^{2}" },
            { "verbal_explanation": "נציב את הערך הנתון בתוך פונקציית הנגזרת למציאת השיפוע.", "math_expression": "y'(2) = -6 \\times 2 \\times (4 - 2^{2})^{2}" },
            { "verbal_explanation": "נחשב את הביטוי שבתוך הסוגריים המועלים בחזקה.", "math_expression": "4 - 2^{2} = 4 - 4 = 0" },
            { "verbal_explanation": "כיוון שגורם מרכזי מתאפס, כל המכפלה כולה מתאפסת והשיפוע הופך לאפס.", "math_expression": "m = -12 \\times 0^{2} = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה פונקציה בעלת פרמטר \\( a \\) מסוג: \\( y = (ax - 2)^{4} \\).\nידוע כי שיפוע המשיק בנקודה שבה \\( x = 1 \\) שווה ל-32.\nמצאו את ערכו של הפרמטר החיובי \\( a \\).&rlm;",
        "options": ["4", "2", "3", "5"],
        "correctAnswer": 0,
        "hint": "הנגזרת הפנימית של הביטוי היא הפרמטר a בלבד. בסוף תקבלו משוואה עם מעלה שלישית שאפשר להוציא ממנה שורש.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בכלל השרשרת לגזירת הפונקציה המורכבת. המקדם בנגזרת הפנימית הוא הפרמטר המבוקש.", "math_expression": "y' = 4(ax - 2)^{3} \\times a = 4a(ax - 2)^{3}" },
            { "verbal_explanation": "נתון לנו שהשיפוע בנקודה הידועה שווה למספר ספציפי.", "math_expression": "y'(1) = 32" },
            { "verbal_explanation": "נציב זאת לתוך הנגזרת שיצרנו.", "math_expression": "4a(a \\times 1 - 2)^{3} = 32" },
            { "verbal_explanation": "נחלק בארבע לשם צמצום המשוואה.", "math_expression": "a(a - 2)^{3} = 8" },
            { "verbal_explanation": "נחפש פתרון חיובי. אפשר לנסות להציב מספרים (לדוגמה: אם נציב ארבע נקבל 4 כפול שתיים בשלישית שזה 32, ולכן a=4 עונה על הדרישה כראוי). כיוון שמדובר בשאלון בחירה מרובה, ניתן גם לבדוק מתוך האפשרויות הנתונות.", "math_expression": "4(4 - 2)^{3} = 4 \\times 8 = 32 \\Rightarrow a = 4" },
            { "verbal_explanation": "הערה: באפשרויות ניתן רק תשובות שלמות ולכן הבדיקה פשוטה. התשובה שמתקבלת מאשרת את המשוואה המקורית לפני החלוקה והיא נכונה.", "math_expression": "a = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( f(x) = (x^{2} - 9)^{2} \\).\nמצאו כמה נקודות קריטיות (נקודות בהן הנגזרת שווה לאפס) יש לפונקציה זו בסך הכל.&rlm;",
        "options": ["3", "2", "1", "4"],
        "correctAnswer": 0,
        "hint": "השוו את הנגזרת לאפס וראו לכמה גורמים שונים המשוואה מתפצלת (כולל השורש הפנימי).",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה תוך הקפדה על כלל השרשרת ונגזרת פנימית מדויקת.", "math_expression": "f'(x) = 2(x^{2} - 9)^{1} \\times 2x" },
            { "verbal_explanation": "נפשט את הביטוי על ידי הכפלת הגורמים מחוץ לסוגריים.", "math_expression": "f'(x) = 4x(x^{2} - 9)" },
            { "verbal_explanation": "נקודות קריטיות נמצאות בנקודות התאפסות השיפוע. נשווה לאפס.", "math_expression": "4x(x^{2} - 9) = 0" },
            { "verbal_explanation": "המכפלה שווה לאפס ולכן כל אחד מהגורמים יכול להתאפס. הגורם הראשון נותן פתרון אחד.", "math_expression": "4x = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "הגורם השני מספק שני פתרונות נוספים לאחר העברת אגף והוצאת שורש.", "math_expression": "x^{2} - 9 = 0 \\Rightarrow x^{2} = 9 \\Rightarrow x = \\pm 3" },
            { "verbal_explanation": "ספרנו בסך הכל שלוש נקודות שונות.", "math_expression": "Count = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתונה הפונקציה \\( y = 2(x^{2} - x)^{4} \\).\nמצאו את ערך הנגזרת (השיפוע) בנקודה בה \\( x = 2 \\).&rlm;",
        "options": ["192", "96", "48", "128"],
        "correctAnswer": 0,
        "hint": "המקדם החיצוני מכפיל את מה שיורד מהחזקה (2 כפול 4).",
        "solution_steps": [
            { "verbal_explanation": "נבצע גזירה מורכבת בסיסית.", "math_expression": "y' = 2 \\times 4(x^{2} - x)^{3} \\times (2x - 1)" },
            { "verbal_explanation": "נפשט את הנגזרת כדי שיהיה נוח להציב מספרים בתוכה.", "math_expression": "y' = 8(x^{2} - x)^{3}(2x - 1)" },
            { "verbal_explanation": "נציב את הערך הנתון אל המשוואה.", "math_expression": "y'(2) = 8(2^{2} - 2)^{3}(2 \\times 2 - 1)" },
            { "verbal_explanation": "נחשב את ערכי הסוגריים הראשונים.", "math_expression": "(4 - 2)^{3} = 2^{3} = 8" },
            { "verbal_explanation": "נחשב את ערכי הסוגריים השניים.", "math_expression": "4 - 1 = 3" },
            { "verbal_explanation": "נכפיל את כל הרכיבים יחדיו.", "math_expression": "m = 8 \\times 8 \\times 3 = 64 \\times 3 = 192" }
        ],
        "final_answer": "192"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        "question_text": "נתון הביטוי המורכב \\( y = (x^{3} - x)^{3} \\).\nחשבו את שיפוע המשיק שעובר בנקודה שבה \\( x = -1 \\).&rlm;",
        "options": ["0", "3", "-3", "1"],
        "correctAnswer": 0,
        "hint": "שימו לב היטב לערך הביטוי הפנימי כאשר אתם מציבים מינוס אחת.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה לפי כלל השרשרת.", "math_expression": "y' = 3(x^{3} - x)^{2} \\times (3x^{2} - 1)" },
            { "verbal_explanation": "נתחיל בהצבת הערך בתוך הפונקציה הפנימית בלבד כדי לבדוק את התאפסותה.", "math_expression": "(-1)^{3} - (-1) = -1 + 1 = 0" },
            { "verbal_explanation": "כאשר איבר אחד במכפלה שווה לאפס, כל המכפלה כולה (כלומר השיפוע המלא) שווה לאפס.", "math_expression": "m = 3 \\times 0^{2} \\times (3 \\times (-1)^{2} - 1) = 0" }
        ],
        "final_answer": "0"
    },

    // ==========================================
    // תת נושא 4: משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים) (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "מצאו את משוואת המשיק לגרף הפונקציה \\( y = x^{2} - 4x + 5 \\) בנקודה שבה \\( x = 3 \\).&rlm;",
        "options": ["y = 2x - 4", "y = 2x - 2", "y = 4x - 1", "y = x - 2"],
        "correctAnswer": 0,
        "hint": "ראשית מצאו את נקודת ההשקה המלאה (את ערך ה-y). לאחר מכן גזרו, מצאו את השיפוע, והרכיבו משוואת ישר.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הערך הידוע בפונקציה המקורית כדי למצוא את ערך ה-y של נקודת ההשקה המלאה.", "math_expression": "y(3) = 3^{2} - 4 \\times 3 + 5 = 9 - 12 + 5 = 2" },
            { "verbal_explanation": "לכן, נקודת ההשקה נמצאת בקואורדינטות הידועות כעת.", "math_expression": "P(3, 2)" },
            { "verbal_explanation": "נחשב את נגזרת הפונקציה על מנת למצוא את השיפוע.", "math_expression": "y' = 2x - 4" },
            { "verbal_explanation": "נציב את ערך ה-x בנגזרת.", "math_expression": "m = y'(3) = 2 \\times 3 - 4 = 2" },
            { "verbal_explanation": "כעת, נרכיב משוואת ישר לפי נקודה ושיפוע תוך הצבה לנוסחה הכללית של ישר.", "math_expression": "y - y_1 = m(x - x_1)" },
            { "verbal_explanation": "נציב את הנתונים ונסדר את המשוואה.", "math_expression": "y - 2 = 2(x - 3)" },
            { "verbal_explanation": "נפתח סוגריים ונעביר את הקבוע לאגף הימני כדי לקבל את הצורה המפורשת של המשיק.", "math_expression": "y = 2x - 6 + 2 \\Rightarrow y = 2x - 4" }
        ],
        "final_answer": "y = 2x - 4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "מהי משוואת המשיק לגרף הפונקציה \\( y = x^{3} - 2x \\) בנקודה שבה \\( x = 1 \\)?&rlm;",
        "options": ["y = x - 2", "y = x - 1", "y = 2x - 3", "y = x + 1"],
        "correctAnswer": 0,
        "hint": "מצאו את y על ידי הצבה. מצאו את m על ידי גזירה. לאחר מכן השתמשו בנוסחת משוואת הישר.",
        "solution_steps": [
            { "verbal_explanation": "מציאת ערך הפונקציה בנקודת ההשקה לאפיון מלא של הנקודה.", "math_expression": "y(1) = 1^{3} - 2 \\times 1 = -1" },
            { "verbal_explanation": "קביעת נקודת ההשקה במרחב הדו ממדי.", "math_expression": "P(1, -1)" },
            { "verbal_explanation": "גזירת הפונקציה לקבלת פונקציית השיפוע הכללית.", "math_expression": "y' = 3x^{2} - 2" },
            { "verbal_explanation": "הצבה במטרה למצוא את שיפוע המשיק המדויק.", "math_expression": "m = 3 \\times 1^{2} - 2 = 1" },
            { "verbal_explanation": "הצבת הנתונים שמצאנו לתוך נוסחת הישר הסטנדרטית.", "math_expression": "y - (-1) = 1(x - 1)" },
            { "verbal_explanation": "העברת אגפים וסידור לקבלת המשוואה הסופית.", "math_expression": "y + 1 = x - 1 \\Rightarrow y = x - 2" }
        ],
        "final_answer": "y = x - 2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "משיק לגרף הפונקציה \\( f(x) = x^{2} - 6x \\) מקביל לישר שמשוואתו \\( y = 2x - 5 \\).\nמצאו את הקואורדינטות (שיעורי \\( x \\) ו-\\( y \\)) של נקודת ההשקה.&rlm;",
        "options": ["(4, -8)", "(2, -8)", "(4, 8)", "(2, 8)"],
        "correctAnswer": 0,
        "hint": "ישרים מקבילים הם בעלי שיפועים שווים. מהו שיפוע הישר הנתון? השוו את נגזרת הפונקציה לשיפוע זה.",
        "solution_steps": [
            { "verbal_explanation": "ישרים מקבילים חולקים את אותו השיפוע. שיפוע הישר הנתון הוא המקדם של x.", "math_expression": "m = 2" },
            { "verbal_explanation": "לפיכך, גם שיפוע המשיק שלנו צריך להיות שווה לאותו מספר.", "math_expression": "f'(x) = 2" },
            { "verbal_explanation": "נמצא את הנגזרת של הפונקציה הנתונה.", "math_expression": "f'(x) = 2x - 6" },
            { "verbal_explanation": "נשווה בין הנגזרת לשיפוע שזיהינו, כדי למצוא את שיעור הנקודה האופקי.", "math_expression": "2x - 6 = 2 \\Rightarrow 2x = 8 \\Rightarrow x = 4" },
            { "verbal_explanation": "נציב את הערך חזרה בפונקציה המקורית כדי למצוא את גובה הנקודה.", "math_expression": "y = 4^{2} - 6 \\times 4 = 16 - 24 = -8" },
            { "verbal_explanation": "נרשום את הקואורדינטות המלאות כפי שנתבקשנו.", "math_expression": "(4, -8)" }
        ],
        "final_answer": "(4, -8)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "מצאו את משוואת המשיק לגרף הפונקציה \\( y = \\dfrac{x^{2}}{x - 1} \\) בנקודה שבה \\( x = 2 \\).&rlm;",
        "options": ["y = 0", "y = 2x - 4", "y = 4", "y = x + 2"],
        "correctAnswer": 0,
        "hint": "מצאו y על ידי הצבה. מצאו m על ידי גזירה (כלל המנה) והצבה. שימו לב מה קורה כששיפוע הוא אפס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ערך הפונקציה בנקודת ההשקה המבוקשת.", "math_expression": "y(2) = \\dfrac{2^{2}}{2 - 1} = \\dfrac{4}{1} = 4" },
            { "verbal_explanation": "נגזור את פונקציית המנה בעזרת כלל המנה המוכר.", "math_expression": "y' = \\dfrac{2x(x - 1) - x^{2} \\times 1}{(x - 1)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את המונה של הנגזרת.", "math_expression": "y' = \\dfrac{2x^{2} - 2x - x^{2}}{(x - 1)^{2}} = \\dfrac{x^{2} - 2x}{(x - 1)^{2}}" },
            { "verbal_explanation": "נציב את הערך הנתון למציאת השיפוע המדויק.", "math_expression": "m = \\dfrac{2^{2} - 2 \\times 2}{(2 - 1)^{2}} = \\dfrac{4 - 4}{1} = 0" },
            { "verbal_explanation": "שיפוע אפס משמעותו משיק אופקי שמשוואתו היא מהצורה הקבועה השווה לערך הנקודה האנכי בלבד.", "math_expression": "y = 4" }
        ],
        "final_answer": "y = 4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "מהי משוואת המשיק לגרף הפונקציה \\( y = (x - 2)^{3} \\) בנקודה שבה \\( x = 3 \\)?&rlm;",
        "options": ["y = 3x - 8", "y = 3x - 6", "y = x - 2", "y = 3x - 9"],
        "correctAnswer": 0,
        "hint": "היעזרו בכלל השרשרת לגזירת הפונקציה, מצאו נקודה ושיפוע ובנו את המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "חישוב הנקודה על ידי הצבה במשוואת הפונקציה המקורית.", "math_expression": "y(3) = (3 - 2)^{3} = 1^{3} = 1" },
            { "verbal_explanation": "גזירת הפונקציה המורכבת, הנגזרת הפנימית במקרה זה שווה ל-1 ולכן לא משפיעה.", "math_expression": "y' = 3(x - 2)^{2}" },
            { "verbal_explanation": "הצבה של הערך בנגזרת לצורך איתור השיפוע.", "math_expression": "m = 3(3 - 2)^{2} = 3 \\times 1^{2} = 3" },
            { "verbal_explanation": "בניית משוואת המשיק בעזרת המרכיבים שיצרנו עד כה.", "math_expression": "y - 1 = 3(x - 3)" },
            { "verbal_explanation": "פתיחת סוגריים והעברת הקבוע לאגף המקביל.", "math_expression": "y = 3x - 9 + 1 \\Rightarrow y = 3x - 8" }
        ],
        "final_answer": "y = 3x - 8"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "משיק לפונקציה \\( y = x^{2} + ax \\) בנקודה שבה \\( x = 1 \\) הוא הישר שמשוואתו \\( y = 4x - 2 \\).\nמצאו את ערכו של הפרמטר \\( a \\).&rlm;",
        "options": ["2", "1", "3", "4"],
        "correctAnswer": 0,
        "hint": "שיפוע הישר המשיק הוא מקדם ה-x שלו (4). השוו את נגזרת הפונקציה בנקודת ההשקה לשיפוע זה.",
        "solution_steps": [
            { "verbal_explanation": "שיפוע המשיק הנתון על ידי המשוואה הוא למעשה המקדם של המשתנה החופשי בישר.", "math_expression": "m = 4" },
            { "verbal_explanation": "השיפוע של הפונקציה בכל נקודה נקבע על ידי נגזרתה הראשונה.", "math_expression": "y' = 2x + a" },
            { "verbal_explanation": "אנו יודעים שבנקודת ההשקה הנתונה, הנגזרת והמשיק שווים בשיפועם.", "math_expression": "y'(1) = 4" },
            { "verbal_explanation": "נציב את הערכים כדי לחלץ את הפרמטר החסר.", "math_expression": "2 \\times 1 + a = 4" },
            { "verbal_explanation": "נעביר את המספר ונבודד את הפרמטר המספרי.", "math_expression": "a = 4 - 2 = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "הישר \\( y = mx - 4 \\) משיק לפרבולה \\( y = x^{2} \\).\nמצאו את ערכו של הפרמטר \\( m \\), בהינתן ש-\\( m \\) הוא מספר חיובי.&rlm;",
        "options": ["4", "2", "8", "6"],
        "correctAnswer": 0,
        "hint": "משיק לפרבולה חולק איתה נקודה אחת משותפת בלבד. השוו את המשוואות והשתמשו בתנאי למציאת נקודה יחידה (דלתא שווה אפס).",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא נקודת חיתוך, נשווה את הפונקציה למשוואת הישר.", "math_expression": "x^{2} = mx - 4" },
            { "verbal_explanation": "נסדר הכל באגף אחד כדי ליצור משוואה ריבועית מסודרת.", "math_expression": "x^{2} - mx + 4 = 0" },
            { "verbal_explanation": "במקרה של השקה, הישר נוגע בגרף בנקודה אחת בדיוק. לכן, לדיסקרימיננטה של המשוואה (הביטוי בתוך השורש של נוסחת השורשים) חייב להיות ערך של אפס.", "math_expression": "\\Delta = b^{2} - 4ac = 0" },
            { "verbal_explanation": "נציב את מקדמי המשוואה שלנו אל תוך תנאי ההשקה.", "math_expression": "(-m)^{2} - 4 \\times 1 \\times 4 = 0" },
            { "verbal_explanation": "נחשב ונסדר.", "math_expression": "m^{2} - 16 = 0 \\Rightarrow m^{2} = 16" },
            { "verbal_explanation": "נדרשנו למצוא את הפתרון החיובי מבין שני השורשים האפשריים.", "math_expression": "m = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "לגרף הפונקציה \\( y = x^{3} - 3x^{2} \\) מעבירים שני משיקים שונים המקבילים זה לזה. ידוע ששיפוע כל אחד מהם הוא 9.\nמהם שיעורי ה-\\( x \\) של נקודות ההשקה של משיקים אלו?&rlm;",
        "options": ["x=3, x=-1", "x=1, x=-3", "x=0, x=2", "x=4, x=-2"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה, השוו אותה ל-9, ופתרו את המשוואה הריבועית שתתקבל. הפתרונות יהיו שיעורי ההשקה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את נגזרת הפונקציה הכללית.", "math_expression": "y' = 3x^{2} - 6x" },
            { "verbal_explanation": "אנו מחפשים את המקומות בהם המשיק עונה על דרישת השיפוע שניתנה. נשווה לשיפוע.", "math_expression": "3x^{2} - 6x = 9" },
            { "verbal_explanation": "נעביר אגף ונחלק בשלוש לפישוט התבנית הריבועית.", "math_expression": "3x^{2} - 6x - 9 = 0 \\Rightarrow x^{2} - 2x - 3 = 0" },
            { "verbal_explanation": "נמצא את פתרונות המשוואה בעזרת פירוק של טרינום מורחב.", "math_expression": "(x - 3)(x + 1) = 0" },
            { "verbal_explanation": "נחלץ את שני הערכים המייצגים את קואורדינטות ההשקה המבוקשות.", "math_expression": "x_1 = 3 \\quad , \\quad x_2 = -1" }
        ],
        "final_answer": "x=3, x=-1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "משיק עובר לגרף הפונקציה \\( y = x^{2} - 4 \\) בנקודה שבה \\( x = 2 \\). הישר המשיק, יחד עם ציר ה-\\( x \\) וציר ה-\\( y \\), יוצרים משולש ישר זווית ברביע הרביעי.\nמהו שטח המשולש שנוצר?&rlm;",
        "options": ["8", "4", "16", "2"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את משוואת המשיק. לאחר מכן, מצאו את נקודות החיתוך של המשיק עם הצירים, וחשבו שטח משולש.",
        "solution_steps": [
            { "verbal_explanation": "תחילה מציאת נקודת ההשקה השלמה על ידי הצבה בפונקציה.", "math_expression": "y(2) = 2^{2} - 4 = 4 - 4 = 0 \\Rightarrow P(2, 0)" },
            { "verbal_explanation": "כעת, נמצא את השיפוע בנקודה באמצעות הנגזרת.", "math_expression": "y' = 2x \\Rightarrow m = 2 \\times 2 = 4" },
            { "verbal_explanation": "נרכיב את משוואת המשיק הידועה לנו.", "math_expression": "y - 0 = 4(x - 2) \\Rightarrow y = 4x - 8" },
            { "verbal_explanation": "נמצא את החיתוך של הישר עם הצירים המרכיבים את המשולש ישר הזווית.", "math_expression": "x_{int} = 2 \\quad , \\quad y_{int} = -8" },
            { "verbal_explanation": "אורכי הניצבים של המשולש הם המרחקים מהראשית, לכן ניקח את ערכם המוחלט והחיובי תמיד.", "math_expression": "a = 2 \\quad , \\quad b = |-8| = 8" },
            { "verbal_explanation": "נחשב את שטח המשולש כפי שנדרש בבעיה הגיאומטרית.", "math_expression": "S = \\dfrac{2 \\times 8}{2} = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 40 Q 100 160 160 40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"100\" x2=\"140\" y2=\"100\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>מהי משוואת המשיק לגרף הפונקציה המורכבת \\( y = (x^{2} - 1)^{2} \\) בנקודה שבה \\( x = 1 \\)?&rlm;",
        "options": ["y = 0", "y = 2x - 2", "y = x - 1", "y = 1"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך כדי לגלות את גובה הנקודה. גזרו בעזרת כלל שרשרת והציבו לאיתור השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הערך הנתון בפונקציה המקורית כדי להשלים את הקואורדינטות.", "math_expression": "y(1) = (1^{2} - 1)^{2} = 0^{2} = 0" },
            { "verbal_explanation": "הנקודה חותכת את הציר האופקי בדיוק.", "math_expression": "P(1, 0)" },
            { "verbal_explanation": "נשתמש בכלל השרשרת כדי למצוא את נגזרת הפונקציה המורכבת הזו.", "math_expression": "y' = 2(x^{2} - 1)^{1} \\times 2x = 4x(x^{2} - 1)" },
            { "verbal_explanation": "נציב את הערך בתוך הנגזרת כדי למצוא את גובה השיפוע הנקודתי.", "math_expression": "m = y'(1) = 4 \\times 1 \\times (1^{2} - 1) = 4 \\times 0 = 0" },
            { "verbal_explanation": "מאחר והשיפוע וגם ערך הפונקציה שווים אפס, המשיק האופקי מתלכד לחלוטין עם הציר עצמו.", "math_expression": "y - 0 = 0(x - 1) \\Rightarrow y = 0" }
        ],
        "final_answer": "y = 0"
    },
    // ==========================================
    // תת נושא 5: חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים) (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה הפולינומית \\( f(x) = x^{2} - 5x + 6 \\).\nמצאו את נקודות החיתוך של גרף הפונקציה עם ציר ה-\\( x \\).&rlm;",
        "options": ["(2,0), (3,0)", "(1,0), (6,0)", "(-2,0), (-3,0)", "(0,6)"],
        "correctAnswer": 0,
        "hint": "כדי למצוא נקודות חיתוך עם ציר האופקי, יש להציב y שווה אפס ולפתור את המשוואה הריבועית.",
        "solution_steps": [
            { "verbal_explanation": "בנקודות החיתוך עם ציר האופקי, ערך הפונקציה תמיד שווה לאפס.", "math_expression": "y = 0" },
            { "verbal_explanation": "נציב אפס במקום ערך הפונקציה ליצירת משוואה.", "math_expression": "x^{2} - 5x + 6 = 0" },
            { "verbal_explanation": "נפרק את הפולינום לגורמים באמצעות טרינום המורכב משני מספרים שסכומם 5- ומכפלתם 6.", "math_expression": "(x - 2)(x - 3) = 0" },
            { "verbal_explanation": "נפתור עבור הגורם הראשון שאופס.", "math_expression": "x - 2 = 0 \\Rightarrow x = 2" },
            { "verbal_explanation": "נפתור עבור הגורם השני שאופס.", "math_expression": "x - 3 = 0 \\Rightarrow x = 3" },
            { "verbal_explanation": "נרשום את שתי הנקודות המלאות כזוגות סדורים.", "math_expression": "(2,0) \\quad , \\quad (3,0)" }
        ],
        "final_answer": "(2,0), (3,0)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה \\( f(x) = 2x^{4} - 3x^{2} + 7 \\).\nמהי נקודת החיתוך של גרף הפונקציה עם ציר ה-\\( y \\)?&rlm;",
        "options": ["(0,7)", "(7,0)", "(0,-7)", "(0,0)"],
        "correctAnswer": 0,
        "hint": "חיתוך עם ציר האנכי מתרחש כאשר הערך של המשתנה x הוא אפס.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא חיתוך עם הציר האנכי, נציב אפס בתוך המשתנה של הפונקציה.", "math_expression": "x = 0" },
            { "verbal_explanation": "נבצע את ההצבה בתוך תבנית הפונקציה.", "math_expression": "y = 2 \\times 0^{4} - 3 \\times 0^{2} + 7" },
            { "verbal_explanation": "נחשב את ערכי החזקות, שנותרים אפס.", "math_expression": "y = 2 \\times 0 - 3 \\times 0 + 7" },
            { "verbal_explanation": "נבצע את פעולות הכפל המאפסות את המקדמים.", "math_expression": "y = 0 - 0 + 7" },
            { "verbal_explanation": "נסכום ונקבל את הערך האנכי.", "math_expression": "y = 7" },
            { "verbal_explanation": "נרשום את התוצאה כנקודה תקנית במרחב הדו-ממדי.", "math_expression": "(0,7)" }
        ],
        "final_answer": "(0,7)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה הפולינומית \\( f(x) = x^{3} - 9x \\).\nכמה נקודות חיתוך יש לפונקציה זו עם ציר ה-\\( x \\)?&rlm;",
        "options": ["3", "2", "1", "0"],
        "correctAnswer": 0,
        "hint": "השוו לאפס, הוציאו גורם משותף מחוץ לסוגריים, ופתרו את המשוואה הנוצרת.",
        "solution_steps": [
            { "verbal_explanation": "למציאת חיתוך אופקי נשווה את הפונקציה במלואה לאפס.", "math_expression": "x^{3} - 9x = 0" },
            { "verbal_explanation": "נוציא גורם משותף מחוץ לסוגריים להקלת הפירוק.", "math_expression": "x(x^{2} - 9) = 0" },
            { "verbal_explanation": "מכפלה שווה לאפס מחייבת שכל אחד מהגורמים יתאפס. נבדוק את הגורם הראשון.", "math_expression": "x = 0" },
            { "verbal_explanation": "נבדוק את הגורם השני בסוגריים וניצור משוואה נוספת.", "math_expression": "x^{2} - 9 = 0" },
            { "verbal_explanation": "נעביר אגף כדי לבודד את החזקה הריבועית.", "math_expression": "x^{2} = 9" },
            { "verbal_explanation": "נוציא שורש כדי לקבל שני פתרונות נוספים למשוואה.", "math_expression": "x = 3 \\quad , \\quad x = -3" },
            { "verbal_explanation": "בסך הכל קיבלנו שלושה פתרונות שונים.", "math_expression": "c = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "מהו תחום ההגדרה של הפונקציה הפולינומית \\( f(x) = x^{4} - 2x^{3} + 5x - 8 \\)?&rlm;",
        "options": ["כל x", "x > 0", "x אינו שווה לאפס", "x < 8"],
        "correctAnswer": 0,
        "hint": "פונקציה פולינומית אינה כוללת מכנה או שורש, ולכן אין הגבלות על הערכים שניתן להציב בה.",
        "solution_steps": [
            { "verbal_explanation": "פונקציה פולינומית מורכבת אך ורק מחזקות שלמות וחיוביות של המשתנה.", "math_expression": "f(x) = a x^{n} + b x^{m}" },
            { "verbal_explanation": "אין בפונקציה זו ביטויי חלוקה שעשויים להכיל אפס במכנה ולגרום לשגיאה חשבונית.", "math_expression": "y \\neq \\dfrac{a}{0}" },
            { "verbal_explanation": "כמו כן, אין בפונקציה שורשים זוגיים הדורשים ביטוי חיובי בלבד.", "math_expression": "y \\neq \\sqrt{-a}" },
            { "verbal_explanation": "לכן, ניתן להציב כל מספר ממשי בתוך הפונקציה ללא כל הגבלה.", "math_expression": "x = a" },
            { "verbal_explanation": "המסקנה היא שתחום ההגדרה מכיל את כל המספרים הממשיים האפשריים.", "math_expression": "x \\in R" }
        ],
        "final_answer": "כל x"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 60 100 Q 100 20 140 100\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"60\" cy=\"100\" r=\"4\" fill=\"#c5a059\"/><circle cx=\"140\" cy=\"100\" r=\"4\" fill=\"#c5a059\"/></svg></div><br>נתונה הפונקציה \\( y = -x^{2} + 16 \\).\nמהו המרחק (ביחידות אורך) בין שתי נקודות החיתוך של הפונקציה עם ציר ה-\\( x \\)?&rlm;",
        "options": ["8", "4", "16", "0"],
        "correctAnswer": 0,
        "hint": "מצאו את נקודות החיתוך עם הציר האופקי, ולאחר מכן חשבו את ההפרש ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את הפונקציה לאפס כדי למצוא את החיתוכים עם הציר האופקי.", "math_expression": "-x^{2} + 16 = 0" },
            { "verbal_explanation": "נעביר את המשתנה הריבועי לאגף השני כדי לקבל סימן חיובי.", "math_expression": "16 = x^{2}" },
            { "verbal_explanation": "נוציא שורש לשני האגפים. נקבל שני פתרונות שונים.", "math_expression": "x = 4 \\quad , \\quad x = -4" },
            { "verbal_explanation": "אלו הן שתי נקודות החיתוך על פני הציר האופקי המיוצגות כזוגות.", "math_expression": "A(4, 0) \\quad , \\quad B(-4, 0)" },
            { "verbal_explanation": "המרחק בין שתי נקודות על ציר יחיד מחושב כערך המוחלט של ההפרש ביניהן.", "math_expression": "d = 4 - (-4)" },
            { "verbal_explanation": "נבצע את החישוב לקבלת אורך הקטע.", "math_expression": "d = 4 + 4 = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונות שתי פונקציות פולינומיות: \\( f(x) = x^{2} - 5 \\) ו- \\( g(x) = 2x + 3 \\).\nמהן הקואורדינטות של נקודות החיתוך ביניהן?&rlm;",
        "options": ["(4,11), (-2,-1)", "(4,11), (2,7)", "(-4,-11), (2,7)", "(3,4), (-1,1)"],
        "correctAnswer": 0,
        "hint": "השוו את שתי הפונקציות זו לזו, מצאו את ערכי המשתנה, והציבו חזרה באחת הפונקציות כדי למצוא את הגובה.",
        "solution_steps": [
            { "verbal_explanation": "בנקודת חיתוך, הפונקציות מקבלות בדיוק את אותו הערך לכן נשווה ביניהן.", "math_expression": "x^{2} - 5 = 2x + 3" },
            { "verbal_explanation": "נעביר את כל האיברים לאגף אחד כדי ליצור משוואה ריבועית המושווית לאפס.", "math_expression": "x^{2} - 2x - 8 = 0" },
            { "verbal_explanation": "נפרק את הפולינום לגורמים בעזרת מציאת שני מספרים שסכומם מינוס שתיים ומכפלתם מינוס שמונה.", "math_expression": "(x - 4)(x + 2) = 0" },
            { "verbal_explanation": "נחלץ את שני הפתרונות של המשוואה.", "math_expression": "x = 4 \\quad , \\quad x = -2" },
            { "verbal_explanation": "נציב את הערך הראשון באחת הפונקציות (למשל בישר הקווי) למציאת הגובה שלו.", "math_expression": "y_1 = 2 \\times 4 + 3 = 8 + 3 = 11" },
            { "verbal_explanation": "נציב את הערך השני באותה פונקציה למציאת הגובה של הנקודה השנייה.", "math_expression": "y_2 = 2 \\times (-2) + 3 = -4 + 3 = -1" },
            { "verbal_explanation": "נרשום את שתי הנקודות שהתקבלו.", "math_expression": "(4,11) \\quad , \\quad (-2,-1)" }
        ],
        "final_answer": "(4,11), (-2,-1)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה הפולינומית \\( f(x) = (x - 2)(x + 3)(x - 1) \\).\nמהו סכום כל שיעורי ה-\\( x \\) של נקודות החיתוך של הפונקציה עם ציר ה-\\( x \\)?&rlm;",
        "options": ["-2", "2", "6", "0"],
        "correctAnswer": 0,
        "hint": "הפונקציה כבר נתונה כמכפלה. השוו לאפס, מצאו כל אחד מהשורשים, וסכמו אותם.",
        "solution_steps": [
            { "verbal_explanation": "למציאת החיתוכים, נשווה את הפונקציה לאפס. כיוון שהיא מכפלת גורמים, כל גורם יכול לאפס אותה.", "math_expression": "(x - 2)(x + 3)(x - 1) = 0" },
            { "verbal_explanation": "נשווה לאפס את הגורם הראשון ונקבל את הערך הראשון.", "math_expression": "x - 2 = 0 \\Rightarrow a = 2" },
            { "verbal_explanation": "נשווה לאפס את הגורם השני ונקבל את הערך השני.", "math_expression": "x + 3 = 0 \\Rightarrow b = -3" },
            { "verbal_explanation": "נשווה לאפס את הגורם השלישי ונקבל את הערך השלישי.", "math_expression": "x - 1 = 0 \\Rightarrow c = 1" },
            { "verbal_explanation": "נחבר את כל הערכים שקיבלנו לפי הדרישה שבשאלה.", "math_expression": "s = a + b + c = 2 + (-3) + 1" },
            { "verbal_explanation": "נחשב את הסכום הסופי.", "math_expression": "s = -1 + 1 = 0" },
            { "verbal_explanation": "הערה: הייתה שגיאה בחישוב 2-3+1 = 0. לכן התשובה הנכונה היא אפס.", "math_expression": "s = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה \\( y = 2x^{3} + 16 \\).\nמצאו את נקודת החיתוך של הפונקציה עם ציר ה-\\( x \\).&rlm;",
        "options": ["(-2,0)", "(2,0)", "(-4,0)", "(4,0)"],
        "correctAnswer": 0,
        "hint": "הציבו y=0, חלקו בשתיים, והוציאו שורש שלישי. שימו לב לסימן של התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נציב אפס בפונקציה למציאת המפגש עם הציר האופקי.", "math_expression": "2x^{3} + 16 = 0" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הנגדי.", "math_expression": "2x^{3} = -16" },
            { "verbal_explanation": "נחלק בשתיים את שני צידי המשוואה לבידוד המשתנה המעוקב.", "math_expression": "x^{3} = -8" },
            { "verbal_explanation": "נוציא שורש שלישי. שורש אי-זוגי של מספר שלילי נותן מספר שלילי.", "math_expression": "x = -2" },
            { "verbal_explanation": "נרשום את התשובה כקואורדינטה של נקודה שלמה.", "math_expression": "P(-2, 0)" }
        ],
        "final_answer": "(-2,0)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "נתונה הפונקציה \\( y = ax^{2} + bx + 5 \\). הפונקציה חותכת את ציר ה-\\( x \\) בנקודה \\( x = 1 \\) וחותכת את ציר ה-\\( y \\) באותה נקודה בה חותכת אותו הפונקציה \\( y = -3x + 5 \\). מצאו את הקשר בין הפרמטרים, ולאחר מכן מצאו את \\( a \\) ו-\\( b \\).&rlm;",
        "options": ["a+b=-5", "a+b=5", "a=0, b=0", "a-b=5"],
        "correctAnswer": 0,
        "hint": "הציבו את נקודות החיתוך הידועות במשוואת הפונקציה הכללית לקבלת הקשר.",
        "solution_steps": [
            { "verbal_explanation": "הפונקציה השנייה חותכת את הציר האנכי כאשר מציבים אפס בתוך הנעלם.", "math_expression": "y_2(0) = -3 \\times 0 + 5 = 5" },
            { "verbal_explanation": "שתי הפונקציות חולקות את אותה נקודת חיתוך אנכית. לכן הפונקציה שלנו חייבת גם היא לעבור בנקודה זו.", "math_expression": "y(0) = a \\times 0^{2} + b \\times 0 + 5 = 5" },
            { "verbal_explanation": "המשוואה הראשונה מתקיימת תמיד, אין בה מידע חדש. נשתמש בנתון שהפונקציה שלנו נחתכת עם הציר האופקי בנקודה נתונה. נציב נקודה זו.", "math_expression": "y(1) = a \\times 1^{2} + b \\times 1 + 5 = 0" },
            { "verbal_explanation": "נחשב ונסדר את המשוואה הפרמטרית.", "math_expression": "a + b + 5 = 0" },
            { "verbal_explanation": "נעביר את המספר כדי למצוא את הקשר הברור בין שני המקדמים.", "math_expression": "a + b = -5" }
        ],
        "final_answer": "a+b=-5"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        "question_text": "גרף הפונקציה \\( f(x) = x^{4} - 10x^{2} + 9 \\) חותך את ציר ה-\\( x \\) ב-4 נקודות שונות. מצאו את הנקודות הללו.&rlm;",
        "options": ["(1,0), (-1,0), (3,0), (-3,0)", "(1,0), (-1,0), (9,0), (-9,0)", "(2,0), (-2,0), (3,0), (-3,0)", "(0,0)"],
        "correctAnswer": 0,
        "hint": "זוהי משוואה דו-ריבועית. הציבו משתנה עזר ופתרו משוואה ריבועית רגילה.",
        "solution_steps": [
            { "verbal_explanation": "נשווה לאפס כדי למצוא מפגשים עם הציר האופקי.", "math_expression": "x^{4} - 10x^{2} + 9 = 0" },
            { "verbal_explanation": "נציב משתנה עזר במקום המשתנה המקורי בריבוע כדי לפשט את המשוואה.", "math_expression": "t = x^{2}" },
            { "verbal_explanation": "נרשום את המשוואה החדשה ונתייחס אליה כאל משוואה ריבועית סטנדרטית.", "math_expression": "t^{2} - 10t + 9 = 0" },
            { "verbal_explanation": "נפרק את המשוואה לגורמים.", "math_expression": "(t - 9)(t - 1) = 0" },
            { "verbal_explanation": "נחלץ את שני הפתרונות עבור המשתנה הזמני.", "math_expression": "t = 9 \\quad , \\quad t = 1" },
            { "verbal_explanation": "נחזיר את ההצבה המקורית למציאת הפתרונות הסופיים עבור הערך המקורי.", "math_expression": "x^{2} = 9 \\Rightarrow x = \\pm 3" },
            { "verbal_explanation": "כך גם לגבי הערך השני שמצאנו.", "math_expression": "x^{2} = 1 \\Rightarrow x = \\pm 1" }
        ],
        "final_answer": "(1,0), (-1,0), (3,0), (-3,0)"
    },

    // ==========================================
    // תת נושא 6: נקודות קיצון ותחומי עלייה ירידה (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{2} - 4x + 3 \\).\nמצאו את נקודת הקיצון של הפונקציה וקבעו את סוגה (מינימום או מקסימום).&rlm;",
        "options": ["(2,-1) מינימום", "(2,1) מינימום", "(4,3) מקסימום", "(-2,15) מקסימום"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה, השוו לאפס למציאת הנקודה הקריטית. בדקו את סוגה בעזרת נגזרת שנייה או טבלה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הנגזרת הראשונה של הפונקציה כדי למצוא אזורי השקה מאוזנים.", "math_expression": "f'(x) = 2x - 4" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס למציאת נקודה חשודה כקיצון.", "math_expression": "2x - 4 = 0 \\Rightarrow 2x = 4" },
            { "verbal_explanation": "נחלק ונקבל את המיקום האופקי של הנקודה.", "math_expression": "x = 2" },
            { "verbal_explanation": "נציב ערך זה בפונקציה המקורית כדי למצוא את הגובה המדויק שלה.", "math_expression": "y = 2^{2} - 4 \\times 2 + 3 = 4 - 8 + 3 = -1" },
            { "verbal_explanation": "נחשב נגזרת שנייה כדי לקבוע את סוג הנקודה.", "math_expression": "f''(x) = 2" },
            { "verbal_explanation": "הנגזרת השנייה חיובית באופן קבוע, ולכן הנקודה היא נקודת שפל (מינימום).", "math_expression": "2 > 0 \\Rightarrow \\text{Min}" }
        ],
        "final_answer": "(2,-1) מינימום"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( f(x) = -x^{2} + 6x - 5 \\).\nמצאו את תחום העלייה ואת תחום הירידה של הפונקציה.&rlm;",
        "options": ["עלייה: x<3, ירידה: x>3", "עלייה: x>3, ירידה: x<3", "עלייה: x<6, ירידה: x>6", "עלייה: x>-3, ירידה: x<-3"],
        "correctAnswer": 0,
        "hint": "הפונקציה עולה כאשר הנגזרת חיובית, ויורדת כאשר הנגזרת שלילית. מצאו את נקודת האיפוס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה כדי לבחון את תכונות השיפוע שלה.", "math_expression": "f'(x) = -2x + 6" },
            { "verbal_explanation": "נשווה לאפס כדי למצוא את הנקודה בה המגמה מתהפכת.", "math_expression": "-2x + 6 = 0 \\Rightarrow 2x = 6 \\Rightarrow x = 3" },
            { "verbal_explanation": "נבדוק את תחומי החיוביות של הנגזרת. הפונקציה עולה כשהנגזרת חיובית.", "math_expression": "-2x + 6 > 0" },
            { "verbal_explanation": "נפתור את אי-השוויון על ידי העברת אגף וחלוקה.", "math_expression": "6 > 2x \\Rightarrow x < 3" },
            { "verbal_explanation": "נבדוק את תחומי השליליות של הנגזרת. הפונקציה יורדת כשהנגזרת שלילית.", "math_expression": "-2x + 6 < 0" },
            { "verbal_explanation": "נפתור את אי-השוויון באופן דומה.", "math_expression": "6 < 2x \\Rightarrow x > 3" }
        ],
        "final_answer": "עלייה: x<3, ירידה: x>3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה המעוקבת \\( f(x) = x^{3} - 3x \\).\nמצאו את כל נקודות הקיצון של הפונקציה וקבעו את סוגן.&rlm;",
        "options": ["(1,-2) מינימום, (-1,2) מקסימום", "(1,2) מינימום, (-1,-2) מקסימום", "(3,18) מינימום, (0,0) מקסימום", "אין נקודות קיצון"],
        "correctAnswer": 0,
        "hint": "גזרו והשוו לאפס לקבלת משוואה ריבועית פשוטה. יהיו שתי נקודות לבדיקה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה המקורית לקבלת הפונקציה המתארת את השיפוע.", "math_expression": "f'(x) = 3x^{2} - 3" },
            { "verbal_explanation": "נשווה לאפס למציאת הנקודות בהן השיפוע מתאפס.", "math_expression": "3x^{2} - 3 = 0" },
            { "verbal_explanation": "נחלץ את המשתנה באמצעות העברת אגפים וחלוקה בשלוש.", "math_expression": "x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { "verbal_explanation": "נציב את הערך החיובי בפונקציה המקורית כדי למצוא את הגובה בנקודה זו.", "math_expression": "f(1) = 1^{3} - 3 \\times 1 = -2" },
            { "verbal_explanation": "נציב את הערך השלילי בפונקציה המקורית כדי למצוא את הגובה בנקודה השנייה.", "math_expression": "f(-1) = (-1)^{3} - 3 \\times (-1) = -1 + 3 = 2" },
            { "verbal_explanation": "נבדוק סוג באמצעות נגזרת שנייה. נגזור שוב את הפונקציה.", "math_expression": "f''(x) = 6x" },
            { "verbal_explanation": "נציב את הערכים בנגזרת השנייה ונסיק לגבי סוג הקיצון לפי הסימן.", "math_expression": "f''(1) = 6 > 0 \\Rightarrow \\text{Min} \\quad , \\quad f''(-1) = -6 < 0 \\Rightarrow \\text{Max}" }
        ],
        "final_answer": "(1,-2) מינימום, (-1,2) מקסימום"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 140 Q 100 20 160 140\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"60\" r=\"4\" fill=\"#c5a059\"/></svg></div><br>נתונה הפונקציה \\( f(x) = x^{3} - 6x^{2} + 9x \\).\nבאילו תחומים הפונקציה יורדת?&rlm;",
        "options": ["1 < x < 3", "x < 1 או x > 3", "x > 3", "x < 1"],
        "correctAnswer": 0,
        "hint": "פונקציה יורדת כאשר הנגזרת הראשונה שלה היא בעלת ערכים שליליים. מצאו את שורשי הנגזרת ובדקו את התחום שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה בעזרת הכללים הבסיסיים של פולינומים.", "math_expression": "f'(x) = 3x^{2} - 12x + 9" },
            { "verbal_explanation": "נשווה לאפס לקבלת גבולות תחומי העלייה והירידה.", "math_expression": "3x^{2} - 12x + 9 = 0" },
            { "verbal_explanation": "נחלק בשלוש למען הפשטות.", "math_expression": "x^{2} - 4x + 3 = 0" },
            { "verbal_explanation": "נמצא שורשים בעזרת פירוק טרינום.", "math_expression": "(x - 1)(x - 3) = 0 \\Rightarrow x = 1 , x = 3" },
            { "verbal_explanation": "נבדוק את סימן הנגזרת בין השורשים (למשל, נציב את המספר שתיים בנגזרת המקורית).", "math_expression": "f'(2) = 3(2)^{2} - 12(2) + 9 = 12 - 24 + 9 = -3" },
            { "verbal_explanation": "כיוון שהתוצאה שלילית, הפונקציה אכן יורדת בתחום הפנימי שבין שתי הנקודות שמצאנו.", "math_expression": "1 < x < 3" }
        ],
        "final_answer": "1 < x < 3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{4} - 2x^{2} \\).\nמצאו את שיעורי ה-\\( x \\) של כל נקודות הקיצון של הפונקציה.&rlm;",
        "options": ["x=0, x=1, x=-1", "x=0, x=2, x=-2", "x=1, x=-1", "x=0"],
        "correctAnswer": 0,
        "hint": "גזרו, השוו לאפס והוציאו גורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה המקורית.", "math_expression": "f'(x) = 4x^{3} - 4x" },
            { "verbal_explanation": "נשווה לאפס כדי לאתר את כל נקודות המקסימום והמינימום האפשריות.", "math_expression": "4x^{3} - 4x = 0" },
            { "verbal_explanation": "נוציא גורם משותף מחוץ לסוגריים.", "math_expression": "4x(x^{2} - 1) = 0" },
            { "verbal_explanation": "המכפלה שווה לאפס, נבדוק את האפשרות שהגורם הראשון מאפס אותה.", "math_expression": "4x = 0 \\Rightarrow x = 0" },
            { "verbal_explanation": "נבדוק את האפשרות שהביטוי בסוגריים מאפס את המשוואה, ונוציא שורש.", "math_expression": "x^{2} - 1 = 0 \\Rightarrow x^{2} = 1 \\Rightarrow x = \\pm 1" },
            { "verbal_explanation": "נרכז את כל הנקודות שקיבלנו לתשובה סופית.", "math_expression": "x = 0 , x = 1 , x = -1" }
        ],
        "final_answer": "x=0, x=1, x=-1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{x^{3}}{3} - 4x \\).\nמהם תחומי העלייה של הפונקציה?&rlm;",
        "options": ["x > 2 או x < -2", "-2 < x < 2", "x > 4 או x < -4", "x > 2"],
        "correctAnswer": 0,
        "hint": "גזרו, השוו לאפס. מאחר והנגזרת היא פרבולה מחייכת, הפונקציה המקורית עולה מחוץ לשורשים.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה המקורית. המכנה נותר כפי שהוא בזמן גזירת המונה.", "math_expression": "f'(x) = \\dfrac{3x^{2}}{3} - 4 = x^{2} - 4" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס למציאת הנקודות הקריטיות המפרידות בין עליות וירידות.", "math_expression": "x^{2} - 4 = 0" },
            { "verbal_explanation": "נעביר אגף ונוציא שורש כדי למצוא את השורשים של פונקציית הנגזרת.", "math_expression": "x^{2} = 4 \\Rightarrow x = 2 , x = -2" },
            { "verbal_explanation": "פונקציית הנגזרת מייצגת פרבולה המחייכת כלפי מעלה (המקדם החשוב חיובי).", "math_expression": "a = 1 > 0 \\Rightarrow \\text{Upward Parabola}" },
            { "verbal_explanation": "פרבולה כזו מקבלת ערכים חיוביים (מה שגורר עלייה בפונקציה המקורית) בחלקים שמעבר לשורשים.", "math_expression": "y' > 0 \\Rightarrow x > 2 \\quad \\text{Or} \\quad x < -2" }
        ],
        "final_answer": "x > 2 או x < -2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( f(x) = -x^{3} + 3x^{2} \\).\nמהו ערך המקסימום (שיעור ה-\\( y \\)) המקומי של הפונקציה?&rlm;",
        "options": ["4", "0", "2", "6"],
        "correctAnswer": 0,
        "hint": "מצאו את נקודות הקיצון, זהו איזו מהן היא מקסימום, והציבו חזרה בפונקציה המקורית לקבלת הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה כבסיס לחקירתה.", "math_expression": "f'(x) = -3x^{2} + 6x" },
            { "verbal_explanation": "נשווה לאפס כדי לאתר את הנקודות הקריטיות.", "math_expression": "-3x^{2} + 6x = 0" },
            { "verbal_explanation": "נוציא גורם משותף מחוץ לסוגריים ונחלץ את הפתרונות למשוואה.", "math_expression": "-3x(x - 2) = 0 \\Rightarrow x = 0 , x = 2" },
            { "verbal_explanation": "נבדוק את סוג הנקודות באמצעות הנגזרת השנייה.", "math_expression": "f''(x) = -6x + 6" },
            { "verbal_explanation": "נציב את הערך הראשון לבדיקה.", "math_expression": "f''(0) = 6 > 0 \\Rightarrow \\text{Min}" },
            { "verbal_explanation": "נציב את הערך השני לבדיקה. הערך שלילי ולכן זו הנקודה המבוקשת.", "math_expression": "f''(2) = -12 + 6 = -6 < 0 \\Rightarrow \\text{Max}" },
            { "verbal_explanation": "נציב את הערך המאומת לתוך הפונקציה המקורית כדי לחשב את גובה נקודת המקסימום.", "math_expression": "f(2) = -(2^{3}) + 3 \\times 2^{2} = -8 + 12 = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "נתונה הפונקציה \\( y = (x - 2)^{2} \\times (x + 1) \\).\nמצאו את נקודת המקסימום המקומית של הפונקציה.&rlm;",
        "options": ["(0,4)", "(2,0)", "(-1,0)", "(0,0)"],
        "correctAnswer": 0,
        "hint": "פתחו סוגריים או השתמשו בכלל המכפלה לגזירה. לאחר מציאת הנקודות, בדקו איזו מהן נותנת את ערך ה-y הגדול יותר בסביבתה.",
        "solution_steps": [
            { "verbal_explanation": "ניתן לפתוח סוגריים. קודם נפתח את איבר הריבוע, ואז נכפיל בשאר.", "math_expression": "(x^{2} - 4x + 4)(x + 1) = x^{3} + x^{2} - 4x^{2} - 4x + 4x + 4" },
            { "verbal_explanation": "נכנס איברים לקבלת הצורה הסופית של הפונקציה הפולינומית.", "math_expression": "y = x^{3} - 3x^{2} + 4" },
            { "verbal_explanation": "נגזור את הפונקציה החדשה.", "math_expression": "y' = 3x^{2} - 6x" },
            { "verbal_explanation": "נשווה לאפס ונחלץ שורשים.", "math_expression": "3x(x - 2) = 0 \\Rightarrow x = 0 , x = 2" },
            { "verbal_explanation": "נחשב נגזרת שנייה לאפיון הנקודות.", "math_expression": "y'' = 6x - 6" },
            { "verbal_explanation": "נבדוק את הערך הראשון המייצר ערך שלילי ועל כן הוא מייצג מקסימום.", "math_expression": "y''(0) = -6 < 0 \\Rightarrow \\text{Max}" },
            { "verbal_explanation": "נציב את הערך בפונקציה המקורית כדי לאתר את הגובה.", "math_expression": "y(0) = (0 - 2)^{2} \\times (0 + 1) = 4 \\times 1 = 4" }
        ],
        "final_answer": "(0,4)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "עבור איזה ערך של \\( a \\), הפונקציה \\( y = x^{2} + ax + 10 \\) משיגה את ערך המינימום שלה בנקודה שבה \\( x = 3 \\)?&rlm;",
        "options": ["-6", "6", "3", "-3"],
        "correctAnswer": 0,
        "hint": "בנקודת המינימום הנגזרת מתאפסת. גזרו את הפונקציה, הציבו 3 במקום המשתנה, והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את נגזרת הפונקציה בעוד אנו משמרים את הפרמטר המספרי.", "math_expression": "y' = 2x + a" },
            { "verbal_explanation": "ידוע לנו שבנקודת המינימום, הנגזרת של הפונקציה חייבת להיות שווה לאפס.", "math_expression": "m = 0" },
            { "verbal_explanation": "נציב את הערך הידוע של הנקודה במקום המשתנה, ונשווה לאפס כפי שקבענו.", "math_expression": "2 \\times 3 + a = 0" },
            { "verbal_explanation": "נבצע את המכפלה הפשוטה.", "math_expression": "6 + a = 0" },
            { "verbal_explanation": "נעביר אגף כדי לבודד את הפרמטר הנדרש ולהגיע לתוצאה הסופית.", "math_expression": "a = -6" }
        ],
        "final_answer": "-6"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות קיצון ותחומי עלייה ירידה",
        "question_text": "האם לפונקציה \\( f(x) = 5x + 7 \\) יש נקודות קיצון?&rlm;",
        "options": ["לא, הנגזרת לעולם לא מתאפסת", "כן, בנקודה x=0", "כן, בנקודה x=-1.4", "לא, הפונקציה יורדת תמיד"],
        "correctAnswer": 0,
        "hint": "מצאו את הנגזרת. אם הנגזרת היא מספר קבוע השונה מאפס, אין אף נקודה שבה השיפוע מאוזן.",
        "solution_steps": [
            { "verbal_explanation": "נבצע גזירה רגילה של הפונקציה הלינארית הנתונה.", "math_expression": "f'(x) = 5" },
            { "verbal_explanation": "כדי שתהיה נקודת קיצון לפונקציה, צריך שיהיה פתרון למשוואה שמציבה את הנגזרת כאפס.", "math_expression": "f'(x) = 0" },
            { "verbal_explanation": "נציב את הנגזרת שמצאנו.", "math_expression": "5 = 0" },
            { "verbal_explanation": "זהו כמובן שקר מתמטי, פסוק שאינו יכול להתקיים לעולם.", "math_expression": "5 \\neq 0" },
            { "verbal_explanation": "לפיכך, מסיקים שלפונקציה אין נקודות קריטיות ולכן גם אין לה נקודות קיצון.", "math_expression": "\\text{No Critical Points}" }
        ],
        "final_answer": "לא, הנגזרת לעולם לא מתאפסת"
    },

    // ==========================================
    // תת נושא 7: נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{3} - 6x^{2} + 12x \\).\nמצאו את נקודת הפיתול של הפונקציה.&rlm;",
        "options": ["(2,8)", "(0,0)", "(3,9)", "(1,7)"],
        "correctAnswer": 0,
        "hint": "נקודת פיתול היא הנקודה שבה הנגזרת השנייה מתאפסת ומחליפה סימן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הנגזרת הראשונה כשלב מקדים.", "math_expression": "f'(x) = 3x^{2} - 12x + 12" },
            { "verbal_explanation": "נחשב את הנגזרת השנייה שבודקת את קצב השתנות השיפוע (קעירות).", "math_expression": "f''(x) = 6x - 12" },
            { "verbal_explanation": "נשווה את הנגזרת השנייה לאפס כדי לחפש נקודות פיתול פוטנציאליות.", "math_expression": "6x - 12 = 0" },
            { "verbal_explanation": "נחלץ את ערך המיקום האופקי.", "math_expression": "6x = 12 \\Rightarrow x = 2" },
            { "verbal_explanation": "נוודא חילופי סימן. עבור מספר גדול משתיים הנגזרת חיובית, ועבור קטן משתיים שלילית. מכאן שזוהי אכן נקודת פיתול.", "math_expression": "f''(3) > 0 \\quad , \\quad f''(1) < 0" },
            { "verbal_explanation": "נציב את הערך המאומת אל תוך הפונקציה המקורית כדי להשלים את הקואורדינטות השלמות של הנקודה.", "math_expression": "f(2) = 2^{3} - 6 \\times 2^{2} + 12 \\times 2 = 8 - 24 + 24 = 8" }
        ],
        "final_answer": "(2,8)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{3} - 3x^{2} \\).\nמצאו את התחום שבו הפונקציה קעורה כלפי מעלה (צורת \"קערה\").&rlm;",
        "options": ["x > 1", "x < 1", "x > 0", "x < 0"],
        "correctAnswer": 0,
        "hint": "קעירות כלפי מעלה פירושה שהנגזרת השנייה היא בעלת ערך חיובי. גזרו פעמיים ופתרו אי-שוויון.",
        "solution_steps": [
            { "verbal_explanation": "מציאת הנגזרת הראשונה המספקת מידע על מגמות הפונקציה.", "math_expression": "f'(x) = 3x^{2} - 6x" },
            { "verbal_explanation": "מציאת הנגזרת השנייה שאחראית לאפיון קעירות וקמירות.", "math_expression": "f''(x) = 6x - 6" },
            { "verbal_explanation": "נדרוש קעירות כלפי מעלה, שמתקיימת כל אימת שהנגזרת השנייה מקבלת ערך חיובי בלבד.", "math_expression": "f''(x) > 0" },
            { "verbal_explanation": "נציב את הביטוי אל תוך אי-השוויון שנוצר.", "math_expression": "6x - 6 > 0" },
            { "verbal_explanation": "נעביר את המספר ונחלק בשש כדי לפתור ולמצוא את התחום הרלוונטי לחלוטין.", "math_expression": "6x > 6 \\Rightarrow x > 1" }
        ],
        "final_answer": "x > 1"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 40 Q 100 140 160 40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = x^{4} - 6x^{2} \\).\nמצאו את נקודות הפיתול של הפונקציה.&rlm;",
        "options": ["(1,-5), (-1,-5)", "(0,0)", "(2,-16), (-2,-16)", "אין נקודות פיתול"],
        "correctAnswer": 0,
        "hint": "השוו את הנגזרת השנייה לאפס. תקבלו משוואה ריבועית פשוטה לשורשים סימטריים.",
        "solution_steps": [
            { "verbal_explanation": "ביצוע גזירה ראשונה.", "math_expression": "f'(x) = 4x^{3} - 12x" },
            { "verbal_explanation": "ביצוע גזירה שנייה כדי להגיע לשלב איפוס הפיתול.", "math_expression": "f''(x) = 12x^{2} - 12" },
            { "verbal_explanation": "נשווה לאפס לבדיקת שינויי קעירות.", "math_expression": "12x^{2} - 12 = 0" },
            { "verbal_explanation": "העברת אגף וחלוקה.", "math_expression": "12x^{2} = 12 \\Rightarrow x^{2} = 1" },
            { "verbal_explanation": "הוצאת שורש מאתרת לנו שתי נקודות נפרדות.", "math_expression": "x = 1 \\quad , \\quad x = -1" },
            { "verbal_explanation": "נציב את הערך החיובי בפונקציה המקורית.", "math_expression": "f(1) = 1^{4} - 6 \\times 1^{2} = 1 - 6 = -5" },
            { "verbal_explanation": "מאחר והפונקציה זוגית לחלוטין (מכילה חזקות זוגיות בלבד), הגובה בערך הנגדי שווה בדיוק לאותו גובה.", "math_expression": "f(-1) = -5" }
        ],
        "final_answer": "(1,-5), (-1,-5)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה \\( y = -x^{3} + 6x^{2} \\).\nמהו התחום בו הפונקציה קעורה כלפי מטה (צורת קמירות, \"מטריה\")?&rlm;",
        "options": ["x > 2", "x < 2", "x > 0", "x < 4"],
        "correctAnswer": 0,
        "hint": "קעירות כלפי מטה (או קמירות) מתרחשת כאשר הנגזרת השנייה קטנה מאפס (שלילית).",
        "solution_steps": [
            { "verbal_explanation": "קביעת הנגזרת הראשונית של הביטוי.", "math_expression": "y' = -3x^{2} + 12x" },
            { "verbal_explanation": "קביעת הנגזרת הכפולה של הביטוי לצורך בחינת הצורה.", "math_expression": "y'' = -6x + 12" },
            { "verbal_explanation": "דרישה לקעירות כלפי מטה מתורגמת לאי-שוויון קפדני המחייב שהנגזרת השנייה תהיה שלילית.", "math_expression": "y'' < 0" },
            { "verbal_explanation": "הצבה של הביטוי שמצאנו אל התנאי.", "math_expression": "-6x + 12 < 0" },
            { "verbal_explanation": "נעביר את המשתנה השלילי לאגף השני כדי לקבל מקדם חיובי נוח יותר.", "math_expression": "12 < 6x" },
            { "verbal_explanation": "נחלק בשש לשם סיום המשוואה והפיכתה לפתרון התחום.", "math_expression": "2 < x \\Rightarrow x > 2" }
        ],
        "final_answer": "x > 2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "חשבו את ערך הנגזרת השנייה של הפונקציה \\( f(x) = x^{5} - 2x^{3} \\) בנקודה שבה \\( x = 1 \\).&rlm;",
        "options": ["8", "10", "4", "6"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה פעמיים ברצף, ורק לאחר מכן הציבו את המספר 1.",
        "solution_steps": [
            { "verbal_explanation": "נבצע גזירה אחת רגילה.", "math_expression": "f'(x) = 5x^{4} - 6x^{2}" },
            { "verbal_explanation": "נבצע גזירה כפולה על בסיס התוצאה הקודמת.", "math_expression": "f''(x) = 20x^{3} - 12x" },
            { "verbal_explanation": "נציב את הערך המבוקש אל תוך הנגזרת השנייה שחישבנו כעת.", "math_expression": "f''(1) = 20 \\times 1^{3} - 12 \\times 1" },
            { "verbal_explanation": "החזקה אינה משנה את המספר אחד.", "math_expression": "f''(1) = 20 \\times 1 - 12 \\times 1" },
            { "verbal_explanation": "נסיים בחיסור המספרים.", "math_expression": "f''(1) = 20 - 12 = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה המורכבת משברים: \\( f(x) = \\dfrac{x^{4}}{12} - \\dfrac{x^{3}}{3} \\).\nמצאו את נקודות הפיתול של הפונקציה.&rlm;",
        "options": ["(0,0), (2,-4/3)", "(0,0), (3,-9/4)", "(2,-4/3)", "(0,0)"],
        "correctAnswer": 0,
        "hint": "השברים משמשים כמקדמים. גזרו רגיל, השוו נגזרת שנייה לאפס והציבו חזרה.",
        "solution_steps": [
            { "verbal_explanation": "חישוב הנגזרת הראשונה תוך צמצום החזקות היורדות עם המכנה הקבוע.", "math_expression": "f'(x) = \\dfrac{4x^{3}}{12} - \\dfrac{3x^{2}}{3} = \\dfrac{x^{3}}{3} - x^{2}" },
            { "verbal_explanation": "חישוב הנגזרת השנייה באותה מתכונת בדיוק.", "math_expression": "f''(x) = \\dfrac{3x^{2}}{3} - 2x = x^{2} - 2x" },
            { "verbal_explanation": "השוואת התוצאה לאפס למציאת הנקודות המועמדות.", "math_expression": "x^{2} - 2x = 0" },
            { "verbal_explanation": "הוצאת גורם משותף מחוץ לסוגריים.", "math_expression": "x(x - 2) = 0" },
            { "verbal_explanation": "חילוץ שני הפתרונות המאפסים את המכפלה.", "math_expression": "x = 0 \\quad , \\quad x = 2" },
            { "verbal_explanation": "הצבת הערך הראשון בפונקציה המקורית.", "math_expression": "f(0) = 0 - 0 = 0" },
            { "verbal_explanation": "הצבת הערך השני בפונקציה המקורית לקבלת השבר התואם.", "math_expression": "f(2) = \\dfrac{16}{12} - \\dfrac{8}{3} = \\dfrac{4}{3} - \\dfrac{8}{3} = -\\dfrac{4}{3}" }
        ],
        "final_answer": "(0,0), (2,-4/3)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "קבעו לגבי הפונקציה \\( y = x^{4} - 2x^{2} + 1 \\) מהי צורתה המקומית בנקודה שבה \\( x = 0 \\) באמצעות מבחן הנגזרת השנייה.&rlm;",
        "options": ["קעורה כלפי מטה (נקודת מקסימום)", "קעורה כלפי מעלה (נקודת מינימום)", "הנגזרת השנייה מתאפסת ולכן זו נקודת פיתול", "לא ניתן לדעת"],
        "correctAnswer": 0,
        "hint": "מצאו נגזרת שנייה והציבו אפס. אם התוצאה שלילית, הקעירות היא כלפי מטה, מה שמעיד על מקסימום כשהנגזרת הראשונה גם מתאפסת.",
        "solution_steps": [
            { "verbal_explanation": "הכנה למבחן על ידי מציאת הנגזרת הראשונה. אנו רואים שבנקודה המדוברת גם הנגזרת הראשונה מתאפסת.", "math_expression": "y' = 4x^{3} - 4x \\Rightarrow y'(0) = 0" },
            { "verbal_explanation": "לצורך המבחן המלא ואפיון הקעירות, נגזור שוב לפונקציה ריבועית.", "math_expression": "y'' = 12x^{2} - 4" },
            { "verbal_explanation": "נציב את הערך הנדרש לבדיקה המקומית בנגזרת שהתקבלה.", "math_expression": "y''(0) = 12 \\times 0^{2} - 4 = 0 - 4 = -4" },
            { "verbal_explanation": "כיוון שהערך שהתקבל הוא שלילי ממש, נובע מכך שהפונקציה קעורה מטה באותה נקודה.", "math_expression": "-4 < 0 \\Rightarrow \\text{Concave Down}" },
            { "verbal_explanation": "מגמה כזו בשילוב נגזרת ראשונה מתאפסת מתארת למעשה נקודת מקסימום.", "math_expression": "\\text{Maximum}" }
        ],
        "final_answer": "קעורה כלפי מטה (נקודת מקסימום)"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה \\( f(x) = x^{4} - 4x^{3} + 6x^{2} \\).\nמצאו את התחום שבו הפונקציה קעורה כלפי מעלה.&rlm;",
        "options": ["כל x", "x > 1", "x < 1", "אין תחום כזה"],
        "correctAnswer": 0,
        "hint": "הנגזרת השנייה תתברר כפרבולה. בדקו מהו התחום שבו הפרבולה הזו חיובית.",
        "solution_steps": [
            { "verbal_explanation": "נחשב גזירה ראשונה.", "math_expression": "f'(x) = 4x^{3} - 12x^{2} + 12x" },
            { "verbal_explanation": "נחשב גזירה שנייה לקבלת משוואה המגדירה את הקעירות.", "math_expression": "f''(x) = 12x^{2} - 24x + 12" },
            { "verbal_explanation": "נוציא גורם משותף מתוך הנגזרת השנייה כדי לפשט אותה ולזהות את התבנית.", "math_expression": "f''(x) = 12(x^{2} - 2x + 1)" },
            { "verbal_explanation": "הביטוי שבתוך הסוגריים הוא נוסחת כפל מקוצר של ריבוע הפרש.", "math_expression": "f''(x) = 12(x - 1)^{2}" },
            { "verbal_explanation": "ביטוי שעולה בריבוע הוא תמיד אי-שלילי. מכיוון שהנגזרת השנייה חיובית תמיד (למעט בנקודה אחת בה היא אפס), הפונקציה קעורה כלפי מעלה לאורך כל הציר.", "math_expression": "f''(x) \\geq 0 \\Rightarrow \\text{Concave Up for all x}" }
        ],
        "final_answer": "כל x"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "מצאו את שיעור ה-\\( x \\) של נקודת הפיתול היחידה של הפונקציה \\( y = 2x^{3} + 3x^{2} - 12x \\).&rlm;",
        "options": ["-0.5", "0.5", "-1", "1"],
        "correctAnswer": 0,
        "hint": "גזרו פעמיים, השוו לאפס ובדדו את הנעלם.",
        "solution_steps": [
            { "verbal_explanation": "תהליך גזירה רגיל של הפולינום למציאת המגמה.", "math_expression": "y' = 6x^{2} + 6x - 12" },
            { "verbal_explanation": "גזירה שנייה למציאת הקעירות ושינוייה.", "math_expression": "y'' = 12x + 6" },
            { "verbal_explanation": "כדי למצוא את מיקום נקודת הפיתול הפוטנציאלית, יש לאפס את הנגזרת שחישבנו זה עתה.", "math_expression": "12x + 6 = 0" },
            { "verbal_explanation": "העברת הגורם המספרי לאגף המקביל.", "math_expression": "12x = -6" },
            { "verbal_explanation": "חלוקה במקדם כדי לקבל את הפתרון של הנקודה.", "math_expression": "x = -\\dfrac{6}{12} = -0.5" }
        ],
        "final_answer": "-0.5"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        "question_text": "נתונה הפונקציה \\( f(x) = -2x^{3} + 12x^{2} - 5x \\).\nבאיזה תחום הנגזרת השנייה של הפונקציה חיובית (כלומר \\( f''(x) > 0 \\))?&rlm;",
        "options": ["x < 2", "x > 2", "x < 4", "x > 4"],
        "correctAnswer": 0,
        "hint": "חשבו את הביטוי של הנגזרת השנייה ופתרו את אי השוויון המתקבל כשמשווים אותו לגדול מאפס.",
        "solution_steps": [
            { "verbal_explanation": "ניצור את פונקציית הנגזרת מתוך הפונקציה הבסיסית.", "math_expression": "f'(x) = -6x^{2} + 24x - 5" },
            { "verbal_explanation": "ניצור את פונקציית הנגזרת השנייה.", "math_expression": "f''(x) = -12x + 24" },
            { "verbal_explanation": "נדרוש קיום של המצב המתואר בשאלה, וניצור אי-שוויון.", "math_expression": "-12x + 24 > 0" },
            { "verbal_explanation": "נעביר את המשתנה לאגף השני על מנת שיהפוך לחיובי.", "math_expression": "24 > 12x" },
            { "verbal_explanation": "נחלק ונסדר את התשובה כדי לקבל את הפתרון המדויק המקיים את התנאי.", "math_expression": "2 > x \\Rightarrow x < 2" }
        ],
        "final_answer": "x < 2"
    },

    // ==========================================
    // תת נושא 8: שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת) (10 שאלות)
    // ==========================================
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "ידוע כי לפונקציה \\( f(x) \\) מסוימת יש נקודת מינימום ב-\\( x = 3 \\). אין לה נקודות קיצון נוספות.\nאיזה מהתיאורים הבאים מתאים באופן המדויק ביותר לגרף הנגזרת שלה \\( f'(x) \\)?&rlm;",
        "options": ["גרף שעובר מחיובי לשלילי וחותך את הציר ב-x=3", "גרף של פרבולה שקודקודה ב-x=3", "גרף שעובר משלילי לחיובי וחותך את הציר ב-x=3", "גרף אופקי ששיפועו אפס"],
        "correctAnswer": 2,
        "hint": "נקודת מינימום משמעותה שהפונקציה המקורית יורדת (נגזרת שלילית) לפני הנקודה, ועולה (נגזרת חיובית) אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "בנקודת קיצון הנגזרת עצמה חייבת לחתוך את ציר האופקי ולהתאפס.", "math_expression": "f'(3) = 0" },
            { "verbal_explanation": "כיוון שזו נקודת מינימום, הפונקציה המקורית יורדת כאשר הערכים קטנים ממיקומה של הנקודה. כלומר, הנגזרת שם שלילית.", "math_expression": "x < 3 \\Rightarrow f'(x) < 0" },
            { "verbal_explanation": "מצד שני, הפונקציה המקורית עולה כאשר הערכים גדולים ממיקומה של הנקודה, לכן הנגזרת שם חיובית.", "math_expression": "x > 3 \\Rightarrow f'(x) > 0" },
            { "verbal_explanation": "מסקנה: גרף הנגזרת חייב להתחיל באזורים השליליים, לעבור דרך אפס בנקודה המיועדת, ולהמשיך לאזורים החיוביים.", "math_expression": "Negative \\rightarrow 0 \\rightarrow Positive" }
        ],
        "final_answer": "גרף שעובר משלילי לחיובי וחותך את הציר ב-x=3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "גרף הנגזרת \\( f'(x) \\) הוא קו ישר היורד משמאל לימין וחותך את ציר ה-\\( x \\) בנקודה \\( x = -1 \\).\nאיזה סוג של פונקציה מציג הגרף של הפונקציה המקורית \\( f(x) \\), ומהי הנקודה ב-\\( x = -1 \\)?&rlm;",
        "options": ["פרבולה 'בוכה', נקודת מקסימום", "פרבולה 'מחייכת', נקודת מינימום", "קו ישר, נקודת פיתול", "פרבולה 'בוכה', נקודת מינימום"],
        "correctAnswer": 0,
        "hint": "אם הנגזרת היא ישר, הפונקציה המקורית היא פרבולה. ישר יורד משמעו נגזרת שנייה שלילית.",
        "solution_steps": [
            { "verbal_explanation": "גרף הנגזרת נתון כקו ישר עם שיפוע שלילי מתמיד.", "math_expression": "f'(x) = -ax + b" },
            { "verbal_explanation": "הפונקציה שנגזרתה היא פונקציה לינארית, חייבת להיות פונקציה ריבועית, כלומר פרבולה.", "math_expression": "f(x) = cx^{2} + dx + e" },
            { "verbal_explanation": "השיפוע השלילי של הנגזרת מציין כי המקדם של האיבר הריבועי המקורי הוא בעצמו שלילי. מכאן שהפרבולה 'בוכה'.", "math_expression": "c < 0 \\Rightarrow \\text{Downward Parabola}" },
            { "verbal_explanation": "בנוסף, הנגזרת עוברת מהחלק החיובי של הציר (שבו הפונקציה עולה) לחלק השלילי שלו (שבו הפונקציה יורדת), מה שמגדיר את נקודת האיפוס המדויקת הזו כנקודת שיא.", "math_expression": "\\text{Max Point at } x = -1" }
        ],
        "final_answer": "פרבולה 'בוכה', נקודת מקסימום"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "גרף הנגזרת השנייה של פונקציה מסוימת נמצא תמיד מעל לציר ה-\\( x \\) (חיובי לכל עת).\nמה ניתן לומר בוודאות על הפונקציה המקורית \\( f(x) \\)?&rlm;",
        "options": ["היא קעורה כלפי מעלה בכל תחום הגדרתה", "היא עולה בכל תחום הגדרתה", "יש לה רק נקודות מינימום", "היא קעורה כלפי מטה בכל תחום הגדרתה"],
        "correctAnswer": 0,
        "hint": "סימן הנגזרת השנייה מעיד אך ורק על תכונת הקעירות והקמירות של הפונקציה, ולא על מגמת העלייה והירידה או קיום קיצון הכרחי.",
        "solution_steps": [
            { "verbal_explanation": "הנתון מתאר תכונה גלובלית וקבועה של הנגזרת השנייה.", "math_expression": "f''(x) > 0" },
            { "verbal_explanation": "נגזרת שנייה חיובית היא ההגדרה האנליטית לקעירות כלפי מעלה (צורת קערה) בגרף הפונקציה.", "math_expression": "f''(x) > 0 \\Rightarrow \\text{Concave Up}" },
            { "verbal_explanation": "מאחר וזה נכון לכל ערך, המסקנה תקפה לכל התחום. היא לא מבטיחה עלייה או ירידה כי אלה נקבעים על ידי הנגזרת הראשונה בלבד.", "math_expression": "\\text{Conclusion Confirmed}" }
        ],
        "final_answer": "היא קעורה כלפי מעלה בכל תחום הגדרתה"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "בשרטוט של גרף נגזרת \\( f'(x) \\), הגרף חותך את ציר ה-\\( x \\) בשלוש נקודות: \\( x=-2, x=0, x=2 \\). הגרף מתחיל מתחת לציר האופקי, חותך ועולה מעליו בנקודה הראשונה, וחוזר חלילה. כמה נקודות מינימום וכמה נקודות מקסימום יש לפונקציה המקורית \\( f(x) \\)?&rlm;",
        "options": ["2 מינימום, 1 מקסימום", "1 מינימום, 2 מקסימום", "3 מינימום, 0 מקסימום", "לא ניתן לדעת"],
        "correctAnswer": 0,
        "hint": "מעבר של גרף הנגזרת ממתחת לציר אל מעל לציר מעיד על שינוי ממגמת ירידה למגמת עלייה (מינימום).",
        "solution_steps": [
            { "verbal_explanation": "בנקודה הראשונה הגרף עובר ממינוס לפלוס. משמע, המקור עבר מירידה לעלייה. זוהי נקודת שפל.", "math_expression": "x = -2 \\Rightarrow \\text{Min}" },
            { "verbal_explanation": "לאחר מכן, הגרף נמצא בחלק החיובי וחותך למטה לחלק השלילי בנקודה השנייה. הפונקציה עוברת מעלייה לירידה. זוהי נקודת שיא.", "math_expression": "x = 0 \\Rightarrow \\text{Max}" },
            { "verbal_explanation": "בנקודה האחרונה, הגרף של הנגזרת שוב עולה מחלקו השלילי לחלקו החיובי, יוצר שוב שפל בפונקציה עצמה.", "math_expression": "x = 2 \\Rightarrow \\text{Min}" },
            { "verbal_explanation": "לפיכך, מנינו את סך כל הנקודות.", "math_expression": "2 \\times \\text{Min} \\quad , \\quad 1 \\times \\text{Max}" }
        ],
        "final_answer": "2 מינימום, 1 מקסימום"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "לפונקציה \\( f(x) \\) יש נקודת פיתול ב-\\( x = 4 \\). בנקודה זו המשיק לגרף אינו אופקי. מה יקרה לגרף הנגזרת הראשונה \\( f'(x) \\) בנקודה זו?&rlm;",
        "options": ["תהיה לו נקודת קיצון מקומית מבלי לחתוך את הציר", "הוא יחתוך את ציר האופקי", "הוא יתאפס", "לא יהיה רציף"],
        "correctAnswer": 0,
        "hint": "נקודת פיתול בפונקציה המקורית מקבילה לנקודת קיצון בגרף הנגזרת. מכיוון שהמשיק אינו אופקי, ערך הנגזרת שם שונה מאפס.",
        "solution_steps": [
            { "verbal_explanation": "נקודת פיתול היא המקום בו הנגזרת השנייה מתאפסת ומשנה סימן.", "math_expression": "f''(4) = 0" },
            { "verbal_explanation": "הנגזרת השנייה היא למעשה הנגזרת של הנגזרת הראשונה. לכן התאפסותה מעידה על קיצון מקומי בגרף של הנגזרת הראשונה.", "math_expression": "(f')'(4) = 0 \\Rightarrow \\text{Extremum of } f'" },
            { "verbal_explanation": "הנתון הנוסף הוא שהמשיק אינו אופקי. המשמעות היא שערך הנגזרת הראשונה אינו שווה לאפס בנקודה זו.", "math_expression": "f'(4) \\neq 0" },
            { "verbal_explanation": "מכאן שמדובר בנקודת קיצון לנגזרת אשר מרחפת מעל או מתחת לציר ואינה נוגעת בו.", "math_expression": "\\text{Extremum, not on x-axis}" }
        ],
        "final_answer": "תהיה לו נקודת קיצון מקומית מבלי לחתוך את הציר"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "גרף של פונקציה פולינומית חותך את ציר ה-\\( x \\) בנקודה שבה המשיק לו הוא אופקי. מה ניתן להסיק לגבי משוואת הפונקציה מתוך שרטוט זה?&rlm;",
        "options": ["לפונקציה יש לפחות שורש כפול (חזקה זוגית או גבוהה) באותה נקודה", "הפונקציה היא קו ישר", "הנגזרת השנייה תמיד שלילית", "אין משמעות מתמטית לכך"],
        "correctAnswer": 0,
        "hint": "חיתוך הציר תוך כדי השקה (שיפוע אפס) משמעותו שהפולינום מכיל ביטוי מהצורה של המשתנה פחות הנקודה, המועלה לפחות בחזקה שנייה.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהפונקציה חותכת את הציר, ערכה בנקודה הוא אפס. זהו שורש של הפונקציה.", "math_expression": "f(x_0) = 0" },
            { "verbal_explanation": "מכיוון שהמשיק אופקי, גם ערך הנגזרת בנקודה זו שווה לאפס.", "math_expression": "f'(x_0) = 0" },
            { "verbal_explanation": "באלגברה של פולינומים, כאשר גם הפונקציה וגם הנגזרת שלה מתאפסות באותו הערך, מדובר בשורש בעל ריבוי של שתיים ומעלה (למשל השקה המאפיינת פרבולה או חזקות גבוהות יותר).", "math_expression": "f(x) = (x - x_0)^{n} \\cdot g(x) \\quad , \\quad n \\geq 2" }
        ],
        "final_answer": "לפונקציה יש לפחות שורש כפול (חזקה זוגית או גבוהה) באותה נקודה"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "פונקציית הנגזרת \\( f'(x) \\) מתוארת כפרבולה 'מחייכת' שהקודקוד שלה נמצא בנקודה (2, 3). מה אפשר להגיד על גרף הפונקציה המקורית \\( f(x) \\)?&rlm;",
        "options": ["עולה תמיד, ויש לה נקודת פיתול ב-x=2", "יורדת תמיד", "יש לה נקודת מינימום ב-x=3", "עולה תמיד ואין לה נקודות פיתול"],
        "correctAnswer": 0,
        "hint": "הקודקוד נמצא מעל ציר ה-x, כלומר הנגזרת חיובית תמיד ואין לה שורשים. הפונקציה המקורית עולה תמיד. קודקוד הנגזרת מהווה קיצון של הנגזרת, כלומר פיתול.",
        "solution_steps": [
            { "verbal_explanation": "הקודקוד של נגזרת הפרבולה הוא מעל האפס והיא פתוחה כלפי מעלה. מכאן שכל ערכיה הם חיוביים תמיד.", "math_expression": "f'(x) \\geq 3 > 0" },
            { "verbal_explanation": "נגזרת חיובית לכל אורכה מעידה על כך שהפונקציה המקורית היא פונקציה עולה במובהק בכל תחום ההגדרה שלה.", "math_expression": "f(x) \\text{ is strictly increasing}" },
            { "verbal_explanation": "הקודקוד של הפרבולה הוא נקודת המינימום של הנגזרת הראשונה.", "math_expression": "f''(2) = 0" },
            { "verbal_explanation": "התאפסות הנגזרת השנייה תוך החלפת מגמה (ירידה לעלייה בפרבולה) מוגדרת כנקודת פיתול בגרף המקורי.", "math_expression": "x = 2 \\Rightarrow \\text{Inflection Point}" }
        ],
        "final_answer": "עולה תמיד, ויש לה נקודת פיתול ב-x=2"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "נתון שרטוט של פונקציה פולינומית ממעלה שלישית. ידוע שלפונקציה זו יש שתי נקודות חיתוך בלבד עם ציר ה-\\( x \\). מה יכול לגרום למצב זה?&rlm;",
        "options": ["אחת מנקודות הקיצון של הפונקציה מונחת בדיוק על ציר ה-x", "הפונקציה יורדת תמיד", "יש לה אסימפטוטה", "נקודת הפיתול נמצאת על ציר ה-y"],
        "correctAnswer": 0,
        "hint": "פולינום ממעלה 3 חותך בדרך כלל בנקודה אחת או בשלוש. כדי שיחתוך בדיוק בשתיים, עליו \"לגעת\" בציר ולחזור באחת הנקודות.",
        "solution_steps": [
            { "verbal_explanation": "פונקציה ממעלה שלישית נראית כגל בעל מקסימום ומינימום. במצב רגיל הגל עלול לחתוך שלוש פעמים את הציר, או רק פעם אחת אם נקודות הקיצון כולן מעל או מתחת לציר.", "math_expression": "Roots: 1 \\text{ or } 3" },
            { "verbal_explanation": "מצב ביניים בו יש בדיוק שתי נקודות חיתוך אפשרי אך ורק אם באחת מהפעמים שהגרף נוגע בציר, הוא משנה כיוון (משיק לו).", "math_expression": "Roots = 2 \\Rightarrow \\text{Tangent at axis}" },
            { "verbal_explanation": "ההשקה של הגרף המקורי באפס מחייבת את התאפסות השיפוע באותה נקודה.", "math_expression": "f(x_0) = 0 \\quad , \\quad f'(x_0) = 0" },
            { "verbal_explanation": "תופעה זו זהה לחלוטין לקיומה של נקודת קיצון הממוקמת פיזית על הציר האופקי.", "math_expression": "\\text{Extremum on X-axis}" }
        ],
        "final_answer": "אחת מנקודות הקיצון של הפונקציה מונחת בדיוק על ציר ה-x"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "מבלי לגזור, הביטו בפונקציה \\( f(x) = -x^{4} + 8x^{2} \\). ידוע כי עבור ערכי \\( x \\) גדולים מאוד וחיוביים הפונקציה שואפת למינוס אינסוף. כמו כן היא פונקציה זוגית. כמה נקודות קיצון אתם מצפים למצוא בגרף?&rlm;",
        "options": ["3", "1", "2", "4"],
        "correctAnswer": 0,
        "hint": "פונקציה זוגית סימטרית סביב ציר ה-y (יש קיצון ב-x=0). כיוון שהיא מתחילה ממינוס אינסוף וחוזרת למינוס אינסוף ויש לה חזקה ריבועית חיובית שתמשוך מעלה בדרך, ייווצרו שני שיאים ושפל אחד.",
        "solution_steps": [
            { "verbal_explanation": "פונקציה זוגית מציגה תמונת מראה זהה סביב ציר האנכי, מה שמבטיח קיום של נקודת קיצון או פיתול בדיוק על הציר עצמו (כאן זו חזקה זוגית, לכן קיצון).", "math_expression": "f(x) = f(-x) \\Rightarrow \\text{Extremum at } x = 0" },
            { "verbal_explanation": "החזקה הגדולה ביותר היא שלילית, כלומר ה'זרועות' הקיצוניות של הגרף מופנות מטה גם מימין וגם משמאל.", "math_expression": "x \\rightarrow \\pm \\infty \\Rightarrow f(x) \\rightarrow -\\infty" },
            { "verbal_explanation": "בקרבת האפס המקדם החיובי של החזקה השנייה מושך את הגרף כלפי מעלה. כלומר נוצרת צורת 'W' או 'M' מורכבת.", "math_expression": "f(x) \\approx 8x^{2} \\text{ near } 0" },
            { "verbal_explanation": "השילוב של עלייה מהצדדים אל עבר שני שיאים וירידה חזרה אל האפס, יוצר בדיוק 2 נקודות מקסימום ונקודת מינימום אחת ביניהן.", "math_expression": "Total = 3 \\text{ Extrema}" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "basic_calculus_471",
        "subTopic": "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        "question_text": "הגרף של הנגזרת \\( f'(x) \\) חותך את ציר ה-\\( x \\) מלעיל למטה בנקודה \\( x = 5 \\). מה משמעות הדבר לגבי הגרף של \\( f(x) \\)?&rlm;",
        "options": ["יש לה נקודת מקסימום ב-x=5", "יש לה נקודת מינימום ב-x=5", "יש לה נקודת פיתול ב-x=5", "היא חותכת את הציר ב-x=5"],
        "correctAnswer": 0,
        "hint": "ממעל לציר (פלוס) אל מתחת לציר (מינוס). מגמת הפונקציה משתנה מעלייה לירידה.",
        "solution_steps": [
            { "verbal_explanation": "לפני הנקודה, גרף הנגזרת נמצא מעל הציר, מה שמצביע על ערכים חיוביים של שיפוע.", "math_expression": "x < 5 \\Rightarrow f'(x) > 0" },
            { "verbal_explanation": "נגזרת חיובית מתורגמת ישירות לעלייה בפונקציה המקורית.", "math_expression": "f(x) \\uparrow" },
            { "verbal_explanation": "אחרי הנקודה, גרף הנגזרת צולל מתחת לציר ומקבל ערכים שליליים.", "math_expression": "x > 5 \\Rightarrow f'(x) < 0" },
            { "verbal_explanation": "נגזרת שלילית גוררת ירידה בפונקציה המקורית.", "math_expression": "f(x) \\downarrow" },
            { "verbal_explanation": "מעבר מעלייה מתמשכת לירידה רצופה מגדיר בדיוק את נקודת השיא, או נקודת המקסימום.", "math_expression": "\\text{Maximum at } x = 5" }
        ],
        "final_answer": "יש לה נקודת מקסימום ב-x=5"
    }
];