const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: מושג היחס (20 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "בקלמר יש 6 עפרונות ו-10 עטים. מהו <strong>היחס</strong> בין מספר העפרונות למספר העטים?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='60'><circle cx='20' cy='30' r='8' fill='#b09151'/><circle cx='45' cy='30' r='8' fill='#b09151'/><circle cx='70' cy='30' r='8' fill='#b09151'/><rect x='95' y='20' width='10' height='25' fill='#1e293b'/><rect x='115' y='20' width='10' height='25' fill='#1e293b'/><rect x='135' y='20' width='10' height='25' fill='#1e293b'/></svg></div>",
        "hint": "יחס כותבים בעזרת נקודתיים. שימו לב לסדר: מה שמופיע ראשון בשאלה, נכתב משמאל ביחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הכמויות שניתנו לנו. מספר העפרונות הוא 6 ומספר העטים הוא 10.", "math_expression": "6 , 10" },
            { "verbal_explanation": "שלב 2: נרשום את היחס לפי הסדר שהתבקש (עפרונות לעטים).", "math_expression": "6 : 10" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקת שני הצדדים במספר 2.", "math_expression": "3 : 5" }
        ],
        "final_answer": "3 : 5",
        "options": ["6 : 10", "3 : 5", "5 : 3", "10 : 6"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "מהו היחס המצומצם ביותר של <strong>15 : 20</strong>?",
        "hint": "חפשו את המספר הגדול ביותר שמחלק גם את 15 וגם את 20 ללא שארית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את המחלק המשותף הגדול ביותר של 15 ו-20, שהוא המספר 5.", "math_expression": "מחלק = 5" },
            { "verbal_explanation": "שלב 2: נחלק את שני צידי היחס ב-5.", "math_expression": "(15 / 5) : (20 / 5)" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה המצומצמת.", "math_expression": "3 : 4" }
        ],
        "final_answer": "3 : 4",
        "options": ["3 : 4", "5 : 4", "15 : 20", "3 : 5"],
        "correctAnswer": 0
    },
    {
        "id": 3,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "בכיתה יש 30 תלמידים בסך הכל, מתוכם 12 בנים והשאר בנות. מהו היחס בין מספר <strong>הבנות</strong> למספר <strong>הבנים</strong>?",
        "hint": "קודם כל עליכם לחשב כמה בנות יש בכיתה על ידי חיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את מספר הבנות. נחסיר את מספר הבנים (12) מסך כל התלמידים (30).", "math_expression": "30 - 12 = 18" },
            { "verbal_explanation": "שלב 2: נרשום את היחס הנדרש (בנות לבנים).", "math_expression": "18 : 12" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקה ב-6.", "math_expression": "3 : 2" }
        ],
        "final_answer": "3 : 2",
        "options": ["12 : 18", "2 : 3", "3 : 2", "30 : 12"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "מהו היחס בין <strong>40 סנטימטר</strong> ל-<strong>2 מטרים</strong>?",
        "hint": "זהירות! לפני שכותבים יחס, חייבים להפוך את שתי היחידות לאותה יחידת מידה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את 2 המטרים לסנטימטרים (בכל מטר יש 100 סנטימטר).", "math_expression": "2 * 100 = 200" },
            { "verbal_explanation": "שלב 2: כעת נרשום את היחס בין הכמויות באותן יחידות.", "math_expression": "40 : 200" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקה ב-40.", "math_expression": "1 : 5" }
        ],
        "final_answer": "1 : 5",
        "options": ["40 : 2", "1 : 5", "20 : 1", "4 : 2"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "נתון כי היחס בין שתי זוויות הוא <strong>2 : 7</strong>. אם הזווית הקטנה היא בת <strong>40 מעלות</strong>, מה גודל הזווית הגדולה?",
        "hint": "מצאו פי כמה גדלה הזווית הקטנה מהערך היחסי שלה (2), ועשו את אותה פעולה על הערך 7.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מהו הערך של 'יחידת יחס' אחת. נחלק את גודל הזווית (40) בערך היחסי שלה (2).", "math_expression": "40 / 2 = 20" },
            { "verbal_explanation": "שלב 2: נכפול את הערך של יחידת היחס (20) בערך היחסי של הזווית הגדולה (7).", "math_expression": "7 * 20 = 140" }
        ],
        "final_answer": "140 מעלות",
        "options": ["70 מעלות", "140 מעלות", "80 מעלות", "90 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "האם היחס <strong>3 : 8</strong> שווה ליחס <strong>12 : 32</strong>?",
        "hint": "בדקו האם ניתן להגיע מהיחס הראשון לשני על ידי הכפלת שני הצדדים באותו מספר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק פי כמה גדל הצד השמאלי. 12 חלקי 3 שווה ל-4.", "math_expression": "3 * 4 = 12" },
            { "verbal_explanation": "שלב 2: נבדוק האם גם הצד הימני גדל פי 4. 8 כפול 4 שווה ל-32.", "math_expression": "8 * 4 = 32" },
            { "verbal_explanation": "שלב 3: מכיוון ששני הצדדים הוכפלו באותו מספר, היחסים שווים.", "math_expression": "כן" }
        ],
        "final_answer": "כן, הם שווים.",
        "options": ["כן", "לא", "רק אם המספרים שלמים", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 7,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "במתכון לעוגה משתמשים ב-4 כוסות קמח על כל 3 כוסות סוכר. מהו היחס בין <strong>הסוכר</strong> ל<strong>קמח</strong>?",
        "hint": "שימו לב היטב לסדר המילים בשאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הכמויות. קמח = 4, סוכר = 3.", "math_expression": "4 , 3" },
            { "verbal_explanation": "שלב 2: השאלה מבקשת את היחס של סוכר לקמח, לכן נרשום קודם את הסוכר.", "math_expression": "3 : 4" }
        ],
        "final_answer": "3 : 4",
        "options": ["4 : 3", "3 : 4", "7 : 3", "3 : 7"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "היחס בין אורכי הצלעות של מלבן הוא <strong>3 : 5</strong>. אם היקף המלבן הוא <strong>48 סנטימטר</strong>, מה אורך הצלע הקצרה?",
        "hint": "היקף מלבן מורכב מפעמיים האורך ופעמיים הרוחב. מצאו קודם את סכום שתי צלעות סמוכות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סכום שתי צלעות סמוכות (חצי היקף).", "math_expression": "48 / 2 = 24" },
            { "verbal_explanation": "שלב 2: נחבר את חלקי היחס כדי לדעת לכמה יחידות לחלק את הסכום.", "math_expression": "3 + 5 = 8" },
            { "verbal_explanation": "שלב 3: נמצא את הערך של יחידה אחת. 24 חלקי 8 שווה ל-3.", "math_expression": "24 / 8 = 3" },
            { "verbal_explanation": "שלב 4: נכפול את ערך היחידה (3) בחלק של הצלע הקצרה (3).", "math_expression": "3 * 3 = 9" }
        ],
        "final_answer": "9 סנטימטר",
        "options": ["9 סנטימטר", "15 סנטימטר", "18 סנטימטר", "12 סנטימטר"],
        "correctAnswer": 0
    },
    {
        "id": 9,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "איזה מהיחסים הבאים שונה מהשאר?",
        "hint": "צמצמו את כל היחסים לצורתם הפשוטה ביותר והשוו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נצמצם את 2:4 ל-1:2.", "math_expression": "1 : 2" },
            { "verbal_explanation": "שלב 2: נצמצם את 5:10 ל-1:2.", "math_expression": "1 : 2" },
            { "verbal_explanation": "שלב 3: נצמצם את 3:9 ל-1:3.", "math_expression": "1 : 3" }
        ],
        "final_answer": "3 : 9",
        "options": ["2 : 4", "5 : 10", "3 : 9", "10 : 20"],
        "correctAnswer": 2
    },
    {
        "id": 10,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "בגינה יש 40 פרחים. היחס בין הפרחים האדומים לצהובים הוא <strong>1 : 4</strong>. כמה פרחים <strong>אדומים</strong> יש בגינה?<br><div style='text-align:center; margin:10px 0;'><svg width='120' height='40'><rect x='5' y='10' width='20' height='20' fill='red' stroke='black'/><rect x='30' y='10' width='20' height='20' fill='yellow' stroke='black'/><rect x='55' y='10' width='20' height='20' fill='yellow' stroke='black'/><rect x='80' y='10' width='20' height='20' fill='yellow' stroke='black'/><rect x='105' y='10' width='20' height='20' fill='yellow' stroke='black'/></svg></div>",
        "hint": "חברו את חלקי היחס כדי לדעת לכמה קבוצות לחלק את כל הפרחים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך כל יחידות היחס. 1 ועוד 4.", "math_expression": "1 + 4 = 5" },
            { "verbal_explanation": "שלב 2: נחלק את סך הפרחים במספר היחידות כדי למצוא כמה פרחים יש בכל יחידה.", "math_expression": "40 / 5 = 8" },
            { "verbal_explanation": "שלב 3: מכיוון שהפרחים האדומים מייצגים יחידה אחת ביחס, ישנם 8 פרחים אדומים.", "math_expression": "1 * 8 = 8" }
        ],
        "final_answer": "8 פרחים",
        "options": ["10 פרחים", "8 פרחים", "32 פרחים", "4 פרחים"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "היחס בין הגיל של דני לגיל של אחותו הוא <strong>2 : 3</strong>. אם סכום הגילאים שלהם הוא 25, מהו גילו של <strong>דני</strong>?",
        "hint": "חלקו את סכום הגילאים לסך כל חלקי היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את חלקי היחס: 2 ועוד 3.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: נמצא את ערכה של 'שנה יחסית' אחת. 25 חלקי 5.", "math_expression": "25 / 5 = 5" },
            { "verbal_explanation": "שלב 3: נכפול את החלק של דני (2) בערך שמצאנו.", "math_expression": "2 * 5 = 10" }
        ],
        "final_answer": "10 שנים",
        "options": ["10 שנים", "15 שנים", "12 שנים", "8 שנים"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "מהו היחס המצומצם בין <strong>חצי שעה</strong> ל-<strong>15 דקות</strong>?",
        "hint": "הפכו את חצי השעה לדקות לפני שתכתבו את היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר חצי שעה לדקות. חצי משעה (60 דקות) הוא 30 דקות.", "math_expression": "30" },
            { "verbal_explanation": "שלב 2: נרשום את היחס בין 30 דקות ל-15 דקות.", "math_expression": "30 : 15" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקה ב-15.", "math_expression": "2 : 1" }
        ],
        "final_answer": "2 : 1",
        "options": ["1 : 2", "2 : 1", "30 : 15", "15 : 30"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "במפה, היחס בין המרחק לבין המציאות הוא <strong>1 : 100,000</strong>. אם המרחק במפה הוא <strong>4 סנטימטר</strong>, מהו המרחק במציאות ב<strong>קילומטרים</strong>?",
        "hint": "מצאו קודם את המרחק בסנטימטרים ואז המירו לקילומטרים (1 קילומטר = 100,000 סנטימטר).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את המרחק במפה (4) ביחס ההגדלה.", "math_expression": "4 * 100,000 = 400,000" },
            { "verbal_explanation": "שלב 2: נמיר סנטימטרים לקילומטרים על ידי חלוקה ב-100,000.", "math_expression": "400,000 / 100,000 = 4" }
        ],
        "final_answer": "4 קילומטרים",
        "options": ["40 קילומטרים", "4 קילומטרים", "400 מטרים", "100 קילומטרים"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "מה משמעות היחס <strong>1 : 1</strong>?",
        "hint": "חשבו על מצב שבו לשני אנשים יש בדיוק את אותה כמות.",
        "solution_steps": [
            { "verbal_explanation": "יחס של 1 ל-1 אומר שעל כל יחידה של הצד הראשון יש בדיוק יחידה אחת של הצד השני.", "math_expression": "כמויות שוות" }
        ],
        "final_answer": "הכמויות שוות זו לזו.",
        "options": ["צד אחד גדול פי 2", "הכמויות שוות זו לזו.", "אין קשר בין הכמויות", "הסכום הוא 1"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "במגרש חניה היחס בין מכוניות לבנות למכוניות כחולות הוא <strong>5 : 2</strong>. אם יש 20 מכוניות לבנות, כמה מכוניות <strong>כחולות</strong> יש?",
        "hint": "בדקו פי כמה גדל מספר המכוניות הלבנות לעומת הערך 5 שביחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את מקדם ההרחבה. 20 חלקי 5 שווה ל-4.", "math_expression": "20 / 5 = 4" },
            { "verbal_explanation": "שלב 2: נכפול את חלק המכוניות הכחולות (2) במקדם שמצאנו.", "math_expression": "2 * 4 = 8" }
        ],
        "final_answer": "8 מכוניות",
        "options": ["8 מכוניות", "10 מכוניות", "4 מכוניות", "12 מכוניות"],
        "correctAnswer": 0
    },
    {
        "id": 16,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "נתונים שלושה מספרים ביחס של <strong>1 : 2 : 4</strong>. אם המספר הגדול ביותר הוא <strong>20</strong>, מהו המספר הקטן ביותר?",
        "hint": "השוו את המספר 20 לחלק הכי גדול ביחס (4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ערך היחידה. נחלק את המספר הגדול (20) בחלק היחסי שלו (4).", "math_expression": "20 / 4 = 5" },
            { "verbal_explanation": "שלב 2: נכפול את ערך היחידה (5) בחלק של המספר הקטן ביותר (1).", "math_expression": "1 * 5 = 5" }
        ],
        "final_answer": "5",
        "options": ["5", "10", "4", "2"],
        "correctAnswer": 0
    },
    {
        "id": 17,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "היחס בין כמות המים לכמות המיץ בתרכיז הוא <strong>1 : 6</strong>. מהי הכמות הכוללת של המשקה אם השתמשנו ב-2 ליטרים תרכיז מיץ?",
        "hint": "שימו לב: המשקה כולל גם את המים וגם את המיץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את חלקי היחס. מים = 6, מיץ = 1.", "math_expression": "6 : 1" },
            { "verbal_explanation": "שלב 2: אם יחידת מיץ אחת שווה ל-2 ליטרים, נחשב כמה מים צריך. 6 כפול 2.", "math_expression": "6 * 2 = 12" },
            { "verbal_explanation": "שלב 3: נחבר את כמות המים (12) וכמות המיץ (2) לקבלת הכמות הכוללת.", "math_expression": "12 + 2 = 14" }
        ],
        "final_answer": "14 ליטרים",
        "options": ["12 ליטרים", "14 ליטרים", "13 ליטרים", "7 ליטרים"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "מושג היחס",
        "difficulty": "Low",
        "question_text": "האם ניתן לצמצם את היחס <strong>7 : 11</strong>?",
        "hint": "בדקו האם קיים מספר (מלבד 1) שמחלק את 7 וגם את 11.",
        "solution_steps": [
            { "verbal_explanation": "המספרים 7 ו-11 הם מספרים ראשוניים. אין להם שום מחלק משותף מלבד המספר 1.", "math_expression": "לא ניתן לצמצם" }
        ],
        "final_answer": "לא, זהו יחס מצומצם.",
        "options": ["כן, על ידי 7", "לא, זהו יחס מצומצם.", "רק אם נשתמש בשברים", "כן, על ידי 2"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "מושג היחס",
        "difficulty": "High",
        "question_text": "במשולש, היחס בין הזוויות הוא <strong>1 : 2 : 3</strong>. מהו גודלה של הזווית הגדולה ביותר?",
        "hint": "זכרו שסכום הזוויות במשולש הוא תמיד 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את סך כל חלקי היחס. 1 ועוד 2 ועוד 3.", "math_expression": "1 + 2 + 3 = 6" },
            { "verbal_explanation": "שלב 2: נחלק את סכום המעלות במשולש (180) במספר החלקים.", "math_expression": "180 / 6 = 30" },
            { "verbal_explanation": "שלב 3: נכפול את ערך החלק (30) בחלק של הזווית הגדולה ביותר (3).", "math_expression": "3 * 30 = 90" }
        ],
        "final_answer": "90 מעלות",
        "options": ["60 מעלות", "90 מעלות", "120 מעלות", "100 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "מושג היחס",
        "difficulty": "Medium",
        "question_text": "נתון יחס של <strong>0.5 : 2</strong>. כיצד נכתוב אותו בעזרת מספרים שלמים בלבד?",
        "hint": "הכפילו את שני צידי היחס במספר שיבטל את השבר העשרוני (למשל 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול את שני האגפים ב-2 כדי להפוך את חצי למספר שלם.", "math_expression": "(0.5 * 2) : (2 * 2)" },
            { "verbal_explanation": "שלב 2: נרשום את התוצאה החדשה.", "math_expression": "1 : 4" }
        ],
        "final_answer": "1 : 4",
        "options": ["1 : 2", "1 : 4", "5 : 20", "2 : 8"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: חלוקה לפי יחס (20 שאלות) ---
    // ==============================================================
    {
        "id": 21,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Low",
        "question_text": "חלקו את הסכום <strong>100 שקלים</strong> בין שני ילדים לפי יחס של <strong>2 : 3</strong>. כמה יקבל הילד הראשון?",
        "hint": "חברו את חלקי היחס כדי לדעת לכמה מנות לחלק את הכסף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את חלקי היחס: 2 ועוד 3.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: נמצא את הערך של 'מנה' אחת. נחלק 100 ב-5.", "math_expression": "100 / 5 = 20" },
            { "verbal_explanation": "שלב 3: נכפול את המנה (20) בחלק של הילד הראשון (2).", "math_expression": "2 * 20 = 40" }
        ],
        "final_answer": "40 שקלים",
        "options": ["40 שקלים", "60 שקלים", "50 שקלים", "20 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Low",
        "question_text": "אורך חבל הוא <strong>35 מטרים</strong>. חלקו אותו לשני קטעים ביחס של <strong>3 : 4</strong>. מה אורך הקטע הארוך?",
        "hint": "בצעו את שלושת השלבים: חיבור חלקים, חלוקת השלם, והכפלה בחלק המבוקש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום חלקי היחס הוא 7.", "math_expression": "3 + 4 = 7" },
            { "verbal_explanation": "שלב 2: אורך כל יחידת יחס הוא 35 חלקי 7.", "math_expression": "35 / 7 = 5" },
            { "verbal_explanation": "שלב 3: אורך הקטע הארוך (4 יחידות) הוא 4 כפול 5.", "math_expression": "4 * 5 = 20" }
        ],
        "final_answer": "20 מטרים",
        "options": ["15 מטרים", "20 מטרים", "25 מטרים", "21 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "שני שותפים הרוויחו <strong>15,000 שקלים</strong>. הם החליטו לחלק את הרווחים ביחס של <strong>2 : 1</strong> לטובת השותף הוותיק. כמה יקבל השותף החדש?",
        "hint": "שימו לב שהשותף החדש מקבל את החלק הקטן (1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל החלקים הוא 2 ועוד 1.", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "שלב 2: נמצא את ערכו של חלק אחד. 15,000 חלקי 3.", "math_expression": "15,000 / 3 = 5,000" },
            { "verbal_explanation": "שלב 3: השותף החדש מקבל חלק אחד, לכן הוא יקבל 5,000 שקלים.", "math_expression": "1 * 5,000 = 5,000" }
        ],
        "final_answer": "5,000 שקלים",
        "options": ["10,000 שקלים", "5,000 שקלים", "7,500 שקלים", "3,000 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "בסל פירות יש תפוחים ואגסים ביחס של <strong>3 : 2</strong>. אם בסך הכל יש בסל <strong>25 פירות</strong>, כמה <strong>תפוחים</strong> יש בו?",
        "hint": "חברו את 3 ו-2 כדי למצוא את המספר הכולל של היחידות בסל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את חלקי היחס: 3 פלוס 2.", "math_expression": "3 + 2 = 5" },
            { "verbal_explanation": "שלב 2: נחלק את כל הפירות ב-5. נמצא שבכל יחידת יחס יש 5 פירות.", "math_expression": "25 / 5 = 5" },
            { "verbal_explanation": "שלב 3: נכפול את 3 (חלק התפוחים) ב-5.", "math_expression": "3 * 5 = 15" }
        ],
        "final_answer": "15 תפוחים",
        "options": ["10 תפוחים", "15 תפוחים", "20 תפוחים", "12 תפוחים"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "חלקו את המספר <strong>60</strong> לשלושה חלקים לפי היחס <strong>1 : 2 : 3</strong>. מהו המספר האמצעי?",
        "hint": "עבדו בדיוק לפי אותם שלבים, גם כשיש שלושה חלקים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את כל חלקי היחס: 1 פלוס 2 פלוס 3.", "math_expression": "1 + 2 + 3 = 6" },
            { "verbal_explanation": "שלב 2: נמצא את ערך היחידה. 60 חלקי 6.", "math_expression": "60 / 6 = 10" },
            { "verbal_explanation": "שלב 3: נכפול את ערך היחידה (10) בחלק האמצעי ביחס (2).", "math_expression": "2 * 10 = 20" }
        ],
        "final_answer": "20",
        "options": ["10", "20", "30", "15"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "היחס בין כמות המלח לכמות המים בתמיסה הוא <strong>1 : 9</strong>. אם משקל התמיסה כולה הוא <strong>500 גרם</strong>, כמה גרם <strong>מלח</strong> יש בה?",
        "hint": "התמיסה הכוללת מורכבת מ-10 חלקים (1 של מלח ו-9 של מים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את חלקי היחס: 1 + 9 = 10.", "math_expression": "10" },
            { "verbal_explanation": "שלב 2: נמצא כמה גרם יש בכל חלק. 500 חלקי 10.", "math_expression": "50" },
            { "verbal_explanation": "שלב 3: המלח הוא חלק אחד מתוך 10, לכן יש 50 גרם מלח.", "math_expression": "50" }
        ],
        "final_answer": "50 גרם",
        "options": ["50 גרם", "450 גרם", "100 גרם", "10 גרם"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "שני מספרים נמצאים ביחס של <strong>4 : 5</strong>. אם <strong>ההפרש</strong> ביניהם הוא 12, מהו המספר הקטן?",
        "hint": "שימו לב: הפעם נתון ההפרש ולא הסכום. ההפרש בין חלקי היחס (5 פחות 4) הוא חלק אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ההפרש בין חלקי היחס. 5 פחות 4.", "math_expression": "5 - 4 = 1" },
            { "verbal_explanation": "שלב 2: מכיוון שההפרש האמיתי הוא 12 וההפרש ביחס הוא 1, הרי שערך כל יחידה הוא 12.", "math_expression": "12" },
            { "verbal_explanation": "שלב 3: נכפול את ערך היחידה (12) בחלק של המספר הקטן (4).", "math_expression": "4 * 12 = 48" }
        ],
        "final_answer": "48",
        "options": ["48", "60", "36", "12"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "במסיבה יש 80 משתתפים. היחס בין המבוגרים לילדים הוא <strong>3 : 7</strong>. כמה <strong>ילדים</strong> יש במסיבה?",
        "hint": "סכום החלקים הוא 10. מצאו את ערך היחידה והכפילו בחלק של הילדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל החלקים הוא 3 + 7 = 10.", "math_expression": "10" },
            { "verbal_explanation": "שלב 2: ערך כל יחידת יחס הוא 80 חלקי 10.", "math_expression": "8" },
            { "verbal_explanation": "שלב 3: מספר הילדים הוא 7 יחידות כפול 8.", "math_expression": "7 * 8 = 56" }
        ],
        "final_answer": "56 ילדים",
        "options": ["24 ילדים", "56 ילדים", "40 ילדים", "70 ילדים"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "זווית שטוחה (180 מעלות) חולקה לשלוש זוויות ביחס של <strong>2 : 3 : 4</strong>. מה גודל הזווית הקטנה ביותר?",
        "hint": "חלקו את ה-180 לסך כל חלקי היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את חלקי היחס: 2 + 3 + 4 = 9.", "math_expression": "9" },
            { "verbal_explanation": "שלב 2: נמצא את ערך היחידה. 180 חלקי 9.", "math_expression": "20" },
            { "verbal_explanation": "שלב 3: נכפול את 20 בחלק הקטן ביותר (2).", "math_expression": "2 * 20 = 40" }
        ],
        "final_answer": "40 מעלות",
        "options": ["40 מעלות", "60 מעלות", "80 מעלות", "20 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "קבוצת כדורגל ניצחה והפסידה משחקים ביחס של <strong>5 : 2</strong>. אם הקבוצה שיחקה 28 משחקים בסך הכל (ולא היו תיקו), כמה משחקים היא <strong>ניצחה</strong>?",
        "hint": "חלקו את כל המשחקים לפי היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום חלקי היחס הוא 7.", "math_expression": "5 + 2 = 7" },
            { "verbal_explanation": "שלב 2: נמצא כמה משחקים יש בכל יחידת יחס. 28 חלקי 7.", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: הקבוצה ניצחה 5 יחידות כאלו. 5 כפול 4.", "math_expression": "20" }
        ],
        "final_answer": "20 משחקים",
        "options": ["20 משחקים", "8 משחקים", "14 משחקים", "25 משחקים"],
        "correctAnswer": 0
    },
    {
        "id": 31,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Low",
        "question_text": "חלקו <strong>24 סוכריות</strong> בין דנה לרון ביחס של <strong>1 : 1</strong>. כמה סוכריות יקבל כל אחד?",
        "hint": "יחס של 1:1 אומר חלוקה שווה בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "כאשר היחס הוא 1:1, אנו פשוט מחלקים את הסכום ל-2 חלקים שווים.", "math_expression": "24 / 2 = 12" }
        ],
        "final_answer": "12 סוכריות",
        "options": ["24 סוכריות", "12 סוכריות", "1 סוכריה", "10 סוכריות"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "היחס בין אורכי שלוש צלעות של משולש הוא <strong>3 : 4 : 5</strong>. אם היקף המשולש הוא <strong>60 סנטימטר</strong>, מהו אורך הצלע הארוכה ביותר?",
        "hint": "סכמו את כל חלקי היחס וחלקו בהם את ההיקף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום חלקי היחס הוא 3 + 4 + 5 = 12.", "math_expression": "12" },
            { "verbal_explanation": "שלב 2: נמצא את ערך היחידה. 60 חלקי 12.", "math_expression": "5" },
            { "verbal_explanation": "שלב 3: נכפול את ערך היחידה (5) בחלק של הצלע הארוכה (5).", "math_expression": "5 * 5 = 25" }
        ],
        "final_answer": "25 סנטימטר",
        "options": ["15 סנטימטר", "20 סנטימטר", "25 סנטימטר", "30 סנטימטר"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "חלקו <strong>45 דקות</strong> לשני חלקים ביחס של <strong>2 : 7</strong>. מהו החלק הקטן?",
        "hint": "חברו 2 ו-7 וחלקו את 45 בתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סכום חלקי היחס הוא 9.", "math_expression": "2 + 7 = 9" },
            { "verbal_explanation": "שלב 2: ערך כל חלק הוא 45 חלקי 9.", "math_expression": "5" },
            { "verbal_explanation": "שלב 3: נכפול 5 בחלק הקטן (2).", "math_expression": "10" }
        ],
        "final_answer": "10 דקות",
        "options": ["10 דקות", "35 דקות", "5 דקות", "20 דקות"],
        "correctAnswer": 0
    },
    {
        "id": 34,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "במפעל מייצרים ברגים ואומים ביחס של <strong>10 : 3</strong>. אם ביום אחד יוצרו <strong>210 אומים</strong>, כמה <u>ברגים</u> יוצרו באותו יום?",
        "hint": "שימו לב: האומים הם החלק של ה-3 ביחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ערך היחידה. נחלק את מספר האומים (210) בחלק היחסי שלהם (3).", "math_expression": "210 / 3 = 70" },
            { "verbal_explanation": "שלב 2: נכפול את ערך היחידה (70) בחלק של הברגים (10).", "math_expression": "10 * 70 = 700" }
        ],
        "final_answer": "700 ברגים",
        "options": ["630 ברגים", "700 ברגים", "2100 ברגים", "300 ברגים"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "סכום כסף חולק בין שלושה אנשים ביחס של <strong>2 : 5 : 8</strong>. ידוע שהאדם שקיבל את החלק הגדול ביותר קיבל <strong>400 שקלים</strong>. מה היה הסכום הכולל שחולק?",
        "hint": "מצאו קודם את ערך היחידה מהחלק הגדול (8), ואז הכפילו בסכום כל חלקי היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ערך היחידה. 400 חלקי 8.", "math_expression": "50" },
            { "verbal_explanation": "שלב 2: נמצא את סך כל חלקי היחס. 2 + 5 + 8.", "math_expression": "15" },
            { "verbal_explanation": "שלב 3: נכפול את סך החלקים (15) בערך היחידה (50).", "math_expression": "15 * 50 = 750" }
        ],
        "final_answer": "750 שקלים",
        "options": ["750 שקלים", "1500 שקלים", "400 שקלים", "600 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "בארגז יש 72 כדורים בצבעים שחור ולבן. היחס ביניהם הוא <strong>1 : 3</strong> לטובת הלבנים. כמה כדורים <strong>לבנים</strong> יש בארגז?",
        "hint": "חברו את 1 ו-3 וחלקו את 72 ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: סך כל החלקים הוא 4.", "math_expression": "1 + 3 = 4" },
            { "verbal_explanation": "שלב 2: בכל חלק יש 72 חלקי 4 כדורים.", "math_expression": "18" },
            { "verbal_explanation": "שלב 3: מספר הכדורים הלבנים הוא 3 חלקים של 18.", "math_expression": "3 * 18 = 54" }
        ],
        "final_answer": "54 כדורים",
        "options": ["18 כדורים", "54 כדורים", "36 כדורים", "60 כדורים"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "היחס בין מספר הבנים למספר הבנות בחוג הוא <strong>4 : 5</strong>. אם יש <strong>4 בנות יותר</strong> מאשר בנים, כמה ילדים יש בסך הכל בחוג?",
        "hint": "ההפרש בין חלקי היחס (5 פחות 4) הוא חלק 1. חלק זה שווה ל-4 ילדים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את ההפרש ביחס. 5 פחות 4 שווה ל-1.", "math_expression": "1" },
            { "verbal_explanation": "שלב 2: נתון שהפרש זה שווה ל-4 ילדים. לכן ערך כל יחידה הוא 4.", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: נמצא את סך כל יחידות היחס. 4 פלוס 5.", "math_expression": "9" },
            { "verbal_explanation": "שלב 4: נכפול 9 יחידות ב-4 ילדים ליחידה.", "math_expression": "9 * 4 = 36" }
        ],
        "final_answer": "36 ילדים",
        "options": ["36 ילדים", "20 ילדים", "16 ילדים", "40 ילדים"],
        "correctAnswer": 0
    },
    {
        "id": 38,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Medium",
        "question_text": "חלקו את המספר <strong>120</strong> ביחס של <strong>1 : 5</strong>. מהו החלק הגדול?",
        "hint": "סכום החלקים הוא 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1 + 5 = 6.", "math_expression": "6" },
            { "verbal_explanation": "שלב 2: 120 חלקי 6 שווה ל-20.", "math_expression": "20" },
            { "verbal_explanation": "שלב 3: 5 כפול 20 שווה ל-100.", "math_expression": "100" }
        ],
        "final_answer": "100",
        "options": ["100", "20", "60", "110"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "High",
        "question_text": "בכד יש סוכריות בשלושה צבעים: אדום, ירוק וכחול ביחס של <strong>2 : 3 : 5</strong>. אם יש <strong>50 סוכריות כחולות</strong>, כמה סוכריות יש בסך הכל בכד?",
        "hint": "הכחולות הן החלק של ה-5 ביחס. מצאו את ערך היחידה והכפילו בסכום היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ערך היחידה. 50 חלקי 5.", "math_expression": "10" },
            { "verbal_explanation": "שלב 2: סכום חלקי היחס הוא 2 + 3 + 5 = 10.", "math_expression": "10" },
            { "verbal_explanation": "שלב 3: נכפול את ערך היחידה (10) בסך היחידות (10).", "math_expression": "10 * 10 = 100" }
        ],
        "final_answer": "100 סוכריות",
        "options": ["100 סוכריות", "50 סוכריות", "150 סוכריות", "200 סוכריות"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "חלוקה לפי יחס",
        "difficulty": "Low",
        "question_text": "מהו הצעד הראשון שחובה לבצע בכל תרגיל של חלוקת שלם לפי יחס?",
        "hint": "חשבו על מציאת הסך הכל של ה'חלקים'.",
        "solution_steps": [
            { "verbal_explanation": "כדי לדעת לכמה מנות לחלק את השלם, עלינו קודם כל לחבר את כל המספרים המופיעים ביחס.", "math_expression": "חיבור חלקי היחס" }
        ],
        "final_answer": "חיבור כל חלקי היחס יחד.",
        "options": ["חיסור חלקי היחס", "הכפלת חלקי היחס", "חיבור כל חלקי היחס יחד.", "אין צורך בצעד מקדים"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 3: קנה מידה (20 שאלות) ---
    // ==============================================================
    {
        "id": 41,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "מה הפירוש של קנה מידה <strong>1 : 100</strong> בתוכנית בנייה?",
        "hint": "המספר השמאלי מייצג את הגודל בסרטוט (בתוכנית), והמספר הימני מייצג את הגודל במציאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין את מבנה היחס. המספר 1 מייצג יחידת מידה אחת בסרטוט (למשל 1 סנטימטר).", "math_expression": "1 (סרטוט)" },
            { "verbal_explanation": "שלב 2: המספר 100 מייצג את הגודל האמיתי במציאות.", "math_expression": "100 (מציאות)" },
            { "verbal_explanation": "שלב 3: נסיק שכל סנטימטר אחד בתוכנית שווה ל-100 סנטימטרים במציאות.", "math_expression": "1 סנטימטר = 1 מטר" }
        ],
        "final_answer": "כל סנטימטר בסרטוט שווה ל-100 סנטימטרים במציאות.",
        "options": ["המציאות גדולה פי 100", "הסרטוט גדול פי 100", "הם שווים בגודלם", "המציאות קטנה פי 100"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "קנה המידה במפה הוא <strong>1 : 50,000</strong>. אורך כביש במפה הוא <strong>2 סנטימטר</strong>. מהו אורך הכביש במציאות (בסנטימטרים)?",
        "hint": "הכפילו את האורך במפה במספר הימני של קנה המידה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את יחס ההגדלה. כל יחידה במפה שווה ל-50,000 יחידות במציאות.", "math_expression": "50,000" },
            { "verbal_explanation": "שלב 2: נכפול את האורך שנתון לנו במפה במקדם ההגדלה.", "math_expression": "2 * 50,000 = 100,000" }
        ],
        "final_answer": "100,000 סנטימטרים",
        "options": ["100,000 סנטימטרים", "50,000 סנטימטרים", "25,000 סנטימטרים", "200,000 סנטימטרים"],
        "correctAnswer": 0
    },
    {
        "id": 43,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "אורך חדר במציאות הוא <strong>6 מטרים</strong>. בסרטוט שנעשה בקנה מידה <strong>1 : 100</strong>, מה יהיה אורך החדר?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='100'><rect x='30' y='30' width='90' height='50' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><text x='55' y='60' font-size='14'>6 מטרים</text><path d='M10,10 L40,10' stroke='blue' stroke-width='2'/><text x='15' y='25' font-size='10'>? בסרטוט</text></svg></div>",
        "hint": "הפכו קודם את המטרים לסנטימטרים, ואז חלקו ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את אורך החדר במציאות לסנטימטרים. 6 מטרים כפול 100 סנטימטר למטר.", "math_expression": "6 * 100 = 600" },
            { "verbal_explanation": "שלב 2: נחלק את האורך האמיתי ביחס של קנה המידה (100) כדי לקבל את האורך המוקטן.", "math_expression": "600 / 100 = 6" }
        ],
        "final_answer": "6 סנטימטרים",
        "options": ["60 סנטימטרים", "6 סנטימטרים", "100 סנטימטרים", "600 סנטימטרים"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "גובה של בניין הוא 20 מטרים. ציירו אותו בגובה של 10 סנטימטרים. מהו <strong>קנה המידה</strong> של הציור?",
        "hint": "כתבו את שני הערכים בסנטימטרים, ואז צמצמו את היחס כך שהצד השמאלי יהיה 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את גובה הבניין לסנטימטרים.", "math_expression": "20 * 100 = 2,000" },
            { "verbal_explanation": "שלב 2: נרשום את היחס בין הציור למציאות.", "math_expression": "10 : 2,000" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקה ב-10.", "math_expression": "1 : 200" }
        ],
        "final_answer": "1 : 200",
        "options": ["1 : 20", "1 : 200", "1 : 2", "1 : 100"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "קנה המידה של מפה הוא <strong>1 : 1,000,000</strong>. המרחק בין שתי ערים במפה הוא <strong>4.5 סנטימטר</strong>. מהו המרחק ביניהן במציאות ב<strong>קילומטרים</strong>?",
        "hint": "זכרו שבכל קילומטר יש 100,000 סנטימטרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את המרחק במציאות בסנטימטרים על ידי הכפלה בקנה המידה.", "math_expression": "4.5 * 1,000,000 = 4,500,000" },
            { "verbal_explanation": "שלב 2: נמיר סנטימטרים לקילומטרים על ידי חלוקה ב-100,000 (מורידים 5 אפסים).", "math_expression": "4,500,000 / 100,000 = 45" }
        ],
        "final_answer": "45 קילומטרים",
        "options": ["4.5 קילומטרים", "45 קילומטרים", "450 קילומטרים", "4,500 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 46,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "בציור טכני של בורג השתמשו בקנה מידה של <strong>5 : 1</strong>. מה ניתן להסיק על גודל הבורג בציור לעומת המציאות?",
        "hint": "כאשר המספר השמאלי גדול מהימני, מדובר בהגדלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהמספר השמאלי (סרטוט) הוא 5, והימני (מציאות) הוא 1.", "math_expression": "5 (סרטוט) : 1 (מציאות)" },
            { "verbal_explanation": "שלב 2: נסיק שהציור גדול פי 5 מהבורג האמיתי.", "math_expression": "הגדלה פי 5" }
        ],
        "final_answer": "הציור גדול מהבורג המקורי.",
        "options": ["הבורג גדול מהציור", "הציור גדול מהבורג המקורי.", "הם באותו גודל", "הציור קטן פי 5"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "שני ריבועים דומים בקנה מידה <strong>1 : 3</strong>. אם שטח הריבוע הקטן הוא <strong>10 סמ\"ר</strong>, מהו שטח הריבוע הגדול?",
        "hint": "יחס השטחים הוא תמיד יחס קנה המידה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את יחס השטחים. נעלה את יחס הצלעות (3) בריבוע.", "math_expression": "3 * 3 = 9" },
            { "verbal_explanation": "שלב 2: נכפול את שטח הריבוע הקטן ביחס השטחים שמצאנו.", "math_expression": "10 * 9 = 90" }
        ],
        "final_answer": "90 סמ\"ר",
        "options": ["30 סמ\"ר", "60 סמ\"ר", "90 סמ\"ר", "100 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "איזה קנה מידה מייצג הקטנה?",
        "hint": "חפשו יחס שבו המספר השמאלי קטן מהמספר הימני.",
        "solution_steps": [
            { "verbal_explanation": "כאשר המספר בסרטוט (שמאל) קטן מהמספר במציאות (ימין), מדובר בהקטנה של העצם האמיתי.", "math_expression": "1 : 20" }
        ],
        "final_answer": "1 : 20",
        "options": ["1 : 20", "5 : 1", "1 : 1", "10 : 2"],
        "correctAnswer": 0
    },
    {
        "id": 49,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "אורך של מגרש בסרטוט הוא <strong>5 סנטימטר</strong>. קנה המידה הוא <strong>1 : 400</strong>. מהו אורך המגרש במציאות ב<strong>מטרים</strong>?",
        "hint": "הכפילו את הסנטימטרים ואז חלקו ב-100 כדי להגיע למטרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את האורך בסנטימטרים במציאות.", "math_expression": "5 * 400 = 2,000" },
            { "verbal_explanation": "שלב 2: נמיר מטרים על ידי חלוקה ב-100.", "math_expression": "2,000 / 100 = 20" }
        ],
        "final_answer": "20 מטרים",
        "options": ["2,000 מטרים", "20 מטרים", "400 מטרים", "40 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "גובהה של בובה קטנה הוא <strong>15 סנטימטר</strong>. היא נבנתה כדגם של אדם שגובהו <strong>1.8 מטרים</strong>. מהו קנה המידה?",
        "hint": "הפכו את המטרים לסנטימטרים ואז צמצמו את היחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך 1.8 מטר לסנטימטרים.", "math_expression": "1.8 * 100 = 180" },
            { "verbal_explanation": "שלב 2: נרשום את היחס: דגם למציאות.", "math_expression": "15 : 180" },
            { "verbal_explanation": "שלב 3: נצמצם את היחס על ידי חלוקה ב-15.", "math_expression": "1 : 12" }
        ],
        "final_answer": "1 : 12",
        "options": ["1 : 10", "1 : 12", "1 : 1.8", "1 : 180"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "אם אורך חרק במציאות הוא <strong>2 מ\"מ</strong> ובציור הוא <strong>20 מ\"מ</strong>, מהו קנה המידה?",
        "hint": "רשמו ציור מול מציאות וצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את היחס (ציור : מציאות).", "math_expression": "20 : 2" },
            { "verbal_explanation": "שלב 2: נצמצם על ידי חלוקה ב-2.", "math_expression": "10 : 1" }
        ],
        "final_answer": "10 : 1",
        "options": ["1 : 10", "10 : 1", "20 : 2", "1 : 1"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "במפה שקנה המידה שלה הוא <strong>1 : 250,000</strong>, המרחק בין שתי נקודות הוא <strong>8 סנטימטר</strong>. מהו המרחק ביניהן בקילומטרים?",
        "hint": "8 כפול 250,000 ואז חלוקה ב-100,000.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חישוב בסנטימטרים במציאות.", "math_expression": "8 * 250,000 = 2,000,000" },
            { "verbal_explanation": "שלב 2: המרה לקילומטרים.", "math_expression": "2,000,000 / 100,000 = 20" }
        ],
        "final_answer": "20 קילומטרים",
        "options": ["20 קילומטרים", "200 קילומטרים", "2 קילומטרים", "25 קילומטרים"],
        "correctAnswer": 0
    },
    {
        "id": 53,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "קנה המידה של מפה הוא <strong>1 : 5,000</strong>. שטח מגרש כדורגל במפה הוא <strong>4 סמ\"ר</strong>. מהו השטח האמיתי במציאות ב<strong>מטרים רבועים</strong>?",
        "hint": "שימו לב: יחס השטחים הוא ריבוע קנה המידה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את יחס השטחים (5,000 בריבוע).", "math_expression": "25,000,000" },
            { "verbal_explanation": "שלב 2: נכפול את שטח המפה ביחס.", "math_expression": "4 * 25,000,000 = 100,000,000 (סמ\"ר)" },
            { "verbal_explanation": "שלב 3: נמיר למטרים רבועים (נחלק ב-10,000).", "math_expression": "10,000" }
        ],
        "final_answer": "10,000 מ\"ר",
        "options": ["20,000 מ\"ר", "10,000 מ\"ר", "40,000 מ\"ר", "5,000 מ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "בתוכנית דירה, אורך קיר הוא <strong>4 סנטימטר</strong> וקנה המידה הוא <strong>1 : 50</strong>. מהו אורך הקיר במציאות?",
        "hint": "4 כפול 50.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את האורך בסרטוט במקדם קנה המידה.", "math_expression": "4 * 50 = 200 (ס\"מ) = 2 מטר" }
        ],
        "final_answer": "2 מטרים",
        "options": ["2 מטרים", "4 מטרים", "200 מטרים", "50 סנטימטר"],
        "correctAnswer": 0
    },
    {
        "id": 55,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "דגם של מטוס נבנה בקנה מידה של <strong>1 : 72</strong>. אורך כנף המטוס במציאות הוא <strong>14.4 מטרים</strong>. מה אורך הכנף בדגם?",
        "hint": "המרה לסנטימטרים וחלוקה ב-72.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה לסנטימטרים.", "math_expression": "14.4 * 100 = 1,440" },
            { "verbal_explanation": "שלב 2: חלוקה בקנה מידה.", "math_expression": "1,440 / 72 = 20" }
        ],
        "final_answer": "20 סנטימטרים",
        "options": ["20 סנטימטרים", "14.4 סנטימטרים", "72 סנטימטרים", "10 סנטימטרים"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "במפה א' קנה המידה הוא <strong>1 : 20,000</strong>. במפה ב' קנה המידה הוא <strong>1 : 40,000</strong>. באיזו מפה המרחק בין שתי נקודות ייראה <strong>גדול יותר</strong>?",
        "hint": "קנה מידה עם מספר ימני קטן יותר פירושו הקטנה פחות משמעותית (כלומר דמות גדולה יותר).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין שקנה המידה 1:20,000 מקטין את המציאות פי 20,000.", "math_expression": "מפה א'" },
            { "verbal_explanation": "שלב 2: קנה המידה 1:40,000 מקטין את המציאות פי 40,000 (יותר הקטנה).", "math_expression": "מפה ב'" },
            { "verbal_explanation": "שלב 3: ככל שההקטנה קטנה יותר (מפה א'), כך האובייקט ייראה גדול יותר בסרטוט.", "math_expression": "א' > ב'" }
        ],
        "final_answer": "במפה א'",
        "options": ["במפה א'", "במפה ב'", "המרחק יהיה זהה", "לא ניתן לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 57,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "אורך של נמלה בטבע הוא <strong>5 מ\"מ</strong>. איזה קנה מידה יאפשר לצייר אותה באורך של <strong>10 סנטימטר</strong>?",
        "hint": "הפכו את הסנטימטרים למ\"מ (10 ס\"מ = 100 מ\"מ) ורשמו יחס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה למ\"מ.", "math_expression": "100" },
            { "verbal_explanation": "שלב 2: כתיבת יחס (ציור : מציאות).", "math_expression": "100 : 5" },
            { "verbal_explanation": "שלב 3: צמצום.", "math_expression": "20 : 1" }
        ],
        "final_answer": "20 : 1",
        "options": ["1 : 20", "20 : 1", "2 : 1", "10 : 5"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "קנה מידה",
        "difficulty": "High",
        "question_text": "קנה מידה של מפה הוא <strong>1 : 200,000</strong>. מרחק של <strong>100 ק\"מ</strong> יוצג במפה ב...",
        "hint": "100 ק\"מ הם 10,000,000 סנטימטר. חלקו בקנה המידה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה לסנטימטרים.", "math_expression": "100,000 * 100 = 10,000,000" },
            { "verbal_explanation": "שלב 2: חלוקה ביחס המפה.", "math_expression": "10,000,000 / 200,000 = 50" }
        ],
        "final_answer": "50 סנטימטרים",
        "options": ["50 סנטימטרים", "5 סנטימטרים", "20 סנטימטרים", "10 סנטימטרים"],
        "correctAnswer": 0
    },
    {
        "id": 59,
        "subTopic": "קנה מידה",
        "difficulty": "Low",
        "question_text": "קנה מידה <strong>1 : 1</strong> פירושו:",
        "hint": "השוו בין המונה למכנה.",
        "solution_steps": [
            { "verbal_explanation": "המספרים בשני הצדדים זהים, לכן אין הגדלה ואין הקטנה.", "math_expression": "גודל טבעי" }
        ],
        "final_answer": "האובייקט מצויר בגודלו הטבעי.",
        "options": ["הקטנה פי 2", "הגדלה פי 2", "גודל טבעי.", "ציור לא מדויק"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "קנה מידה",
        "difficulty": "Medium",
        "question_text": "אורך של גשר במציאות הוא <strong>0.5 קילומטר</strong>. באיזה אורך הוא יופיע במפה של <strong>1 : 10,000</strong>?",
        "hint": "הפכו חצי קילומטר לסנטימטרים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה לסנטימטרים.", "math_expression": "0.5 * 100,000 = 50,000" },
            { "verbal_explanation": "שלב 2: חלוקה בקנה מידה.", "math_expression": "50,000 / 10,000 = 5" }
        ],
        "final_answer": "5 סנטימטרים",
        "options": ["50 סנטימטרים", "5 סנטימטרים", "500 סנטימטרים", "0.5 סנטימטר"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 4: פרופורציה (20 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "פרופורציה",
        "difficulty": "Low",
        "question_text": "מהי <strong>פרופורציה</strong> במתמטיקה?",
        "hint": "חשבו על הקשר בין שני יחסים שונים.",
        "solution_steps": [
            { "verbal_explanation": "פרופורציה היא שוויון בין שני יחסים או בין שני שברים.", "math_expression": "A / B = C / D" }
        ],
        "final_answer": "שוויון בין שני יחסים.",
        "options": ["סכום של שני יחסים", "שוויון בין שני יחסים.", "הפרש בין כמויות", "פעולת כפל"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "פרופורציה",
        "difficulty": "Low",
        "question_text": "מצאו את x בפרופורציה הבאה: <strong>2 / 3 = x / 9</strong>",
        "hint": "השתמשו בשיטת 'כפל בהצלבה': המונה של צד אחד כפול המכנה של הצד השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול בהצלבה. 2 כפול 9 שווה ל-3 כפול x.", "math_expression": "2 * 9 = 3x" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה של הצד השמאלי.", "math_expression": "18 = 3x" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 כדי למצוא את x.", "math_expression": "x = 6" }
        ],
        "final_answer": "6",
        "options": ["3", "6", "9", "4"],
        "correctAnswer": 1
    },
    {
        "id": 63,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong>5 / x = 15 / 12</strong>",
        "hint": "כפל בהצלבה: 5 כפול 12 שווה ל-x כפול 15.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול באלכסון.", "math_expression": "5 * 12 = 15x" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה.", "math_expression": "60 = 15x" },
            { "verbal_explanation": "שלב 3: נחלק ב-15.", "math_expression": "x = 4" }
        ],
        "final_answer": "4",
        "options": ["4", "5", "3", "10"],
        "correctAnswer": 0
    },
    {
        "id": 64,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "במתכון ל-4 סועדים צריך 2 ביצים. כמה ביצים צריך ל-10 סועדים?",
        "hint": "בנו פרופורציה: 2 ל-4 שווה x ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה את המשוואה.", "math_expression": "2 / 4 = x / 10" },
            { "verbal_explanation": "שלב 2: נכפול בהצלבה.", "math_expression": "2 * 10 = 4x" },
            { "verbal_explanation": "שלב 3: נפתור.", "math_expression": "20 = 4x -> x = 5" }
        ],
        "final_answer": "5 ביצים",
        "options": ["4 ביצים", "5 ביצים", "6 ביצים", "8 ביצים"],
        "correctAnswer": 1
    },
    {
        "id": 65,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "פתרו את הפרופורציה המורכבת: <strong>(x + 1) / 4 = 3 / 2</strong>",
        "hint": "כפלו את (x+1) ב-2, ואת 3 ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפול בהצלבה.", "math_expression": "2(x + 1) = 3 * 4" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים ונחשב את צד ימין.", "math_expression": "2x + 2 = 12" },
            { "verbal_explanation": "שלב 3: נעביר אגפים.", "math_expression": "2x = 10" },
            { "verbal_explanation": "שלב 4: נחלק ב-2.", "math_expression": "x = 5" }
        ],
        "final_answer": "5",
        "options": ["5", "6", "4", "11"],
        "correctAnswer": 0
    },
    {
        "id": 66,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "אם 3 ק\"ג תפוחים עולים 12 שקלים, כמה יעלו 7 ק\"ג תפוחים?",
        "hint": "בנו יחס של מחיר למשקל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה פרופורציה.", "math_expression": "12 / 3 = x / 7" },
            { "verbal_explanation": "שלב 2: נזהה ש-12 חלקי 3 זה 4 (מחיר לקילו).", "math_expression": "4 = x / 7" },
            { "verbal_explanation": "שלב 3: נכפול ב-7.", "math_expression": "x = 28" }
        ],
        "final_answer": "28 שקלים",
        "options": ["21 שקלים", "28 שקלים", "35 שקלים", "24 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "מצאו את x אם: <strong>x / (x + 2) = 1 / 2</strong>",
        "hint": "כפל בהצלבה והעברת אגפים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל בהצלבה.", "math_expression": "2x = 1(x + 2)" },
            { "verbal_explanation": "שלב 2: העברת x שמאלה.", "math_expression": "2x - x = 2" },
            { "verbal_explanation": "שלב 3: תוצאה.", "math_expression": "x = 2" }
        ],
        "final_answer": "2",
        "options": ["1", "2", "4", "0"],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "פרופורציה",
        "difficulty": "Low",
        "question_text": "האם היחסים <strong>1 : 2</strong> ו- <strong>4 : 8</strong> הם בפרופורציה?",
        "hint": "בדקו האם השברים שווים.",
        "solution_steps": [
            { "verbal_explanation": "נצמצם את היחס השני (4 חלקי 8) ונראה אם נגיע לראשון.", "math_expression": "4 / 8 = 1 / 2" }
        ],
        "final_answer": "כן, הם שווים.",
        "options": ["כן", "לא", "רק אם נחבר אותם", "לא ניתן לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 69,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "משאבה מוציאה 50 ליטרים מים ב-2 דקות. כמה ליטרים היא תוציא ב-5 דקות?",
        "hint": "50 ל-2 שווה x ל-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא קצב לדקה. 50 חלקי 2.", "math_expression": "25 (ליטר לדקה)" },
            { "verbal_explanation": "שלב 2: נכפול את הקצב בזמן הנדרש.", "math_expression": "25 * 5 = 125" }
        ],
        "final_answer": "125 ליטרים",
        "options": ["100 ליטרים", "125 ליטרים", "150 ליטרים", "250 ליטרים"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "פתרו: <strong>3 / 4 = 15 / (2x)</strong>",
        "hint": "שימו לב שהנעלם נמצא בתוך המכנה כ-2x.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל בהצלבה.", "math_expression": "3 * 2x = 4 * 15" },
            { "verbal_explanation": "שלב 2: חישוב המכפלות.", "math_expression": "6x = 60" },
            { "verbal_explanation": "שלב 3: חלוקה ב-6.", "math_expression": "x = 10" }
        ],
        "final_answer": "10",
        "options": ["10", "20", "5", "15"],
        "correctAnswer": 0
    },
    {
        "id": 71,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "מכונית עוברת 180 ק\"מ ב-3 שעות. באיזה מרחק תהיה המכונית לאחר 5 שעות (באותה מהירות)?",
        "hint": "מצאו את המהירות לשעה (180/3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהירות המכונית.", "math_expression": "180 / 3 = 60" },
            { "verbal_explanation": "שלב 2: מרחק לאחר 5 שעות.", "math_expression": "60 * 5 = 300" }
        ],
        "final_answer": "300 ק\"מ",
        "options": ["240 ק\"מ", "300 ק\"מ", "360 ק\"מ", "200 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "מצאו את x: <strong>5 / 2 = 10 / (x - 1)</strong>",
        "hint": "כפל בהצלבה: 5 כפול (x-1) שווה ל-20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל אלכסוני.", "math_expression": "5(x - 1) = 20" },
            { "verbal_explanation": "שלב 2: חלוקה ב-5.", "math_expression": "x - 1 = 4" },
            { "verbal_explanation": "שלב 3: העברת 1 אגף.", "math_expression": "x = 5" }
        ],
        "final_answer": "5",
        "options": ["5", "4", "6", "10"],
        "correctAnswer": 0
    },
    {
        "id": 73,
        "subTopic": "פרופורציה",
        "difficulty": "Low",
        "question_text": "אם היחס בין חולצות לכובעים הוא <strong>3 : 1</strong>, כמה חולצות יש אם ישנם 10 כובעים?",
        "hint": "החולצות הן פי 3 מהכובעים.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את מספר הכובעים ביחס החולצות.", "math_expression": "10 * 3 = 30" }
        ],
        "final_answer": "30 חולצות",
        "options": ["10", "20", "30", "40"],
        "correctAnswer": 2
    },
    {
        "id": 74,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "במבחן היו 25 שאלות. תלמיד ענה נכון על 80% מהשאלות. כמה שאלות נכונות היו לו?",
        "hint": "בנו פרופורציה: x מתוך 25 שווה ל-80 מתוך 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בניית הפרופורציה.", "math_expression": "x / 25 = 80 / 100" },
            { "verbal_explanation": "שלב 2: צמצום 80/100 ל-4/5.", "math_expression": "x / 25 = 4 / 5" },
            { "verbal_explanation": "שלב 3: כפל בהצלבה.", "math_expression": "5x = 100 -> x = 20" }
        ],
        "final_answer": "20 שאלות",
        "options": ["15", "20", "22", "18"],
        "correctAnswer": 1
    },
    {
        "id": 75,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "היחס בין השטח של שני עיגולים הוא <strong>4 : 9</strong>. מהו היחס בין ה<strong>רדיוסים</strong> שלהם?",
        "hint": "זכרו שיחס השטחים הוא ריבוע יחס הרדיוסים. הוציאו שורש.",
        "solution_steps": [
            { "verbal_explanation": "נבצע פעולת שורש ריבועי על שני מספרי היחס.", "math_expression": "שורש(4) : שורש(9) = 2 : 3" }
        ],
        "final_answer": "2 : 3",
        "options": ["2 : 3", "4 : 9", "16 : 81", "1 : 2"],
        "correctAnswer": 0
    },
    {
        "id": 76,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "פתרו: <strong>x / 10 = 0.4 / 2</strong>",
        "hint": "אל תיבהלו מהשבר העשרוני, עבדו כרגיל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל בהצלבה.", "math_expression": "2x = 10 * 0.4" },
            { "verbal_explanation": "שלב 2: חישוב צד ימין.", "math_expression": "2x = 4" },
            { "verbal_explanation": "שלב 3: חלוקה.", "math_expression": "x = 2" }
        ],
        "final_answer": "2",
        "options": ["2", "4", "0.2", "20"],
        "correctAnswer": 0
    },
    {
        "id": 77,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "בספרייה יש 3 ספרים באנגלית על כל 7 ספרים בעברית. אם יש 210 ספרים בעברית, כמה ספרים ב<strong>אנגלית</strong> יש?",
        "hint": "3 ל-7 שווה x ל-210.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כמה פעמים 7 נכנס ב-210?", "math_expression": "210 / 7 = 30" },
            { "verbal_explanation": "שלב 2: נכפול את היחס של אנגלית (3) ב-30.", "math_expression": "3 * 30 = 90" }
        ],
        "final_answer": "90 ספרים",
        "options": ["90", "70", "100", "60"],
        "correctAnswer": 0
    },
    {
        "id": 78,
        "subTopic": "פרופורציה",
        "difficulty": "High",
        "question_text": "במשולשים דומים, היחס בין הצלעות הוא <strong>1 : 5</strong>. אם היקף המשולש הקטן הוא 12 ס\"מ, מהו היקף המשולש הגדול?",
        "hint": "ההיקף גדל בדיוק לפי יחס הצלעות (לא בריבוע!).",
        "solution_steps": [
            { "verbal_explanation": "נכפול את היקף המשולש הקטן ביחס ההגדלה.", "math_expression": "12 * 5 = 60" }
        ],
        "final_answer": "60 ס\"מ",
        "options": ["60 ס\"מ", "30 ס\"מ", "120 ס\"מ", "24 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 79,
        "subTopic": "פרופורציה",
        "difficulty": "Medium",
        "question_text": "פתרו: <strong>8 / 4 = x / 0.5</strong>",
        "hint": "8 חלקי 4 זה 2. איזה מספר חלקי חצי נותן 2?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: צמצום צד שמאל.", "math_expression": "2 = x / 0.5" },
            { "verbal_explanation": "שלב 2: כפל בחצי.", "math_expression": "x = 2 * 0.5 = 1" }
        ],
        "final_answer": "1",
        "options": ["1", "4", "2", "0.5"],
        "correctAnswer": 0
    },
    {
        "id": 80,
        "subTopic": "פרופורציה",
        "difficulty": "Low",
        "question_text": "מה קורה לערך x בפרופורציה <strong>1 / 2 = x / 10</strong> אם נגדיל את ה-10 ל-20?",
        "hint": "כדי לשמור על יחס של חצי, המונה חייב להיות תמיד חצי מהמכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במצב המקורי x שווה ל-5 (חצי מ-10).", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: אם המכנה גדל ל-20, x החדש חייב להיות חצי מ-20.", "math_expression": "10" },
            { "verbal_explanation": "שלב 3: נסיק ש-x יגדל גם הוא.", "math_expression": "גדל" }
        ],
        "final_answer": "הערך של x יגדל.",
        "options": ["x יקטן", "x יגדל.", "x יישאר ללא שינוי", "x יהפוך ל-0"],
        "correctAnswer": 1
    }
];