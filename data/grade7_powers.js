const questionsDB = [
    // ==========================================
    // תת נושא 1: מושג החזקה (10 שאלות)
    // ==========================================
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "כיצד נרשום את תרגיל הכפל הבא בעזרת חזקה? \\( 4 \\times 4 \\times 4 \\)&rlm;",
        "options": ["4³", "3⁴", "12", "4 × 3"],
        "correctAnswer": 0,
        "hint": "חזקה היא דרך קצרה לכתוב כפל של אותו מספר בעצמו כמה פעמים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את המספר שמוכפל בעצמו. מספר זה יהיה המספר הגדול (הבסיס).", "math_expression": "4" },
            { "verbal_explanation": "נספור כמה פעמים המספר מופיע בתרגיל הכפל. הוא מופיע שלוש פעמים.", "math_expression": "3" },
            { "verbal_explanation": "נרשום את המספר שלוש למעלה בקטן, כדי להראות שארבע מוכפל בעצמו שלוש פעמים.", "math_expression": "4^{3}" }
        ],
        "final_answer": "4³"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "מה המשמעות של הביטוי החשבוני \\( 6^{2} \\)?&rlm;",
        "options": ["6 × 6", "6 + 6", "6 × 2", "2 × 2 × 2 × 2 × 2 × 2"],
        "correctAnswer": 0,
        "hint": "המספר למטה אומר 'מי מוכפל', והמספר למעלה אומר 'כמה פעמים'.",
        "solution_steps": [
            { "verbal_explanation": "המספר למטה הוא שש. זהו המספר שעומד להיות מוכפל.", "math_expression": "6" },
            { "verbal_explanation": "המספר למעלה בקטן הוא שתיים. זה אומר שהמספר שש צריך להופיע פעמיים בתרגיל הכפל.", "math_expression": "2" },
            { "verbal_explanation": "לכן, נכתוב את המספר שש פעמיים וביניהם נשים סימן כפל.", "math_expression": "6 \\times 6" }
        ],
        "final_answer": "6 × 6"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "חשבו את התוצאה של התרגיל הבא: \\( 2^{4} \\)&rlm;",
        "options": ["16", "8", "6", "24"],
        "correctAnswer": 0,
        "hint": "כתבו את התרגיל ככפל חוזר של המספר 2 בעצמו 4 פעמים, וחשבו שלב אחרי שלב.",
        "solution_steps": [
            { "verbal_explanation": "נפרוס את החזקה לתרגיל כפל ארוך.", "math_expression": "2 \\times 2 \\times 2 \\times 2" },
            { "verbal_explanation": "נחשב את הזוג הראשון של השתיים.", "math_expression": "2 \\times 2 = 4" },
            { "verbal_explanation": "נכפול את התוצאה בשתיים הבא בתור.", "math_expression": "4 \\times 2 = 8" },
            { "verbal_explanation": "נכפול בשתיים האחרון לקבלת התוצאה הסופית.", "math_expression": "8 \\times 2 = 16" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "חשבו את התוצאה של התרגיל הבא: \\( 3^{3} \\)&rlm;",
        "options": ["27", "9", "6", "33"],
        "correctAnswer": 0,
        "hint": "זה לא שלוש כפול שלוש (שזה רק תשע). צריך לכפול פעם אחת נוספת בשלוש.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את תרגיל הכפל המלא המסתתר בחזקה זו.", "math_expression": "3 \\times 3 \\times 3" },
            { "verbal_explanation": "נחשב את המכפלה הראשונה.", "math_expression": "3 \\times 3 = 9" },
            { "verbal_explanation": "נכפול את התוצאה בשלוש שוב, ונקבל את הפתרון.", "math_expression": "9 \\times 3 = 27" }
        ],
        "final_answer": "27"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "איזה ביטוי שווה בדיוק לתרגיל הכפל \\( 5 \\times 5 \\times 5 \\times 5 \\)?&rlm;",
        "options": ["5⁴", "4⁵", "20", "54"],
        "correctAnswer": 0,
        "hint": "בדקו איזה מספר חוזר על עצמו, וספרו כמה פעמים בדיוק הוא מופיע.",
        "solution_steps": [
            { "verbal_explanation": "המספר שמופיע בתרגיל הכפל וחוזר על עצמו הוא חמש.", "math_expression": "5" },
            { "verbal_explanation": "נספור כמה פעמים הוא כתוב ברצף. הוא מופיע ארבע פעמים.", "math_expression": "4" },
            { "verbal_explanation": "נרשום חמש למטה (בסיס) וארבע למעלה (מעריך).", "math_expression": "5^{4}" }
        ],
        "final_answer": "5⁴"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "חשבו את התוצאה של התרגיל הבא: \\( 10^{3} \\)&rlm;",
        "options": ["1000", "30", "100", "300"],
        "correctAnswer": 0,
        "hint": "כשכופלים עשרות שלמות, קל פשוט לספור את האפסים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את החזקה כתרגיל כפל.", "math_expression": "10 \\times 10 \\times 10" },
            { "verbal_explanation": "נכפול את העשר הראשון בשני לקבלת מאה.", "math_expression": "10 \\times 10 = 100" },
            { "verbal_explanation": "נכפול מאה בעשר. פשוט נוסיף עוד אפס לתוצאה.", "math_expression": "100 \\times 10 = 1000" }
        ],
        "final_answer": "1000"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "האם התוצאה של \\( 2^{5} \\) שווה לתוצאה של \\( 5^{2} \\)?&rlm;",
        "options": ["לא, כי 32 לא שווה ל-25", "כן, שניהם שווים ל-10", "כן, אפשר להפוך את המספרים", "לא, כי אי אפשר לחשב אותם"],
        "correctAnswer": 0,
        "hint": "חשבו כל חזקה בנפרד. שתיהן לא קשורות לפעולת כפל רגילה של שתיים בחמש.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה הראשונה: שתיים כפול עצמו חמש פעמים.", "math_expression": "2 \\times 2 \\times 2 \\times 2 \\times 2 = 32" },
            { "verbal_explanation": "נחשב את החזקה השנייה: חמש כפול עצמו פעמיים.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "נשווה בין התוצאות ונראה שהן שונות לחלוטין.", "math_expression": "32 \\neq 25" }
        ],
        "final_answer": "לא, כי 32 לא שווה ל-25"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "חשבו את התוצאה של התרגיל הבא: \\( 1^{8} \\)&rlm;",
        "options": ["1", "8", "0", "18"],
        "correctAnswer": 0,
        "hint": "המספר אחד כפול אחד שווה תמיד לאחד, לא משנה כמה פעמים תכפלו אותו.",
        "solution_steps": [
            { "verbal_explanation": "המשמעות היא לכפול את המספר אחד בעצמו שמונה פעמים.", "math_expression": "1 \\times 1 \\times 1 \\times 1 \\times 1 \\times 1 \\times 1 \\times 1" },
            { "verbal_explanation": "אחד כפול אחד שווה לאחד.", "math_expression": "1 \\times 1 = 1" },
            { "verbal_explanation": "לכן, התוצאה תישאר אחד עד סוף התרגיל.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "איך נכתוב בחזקה ומהי התוצאה של \\( 7 \\times 7 \\)?&rlm;",
        "options": ["7² = 49", "7² = 14", "2⁷ = 14", "7 + 7 = 14"],
        "correctAnswer": 0,
        "hint": "המספר שבע מופיע פעמיים בתרגיל הכפל. היעזרו בלוח הכפל כדי לפתור.",
        "solution_steps": [
            { "verbal_explanation": "המספר שבע מוכפל בעצמו פעמיים, ולכן החזקה היא שבע בחזקת שתיים.", "math_expression": "7^{2}" },
            { "verbal_explanation": "נפתור את תרגיל הכפל כדי למצוא את התוצאה.", "math_expression": "7 \\times 7 = 49" },
            { "verbal_explanation": "נחבר את שני הנתונים לתשובה אחת מלאה.", "math_expression": "7^{2} = 49" }
        ],
        "final_answer": "7² = 49"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "מושג החזקה",
        "question_text": "חשבו את התוצאה של התרגיל הבא: \\( 0^{5} \\)&rlm;",
        "options": ["0", "5", "1", "50"],
        "correctAnswer": 0,
        "hint": "אפס כפול כל מספר (גם כפול אפס) נשאר תמיד אפס.",
        "solution_steps": [
            { "verbal_explanation": "התרגיל דורש מאיתנו לכפול את המספר אפס בעצמו חמש פעמים.", "math_expression": "0 \\times 0 \\times 0 \\times 0 \\times 0" },
            { "verbal_explanation": "אפס כפול אפס שווה לאפס.", "math_expression": "0 \\times 0 = 0" },
            { "verbal_explanation": "מכאן שהתוצאה תמיד תהיה אפס.", "math_expression": "0" }
        ],
        "final_answer": "0"
    },

    // ==========================================
    // תת נושא 2: בסיס ומעריך (10 שאלות)
    // ==========================================
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "בביטוי החזקה \\( 8^{3} \\), איזה מספר הוא 'הבסיס'?&rlm;",
        "options": ["8", "3", "24", "512"],
        "correctAnswer": 0,
        "hint": "הבסיס הוא המספר הגדול שנמצא למטה, והוא זה שמוכפל בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "בחזקה יש שני חלקים: המספר למטה והמספר הקטן למעלה.", "math_expression": "8^{3}" },
            { "verbal_explanation": "המספר למטה נקרא בסיס החזקה.", "math_expression": "8" },
            { "verbal_explanation": "לכן, שמונה הוא הבסיס.", "math_expression": "8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "בביטוי החזקה \\( 4^{7} \\), איך נקרא המספר 7 ומה הוא מייצג?&rlm;",
        "options": ["המעריך, שמראה כמה פעמים לכפול", "הבסיס, שמראה מי מוכפל", "התוצאה של התרגיל", "הכופל שצריך לכפול בארבע"],
        "correctAnswer": 0,
        "hint": "המספר למעלה מעריך את כמות הפעמים שהבסיס יופיע בתרגיל.",
        "solution_steps": [
            { "verbal_explanation": "המספר שבע כתוב למעלה ובקטן. למספר כזה קוראים 'מעריך'.", "math_expression": "7" },
            { "verbal_explanation": "התפקיד שלו הוא להגיד לנו כמה פעמים צריך לכתוב את הבסיס (ארבע) בתרגיל הכפל.", "math_expression": "4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4" },
            { "verbal_explanation": "לכן, שבע הוא המעריך.", "math_expression": "\\text{Exponent}" }
        ],
        "final_answer": "המעריך, שמראה כמה פעמים לכפול"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "נתון שמעריך החזקה הוא 5 והבסיס הוא 2. מהי התוצאה של חזקה זו?&rlm;",
        "options": ["32", "10", "25", "7"],
        "correctAnswer": 0,
        "hint": "הרכיבו את החזקה: מי למטה ומי למעלה? ואז חשבו.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב את החזקה. הבסיס שתיים למטה, והמעריך חמש למעלה.", "math_expression": "2^{5}" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל המתאים.", "math_expression": "2 \\times 2 \\times 2 \\times 2 \\times 2" },
            { "verbal_explanation": "נחשב את הכפל בשלבים עד שנגיע לתוצאה הסופית.", "math_expression": "16 \\times 2 = 32" }
        ],
        "final_answer": "32"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "מי מהתרגילים הבאים נותן תוצאה גדולה יותר: בסיס 3 עם מעריך 2, או בסיס 2 עם מעריך 3?&rlm;",
        "options": ["בסיס 3 מעריך 2 נותן תוצאה גדולה יותר", "בסיס 2 מעריך 3 נותן תוצאה גדולה יותר", "הם שווים בדיוק", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "חשבו את שתי החזקות בנפרד והשוו את התוצאות. לא מדובר בכפל רגיל של מספרים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את האפשרות הראשונה: בסיס שלוש ומעריך שתיים.", "math_expression": "3^{2} = 3 \\times 3 = 9" },
            { "verbal_explanation": "נחשב את האפשרות השנייה: בסיס שתיים ומעריך שלוש.", "math_expression": "2^{3} = 2 \\times 2 \\times 2 = 8" },
            { "verbal_explanation": "נשווה בין התוצאות.", "math_expression": "9 > 8" },
            { "verbal_explanation": "לכן בסיס שלוש עם מעריך שתיים הוא הגדול יותר.", "math_expression": "3^{2}" }
        ],
        "final_answer": "בסיס 3 מעריך 2 נותן תוצאה גדולה יותר"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "מהי התוצאה כאשר בסיס החזקה הוא 10 והמעריך הוא 4?&rlm;",
        "options": ["10000", "40", "1000", "104"],
        "correctAnswer": 0,
        "hint": "בסיס עשר אומר שצריך לכפול עשרות. המעריך רומז על כמות האפסים בתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב את התרגיל לפי הנתונים. עשר הוא הבסיס וארבע הוא המעריך.", "math_expression": "10^{4}" },
            { "verbal_explanation": "בחזקות של עשר, כמות האפסים בתוצאה שווה תמיד למספר שמופיע במעריך.", "math_expression": "4" },
            { "verbal_explanation": "נרשום את המספר אחד, ואחריו ארבעה אפסים בדיוק.", "math_expression": "10000" }
        ],
        "final_answer": "10000"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "עבור הביטוי \\( 5^{1} \\), ציינו מהו הבסיס, מהו המעריך, ומהי התוצאה.&rlm;",
        "options": ["בסיס 5, מעריך 1, תוצאה 5", "בסיס 1, מעריך 5, תוצאה 1", "בסיס 5, מעריך 1, תוצאה 1", "בסיס 1, מעריך 5, תוצאה 5"],
        "correctAnswer": 0,
        "hint": "המעריך 1 אומר שהבסיס מופיע בתרגיל הכפל רק פעם אחת, ללא צורך בכפל נוסף.",
        "solution_steps": [
            { "verbal_explanation": "המספר התחתון הגדול הוא הבסיס.", "math_expression": "5" },
            { "verbal_explanation": "המספר העליון הקטן הוא המעריך.", "math_expression": "1" },
            { "verbal_explanation": "חמש בחזקת אחד אומר לקחת את חמש פעם אחת, ולכן התוצאה נשארת חמש.", "math_expression": "5" }
        ],
        "final_answer": "בסיס 5, מעריך 1, תוצאה 5"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "אם ידוע שמעריך החזקה הוא 2 והתוצאה היא 49, מה חייב להיות הבסיס?&rlm;",
        "options": ["7", "14", "9", "24.5"],
        "correctAnswer": 0,
        "hint": "השאלה היא בעצם: איזה מספר כפול עצמו פעמיים שווה לארבעים ותשע?",
        "solution_steps": [
            { "verbal_explanation": "נרשום את השאלה כתרגיל שבו הבסיס חסר. המעריך הוא שתיים.", "math_expression": "\\square^{2} = 49" },
            { "verbal_explanation": "נחפש בלוח הכפל מספר שכאשר נכפול אותו בעצמו ייתן לנו ארבעים ותשע.", "math_expression": "\\square \\times \\square = 49" },
            { "verbal_explanation": "המספר המתאים הוא שבע.", "math_expression": "7 \\times 7 = 49" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "אם נתון שהבסיס הוא 10 והתוצאה של החזקה היא 100, מהו המעריך?&rlm;",
        "options": ["2", "10", "3", "100"],
        "correctAnswer": 0,
        "hint": "כמה פעמים צריך לכפול את המספר עשר בעצמו כדי להגיע למאה?",
        "solution_steps": [
            { "verbal_explanation": "הבסיס הוא עשר, והמעריך חסר. התוצאה היא מאה.", "math_expression": "10^{\\square} = 100" },
            { "verbal_explanation": "נבדוק. עשר פעם אחת זה פשוט עשר.", "math_expression": "10^{1} = 10" },
            { "verbal_explanation": "עשר כפול עשר נותן מאה. השתמשנו בעשר פעמיים, לכן המעריך הוא שתיים.", "math_expression": "10 \\times 10 = 100 \\Rightarrow 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "השוו בין שתי החזקות: \\( 4^{2} \\) ו- \\( 2^{4} \\). מה נכון לומר עליהן?&rlm;",
        "options": ["הן שוות בדיוק", "הראשונה גדולה יותר", "השנייה גדולה יותר", "אי אפשר להשוות ביניהן"],
        "correctAnswer": 0,
        "hint": "חשבו את התוצאה של כל אחת מהחזקות בנפרד והשוו את המספרים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה הראשונה על ידי כפל ארבע בעצמו.", "math_expression": "4^{2} = 4 \\times 4 = 16" },
            { "verbal_explanation": "נחשב את החזקה השנייה על ידי כפל שתיים בעצמו ארבע פעמים.", "math_expression": "2^{4} = 2 \\times 2 \\times 2 \\times 2 = 16" },
            { "verbal_explanation": "נשווה בין התוצאות שקיבלנו. שש עשרה שווה לשש עשרה, ולכן החזקות שוות.", "math_expression": "16 = 16" }
        ],
        "final_answer": "הן שוות בדיוק"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "בסיס ומעריך",
        "question_text": "מהו הבסיס ומהו המעריך בתרגיל הכפל \\( 9 \\times 9 \\times 9 \\)?&rlm;",
        "options": ["בסיס 9 ומעריך 3", "בסיס 3 ומעריך 9", "בסיס 27 ומעריך 3", "בסיס 9 ומעריך 27"],
        "correctAnswer": 0,
        "hint": "מי המספר שמוכפל בעצמו? וכמה פעמים הוא כתוב שם?",
        "solution_steps": [
            { "verbal_explanation": "נזהה את המספר המופיע בתרגיל הכפל. זה המספר שעליו מבוסס התרגיל (הבסיס).", "math_expression": "9" },
            { "verbal_explanation": "נספור כמה פעמים המספר מופיע. הוא מופיע שלוש פעמים. זהו המעריך.", "math_expression": "3" },
            { "verbal_explanation": "הביטוי יהיה תשע בחזקת שלוש.", "math_expression": "9^{3}" }
        ],
        "final_answer": "בסיס 9 ומעריך 3"
    },

    // ==========================================
    // תת נושא 3: סדר פעולות עם חזקות (10 שאלות)
    // ==========================================
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 5 + 2^{3} \\)&rlm;",
        "options": ["13", "21", "11", "343"],
        "correctAnswer": 0,
        "hint": "לפי סדר פעולות חשבון, חזקה קודמת לחיבור ולחיסור. פתרו קודם את החזקה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם כל את החזקה, כי חזקה קודמת לחיבור ולחיסור.", "math_expression": "2^{3} = 2 \\times 2 \\times 2 = 8" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם התוצאה שקיבלנו מהחזקה.", "math_expression": "5 + 8" },
            { "verbal_explanation": "נבצע את פעולת החיבור לקבלת התשובה הסופית.", "math_expression": "13" }
        ],
        "final_answer": "13"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 3 \\times 4^{2} \\)&rlm;",
        "options": ["48", "144", "24", "36"],
        "correctAnswer": 0,
        "hint": "חזקה קודמת גם לכפל. אל תכפלו לפני שתחשבו את החזקה.",
        "solution_steps": [
            { "verbal_explanation": "בסדר פעולות חשבון, חזקה קודמת לכפל ולכן נתחיל ממנה.", "math_expression": "4^{2} = 4 \\times 4 = 16" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל מחדש תוך שימוש בתוצאה שחישבנו.", "math_expression": "3 \\times 16" },
            { "verbal_explanation": "נפתור את הכפל כדי לסיים.", "math_expression": "48" }
        ],
        "final_answer": "48"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( (3 + 2)^{2} \\)&rlm;",
        "options": ["25", "13", "10", "11"],
        "correctAnswer": 0,
        "hint": "סוגריים הם הכי חזקים. פתרו קודם את תרגיל החיבור שבתוך הסוגריים, ואז העלו בחזקה.",
        "solution_steps": [
            { "verbal_explanation": "סוגריים תמיד קודמים לכל דבר, כולל חזקות. לכן נפתור קודם את החיבור.", "math_expression": "3 + 2 = 5" },
            { "verbal_explanation": "ניקח את התוצאה ונעלה אותה בחזקת שתיים, כפי שמופיע מחוץ לסוגריים.", "math_expression": "5^{2}" },
            { "verbal_explanation": "נחשב את החזקה כדי לקבל את הפתרון.", "math_expression": "5 \\times 5 = 25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 10^{2} - 4^{3} \\)&rlm;",
        "options": ["36", "88", "12", "2"],
        "correctAnswer": 0,
        "hint": "חשבו כל חזקה בנפרד במלואה, ורק בסוף בצעו את החיסור ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה הראשונה, עשר בחזקת שתיים.", "math_expression": "10^{2} = 10 \\times 10 = 100" },
            { "verbal_explanation": "נחשב את החזקה השנייה, ארבע בחזקת שלוש.", "math_expression": "4^{3} = 4 \\times 4 \\times 4 = 64" },
            { "verbal_explanation": "נחסר את התוצאה השנייה מהראשונה.", "math_expression": "100 - 64 = 36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 20 \\div 2^{2} + 3 \\)&rlm;",
        "options": ["8", "10", "2", "5"],
        "correctAnswer": 0,
        "hint": "הסדר הנכון הוא: קודם חזקה, אחר כך חילוק, ובסוף חיבור.",
        "solution_steps": [
            { "verbal_explanation": "נתחיל בחישוב החזקה שבתרגיל.", "math_expression": "2^{2} = 4" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן. כעת נבצע את פעולת החילוק שקודמת לחיבור.", "math_expression": "20 \\div 4 = 5" },
            { "verbal_explanation": "נסיים את התרגיל על ידי פעולת החיבור האחרונה.", "math_expression": "5 + 3 = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( (10 - 2^{3}) \\times 5 \\)&rlm;",
        "options": ["10", "40", "100", "0"],
        "correctAnswer": 0,
        "hint": "כנסו לתוך הסוגריים, ושם בצעו קודם את החזקה.",
        "solution_steps": [
            { "verbal_explanation": "ניכנס לסוגריים. שם יש חיסור וחזקה. החזקה קודמת, אז נחשב אותה קודם.", "math_expression": "2^{3} = 8" },
            { "verbal_explanation": "נמשיך ונסיים לפתור את מה שבתוך הסוגריים על ידי החיסור.", "math_expression": "10 - 8 = 2" },
            { "verbal_explanation": "כעת הסוגריים נפתרו, וניקח את התוצאה לכפל עם המספר שבחוץ.", "math_expression": "2 \\times 5 = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 2^{4} + 3^{2} \\times 2 \\)&rlm;",
        "options": ["34", "50", "46", "100"],
        "correctAnswer": 0,
        "hint": "חשבו את כל החזקות, אחר כך בצעו את הכפל, ורק בסוף חברו הכל יחד.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה הראשונה.", "math_expression": "2^{4} = 16" },
            { "verbal_explanation": "נחשב את החזקה השנייה.", "math_expression": "3^{2} = 9" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן ונבצע את הכפל שקודם לחיבור.", "math_expression": "16 + 9 \\times 2 \\Rightarrow 16 + 18" },
            { "verbal_explanation": "נחבר את המספרים לתשובה אחת.", "math_expression": "16 + 18 = 34" }
        ],
        "final_answer": "34"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( (5^{2} - 5) \\div 4 \\)&rlm;",
        "options": ["5", "4", "10", "2"],
        "correctAnswer": 0,
        "hint": "פתרו את מה שבתוך הסוגריים, זכרו לחשב את החזקה קודם.",
        "solution_steps": [
            { "verbal_explanation": "נפתור קודם כל את החזקה שבתוך הסוגריים.", "math_expression": "5^{2} = 25" },
            { "verbal_explanation": "נשלים את פתרון הסוגריים על ידי ביצוע פעולת החיסור.", "math_expression": "25 - 5 = 20" },
            { "verbal_explanation": "ניקח את התוצאה ונחלק אותה במספר שמחוץ לסוגריים.", "math_expression": "20 \\div 4 = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 1^{5} + 0^{3} + 2^{2} \\)&rlm;",
        "options": ["5", "3", "7", "6"],
        "correctAnswer": 0,
        "hint": "חשבו כל חזקה בנפרד (זכרו ש-1 בחזקת כל מספר נשאר 1, ו-0 נשאר 0), ואז חברו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה הראשונה. אחד כפול עצמו נשאר אחד.", "math_expression": "1^{5} = 1" },
            { "verbal_explanation": "נחשב את החזקה השנייה. אפס כפול עצמו נשאר אפס.", "math_expression": "0^{3} = 0" },
            { "verbal_explanation": "נחשב את החזקה השלישית. שתיים כפול שתיים נותן ארבע.", "math_expression": "2^{2} = 4" },
            { "verbal_explanation": "נחבר את כל התוצאות.", "math_expression": "1 + 0 + 4 = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "סדר פעולות עם חזקות",
        "question_text": "חשבו את התרגיל הבא: \\( 4^{2} \\div (6 - 2)^{2} \\)&rlm;",
        "options": ["1", "4", "16", "8"],
        "correctAnswer": 0,
        "hint": "פתרו את החזקה הראשונה, פתרו את מה שבסוגריים ואז העלו אותם בחזקה, ולבסוף בצעו את החילוק.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החזקה השמאלית בתרגיל.", "math_expression": "4^{2} = 16" },
            { "verbal_explanation": "נפתור את פעולת החיסור שבתוך הסוגריים.", "math_expression": "6 - 2 = 4" },
            { "verbal_explanation": "כעת נעלה בחזקה את התוצאה של הסוגריים, כפי שמורה המעריך בחוץ.", "math_expression": "4^{2} = 16" },
            { "verbal_explanation": "נרשום את תרגיל החילוק עם שתי התוצאות.", "math_expression": "16 \\div 16 = 1" }
        ],
        "final_answer": "1"
    },

    // ==========================================
    // תת נושא 4: שורש ריבועי (10 שאלות)
    // ==========================================
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התוצאה של השורש הריבועי הבא: \\( \\sqrt{36} \\)&rlm;",
        "options": ["6", "18", "72", "3"],
        "correctAnswer": 0,
        "hint": "שורש ריבועי שואל את השאלה: איזה מספר כפול עצמו בדיוק ייתן שלושים ושש?",
        "solution_steps": [
            { "verbal_explanation": "נחפש בלוח הכפל מספר שכאשר נכפול אותו בעצמו פעמיים, התוצאה תהיה שלושים ושש.", "math_expression": "\\square \\times \\square = 36" },
            { "verbal_explanation": "המספר המתאים הוא שש.", "math_expression": "6 \\times 6 = 36" },
            { "verbal_explanation": "לכן, השורש של שלושים ושש הוא שש.", "math_expression": "6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התוצאה של: \\( \\sqrt{81} \\)&rlm;",
        "options": ["9", "40.5", "8", "10"],
        "correctAnswer": 0,
        "hint": "איזה מספר בא מתוך לוח הכפל וכופל את עצמו כדי להגיע לשמונים ואחת?",
        "solution_steps": [
            { "verbal_explanation": "נבדוק אילו מספרים זהים נותנים מכפלה של שמונים ואחת.", "math_expression": "\\square \\times \\square = 81" },
            { "verbal_explanation": "תשע כפול תשע שווה בדיוק לשמונים ואחת.", "math_expression": "9 \\times 9 = 81" },
            { "verbal_explanation": "כלומר התוצאה של השורש היא תשע.", "math_expression": "9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "שטח של חדר בצורת ריבוע הוא 49 מטרים רבועים. מהו אורך הצלע של החדר (במטרים)?&rlm;",
        "options": ["7", "24.5", "14", "9"],
        "correctAnswer": 0,
        "hint": "שטח ריבוע הוא אורך הצלע כפול עצמה. כדי למצוא את הצלע מתוך השטח, השתמשו בשורש ריבועי.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את צלע הריבוע מתוך השטח, עלינו למצוא את השורש הריבועי של השטח.", "math_expression": "\\sqrt{49}" },
            { "verbal_explanation": "נחפש מספר שכאשר נכפול אותו בעצמו, ייתן ארבעים ותשע.", "math_expression": "7 \\times 7 = 49" },
            { "verbal_explanation": "אורך כל צלע בחדר הוא שבעה מטרים.", "math_expression": "7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( \\sqrt{100} - \\sqrt{25} \\)&rlm;",
        "options": ["5", "75", "10", "15"],
        "correctAnswer": 0,
        "hint": "חשבו כל שורש בנפרד, ורק בסוף בצעו את תרגיל החיסור.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השורש הראשון. איזה מספר כפול עצמו ייתן מאה?", "math_expression": "\\sqrt{100} = 10" },
            { "verbal_explanation": "נחשב את השורש השני. איזה מספר כפול עצמו ייתן עשרים וחמש?", "math_expression": "\\sqrt{25} = 5" },
            { "verbal_explanation": "נחסר את התוצאה השנייה מהתוצאה הראשונה.", "math_expression": "10 - 5 = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( \\sqrt{9 + 16} \\)&rlm;",
        "options": ["5", "7", "12", "25"],
        "correctAnswer": 0,
        "hint": "כאשר יש פעולת חיבור בתוך השורש, מתייחסים לשורש כמו לסוגריים ופותרים קודם את מה שבפנים.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את המספרים שבתוך השורש לפני שנעשה פעולה נוספת.", "math_expression": "9 + 16 = 25" },
            { "verbal_explanation": "נרשום את סימן השורש מעל התוצאה שקיבלנו.", "math_expression": "\\sqrt{25}" },
            { "verbal_explanation": "נחשב איזה מספר כפול עצמו נותן עשרים וחמש.", "math_expression": "5 \\times 5 = 25" },
            { "verbal_explanation": "נרשום את התשובה לשורש.", "math_expression": "5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( \\sqrt{9} + \\sqrt{16} \\)&rlm;",
        "options": ["7", "5", "25", "12"],
        "correctAnswer": 0,
        "hint": "שימו לב להבדל מהשאלה הקודמת. כאן כל מספר נמצא בשורש נפרד. חשבו כל שורש לבד ואז חברו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את השורש הראשון באופן נפרד לחלוטין.", "math_expression": "\\sqrt{9} = 3" },
            { "verbal_explanation": "נחשב את השורש השני גם כן בנפרד.", "math_expression": "\\sqrt{16} = 4" },
            { "verbal_explanation": "כעת נחבר את שתי התוצאות שקיבלנו כדי לסיים את התרגיל.", "math_expression": "3 + 4 = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( 2 \\times \\sqrt{64} \\)&rlm;",
        "options": ["16", "64", "8", "32"],
        "correctAnswer": 0,
        "hint": "בדיוק כמו בסדר פעולות עם חזקות, גם שורש קודם לפעולת הכפל.",
        "solution_steps": [
            { "verbal_explanation": "נחשב קודם כל את השורש הריבועי המופיע בתרגיל.", "math_expression": "\\sqrt{64} = 8" },
            { "verbal_explanation": "נכתוב את תרגיל הכפל מחדש עם התוצאה שחישבנו.", "math_expression": "2 \\times 8" },
            { "verbal_explanation": "נבצע את הכפל ונקבל את התשובה.", "math_expression": "16" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "איזה מספר חסר בתוך הריבוע כדי שהמשוואה תהיה נכונה? \\( \\square^{2} = 121 \\)&rlm;",
        "options": ["11", "12", "60.5", "21"],
        "correctAnswer": 0,
        "hint": "הפעולה ההפוכה לחזקה שנייה היא הוצאת שורש ריבועי.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את המספר שהועלה בריבוע, עלינו לחשב את השורש הריבועי של התוצאה.", "math_expression": "\\sqrt{121}" },
            { "verbal_explanation": "נחפש מספר שלם שכאשר נכפול אותו בעצמו, נקבל מאה עשרים ואחת.", "math_expression": "11 \\times 11 = 121" },
            { "verbal_explanation": "המספר החסר בריבוע הוא אחת עשרה.", "math_expression": "11" }
        ],
        "final_answer": "11"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( \\dfrac{\\sqrt{144}}{3} \\)&rlm;",
        "options": ["4", "12", "6", "3"],
        "correctAnswer": 0,
        "hint": "קו שבר הוא סימן לחילוק. חשבו קודם את המונה (השורש), ואז חלקו במכנה.",
        "solution_steps": [
            { "verbal_explanation": "נפתור תחילה את השורש הריבועי שמופיע בחלק העליון (במונה).", "math_expression": "\\sqrt{144} = 12" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש עם המספר שקיבלנו מעל קו השבר.", "math_expression": "\\dfrac{12}{3}" },
            { "verbal_explanation": "נבצע את פעולת החילוק של המונה במכנה.", "math_expression": "12 \\div 3 = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "powers_roots_grade_7",
        "subTopic": "שורש ריבועי",
        "question_text": "חשבו את התרגיל הבא: \\( \\sqrt{25 \\times 4} \\)&rlm;",
        "options": ["10", "29", "20", "50"],
        "correctAnswer": 0,
        "hint": "אפשר לפתור את הכפל בתוך השורש קודם, או לחשב את השורש של כל מספר בנפרד ואז לכפול ביניהם. שתי הדרכים נכונות כאן.",
        "solution_steps": [
            { "verbal_explanation": "דרך אחת היא לבצע את פעולת הכפל שבתוך השורש קודם.", "math_expression": "25 \\times 4 = 100" },
            { "verbal_explanation": "לאחר מכן נוציא שורש מהתוצאה.", "math_expression": "\\sqrt{100} = 10" },
            { "verbal_explanation": "דרך שנייה היא להוציא שורש לכל כופל בנפרד, ואז לכפול את התוצאות. שורש של עשרים וחמש הוא חמש, ושורש של ארבע הוא שתיים.", "math_expression": "5 \\times 2 = 10" }
        ],
        "final_answer": "10"
    }
];