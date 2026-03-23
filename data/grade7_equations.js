const questionsDB = [
    // ==========================================
    // תת נושא 1: פתרון משוואות בנעלם אחד (10 שאלות)
    // ==========================================
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה ומצאו את ערכו של \\( x \\):<br>\\( x + 7 = 15 \\)&rlm;",
        "options": ["8", "22", "7", "15"],
        "correctAnswer": 0,
        "hint": "כדי לבודד את x, בצעו את הפעולה ההפוכה לחיבור על האגף השני.",
        "solution_steps": [
            { "verbal_explanation": "המטרה שלנו בפתרון משוואה היא להשאיר את הנעלם לבדו בצד אחד של המשוואה.", "math_expression": "x + 7 = 15" },
            { "verbal_explanation": "נבצע את הפעולה ההפוכה לחיבור שבע, והיא חיסור שבע משני אגפי המשוואה.", "math_expression": "- 7" },
            { "verbal_explanation": "נחסר שבע מהמספר חמש עשרה שבאגף הימני.", "math_expression": "15 - 7" },
            { "verbal_explanation": "נחשב את פעולת החיסור הפשוטה ונקבל את התוצאה.", "math_expression": "8" },
            { "verbal_explanation": "הפתרון של המשוואה הוא שמונה.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 3x = 18 \\)&rlm;",
        "options": ["6", "15", "21", "54"],
        "correctAnswer": 0,
        "hint": "כאשר מספר כתוב צמוד לאות, מסתתר ביניהם סימן כפל. מהי הפעולה ההפוכה לכפל?",
        "solution_steps": [
            { "verbal_explanation": "במשוואה זו יש פעולת כפל נסתרת בין המספר שלוש לנעלם.", "math_expression": "3 \\times x = 18" },
            { "verbal_explanation": "כדי לבודד את הנעלם, נבצע את הפעולה ההפוכה שהיא חילוק.", "math_expression": "\\div 3" },
            { "verbal_explanation": "נחלק את שני צידי המשוואה בשלוש.", "math_expression": "18 \\div 3" },
            { "verbal_explanation": "נחשב את התוצאה של פעולת החילוק מתוך לוח הכפל.", "math_expression": "6" },
            { "verbal_explanation": "מצאנו שערכו של הנעלם הוא שש.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 2x - 5 = 11 \\)&rlm;",
        "options": ["8", "3", "16", "6"],
        "correctAnswer": 0,
        "hint": "התחילו תמיד מביטול פעולות החיבור והחיסור לפני שאתם מבטלים את הכפל.",
        "solution_steps": [
            { "verbal_explanation": "נתונה משוואה המשלבת פעולות כפל וחיסור יחד.", "math_expression": "2x - 5 = 11" },
            { "verbal_explanation": "תחילה נבטל את פעולת החיסור על ידי הוספת חמש לשני צידי המשוואה.", "math_expression": "+ 5" },
            { "verbal_explanation": "נחבר חמש לאחת עשרה ונקבל משוואה מעודכנת ופשוטה יותר.", "math_expression": "2x = 16" },
            { "verbal_explanation": "כעת נחלק את שני האגפים במקדם של הנעלם, שהוא שתיים.", "math_expression": "16 \\div 2" },
            { "verbal_explanation": "נחשב את החילוק. שש עשרה לחלק לשתיים נותן לנו את התוצאה.", "math_expression": "8" },
            { "verbal_explanation": "הפתרון הסופי של המשוואה הוא שמונה.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "מצאו את ערכו של \\( x \\) במשוואה הבאה:<br>\\( \\frac{x}{4} = 5 \\)&rlm;",
        "options": ["20", "9", "1", "1.25"],
        "correctAnswer": 0,
        "hint": "קו שבר מייצג פעולת חילוק. בטלו אותו בעזרת כפל.",
        "solution_steps": [
            { "verbal_explanation": "במשוואה מופיע שבר, שמשמעותו חלוקה של הנעלם בארבע.", "math_expression": "\\frac{x}{4} = 5" },
            { "verbal_explanation": "כדי לבטל את החילוק ולבודד את המשתנה, נכפול את שני האגפים בארבע.", "math_expression": "\\times 4" },
            { "verbal_explanation": "באגף הימני נרשום את תרגיל הכפל החדש.", "math_expression": "5 \\times 4" },
            { "verbal_explanation": "נבצע את המכפלה כדי לגלות את ערך הנעלם.", "math_expression": "20" },
            { "verbal_explanation": "לכן, הנעלם שווה לעשרים.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 5x + 2 = 17 \\)&rlm;",
        "options": ["3", "15", "10", "4"],
        "correctAnswer": 0,
        "hint": "הסירו את המספר 2 מכל צד על ידי חיסור, ולאחר מכן חלקו ב-5.",
        "solution_steps": [
            { "verbal_explanation": "נבודד את האיבר שמכיל את המשתנה על ידי ביטול פעולת החיבור.", "math_expression": "5x + 2 = 17" },
            { "verbal_explanation": "נחסר שתיים משני האגפים של המשוואה.", "math_expression": "17 - 2" },
            { "verbal_explanation": "המשוואה החדשה תהיה חמישה איקס שווה לחמש עשרה.", "math_expression": "5x = 15" },
            { "verbal_explanation": "כדי לגלות איקס בודד, נחלק את המשוואה במקדם שלו, שהוא חמש.", "math_expression": "15 \\div 5" },
            { "verbal_explanation": "תוצאת החילוק היא שלוש.", "math_expression": "3" },
            { "verbal_explanation": "הערך של הנעלם הוא שלוש.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 10 - x = 4 \\)&rlm;",
        "options": ["6", "14", "-6", "40"],
        "correctAnswer": 0,
        "hint": "שאלו את עצמכם: איזה מספר יש להחסיר מעשר כדי לקבל ארבע?",
        "solution_steps": [
            { "verbal_explanation": "במשוואה זו הנעלם מופיע עם סימן חיסור לפניו (הוא המחוסר בתרגיל).", "math_expression": "10 - x = 4" },
            { "verbal_explanation": "נוכל לחשב ישירות: עשר פחות התוצאה ייתן לנו את הנעלם.", "math_expression": "10 - 4" },
            { "verbal_explanation": "נחשב את תרגיל החיסור הפשוט.", "math_expression": "6" },
            { "verbal_explanation": "נוודא את התשובה: עשר פחות שש אכן שווה לארבע.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "מצאו את הנעלם במשוואה:<br>\\( 4x - 6 = 18 \\)&rlm;",
        "options": ["6", "24", "3", "8"],
        "correctAnswer": 0,
        "hint": "הוסיפו 6 לשני הצדדים של המשוואה כדי להעלים את המינוס 6.",
        "solution_steps": [
            { "verbal_explanation": "נתחיל בבידוד איבר הכפל. עלינו להעלים את החיסור של השש.", "math_expression": "4x - 6 = 18" },
            { "verbal_explanation": "נוסיף שש לשני אגפי המשוואה.", "math_expression": "18 + 6" },
            { "verbal_explanation": "נחשב את סכום המספרים באגף ימין.", "math_expression": "24" },
            { "verbal_explanation": "הגענו למשוואה פשוטה: ארבעה איקס שווים לעשרים וארבע.", "math_expression": "4x = 24" },
            { "verbal_explanation": "נחלק בארבע כדי למצוא את ערכו של איקס יחיד.", "math_expression": "24 \\div 4" },
            { "verbal_explanation": "הפתרון הוא שש.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה המכילה שבר:<br>\\( \\frac{2x}{3} = 6 \\)&rlm;",
        "options": ["9", "18", "4", "36"],
        "correctAnswer": 0,
        "hint": "התחילו בביטול המכנה על ידי כפל כל המשוואה ב-3. לאחר מכן, חלקו את התוצאה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "תחילה נבטל את המכנה של השבר על ידי הכפלת שני האגפים במספר שלוש.", "math_expression": "\\times 3" },
            { "verbal_explanation": "באגף הימני נחשב את הכפל של שש בשלוש.", "math_expression": "6 \\times 3 = 18" },
            { "verbal_explanation": "נקבל משוואה שבה נעלם המכנה: שני איקס שווים לשמונה עשרה.", "math_expression": "2x = 18" },
            { "verbal_explanation": "כעת נחלק את המשוואה כולה בשתיים כדי לבודד את המשתנה.", "math_expression": "18 \\div 2" },
            { "verbal_explanation": "נחשב את תוצאת החילוק ונקבל תשע.", "math_expression": "9" },
            { "verbal_explanation": "הנעלם שווה לתשע.", "math_expression": "x = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 7x + 1 = 22 \\)&rlm;",
        "options": ["3", "21", "4", "2"],
        "correctAnswer": 0,
        "hint": "הפחיתו 1 משני הצדדים, ואז חלקו ב-7.",
        "solution_steps": [
            { "verbal_explanation": "נחסר אחד משני צידי המשוואה כדי להעביר את המספרים החופשיים לאגף אחד.", "math_expression": "22 - 1" },
            { "verbal_explanation": "נחשב את תוצאת החיסור.", "math_expression": "21" },
            { "verbal_explanation": "המשוואה שלנו היא כעת שבעה איקס שווה עשרים ואחת.", "math_expression": "7x = 21" },
            { "verbal_explanation": "נחלק בשבע את שני האגפים.", "math_expression": "21 \\div 7" },
            { "verbal_explanation": "תוצאת החילוק היא שלוש, וזהו הפתרון.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "פתרון משוואות בנעלם אחד",
        "question_text": "מצאו את הנעלם במשוואה:<br>\\( 12 - 2x = 4 \\)&rlm;",
        "options": ["4", "8", "6", "16"],
        "correctAnswer": 0,
        "hint": "אתם יכולים להעביר את 2x לצד ימין ואת ה-4 לצד שמאל, או לחשב כמה צריך להחסיר מ-12 כדי לקבל 4.",
        "solution_steps": [
            { "verbal_explanation": "נחשוב על האיבר שני איקס כיחידה אחת. מה עלינו לחסר משנים עשר כדי לקבל ארבע?", "math_expression": "12 - 4 = 8" },
            { "verbal_explanation": "מכאן אנו מבינים שהאיבר שני איקס כולו שווה לשמונה.", "math_expression": "2x = 8" },
            { "verbal_explanation": "כדי למצוא את איקס בודד, נחלק את המשוואה בשתיים.", "math_expression": "8 \\div 2" },
            { "verbal_explanation": "תוצאת החילוק היא ארבע.", "math_expression": "4" },
            { "verbal_explanation": "הפתרון למשוואה הוא ארבע.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },

    // ==========================================
    // תת נושא 2: משוואות עם סוגריים (10 שאלות)
    // ==========================================
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה הבאה הכוללת סוגריים:<br>\\( 2(x + 3) = 14 \\)&rlm;",
        "options": ["4", "7", "1", "10"],
        "correctAnswer": 0,
        "hint": "תוכלו לפתוח את הסוגריים לפי חוק הפילוג, או פשוט לחלק מראש את כל המשוואה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "המספר שתיים כופל את כל הביטוי שבתוך הסוגריים.", "math_expression": "2 \\times (x + 3) = 14" },
            { "verbal_explanation": "נחלק את המשוואה כולה בשתיים כדי להעלים את המכפיל שמחוץ לסוגריים.", "math_expression": "14 \\div 2" },
            { "verbal_explanation": "הביטוי שבתוך הסוגריים נשאר לבדו ושווה לשבע.", "math_expression": "x + 3 = 7" },
            { "verbal_explanation": "נחסר שלוש מאגף ימין כדי לבודד את המשתנה.", "math_expression": "7 - 3" },
            { "verbal_explanation": "התוצאה של פעולת החיסור היא ארבע, וזהו הפתרון.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה:<br>\\( 3(x - 2) = 15 \\)&rlm;",
        "options": ["7", "5", "3", "17"],
        "correctAnswer": 0,
        "hint": "כמו קודם, חלקו את המשוואה ב-3. לאחר מכן תוכלו להוסיף 2 למספר שקיבלתם.",
        "solution_steps": [
            { "verbal_explanation": "כדי 'לשחרר' את האיברים מתוך הסוגריים, נחלק את כל המשוואה במקדם שלוש.", "math_expression": "15 \\div 3" },
            { "verbal_explanation": "נרשום את המשוואה החדשה, ללא הסוגריים, המשווה לחמש.", "math_expression": "x - 2 = 5" },
            { "verbal_explanation": "כדי לבודד את איקס, נבטל את החיסור על ידי הוספת שתיים לשני הצדדים.", "math_expression": "5 + 2" },
            { "verbal_explanation": "נחשב ונגלה שהנעלם שווה לשבע.", "math_expression": "x = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "מצאו את ערכו של \\( x \\) במשוואה:<br>\\( 4(2x + 1) = 36 \\)&rlm;",
        "options": ["4", "9", "8", "5"],
        "correctAnswer": 0,
        "hint": "התחילו בחלוקת שני האגפים ב-4, ומשם פתרו משוואה רגילה בשני שלבים.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המשוואה בארבע כדי לבטל את הכופל החיצוני.", "math_expression": "36 \\div 4" },
            { "verbal_explanation": "הביטוי שבתוך הסוגריים שווה לתשע.", "math_expression": "2x + 1 = 9" },
            { "verbal_explanation": "נחסר אחד משני האגפים כדי לבודד את איבר המשתנה.", "math_expression": "9 - 1 = 8" },
            { "verbal_explanation": "קיבלנו משוואה פשוטה: שני איקס שווים לשמונה.", "math_expression": "2x = 8" },
            { "verbal_explanation": "נחלק בשתיים ונמצא שהנעלם שווה לארבע.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה הבאה תוך פתיחת סוגריים:<br>\\( 5(x - 4) = 10 \\)&rlm;",
        "options": ["6", "2", "14", "10"],
        "correctAnswer": 0,
        "hint": "ניתן לפתור על ידי חלוקה ב-5 תחילה, או לפתוח סוגריים (להכפיל ב-5 גם את איקס וגם את הארבע).",
        "solution_steps": [
            { "verbal_explanation": "נבחר בשיטת החלוקה. נחלק את כל המשוואה בחמש.", "math_expression": "10 \\div 5" },
            { "verbal_explanation": "נקבל שהתוכן הפנימי של הסוגריים שווה לשתיים.", "math_expression": "x - 4 = 2" },
            { "verbal_explanation": "כדי למצוא את איקס, נוסיף ארבע לאגף הימני.", "math_expression": "2 + 4" },
            { "verbal_explanation": "החישוב מראה לנו שאיקס שווה לשש.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 2(3x - 1) = 16 \\)&rlm;",
        "options": ["3", "9", "5", "8"],
        "correctAnswer": 0,
        "hint": "חלקו ב-2, ואז הוסיפו 1, ולסיום חלקו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המשוואה בשתיים כדי להעלים את הסוגריים.", "math_expression": "16 \\div 2" },
            { "verbal_explanation": "נקבל משוואה ללא סוגריים ששווה לשמונה.", "math_expression": "3x - 1 = 8" },
            { "verbal_explanation": "נוסיף אחד לשני צידי המשוואה.", "math_expression": "8 + 1 = 9" },
            { "verbal_explanation": "נחלק את המשוואה החדשה בשלוש כדי לבודד את איקס.", "math_expression": "3x = 9 \\Rightarrow 9 \\div 3" },
            { "verbal_explanation": "נמצא שהנעלם שווה לשלוש.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "מצאו את \\( x \\) במשוואה הבאה:<br>\\( 6(x + 2) = 42 \\)&rlm;",
        "options": ["5", "7", "9", "30"],
        "correctAnswer": 0,
        "hint": "מה כפול 6 שווה ל-42? זה הערך של הביטוי כולו בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בלוח הכפל כדי להבין שמה שבתוך הסוגריים חייב להיות שווה לשבע, כי שש כפול שבע שווה לארבעים ושתיים.", "math_expression": "42 \\div 6 = 7" },
            { "verbal_explanation": "נרשום את המשוואה הפנימית בלבד.", "math_expression": "x + 2 = 7" },
            { "verbal_explanation": "נחסר שתיים מאגף ימין למציאת המשתנה.", "math_expression": "7 - 2" },
            { "verbal_explanation": "נקבל שאיקס שווה לחמש.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 3(4 - x) = 6 \\)&rlm;",
        "options": ["2", "6", "1", "4"],
        "correctAnswer": 0,
        "hint": "חלקו ב-3 תחילה. איזה מספר תורידו מ-4 כדי לקבל את התוצאה?",
        "solution_steps": [
            { "verbal_explanation": "נחלק את שני צידי המשוואה בשלוש.", "math_expression": "6 \\div 3 = 2" },
            { "verbal_explanation": "הביטוי הפנימי נשאר שווה לשתיים.", "math_expression": "4 - x = 2" },
            { "verbal_explanation": "כדי למצוא איזה מספר הורדנו מארבע, נחסר מהארבע את התוצאה.", "math_expression": "4 - 2" },
            { "verbal_explanation": "התוצאה היא שתיים, ולכן איקס שווה שתיים.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה:<br>\\( 10(x - 2) = 50 \\)&rlm;",
        "options": ["7", "5", "3", "52"],
        "correctAnswer": 0,
        "hint": "חלקו את שני האגפים ב-10, ואז הוסיפו 2.",
        "solution_steps": [
            { "verbal_explanation": "נבטל את המכפיל שמחוץ לסוגריים על ידי חלוקת חמישים בעשר.", "math_expression": "50 \\div 10" },
            { "verbal_explanation": "הביטוי שבתוך הסוגריים נשאר לבדו ומושווה לחמש.", "math_expression": "x - 2 = 5" },
            { "verbal_explanation": "נוסיף שתיים לשני הצדדים כדי להשאיר את איקס מבודד.", "math_expression": "5 + 2" },
            { "verbal_explanation": "נחשב ונגלה שהנעלם הוא שבע.", "math_expression": "x = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "מצאו את הנעלם במשוואה:<br>\\( 7(x + 1) = 28 \\)&rlm;",
        "options": ["3", "4", "21", "5"],
        "correctAnswer": 0,
        "hint": "פתחו סוגריים או חלקו ב-7. איזו דרך קלה לכם יותר?",
        "solution_steps": [
            { "verbal_explanation": "הפעם נפתור בעזרת פתיחת סוגריים. נכפול כל איבר בפנים בשבע.", "math_expression": "7 \\times x + 7 \\times 1" },
            { "verbal_explanation": "נרשום את המשוואה החדשה והפתוחה לחלוטין.", "math_expression": "7x + 7 = 28" },
            { "verbal_explanation": "נחסר שבע משני הצדדים של המשוואה.", "math_expression": "28 - 7 = 21" },
            { "verbal_explanation": "נקבל שבעה איקס שווה עשרים ואחת.", "math_expression": "7x = 21" },
            { "verbal_explanation": "נחלק בשבע לקבלת הפתרון הסופי.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "משוואות עם סוגריים",
        "question_text": "פתרו את המשוואה הבאה:<br>\\( 4(5 - x) = 12 \\)&rlm;",
        "options": ["2", "8", "3", "1"],
        "correctAnswer": 0,
        "hint": "חלקו את 12 ב-4, וחשבו כמה צריך לחסר מ-5 כדי לקבל את מה שיצא לכם.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המשוואה בארבע כדי לבטל את הכפל החיצוני.", "math_expression": "12 \\div 4 = 3" },
            { "verbal_explanation": "הסוגריים נותרו לבד ומשווים לשלוש.", "math_expression": "5 - x = 3" },
            { "verbal_explanation": "אנו צריכים לגלות איזה מספר נחסר מחמש כדי לקבל שלוש. נחסר שלוש מחמש.", "math_expression": "5 - 3 = 2" },
            { "verbal_explanation": "התשובה היא שתיים.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },

    // ==========================================
    // תת נושא 3: בניית משוואה לבעיה (10 שאלות)
    // ==========================================
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "דני חשב על מספר מסוים וסימן אותו באות \\( x \\). הוא כפל את המספר שלו ב-3, והוסיף לתוצאה 4. בסוף החשבון הוא קיבל 19. איזו משוואה מתוך הבאות מתארת נכון את הסיפור של דני?&rlm;",
        "options": ["3x + 4 = 19", "3 + 4x = 19", "3(x + 4) = 19", "4x + 3 = 19"],
        "correctAnswer": 0,
        "hint": "עקבו אחרי הפעולות בסדר שבו דני ביצע אותן: קודם כפל ב-3, ואז חיבור של 4.",
        "solution_steps": [
            { "verbal_explanation": "הנעלם שלנו (המספר שדני חשב עליו) מסומן באות איקס.", "math_expression": "x" },
            { "verbal_explanation": "הפעולה הראשונה שדני ביצע היא להכפיל את המספר בשלוש.", "math_expression": "3 \\times x = 3x" },
            { "verbal_explanation": "לאחר מכן הוא הוסיף לתוצאה ארבע. כלומר, פעולת חיבור.", "math_expression": "3x + 4" },
            { "verbal_explanation": "בסיום התהליך התוצאה שווה לתשע עשרה. לכן נציב סימן שוויון ואת התוצאה.", "math_expression": "3x + 4 = 19" },
            { "verbal_explanation": "זוהי המשוואה הנכונה שבנינו לפי סיפור הבעיה.", "math_expression": "3x + 4 = 19" }
        ],
        "final_answer": "3x + 4 = 19"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "בסל פירות יש תפוחים ותפוזים. כמות התפוחים גדולה פי 4 מכמות התפוזים. יחד יש בסל 25 פירות. אם נסמן את כמות התפוזים ב-\\( x \\), איזה תרגיל מתאר את המצב?&rlm;",
        "options": ["x + 4x = 25", "4 + x = 25", "4x = 25", "x * x = 25"],
        "correctAnswer": 0,
        "hint": "התפוזים הם x. התפוחים הם פי 4, אז הם 4x. חברו את שני הסוגים יחד והשוו ל-25.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הכמות ההתחלתית והקטנה יותר, כמות התפוזים, כנעלם.", "math_expression": "x" },
            { "verbal_explanation": "כמות התפוחים גדולה פי ארבעה, לכן נרשום אותה כמכפלה של המשתנה בארבע.", "math_expression": "4x" },
            { "verbal_explanation": "בסל ישנם גם תפוחים וגם תפוזים יחד, אז עלינו לחבר את הכמויות של שניהם.", "math_expression": "x + 4x" },
            { "verbal_explanation": "הסכום הכולל של הפירות שווה לעשרים וחמישה.", "math_expression": "x + 4x = 25" }
        ],
        "final_answer": "x + 4x = 25"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "גיל האב היום גדול ב-30 שנים מגיל בנו הקטן. סכום הגילים של שניהם יחד הוא 40. איזו משוואה נבנה כדי למצוא את גיל הבן (אם נסמן את גיל הבן ב-\\( x \\))?&rlm;",
        "options": ["x + (x + 30) = 40", "x + 30 = 40", "30x = 40", "x(x + 30) = 40"],
        "correctAnswer": 0,
        "hint": "גיל הבן הוא x. גיל האב הוא אותו x פלוס תוספת של 30 שנים. הסכום של שניהם מחובר יחד שווה ל-40.",
        "solution_steps": [
            { "verbal_explanation": "גילו של הבן מיוצג על ידי הנעלם הקצר ביותר.", "math_expression": "x" },
            { "verbal_explanation": "האב מבוגר בשלושים שנים. גילו מיוצג על ידי חיבור הגיל של הבן והתוספת.", "math_expression": "x + 30" },
            { "verbal_explanation": "נחבר את הגיל של הבן עם הגיל של האב כדי לבנות את הסכום, ונשתמש בסוגריים לסדר ולהפרדה.", "math_expression": "x + (x + 30)" },
            { "verbal_explanation": "הסכום הכולל נתון לנו כשווה לארבעים. נשלים את המשוואה.", "math_expression": "x + (x + 30) = 40" }
        ],
        "final_answer": "x + (x + 30) = 40"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "לרון היו 50 שקלים בארנק לפני שנכנס לחנות. הוא קנה 3 מחברות זהות במחיר של \\( x \\) שקלים כל אחת. הקופאי החזיר לו 14 שקלים עודף. איזו משוואה תעזור לנו למצוא את מחיר המחברת?&rlm;",
        "options": ["50 - 3x = 14", "50 + 3x = 14", "3x - 50 = 14", "50 - x = 14"],
        "correctAnswer": 0,
        "hint": "מתוך הסכום ההתחלתי שרון הביא, החסירו את העלות של 3 המחברות. מה שנשאר הוא העודף.",
        "solution_steps": [
            { "verbal_explanation": "רון התחיל עם סכום של חמישים שקלים בכיסו.", "math_expression": "50" },
            { "verbal_explanation": "עלות של מחברת בודדת היא איקס. עלות של שלוש מחברות היא שלוש כפול איקס.", "math_expression": "3x" },
            { "verbal_explanation": "נקטין את הכסף שהיה לו בעלות של המחברות שקנה על ידי פעולת חיסור.", "math_expression": "50 - 3x" },
            { "verbal_explanation": "העודף שנשאר שווה לארבע עשרה, לכן נשווה את הביטוי לארבע עשרה.", "math_expression": "50 - 3x = 14" }
        ],
        "final_answer": "50 - 3x = 14"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "ישנם 3 אחים. ההפרש בין כל אח לאח הבא אחריו הוא בדיוק שנתיים (כלומר כל אח גדול מהשני בשנתיים). סכום הגילים שלהם הוא 24. אם נסמן את גיל האח הצעיר ביותר ב-\\( x \\), איזו משוואה מתארת את הסכום הזה?&rlm;",
        "options": ["x + (x + 2) + (x + 4) = 24", "3x + 2 = 24", "x + (x + 1) + (x + 2) = 24", "x + 2x + 4x = 24"],
        "correctAnswer": 0,
        "hint": "האח הצעיר הוא x. האמצעי גדול ממנו בשנתיים. הבכור גדול מהאמצעי בעוד שנתיים (ולכן גדול מהצעיר ב-4).",
        "solution_steps": [
            { "verbal_explanation": "גילו של האח הקטן ביותר מיוצג בעזרת איקס.", "math_expression": "x" },
            { "verbal_explanation": "האח האמצעי מבוגר בשנתיים, ולכן גילו הוא איקס ועוד שתיים.", "math_expression": "x + 2" },
            { "verbal_explanation": "האח הגדול מבוגר מהאמצעי בעוד שנתיים, לכן גילו הוא איקס ועוד ארבע.", "math_expression": "x + 4" },
            { "verbal_explanation": "נחבר את שלושת הגילים הללו יחד בשורה אחת ארוכה בסוגריים.", "math_expression": "x + (x + 2) + (x + 4)" },
            { "verbal_explanation": "סכום הגילים הכולל של כולם שווה לעשרים וארבע.", "math_expression": "x + (x + 2) + (x + 4) = 24" }
        ],
        "final_answer": "x + (x + 2) + (x + 4) = 24"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "היקף של מלבן הוא 30 סנטימטרים. האורך של המלבן גדול ב-3 סנטימטרים מהרוחב שלו. אם נסמן את הרוחב של המלבן ב-\\( x \\), איזו משוואה תתאר נכון את היקף המלבן הזה?&rlm;",
        "options": ["2x + 2(x + 3) = 30", "x + (x + 3) = 30", "2x + 3 = 30", "x(x + 3) = 30"],
        "correctAnswer": 0,
        "hint": "בהיקף מלבן מחברים פעמיים את הרוחב ופעמיים את האורך המורחב.",
        "solution_steps": [
            { "verbal_explanation": "רוחב המלבן מוגדר בתור המשתנה שלנו.", "math_expression": "x" },
            { "verbal_explanation": "האורך גדול בשלוש מהרוחב, ולכן הוא שווה לאיקס ועוד שלוש.", "math_expression": "x + 3" },
            { "verbal_explanation": "היקף של מלבן מורכב מפעמיים הרוחב ועוד פעמיים האורך.", "math_expression": "2 \\times x + 2 \\times (x + 3)" },
            { "verbal_explanation": "נשווה את הביטוי השלם שבנינו להיקף הנתון, שהוא שלושים.", "math_expression": "2x + 2(x + 3) = 30" }
        ],
        "final_answer": "2x + 2(x + 3) = 30"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "מורה חילקה 40 סוכריות מתוך שקית, באופן שווה לחלוטין למספר לא ידוע של ילדים שנסמן ב-\\( x \\). התברר שכל ילד קיבל בדיוק 8 סוכריות. איזו משוואה מתארת את פעולת החלוקה הזו?&rlm;",
        "options": ["40 / x = 8", "x / 40 = 8", "40 - x = 8", "40x = 8"],
        "correctAnswer": 0,
        "hint": "חילוק של הכמות הכוללת במספר הילדים נותן את הכמות שכל ילד קיבל.",
        "solution_steps": [
            { "verbal_explanation": "הכמות ההתחלתית והשלמה של הסוכריות בקופסה היא ארבעים.", "math_expression": "40" },
            { "verbal_explanation": "המורה ביצעה פעולת חילוק לכל הכמות הזו בין קבוצה של איקס ילדים.", "math_expression": "40 \\div x" },
            { "verbal_explanation": "החלק או המנה שכל ילד קיבל לידיו שווה לשמונה.", "math_expression": "8" },
            { "verbal_explanation": "נרכיב מהנתונים את משוואת החלוקה השלמה.", "math_expression": "40 \\div x = 8" }
        ],
        "final_answer": "40 / x = 8"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "חשבתי על מספר מסוים וקראתי לו \\( x \\). קודם כל הורדתי ממנו 2. לאחר מכן, כפלתי את התוצאה שקיבלתי ב-5. התשובה הסופית שלי הייתה 30. איזו משוואה מציגה בדיוק את הפעולות שעשיתי?&rlm;",
        "options": ["5(x - 2) = 30", "5x - 2 = 30", "x - 2 * 5 = 30", "2(x - 5) = 30"],
        "correctAnswer": 0,
        "hint": "מכיוון שכפלו את *התוצאה* של ההפחתה, אתם חייבים להשתמש בסוגריים מסביב לפעולת ההפחתה.",
        "solution_steps": [
            { "verbal_explanation": "המספר הראשוני שחשבתי עליו מיוצג באות איקס.", "math_expression": "x" },
            { "verbal_explanation": "הפעולה הראשונה הייתה להוריד שתיים. מכיוון שהפעולה הבאה מתייחסת לכל הביטוי הזה כתוצאה, נכניס אותו לסוגריים.", "math_expression": "(x - 2)" },
            { "verbal_explanation": "את כל התוכן של הסוגריים הכפלתי במספר חמש.", "math_expression": "5 \\times (x - 2)" },
            { "verbal_explanation": "לבסוף נשווה את הביטוי למספר שלושים, כפי שמופיע בחידה.", "math_expression": "5(x - 2) = 30" }
        ],
        "final_answer": "5(x - 2) = 30"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "אמא קנתה 2 חולצות זהות שמחיר כל אחת מהן הוא \\( x \\) שקלים. בנוסף, היא קנתה זוג מכנסיים במחיר קבוע וידוע של 100 שקלים. על כל הקנייה הזו יחד היא שילמה בדיוק 250 שקלים. איזו משוואה מתארת את הקנייה של אמא?&rlm;",
        "options": ["2x + 100 = 250", "2(x + 100) = 250", "100x + 2 = 250", "x + 200 = 250"],
        "correctAnswer": 0,
        "hint": "שתי חולצות מיוצגות כ-2x. חברו אליהן את מחיר המכנסיים החד-פעמי.",
        "solution_steps": [
            { "verbal_explanation": "המחיר של חולצה בודדת הוא איקס. קנייה של שתי חולצות זהות תעלה פעמיים איקס.", "math_expression": "2x" },
            { "verbal_explanation": "בנוסף לחולצות, הצטרף פריט אחד נוסף שעלותו מאה שקלים.", "math_expression": "100" },
            { "verbal_explanation": "נחבר את כל עלויות הקנייה כדי ליצור את ביטוי ההוצאה הכולל.", "math_expression": "2x + 100" },
            { "verbal_explanation": "התשלום הסופי עמד על מאתיים וחמישים שקלים. נשווה את הביטוי אליו.", "math_expression": "2x + 100 = 250" }
        ],
        "final_answer": "2x + 100 = 250"
    },
    {
        "topic": "equations_word_problems_grade_7",
        "subTopic": "בניית משוואה לבעיה",
        "question_text": "באוטובוס היו מספר נוסעים לא ידוע שנסמן ב-\\( x \\). כשהגיע האוטובוס לתחנה, ירדו ממנו 5 נוסעים, ועלו אליו 8 נוסעים חדשים. לאחר שהדלתות נסגרו, ספרו ויש באוטובוס 30 נוסעים. איזו משוואה מתאימה לסיפור?&rlm;",
        "options": ["x - 5 + 8 = 30", "x + 5 - 8 = 30", "x - 5 = 30", "30 - 5 + 8 = x"],
        "correctAnswer": 0,
        "hint": "התחילו מכמות הנוסעים המקורית, החסירו את מי שירד והוסיפו את מי שעלה, על פי סדר ההתרחשות.",
        "solution_steps": [
            { "verbal_explanation": "כמות הנוסעים שהייתה באוטובוס בתחילת הסיפור היא המשתנה שלנו.", "math_expression": "x" },
            { "verbal_explanation": "חמישה אנשים ירדו מהאוטובוס, ולכן כמות האנשים הצטמצמה ונשתמש בחיסור.", "math_expression": "x - 5" },
            { "verbal_explanation": "שמונה אנשים עלו לאוטובוס, ולכן כמות האנשים גדלה ונוסיף אותם בחיבור.", "math_expression": "x - 5 + 8" },
            { "verbal_explanation": "הספירה הנוכחית של הנוסעים מראה שלושים אנשים. נשלים את המשוואה.", "math_expression": "x - 5 + 8 = 30" }
        ],
        "final_answer": "x - 5 + 8 = 30"
    }
];