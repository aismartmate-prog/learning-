const questionsDB = [
    // ==========================================
    // תת נושא 1: מושג הפונקציה (10 שאלות)
    // ==========================================
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "מכונת מספרים (פונקציה) מקבלת מספר כקלט, כופלת אותו ב-4, ומחסרת מהתוצאה 3 כדי לייצר את הפלט. אם נכניס למכונה את המספר 5 כקלט, איזה מספר יצא כפלט?&rlm;",
        "options": ["17", "20", "8", "23"],
        "correctAnswer": 0,
        "hint": "הקלט הוא ערך ה-x. בצעו עליו את פעולות החשבון לפי הסדר שמתואר.",
        "solution_steps": [
            { "verbal_explanation": "המספר שהוכנס למכונה כקלט הוא חמש. נסמן אותו באות איקס.", "math_expression": "x = 5" },
            { "verbal_explanation": "הפעולה הראשונה של המכונה היא לכפול את הקלט בארבע.", "math_expression": "4 \\times 5" },
            { "verbal_explanation": "נחשב את תוצאת הכפל.", "math_expression": "20" },
            { "verbal_explanation": "הפעולה השנייה היא לחסר שלוש מהתוצאה שקיבלנו.", "math_expression": "20 - 3" },
            { "verbal_explanation": "נחשב ונקבל את הפלט הסופי של המכונה (ערך הוואי).", "math_expression": "y = 17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "על פי ההגדרה המתמטית של פונקציה, האם ייתכן שעבור קלט אחד (ערך של x) הפונקציה תיתן שני פלטים שונים (שני ערכים של y)?&rlm;",
        "options": ["לא, קלט אחד נותן תמיד פלט אחד בלבד", "כן, זה אפשרי בכל פונקציה", "כן, אבל רק אם הקלט חיובי", "לא, למעט במקרים מיוחדים"],
        "correctAnswer": 0,
        "hint": "חישבו על מכונת מיץ. אם תלחצו על כפתור של תפוזים, האם הגיוני שפעם ייצא מיץ תפוזים ופעם מיץ ענבים?",
        "solution_steps": [
            { "verbal_explanation": "ההגדרה המדויקת של פונקציה קובעת חוקיות חד-משמעית.", "math_expression": "x \\rightarrow y" },
            { "verbal_explanation": "לכל ערך שאנו מכניסים כקלט, מותאם בדיוק ערך אחד יחיד כפלט.", "math_expression": "1 \\rightarrow 1" },
            { "verbal_explanation": "מצב שבו מספר אחד הופך בו-זמנית לשני מספרים שונים סותר את הגדרת הפונקציה.", "math_expression": "1 \\neq 2" },
            { "verbal_explanation": "לכן, מצב כזה בלתי אפשרי והקשר לא ייחשב כפונקציה.", "math_expression": "x \\rightarrow y_{1} \\quad , \\quad x \\rightarrow y_{2} \\Rightarrow \\times" }
        ],
        "final_answer": "לא, קלט אחד נותן תמיד פלט אחד בלבד"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "נתון כלל הפונקציה הבא: \\( y = 5x + 2 \\). מה יהיה ערך הפלט \\( y \\) כאשר הקלט הוא \\( x = 3 \\)?&rlm;",
        "options": ["17", "15", "10", "21"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר 3 במקום האות x בתוך התבנית, וחשבו את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כלל הפונקציה שניתן לנו.", "math_expression": "y = 5x + 2" },
            { "verbal_explanation": "נציב את המספר שלוש במקום המשתנה איקס.", "math_expression": "y = 5 \\times 3 + 2" },
            { "verbal_explanation": "לפי סדר פעולות חשבון, נחשב קודם כל את תרגיל הכפל.", "math_expression": "5 \\times 3 = 15" },
            { "verbal_explanation": "נוסיף שתיים לתוצאת הכפל כדי לקבל את הפלט המלא.", "math_expression": "y = 15 + 2" },
            { "verbal_explanation": "הפלט הסופי הוא שבע עשרה.", "math_expression": "y = 17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "נתונה פונקציה המתוארת על ידי הכלל: \\( y = 20 - 2x \\). מה היה ערך הקלט \\( x \\), אם ידוע שהפלט שהתקבל הוא \\( y = 10 \\)?&rlm;",
        "options": ["5", "10", "0", "15"],
        "correctAnswer": 0,
        "hint": "הציבו 10 במקום ה-y ופתרו את המשוואה כדי למצוא את ה-x שהיה בהתחלה.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הערך הידוע של הפלט במקום המשתנה וואי בתבנית הפונקציה.", "math_expression": "10 = 20 - 2x" },
            { "verbal_explanation": "נוצרה לנו משוואה. נשאל את עצמנו: כמה צריך להוריד מעשרים כדי להישאר עם עשר?", "math_expression": "20 - 10 = 10" },
            { "verbal_explanation": "כלומר, האיבר המכיל את האיקס כולו שווה לעשר.", "math_expression": "2x = 10" },
            { "verbal_explanation": "כדי למצוא את איקס, נחלק את המשוואה בשתיים.", "math_expression": "10 \\div 2" },
            { "verbal_explanation": "הקלט ההתחלתי היה חמש.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "פונקציה מתאימה לכל מספר את המחצית שלו (החצי שלו). אם נכניס לפונקציה את הקלט 14, מה יהיה הפלט?&rlm;",
        "options": ["7", "28", "14", "2"],
        "correctAnswer": 0,
        "hint": "מהי הפעולה החשבונית שיוצרת חצי ממספר? חלקו את הקלט.",
        "solution_steps": [
            { "verbal_explanation": "הכלל של הפונקציה מוגדר כחלוקת הקלט לשתיים.", "math_expression": "y = x \\div 2" },
            { "verbal_explanation": "הקלט שניתן לנו להציב הוא ארבע עשרה.", "math_expression": "x = 14" },
            { "verbal_explanation": "נציב את הקלט בחוקיות הפונקציה.", "math_expression": "y = 14 \\div 2" },
            { "verbal_explanation": "נחשב את תוצאת החילוק.", "math_expression": "y = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "הכלל של פונקציה מסוימת הוא להוסיף 8 לכל קלט שמכניסים אליה. אם התקבל הפלט 15, מה היה הקלט שהוכנס למכונה?&rlm;",
        "options": ["7", "23", "15", "8"],
        "correctAnswer": 0,
        "hint": "אנו צריכים ללכת אחורה: במקום להוסיף 8, בצעו את הפעולה ההפוכה על הפלט כדי לחזור לקלט המקורי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את חוקיות הפונקציה בעזרת נעלמים ופעולת חיבור.", "math_expression": "y = x + 8" },
            { "verbal_explanation": "ידוע לנו ערך הפלט, ולכן נציב אותו במקום משתנה הוואי.", "math_expression": "15 = x + 8" },
            { "verbal_explanation": "כדי למצוא את הקלט (האיקס), נבצע את הפעולה ההפוכה ונחסר שמונה משני הצדדים.", "math_expression": "15 - 8" },
            { "verbal_explanation": "התוצאה היא הקלט ההתחלתי.", "math_expression": "x = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "מונית גובה סכום קבוע של 12 שקלים על עצם ההזמנה (התחלת נסיעה), ובנוסף 3 שקלים על כל קילומטר של נסיעה. איזו פונקציה תתאר נכון את המחיר הכולל (\\( y \\)) עבור נסיעה של \\( x \\) קילומטרים?&rlm;",
        "options": ["y = 3x + 12", "y = 12x + 3", "y = 15x", "y = 3x - 12"],
        "correctAnswer": 0,
        "hint": "המחיר הקבוע (12) מתווסף פעם אחת. המחיר המשתנה (3) מוכפל במספר הקילומטרים (x).",
        "solution_steps": [
            { "verbal_explanation": "המרכיב הראשון במחיר הוא התשלום הקבוע שאינו תלוי במרחק.", "math_expression": "12" },
            { "verbal_explanation": "המרכיב השני תלוי במרחק: שלושה שקלים לכל קילומטר.", "math_expression": "3 \\times x = 3x" },
            { "verbal_explanation": "המחיר הכולל מורכב מחיבור שני המרכיבים הללו יחד.", "math_expression": "y = 3x + 12" },
            { "verbal_explanation": "זוהי תבנית הפונקציה המלאה המתארת את העלות.", "math_expression": "y = 3x + 12" }
        ],
        "final_answer": "y = 3x + 12"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "נתונה הפונקציה \\( y = x^2 + 1 \\). מה יהיה הפלט עבור הקלט \\( x = 4 \\)?&rlm;",
        "options": ["17", "9", "16", "8"],
        "correctAnswer": 0,
        "hint": "קודם יש להעלות את המספר 4 בריבוע (לכפול אותו בעצמו), ורק אז להוסיף 1.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר ארבע במקום המשתנה איקס בפונקציה הנתונה.", "math_expression": "y = 4^2 + 1" },
            { "verbal_explanation": "נחשב תחילה את פעולת החזקה לפי סדר פעולות חשבון.", "math_expression": "4 \\times 4 = 16" },
            { "verbal_explanation": "כעת נוסיף את המספר אחד לתוצאה של החזקה.", "math_expression": "y = 16 + 1" },
            { "verbal_explanation": "נחבר ונקבל את ערכו של הפלט.", "math_expression": "y = 17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "האם ייתכן ששני קלטים שונים יתנו לאותה פונקציה בדיוק את אותו הפלט (אותה התוצאה)?&rlm;",
        "options": ["כן, פונקציה יכולה לתת את אותו הפלט למספר קלטים שונים", "לא, לכל קלט חייב להיות פלט שונה", "כן, אבל רק אם הקלטים הם אפס", "לא, זה סותר את הגדרת הפונקציה"],
        "correctAnswer": 0,
        "hint": "חשבו על פונקציה שנותנת תמיד את אותו פלט, למשל מחיר כרטיס קולנוע קבוע לכל גיל. ילד בן 10 ואדם בן 40 ישלמו אותו מחיר. האם זו פונקציה תקינה?",
        "solution_steps": [
            { "verbal_explanation": "הגדרת הפונקציה אוסרת רק על מצב שבו קלט יחיד מפיק יותר מתוצאה אחת.", "math_expression": "x \\rightarrow y_{1} , y_{2} \\Rightarrow \\times" },
            { "verbal_explanation": "אין שום בעיה ששני מספרים שונים (או אפילו כולם) יובילו לאותה התוצאה בדיוק. קשר כזה חוקי לחלוטין.", "math_expression": "x_{1} \\rightarrow y \\quad , \\quad x_{2} \\rightarrow y \\Rightarrow \\surd" },
            { "verbal_explanation": "לדוגמה, פונקציה שבה התוצאה תמיד שווה לחמש, ללא קשר למספר שנכניס.", "math_expression": "y = 5" },
            { "verbal_explanation": "לכן, המצב מתואר הוא הגיוני ואפשרי.", "math_expression": "\\text{Valid}" }
        ],
        "final_answer": "כן, פונקציה יכולה לתת את אותו הפלט למספר קלטים שונים"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "מושג הפונקציה",
        "question_text": "מכונת מספרים מוציאה את אותו הפלט בדיוק עבור כל קלט שמכניסים אליה. למשל, אם נכניס 2 ייצא 7, ואם נכניס 100 גם ייצא 7. איך נקראת פונקציה מסוג זה?&rlm;",
        "options": ["פונקציה קבועה", "פונקציה עולה", "פונקציה יורדת", "זו אינה פונקציה"],
        "correctAnswer": 0,
        "hint": "ערך הפלט לא משתנה לעולם, הוא נשאר תמיד על אותו מספר.",
        "solution_steps": [
            { "verbal_explanation": "נתבונן בהתנהגות של הפונקציה: עבור איקס שווה שתיים, וואי שווה שבע.", "math_expression": "x = 2 \\Rightarrow y = 7" },
            { "verbal_explanation": "עבור איקס שווה מאה, הוואי עדיין נשאר שבע ללא שום שינוי.", "math_expression": "x = 100 \\Rightarrow y = 7" },
            { "verbal_explanation": "הפלט אינו תלוי כלל בקלט, הוא מקובע על ערך יחיד.", "math_expression": "y = 7" },
            { "verbal_explanation": "פונקציה שבה ערך הפלט קבוע ולא זז נקראת 'פונקציה קבועה'.", "math_expression": "\\text{Constant}" }
        ],
        "final_answer": "פונקציה קבועה"
    },

    // ==========================================
    // תת נושא 2: ייצוג פונקציה בטבלה וגרף (10 שאלות)
    // ==========================================
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"10\" width=\"160\" height=\"100\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"40\" x2=\"180\" y2=\"40\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"110\" stroke=\"#0f172a\" stroke-width=\"2\"/><text x=\"55\" y=\"30\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">x</text><text x=\"135\" y=\"30\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">y</text><text x=\"55\" y=\"60\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">1</text><text x=\"135\" y=\"60\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">4</text><text x=\"55\" y=\"90\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">2</text><text x=\"135\" y=\"90\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">8</text></svg></div><br>לפניכם טבלת ערכים של פונקציה מסוימת. לפי החוקיות שניתן לראות בטבלה, מה תהיה המשוואה של הפונקציה הזו?&rlm;",
        "options": ["y = 4x", "y = x + 3", "y = 2x + 2", "y = x / 4"],
        "correctAnswer": 0,
        "hint": "בדקו מה הקשר בין הקלט x לפלט y בכל שורה בטבלה. איזה תרגיל מביא אותנו מ-1 ל-4 ומ-2 ל-8?",
        "solution_steps": [
            { "verbal_explanation": "נבחן את השורה הראשונה בטבלה ונבדוק את הקשר בין המספרים.", "math_expression": "1 \\rightarrow 4" },
            { "verbal_explanation": "הקשר יכול להיות חיבור של שלוש, או כפל בארבע.", "math_expression": "1 + 3 = 4 \\quad , \\quad 1 \\times 4 = 4" },
            { "verbal_explanation": "נבחן את השורה השנייה כדי לאמת את הכלל הנכון.", "math_expression": "2 \\rightarrow 8" },
            { "verbal_explanation": "אם נוסיף שלוש לשתיים, לא נקבל שמונה. אבל אם נכפול בארבע, כן נקבל שמונה.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "המסקנה היא שכלל הפונקציה הוא לכפול את ערך האיקס בארבע כדי לקבל את ערך הוואי.", "math_expression": "y = 4x" }
        ],
        "final_answer": "y = 4x"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"180\" x2=\"180\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"60\" cy=\"100\" r=\"4\" fill=\"#ef4444\"/><circle cx=\"100\" cy=\"60\" r=\"4\" fill=\"#ef4444\"/><circle cx=\"140\" cy=\"20\" r=\"4\" fill=\"#ef4444\"/><line x1=\"20\" y1=\"100\" x2=\"60\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1\" stroke-dasharray=\"3\"/><line x1=\"60\" y1=\"180\" x2=\"60\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1\" stroke-dasharray=\"3\"/><text x=\"55\" y=\"195\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">2</text><text x=\"5\" y=\"105\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">6</text><text x=\"135\" y=\"195\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">4</text><text x=\"5\" y=\"25\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">10</text></svg></div><br>בגרף המצורף מסומנות נקודות של פונקציה מסוימת. לפי הגרף, מהו ערך הפלט \\( y \\) כאשר ערך הקלט הוא \\( x = 2 \\)?&rlm;",
        "options": ["6", "10", "4", "2"],
        "correctAnswer": 0,
        "hint": "חפשו את המספר 2 על הציר האופקי, ואז עלו למעלה עד לנקודה המסומנת כדי לבדוק באיזה גובה היא נמצאת על הציר האנכי.",
        "solution_steps": [
            { "verbal_explanation": "נאתר את המספר שתיים על ציר האיקס, שהוא הציר האופקי למטה.", "math_expression": "x = 2" },
            { "verbal_explanation": "נעקוב לאורך הקו המקווקו שעולה כלפי מעלה מהמספר שתיים עד שנגיע לנקודה האדומה.", "math_expression": "\\uparrow" },
            { "verbal_explanation": "מהנקודה האדומה, נביט שמאלה אל ציר הוואי (הציר האנכי) כדי לקרוא את ערך הפלט שלה.", "math_expression": "\\leftarrow" },
            { "verbal_explanation": "המספר הרשום שם הוא שש. לכן הפלט הוא שש.", "math_expression": "y = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "נתונה משוואת הפונקציה הבאה: \\( y = 2x + 1 \\). אם נבנה לה טבלת ערכים, איזה ערך נרשום בעמודה של \\( y \\) עבור השורה שבה \\( x = 4 \\)?&rlm;",
        "options": ["9", "7", "8", "10"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך 4 בתוך התבנית של המשוואה כדי למצוא את הערך שצריך להיכתב בטבלה.",
        "solution_steps": [
            { "verbal_explanation": "טבלת ערכים בסך הכל מרכזת באופן מסודר את הקלטים והפלטים של הפונקציה.", "math_expression": "x \\rightarrow y" },
            { "verbal_explanation": "נתון לנו שהקלט (ערך האיקס בשורה) הוא ארבע.", "math_expression": "x = 4" },
            { "verbal_explanation": "נציב ארבע במשוואת הפונקציה.", "math_expression": "y = 2 \\times 4 + 1" },
            { "verbal_explanation": "נבצע את הכפל קודם ואז את החיבור למציאת הפלט.", "math_expression": "y = 8 + 1 = 9" },
            { "verbal_explanation": "הערך שיירשם בטבלה תחת העמודה של הוואי הוא תשע.", "math_expression": "y = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"140\" x2=\"160\" y2=\"60\" stroke=\"#3b82f6\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#ef4444\"/></svg></div><br>בגרף המצורף מסורטט קו ישר של פונקציה שחותך את ציר ה-\\( y \\) ואת ציר ה-\\( x \\) בדיוק בנקודת המפגש של הצירים. מהן הקואורדינטות (שיעורי ה-x וה-y) של הנקודה הזו?&rlm;",
        "options": ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
        "correctAnswer": 0,
        "hint": "נקודת המפגש המרכזית של מערכת הצירים נקראת 'ראשית הצירים' והיא נקודת ההתחלה שממנה מתחילים לספור.",
        "solution_steps": [
            { "verbal_explanation": "הנקודה ממוקמת בדיוק במרכז הצלב של מערכת הצירים.", "math_expression": "\\text{Center}" },
            { "verbal_explanation": "נקודה זו אינה זזה לא ימינה ולא שמאלה על הציר האופקי. לכן האיקס שלה הוא אפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "הנקודה גם אינה עולה למעלה או יורדת למטה על הציר האנכי. לכן גם הוואי שלה הוא אפס.", "math_expression": "y = 0" },
            { "verbal_explanation": "הזוג הסדור שמייצג נקודה זו הוא זוג אפסים.", "math_expression": "(0, 0)" }
        ],
        "final_answer": "(0, 0)"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "נתונה טבלת ערכים שבה כל פעם שערך ה-\\( x \\) עולה ב-1, ערך ה-\\( y \\) עולה בדיוק ב-3. אם ידוע שכאשר \\( x = 0 \\) אז \\( y = 2 \\), מה יהיה ערכו של \\( y \\) כאשר \\( x = 2 \\)?&rlm;",
        "options": ["8", "6", "5", "11"],
        "correctAnswer": 0,
        "hint": "אם התחלתם ב-2 והוספתם פעמיים 3, לאיזה מספר תגיעו?",
        "solution_steps": [
            { "verbal_explanation": "המצב ההתחלתי נתון לנו במדויק: כאשר איקס הוא אפס, הוואי הוא שתיים.", "math_expression": "x = 0 \\rightarrow y = 2" },
            { "verbal_explanation": "כאשר נתקדם לאיקס שווה אחד, נוסיף שלוש לערך הקודם של הוואי לפי החוקיות.", "math_expression": "x = 1 \\rightarrow y = 2 + 3 = 5" },
            { "verbal_explanation": "כאשר נתקדם לאיקס שווה שתיים, נוסיף שוב שלוש לערך האחרון של הוואי.", "math_expression": "x = 2 \\rightarrow y = 5 + 3 = 8" },
            { "verbal_explanation": "הגענו לערך המבוקש. הפלט הוא שמונה.", "math_expression": "y = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"60\" x2=\"180\" y2=\"60\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"105\" y=\"55\" font-family=\"Arial\" font-size=\"12\" fill=\"#10b981\">4</text></svg></div><br>לפניכם גרף של פונקציה שהיא קו אופקי המקביל לציר ה-\\( x \\). הקו חוצה את ציר ה-\\( y \\) בנקודה שבה \\( y = 4 \\). מה יהיה ערך ה-\\( y \\) עבור כל קלט \\( x \\) שנבחר (למשל \\( x = 100 \\))?&rlm;",
        "options": ["4", "100", "0", "104"],
        "correctAnswer": 0,
        "hint": "הקו אופקי וישר, ולכן הגובה שלו לא משתנה לעולם, לא משנה כמה נתקדם ימינה או שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "גרף שהוא קו ישר ואופקי לחלוטין מתאר פונקציה שאין לה שיפוע (פונקציה קבועה).", "math_expression": "\\text{Horizontal Line}" },
            { "verbal_explanation": "בפונקציה קבועה, הגובה (ערך הוואי) נשאר אותו הדבר עבור כל נקודה ונקודה על הציר האופקי.", "math_expression": "y = \\text{Const}" },
            { "verbal_explanation": "מכיוון שהקו עובר בגובה ארבע, הוא יישאר בגובה ארבע לנצח, גם עבור קלט גדול מאוד.", "math_expression": "y = 4" },
            { "verbal_explanation": "התשובה תמיד תהיה ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "בטבלת פונקציה מופיעים זוגות הערכים הבאים: הנקודה הראשונה היא \\( (0,2) \\), השנייה היא \\( (1,3) \\), והשלישית היא \\( (2,4) \\). מהו כלל הפונקציה המתאר את הקשר בין \\( x \\) ל-\\( y \\)?&rlm;",
        "options": ["y = x + 2", "y = 2x", "y = 3x", "y = x - 2"],
        "correctAnswer": 0,
        "hint": "בדקו עבור כל זוג נתון בטבלה: איזה תרגיל מפעילים על המספר השמאלי כדי לקבל בדיוק את המספר הימני?",
        "solution_steps": [
            { "verbal_explanation": "נבחן את הזוג הראשון: כיצד נגיע מאפס לשתיים? על ידי הוספת שתיים.", "math_expression": "0 + 2 = 2" },
            { "verbal_explanation": "נבדוק האם הכלל הזה חל גם על הזוג השני. נוסיף שתיים לאחד ונקבל שלוש. זה עובד.", "math_expression": "1 + 2 = 3" },
            { "verbal_explanation": "נוודא גם בזוג השלישי. נוסיף שתיים לשתיים ונקבל ארבע. הכלל עקבי ותקין.", "math_expression": "2 + 2 = 4" },
            { "verbal_explanation": "המסקנה היא שהפונקציה פשוט לוקחת את הקלט ומוסיפה לו שתיים.", "math_expression": "y = x + 2" }
        ],
        "final_answer": "y = x + 2"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"60\" r=\"5\" fill=\"#f59e0b\"/><line x1=\"140\" y1=\"100\" x2=\"140\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"1\" stroke-dasharray=\"3\"/><line x1=\"100\" y1=\"60\" x2=\"140\" y2=\"60\" stroke=\"#0f172a\" stroke-width=\"1\" stroke-dasharray=\"3\"/><text x=\"135\" y=\"115\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">3</text><text x=\"85\" y=\"65\" font-family=\"Arial\" font-size=\"12\" fill=\"#0f172a\">4</text></svg></div><br>מהם שיעורי הנקודה (הקואורדינטות) המסומנת בגרף שלפניכם? זכרו לרשום את הקלט ואז את הפלט.&rlm;",
        "options": ["(3, 4)", "(4, 3)", "(3, 0)", "(0, 4)"],
        "correctAnswer": 0,
        "hint": "הקואורדינטה הראשונה בסוגריים היא תמיד המיקום על הציר האופקי, והשנייה היא המיקום על הציר האנכי.",
        "solution_steps": [
            { "verbal_explanation": "כתיבת נקודה גאומטרית תמיד דורשת לשים את ערך הציר האופקי ראשון.", "math_expression": "(x, y)" },
            { "verbal_explanation": "נסתכל על הקו המקווקו היורד מהנקודה מטה אל הציר האופקי ונראה שהוא נופל על המספר שלוש.", "math_expression": "x = 3" },
            { "verbal_explanation": "נסתכל על הקו המקווקו הפונה שמאלה אל הציר האנכי ונראה שהוא מגיע למספר ארבע.", "math_expression": "y = 4" },
            { "verbal_explanation": "נרכיב את הזוג הסדור מתוך שני הערכים שאספנו.", "math_expression": "(3, 4)" }
        ],
        "final_answer": "(3, 4)"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "טבלה מייצגת את הפונקציה \\( y = 5x \\). באחת השורות, הערך הכתוב בעמודה של הפלט \\( y \\) הוא 35. איזה ערך חייב להיות חסר באותה שורה בעמודת הקלט \\( x \\)?&rlm;",
        "options": ["7", "30", "175", "5"],
        "correctAnswer": 0,
        "hint": "כדי למצוא את הקלט חזרה מתוך הפלט, בצעו את הפעולה ההפוכה. חלקו את 35 ב-5.",
        "solution_steps": [
            { "verbal_explanation": "הכלל של הפונקציה הוא לכפול את הקלט בחמש.", "math_expression": "y = 5x" },
            { "verbal_explanation": "הפעם הפלט ידוע לנו, ועלינו ללכת אחורה כדי למצוא את הקלט שיצר אותו.", "math_expression": "35 = 5x" },
            { "verbal_explanation": "כדי לבטל את הכפל ולמצוא את איקס, נחלק את הפלט בחמש.", "math_expression": "35 \\div 5" },
            { "verbal_explanation": "התוצאה היא שבע. לכן הקלט בטבלה היה שבע.", "math_expression": "x = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "ייצוג פונקציה בטבלה וגרף",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"140\" cy=\"60\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"140\" cy=\"140\" r=\"4\" fill=\"#0f172a\"/><line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"180\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg></div><br>בגרף שלפניכם מסורטטות שתי נקודות שיושבות בדיוק באותו הטור, אחת מעל השנייה (על אותו קו אנכי). האם שתי הנקודות הללו יכולות להשתייך לאותה פונקציה?&rlm;",
        "options": ["לא, כי קלט אחד נותן שני פלטים שונים", "כן, זה אפשרי בגרפים מיוחדים", "כן, כי הן מאוזנות", "לא, כי הן לא נוגעות בצירים"],
        "correctAnswer": 0,
        "hint": "זכרו את הכלל מהנושא הראשון: לפונקציה מותר להוציא רק פלט אחד לכל קלט. קו אנכי מייצג קלט אחד.",
        "solution_steps": [
            { "verbal_explanation": "הקו האנכי מייצג ערך אחד ספציפי ויחיד של קלט (איקס) במערכת הצירים.", "math_expression": "x = \\text{const}" },
            { "verbal_explanation": "שתי הנקודות יושבות על אותו הקו האנכי, מה שאומר שיש להן בדיוק את אותו הקלט.", "math_expression": "x_1 = x_2" },
            { "verbal_explanation": "אך הנקודות נמצאות בגבהים שונים, כלומר הפלט שלהן שונה.", "math_expression": "y_1 \\neq y_2" },
            { "verbal_explanation": "הגדרת הפונקציה אוסרת על קלט אחד להחזיר שני פלטים שונים. תופעה זו נקראת 'מבחן הישר האנכי'. הגרף אינו מתאר פונקציה.", "math_expression": "x \\rightarrow y_1 , y_2 \\Rightarrow \\times" }
        ],
        "final_answer": "לא, כי קלט אחד נותן שני פלטים שונים"
    },

    // ==========================================
    // תת נושא 3: פונקציה קווית (10 שאלות)
    // ==========================================
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "נתונה הפונקציה הקווית: \\( y = 4x + 7 \\). מהו המספר המייצג את קצב ההשתנות (השיפוע) של הפונקציה הזו?&rlm;",
        "options": ["4", "7", "11", "0"],
        "correctAnswer": 0,
        "hint": "השיפוע של פונקציה קווית הוא תמיד המספר שמוצמד (מוכפל) למשתנה x.",
        "solution_steps": [
            { "verbal_explanation": "משוואה של קו ישר בנויה משני חלקים: מספר שמכפיל את המשתנה, ומספר חופשי שניצב לבדו.", "math_expression": "y = mx + b" },
            { "verbal_explanation": "המספר שמכפיל את איקס קובע בכמה הפונקציה עולה או יורדת בכל צעד, והוא נקרא שיפוע.", "math_expression": "m" },
            { "verbal_explanation": "במשוואה הנתונה, המספר שמוכפל באיקס הוא ארבע. לכן ארבע הוא השיפוע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "נתונה הפונקציה: \\( y = -2x + 8 \\). על פי השיפוע שלה, האם גרף הפונקציה יתאר קו עולה, יורד, או קבוע (אופקי)?&rlm;",
        "options": ["יורד", "עולה", "קבוע", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "הביטו במספר הצמוד ל-x (השיפוע). האם הוא חיובי או שלילי? שיפוע שלילי משמעותו ירידה.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את השיפוע של הפונקציה, שהוא המספר המקדם של המשתנה.", "math_expression": "-2" },
            { "verbal_explanation": "השיפוע הוא שלילי, כלומר קטן מאפס.", "math_expression": "-2 < 0" },
            { "verbal_explanation": "כאשר השיפוע שלילי, המשמעות היא שבכל התקדמות קדימה בציר האופקי, הפונקציה מאבדת גובה. כלומר, הקו יורד.", "math_expression": "\\searrow" }
        ],
        "final_answer": "יורד"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "מהי נקודת החיתוך (המפגש) של גרף הפונקציה הקווית \\( y = 3x - 5 \\) עם ציר ה-\\( y \\) האנכי?&rlm;",
        "options": ["(0, -5)", "(0, 3)", "(3, -5)", "(-5, 0)"],
        "correctAnswer": 0,
        "hint": "על ציר ה-y, ערך ה-x הוא תמיד 0. הציבו 0 במקום x במשוואה ותראו איזה מספר נשאר לכם.",
        "solution_steps": [
            { "verbal_explanation": "נקודת המפגש של גרף עם הציר האנכי מתרחשת במקום שבו הציר האופקי עומד על אפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "נציב אפס בתוך המשוואה במקום המשתנה.", "math_expression": "y = 3 \\times 0 - 5" },
            { "verbal_explanation": "כל מספר כפול אפס הופך לאפס, ומה שנשאר הוא רק המספר החופשי.", "math_expression": "y = 0 - 5 = -5" },
            { "verbal_explanation": "הנקודה מורכבת מאיקס שווה אפס, ווואי שווה מינוס חמש.", "math_expression": "(0, -5)" }
        ],
        "final_answer": "(0, -5)"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"180\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"180\" x2=\"140\" y2=\"20\" stroke=\"#10b981\" stroke-width=\"2\"/></svg></div><br>גרף של פונקציה קווית עובר בדיוק דרך ראשית הצירים \\( (0,0) \\) וגם דרך הנקודה \\( (1,4) \\). מהו כלל (משוואת) הפונקציה הזו?&rlm;",
        "options": ["y = 4x", "y = x + 4", "y = 4x + 1", "y = x / 4"],
        "correctAnswer": 0,
        "hint": "הפונקציה עולה מ-0 ל-4 כשמתקדמים צעד אחד. לכן השיפוע הוא 4. והיא עוברת באפס, לכן אין מספר חופשי.",
        "solution_steps": [
            { "verbal_explanation": "כאשר קו ישר חותך את ראשית הצירים, המשמעות היא שאין לו תוספת חופשית במשוואה.", "math_expression": "+ 0" },
            { "verbal_explanation": "כדי למצוא את השיפוע, נבדוק כמה הגרף עלה כאשר צעדנו צעד אחד ימינה.", "math_expression": "x = 1 \\rightarrow y = 4" },
            { "verbal_explanation": "עלייה של ארבעה שלבים עבור צעד יחיד פירושה שהשיפוע הוא ארבע.", "math_expression": "4" },
            { "verbal_explanation": "נרשום את המשוואה המלאה עם השיפוע שמצאנו.", "math_expression": "y = 4x" }
        ],
        "final_answer": "y = 4x"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "שני קווים ישרים המצוירים בגרף מקבילים לחלוטין זה לזה ולעולם אינם נחתכים. מהו המאפיין המשותף שחייב להיות למשוואות של שתי הפונקציות הללו?&rlm;",
        "options": ["יש להן בדיוק את אותו השיפוע", "יש להן את אותה נקודת חיתוך עם ציר y", "הן פונקציות קבועות", "הן תמיד עוברות בראשית הצירים"],
        "correctAnswer": 0,
        "hint": "קווים שלא נפגשים צריכים לטפס למעלה או לרדת למטה בדיוק באותו הקצב כדי לשמור על מרחק קבוע ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "קווים מקבילים שומרים על מרחק קבוע אחד מהשני לאורך כל הדרך.", "math_expression": "\\parallel" },
            { "verbal_explanation": "כדי שזה יקרה, הם חייבים להיות מוטים בדיוק באותה הזווית ולהשתנות באותו הקצב.", "math_expression": "\\text{Same Angle}" },
            { "verbal_explanation": "קצב ההשתנות של קו ישר במתמטיקה מיוצג על ידי השיפוע שלו.", "math_expression": "\\text{Slope}" },
            { "verbal_explanation": "מכאן שחובה שיהיה לשניהם את אותו השיפוע המדויק.", "math_expression": "m_1 = m_2" }
        ],
        "final_answer": "יש להן בדיוק את אותו השיפוע"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "נתונה הפונקציה: \\( y = 2x - 10 \\). באיזו נקודה הגרף של פונקציה זו חותך את ציר ה-\\( x \\) האופקי (היכן שהפונקציה מתאפסת)?&rlm;",
        "options": ["(5, 0)", "(0, -10)", "(10, 0)", "(0, 5)"],
        "correctAnswer": 0,
        "hint": "על ציר ה-x, הגובה הוא 0. הציבו 0 במקום y, ופתרו משוואה פשוטה כדי למצוא את x.",
        "solution_steps": [
            { "verbal_explanation": "נקודת מפגש עם הציר האופקי מתרחשת כאשר למשלוש אין שום גובה. לכן, הפלט שווה לאפס.", "math_expression": "y = 0" },
            { "verbal_explanation": "נציב אפס במקום המשתנה השמאלי ונרכיב משוואה.", "math_expression": "0 = 2x - 10" },
            { "verbal_explanation": "כדי למצוא את המשתנה, נעביר את העשר לאגף השני בסימן חיובי.", "math_expression": "10 = 2x" },
            { "verbal_explanation": "נחלק בשתיים. המספר שיתקבל הוא מיקום החיתוך על הציר.", "math_expression": "x = 5" },
            { "verbal_explanation": "הנקודה המלאה היא חמש באופק ואפס בגובה.", "math_expression": "(5, 0)" }
        ],
        "final_answer": "(5, 0)"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "בטבלת נתונים של פונקציה קווית, רואים שכל פעם שערך הקלט (\\( x \\)) גדל ב-1, ערך הפלט (\\( y \\)) קטן ב-3. מהו השיפוע של הפונקציה הזו?&rlm;",
        "options": ["-3", "3", "1", "-1"],
        "correctAnswer": 0,
        "hint": "השיפוע מוגדר ככמות השינוי ב-y על כל שינוי של יחידה אחת ב-x. אם הכמות קטנה, הסימן יהיה שלילי.",
        "solution_steps": [
            { "verbal_explanation": "שיפוע של קו ישר מחושב על פי מדרגות: כמה הגובה משתנה כשמתקדמים צעד אחד קדימה.", "math_expression": "\\text{Step Size}" },
            { "verbal_explanation": "נתון לנו שהתקדמות של צעד אחד גורמת לפלט להקטין את ערכו בשלוש.", "math_expression": "\\text{Down } 3" },
            { "verbal_explanation": "הקטנה או ירידה מתורגמת בחשבון לסימן שלילי. המספר שלוש יקבל מינוס לפניו.", "math_expression": "-3" },
            { "verbal_explanation": "השיפוע של הקו הוא מינוס שלוש.", "math_expression": "-3" }
        ],
        "final_answer": "-3"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "מהי משוואת הפונקציה של קו ישר אשר לו שיפוע שווה ל-2, והוא עובר דרך הנקודה \\( (0, 5) \\) הנמצאת על ציר ה-\\( y \\)?&rlm;",
        "options": ["y = 2x + 5", "y = 5x + 2", "y = 2x - 5", "y = 2x"],
        "correctAnswer": 0,
        "hint": "משוואת ישר מורכבת משיפוע כפול x, ועוד נקודת החיתוך עם ציר ה-y.",
        "solution_steps": [
            { "verbal_explanation": "התבנית הכללית של פונקציה קווית דורשת שני איברים להשלמה: השיפוע והמספר החופשי.", "math_expression": "y = mx + b" },
            { "verbal_explanation": "השיפוע נתון לנו מראש באופן ישיר והוא שתיים.", "math_expression": "2" },
            { "verbal_explanation": "נקודת המפגש עם הציר האנכי מספרת לנו מהו המספר החופשי בסוף המשוואה. הנקודה היא בגובה חמש.", "math_expression": "5" },
            { "verbal_explanation": "נרכיב הכל יחד לתוך התבנית: שתיים כפול איקס ועוד חמש.", "math_expression": "y = 2x + 5" }
        ],
        "final_answer": "y = 2x + 5"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "נתונה פונקציה שבה השיפוע הוא 0. כלומר, \\( y = 0x + 6 \\), שזה פשוט \\( y = 6 \\). איך ייראה הגרף של פונקציה כזו?&rlm;",
        "options": ["קו אופקי המקביל לציר ה-x", "קו אנכי המקביל לציר ה-y", "קו אלכסוני שעולה למעלה", "נקודה אחת בלבד בראשית הצירים"],
        "correctAnswer": 0,
        "hint": "שיפוע של 0 אומר שאין עלייה ואין ירידה. הקו נשאר מאוזן ויציב באותו הגובה.",
        "solution_steps": [
            { "verbal_explanation": "כאשר השיפוע הוא אפס, המשתנה נעלם והפונקציה תלויה רק במספר החופשי.", "math_expression": "0x = 0" },
            { "verbal_explanation": "המשוואה הופכת לכך שערך הפלט קבוע תמיד על שש, לכל קלט אפשרי.", "math_expression": "y = 6" },
            { "verbal_explanation": "אם הגובה נשאר שש ולא משתנה גם כשאנו זזים קדימה, הקו שמצויר הוא ישר ושטוח לחלוטין.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "קו כזה נקרא קו אופקי, והוא מקביל לציר האופקי של המערכת.", "math_expression": "\\text{Horizontal}" }
        ],
        "final_answer": "קו אופקי המקביל לציר ה-x"
    },
    {
        "topic": "functions_grade_7",
        "subTopic": "פונקציה קווית",
        "question_text": "בעיה מילולית: בתחילת הקיץ היו בבריכה 500 ליטרים של מים. בכל שעה צינור ממלא לבריכה עוד 50 ליטרים של מים. איזו פונקציה תתאר את כמות המים בבריכה (\\( y \\)) לאחר \\( x \\) שעות של מילוי?&rlm;",
        "options": ["y = 50x + 500", "y = 500x + 50", "y = 550x", "y = 50x - 500"],
        "correctAnswer": 0,
        "hint": "הכמות ההתחלתית (נקודת ההתחלה) היא המספר שמופיע לבדו בחיבור, ללא ה-x. הכמות המתווספת כל שעה היא השיפוע שמוכפל ב-x.",
        "solution_steps": [
            { "verbal_explanation": "הכמות ההתחלתית בבריכה לפני תחילת המילוי היא חמש מאות. מספר זה יהיה המספר החופשי במשוואה.", "math_expression": "500" },
            { "verbal_explanation": "קצב המילוי של הבריכה הוא חמישים ליטרים בכל שעה שעוברת. מספר זה הוא השיפוע שלנו.", "math_expression": "50" },
            { "verbal_explanation": "נכפול את השיפוע במספר השעות ונחבר אליו את הכמות ההתחלתית לבניית המשוואה המלאה.", "math_expression": "50 \\times x + 500" },
            { "verbal_explanation": "כך נקבל את פונקציית המילוי החוקית.", "math_expression": "y = 50x + 500" }
        ],
        "final_answer": "y = 50x + 500"
    }
];