const questionsDB = [
    // ==========================================
    // תת נושא 1: מושג המשתנה (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "לדני יש כמות לא ידועה של גולות בקופסה, אותה נסמן באות \\( x \\). חבר שלו נתן לו עוד 5 גולות במתנה. איזה ביטוי אלגברי מתאר את מספר הגולות שיש לדני עכשיו?&rlm;",
        "options": ["x + 5", "5x", "x - 5", "5 - x"],
        "correctAnswer": 0,
        "hint": "כאשר מוסיפים כמות לדבר קיים, משתמשים בפעולת חיבור.",
        "solution_steps": [
            { "verbal_explanation": "המשתנה מייצג את הכמות ההתחלתית והלא ידועה של הגולות בקופסה.", "math_expression": "x" },
            { "verbal_explanation": "כאשר דני מקבל גולות נוספות במתנה, הכמות שלו גדלה. פעולה של הוספה משמעותה חיבור.", "math_expression": "+" },
            { "verbal_explanation": "הכמות שהתווספה היא חמש.", "math_expression": "5" },
            { "verbal_explanation": "נחבר את הכמות החדשה לכמות המקורית לקבלת הביטוי המלא.", "math_expression": "x + 5" }
        ],
        "final_answer": "x + 5"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "מחיר של מחברת אחת בחנות הוא \\( y \\) שקלים. תמר קנתה 4 מחברות זהות. איזה ביטוי אלגברי מתאר את הסכום הכולל שתמר צריכה לשלם?&rlm;",
        "options": ["4y", "y + 4", "y - 4", "y / 4"],
        "correctAnswer": 0,
        "hint": "כאשר קונים מספר פריטים זהים, משתמשים בפעולת כפל בין כמות הפריטים למחיר של פריט בודד.",
        "solution_steps": [
            { "verbal_explanation": "המחיר של מחברת אחת בלבד מיוצג בעזרת המשתנה הנתון בשאלה.", "math_expression": "y" },
            { "verbal_explanation": "כמות המחברות שתמר קנתה היא ארבע.", "math_expression": "4" },
            { "verbal_explanation": "כדי למצוא את המחיר הכולל, עלינו לכפול את כמות המחברות במחיר של מחברת אחת.", "math_expression": "4 \\times y" },
            { "verbal_explanation": "באלגברה, נהוג להשמיט את סימן הכפל בין מספר למשתנה. נרשום את התוצאה בצורה מקוצרת.", "math_expression": "4y" }
        ],
        "final_answer": "4y"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "אורך של סרט בד הוא \\( m \\) מטרים. חתכו והורידו ממנו חתיכה באורך 2 מטרים. איזה ביטוי מתאר את אורך הסרט שנשאר?&rlm;",
        "options": ["m - 2", "2 - m", "2m", "m / 2"],
        "correctAnswer": 0,
        "hint": "כאשר מסירים או חותכים משהו, הכמות קטנה. השתמשו בפעולת חיסור מהכמות ההתחלתית.",
        "solution_steps": [
            { "verbal_explanation": "האורך המקורי של סרט הבד כולו מיוצג על ידי המשתנה.", "math_expression": "m" },
            { "verbal_explanation": "המילה 'חתכו' או 'הורידו' אומרת לנו שיש כאן הקטנה של הכמות, לכן נשתמש בפעולת חיסור.", "math_expression": "-" },
            { "verbal_explanation": "אורך החתיכה שהוסרה הוא שני מטרים.", "math_expression": "2" },
            { "verbal_explanation": "נחסר את החתיכה שהוסרה מתוך האורך השלם המקורי כדי למצוא כמה נשאר.", "math_expression": "m - 2" }
        ],
        "final_answer": "m - 2"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "מורה חילקה חבילה המכילה 30 מדבקות באופן שווה בין \\( x \\) תלמידים. איזה ביטוי מתאר כמה מדבקות קיבל כל תלמיד?&rlm;",
        "options": ["30 / x", "x / 30", "30 - x", "30x"],
        "correctAnswer": 0,
        "hint": "את מה מחלקים? את המדבקות. לכן מספר המדבקות יופיע ראשון (או במונה השבר), ואחריו יבוא סימן החילוק במספר התלמידים.",
        "solution_steps": [
            { "verbal_explanation": "הכמות הכוללת שאותה אנו רוצים לחלק היא שלושים מדבקות.", "math_expression": "30" },
            { "verbal_explanation": "פעולת החלוקה השווה מתורגמת לסימן של חילוק או לקו שבר.", "math_expression": "\\div" },
            { "verbal_explanation": "אנו מחלקים את המדבקות למספר תלמידים המיוצג על ידי המשתנה הנתון.", "math_expression": "x" },
            { "verbal_explanation": "נרשום את הכמות השלמה מחולקת במשתנה כדי לקבל את החלק של כל תלמיד.", "math_expression": "30 \\div x" },
            { "verbal_explanation": "ניתן לכתוב זאת גם בעזרת קו שבר, שזו הדרך המקובלת יותר באלגברה.", "math_expression": "\\frac{30}{x}" }
        ],
        "final_answer": "30 / x"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "המחיר של עט הוא \\( a \\) שקלים. מחיר של קלמר גדול פי 3 ממחיר העט, ועוד 2 שקלים. איזה ביטוי מתאר את מחיר הקלמר?&rlm;",
        "options": ["3a + 2", "a + 5", "3(a + 2)", "2a + 3"],
        "correctAnswer": 0,
        "hint": "פרקו את המשפט: 'פי 3' אומר כפל. 'ועוד 2' אומר חיבור. עקבו אחר הסדר.",
        "solution_steps": [
            { "verbal_explanation": "נתחיל מהמחיר הבסיסי של העט המיוצג על ידי המשתנה.", "math_expression": "a" },
            { "verbal_explanation": "הביטוי 'גדול פי שלוש' משמעותו לכפול את מחיר העט בשלוש.", "math_expression": "3 \\times a = 3a" },
            { "verbal_explanation": "המשך המשפט 'ועוד שני שקלים' משמעותו להוסיף שתיים לתוצאת הכפל.", "math_expression": "+ 2" },
            { "verbal_explanation": "נחבר את הפעולות יחד כדי ליצור את הביטוי השלם המייצג את מחיר הקלמר.", "math_expression": "3a + 2" }
        ],
        "final_answer": "3a + 2"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "נתונים שלושה מספרים עוקבים (מספרים הבאים זה אחר זה, כמו 4, 5, 6). אם נסמן את המספר הראשון והקטן ביותר ב-\\( x \\), איזה ביטוי יתאר את הסכום של שלושת המספרים לאחר פישוט?&rlm;",
        "options": ["3x + 3", "3x", "x + 3", "3x + 2"],
        "correctAnswer": 0,
        "hint": "המספר הראשון הוא איקס. הבא אחריו הוא איקס פלוס אחד, והשלישי הוא איקס פלוס שתיים. חברו את כולם יחד.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המספר הראשון והקטן ביותר בעזרת המשתנה שניתן לנו.", "math_expression": "x" },
            { "verbal_explanation": "המספר העוקב לו גדול ממנו בדיוק באחד.", "math_expression": "x + 1" },
            { "verbal_explanation": "המספר השלישי גדול מהמספר השני באחד, ולכן הוא גדול מהראשון בשתיים.", "math_expression": "x + 2" },
            { "verbal_explanation": "נבנה ביטוי המחבר את שלושת המספרים הללו יחד לשם מציאת הסכום.", "math_expression": "x + (x + 1) + (x + 2)" },
            { "verbal_explanation": "נכנס איברים דומים: יש לנו שלושה איקסים, והמספרים הפנויים מסתכמים לשלוש.", "math_expression": "3x + 3" }
        ],
        "final_answer": "3x + 3"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "מהירות הנסיעה של מכונית היא \\( v \\) קילומטרים בשעה. המכונית נסעה באותה מהירות במשך 4 שעות רצופות. איזה ביטוי מתאר את המרחק הכולל שעברה המכונית?&rlm;",
        "options": ["4v", "v / 4", "v + 4", "4 / v"],
        "correctAnswer": 0,
        "hint": "הנוסחה למרחק היא מהירות כפול זמן. כפלו את המשתנה במספר השעות.",
        "solution_steps": [
            { "verbal_explanation": "המהירות של המכונית בכל שעה נתונה כמשתנה.", "math_expression": "v" },
            { "verbal_explanation": "הזמן הכולל שבו המכונית הייתה בנסיעה הוא ארבע שעות.", "math_expression": "4" },
            { "verbal_explanation": "כדי למצוא את המרחק שעברה המכונית, עלינו להכפיל את המהירות בזמן הנסיעה.", "math_expression": "\\times" },
            { "verbal_explanation": "נכתוב את הביטוי בצורתו האלגברית המקובלת, תחילה המספר ואז המשתנה ללא סימן הכפל.", "math_expression": "4v" }
        ],
        "final_answer": "4v"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "לנועה יש שטר של 100 שקלים. היא קנתה 5 כרטיסיות להצגה, כאשר מחירה של כל כרטיסייה הוא \\( y \\) שקלים. איזה ביטוי מתאר את העודף שנועה תקבל בחזרה?&rlm;",
        "options": ["100 - 5y", "5y - 100", "100 - y", "100 / 5y"],
        "correctAnswer": 0,
        "hint": "העודף הוא מה שנשאר אחרי שמחסרים את עלות הקנייה מהסכום שהבאנו לקופה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם כל את העלות של הקנייה כולה. חמש כרטיסיות כפול המחיר של כרטיסייה בודדת.", "math_expression": "5 \\times y = 5y" },
            { "verbal_explanation": "הסכום ההתחלתי שאיתו נועה ניגשה לקופה הוא מאה שקלים.", "math_expression": "100" },
            { "verbal_explanation": "כדי למצוא את העודף, נחסר מהסכום שהגישה לקופאי את עלות הקנייה שחישבנו.", "math_expression": "-" },
            { "verbal_explanation": "הביטוי הסופי מתאר בדיוק את תהליך קבלת העודף.", "math_expression": "100 - 5y" }
        ],
        "final_answer": "100 - 5y"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "גילה של מיכל הוא \\( x \\). אחיה הגדול, יואב, מבוגר ממנה ב-3 שנים. איזה ביטוי מתאר את סכום הגילים של שניהם יחד?&rlm;",
        "options": ["2x + 3", "x + 3", "3x", "x^2 + 3"],
        "correctAnswer": 0,
        "hint": "הביעו קודם את הגיל של יואב בעזרת x. לאחר מכן, חברו את הגיל שלו לגיל של מיכל.",
        "solution_steps": [
            { "verbal_explanation": "הגיל של מיכל מוגדר כמשתנה הבסיסי שלנו.", "math_expression": "x" },
            { "verbal_explanation": "האח מבוגר ממנה בשלוש שנים, לכן נוסיף שלוש לגיל של מיכל כדי להביע את גילו.", "math_expression": "x + 3" },
            { "verbal_explanation": "השאלה מבקשת את הסכום של שני הגילים. נחבר את הגיל של מיכל עם הגיל של האח.", "math_expression": "x + (x + 3)" },
            { "verbal_explanation": "נכנס איברים דומים (נחבר את המשתנים יחד) לקבלת הביטוי המפושט ביותר.", "math_expression": "2x + 3" }
        ],
        "final_answer": "2x + 3"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "מושג המשתנה",
        "question_text": "ההיקף של ריבוע שווה ל-\\( P \\). איזה ביטוי מתאר את האורך של צלע אחת בלבד של הריבוע הזה?&rlm;",
        "options": ["P / 4", "4P", "P - 4", "P / 2"],
        "correctAnswer": 0,
        "hint": "בריבוע יש 4 צלעות שוות שאורכן הכולל הוא ההיקף. מה עושים כדי למצוא אחת מהן?",
        "solution_steps": [
            { "verbal_explanation": "היקף של צורה הוא הסכום של כל הצלעות שלה מסביב.", "math_expression": "P" },
            { "verbal_explanation": "בריבוע, אנו יודעים שיש בדיוק ארבע צלעות שוות זו לזו באורכן.", "math_expression": "4" },
            { "verbal_explanation": "כדי למצוא את האורך של צלע אחת בודדת מתוך השלם, עלינו לחלק את ההיקף הכולל בארבע.", "math_expression": "\\div 4" },
            { "verbal_explanation": "נרשום זאת כביטוי אלגברי תקני בעזרת קו שבר.", "math_expression": "\\frac{P}{4}" }
        ],
        "final_answer": "P / 4"
    },

    // ==========================================
    // תת נושא 2: הצבה בביטויים אלגבריים (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "נתון הביטוי האלגברי: \\( 2x + 5 \\). חשבו את ערך הביטוי כאשר מציבים \\( x = 4 \\).&rlm;",
        "options": ["13", "11", "29", "8"],
        "correctAnswer": 0,
        "hint": "החליפו את האות x במספר 4. זכרו שבין המספר 2 לאות x מסתתר סימן כפל.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הביטוי המקורי. נזכור שכאשר מספר ומשתנה צמודים, מסתתר ביניהם סימן כפל.", "math_expression": "2 \\times x + 5" },
            { "verbal_explanation": "נבצע את פעולת ההצבה: נחליף את המשתנה במספר חמש כפי שניתן לנו.", "math_expression": "2 \\times 4 + 5" },
            { "verbal_explanation": "לפי חוקי סדר פעולות חשבון, פעולת הכפל קודמת לפעולת החיבור.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נוסיף לתוצאת הכפל את המספר חמש כדי לקבל את הפתרון הסופי.", "math_expression": "8 + 5 = 13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "חשבו את הערך של הביטוי \\( 20 - 3y \\) כאשר ידוע כי \\( y = 5 \\).&rlm;",
        "options": ["5", "85", "12", "2"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר 5 במקום האות y. בצעו קודם את הכפל ורק אחר כך את החיסור.",
        "solution_steps": [
            { "verbal_explanation": "נבצע את פעולת ההצבה בביטוי. נכתוב את המספר חמש במקום המשתנה, עם סימן הכפל לפניו.", "math_expression": "20 - 3 \\times 5" },
            { "verbal_explanation": "סדר הפעולות מחייב אותנו לפתור קודם כל את תרגיל הכפל.", "math_expression": "3 \\times 5 = 15" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן לאחר פתרון הכפל.", "math_expression": "20 - 15" },
            { "verbal_explanation": "נבצע את פעולת החיסור לקבלת הפתרון השלם.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "נתון הביטוי הבא הכולל שבר: \\( \\frac{12}{x} + 2 \\). מה תהיה התוצאה אם נציב \\( x = 3 \\)?&rlm;",
        "options": ["6", "8", "4", "10"],
        "correctAnswer": 0,
        "hint": "קו השבר הוא בעצם סימן חילוק. חלקו את המונה במכנה לפני שתחברו את המספר 2.",
        "solution_steps": [
            { "verbal_explanation": "נבצע הצבה של המספר שלוש במכנה השבר, היכן שנמצא המשתנה.", "math_expression": "\\frac{12}{3} + 2" },
            { "verbal_explanation": "קו שבר מתפקד כמו פעולת חילוק. חילוק קודם תמיד לחיבור.", "math_expression": "12 \\div 3 = 4" },
            { "verbal_explanation": "ניקח את התוצאה שקיבלנו מהשבר ונוסיף לה את המספר שתיים שממתין בצד.", "math_expression": "4 + 2" },
            { "verbal_explanation": "נבצע את החיבור להשלמת התרגיל.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "חשבו את ערך הביטוי עם הסוגריים \\( 4(a - 2) \\) עבור ההצבה \\( a = 7 \\).&rlm;",
        "options": ["20", "26", "12", "16"],
        "correctAnswer": 0,
        "hint": "הציבו את המספר במקום המשתנה, ופתרו קודם את מה שנמצא בתוך הסוגריים העגולים.",
        "solution_steps": [
            { "verbal_explanation": "נחליף את המשתנה שבתוך הסוגריים במספר שבע שניתן לנו.", "math_expression": "4 \\times (7 - 2)" },
            { "verbal_explanation": "חוקי הקדימות קובעים שיש לפתור קודם כל את מה שבתוך הסוגריים. נבצע את החיסור.", "math_expression": "7 - 2 = 5" },
            { "verbal_explanation": "נכתוב את התרגיל החדש ונבצע את הכפל שנותר.", "math_expression": "4 \\times 5" },
            { "verbal_explanation": "תוצאת ההכפלה היא הפתרון המבוקש.", "math_expression": "20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "נתון ביטוי המכיל חזקה: \\( x^2 + 3 \\). מה ערך הביטוי כאשר \\( x = 5 \\)?&rlm;",
        "options": ["28", "13", "34", "25"],
        "correctAnswer": 0,
        "hint": "משמעות החזקה השנייה היא לכפול את המספר בעצמו (לא בשתיים!). חשבו את החזקה ואז חברו.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר חמש במקום המשתנה שנמצא תחת החזקה.", "math_expression": "5^2 + 3" },
            { "verbal_explanation": "סדר פעולות חשבון מחייב לפתור חזקות לפני חיבור או חיסור. חמש בריבוע משמעו חמש כפול חמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "כעת נוסיף את המספר שלוש לתוצאת החזקה שחישבנו.", "math_expression": "25 + 3" },
            { "verbal_explanation": "נחבר ונקבל את התשובה המלאה.", "math_expression": "28" }
        ],
        "final_answer": "28"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "יש לנו ביטוי עם שני משתנים שונים: \\( 2x + 3y \\). הציבו \\( x = 4 \\) וכן \\( y = 2 \\) וחשבו את התוצאה.&rlm;",
        "options": ["14", "20", "12", "18"],
        "correctAnswer": 0,
        "hint": "הציבו בזהירות כל מספר במשתנה המתאים לו. זכרו לבצע את כל פעולות הכפל לפני פעולת החיבור.",
        "solution_steps": [
            { "verbal_explanation": "נבצע הצבה כפולה. נשים את המספר ארבע במקום המשתנה הראשון, ואת המספר שתיים במקום המשתנה השני.", "math_expression": "2 \\times 4 + 3 \\times 2" },
            { "verbal_explanation": "יש לנו תרגיל מעורב. נפתור במקביל את שתי פעולות הכפל שקודמות לחיבור.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נפתור את פעולת הכפל השנייה.", "math_expression": "3 \\times 2 = 6" },
            { "verbal_explanation": "כעת נחבר את שתי התוצאות שקיבלנו מהכפל.", "math_expression": "8 + 6 = 14" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "נתון הביטוי הבא: \\( \\frac{a + b}{2} \\). מה תהיה התוצאה אם נציב \\( a = 10 \\) וכן \\( b = 6 \\)?&rlm;",
        "options": ["8", "16", "13", "11"],
        "correctAnswer": 0,
        "hint": "בביטוי עם שבר, המונה (החלק העליון) פועל כאילו הוא בתוך סוגריים. חשבו את הסכום שלו לפני החילוק.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספרים במונה השבר במקומם של המשתנים המתאימים.", "math_expression": "\\frac{10 + 6}{2}" },
            { "verbal_explanation": "באופן מתמטי, קו שבר מתחת לביטוי שלם אומר שעלינו לפתור קודם את הביטוי שמעליו, כמו בסוגריים.", "math_expression": "10 + 6 = 16" },
            { "verbal_explanation": "נרשום את השבר לאחר פישוט המונה, ונבצע את פעולת החילוק שהשבר מייצג.", "math_expression": "\\frac{16}{2}" },
            { "verbal_explanation": "שש עשרה לחלק לשתיים שווה שמונה.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "חשבו את הערך של הביטוי \\( x^2 - 2x \\) כאשר ידוע כי מציבים בו \\( x = 3 \\).&rlm;",
        "options": ["3", "9", "6", "0"],
        "correctAnswer": 0,
        "hint": "אותו המשתנה מופיע פעמיים בביטוי. הציבו את המספר 3 בשני המקומות, ואז חשבו את החזקה, את הכפל ולבסוף את החיסור.",
        "solution_steps": [
            { "verbal_explanation": "המשתנה מופיע בשני מקומות שונים בביטוי. נחליף את שניהם במספר שלוש.", "math_expression": "3^2 - 2 \\times 3" },
            { "verbal_explanation": "לפי כללי סדר הפעולות, נחשב קודם כל את החזקה.", "math_expression": "3^2 = 9" },
            { "verbal_explanation": "לאחר מכן נחשב את פעולת הכפל שבצד ימין.", "math_expression": "2 \\times 3 = 6" },
            { "verbal_explanation": "נציב את התוצאות שקיבלנו לתרגיל חיסור ונפתור אותו.", "math_expression": "9 - 6 = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "נתון הביטוי: \\( 5m - m^2 \\). חשבו את התוצאה אם נציב במקום המשתנה את המספר \\( m = 2 \\).&rlm;",
        "options": ["6", "8", "10", "4"],
        "correctAnswer": 0,
        "hint": "שימו לב שהחזקה חלה רק על המשתנה האחרון, ולא על המספר 5 שלפניו.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר שתיים בכל מקום שבו מופיע המשתנה בביטוי.", "math_expression": "5 \\times 2 - 2^2" },
            { "verbal_explanation": "נפתור קודם את החזקה, כפי שנדרש בחשבון.", "math_expression": "2^2 = 4" },
            { "verbal_explanation": "נחשב את תרגיל הכפל שנמצא בתחילת הביטוי.", "math_expression": "5 \\times 2 = 10" },
            { "verbal_explanation": "נחסר את תוצאת החזקה מתוצאת הכפל לקבלת התשובה המדויקת.", "math_expression": "10 - 4 = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "הצבה",
        "question_text": "חשבו את התרגיל המורכב הבא: \\( 3(x + y) - 5 \\) כאשר מציבים את המספרים \\( x = 2 \\) ו- \\( y = 3 \\).&rlm;",
        "options": ["10", "15", "4", "16"],
        "correctAnswer": 0,
        "hint": "הציבו את שני המספרים בתוך הסוגריים. פתרו את מה שבסוגריים תחילה, ואז המשיכו לכפל ולחיסור.",
        "solution_steps": [
            { "verbal_explanation": "נבצע הצבה של שני המספרים הנתונים לתוך הסוגריים.", "math_expression": "3 \\times (2 + 3) - 5" },
            { "verbal_explanation": "סוגריים הם בעלי העדיפות הגבוהה ביותר. נחשב את החיבור שבתוכם.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "נכתוב את התרגיל עם התוצאה, ונבצע את פעולת הכפל שקודמת לחיסור.", "math_expression": "3 \\times 5 = 15" },
            { "verbal_explanation": "לסיום, נחסר את המספר חמש מתוצאת המכפלה.", "math_expression": "15 - 5 = 10" }
        ],
        "final_answer": "10"
    },

    // ==========================================
    // תת נושא 3: פישוט וכינוס איברים (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "פשטו את הביטוי האלגברי הבא על ידי כינוס של איברים דומים: \\( 4x + 5x \\). מהי התוצאה?&rlm;",
        "options": ["9x", "9", "20x", "x"],
        "correctAnswer": 0,
        "hint": "כאשר למספרים יש את אותו המשתנה, אפשר פשוט לחבר את המספרים עצמם (המקדמים) ולהשאיר את המשתנה כמו שהוא.",
        "solution_steps": [
            { "verbal_explanation": "המשימה שלנו היא לפשט את הביטוי על ידי חיבור איברים דומים.", "math_expression": "4x + 5x" },
            { "verbal_explanation": "איברים דומים הם כאלה שיש להם בדיוק את אותו המשתנה.", "math_expression": "x" },
            { "verbal_explanation": "כדי לכנס אותם יחד, אנו מחברים רק את המספרים שמופיעים לפניהם.", "math_expression": "4 + 5 = 9" },
            { "verbal_explanation": "נרשום את תוצאת החיבור ונצמיד אליה בחזרה את המשתנה המשותף ליצירת הביטוי המפושט.", "math_expression": "9x" }
        ],
        "final_answer": "9x"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "כנסו את האיברים הדומים בביטוי הבא: \\( 7y - 2y + y \\). מה יתקבל?&rlm;",
        "options": ["6y", "5y", "4y", "8y"],
        "correctAnswer": 0,
        "hint": "אל תשכחו שכאשר משתנה מופיע לבד (כמו בפלוס y בסוף), הכוונה היא לפעם אחת של המשתנה הזה.",
        "solution_steps": [
            { "verbal_explanation": "כל האיברים בביטוי מכילים את אותו המשתנה ולכן כולם איברים דומים שניתן לכנס.", "math_expression": "7y - 2y + y" },
            { "verbal_explanation": "נזכור שמשתנה שכתוב לבדו ללא מספר לפניו, בעצם שווה לפעמיים אחת של אותו משתנה.", "math_expression": "y = 1y" },
            { "verbal_explanation": "נבצע את פעולות החשבון על המקדמים המספריים משמאל לימין.", "math_expression": "7 - 2 + 1 = 6" },
            { "verbal_explanation": "נצרף את המשתנה אל התוצאה המספרית שקיבלנו.", "math_expression": "6y" }
        ],
        "final_answer": "6y"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "פשטו את הביטוי שמכיל גם משתנים וגם מספרים חופשיים: \\( 3a + 4 + 2a + 5 \\). מהו הביטוי הקצר ביותר שניתן לכתוב?&rlm;",
        "options": ["5a + 9", "14a", "a + 9", "7a + 7"],
        "correctAnswer": 0,
        "hint": "אפשר לחבר רק סוג לסוג. חברו את המשתנים בנפרד, ואת המספרים הרגילים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נזהה אילו איברים דומים קיימים בביטוי. נפריד בין המשתנים למספרים.", "math_expression": "3a , 2a \\quad | \\quad 4 , 5" },
            { "verbal_explanation": "נחבר את האיברים שמכילים את המשתנה יחד.", "math_expression": "3a + 2a = 5a" },
            { "verbal_explanation": "נחבר את המספרים החופשיים יחד בנפרד.", "math_expression": "4 + 5 = 9" },
            { "verbal_explanation": "נרשום את שתי התוצאות יחד כביטוי אלגברי אחד מסודר.", "math_expression": "5a + 9" }
        ],
        "final_answer": "5a + 9"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "מה התוצאה של כינוס האיברים בביטוי: \\( 10m - 3m - 7m \\)?&rlm;",
        "options": ["0", "m", "-m", "20m"],
        "correctAnswer": 0,
        "hint": "חשבו את התרגיל החשבוני הפשוט שנוצר מהמספרים בלבד. מה קורה כשמגיעים לאפס?",
        "solution_steps": [
            { "verbal_explanation": "כל האיברים בביטוי הם איברים דומים המכילים את אותו המשתנה בדיוק.", "math_expression": "10m - 3m - 7m" },
            { "verbal_explanation": "נחשב את ההפרש בין המקדמים משמאל לימין. עשר פחות שלוש שווה לשבע.", "math_expression": "10 - 3 = 7" },
            { "verbal_explanation": "כעת נחסר את השבע שנותר. שבע פחות שבע שווה לאפס.", "math_expression": "7 - 7 = 0" },
            { "verbal_explanation": "כאשר המקדם המספרי הוא אפס, המשתנה נעלם לחלוטין ואין צורך לכתוב אותו.", "math_expression": "0m = 0" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "פשטו את הביטוי המכיל שני משתנים שונים: \\( 8x + 2y - 3x + y \\). מה יתקבל?&rlm;",
        "options": ["5x + 3y", "11x + 3y", "8xy", "5x + 2y"],
        "correctAnswer": 0,
        "hint": "משתנים שונים אי אפשר לחבר יחד. אספו את קבוצת ה-x בנפרד, ואת קבוצת ה-y בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "יש לנו שני סוגים של משתנים בביטוי. נטפל בכל סוג משתנה בנפרד לחלוטין.", "math_expression": "x \\quad , \\quad y" },
            { "verbal_explanation": "נתחיל עם המשתנה הראשון ונכנס את האיברים שלו: שמונה פחות שלוש שווה חמש.", "math_expression": "8x - 3x = 5x" },
            { "verbal_explanation": "נעבור למשתנה השני. נזכור שהאות לבדה שווה לאחת. שתיים ועוד אחת שווה שלוש.", "math_expression": "2y + y = 3y" },
            { "verbal_explanation": "נכתוב את התוצאות של שני המשתנים כשני איברים נפרדים בביטוי הסופי.", "math_expression": "5x + 3y" }
        ],
        "final_answer": "5x + 3y"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "כנסו איברים דומים בביטוי הבא: \\( 5 + 2x + 3x - 5 \\). מהי התוצאה המפושטת ביותר?&rlm;",
        "options": ["5x", "5x + 10", "10x", "x"],
        "correctAnswer": 0,
        "hint": "שימו לב למספרים החופשיים. חמש פחות חמש יוצא אפס, אז הם פשוט נעלמים מהביטוי.",
        "solution_steps": [
            { "verbal_explanation": "נזהה ונפריד בין האיברים עם המשתנים למספרים החופשיים.", "math_expression": "2x , 3x \\quad | \\quad 5 , 5" },
            { "verbal_explanation": "נחבר את המשתנים: שתיים ועוד שלוש שווה לחמש.", "math_expression": "2x + 3x = 5x" },
            { "verbal_explanation": "נחשב את המספרים החופשיים: חמש פחות חמש שווה לאפס, ולכן הם מתבטלים לחלוטין.", "math_expression": "5 - 5 = 0" },
            { "verbal_explanation": "נישאר רק עם התוצאה של המשתנים, שזהו הביטוי המפושט ביותר.", "math_expression": "5x" }
        ],
        "final_answer": "5x"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "יש לפשט את הביטוי הכולל סוגריים: \\( 2(x + 3) + 4x \\). מה תהיה התשובה הנכונה לאחר חוק הפילוג וכינוס האיברים?&rlm;",
        "options": ["6x + 6", "6x + 3", "2x + 10", "8x + 6"],
        "correctAnswer": 0,
        "hint": "לפני שאפשר לכנס, חייבים 'לפתוח' את הסוגריים. כפלו את ה-2 בכל אחד מהאיברים בפנים.",
        "solution_steps": [
            { "verbal_explanation": "תחילה יש להיפטר מהסוגריים על ידי שימוש בחוק הפילוג. נכפול את המספר שתיים בכל איבר בפנים.", "math_expression": "2 \\times x + 2 \\times 3" },
            { "verbal_explanation": "נחשב את הכפל ונקבל שני איברים חדשים ופתוחים.", "math_expression": "2x + 6" },
            { "verbal_explanation": "נוסיף להם את האיבר המקורי שהמתין מחוץ לסוגריים.", "math_expression": "2x + 6 + 4x" },
            { "verbal_explanation": "נכנס את האיברים הדומים המכילים את המשתנה.", "math_expression": "2x + 4x = 6x" },
            { "verbal_explanation": "נרשום את התשובה הסופית יחד עם המספר החופשי.", "math_expression": "6x + 6" }
        ],
        "final_answer": "6x + 6"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "פשטו את הביטוי הבא: \\( 3(2a + 1) - 3 \\). מה יתקבל בסוף?&rlm;",
        "options": ["6a", "6a + 3", "2a", "5a"],
        "correctAnswer": 0,
        "hint": "פתחו סוגריים בזהירות (הכפילו את השלוש גם במשתנה וגם באחד). שימו לב מה קורה למספרים החופשיים בסוף.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בחוק הפילוג ונפתח את הסוגריים על ידי הכפלת המספר שלוש בשני האיברים הפנימיים.", "math_expression": "3 \\times 2a + 3 \\times 1" },
            { "verbal_explanation": "הכפל נותן לנו שישה מהמשתנה, ועוד שלוש רגיל.", "math_expression": "6a + 3" },
            { "verbal_explanation": "נכתוב את הביטוי כולו יחד עם המספר שמופיע אחרי הסוגריים.", "math_expression": "6a + 3 - 3" },
            { "verbal_explanation": "המספרים החופשיים מקזזים זה את זה לאפס. שלוש פחות שלוש שווה אפס.", "math_expression": "3 - 3 = 0" },
            { "verbal_explanation": "התוצאה הסופית מכילה רק את המשתנה.", "math_expression": "6a" }
        ],
        "final_answer": "6a"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "כנסו איברים בביטוי הכולל חזקות: \\( x^2 + 3x + 2x^2 - x \\). איזה ביטוי מתקבל?&rlm;",
        "options": ["3x^2 + 2x", "5x^3", "3x^2 + 4x", "x^2 + 2x"],
        "correctAnswer": 0,
        "hint": "משתנה רגיל ומשתנה בריבוע הם אינם איברים דומים! חברו חזקות בנפרד, ומשתנים רגילים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "חשוב לזכור שמשתנה רגיל ומשתנה בריבוע נחשבים כשני סוגים שונים לחלוטין של איברים, ולא ניתן לחברם.", "math_expression": "x^2 \\neq x" },
            { "verbal_explanation": "נקבץ את האיברים בעלי החזקה השנייה ונחבר את המקדמים שלהם (אחד ועוד שתיים).", "math_expression": "x^2 + 2x^2 = 3x^2" },
            { "verbal_explanation": "נקבץ את האיברים בעלי המשתנה הרגיל ונחשב אותם (שלוש פחות אחד).", "math_expression": "3x - x = 2x" },
            { "verbal_explanation": "נחבר את שתי הקבוצות יחד כדי ליצור את הביטוי הסופי המסודר.", "math_expression": "3x^2 + 2x" }
        ],
        "final_answer": "3x^2 + 2x"
    },
    {
        "topic": "algebraic_expressions_grade_7",
        "subTopic": "פישוט וכינוס איברים",
        "question_text": "פשטו את הביטוי הבא עד כמה שניתן: \\( 4(x + y) - 2x - 3y \\). מהי התשובה?&rlm;",
        "options": ["2x + y", "2x + 7y", "6x + y", "2x - y"],
        "correctAnswer": 0,
        "hint": "קודם פתיחת סוגריים לכל אחד מהמשתנים שבפנים. לאחר מכן, כנסו בנפרד את האיקסים ובנפרד את ה-y.",
        "solution_steps": [
            { "verbal_explanation": "נפתח את הסוגריים על ידי הכפלת שני המשתנים הפנימיים במספר ארבע שבחוץ.", "math_expression": "4 \\times x + 4 \\times y" },
            { "verbal_explanation": "נכתוב את הביטוי המלא והארוך לפני שלב הכינוס.", "math_expression": "4x + 4y - 2x - 3y" },
            { "verbal_explanation": "נכנס את האיברים מהסוג הראשון: ארבע פחות שתיים נותן שתיים.", "math_expression": "4x - 2x = 2x" },
            { "verbal_explanation": "נכנס את האיברים מהסוג השני: ארבע פחות שלוש נותן אחד.", "math_expression": "4y - 3y = y" },
            { "verbal_explanation": "נצרף את התוצאות לביטוי אחד קצר ומפושט.", "math_expression": "2x + y" }
        ],
        "final_answer": "2x + y"
    }
];