const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: חיבור וחיסור שברים עשרוניים (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "פתרו את התרגיל: 0.3 + 0.5",
        "hint": "חברו עשיריות לעשיריות, כמו לחבר 3 תפוחים ל-5 תפוחים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את הספרות שאחרי הנקודה (העשיריות).", "math_expression": "3 + 5 = 8" },
            { "verbal_explanation": "שלב 2: נרשום את התוצאה עם הנקודה העשרונית במקומה.", "math_expression": "0.8" }
        ],
        "final_answer": "0.8",
        "options": ["0.8", "0.08", "8", "0.15"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "פתרו את התרגיל: 1.2 + 0.4",
        "hint": "חברו את השלמים בנפרד ואת העשיריות בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את העשיריות (2 ועוד 4).", "math_expression": "0.2 + 0.4 = 0.6" },
            { "verbal_explanation": "שלב 2: נחבר את השלם.", "math_expression": "1 + 0 = 1" },
            { "verbal_explanation": "שלב 3: נחבר את הכל יחד.", "math_expression": "1.6" }
        ],
        "final_answer": "1.6",
        "options": ["1.8", "1.6", "1.24", "2.6"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 0.7 + 0.4",
        "hint": "כשסכום העשיריות עובר את 10, נוצר שלם חדש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את העשיריות: 7 ועוד 4 שווה 11 עשיריות.", "math_expression": "7 + 4 = 11" },
            { "verbal_explanation": "שלב 2: 10 עשיריות הופכות לשלם אחד, ונשארת עשירית אחת.", "math_expression": "1.1" }
        ],
        "final_answer": "1.1",
        "options": ["0.11", "1.1", "11", "0.10"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 2.35 + 1.2",
        "hint": "כדי לא להתבלבל, הוסיפו אפס למספר הקצר: 1.20, ואז חברו מאיות עם מאיות ועשיריות עם עשיריות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשווה את מספר הספרות אחרי הנקודה על ידי הוספת אפס.", "math_expression": "1.2 = 1.20" },
            { "verbal_explanation": "שלב 2: נחבר מאיות (5+0).", "math_expression": "5 + 0 = 5" },
            { "verbal_explanation": "שלב 3: נחבר עשיריות (3+2).", "math_expression": "3 + 2 = 5" },
            { "verbal_explanation": "שלב 4: נחבר שלמים (2+1).", "math_expression": "2 + 1 = 3" }
        ],
        "final_answer": "3.55",
        "options": ["3.37", "3.55", "3.47", "4.55"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו את התרגיל: 0.08 + 0.92",
        "hint": "חברו את המאיות. מה קורה כשמגיעים ל-100 מאיות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר 8 מאיות עם 92 מאיות.", "math_expression": "8 + 92 = 100" },
            { "verbal_explanation": "שלב 2: 100 מאיות שוות בדיוק לשלם אחד.", "math_expression": "1.00 = 1" }
        ],
        "final_answer": "1",
        "options": ["0.100", "0.910", "1", "1.1"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "פתרו את התרגיל: 0.8 - 0.2",
        "hint": "חיסור עשיריות מתבצע בדיוק כמו חיסור רגיל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסר את העשיריות: 8 פחות 2.", "math_expression": "8 - 2 = 6" },
            { "verbal_explanation": "שלב 2: נרשום את התוצאה עם הנקודה.", "math_expression": "0.6" }
        ],
        "final_answer": "0.6",
        "options": ["0.4", "0.6", "0.06", "6"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 1.5 - 0.7",
        "hint": "אי אפשר לחסר 7 מ-5. 'פרטו' את השלם ל-10 עשיריות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את השלם לעשיריות, כך שיש לנו 15 עשיריות בסך הכל.", "math_expression": "1.5 = 15 עשיריות" },
            { "verbal_explanation": "שלב 2: נחסר 7 עשיריות מתוך 15 העשיריות.", "math_expression": "15 - 7 = 8" },
            { "verbal_explanation": "שלב 3: נרשום כעשיריות.", "math_expression": "0.8" }
        ],
        "final_answer": "0.8",
        "options": ["0.8", "1.2", "0.2", "1.8"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 3.45 - 1.25",
        "hint": "חסרו מאיות ממאיות, עשיריות מעשיריות, ושלמים משלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסר את המאיות (5-5).", "math_expression": "5 - 5 = 0" },
            { "verbal_explanation": "שלב 2: נחסר את העשיריות (4-2).", "math_expression": "4 - 2 = 2" },
            { "verbal_explanation": "שלב 3: נחסר את השלמים (3-1).", "math_expression": "3 - 1 = 2" }
        ],
        "final_answer": "2.20",
        "options": ["2.10", "2.20", "2.25", "1.20"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו את התרגיל: 2 - 0.4",
        "hint": "רשמו את המספר השלם (2) כ- 2.0, ואז בצעו חיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את ה-2 עם נקודה עשרונית ואפס.", "math_expression": "2 = 2.0" },
            { "verbal_explanation": "שלב 2: 'נפרוט' שלם אחד ל-10 עשיריות.", "math_expression": "2.0 = 1 + 10 עשיריות" },
            { "verbal_explanation": "שלב 3: מתוך 10 העשיריות נחסר 4 עשיריות.", "math_expression": "10 - 4 = 6 עשיריות" },
            { "verbal_explanation": "שלב 4: נחבר בחזרה לשלם שנשאר.", "math_expression": "1.6" }
        ],
        "final_answer": "1.6",
        "options": ["1.6", "2.6", "0.6", "1.4"],
        "correctAnswer": 0
    },
    {
        "id": 10,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "High",
        "question_text": "דנה קנתה חטיף ב-4.50 ₪ ומיץ ב-3.75 ₪. היא שילמה בשטר של 10 ₪. כמה עודף תקבל?",
        "hint": "חברו קודם את מחירי הקניות, ואז החסירו מ-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את סך כל הקנייה (חיבור).", "math_expression": "4.50 + 3.75 = 8.25" },
            { "verbal_explanation": "שלב 2: נרשום את השטר כעשרוני (10.00).", "math_expression": "10.00" },
            { "verbal_explanation": "שלב 3: נחסר את הקנייה מהשטר כדי למצוא את העודף.", "math_expression": "10.00 - 8.25 = 1.75" }
        ],
        "final_answer": "1.75 ₪",
        "options": ["2.75 ₪", "1.25 ₪", "1.75 ₪", "2.25 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 0.5 + 0.05",
        "hint": "אלו עשיריות ואלו מאיות. השוו מספר ספרות: 0.50 + 0.05.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסיף אפס ל-0.5 כדי שייצג מאיות.", "math_expression": "0.5 = 0.50" },
            { "verbal_explanation": "שלב 2: נחבר מאיות (50 + 5).", "math_expression": "0.50 + 0.05 = 0.55" }
        ],
        "final_answer": "0.55",
        "options": ["0.10", "0.55", "1.0", "0.055"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 5.1 - 2.85",
        "hint": "השוו ספרות (5.10) ובצעו פריטה (הלוואה) לפני החיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את 5.1 כ-5.10 כדי שיהיו שני מקומות אחרי הנקודה.", "math_expression": "5.10 - 2.85" },
            { "verbal_explanation": "שלב 2: נפרוט עשירית אחת ל-10 מאיות, ו-10 פחות 5 שווה 5.", "math_expression": "מאיות: 5" },
            { "verbal_explanation": "שלב 3: נותרנו עם 0 עשיריות, נפרוט שלם. 10 פחות 8 שווה 2.", "math_expression": "עשיריות: 2" },
            { "verbal_explanation": "שלב 4: נותרנו עם 4 שלמים. 4 פחות 2 שווה 2.", "math_expression": "שלמים: 2" },
            { "verbal_explanation": "שלב 5: נחבר את החלקים.", "math_expression": "2.25" }
        ],
        "final_answer": "2.25",
        "options": ["2.35", "3.25", "2.25", "3.35"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "השלימו את המספר החסר: 0.4 + ___ = 1",
        "hint": "כמה עשיריות חסרות ל-4 עשיריות כדי להגיע ל-10 עשיריות (שלם אחד)?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שלם אחד שווה ל-10 עשיריות.", "math_expression": "1 = 1.0" },
            { "verbal_explanation": "שלב 2: נחסר 0.4 מ-1.0.", "math_expression": "1.0 - 0.4 = 0.6" }
        ],
        "final_answer": "0.6",
        "options": ["0.5", "0.6", "0.7", "0.06"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "אורך חבל הוא 3.7 מטרים. חתכו ממנו 0.9 מטרים. מה האורך שנותר?",
        "hint": "בצעו תרגיל חיסור: 3.7 פחות 0.9.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אי אפשר לחסר 9 מ-7, לכן 'נפרוט' שלם אחד מתוך ה-3 ל-10 עשיריות.", "math_expression": "3.7 = 2 + 17 עשיריות" },
            { "verbal_explanation": "שלב 2: נחסר 9 עשיריות מ-17 עשיריות.", "math_expression": "17 - 9 = 8" },
            { "verbal_explanation": "שלב 3: נרשום את 2 השלמים שנותרו יחד עם ה-8 עשיריות.", "math_expression": "2.8" }
        ],
        "final_answer": "2.8 מטרים",
        "options": ["2.8 מטרים", "3.2 מטרים", "4.6 מטרים", "2.2 מטרים"],
        "correctAnswer": 0
    },
    {
        "id": 15,
        "subTopic": "חיבור וחיסור שברים עשרוניים",
        "difficulty": "High",
        "question_text": "רון רץ במשך שלושה ימים. ביום הראשון רץ 1.5 ק\"מ, ביום השני 2.25 ק\"מ, וביום השלישי 1.75 ק\"מ. כמה רץ בסך הכל?",
        "hint": "חברו תחילה את 2.25 ו-1.75 (זה קל כי הרבעים משלימים לשלם).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את היום השני והשלישי. 25 מאיות + 75 מאיות הן שלם.", "math_expression": "2.25 + 1.75 = 4.00" },
            { "verbal_explanation": "שלב 2: נוסיף את הריצה של היום הראשון לתוצאה.", "math_expression": "4.00 + 1.5 = 5.5" }
        ],
        "final_answer": "5.5 ק\"מ",
        "options": ["5.25 ק\"מ", "4.5 ק\"מ", "6 ק\"מ", "5.5 ק\"מ"],
        "correctAnswer": 3
    },

    // ==============================================================
    // --- תת נושא 2: חיבור וחיסור שברים פשוטים (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Low",
        "question_text": "פתרו: 1/5 + 2/5",
        "hint": "כשהמכנים (למטה) זהים, פשוט מחברים את המונים (למעלה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנים שווים (5), לכן נשמור עליהם.", "math_expression": "מכנה = 5" },
            { "verbal_explanation": "שלב 2: נחבר את המונים (1+2).", "math_expression": "1 + 2 = 3" },
            { "verbal_explanation": "שלב 3: נרשום כשבר.", "math_expression": "3/5" }
        ],
        "final_answer": "3/5",
        "options": ["3/10", "3/5", "2/5", "1/5"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Low",
        "question_text": "פתרו: 7/8 - 3/8",
        "hint": "מכיוון שהמכנה זהה, פשוט חסרו את המונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המכנה נשאר 8.", "math_expression": "מכנה = 8" },
            { "verbal_explanation": "שלב 2: נחסר במונה: 7 פחות 3.", "math_expression": "7 - 3 = 4" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה. (אפשר גם לצמצם).", "math_expression": "4/8" },
            { "verbal_explanation": "שלב 4: 4 שמיניות שוות לחצי.", "math_expression": "4/8 = 1/2" }
        ],
        "final_answer": "1/2",
        "options": ["4/0", "1/2", "1/4", "3/8"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1/2 + 1/4",
        "hint": "אי אפשר לחבר חצאים ורבעים ישירות. הרחיבו את החצי לרבעים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 1/2 למכנה משותף של 4 (נכפיל מונה ומכנה ב-2).", "math_expression": "1/2 = 2/4" },
            { "verbal_explanation": "שלב 2: נחבר את הרבעים החדשים עם הרבע הקיים.", "math_expression": "2/4 + 1/4 = 3/4" }
        ],
        "final_answer": "3/4",
        "options": ["2/6", "3/4", "1/6", "2/4"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1 - 1/3",
        "hint": "הפכו את השלם לשבר שהמכנה שלו הוא 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שלם אחד שווה ל-3 שלישים.", "math_expression": "1 = 3/3" },
            { "verbal_explanation": "שלב 2: נחסר שליש אחד מתוך שלושת השלישים.", "math_expression": "3/3 - 1/3 = 2/3" }
        ],
        "final_answer": "2/3",
        "options": ["1/3", "2/3", "4/3", "1 1/3"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 1/3 + 1/4",
        "hint": "מצאו מכנה משותף ל-3 ול-4 (המספר הקטן ביותר ששניהם מתחלקים בו הוא 12).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 1/3 למכנה 12 (כפל ב-4).", "math_expression": "1/3 = 4/12" },
            { "verbal_explanation": "שלב 2: נרחיב את 1/4 למכנה 12 (כפל ב-3).", "math_expression": "1/4 = 3/12" },
            { "verbal_explanation": "שלב 3: נחבר את המונים.", "math_expression": "4/12 + 3/12 = 7/12" }
        ],
        "final_answer": "7/12",
        "options": ["2/7", "7/12", "1/12", "2/12"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 5/6 - 1/2",
        "hint": "הרחיבו את החצי כך שיהיה עם מכנה 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 1/2 למכנה 6 (כפל פי 3).", "math_expression": "1/2 = 3/6" },
            { "verbal_explanation": "שלב 2: נחסר את השברים בעלי המכנה המשותף.", "math_expression": "5/6 - 3/6 = 2/6" },
            { "verbal_explanation": "שלב 3: נצמצם את התוצאה ב-2.", "math_expression": "2/6 = 1/3" }
        ],
        "final_answer": "1/3",
        "options": ["4/4", "1/3", "4/6", "1/4"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 2 1/4 + 1 1/4 (חיבור מספרים מעורבים)",
        "hint": "חברו קודם את השלמים, ואז חברו את השברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את השלמים (2+1).", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "שלב 2: נחבר את השברים (רבע ועוד רבע).", "math_expression": "1/4 + 1/4 = 2/4" },
            { "verbal_explanation": "שלב 3: נצמצם את 2/4 לחצי, ונחבר הכל.", "math_expression": "3 1/2" }
        ],
        "final_answer": "3 1/2",
        "options": ["3 1/4", "3 1/2", "4 1/2", "3"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 3 - 1 1/5",
        "hint": "'פרטו' שלם אחד מתוך ה-3 לחמישיות, כדי שתוכלו לחסר ממנו את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את המספר 3 ל-2 שלמים ועוד חמש חמישיות.", "math_expression": "3 = 2 5/5" },
            { "verbal_explanation": "שלב 2: נחסר את השלמים (2 פחות 1).", "math_expression": "2 - 1 = 1" },
            { "verbal_explanation": "שלב 3: נחסר את השברים (5 חמישיות פחות חמישית אחת).", "math_expression": "5/5 - 1/5 = 4/5" },
            { "verbal_explanation": "שלב 4: נחבר את התוצאות.", "math_expression": "1 4/5" }
        ],
        "final_answer": "1 4/5",
        "options": ["2 4/5", "1 1/5", "1 4/5", "2 1/5"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "בקנקן היו 3/4 ליטר מיץ. יוסי שתה 1/4 ליטר. כמה נשאר?",
        "hint": "תרגיל חיסור פשוט בעל אותו מכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחסר מונה ממונה (3 פחות 1).", "math_expression": "3/4 - 1/4 = 2/4" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר לחצי.", "math_expression": "2/4 = 1/2" }
        ],
        "final_answer": "1/2 ליטר",
        "options": ["1/4 ליטר", "1/2 ליטר", "1 ליטר", "2/8 ליטר"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "אפו שתי עוגות זהות. מהראשונה נשאר 1/2 ומהשנייה נשאר 2/3. כמה עוגה נשאר בסך הכל?",
        "hint": "חברו חצי ושני שלישים. המכנה המשותף הוא 6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את חצי לשישיות.", "math_expression": "1/2 = 3/6" },
            { "verbal_explanation": "שלב 2: נרחיב את שני שלישים לשישיות.", "math_expression": "2/3 = 4/6" },
            { "verbal_explanation": "שלב 3: נחבר. נקבל שבר מדומה.", "math_expression": "3/6 + 4/6 = 7/6" },
            { "verbal_explanation": "שלב 4: נהפוך את 7/6 למספר מעורב.", "math_expression": "1 1/6" }
        ],
        "final_answer": "1 1/6",
        "options": ["3/5", "1 1/6", "5/6", "1 1/2"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "מה צריך לחבר ל-3/8 כדי לקבל שלם אחד (1)?",
        "hint": "שלם מורכב מ-8 שמיניות. כמה שמיניות חסרות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השלם כשבר של שמיניות.", "math_expression": "1 = 8/8" },
            { "verbal_explanation": "שלב 2: נחסר את מה שיש לנו מהשלם.", "math_expression": "8/8 - 3/8 = 5/8" }
        ],
        "final_answer": "5/8",
        "options": ["3/8", "4/8", "5/8", "6/8"],
        "correctAnswer": 2
    },
    {
        "id": 27,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 2 1/3 + 1 5/6",
        "hint": "מצאו מכנה משותף לשברים (6). ואז חברו. אם השבר גדול מ-1, העבירו אותו לשלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השליש לשישיות.", "math_expression": "1/3 = 2/6" },
            { "verbal_explanation": "שלב 2: נחבר את השלמים.", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "שלב 3: נחבר את השברים (2/6 + 5/6).", "math_expression": "7/6" },
            { "verbal_explanation": "שלב 4: 7/6 הם שלם אחד ועוד שישית. נוסיף זאת ל-3 השלמים.", "math_expression": "3 + 1 1/6 = 4 1/6" }
        ],
        "final_answer": "4 1/6",
        "options": ["3 6/9", "3 7/6", "4 1/6", "4 5/6"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "דן רץ ביום א' 1/4 ק\"מ וביום ב' 3/5 ק\"מ. כמה רץ בסך הכל?",
        "hint": "מכנה משותף ל-4 ו-5 הוא 20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 1/4 למכנה 20 (כפל פי 5).", "math_expression": "1/4 = 5/20" },
            { "verbal_explanation": "שלב 2: נרחיב את 3/5 למכנה 20 (כפל פי 4).", "math_expression": "3/5 = 12/20" },
            { "verbal_explanation": "שלב 3: נחבר את המונים.", "math_expression": "5/20 + 12/20 = 17/20" }
        ],
        "final_answer": "17/20",
        "options": ["4/9", "17/20", "15/20", "4/20"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 4 1/2 - 2 3/4",
        "hint": "המכנה המשותף הוא 4. תצטרכו 'לפרוט' שלם אחד מתוך ה-4 כי 2/4 קטן מ-3/4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את החצי לרבעים.", "math_expression": "4 2/4 - 2 3/4" },
            { "verbal_explanation": "שלב 2: נפרוט שלם אחד ל-4 רבעים ונוסיף אותם ל-2/4 שיש לנו.", "math_expression": "4 2/4 = 3 6/4" },
            { "verbal_explanation": "שלב 3: נחסר עכשיו שלמים ושברים.", "math_expression": "3 6/4 - 2 3/4 = 1 3/4" }
        ],
        "final_answer": "1 3/4",
        "options": ["2 1/4", "1 3/4", "2 3/4", "1 1/4"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "חיבור וחיסור שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "על השולחן מונחת פיצה. יעל אכלה 1/6 ממנה. רון אכל 1/6 ממנה. איזה חלק מהפיצה נשאר?",
        "hint": "חברו מה שנאכל, והחסירו משלם אחד (6/6).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה אכלו יחד.", "math_expression": "1/6 + 1/6 = 2/6" },
            { "verbal_explanation": "שלב 2: נחסר את מה שנאכל מפיצה שלמה (6 שישיות).", "math_expression": "6/6 - 2/6 = 4/6" },
            { "verbal_explanation": "שלב 3: נצמצם את התוצאה ב-2.", "math_expression": "4/6 = 2/3" }
        ],
        "final_answer": "2/3",
        "options": ["4/6", "2/3", "1/3", "1/6"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 3: חילוק שברים עשרוניים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "פתרו את התרגיל: 0.8 ÷ 2",
        "hint": "אם מחלקים 8 תפוחים ל-2 מקבלים 4. אותו דבר עם עשיריות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתייחס לתרגיל כאל '8 עשיריות לחלק ל-2'.", "math_expression": "8 ÷ 2 = 4" },
            { "verbal_explanation": "שלב 2: נחזיר את התשובה להיות במונחים של עשיריות.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4",
        "options": ["0.04", "4", "0.4", "0.2"],
        "correctAnswer": 2
    },
    {
        "id": 32,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו את התרגיל: 1.5 ÷ 3",
        "hint": "הסתכלו על זה כ-15 עשיריות לחלק ל-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על 1.5 כ-15 עשיריות.", "math_expression": "15 ÷ 3 = 5" },
            { "verbal_explanation": "שלב 2: מכיוון שחילקנו עשיריות, התוצאה היא 5 עשיריות.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5",
        "options": ["5", "0.05", "0.5", "0.15"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 2.4 ÷ 0.6",
        "hint": "כדי להיפטר מהנקודה במחלק, הכפילו את שני המספרים ב-10. זה כמו לחשב 24 לחלק ל-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה והמחלק ב-10 כדי להפוך אותם למספרים שלמים.", "math_expression": "2.4 × 10 = 24, 0.6 × 10 = 6" },
            { "verbal_explanation": "שלב 2: נבצע חילוק רגיל של מספרים שלמים.", "math_expression": "24 ÷ 6 = 4" }
        ],
        "final_answer": "4",
        "options": ["0.4", "4", "40", "0.04"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 3 ÷ 0.5",
        "hint": "כמה חצאים (0.5) נכנסים בתוך 3 שלמים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני הצדדים ב-10 כדי שהמחלק יהיה שלם.", "math_expression": "3 × 10 = 30, 0.5 × 10 = 5" },
            { "verbal_explanation": "שלב 2: נחלק את השלמים החדשים.", "math_expression": "30 ÷ 5 = 6" }
        ],
        "final_answer": "6",
        "options": ["1.5", "0.6", "6", "15"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "לקחו חבל באורך 4.8 מטר וחתכו אותו ל-4 חתיכות שוות. מה אורך כל חתיכה?",
        "hint": "חלקו 4.8 ב-4. חלקו שלמים בנפרד ועשיריות בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את השלם.", "math_expression": "4 ÷ 4 = 1" },
            { "verbal_explanation": "שלב 2: נחלק את העשיריות.", "math_expression": "0.8 ÷ 4 = 0.2" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות.", "math_expression": "1.2" }
        ],
        "final_answer": "1.2 מטר",
        "options": ["1.4 מטר", "1.2 מטר", "0.12 מטר", "12 מטר"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 0.25 ÷ 5",
        "hint": "חשבו על 25 מאיות לחלק ל-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: יש לנו 25 מאיות לחלק ל-5. נבצע תרגיל רגיל.", "math_expression": "25 ÷ 5 = 5" },
            { "verbal_explanation": "שלב 2: התוצאה היא במונחים של מאיות, כלומר 5 מאיות.", "math_expression": "0.05" }
        ],
        "final_answer": "0.05",
        "options": ["0.5", "5", "0.05", "0.005"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 1 ÷ 0.2",
        "hint": "כמה פעמים נכנסת חמישית (0.2) בשלם אחד?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני המספרים ב-10 כדי להיפטר מהעשרוני במחלק.", "math_expression": "1 × 10 = 10, 0.2 × 10 = 2" },
            { "verbal_explanation": "שלב 2: נחלק כרגיל.", "math_expression": "10 ÷ 2 = 5" }
        ],
        "final_answer": "5",
        "options": ["0.5", "5", "2", "0.2"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "שילמו 10.5 ₪ עבור 3 עפרונות. מה מחיר עיפרון אחד?",
        "hint": "חשבו על זה כ-105 עשיריות לחלק ל-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב 105 לחלק ל-3.", "math_expression": "105 ÷ 3 = 35" },
            { "verbal_explanation": "שלב 2: נמקם את הנקודה העשרונית בחזרה מקום אחד (כי התחלנו עם עשיריות).", "math_expression": "3.5" }
        ],
        "final_answer": "3.5 ₪",
        "options": ["3.05 ₪", "3.5 ₪", "0.35 ₪", "35 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו: 0.12 ÷ 0.04",
        "hint": "שני המספרים הם מאיות. הכפילו את שניהם ב-100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספרים ב-100 כדי שיהיו שלמים.", "math_expression": "12 ÷ 4" },
            { "verbal_explanation": "שלב 2: נבצע את החילוק.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["3", "0.3", "0.03", "30"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 7.2 ÷ 0.8",
        "hint": "הכפילו את שני הצדדים ב-10, זה כמו לחלק 72 ב-8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הנקודה מקום אחד ימינה בשני המספרים.", "math_expression": "72 ÷ 8" },
            { "verbal_explanation": "שלב 2: נפתור לפי לוח הכפל.", "math_expression": "9" }
        ],
        "final_answer": "9",
        "options": ["0.9", "9", "90", "0.09"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "פתרו: 0.5 ÷ 2",
        "hint": "מה זה חצי לחלק ל-2? זה רבע. כמה זה רבע כמספר עשרוני?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את 0.5 כ-0.50 (חמישים מאיות) כדי שיהיה קל לחלק.", "math_expression": "0.50 ÷ 2" },
            { "verbal_explanation": "שלב 2: 50 מאיות לחלק ל-2 שווה 25 מאיות.", "math_expression": "0.25" }
        ],
        "final_answer": "0.25",
        "options": ["0.25", "2.5", "0.05", "0.1"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "מחלקים בקבוק מיץ של 1.5 ליטרים לכוסות המכילות 0.3 ליטר כל אחת. כמה כוסות יתמלאו?",
        "hint": "הכפילו את שני המספרים ב-10 וחשבו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה והמחלק ב-10 לקבלת שלמים.", "math_expression": "1.5 × 10 = 15, 0.3 × 10 = 3" },
            { "verbal_explanation": "שלב 2: נחלק.", "math_expression": "15 ÷ 3 = 5" }
        ],
        "final_answer": "5 כוסות",
        "options": ["3 כוסות", "15 כוסות", "5 כוסות", "0.5 כוסות"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Low",
        "question_text": "פתרו: 6.6 ÷ 6",
        "hint": "חלקו את השלמים, ואז חלקו את העשיריות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 6 שלמים לחלק ל-6 שווה 1.", "math_expression": "1" },
            { "verbal_explanation": "שלב 2: 6 עשיריות לחלק ל-6 שווה עשירית אחת.", "math_expression": "0.1" },
            { "verbal_explanation": "שלב 3: נחבר יחד.", "math_expression": "1.1" }
        ],
        "final_answer": "1.1",
        "options": ["1.1", "1.01", "11", "0.11"],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "High",
        "question_text": "פתרו: 0.09 ÷ 0.3",
        "hint": "כדי שהמחלק (0.3) יהיה שלם, נכפיל הכל ב-10. נקבל 0.9 לחלק ל-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני המספרים ב-10 כדי להפוך את המחלק לשלם.", "math_expression": "0.9 ÷ 3" },
            { "verbal_explanation": "שלב 2: 9 עשיריות לחלק ל-3 שוות ל-3 עשיריות.", "math_expression": "0.3" }
        ],
        "final_answer": "0.3",
        "options": ["3", "0.3", "0.03", "0.003"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "חילוק שברים עשרוניים",
        "difficulty": "Medium",
        "question_text": "מסלול ריצה הוא 4.2 ק\"מ. כל סיבוב במסלול שווה 0.7 ק\"מ. כמה סיבובים יש במסלול?",
        "hint": "הכפילו את שני הצדדים ב-10 כדי לקבל מספרים שלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את שני המספרים ב-10.", "math_expression": "42 ÷ 7" },
            { "verbal_explanation": "שלב 2: נפתור לפי לוח הכפל.", "math_expression": "6" }
        ],
        "final_answer": "6 סיבובים",
        "options": ["6 סיבובים", "7 סיבובים", "0.6 סיבובים", "60 סיבובים"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: חילוק שברים פשוטים (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Low",
        "question_text": "פתרו: 1/2 ÷ 2",
        "hint": "כשמחלקים חצי לשניים, מה מקבלים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי לחלק שבר בשלם, נהפוך את החילוק לכפל בהופכי של השלם (1/2).", "math_expression": "1/2 × 1/2" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה ומכנה במכנה.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1", "1/4", "1/2", "4"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 2 ÷ 1/3",
        "hint": "כמה שלישים נכנסים ב-2 שלמים? בשלם אחד יש 3 שלישים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חילוק בשבר שווה לכפל בהופכי שלו. ההופכי של 1/3 הוא 3/1 (או פשוט 3).", "math_expression": "2 × 3" },
            { "verbal_explanation": "שלב 2: נבצע את הכפל.", "math_expression": "6" }
        ],
        "final_answer": "6",
        "options": ["2/3", "1 1/2", "6", "1/6"],
        "correctAnswer": 2
    },
    {
        "id": 48,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 3/4 ÷ 1/4",
        "hint": "כמה פעמים רבע נכנס בתוך שלושה רבעים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את תרגיל החילוק לכפל בהופכי של השבר השני (4/1).", "math_expression": "3/4 × 4/1" },
            { "verbal_explanation": "שלב 2: ה-4 במונה וה-4 במכנה מצטמצמים.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["3/16", "3", "1/3", "4/3"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 4/5 ÷ 2",
        "hint": "חילוק ב-2 זה כמו לכפול בחצי. לחלופין, חלקו רק את המונה (4) ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון שהמונה (4) מתחלק ב-2 ללא שארית, נוכל פשוט לחלק אותו ולשמור על המכנה.", "math_expression": "4 ÷ 2 = 2" },
            { "verbal_explanation": "שלב 2: המכנה נשאר 5.", "math_expression": "2/5" }
        ],
        "final_answer": "2/5",
        "options": ["8/5", "2/5", "4/10", "1/5"],
        "correctAnswer": 1
    },
    {
        "id": 50,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "יש לנו פיצה שלמה. אנחנו רוצים לחלק אותה למשולשים, כך שכל משולש יהיה 1/8 מהפיצה. כמה משולשים נקבל? (1 ÷ 1/8)",
        "hint": "כמה שמיניות יש בשלם אחד?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את החילוק בשבר לכפל בהופכי שלו (8).", "math_expression": "1 × 8" },
            { "verbal_explanation": "שלב 2: נבצע כפל.", "math_expression": "8" }
        ],
        "final_answer": "8 משולשים",
        "options": ["4 משולשים", "8 משולשים", "16 משולשים", "1/8 משולשים"],
        "correctAnswer": 1
    },
    {
        "id": 51,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 1/2 ÷ 1/3",
        "hint": "הפכו לכפל בהופכי: חצי כפול 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך חילוק לכפל בהופכי של השבר השני (3/1).", "math_expression": "1/2 × 3/1" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה ומכנה במכנה.", "math_expression": "3/2" },
            { "verbal_explanation": "שלב 3: נהפוך לשבר מעורב (3 חצאים הם שלם וחצי).", "math_expression": "1 1/2" }
        ],
        "final_answer": "1 1/2",
        "options": ["1/6", "2/3", "1 1/2", "3/6"],
        "correctAnswer": 2
    },
    {
        "id": 52,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 5 ÷ 1/2",
        "hint": "כמה חצאים יש ב-5 שלמים? בכל שלם יש שני חצאים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את תרגיל החילוק לכפל בהופכי (2/1).", "math_expression": "5 × 2/1" },
            { "verbal_explanation": "שלב 2: נכפיל.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["2.5", "10", "5/2", "1/10"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "חילקו 3/4 ק\"ג קמח ל-3 שקיות שוות. כמה קמח יש בכל שקית?",
        "hint": "תרגיל: 3/4 לחלק ל-3. חלקו את המונה ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו צריכים לחלק שלושה רבעים ל-3.", "math_expression": "3/4 ÷ 3" },
            { "verbal_explanation": "שלב 2: נחלק את המונה (3) ב-3. התוצאה היא 1. המכנה נשאר 4.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4 ק\"ג",
        "options": ["1/4 ק\"ג", "3/12 ק\"ג", "9/4 ק\"ג", "1 ק\"ג"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 2/3 ÷ 4/5",
        "hint": "כפל בהופכי: 2/3 כפול 5/4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך חילוק לכפל בהופכי (5/4).", "math_expression": "2/3 × 5/4" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה (2*5) ומכנה במכנה (3*4).", "math_expression": "10/12" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר ב-2.", "math_expression": "5/6" }
        ],
        "final_answer": "5/6",
        "options": ["8/15", "5/6", "10/15", "8/12"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "כמה פעמים נכנס 1/6 בתוך 1/2?",
        "hint": "תרגיל: חצי לחלק לשישית. (כמה שישיות שוות לחצי?)",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את התרגיל (חצי חלקי שישית) ונהפוך לכפל בהופכי (6).", "math_expression": "1/2 × 6/1" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה ומכנה במכנה.", "math_expression": "6/2" },
            { "verbal_explanation": "שלב 3: 6 חצאים הם בדיוק 3 שלמים.", "math_expression": "3" }
        ],
        "final_answer": "3",
        "options": ["1/12", "1/3", "3", "12"],
        "correctAnswer": 2
    },
    {
        "id": 56,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 6 ÷ 3/4",
        "hint": "הפכו לכפל בהופכי: 6 כפול 4/3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך לכפל בהופכי.", "math_expression": "6 × 4/3" },
            { "verbal_explanation": "שלב 2: נכפיל את ה-6 במונה (4) ונקבל 24. נחלק במכנה (3).", "math_expression": "24 ÷ 3 = 8" }
        ],
        "final_answer": "8",
        "options": ["18/4", "8", "4.5", "24/4"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "סרט באורך 5/6 מטר נגזר ל-5 חתיכות שוות. מה אורך כל חתיכה?",
        "hint": "חלקו את המונה (5) ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התרגיל הוא 5/6 לחלק ל-5. כשהמונה מתחלק בשלם, פשוט נחלק אותו ונשמור על המכנה.", "math_expression": "5 ÷ 5 = 1" },
            { "verbal_explanation": "שלב 2: נרשום את המונה החדש עם המכנה המקורי.", "math_expression": "1/6" }
        ],
        "final_answer": "1/6 מטר",
        "options": ["5/30 מטר", "1/6 מטר", "25/6 מטר", "1/5 מטר"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "פתרו: 2/5 ÷ 1/10",
        "hint": "כפל בהופכי: 2/5 כפול 10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הפיכה לכפל בהופכי של השבר השני (10/1).", "math_expression": "2/5 × 10/1" },
            { "verbal_explanation": "שלב 2: נכפיל 2 ב-10 (שווה 20), ונחלק במכנה (5).", "math_expression": "20 ÷ 5 = 4" }
        ],
        "final_answer": "4",
        "options": ["2/50", "4", "1/4", "20/50"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1/8 ÷ 2",
        "hint": "חלקו את השבר פי 2. כפל בהופכי (כפל בחצי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: להפוך חילוק ב-2 לכפל בחצי (1/2).", "math_expression": "1/8 × 1/2" },
            { "verbal_explanation": "שלב 2: נכפיל מכנה במכנה (8*2) ומונה במונה.", "math_expression": "1/16" }
        ],
        "final_answer": "1/16",
        "options": ["1/4", "2/8", "1/16", "4"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "חילוק שברים פשוטים",
        "difficulty": "High",
        "question_text": "בבקבוק יש 3/4 ליטר מיץ. אנו רוצים למזוג אותו לכוסות המכילות 1/8 ליטר כל אחת. כמה כוסות נמלא?",
        "hint": "כמה פעמים נכנסת שמינית (1/8) בשלושה רבעים (3/4)? כפל בהופכי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך חילוק לכפל בהופכי (8/1).", "math_expression": "3/4 × 8/1" },
            { "verbal_explanation": "שלב 2: נכפיל מונה במונה (3*8=24) ונחלק במכנה (4).", "math_expression": "24 ÷ 4 = 6" }
        ],
        "final_answer": "6 כוסות",
        "options": ["3 כוסות", "4 כוסות", "6 כוסות", "8 כוסות"],
        "correctAnswer": 2
    },// ==============================================================
    // --- תת נושא 5: חישוב חלק של כמות ומציאת הכמות היסודית (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Low",
        "question_text": "חשבו: כמה הם 1/4 מתוך 40?",
        "hint": "כדי למצוא רבע מכמות, פשוט מחלקים את הכמות הכוללת ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את השלם (40) במכנה (4).", "math_expression": "40 ÷ 4 = 10" },
            { "verbal_explanation": "שלב 2: נכפיל את התוצאה במונה (1).", "math_expression": "10 × 1 = 10" }
        ],
        "final_answer": "10",
        "options": ["5", "10", "15", "8"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "חשבו: כמה הם 2/3 מתוך 18?",
        "hint": "מצאו קודם כמה זה שליש אחד (חלקו ב-3), ואז הכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הכמות (18) במכנה (3) למציאת שליש אחד.", "math_expression": "18 ÷ 3 = 6" },
            { "verbal_explanation": "שלב 2: נכפיל את התוצאה במונה (2) למציאת שני שלישים.", "math_expression": "6 × 2 = 12" }
        ],
        "final_answer": "12",
        "options": ["9", "6", "12", "15"],
        "correctAnswer": 2
    },
    {
        "id": 63,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "בכיתה יש 30 תלמידים. 3/5 מהם משתתפים בחוג ספורט. כמה תלמידים בחוג ספורט?",
        "hint": "חלקו את הכיתה ל-5 קבוצות (חמישיות), וקחו 3 קבוצות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה תלמידים שווים לחמישית אחת (30 חלקי 5).", "math_expression": "30 ÷ 5 = 6" },
            { "verbal_explanation": "שלב 2: נכפיל את הכמות של חמישית אחת ב-3.", "math_expression": "6 × 3 = 18" }
        ],
        "final_answer": "18 תלמידים",
        "options": ["15 תלמידים", "18 תלמידים", "20 תלמידים", "12 תלמידים"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "חשבו: כמה הם 5/8 מתוך 32?",
        "hint": "חלקו ב-8 והכפילו ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת שמינית אחת מחלוקת 32 ב-8.", "math_expression": "32 ÷ 8 = 4" },
            { "verbal_explanation": "שלב 2: הכפלת הערך ב-5 לקבלת 5 שמיניות.", "math_expression": "4 × 5 = 20" }
        ],
        "final_answer": "20",
        "options": ["16", "24", "20", "15"],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "ספר עולה 120 ₪. נועה קיבלה הנחה של 1/4 מהמחיר. מהו סכום ההנחה בשקלים?",
        "hint": "מצאו רבע מתוך 120.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המחיר הכולל ל-4.", "math_expression": "120 ÷ 4 = 30" }
        ],
        "final_answer": "30 ₪",
        "options": ["40 ₪", "30 ₪", "60 ₪", "90 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 66,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "שלושה רבעים (3/4) ממשקל של שקית קמח הם 600 גרם. מהו משקלה של שקית קמח שלמה?",
        "hint": "אם 3 חלקים שווים 600, כמה שווה חלק אחד? ואז כמה שווים כל 4 החלקים?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את ה-600 ב-3 כדי למצוא כמה שוקל 'רבע' אחד.", "math_expression": "600 ÷ 3 = 200" },
            { "verbal_explanation": "שלב 2: נכפיל ב-4 כדי למצוא את השלם המלא (4 רבעים).", "math_expression": "200 × 4 = 800" }
        ],
        "final_answer": "800 גרם",
        "options": ["700 גרם", "800 גרם", "900 גרם", "1000 גרם"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "מצאו את השלם: 2/5 מהמספר הם 20.",
        "hint": "אם שתי חמישיות הן 20, חמישית אחת היא 10. הכפילו ב-5 לשלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הכמות (20) במונה (2) כדי למצוא את הערך של חמישית.", "math_expression": "20 ÷ 2 = 10" },
            { "verbal_explanation": "שלב 2: נכפיל את הערך במכנה (5) כדי למצוא את השלם.", "math_expression": "10 × 5 = 50" }
        ],
        "final_answer": "50",
        "options": ["40", "100", "50", "60"],
        "correctAnswer": 2
    },
    {
        "id": 68,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "מצאו את השלם: 1/3 מהמספר הוא 15.",
        "hint": "אם שליש הוא 15, השלם גדול פי 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את החלק (15) ב-3 למציאת השלם.", "math_expression": "15 × 3 = 45" }
        ],
        "final_answer": "45",
        "options": ["30", "45", "60", "5"],
        "correctAnswer": 1
    },
    {
        "id": 69,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "מצאו את השלם: 5/6 מהמספר הם 30.",
        "hint": "חלקו 30 ב-5 למציאת שישית, והכפילו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא ערך של שישית אחת.", "math_expression": "30 ÷ 5 = 6" },
            { "verbal_explanation": "שלב 2: נכפיל ב-6 למציאת השלם כולו.", "math_expression": "6 × 6 = 36" }
        ],
        "final_answer": "36",
        "options": ["25", "30", "36", "42"],
        "correctAnswer": 2
    },
    {
        "id": 70,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "דני רץ 3/4 מהמסלול, שהם 15 ק\"מ. מהו אורך המסלול השלם?",
        "hint": "חלקו 15 ב-3 (רבע אחד) והכפילו ב-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת רבע מסלול.", "math_expression": "15 ÷ 3 = 5" },
            { "verbal_explanation": "שלב 2: מציאת המסלול המלא (4 רבעים).", "math_expression": "5 × 4 = 20" }
        ],
        "final_answer": "20 ק\"מ",
        "options": ["15 ק\"מ", "20 ק\"מ", "25 ק\"מ", "30 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Low",
        "question_text": "מה גדול יותר: 1/2 מתוך 100 או 1/4 מתוך 200?",
        "hint": "חשבו כל אחד מהם בנפרד והשוו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב 1/2 מתוך 100.", "math_expression": "100 ÷ 2 = 50" },
            { "verbal_explanation": "שלב 2: נחשב 1/4 מתוך 200.", "math_expression": "200 ÷ 4 = 50" },
            { "verbal_explanation": "שלב 3: התוצאות שוות.", "math_expression": "50 = 50" }
        ],
        "final_answer": "הם שווים",
        "options": ["1/2 מתוך 100", "1/4 מתוך 200", "הם שווים", "אי אפשר לדעת"],
        "correctAnswer": 2
    },
    {
        "id": 72,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "מצאו את השלם: 7/10 מהכסף הם 140 ₪.",
        "hint": "140 חלקי 7 נותן את העשירית. הכפילו ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת עשירית אחת.", "math_expression": "140 ÷ 7 = 20" },
            { "verbal_explanation": "שלב 2: הכפלה ב-10 לשלם המלא.", "math_expression": "20 × 10 = 200" }
        ],
        "final_answer": "200 ₪",
        "options": ["100 ₪", "150 ₪", "200 ₪", "250 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 73,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "4/9 מכלל העצים בפרדס הם עצי תפוז. ידוע שיש 36 עצי תפוז. כמה עצים בסך הכל בפרדס?",
        "hint": "אם 4 תשיעיות הן 36, תשיעית אחת היא 9. מצאו את השלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק 36 ב-4 למציאת תשיעית.", "math_expression": "36 ÷ 4 = 9" },
            { "verbal_explanation": "שלב 2: נכפיל ב-9 למציאת הכמות השלמה.", "math_expression": "9 × 9 = 81" }
        ],
        "final_answer": "81 עצים",
        "options": ["72 עצים", "81 עצים", "90 עצים", "64 עצים"],
        "correctAnswer": 1
    },
    {
        "id": 74,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "Medium",
        "question_text": "חשבו: כמה הם 3/10 מתוך 50?",
        "hint": "חלקו ב-10 והכפילו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציאת עשירית.", "math_expression": "50 ÷ 10 = 5" },
            { "verbal_explanation": "שלב 2: הכפלה ב-3.", "math_expression": "5 × 3 = 15" }
        ],
        "final_answer": "15",
        "options": ["10", "15", "20", "25"],
        "correctAnswer": 1
    },
    {
        "id": 75,
        "subTopic": "חישוב חלק של כמות ומציאת הכמות היסודית",
        "difficulty": "High",
        "question_text": "רונית קראה 2/5 מהספר. נשארו לה עוד 60 עמודים לקרוא. כמה עמודים בספר כולו?",
        "hint": "אם קראה 2/5, נשארו לה 3/5. לכן 3/5 שווים 60. מצאו את השלם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החלק שנותר לקרוא הוא 3/5.", "math_expression": "5/5 - 2/5 = 3/5" },
            { "verbal_explanation": "שלב 2: נמצא כמה שווה חמישית (60 חלקי 3).", "math_expression": "60 ÷ 3 = 20" },
            { "verbal_explanation": "שלב 3: נכפיל ב-5 למציאת השלם.", "math_expression": "20 × 5 = 100" }
        ],
        "final_answer": "100 עמודים",
        "options": ["80 עמודים", "100 עמודים", "120 עמודים", "150 עמודים"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 6: כפל וחילוק שברים עשרוניים ב-10, 100 וכו' (15 שאלות) ---
    // ==============================================================
    {
        "id": 76,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Low",
        "question_text": "פתרו: 2.5 × 10",
        "hint": "בכפל ב-10, מזיזים את הנקודה העשרונית מקום אחד ימינה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזת הנקודה צעד אחד ימינה הופכת את 2.5 ל-25.", "math_expression": "25.0 = 25" }
        ],
        "final_answer": "25",
        "options": ["0.25", "25", "250", "2.05"],
        "correctAnswer": 1
    },
    {
        "id": 77,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 0.34 × 100",
        "hint": "בכפל ב-100 מזיזים את הנקודה שני מקומות ימינה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזת הנקודה העשרונית 2 מקומות ימינה.", "math_expression": "34" }
        ],
        "final_answer": "34",
        "options": ["3.4", "34", "340", "0.034"],
        "correctAnswer": 1
    },
    {
        "id": 78,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 4.1 × 100",
        "hint": "הזיזו את הנקודה פעמיים ימינה. השלימו באפס מקומות ריקים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזה ראשונה הופכת ל-41. הזזה שנייה דורשת הוספת אפס.", "math_expression": "410" }
        ],
        "final_answer": "410",
        "options": ["41", "410", "4.10", "4100"],
        "correctAnswer": 1
    },
    {
        "id": 79,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 0.05 × 1000",
        "hint": "הכפלה ב-1000 דורשת הזזת הנקודה 3 פעמים ימינה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שתי הזזות נותנות 5. ההזזה השלישית מוסיפה אפס.", "math_expression": "50" }
        ],
        "final_answer": "50",
        "options": ["5", "50", "500", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 80,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Low",
        "question_text": "פתרו: 12.3 × 10",
        "hint": "הזיזו נקודה ימינה מקום אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר הופך לשלם.", "math_expression": "123" }
        ],
        "final_answer": "123",
        "options": ["1.23", "123", "1230", "12.03"],
        "correctAnswer": 1
    },
    {
        "id": 81,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 0.007 × 100",
        "hint": "הזיזו הנקודה פעמיים ימינה בלבד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזה של שני מקומות ימינה תעביר את הנקודה לפני ה-7.", "math_expression": "0.7" }
        ],
        "final_answer": "0.7",
        "options": ["7", "0.7", "70", "0.07"],
        "correctAnswer": 1
    },
    {
        "id": 82,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 5.6 × 1000",
        "hint": "הזיזו את הנקודה 3 פעמים ימינה (הוסיפו שני אפסים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזה אחת נותנת 56. עוד שתי הזזות יוסיפו שני אפסים.", "math_expression": "5600" }
        ],
        "final_answer": "5,600",
        "options": ["560", "5,600", "56", "56,000"],
        "correctAnswer": 1
    },
    {
        "id": 83,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Low",
        "question_text": "פתרו: 15.2 ÷ 10",
        "hint": "בחילוק, מזיזים את הנקודה העשרונית שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חילוק ב-10 גורר הזזה של הנקודה מקום אחד שמאלה.", "math_expression": "1.52" }
        ],
        "final_answer": "1.52",
        "options": ["152", "1.52", "0.152", "15.02"],
        "correctAnswer": 1
    },
    {
        "id": 84,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 234.5 ÷ 100",
        "hint": "חילוק ב-100 דורש הזזת הנקודה שני מקומות שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הנקודה שמאלה אל בין ה-2 ל-3.", "math_expression": "2.345" }
        ],
        "final_answer": "2.345",
        "options": ["23.45", "2.345", "0.2345", "2345"],
        "correctAnswer": 1
    },
    {
        "id": 85,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 5 ÷ 10",
        "hint": "כאשר למספר שלם אין נקודה, היא נמצאת מוסתרת מימינו (5.0). הזיזו שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הנקודה מ-5.0 מקום אחד שמאלה.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5",
        "options": ["50", "0.5", "0.05", "5"],
        "correctAnswer": 1
    },
    {
        "id": 86,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 8.4 ÷ 10",
        "hint": "הזיזו נקודה מקום אחד שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנקודה עוברת לפני ה-8.", "math_expression": "0.84" }
        ],
        "final_answer": "0.84",
        "options": ["84", "0.84", "0.084", "8.04"],
        "correctAnswer": 1
    },
    {
        "id": 87,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "פתרו: 12 ÷ 100",
        "hint": "חילוק ב-100: מזיזים פעמיים שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מהמספר 12.0 נזיז פעמיים שמאלה אל לפני ה-1.", "math_expression": "0.12" }
        ],
        "final_answer": "0.12",
        "options": ["1.2", "0.12", "1200", "0.012"],
        "correctAnswer": 1
    },
    {
        "id": 88,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 450 ÷ 1000",
        "hint": "3 אפסים, 3 הזזות שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזזת הנקודה 3 מקומות שמאלה.", "math_expression": "0.450 = 0.45" }
        ],
        "final_answer": "0.45",
        "options": ["4.5", "0.45", "45", "0.045"],
        "correctAnswer": 1
    },
    {
        "id": 89,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "High",
        "question_text": "פתרו: 0.2 ÷ 10",
        "hint": "כשהנקודה זזה שמאלה מ-0, יש להוסיף עוד אפס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזיז את הנקודה שמאלה ונקבל מאית.", "math_expression": "0.02" }
        ],
        "final_answer": "0.02",
        "options": ["2", "0.2", "0.02", "0.002"],
        "correctAnswer": 2
    },
    {
        "id": 90,
        "subTopic": "כפל וחילוק שברים עשרוניים ב-10, 100 וכו'",
        "difficulty": "Medium",
        "question_text": "מחירם של 10 עפרונות זהים הוא 12.5 ₪. מה מחירו של עיפרון אחד?",
        "hint": "חלקו את המחיר הכולל ב-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק 12.5 ב-10 על ידי הזזת הנקודה שמאלה.", "math_expression": "12.5 ÷ 10 = 1.25" }
        ],
        "final_answer": "1.25 ₪",
        "options": ["125 ₪", "1.25 ₪", "0.125 ₪", "2.5 ₪"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 7: כפל שבר בשבר כולל מספרים מעורבים (15 שאלות) ---
    // ==============================================================
    {
        "id": 91,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Low",
        "question_text": "פתרו: 1/2 × 1/2",
        "hint": "בכפל שברים: מונה כפול מונה, ומכנה כפול מכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונים (1×1).", "math_expression": "1" },
            { "verbal_explanation": "שלב 2: נכפיל את המכנים (2×2).", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: נרשום את השבר.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1", "1/4", "2/4", "1/2"],
        "correctAnswer": 1
    },
    {
        "id": 92,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Medium",
        "question_text": "פתרו: 2/3 × 3/4",
        "hint": "אפשר לכפול ואז לצמצם, או לצמצם 'באלכסון' לפני הכפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל מונה במונה (2*3=6) ומכנה במכנה (3*4=12).", "math_expression": "6/12" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר (נחלק ב-6).", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["5/7", "1/2", "6/7", "5/12"],
        "correctAnswer": 1
    },
    {
        "id": 93,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Medium",
        "question_text": "פתרו: 3/5 × 1/3",
        "hint": "שימו לב ל-3 במונה ול-3 במכנה - אפשר לבטל אותם (לצמצם).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל: 3*1=3, 5*3=15.", "math_expression": "3/15" },
            { "verbal_explanation": "שלב 2: נצמצם ב-3.", "math_expression": "1/5" }
        ],
        "final_answer": "1/5",
        "options": ["4/8", "3/8", "1/5", "3/15"],
        "correctAnswer": 2
    },
    {
        "id": 94,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 5/8 × 4/5",
        "hint": "צמצמו את ה-5 במונה ובמכנה, ותישארו עם 4/8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לאחר כפל (או צמצום אלכסוני) נקבל 20/40.", "math_expression": "20/40" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["9/13", "1/2", "20/13", "1/4"],
        "correctAnswer": 1
    },
    {
        "id": 95,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1/4 × 2/7",
        "hint": "מונה במונה, מכנה במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל מונים: 1×2=2. כפל מכנים: 4×7=28.", "math_expression": "2/28" },
            { "verbal_explanation": "שלב 2: נצמצם ב-2.", "math_expression": "1/14" }
        ],
        "final_answer": "1/14",
        "options": ["3/11", "2/11", "1/14", "1/7"],
        "correctAnswer": 2
    },
    {
        "id": 96,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 3/8 × 2/3",
        "hint": "הכפילו וקבלו 6/24. ואז צמצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל מונים (3*2=6) ומכנים (8*3=24).", "math_expression": "6/24" },
            { "verbal_explanation": "שלב 2: נצמצם ב-6.", "math_expression": "1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1/4", "5/11", "6/11", "1/2"],
        "correctAnswer": 0
    },
    {
        "id": 97,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 7/10 × 5/7",
        "hint": "צמצמו את ה-7. יישאר לכם 5/10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל נותן 35/70. (או צמצום אלכסוני ל-5/10).", "math_expression": "35/70" },
            { "verbal_explanation": "שלב 2: נצמצם לחצי.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1/2", "12/17", "35/17", "1/5"],
        "correctAnswer": 0
    },
    {
        "id": 98,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1 1/2 × 1/3 (מספר מעורב כפול שבר)",
        "hint": "הפכו את המספר המעורב (1 וחצי) לשבר מדומה (3 חצאים) ואז כפלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך 1 1/2 לשבר מדומה.", "math_expression": "3/2" },
            { "verbal_explanation": "שלב 2: נכפיל 3/2 ב-1/3.", "math_expression": "3/2 × 1/3" },
            { "verbal_explanation": "שלב 3: התוצאה היא 3/6, שנצמצם לחצי.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["1 1/6", "1/2", "3/6", "2/5"],
        "correctAnswer": 1
    },
    {
        "id": 99,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 2 1/4 × 2/3",
        "hint": "הפכו 2 ורבע ל-9/4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרת המספר המעורב: 2 שלמים הם 8 רבעים, ועוד רבע = 9/4.", "math_expression": "9/4" },
            { "verbal_explanation": "שלב 2: נכפיל: 9/4 * 2/3 = 18/12.", "math_expression": "18/12" },
            { "verbal_explanation": "שלב 3: נצמצם ב-6 ונקבל 3/2, שהם שלם וחצי.", "math_expression": "1 1/2" }
        ],
        "final_answer": "1 1/2",
        "options": ["2 2/12", "1 1/2", "3/2", "2 1/2"],
        "correctAnswer": 1
    },
    {
        "id": 100,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 1 2/3 × 1 1/5",
        "hint": "הפכו את שני המספרים המעורבים לשברים מדומים לפני הכפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרת המספר הראשון (5/3).", "math_expression": "5/3" },
            { "verbal_explanation": "שלב 2: המרת המספר השני (6/5).", "math_expression": "6/5" },
            { "verbal_explanation": "שלב 3: כפל (30/15). ו-30 לחלק ל-15 שווה בדיוק 2.", "math_expression": "30/15 = 2" }
        ],
        "final_answer": "2",
        "options": ["1 2/15", "2", "3", "30/15"],
        "correctAnswer": 1
    },
    {
        "id": 101,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 2 1/2 × 1 1/2",
        "hint": "הפכו לשברים מדומים (5/2 כפול 3/2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרת המספרים ל-5/2 ו-3/2.", "math_expression": "5/2 × 3/2" },
            { "verbal_explanation": "שלב 2: כפל מונים ומכנים.", "math_expression": "15/4" },
            { "verbal_explanation": "שלב 3: חילוץ שלמים (ב-15 נכנסות 3 פעמים 4, ונשארות 3 רבעים).", "math_expression": "3 3/4" }
        ],
        "final_answer": "3 3/4",
        "options": ["3 1/4", "3 3/4", "2 1/4", "4"],
        "correctAnswer": 1
    },
    {
        "id": 102,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 3 1/3 × 3/10",
        "hint": "הפכו את 3 ושליש לשבר מדומה (10/3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה ל-10/3.", "math_expression": "10/3" },
            { "verbal_explanation": "שלב 2: כפל בשבר השני. המונים והמכנים מבטלים אלו את אלו.", "math_expression": "10/3 × 3/10 = 30/30" },
            { "verbal_explanation": "שלב 3: 30 חלקי 30 שווה 1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["1", "9/30", "3", "1/3"],
        "correctAnswer": 0
    },
    {
        "id": 103,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "Medium",
        "question_text": "פתרו: 1 3/4 × 2",
        "hint": "אפשר לכפול את השלם בנפרד (1*2) ואת השבר בנפרד (3/4 * 2) ואז לחבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1 כפול 2 שווה 2.", "math_expression": "2" },
            { "verbal_explanation": "שלב 2: שלושה רבעים כפול 2 שווה 6 רבעים, שהם שלם וחצי (1 1/2).", "math_expression": "1 1/2" },
            { "verbal_explanation": "שלב 3: חיבור החלקים.", "math_expression": "2 + 1 1/2 = 3 1/2" }
        ],
        "final_answer": "3 1/2",
        "options": ["2 3/4", "3 1/2", "4", "3 3/4"],
        "correctAnswer": 1
    },
    {
        "id": 104,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "פתרו: 2 2/5 × 1 1/4",
        "hint": "הפכו למדומים: 12/5 כפול 5/4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרה ל-12/5 ול-5/4.", "math_expression": "12/5 × 5/4" },
            { "verbal_explanation": "שלב 2: כפל (60/20).", "math_expression": "60 ÷ 20 = 3" }
        ],
        "final_answer": "3",
        "options": ["3", "2 2/20", "2 3/9", "4"],
        "correctAnswer": 0
    },
    {
        "id": 105,
        "subTopic": "כפל שבר בשבר כולל מספרים מעורבים",
        "difficulty": "High",
        "question_text": "שטחו של חדר מלבני: אורכו 1 1/2 מטר ורוחבו 1/2 מטר. מה השטח במ\"ר?",
        "hint": "הכפילו אורך ברוחב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את האורך ל-3/2.", "math_expression": "3/2 × 1/2" },
            { "verbal_explanation": "שלב 2: נכפיל כדי לקבל שטח.", "math_expression": "3/4" }
        ],
        "final_answer": "3/4 מ\"ר",
        "options": ["1 מ\"ר", "3/4 מ\"ר", "1/4 מ\"ר", "1 1/4 מ\"ר"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 8: כפל שברים עשרוניים ואומדן תוצאות (15 שאלות) ---
    // ==============================================================
    {
        "id": 106,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Low",
        "question_text": "פתרו: 0.2 × 0.3",
        "hint": "כפלו כרגיל (2×3) ואז ספרו כמה ספרות היו אחרי הנקודה בשני המספרים יחד (2 מקומות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספרים ללא הנקודות.", "math_expression": "2 × 3 = 6" },
            { "verbal_explanation": "שלב 2: נמקם את הנקודה 2 מקומות שמאלה מהסוף.", "math_expression": "0.06" }
        ],
        "final_answer": "0.06",
        "options": ["0.6", "0.06", "6", "0.5"],
        "correctAnswer": 1
    },
    {
        "id": 107,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "פתרו: 0.5 × 0.4",
        "hint": "5 כפול 4 שווה 20. הזזת הנקודה פעמיים תיתן 0.20.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל 5 ב-4.", "math_expression": "20" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה 2 מקומות שמאלה.", "math_expression": "0.20 = 0.2" }
        ],
        "final_answer": "0.2",
        "options": ["0.02", "2", "0.2", "0.9"],
        "correctAnswer": 2
    },
    {
        "id": 108,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "פתרו: 1.2 × 0.3",
        "hint": "12 כפול 3 שווה 36. כמה ספרות אחרי הנקודה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל 12 ב-3.", "math_expression": "36" },
            { "verbal_explanation": "שלב 2: יש 2 ספרות אחרי הנקודה בתרגיל, לכן נמקם את הנקודה בהתאם.", "math_expression": "0.36" }
        ],
        "final_answer": "0.36",
        "options": ["3.6", "0.36", "0.036", "1.5"],
        "correctAnswer": 1
    },
    {
        "id": 109,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "פתרו: 0.04 × 0.5",
        "hint": "4 כפול 5 שווה 20. בתרגיל יש סה\"כ 3 ספרות אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל רגיל (4*5=20).", "math_expression": "20" },
            { "verbal_explanation": "שלב 2: הזזת נקודה 3 מקומות שמאלה (0.020).", "math_expression": "0.02" }
        ],
        "final_answer": "0.02",
        "options": ["0.2", "0.02", "0.002", "0.20"],
        "correctAnswer": 1
    },
    {
        "id": 110,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "פתרו: 2.5 × 0.2",
        "hint": "25 כפול 2 שווה 50. יש 2 ספרות אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 25 כפול 2 שווה 50.", "math_expression": "50" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה 2 מקומות.", "math_expression": "0.50 = 0.5" }
        ],
        "final_answer": "0.5",
        "options": ["5", "0.5", "0.05", "50"],
        "correctAnswer": 1
    },
    {
        "id": 111,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Low",
        "question_text": "פתרו: 0.1 × 0.1",
        "hint": "עשירית כפול עשירית היא מאית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1 כפול 1 שווה 1. הזזה של 2 מקומות.", "math_expression": "0.01" }
        ],
        "final_answer": "0.01",
        "options": ["0.1", "0.01", "1", "0.001"],
        "correctAnswer": 1
    },
    {
        "id": 112,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "פתרו: 1.5 × 1.5",
        "hint": "15 כפול 15 שווה 225. מקמו את הנקודה לאחר 2 ספרות מהסוף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 15 בריבוע זה 225.", "math_expression": "225" },
            { "verbal_explanation": "שלב 2: מיקום הנקודה.", "math_expression": "2.25" }
        ],
        "final_answer": "2.25",
        "options": ["22.5", "2.25", "0.225", "3.0"],
        "correctAnswer": 1
    },
    {
        "id": 113,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "אמדו (העריכו) את התוצאה: 4.9 × 2.1 (בלי לחשב במדויק).",
        "hint": "עגלו את 4.9 ל-5 ואת 2.1 ל-2. המכפלה קרובה למה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נעגל כל מספר למספר השלם הקרוב ביותר.", "math_expression": "5 × 2" },
            { "verbal_explanation": "שלב 2: נכפיל את המעוגלים כדי לקבל אומדן (הערכה).", "math_expression": "10" }
        ],
        "final_answer": "בערך 10",
        "options": ["בערך 7", "בערך 10", "בערך 15", "בערך 20"],
        "correctAnswer": 1
    },
    {
        "id": 114,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "אמדו את התוצאה: 9.8 × 0.5",
        "hint": "9.8 קרוב ל-10. מה זה חצי (0.5) מ-10?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עיגול 9.8 ל-10.", "math_expression": "10" },
            { "verbal_explanation": "שלב 2: 10 כפול 0.5 זה בדיוק חצי מ-10.", "math_expression": "5" }
        ],
        "final_answer": "בערך 5",
        "options": ["בערך 10", "בערך 5", "בערך 9", "בערך 2"],
        "correctAnswer": 1
    },
    {
        "id": 115,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "איזו תוצאה סבירה ביותר לתרגיל: 3.1 × 6.2?",
        "hint": "עגלו ל-3 ול-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עיגול למספרים שלמים.", "math_expression": "3 × 6 = 18" },
            { "verbal_explanation": "שלב 2: התוצאה חייבת להיות קרובה ל-18.", "math_expression": "18" }
        ],
        "final_answer": "קרוב ל-18",
        "options": ["קרוב ל-18", "קרוב ל-9", "קרוב ל-36", "קרוב ל-24"],
        "correctAnswer": 0
    },
    {
        "id": 116,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "אמדו את התוצאה: 5.05 × 3.9",
        "hint": "5.05 קרוב ל-5. 3.9 קרוב ל-4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עיגול ל-5 ול-4.", "math_expression": "5 × 4 = 20" }
        ],
        "final_answer": "בערך 20",
        "options": ["בערך 15", "בערך 20", "בערך 25", "בערך 10"],
        "correctAnswer": 1
    },
    {
        "id": 117,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "האם התוצאה של 10.2 × 0.9 גדולה או קטנה מ-10.2?",
        "hint": "כאשר מכפילים במספר שקטן מ-1 (כמו 0.9), התוצאה תמיד קטנה מהמספר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 0.9 קרוב ל-1 אבל קטן ממנו. כפל בשבר מקטין את המספר.", "math_expression": "כפל בשבר מחליש" }
        ],
        "final_answer": "קטנה מ-10.2",
        "options": ["גדולה מ-10.2", "שווה ל-10.2", "קטנה מ-10.2", "אי אפשר לדעת"],
        "correctAnswer": 2
    },
    {
        "id": 118,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "אמדו את התוצאה של 1.9 × 1.9.",
        "hint": "1.9 קרוב מאוד ל-2. מה זה 2 כפול 2?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1.9 מתעגל למעלה ל-2.", "math_expression": "2 × 2 = 4" }
        ],
        "final_answer": "בערך 4",
        "options": ["בערך 2", "בערך 4", "בערך 6", "בערך 1"],
        "correctAnswer": 1
    },
    {
        "id": 119,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "High",
        "question_text": "פתרו בדיוק: 0.8 × 0.08",
        "hint": "8 כפול 8 זה 64. יש 3 ספרות אחרי הנקודה (אחת משמאל ועוד שתיים מימין).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספרים.", "math_expression": "8 × 8 = 64" },
            { "verbal_explanation": "שלב 2: נזיז את הנקודה 3 מקומות שמאלה.", "math_expression": "0.064" }
        ],
        "final_answer": "0.064",
        "options": ["0.64", "0.064", "0.0064", "6.4"],
        "correctAnswer": 1
    },
    {
        "id": 120,
        "subTopic": "כפל שברים עשרוניים ואומדן תוצאות",
        "difficulty": "Medium",
        "question_text": "אמא קנתה 2.1 ק\"ג עגבניות שעולות 4.9 ₪ לקילוגרם. איזה סכום מהבאים הגיוני ביותר שתשלם?",
        "hint": "עגלו 2.1 ל-2 ועגלו 4.9 ל-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אומדן כמות (2) כפול אומדן מחיר (5).", "math_expression": "2 × 5 = 10" }
        ],
        "final_answer": "בערך 10 ₪",
        "options": ["בערך 10 ₪", "בערך 8 ₪", "בערך 15 ₪", "בערך 20 ₪"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 9: כפל שלם בשבר פשוט ובמספר מעורב (15 שאלות) ---
    // ==============================================================
    {
        "id": 121,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Low",
        "question_text": "פתרו: 5 × 1/2",
        "hint": "מהם 5 חצאים? חברו חצי 5 פעמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את השלם במונה.", "math_expression": "5/2" },
            { "verbal_explanation": "שלב 2: נהפוך למספר מעורב.", "math_expression": "2 1/2" }
        ],
        "final_answer": "2 1/2",
        "options": ["5/10", "2 1/2", "5", "1/10"],
        "correctAnswer": 1
    },
    {
        "id": 122,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 4 × 2/3",
        "hint": "הכפילו את ה-4 במונה (2) והשאירו את המכנה (3).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל שלם במונה.", "math_expression": "8/3" },
            { "verbal_explanation": "שלב 2: נחלץ שלמים (ב-8 יש פעמיים 3).", "math_expression": "2 2/3" }
        ],
        "final_answer": "2 2/3",
        "options": ["8/12", "2 2/3", "4 2/3", "6/3"],
        "correctAnswer": 1
    },
    {
        "id": 123,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 6 × 3/4",
        "hint": "כפלו במונה ואז פשטו את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל: 6 כפול 3 שווה 18.", "math_expression": "18/4" },
            { "verbal_explanation": "שלב 2: נחלץ שלמים (16 מתחלק ב-4 ל-4 שלמים, נשארו 2 רבעים).", "math_expression": "4 2/4 = 4 1/2" }
        ],
        "final_answer": "4 1/2",
        "options": ["4 1/2", "18", "6 3/4", "3/24"],
        "correctAnswer": 0
    },
    {
        "id": 124,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Low",
        "question_text": "פתרו: 10 × 1/5",
        "hint": "כמה הם 10 חלקי 5?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את השלם במונה.", "math_expression": "10/5" },
            { "verbal_explanation": "שלב 2: נחלק.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["10/50", "2", "5", "1/2"],
        "correctAnswer": 1
    },
    {
        "id": 125,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 8 × 3/8",
        "hint": "ה-8 בשלם וה-8 במכנה יכולים לצמצם אחד את השני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כפל נותן 24/8.", "math_expression": "24 ÷ 8 = 3" }
        ],
        "final_answer": "3",
        "options": ["24", "3", "8/3", "11/8"],
        "correctAnswer": 1
    },
    {
        "id": 126,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 7 × 2/5",
        "hint": "14 חמישיות. כמה שלמים זה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 7 כפול 2 שווה 14.", "math_expression": "14/5" },
            { "verbal_explanation": "שלב 2: 14 חלקי 5 נותן 2 שלמים ושאר של 4.", "math_expression": "2 4/5" }
        ],
        "final_answer": "2 4/5",
        "options": ["14/35", "2 4/5", "7 2/5", "3 1/5"],
        "correctAnswer": 1
    },
    {
        "id": 127,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "High",
        "question_text": "פתרו: 12 × 5/6",
        "hint": "במקום לכפול 12 ב-5, אפשר קודם לחלק את ה-12 ב-6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק קודם 12 ב-6.", "math_expression": "12 ÷ 6 = 2" },
            { "verbal_explanation": "שלב 2: נכפיל את התוצאה במונה 5.", "math_expression": "2 × 5 = 10" }
        ],
        "final_answer": "10",
        "options": ["60", "10", "2", "12 5/6"],
        "correctAnswer": 1
    },
    {
        "id": 128,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 3 × 1 1/2",
        "hint": "כפלו את השלם בשלם, ואת השלם בשבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל 3 בשלם.", "math_expression": "3 × 1 = 3" },
            { "verbal_explanation": "שלב 2: נכפיל 3 בחצי.", "math_expression": "3/2 = 1 1/2" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "3 + 1 1/2 = 4 1/2" }
        ],
        "final_answer": "4 1/2",
        "options": ["3 1/2", "4 1/2", "3/2", "6"],
        "correctAnswer": 1
    },
    {
        "id": 129,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "High",
        "question_text": "פתרו: 4 × 2 1/4",
        "hint": "4 פעמים 2, ו-4 פעמים רבע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 4 כפול 2 שלמים.", "math_expression": "8" },
            { "verbal_explanation": "שלב 2: 4 כפול רבע שווה לשלם אחד.", "math_expression": "1" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "8 + 1 = 9" }
        ],
        "final_answer": "9",
        "options": ["8 1/4", "9", "10", "8 4/16"],
        "correctAnswer": 1
    },
    {
        "id": 130,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 2 × 3 1/3",
        "hint": "2 פעמים 3, ו-2 פעמים שליש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 2 כפול 3.", "math_expression": "6" },
            { "verbal_explanation": "שלב 2: 2 כפול שליש.", "math_expression": "2/3" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "6 2/3" }
        ],
        "final_answer": "6 2/3",
        "options": ["5 1/3", "6 2/3", "6 1/6", "5"],
        "correctAnswer": 1
    },
    {
        "id": 131,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "High",
        "question_text": "פתרו: 5 × 1 2/5",
        "hint": "הפכו את המספר המעורב ל-7/5 ואז כפלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הפיכה לשבר מדומה.", "math_expression": "7/5" },
            { "verbal_explanation": "שלב 2: כפל: 5 כפול 7/5 (החמישיות מתבטלות).", "math_expression": "7" }
        ],
        "final_answer": "7",
        "options": ["5 2/5", "7", "6", "10"],
        "correctAnswer": 1
    },
    {
        "id": 132,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "פתרו: 6 × 1 1/3",
        "hint": "6 כפול 1 זה 6. ומה זה 6 פעמים שליש?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 6 כפול 1.", "math_expression": "6" },
            { "verbal_explanation": "שלב 2: 6 כפול שליש = 6/3 = 2 שלמים.", "math_expression": "2" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "6 + 2 = 8" }
        ],
        "final_answer": "8",
        "options": ["7", "8", "6 1/3", "9"],
        "correctAnswer": 1
    },
    {
        "id": 133,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Low",
        "question_text": "פתרו: 10 × 2 1/2",
        "hint": "10 כפול 2 שווה 20. ו-10 חצאים שווים לעוד 5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 10 כפול 2.", "math_expression": "20" },
            { "verbal_explanation": "שלב 2: 10 כפול חצי (חצי מ-10).", "math_expression": "5" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "20 + 5 = 25" }
        ],
        "final_answer": "25",
        "options": ["20 1/2", "25", "22 1/2", "30"],
        "correctAnswer": 1
    },
    {
        "id": 134,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "High",
        "question_text": "פתרו: 8 × 1 1/4",
        "hint": "8 כפול 1 שווה 8. מה זה רבע מ-8?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 8 כפול 1.", "math_expression": "8" },
            { "verbal_explanation": "שלב 2: 8 כפול רבע (שמונה רבעים הם 2 שלמים).", "math_expression": "2" },
            { "verbal_explanation": "שלב 3: חיבור.", "math_expression": "8 + 2 = 10" }
        ],
        "final_answer": "10",
        "options": ["9", "10", "8 1/4", "12"],
        "correctAnswer": 1
    },
    {
        "id": 135,
        "subTopic": "כפל שלם בשבר פשוט ובמספר מעורב",
        "difficulty": "Medium",
        "question_text": "אופה משתמש ב-1 3/4 ק\"ג קמח לכל עוגה. הוא אפה 5 עוגות זהות. כמה קמח נדרש בסך הכל?",
        "hint": "כפלו 5 בשלם (1) ובשבר (3/4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 5 כפול 1.", "math_expression": "5" },
            { "verbal_explanation": "שלב 2: 5 כפול 3/4 שווה 15/4 (שזה 3 שלמים ו-3 רבעים).", "math_expression": "3 3/4" },
            { "verbal_explanation": "שלב 3: נחבר הכל.", "math_expression": "5 + 3 3/4 = 8 3/4" }
        ],
        "final_answer": "8 3/4",
        "options": ["5 3/4", "8 3/4", "7 1/2", "10"],
        "correctAnswer": 1
    },// ==============================================================
    // --- תת נושא 10: מיקום על ישר המספרים (15 שאלות) ---
    // ==============================================================
    {
        "id": 136,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "צפרדע מתחילה לקפוץ מנקודת ה-0 על ישר המספרים. בכל קפיצה היא מתקדמת בדיוק 3/4 מטר. לאיזו נקודה על ישר המספרים תגיע הצפרדע לאחר 2 קפיצות רצופות?",
        "hint": "חברו 3/4 ועוד 3/4. אם התוצאה גדולה מ-1, הפכו אותה למספר מעורב.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את המרחק של שתי הקפיצות.", "math_expression": "3/4 + 3/4 = 6/4" },
            { "verbal_explanation": "שלב 2: שש רבעים הם שבר מדומה. נמיר אותו למספר מעורב (4 רבעים הם שלם, ונשארו 2 רבעים).", "math_expression": "1 2/4" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר 2/4 לחצי.", "math_expression": "1 1/2" }
        ],
        "final_answer": "1 1/2 (אחד וחצי)",
        "options": ["1 1/4", "1 1/2 (אחד וחצי)", "2", "6/8"],
        "correctAnswer": 1
    },
    {
        "id": 137,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "במפת ניווט, המרחק בין תחנה א' לתחנה ב' הוא קילומטר אחד. הקטע שבין התחנות חולק ל-10 מקטעים שווים בדיוק על ידי סימוני צבע. דנה הלכה מתחנה א' ועצרה בסימון ה-4, ויוסי עצר בסימון ה-8. מהו המרחק בקילומטרים בין דנה ליוסי?",
        "hint": "כל סימון מייצג עשירית (1/10) מהדרך. חשבו כמה עשיריות מפרידות ביניהם וצמצמו את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: דנה נמצאת בנקודה 4/10, ויוסי בנקודה 8/10.", "math_expression": "8/10 - 4/10" },
            { "verbal_explanation": "שלב 2: נחסר את המיקומים כדי למצוא את המרחק ביניהם.", "math_expression": "4/10" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר על ידי חלוקת המונה והמכנה ב-2.", "math_expression": "2/5" }
        ],
        "final_answer": "2/5 ק\"מ",
        "options": ["1/5 ק\"מ", "4/10 ק\"מ", "2/5 ק\"מ", "1/2 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 138,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "מורה ציירה ישר מספרים ענק על רצפת הכיתה. היא ביקשה מאור לעמוד על הנקודה 0.25 ומנועה לעמוד על הנקודה 3/4. האם הם עומדים באותו המקום, או שמישהו מהם נמצא רחוק יותר מהאפס?",
        "hint": "המירו את 3/4 לשבר עשרוני או את 0.25 לשבר פשוט כדי להשוות בקלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את המיקום של נועה (3/4) לשבר עשרוני. שלושה רבעים שווים ל-75 מאיות.", "math_expression": "3/4 = 0.75" },
            { "verbal_explanation": "שלב 2: נשווה בין 0.25 ל-0.75. המספר 0.75 גדול יותר.", "math_expression": "0.75 > 0.25" },
            { "verbal_explanation": "שלב 3: לכן, נועה נמצאת רחוק יותר מה-0.", "math_expression": "נועה רחוקה יותר" }
        ],
        "final_answer": "נועה נמצאת רחוק יותר",
        "options": ["אור נמצא רחוק יותר", "נועה נמצאת רחוק יותר", "הם עומדים באותה נקודה בדיוק", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 139,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Low",
        "question_text": "על סרגל מדידה סטנדרטי, היכן בדיוק ממוקם הסימון של 2.5 סנטימטרים?",
        "hint": "2.5 מורכב מ-2 שלמים וחצי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר מתחיל ב-2 שלמים, ולכן הוא עבר את הסימון של 2 ס\"מ.", "math_expression": "> 2" },
            { "verbal_explanation": "שלב 2: החלק העשרוני הוא 0.5 (חצי), כלומר הוא ממוקם בדיוק באמצע הדרך ל-3.", "math_expression": "בדיוק בין 2 ל-3" }
        ],
        "final_answer": "בדיוק באמצע בין 2 ל-3",
        "options": ["בדיוק באמצע בין 1 ל-2", "בדיוק באמצע בין 2 ל-3", "קרוב יותר ל-3 מאשר ל-2", "על הסימון של 2"],
        "correctAnswer": 1
    },
    {
        "id": 140,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "ארבעה רצים משתתפים במרוץ שליחים. נדב עבר 7/8 מהמסלול, יעל עברה 5/6 מהמסלול, רון עבר 9/10 מהמסלול ומיכל עברה 3/4 מהמסלול. מי מהרצים נמצא הקרוב ביותר לקו הסיום (השלם)?",
        "hint": "ככל שהחתיכה החסרה להשלמת השלם (למשל 1/8 אצל נדב) קטנה יותר, כך הרץ קרוב יותר לסיום. מי חסר את החלק הקטן ביותר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק מה חסר לכל רץ כדי להגיע ל-1 שלם: לנדב חסר 1/8, ליעל 1/6, לרון 1/10 ולמיכל 1/4.", "math_expression": "1/8, 1/6, 1/10, 1/4" },
            { "verbal_explanation": "שלב 2: נחפש את השבר הקטן ביותר מבין החסרים. ככל שהמכנה גדול יותר, החלק קטן יותר.", "math_expression": "1/10 הוא הקטן ביותר" },
            { "verbal_explanation": "שלב 3: מכיוון שלרון חסר רק 1/10 (החלק הקטן ביותר), הוא הקרוב ביותר לסיום.", "math_expression": "רון" }
        ],
        "final_answer": "רון",
        "options": ["נדב", "יעל", "רון", "מיכל"],
        "correctAnswer": 2
    },
    {
        "id": 141,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "מדחום מציג טמפרטורות על ישר מספרים. הטמפרטורה בבוקר הייתה 1.2 מעלות. בצהריים הטמפרטורה עלתה ב-3/4 מעלה. לאיזו נקודה על ישר המספרים (מדחום) הגיעה הטמפרטורה בצהריים?",
        "hint": "המירו את השבר 3/4 לעשרוני (0.75) וחברו אותו לטמפרטורת הבוקר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את עליית הטמפרטורה (3/4) לייצוג עשרוני.", "math_expression": "3/4 = 0.75" },
            { "verbal_explanation": "שלב 2: נחבר את העלייה לטמפרטורת ההתחלה. נרשום 1.2 כ-1.20 כדי להקל על החיבור.", "math_expression": "1.20 + 0.75 = 1.95" }
        ],
        "final_answer": "1.95 מעלות",
        "options": ["1.55 מעלות", "1.95 מעלות", "2.05 מעלות", "1.34 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 142,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "מכונית צעצוע נוסעת על מסלול המחולק לשנתות של חמישיות. היא התחילה בנקודה 2 1/5, ונסעה קדימה מרחק של 1 3/5. באיזו נקודה על המסלול היא נעצרה?",
        "hint": "חברו את השלמים בנפרד ואת החמישיות בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את המספרים השלמים (2 ועוד 1).", "math_expression": "2 + 1 = 3" },
            { "verbal_explanation": "שלב 2: נחבר את השברים (חמישית ועוד שלוש חמישיות).", "math_expression": "1/5 + 3/5 = 4/5" },
            { "verbal_explanation": "שלב 3: נאחד את התוצאות.", "math_expression": "3 4/5" }
        ],
        "final_answer": "3 4/5",
        "options": ["3 2/5", "4", "3 4/5", "4 1/5"],
        "correctAnswer": 2
    },
    {
        "id": 143,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Low",
        "question_text": "איזה מספר עשרוני ממוקם בדיוק באמצע הדרך בין 0.4 ל-0.5 על ישר המספרים?",
        "hint": "חשבו על המספרים כ-40 מאיות ו-50 מאיות. מה נמצא בדיוק ביניהם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסיף אפס לשני המספרים כדי לראות אותם כמאיות.", "math_expression": "0.40 , 0.50" },
            { "verbal_explanation": "שלב 2: המספר שנמצא בדיוק באמצע בין 40 ל-50 הוא 45.", "math_expression": "0.45" }
        ],
        "final_answer": "0.45",
        "options": ["0.41", "0.45", "0.55", "0.045"],
        "correctAnswer": 1
    },
    {
        "id": 144,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "שלושה חברים קבעו להיפגש במסלול הליכה שאורכו 10 קילומטרים. עמית מחכה בנקודה המייצגת 1/3 מהמסלול, נועה בנקודה המייצגת 0.3 מהמסלול, וברק בנקודה 3/8. מי נמצא הכי קרוב לתחילת המסלול (נקודת ה-0)?",
        "hint": "המירו את כולם למכנה משותף או לעשרוני. 1/3 הוא 0.333, 0.3 הוא 0.300, ו-3/8 הוא 0.375.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבחן את נועה: היא ב-0.300.", "math_expression": "נועה = 0.300" },
            { "verbal_explanation": "שלב 2: נבחן את עמית: 1/3 הוא קצת יותר מ-0.3.", "math_expression": "עמית = 0.333..." },
            { "verbal_explanation": "שלב 3: נבחן את ברק: 3/8 מומר ל-0.375.", "math_expression": "ברק = 0.375" },
            { "verbal_explanation": "שלב 4: המספר הקטן ביותר (הכי קרוב ל-0) הוא 0.300 של נועה.", "math_expression": "נועה" }
        ],
        "final_answer": "נועה",
        "options": ["עמית", "נועה", "ברק", "כולם באותו המקום"],
        "correctAnswer": 1
    },
    {
        "id": 145,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "ציירו לעצמכם ישר מספרים. אם נסמן עליו את הנקודה 5/8, האם היא תהיה קרובה יותר לחצי (1/2) או לשלושה רבעים (3/4)?",
        "hint": "הרחיבו את חצי ושלושה רבעים לשמיניות כדי להשוות בקלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את חצי לשמיניות: 1/2 שווה ל-4/8.", "math_expression": "1/2 = 4/8" },
            { "verbal_explanation": "שלב 2: נרחיב את 3/4 לשמיניות: נכפיל ב-2 ונקבל 6/8.", "math_expression": "3/4 = 6/8" },
            { "verbal_explanation": "שלב 3: הנקודה שלנו היא 5/8. היא ממוקמת בדיוק באמצע בין 4/8 ל-6/8.", "math_expression": "מרחק שווה" }
        ],
        "final_answer": "היא ממוקמת בדיוק באמצע ביניהם",
        "options": ["קרובה יותר לחצי", "קרובה יותר לשלושה רבעים", "היא ממוקמת בדיוק באמצע ביניהם", "היא בכלל מחוץ לטווח"],
        "correctAnswer": 2
    },
    {
        "id": 146,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Low",
        "question_text": "אם נחלק את המרחק שבין 0 ל-1 לשלושה חלקים שווים, ונחלק את אותו המרחק גם לשישה חלקים שווים. איזו נקודה תשב בדיוק על אותו המקום שבו יושבת הנקודה 1/3?",
        "hint": "איזה שבר בעל מכנה 6 שווה בדיוק ל-1/3?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו מחפשים שבר השווה ל-1/3 מתוך החלוקה לשישיות.", "math_expression": "1/3 = ?/6" },
            { "verbal_explanation": "שלב 2: נרחיב את השבר פי 2.", "math_expression": "2/6" }
        ],
        "final_answer": "2/6",
        "options": ["1/6", "2/6", "3/6", "4/6"],
        "correctAnswer": 1
    },
    {
        "id": 147,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "צוללן יורד מתחת לפני הים. פני הים מייצגים את הנקודה 0. אם הוא צלל לעומק של 4.5 מטרים, ואז עלה למעלה 1 1/4 מטרים. באיזו נקודה על ציר העומק (ישר המספרים האנכי) הוא נמצא כעת?",
        "hint": "המירו את 1 1/4 לעשרוני (1.25) וחסרו אותו מהעומק אליו הגיע הצוללן (כי הוא עלה למעלה, לכיוון האפס).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמיר את מרחק העלייה למספר עשרוני.", "math_expression": "1 1/4 = 1.25" },
            { "verbal_explanation": "שלב 2: העומק המקסימלי היה 4.5. העלייה מקטינה את העומק, ולכן נחסר.", "math_expression": "4.50 - 1.25 = 3.25" }
        ],
        "final_answer": "עומק של 3.25 מטרים",
        "options": ["5.75 מטרים", "3.25 מטרים", "3.5 מטרים", "4.25 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 148,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "שבלול מטפס על קיר שגובהו 5 מטרים. ביום הוא עולה 1.5 מטרים, ובלילה הוא מחליק למטה 1/2 מטר. באיזו נקודה על ציר הגובה יהיה השבלול לאחר יממה שלמה (יום ולילה אחד)?",
        "hint": "חברו את העלייה של היום והחסירו את הירידה של הלילה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המרחק שעלה ביום הוא 1.5. המרחק שהחליק בלילה הוא חצי (0.5).", "math_expression": "1.5 - 0.5" },
            { "verbal_explanation": "שלב 2: נבצע את החיסור.", "math_expression": "1.0" }
        ],
        "final_answer": "נקודת ה-1 מטר",
        "options": ["1.5 מטרים", "נקודת ה-1 מטר", "2 מטרים", "0.5 מטר"],
        "correctAnswer": 1
    },
    {
        "id": 149,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "Medium",
        "question_text": "איזו נקודה על ישר המספרים מייצגת ערך גדול יותר: 0.8 או 4/5?",
        "hint": "המירו את השבר הפשוט (4/5) לשבר עשרוני כדי להשוות בקלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 4/5 למכנה 10 על ידי כפל ב-2.", "math_expression": "4/5 = 8/10" },
            { "verbal_explanation": "שלב 2: 8 עשיריות הן בדיוק 0.8. לכן שני המספרים מצביעים בדיוק על אותה נקודה.", "math_expression": "0.8 = 0.8" }
        ],
        "final_answer": "הם מייצגים את אותה הנקודה בדיוק",
        "options": ["0.8 גדול יותר", "4/5 גדול יותר", "הם מייצגים את אותה הנקודה בדיוק", "אי אפשר לחשב"],
        "correctAnswer": 2
    },
    {
        "id": 150,
        "subTopic": "מיקום על ישר המספרים",
        "difficulty": "High",
        "question_text": "נתון קטע על ישר המספרים שהנקודה השמאלית בו היא 1 והנקודה הימנית היא 2. הקטע מחולק ל-8 חלקים שווים. מהו המספר המדויק המיוצג על ידי הקו החמישי לאחר הנקודה 1?",
        "hint": "אם חילקנו את השלם ל-8, כל קו הוא שמינית. הקו החמישי הוא 5 שמיניות. הוסיפו את זה לשלם (1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זיהוי גודל הקפיצה. השלם מחולק ל-8, לכן כל קפיצה היא 1/8.", "math_expression": "קפיצה = 1/8" },
            { "verbal_explanation": "שלב 2: אנו מתקדמים 5 קווים מהנקודה 1.", "math_expression": "1 + 5/8" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה כמספר מעורב.", "math_expression": "1 5/8" }
        ],
        "final_answer": "1 5/8",
        "options": ["1 5/10", "1 5/8", "5/8", "1 3/8"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 11: מעבר משבר פשוט לשבר עשרוני (15 שאלות) ---
    // ==============================================================
    {
        "id": 151,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Low",
        "question_text": "קונדיטור מכין בלילה לעוגה וצריך להוסיף 1/2 ליטר חלב. כוס המדידה הדיגיטלית שלו מציגה מספרים עשרוניים בלבד. איזה מספר עשרוני עליו להגדיר בכוס?",
        "hint": "חצי מ-1 שלם. הרחיבו את המכנה ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את 1/2 למכנה 10 (נכפיל את המונה והמכנה ב-5).", "math_expression": "1/2 = 5/10" },
            { "verbal_explanation": "שלב 2: נרשום 5 עשיריות כייצוג עשרוני.", "math_expression": "0.5" }
        ],
        "final_answer": "0.5",
        "options": ["0.2", "0.5", "0.05", "1.2"],
        "correctAnswer": 1
    },
    {
        "id": 152,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "במבחן קצר בחשבון, רועי ענה נכון על 3 מתוך 4 שאלות (3/4). המורה מזינה את הציון למערכת באחוזים או בשבר עשרוני מתוך 1.00. מהו השבר העשרוני המייצג את ההצלחה של רועי?",
        "hint": "הרחיבו את המכנה (4) ל-100 על ידי הכפלה ב-25.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את הרבעים למאיות. נכפיל את 4 ב-25 ונקבל 100.", "math_expression": "מכנה: 4 × 25 = 100" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה (3) גם כן ב-25 ונקבל 75.", "math_expression": "מונה: 3 × 25 = 75" },
            { "verbal_explanation": "שלב 3: נרשום 75 מאיות כמספר עשרוני.", "math_expression": "0.75" }
        ],
        "final_answer": "0.75",
        "options": ["0.34", "0.75", "0.25", "3.4"],
        "correctAnswer": 1
    },
    {
        "id": 153,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "התזונאית המליצה לדנה לאכול 1/5 מקופסת השקדים ביום. דנה רוצה לשקול את הכמות במשקל אלקטרוני המציג ערכים עשרוניים של הקופסה. איזה שבר עשרוני מייצג חמישית?",
        "hint": "הרחיבו את המכנה ל-10 על ידי הכפלה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר כדי להגיע למכנה 10. נכפיל את המונה והמכנה ב-2.", "math_expression": "1/5 = 2/10" },
            { "verbal_explanation": "שלב 2: 2 עשיריות נכתבות כעשרוני כך.", "math_expression": "0.2" }
        ],
        "final_answer": "0.2",
        "options": ["0.15", "0.2", "0.5", "0.02"],
        "correctAnswer": 1
    },
    {
        "id": 154,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Low",
        "question_text": "מכל הדלק ברכב מלא עד ל-7/10 מקיבולתו. איך ייכתב הנתון הזה במחשב הרכב בצורה עשרונית?",
        "hint": "השבר כבר מוכן עם מכנה 10. פשוט כתבו את המונה אחרי הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שבר שהמכנה שלו הוא 10 או 100 ניתן לכתיבה מיידית.", "math_expression": "7/10" },
            { "verbal_explanation": "שלב 2: 7 עשיריות נרשמות כספרה אחת מימין לנקודה.", "math_expression": "0.7" }
        ],
        "final_answer": "0.7",
        "options": ["0.07", "7.0", "0.7", "0.710"],
        "correctAnswer": 2
    },
    {
        "id": 155,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "בסקר שנערך בקרב 20 תלמידים, נמצא ש-3 מתוכם (3/20) מרכיבים משקפיים. החוקר צריך לפרסם את התוצאה כשבר עשרוני. מה הוא ירשום?",
        "hint": "כדי להפוך 20 ל-100, יש להכפיל ב-5. עשו זאת גם למונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את המכנה מ-20 ל-100 על ידי הכפלה ב-5.", "math_expression": "20 × 5 = 100" },
            { "verbal_explanation": "שלב 2: נכפיל גם את המונה ב-5 כדי לשמור על השבר.", "math_expression": "3 × 5 = 15" },
            { "verbal_explanation": "שלב 3: נרשום 15 מאיות כמספר עשרוני.", "math_expression": "0.15" }
        ],
        "final_answer": "0.15",
        "options": ["0.32", "0.15", "0.015", "3.20"],
        "correctAnswer": 1
    },
    {
        "id": 156,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "בחנות צעצועים יש מדף עם 25 בובות. 9 מתוכן (9/25) הן בובות פרווה. מהו הייצוג העשרוני של החלק של בובות הפרווה על המדף?",
        "hint": "25 נכנס ב-100 בדיוק 4 פעמים. הרחיבו את השבר פי 4.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב למכנה 100 (נכפיל את המונה והמכנה פי 4).", "math_expression": "9 × 4 = 36, 25 × 4 = 100" },
            { "verbal_explanation": "שלב 2: השבר שנוצר הוא 36 מאיות.", "math_expression": "36/100" },
            { "verbal_explanation": "שלב 3: נכתוב בעשרוני (שתי ספרות אחרי הנקודה).", "math_expression": "0.36" }
        ],
        "final_answer": "0.36",
        "options": ["0.25", "0.925", "0.36", "0.036"],
        "correctAnswer": 2
    },
    {
        "id": 157,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Low",
        "question_text": "דני קנה רבע (1/4) אבטיח במכולת. כשהקופאי הניח את האבטיח על המשקל הדיגיטלי, הוא רצה לראות אם המשקל זהה לרבע קילוגרם. איזה מספר היה צריך להופיע על הצג?",
        "hint": "חשבו על מטבע של 25 אגורות, שהוא בדיוק רבע שקל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר פי 25 כדי להגיע למכנה 100.", "math_expression": "1/4 = 25/100" },
            { "verbal_explanation": "שלב 2: נרשום את 25 המאיות כמספר עשרוני.", "math_expression": "0.25" }
        ],
        "final_answer": "0.25",
        "options": ["0.14", "0.4", "0.25", "2.5"],
        "correctAnswer": 2
    },
    {
        "id": 158,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "במתכון לפנקייק נדרשות 4/5 כוסות חלב. השף עובד עם משורה שמסומנת בעשרוני. איזה מספר על המשורה מקביל לכמות זו?",
        "hint": "הרחיבו את החמישיות לעשיריות (הכפילו פי 2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר פי 2 כדי שהמכנה יהיה 10.", "math_expression": "4/5 = 8/10" },
            { "verbal_explanation": "שלב 2: נרשום 8 עשיריות כעשרוני.", "math_expression": "0.8" }
        ],
        "final_answer": "0.8",
        "options": ["0.45", "0.8", "0.08", "4.5"],
        "correctAnswer": 1
    },
    {
        "id": 159,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "משקלה של חבילת אורז הוא 2 וחצי קילוגרם (2 1/2). כיצד יירשם משקל זה בחשבונית של הסופרמרקט (המציגה נתונים בעשרוני)?",
        "hint": "השאירו את ה-2 כשלם בצד שמאל של הנקודה, והמירו רק את החצי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר השלם (2) נכתב משמאל לנקודה העשרונית.", "math_expression": "2." },
            { "verbal_explanation": "שלב 2: את השבר 1/2 נמיר ל-5 עשיריות ונכתוב מימין לנקודה.", "math_expression": "2.5" }
        ],
        "final_answer": "2.5",
        "options": ["2.12", "2.5", "2.05", "5.2"],
        "correctAnswer": 1
    },
    {
        "id": 160,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "במסלול מכשולים באורך 50 מטרים, הונח שלט לאחר 11 מטרים. השבר המייצג את מיקום השלט הוא 11/50 מהמסלול. כיצד נכתוב זאת כשבר עשרוני?",
        "hint": "כדי לעבור ממכנה 50 למכנה 100, הכפילו פי 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה והמכנה ב-2 להרחבה למאיות.", "math_expression": "11 × 2 = 22, 50 × 2 = 100" },
            { "verbal_explanation": "שלב 2: השבר שהתקבל הוא 22/100. נרשום אותו בעשרוני.", "math_expression": "0.22" }
        ],
        "final_answer": "0.22",
        "options": ["0.11", "0.50", "0.22", "11.50"],
        "correctAnswer": 2
    },
    {
        "id": 161,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "מנוע של מכונית צרך 3/8 ממיכל הדלק שלו בנסיעה אחת. הצג הדיגיטלי בלוח המחוונים מציג שברים עשרוניים. מה יופיע על הצג עבור הצריכה הזו?",
        "hint": "את המכנה 8 לא ניתן להפוך ל-10 או 100 בשלמים, אבל ניתן להפוך ל-1000 אם כופלים ב-125.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב את השבר לאלפיות על ידי הכפלת המונה והמכנה ב-125.", "math_expression": "8 × 125 = 1000" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה: 3 כפול 125.", "math_expression": "375/1000" },
            { "verbal_explanation": "שלב 3: נרשום 375 אלפיות (שלוש ספרות אחרי הנקודה).", "math_expression": "0.375" }
        ],
        "final_answer": "0.375",
        "options": ["0.38", "0.375", "0.038", "3.8"],
        "correctAnswer": 1
    },
    {
        "id": 162,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "בהוראות ההרכבה של רהיט נכתב שיש להשתמש בבורג בעובי שמינית אינץ' (1/8). כמה זה בעשרוני?",
        "hint": "כמו בשאלה הקודמת, זכרו ש-8 כפול 125 שווה 1000.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה (1) ואת המכנה (8) פי 125.", "math_expression": "1/8 = 125/1000" },
            { "verbal_explanation": "שלב 2: 125 אלפיות נכתבות עם 3 ספרות אחרי הנקודה.", "math_expression": "0.125" }
        ],
        "final_answer": "0.125",
        "options": ["0.18", "0.125", "1.8", "0.8"],
        "correctAnswer": 1
    },
    {
        "id": 163,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "אופה השתמש ב-5/4 קילוגרם שוקולד. המאזניים הדיגיטליים שלו מראים מספרים עשרוניים בלבד. איזה משקל הם יראו?",
        "hint": "5/4 הם למעשה שבר מדומה שגדול מ-1. הוציאו שלם אחד, והמירו את הרבע שנותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נהפוך את השבר המדומה למספר מעורב (שלם ורבע).", "math_expression": "5/4 = 1 1/4" },
            { "verbal_explanation": "שלב 2: אנו כבר יודעים שרבע מיוצג עשרונית כ-0.25.", "math_expression": "1/4 = 0.25" },
            { "verbal_explanation": "שלב 3: נחבר את השלם אל החלק העשרוני.", "math_expression": "1.25" }
        ],
        "final_answer": "1.25",
        "options": ["0.54", "5.4", "1.25", "1.4"],
        "correctAnswer": 2
    },
    {
        "id": 164,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "High",
        "question_text": "במהלך תרומת דם, התורם מילא 7/25 משקית האיסוף. כמה זה בשבר עשרוני?",
        "hint": "המכנה הוא 25. מה צריך לעשות כדי להגיע ל-100?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב למאיות על ידי הכפלת המונה והמכנה ב-4.", "math_expression": "7 × 4 = 28" },
            { "verbal_explanation": "שלב 2: השבר המורחב הוא 28/100. נרשום אותו כעשרוני.", "math_expression": "0.28" }
        ],
        "final_answer": "0.28",
        "options": ["0.725", "0.28", "2.8", "0.028"],
        "correctAnswer": 1
    },
    {
        "id": 165,
        "subTopic": "מעבר משבר פשוט לשבר עשרוני",
        "difficulty": "Medium",
        "question_text": "מדריך ספורט חילק פרסים. הוא נתן פרסים ל-50 תלמידים מתוך 1000 שהשתתפו (50/1000). מהו השבר העשרוני המייצג את מקבלי הפרסים?",
        "hint": "ניתן לצמצם את השבר על ידי 'מחיקת' אפסים לפני ההמרה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נצמצם את השבר ב-10 על ידי הורדת אפס אחד מהמונה ואפס מהמכנה.", "math_expression": "50/1000 = 5/100" },
            { "verbal_explanation": "שלב 2: נותרו לנו 5 מאיות. נכתוב זאת כעשרוני (אפס אחד אחרי הנקודה ורק אז ה-5).", "math_expression": "0.05" }
        ],
        "final_answer": "0.05",
        "options": ["0.5", "0.05", "0.005", "0.50"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 12: צמצום והרחבה של שברים פשוטים (15 שאלות) ---
    // ==============================================================
    {
        "id": 166,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Low",
        "question_text": "בעל פיצרייה חתך פיצה משפחתית ל-8 משולשים, ולקוח קנה 4 מהם (4/8). המוכר רוצה לספר ללקוח הבא בסגנון פשוט איזה חלק מהפיצה נקנה. איזה שבר מצומצם הוא יגיד?",
        "hint": "חפשו מספר שבו אפשר לחלק גם את ה-4 וגם את ה-8 ללא שארית, כדי לפשט את השבר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: גם 4 וגם 8 מתחלקים ב-4 ללא שארית.", "math_expression": "4 ÷ 4 = 1" },
            { "verbal_explanation": "שלב 2: נחלק גם את המכנה.", "math_expression": "8 ÷ 4 = 2" },
            { "verbal_explanation": "שלב 3: השבר המצומצם הוא חצי.", "math_expression": "1/2" }
        ],
        "final_answer": "1/2",
        "options": ["2/4", "1/2", "1/4", "1/8"],
        "correctAnswer": 1
    },
    {
        "id": 167,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Low",
        "question_text": "מורה רשמה על הלוח את השבר 2/3. היא ביקשה מהתלמידים להרחיב אותו כך שהמכנה שלו יהיה 15, כדי שיוכלו לחבר אותו עם שבר אחר. מה יהיה המונה החדש?",
        "hint": "בדקו: פי כמה הוכפל ה-3 כדי להפוך ל-15? הכפילו את ה-2 באותו מספר בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגלה את גורם ההרחבה (חלוקת המכנה החדש בישן).", "math_expression": "15 ÷ 3 = 5" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה הישן בגורם זה.", "math_expression": "2 × 5 = 10" },
            { "verbal_explanation": "שלב 3: השבר המורחב הוא 10/15.", "math_expression": "10/15" }
        ],
        "final_answer": "10",
        "options": ["10", "5", "8", "12"],
        "correctAnswer": 0
    },
    {
        "id": 168,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "בכיתה יש 20 תלמידים, מתוכם 15 בנות. יחס הבנות בכיתה הוא 15/20. איזה שבר מצומצם מייצג את אותו היחס?",
        "hint": "שימו לב שגם 15 וגם 20 מסתיימים ב-5 או ב-0, מה שאומר ששניהם מתחלקים ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המונה (הבנות) ב-5.", "math_expression": "15 ÷ 5 = 3" },
            { "verbal_explanation": "שלב 2: נחלק את המכנה (סך התלמידים) ב-5.", "math_expression": "20 ÷ 5 = 4" },
            { "verbal_explanation": "שלב 3: התוצאה היא שבר המייצג שלושה רבעים.", "math_expression": "3/4" }
        ],
        "final_answer": "3/4",
        "options": ["1/4", "3/5", "3/4", "5/4"],
        "correctAnswer": 2
    },
    {
        "id": 169,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "כדי להתאים גוון צבע, צבעי ערבב 3/5 פחית צבע לבן עם צבע כחול. למחרת הוא רצה להכין כמות גדולה יותר שמתאימה ל-25 פחיות (המכנה הוא 25). כמה פחיות צבע לבן עליו לשים כדי לשמור על אותו יחס של 3/5?",
        "hint": "אנו צריכים למצוא את המונה החסר: 3/5 שווה ל- ?/25. פי כמה הוכפל ה-5?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק מהו גורם ההרחבה של המכנה.", "math_expression": "25 ÷ 5 = 5" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה המקורי (3) פי 5.", "math_expression": "3 × 5 = 15" }
        ],
        "final_answer": "15 פחיות",
        "options": ["10 פחיות", "12 פחיות", "15 פחיות", "20 פחיות"],
        "correctAnswer": 2
    },
    {
        "id": 170,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "דנה טוענת שהשבר 4/12 שקול בדיוק לשליש (1/3). האם היא צודקת, ואיך אפשר להוכיח זאת?",
        "hint": "נסו לצמצם את השבר 4/12. האם גם המונה וגם המכנה מתחלקים ב-4?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק אם ניתן לחלק את המונה והמכנה באותו מספר. שניהם מתחלקים ב-4.", "math_expression": "4 ÷ 4 = 1, 12 ÷ 4 = 3" },
            { "verbal_explanation": "שלב 2: התוצאה לאחר הצמצום היא בדיוק 1/3, לכן דנה צודקת.", "math_expression": "4/12 = 1/3" }
        ],
        "final_answer": "היא צודקת, צמצום ב-4 נותן שליש",
        "options": ["היא טועה, 4/12 גדול יותר", "היא צודקת, צמצום ב-4 נותן שליש", "היא טועה, 4/12 קטן יותר", "אין קשר בין השברים"],
        "correctAnswer": 1
    },
    {
        "id": 171,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "מפעל ייצר 24 חלקי חילוף למכונה, ומתוכם 18 היו תקינים (18/24). מנהל המפעל רוצה לרשום את חלק התקינים בשבר המצומצם ביותר האפשרי בדוח שלו. מה הוא ירשום?",
        "hint": "אפשר לצמצם בכמה שלבים (למשל לחלק ב-2 ואז ב-3) או למצוא מיד את המחלק המשותף הגדול ביותר של 18 ו-24 (שהוא 6).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא מספר שמחלק את שני המספרים. למשל 6.", "math_expression": "18 ÷ 6 = 3" },
            { "verbal_explanation": "שלב 2: נחלק את המכנה ב-6.", "math_expression": "24 ÷ 6 = 4" },
            { "verbal_explanation": "שלב 3: הגענו לשבר שלא ניתן לצמצם יותר: שלושה רבעים.", "math_expression": "3/4" }
        ],
        "final_answer": "3/4",
        "options": ["9/12", "6/8", "3/4", "2/3"],
        "correctAnswer": 2
    },
    {
        "id": 172,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Low",
        "question_text": "מה נקבל אם ניקח את השבר 5/7 ונרחיב אותו פי 3 כדי שיתאים למתכון חדש?",
        "hint": "הרחבה פי 3 משמעותה לכפול גם את המונה (למעלה) וגם את המכנה (למטה) במספר 3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המונה 5 ב-3.", "math_expression": "5 × 3 = 15" },
            { "verbal_explanation": "שלב 2: נכפיל את המכנה 7 ב-3.", "math_expression": "7 × 3 = 21" },
            { "verbal_explanation": "שלב 3: נרכיב את השבר החדש.", "math_expression": "15/21" }
        ],
        "final_answer": "15/21",
        "options": ["8/10", "15/7", "15/21", "5/21"],
        "correctAnswer": 2
    },
    {
        "id": 173,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "בסקר העדפות מזון, התקבלו התוצאות הבאות לגבי מספר האנשים שאוהבים פיצה: קבוצה א' 6/12, קבוצה ב' 50/100, וקבוצה ג' 5/12. איזה מבין השברים הללו **אינו** שווה לחצי (1/2)?",
        "hint": "בשבר ששווה לחצי, המכנה תמיד כפול בדיוק מהמונה. חפשו את השבר שבו זה לא מתקיים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את קבוצה א' (6/12) ואת ב' (50/100). בשניהם המונה הוא בדיוק חצי מהמכנה.", "math_expression": "= 1/2" },
            { "verbal_explanation": "שלב 2: נבדוק את קבוצה ג'. המכנה הוא 12, אך המונה הוא 5 (ולא 6). לכן זה אינו חצי.", "math_expression": "5/12 ≠ 1/2" }
        ],
        "final_answer": "5/12",
        "options": ["6/12", "50/100", "5/12", "אף אחד מהם"],
        "correctAnswer": 2
    },
    {
        "id": 174,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "בחברת סקרים נמצא כי 30 מתוך 100 נשאלים מעדיפים צבע כחול. החברה צריכה להציג את השבר 30/100 בצורה מצומצמת וקלה לקריאה בגרף. מה השבר שהם יציגו?",
        "hint": "כאשר המונה והמכנה מסתיימים באפס, אפשר פשוט 'למחוק' אפס אחד מכל צד (שזה שקול לחילוק ב-10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק גם את המונה וגם את המכנה ב-10 כדי להיפטר מהאפסים.", "math_expression": "30 ÷ 10 = 3, 100 ÷ 10 = 10" },
            { "verbal_explanation": "שלב 2: נרשום את השבר החדש שנוצר.", "math_expression": "3/10" },
            { "verbal_explanation": "שלב 3: נבדוק אם אפשר לצמצם שוב. 3 ו-10 לא חולקים מחלק משותף.", "math_expression": "3/10 סופי" }
        ],
        "final_answer": "3/10",
        "options": ["15/50", "3/10", "3/100", "1/3"],
        "correctAnswer": 1
    },
    {
        "id": 175,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "לכבוד מסיבת הסיום, ועד הכיתה הזמין פיצות. נשארו 7/8 ממגש. המורה ביקשה לחתוך את החתיכות כך שכעת יש 42 חתיכות קטנות (המונה הוא 42). לכמה חתיכות קטנות חולק המגש השלם במקור (מהו המכנה החדש של השבר המורחב)?",
        "hint": "בדקו פי כמה הוכפל המונה המקורי (7) כדי להפוך ל-42. הכפילו את המכנה (8) באותו גורם בדיוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את גורם ההרחבה על ידי חלוקת המונה החדש במונה הישן.", "math_expression": "42 ÷ 7 = 6" },
            { "verbal_explanation": "שלב 2: כדי לשמור על אותו יחס, נכפיל גם את המכנה (8) באותו גורם (6).", "math_expression": "8 × 6 = 48" },
            { "verbal_explanation": "שלב 3: המגש השלם היה מורכב מ-48 חתיכות קטנות.", "math_expression": "42/48" }
        ],
        "final_answer": "48",
        "options": ["40", "42", "48", "56"],
        "correctAnswer": 2
    },
    {
        "id": 176,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "חקלאי חילק את שדהו ל-36 חלקות שוות ושתל עגבניות ב-24 מהן (24/36). הוא רוצה לתאר את החלק ששתל בשבר המצומצם ביותר שאפשר. איזה שבר עליו לרשום?",
        "hint": "חפשו את המחלק המשותף הגדול ביותר של 24 ו-36 (רמז: הוא גדול מ-10).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השבר המייצג את החלקות.", "math_expression": "24/36" },
            { "verbal_explanation": "שלב 2: שני המספרים מתחלקים ב-12. נחלק את המונה והמכנה.", "math_expression": "24 ÷ 12 = 2, 36 ÷ 12 = 3" },
            { "verbal_explanation": "שלב 3: השבר בצורתו המצומצמת ביותר הוא שני שלישים.", "math_expression": "2/3" }
        ],
        "final_answer": "2/3",
        "options": ["4/6", "2/3", "1/2", "3/4"],
        "correctAnswer": 1
    },
    {
        "id": 177,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "במתכון מקורי כתוב להשתמש ב- 15/25 קילוגרם סוכר. הקונדיטור רוצה לכתוב את הכמות הזו בעזרת מכנה של 100. מה תהיה הכמות החדשה?",
        "hint": "פי כמה יש להכפיל 25 כדי להגיע ל-100? כפלו גם את המונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את גורם ההרחבה: כמה פעמים נכנס 25 ב-100?", "math_expression": "100 ÷ 25 = 4" },
            { "verbal_explanation": "שלב 2: נכפיל את המונה המקורי (15) ב-4.", "math_expression": "15 × 4 = 60" },
            { "verbal_explanation": "שלב 3: השבר החדש הוא 60 מאיות.", "math_expression": "60/100" }
        ],
        "final_answer": "60/100",
        "options": ["30/100", "45/100", "60/100", "75/100"],
        "correctAnswer": 2
    },
    {
        "id": 178,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "Medium",
        "question_text": "במבחן יש 120 שאלות. יונתן ענה נכון על 90 שאלות (90/120). חברו דני אמר: 'ענית נכונה על בדיוק 3/4 מהמבחן'. האם דני צודק?",
        "hint": "צמצמו את השבר 90/120 לשבר הפשוט ביותר ובדקו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נצמצם ב-10 על ידי הורדת אפסים.", "math_expression": "90/120 = 9/12" },
            { "verbal_explanation": "שלב 2: נצמצם את המונה והמכנה ב-3.", "math_expression": "9 ÷ 3 = 3, 12 ÷ 3 = 4 -> 3/4" },
            { "verbal_explanation": "שלב 3: התוצאה זהה לדבריו של דני.", "math_expression": "דני צודק" }
        ],
        "final_answer": "כן, דני צודק",
        "options": ["כן, דני צודק", "לא, דני טועה", "הוא ענה על פחות מ-3/4", "אי אפשר לחשב"],
        "correctAnswer": 0
    },
    {
        "id": 179,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "רון אכל 2/3 פיצה, שירה אכלה 4/6 פיצה, ונדב אכל 6/9 פיצה. מי מהם אכל את הכמות הגדולה ביותר?",
        "hint": "צמצמו את כל השברים לצורה המפושטת ביותר שלהם ואז השוו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: רון: 2/3 מצומצם.", "math_expression": "2/3" },
            { "verbal_explanation": "שלב 2: נצמצם את שירה ב-2.", "math_expression": "4/6 = 2/3" },
            { "verbal_explanation": "שלב 3: נצמצם את נדב ב-3.", "math_expression": "6/9 = 2/3" },
            { "verbal_explanation": "שלב 4: כולם שווים.", "math_expression": "כולם שווים" }
        ],
        "final_answer": "כולם אכלו אותה כמות בדיוק",
        "options": ["רון אכל הכי הרבה", "שירה אכלה הכי הרבה", "נדב אכל הכי הרבה", "כולם אכלו אותה כמות בדיוק"],
        "correctAnswer": 3
    },
    {
        "id": 180,
        "subTopic": "צמצום והרחבה של שברים פשוטים",
        "difficulty": "High",
        "question_text": "מנהלת בנק מציגה ללקוחות ש-16/64 מההלוואות הוחזרו. איזה שבר הוא הייצוג המצומצם והברור ביותר של הנתון הזה?",
        "hint": "זכרו ש-16 נכנס בדיוק מספר פעמים שלמות בתוך 64.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק ב-8 כשלב ביניים.", "math_expression": "16 ÷ 8 = 2, 64 ÷ 8 = 8  -> 2/8" },
            { "verbal_explanation": "שלב 2: נצמצם שוב ב-2.", "math_expression": "2 ÷ 2 = 1, 8 ÷ 2 = 4 -> 1/4" }
        ],
        "final_answer": "1/4",
        "options": ["1/8", "1/4", "1/3", "4/16"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 13: שבר כמנת חילוק (15 שאלות) ---
    // ==============================================================
    {
        "id": 181,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Low",
        "question_text": "צוות של 5 חוקרים מצא זהב במשקל 3 קילוגרמים וחילק אותו שווה בשווה. איזה חלק מהקילוגרם יקבל כל חוקר?",
        "hint": "הכמות המחולקת (3) היא המונה, ומספר האנשים (5) הוא המכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את תרגיל החילוק.", "math_expression": "3 ÷ 5" },
            { "verbal_explanation": "שלב 2: נתרגם את סימן החילוק לקו שבר.", "math_expression": "3/5" }
        ],
        "final_answer": "3/5 ק\"ג",
        "options": ["5/3 ק\"ג", "3/5 ק\"ג", "1/5 ק\"ג", "8/5 ק\"ג"],
        "correctAnswer": 1
    },
    {
        "id": 182,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "נותרו 7 עוגות שמרים שחולקו שווה בשווה בין 4 עובדי מאפייה. כמה עוגות יקבל כל עובד (במספר מעורב)?",
        "hint": "7 חלקי 4 יוצר שבר מדומה. חלצו את השלמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה את השבר: עוגות במונה ועובדים במכנה.", "math_expression": "7/4" },
            { "verbal_explanation": "שלב 2: נבדוק כמה פעמים נכנס 4 ב-7 במלואו.", "math_expression": "1 (שארית 3)" },
            { "verbal_explanation": "שלב 3: נרשום כמספר מעורב.", "math_expression": "1 3/4" }
        ],
        "final_answer": "1 3/4 עוגות",
        "options": ["1 1/4 עוגות", "2 עוגות", "1 3/4 עוגות", "3/4 עוגה"],
        "correctAnswer": 2
    },
    {
        "id": 183,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "High",
        "question_text": "קבלן חתך כבל באורך 15 מטרים ל-6 חתיכות שוות. מה האורך של כל חתיכה (כשבר מצומצם)?",
        "hint": "הפכו את 15/6 לשלמים וצמצמו את השבר שנותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום כחילוק ושבר מדומה.", "math_expression": "15/6" },
            { "verbal_explanation": "שלב 2: נחלץ שלמים (6 נכנס פעמיים ב-15, שארית 3).", "math_expression": "2 3/6" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר (3/6 שווה חצי).", "math_expression": "2 1/2" }
        ],
        "final_answer": "2 1/2 מטרים",
        "options": ["2 1/3 מטרים", "2 1/2 מטרים", "3 מטרים", "15/6 מטרים"],
        "correctAnswer": 1
    },
    {
        "id": 184,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "מורה חילקה סרט קישוט באורך 2 מטרים בין 9 תלמידים. איזה שבר מתאר את חלקו של כל תלמיד?",
        "hint": "החפץ שאותו מחלקים (הסרט) נרשם במונה, ומספר האנשים נרשם במכנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכמות לחלוקה היא 2 (מונה).", "math_expression": "2" },
            { "verbal_explanation": "שלב 2: המחלקים הם 9 (מכנה).", "math_expression": "9" },
            { "verbal_explanation": "שלב 3: נרכיב את השבר.", "math_expression": "2/9" }
        ],
        "final_answer": "2/9",
        "options": ["9/2", "2/9", "4.5", "1/9"],
        "correctAnswer": 1
    },
    {
        "id": 185,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Low",
        "question_text": "במסעדה חילקו 8 מנות פתיחה זהות ל-8 שולחנות. איזה שבר מתאר זאת ומה ערכו?",
        "hint": "8 לחלק ל-8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החלוקה היא 8/8.", "math_expression": "8/8" },
            { "verbal_explanation": "שלב 2: שבר שבו המונה שווה למכנה מתאר שלם אחד.", "math_expression": "1" }
        ],
        "final_answer": "8/8 שהוא 1 שלם",
        "options": ["8/1 שהוא 8", "1/8", "8/8 שהוא 1 שלם", "0"],
        "correctAnswer": 2
    },
    {
        "id": 186,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "High",
        "question_text": "יש למזוג 4 ליטרים בנזין ל-10 בקבוקים שווים. כמה בנזין יהיה בכל בקבוק (בשבר עשרוני)?",
        "hint": "רשמו 4/10 והמירו לייצוג עשרוני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מציבים את הכמות במונה ואת הבקבוקים במכנה.", "math_expression": "4/10" },
            { "verbal_explanation": "שלב 2: קוראים את השבר כעשרוני.", "math_expression": "0.4" }
        ],
        "final_answer": "0.4 ליטר",
        "options": ["2.5 ליטר", "0.4 ליטר", "4.10 ליטר", "1.4 ליטר"],
        "correctAnswer": 1
    },
    {
        "id": 187,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "5 חברים חילקו ביניהם 11 מגשי פיצה שווה בשווה. כמה פיצה אכל כל אחד?",
        "hint": "חלקו את 11 ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את השבר המדומה.", "math_expression": "11/5" },
            { "verbal_explanation": "שלב 2: נוציא שלמים: המספר 5 נכנס ב-11 פעמיים עם שארית 1.", "math_expression": "2 1/5" }
        ],
        "final_answer": "2 1/5 מגשים",
        "options": ["2 1/5 מגשים", "11/2 מגשים", "5/11 מגשים", "3 1/5 מגשים"],
        "correctAnswer": 0
    },
    {
        "id": 188,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "High",
        "question_text": "נגר צריך לבנות 12 שרפרפים זהים מתוך 5 קורות עץ שלמות. איזה חלק מקורה נדרש לכל שרפרף?",
        "hint": "מה אנחנו מחלקים? את קורות העץ (5).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מחלקים 5 קורות ל-12 שרפרפים.", "math_expression": "5 ÷ 12" },
            { "verbal_explanation": "שלב 2: המספר הראשון הוא המונה.", "math_expression": "5/12" }
        ],
        "final_answer": "5/12 קורה",
        "options": ["12/5 קורה", "5/12 קורה", "2 2/5 קורה", "1/12 קורה"],
        "correctAnswer": 1
    },
    {
        "id": 189,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Low",
        "question_text": "השבר 14/7 מייצג פעולת חילוק. מהי התוצאה במספרים שלמים?",
        "hint": "קו השבר הוא כמו הסימן 'לחלק ל'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתרגם את קו השבר לפעולת חילוק.", "math_expression": "14 ÷ 7" },
            { "verbal_explanation": "שלב 2: נפתור.", "math_expression": "2" }
        ],
        "final_answer": "2",
        "options": ["1/2", "2", "7", "14"],
        "correctAnswer": 1
    },
    {
        "id": 190,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "סיר מרק של 10 ליטרים מחולק ל-3 מיכלים ענקיים שווים. כמה ליטרים ייכנסו לכל מיכל?",
        "hint": "10 חלקי 3. כמה שלמים זה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השבר הוא 10/3.", "math_expression": "10/3" },
            { "verbal_explanation": "שלב 2: המספר 3 נכנס ב-10 שלוש פעמים (9). השארית היא 1.", "math_expression": "3 1/3" }
        ],
        "final_answer": "3 1/3 ליטרים",
        "options": ["3 1/3 ליטרים", "3/10 ליטר", "3 ליטרים", "1/3 ליטר"],
        "correctAnswer": 0
    },
    {
        "id": 191,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "High",
        "question_text": "6 רצים חילקו ביניהם מסלול של 20 קילומטרים. כמה רץ כל אחד במדויק?",
        "hint": "20 חלקי 6. חלצו שלמים וצמצמו את השבר הנותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום 20/6.", "math_expression": "20/6" },
            { "verbal_explanation": "שלב 2: 6 נכנס ב-20 שלוש פעמים, שארית 2.", "math_expression": "3 2/6" },
            { "verbal_explanation": "שלב 3: נצמצם את 2/6 לחצי שליש (1/3).", "math_expression": "3 1/3" }
        ],
        "final_answer": "3 1/3 ק\"מ",
        "options": ["3 2/3 ק\"מ", "3 1/6 ק\"מ", "3 1/3 ק\"מ", "14/6 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 192,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "מה משמעות הביטוי '3/8' כשמדברים על חלוקת עוגות לילדים?",
        "hint": "המונה הוא החפץ, המכנה הוא המקבלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המונה (3) מייצג את העוגות שמחלקים.", "math_expression": "3 עוגות" },
            { "verbal_explanation": "שלב 2: המכנה (8) מייצג את מספר הילדים שמקבלים.", "math_expression": "8 ילדים" }
        ],
        "final_answer": "3 עוגות המחולקות ל-8 ילדים",
        "options": ["8 עוגות המחולקות ל-3 ילדים", "3 עוגות המחולקות ל-8 ילדים", "שלוניות ושמיניות", "אין קשר לחילוק"],
        "correctAnswer": 1
    },
    {
        "id": 193,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Low",
        "question_text": "איך נייצג את הפעולה: 1 קילוגרם חלקי 10 שקיות?",
        "hint": "1 לחלק ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1 הוא המונה, 10 הוא המכנה.", "math_expression": "1/10" }
        ],
        "final_answer": "1/10",
        "options": ["10/1", "1/10", "1/100", "0"],
        "correctAnswer": 1
    },
    {
        "id": 194,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "High",
        "question_text": "מעבירים 18 גרם נוזל ל-8 מבחנות באופן שווה. מהו המשקל בכל מבחנה (בעשרוני)?",
        "hint": "הפכו את 18/8 למעורב, צמצמו, ואז הפכו לעשרוני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את חלוקת החומר.", "math_expression": "18/8" },
            { "verbal_explanation": "שלב 2: נוציא שלמים: 8 נכנס פעמיים, שארית 2.", "math_expression": "2 2/8" },
            { "verbal_explanation": "שלב 3: נצמצם ל- 2 ורבע.", "math_expression": "2 1/4" },
            { "verbal_explanation": "שלב 4: רבע שווה 0.25 בעשרוני.", "math_expression": "2.25" }
        ],
        "final_answer": "2.25 גרם",
        "options": ["2.5 גרם", "2.125 גרם", "2.25 גרם", "2.8 גרם"],
        "correctAnswer": 2
    },
    {
        "id": 195,
        "subTopic": "שבר כמנת חילוק",
        "difficulty": "Medium",
        "question_text": "מחלקים 25 שתילים בין 10 בתי ספר שווה בשווה. כמה שתילים מקבל כל בית ספר?",
        "hint": "25 לחלק ל-10. הזיזו את הנקודה שמאלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התרגיל הוא 25/10.", "math_expression": "25/10" },
            { "verbal_explanation": "שלב 2: 25 חלקי 10 בעשרוני הוא 2.5.", "math_expression": "2.5" }
        ],
        "final_answer": "2.5 שתילים",
        "options": ["2.5 שתילים", "2.05 שתילים", "0.25 שתילים", "10/25 שתילים"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 14: שבר עשרוני מחזורי (15 שאלות) ---
    // ==============================================================
    {
        "id": 196,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Low",
        "question_text": "חותכים קורה של 1 מטר ל-3 חלקים שווים. במחשבון הקישו 1 חלקי 3. איזו תוצאה עשרונית תופיע?",
        "hint": "1/3 אינו ניתן להמרה מדויקת לעשרוני. הוא יוצר מספר אינסופי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השבר הוא שליש.", "math_expression": "1/3" },
            { "verbal_explanation": "שלב 2: חילוק ארוך של 1 ב-3 ייצור שארית תמידית של 1.", "math_expression": "0.3333..." }
        ],
        "final_answer": "0.3333...",
        "options": ["0.3", "0.3333...", "0.34", "0.13"],
        "correctAnswer": 1
    },
    {
        "id": 197,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "אם 1/3 הוא 0.333... , כיצד ייכתב 2/3 כעשרוני מחזורי?",
        "hint": "הכפילו את המספר ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 2/3 גדול פי 2 משליש אחד.", "math_expression": "1/3 × 2" },
            { "verbal_explanation": "שלב 2: נכפיל את מחזוריות הספרה 3 ב-2 ונקבל שישיות.", "math_expression": "0.666..." }
        ],
        "final_answer": "0.666...",
        "options": ["0.6", "0.66", "0.666...", "0.5"],
        "correctAnswer": 2
    },
    {
        "id": 198,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "איך מסמנים בקיצור שבר עשרוני שבו ספרה חוזרת על עצמה (כמו 0.5555...) במתמטיקה?",
        "hint": "משתמשים בסימן מיוחד מעל הספרה החוזרת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במקום לכתוב נקודות אינסופיות, רושמים את הספרה פעם אחת.", "math_expression": "0.5" },
            { "verbal_explanation": "שלב 2: מעליה מוסיפים קו קטן המסמן מחזוריות.", "math_expression": "קו מעל ה-5" }
        ],
        "final_answer": "שמים קו קטן או נקודה מעל הספרה",
        "options": ["כותבים נקודה בסוף", "שמים קו קטן או נקודה מעל הספרה", "מוסיפים 'אינסוף'", "רושמים 3 פעמים"],
        "correctAnswer": 1
    },
    {
        "id": 199,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "איזה שבר פשוט מייצג את המספר העשרוני המחזורי 0.1111...?",
        "hint": "כל שבר שהמכנה שלו הוא 9, יוצר שבר עשרוני מחזורי של המונה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חלוקת כל מספר חד ספרתי ב-9, תיצור את המספר כמחזורי.", "math_expression": "X/9 = 0.XXX..." },
            { "verbal_explanation": "שלב 2: מכיוון שהספרה היא 1, מדובר בתשיעית.", "math_expression": "1/9" }
        ],
        "final_answer": "1/9",
        "options": ["1/10", "1/9", "1/11", "1/3"],
        "correctAnswer": 1
    },{
        "id": 200,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "חילקו 5 ק\"ג זרעים שווה בשווה ל-9 מתקנים. מהו המשקל העשרוני בכל מתקן?",
        "hint": "השבר הוא 5/9. זכרו את הכלל של חלוקה ב-9.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החלוקה היא 5/9.", "math_expression": "5/9" },
            { "verbal_explanation": "שלב 2: שברים עם מכנה 9 יוצרים מספר עשרוני שהמונה הוא הספרה המחזורית.", "math_expression": "0.555..." }
        ],
        "final_answer": "0.555... ק\"ג",
        "options": ["0.55 ק\"ג", "0.5 ק\"ג", "0.555... ק\"ג", "1.8 ק\"ג"],
        "correctAnswer": 2
    },
    {
        "id": 201,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "האם השבר 1/4 הוא מחזורי (כמו 1/3) או סופי?",
        "hint": "נסו להמיר רבע למכנה 100. האם הוא נגמר?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרחיב 1/4 למאיות.", "math_expression": "1/4 = 25/100" },
            { "verbal_explanation": "שלב 2: 25 מאיות נכתבות כ-0.25 ומסתיימות שם.", "math_expression": "0.25 (סופי)" }
        ],
        "final_answer": "לא, הוא שבר סופי (0.25)",
        "options": ["כן, הוא מחזורי", "לא, הוא שבר סופי (0.25)", "תלוי בחישוב", "אי רציונלי"],
        "correctAnswer": 1
    },
    {
        "id": 202,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "אם 1/9 זה 0.111... ו-2/9 זה 0.222..., איך נכתוב את 7/9?",
        "hint": "המונה הוא הספרה החוזרת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכלל אומר שהמונה הופך לספרה המחזורית.", "math_expression": "7/9 -> 7 חוזר" },
            { "verbal_explanation": "שלב 2: נרשום את התוצאה.", "math_expression": "0.777..." }
        ],
        "final_answer": "0.777...",
        "options": ["0.79", "0.777...", "0.7", "7.999..."],
        "correctAnswer": 1
    },
    {
        "id": 203,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "קורה באורך 10 מטרים נחתכה ל-3 חלקים שווים. מה התוצאה המדויקת שתוצג במחשבון?",
        "hint": "10 חלקי 3 שווה 3 שלמים ועוד שליש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום: 10 חלקי 3.", "math_expression": "10 ÷ 3" },
            { "verbal_explanation": "שלב 2: השלמים הם 3 והשארית 1/3.", "math_expression": "3 1/3" },
            { "verbal_explanation": "שלב 3: 1/3 כעשרוני הוא 0.333... נוסיף את ה-3 השלמים.", "math_expression": "3.333..." }
        ],
        "final_answer": "3.333... מטרים",
        "options": ["3.33 מטרים", "3.333... מטרים", "3.5 מטרים", "שגיאה"],
        "correctAnswer": 1
    },
    {
        "id": 204,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "איזה מהשברים הבאים הוא היוצא דופן (כלומר הופך למחזורי ולא מסתיים)?",
        "hint": "חפשו את המכנה שאי אפשר להרחיב למכפלות של 10 (10, 100, 1000).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 1/2 הופך ל-0.5 (סופי).", "math_expression": "1/2 = 0.5" },
            { "verbal_explanation": "שלב 2: 1/4 ו-1/5 הופכים ל-0.25 ו-0.2 (סופיים).", "math_expression": "1/4=0.25, 1/5=0.2" },
            { "verbal_explanation": "שלב 3: 1/3 אינו מתחלק ב-10/100, ולכן הוא מחזורי.", "math_expression": "1/3 = 0.333..." }
        ],
        "final_answer": "1/3 (שליש)",
        "options": ["1/2 (חצי)", "1/4 (רבע)", "1/5 (חמישית)", "1/3 (שליש)"],
        "correctAnswer": 3
    },
    {
        "id": 205,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "מכונה מחלקת 4 ליטרים נוזל ל-9 בקבוקים. איזה מספר עשרוני מראה המכונה?",
        "hint": "4/9 יוצר ספרה 4 מחזורית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: השבר הוא 4/9.", "math_expression": "4/9" },
            { "verbal_explanation": "שלב 2: הכלל של חלוקה ב-9.", "math_expression": "0.444..." }
        ],
        "final_answer": "0.444...",
        "options": ["0.49", "0.4", "0.444...", "4.9"],
        "correctAnswer": 2
    },
    {
        "id": 206,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Low",
        "question_text": "יעל קיבלה במחשבון את התוצאה 0.363636... איך רושמים זאת תקנית במתמטיקה?",
        "hint": "מוצאים את הזוג שחוזר על עצמו ומסמנים אותו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התבנית שחוזרת היא '36'.", "math_expression": "36 חוזר" },
            { "verbal_explanation": "שלב 2: רושמים פעם אחת עם קו מעל.", "math_expression": "קו מעל 36" }
        ],
        "final_answer": "רושמים 0.36 ושמים קו מעל שתי הספרות",
        "options": ["מעגלים ל-0.4", "רושמים 0.36 ושמים קו מעל שתי הספרות", "רושמים 0.363", "מוסיפים אפס"],
        "correctAnswer": 1
    },
    {
        "id": 207,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "מהירות של אצן התקבלה כ- 11.111... מטרים לשנייה. איזה שבר מעורב מייצג זאת בדיוק?",
        "hint": "החלק השלם הוא 11. מה מייצג ה-0.111...?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החלק השלם הוא 11.", "math_expression": "11 שלמים" },
            { "verbal_explanation": "שלב 2: 0.111... הוא בדיוק 1/9.", "math_expression": "1/9" },
            { "verbal_explanation": "שלב 3: נחבר.", "math_expression": "11 1/9" }
        ],
        "final_answer": "11 1/9",
        "options": ["11 1/10", "11 1/9", "11 1/2", "11 1/3"],
        "correctAnswer": 1
    },
    {
        "id": 208,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "אם 1/3 שווה ל-0.333... ו-1/6 הוא בדיוק חצי ממנו, איך נראה 1/6 כעשרוני (בערך)?",
        "hint": "מה זה חצי מ-33? סביבות 16.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את 0.333 ב-2 (בערך חצי מ-33).", "math_expression": "33 ÷ 2 ≈ 16.6" },
            { "verbal_explanation": "שלב 2: התוצאה המדויקת היא 0.1666...", "math_expression": "0.1666..." }
        ],
        "final_answer": "0.1666...",
        "options": ["0.15", "0.1666...", "0.222...", "0.36"],
        "correctAnswer": 1
    },
    {
        "id": 209,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "High",
        "question_text": "חישוב של 100 חלקי 33 נותן במחשבון את התוצאה 3.030303... איזה חלק פשוט זה מייצג?",
        "hint": "הוציאו 3 שלמים (ששווים 99). נשאר 1 חלקי 33.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: 33 נכנס ב-100 שלוש פעמים (99).", "math_expression": "3 שלמים" },
            { "verbal_explanation": "שלב 2: נשארת שארית של 1 (מתוך 33).", "math_expression": "1/33" },
            { "verbal_explanation": "שלב 3: לכן התוצאה היא 3 ו-1/33.", "math_expression": "3 1/33" }
        ],
        "final_answer": "3 1/33",
        "options": ["3 1/3", "3 3/100", "3 1/33", "100/3"],
        "correctAnswer": 2
    },
    {
        "id": 210,
        "subTopic": "שבר עשרוני מחזורי",
        "difficulty": "Medium",
        "question_text": "האם חיבור של 1/3 (0.333...) עם 2/3 (0.666...) ייתן מספר מחזורי?",
        "hint": "חברו את השברים הפשוטים כדי להבין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חיבור שברים פשוטים נותן שלם אחד בדיוק.", "math_expression": "1/3 + 2/3 = 3/3 = 1" },
            { "verbal_explanation": "שלב 2: 1 אינו מחזורי. אגב, 0.999... במתמטיקה מוגדר כשווה ל-1 שלם.", "math_expression": "סופי (1)" }
        ],
        "final_answer": "לא, התוצאה היא 1 שלם",
        "options": ["כן, 0.999...", "לא, התוצאה היא 1 שלם", "תלוי במחשבון", "זה נשאר שבר"],
        "correctAnswer": 1
    }
];