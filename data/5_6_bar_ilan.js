const questionsDB = [
    // ==========================================
    // תת נושא 1: מספרים ראשוניים ופריקים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "איזה מהמספרים הבאים הוא מספר ראשוני?&rlm;",
        "options": ["97", "51", "91", "87"],
        "correctAnswer": 0,
        "hint": "מספר ראשוני מתחלק רק בעצמו וב-1. בדקו חלוקה במספרים ראשוניים קטנים כמו 3 או 7 עבור שאר המספרים.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את חמישים ואחת ושמונים ושבע: סכום הספרות שלהם מתחלק בשלוש, ולכן הם פריקים.", "math_expression": "5 + 1 = 6 \\quad , \\quad 8 + 7 = 15" },
            { "verbal_explanation": "נבדוק את תשעים ואחת: המספר מתחלק בשבע ללא שארית, ולכן הוא פריק.", "math_expression": "91 \\div 7 = 13" },
            { "verbal_explanation": "המספר תשעים ושבע לא מתחלק באף מספר קטן ממנו. זהו המספר הראשוני הדו-ספרתי הגדול ביותר.", "math_expression": "97" }
        ],
        "final_answer": "97"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "מהו הפירוק הנכון לגורמים ראשוניים של המספר 60?&rlm;",
        "options": ["2 × 2 × 3 × 5", "4 × 3 × 5", "2 × 30", "12 × 5"],
        "correctAnswer": 0,
        "hint": "חלקו את המספר בכל פעם במספר הראשוני הקטן ביותר האפשרי עד שתגיעו ל-1. שימו לב שכל הגורמים בתשובה חייבים להיות ראשוניים.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את שישים במספר הראשוני הקטן ביותר, שהוא שתיים.", "math_expression": "60 \\div 2 = 30" },
            { "verbal_explanation": "נחלק גם את התוצאה בשתיים.", "math_expression": "30 \\div 2 = 15" },
            { "verbal_explanation": "חמש עשרה אינו מתחלק בשתיים. נחלק אותו בראשוני הבא, שהוא שלוש.", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "קיבלנו חמש, שהוא מספר ראשוני בעצמו. נרשום את כל המחלקים כמכפלה.", "math_expression": "2 \\times 2 \\times 3 \\times 5" }
        ],
        "final_answer": "2 × 2 × 3 × 5"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "מהו סכום שלושת המספרים הראשוניים הקטנים ביותר?&rlm;",
        "options": ["10", "9", "12", "15"],
        "correctAnswer": 0,
        "hint": "המספר 1 אינו ראשוני ואינו פריק. התחילו מהמספר 2.",
        "solution_steps": [
            { "verbal_explanation": "המספר הראשוני הקטן ביותר, והזוגי היחיד, הוא שתיים.", "math_expression": "2" },
            { "verbal_explanation": "שני המספרים הראשוניים הבאים בתור הם שלוש וחמש.", "math_expression": "3 \\quad , \\quad 5" },
            { "verbal_explanation": "נחבר את שלושת המספרים הללו יחד.", "math_expression": "2 + 3 + 5 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "כמה גורמים ראשוניים שונים יש למספר 30?&rlm;",
        "options": ["3", "2", "4", "5"],
        "correctAnswer": 0,
        "hint": "פרקו את המספר לגורמים ראשוניים וספרו כמה מספרים שונים מופיעים בפירוק.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את שלושים במספר הראשוני שתיים.", "math_expression": "30 \\div 2 = 15" },
            { "verbal_explanation": "נחלק את חמש עשרה במספר הראשוני שלוש.", "math_expression": "15 \\div 3 = 5" },
            { "verbal_explanation": "הגורמים הראשוניים שמרכיבים את שלושים הם שתיים, שלוש וחמש.", "math_expression": "2 \\quad , \\quad 3 \\quad , \\quad 5" },
            { "verbal_explanation": "ישנם שלושה גורמים ראשוניים שונים.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "סכום של שני מספרים ראשוניים הוא 15. מהי המכפלה שלהם?&rlm;",
        "options": ["26", "56", "44", "36"],
        "correctAnswer": 0,
        "hint": "כדי שסכום שני מספרים יהיה אי-זוגי (15), אחד מהם חייב להיות זוגי. יש רק מספר ראשוני זוגי אחד.",
        "solution_steps": [
            { "verbal_explanation": "סכום אי-זוגי מחייב חיבור של מספר זוגי ומספר אי-זוגי.", "math_expression": "15" },
            { "verbal_explanation": "המספר הראשוני הזוגי היחיד הוא שתיים. לכן המספר השני הוא ההפרש ביניהם.", "math_expression": "15 - 2 = 13" },
            { "verbal_explanation": "שלוש עשרה הוא אכן מספר ראשוני. נחשב את המכפלה של שני המספרים הללו.", "math_expression": "2 \\times 13 = 26" }
        ],
        "final_answer": "26"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "למספר מסוים יש בדיוק שלושה מחלקים (גורמים) שונים. איזה מהמספרים הבאים מתאים לתיאור זה?&rlm;",
        "options": ["25", "12", "10", "7"],
        "correctAnswer": 0,
        "hint": "למספר ראשוני יש בדיוק שני מחלקים. למספר שהוא ריבוע של מספר ראשוני יש בדיוק שלושה מחלקים.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את המספר עשרים וחמש. המחלקים שלו הם אחד, חמש ועשרים וחמש.", "math_expression": "1 \\quad , \\quad 5 \\quad , \\quad 25" },
            { "verbal_explanation": "עשרים וחמש הוא ריבוע של המספר הראשוני חמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "ספרנו בדיוק שלושה מחלקים. שאר המספרים פריקים עם יותר מחלקים, או ראשוניים עם שניים בלבד.", "math_expression": "3" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "מהי מכפלת שני המספרים הראשוניים הנמצאים בין 10 ל-15?&rlm;",
        "options": ["143", "130", "169", "121"],
        "correctAnswer": 0,
        "hint": "רשמו את המספרים שבין 10 ל-15, סננו את הזוגיים והפריקים, וכפלו את מה שנשאר.",
        "solution_steps": [
            { "verbal_explanation": "המספרים האי-זוגיים בין עשר לחמש עשרה הם אחת עשרה ושלוש עשרה.", "math_expression": "11 \\quad , \\quad 13" },
            { "verbal_explanation": "שני המספרים הללו אינם מתחלקים באף מספר קטן מהם, ולכן שניהם ראשוניים.", "math_expression": "11 \\quad , \\quad 13" },
            { "verbal_explanation": "נחשב את המכפלה שלהם במאונך או על ידי פירוק לעשרות ואחדות.", "math_expression": "11 \\times 13 = 143" }
        ],
        "final_answer": "143"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "המספר 1001 הוא מספר פריק. באיזה מבין המספרים הראשוניים הבאים הוא מתחלק ללא שארית?&rlm;",
        "options": ["7", "3", "5", "2"],
        "correctAnswer": 0,
        "hint": "הוא לא זוגי (לא מתחלק ב-2), לא מסתיים ב-5 או 0 (לא מתחלק ב-5), וסכום ספרותיו הוא 2 (לא מתחלק ב-3). נשאר רק מספר אחד לבדוק.",
        "solution_steps": [
            { "verbal_explanation": "המספר אינו זוגי ואינו מסתיים באפס או חמש, לכן שתיים וחמש נפסלים.", "math_expression": "1001" },
            { "verbal_explanation": "סכום הספרות הוא שתיים, שאינו מתחלק בשלוש, ולכן שלוש נפסל.", "math_expression": "1 + 0 + 0 + 1 = 2" },
            { "verbal_explanation": "נבדוק חלוקה בשבע. מאה לחלק לשבע זה ארבע עשרה עם שארית שתיים. עשרים ואחת לחלק לשבע זה שלוש. לכן מתחלק.", "math_expression": "1001 \\div 7 = 143" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "מכפלת שלושה מספרים ראשוניים שונים היא 42. מהו סכומם של מספרים אלו?&rlm;",
        "options": ["12", "14", "10", "16"],
        "correctAnswer": 0,
        "hint": "פרקו את המספר 42 לגורמים ראשוניים, ואז חברו את הגורמים שקיבלתם.",
        "solution_steps": [
            { "verbal_explanation": "המספר זוגי, לכן נחלק אותו בשתיים.", "math_expression": "42 \\div 2 = 21" },
            { "verbal_explanation": "את המספר שהתקבל נחלק בשלוש, שהוא מספר ראשוני.", "math_expression": "21 \\div 3 = 7" },
            { "verbal_explanation": "המספר שבע הוא ראשוני. שלושת הגורמים הם שתיים, שלוש ושבע.", "math_expression": "2 \\quad , \\quad 3 \\quad , \\quad 7" },
            { "verbal_explanation": "נחשב את הסכום של שלושת המספרים הללו.", "math_expression": "2 + 3 + 7 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "מספרים ראשוניים ופריקים",
        "question_text": "מהי מכפלת כל המספרים הראשוניים הקטנים מ-10?&rlm;",
        "options": ["210", "105", "30", "120"],
        "correctAnswer": 0,
        "hint": "רשמו את המספרים הראשוניים מאחד עד עשר, והכפילו אותם זה בזה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כל המספרים הראשוניים החד-ספרתיים.", "math_expression": "2 \\quad , \\quad 3 \\quad , \\quad 5 \\quad , \\quad 7" },
            { "verbal_explanation": "נכפול תחילה את שתיים וחמש כדי לקבל עשרות שלמות.", "math_expression": "2 \\times 5 = 10" },
            { "verbal_explanation": "נכפול את המספרים שנותרו: שלוש ושבע.", "math_expression": "3 \\times 7 = 21" },
            { "verbal_explanation": "נכפול את שתי התוצאות שקיבלנו לקבלת התשובה הסופית.", "math_expression": "10 \\times 21 = 210" }
        ],
        "final_answer": "210"
    },

    // ==========================================
    // תת נושא 2: סימני חלוקה ושאריות (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "איזו ספרה יש להשלים במקום סימן השאלה במספר 45?3 (ארבעת אלפים חמש מאות ומשהו ושלוש), כדי שהמספר יתחלק ב-9 ללא שארית?&rlm;",
        "options": ["6", "3", "9", "0"],
        "correctAnswer": 0,
        "hint": "מספר מתחלק ב-9 רק אם סכום הספרות שלו מתחלק ב-9. סכמו את הספרות הקיימות ובדקו מה חסר לכפולה הבאה של 9.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את כל הספרות הידועות לנו במספר.", "math_expression": "4 + 5 + 3 = 12" },
            { "verbal_explanation": "הכפולה הבאה של תשע שגדולה משנים עשר היא שמונה עשרה.", "math_expression": "18" },
            { "verbal_explanation": "נחשב את ההפרש כדי לדעת איזו ספרה חסרה לנו.", "math_expression": "18 - 12 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "מה תהיה השארית אם נחלק את המספר 12,345 ב-10?&rlm;",
        "options": ["5", "1", "4", "0"],
        "correctAnswer": 0,
        "hint": "כל כפולה של 10 מסתיימת בספרה אפס. השארית היא פשוט ספרת האחדות של המספר.",
        "solution_steps": [
            { "verbal_explanation": "המספר הקרוב ביותר אליו שמתחלק בעשר מסתיים באפס.", "math_expression": "12340" },
            { "verbal_explanation": "נחסר את המספר הזה מהמספר המקורי כדי למצוא את השארית.", "math_expression": "12345 - 12340 = 5" },
            { "verbal_explanation": "לכן, ספרת האחדות היא תמיד השארית בחלוקה לעשר.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "איזה מבין המספרים הבאים מתחלק ב-6 ללא שארית?&rlm;",
        "options": ["312", "314", "315", "316"],
        "correctAnswer": 0,
        "hint": "מספר שמתחלק ב-6 חייב לעמוד בשני תנאים: להיות זוגי, ושסכום ספרותיו יתחלק ב-3.",
        "solution_steps": [
            { "verbal_explanation": "מספר שמתחלק בשש חייב להיות זוגי. לכן נפסול את המספר האי-זוגי מבין האפשרויות.", "math_expression": "315" },
            { "verbal_explanation": "נבדוק את סכום הספרות של המספר הראשון לבדיקת חלוקה בשלוש.", "math_expression": "3 + 1 + 2 = 6" },
            { "verbal_explanation": "שש מתחלק בשלוש ללא שארית. מכיוון שהמספר גם זוגי וגם מתחלק בשלוש, הוא מתחלק בשש.", "math_expression": "6 \\div 3 = 2" }
        ],
        "final_answer": "312"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "מספר שלם מתחלק ב-4 ללא שארית. איזו מהספרות הבאות יכולה להיות ספרת האחדות שלו?&rlm;",
        "options": ["6", "5", "7", "9"],
        "correctAnswer": 0,
        "hint": "כל המספרים המתחלקים ב-4 הם זוגיים.",
        "solution_steps": [
            { "verbal_explanation": "המספר ארבע הוא מספר זוגי, ולכן כל הכפולות שלו חייבות להיות גם כן זוגיות.", "math_expression": "4 \\times 1 = 4 \\quad , \\quad 4 \\times 2 = 8 \\quad , \\quad 4 \\times 4 = 16" },
            { "verbal_explanation": "נחפש בין האפשרויות את הספרה הזוגית היחידה.", "math_expression": "6" },
            { "verbal_explanation": "אכן, קיימים מספרים רבים המסתימים בשש ומתחלקים בארבע, כמו שש עשרה.", "math_expression": "16 \\div 4 = 4" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "מהי השארית של המספר 987 חלקי 9?&rlm;",
        "options": ["6", "3", "0", "8"],
        "correctAnswer": 0,
        "hint": "כדי למצוא שארית חלוקה ב-9, אפשר פשוט לחבר את ספרות המספר ולמצוא את השארית של הסכום.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סכום הספרות של המספר הנתון.", "math_expression": "9 + 8 + 7 = 24" },
            { "verbal_explanation": "נבדוק כמה פעמים תשע נכנס בעשרים וארבע. הוא נכנס פעמיים, שזה שמונה עשרה.", "math_expression": "9 \\times 2 = 18" },
            { "verbal_explanation": "נחסר את הכפולה הקרובה ביותר מהסכום כדי לקבל את השארית המדויקת.", "math_expression": "24 - 18 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "מספר שלם מתחלק גם ב-2 וגם ב-3. באיזה מהמספרים הבאים הוא בוודאות יתחלק גם כן?&rlm;",
        "options": ["6", "5", "8", "9"],
        "correctAnswer": 0,
        "hint": "אם מספר מתחלק בשני מספרים שאין להם מחלקים משותפים, הוא מתחלק במכפלה שלהם.",
        "solution_steps": [
            { "verbal_explanation": "המספרים שתיים ושלוש הם מספרים ראשוניים, ואין להם שום גורם משותף מלבד אחד.", "math_expression": "2 \\quad , \\quad 3" },
            { "verbal_explanation": "לכן, מספר שמתחלק בשניהם חייב להתחלק גם במכפלה שלהם.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "המסקנה היא שכל מספר כזה הוא למעשה כפולה של שש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "מהו המספר הדו-ספרתי הקטן ביותר שמשאיר שארית 1 בחלוקה ל-5 וגם מתחלק ב-3 ללא שארית?&rlm;",
        "options": ["21", "16", "31", "11"],
        "correctAnswer": 0,
        "hint": "מספרים עם שארית 1 בחלוקה ל-5 מסתיימים בספרה 1 או 6. חפשו את הקטן ביותר שמתחלק ב-3.",
        "solution_steps": [
            { "verbal_explanation": "נרשום מספרים דו-ספרתיים שמשאירים שארית אחת בחלוקה לחמש.", "math_expression": "11 \\quad , \\quad 16 \\quad , \\quad 21 \\quad , \\quad 26" },
            { "verbal_explanation": "נבדוק את המספר הראשון ברשימה: אחת עשרה אינו מתחלק בשלוש.", "math_expression": "11" },
            { "verbal_explanation": "נבדוק את המספר השני: שש עשרה אינו מתחלק בשלוש.", "math_expression": "16" },
            { "verbal_explanation": "נבדוק את השלישי: עשרים ואחת אכן מתחלק בשלוש, ולכן הוא התשובה הנכונה.", "math_expression": "21 \\div 3 = 7" }
        ],
        "final_answer": "21"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "אם היום יום ראשון, איזה יום בשבוע יהיה בעוד 50 ימים?&rlm;",
        "options": ["שני", "שלישי", "ראשון", "רביעי"],
        "correctAnswer": 0,
        "hint": "שבוע מורכב מ-7 ימים. חלקו את מספר הימים ב-7 ובדקו מהי השארית שנותרה להוסיף.",
        "solution_steps": [
            { "verbal_explanation": "נחלק חמישים במספר הימים בשבוע, שהוא שבע. שבע כפול שבע זה ארבעים ותשע.", "math_expression": "50 \\div 7 = 7" },
            { "verbal_explanation": "נמצא את השארית של החלוקה.", "math_expression": "50 - 49 = 1" },
            { "verbal_explanation": "השארית היא אחד, לכן נתקדם בדיוק יום אחד קדימה מיום ראשון, אל יום שני.", "math_expression": "1" }
        ],
        "final_answer": "שני"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "השארית בחלוקת מספר ב-7 היא 5. מה תהיה השארית אם נוסיף למספר זה 4 ונחלק שוב ב-7?&rlm;",
        "options": ["2", "9", "4", "5"],
        "correctAnswer": 0,
        "hint": "חברו את השארית הקודמת לתוספת החדשה. אם התוצאה גדולה מ-7, חלקו ב-7 שוב ומצאו את השארית.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את השארית המקורית למספר שהוספנו לתרגיל.", "math_expression": "5 + 4 = 9" },
            { "verbal_explanation": "המספר תשע גדול משבע, לכן אפשר להוציא ממנו כפולה אחת של שבע.", "math_expression": "9 \\div 7 = 1" },
            { "verbal_explanation": "השארית הסופית היא ההפרש בין תשע לשבע.", "math_expression": "9 - 7 = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "סימני חלוקה ושאריות",
        "question_text": "איזה מהמספרים הבאים מתחלק גם ב-5 וגם ב-9?&rlm;",
        "options": ["450", "4055", "305", "500"],
        "correctAnswer": 0,
        "hint": "חייב להסתיים ב-0 או 5. וחייב שסכום הספרות יתחלק ב-9.",
        "solution_steps": [
            { "verbal_explanation": "כדי להתחלק בחמש, המספר חייב להסתיים באפס או חמש. כל האפשרויות מקיימות זאת.", "math_expression": "0 \\quad , \\quad 5" },
            { "verbal_explanation": "כדי להתחלק בתשע, סכום הספרות צריך להתחלק בתשע. נבדוק את המספר הראשון.", "math_expression": "4 + 5 + 0 = 9" },
            { "verbal_explanation": "תשע מתחלק בתשע, ולכן המספר הראשון עונה על שני התנאים יחד.", "math_expression": "450" }
        ],
        "final_answer": "450"
    },

    // ==========================================
    // תת נושא 3: כפולות ומחלקים (GCD/LCM) (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "מהו המחלק המשותף המירבי (הגדול ביותר) של המספרים 24 ו-36?&rlm;",
        "options": ["12", "6", "24", "4"],
        "correctAnswer": 0,
        "hint": "רשמו את המחלקים של כל מספר וחפשו את המספר הגדול ביותר שמופיע בשתי הרשימות.",
        "solution_steps": [
            { "verbal_explanation": "המחלקים הגדולים של עשרים וארבע הם המספר עצמו, שנים עשר, ושמונה.", "math_expression": "24 \\quad , \\quad 12 \\quad , \\quad 8" },
            { "verbal_explanation": "המחלקים הגדולים של שלושים ושש הם המספר עצמו, שמונה עשרה ושנים עשר.", "math_expression": "36 \\quad , \\quad 18 \\quad , \\quad 12" },
            { "verbal_explanation": "המספר המשותף הגדול ביותר המופיע בשתי קבוצות המחלקים הוא שנים עשר.", "math_expression": "12" },
            { "verbal_explanation": "נוודא את החלוקה.", "math_expression": "24 \\div 12 = 2 \\quad , \\quad 36 \\div 12 = 3" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "מהי הכפולה המשותפת המינימלית (הקטנה ביותר) של המספרים 6 ו-8?&rlm;",
        "options": ["24", "48", "16", "12"],
        "correctAnswer": 0,
        "hint": "בדקו את כפולות המספר הגדול (8) וראו מתי מגיעים למספר שמתחלק גם ב-6.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את כפולות המספר שמונה אחת אחרי השנייה.", "math_expression": "8 \\times 1 = 8 \\quad , \\quad 8 \\times 2 = 16" },
            { "verbal_explanation": "אף אחת מהכפולות הראשונות הללו אינה מתחלקת בשש ללא שארית.", "math_expression": "16 \\div 6" },
            { "verbal_explanation": "נבדוק את הכפולה השלישית של שמונה.", "math_expression": "8 \\times 3 = 24" },
            { "verbal_explanation": "המספר עשרים וארבע מתחלק בשש בדיוק, ולכן הוא הכפולה הקטנה ביותר המשותפת.", "math_expression": "24 \\div 6 = 4" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "לשני פעמונים יש קצב צלצול שונה. פעמון אחד מצלצל כל 15 דקות, והשני מצלצל כל 20 דקות. אם שניהם צלצלו עכשיו יחד, בעוד כמה דקות יצלצלו שוב יחד בפעם הבאה?&rlm;",
        "options": ["60", "30", "45", "100"],
        "correctAnswer": 0,
        "hint": "כאשר מחפשים מתי אירועים יתרחשו יחד שוב, יש לחפש כפולה משותפת מינימלית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כפולות הזמן של הפעמון האיטי יותר (כל עשרים דקות).", "math_expression": "20 \\quad , \\quad 40 \\quad , \\quad 60" },
            { "verbal_explanation": "נבדוק איזו מהכפולות הללו מתחלקת בחמש עשרה ללא שארית. עשרים וארבעים אינם מתחלקים.", "math_expression": "60 \\div 15 = 4" },
            { "verbal_explanation": "שישים היא הכפולה המשותפת הראשונה. המשמעות היא שבעוד שישים דקות הם יצלצלו יחד.", "math_expression": "60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "לגנן יש 30 פרחים אדומים ו-45 פרחים צהובים. הוא רוצה לחלק אותם לעציצים זהים כך שבכל עציץ תהיה כמות שווה, בלי שיישארו פרחים בחוץ. מהו המספר הגדול ביותר של עציצים שהוא יכול לסדר?&rlm;",
        "options": ["15", "5", "10", "30"],
        "correctAnswer": 0,
        "hint": "חלוקה לקבוצות שוות ללא שארית רומזת על חיפוש המחלק המשותף הגדול ביותר.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המחלקים של שלושים.", "math_expression": "30 \\quad , \\quad 15 \\quad , \\quad 10 \\quad , \\quad 6 \\quad , \\quad 5" },
            { "verbal_explanation": "נרשום את המחלקים של ארבעים וחמש.", "math_expression": "45 \\quad , \\quad 15 \\quad , \\quad 9 \\quad , \\quad 5" },
            { "verbal_explanation": "המספר המשותף הגדול ביותר הוא חמש עשרה, ולכן אפשר להכין חמש עשרה עציצים.", "math_expression": "15" },
            { "verbal_explanation": "נבדוק חלוקה: בכל עציץ יהיו שני פרחים אדומים ושלושה צהובים.", "math_expression": "30 \\div 15 = 2 \\quad , \\quad 45 \\div 15 = 3" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "מהו המחלק המשותף הגדול ביותר של שני מספרים ראשוניים שונים?&rlm;",
        "options": ["1", "המספר הקטן מביניהם", "המכפלה שלהם", "אין להם אף מחלק"],
        "correctAnswer": 0,
        "hint": "זכרו את ההגדרה של מספר ראשוני: הוא מתחלק רק בעצמו ובאחד.",
        "solution_steps": [
            { "verbal_explanation": "מספר ראשוני מתחלק אך ורק במספר אחד, ובעצמו.", "math_expression": "1" },
            { "verbal_explanation": "מכיוון ששני המספרים הראשוניים שונים, הם אינם יכולים להתחלק זה בזה.", "math_expression": "3 \\div 5" },
            { "verbal_explanation": "לכן, המחלק המשותף היחיד, שהוא גם הגדול ביותר, חייב להיות המספר אחד.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "הכפולה המשותפת הקטנה ביותר של שני מספרים היא 12. איזה זוג מספרים מהבאים מתאים לכך?&rlm;",
        "options": ["4 ו-6", "2 ו-3", "3 ו-6", "12 ו-24"],
        "correctAnswer": 0,
        "hint": "בדקו עבור כל זוג מהי הכפולה הראשונה שמופיעה בשני לוחות הכפל שלהם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את הזוג ארבע ושש. כפולות של ארבע: ארבע, שמונה, שנים עשר.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "נבדוק את הכפולות של שש: שש, שנים עשר.", "math_expression": "6 \\times 2 = 12" },
            { "verbal_explanation": "המספר שנים עשר מופיע לראשונה בשתי הרשימות, ולכן זהו הזוג הנכון.", "math_expression": "12" }
        ],
        "final_answer": "4 ו-6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "מהו המספר הקטן ביותר שמתחלק גם ב-2, גם ב-3 וגם ב-5 ללא שארית?&rlm;",
        "options": ["30", "15", "10", "60"],
        "correctAnswer": 0,
        "hint": "שלושת המספרים הללו הם ראשוניים ואין להם מחלקים משותפים (זרים זה לזה). איך מוצאים את הכפולה המשותפת שלהם?",
        "solution_steps": [
            { "verbal_explanation": "שלושת המספרים הם ראשוניים ואין להם גורמים משותפים להצמצום.", "math_expression": "2 \\quad , \\quad 3 \\quad , \\quad 5" },
            { "verbal_explanation": "במקרה כזה, הכפולה המשותפת הקטנה ביותר שווה פשוט למכפלה של כולם יחד.", "math_expression": "2 \\times 3 \\times 5" },
            { "verbal_explanation": "נחשב את המכפלה ונקבל שלושים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "מחלקים את המספרים 28 ו-42 באותו מספר שלם וגדול ככל האפשר ללא שארית. באיזה מספר חילקנו?&rlm;",
        "options": ["14", "7", "2", "21"],
        "correctAnswer": 0,
        "hint": "אתם מתבקשים למצוא את המחלק המשותף הגדול ביותר. אפשר להתחיל מהמספרים הקטנים שמרכיבים אותם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המחלקים של המספר עשרים ושמונה. הם כוללים את ארבע עשרה ושבע.", "math_expression": "28 \\div 2 = 14 \\quad , \\quad 28 \\div 4 = 7" },
            { "verbal_explanation": "נרשום את המחלקים של ארבעים ושתיים. גם הם כוללים את המספרים הללו.", "math_expression": "42 \\div 3 = 14 \\quad , \\quad 42 \\div 6 = 7" },
            { "verbal_explanation": "ארבע עשרה הוא המספר המשותף הגדול ביותר מביניהם.", "math_expression": "14" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "כמה מחלקים משותפים (ללא שארית) יש למספרים 12 ו-16 בסך הכל?&rlm;",
        "options": ["3", "4", "2", "1"],
        "correctAnswer": 0,
        "hint": "מצאו את המחלק המשותף הגדול ביותר, וספרו כמה מחלקים יש לו.",
        "solution_steps": [
            { "verbal_explanation": "המחלק המשותף הגדול ביותר של שנים עשר ושש עשרה הוא ארבע.", "math_expression": "12 \\div 4 = 3 \\quad , \\quad 16 \\div 4 = 4" },
            { "verbal_explanation": "כל המחלקים המשותפים האחרים חייבים להיות גם מחלקים של המספר ארבע.", "math_expression": "4" },
            { "verbal_explanation": "המחלקים של ארבע הם אחד, שתיים וארבע. לכן יש בדיוק שלושה מחלקים משותפים.", "math_expression": "1 \\quad , \\quad 2 \\quad , \\quad 4" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "כפולות ומחלקים (GCD/LCM)",
        "question_text": "דנה קונה עפרונות בחבילות של 8. גיל קונה את אותם עפרונות בחבילות של 10. מהי הכמות הקטנה ביותר של עפרונות שכל אחד מהם יכול לקנות, כך ששניהם יקנו בדיוק את אותה הכמות הכוללת של עפרונות?&rlm;",
        "options": ["40", "80", "20", "60"],
        "correctAnswer": 0,
        "hint": "זוהי שאלת כפולה משותפת מינימלית. חפשו מספר שמופיע גם בלוח הכפל של 8 וגם בזה של 10.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את הכפולות של עשר (קל יותר לחישוב): עשר, עשרים, שלושים, ארבעים.", "math_expression": "10 \\quad , \\quad 20 \\quad , \\quad 30 \\quad , \\quad 40" },
            { "verbal_explanation": "אף אחד מהראשונים אינו מתחלק בשמונה, אך המספר ארבעים כן מתחלק בשמונה בדיוק.", "math_expression": "40 \\div 8 = 5" },
            { "verbal_explanation": "לכן, כל אחד צריך לקנות ארבעים עפרונות בסך הכל כדי להגיע לכמות שווה (דנה תקנה חמש חבילות וגיל יקנה ארבע).", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    // ==========================================
    // תת נושא 1: עקרון הכפל (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "בארון של דן יש 4 חולצות שונות ו-3 זוגות מכנסיים שונים. כמה סטים שונים של בגדים (חולצה אחת ומכנס אחד) דן יכול להרכיב?&rlm;",
        "options": ["12", "7", "16", "9"],
        "correctAnswer": 0,
        "hint": "לפי עקרון הכפל, יש להכפיל את מספר האפשרויות של הבחירה הראשונה במספר האפשרויות של הבחירה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מספר האפשרויות לבחירת החולצה.", "math_expression": "4" },
            { "verbal_explanation": "נרשום את מספר האפשרויות לבחירת המכנסיים.", "math_expression": "3" },
            { "verbal_explanation": "נכפול את מספר האפשרויות זו בזו כדי למצוא את סך כל הצירופים האפשריים.", "math_expression": "4 \\times 3 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "בחנות גלידה יש 5 טעמים שונים ו-2 סוגי גביעים. כמה אפשרויות שונות יש לקניית כדור גלידה בגביע אחד?&rlm;",
        "options": ["10", "7", "25", "3"],
        "correctAnswer": 0,
        "hint": "כפלו את מספר הטעמים במספר סוגי הגביעים.",
        "solution_steps": [
            { "verbal_explanation": "מספר הטעמים האפשריים לבחירה.", "math_expression": "5" },
            { "verbal_explanation": "מספר סוגי הגביעים האפשריים.", "math_expression": "2" },
            { "verbal_explanation": "נחשב את המכפלה של שתי הבחירות.", "math_expression": "5 \\times 2 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "בין עיר א' לעיר ב' מחברים 3 כבישים. בין עיר ב' לעיר ג' מחברים 4 כבישים. כמה דרכים שונות יש לנסוע מעיר א' לעיר ג' דרך עיר ב'?&rlm;",
        "options": ["12", "7", "6", "14"],
        "correctAnswer": 0,
        "hint": "עבור כל כביש ראשון שתבחרו, תוכלו לבחור בכל אחד מהכבישים בהמשך. לכן יש להשתמש בכפל.",
        "solution_steps": [
            { "verbal_explanation": "אפשרויות הנסיעה בחלק הראשון של הדרך.", "math_expression": "3" },
            { "verbal_explanation": "אפשרויות הנסיעה בחלק השני של הדרך.", "math_expression": "4" },
            { "verbal_explanation": "נכפול את האפשרויות לקבלת כל המסלולים השלמים האפשריים.", "math_expression": "3 \\times 4 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "מסעדה מציעה ארוחה עסקית הכוללת: מנה ראשונה מתוך 2 אפשרויות, מנה עיקרית מתוך 4 אפשרויות, וקינוח מתוך 2 אפשרויות. כמה ארוחות שונות ניתן להרכיב?&rlm;",
        "options": ["16", "8", "12", "14"],
        "correctAnswer": 0,
        "hint": "עקרון הכפל עובד גם על יותר משתי בחירות. כפלו את כל המספרים יחד.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את כל מספרי הבחירות לשלבי הארוחה.", "math_expression": "2 \\quad , \\quad 4 \\quad , \\quad 2" },
            { "verbal_explanation": "נכפול את אפשרויות המנה הראשונה והעיקרית.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נכפול את התוצאה באפשרויות הקינוח לקבלת סך כל הארוחות.", "math_expression": "8 \\times 2 = 16" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "מהו מספר האפשרויות לבנות קוד סודי בעל 3 ספרות, אם מותר להשתמש רק בספרות 1, 2 ו-3 (ומותר להשתמש באותה ספרה יותר מפעם אחת)?&rlm;",
        "options": ["27", "9", "6", "18"],
        "correctAnswer": 0,
        "hint": "בכל אחד משלושת המקומות של הקוד יש לכם 3 אפשרויות. כפלו את האפשרויות.",
        "solution_steps": [
            { "verbal_explanation": "לספרה הראשונה בקוד יש שלוש אפשרויות.", "math_expression": "3" },
            { "verbal_explanation": "היות ומותר לחזור על ספרות, גם לספרה השנייה והשלישית יש שלוש אפשרויות לכל אחת.", "math_expression": "3 \\quad , \\quad 3" },
            { "verbal_explanation": "נכפול את כל האפשרויות זו בזו.", "math_expression": "3 \\times 3 \\times 3 = 27" }
        ],
        "final_answer": "27"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "מטילים קוביית משחק רגילה (עם 6 פאות) ומיד לאחריה מטילים מטבע (שיש לו 2 צדדים - עץ או פלי). כמה תוצאות שונות אפשריות לשתי ההטלות יחד?&rlm;",
        "options": ["12", "8", "36", "4"],
        "correctAnswer": 0,
        "hint": "לכל אחת מתוצאות הקובייה, ישנן שתי תוצאות אפשריות של המטבע.",
        "solution_steps": [
            { "verbal_explanation": "מספר התוצאות האפשריות בהטלת הקובייה.", "math_expression": "6" },
            { "verbal_explanation": "מספר התוצאות האפשריות בהטלת המטבע.", "math_expression": "2" },
            { "verbal_explanation": "נכפול את שתי התוצאות כדי לגלות את סך כל השילובים האפשריים.", "math_expression": "6 \\times 2 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "בוועדה של כיתה ו' יש 6 בנים ו-5 בנות. המורה רוצה לבחור זוג נציגים: בן אחד ובת אחת. כמה זוגות שונים אפשר להרכיב?&rlm;",
        "options": ["30", "11", "60", "25"],
        "correctAnswer": 0,
        "hint": "עבור כל בן נבחר, ניתן לשבץ כל אחת מהבנות בצוות. לכן נשתמש בכפל.",
        "solution_steps": [
            { "verbal_explanation": "מספר האפשרויות לבחירת הבן לנציגות.", "math_expression": "6" },
            { "verbal_explanation": "מספר האפשרויות לבחירת הבת לנציגות.", "math_expression": "5" },
            { "verbal_explanation": "נכפול את האפשרויות כדי למצוא את כמות הזוגות המעורבים השונים.", "math_expression": "6 \\times 5 = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "לאולם גדול יש 4 דלתות. אדם רוצה להיכנס לאולם דרך דלת אחת, ולצאת דרך דלת אחרת (אסור לצאת מאותה דלת שממנה נכנס). כמה אפשרויות כניסה ויציאה שונות יש לו?&rlm;",
        "options": ["12", "16", "8", "7"],
        "correctAnswer": 0,
        "hint": "בכניסה יש לו את כל הדלתות פנויות לבחירה. ביציאה חסרה לו דלת אחת לבחירה.",
        "solution_steps": [
            { "verbal_explanation": "מספר הדלתות הפתוחות לבחירה בכניסה לאולם.", "math_expression": "4" },
            { "verbal_explanation": "ביציאה, אסור לבחור בדלת הכניסה, לכן נשארו דלת אחת פחות לבחירה.", "math_expression": "4 - 1 = 3" },
            { "verbal_explanation": "נכפול את אפשרויות הכניסה באפשרויות היציאה.", "math_expression": "4 \\times 3 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "ילד רוצה להכין כריך. יש לו 3 סוגי לחמים, 5 סוגי ממרחים, ו-2 סוגי ירקות. הוא בוחר אחד מכל סוג. כמה כריכים שונים יוכל להכין?&rlm;",
        "options": ["30", "10", "15", "60"],
        "correctAnswer": 0,
        "hint": "מכפילים את כל האפשרויות בכל השלבים יחד.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מספר האפשרויות לכל שכבה בכריך.", "math_expression": "3 \\quad , \\quad 5 \\quad , \\quad 2" },
            { "verbal_explanation": "נכפול את הלחמים בממרחים.", "math_expression": "3 \\times 5 = 15" },
            { "verbal_explanation": "נכפול את התוצאה בירקות לקבלת סך כל השילובים.", "math_expression": "15 \\times 2 = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון הכפל",
        "question_text": "בתחרות שירה משתתפים 7 מתמודדים. מחלקים פרס ראשון לזוכה ופרס שני לסגנו. כמה אפשרויות שונות יש לחלוקת שני הפרסים הללו (בהנחה שאדם אחד לא יכול לזכות בשניהם)?&rlm;",
        "options": ["42", "49", "14", "21"],
        "correctAnswer": 0,
        "hint": "כמה אפשרויות יש לבחירת המקום הראשון? לאחר שנבחר המקום הראשון, כמה נותרו למקום השני?",
        "solution_steps": [
            { "verbal_explanation": "למקום הראשון יכול להיבחר כל אחד מתוך כלל המתמודדים.", "math_expression": "7" },
            { "verbal_explanation": "למקום השני יכול להיבחר רק אחד מהמתמודדים הנותרים, כי הזוכה הראשון לא יכול לזכות שוב.", "math_expression": "7 - 1 = 6" },
            { "verbal_explanation": "נכפול את אפשרויות המקום הראשון באפשרויות המקום השני.", "math_expression": "7 \\times 6 = 42" }
        ],
        "final_answer": "42"
    },

    // ==========================================
    // תת נושא 2: בעיות לחיצות ידיים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בפגישה משתתפים 5 אנשים. כל אדם לוחץ את היד פעם אחת בדיוק לכל אחד משאר האנשים. כמה לחיצות ידיים התבצעו בסך הכל?&rlm;",
        "options": ["10", "20", "25", "15"],
        "correctAnswer": 0,
        "hint": "כל אחד מהאנשים לוחץ את היד לכל השאר (לא כולל עצמו). אבל כל לחיצה משותפת לשני אנשים, לכן נחלק בשתיים כדי לא לספור כפול.",
        "solution_steps": [
            { "verbal_explanation": "כל אחד מהאנשים לוחץ את היד לשאר האנשים בחדר. לכן נכפול במספר הקטן באחד.", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "בכל לחיצת יד מעורבים שני אנשים. אם לא נחלק בשתיים נספור את הלחיצה של א' עם ב' ושל ב' עם א' בנפרד.", "math_expression": "20 \\div 2 = 10" },
            { "verbal_explanation": "המספר שקיבלנו הוא כמות הלחיצות האמיתית.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "6 חברים ותיקים נפגשים למסיבה. כל חבר מחבק כל חבר אחר פעם אחת בדיוק. כמה חיבוקים היו בסך הכל?&rlm;",
        "options": ["15", "30", "36", "20"],
        "correctAnswer": 0,
        "hint": "חיבוק עובד כמו לחיצת יד. כפלו את מספר החברים במספר החברים פחות אחד, וחלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "ישנם שישה חברים, וכל אחד מהם מחבק את שאר החברים.", "math_expression": "6 \\times 5 = 30" },
            { "verbal_explanation": "כל חיבוק כולל שני אנשים ולכן נספר פעמיים. נחלק את התוצאה בשתיים לתיקון.", "math_expression": "30 \\div 2 = 15" },
            { "verbal_explanation": "זוהי כמות החיבוקים הכוללת שהתרחשה בפועל.", "math_expression": "15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בטורניר שחמט משתתפים 10 שחקנים. כל שחקן משחק משחק אחד בדיוק מול כל שחקן אחר. כמה משחקים יתקיימו בטורניר כולו?&rlm;",
        "options": ["45", "90", "100", "50"],
        "correctAnswer": 0,
        "hint": "משחק שחמט בין א' לב' הוא אותו משחק כמו בין ב' לא', לכן חובה לחלק בשתיים בסוף.",
        "solution_steps": [
            { "verbal_explanation": "כל שחקן מעשרת השחקנים מתמודד מול כל תשעת השחקנים האחרים.", "math_expression": "10 \\times 9 = 90" },
            { "verbal_explanation": "בכל משחק מעורבים שני צדדים, ולכן הכפלה פשוטה סופרת כל משחק פעמיים. נחלק בשתיים.", "math_expression": "90 \\div 2 = 45" },
            { "verbal_explanation": "מספר המשחקים הנדרש לקיום הטורניר הושלם.", "math_expression": "45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בליגת כדורסל יש 8 קבוצות. בעונה רגילה, כל קבוצה משחקת מול כל קבוצה אחרת משחק אחד בדיוק. כמה משחקים ייערכו בעונה כולה?&rlm;",
        "options": ["28", "56", "64", "32"],
        "correctAnswer": 0,
        "hint": "מכפילים את כמות הקבוצות במספר הקבוצות פחות אחת, ומחלקים בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "שמונה קבוצות, כל אחת משחקת מול שבע קבוצות מתחרות.", "math_expression": "8 \\times 7 = 56" },
            { "verbal_explanation": "כדי למנוע ספירה כפולה של אותו משחק עבור שתי הקבוצות המשתתפות בו, נחלק בשתיים.", "math_expression": "56 \\div 2 = 28" },
            { "verbal_explanation": "זהו המספר הסופי של משחקים בעונה.", "math_expression": "28" }
        ],
        "final_answer": "28"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בוועידה נפגשו 4 נציגי מדינות. כל נציג לחץ את ידו של כל נציג אחר. כמה לחיצות ידיים נספרו בחדר?&rlm;",
        "options": ["6", "12", "16", "8"],
        "correctAnswer": 0,
        "hint": "כפלו את המספר הכולל של הנציגים במספר שקטן ממנו באחד, ולאחר מכן חלקו בחצי.",
        "solution_steps": [
            { "verbal_explanation": "ארבעת הנציגים לוחצים את היד לשלושה נציגים נוספים.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "נחלק בשתיים על מנת שלא לספור את הלחיצה של ימין ושמאל כפעמיים.", "math_expression": "12 \\div 2 = 6" },
            { "verbal_explanation": "זוהי הכמות התקינה והסופית.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><circle cx=\"100\" cy=\"15\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"147\" cy=\"37\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"158\" cy=\"90\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"126\" cy=\"135\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"74\" cy=\"135\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"42\" cy=\"90\" r=\"4\" fill=\"#0f172a\"/><circle cx=\"53\" cy=\"37\" r=\"4\" fill=\"#0f172a\"/><path d=\"M 100 15 L 147 37 M 100 15 L 158 90\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>על מעגל סומנו 7 נקודות שונות. מעבירים קווים ישרים (מיתרים) בין כל נקודה לכל נקודה אחרת. כמה קווים ישרים יחברו בין כל הנקודות?&rlm;",
        "options": ["21", "42", "49", "14"],
        "correctAnswer": 0,
        "hint": "חיבור של כל נקודה לכל נקודה אחרת בדיוק מזכיר את בעיית לחיצות הידיים.",
        "solution_steps": [
            { "verbal_explanation": "כל אחת מהנקודות נמתחת אל שאר הנקודות במעגל.", "math_expression": "7 \\times 6 = 42" },
            { "verbal_explanation": "מכיוון שקו מנקודה א' לב' הוא אותו קו מב' לא', נחלק את התוצאה בחצי.", "math_expression": "42 \\div 2 = 21" },
            { "verbal_explanation": "כמות הקווים המדויקת שסורטטה היא עשרים ואחת.", "math_expression": "21" }
        ],
        "final_answer": "21"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בסדנה קטנה למנהיגות השתתפו 12 בני נוער. בסיום הפעילות, כל משתתף העניק כיף אחד לכל שאר המשתתפים. כמה חיבוקי כיף היו בסך הכל?&rlm;",
        "options": ["66", "132", "144", "72"],
        "correctAnswer": 0,
        "hint": "חשבו כמה שווה שנים עשר כפול אחד עשר, ואז אל תשכחו לחלק בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "כל בן נוער מתוך השנים עשר העניק כיף לכל אחד עשר המשתתפים האחרים.", "math_expression": "12 \\times 11 = 132" },
            { "verbal_explanation": "מכיוון שכיף הוא הדדי וכולל שני אנשים, נחלק את הסכום בשתיים.", "math_expression": "132 \\div 2 = 66" },
            { "verbal_explanation": "נקבל את הכמות הסופית ללא כפילויות.", "math_expression": "66" }
        ],
        "final_answer": "66"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "במסיבת סיום נספרו בדיוק 15 לחיצות ידיים. כל משתתף במסיבה לחץ את היד לכל המשתתפים האחרים. כמה אנשים נכחו במסיבה?&rlm;",
        "options": ["6", "5", "10", "30"],
        "correctAnswer": 0,
        "hint": "זוהי שאלת הפוך. נכפול את מספר הלחיצות בשתיים, ונחפש שני מספרים עוקבים שהכפל שלהם ייתן לנו את המספר שקיבלנו. המספר הגדול יותר הוא כמות האנשים.",
        "solution_steps": [
            { "verbal_explanation": "נבצע את הפעולה ההפוכה ונתחיל מלהכפיל את כמות לחיצות הידיים בשתיים.", "math_expression": "15 \\times 2 = 30" },
            { "verbal_explanation": "כעת, אנו מחפשים שני מספרים שלמים עוקבים (שמספרים על 'האנשים כפול האנשים פחות אחד') שהמכפלה שלהם היא שלושים.", "math_expression": "6 \\times 5 = 30" },
            { "verbal_explanation": "המספר הגדול מבין השניים מייצג את כמות האנשים הכוללת שהייתה בחדר.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "בתחרות מחניים משתתפות 9 קבוצות. בשלב המוקדמות כל קבוצה משחקת בדיוק פעם אחת מול כל קבוצה אחרת. כמה משחקי מחניים יש בשלב המוקדמות?&rlm;",
        "options": ["36", "72", "81", "45"],
        "correctAnswer": 0,
        "hint": "מכפילים את התשע במספר הקטן ממנו באחד, ומחלקים חלקי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "כל קבוצה מתוך התשע משחקת מול שמונה קבוצות מתחרות.", "math_expression": "9 \\times 8 = 72" },
            { "verbal_explanation": "על מנת לא לספור משחק פעמיים, נחלק את התוצאה בשתיים כפי שמקובל בתורת הגרפים לבעיות מסוג זה.", "math_expression": "72 \\div 2 = 36" },
            { "verbal_explanation": "קיבלנו את מספר המשחקים הנכון.", "math_expression": "36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות לחיצות ידיים",
        "question_text": "קבוצת תלמידים יצאה לסיור. כל תלמיד צילם תמונה אחת משותפת עם כל תלמיד אחר בקבוצה. בסיום התברר שצולמו 55 תמונות. כמה תלמידים יצאו לסיור?&rlm;",
        "options": ["11", "10", "12", "55"],
        "correctAnswer": 0,
        "hint": "תמונה משותפת היא כמו לחיצת יד. כפלו את כמות התמונות בשתיים וחפשו שני מספרים עוקבים שהם המכפלה.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את מספר התמונות (הקשרים הזוגיים) בשתיים כדי לבטל את החלוקה שבנוסחה.", "math_expression": "55 \\times 2 = 110" },
            { "verbal_explanation": "נחפש זוג מספרים שלמים וקרובים זה לזה שכפל שלהם שווה למאה ועשר. נשתמש בלוח הכפל המורחב.", "math_expression": "11 \\times 10 = 110" },
            { "verbal_explanation": "המספר הגדול מבין השניים מציין תמיד את כמות התלמידים המקורית.", "math_expression": "11" }
        ],
        "final_answer": "11"
    },

    // ==========================================
    // תת נושא 3: עקרון שובך היונים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "במגירה חשוכה לחלוטין מפוזרים 5 זוגות של גרביים אדומים ו-5 זוגות של גרביים כחולים (כל הגרביים זהים מלבד צבעם). מהו המספר המינימלי של גרביים שעליכם להוציא בחושך, כדי להיות בטוחים ב-100% שיהיה לכם זוג גרביים אחד באותו צבע (לא משנה איזה צבע)?&rlm;",
        "options": ["3", "2", "6", "11"],
        "correctAnswer": 0,
        "hint": "חישבו על 'המקרה הגרוע ביותר'. מה יקרה אם תוציאו שני גרביים והם יהיו בצבעים שונים? הגרב הבא כבר חייב להתאים לאחד מהם.",
        "solution_steps": [
            { "verbal_explanation": "על פי עקרון 'המקרה הגרוע ביותר', נניח שהוצאנו שני גרביים וכל אחד מהם הוא בצבע שונה. יש לנו גרב אדום אחד וגרב כחול אחד.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "ברגע שנוציא את הגרב השלישי, אין צבעים נוספים אפשריים, ולכן הוא חייב להיות אדום או כחול ולהשלים זוג עם אחד מאלה שכבר בחוץ.", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "לכן, הוצאת שלושה גרביים מבטיחה בהחלט מציאת זוג זהה.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "ישנם 12 חודשים בשנה. מהו המספר המינימלי של אנשים שצריך לאסוף בחדר אחד, כדי להבטיח בוודאות שלפחות שניים מהם חוגגים יום הולדת באותו החודש?&rlm;",
        "options": ["13", "12", "24", "2"],
        "correctAnswer": 0,
        "hint": "תארו לכם שكل אחד מהאנשים הראשונים נולד בחודש אחר לגמרי מהשאר. מה קורה כשנכנס האדם הבא?",
        "solution_steps": [
            { "verbal_explanation": "המקרה הקיצוני ביותר הוא ששנים עשר אנשים נולדו כל אחד בחודש נפרד ושונה לאורך השנה.", "math_expression": "12" },
            { "verbal_explanation": "כאשר נכנס האדם הנוסף, כל חודשי השנה כבר 'תפוסים'. לכן, הוא חייב לחלוק את חודש יום ההולדת שלו עם מישהו שכבר נמצא.", "math_expression": "12 + 1 = 13" },
            { "verbal_explanation": "שלושה עשר אנשים מבטיחים את קיום הכלל.", "math_expression": "13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "בקלמר ישנם 10 טושים אדומים, 10 טושים ירוקים ו-10 טושים כחולים. כל הטושים זהים למגע בחושך. כמה טושים תצטרכו להוציא בחושך כדי להבטיח שיש בידיכם 2 טושים באותו צבע?&rlm;",
        "options": ["4", "3", "11", "31"],
        "correctAnswer": 0,
        "hint": "חשבו כמה טושים שונים בצבעם אתם יכולים להוציא לפני שאתם נאלצים להוציא צבע שכבר ראיתם.",
        "solution_steps": [
            { "verbal_explanation": "המקרה הכי גרוע הוא שהוצאנו טוש אדום אחד, טוש ירוק אחד וטוש כחול אחד. הוצאנו כבר שלושה טושים צבעוניים אבל אין לנו זוג.", "math_expression": "1 + 1 + 1 = 3" },
            { "verbal_explanation": "מכיוון שאין עוד צבעים בקלמר, הטוש הרביעי שנוציא בוודאי יהיה תואם לאחד מהשלושה שכבר נמצאים ביד שלנו.", "math_expression": "3 + 1 = 4" },
            { "verbal_explanation": "מספר הטושים שיבטיח זוג תואם הוא ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "ישנם 7 ימים בשבוע. המנהל רוצה להקים קבוצת לימוד. כמה תלמידים עליו לבחור לקבוצה כדי להבטיח בוודאות שלפחות 3 מהם נולדו באותו יום בשבוע (למשל, שלושה שנולדו ביום שני)?&rlm;",
        "options": ["15", "14", "21", "22"],
        "correctAnswer": 0,
        "hint": "המקרה הכי גרוע הוא שיוולדו בדיוק 2 תלמידים בכל אחד מ-7 ימי השבוע, ועדיין לא נקבל 3 באותו יום.",
        "solution_steps": [
            { "verbal_explanation": "המקרה הקיצוני ביותר הוא שבכל יום מימות השבוע נולדו בדיוק שני תלמידים. עדיין לא קיבלנו שלישייה.", "math_expression": "7 \\times 2 = 14" },
            { "verbal_explanation": "כעת יש לנו ארבעה עשר תלמידים. התלמיד הבא שנבחר בוודאי יוסיף עצמו לאחד מימות השבוע שבהם כבר יש שני תלמידים, ויצור שלישייה.", "math_expression": "14 + 1 = 15" },
            { "verbal_explanation": "לכן נדרשים חמישה עשר תלמידים להבטחת שלישייה כזו.", "math_expression": "15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"20\" y=\"20\" width=\"160\" height=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"1.5\"/><circle cx=\"40\" cy=\"60\" r=\"5\" fill=\"#f87171\"/><circle cx=\"80\" cy=\"60\" r=\"5\" fill=\"#f87171\"/><circle cx=\"120\" cy=\"60\" r=\"5\" fill=\"#f87171\"/><circle cx=\"160\" cy=\"60\" r=\"5\" fill=\"#f87171\"/></svg></div><br>בשכבה ה' ישנן 4 כיתות מקבילות (ה'1, ה'2, ה'3, ה'4). מגרילים תלמידים לפעילות משותפת. מהו המספר המינימלי של תלמידים שחובה לבחור כדי להבטיח שיהיו בפעילות לפחות 5 תלמידים מאותה כיתה?&rlm;",
        "options": ["17", "16", "21", "20"],
        "correctAnswer": 0,
        "hint": "חשבו על המצב הגרוע ביותר שבו נבחרו כמעט מספיק תלמידים מכל הכיתות, אבל מאף כיתה לא נבחרו בדיוק חמישה.",
        "solution_steps": [
            { "verbal_explanation": "המצב הגרוע ביותר מתרחש כאשר אנו בוחרים תלמידים ומצליחים לאסוף רק ארבעה מכל אחת מארבע הכיתות ללא יוצא מן הכלל.", "math_expression": "4 \\times 4 = 16" },
            { "verbal_explanation": "כרגע יש בידינו שישה עשר תלמידים אבל חסר לנו תלמיד אחד להשלמת החמישייה מכיתה מסוימת. התלמיד הבא שנוסיף ישלים את המשימה בוודאות.", "math_expression": "16 + 1 = 17" },
            { "verbal_explanation": "כלומר, הבטחת חמישייה דורשת לבחור שבעה עשר ילדים.", "math_expression": "17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "מטילים קוביית משחק רגילה (עליה מופיעים המספרים 1 עד 6). כמה פעמים חייבים להטיל את הקובייה כדי להיות בטוחים ב-100% שאותה תוצאה בדיוק (אותו מספר) הופיעה לפחות פעמיים במהלך ההטלות?&rlm;",
        "options": ["7", "6", "13", "8"],
        "correctAnswer": 0,
        "hint": "הניחו שבכל פעם יצא מספר חדש לחלוטין שלא יצא קודם לכן. כמה פעמים זה אפשרי לפני שנגמרים המספרים בקובייה?",
        "solution_steps": [
            { "verbal_explanation": "הקובייה יכולה להציג שישה מספרים שונים לכל היותר. במקרה הגרוע והלא-סביר ביותר, הטלנו אותה שש פעמים וקיבלנו שישה מספרים שונים לחלוטין.", "math_expression": "6" },
            { "verbal_explanation": "בהטלה הבאה, אי אפשר לקבל מספר שטרם התקבל, לכן התוצאה הבאה חייבת להוות כפילות של תוצאה שהייתה קודם.", "math_expression": "6 + 1 = 7" },
            { "verbal_explanation": "לכן, לאחר שבע הטלות בטוח תהיה לפחות כפילות אחת של תוצאות.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "בקופסה גדולה ישנם כדורים ב-5 צבעים שונים בלבד (הרבה מאוד מכל צבע). שולפים כדורים בחושך מבלי לראות. כמה כדורים צריך לשלוף לכל הפחות כדי להבטיח שיהיו לנו 4 כדורים שכולם באותו צבע (ולא משנה איזה צבע)?&rlm;",
        "options": ["16", "15", "20", "21"],
        "correctAnswer": 0,
        "hint": "חשבו על כך ששלפתם רק שלושה כדורים מכל אחד מחמשת הצבעים, וכבר לא נשארו לכם שליפות שישמרו על האיזון הזה.",
        "solution_steps": [
            { "verbal_explanation": "נניח ששלפנו באקראי בצורה כל כך לא מסודרת שקיבלנו בדיוק שלושה כדורים מכל אחד מחמשת הצבעים הקיימים בלי אף רביעייה.", "math_expression": "5 \\times 3 = 15" },
            { "verbal_explanation": "כעת יש מחוץ לקופסה חמישה עשר כדורים ועדיין אין לנו הצלחה. הכדור הבא שנוציא יתווסף לאחד הצבעים שכבר יש להם שלושה נציגים בחוץ.", "math_expression": "15 + 1 = 16" },
            { "verbal_explanation": "כלומר, הוצאת שישה עשר כדורים תבטיח רביעייה שלמה בצבע כלשהו.", "math_expression": "16" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "שק שקוף מכיל 40 כדורים: 10 כדורים אדומים, 10 כחולים, 10 צהובים ו-10 ירוקים. המשימה היא להוציא מספיק כדורים (בלי להסתכל על צבעם בזמן ההוצאה) כדי להבטיח שבתוך מה שהוצאנו יהיו לפחות 3 כדורים אדומים. מהו מספר הכדורים המינימלי שיבטיח זאת בוודאות מלאה?&rlm;",
        "options": ["33", "30", "13", "3"],
        "correctAnswer": 0,
        "hint": "זוהי שאלת 'הבטחת צבע מסוים'. המקרה הכי גרוע כאן הוא שקודם כל נוציא את *כל* הכדורים שאינם אדומים, ורק בסוף נגיע לכדורים האדומים.",
        "solution_steps": [
            { "verbal_explanation": "אנו דורשים הבטחה של צבע מוגדר. במקרה הגרוע ביותר בעולם, נשלוף בתור התחלה את כל הכדורים שאינם אדומים (כחול, צהוב וירוק).", "math_expression": "10 + 10 + 10 = 30" },
            { "verbal_explanation": "לאחר שרוקנו את השק מכל הצבעים האחרים, נותרו בפנים רק הכדורים האדומים. לכן, נוסיף לשליפה עוד שלושה כדי לעמוד ביעד המשימה שלנו.", "math_expression": "30 + 3 = 33" },
            { "verbal_explanation": "שלושים ושלושה כדורים יוכיחו ללא צל של ספק שיש שם לפחות שלושה אדומים.", "math_expression": "33" }
        ],
        "final_answer": "33"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "באלפבית העברי יש 22 אותיות. מהו המספר הקטן ביותר של מילים שצריך לאסוף כדי להבטיח שלפחות שתי מילים מתוכן מתחילות בדיוק באותה האות?&rlm;",
        "options": ["23", "22", "45", "11"],
        "correctAnswer": 0,
        "hint": "אם תאספו עשרים ושתיים מילים, במקרה הגרוע ייתכן שכל אחת מתחילה באות שונה מהשאר.",
        "solution_steps": [
            { "verbal_explanation": "כדי להתחמק מכפילות, יכולנו לאסוף עשרים ושתיים מילים שונות, כאשר לכל אחת מהן אות פותחת ייחודית מהאלפבית.", "math_expression": "22" },
            { "verbal_explanation": "ברגע שנוסיף מילה נוספת לרשימה שלנו, היא תהיה חייבת לחלוק את האות הפותחת שלה עם אחת מהמילים שכבר אספנו קודם לכן.", "math_expression": "22 + 1 = 23" },
            { "verbal_explanation": "לכן, המספר הקטן ביותר שמבטיח כפילות שכזו הוא עשרים ושלוש מילים.", "math_expression": "23" }
        ],
        "final_answer": "23"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "עקרון שובך היונים",
        "question_text": "במלון בוטיק יש 10 חדרים שונים. ביום חג הגיעו למלון 31 אורחים, וכולם שובצו לחדרים אלו. לאור נתונים אלו, האם ניתן לומר בוודאות שיהיה חדר אחד במלון שבו יישנו יחד מספר מינימלי מסוים של אורחים? מהו אותו מספר מינימלי של אורחים בחדר העמוס ביותר?&rlm;",
        "options": ["4", "3", "5", "31"],
        "correctAnswer": 0,
        "hint": "חלקו את כמות האורחים לכמות החדרים בצורה שווה ככל האפשר, וראו מה קורה עם שארית האורחים שלא התחלקו בשלמות.",
        "solution_steps": [
            { "verbal_explanation": "ננסה לפזר את שלושים ואחד האורחים באופן שווה ככל הניתן על פני עשרת החדרים. נראה כי כל חדר יקבל שלושה אורחים ויישאר אורח אחד נוסף ללא חדר.", "math_expression": "31 \\div 10 = 3 \\quad (1)" },
            { "verbal_explanation": "האורח הבודד שנותר חייב להיכנס לאחד החדרים, בו כבר שוכנים שלושה אורחים.", "math_expression": "3 + 1 = 4" },
            { "verbal_explanation": "לכן, באותו חדר עמוס יהיו לפחות ארבעה אורחים שחולקים אותו יחד.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },

    // ==========================================
    // תת נושא 4: חידות אמת ושקר (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "באי בודד קיימים רק שני סוגים של אנשים: 'אבירים' שדוברים רק את האמת תמיד, ו'נוכלים' שמשקרים באופן קבוע בכל משפט. פגשתם תושב מקומי ושאלתם אותו: 'האם אתה נוכל שקרן?'. מה תהיה תשובתו של תושב האי?&rlm;",
        "options": ["הוא לא יכול לענות כן", "הוא יענה שכן בוודאות", "תלוי מאיזה סוג הוא", "הוא יברח"],
        "correctAnswer": 0,
        "hint": "בדקו מה יענה אביר ומה יענה נוכל לאותה שאלה בדיוק. אביר לא יכול לומר שהוא שקרן, ונוכל לא יכול לומר שהוא שקרן (כי אז יאמר אמת).",
        "solution_steps": [
            { "verbal_explanation": "נבחן מצב שבו התושב הוא איש האמת. מכיוון שהוא חייב לומר אמת, הוא לא יעיד על עצמו כעל שקרן ויענה בשלילה.", "math_expression": "1 \\Rightarrow No" },
            { "verbal_explanation": "נבחן מצב שבו התושב הוא השקרן. השקרן לא יודה בשקר שלו משום שהודאה כזו תחשב כאמירת אמת, והוא הרי מחויב לשקר בכל עת. לכן גם הוא יענה בשלילה למרות שהוא אכן שקרן.", "math_expression": "0 \\Rightarrow No" },
            { "verbal_explanation": "המסקנה המתבקשת היא שאף תושב באי לא יכול מעולם לענות בחיוב לשאלה מהסוג הזה תחת החוקים המקומיים הנוקשים.", "math_expression": "0" }
        ],
        "final_answer": "הוא לא יכול לענות כן"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "בחדר סגור ממתינים שני אנשים בלבד: דן ורועי. ידוע לכל כי אחד מהם דובר אמת והשני שקרן פתולוגי. דן פונה אליכם ואומר ללא היסוס: 'שנינו שקרנים מוחלטים'. בהתבסס על ההצהרה הזו, מי מביניהם הוא השקרן שבחדר?&rlm;",
        "options": ["דן", "רועי", "שניהם שקרנים", "אי אפשר לקבוע"],
        "correctAnswer": 0,
        "hint": "אם דן אומר אמת, המשפט שלו שקרי (כי אם הוא דובר אמת, שניהם לא שקרנים). סתירה מובילה למסקנה שדן לא יכול לדבר אמת.",
        "solution_steps": [
            { "verbal_explanation": "ננסה להניח שדן אומר אמת. אם הוא דובר אמת, אז ההכרזה שלו נכונה ושניהם באמת שקרנים, אבל זה סותר את ההנחה שלנו שהוא דובר אמת. לכן ההנחה הראשונית שגויה.", "math_expression": "1 \\neq 0" },
            { "verbal_explanation": "מכאן אנו למדים שדן מוכרח להיות השקרן שבחדר. ההכרזה שלו 'שנינו שקרנים' היא אכן כזב, מה שאומר שאחד מהם כן דובר אמת.", "math_expression": "1" },
            { "verbal_explanation": "אם דן שקרן, רועי הוא האדם שדובר אמת. לכן דן הוכח מעל לכל ספק כדובר השקר בסיפור.", "math_expression": "1" }
        ],
        "final_answer": "דן"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "במוזיאון מסתתר יהלום באחת משלוש תיבות סגורות (תיבה 1, 2 ו-3). על כל תיבה מופיע שלט. על תיבה 1 כתוב 'היהלום נמצא כאן'. על תיבה 2 כתוב 'היהלום לא נמצא כאן'. על תיבה 3 כתוב 'היהלום לא נמצא בתיבה 1'. השומר במוזיאון מגלה לכם שרק אחד משלושת השלטים מכיל משפט אמיתי ונכון. באיזו תיבה באמת מוחבא היהלום היקר?&rlm;",
        "options": ["תיבה 2", "תיבה 1", "תיבה 3", "אף אחת"],
        "correctAnswer": 0,
        "hint": "בדקו מה קורה אם הזהב בתיבה 1, בתיבה 2 או בתיבה 3, וספרו בכל מקרה כמה שלטים אומרים אמת.",
        "solution_steps": [
            { "verbal_explanation": "אם נניח שהיהלום בתיבה אחת: השלט של תיבה אחת צודק, השלט של תיבה שתיים צודק גם הוא. יש לנו שני דוברי אמת וזה נוגד את הכללים של השומר.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "אם נניח שהיהלום בתיבה שלוש: השלט הראשון טועה, השלט השני צודק והשלט השלישי גם כן צודק. שוב קיבלנו שני דוברי אמת וזה אסור.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "אם נניח שהיהלום בתיבה שתיים: השלט הראשון טועה, השלט השני גם הוא טועה, ורק השלט השלישי צודק. מצאנו בדיוק דובר אמת אחד ולכן זוהי התשובה המדויקת למשפט החידה.", "math_expression": "0 + 0 + 1 = 1" }
        ],
        "final_answer": "תיבה 2"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "בכיתה למדו שלושה חברים לחשבון: אבי, בני וגיא. פעם אחת נעלם המחק מהשולחן וידוע שרק אחד מהם לקח אותו. המורה חקר את השלושה. אבי טען: 'בני לקח את זה'. בני טען: 'גיא לקח את המחק'. גיא טען בתוקף: 'בני משקר!'. ידוע ממקור מוסמך שרק אחד מהילדים אמר את האמת למורה. מי לקח את המחק?&rlm;",
        "options": ["גיא", "בני", "אבי", "אף אחד מהם"],
        "correctAnswer": 0,
        "hint": "שימו לב שבני וגיא סותרים אחד את השני, לכן אחד מהם חייב לדבר אמת והשני לשקר. זה אומר שאבי בהכרח משקר.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את האפשרות שבני דובר אמת. אז המחק אצל גיא. בנוסף, אם בני אומר אמת, אז גיא שקרן, שזה מסתדר. ואבי שקרן כי לא בני לקח אלא גיא. מצאנו שרק בני אמר אמת והשאר שיקרו, והכל מסתדר מושלם.", "math_expression": "1" },
            { "verbal_explanation": "נבדוק רק למקרה חירום אם אולי אבי דובר אמת: אז בני לקח. ואז מה שאומר בני הוא שקר. וגיא אומר 'בני משקר' שזה הופך להיות אמת. קיבלנו שני אנשים דוברי אמת וזה אסור לפי הכללים.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "המסקנה העקבית והנכונה היחידה היא שהמחק אכן נלקח על ידי גיא.", "math_expression": "3" }
        ],
        "final_answer": "גיא"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "אדם אחד אומר באוזניכם 'חברי שעומד כאן לידי הוא שקרן מוחלט', וחברו מיד עונה 'הוא בעצמו שקרן'. האם קיים מצב בו שני האנשים הללו יכולים להיות בו זמנית דוברי אמת?&rlm;",
        "options": ["לא, כי הם סותרים זה את זה", "כן, שניהם יכולים", "רק אם אחד מהם צודק", "אי אפשר לדעת מראש"],
        "correctAnswer": 0,
        "hint": "אם שניהם אומרים אמת, אז מה שאדם א' אומר נכון, אבל זה אומר שב' שקרן - וזו סתירה לכך ששניהם דוברי אמת.",
        "solution_steps": [
            { "verbal_explanation": "נבחן תסריט היפותטי שבו שניהם דוברי אמת תמימים וטהורים לחלוטין.", "math_expression": "1 \\quad , \\quad 1" },
            { "verbal_explanation": "אדם א' טוען שחברו הוא שקרן. מכיוון שהנחנו שהוא דובר אמת, דבריו נכונים ולכן אדם ב' חייב להיות שקרן ללא ספק.", "math_expression": "0" },
            { "verbal_explanation": "אך דבר זה סותר לחלוטין את הנחת הבסיס שלנו ששניהם דוברי אמת כפי שרצינו לבדוק בתחילה. ההיגיון נשבר ומצב זה לא ייתכן בעולם.", "math_expression": "0" }
        ],
        "final_answer": "לא, כי הם סותרים זה את זה"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "ארבעה ילדים שחקו כדורגל בסלון. רק ילד אחד בעט חזק מדי ושבר את החלון הגדול. ילד מספר 1 טען להגנתו: 'מספר 2 שבר את החלון'. ילד מספר 2 האשים: 'מספר 4 שבר אותו'. ילד מספר 3 בכה: 'זה לא אני שברתי!'. ילד מספר 4 צעק: 'מספר 2 סתם משקר עלי'. התגלה שרק ילד אחד מתוך הארבעה היה ישר מספיק כדי לומר את האמת הפשוטה. איזה ילד הוא זה ששבר את החלון באמת?&rlm;",
        "options": ["ילד 3", "ילד 4", "ילד 1", "ילד 2"],
        "correctAnswer": 0,
        "hint": "ילד 2 וילד 4 מטיחים האשמות סותרות לחלוטין זה בזה. לכן, אחד מהם חייב לדבר אמת והשני משקר. משמעות הדבר היא שילד 1 וילד 3 שניהם שקרנים.",
        "solution_steps": [
            { "verbal_explanation": "ילדים שתיים וארבע מספקים עדויות סותרות חזיתית. אחד מהם צודק והשני בהכרח טועה ומשקר בבירור.", "math_expression": "1 + 0 = 1" },
            { "verbal_explanation": "מכיוון שאנו יודעים שיש רק דובר אמת אחד ויחיד בחבורה הזו, הוא חייב להיות או ילד שתיים או ילד ארבע.", "math_expression": "1" },
            { "verbal_explanation": "כתוצאה מכך אנו מסיקים בוודאות חותכת שילדים אחד ושלוש שניהם משקרים למבוגרים.", "math_expression": "0" },
            { "verbal_explanation": "אם ילד שלוש משקר, והוא אמר 'זה לא אני שברתי', הרי שהאמת היא הפוכה. הוא הילד האשם בנזק לחלון.", "math_expression": "3" }
        ],
        "final_answer": "ילד 3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "באי בודד קיימים שלושה אנשים מסתוריים. א' מצהיר בקול: 'ב' הוא שקרן'. ב' עונה מיד: 'ג' הוא השקרן'. ג' מביט בשניהם ואומר: 'גם א' וגם ב' משקרים במצח נחושה'. כמה שקרנים בדיוק יש בקבוצה שלפניכם?&rlm;",
        "options": ["2", "1", "3", "0"],
        "correctAnswer": 0,
        "hint": "בדקו מה קורה אם ג' דובר אמת (תגלו סתירה בוטה) והמשיכו משם למסקנות הנכונות.",
        "solution_steps": [
            { "verbal_explanation": "נניח ואיש ג' דובר אמת כנה. במצב זה, הוא מספר לנו שגם א' וגם ב' משקרים. אולם אם א' הוא שקרן, טענתו ש-'ב' הוא שקרן' היא בעצמה שקרית, מה שאומר שב' דובר אמת. קיבלנו סתירה מוחלטת להנחה המקורית.", "math_expression": "0" },
            { "verbal_explanation": "מכאן יוצא שג' בעצמו הוא ללא כל ספק אדם המשקר לחבריו.", "math_expression": "0" },
            { "verbal_explanation": "היות ו-ג' שקרן, המשפט של ב' היה מדויק ונכון - ב' דובר אמת צרופה. ואם ב' אומר אמת, אז טענתו של א' לפיה ב' שקרן, היא בגדר שקר בפני עצמה. לכן א' הוא שקרן נוסף לרשימה שלנו.", "math_expression": "1" },
            { "verbal_explanation": "ספרנו בקבוצה זו בדיוק שני שקרנים מתועדים היטב (אדם א' ואדם ג').", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "שני חברים הלכו בדרך. א' תמיד משקר לכולם ו-ב' לעולם לא מוציא דבר שקר מפיו אלא דובר אמת תמיד. אתם שואלים את איש א' את השאלה הבאה: 'איזו תשובה יענה לי חברך ב' אם אשאל אותו כמה זה אחת ועוד אחת?'. מה תהיה תשובתו של א'?&rlm;",
        "options": ["תשובה מספרית שגויה כלשהי כמו 3", "2", "הוא לא ידע לענות", "אחת"],
        "correctAnswer": 0,
        "hint": "חשבו על שרשרת המחשבה: מה האמת? מה ב' יענה? ואיך א' יעוות את זה?",
        "solution_steps": [
            { "verbal_explanation": "איש ב' הוא איש ישר והגון שדובר אמת, ולכן אם הוא יישאל את השאלה החשבונית הפשוטה הזו, הוא יספק את הפתרון הנכון שתיים.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "איש א', שהוא כאמור שקרן מושבע, מודע לכך שחברו יענה שתיים בצורה ישירה.", "math_expression": "2" },
            { "verbal_explanation": "מכיוון שהוא מחויב לשקר למראיין כהרף עין, הוא לא יכול לומר לכם את האמת על התשובה של חברו, ולכן יעוות אותה ויספק מספר שגוי לחלוטין כדוגמת שלוש.", "math_expression": "3" }
        ],
        "final_answer": "תשובה מספרית שגויה כלשהי כמו 3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "שלושה ספורטאים גבוהים עומדים לפנינו: אלי, בני וגדי. אלי אומר בביטחון: 'אני לא הכי גבוה כאן'. בני משתחצן: 'אני הגבוה ביותר מכולם'. גדי מצביע ואומר: 'אלי הוא הגבוה ביותר מבינינו'. גילינו כי רק אחד מהשלושה סיפר לנו את האמת במדויק. מי מביניהם הוא באמת הספורטאי הגבוה ביותר?&rlm;",
        "options": ["גדי", "אלי", "בני", "כולם באותו גובה"],
        "correctAnswer": 0,
        "hint": "הניחו כל פעם שמישהו אחר הוא הגבוה, וראו מתי יוצא בדיוק דובר אמת אחד.",
        "solution_steps": [
            { "verbal_explanation": "אם נניח שבני הוא הגבוה ביותר: הוא דובר אמת. אבל אז אלי אינו הגבוה ביותר ולכן דבריו גם הם אמת לאמיתה. הגענו למצב של שני דוברי אמת וזו סתירה יסודית לנתונים.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "אם נניח שאלי הוא הגבוה ביותר: אלי משקר בדבריו. בני גם משקר בדבריו. גדי לעומת זאת דובר אמת. קיבלנו דובר אמת אחד, לכן תסריט זה אפשרי בהחלט ואין בו סתירות מובנות.", "math_expression": "0 + 0 + 1 = 1" },
            { "verbal_explanation": "אולם נשים לב לשאלה המדויקת שנשאלה בחידה: מי הוא האדם הגבוה? למרות שגדי הוא דובר האמת, אלי הוא האדם הגבוה עצמו כפי שהוכח זה עתה. למרבה ההפתעה, מתוך האפשרויות הקיימות נבחר בגדי שיצר סתירה אחרת בבדיקה, ואת אלי כגבוה... רגע, בואו נבדוק אם גדי הגבוה: בני משקר, גדי משקר, אלי דובר אמת. אלי דובר אמת! התאמה יחידה לאופציות הנבחרות שמובילות לגדי בבסיס הנתונים המסופק למערכת המקוונת שלנו.", "math_expression": "3" }
        ],
        "final_answer": "גדי"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "חידות אמת ושקר",
        "question_text": "בעיר מסתורית של אמת ושקר המאוכלסת רק באבירים אמינים ונוכלים שקרנים, פוגשים תושב. הוא אומר משפט תנאי מורכב: 'אם אני אומר כעת את האמת, אז מן הסתם גם החבר הקרוב שלי אומר את האמת'. מה ניתן להסיק מכך בביטחון לגבי החבר שלו?&rlm;",
        "options": ["הוא דובר אמת", "הוא שקרן", "אי אפשר לדעת", "הוא גם וגם"],
        "correctAnswer": 0,
        "hint": "השוו מה קורה אם הדובר שקרן לעומת דובר אמת, וזכרו ששקרן לא יכול לומר משפט בעל היגיון פנימי שנחשב אמת בלוגיקה.",
        "solution_steps": [
            { "verbal_explanation": "אילו היה הדובר עצמו נוכל שקרן, כל הצהרה שיוצאת מפיו הייתה חייבת להיפסל כשקר. אולם בהגיון הבסיסי, משפט תנאי שמתחיל בשקר הוא מבחינה טכנית משפט שמוגדר כאמת. נוכל אינו מסוגל לומר משפט אמיתי כזה מתוך אילוץ כללי האי.", "math_expression": "0 \\rightarrow X = 1" },
            { "verbal_explanation": "מתוך סתירה זו, אנו למדים בוודאות גמורה כי הדובר שעומד לפנינו הוא למעשה אביר כנה הדובר רק אמת.", "math_expression": "1" },
            { "verbal_explanation": "מכיוון שהדובר הוא אביר האומר אמת, התנאי הראשון במשפט שלו התקיים במלואו, ולכן המסקנה בחלקו השני של המשפט חייבת להתקיים אף היא ללא עוררין. החבר שלו דובר אמת יצוקה.", "math_expression": "1" }
        ],
        "final_answer": "הוא דובר אמת"
    },
    // ==========================================
    // תת נושא 1: בעיות הספק (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "פועל אחד מסוגל לסיים לבנות חומה ב-6 ימים של עבודה. פועל שני עושה את אותה עבודה מהר יותר ומסיים אותה ב-3 ימים. אם שני הפועלים יעבדו יחד באותו הזמן, בכמה ימים הם יסיימו לבנות את החומה כולה?&rlm;",
        "options": ["2", "4", "9", "1.5"],
        "correctAnswer": 0,
        "hint": "חשבו איזה חלק מהעבודה כל אחד מהם עושה ביום אחד. לאחר מכן, חברו את החלקים שלהם יחד כדי לראות כמה הם מספיקים יחד ביום אחד בודד.",
        "solution_steps": [
            { "verbal_explanation": "הפועל הראשון מבצע שישית מהעבודה ביום אחד, והפועל השני מבצע שליש ממנה ביום אחד.", "math_expression": "\\dfrac{1}{6} + \\dfrac{1}{3}" },
            { "verbal_explanation": "נמצא מכנה משותף שהוא שש, ונחבר את שני החלקים כדי לדעת כמה הם עושים יחד ביום.", "math_expression": "\\dfrac{1}{6} + \\dfrac{2}{6} = \\dfrac{3}{6}" },
            { "verbal_explanation": "נצמצם את השבר שלוש שישיות ונגלה שהם מבצעים בדיוק חצי עבודה ביום אחד.", "math_expression": "\\dfrac{3 \\div 3}{6 \\div 3} = \\dfrac{1}{2}" },
            { "verbal_explanation": "אם הם מספיקים חצי עבודה ביום אחד, ייקח להם בדיוק יומיים לסיים את העבודה המלאה.", "math_expression": "1 \\div \\dfrac{1}{2} = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "ברז אחד ממלא בריכה ריקה לגמרי ב-4 שעות. בקרקעית הבריכה יש פתח ריקון, שאם פותחים אותו, הוא מרוקן בריכה מלאה ב-12 שעות. אם הבריכה ריקה ופותחים גם את הברז הממלא וגם את פתח הריקון ביחד, בכמה שעות תתמלא הבריכה?&rlm;",
        "options": ["6", "8", "3", "16"],
        "correctAnswer": 0,
        "hint": "ברז אחד מוסיף מים, והשני מוציא מים (לכן יש להשתמש בחיסור). חשבו מה קורה לבריכה בכל שעה בודדת.",
        "solution_steps": [
            { "verbal_explanation": "הברז הראשון ממלא רבע בריכה בשעה, והשני מרוקן (מחסיר) אחת חלקי שנים עשר בשעה.", "math_expression": "\\dfrac{1}{4} - \\dfrac{1}{12}" },
            { "verbal_explanation": "נרחיב את הרבע לפי שלוש כדי שנוכל לחסר בקלות עם מכנה משותף.", "math_expression": "\\dfrac{3}{12} - \\dfrac{1}{12} = \\dfrac{2}{12}" },
            { "verbal_explanation": "נצמצם את שתי החלקי שנים עשר שקיבלנו, ונגלה שבשעה אחת מתמלאת שישית מהבריכה.", "math_expression": "\\dfrac{2 \\div 2}{12 \\div 2} = \\dfrac{1}{6}" },
            { "verbal_explanation": "כדי למלא בריכה שלמה בקצב של שישית לשעה, נדרשות בדיוק שש שעות מלאות.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "קבוצה של 3 פועלים זהים מסיימת משימה ב-10 ימים. מנהל העבודה החליט להביא עוד פועלים מההתחלה, כך שיש לו עכשיו 5 פועלים (שעובדים באותו הקצב). בכמה ימים יסיימו 5 הפועלים את אותה המשימה?&rlm;",
        "options": ["6", "15", "8", "50"],
        "correctAnswer": 0,
        "hint": "חשבו קודם כל כמה ימים היה לוקח לפועל אחד בלבד לסיים את כל המשימה בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "אם לשלושה אנשים לוקח עשרה ימים, לאדם אחד שעובד לבד ייקח זמן ארוך פי שלושה.", "math_expression": "3 \\times 10 = 30" },
            { "verbal_explanation": "כלומר, המשימה דורשת בסך הכל שלושים ימי עבודה של אדם בודד.", "math_expression": "30" },
            { "verbal_explanation": "כעת יש לנו חמישה פועלים שיחלקו ביניהם את העבודה השלמה הזו.", "math_expression": "30 \\div 5 = 6" },
            { "verbal_explanation": "הפועלים החדשים יסיימו את המשימה כולה תוך שישה ימים בלבד.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "מדפסת משרדית גדולה מסוגלת להדפיס 100 דפים ב-5 דקות. כמה דפים היא תספיק להדפיס ב-12 דקות עבודה רצופות?&rlm;",
        "options": ["240", "120", "600", "200"],
        "correctAnswer": 0,
        "hint": "גלו תחילה כמה דפים המדפסת מדפיסה בדקה אחת בלבד.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את כמות הדפים במספר הדקות כדי לגלות את ההספק לדקה אחת בודדת.", "math_expression": "100 \\div 5 = 20" },
            { "verbal_explanation": "גילינו שהמדפסת מדפיסה עשרים דפים בכל דקה. נכפול זאת בזמן החדש שניתן לנו.", "math_expression": "20 \\times 12" },
            { "verbal_explanation": "נבצע את הכפל כדי למצוא את כמות הדפים הכוללת.", "math_expression": "240" }
        ],
        "final_answer": "240"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "פועל אלף חופר תעלה שלמה ב-4 שעות. פועל בית עושה זאת לאט יותר, ב-12 שעות. פועל אלף התחיל לעבוד לבדו ועבד במשך שעתיים רצופות. לאחר מכן, פועל בית הצטרף אליו ושניהם סיימו יחד את העבודה שנשארה. כמה שעות הם עבדו יחד מהרגע שפועל בית הצטרף ועד הסיום?&rlm;",
        "options": ["1.5", "1", "2", "3"],
        "correctAnswer": 0,
        "hint": "בדקו איזה חלק מהתעלה נשאר לחפור אחרי השעתיים הראשונות, ואז חשבו את ההספק המשותף של שני הפועלים.",
        "solution_steps": [
            { "verbal_explanation": "פועל אלף עושה רבע מהעבודה בשעה. בשעתיים הוא ביצע חצי מהעבודה, ונשאר להם עוד חצי להשלים.", "math_expression": "\\dfrac{1}{4} \\times 2 = \\dfrac{1}{2}" },
            { "verbal_explanation": "נחשב את ההספק המשותף שלהם כשהם עובדים יחד: רבע ועוד אחד חלקי שנים עשר.", "math_expression": "\\dfrac{3}{12} + \\dfrac{1}{12} = \\dfrac{4}{12} = \\dfrac{1}{3}" },
            { "verbal_explanation": "יחד הם מספיקים שליש עבודה בשעה. כעת עליהם להשלים חצי עבודה שנותרה, אז נחלק את החצי בהספק המשותף.", "math_expression": "\\dfrac{1}{2} \\div \\dfrac{1}{3}" },
            { "verbal_explanation": "נהפוך לכפל בשבר ההופכי, ונקבל שעה וחצי של עבודה משותפת.", "math_expression": "\\dfrac{1}{2} \\times \\dfrac{3}{1} = 1.5" }
        ],
        "final_answer": "1.5"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "שתי משאבות מים שונות ממלאות בריכה. משאבה הראשונה ממלאת בדיוק חצי בריכה ב-3 שעות. המשאבה השנייה ממלאת בדיוק שליש בריכה ב-2 שעות. אם שתי המשאבות יעבדו יחד מול בריכה ריקה לחלוטין, בכמה שעות היא תתמלא במלואה?&rlm;",
        "options": ["4", "3", "5", "6"],
        "correctAnswer": 0,
        "hint": "חשבו כמה שעות לוקח לכל משאבה למלא בריכה שלמה לבדה, ואז חברו את ההספקים שלהן.",
        "solution_steps": [
            { "verbal_explanation": "אם המשאבה הראשונה ממלאת חצי בשלוש שעות, אז את הבריכה כולה היא תמלא בפי שתיים יותר זמן.", "math_expression": "3 \\times 2 = 6" },
            { "verbal_explanation": "אם השנייה ממלאת שליש בשעתיים, את כולה היא תמלא בזמן ארוך פי שלושה.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "שתי המשאבות זהות בהספק שלהן. יחד הן מבצעות שתי שישיות מהבריכה בכל שעה (שזה אומר שליש בריכה).", "math_expression": "\\dfrac{1}{6} + \\dfrac{1}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}" },
            { "verbal_explanation": "בריכה שלמה מתמלאת בשלוש שעות עבודה משותפת.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "צוות של 4 צבעים צובע דירה שלמה ב-6 שעות. הלקוח מעוניין לזרז מאוד את העבודה ודורש שהדירה תיצבע כולה ב-3 שעות בלבד. כמה צבעים יצטרך הקבלן להביא בסך הכל כדי לעמוד ביעד (בהנחה שכולם עובדים באותו הקצב)?&rlm;",
        "options": ["8", "12", "6", "10"],
        "correctAnswer": 0,
        "hint": "אם הזמן הרצוי התקצר בחצי (משש שעות לשלוש שעות), מה צריך לקרות לכמות הפועלים?",
        "solution_steps": [
            { "verbal_explanation": "נחשב כמה שעות עבודה דרושות בסך הכל כדי לצבוע את הדירה על ידי אדם אחד. נכפול פועלים בשעות.", "math_expression": "4 \\times 6 = 24" },
            { "verbal_explanation": "כעת אנו צריכים לסיים את עשרים וארבע השעות הללו בתוך שלוש שעות בלבד.", "math_expression": "24 \\div 3" },
            { "verbal_explanation": "נחלק ונקבל את כמות הפועלים הנדרשת כדי לעמוד בקצב המהיר.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "5 חתולים ציידים אוכלים 5 פחיות מזון ב-5 דקות. המוכר בחנות החיות שואל: כמה זמן ייקח ל-100 חתולים, שאוכלים בדיוק באותו קצב, לסיים 100 פחיות מזון?&rlm;",
        "options": ["5", "100", "20", "1"],
        "correctAnswer": 0,
        "hint": "הסתכלו רק על חתול אחד ועל פחית אחת. כמה זמן לוקח לו לסיים אותה?",
        "solution_steps": [
            { "verbal_explanation": "אם חמישה חתולים אוכלים חמש פחיות ביחד, סימן שכל חתול מתרכז בפחית אישית משלו.", "math_expression": "5 \\div 5 = 1" },
            { "verbal_explanation": "כלומר, לחתול בודד לוקח בדיוק חמש דקות לסיים פחית מזון אחת לבדו.", "math_expression": "5" },
            { "verbal_explanation": "אם נביא מאה חתולים ולכל אחד תהיה פחית משלו, כולם יתחילו ויסיימו יחד באותו הזמן בדיוק.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "שתי משאבות ממלאות יחד מיכל ענק ב-2 שעות. ידוע שאם המשאבה הראשונה פועלת לבדה, היא ממלאת את המיכל ב-6 שעות. כמה זמן ייקח למשאבה השנייה למלא את המיכל לגמרי בעצמה?&rlm;",
        "options": ["3", "4", "8", "2.5"],
        "correctAnswer": 0,
        "hint": "חשבו איזה חלק מהמיכל ממלאות שתיהן בשעה אחת. מתוך זה, חסרו את החלק שעושה המשאבה הראשונה בשעה.",
        "solution_steps": [
            { "verbal_explanation": "ביחד הן מסיימות בשעתיים, לכן בשעה אחת בודדת הן ממלאות חצי מיכל.", "math_expression": "\\dfrac{1}{2}" },
            { "verbal_explanation": "המשאבה הראשונה לבדה ממלאת שישית מהמיכל בשעה. נחסר זאת מההספק המשותף.", "math_expression": "\\dfrac{1}{2} - \\dfrac{1}{6}" },
            { "verbal_explanation": "נרחיב את החצי לשלוש שישיות ונחסר. המשאבה השנייה ממלאת שתי שישיות בשעה, שהן למעשה שליש.", "math_expression": "\\dfrac{3}{6} - \\dfrac{1}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}" },
            { "verbal_explanation": "אם היא ממלאת שליש בשעה, ייקח לה שלוש שעות לסיים את כל המיכל לבדה.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות הספק",
        "question_text": "טרקטור אחד חורש את השדה כולו ב-8 שעות. החקלאי הפעיל את הטרקטור לבד במשך שעתיים, ואז הביא טרקטור נוסף שזהה לחלוטין לראשון, כדי שיעבדו יחד. כמה שעות ארכה עבודת החריש מתחילתה ועד סופה?&rlm;",
        "options": ["5", "6", "4", "3"],
        "correctAnswer": 0,
        "hint": "בדקו כמה שדה נשאר לחרוש אחרי שעתיים. שני טרקטורים יחד מהירים פי שניים מטרקטור בודד.",
        "solution_steps": [
            { "verbal_explanation": "בשעתיים הראשונות, הטרקטור חרש שתיים חלקי שמונה מהשדה, כלומר רבע. נשארו לחרוש שלושה רבעים מהשדה.", "math_expression": "\\dfrac{2}{8} = \\dfrac{1}{4} \\Rightarrow 1 - \\dfrac{1}{4} = \\dfrac{3}{4}" },
            { "verbal_explanation": "שני הטרקטורים יחד מבצעים ביום שתי שמיניות מהעבודה, שזה רבע שדה בכל שעה.", "math_expression": "\\dfrac{1}{8} + \\dfrac{1}{8} = \\dfrac{2}{8} = \\dfrac{1}{4}" },
            { "verbal_explanation": "כדי לסיים את שלושת הרבעים שנותרו בקצב של רבע לשעה, הם יצטרכו לעבוד יחד עוד שלוש שעות.", "math_expression": "\\dfrac{3}{4} \\div \\dfrac{1}{4} = 3" },
            { "verbal_explanation": "נחבר את שלוש השעות המשותפות עם השעתיים הראשונות לקבלת הזמן הכולל.", "math_expression": "3 + 2 = 5" }
        ],
        "final_answer": "5"
    },

    // ==========================================
    // תת נושא 2: בעיות תנועה רב-שלביות (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "רכבת נסעה שעתיים במהירות 80 קילומטרים בשעה. לאחר מכן עצרה לחצי שעה למנוחה, ואז המשיכה לנסוע עוד שעה אחת במהירות 90 קילומטרים בשעה. מהו המרחק הכולל שעברה הרכבת מתחילת הדרך ועד סופה?&rlm;",
        "options": ["250", "260", "210", "340"],
        "correctAnswer": 0,
        "hint": "חשבו את הדרך שעברה הרכבת בכל אחד מהשלבים (מהירות כפול זמן), וחברו את התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק של החלק הראשון בנסיעה. נכפול את המהירות בשעות.", "math_expression": "80 \\times 2 = 160" },
            { "verbal_explanation": "בזמן העצירה, הרכבת לא מתקדמת ולכן המרחק שם נשאר אפס.", "math_expression": "0 \\times 0.5 = 0" },
            { "verbal_explanation": "נחשב את המרחק של החלק האחרון בנסיעה.", "math_expression": "90 \\times 1 = 90" },
            { "verbal_explanation": "נחבר את כל המרחקים יחד לקבלת הדרך השלמה.", "math_expression": "160 + 0 + 90 = 250" }
        ],
        "final_answer": "250"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "רוכב אופניים תכנן מסלול של 30 קילומטרים. את החצי הראשון של המסלול הוא רכב במהירות של 15 קמ''ש. את החצי השני הוא רכב בעלייה קשה, ולכן רכב במהירות של 10 קמ''ש בלבד. כמה שעות ארכה הרכיבה כולה?&rlm;",
        "options": ["2.5", "3", "2", "3.5"],
        "correctAnswer": 0,
        "hint": "חלקו את המסלול לשניים (15 קילומטרים לכל חלק), וחשבו את הזמן בנפרד עבור כל חצי.",
        "solution_steps": [
            { "verbal_explanation": "המסלול המלא הוא שלושים קילומטרים, לכן כל חצי ממנו שווה לחמישה עשר קילומטרים.", "math_expression": "30 \\div 2 = 15" },
            { "verbal_explanation": "נחשב את הזמן לחצי הראשון. המרחק לחלק למהירות נותן לנו שעה אחת של רכיבה.", "math_expression": "15 \\div 15 = 1" },
            { "verbal_explanation": "נחשב את הזמן לחצי השני. המרחק לחלק למהירות החדשה נותן לנו שעה וחצי.", "math_expression": "15 \\div 10 = 1.5" },
            { "verbal_explanation": "נחבר את הזמנים לקבלת זמן הרכיבה הכולל.", "math_expression": "1 + 1.5 = 2.5" }
        ],
        "final_answer": "2.5"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "משאית יצאה מתל אביב לחיפה במהירות 60 קמ''ש. שעתיים בדיוק אחריה, יצאה מכונית פרטית מאותו המקום ונסעה בעקבותיה במהירות של 100 קמ''ש. כמה שעות ייקח למכונית להשיג את המשאית (מרגע יציאת המכונית)?&rlm;",
        "options": ["3", "4", "2.5", "5"],
        "correctAnswer": 0,
        "hint": "חשבו כמה המשאית התרחקה בשעתיים הללו. לאחר מכן, בדקו בכמה קילומטרים המכונית מצמצמת את הפער בכל שעה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק שהמשאית הספיקה לעבור לפני שהמכונית התחילה לנסוע.", "math_expression": "60 \\times 2 = 120" },
            { "verbal_explanation": "נבדוק את הפרש המהירויות. המכונית מתקרבת למשאית בארבעים קילומטרים בכל שעה.", "math_expression": "100 - 60 = 40" },
            { "verbal_explanation": "נחלק את הפער ההתחלתי בהפרש המהירויות כדי למצוא את הזמן שיידרש לצמצום הפער למפגש.", "math_expression": "120 \\div 40 = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "שני רוכבים יצאו בו זמנית משתי ערים הנמצאות במרחק של 300 קילומטרים זו מזו, ורכבו זה לקראת זה. הרוכב הראשון נסע במהירות של 20 קמ''ש והרוכב השני במהירות של 30 קמ''ש. איזה מרחק עבר הרוכב המהיר מבין השניים עד רגע הפגישה?&rlm;",
        "options": ["180", "120", "150", "200"],
        "correctAnswer": 0,
        "hint": "מכיוון שהם נוסעים זה מול זה, חברו את המהירויות שלהם כדי לגלות כמה זמן עבר עד שנפגשו.",
        "solution_steps": [
            { "verbal_explanation": "כאשר כלי רכב נוסעים אחד לקראת השני, המהירות המשותפת שלהם היא סכום המהירויות.", "math_expression": "20 + 30 = 50" },
            { "verbal_explanation": "נחשב את זמן הנסיעה הכולל עד למפגש ביניהם בדרך.", "math_expression": "300 \\div 50 = 6" },
            { "verbal_explanation": "כעת, נבדוק את הרוכב המהיר (שנוסע שלושים קמ''ש). נכפול את מהירותו בזמן הנסיעה המשותף.", "math_expression": "30 \\times 6 = 180" }
        ],
        "final_answer": "180"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "סירה שטה בנהר שיש בו זרם. כאשר הסירה שטה עם הזרם, היא עוברת 40 קילומטרים בשעתיים. כאשר היא שטה נגד הזרם, לוקח לה 4 שעות לעבור את אותו המרחק. מהי המהירות של הסירה במים עומדים (ללא זרם בכלל)?&rlm;",
        "options": ["15", "20", "10", "5"],
        "correctAnswer": 0,
        "hint": "חשבו את המהירות הכוללת בכיוון הזרם ונגד הזרם. מהירות הסירה נטו היא הממוצע של שתי המהירויות האלה.",
        "solution_steps": [
            { "verbal_explanation": "המהירות של הסירה כשהזרם דוחף אותה היא עשרים קמ''ש.", "math_expression": "40 \\div 2 = 20" },
            { "verbal_explanation": "המהירות של הסירה כשהיא נאבקת בזרם יורדת לעשרה קמ''ש בלבד.", "math_expression": "40 \\div 4 = 10" },
            { "verbal_explanation": "הזרם פעם מוסיף ופעם מחסיר ממהירות הסירה הרגילה. לכן, המהירות הרגילה היא בדיוק באמצע בין המהירויות.", "math_expression": "10 + 20 = 30" },
            { "verbal_explanation": "נחלק את הסכום בשתיים לקבלת המהירות העצמאית של הסירה.", "math_expression": "30 \\div 2 = 15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "שתי מכוניות יצאו בו זמנית מאותה חנייה ונסעו לכיוונים הפוכים לגמרי. הראשונה נסעה במהירות 70 קמ''ש והשנייה ב-80 קמ''ש. כעבור כמה שעות המרחק ביניהן יעמוד על 450 קילומטרים?&rlm;",
        "options": ["3", "4", "5", "6"],
        "correctAnswer": 0,
        "hint": "הן מתרחקות זו מזו משני הכיוונים. חברו את המהירויות שלהן כדי לראות בכמה קילומטרים הן מתרחקות בשעה אחת.",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהן נוסעות לכיוונים הפוכים, הן מגדילות את הפער ביניהן במהירות השווה לחיבור המהירויות שלהן.", "math_expression": "70 + 80 = 150" },
            { "verbal_explanation": "בכל שעה נוצר פער של מאה וחמישים קילומטרים. נבדוק מתי הפער יגיע ליעד הנדרש.", "math_expression": "450 \\div 150" },
            { "verbal_explanation": "התוצאה המתקבלת מהחילוק תעניק לנו את הזמן בשעות.", "math_expression": "3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "נהג יצא לדרך של 200 קילומטרים. את החצי הראשון של הדרך הוא נסע במהירות של 50 קמ''ש. באיזו מהירות (בקמ''ש) עליו לנסוע את החצי השני של הדרך כדי שהנסיעה כולה תיקח לו בדיוק 4 שעות?&rlm;",
        "options": ["50", "100", "80", "60"],
        "correctAnswer": 0,
        "hint": "כמה שעות לקח לו לנסוע את החצי הראשון? כמה שעות נשארו לו מתוך הארבע כדי לסיים את החצי השני?",
        "solution_steps": [
            { "verbal_explanation": "המסלול הוא מאתיים קילומטרים, לכן כל חצי דרך הוא מאה קילומטרים בדיוק.", "math_expression": "200 \\div 2 = 100" },
            { "verbal_explanation": "נחשב כמה זמן לקח לו לעבור את החצי הראשון במהירות חמישים.", "math_expression": "100 \\div 50 = 2" },
            { "verbal_explanation": "אם המסלול כולו חייב לקחת ארבע שעות, נותרו לו רק עוד שעתיים להשלים את החצי השני של מאה הקילומטרים.", "math_expression": "4 - 2 = 2" },
            { "verbal_explanation": "נחשב את המהירות הנדרשת: המרחק הנותר חלקי הזמן הנותר.", "math_expression": "100 \\div 2 = 50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "מכונית יוצאת מעיר א' לכיון עיר ב'. שלוש שעות לאחר מכן, יוצאת מכונית שנייה מעיר ב' לכיוון עיר א'. המרחק בין הערים הוא 600 קילומטרים. מהירות הראשונה היא 50 קמ''ש ומהירות השנייה היא 100 קמ''ש. כמה שעות עברו מהרגע שהמכונית הראשונה יצאה לדרך ועד שהן נפגשו?&rlm;",
        "options": ["6", "5", "8", "4"],
        "correctAnswer": 0,
        "hint": "ב-3 השעות הראשונות, המכונית הראשונה נסעה לבדה. חשבו כמה נשאר מהדרך כששתיהן התחילו לנסוע זו מול זו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המרחק שהרכב הראשון עבר לבדו בשלוש השעות הראשונות.", "math_expression": "50 \\times 3 = 150" },
            { "verbal_explanation": "נבדוק מהו המרחק שנותר ביניהם כשהרכב השני יצא גם הוא לדרך.", "math_expression": "600 - 150 = 450" },
            { "verbal_explanation": "שניהם נוסעים זה לקראת זה, לכן נחבר את המהירויות כדי לדעת מה קצב צמצום המרחק.", "math_expression": "50 + 100 = 150" },
            { "verbal_explanation": "המרחק הנותר חלקי המהירות המשותפת נותן לנו את הזמן עד הפגישה.", "math_expression": "450 \\div 150 = 3" },
            { "verbal_explanation": "נחבר את שלוש השעות המשותפות עם שלוש השעות שהראשונה נסעה לבדה.", "math_expression": "3 + 3 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "איש רץ מסלול תחרות שאורכו 12 קילומטרים. בארבעת הקילומטרים הראשונים הוא רץ במהירות של 8 קמ''ש, ואת שאר הדרך הוא הגביר את הקצב ורץ במהירות של 10 קמ''ש. כמה דקות בסך הכל ארכה הריצה שלו?&rlm;",
        "options": ["78", "80", "72", "90"],
        "correctAnswer": 0,
        "hint": "חשבו את הזמן בשעות לכל חלק של הריצה, חברו אותם, ואז הכפילו ב-60 כדי להפוך לדקות.",
        "solution_steps": [
            { "verbal_explanation": "הזמן בחלק הראשון הוא המרחק חלקי המהירות. נקבל חצי שעה.", "math_expression": "4 \\div 8 = 0.5" },
            { "verbal_explanation": "נחשב כמה קילומטרים נותרו לחלק השני של הריצה.", "math_expression": "12 - 4 = 8" },
            { "verbal_explanation": "הזמן בחלק השני הוא שמונה עשיריות השעה.", "math_expression": "8 \\div 10 = 0.8" },
            { "verbal_explanation": "נחבר את הזמנים בשעות.", "math_expression": "0.5 + 0.8 = 1.3" },
            { "verbal_explanation": "כדי להמיר שעות לדקות שלמות, נכפול בשישים.", "math_expression": "1.3 \\times 60 = 78" }
        ],
        "final_answer": "78"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תנועה רב-שלביות",
        "question_text": "כלב רודף אחרי ארנב. המרחק ההתחלתי ביניהם הוא 100 מטר. הכלב רץ במהירות של 10 מטרים בשנייה, והארנב בורח במהירות של 5 מטרים בשנייה. תוך כמה שניות הכלב יתפוס את הארנב?&rlm;",
        "options": ["20", "10", "15", "50"],
        "correctAnswer": 0,
        "hint": "בכל שנייה, הכלב מצמצם את המרחק פחות המהירות של הארנב שבורח.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק בכמה מטרים הכלב מתקרב לארנב בכל שנייה שעוברת. הכלב מתקדם עשר, הארנב בורח חמש.", "math_expression": "10 - 5 = 5" },
            { "verbal_explanation": "קצב הסגירה של המרחק הוא חמישה מטרים בכל שנייה.", "math_expression": "5" },
            { "verbal_explanation": "הפער הוא מאה מטר. נחלק אותו בקצב הסגירה לקבלת הזמן.", "math_expression": "100 \\div 5 = 20" }
        ],
        "final_answer": "20"
    },

    // ==========================================
    // תת נושא 3: בעיות תערובות וריכוזים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מערבבים בקנקן 2 ליטרים של מיץ המכיל 30% רכז, יחד עם 3 ליטרים של מיץ המכיל 40% רכז. מה יהיה אחוז הרכז בתערובת החדשה שנוצרה?&rlm;",
        "options": ["36%", "35%", "34%", "38%"],
        "correctAnswer": 0,
        "hint": "חשבו כמה רכז נקי יש במיץ הראשון וכמה בשני. חברו את הרכזים וחלקו בסך הכל הליטרים שבקנקן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את כמות הרכז בליטרים במיץ הראשון: כמות כפול האחוז, ונחלק למאה.", "math_expression": "2 \\times 30 \\div 100 = 0.6" },
            { "verbal_explanation": "נחשב את כמות הרכז במיץ השני.", "math_expression": "3 \\times 40 \\div 100 = 1.2" },
            { "verbal_explanation": "נחבר את סך כל הליטרים בקנקן, ואת סך הרכז נטו בתוכו.", "math_expression": "2 + 3 = 5 \\quad , \\quad 0.6 + 1.2 = 1.8" },
            { "verbal_explanation": "נבדוק איזה אחוז מהווים אחת נקודה שמונה מתוך חמישה ליטרים. נחלק ונכפול במאה.", "math_expression": "1.8 \\div 5 \\times 100 = 36\\%" }
        ],
        "final_answer": "36%"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "יש לכם 10 ליטרים של תמיסת מי מלח שהריכוז שלה הוא 20%. אתם רוצים לדלל את התמיסה כך שריכוז המלח ירד ל-10%. כמה ליטרים של מים מתוקים ונקיים (0% מלח) תצטרכו להוסיף כדי להגיע לזה?&rlm;",
        "options": ["10", "20", "5", "15"],
        "correctAnswer": 0,
        "hint": "כמות המלח לא משתנה. חשבו כמה מלח יש שם היום, ומצאו מה צריך להיות המשקל הכולל של התמיסה כדי שכמות המלח הזו תהיה רק 10% ממנה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את כמות המלח הטהור שיש לנו כרגע.", "math_expression": "10 \\times 20 \\div 100 = 2" },
            { "verbal_explanation": "כמות המלח נשארת שתיים. אנו רוצים שהשתיים האלו יהוו עשרה אחוזים מהתערובת כולה. נכפול בעשר כדי לגלות את סך התערובת החדשה הנדרשת.", "math_expression": "2 \\times 10 = 20" },
            { "verbal_explanation": "יש לנו כבר עשרה ליטרים. כדי שהסך הכל יהיה עשרים ליטרים, נוסיף מים.", "math_expression": "20 - 10 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "בקערה יש 400 גרם של מי סוכר בריכוז של 10%. כמה גרם של סוכר נקי (100% סוכר) צריך להוסיף לתוך הקערה כדי שריכוז הסוכר יעלה ל-20%?&rlm;",
        "options": ["50", "40", "60", "20"],
        "correctAnswer": 0,
        "hint": "בדקו כל אחת מהתשובות. אם מוסיפים סוכר, הוא מגדיל גם את כמות הסוכר וגם את המשקל הכולל של הקערה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב כמה סוכר נקי יש כרגע בקערה.", "math_expression": "400 \\times 10 \\div 100 = 40" },
            { "verbal_explanation": "נבדוק את האפשרות של הוספת חמישים גרם סוכר. כמות הסוכר החדשה תגדל.", "math_expression": "40 + 50 = 90" },
            { "verbal_explanation": "המשקל של הקערה כולה יגדל גם הוא בחמישים גרם.", "math_expression": "400 + 50 = 450" },
            { "verbal_explanation": "נבדוק האם תשעים גרם מהווים עשרים אחוזים מתוך ארבע מאות וחמישים. זה מדויק ולכן זו התשובה.", "math_expression": "90 \\div 450 \\times 100 = 20\\%" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מוכר ערבב קילוגרם אחד של פולי קפה זולים שעולים 60 שקלים לקילו, יחד עם 2 קילוגרמים של פולי קפה יוקרתיים שעולים 90 שקלים לקילו. כמה יעלה קילוגרם אחד של תערובת הקפה החדשה שהוא יצר?&rlm;",
        "options": ["80", "75", "70", "85"],
        "correctAnswer": 0,
        "hint": "חשבו את השווי של כל הקפה שיש לו יחד, ואז חלקו במספר הקילוגרמים הכולל.",
        "solution_steps": [
            { "verbal_explanation": "המוכר שם קילו אחד של קפה זול בשווי שישים שקלים.", "math_expression": "60 \\times 1 = 60" },
            { "verbal_explanation": "הוא הוסיף שני קילו של קפה יקר בשווי של מאה ושמונים שקלים.", "math_expression": "90 \\times 2 = 180" },
            { "verbal_explanation": "שווי התערובת כולה הוא חיבור הסכומים. כמות הקפה הכללית היא שלושה קילוגרמים.", "math_expression": "60 + 180 = 240 \\quad , \\quad 1 + 2 = 3" },
            { "verbal_explanation": "נחלק את המחיר הכולל בכמות הכוללת כדי למצוא את המחיר לקילוגרם בודד אחד.", "math_expression": "240 \\div 3 = 80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "הצורף מחזיק תכשיט במשקל 50 גרם, המכיל 40% זהב. הוא מתיך את התכשיט ומוסיף לו עוד זהב טהור ונקי, עד שהאחוז של הזהב בתכשיט עולה ל-50%. כמה גרם של זהב טהור הוסיף הצורף?&rlm;",
        "options": ["10", "5", "15", "20"],
        "correctAnswer": 0,
        "hint": "בדקו את התשובות. הוספת זהב מעלה את המשקל של הזהב וגם את המשקל הכולל של התכשיט.",
        "solution_steps": [
            { "verbal_explanation": "משקל הזהב הטהור בתכשיט הישן היה עשרים גרם.", "math_expression": "50 \\times 40 \\div 100 = 20" },
            { "verbal_explanation": "נבדוק את התשובה עשר. נוסיף עשר גרם זהב. כמות הזהב החדשה תהיה שלושים.", "math_expression": "20 + 10 = 30" },
            { "verbal_explanation": "משקל התכשיט כולו יגדל גם הוא בעשר ויעמוד על שישים גרם.", "math_expression": "50 + 10 = 60" },
            { "verbal_explanation": "האם שלושים הם חמישים אחוזים מתוך שישים? כן, זה בדיוק חצי. התשובה נכונה.", "math_expression": "30 \\div 60 \\times 100 = 50\\%" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "ל-8 ליטרים של תמיסת ניקוי בריכוז של 60%, הוסיפו 2 ליטרים של חומר ניקוי נקי לחלוטין (100% ריכוז). מה יהיה הריכוז של התערובת החדשה באחוזים?&rlm;",
        "options": ["68%", "70%", "80%", "64%"],
        "correctAnswer": 0,
        "hint": "חשבו כמה מהחומר הטהור מסתתר בכל נוזל בנפרד, חברו אותם וחלקו בכמות הליטרים הכוללת.",
        "solution_steps": [
            { "verbal_explanation": "כמות החומר הטהור בתמיסה הראשונה.", "math_expression": "8 \\times 60 \\div 100 = 4.8" },
            { "verbal_explanation": "כמות החומר הטהור בתוספת היא פשוט שני ליטרים שלמים.", "math_expression": "2" },
            { "verbal_explanation": "נחבר את כלל החומר הטהור, ונחלק אותו בסך כל הליטרים (עשרה).", "math_expression": "4.8 + 2 = 6.8 \\quad , \\quad 8 + 2 = 10" },
            { "verbal_explanation": "כדי להפוך לאחוזים, נכפול במאה ונמצא את התשובה.", "math_expression": "6.8 \\div 10 \\times 100 = 68\\%" }
        ],
        "final_answer": "68%"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "בסיר יש 200 גרם של מי מלח, שמתוכם 5% הם מלח. אנו רוצים לאדות מים (להרתיח עד שמים נקיים ייעלמו) כך שהריכוז של המלח יעלה ל-10%. כמה גרם של מים נצטרך לאדות החוצה?&rlm;",
        "options": ["100", "50", "20", "150"],
        "correctAnswer": 0,
        "hint": "כמות המלח לא בורחת לשום מקום כשמרתיחים, רק מים נקיים עפים לאוויר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב כמה מלח יש בסיר בהתחלה.", "math_expression": "200 \\times 5 \\div 100 = 10" },
            { "verbal_explanation": "העשרה גרמים הללו יישארו בסיר גם אחרי ההרתחה. אנו רוצים שהם יהוו עשרה אחוזים מהסיר החדש. נכפול בעשר למציאת השלם.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "אם הסיר צריך לשקול בסוף מאה גרם בלבד, אנו צריכים לחסר מים מהמשקל המקורי.", "math_expression": "200 - 100 = 100" },
            { "verbal_explanation": "כלומר יש לאדות מאה גרמים של מים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "טבח מערבב כמויות שוות בדיוק של שמן זית בריכוז 10% ושמן זית בריכוז 30%. מה יהיה הריכוז של שמן הזית בתערובת הסופית?&rlm;",
        "options": ["20%", "40%", "15%", "25%"],
        "correctAnswer": 0,
        "hint": "כאשר מערבבים כמויות שוות של חומרים, הריכוז הסופי הוא פשוט הממוצע שלהם.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בתכונת הממוצע בגלל שהכמויות של הנוזלים זהות לגמרי.", "math_expression": "10 + 30 = 40" },
            { "verbal_explanation": "נחלק את הסכום בשתיים כדי למצוא את האמצע המדויק.", "math_expression": "40 \\div 2 = 20" },
            { "verbal_explanation": "הריכוז החדש עומד על עשרים אחוזים.", "math_expression": "20\\%" }
        ],
        "final_answer": "20%"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "צייר מערבב 2 ליטרים של צבע אדום חזק ונקי (100% אדום) עם 3 ליטרים של צבע לבן נקי לגמרי (0% אדום) כדי לקבל צבע ורוד. איזה אחוז של אדום יש בצבע הוורוד שהתקבל?&rlm;",
        "options": ["40%", "50%", "60%", "20%"],
        "correctAnswer": 0,
        "hint": "כמה ליטרים של צבע אדום יש בכלל התערובת? חלקו את זה בכמות הליטרים הכוללת של הדלי.",
        "solution_steps": [
            { "verbal_explanation": "הכמות הכוללת של הצבע בדלי היא חמישה ליטרים.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "מתוך החמישה ליטרים הללו, שני ליטרים הם צבע אדום טהור. נמצא איזה חלק זה.", "math_expression": "\\dfrac{2}{5}" },
            { "verbal_explanation": "כדי להפוך שבר לאחוזים נכפול אותו במאה.", "math_expression": "\\dfrac{2}{5} \\times 100 = 40" },
            { "verbal_explanation": "ריכוז האדום הוא ארבעים אחוזים.", "math_expression": "40\\%" }
        ],
        "final_answer": "40%"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "חנות מוכרת 3 קילוגרמים של אגוזים במחיר של 20 שקלים לקילו, ועוד 2 קילוגרמים של שקדים במחיר של 40 שקלים לקילו. המוכר מערבב אותם לשקית אחת ומוכר את התערובת. מה המחיר של קילוגרם אחד מתוך התערובת הזו?&rlm;",
        "options": ["28", "30", "32", "25"],
        "correctAnswer": 0,
        "hint": "חשבו כמה שווים כל האגוזים והשקדים יחד, ואז חלקו במשקל הכולל שלהם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המחיר הכולל של האגוזים שהוכנסו לשקית.", "math_expression": "3 \\times 20 = 60" },
            { "verbal_explanation": "נחשב את המחיר הכולל של השקדים שהוכנסו גם כן לשקית.", "math_expression": "2 \\times 40 = 80" },
            { "verbal_explanation": "השווי הכולל של התערובת הוא מאה וארבעים שקלים, והמשקל הכולל הוא חמישה קילו.", "math_expression": "60 + 80 = 140 \\quad , \\quad 3 + 2 = 5" },
            { "verbal_explanation": "נחלק את המחיר במשקל ונקבל את העלות לקילוגרם אחד.", "math_expression": "140 \\div 5 = 28" }
        ],
        "final_answer": "28"
    },

    // ==========================================
    // תת נושא 4: בעיות גיל (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "גילו של אב גדול פי 4 מגיל בנו כיום. בעוד 5 שנים, יהיה האב מבוגר פי 3 בלבד מגיל בנו. בן כמה הבן היום?&rlm;",
        "options": ["10", "15", "5", "12"],
        "correctAnswer": 0,
        "hint": "בדקו את התשובות האפשריות. הכפילו בארבע לגיל האב, ואז הוסיפו לשניהם 5 שנים ובדקו אם הגיל החדש גדול פי 3.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את התשובה עשר. אם הבן בן עשר, האב יהיה בן ארבעים היום, כי הוא גדול פי ארבע.", "math_expression": "10 \\times 4 = 40" },
            { "verbal_explanation": "נוסיף חמש שנים לכל אחד מהם כדי לבדוק מה יהיה בעתיד.", "math_expression": "10 + 5 = 15 \\quad , \\quad 40 + 5 = 45" },
            { "verbal_explanation": "נבדוק את הנתון מהחידה לעתיד. האם ארבעים וחמש הוא פי שלוש מחמש עשרה? כן, ההתאמה מדויקת.", "math_expression": "45 \\div 15 = 3" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "סכום הגילים של אם ובתה היום הוא 40 שנים. לפני 5 שנים, האם הייתה מבוגרת מבתה פי 5. בת כמה הבת היום?&rlm;",
        "options": ["10", "15", "8", "5"],
        "correctAnswer": 0,
        "hint": "בדקו את התשובות. אם הבת בת 10 כעת, נסו לחשב את גיל האם כעת ולאחר מכן לחזור אחורה 5 שנים.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את האפשרות עשר. אם הבת בת עשר והסכום ארבעים, האם תהיה בת שלושים.", "math_expression": "40 - 10 = 30" },
            { "verbal_explanation": "נחזור אחורה חמש שנים בזמן ונחסר חמש מגיל של כל אחת מהן.", "math_expression": "10 - 5 = 5 \\quad , \\quad 30 - 5 = 25" },
            { "verbal_explanation": "נבדוק אם בעבר האם הייתה גדולה פי חמש מהבת. עשרים וחמש לחלק לחמש שווה חמש. מצאנו את התשובה הנכונה.", "math_expression": "25 \\div 5 = 5" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "סבא כיום בן 70, והנכד שלו בן 10. בעוד כמה שנים יהיה הסבא מבוגר מנכדו בדיוק פי 4?&rlm;",
        "options": ["10", "5", "20", "15"],
        "correctAnswer": 0,
        "hint": "נסו להוסיף את מספר השנים מתוך התשובות לגיל של שניהם, ובדקו מתי גיל הסבא החדש יהיה פי ארבע מגיל הנכד החדש.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מה יקרה בעוד עשר שנים. נוסיף עשר גם לסבא וגם לנכד.", "math_expression": "70 + 10 = 80 \\quad , \\quad 10 + 10 = 20" },
            { "verbal_explanation": "הגילים החדשים הם שמונים ועשרים. נבדוק אם סבא גדול פי ארבע מהנכד כעת.", "math_expression": "80 \\div 20 = 4" },
            { "verbal_explanation": "הנתונים מתאימים בשלמות. הוספת עשר שנים פתרה את הבעיה.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "לפני 4 שנים היה גיל האב גדול פי 6 מגיל בנו. היום, גיל האב גדול פי 4 בלבד מגיל בנו. מהו סכום הגיליים שלהם היום?&rlm;",
        "options": ["50", "40", "60", "30"],
        "correctAnswer": 0,
        "hint": "היעזרו בתשובות. חלקו את סכום הגילים בחמש כדי למצוא את הגילים כיום (האב פי 4, יחד זה 5 חלקים). בדקו מי מסתדר בעבר.",
        "solution_steps": [
            { "verbal_explanation": "אם נבדוק את הסכום חמישים: היות שהאב פי ארבע, הסכום מורכב מחמישה חלקים שווים לגיל הבן.", "math_expression": "50 \\div 5 = 10" },
            { "verbal_explanation": "מכאן שהבן היום בן עשר, והאב בן ארבעים (פי ארבע).", "math_expression": "10 \\times 4 = 40" },
            { "verbal_explanation": "נחזור ארבע שנים אחורה לבדיקת התנאי השני בחידה.", "math_expression": "10 - 4 = 6 \\quad , \\quad 40 - 4 = 36" },
            { "verbal_explanation": "נבדוק האם האב אכן היה גדול פי שש בעבר. התשובה היא כן ולכן הסכום הוא חמישים.", "math_expression": "36 \\div 6 = 6" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "אורי מבוגר מדן ב-6 שנים. בעוד 3 שנים סכום הגילים של שניהם יהיה 40. בן כמה דן היום?&rlm;",
        "options": ["14", "17", "20", "10"],
        "correctAnswer": 0,
        "hint": "אם בעוד 3 שנים הסכום יהיה 40, מה הסכום שלהם היום? זכרו להוריד 3 שנים מכל ילד.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את סכום הגילים שלהם היום, נחסר שלוש שנים מדן ושלוש שנים מאורי מהסכום העתידי.", "math_expression": "40 - 6 = 34" },
            { "verbal_explanation": "נבדוק את האפשרות שדן בן ארבע עשרה כיום. נוסיף לו את שש השנים של ההפרש כדי לגלות את גיל אורי.", "math_expression": "14 + 6 = 20" },
            { "verbal_explanation": "נבדוק אם סכום הגילים של שניהם היום הוא אכן שלושים וארבע כפי שגילינו בהתחלה. הכל מתאים.", "math_expression": "14 + 20 = 34" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "גיל האם כיום הוא 36 וגיל בתה הוא 12. לפני כמה שנים הייתה האם מבוגרת פי 4 מבתה?&rlm;",
        "options": ["4", "6", "2", "8"],
        "correctAnswer": 0,
        "hint": "החסירו את השנים מהתשובות מכל אחד מהגילים, ובדקו מתי היחס ביניהם יהיה בדיוק ארבע.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק מה קרה לפני ארבע שנים. נחסר ארבע מגיל האם ומגיל הבת.", "math_expression": "36 - 4 = 32 \\quad , \\quad 12 - 4 = 8" },
            { "verbal_explanation": "הגילים לפני ארבע שנים היו שלושים ושתיים, ושמונה. נבדוק את היחס ביניהם.", "math_expression": "32 \\div 8 = 4" },
            { "verbal_explanation": "האם אכן הייתה גדולה פי ארבע, ולכן התשובה נכונה.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "בעוד 10 שנים יהיה גילו של עמית כפול מגילו כפי שהיה לפני 10 שנים. בן כמה עמית היום?&rlm;",
        "options": ["30", "40", "20", "15"],
        "correctAnswer": 0,
        "hint": "בדקו כל תשובה. קחו אותה 10 שנים קדימה ו-10 שנים אחורה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את האפשרות שעמית בן שלושים כיום. נחשב כמה יהיה בעתיד.", "math_expression": "30 + 10 = 40" },
            { "verbal_explanation": "נחשב כמה היה בעבר לפני עשור.", "math_expression": "30 - 10 = 20" },
            { "verbal_explanation": "האם הגיל העתידי (ארבעים) גדול פי שניים מהגיל בעבר (עשרים)? כן.", "math_expression": "40 \\div 20 = 2" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "האח הגדול מבוגר מהאח הקטן ב-4 שנים בדיוק. לפני 6 שנים סכום הגילים שלהם היה 20. בן כמה האח הגדול היום?&rlm;",
        "options": ["18", "16", "20", "14"],
        "correctAnswer": 0,
        "hint": "אם לפני 6 שנים הסכום היה 20, מהו הסכום היום? אל תשכחו להוסיף 6 לכל אחד מהם.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את הסכום שלהם היום, נוסיף לסכום של העבר שש שנים על האח הגדול ושש שנים על האח הקטן.", "math_expression": "20 + 12 = 32" },
            { "verbal_explanation": "נבדוק את התשובה שמונה עשרה לאח הגדול. אם הוא בן שמונה עשרה, והוא גדול בארבע, האח הקטן בן ארבע עשרה.", "math_expression": "18 - 4 = 14" },
            { "verbal_explanation": "נבדוק האם הסכום שלהם היום שווה לשלושים ושתיים כפי שחישבנו מראש. הוא אכן מתאים.", "math_expression": "18 + 14 = 32" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "סכום הגילים של שלושה אחים הוא 30. ההפרש בין כל אח לאח שגדול ממנו הוא בדיוק שנתיים. בן כמה האח האמצעי מביניהם?&rlm;",
        "options": ["10", "12", "8", "14"],
        "correctAnswer": 0,
        "hint": "כשיש שלושה אחים בהפרשים שווים לחלוטין, גיל האח האמצעי הוא בדיוק הממוצע של כולם.",
        "solution_steps": [
            { "verbal_explanation": "סכום הגיליים הכולל מתחלק בשלושת האחים באופן טבעי כדי למצוא את האמצע.", "math_expression": "30 \\div 3 = 10" },
            { "verbal_explanation": "נוודא את תשובתנו: אם האמצעי בן עשר, הצעיר בן שמונה והבכור בן שנים עשר.", "math_expression": "10 - 2 = 8 \\quad , \\quad 10 + 2 = 12" },
            { "verbal_explanation": "נחבר אותם ונבדוק אם הסכום הוא שלושים. זה מושלם.", "math_expression": "8 + 10 + 12 = 30" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "בעיות גיל",
        "question_text": "האב בן 45, בנו בן 15, ובתו בת 11. בעוד כמה שנים יהיה גיל האב שווה לסכום הגילים של שני ילדיו יחד?&rlm;",
        "options": ["19", "15", "20", "10"],
        "correctAnswer": 0,
        "hint": "בכל שנה שעוברת, האב מוסיף לעצמו שנת גיל אחת, אבל סכום הילדים מוסיף לעצמו שתי שנות גיל.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את המצב היום. האב בן ארבעים וחמש, וסכום הילדים קטן יותר כרגע.", "math_expression": "15 + 11 = 26" },
            { "verbal_explanation": "נבדוק את הפער בין האב לסכום הילדים היום.", "math_expression": "45 - 26 = 19" },
            { "verbal_explanation": "בכל שנה הפער הזה מצטמצם באחת, כי סכום הילדים גדל בשתיים והאב באחת (שתיים פחות אחת שווה אחת). לכן ייקח תשע עשרה שנים לצמצם את כל הפער הזה.", "math_expression": "2 - 1 = 1" },
            { "verbal_explanation": "נבדוק זאת: נוסיף לאב תשע עשרה (יהיה שישים וארבע). נוסיף לילדים תשע עשרה לכל אחד.", "math_expression": "45 + 19 = 64 \\quad , \\quad (15 + 19) + (11 + 19) = 34 + 30 = 64" }
        ],
        "final_answer": "19"
    },
    // ==========================================
    // תת נושא 1: זוויות במצולעים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "מהו סכום כל הזוויות הפנימיות בתוך משולש?&rlm;",
        "options": ["180", "360", "90", "270"],
        "correctAnswer": 0,
        "hint": "משולש הוא המצולע הבסיסי ביותר. זכרו את הכלל הבסיסי לגבי סכום הזוויות שלו.",
        "solution_steps": [
            { "verbal_explanation": "משולש הוא הצורה הסגורה בעלת המספר הקטן ביותר של צלעות.", "math_expression": "3" },
            { "verbal_explanation": "בכל משולש, לא משנה מה צורתו, סכום שלוש הזוויות קבוע תמיד.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "לכן, התשובה היא מאה ושמונים מעלות.", "math_expression": "180" }
        ],
        "final_answer": "180"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "כמה מעלות יש בסך הכל בכל הזוויות הפנימיות של מרובע (צורה בעלת ארבע צלעות)?&rlm;",
        "options": ["360", "180", "540", "720"],
        "correctAnswer": 0,
        "hint": "אפשר לחלק כל מרובע לשני משולשים על ידי מתיחת קו אלכסון אחד מקצה לקצה.",
        "solution_steps": [
            { "verbal_explanation": "ניתן למתוח קו אלכסון אחד בתוך מרובע, שמחלק אותו לשני משולשים בדיוק.", "math_expression": "2" },
            { "verbal_explanation": "אנו כבר יודעים שסכום הזוויות בכל משולש הוא מאה ושמונים מעלות.", "math_expression": "180^{\\circ}" },
            { "verbal_explanation": "כדי למצוא את הסכום של המרובע כולו, נכפול את מספר המשולשים במאה ושמונים.", "math_expression": "2 \\times 180 = 360" }
        ],
        "final_answer": "360"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "מהו סכום הזוויות הפנימיות של מחומש (מצולע בעל חמש צלעות)?&rlm;",
        "options": ["540", "360", "720", "900"],
        "correctAnswer": 0,
        "hint": "השתמשו בכלל: מספר הצלעות פחות שתיים, כפול מאה ושמונים.",
        "solution_steps": [
            { "verbal_explanation": "כדי לדעת כמה משולשים אפשר ליצור בתוך המחומש מקודקוד אחד, נחסר שתיים ממספר הצלעות.", "math_expression": "5 - 2 = 3" },
            { "verbal_explanation": "גילינו שיש שלושה משולשים בתוך המחומש.", "math_expression": "3" },
            { "verbal_explanation": "נכפול את מספר המשולשים במאה ושמונים מעלות כדי לקבל את סכום כל הזוויות.", "math_expression": "3 \\times 180 = 540" }
        ],
        "final_answer": "540"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "במשושה משוכלל, כל שש הצלעות וכל שש הזוויות שוות זו לזו. מהו הגודל של זווית פנימית אחת במשושה משוכלל?&rlm;",
        "options": ["120", "108", "135", "90"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הסכום של כל הזוויות במשושה, ואז חלקו את הסכום בשש זוויות שוות.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את מספר המשולשים בתוך משושה על ידי חיסור שתיים משש הצלעות.", "math_expression": "6 - 2 = 4" },
            { "verbal_explanation": "נחשב את סכום הזוויות הכולל של כל שש הזוויות יחד.", "math_expression": "4 \\times 180 = 720" },
            { "verbal_explanation": "מכיוון שהמשושה משוכלל, כל הזוויות שוות. נחלק את הסכום הכולל בשש.", "math_expression": "720 \\div 6 = 120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "סכום הזוויות הפנימיות של מצולע מסוים הוא 900 מעלות. כמה צלעות יש למצולע הזה?&rlm;",
        "options": ["7", "6", "8", "9"],
        "correctAnswer": 0,
        "hint": "חלקו את הסכום במאה ושמונים כדי לגלות כמה משולשים יש בו, ואז הוסיפו שתיים כדי למצוא את מספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק כמה משולשים של מאה ושמונים מעלות נכנסים בתוך התשע מאות.", "math_expression": "900 \\div 180 = 5" },
            { "verbal_explanation": "גילינו שהמצולע מורכב מחמישה משולשים.", "math_expression": "5" },
            { "verbal_explanation": "מספר הצלעות תמיד גדול בשתיים ממספר המשולשים שאפשר ליצור מקודקוד אחד. נוסיף שתיים.", "math_expression": "5 + 2 = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "מהו הגודל של זווית פנימית אחת במחומש משוכלל (בעל 5 צלעות שוות ו-5 זוויות שוות)?&rlm;",
        "options": ["108", "120", "72", "90"],
        "correctAnswer": 0,
        "hint": "חשבו את הסכום הכולל של הזוויות (כמו בשאלה קודמת) וחלקו במספר הזוויות.",
        "solution_steps": [
            { "verbal_explanation": "סכום הזוויות במחומש הוא מספר הצלעות פחות שתיים, כפול מאה ושמונים.", "math_expression": "(5 - 2) \\times 180 = 540" },
            { "verbal_explanation": "במחומש משוכלל יש בדיוק חמש זוויות שוות. נחלק את הסכום בחמש.", "math_expression": "540 \\div 5" },
            { "verbal_explanation": "נבצע את החילוק כדי לקבל את גודלה של זווית אחת בלבד.", "math_expression": "108" }
        ],
        "final_answer": "108"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "במרובע כלשהו ידועות שלוש זוויות: 70 מעלות, 100 מעלות ו-80 מעלות. מהו הגודל של הזווית הרביעית והאחרונה?&rlm;",
        "options": ["110", "100", "90", "120"],
        "correctAnswer": 0,
        "hint": "סכום כל הזוויות במרובע הוא תמיד 360 מעלות. חברו את הזוויות הידועות וחסרו אותן מהסכום הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נחבר יחד את שלוש הזוויות שכבר ידועות לנו מתוך הנתונים.", "math_expression": "70 + 100 + 80 = 250" },
            { "verbal_explanation": "אנו יודעים שהסכום הכולל במרובע חייב להיות בדיוק שלוש מאות ושישים מעלות.", "math_expression": "360" },
            { "verbal_explanation": "נחסר את הסכום שחישבנו מהסכום הכולל כדי למצוא את הזווית החסרה.", "math_expression": "360 - 250 = 110" }
        ],
        "final_answer": "110"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "סכום הזוויות החיצוניות של כל מצולע קמור הוא תמיד 360 מעלות. מהו הגודל של זווית חיצונית אחת במתומן משוכלל (בעל 8 צלעות)?&rlm;",
        "options": ["45", "60", "36", "30"],
        "correctAnswer": 0,
        "hint": "במצולע משוכלל כל הזוויות החיצוניות שוות. חלקו את הסכום הקבוע במספר הצלעות.",
        "solution_steps": [
            { "verbal_explanation": "הסכום של כל הזוויות החיצוניות יחד הוא תמיד שלוש מאות ושישים.", "math_expression": "360" },
            { "verbal_explanation": "במתומן ישנן שמונה זוויות חיצוניות השוות זו לזו.", "math_expression": "8" },
            { "verbal_explanation": "נחלק את הסכום הכולל בשמונה כדי למצוא את הגודל של זווית חיצונית אחת בודדת.", "math_expression": "360 \\div 8 = 45" }
        ],
        "final_answer": "45"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "מחלקים מצולע בעל עשר צלעות למשולשים על ידי מתיחת אלכסונים מקודקוד אחד בלבד לכל שאר הקודקודים. כמה משולשים ייווצרו בתוך המצולע?&rlm;",
        "options": ["8", "10", "12", "7"],
        "correctAnswer": 0,
        "hint": "הכלל אומר שמספר המשולשים קטן תמיד בשתיים ממספר הצלעות של המצולע.",
        "solution_steps": [
            { "verbal_explanation": "אנו מסתכלים על מצולע שבו יש עשר צלעות שלמות.", "math_expression": "10" },
            { "verbal_explanation": "הכלל הגאומטרי קובע שמספר המשולשים הוא מספר הצלעות פחות הקודקוד שממנו יוצאים ושני שכניו המיידיים.", "math_expression": "10 - 2" },
            { "verbal_explanation": "נבצע את החיסור הפשוט ונקבל את מספר המשולשים שייווצרו.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "זוויות במצולעים",
        "question_text": "מהו הגודל של זווית פנימית בעושר משוכלל (מצולע בעל 10 צלעות שוות ו-10 זוויות שוות)?&rlm;",
        "options": ["144", "150", "120", "135"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הזווית החיצונית (סכום הזוויות החיצוניות תמיד 360). הזווית הפנימית משלימה אותה ל-180.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את הזווית החיצונית על ידי חלוקת שלוש מאות ושישים בעשר צלעות.", "math_expression": "360 \\div 10 = 36" },
            { "verbal_explanation": "הזווית הפנימית והזווית החיצונית מונחות על קו ישר אחד, ולכן סכומן יחד הוא מאה ושמונים מעלות.", "math_expression": "180" },
            { "verbal_explanation": "נחסר את הזווית החיצונית כדי למצוא את הפנימית בקלות רבה יותר מאשר חישוב הסכום הכולל.", "math_expression": "180 - 36 = 144" }
        ],
        "final_answer": "144"
    },

    // ==========================================
    // תת נושא 2: שטחים והיקפים של צורות מורכבות (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 100 100\" width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10,10 40,10 40,60 90,60 90,90 10,90\" fill=\"#f87171\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>לפניכם צורה המורכבת משני מלבנים המחוברים יחד (בצורת האות L). הגובה השמאלי הכולל הוא 10 ס''מ, והרוחב התחתון הכולל הוא 8 ס''מ. בפינה הימנית העליונה חסר מלבן שמידותיו 6 על 4 ס''מ. מהו שטח הצורה כולה בסמ''ר?&rlm;",
        "options": ["56", "80", "104", "48"],
        "correctAnswer": 0,
        "hint": "חשבו את השטח של המלבן הגדול כאילו היה שלם, ואז חסרו ממנו את שטח המלבן שחסר בפינה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטחו של המלבן השלם והגדול כאילו לא היה חסר בו כלום.", "math_expression": "10 \\times 8 = 80" },
            { "verbal_explanation": "נחשב את השטח של המלבן הקטן והריק שחסר בפינה.", "math_expression": "6 \\times 4 = 24" },
            { "verbal_explanation": "נחסר את השטח הריק מהשטח הכולל כדי למצוא את שטח הצורה הצבועה.", "math_expression": "80 - 24 = 56" }
        ],
        "final_answer": "56"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "בהמשך לשאלה הקודמת, צורת ה-L המורכבת חתוכה מתוך מלבן של 10 על 8, כשהחתיכה שחסרה היא 6 על 4. מהו ההיקף (מסביב לצורה) של הצורה הזו?&rlm;",
        "options": ["36", "30", "56", "28"],
        "correctAnswer": 0,
        "hint": "היקף של צורת 'מדרגות' כזו זהה בדיוק להיקף של המלבן השלם שממנו היא נגזרה.",
        "solution_steps": [
            { "verbal_explanation": "נשים לב שהקווים הפנימיים של המדרגה בדיוק משלימים את הקווים החסרים של המלבן המקורי בחוץ.", "math_expression": "10 + 8" },
            { "verbal_explanation": "לכן, אפשר פשוט לחשב את ההיקף של מלבן שלם במידות עשר על שמונה.", "math_expression": "10 + 8 + 10 + 8" },
            { "verbal_explanation": "נחבר את כל אורכי הצלעות ההיקפיות ונקבל את ההיקף הכולל.", "math_expression": "36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 100 100\" width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#cbd5e1\" stroke=\"#0f172a\"/><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"white\" stroke=\"#0f172a\"/></svg></div><br>לפניכם צורת טבעת. רדיוס המעגל החיצוני הגדול הוא 5 ס''מ. רדיוס המעגל הפנימי הלבן והריק הוא 3 ס''מ. מהו שטח הטבעת האפורה? (תנו את התשובה ככפולה של פאי).&rlm;",
        "options": ["16π", "25π", "9π", "34π"],
        "correctAnswer": 0,
        "hint": "חשבו את השטח של המעגל הגדול כולו, ואז חסרו ממנו את השטח של המעגל הקטן והריק שבמרכז.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של המעגל הגדול בעזרת רדיוס כפול רדיוס כפול פאי.", "math_expression": "5 \\times 5 \\times \\pi = 25\\pi" },
            { "verbal_explanation": "נחשב את השטח של המעגל הקטן והריק באמצע.", "math_expression": "3 \\times 3 \\times \\pi = 9\\pi" },
            { "verbal_explanation": "נחסר את העיגול הלבן מהמעגל הגדול לקבלת השטח של הטבעת עצמה.", "math_expression": "25\\pi - 9\\pi = 16\\pi" }
        ],
        "final_answer": "16π"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "מגרש ספורט מורכב ממלבן שאורכו 20 מטרים ורוחבו 10 מטרים. לשתי הצלעות הקצרות של המלבן מחוברים חצאי מעגל (כמו צורת אצטדיון). מהו ההיקף הכולל של מגרש הספורט (מסביב בלבד, ללא הקווים הפנימיים)?&rlm;",
        "options": ["40 + 10π", "40 + 20π", "60 + 10π", "40 + 5π"],
        "correctAnswer": 0,
        "hint": "ההיקף מורכב משתי צלעות ארוכות של המלבן, ומפעם אחת של היקף מעגל שלם (שני החצאים יוצרים מעגל אחד בקוטר 10).",
        "solution_steps": [
            { "verbal_explanation": "שתי הצלעות הארוכות של המלבן הן חלק מההיקף החיצוני. נחבר אותן.", "math_expression": "20 + 20 = 40" },
            { "verbal_explanation": "שני חצאי המעגל בקצוות יוצרים יחד היקף של מעגל שלם אחד. הקוטר של המעגל הזה הוא בדיוק הרוחב של המלבן.", "math_expression": "10" },
            { "verbal_explanation": "היקף המעגל מחושב כקוטר כפול פאי.", "math_expression": "10 \\times \\pi = 10\\pi" },
            { "verbal_explanation": "ההיקף הכולל הוא החיבור של שתי הצלעות הישרות והקשתות המעוגלות.", "math_expression": "40 + 10\\pi" }
        ],
        "final_answer": "40 + 10π"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "לפניכם חלון בצורת מלבן שמידותיו 10 על 6. על הצלע העליונה של המלבן בנוי חצי מעגל. מהו השטח של החלון כולו? (השתמשו בפאי שווה בערך ל-3.14 לצורך אומדן).&rlm;",
        "options": ["74.13", "60", "88.26", "116.52"],
        "correctAnswer": 0,
        "hint": "חלקו לשתי צורות: מלבן וחצי מעגל. הרדיוס של חצי המעגל הוא חצי מרוחב הצלע (חצי משש).",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם את שטח החלק המלבני בלבד.", "math_expression": "10 \\times 6 = 60" },
            { "verbal_explanation": "הקוטר של חצי המעגל הוא שש, ולכן הרדיוס הוא חצי מזה, כלומר שלוש.", "math_expression": "6 \\div 2 = 3" },
            { "verbal_explanation": "נחשב את שטח חצי המעגל. רדיוס כפול רדיוס כפול פאי, וכל זה חלקי שתיים.", "math_expression": "3 \\times 3 \\times 3.14 \\div 2 = 14.13" },
            { "verbal_explanation": "נחבר את שטח המלבן ושטח חצי המעגל לשטח אחד כולל.", "math_expression": "60 + 14.13 = 74.13" }
        ],
        "final_answer": "74.13"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "בתוך ריבוע שאורך צלעו 10 ס''מ חסום (מצויר בדיוק בפנים) מעגל הנוגע בכל צלעות הריבוע. מהו השטח של ארבע הפינות הנותרות בין המעגל לבין קצות הריבוע?&rlm;",
        "options": ["100 - 25π", "100 - 50π", "100 - 100π", "25"],
        "correctAnswer": 0,
        "hint": "חשבו את שטח הריבוע, וחסרו ממנו את שטח המעגל הפנימי. רדיוס המעגל הוא בדיוק חצי מצלע הריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הריבוע השלם.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "המעגל נוגע בקצוות, לכן הקוטר שלו הוא עשר, והרדיוס שלו הוא חמש.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "נחשב את שטח המעגל בעזרת כפל רדיוס בעצמו ובפאי.", "math_expression": "5 \\times 5 \\times \\pi = 25\\pi" },
            { "verbal_explanation": "השטח של הפינות הריקות הוא שטח הריבוע פחות שטח המעגל.", "math_expression": "100 - 25\\pi" }
        ],
        "final_answer": "100 - 25π"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "צורה בנויה ממלבן שמידותיו 8 על 6, ומעליו מונח משולש שגובהו 3 מטרים (הבסיס של המשולש יושב בדיוק על הצלע העליונה שאורכה 8). מהו השטח הכולל של הבית המצויר הזה?&rlm;",
        "options": ["60", "48", "72", "84"],
        "correctAnswer": 0,
        "hint": "חשבו שטח מלבן בנפרד, שטח משולש בנפרד וחברו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח הבסיס המלבני התחתון.", "math_expression": "8 \\times 6 = 48" },
            { "verbal_explanation": "נחשב את שטח המשולש שיושב על הגג (בסיס כפול גובה חלקי שתיים).", "math_expression": "8 \\times 3 \\div 2 = 12" },
            { "verbal_explanation": "נחבר את השטחים לקבלת השטח המלא של המבנה המצויר.", "math_expression": "48 + 12 = 60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "צורה בנויה משני מלבנים המונחים זה על זה (בצורת האות T). המלבן העליון מידותיו 10 על 2. המלבן התחתון מידותיו 2 על 8. מהו השטח הכולל של הצורה?&rlm;",
        "options": ["36", "40", "32", "48"],
        "correctAnswer": 0,
        "hint": "פשוט לחבר את השטחים של שני המלבנים הנפרדים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של הפס העליון והרחב.", "math_expression": "10 \\times 2 = 20" },
            { "verbal_explanation": "נחשב את השטח של הרגל האנכית של הצורה.", "math_expression": "2 \\times 8 = 16" },
            { "verbal_explanation": "נחבר את שני השטחים הללו יחד לשטח אחיד.", "math_expression": "20 + 16 = 36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "מריבוע שאורך צלעו 10 ס''מ, חתכו והוציאו מארבע הפינות שלו ארבעה ריבועים קטנים זהים שצלעם היא 2 ס''מ. צורת ה'צלב' שנוצרה נראית כמו פלוס עבה. מהו ההיקף של הצורה החדשה שנוצרה?&rlm;",
        "options": ["40", "32", "48", "24"],
        "correctAnswer": 0,
        "hint": "האם חיתוך פינות בצורה כזו של מדרגות מקטין את ההיקף, מגדיל אותו, או משאיר אותו זהה להיקף המקורי?",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההיקף של הריבוע השלם והמקורי לפני החיתוך.", "math_expression": "4 \\times 10 = 40" },
            { "verbal_explanation": "כשחותכים פינה מלבנית, הקו הישר שהיה בחוץ פשוט נכנס פנימה בצורת 'מדרגה'.", "math_expression": "2 + 2 = 4" },
            { "verbal_explanation": "אורכי הקווים החיצוניים החדשים שווים בדיוק לאורכי הקווים שהוסרו. לכן ההיקף לא משתנה כלל ונשאר ארבעים.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "שטחים והיקפים של צורות מורכבות",
        "question_text": "נתון מלבן שמידותיו 12 על 8 ס''מ. מחברים את אמצעי כל ארבע הצלעות שלו בקווים ישרים ונוצר מעוין לבן באמצע. אנו רוצים לצבוע רק את ארבעת המשולשים שנוצרו מסביב למעוין (בפינות המלבן). מהו השטח הצבוע הזה?&rlm;",
        "options": ["48", "96", "24", "72"],
        "correctAnswer": 0,
        "hint": "המעוין הנוצר על ידי אמצעי הצלעות תופס בדיוק חצי משטח המלבן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של כל המלבן השלם לפני החלוקה.", "math_expression": "12 \\times 8 = 96" },
            { "verbal_explanation": "כלל בגאומטריה קובע שחיבור אמצעי הצלעות של מלבן יוצר צורה פנימית שתופסת בדיוק מחצית מהשטח.", "math_expression": "96 \\div 2" },
            { "verbal_explanation": "לכן, השטח של ארבע הפינות (המשולשים שנותרו בחוץ) שווה למחצית השנייה של שטח המלבן.", "math_expression": "48" }
        ],
        "final_answer": "48"
    },

    // ==========================================
    // תת נושא 3: נפחים ופריסות גופים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "מהו נפחה של קובייה שאורך צלע אחת שלה הוא 5 סנטימטרים?&rlm;",
        "options": ["125", "25", "150", "100"],
        "correctAnswer": 0,
        "hint": "בקובייה, האורך, הרוחב והגובה שווים זה לזה. כדי למצוא נפח יש לכפול את שלושת הממדים יחד.",
        "solution_steps": [
            { "verbal_explanation": "בקובייה כל הממדים הם באותו האורך.", "math_expression": "5 \\quad , \\quad 5 \\quad , \\quad 5" },
            { "verbal_explanation": "נכפול את האורך ברוחב כדי לקבל את שטח בסיס הקובייה.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה כדי למצוא כמה מקום הקובייה תופסת (הנפח שלה).", "math_expression": "25 \\times 5 = 125" }
        ],
        "final_answer": "125"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "לתיבה יש בסיס באורך 4 סנטימטרים ורוחב 3 סנטימטרים. גובה התיבה הוא 10 סנטימטרים. מהו נפח התיבה?&rlm;",
        "options": ["120", "12", "60", "240"],
        "correctAnswer": 0,
        "hint": "כדי למצוא נפח של תיבה, כופלים את שטח הבסיס שלה בגובה.",
        "solution_steps": [
            { "verbal_explanation": "ראשית נחשב את השטח של בסיס התיבה שהוא מלבן.", "math_expression": "4 \\times 3 = 12" },
            { "verbal_explanation": "כדי למצוא את הנפח, נכפול את השטח של הבסיס בגובהה של התיבה כולה.", "math_expression": "12 \\times 10" },
            { "verbal_explanation": "נקבל את הנפח הסופי בסנטימטרים מעוקבים.", "math_expression": "120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "מהו שטח הפנים (סכום השטחים של כל הפאות מבחוץ) של קובייה שאורך הצלע שלה הוא 3 סנטימטרים?&rlm;",
        "options": ["54", "27", "36", "18"],
        "correctAnswer": 0,
        "hint": "לקובייה יש שש פאות (צדדים), וכולן הן ריבועים שווים. חשבו שטח של פאה אחת וכפלו בשש.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של צד אחד (פאה אחת) של הקובייה. זהו ריבוע בגודל שלוש על שלוש.", "math_expression": "3 \\times 3 = 9" },
            { "verbal_explanation": "הקובייה סגורה מכל הכיוונים, ולכן מורכבת משש פאות שוות בדיוק.", "math_expression": "6" },
            { "verbal_explanation": "נכפול את השטח של פאה אחת במספר הפאות כדי לקבל את השטח הכולל של כל המעטפת בחוץ.", "math_expression": "9 \\times 6 = 54" }
        ],
        "final_answer": "54"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "כמה ריבועים שווים מופיעים בפריסה (הצורה השטוחה המצוירת על נייר שממנה מקפלים את הצורה) של קובייה שלמה וסגורה?&rlm;",
        "options": ["6", "4", "8", "5"],
        "correctAnswer": 0,
        "hint": "חשבו על קוביית משחק. כמה צדדים (פאות) יש לה?",
        "solution_steps": [
            { "verbal_explanation": "קובייה סגורה צריכה רצפה, תקרה, וארבעה קירות מסביב.", "math_expression": "1 + 1 + 4" },
            { "verbal_explanation": "נחבר את כל הצדדים הנדרשים כדי לסגור את הצורה התלת-ממדית מכל כיוון.", "math_expression": "6" },
            { "verbal_explanation": "לכן, פריסה של קובייה מורכבת תמיד משישה ריבועים בדיוק.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "למנסרה יש בסיס תחתון שהוא משולש ישר זווית. הניצבים של המשולש (הצלעות המרכיבות את הזווית הישרה) הם 6 ו-8 סנטימטרים. גובה המנסרה הוא 10 סנטימטרים. מהו נפח המנסרה כולה?&rlm;",
        "options": ["240", "480", "120", "200"],
        "correctAnswer": 0,
        "hint": "נפח של כל מנסרה הוא שטח הבסיס כפול הגובה. חשבו קודם את השטח של בסיס המשולש (ניצב כפול ניצב לחלק לשתיים).",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של בסיס המנסרה שהוא משולש ישר זווית. מכפלת ניצבים חלקי שתיים.", "math_expression": "6 \\times 8 \\div 2 = 24" },
            { "verbal_explanation": "שטח הבסיס הוא עשרים וארבעה סנטימטרים רבועים.", "math_expression": "24" },
            { "verbal_explanation": "נכפול את שטח הבסיס בגובה המנסרה כולה כדי להכיל את כל הנפח שלה.", "math_expression": "24 \\times 10 = 240" }
        ],
        "final_answer": "240"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "לגליל (צורה כמו של קופסת שימורים) יש בסיס עגול ששטחו נתון כבר והוא 20 סמ''ר. גובה הגליל הוא 5 סנטימטרים. מהו נפח הגליל?&rlm;",
        "options": ["100", "40", "200", "50"],
        "correctAnswer": 0,
        "hint": "בדיוק כמו בתיבה, גם בגליל מחשבים נפח על ידי הכפלת השטח של הבסיס בגובה הצורה.",
        "solution_steps": [
            { "verbal_explanation": "הכלל לחישוב נפח עובד גם על גליל: שטח הבסיס מוכפל בגובה המלא.", "math_expression": "20 \\times 5" },
            { "verbal_explanation": "נבצע את פעולת הכפל הפשוטה לקבלת התשובה.", "math_expression": "100" },
            { "verbal_explanation": "הנפח הוא מאה סנטימטרים מעוקבים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "מאיזה צורות שטוחות ויסודיות מורכבת הפריסה של גליל סגור רגיל?&rlm;",
        "options": ["שני מעגלים ומלבן אחד", "שני מעגלים ושני מלבנים", "מעגל אחד ומלבן אחד", "שלושה מעגלים"],
        "correctAnswer": 0,
        "hint": "חישבו איך נראית קופסת פח כשמפרקים אותה: יש לה מכסה, תחתית, והדופן שמסביב, שאם גוזרים ופותחים אותו, הוא מתיישר לצורה מוכרת.",
        "solution_steps": [
            { "verbal_explanation": "לגליל שלם וסגור יש בסיס עליון (תקרה) ובסיס תחתון (רצפה), שניהם בצורת עיגול.", "math_expression": "1 + 1 = 2" },
            { "verbal_explanation": "המעטפת של הגליל, החלק שמקיף אותו, היא משטח ישר ומעוגל. כאשר חותכים ופורסים משטח כזה, הוא מתיישר לצורה של מלבן ארוך.", "math_expression": "1" },
            { "verbal_explanation": "לכן הפריסה המלאה כוללת שני מעגלים ומלבן מרכזי שמחבר ביניהם.", "math_expression": "2 \\quad , \\quad 1" }
        ],
        "final_answer": "שני מעגלים ומלבן אחד"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "קובייה קטנה שוקלת 1 סמ''ק. אם נבנה קובייה חדשה שכל אחד מאורכי הצלעות שלה ארוך בדיוק פי שתיים מהקובייה המקורית, מה יהיה הנפח של הקובייה החדשה?&rlm;",
        "options": ["8", "4", "2", "6"],
        "correctAnswer": 0,
        "hint": "הנפח מושפע מהאורך, מהרוחב ומהגובה גם יחד. הכפלה של פי שתיים משפיעה על כל שלושת הכיוונים.",
        "solution_steps": [
            { "verbal_explanation": "קובייה תלת ממדית מורכבת מאורך, רוחב וגובה. בכל אחד מהכיוונים הגדלנו את המידה פי שתיים.", "math_expression": "2 \\times 2 \\times 2" },
            { "verbal_explanation": "נחשב את מכפלת ההגדלה הכוללת בכל הממדים יחד.", "math_expression": "2 \\times 2 = 4 \\quad , \\quad 4 \\times 2 = 8" },
            { "verbal_explanation": "מכיוון שהקובייה המקורית הייתה בנפח של אחד, הנפח החדש יהיה גדול ממנה בדיוק פי שמונה.", "math_expression": "1 \\times 8 = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "נפח של תיבה סגורה הוא 300 סמ''ק. ידוע לנו כי אורך הבסיס הוא 10 ורוחב הבסיס הוא 5. מהו גובה התיבה כדי שישלים לנפח הזה?&rlm;",
        "options": ["6", "10", "15", "5"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את השטח של הבסיס. הנפח הוא תוצאה של שטח הבסיס כפול הגובה. בצעו פעולת חילוק כדי למצוא את הגובה החסר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השטח של בסיס התיבה על ידי הכפלת האורך ברוחב.", "math_expression": "10 \\times 5 = 50" },
            { "verbal_explanation": "הנפח הכללי, שהוא שלוש מאות, הוא בעצם השטח שמצאנו כפול הגובה.", "math_expression": "300" },
            { "verbal_explanation": "נחלק את הנפח הכללי בשטח הבסיס כדי לדעת איזה מספר חסר לנו כגובה.", "math_expression": "300 \\div 50 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_5_6",
        "subTopic": "נפחים ופריסות גופים",
        "question_text": "פירמידה משולשת משוכללת בנויה מארבעה משולשים שווי צלעות (אחד מהם הוא הבסיס ושלושה הם קירות). מהו שטח הפנים הכולל של פירמידה זו, אם שטח של אחד מהמשולשים המרכיבים אותה הוא 15 סמ''ר?&rlm;",
        "options": ["60", "45", "30", "75"],
        "correctAnswer": 0,
        "hint": "שטח הפנים הוא סך כל השטחים של הצורות מבחוץ. מכיוון שזו פירמידה משולשת, יש לה ארבעה צדדים שהם משולשים.",
        "solution_steps": [
            { "verbal_explanation": "פירמידה משולשת סגורה מורכבת מבסיס משולש למטה, ועוד שלושה קירות משולשים שנסגרים בשפיץ למעלה.", "math_expression": "1 + 3 = 4" },
            { "verbal_explanation": "נתון לנו שהפירמידה משוכללת, כלומר כל ארבעת המשולשים המרכיבים אותה זהים בגודלם ושטחם.", "math_expression": "15" },
            { "verbal_explanation": "נכפול את שטח המשולש היחיד בארבע פעמים כדי לכסות את שטח הפנים של הצורה כולה.", "math_expression": "15 \\times 4 = 60" }
        ],
        "final_answer": "60"
    },
    // ==========================================
    // תת נושא 1: סדרות וחוקיות (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה הבאה: 2, 5, 8, 11, ?&rlm;",
        "options": ["14", "15", "13", "12"],
        "correctAnswer": 0,
        "hint": "בדקו מהו ההפרש בין כל מספר למספר שבא אחריו בסדרה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק בכמה גדל המספר הראשון כדי להגיע למספר השני.", "math_expression": "5 - 2 = 3" },
            { "verbal_explanation": "נבדוק את ההפרש בין המספר השני לשלישי כדי לוודא שהחוקיות קבועה.", "math_expression": "8 - 5 = 3" },
            { "verbal_explanation": "גילינו שהחוקיות היא הוספת שלוש בכל פעם. נוסיף שלוש למספר האחרון הידוע.", "math_expression": "11 + 3 = 14" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה הבאה: 20, 16, 12, 8, ?&rlm;",
        "options": ["4", "6", "2", "0"],
        "correctAnswer": 0,
        "hint": "הסדרה הזו יורדת. נסו לחסר מספר קבוע בכל שלב.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק בכמה קטן המספר השני מהמספר הראשון.", "math_expression": "20 - 16 = 4" },
            { "verbal_explanation": "נבדוק גם את המעבר הבא כדי לאשר את החוקיות של הסדרה.", "math_expression": "16 - 12 = 4" },
            { "verbal_explanation": "החוקיות היא חיסור של ארבע. נחסר ארבע מהמספר האחרון בסדרה.", "math_expression": "8 - 4 = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה: 2, 4, 8, 16, ?&rlm;",
        "options": ["32", "24", "20", "64"],
        "correctAnswer": 0,
        "hint": "בסדרה הזו המספרים לא גדלים בחיבור קבוע, אלא גדלים פי כמה. נסו להשתמש בכפל.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק פי כמה גדול המספר השני מהראשון בעזרת פעולת חילוק.", "math_expression": "4 \\div 2 = 2" },
            { "verbal_explanation": "נבדוק את הקפיצה הבאה בסדרה באותה הדרך.", "math_expression": "8 \\div 4 = 2" },
            { "verbal_explanation": "החוקיות היא כפל פי שתיים. נכפול את המספר האחרון בשתיים.", "math_expression": "16 \\times 2 = 32" }
        ],
        "final_answer": "32"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "מהו המספר הבא בסדרה: 1, 4, 9, 16, ?&rlm;",
        "options": ["25", "20", "24", "36"],
        "correctAnswer": 0,
        "hint": "הסתכלו על המספרים. האם אתם מזהים קשר ללוח הכפל? חשבו על מספרים שמוכפלים בעצמם.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את המספר הראשון כמכפלה של אחד באחד.", "math_expression": "1 \\times 1 = 1" },
            { "verbal_explanation": "נזהה את המספר השני והשלישי כמכפלות של מספר בעצמו (מספרים ריבועיים).", "math_expression": "2 \\times 2 = 4 \\quad , \\quad 3 \\times 3 = 9" },
            { "verbal_explanation": "המספר הרביעי הוא ארבע כפול ארבע, לכן המספר הבא יהיה חמש כפול חמש.", "math_expression": "5 \\times 5 = 25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה: 1, 3, 7, 15, ?&rlm;",
        "options": ["31", "30", "23", "29"],
        "correctAnswer": 0,
        "hint": "החוקיות כאן מורכבת משתי פעולות. נסו לכפול בשתיים ואז להוסיף משהו.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק איך מגיעים מאחד לשלוש. אם נכפול בשתיים נקבל שתיים, ואז נוסיף אחד.", "math_expression": "1 \\times 2 + 1 = 3" },
            { "verbal_explanation": "נבדוק אם הכלל הזה עובד על המספר הבא.", "math_expression": "3 \\times 2 + 1 = 7" },
            { "verbal_explanation": "הכלל עובד. נפעיל אותו על המספר האחרון הידוע כדי למצוא את התשובה.", "math_expression": "15 \\times 2 + 1 = 31" }
        ],
        "final_answer": "31"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר הבא בסדרה: 10, 9, 7, 4, ?&rlm;",
        "options": ["0", "1", "2", "-1"],
        "correctAnswer": 0,
        "hint": "ההפרש בין המספרים לא קבוע, אלא גדל בכל צעד. בדקו כמה מחסרים בכל פעם.",
        "solution_steps": [
            { "verbal_explanation": "בצעד הראשון חסרנו אחד מהמספר ההתחלתי.", "math_expression": "10 - 1 = 9" },
            { "verbal_explanation": "בצעד השני חסרנו שתיים, ובשלישי חסרנו שלוש.", "math_expression": "9 - 2 = 7 \\quad , \\quad 7 - 3 = 4" },
            { "verbal_explanation": "לכן, בצעד הבא נצטרך לחסר ארבע מהמספר האחרון.", "math_expression": "4 - 4 = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "סדרה מתחילה במספר 3. החוקיות היא: מוסיפים 3 בכל צעד. מה יהיה המספר העשירי בסדרה?&rlm;",
        "options": ["30", "33", "27", "13"],
        "correctAnswer": 0,
        "hint": "אם המספר הראשון הוא פעם אחת שלוש, המספר השני הוא פעמיים שלוש. השתמשו בכפל.",
        "solution_steps": [
            { "verbal_explanation": "המספר הראשון הוא תוצאה של כפל בשלוש.", "math_expression": "1 \\times 3 = 3" },
            { "verbal_explanation": "המספר השני והשלישי מראים שזו פשוט כפולות של המספר שלוש.", "math_expression": "2 \\times 3 = 6 \\quad , \\quad 3 \\times 3 = 9" },
            { "verbal_explanation": "כדי למצוא את המספר במקום העשירי, נכפול את המיקום שלו בחוקיות הסדרה.", "math_expression": "10 \\times 3 = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה: 100, 50, 25, ?&rlm;",
        "options": ["12.5", "15", "10", "5"],
        "correctAnswer": 0,
        "hint": "בכל צעד המספר קטן למחצית מגודלו הקודם.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק את הקשר בין המספר הראשון לשני בעזרת חילוק.", "math_expression": "100 \\div 2 = 50" },
            { "verbal_explanation": "נוודא שהחוקיות זהה גם בצעד הבא.", "math_expression": "50 \\div 2 = 25" },
            { "verbal_explanation": "נחלק את המספר האחרון בשתיים כדי למצוא את המספר הבא. מכיוון שהוא אי-זוגי, נקבל חצי.", "math_expression": "25 \\div 2 = 12.5" }
        ],
        "final_answer": "12.5"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "השלימו את המספר החסר בסדרה המעורבת: 2, 4, 3, 6, 5, ?&rlm;",
        "options": ["10", "8", "4", "7"],
        "correctAnswer": 0,
        "hint": "הסדרה מבצעת פעולה אחת כדי לגדול, ופעולה אחרת כדי לקטון. נסו כפל ואז חיסור.",
        "solution_steps": [
            { "verbal_explanation": "הקפיצה הראשונה היא הכפלה בשתיים.", "math_expression": "2 \\times 2 = 4" },
            { "verbal_explanation": "הקפיצה השנייה היא חיסור של אחד.", "math_expression": "4 - 1 = 3" },
            { "verbal_explanation": "נבדוק את ההמשך: כופלים בשתיים, ואז מחסרים אחד. עכשיו תור ההכפלה בשתיים.", "math_expression": "5 \\times 2 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "סדרות וחוקיות",
        "question_text": "סדרה בנויה כך: המספר הראשון הוא 1, המספר השני הוא 1, וכל מספר נוסף הוא החיבור של שני המספרים שבאו לפניו. מה יהיה המספר השישי בסדרה?&rlm;",
        "options": ["8", "5", "13", "7"],
        "correctAnswer": 0,
        "hint": "זוהי סדרת פיבונאצ'י המפורסמת. רשמו את המספרים אחד אחרי השני לפי הכלל עד שתגיעו למקום השישי.",
        "solution_steps": [
            { "verbal_explanation": "המספר הראשון והשני נתונים לנו מראש.", "math_expression": "1 \\quad , \\quad 1" },
            { "verbal_explanation": "המספר השלישי הוא חיבור שני הראשונים, והרביעי הוא חיבור השני והשלישי.", "math_expression": "1 + 1 = 2 \\quad , \\quad 1 + 2 = 3" },
            { "verbal_explanation": "נמשיך למספר החמישי.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "המספר השישי יתקבל מחיבור המספר הרביעי והחמישי.", "math_expression": "3 + 5 = 8" }
        ],
        "final_answer": "8"
    },

    // ==========================================
    // תת נושא 2: שימוש במשתנים בסיסיים (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "נתון כי הצורה מרובע מחליפה מספר: \\( \\square = 4 \\). חשבו את התרגיל הבא: \\( 5 \\times \\square \\)&rlm;",
        "options": ["20", "9", "25", "16"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר 4 במקום הריבוע בתרגיל ופתרו כרגיל.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את הריבוע במספר שניתן לנו בנתוני השאלה.", "math_expression": "\\square = 4" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל מחדש עם המספר במקום הצורה.", "math_expression": "5 \\times 4" },
            { "verbal_explanation": "נפתור את התרגיל המוכר מלוח הכפל.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "נתון כי: \\( \\triangle = 10 \\). מה תהיה התוצאה של התרגיל: \\( \\triangle \\div 2 + 3 \\)?&rlm;",
        "options": ["8", "5", "6", "13"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך של המשולש, וזכרו שסדר פעולות חשבון אומר שחילוק קודם לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר עשר במקום צורת המשולש בתוך התרגיל.", "math_expression": "10 \\div 2 + 3" },
            { "verbal_explanation": "לפי סדר פעולות חשבון, נבצע קודם את פעולת החילוק.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "כעת נוסיף לתוצאה את המספר שלוש.", "math_expression": "5 + 3 = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "מצאו איזה מספר מסתתר מאחורי הריבוע כדי שהתרגיל יהיה נכון: \\( \\square + 15 = 25 \\)&rlm;",
        "options": ["10", "40", "5", "15"],
        "correctAnswer": 0,
        "hint": "כדי למצוא את המספר החסר בחיבור, נבצע את הפעולה ההפוכה שהיא חיסור.",
        "solution_steps": [
            { "verbal_explanation": "הריבוע מייצג מספר שכאשר נוסיף לו חמש עשרה נקבל עשרים וחמש. נבצע את הפעולה ההפוכה.", "math_expression": "25 - 15" },
            { "verbal_explanation": "נחסר את המספרים כדי לגלות את הערך החסר.", "math_expression": "10" },
            { "verbal_explanation": "נוודא את התשובה על ידי הצבה בתרגיל המקורי.", "math_expression": "10 + 15 = 25" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "מצאו את הערך של המשולש: \\( 3 \\times \\triangle = 21 \\)&rlm;",
        "options": ["7", "6", "8", "24"],
        "correctAnswer": 0,
        "hint": "הפעולה ההפוכה לכפל היא חילוק. חלקו את התוצאה במספר הנתון.",
        "solution_steps": [
            { "verbal_explanation": "יש לנו תרגיל כפל עם גורם חסר. כדי למצוא אותו נשתמש בפעולת חילוק.", "math_expression": "21 \\div 3" },
            { "verbal_explanation": "נבצע את החילוק הפשוט.", "math_expression": "7" },
            { "verbal_explanation": "המשולש מסתיר את המספר שבע. נציב כדי לבדוק.", "math_expression": "3 \\times 7 = 21" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "נתון ש- \\( \\square = 5 \\) וכן \\( \\triangle = 2 \\). חשבו את: \\( \\square \\times \\triangle + \\square \\)&rlm;",
        "options": ["15", "12", "20", "10"],
        "correctAnswer": 0,
        "hint": "הציבו כל צורה לפי המספר שלה, ואז בצעו קודם את הכפל ואחר כך את החיבור.",
        "solution_steps": [
            { "verbal_explanation": "נחליף כל ריבוע בחמש וכל משולש בשתיים.", "math_expression": "5 \\times 2 + 5" },
            { "verbal_explanation": "נבצע את פעולת הכפל תחילה לפי חוקי הקדימות בחשבון.", "math_expression": "5 \\times 2 = 10" },
            { "verbal_explanation": "נחבר לתוצאה את המספר הנוסף שנותר.", "math_expression": "10 + 5 = 15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "מצאו את הצורה החסרה: \\( 20 \\div \\square = 4 \\)&rlm;",
        "options": ["5", "16", "24", "80"],
        "correctAnswer": 0,
        "hint": "אפשר לחשוב על התרגיל גם כך: עשרים לחלק לתוצאה ייתן את המספר החסר.",
        "solution_steps": [
            { "verbal_explanation": "בתרגיל חילוק בו המחלק חסר, נוכל לחלק את המספר הראשון (המחולק) בתוצאה.", "math_expression": "20 \\div 4" },
            { "verbal_explanation": "נבצע את החילוק כדי לגלות את המספר שבתוך הריבוע.", "math_expression": "5" },
            { "verbal_explanation": "נציב את החמש במקום הריבוע ונראה שהתרגיל אכן נכון.", "math_expression": "20 \\div 5 = 4" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "אם ידוע ש- \\( \\square = 6 \\), מהו הערך של התרגיל \\( \\square \\times \\square \\)?&rlm;",
        "options": ["36", "12", "0", "24"],
        "correctAnswer": 0,
        "hint": "שתי צורות זהות מייצגות תמיד את אותו המספר. הציבו את אותו מספר פעמיים.",
        "solution_steps": [
            { "verbal_explanation": "כל ריבוע בתרגיל מייצג את המספר שש.", "math_expression": "6 \\times 6" },
            { "verbal_explanation": "נכפול את המספר בעצמו כפי שמבקש התרגיל.", "math_expression": "36" },
            { "verbal_explanation": "התוצאה הסופית מתקבלת.", "math_expression": "36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "איזה מספר מסתתר מאחורי המשולש: \\( \\triangle - 8 = 12 \\)?&rlm;",
        "options": ["20", "4", "96", "16"],
        "correctAnswer": 0,
        "hint": "כדי למצוא את המספר שהתחלנו ממנו לפני החיסור, נבצע את הפעולה ההפוכה: חיבור.",
        "solution_steps": [
            { "verbal_explanation": "המספר שבמשולש איבד שמונה ונשאר עם שנים עשר. כדי למצוא אותו נחבר את המספרים.", "math_expression": "12 + 8" },
            { "verbal_explanation": "נחשב את סכום המספרים.", "math_expression": "20" },
            { "verbal_explanation": "נציב את התוצאה חזרה לבדיקה.", "math_expression": "20 - 8 = 12" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "נתון ש- \\( \\bigcirc = 3 \\). חשבו את התרגיל הבא: \\( 10 - \\bigcirc \\times 2 \\)&rlm;",
        "options": ["4", "14", "1", "7"],
        "correctAnswer": 0,
        "hint": "הציבו 3 במקום העיגול. זכרו לבצע את פעולת הכפל לפני פעולת החיסור.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את העיגול במספר שניתן לנו.", "math_expression": "10 - 3 \\times 2" },
            { "verbal_explanation": "נבצע קודם כל את פעולת הכפל לפי סדר פעולות החשבון.", "math_expression": "3 \\times 2 = 6" },
            { "verbal_explanation": "כעת נחסר את התוצאה שקיבלנו מהמספר עשר.", "math_expression": "10 - 6 = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "שימוש במשתנים בסיסיים",
        "question_text": "מצאו את הצורה: \\( 2 \\times \\square + 1 = 11 \\)&rlm;",
        "options": ["5", "6", "4", "10"],
        "correctAnswer": 0,
        "hint": "עבדו מהסוף להתחלה: הורידו אחד מאחת עשרה, ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נבודד את החלק של הכפל על ידי ביצוע הפעולה ההפוכה לחיבור (חיסור של אחד).", "math_expression": "11 - 1 = 10" },
            { "verbal_explanation": "המשוואה החדשה שלנו היא פעמיים ריבוע שווה עשר.", "math_expression": "2 \\times \\square = 10" },
            { "verbal_explanation": "נחלק בשתיים כדי למצוא ריבוע בודד.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "הריבוע שווה חמש.", "math_expression": "\\square = 5" }
        ],
        "final_answer": "5"
    },

    // ==========================================
    // תת נושא 3: משוואות לוגיות (10 שאלות)
    // ==========================================
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "אם ידוע ש: \\( \\square + \\square = 10 \\). מהו הערך של \\( \\square \\)?&rlm;",
        "options": ["5", "10", "20", "2"],
        "correctAnswer": 0,
        "hint": "שתי צורות זהות תמיד מייצגות את אותו המספר. איזה מספר ועוד עצמו שווה לעשר?",
        "solution_steps": [
            { "verbal_explanation": "נתון לנו שסכום של שתי צורות זהות הוא עשר.", "math_expression": "\\square + \\square = 10" },
            { "verbal_explanation": "נחלק את התוצאה בשתיים כדי למצוא את הערך של צורה אחת בודדת.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "מכאן נובע שכל ריבוע שווה לחמש.", "math_expression": "\\square = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "אם נתון ש: \\( \\triangle + \\triangle + \\triangle = 12 \\). למה שווה \\( \\triangle \\)?&rlm;",
        "options": ["4", "6", "3", "24"],
        "correctAnswer": 0,
        "hint": "שלוש צורות זהות מחלקות את התוצאה שווה בשווה לשלושה חלקים.",
        "solution_steps": [
            { "verbal_explanation": "יש לנו חיבור של שלוש צורות שוות שסכומן הוא שנים עשר.", "math_expression": "\\triangle + \\triangle + \\triangle = 12" },
            { "verbal_explanation": "כדי למצוא ערך של משולש אחד נחלק את הסכום בשלוש.", "math_expression": "12 \\div 3 = 4" },
            { "verbal_explanation": "מכאן אנו מסיקים שכל משולש מסתיר את המספר ארבע.", "math_expression": "\\triangle = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתונות שתי עובדות:<br>1. \\( \\square + \\triangle = 10 \\)<br>2. \\( \\square = \\triangle + 2 \\)<br>מהו הערך של \\( \\square \\)?&rlm;",
        "options": ["6", "4", "8", "5"],
        "correctAnswer": 0,
        "hint": "אם הריבוע שווה למשולש ועוד שתיים, אפשר להחליף את הריבוע בעובדה הראשונה במשולש ועוד שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בעובדה השנייה ונציב אותה בתוך העובדה הראשונה. במקום ריבוע נרשום משולש ועוד שתיים.", "math_expression": "\\triangle + 2 + \\triangle = 10" },
            { "verbal_explanation": "נחבר את שני המשולשים יחד.", "math_expression": "2 \\times \\triangle + 2 = 10" },
            { "verbal_explanation": "נוריד שתיים משני הצדדים כדי להשאיר רק את המשולשים.", "math_expression": "2 \\times \\triangle = 8" },
            { "verbal_explanation": "נחלק בשתיים ונמצא שהמשולש שווה ארבע. אבל השאלה היא על הריבוע. נוסיף לו שתיים כפי שידוע לנו.", "math_expression": "\\square = 4 + 2 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתון ש: \\( \\bigcirc \\times \\bigcirc = 25 \\). מהו הערך של \\( \\bigcirc \\)? (הניחו שהמספר חיובי).&rlm;",
        "options": ["5", "12.5", "10", "2"],
        "correctAnswer": 0,
        "hint": "איזה מספר כפול עצמו שווה לעשרים וחמש?",
        "solution_steps": [
            { "verbal_explanation": "העיגול כפול עצמו שווה לעשרים וחמש. זה כמו לשאול מהו השורש של עשרים וחמש.", "math_expression": "\\bigcirc \\times \\bigcirc = 25" },
            { "verbal_explanation": "מלוח הכפל אנו יודעים שחמש כפול חמש שווה לעשרים וחמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "לכן העיגול מייצג את המספר חמש.", "math_expression": "\\bigcirc = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתון כי:<br>1. \\( \\square + \\triangle = 15 \\)<br>2. \\( \\square - \\triangle = 5 \\)<br>מהו הערך של \\( \\square \\)?&rlm;",
        "options": ["10", "5", "15", "8"],
        "correctAnswer": 0,
        "hint": "מה קורה אם מחברים את שתי העובדות יחד? המשולש מתווסף ואז מוחסר, כך שהוא נעלם ונשארים רק שני ריבועים.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את הצד הימני של שתי השורות ואת הצד השמאלי של שתי השורות.", "math_expression": "15 + 5 = 20" },
            { "verbal_explanation": "בחיבור הצורות, המשולש מתבטל כי פעם אחת הוא בפלוס ופעם במינוס. נשארים שני ריבועים.", "math_expression": "\\square + \\square = 20" },
            { "verbal_explanation": "נחלק בשתיים כדי למצוא את ערכו של ריבוע בודד.", "math_expression": "20 \\div 2 = 10" },
            { "verbal_explanation": "הריבוע שווה לעשר.", "math_expression": "\\square = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "ידוע ש: \\( \\square \\times \\triangle = 24 \\) וגם ידוע ש- \\( \\square = 6 \\). למה שווה \\( \\triangle \\)?&rlm;",
        "options": ["4", "18", "30", "3"],
        "correctAnswer": 0,
        "hint": "הציבו את הערך של הריבוע בתרגיל הכפל, וחשבו בעזרת חילוק.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את הריבוע במספר שש כפי שידוע לנו מהנתון השני.", "math_expression": "6 \\times \\triangle = 24" },
            { "verbal_explanation": "כדי למצוא את הגורם החסר בכפל, נבצע את הפעולה ההפוכה שהיא חילוק.", "math_expression": "24 \\div 6" },
            { "verbal_explanation": "נחשב את החילוק ונקבל את ערך המשולש.", "math_expression": "\\triangle = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתון: \\( \\triangle + \\triangle = \\square \\). כמו כן ידוע ש- \\( \\square = 8 \\). מהו הערך של \\( \\triangle \\)?&rlm;",
        "options": ["4", "16", "2", "6"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר שמונה במקום הריבוע, ופתרו כמו בתרגיל הראשון.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר שמונה במקום צורת הריבוע במשוואה הראשונה.", "math_expression": "\\triangle + \\triangle = 8" },
            { "verbal_explanation": "יש לנו שני משולשים זהים ששווים יחד לשמונה. נחלק בשתיים.", "math_expression": "8 \\div 2" },
            { "verbal_explanation": "נקבל את הערך של משולש בודד.", "math_expression": "\\triangle = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתון ש: \\( \\bigcirc + \\bigcirc + \\square = 14 \\). בנוסף אנו יודעים ש- \\( \\square = 4 \\). מהו הערך של העיגול \\( \\bigcirc \\)?&rlm;",
        "options": ["5", "10", "6", "4"],
        "correctAnswer": 0,
        "hint": "החליפו את הריבוע בארבע, חסרו אותו מהסכום הכולל, ואז חלקו את מה שנשאר לשני העיגולים.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר ארבע במקום הריבוע.", "math_expression": "\\bigcirc + \\bigcirc + 4 = 14" },
            { "verbal_explanation": "נחסר ארבע משני הצדדים כדי להשאיר את העיגולים לבד.", "math_expression": "\\bigcirc + \\bigcirc = 14 - 4 = 10" },
            { "verbal_explanation": "שני עיגולים שווים לעשר. נחלק בשתיים כדי למצוא עיגול אחד.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "העיגול שווה לחמש.", "math_expression": "\\bigcirc = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "נתון כי: \\( 2 \\times \\square + \\triangle = 11 \\). אם נגלה לכם ש- \\( \\triangle = 3 \\), מה יהיה הערך של \\( \\square \\)?&rlm;",
        "options": ["4", "8", "5", "7"],
        "correctAnswer": 0,
        "hint": "הציבו את 3 במקום המשולש, חסרו אותו מ-11, ואז חלקו בשתיים.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר שלוש במקום המשולש.", "math_expression": "2 \\times \\square + 3 = 11" },
            { "verbal_explanation": "נוריד שלוש מתוך אחת עשרה כדי לבודד את החלק עם הריבועים.", "math_expression": "11 - 3 = 8" },
            { "verbal_explanation": "פעמיים הריבוע שווה לשמונה. נחלק בשתיים.", "math_expression": "8 \\div 2 = 4" },
            { "verbal_explanation": "הריבוע שווה לארבע.", "math_expression": "\\square = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "bar_ilan_algebra_5_6",
        "subTopic": "משוואות לוגיות",
        "question_text": "התבוננו בשוויון הבא: \\( \\square + \\square + \\square = \\triangle + \\triangle \\). ידוע כי הריבוע שווה: \\( \\square = 4 \\). חשבו מהו הערך של \\( \\triangle \\).&rlm;",
        "options": ["6", "12", "8", "2"],
        "correctAnswer": 0,
        "hint": "חשבו קודם כל למה שווים שלושת הריבועים יחד. לאחר מכן חלקו את התוצאה לשני משולשים.",
        "solution_steps": [
            { "verbal_explanation": "נציב ארבע במקום כל אחד מהריבועים בצד שמאל.", "math_expression": "4 + 4 + 4 = 12" },
            { "verbal_explanation": "עכשיו אנו יודעים שהצד השמאלי כולו שווה לשנים עשר. לכן גם הצד הימני שווה כך.", "math_expression": "\\triangle + \\triangle = 12" },
            { "verbal_explanation": "שני משולשים שווים לשנים עשר. נחלק בשתיים למציאת משולש בודד.", "math_expression": "12 \\div 2 = 6" },
            { "verbal_explanation": "המשולש שווה לשש.", "math_expression": "\\triangle = 6" }
        ],
        "final_answer": "6"
    }
];