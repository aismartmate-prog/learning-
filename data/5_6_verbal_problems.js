const questionsDB = [
    // ==========================================
    // --- תת נושא 1: בעיות הספק (15 שאלות) ---
    // ==========================================
    {
        "id": 1,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "מכונת דפוס מדפיסה 40 דפים בדקה. כמה דפים תדפיס המכונה ב-15 דקות?",
        "hint": "הכפילו את כמות הדפים בדקה במספר הדקות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את קצב העבודה - 40 דפים לדקה.", "math_expression": "40" },
            { "verbal_explanation": "שלב 2: נכפיל את הקצב בזמן העבודה (15 דקות).", "math_expression": "40 × 15 = 600" }
        ],
        "final_answer": "600 דפים",
        "options": ["400 דפים", "600 דפים", "450 דפים", "550 דפים"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "פועל בניין מניח 50 לבנים בשעה. כמה זמן ייקח לו להניח 200 לבנים?",
        "hint": "חלקו את סך כל הלבנים בקצב העבודה לשעה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הכמות הכוללת (200) בהספק לשעה (50).", "math_expression": "200 ÷ 50 = 4" },
            { "verbal_explanation": "שלב 2: התוצאה היא מספר השעות שנדרשו.", "math_expression": "4 שעות" }
        ],
        "final_answer": "4 שעות",
        "options": ["3 שעות", "5 שעות", "4 שעות", "6 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "בעיות הספק",
        "difficulty": "High",
        "question_text": "צינור מים ממלא בריכה בקצב של 120 ליטר בשעה. כמה ליטרים ימלא הצינור ב-3.5 שעות?",
        "hint": "הכפילו את הקצב ב-3 שעות, ואז הוסיפו עוד חצי שעה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה הצינור ממלא ב-3 שעות שלמות.", "math_expression": "120 × 3 = 360" },
            { "verbal_explanation": "שלב 2: נחשב כמה הצינור ממלא בחצי שעה (נחלק ב-2).", "math_expression": "120 ÷ 2 = 60" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות יחד.", "math_expression": "360 + 60 = 420" }
        ],
        "final_answer": "420 ליטר",
        "options": ["400 ליטר", "360 ליטר", "420 ליטר", "480 ליטר"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "בעיות הספק",
        "difficulty": "Low",
        "question_text": "דנה קוראת 10 עמודים ביום. בספר יש 80 עמודים. בכמה ימים תסיים דנה לקרוא את הספר?",
        "hint": "חלקו את סך העמודים בעמודים שקוראת ביום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את כמות העמודים הכוללת בהספק היומי.", "math_expression": "80 ÷ 10 = 8" }
        ],
        "final_answer": "8 ימים",
        "options": ["8 ימים", "7 ימים", "10 ימים", "9 ימים"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "מפעל מייצר 250 צעצועים ביום. כמה צעצועים ייצר המפעל בשבוע עבודה של 5 ימים?",
        "hint": "הכפילו את הכמות היומית במספר ימי העבודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את ההספק היומי במספר הימים.", "math_expression": "250 × 5 = 1250" }
        ],
        "final_answer": "1250 צעצועים",
        "options": ["1000 צעצועים", "1250 צעצועים", "1500 צעצועים", "1200 צעצועים"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "בעיות הספק",
        "difficulty": "High",
        "question_text": "שני פועלים עובדים יחד. הראשון אורז 20 ארגזים בשעה, והשני אורז 30 ארגזים בשעה. כמה ארגזים יארזו יחד ב-4 שעות?",
        "hint": "חברו תחילה את ההספק של שניהם יחד לשעה אחת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההספק המשותף לשעה אחת.", "math_expression": "20 + 30 = 50" },
            { "verbal_explanation": "שלב 2: נכפיל את ההספק המשותף בזמן העבודה המבוקש.", "math_expression": "50 × 4 = 200" }
        ],
        "final_answer": "200 ארגזים",
        "options": ["150 ארגזים", "180 ארגזים", "200 ארגזים", "220 ארגזים"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "מכונה ממלאת 60 בקבוקים בדקה. כמה דקות ייקח לה למלא 360 בקבוקים?",
        "hint": "חלקו את כמות הבקבוקים הכוללת בקצב לדקה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע פעולת חילוק למציאת הזמן.", "math_expression": "360 ÷ 60 = 6" }
        ],
        "final_answer": "6 דקות",
        "options": ["5 דקות", "6 דקות", "7 דקות", "10 דקות"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "אופה מכין 15 עוגות בשעה. הוא עבד 6 שעות ביום. כמה עוגות הכין?",
        "hint": "הכפילו את קצב הכנת העוגות במספר שעות העבודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את ההספק לשעה בשעות שעבד.", "math_expression": "15 × 6 = 90" }
        ],
        "final_answer": "90 עוגות",
        "options": ["80 עוגות", "85 עוגות", "90 עוגות", "100 עוגות"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "בעיות הספק",
        "difficulty": "High",
        "question_text": "משאבה שואבת 200 ליטר מים בשעה. כמה מים היא תשאב ב-2.25 שעות?",
        "hint": "חשבו שעתיים שלמות, ואז הוסיפו רבע שעה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמות שאיבה בשעתיים שלמות.", "math_expression": "200 × 2 = 400" },
            { "verbal_explanation": "שלב 2: נחשב רבע שעה (0.25), כלומר נחלק ב-4.", "math_expression": "200 ÷ 4 = 50" },
            { "verbal_explanation": "שלב 3: נחבר את התוצאות.", "math_expression": "400 + 50 = 450" }
        ],
        "final_answer": "450 ליטר",
        "options": ["425 ליטר", "450 ליטר", "500 ליטר", "475 ליטר"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "צבעי צובע חדר אחד ב-3 שעות. כמה חדרים יצבע ב-24 שעות?",
        "hint": "חלקו את הזמן הכולל בזמן שלוקח לחדר אחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את סך שעות העבודה בזמן לחדר.", "math_expression": "24 ÷ 3 = 8" }
        ],
        "final_answer": "8 חדרים",
        "options": ["6 חדרים", "7 חדרים", "8 חדרים", "9 חדרים"],
        "correctAnswer": 2
    },
    {
        "id": 11,
        "subTopic": "בעיות הספק",
        "difficulty": "Low",
        "question_text": "מחשב פותר 100 תרגילים בשנייה. כמה תרגילים יפתור ב-9 שניות?",
        "hint": "הכפילו את קצב הפתרון במספר השניות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את ההספק לשנייה בזמן.", "math_expression": "100 × 9 = 900" }
        ],
        "final_answer": "900 תרגילים",
        "options": ["90 תרגילים", "900 תרגילים", "990 תרגילים", "1000 תרגילים"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "בעיות הספק",
        "difficulty": "High",
        "question_text": "תופרת תופרת 5 חולצות ביום. היא קיבלה הזמנה ל-45 חולצות. אם עבדה כבר 4 ימים, עוד כמה ימים נשארו לה כדי לסיים?",
        "hint": "חשבו כמה היא כבר תפרה, החסירו מהכלל, וחלקו להספק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה חולצות תפרה ב-4 ימים.", "math_expression": "5 × 4 = 20" },
            { "verbal_explanation": "שלב 2: נבדוק כמה חולצות נותר לתפור.", "math_expression": "45 - 20 = 25" },
            { "verbal_explanation": "שלב 3: נחלק את הנותר בהספק היומי כדי למצוא את הימים שנותרו.", "math_expression": "25 ÷ 5 = 5" }
        ],
        "final_answer": "5 ימים",
        "options": ["4 ימים", "5 ימים", "6 ימים", "9 ימים"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "גנן שותל 12 עצים בשעה. כמה שעות יצטרך לעבוד כדי לשתול 84 עצים?",
        "hint": "חלקו את כמות העצים בקצב העבודה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הסך הכל בהספק לשעה.", "math_expression": "84 ÷ 12 = 7" }
        ],
        "final_answer": "7 שעות",
        "options": ["6 שעות", "7 שעות", "8 שעות", "9 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "בעיות הספק",
        "difficulty": "Medium",
        "question_text": "מכונת שטיפה רוחצת 8 מכוניות בחצי שעה. כמה מכוניות היא רוחצת בשעה אחת?",
        "hint": "בשעה יש פעמיים חצי שעה. הכפילו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שעה אחת שווה לפעמיים חצי שעה, נכפיל את הכמות ב-2.", "math_expression": "8 × 2 = 16" }
        ],
        "final_answer": "16 מכוניות",
        "options": ["12 מכוניות", "16 מכוניות", "18 מכוניות", "24 מכוניות"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "בעיות הספק",
        "difficulty": "High",
        "question_text": "ברז א' ממלא 10 ליטר בדקה וברז ב' ממלא 15 ליטר בדקה. אם נפתח את שניהם יחד, כמה דקות ייקח למלא חבית של 100 ליטר?",
        "hint": "חברו את ההספקים של שני הברזים, ואז חלקו את כמות הליטרים הכוללת בהספק המשותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההספק המשותף של שני הברזים לדקה.", "math_expression": "10 + 15 = 25" },
            { "verbal_explanation": "שלב 2: נחלק את כמות המים הנדרשת בהספק המשותף.", "math_expression": "100 ÷ 25 = 4" }
        ],
        "final_answer": "4 דקות",
        "options": ["3 דקות", "4 דקות", "5 דקות", "6 דקות"],
        "correctAnswer": 1
    },

    // ==========================================
    // --- תת נושא 2: בעיות רב שלביות (15 שאלות) ---
    // ==========================================
    {
        "id": 16,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "יעל קנתה חולצה ב-50 ₪ ושני זוגות מכנסיים במחיר 80 ₪ כל אחד. היא שילמה בשטר של 250 ₪. כמה עודף קיבלה?",
        "hint": "חשבו קודם כמה עלו המכנסיים, הוסיפו את החולצה, והחסירו את הסך הכל מהשטר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה עלו שני זוגות המכנסיים.", "math_expression": "80 × 2 = 160" },
            { "verbal_explanation": "שלב 2: נוסיף את מחיר החולצה לסך הקניות.", "math_expression": "160 + 50 = 210" },
            { "verbal_explanation": "שלב 3: נחשב את העודף מהשטר של 250.", "math_expression": "250 - 210 = 40" }
        ],
        "final_answer": "40 ₪",
        "options": ["30 ₪", "40 ₪", "50 ₪", "60 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "בקופת חיסכון של עומר יש 120 ₪. בכל חודש הוא חוסך 30 ₪ נוספים. כמה כסף יהיה לו בעוד 4 חודשים?",
        "hint": "חשבו כמה כסף הוא יחסוך ב-4 חודשים, והוסיפו לסכום ההתחלתי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה עומר יחסוך ב-4 החודשים.", "math_expression": "30 × 4 = 120" },
            { "verbal_explanation": "שלב 2: נוסיף את החיסכון החדש לסכום שהיה לו בקופה.", "math_expression": "120 + 120 = 240" }
        ],
        "final_answer": "240 ₪",
        "options": ["200 ₪", "220 ₪", "240 ₪", "260 ₪"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "בספרייה היו 500 ספרים. תרמו לספרייה עוד 150 ספרים, ו-50 ספרים ישנים נזרקו. כמה ספרים יש כעת?",
        "hint": "חברו את הספרים החדשים ואז החסירו את הישנים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסיף את הספרים שנתרמו.", "math_expression": "500 + 150 = 650" },
            { "verbal_explanation": "שלב 2: נחסיר את הספרים שנזרקו.", "math_expression": "650 - 50 = 600" }
        ],
        "final_answer": "600 ספרים",
        "options": ["550 ספרים", "600 ספרים", "650 ספרים", "700 ספרים"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "בשכבה יש 120 תלמידים. 12 תלמידים חולים ולא יצאו לטיול. את שאר התלמידים חילקו שווה בשווה ל-3 אוטובוסים. כמה תלמידים יש בכל אוטובוס?",
        "hint": "החסירו את החולים, ואת השאר חלקו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה תלמידים יצאו לטיול.", "math_expression": "120 - 12 = 108" },
            { "verbal_explanation": "שלב 2: נחלק את היוצאים ל-3 אוטובוסים.", "math_expression": "108 ÷ 3 = 36" }
        ],
        "final_answer": "36 תלמידים",
        "options": ["34 תלמידים", "36 תלמידים", "40 תלמידים", "32 תלמידים"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "חקלאי אסף 85 תפוחים. 5 תפוחים היו רקובים ונזרקו. את התפוחים הטובים הוא חילק ל-8 שקיות שוות. כמה תפוחים בכל שקית?",
        "hint": "החסירו את הרקובים וחלקו ב-8.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את מספר התפוחים הטובים.", "math_expression": "85 - 5 = 80" },
            { "verbal_explanation": "שלב 2: נחלק את התפוחים הטובים למספר השקיות.", "math_expression": "80 ÷ 8 = 10" }
        ],
        "final_answer": "10 תפוחים",
        "options": ["8 תפוחים", "9 תפוחים", "10 תפוחים", "12 תפוחים"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "במאפייה אפו 300 לחמניות. בבוקר נמכרו 120 לחמניות ובצהריים נמכרו עוד 95. כמה לחמניות נשארו לערב?",
        "hint": "חברו את המכירות של הבוקר והצהריים, והחסירו מהסך הכל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב סך הכל כמה לחמניות נמכרו.", "math_expression": "120 + 95 = 215" },
            { "verbal_explanation": "שלב 2: נחסיר את מה שנמכר מהכמות ההתחלתית.", "math_expression": "300 - 215 = 85" }
        ],
        "final_answer": "85 לחמניות",
        "options": ["80 לחמניות", "85 לחמניות", "90 לחמניות", "95 לחמניות"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "כרטיס לסרט עולה 40 ₪. משפחה קנתה 5 כרטיסים וקיבלה הנחה של 20 ₪ על כל הקנייה. כמה שילמה המשפחה?",
        "hint": "חשבו כמה עולים 5 כרטיסים ואז החסירו את ההנחה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את עלות הכרטיסים לפני הנחה.", "math_expression": "40 × 5 = 200" },
            { "verbal_explanation": "שלב 2: נחסיר את ההנחה מסך הקנייה.", "math_expression": "200 - 20 = 180" }
        ],
        "final_answer": "180 ₪",
        "options": ["160 ₪", "180 ₪", "200 ₪", "220 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "רון קנה 3 ק\"ג תפוזים ב-6 ₪ לקילו, ו-2 ק\"ג בננות ב-9 ₪ לקילו. כמה שילם בסך הכל?",
        "hint": "חשבו בנפרד כמה עולים התפוזים וכמה הבננות, וחברו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את מחיר התפוזים.", "math_expression": "3 × 6 = 18" },
            { "verbal_explanation": "שלב 2: נחשב את מחיר הבננות.", "math_expression": "2 × 9 = 18" },
            { "verbal_explanation": "שלב 3: נחבר את שתי ההוצאות יחד.", "math_expression": "18 + 18 = 36" }
        ],
        "final_answer": "36 ₪",
        "options": ["34 ₪", "36 ₪", "38 ₪", "40 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "לאסף היו 40 גולות. הוא זכה בעוד כמות כפולה ממה שהיה לו. לאחר מכן נתן לאחיו 25 גולות. כמה נשארו לו?",
        "hint": "הוא זכה בכמות כפולה (כלומר עוד 80). חברו ואז החסירו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב בכמה גולות הוא זכה.", "math_expression": "40 × 2 = 80" },
            { "verbal_explanation": "שלב 2: נוסיף את הזכייה למלאי ההתחלתי שלו.", "math_expression": "40 + 80 = 120" },
            { "verbal_explanation": "שלב 3: נחסיר את הגולות שנתן לאחיו.", "math_expression": "120 - 25 = 95" }
        ],
        "final_answer": "95 גולות",
        "options": ["85 גולות", "90 גולות", "95 גולות", "100 גולות"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "תקציב ועד הכיתה הוא 1,000 ₪. הוועד קנה 4 פיצות ב-60 ₪ כל אחת, ואת השאר חילק ל-5 פרסים שווים. כמה עלה כל פרס?",
        "hint": "מצאו את עלות הפיצות, החסירו מהתקציב, ואת היתרה חלקו ב-5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה עלו הפיצות.", "math_expression": "4 × 60 = 240" },
            { "verbal_explanation": "שלב 2: נמצא כמה עודף נשאר בתקציב לפרסים.", "math_expression": "1000 - 240 = 760" },
            { "verbal_explanation": "שלב 3: נחלק את היתרה למספר הפרסים.", "math_expression": "760 ÷ 5 = 152" }
        ],
        "final_answer": "152 ₪",
        "options": ["150 ₪", "152 ₪", "160 ₪", "140 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "גלית צריכה לאפות 60 עוגיות. היא אפתה 2 תבניות שבכל אחת מהן 15 עוגיות. כמה עוגיות נשאר לה לאפות?",
        "hint": "חשבו כמה היא אפתה עד עכשיו והחסירו מהיעד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה עוגיות נאפו בשתי התבניות.", "math_expression": "2 × 15 = 30" },
            { "verbal_explanation": "שלב 2: נחסיר את מה שנאפה מהיעד הכללי.", "math_expression": "60 - 30 = 30" }
        ],
        "final_answer": "30 עוגיות",
        "options": ["20 עוגיות", "30 עוגיות", "40 עוגיות", "15 עוגיות"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "באקווריום יש 150 ליטר מים. הוסיפו לו 30 ליטר, אך בשל חור באקווריום דלפו החוצה 45 ליטר. כמה מים יש כעת?",
        "hint": "עשו פעולת חיבור ואז חיסור בהתאם לנתונים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נוסיף לאקווריום את המים החדשים.", "math_expression": "150 + 30 = 180" },
            { "verbal_explanation": "שלב 2: נחסיר את המים שדלפו מהחור.", "math_expression": "180 - 45 = 135" }
        ],
        "final_answer": "135 ליטר",
        "options": ["130 ליטר", "135 ליטר", "140 ליטר", "145 ליטר"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "High",
        "question_text": "בקופסה היו 100 סוכריות. יוסי אכל 16 סוכריות, ואת שאר הסוכריות חילק שווה בשווה בין 7 חבריו. כמה סוכריות קיבל כל חבר?",
        "hint": "החסירו את מה שיוסי אכל, וחלקו את השאר ב-7.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה סוכריות נשארו בקופסה.", "math_expression": "100 - 16 = 84" },
            { "verbal_explanation": "שלב 2: נחלק את היתרה שווה בשווה בין החברים.", "math_expression": "84 ÷ 7 = 12" }
        ],
        "final_answer": "12 סוכריות",
        "options": ["10 סוכריות", "12 סוכריות", "14 סוכריות", "16 סוכריות"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "מורה קנתה 6 חבילות טושים ב-12 ₪ לחבילה, ושילמה עוד 20 ₪ על משלוח. מה הייתה העלות הכוללת?",
        "hint": "חשבו קודם את עלות הטושים, ואז הוסיפו את המשלוח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את עלות חבילות הטושים.", "math_expression": "6 × 12 = 72" },
            { "verbal_explanation": "שלב 2: נוסיף למחיר את דמי המשלוח.", "math_expression": "72 + 20 = 92" }
        ],
        "final_answer": "92 ₪",
        "options": ["82 ₪", "92 ₪", "102 ₪", "72 ₪"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "בעיות רב שלביות",
        "difficulty": "Medium",
        "question_text": "בגינה נשתלו 5 שורות של פרחים, ובכל שורה 15 פרחים. רוח חזקה עקרה 12 פרחים. כמה פרחים נותרו בגינה?",
        "hint": "חשבו את הסך הכל של הפרחים לפני הרוח, ואז החסירו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה פרחים נשתלו בסך הכל בגינה.", "math_expression": "5 × 15 = 75" },
            { "verbal_explanation": "שלב 2: נחסיר את הפרחים שנעקרו על ידי הרוח.", "math_expression": "75 - 12 = 63" }
        ],
        "final_answer": "63 פרחים",
        "options": ["60 פרחים", "63 פרחים", "65 פרחים", "68 פרחים"],
        "correctAnswer": 1
    },

    // ==========================================
    // --- תת נושא 3: בעיות תנועה (15 שאלות) ---
    // ==========================================
    {
        "id": 31,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מכונית נסעה במהירות קבועה של 80 קמ\"ש במשך 3 שעות. מהו המרחק שעברה המכונית?",
        "hint": "מרחק שווה למהירות כפול זמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למצוא דרך, נכפיל את המהירות (80) בזמן (3).", "math_expression": "80 × 3 = 240" }
        ],
        "final_answer": "240 ק\"מ",
        "options": ["220 ק\"מ", "240 ק\"מ", "260 ק\"מ", "280 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רכבת עברה מרחק של 300 ק\"מ במהירות של 100 קמ\"ש. כמה זמן נמשכה הנסיעה?",
        "hint": "זמן שווה למרחק חלקי מהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למצוא זמן, נחלק את הדרך (300) במהירות (100).", "math_expression": "300 ÷ 100 = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["2 שעות", "3 שעות", "4 שעות", "5 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רוכב אופניים רכב במשך 4 שעות ועבר מרחק של 60 ק\"מ. מה הייתה מהירותו הקבועה?",
        "hint": "מהירות שווה למרחק חלקי זמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למצוא מהירות, נחלק את הדרך (60) בזמן (4).", "math_expression": "60 ÷ 4 = 15" }
        ],
        "final_answer": "15 קמ\"ש",
        "options": ["12 קמ\"ש", "15 קמ\"ש", "18 קמ\"ש", "20 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "שתי מכוניות יצאו מאותה נקודה ונסעו לכיוונים מנוגדים. מכונית א' נסעה במהירות 70 קמ\"ש, ומכונית ב' נסעה במהירות 80 קמ\"ש. מה המרחק ביניהן לאחר שעתיים?",
        "hint": "חשבו את המרחק של כל מכונית בנפרד, ואז חברו את המרחקים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את המרחק שעברה מכונית א'.", "math_expression": "70 × 2 = 140" },
            { "verbal_explanation": "שלב 2: נחשב את המרחק שעברה מכונית ב'.", "math_expression": "80 × 2 = 160" },
            { "verbal_explanation": "שלב 3: נחבר את המרחקים כי הן נסעו לכיוונים מנוגדים.", "math_expression": "140 + 160 = 300" }
        ],
        "final_answer": "300 ק\"מ",
        "options": ["280 ק\"מ", "300 ק\"מ", "320 ק\"מ", "150 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "הילה הולכת לבית הספר במהירות של 80 מטרים בדקה. לוקח לה 10 דקות להגיע. מה המרחק מהבית שלה לבית הספר?",
        "hint": "הכפילו את המהירות (מטרים לדקה) בזמן (דקות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המהירות בזמן כדי למצוא מרחק.", "math_expression": "80 × 10 = 800" }
        ],
        "final_answer": "800 מטר",
        "options": ["700 מטר", "800 מטר", "900 מטר", "1000 מטר"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מטוס טס במהירות של 900 קמ\"ש. כמה קילומטרים הוא יעבור בטיסה שאורכה 4 שעות?",
        "hint": "הכפילו מהירות בזמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את מהירות המטוס בזמן הטיסה.", "math_expression": "900 × 4 = 3600" }
        ],
        "final_answer": "3,600 ק\"מ",
        "options": ["2,700 ק\"מ", "3,600 ק\"מ", "4,500 ק\"מ", "3,000 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רץ מרתון רץ במהירות קבועה של 12 קמ\"ש. כמה זמן ייקח לו לסיים מסלול של 24 ק\"מ?",
        "hint": "חלקו את הדרך במהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הדרך המלאה במהירות הרץ.", "math_expression": "24 ÷ 12 = 2" }
        ],
        "final_answer": "2 שעות",
        "options": ["1.5 שעות", "2 שעות", "2.5 שעות", "3 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "סירה שטה באגם במשך שעתיים וחצי (2.5 שעות) במהירות של 20 קמ\"ש. מהו המרחק שעברה?",
        "hint": "חשבו שעתיים שלמות, והוסיפו חצי שעה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הדרך שעברה הסירה בשעתיים.", "math_expression": "20 × 2 = 40" },
            { "verbal_explanation": "שלב 2: נחשב את הדרך שעברה בחצי שעה (נחלק מהירות ב-2).", "math_expression": "20 ÷ 2 = 10" },
            { "verbal_explanation": "שלב 3: נחבר את המרחקים.", "math_expression": "40 + 10 = 50" }
        ],
        "final_answer": "50 ק\"מ",
        "options": ["40 ק\"מ", "45 ק\"מ", "50 ק\"מ", "60 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "המרחק מתל אביב לאילת הוא 350 ק\"מ. רכב נסע את 210 הקילומטרים הראשונים במהירות 70 קמ\"ש. כמה שעות נסע הרכב עד לאותה נקודה?",
        "hint": "התייחסו רק לנתון של המרחק שעבר כבר (210) ומהירותו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המרחק שכבר עבר (210) במהירות הנסיעה.", "math_expression": "210 ÷ 70 = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["2 שעות", "3 שעות", "4 שעות", "5 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 40,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "אופנוע נסע במהירות של 65 קמ\"ש. הוא נסע במשך 4 שעות מבלי לעצור. מהו המרחק הכולל שעבר?",
        "hint": "הכפילו את המהירות בזמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המהירות בזמן להשגת מרחק כולל.", "math_expression": "65 × 4 = 260" }
        ],
        "final_answer": "260 ק\"מ",
        "options": ["240 ק\"מ", "250 ק\"מ", "260 ק\"מ", "270 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 41,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "שתי רכבות יצאו משתי ערים שונות זו לקראת זו. רכבת א' נסעה ב-90 קמ\"ש ורכבת ב' נסעה ב-110 קמ\"ש. הן נפגשו כעבור 3 שעות. מה המרחק בין הערים?",
        "hint": "חשבו מרחק לכל רכבת בנפרד, וסיכמו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הדרך שעברה רכבת א'.", "math_expression": "90 × 3 = 270" },
            { "verbal_explanation": "שלב 2: נחשב את הדרך שעברה רכבת ב'.", "math_expression": "110 × 3 = 330" },
            { "verbal_explanation": "שלב 3: המרחק בין הערים הוא סכום המרחקים של שתי הרכבות.", "math_expression": "270 + 330 = 600" }
        ],
        "final_answer": "600 ק\"מ",
        "options": ["500 ק\"מ", "600 ק\"מ", "700 ק\"מ", "800 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מטייל הלך בשביל הרים מרחק של 15 ק\"מ, והדבר לקח לו 5 שעות. מה הייתה מהירות ההליכה הממוצעת שלו?",
        "hint": "חלקו מרחק בזמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את המרחק הכולל למספר השעות.", "math_expression": "15 ÷ 5 = 3" }
        ],
        "final_answer": "3 קמ\"ש",
        "options": ["2 קמ\"ש", "3 קמ\"ש", "4 קמ\"ש", "5 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "משאית נוסעת במהירות 75 קמ\"ש. איזה מרחק תעבור המשאית ב-6 שעות?",
        "hint": "הכפילו את המהירות בזמן הנסיעה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המהירות במספר השעות.", "math_expression": "75 × 6 = 450" }
        ],
        "final_answer": "450 ק\"מ",
        "options": ["400 ק\"מ", "425 ק\"מ", "450 ק\"מ", "475 ק\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "רוכב קורקינט חשמלי נוסע במהירות של 24 קמ\"ש. עליו להגיע לעיר שנמצאת במרחק 12 ק\"מ. כמה זמן ייקח לו?",
        "hint": "12 הוא בדיוק חצי מ-24.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את הדרך המבוקשת במהירות הרוכב.", "math_expression": "12 ÷ 24 = 1/2" },
            { "verbal_explanation": "שלב 2: חצי שעה היא 30 דקות.", "math_expression": "30 דקות" }
        ],
        "final_answer": "חצי שעה",
        "options": ["שעה", "חצי שעה", "רבע שעה", "שעתיים"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "משפחה נסעה לטיול לצפון מרחק של 180 ק\"מ. הנסיעה לקחה להם שעתיים (2 שעות). באיזו מהירות ממוצעת הם נסעו?",
        "hint": "חלקו את הדרך בזמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחלק את סך המרחק בשעות הנסיעה כדי למצוא מהירות.", "math_expression": "180 ÷ 2 = 90" }
        ],
        "final_answer": "90 קמ\"ש",
        "options": ["80 קמ\"ש", "90 קמ\"ש", "100 קמ\"ש", "110 קמ\"ש"],
        "correctAnswer": 1
    }
];