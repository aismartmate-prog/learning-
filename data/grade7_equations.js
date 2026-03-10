const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: פתרון משוואות בנעלם אחד (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה הבאה ומצאו את ערכו של X: <strong> X + 7 = 12 </strong><br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><path d='M100,80 L100,20 L50,40 L150,40 Z' fill='none' stroke='#cbd5e1' stroke-width='2'/><line x1='30' y1='40' x2='170' y2='40' stroke='#1e293b' stroke-width='4'/><path d='M50,40 L30,70 L70,70 Z' fill='#fefce8' stroke='#b09151' stroke-width='2'/><text x='50' y='65' font-size='12' font-weight='bold' text-anchor='middle'>X + 7</text><path d='M150,40 L130,70 L170,70 Z' fill='#fefce8' stroke='#b09151' stroke-width='2'/><text x='150' y='65' font-size='12' font-weight='bold' text-anchor='middle'>12</text><path d='M70,90 Q100,70 130,90' fill='none' stroke='#1e293b' stroke-width='2'/><rect x='80' y='90' width='40' height='10' fill='#1e293b'/></svg></div>",
        "hint": "משוואה היא כמו מאזניים מאוזנים. כדי להשאיר את X לבד בצד אחד, עלינו 'להוריד' 7 משני צידי המאזניים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המטרה שלנו בפתרון משוואה היא לבודד את הנעלם X באגף אחד (שיישאר לבד). כרגע מחובר אליו המספר 7.", "math_expression": "X + 7 = 12" },
            { "verbal_explanation": "שלב 2: כדי להיפטר מה-7, נבצע את הפעולה ההפוכה. נחסיר 7 משני אגפי המשוואה (כדי לשמור על האיזון).", "math_expression": "X + 7 - 7 = 12 - 7" },
            { "verbal_explanation": "שלב 3: באגף שמאל ה-7 מתבטל ונשאר רק X. באגף ימין נחשב 12 פחות 7.", "math_expression": "X = 5" }
        ],
        "final_answer": "5",
        "options": ["19", "5", "6", "4"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Low",
        "question_text": "פתרו את המשוואה הבאה: <strong> X - 4 = 15 </strong>",
        "hint": "איזה מספר, אם נחסיר ממנו 4, ייתן לנו 15? בצעו את הפעולה ההפוכה לחיסור משני צידי המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ה-X נמצא באגף שמאל, אך מחסרים ממנו 4. כדי לבודד אותו, עלינו 'לבטל' את החיסור.", "math_expression": "X - 4 = 15" },
            { "verbal_explanation": "שלב 2: הפעולה ההפוכה לחיסור היא חיבור. לכן, נוסיף 4 לשני אגפי המשוואה.", "math_expression": "X = 15 + 4" },
            { "verbal_explanation": "שלב 3: נחשב את סכום המספרים באגף ימין כדי למצוא את התשובה.", "math_expression": "X = 19" }
        ],
        "final_answer": "19",
        "options": ["11", "20", "19", "15"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Medium",
        "question_text": "מצאו את הנעלם במשוואת הכפל: <strong> 3X = 24 </strong>",
        "hint": "הביטוי 3X משמעותו 3 כפול X. מהי הפעולה ההפוכה לכפל?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בין המספר 3 לנעלם X מסתתרת פעולת כפל. המשוואה שואלת: 3 כפול איזה מספר שווה 24?", "math_expression": "3 × X = 24" },
            { "verbal_explanation": "שלב 2: כדי לבודד את X, נבצע את הפעולה ההפוכה לכפל - פעולת חילוק. נחלק את שני האגפים ב-3.", "math_expression": "X = 24 ÷ 3" },
            { "verbal_explanation": "שלב 3: נחשב את החילוק באגף ימין. 24 לחלק ל-3 נותן 8.", "math_expression": "X = 8" }
        ],
        "final_answer": "8",
        "options": ["8", "7", "21", "72"],
        "correctAnswer": 0
    },
    {
        "id": 4,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הדו-שלבית הבאה: <strong> 2X + 5 = 17 </strong>",
        "hint": "במשוואות של שני שלבים, קודם 'מנקים' את מספרי החיבור/חיסור, ורק בסוף מטפלים במספר שכופל את ה-X.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בלהרחיק את המספרים החופשיים מהאגף של ה-X. נחסיר 5 משני צידי המשוואה.", "math_expression": "2X = 17 - 5" },
            { "verbal_explanation": "שלב 2: נחשב את אגף ימין. קיבלנו שפעמיים X שווה ל-12.", "math_expression": "2X = 12" },
            { "verbal_explanation": "שלב 3: כעת נחלק את שני האגפים ב-2 כדי למצוא כמה שווה X אחד בודד.", "math_expression": "X = 12 ÷ 2 = 6" }
        ],
        "final_answer": "6",
        "options": ["5", "6", "11", "12"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "High",
        "question_text": "מצאו את X במשוואה שבה הנעלם מופיע בשני האגפים: <strong> 5X = 2X + 15 </strong>",
        "hint": "המטרה היא לרכז את כל ה'איקסים' בצד אחד, ואת כל המספרים בצד השני. העבירו את 2X שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו רואים נעלמים גם בימין וגם בשמאל. עלינו לאסוף אותם יחד. נחסיר 2X משני האגפים כדי להעביר אותו שמאלה.", "math_expression": "5X - 2X = 15" },
            { "verbal_explanation": "שלב 2: נכנס את האיברים הדומים באגף שמאל: 5 איקסים פחות 2 איקסים משאיר אותנו עם 3 איקסים.", "math_expression": "3X = 15" },
            { "verbal_explanation": "שלב 3: נבודד את X לחלוטין על ידי חלוקת המשוואה כולה ב-3.", "math_expression": "X = 15 ÷ 3 = 5" }
        ],
        "final_answer": "5",
        "options": ["3", "5", "10", "15"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Low",
        "question_text": "פתרו את משוואת החילוק הבאה: <strong> X ÷ 4 = 6 </strong>",
        "hint": "הנעלם שלנו מחולק ל-4. כדי להחזיר אותו לגודלו המקורי, עלינו להכפיל את שני צידי המשוואה ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ה-X נמצא תחת פעולת חילוק. הפעולה ההפוכה לחילוק היא כפל.", "math_expression": "X ÷ 4 = 6" },
            { "verbal_explanation": "שלב 2: נכפיל את שני אגפי המשוואה ב-4 כדי לבטל את החילוק באגף שמאל.", "math_expression": "X = 6 × 4" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה כדי לקבל את ערכו השלם של X.", "math_expression": "X = 24" }
        ],
        "final_answer": "24",
        "options": ["10", "2", "24", "1.5"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong> 4X - 8 = 12 </strong>",
        "hint": "העבירו את המספר 8- לאגף השני (הוא יהפוך לפלוס 8), ואז חלקו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את האיבר עם ה-X (כלומר 4X). נעשה זאת על ידי הוספת 8 לשני צידי המשוואה.", "math_expression": "4X = 12 + 8" },
            { "verbal_explanation": "שלב 2: נחבר את המספרים באגף ימין. קיבלנו ש-4 איקסים שווים ל-20.", "math_expression": "4X = 20" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 כדי למצוא את ערכו של איקס בודד.", "math_expression": "X = 20 ÷ 4 = 5" }
        ],
        "final_answer": "5",
        "options": ["1", "4", "5", "8"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה, שבה התוצאה היא מספר שלילי: <strong> X + 15 = 5 </strong>",
        "hint": "חישבו בהיגיון: הוספנו 15 ל-X והגענו למספר קטן יותר (5). זה אומר ש-X חייב להיות מתחת לאפס!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבודד את X על ידי חיסור 15 משני אגפי המשוואה.", "math_expression": "X = 5 - 15" },
            { "verbal_explanation": "שלב 2: יש לנו 5 שקלים, ואנו מנסים להחסיר מהם 15 שקלים. התוצאה תכניס אותנו לחוב (למספרים השליליים).", "math_expression": "5 - 15" },
            { "verbal_explanation": "שלב 3: ההפרש הוא 10 לטובת המינוס, לכן התשובה היא מינוס 10.", "math_expression": "X = -10" }
        ],
        "final_answer": "10-",
        "options": ["10", "10-", "20", "20-"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Low",
        "question_text": "מצאו את ערכו של X במשוואה: <strong> -X = 9 </strong>",
        "hint": "המשוואה אומרת 'הנגדי של X הוא 9'. מהו X עצמו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קיבלנו את הערך של מינוס X, אבל אנחנו תמיד מחפשים את הערך של X חיובי נקי.", "math_expression": "-X = 9" },
            { "verbal_explanation": "שלב 2: כדי להפוך את מינוס X ל-X רגיל, נוכל להכפיל (או לחלק) את שני צידי המשוואה במינוס 1.", "math_expression": "X = 9 ÷ (-1)" },
            { "verbal_explanation": "שלב 3: כתוצאה מכך, הסימנים בשני האגפים מתהפכים. ה-X הופך לחיובי, וה-9 הופך לשלילי.", "math_expression": "X = -9" }
        ],
        "final_answer": "9-",
        "options": ["9", "9-", "0", "1"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה עם המקדם השלילי: <strong> -3X = 21 </strong>",
        "hint": "עליכם לחלק את כל המשוואה במקדם של X במדויק, כולל סימן המינוס שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ה-X מוכפל במספר שלילי (מינוס 3). כדי לבודד אותו, עלינו לחלק את המשוואה כולה באותו מספר בדיוק.", "math_expression": "X = 21 ÷ (-3)" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת החילוק. 21 לחלק ל-3 זה 7.", "math_expression": "7" },
            { "verbal_explanation": "שלב 3: לפי חוקי הסימנים, מספר חיובי לחלק למספר שלילי נותן תוצאה שלילית.", "math_expression": "X = -7" }
        ],
        "final_answer": "7-",
        "options": ["7", "7-", "24", "18"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "High",
        "question_text": "מצאו את הנעלם במשוואה: <strong> 10 - X = 4 </strong>",
        "hint": "זהירות, ה-X כאן מופיע במינוס! אפשר להעביר את ה-X עצמו לאגף השני כדי שיהפוך לחיובי, ואת ה-4 שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הדרך הבטוחה ביותר היא תמיד לדאוג שה-X יהיה חיובי. לכן, נוסיף X לשני האגפים כדי להעביר אותו ימינה.", "math_expression": "10 = 4 + X" },
            { "verbal_explanation": "שלב 2: כעת נבודד את ה-X בצד ימין על ידי חיסור 4 משני האגפים (העברת ה-4 שמאלה).", "math_expression": "10 - 4 = X" },
            { "verbal_explanation": "שלב 3: נחשב את ההפרש ונקבל את התשובה.", "math_expression": "6 = X" }
        ],
        "final_answer": "6",
        "options": ["14", "6-", "6", "14-"],
        "correctAnswer": 2
    },
    {
        "id": 12,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Low",
        "question_text": "מהו הפתרון של המשוואה הבאה: <strong> 8X = 0 </strong>?",
        "hint": "חשבו: איזה מספר נכפיל ב-8 כדי שהתוצאה תהיה כלום (אפס)?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשוואה שואלת 8 כפול איזה מספר שווה לאפס.", "math_expression": "8 × X = 0" },
            { "verbal_explanation": "שלב 2: במתמטיקה קיים חוק האפס. הדרך היחידה לקבל מכפלה ששווה לאפס, היא אם אחד מהגורמים הוא אפס.", "math_expression": "X = 0 ÷ 8" },
            { "verbal_explanation": "שלב 3: אפס לחלק לכל מספר נשאר תמיד אפס.", "math_expression": "X = 0" }
        ],
        "final_answer": "0",
        "options": ["8", "0", "8-", "אין פתרון"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "High",
        "question_text": "בצעו כינוס איברים ופתרו את המשוואה: <strong> 3X + 4X = 28 </strong>",
        "hint": "המשוואה קלה יותר ממה שהיא נראית. שני האיברים מכילים X, אז אפשר פשוט לחבר אותם (כמו 3 תפוחים ועוד 4 תפוחים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: באגף שמאל יש לנו שני 'איברים דומים' (שניהם מאותה משפחה של X). נאחד אותם: 3 ועוד 4 זה 7X.", "math_expression": "7X = 28" },
            { "verbal_explanation": "שלב 2: כעת קיבלנו משוואה פשוטה. נחלק את המשוואה במקדם של X, שהוא 7.", "math_expression": "X = 28 ÷ 7" },
            { "verbal_explanation": "שלב 3: נחשב את החילוק ונמצא את התשובה.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["7", "21", "4", "14"],
        "correctAnswer": 2
    },
    {
        "id": 14,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong> 2X = 11 </strong>",
        "hint": "התשובה לא חייבת להיות מספר שלם. אל תפחדו משברים או מספרים עשרוניים!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למצוא את X, עלינו לחלק את שני האגפים ב-2.", "math_expression": "X = 11 ÷ 2" },
            { "verbal_explanation": "שלב 2: 11 אינו מתחלק ב-2 ללא שארית, וזה בסדר גמור. ניתן לכתוב את התשובה כשבר עשרוני.", "math_expression": "11 ÷ 2 = 5.5" },
            { "verbal_explanation": "שלב 3: (אפשר גם לכתוב את התשובה כשבר מעורב: 5 וחצי).", "math_expression": "X = 5.5" }
        ],
        "final_answer": "5.5",
        "options": ["6", "5", "5.5", "13"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "פתרון משוואות בנעלם אחד",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה שבה הנעלמים מעורבבים בשני האגפים: <strong> 6X - 2 = 4X + 8 </strong>",
        "hint": "העבירו את כל ה'איקסים' לאגף שמאל (על ידי חיסור 4X), ואת כל המספרים הרגילים לאגף ימין (על ידי הוספת 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל בריכוז האיקסים. נחסיר 4X משני צידי המשוואה כדי להעביר את ה-X ימינה לשמאל.", "math_expression": "6X - 4X - 2 = 8" },
            { "verbal_explanation": "שלב 2: נכנס איברים ונקבל 2X בצד שמאל. במקביל, נעביר את המינוס 2 ימינה על ידי הוספת 2 לשני האגפים.", "math_expression": "2X = 8 + 2" },
            { "verbal_explanation": "שלב 3: נסכם את אגף ימין ונקבל ש-2X שווים ל-10.", "math_expression": "2X = 10" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 כדי להגיע ל-X בודד.", "math_expression": "X = 5" }
        ],
        "final_answer": "5",
        "options": ["3", "5", "10", "6"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: משוואות עם סוגריים (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Low",
        "question_text": "השתמשו בחוק הפילוג כדי לפתור את המשוואה: <strong> 2(X + 3) = 14 </strong>",
        "hint": "המספר מחוץ לסוגריים (2) מכפיל את *כל* מה שבפנים. גם את ה-X וגם את ה-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים בעזרת חוק הפילוג ('פתיחת סוגריים'). נכפיל את ה-2 ב-X, ואז נכפיל את ה-2 ב-3.", "math_expression": "2X + 6 = 14" },
            { "verbal_explanation": "שלב 2: קיבלנו משוואה רגילה. נחסיר 6 משני האגפים כדי לבודד את האיבר עם ה-X.", "math_expression": "2X = 14 - 6" },
            { "verbal_explanation": "שלב 3: קיבלנו 2X = 8. נחלק ב-2 כדי למצוא את הפתרון הסופי.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["4", "7", "5.5", "11"],
        "correctAnswer": 0
    },
    {
        "id": 17,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הבאה הכוללת חיסור בתוך הסוגריים: <strong> 3(X - 4) = 15 </strong>",
        "hint": "כשאתם פותחים סוגריים, זכרו להכפיל את 3 במינוס 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הפילוג. נכפיל 3 ב-X (נקבל 3X), ואז נכפיל 3 במינוס 4 (נקבל מינוס 12).", "math_expression": "3X - 12 = 15" },
            { "verbal_explanation": "שלב 2: כדי לבודד את 3X, נוסיף 12 לשני האגפים (נעביר אגף ונשנה סימן).", "math_expression": "3X = 15 + 12" },
            { "verbal_explanation": "שלב 3: נחשב את הסכום ונקבל 3X = 27. כעת נחלק ב-3.", "math_expression": "X = 9" }
        ],
        "final_answer": "9",
        "options": ["6", "9", "3", "19"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "מהו ערכו של X במשוואה עם המקדם השלילי: <strong> -2(X + 5) = -18 </strong>?",
        "hint": "שימו לב: מכפילים את כל תכולת הסוגריים במינוס 2. לכן גם ה-X וגם ה-5 ישנו את הסימן שלהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים בזהירות. מינוס 2 כפול X זה 2X-. מינוס 2 כפול 5 חיובי נותן 10-.", "math_expression": "-2X - 10 = -18" },
            { "verbal_explanation": "שלב 2: נוסיף 10 לשני האגפים כדי לבודד את ה-X.", "math_expression": "-2X = -18 + 10" },
            { "verbal_explanation": "שלב 3: חיבור של 18- ו-10 נותן 8-. לכן, 2X- שווה ל 8-.", "math_expression": "-2X = -8" },
            { "verbal_explanation": "שלב 4: נחלק במינוס 2. זכרו שמינוס חלקי מינוס נותן פלוס.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["4-", "14", "4", "9"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Low",
        "question_text": "לפניכם משוואה שבה המינוס עומד לבדו לפני הסוגריים: <strong> -(X + 4) = 6 </strong>. מצאו את X.",
        "hint": "סימן מינוס בודד לפני סוגריים מתנהג כאילו כתוב שם 'מינוס 1 כפול'. הוא פשוט הופך את הסימן של כל איבר בפנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכניס את המינוס לתוך הסוגריים. ה-X החיובי הופך ל-X שלילי, וה-4 החיובי הופך ל-4 שלילי.", "math_expression": "-X - 4 = 6" },
            { "verbal_explanation": "שלב 2: נעביר את ה-4 לאגף הימני על ידי חיבור 4 לשני צידי המשוואה.", "math_expression": "-X = 6 + 4 = 10" },
            { "verbal_explanation": "שלב 3: קיבלנו שהנגדי של X הוא 10. כדי למצוא את X עצמו, נכפיל במינוס 1 (או פשוט נהפוך סימנים משני הצדדים).", "math_expression": "X = -10" }
        ],
        "final_answer": "10-",
        "options": ["10", "10-", "2", "2-"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה הבאה המשלבת סוגריים ואיבר חופשי באותו אגף: <strong> 2(X + 1) + 3 = 11 </strong>",
        "hint": "קודם פתחו את הסוגריים. לאחר מכן, חברו את המספרים החופשיים שבאגף שמאל, ורק אז התחילו להעביר אגפים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפעיל את חוק הפילוג על הסוגריים בלבד: נכפיל את ה-X ואת ה-1 ב-2.", "math_expression": "2X + 2 + 3 = 11" },
            { "verbal_explanation": "שלב 2: נכנס את האיברים הרגילים באגף השמאלי (נחבר 2 ו-3 ל-5).", "math_expression": "2X + 5 = 11" },
            { "verbal_explanation": "שלב 3: כעת נחסיר 5 משני האגפים כדי לבודד את 2X.", "math_expression": "2X = 11 - 5 = 6" },
            { "verbal_explanation": "שלב 4: נחלק ב-2.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["4", "3", "5", "8"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "פתרו משוואה המכילה סוגריים בשני האגפים: <strong> 2(X + 1) = 3(X - 2) </strong>",
        "hint": "בצעו פתיחת סוגריים (חוק הפילוג) בשני הצדדים במקביל. לאחר מכן, העבירו את כל ה-X לאגף אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים באגף שמאל (יוצא 2X + 2) ובאגף ימין (יוצא 3X פחות 6).", "math_expression": "2X + 2 = 3X - 6" },
            { "verbal_explanation": "שלב 2: נרכז את כל האיקסים בצד ימין (כדי שיישארו חיוביים). נחסיר 2X משני האגפים.", "math_expression": "2 = 3X - 2X - 6" },
            { "verbal_explanation": "שלב 3: באגף ימין נשאר לנו X יחיד (3X פחות 2X). המשוואה כעת היא: 2 שווה ל-X פחות 6.", "math_expression": "2 = X - 6" },
            { "verbal_explanation": "שלב 4: נוסיף 6 לשני האגפים כדי לבודד לחלוטין את X.", "math_expression": "X = 8" }
        ],
        "final_answer": "8",
        "options": ["4", "8", "1", "10"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Low",
        "question_text": "מהו הפתרון של המשוואה: <strong> 10(X + 2) = 50 </strong>?",
        "hint": "טיפ של אלופים: במקום לפתוח סוגריים, נסו לחלק את כל המשוואה ב-10 כבר בהתחלה!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במקום להכפיל את הסוגריים פנימה, אנו שמים לב ש-50 מתחלק ב-10 בקלות. לכן נחלק את כל המשוואה ב-10 כצעד ראשון.", "math_expression": "X + 2 = 50 ÷ 10" },
            { "verbal_explanation": "שלב 2: באגף ימין קיבלנו 5. הסוגריים נעלמו מכיוון שביטלנו את הכופל שלהם.", "math_expression": "X + 2 = 5" },
            { "verbal_explanation": "שלב 3: נחסיר 2 משני האגפים כדי למצוא את X.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["3", "5", "7", "4.8"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה ומיצאו את X: <strong> 4(X + 2) - 2X = 14 </strong>",
        "hint": "המספר 4 מכפיל רק את מה שבתוך הסוגריים! המינוס 2X מחוץ לסוגריים ולכן לא מוכפל ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים לפי חוק הפילוג. ה-4 מכפיל את X ואת 2. נקפיד להעתיק את שאר המשוואה כמו שהיא.", "math_expression": "4X + 8 - 2X = 14" },
            { "verbal_explanation": "שלב 2: נבצע 'כינוס איברים' באגף שמאל. נחשב כמה זה 4X פחות 2X.", "math_expression": "2X + 8 = 14" },
            { "verbal_explanation": "שלב 3: נעביר את ה-8 אגף על ידי חיסור.", "math_expression": "2X = 14 - 8 = 6" },
            { "verbal_explanation": "שלב 4: נחלק ב-2.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["1.5", "3", "5", "6"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Medium",
        "question_text": "האם התוצאה של המשוואה הבאה היא אפס? <strong> 5(X - 3) = -15 </strong>",
        "hint": "פתחו סוגריים או חלקו ב-5, וגלו בעצמכם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש ב'טיפ' של חלוקת המשוואה. נחלק את שני האגפים ב-5.", "math_expression": "X - 3 = -15 ÷ 5" },
            { "verbal_explanation": "שלב 2: חישוב צד ימין נותן לנו מינוס 3.", "math_expression": "X - 3 = -3" },
            { "verbal_explanation": "שלב 3: נוסיף 3 לשני האגפים כדי לבודד את X. מינוס 3 ועוד 3 מתאפסים.", "math_expression": "X = 0" }
        ],
        "final_answer": "כן, הפתרון הוא X = 0",
        "options": ["לא, הפתרון הוא 3-", "כן, הפתרון הוא X = 0", "לא, הפתרון הוא 3", "לא, אין פתרון למשוואה"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה: <strong> -3(2 - X) = 12 </strong>",
        "hint": "שימו לב היטב: כשאתם מכפילים את ה-3- במינוס X שבתוך הסוגריים, נוצר לכם פלוס!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים. מינוס 3 כפול 2 זה 6-. מינוס 3 כפול מינוס X נותן פלוס 3X.", "math_expression": "-6 + 3X = 12" },
            { "verbal_explanation": "שלב 2: נעביר את המספר 6- לאגף ימין על ידי הוספת 6 לשני האגפים.", "math_expression": "3X = 12 + 6 = 18" },
            { "verbal_explanation": "שלב 3: נחלק את המשוואה ב-3 כדי למצוא את ערכו של X.", "math_expression": "X = 6" }
        ],
        "final_answer": "6",
        "options": ["6-", "2", "6", "2-"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Medium",
        "question_text": "מצאו את X במשוואה: <strong> 4(X - 1) = 20 </strong>",
        "hint": "אפשר לפתוח סוגריים (4X - 4) או לחלק את כל המשוואה ב-4 בתור התחלה. שתי הדרכים נכונות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחר בדרך של פתיחת סוגריים הפעם. 4 כפול X פחות 4 כפול 1.", "math_expression": "4X - 4 = 20" },
            { "verbal_explanation": "שלב 2: נוסיף 4 לשני האגפים.", "math_expression": "4X = 24" },
            { "verbal_explanation": "שלב 3: נחלק ב-4.", "math_expression": "X = 6" }
        ],
        "final_answer": "6",
        "options": ["5", "6", "4", "24"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "התבוננו במקרה המיוחד הבא: <strong> 2(X + 3) = 2X + 6 </strong>. כמה פתרונות יש למשוואה זו?",
        "hint": "פתחו סוגריים ובדקו מה קורה לשני האגפים. האם הם זהים לחלוטין?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים באגף שמאל. 2 כפול X ועוד 2 כפול 3.", "math_expression": "2X + 6 = 2X + 6" },
            { "verbal_explanation": "שלב 2: נשים לב ששני האגפים זהים לחלוטין! משוואה כזו נקראת 'זהות'.", "math_expression": "זהות מתמטית" },
            { "verbal_explanation": "שלב 3: אם ננסה לחסיר 2X משני האגפים נקבל 6 = 6, שזה תמיד נכון. לכן, כל מספר בעולם שנציב במקום X ייתן פסוק אמת.", "math_expression": "אינסוף פתרונות" }
        ],
        "final_answer": "אינסוף פתרונות (כל מספר הוא פתרון)",
        "options": ["פתרון אחד בלבד (X=0)", "אף פתרון", "אינסוף פתרונות (כל מספר הוא פתרון)", "רק מספרים חיוביים"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "כמה פתרונות יש למשוואה הבאה: <strong> 3(X + 1) = 3X + 5 </strong>?",
        "hint": "פתחו סוגריים, ונסו להחסיר 3X משני האגפים. מה נשאר? האם זה הגיוני?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח סוגריים בצד שמאל.", "math_expression": "3X + 3 = 3X + 5" },
            { "verbal_explanation": "שלב 2: ננסה לבודד את X על ידי חיסור 3X משני האגפים. ה-X נעלם משני צידי המשוואה!", "math_expression": "3 = 5" },
            { "verbal_explanation": "שלב 3: קיבלנו פסוק שקר טהור (3 אינו שווה ל-5 לעולם). פירוש הדבר שאין שום מספר שנוכל להציב במקום X שיקיים את המשוואה הזו.", "math_expression": "אין פתרון" }
        ],
        "final_answer": "אף פתרון",
        "options": ["פתרון אחד", "שני פתרונות", "אינסוף פתרונות", "אף פתרון"],
        "correctAnswer": 3
    },
    {
        "id": 29,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "Medium",
        "question_text": "פתרו את המשוואה: <strong> 2(3X - 1) = 16 </strong>",
        "hint": "חלקו את שני האגפים ב-2 כדי 'לקלף' את הסוגריים במהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי לחסוך עבודה, נחלק מיד את כל המשוואה ב-2. כך ניפטר מהכופל שלצד הסוגריים.", "math_expression": "3X - 1 = 8" },
            { "verbal_explanation": "שלב 2: נוסיף 1 לשני האגפים.", "math_expression": "3X = 9" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 ונקבל את הפתרון.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["3", "6", "9", "4.5"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "משוואות עם סוגריים",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה: <strong> - (X - 5) = X + 1 </strong>",
        "hint": "המינוס לפני הסוגריים הופך כל סימן בפנים: ה-X הופך לשלילי וה-5 השלילי הופך לחיובי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נפתח את הסוגריים עם המינוס לפניו.", "math_expression": "-X + 5 = X + 1" },
            { "verbal_explanation": "שלב 2: נעביר את המינוס X מאגף שמאל לאגף ימין על ידי חיבור X לשני הצדדים.", "math_expression": "5 = 2X + 1" },
            { "verbal_explanation": "שלב 3: נחסיר 1 משני האגפים.", "math_expression": "4 = 2X" },
            { "verbal_explanation": "שלב 4: נחלק ב-2.", "math_expression": "2 = X" }
        ],
        "final_answer": "2",
        "options": ["3", "2", "2-", "0"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- תת נושא 3: בניית משוואה לבעיה (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Low",
        "question_text": "מספר מסוים הוכפל ב-3 ולאחר מכן הוספנו לתוצאה 4. התקבל המספר 19. איזו <strong>משוואה</strong> מתאימה לתיאור הבעיה (כאשר X הוא המספר הסודי)?",
        "hint": "תרגמו מילה במילה: 'מספר מסוים' זה X. 'הוכפל ב-3' זה 3X. 'הוספנו 4' זה +4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הנעלם שלנו. 'מספר מסוים' ייקרא X.", "math_expression": "X" },
            { "verbal_explanation": "שלב 2: נבצע את הפעולה הראשונה שמתוארת - כפל ב-3.", "math_expression": "3X" },
            { "verbal_explanation": "שלב 3: נבצע את הפעולה השנייה - הוספת 4 לתוצאה.", "math_expression": "3X + 4" },
            { "verbal_explanation": "שלב 4: נשווה את הביטוי שבנינו לתוצאה הסופית שניתנה בסיפור (19).", "math_expression": "3X + 4 = 19" }
        ],
        "final_answer": "3X + 4 = 19",
        "options": ["3(X + 4) = 19", "3X + 4 = 19", "X/3 + 4 = 19", "3X - 4 = 19"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Low",
        "question_text": "לדני יש <strong>פי 2</strong> יותר גולות מאשר לרועי. לשניהם יחד יש <strong>30 גולות</strong>. כמה גולות יש <strong>לרועי</strong>?",
        "hint": "סמנו את כמות הגולות של רועי ב-X. כמה גולות יש לדני אם יש לו 'פי 2'? חברו את שניהם ל-30.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחר למי לתת את ה-X. תמיד קל יותר לתת X למי שיש לו פחות. רועי = X.", "math_expression": "רועי = X" },
            { "verbal_explanation": "שלב 2: לדני יש פי 2, לכן הכמות שלו היא 2X.", "math_expression": "דני = 2X" },
            { "verbal_explanation": "שלב 3: נבנה משוואה: הכמות של רועי ועוד הכמות של דני שווה 30.", "math_expression": "X + 2X = 30" },
            { "verbal_explanation": "שלב 4: נכנס איברים (3X) ונחלק ב-3 כדי למצוא את X (הכמות של רועי).", "math_expression": "3X = 30 \u2192 X = 10" }
        ],
        "final_answer": "10 גולות",
        "options": ["10 גולות", "20 גולות", "15 גולות", "5 גולות"],
        "correctAnswer": 0
    },
    {
        "id": 33,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "סכומם של <strong>שני מספרים עוקבים</strong> (כמו 5 ו-6, או 11 ו-12) הוא <strong>25</strong>. מהו המספר <strong>הקטן</strong> מביניהם?",
        "hint": "מספרים עוקבים קופצים ב-1. אם הקטן הוא X, העוקב אחריו הוא X + 1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המספר הראשון (הקטן) כ-X.", "math_expression": "מספר א = X" },
            { "verbal_explanation": "שלב 2: המספר העוקב אחריו גדול ממנו בדיוק ב-1.", "math_expression": "מספר ב = X + 1" },
            { "verbal_explanation": "שלב 3: נחבר את שני המספרים ונשווה ל-25.", "math_expression": "X + (X + 1) = 25" },
            { "verbal_explanation": "שלב 4: נכנס איברים. נעביר את ה-1 אגף (בחיסור) ונקבל 2X = 24. נחלק ב-2.", "math_expression": "2X = 24 \u2192 X = 12" }
        ],
        "final_answer": "12",
        "options": ["11", "12", "13", "14"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "אורך מלבן <strong>גדול ב-4 ס\"מ</strong> מרוחבו. היקף המלבן הוא <strong>24 ס\"מ</strong>. מהו <strong>רוחב</strong> המלבן?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='80'><rect x='20' y='20' width='120' height='50' fill='#fdfbf7' stroke='#1e293b' stroke-width='2'/><text x='80' y='15' font-size='12' text-anchor='middle'>X + 4</text><text x='10' y='50' font-size='12'>X</text></svg></div>",
        "hint": "היקף מלבן הוא חיבור של כל 4 הצלעות: (פעמיים רוחב) ועוד (פעמיים אורך).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הרוחב כ-X. האורך יהיה X+4.", "math_expression": "רוחב = X, אורך = X + 4" },
            { "verbal_explanation": "שלב 2: נבנה משוואת היקף. ההיקף הוא 2 כפול הרוחב ועוד 2 כפול האורך.", "math_expression": "2X + 2(X + 4) = 24" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים בחלק של האורך.", "math_expression": "2X + 2X + 8 = 24" },
            { "verbal_explanation": "שלב 4: נכנס איברים. 4X ועוד 8 שווה 24. נחסיר 8 ונחלק ב-4.", "math_expression": "4X = 16 \u2192 X = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["8 ס\"מ", "6 ס\"מ", "4 ס\"מ", "2 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "High",
        "question_text": "גיל האב היום הוא <strong>40</strong> וגיל בנו הוא <strong>10</strong>. בעוד <strong>כמה שנים</strong> יהיה גיל האב <strong>בדיוק פי 2</strong> מגיל הבן?",
        "hint": "סמנו את 'מספר השנים שיעברו' ב-X. הוסיפו X לשני הגילים (כי שניהם מתבגרים), ואז בנו משוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את מספר השנים שיחלפו כ-X. בעתיד, גיל האב יהיה 40+X וגיל הבן יהיה 10+X.", "math_expression": "אב = 40 + X , בן = 10 + X" },
            { "verbal_explanation": "שלב 2: אנו רוצים שגיל האב העתידי יהיה שווה ל-2 פעמים גיל הבן העתידי. נרכיב משוואה.", "math_expression": "40 + X = 2(10 + X)" },
            { "verbal_explanation": "שלב 3: נפתח את הסוגריים בצד של הבן.", "math_expression": "40 + X = 20 + 2X" },
            { "verbal_explanation": "שלב 4: נעביר את ה-X ימינה ואת ה-20 שמאלה כדי לבודד את הנעלם.", "math_expression": "20 = X" }
        ],
        "final_answer": "בעוד 20 שנה",
        "options": ["בעוד 10 שנים", "בעוד 20 שנה", "בעוד 30 שנה", "בעוד 15 שנה"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "מחיר מחברת <strong>יקר ב-3 שקלים</strong> ממחיר עט. דנה קנתה <strong>2 מחברות ו-3 עטים</strong> ושילמה סך הכל <strong>26 שקלים</strong>. מהו <strong>מחיר עט אחד</strong>?",
        "hint": "הגדירו את העט כ-X ואת המחברת כ-(X+3). הכפילו כל מוצר בכמות שדנה קנתה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המחירים. עט עולה X, מחברת עולה X+3.", "math_expression": "עט = X , מחברת = X + 3" },
            { "verbal_explanation": "שלב 2: נחשב את העלות: 3 עטים (3X) ועוד 2 מחברות (המוכפלות במחירן). נשווה ל-26.", "math_expression": "3X + 2(X + 3) = 26" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים.", "math_expression": "3X + 2X + 6 = 26" },
            { "verbal_explanation": "שלב 4: נכנס איברים (5X), נעביר את 6 אגף (נקבל 20), ונחלק ב-5.", "math_expression": "5X = 20 \u2192 X = 4" }
        ],
        "final_answer": "4 שקלים",
        "options": ["4 שקלים", "7 שקלים", "5 שקלים", "3 שקלים"],
        "correctAnswer": 0
    },
    {
        "id": 37,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Low",
        "question_text": "בכיתה ז'1 יש <strong>5 תלמידים יותר</strong> מאשר בכיתה ז'2. בשתי הכיתות יחד יש <strong>65 תלמידים</strong>. כמה תלמידים יש <strong>בכיתה ז'2</strong>?",
        "hint": "הכיתה הקטנה היא ז'2 (נסמן ב-X). הכיתה הגדולה היא ז'1 (X+5). סכומן הוא 65.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הכיתה הקטנה כ-X.", "math_expression": "ז'2 = X" },
            { "verbal_explanation": "שלב 2: הכיתה הגדולה יותר מקבלת את התוספת.", "math_expression": "ז'1 = X + 5" },
            { "verbal_explanation": "שלב 3: נבנה משוואת סכום: שתי הכיתות יחד שוות 65.", "math_expression": "X + X + 5 = 65" },
            { "verbal_explanation": "שלב 4: נאחד ל-2X, נחסיר 5 מ-65 ונקבל 60. נחלק ב-2.", "math_expression": "2X = 60 \u2192 X = 30" }
        ],
        "final_answer": "30 תלמידים",
        "options": ["35 תלמידים", "30 תלמידים", "25 תלמידים", "40 תלמידים"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "חשבו על מספר. אם נחלק אותו ב-2 ונחסיר מהתוצאה 5, נקבל 10. מהו <strong>המספר שחשבנו עליו</strong>?",
        "hint": "נסחו משוואה משמאל לימין: X חלקי 2, פחות 5, שווה 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את הסיפור למשוואה מתמטית. המספר הוא X.", "math_expression": "(X ÷ 2) - 5 = 10" },
            { "verbal_explanation": "שלב 2: נתחיל לפתור מהסוף להתחלה. קודם נוסיף 5 לשני צידי המשוואה כדי לבטל את החיסור.", "math_expression": "X ÷ 2 = 15" },
            { "verbal_explanation": "שלב 3: כדי לבטל את החילוק ב-2, נכפיל את שני האגפים ב-2. 15 כפול 2 שווה ל-30.", "math_expression": "X = 30" }
        ],
        "final_answer": "30",
        "options": ["20", "15", "30", "10"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "High",
        "question_text": "שלושה אחים חילקו 90 שקלים. האח האמצעי קיבל <strong>10 שקלים יותר</strong> מהאח הקטן. האח הגדול קיבל <strong>פי 2</strong> מהאח הקטן. כמה קיבל <strong>האח הקטן</strong>?",
        "hint": "האח הקטן הוא הבסיס להכל - קראו לו X. הרכיבו את האמצעי ואת הגדול על בסיסו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הקטן כ-X.", "math_expression": "קטן = X" },
            { "verbal_explanation": "שלב 2: האח האמצעי קיבל 10 יותר, לכן הוא X+10. האח הגדול קיבל פי 2, לכן הוא 2X.", "math_expression": "אמצעי = X + 10 , גדול = 2X" },
            { "verbal_explanation": "שלב 3: נחבר את שלושתם לביטוי אחד ונשווה ל-90 שקלים.", "math_expression": "X + (X + 10) + 2X = 90" },
            { "verbal_explanation": "שלב 4: נכנס את כל ה-X (יש לנו סך הכל 4 איקסים). נחסיר 10 מ-90, ונקבל 80. נחלק ב-4.", "math_expression": "4X = 80 \u2192 X = 20" }
        ],
        "final_answer": "20 שקלים",
        "options": ["10 שקלים", "20 שקלים", "30 שקלים", "40 שקלים"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "High",
        "question_text": "בקופסה א' יש <strong>50 כדורים</strong>. בקופסה ב' יש <strong>20 כדורים</strong>. כמה כדורים יש <strong>להעביר</strong> מקופסה א' לקופסה ב' כדי שבשתיהן יהיה <strong>מספר שווה</strong> של כדורים?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><rect x='20' y='20' width='50' height='50' fill='#fefce8' stroke='#1e293b' stroke-width='2'/><text x='45' y='50' font-size='14' text-anchor='middle'>50</text><rect x='130' y='20' width='50' height='50' fill='#fefce8' stroke='#1e293b' stroke-width='2'/><text x='155' y='50' font-size='14' text-anchor='middle'>20</text><polyline points='85,35 110,45 85,55' fill='none' stroke='#b09151' stroke-width='3'/><text x='97' y='30' font-size='12' text-anchor='middle'>X</text></svg></div>",
        "hint": "סימן ההעברה הוא X. קופסה אחת מאבדת X (פחות), והשנייה מרוויחה X (ועוד). השוו ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את מספר הכדורים המועברים כ-X. קופסה א' תחסר X כדורים (50 פחות X).", "math_expression": "א' החדשה = 50 - X" },
            { "verbal_explanation": "שלב 2: קופסה ב' תקבל את אותם X כדורים (20 ועוד X).", "math_expression": "ב' החדשה = 20 + X" },
            { "verbal_explanation": "שלב 3: אנו רוצים שהן יהיו שוות. נרכיב משוואה.", "math_expression": "50 - X = 20 + X" },
            { "verbal_explanation": "שלב 4: נעביר את מינוס X ימינה (ייווצר 2X) ואת 20 שמאלה (50-20=30). נחלק ב-2.", "math_expression": "30 = 2X \u2192 X = 15" }
        ],
        "final_answer": "15 כדורים",
        "options": ["10 כדורים", "30 כדורים", "15 כדורים", "20 כדורים"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "סכומם של <strong>שלושה מספרים עוקבים</strong> (כמו 4,5,6) הוא <strong>60</strong>. מהו המספר <strong>האמצעי</strong>?",
        "hint": "המספרים הם X, והעוקב לו X+1, והבא אחריו X+2. סכמו אותם והשוו ל-60.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המספרים. הקטן הוא X. האמצעי הוא X+1. הגדול הוא X+2.", "math_expression": "X , X+1 , X+2" },
            { "verbal_explanation": "שלב 2: נחבר את כולם למשוואה אחת ששווה 60.", "math_expression": "X + X + 1 + X + 2 = 60" },
            { "verbal_explanation": "שלב 3: נכנס איברים: יש לנו 3X ועוד 3. נחסיר 3 מ-60 ונקבל 57. נחלק ב-3.", "math_expression": "3X = 57 \u2192 X = 19" },
            { "verbal_explanation": "שלב 4: מצאנו את X שהוא המספר הקטן (19). נשאלנו על האמצעי, שהוא גדול ב-1.", "math_expression": "19 + 1 = 20" }
        ],
        "final_answer": "20",
        "options": ["19", "20", "21", "22"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "High",
        "question_text": "מרחק הנסיעה בין תל אביב לחיפה הוא בערך 90 ק\"מ. שתי מכוניות יצאו באותו הזמן - אחת מתל אביב צפונה במהירות <strong>40 קמ\"ש</strong>, והשנייה מחיפה דרומה במהירות <strong>50 קמ\"ש</strong>. כעבור כמה <strong>שעות</strong> הן ייפגשו?",
        "hint": "זמן הנסיעה עד המפגש הוא זהה (X). הדרך של הראשונה (40X) ועוד הדרך של השנייה (50X) משלימות יחד את כל ה-90 ק\"מ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את זמן הנסיעה עד הפגישה כ-X שעות. המכונית הראשונה עברה 40X ק\"מ. המכונית השנייה עברה 50X ק\"מ.", "math_expression": "דרך א = 40X , דרך ב = 50X" },
            { "verbal_explanation": "שלב 2: יחד, הן 'כיסו' את כל המרחק בין הערים. לכן נחבר את הדרכים ונשווה למרחק הכולל (90).", "math_expression": "40X + 50X = 90" },
            { "verbal_explanation": "שלב 3: נכנס איברים (נקבל 90X) ונחלק ב-90 כדי למצוא את הזמן.", "math_expression": "90X = 90 \u2192 X = 1" }
        ],
        "final_answer": "שעה אחת (1)",
        "options": ["שעתיים", "שעה וחצי", "שעה אחת (1)", "חצי שעה"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Low",
        "question_text": "ארז חשב על מספר. הוא <strong>הוסיף למספר 8</strong>, את התוצאה <strong>כפל ב-3</strong> וקיבל <strong>45</strong>. איזה משוואה מייצגת את הסיפור?",
        "hint": "מכיוון שהוא הוסיף 8 *לפני* שהוא כפל ב-3, אנחנו חייבים להשתמש בסוגריים סביב החיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר ההתחלתי הוא X. ההוספה של 8 מתרחשת ראשונה ולכן נשים אותה בסוגריים כדי שהיא תקרה לפני הכפל.", "math_expression": "(X + 8)" },
            { "verbal_explanation": "שלב 2: כעת נכפול את כל הסוגריים האלו ב-3 החיצוני.", "math_expression": "3(X + 8)" },
            { "verbal_explanation": "שלב 3: התוצאה הסופית שווה ל-45.", "math_expression": "3(X + 8) = 45" }
        ],
        "final_answer": "3(X + 8) = 45",
        "options": ["3X + 8 = 45", "3(X + 8) = 45", "X + 24 = 45", "3(X) + 8 = 45"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "High",
        "question_text": "במשולש שווה שוקיים, זווית הראש <strong>קטנה ב-30 מעלות</strong> מזווית הבסיס. מהו גודלה של <strong>זווית הבסיס</strong>?",
        "hint": "במשולש כזה יש שתי זוויות בסיס זהות (X ו-X) וזווית ראש אחת (X-30). סכום כל הזוויות הוא תמיד 180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את זווית הבסיס כ-X. מכיוון שהמשולש שווה שוקיים, יש לנו פעמיים את הזווית הזו.", "math_expression": "בסיס = X , בסיס 2 = X" },
            { "verbal_explanation": "שלב 2: זווית הראש קטנה ב-30 מזווית הבסיס.", "math_expression": "ראש = X - 30" },
            { "verbal_explanation": "שלב 3: נחבר את כל שלוש הזוויות ונשווה ל-180 מעלות.", "math_expression": "X + X + X - 30 = 180" },
            { "verbal_explanation": "שלב 4: נאחד ל-3X, נעביר את 30 אגף (נקבל 210) ונחלק ב-3.", "math_expression": "3X = 210 \u2192 X = 70°" }
        ],
        "final_answer": "70° מעלות",
        "options": ["40° מעלות", "70° מעלות", "50° מעלות", "80° מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "בניית משוואה לבעיה",
        "difficulty": "Medium",
        "question_text": "כרטיס מבוגר לסרט <strong>יקר פי 3</strong> מכרטיס ילד. משפחה קנתה <strong>2 כרטיסי מבוגר ו-4 כרטיסי ילדים</strong> ושילמה <strong>200 שקלים</strong>. מהו מחירו של <strong>כרטיס ילד אחד</strong>?",
        "hint": "ילד = X, מבוגר = 3X. הכפילו את המחירים בכמויות (2 מבוגרים ו-4 ילדים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את המחיר הזול כ-X. לכן, מחיר כרטיס ילד הוא X, ומחיר מבוגר הוא 3X.", "math_expression": "ילד = X , מבוגר = 3X" },
            { "verbal_explanation": "שלב 2: נחשב את העלות: 4 ילדים (4X) ו-2 מבוגרים (2 כפול 3X). נשווה ל-200.", "math_expression": "4X + 2(3X) = 200" },
            { "verbal_explanation": "שלב 3: נכפול 2 ב-3X ונקבל 6X. נחבר את הכל יחד באגף שמאל ל-10X.", "math_expression": "10X = 200" },
            { "verbal_explanation": "שלב 4: נחלק ב-10 כדי לקבל את מחיר כרטיס הילד הבודד.", "math_expression": "X = 20" }
        ],
        "final_answer": "20 שקלים",
        "options": ["20 שקלים", "60 שקלים", "40 שקלים", "10 שקלים"],
        "correctAnswer": 0
    }
];