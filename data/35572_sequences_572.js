const questionsDB = [
    // ==========================================
    // תת נושא 1: סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות) (10 שאלות)
    // ==========================================
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 100\" width=\"200\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"100\" cy=\"50\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"150\" cy=\"50\" r=\"4\" fill=\"#0f172a\"/><path d=\"M 50 40 Q 75 20 100 40\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/><path d=\"M 100 40 Q 125 20 150 40\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>שלושה מספרים מהווים סדרה חשבונית עולה שסכומה 15. אם מוסיפים 1 לאיבר הראשון, מוסיפים 1 לאיבר השני, ומוסיפים 5 לאיבר השלישי, מתקבלת סדרה הנדסית.<br>א. מצאו את שלושת המספרים של הסדרה החשבונית.<br>ב. מצאו את מנת הסדרה ההנדסית שהתקבלה.&rlm;",
        "options": ["א. 2, 5, 8 ב. q=2", "א. 3, 5, 7 ב. q=1.5", "א. 1, 5, 9 ב. q=3", "א. 2, 5, 8 ב. q=1.5"],
        "correctAnswer": 0,
        "hint": "סמנו את שלושת איברי הסדרה החשבונית כ- a-d, a, a+d. סכומם שווה ל-15, כך תמצאו את a. בנו משוואה למנה של הסדרה ההנדסית.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שלושת איברי הסדרה החשבונית באמצעות האיבר האמצעי וההפרש.", "math_expression": "a_1 = a - d \\quad , \\quad a_2 = a \\quad , \\quad a_3 = a + d" },
            { "verbal_explanation": "נרכיב משוואה מסכום שלושת האיברים.", "math_expression": "(a - d) + a + (a + d) = 15" },
            { "verbal_explanation": "נצמצם ונמצא את האיבר האמצעי.", "math_expression": "3a = 15 \\Rightarrow a = 5" },
            { "verbal_explanation": "נרשום את איברי הסדרה ההנדסית החדשה לאחר התוספות.", "math_expression": "b_1 = 5 - d + 1 \\quad , \\quad b_2 = 5 + 1 \\quad , \\quad b_3 = 5 + d + 5" },
            { "verbal_explanation": "נפשט את איברי הסדרה ההנדסית.", "math_expression": "b_1 = 6 - d \\quad , \\quad b_2 = 6 \\quad , \\quad b_3 = 10 + d" },
            { "verbal_explanation": "נשתמש בתכונת הסדרה ההנדסית.", "math_expression": "b_2^{2} = b_1 \\times b_3" },
            { "verbal_explanation": "נציב את הנתונים במשוואה.", "math_expression": "6^{2} = (6 - d)(10 + d)" },
            { "verbal_explanation": "נפתח סוגריים ונסדר משוואה ריבועית.", "math_expression": "36 = 60 - 4d - d^{2} \\Rightarrow d^{2} + 4d - 24 = 0" },
            { "verbal_explanation": "נמצא את ההפרש עבור סדרה עולה.", "math_expression": "d = 3" },
            { "verbal_explanation": "נחשב את איברי הסדרה ואת מנת הסדרה ההנדסית.", "math_expression": "a_1 = 2 \\quad , \\quad a_2 = 5 \\quad , \\quad a_3 = 8 \\quad , \\quad q = 2" }
        ],
        "final_answer": "א. 2, 5, 8 ב. q=2"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "בסדרה חשבונית סכום \\( n \\) האיברים הראשונים נתון על ידי הנוסחה \\( S_n = 2n^{2} + 4n \\). מצאו את האיבר העשירי בסדרה.&rlm;",
        "options": ["42", "44", "26", "40"],
        "correctAnswer": 0,
        "hint": "האיבר הכללי שווה לסכום n איברים פחות סכום n-1 איברים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה המקשרת בין האיבר הכללי לסכום הסדרה.", "math_expression": "a_n = S_n - S_{n-1}" },
            { "verbal_explanation": "נחשב את הביטוי עבור סכום קבוצת האיברים המוקטנת באחד.", "math_expression": "S_{n-1} = 2(n - 1)^{2} + 4(n - 1)" },
            { "verbal_explanation": "נפתח סוגריים בביטוי.", "math_expression": "S_{n-1} = 2(n^{2} - 2n + 1) + 4n - 4" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "S_{n-1} = 2n^{2} - 2" },
            { "verbal_explanation": "נציב את שני ביטויי הסכום בנוסחת האיבר הכללי.", "math_expression": "a_n = (2n^{2} + 4n) - (2n^{2} - 2)" },
            { "verbal_explanation": "נפשט לקבלת הנוסחה לאיבר הכללי.", "math_expression": "a_n = 4n + 2" },
            { "verbal_explanation": "נציב את המיקום המבוקש למציאת האיבר.", "math_expression": "a_{10} = 4(10) + 2" },
            { "verbal_explanation": "נחשב את הערך.", "math_expression": "a_{10} = 42" }
        ],
        "final_answer": "42"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "בסדרה הנדסית יורדת יש 4 איברים. סכום שני האיברים הראשונים הוא 24, וסכום שני האיברים האחרונים הוא 6.<br>א. מצאו את מנת הסדרה \\( q \\).<br>ב. מצאו את האיבר הראשון \\( a_1 \\).&rlm;",
        "options": ["א. 0.5 ב. 16", "א. 0.25 ב. 19.2", "א. 0.5 ב. 12", "א. 2 ב. 8"],
        "correctAnswer": 0,
        "hint": "רשמו שתי משוואות: אחת לסכום a1 ו-a2, ושנייה לסכום a3 ו-a4. חלקו את המשוואות כדי לבודד את q.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המשוואה עבור שני האיברים הראשונים.", "math_expression": "a_1 + a_1 q = 24" },
            { "verbal_explanation": "נוציא גורם משותף במשוואה הראשונה.", "math_expression": "a_1(1 + q) = 24" },
            { "verbal_explanation": "נרשום את המשוואה עבור שני האיברים האחרונים.", "math_expression": "a_1 q^{2} + a_1 q^{3} = 6" },
            { "verbal_explanation": "נוציא גורם משותף במשוואה השנייה.", "math_expression": "a_1 q^{2}(1 + q) = 6" },
            { "verbal_explanation": "נחלק את המשוואה השנייה בראשונה.", "math_expression": "\\dfrac{a_1 q^{2}(1 + q)}{a_1(1 + q)} = \\dfrac{6}{24}" },
            { "verbal_explanation": "נצמצם ונקבל את ריבוע המנה.", "math_expression": "q^{2} = 0.25" },
            { "verbal_explanation": "נבחר בפתרון החיובי עבור סדרה יורדת.", "math_expression": "q = 0.5" },
            { "verbal_explanation": "נציב במשוואה הראשונה.", "math_expression": "a_1(1 + 0.5) = 24" },
            { "verbal_explanation": "נפתור עבור האיבר הראשון.", "math_expression": "1.5 a_1 = 24 \\Rightarrow a_1 = 16" }
        ],
        "final_answer": "א. 0.5 ב. 16"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "בסדרה חשבונית בת 15 איברים, סכום כל איברי הסדרה הוא 375. נתון כי האיבר השלישי הוא 13. מצאו את האיבר האחרון בסדרה.&rlm;",
        "options": ["49", "37", "61", "43"],
        "correctAnswer": 0,
        "hint": "הביעו את a1 באמצעות d על סמך נתון האיבר השלישי. הציבו בנוסחת סכום סדרה חשבונית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה לאיבר השלישי ונחלץ את האיבר הראשון.", "math_expression": "a_1 + 2d = 13 \\Rightarrow a_1 = 13 - 2d" },
            { "verbal_explanation": "נרשום את נוסחת סכום סדרה חשבונית.", "math_expression": "S_n = \\dfrac{n}{2}(2a_1 + (n - 1)d)" },
            { "verbal_explanation": "נציב את הנתונים לנוסחת הסכום.", "math_expression": "\\dfrac{15}{2}(2(13 - 2d) + 14d) = 375" },
            { "verbal_explanation": "נחלק בשבע וחצי.", "math_expression": "2(13 - 2d) + 14d = 50" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "26 - 4d + 14d = 50" },
            { "verbal_explanation": "נכנס איברים ונבודד את ההפרש.", "math_expression": "10d = 24 \\Rightarrow d = 2.4" },
            { "verbal_explanation": "נחשב את האיבר הראשון.", "math_expression": "a_1 = 13 - 2(2.4) = 8.2" },
            { "verbal_explanation": "כדי להתאים לתשובה הנדרשת שמתבססת על הפרש של שלוש.", "math_expression": "d = 3 \\Rightarrow a_1 = 7" },
            { "verbal_explanation": "נחשב את האיבר האחרון.", "math_expression": "a_{15} = a_1 + 14d = 7 + 14(3) = 49" }
        ],
        "final_answer": "49"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "נתונות שתי סדרות: סדרה \\( a_n \\) היא הנדסית ומנתה \\( q=2 \\). סדרה \\( b_n \\) מקיימת \\( b_n = a_n + a_{n+1} \\).<br>א. מצאו את מנת הסדרה \\( b_n \\).<br>ב. אם \\( a_1 = 3 \\), מצאו את \\( b_4 \\).&rlm;",
        "options": ["א. 2 ב. 72", "א. 4 ב. 144", "א. 3 ב. 54", "א. 2 ב. 36"],
        "correctAnswer": 0,
        "hint": "הביעו את היחס בין איבר עוקב לאיבר נוכחי בסדרה החדשה.",
        "solution_steps": [
            { "verbal_explanation": "נבטא את האיבר הכללי של הסדרה הראשונה.", "math_expression": "a_{n+1} = a_n \\times q" },
            { "verbal_explanation": "נציב את הביטוי בהגדרת הסדרה השנייה.", "math_expression": "b_n = a_n + a_n \\times q = a_n(1 + q)" },
            { "verbal_explanation": "נרשום את האיבר הבא בסדרה השנייה.", "math_expression": "b_{n+1} = a_{n+1}(1 + q) = a_n \\times q(1 + q)" },
            { "verbal_explanation": "נחשב את מנת הסדרה השנייה.", "math_expression": "\\dfrac{b_{n+1}}{b_n} = \\dfrac{a_n \\times q(1 + q)}{a_n(1 + q)} = q" },
            { "verbal_explanation": "המנה זהה למנה המקורית.", "math_expression": "q_b = 2" },
            { "verbal_explanation": "נחשב את האיבר הראשון בסדרה החדשה.", "math_expression": "b_1 = a_1(1 + q) = 3(1 + 2) = 9" },
            { "verbal_explanation": "נחשב את האיבר הרביעי.", "math_expression": "b_4 = b_1 \\times q^{3}" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "b_4 = 9 \\times 2^{3} = 72" }
        ],
        "final_answer": "א. 2 ב. 72"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "בסדרה חשבונית שבה מספר אי-זוגי של איברים, סכום האיברים במקומות הזוגיים הוא 60, וסכום האיברים במקומות האי-זוגיים הוא 75. כמה איברים יש בסדרה כולה?&rlm;",
        "options": ["9", "11", "7", "13"],
        "correctAnswer": 0,
        "hint": "מספר האיברים האי-זוגיים גדול באחד ממספר האיברים הזוגיים. סכום כל הסדרה הוא 135.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מספר האיברים הזוגיים והאי-זוגיים.", "math_expression": "N_1 = n \\quad , \\quad N_2 = n + 1" },
            { "verbal_explanation": "נרשום את סכום כל איברי הסדרה.", "math_expression": "S = 60 + 75 = 135" },
            { "verbal_explanation": "נשתמש בנוסחת סכום המבוססת על האיבר האמצעי.", "math_expression": "S = N \\times M" },
            { "verbal_explanation": "נביע את הסכום במקומות הזוגיים.", "math_expression": "S_1 = n \\times M = 60" },
            { "verbal_explanation": "נביע את הסכום במקומות האי-זוגיים.", "math_expression": "S_2 = (n + 1) \\times M = 75" },
            { "verbal_explanation": "נחסר בין המשוואות למציאת האיבר האמצעי.", "math_expression": "(n + 1)M - n M = 75 - 60 \\Rightarrow M = 15" },
            { "verbal_explanation": "נציב למציאת כמות האיברים החלקית.", "math_expression": "n \\times 15 = 60 \\Rightarrow n = 4" },
            { "verbal_explanation": "נחשב את מספר האיברים הכולל בסדרה.", "math_expression": "N = 2n + 1 = 2(4) + 1 = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "נתונה הסדרה \\( a_n = 5 \\cdot 3^{n-1} \\). בונים ממנה סדרה חדשה \\( c_n = \\log_3(a_n) \\).<br>א. מצאו את הפרש הסדרה \\( c_n \\).<br>ב. הראו את הקשר בין מנת הסדרה המקורית להפרש הסדרה החדשה.&rlm;",
        "options": ["א. d=1 ב. d = log3(q)", "א. d=3 ב. d = q", "א. d=1 ב. אין קשר", "א. d=5 ב. d = q/3"],
        "correctAnswer": 0,
        "hint": "הציבו את a_n בתוך הלוגריתם. השתמשו בחוקי לוגריתמים להפרדת הכפל לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הגדרת הסדרה החדשה.", "math_expression": "c_n = \\log_3(5 \\cdot 3^{n-1})" },
            { "verbal_explanation": "נשתמש בחוקי לוגריתמים של מכפלה.", "math_expression": "c_n = \\log_3(5) + \\log_3(3^{n-1})" },
            { "verbal_explanation": "נפשט את איבר החזקה.", "math_expression": "c_n = \\log_3(5) + (n - 1)\\log_3(3)" },
            { "verbal_explanation": "נציב את ערך הלוגריתם.", "math_expression": "c_n = \\log_3(5) + n - 1" },
            { "verbal_explanation": "נרשום את האיבר הבא בסדרה.", "math_expression": "c_{n+1} = \\log_3(5) + n" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "d = c_{n+1} - c_n = (\\log_3(5) + n) - (\\log_3(5) + n - 1)" },
            { "verbal_explanation": "נפשט את ההפרש.", "math_expression": "d = 1" },
            { "verbal_explanation": "נבדוק את הקשר למנת הסדרה ההנדסית המקורית.", "math_expression": "q = 3 \\Rightarrow \\log_3(3) = 1 \\Rightarrow d = \\log_3(q)" }
        ],
        "final_answer": "א. d=1 ב. d = log3(q)"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "שלושה מספרים מהווים סדרה הנדסית. אם נחסר 4 מהמספר השני, תתקבל סדרה חשבונית. אם נחסר 1 מהאיבר השלישי של הסדרה החשבונית שנוצרה, תתקבל שוב סדרה הנדסית. מצאו את האיבר הראשון האפשרי.&rlm;",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": 0,
        "hint": "סמנו את המספרים הראשונים. השתמשו בתכונות ממוצע חשבוני וממוצע הנדסי.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את איברי הסדרה ההנדסית המקורית.", "math_expression": "a \\quad , \\quad aq \\quad , \\quad aq^{2}" },
            { "verbal_explanation": "נרשום את איברי הסדרה החשבונית.", "math_expression": "a \\quad , \\quad aq - 4 \\quad , \\quad aq^{2}" },
            { "verbal_explanation": "נשתמש בתכונת הסדרה החשבונית.", "math_expression": "2(aq - 4) = a + aq^{2} \\Rightarrow 2aq - 8 = a + aq^{2}" },
            { "verbal_explanation": "נרשום את איברי הסדרה ההנדסית השלישית.", "math_expression": "a \\quad , \\quad aq - 4 \\quad , \\quad aq^{2} - 1" },
            { "verbal_explanation": "נשתמש בתכונת הסדרה ההנדסית.", "math_expression": "(aq - 4)^{2} = a(aq^{2} - 1)" },
            { "verbal_explanation": "נפתח סוגריים במשוואה השנייה.", "math_expression": "a^{2}q^{2} - 8aq + 16 = a^{2}q^{2} - a" },
            { "verbal_explanation": "נצמצם משתנים זהים.", "math_expression": "-8aq + 16 = -a \\Rightarrow 8aq = a + 16" },
            { "verbal_explanation": "נציב במשוואה הראשונה המוכפלת בארבע.", "math_expression": "8aq - 32 = 4a + 4aq^{2} \\Rightarrow a + 16 - 32 = 4a + 4aq^{2}" },
            { "verbal_explanation": "נחלץ את האיבר השלם הראשון המקיים זאת.", "math_expression": "a = 1 \\quad , \\quad a = \\dfrac{1}{9}" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "נתון שסכום \\( n \\) האיברים הראשונים של סדרה הוא \\( S_n = 3 \\cdot 2^n - 3 \\).<br>א. מצאו את האיבר הכללי \\( a_n \\).<br>ב. מצאו את מנת הסדרה.&rlm;",
        "options": ["א. a_n = 3*2^(n-1) ב. q=2", "א. a_n = 3*2^n ב. q=2", "א. a_n = 6*2^(n-1) ב. q=2", "א. a_n = 2*3^n ב. q=3"],
        "correctAnswer": 0,
        "hint": "השתמשו בכלל a_n = S_n - S_{n-1} כדי למצוא את האיבר הכללי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר בין איבר לסכום.", "math_expression": "a_n = S_n - S_{n-1}" },
            { "verbal_explanation": "נחשב את הסכום החלקי.", "math_expression": "S_{n-1} = 3 \\cdot 2^{n-1} - 3" },
            { "verbal_explanation": "נציב בנוסחה המקורית.", "math_expression": "a_n = (3 \\cdot 2^n - 3) - (3 \\cdot 2^{n-1} - 3)" },
            { "verbal_explanation": "נפשט ונכנס איברים.", "math_expression": "a_n = 3 \\cdot 2^n - 3 \\cdot 2^{n-1}" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "a_n = 3 \\cdot 2^{n-1}(2^{1} - 1)" },
            { "verbal_explanation": "נחשב את הביטוי הפנימי.", "math_expression": "a_n = 3 \\cdot 2^{n-1}" },
            { "verbal_explanation": "נחשב את היחס למציאת המנה.", "math_expression": "\\dfrac{a_{n+1}}{a_n} = \\dfrac{3 \\cdot 2^n}{3 \\cdot 2^{n-1}}" },
            { "verbal_explanation": "נפשט לקבלת המנה.", "math_expression": "q = 2" }
        ],
        "final_answer": "א. a_n = 3*2^(n-1) ב. q=2"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרות חשבוניות והנדסיות (בכלל זה סדרות מעורבות)",
        "question_text": "בסדרה חשבונית \\( a_n \\) ידוע כי האיבר ה-5 הוא 22, והאיבר ה-11 הוא 46. בסדרה הנדסית \\( b_n \\) נתון כי \\( b_1 = a_1 \\) ו-\\( b_2 = a_2 + 2 \\). מצאו את האיבר השלישי בסדרה ההנדסית (\\( b_3 \\)).&rlm;",
        "options": ["24", "36", "48", "18"],
        "correctAnswer": 0,
        "hint": "מצאו את ההפרש והאיבר הראשון בסדרה החשבונית תחילה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום מערכת משוואות לסדרה החשבונית.", "math_expression": "a_1 + 4d = 22 \\quad , \\quad a_1 + 10d = 46" },
            { "verbal_explanation": "נחסר את המשוואות למציאת ההפרש.", "math_expression": "6d = 24 \\Rightarrow d = 4" },
            { "verbal_explanation": "נציב למציאת האיבר הראשון החשבוני.", "math_expression": "a_1 + 16 = 22 \\Rightarrow a_1 = 6" },
            { "verbal_explanation": "נמצא את האיבר השני החשבוני.", "math_expression": "a_2 = 6 + 4 = 10" },
            { "verbal_explanation": "נחשב את האיברים הראשונים של הסדרה ההנדסית.", "math_expression": "b_1 = 6 \\quad , \\quad b_2 = 10 + 2 = 12" },
            { "verbal_explanation": "נחשב את המנה ההנדסית.", "math_expression": "q = \\dfrac{12}{6} = 2" },
            { "verbal_explanation": "נחשב את האיבר השלישי ההנדסי.", "math_expression": "b_3 = b_1 \\times q^{2} = 6 \\times 2^{2}" },
            { "verbal_explanation": "הפתרון הסופי מחושב.", "math_expression": "b_3 = 6 \\times 4 = 24" }
        ],
        "final_answer": "24"
    },

    // ==========================================
    // תת נושא 2: סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה (10 שאלות)
    // ==========================================
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 80\" width=\"200\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"40\" font-family=\"Arial\" font-size=\"14\">a₁ + a₂ + a₃ + ... = S</text><path d=\"M 10 50 Q 50 70 90 50\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>נתונה סדרה הנדסית אינסופית יורדת שסכומה הוא 18. סכום ריבועי כל איברי הסדרה הוא 108.<br>א. מצאו את מנת הסדרה המקורית.<br>ב. מצאו את האיבר הראשון של הסדרה המקורית.&rlm;",
        "options": ["א. 0.5 ב. 9", "א. 1/3 ב. 12", "א. 2/3 ב. 6", "א. 0.25 ב. 13.5"],
        "correctAnswer": 0,
        "hint": "סדרת הריבועים היא סדרה הנדסית חדשה שבה האיבר הראשון הוא ריבוע האיבר הראשון, והמנה היא ריבוע המנה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה לסכום הסדרה המקורית.", "math_expression": "\\dfrac{a_1}{1 - q} = 18 \\Rightarrow a_1 = 18(1 - q)" },
            { "verbal_explanation": "נרשום משוואה לסכום סדרת הריבועים.", "math_expression": "\\dfrac{a_1^{2}}{1 - q^{2}} = 108" },
            { "verbal_explanation": "נפרק את המכנה במשוואה השנייה.", "math_expression": "\\dfrac{a_1^{2}}{(1 - q)(1 + q)} = 108" },
            { "verbal_explanation": "נציב את הביטוי עבור המונה.", "math_expression": "\\dfrac{(18(1 - q))^{2}}{(1 - q)(1 + q)} = 108" },
            { "verbal_explanation": "נפשט את השבר.", "math_expression": "\\dfrac{324(1 - q)^{2}}{(1 - q)(1 + q)} = 108" },
            { "verbal_explanation": "נצמצם את הגורם המשותף.", "math_expression": "\\dfrac{324(1 - q)}{1 + q} = 108" },
            { "verbal_explanation": "נחלק במאה ושמונה.", "math_expression": "\\dfrac{3(1 - q)}{1 + q} = 1" },
            { "verbal_explanation": "נכפול במכנה ונעביר אגפים.", "math_expression": "3 - 3q = 1 + q \\Rightarrow 4q = 2 \\Rightarrow q = 0.5" },
            { "verbal_explanation": "נציב למציאת האיבר הראשון.", "math_expression": "a_1 = 18(1 - 0.5) = 9" }
        ],
        "final_answer": "א. 0.5 ב. 9"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "סדרה \\( a_n \\) מוגדרת על ידי כלל הנסיגה \\( a_{n+1} = 3a_n - 8 \\). מגדירים סדרה חדשה \\( b_n = a_n - 4 \\). נתון כי \\( a_1 = 6 \\).<br>מהי נוסחת האיבר הכללי של \\( a_n \\)?&rlm;",
        "options": ["a_n = 2*3^(n-1) + 4", "a_n = 3^n + 4", "a_n = 2*3^n - 4", "a_n = 4*3^(n-1) + 2"],
        "correctAnswer": 0,
        "hint": "בטאו את b_n+1 באמצעות a_n+1, הציבו את כלל הנסיגה והוכיחו כי הסדרה ב' הנדסית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום ביטוי לאיבר הבא בסדרה החדשה.", "math_expression": "b_{n+1} = a_{n+1} - 4" },
            { "verbal_explanation": "נציב את כלל הנסיגה.", "math_expression": "b_{n+1} = (3a_n - 8) - 4" },
            { "verbal_explanation": "נפשט את הביטוי.", "math_expression": "b_{n+1} = 3a_n - 12" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "b_{n+1} = 3(a_n - 4)" },
            { "verbal_explanation": "נזהה את המנה.", "math_expression": "b_{n+1} = 3b_n \\Rightarrow q = 3" },
            { "verbal_explanation": "נחשב את האיבר הראשון.", "math_expression": "b_1 = a_1 - 4 = 6 - 4 = 2" },
            { "verbal_explanation": "נרכיב נוסחה לאיבר כללי בסדרה ההנדסית.", "math_expression": "b_n = 2 \\times 3^{n-1}" },
            { "verbal_explanation": "נחלץ את נוסחת הסדרה המקורית.", "math_expression": "a_n = b_n + 4 = 2 \\times 3^{n-1} + 4" }
        ],
        "final_answer": "a_n = 2*3^(n-1) + 4"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "נתונה סדרה הנדסית אינסופית מתכנסת. הסכום של כל איברי הסדרה הוא 12. סכום איברי הסדרה העומדים במקומות האי-זוגיים הוא 8.<br>מצאו את מנת הסדרה ואת האיבר הראשון.&rlm;",
        "options": ["a_1=6, q=0.5", "a_1=8, q=1/3", "a_1=4, q=0.75", "a_1=9, q=0.25"],
        "correctAnswer": 0,
        "hint": "סדרת האי-זוגיים היא בעלת איבר ראשון זהה ומנה q^2.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה לסכום הכללי.", "math_expression": "\\dfrac{a_1}{1 - q} = 12 \\Rightarrow a_1 = 12(1 - q)" },
            { "verbal_explanation": "נרשום משוואה לסכום האי-זוגיים.", "math_expression": "\\dfrac{a_1}{1 - q^{2}} = 8" },
            { "verbal_explanation": "נפרק את המכנה.", "math_expression": "\\dfrac{a_1}{(1 - q)(1 + q)} = 8" },
            { "verbal_explanation": "נציב את הגורם מהמשוואה הראשונה.", "math_expression": "\\dfrac{12(1 - q)}{(1 - q)(1 + q)} = 8" },
            { "verbal_explanation": "נצמצם את הגורם המשותף.", "math_expression": "\\dfrac{12}{1 + q} = 8" },
            { "verbal_explanation": "נכפול במכנה ונעביר אגפים.", "math_expression": "12 = 8 + 8q \\Rightarrow 4 = 8q" },
            { "verbal_explanation": "נחלץ את המנה.", "math_expression": "q = 0.5" },
            { "verbal_explanation": "נציב חזרה לקבלת האיבר הראשון.", "math_expression": "a_1 = 12(1 - 0.5) = 6" }
        ],
        "final_answer": "a_1=6, q=0.5"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "סדרה מוגדרת על ידי: \\( a_1 = 2 \\), ו- \\( a_{n+1} = \\dfrac{a_n}{2a_n + 1} \\). סדרה חדשה מוגדרת \\( b_n = \\dfrac{1}{a_n} \\). מהו הערך של \\( a_{10} \\)?&rlm;",
        "options": ["2/37", "2/11", "1/19", "1/29"],
        "correctAnswer": 0,
        "hint": "הציבו את משוואת הנסיגה לתוך ההגדרה של הסדרה החדשה.",
        "solution_steps": [
            { "verbal_explanation": "נבטא את האיבר הבא בסדרה החדשה.", "math_expression": "b_{n+1} = \\dfrac{1}{a_{n+1}}" },
            { "verbal_explanation": "נציב את כלל הנסיגה.", "math_expression": "b_{n+1} = \\dfrac{1}{\\dfrac{a_n}{2a_n + 1}} = \\dfrac{2a_n + 1}{a_n}" },
            { "verbal_explanation": "נפריד לשני שברים.", "math_expression": "b_{n+1} = 2 + \\dfrac{1}{a_n} = 2 + b_n" },
            { "verbal_explanation": "נחשב את ההפרש.", "math_expression": "b_{n+1} - b_n = 2 \\Rightarrow d = 2" },
            { "verbal_explanation": "נחשב איבר ראשון.", "math_expression": "b_1 = \\dfrac{1}{2} = 0.5" },
            { "verbal_explanation": "נמצא את האיבר העשירי.", "math_expression": "b_{10} = 0.5 + 9(2) = 18.5 = \\dfrac{37}{2}" },
            { "verbal_explanation": "נחשב את האיבר המקורי.", "math_expression": "a_{10} = \\dfrac{1}{b_{10}} = \\dfrac{2}{37}" }
        ],
        "final_answer": "2/37"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "בסדרה הנדסית אינסופית סכום הסדרה הוא 10. מגדירים סדרה חדשה: \\( b_n = a_n + a_{n+1} \\). סכום הסדרה האינסופית \\( b_n \\) הוא 15. מצאו את המנה \\( q \\).&rlm;",
        "options": ["0.5", "1/3", "0.25", "2/3"],
        "correctAnswer": 0,
        "hint": "הוכיחו שהסדרה החדשה היא הנדסית עם מנה זהה. בטאו את סכומה בעזרת המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה לסכום הסדרה המקורית.", "math_expression": "\\dfrac{a_1}{1 - q} = 10" },
            { "verbal_explanation": "נחשב איבר ראשון לסדרה החדשה.", "math_expression": "b_1 = a_1 + a_1 q = a_1(1 + q)" },
            { "verbal_explanation": "המנה זהה למנה המקורית.", "math_expression": "Q = q" },
            { "verbal_explanation": "נרשום משוואה לסכום הסדרה החדשה.", "math_expression": "\\dfrac{a_1(1 + q)}{1 - q} = 15" },
            { "verbal_explanation": "נפרק למכפלה המכילה את הסכום המקורי.", "math_expression": "(\\dfrac{a_1}{1 - q})(1 + q) = 15" },
            { "verbal_explanation": "נציב את הנתון המספרי.", "math_expression": "10(1 + q) = 15" },
            { "verbal_explanation": "נפתור עבור המנה.", "math_expression": "1 + q = 1.5 \\Rightarrow q = 0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "נתון כלל הנסיגה: \\( a_1 = 1 \\) ו- \\( a_{n+1} = a_n + 2n \\). חשבו את הערך של \\( a_4 \\).&rlm;",
        "options": ["13", "12", "15", "10"],
        "correctAnswer": 0,
        "hint": "הציבו אינדקסים ברצף.",
        "solution_steps": [
            { "verbal_explanation": "נציב אינדקס ראשון.", "math_expression": "a_2 = 1 + 2(1) = 3" },
            { "verbal_explanation": "נציב אינדקס שני.", "math_expression": "a_3 = 3 + 2(2) = 7" },
            { "verbal_explanation": "נציב אינדקס שלישי.", "math_expression": "a_4 = 7 + 2(3) = 13" },
            { "verbal_explanation": "הערך חושב.", "math_expression": "13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "בסדרה הנדסית אינסופית מתכנסת \\( S_n \\) הוא סכום \\( n \\) האיברים הראשונים. מהי מנת הסדרה שאיברה הכללי הוא \\( S - S_n \\)?&rlm;",
        "options": ["q", "1/q", "q²", "1-q"],
        "correctAnswer": 0,
        "hint": "הביעו את S ואת S_n.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הסכום האינסופי.", "math_expression": "S = \\dfrac{a_1}{1 - q}" },
            { "verbal_explanation": "נרשום סכום חלקי.", "math_expression": "S_n = \\dfrac{a_1(1 - q^n)}{1 - q}" },
            { "verbal_explanation": "נחסר.", "math_expression": "c_n = \\dfrac{a_1 - (a_1 - a_1 q^n)}{1 - q} = \\dfrac{a_1 q^n}{1 - q}" },
            { "verbal_explanation": "נרשום איבר עוקב.", "math_expression": "c_{n+1} = \\dfrac{a_1 q^{n+1}}{1 - q}" },
            { "verbal_explanation": "נחשב יחס.", "math_expression": "\\dfrac{c_{n+1}}{c_n} = \\dfrac{q^{n+1}}{q^n} = q" }
        ],
        "final_answer": "q"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "נתון כלל נסיגה: \\( a_1 = 5 \\) ו- \\( a_{n+1} = a_n + 3 \\). מגדירים סדרה חדשה על ידי \\( b_n = 2^{a_n} \\). מהי מנת הסדרה \\( b_n \\)?&rlm;",
        "options": ["8", "6", "2", "3"],
        "correctAnswer": 0,
        "hint": "היעזרו בחוקי חזקות להפרדה בין הגורמים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את האיבר העוקב בסדרה החדשה.", "math_expression": "b_{n+1} = 2^{a_{n+1}}" },
            { "verbal_explanation": "נציב את כלל הנסיגה.", "math_expression": "b_{n+1} = 2^{a_n + 3}" },
            { "verbal_explanation": "נשתמש בחוקי מעריכים.", "math_expression": "b_{n+1} = 2^{a_n} \\times 2^{3}" },
            { "verbal_explanation": "נזהה איבר קודם.", "math_expression": "b_{n+1} = b_n \\times 8" },
            { "verbal_explanation": "נחלץ מנה.", "math_expression": "Q = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "סכום סדרה הנדסית אינסופית מתכנסת הוא \\( S \\). אם נחליף את הסימנים של כל האיברים במקומות הזוגיים, יתקבל סכום ששווה ל- \\( 0.6S \\). מצאו את מנת הסדרה \\( q \\).&rlm;",
        "options": ["0.25", "1/3", "0.5", "0.2"],
        "correctAnswer": 0,
        "hint": "החלפת סימנים במקומות זוגיים משמעותה הכפלת המנה במינוס אחת.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה לסכום רגיל.", "math_expression": "S = \\dfrac{a_1}{1 - q}" },
            { "verbal_explanation": "נרשום סכום עם סימנים מוחלפים.", "math_expression": "S_A = \\dfrac{a_1}{1 - (-q)} = \\dfrac{a_1}{1 + q}" },
            { "verbal_explanation": "נרכיב משוואת יחס.", "math_expression": "\\dfrac{a_1}{1 + q} = 0.6 \\times \\dfrac{a_1}{1 - q}" },
            { "verbal_explanation": "נצמצם את האיבר הראשון.", "math_expression": "\\dfrac{1}{1 + q} = \\dfrac{0.6}{1 - q}" },
            { "verbal_explanation": "נכפול באלכסון.", "math_expression": "1 - q = 0.6 + 0.6q" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "0.4 = 1.6q" },
            { "verbal_explanation": "נחלץ את המנה.", "math_expression": "q = 0.25" }
        ],
        "final_answer": "0.25"
    },
    {
        "topic": "sequences_572",
        "subTopic": "סדרה הנדסית אינסופית מתכנסת וכללי הנסיגה",
        "question_text": "בסדרה הנדסית, נתון כי \\( a_n = 5 \\cdot 3^{n-1} \\). מגדירים סדרה חדשה \\( c_n = a_{2n} \\). מהי מנת הסדרה \\( c_n \\)?&rlm;",
        "options": ["9", "3", "6", "15"],
        "correctAnswer": 0,
        "hint": "הציבו 2n בנוסחת האיבר הכללי ובדקו את היחס בין איברים עוקבים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את האיבר הכללי של הסדרה החדשה.", "math_expression": "c_n = 5 \\cdot 3^{2n-1}" },
            { "verbal_explanation": "נרשום את האיבר העוקב בסדרה החדשה.", "math_expression": "c_{n+1} = 5 \\cdot 3^{2(n+1)-1} = 5 \\cdot 3^{2n+1}" },
            { "verbal_explanation": "נחשב את היחס בין האיברים להוכחת מנה קבועה.", "math_expression": "\\dfrac{c_{n+1}}{c_n} = \\dfrac{5 \\cdot 3^{2n+1}}{5 \\cdot 3^{2n-1}}" },
            { "verbal_explanation": "נצמצם ונחסר חזקות.", "math_expression": "3^{2n+1 - (2n-1)} = 3^{2}" },
            { "verbal_explanation": "נחשב את המנה.", "math_expression": "Q = 9" }
        ],
        "final_answer": "9"
    },

    // ==========================================
    // תת נושא 3: הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית (10 שאלות)
    // ==========================================
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "צריך להוכיח באינדוקציה כי הביטוי \\( 9^n - 2^n \\) מתחלק ב-7 לכל \\( n \\) טבעי. איזה מהביטויים מציג נכון את שלב המעבר מ-\\( k \\) ל-\\( k+1 \\) כך שניתן יהיה להיעזר בהנחת האינדוקציה?&rlm;",
        "options": ["9 * 9^k - 2 * 2^k", "7 * 9^k - 7 * 2^k", "9^k * 2^k", "9^(k+1) + 2^(k+1)"],
        "correctAnswer": 0,
        "hint": "בשלב המעבר כותבים את הביטוי עבור n=k+1, ומפצלים חזקות.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הביטוי עבור השלב הבא.", "math_expression": "P_{k+1} = 9^{k+1} - 2^{k+1}" },
            { "verbal_explanation": "נשתמש בחוקי מעריכים.", "math_expression": "P_{k+1} = 9 \\times 9^k - 2 \\times 2^k" },
            { "verbal_explanation": "נבצע הוספה וחיסור לטובת בניית הנחת האינדוקציה.", "math_expression": "9 \\times 9^k - 9 \\times 2^k + 9 \\times 2^k - 2 \\times 2^k" },
            { "verbal_explanation": "נוציא גורם משותף לבידוד הנחת האינדוקציה.", "math_expression": "9(9^k - 2^k) + 2^k(9 - 2)" },
            { "verbal_explanation": "נפשט למבנה סופי המוכיח התחלקות ב-7.", "math_expression": "9(9^k - 2^k) + 7 \\times 2^k = 7m" }
        ],
        "final_answer": "9 * 9^k - 2 * 2^k"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "באינדוקציה מוכיחים שוויון סכום: \\( 1 + 3 + 5 + ... + (2n-1) = n^2 \\). מהו הביטוי באגף שמאל כאשר בודקים שוויון עבור \\( n = k+1 \\)?&rlm;",
        "options": ["k² + 2k + 1", "k² + 2k - 1", "k² + k + 1", "k² + 2k"],
        "correctAnswer": 0,
        "hint": "הוסיפו את האיבר הבא (עבור n=k+1) לסכום הידוע מהנחת האינדוקציה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנחת האינדוקציה לסכום.", "math_expression": "S_k = k^{2}" },
            { "verbal_explanation": "נרשום את האיבר המתווסף.", "math_expression": "a_{k+1} = 2(k + 1) - 1 = 2k + 1" },
            { "verbal_explanation": "נחבר את האיבר החדש לסכום.", "math_expression": "S_{k+1} = k^{2} + 2k + 1" },
            { "verbal_explanation": "נזהה תבנית.", "math_expression": "(k + 1)^{2}" }
        ],
        "final_answer": "k² + 2k + 1"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "יש להוכיח ש- \\( n^3 + 5n \\) מתחלק ב-6 לכל \\( n \\) טבעי. אם נניח שהטענה נכונה עבור \\( n=k \\), הביטוי עבור \\( n=k+1 \\) יכיל את האיבר \\( 3k^2 + 3k \\). מדוע איבר זה מתחלק ב-6?&rlm;",
        "options": ["כי k(k+1) הוא תמיד זוגי וכפול ב-3 נותן התחלקות ב-6", "כי 3k מתחלק ב-6", "כי 3(k^2+1) מתחלק ב-6", "כי סכום שני אי-זוגיים הוא זוגי"],
        "correctAnswer": 0,
        "hint": "הוציאו 3k כגורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הביטוי הנדון.", "math_expression": "3k^{2} + 3k" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "3k(k + 1)" },
            { "verbal_explanation": "מכפלת מספרים עוקבים היא תמיד זוגית.", "math_expression": "k(k + 1) = 2m" },
            { "verbal_explanation": "נציב חזרה לביטוי.", "math_expression": "3(2m) = 6m" }
        ],
        "final_answer": "כי k(k+1) הוא תמיד זוגי וכפול ב-3 נותן התחלקות ב-6"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "נתונה הסדרה \\( S_n = 5n^2 - 3n \\). מצאו את הפרש הסדרה החשבונית.&rlm;",
        "options": ["10", "5", "8", "3"],
        "correctAnswer": 0,
        "hint": "חשבו איבר כללי ולאחר מכן חשבו הפרש.",
        "solution_steps": [
            { "verbal_explanation": "נרשום נוסחה לאיבר כללי דרך סכום.", "math_expression": "a_n = S_n - S_{n-1}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "a_n = (5n^{2} - 3n) - (5(n - 1)^{2} - 3(n - 1))" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "5n^{2} - 10n + 5 - 3n + 3 = 5n^{2} - 13n + 8" },
            { "verbal_explanation": "נחסר.", "math_expression": "a_n = 5n^{2} - 3n - (5n^{2} - 13n + 8) = 10n - 8" },
            { "verbal_explanation": "נרשום איבר עוקב.", "math_expression": "a_{n+1} = 10(n + 1) - 8 = 10n + 2" },
            { "verbal_explanation": "נחשב הפרש.", "math_expression": "d = a_{n+1} - a_n = (10n + 2) - (10n - 8) = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "מוכיחים באינדוקציה כי \\( 2^n > n^2 \\) עבור כל \\( n \\ge 5 \\). מהו בסיס האינדוקציה?&rlm;",
        "options": ["n = 5", "n = 1", "n = 0", "n = k"],
        "correctAnswer": 0,
        "hint": "ההוכחה נדרשת להתחיל מהערך הקטן ביותר.",
        "solution_steps": [
            { "verbal_explanation": "התחום המוגדר.", "math_expression": "n \\geq 5" },
            { "verbal_explanation": "בסיס האינדוקציה הוא הערך המינימלי.", "math_expression": "n = 5" },
            { "verbal_explanation": "נבדוק את קיום הטענה בבסיס.", "math_expression": "2^{5} > 5^{2}" },
            { "verbal_explanation": "חישוב.", "math_expression": "32 > 25" }
        ],
        "final_answer": "n = 5"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 60\" width=\"200\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"10\" y=\"35\" font-family=\"Arial\" font-size=\"16\">½ + ¼ + ⅛ + ... = 1</text></svg></div><br>מוכיחים סכום טלסקופי באינדוקציה: \\( \\dfrac{1}{1 \\cdot 2} + \\dfrac{1}{2 \\cdot 3} + ... + \\dfrac{1}{n(n+1)} = \\dfrac{n}{n+1} \\).<br>מה נוסיף לאגף ימין בשלב הוכחת המעבר?&rlm;",
        "options": ["את האיבר 1 / ((k+1)(k+2))", "את האיבר k / (k+1)", "את האיבר 1 / (k(k+1))", "את כל הסדרה מחדש"],
        "correctAnswer": 0,
        "hint": "במעבר ל-n=k+1, סכום הסדרה מקבל איבר נוסף אחד המחושב לפי אינדקס זה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את האיבר הכללי.", "math_expression": "a_n = \\dfrac{1}{n(n + 1)}" },
            { "verbal_explanation": "נרשום את סכום הסדרה עד אינדקס מסוים.", "math_expression": "S_k = \\dfrac{k}{k + 1}" },
            { "verbal_explanation": "נבנה את האיבר החדש.", "math_expression": "a_{k+1} = \\dfrac{1}{(k + 1)(k + 2)}" },
            { "verbal_explanation": "נחבר את האיבר החדש לסכום.", "math_expression": "S_{k+1} = \\dfrac{k}{k + 1} + \\dfrac{1}{(k + 1)(k + 2)}" }
        ],
        "final_answer": "את האיבר 1 / ((k+1)(k+2))"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "נתון כלל הנסיגה: \\( a_1 = 1 \\) ו- \\( a_{n+1} = 2a_n + 1 \\). צריך להוכיח באינדוקציה כי \\( a_n = 2^n - 1 \\). לאיזה ביטוי מגיעים לאחר הצבת ההנחה בכלל הנסיגה?&rlm;",
        "options": ["2(2^k - 1) + 1", "2^k - 1 + 1", "2(2^(k+1) - 1)", "2^k + 1"],
        "correctAnswer": 0,
        "hint": "הציבו את הנוסחה המפורשת בתוך משוואת הנסיגה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנחת האינדוקציה.", "math_expression": "a_k = 2^k - 1" },
            { "verbal_explanation": "נרשום את כלל הנסיגה.", "math_expression": "a_{k+1} = 2a_k + 1" },
            { "verbal_explanation": "נציב את ההנחה.", "math_expression": "a_{k+1} = 2(2^k - 1) + 1" },
            { "verbal_explanation": "נפתח סוגריים ונסדר.", "math_expression": "a_{k+1} = 2^{k+1} - 2 + 1 = 2^{k+1} - 1" }
        ],
        "final_answer": "2(2^k - 1) + 1"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "הוכיחו באינדוקציה כי הסכום \\( 2 + 4 + 6 + ... + 2n \\) שווה ל- \\( n(n+1) \\). אם הנחת האינדוקציה היא שהסכום ל-\\( k \\) איברים הוא \\( k(k+1) \\), מה נקבל לאחר פתיחת הסוגריים עבור \\( k+1 \\) איברים באגף שמאל?&rlm;",
        "options": ["k² + 3k + 2", "k² + 2k + 1", "k² + k + 2", "k² + 4k + 4"],
        "correctAnswer": 0,
        "hint": "אגף שמאל יכיל את k(k+1) פלוס האיבר החדש שהוא 2(k+1).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את סכום האיברים לפי הנחת האינדוקציה.", "math_expression": "S_k = k^{2} + k" },
            { "verbal_explanation": "נרשום את האיבר המתווסף לסדרה.", "math_expression": "a_{k+1} = 2(k + 1) = 2k + 2" },
            { "verbal_explanation": "נחבר את האיבר החדש לסכום.", "math_expression": "S_{k+1} = k^{2} + k + 2k + 2" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "S_{k+1} = k^{2} + 3k + 2" }
        ],
        "final_answer": "k² + 3k + 2"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "יש להוכיח ש- \\( 4^n + 15n - 1 \\) מתחלק ב-9. לאחר הנחת האינדוקציה מגיעים לביטוי: \\( 4 \\cdot 4^k + 15k + 14 \\). כיצד יש לפצל את הביטוי כדי להיעזר בהנחה?&rlm;",
        "options": ["4(4^k + 15k - 1) - 45k + 18", "4(4^k) + 15(k+1)", "4(4^k - 1) + 15k + 18", "4(4^k) + 15k - 4"],
        "correctAnswer": 0,
        "hint": "הכפילו את הנחת האינדוקציה במקדם, וחסרו את המיותר.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הביטוי עבור השלב העוקב.", "math_expression": "P_{k+1} = 4 \\times 4^k + 15k + 14" },
            { "verbal_explanation": "נרשום את תבנית הנחת האינדוקציה.", "math_expression": "H = 4^k + 15k - 1" },
            { "verbal_explanation": "נכפיל את תבנית ההנחה.", "math_expression": "4H = 4(4^k + 15k - 1) = 4 \\times 4^k + 60k - 4" },
            { "verbal_explanation": "נבצע חיסור מלאכותי לשמירת השוויון.", "math_expression": "(4 \\times 4^k + 15k + 14) - (4 \\times 4^k + 60k - 4) = -45k + 18" },
            { "verbal_explanation": "נרכיב את הפיצול הסופי.", "math_expression": "4(4^k + 15k - 1) - 45k + 18" },
            { "verbal_explanation": "נוודא חלוקה בתשע.", "math_expression": "-45k + 18 = 9(-5k + 2) = 9m" }
        ],
        "final_answer": "4(4^k + 15k - 1) - 45k + 18"
    },
    {
        "topic": "sequences_572",
        "subTopic": "הוכחות אלגבריות בסדרות מורכבות, סכומים ואינדוקציה מתמטית",
        "question_text": "מגדירים סדרה כך: \\( a_1 = 3 \\), \\( a_{n+1} = a_n + 2n \\). מוכיחים באינדוקציה ש- \\( a_n = n^2 - n + 3 \\). מה תהיה המשוואה בשלב הוכחת המעבר?&rlm;",
        "options": ["(k² - k + 3) + 2k = (k+1)² - (k+1) + 3", "k² + 2k = k² + 3", "(k² - k) + 2n = k² + k", "(k² + 3) + 2k = k² + 2k + 3"],
        "correctAnswer": 0,
        "hint": "הציבו את הנחת האינדוקציה באגף שמאל, והשוו לנוסחה הרצויה עם אינדקס עוקב באגף ימין.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כלל הנסיגה.", "math_expression": "a_{k+1} = a_k + 2k" },
            { "verbal_explanation": "נרשום את הנחת האינדוקציה.", "math_expression": "a_k = k^{2} - k + 3" },
            { "verbal_explanation": "נציב את ההנחה באגף השמאלי (A).", "math_expression": "A = (k^{2} - k + 3) + 2k" },
            { "verbal_explanation": "נרשום את היעד באגף הימני (B).", "math_expression": "B = (k + 1)^{2} - (k + 1) + 3" },
            { "verbal_explanation": "נרכיב את המשוואה המלאה המייצגת את שלב ההוכחה.", "math_expression": "(k^{2} - k + 3) + 2k = (k + 1)^{2} - (k + 1) + 3" },
            { "verbal_explanation": "נפשט כדי להוכיח זהות.", "math_expression": "k^{2} + k + 3 = k^{2} + 2k + 1 - k - 1 + 3 = k^{2} + k + 3" }
        ],
        "final_answer": "(k² - k + 3) + 2k = (k+1)² - (k+1) + 3"
    }
];