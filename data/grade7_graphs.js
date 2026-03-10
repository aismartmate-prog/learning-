const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: מערכת צירים (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "מערכת צירים",
        "difficulty": "Low",
        "question_text": "באיזה <strong>רביע</strong> נמצאת הנקודה (3, 5-)?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='160'><line x1='80' y1='10' x2='80' y2='150' stroke='#1e293b' stroke-width='2'/><line x1='10' y1='80' x2='150' y2='80' stroke='#1e293b' stroke-width='2'/><circle cx='50' cy='50' r='4' fill='#b09151'/><text x='155' y='85' font-size='12'>x</text><text x='85' y='15' font-size='12'>y</text><text x='110' y='50' font-size='12'>I</text><text x='40' y='50' font-size='12' font-weight='bold'>II</text><text x='40' y='120' font-size='12'>III</text><text x='110' y='120' font-size='12'>IV</text></svg></div>",
        "hint": "ברביע הראשון שני השיעורים חיוביים. ברביע השני ה-X שלילי וה-Y חיובי.",
        "solution_steps": [
            { "verbal_explanation": "נבחן את סימני הנקודה: ה-X הוא 3- (שלילי) וה-Y הוא 5 (חיובי).", "math_expression": "(-, +)" },
            { "verbal_explanation": "האזור שבו ה-X שלילי (שמאל) וה-Y חיובי (למעלה) הוא הרביע השני.", "math_expression": "רביע שני" }
        ],
        "final_answer": "הרביע השני",
        "options": ["הרביע הראשון", "הרביע השני", "הרביע השלישי", "הרביע הרביעי"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "מהו ה<strong>מרחק</strong> בין הנקודה A(2, 4) לנקודה B(2, 1-)?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='160'><line x1='40' y1='10' x2='40' y2='150' stroke='#94a3b8' stroke-dasharray='4'/><line x1='10' y1='100' x2='110' y2='100' stroke='#1e293b'/><line x1='40' y1='10' x2='40' y2='150' stroke='#1e293b'/><circle cx='70' cy='40' r='4' fill='red'/><text x='75' y='35' font-size='10'>A</text><circle cx='70' cy='115' r='4' fill='red'/><text x='75' y='130' font-size='10'>B</text></svg></div>",
        "hint": "מכיוון ששיעור ה-X זהה, המרחק הוא ההפרש בין ערכי ה-Y (בערך מוחלט).",
        "solution_steps": [
            { "verbal_explanation": "נזהה ששתי הנקודות נמצאות על אותו קו אנכי (X=2).", "math_expression": "x = 2" },
            { "verbal_explanation": "נחשב את ההפרש בין ערכי ה-Y.", "math_expression": "4 - (-1) = 4 + 1" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "5" }
        ],
        "final_answer": "5 יחידות אורך",
        "options": ["3", "4", "5", "6"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "נתון מלבן ששלושה מקודקודיו הם: (0,0), (5,0) ו-(0,3). מהן <strong>קואורדינטות הקודקוד הרביעי</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='120'><rect x='30' y='20' width='100' height='70' fill='none' stroke='#b09151' stroke-width='2' stroke-dasharray='4'/><circle cx='30' cy='90' r='4' fill='#1e293b'/><circle cx='130' cy='90' r='4' fill='#1e293b'/><circle cx='30' cy='20' r='4' fill='#1e293b'/><circle cx='130' cy='20' r='5' fill='red'/></svg></div>",
        "hint": "במלבן, הצלעות הנגדיות מקבילות לצירים. הקודקוד הרביעי חייב להיות בעל אותו X כמו הנקודה שמתחתיו ואותו Y כמו הנקודה שמשמאלו.",
        "solution_steps": [
            { "verbal_explanation": "הקודקוד נמצא מעל (5,0), לכן שיעור ה-X שלו הוא 5.", "math_expression": "x = 5" },
            { "verbal_explanation": "הקודקוד נמצא מימין ל-(0,3), לכן שיעור ה-Y שלו הוא 3.", "math_expression": "y = 3" },
            { "verbal_explanation": "נאחד לנקודה אחת.", "math_expression": "(5, 3)" }
        ],
        "final_answer": "(5, 3)",
        "options": ["(3, 5)", "(5, 3)", "(3, 0)", "(5, 5)"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "מערכת צירים",
        "difficulty": "High",
        "question_text": "מהו <strong>שטח</strong> המלבן שקודקודיו הם (1,1), (6,1), (6,4) ו-(1,4)?",
        "hint": "מצאו את אורך הצלע האופקית (הפרש ה-X) ואת אורך הצלע האנכית (הפרש ה-Y), והכפילו ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את אורך הבסיס (הפרש ה-X בין 6 ל-1).", "math_expression": "6 - 1 = 5" },
            { "verbal_explanation": "נחשב את גובה המלבן (הפרש ה-Y בין 4 ל-1).", "math_expression": "4 - 1 = 3" },
            { "verbal_explanation": "נכפיל למציאת השטח.", "math_expression": "5 × 3 = 15" }
        ],
        "final_answer": "15 יחידות שטח",
        "options": ["10", "15", "18", "24"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "מערכת צירים",
        "difficulty": "Low",
        "question_text": "איזו מהנקודות הבאות נמצאת על <strong>ציר ה-Y</strong>?",
        "hint": "כל נקודה שנמצאת על ציר ה-Y, שיעור ה-X שלה חייב להיות 0.",
        "solution_steps": [
            { "verbal_explanation": "נחפש נקודה שבה הערך הראשון (X) הוא אפס.", "math_expression": "(0, y)" },
            { "verbal_explanation": "בנקודה (0, 4) ה-X הוא 0, לכן היא על ציר ה-Y.", "math_expression": "(0, 4)" }
        ],
        "final_answer": "(0, 4)",
        "options": ["(4, 0)", "(0, 4)", "(4, 4)", "(0, 0-)"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "הנקודה A(3, 2) הועתקה 5 יחידות <strong>שמאלה</strong>. מהן הקואורדינטות החדשות שלה?",
        "hint": "תנועה שמאלה משפיעה רק על שיעור ה-X (חיסור).",
        "solution_steps": [
            { "verbal_explanation": "ניקח את שיעור ה-X המקורי (3) ונחסיר ממנו 5.", "math_expression": "3 - 5 = -2" },
            { "verbal_explanation": "שיעור ה-Y נשאר ללא שינוי.", "math_expression": "2" }
        ],
        "final_answer": "(2-, 2)",
        "options": ["(8, 2)", "(2-, 2)", "(3, 3-)", "(2, 3-)"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "מערכת צירים",
        "difficulty": "High",
        "question_text": "נתון משולש ישר זווית שקודקודיו בנקודות (0,0), (6,0) ו-(0,8). מהו <strong>היקף</strong> המשולש?",
        "hint": "מצאו את אורכי הניצבים (6 ו-8) ואת היתר בעזרת משפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "אורך ניצב א' (על ציר X).", "math_expression": "6" },
            { "verbal_explanation": "אורך ניצב ב' (על ציר Y).", "math_expression": "8" },
            { "verbal_explanation": "נמצא את היתר: שורש של (6 בריבוע ועוד 8 בריבוע).", "math_expression": "√(36+64) = 10" },
            { "verbal_explanation": "נחבר את כל הצלעות להיקף.", "math_expression": "6 + 8 + 10 = 24" }
        ],
        "final_answer": "24 יחידות אורך",
        "options": ["14", "20", "24", "48"],
        "correctAnswer": 2
    },
    {
        "id": 8,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "איזו נקודה היא <strong>השתקפות</strong> של הנקודה (4, 3) ביחס לציר ה-X?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><line x1='60' y1='10' x2='60' y2='110' stroke='#1e293b'/><line x1='10' y1='60' x2='110' y2='60' stroke='#1e293b'/><circle cx='90' cy='30' r='4' fill='#b09151'/><circle cx='90' cy='90' r='4' fill='red' opacity='0.5'/><path d='M90,35 L90,85' stroke='gray' stroke-dasharray='2'/></svg></div>",
        "hint": "בהשתקפות ביחס לציר ה-X, שיעור ה-X נשאר זהה ושיעור ה-Y הופך למספר הנגדי שלו.",
        "solution_steps": [
            { "verbal_explanation": "נשמור על X=4.", "math_expression": "4" },
            { "verbal_explanation": "נהפוך את סימן ה-Y מ-3 ל-3-.", "math_expression": "-3" }
        ],
        "final_answer": "(4, 3-)",
        "options": ["(4-, 3)", "(4, 3-)", "(3, 4-)", "(3, 4)"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "מערכת צירים",
        "difficulty": "Low",
        "question_text": "מהן הקואורדינטות של <strong>ראשית הצירים</strong>?",
        "hint": "זוהי נקודת המפגש של שני הצירים.",
        "solution_steps": [
            { "verbal_explanation": "בראשית הצירים, גם ה-X וגם ה-Y הם אפס.", "math_expression": "(0, 0)" }
        ],
        "final_answer": "(0, 0)",
        "options": ["(1, 1)", "(0, 0)", "(0, 1)", "(1, 0)"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "מערכת צירים",
        "difficulty": "High",
        "question_text": "נקודה נמצאת ברביע השלישי. מה ניתן לומר על <strong>מכפלת השיעורים</strong> שלה (X כפול Y)?",
        "hint": "ברביע השלישי ה-X שלילי וגם ה-Y שלילי.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הסימנים ברביע השלישי.", "math_expression": "x < 0 , y < 0" },
            { "verbal_explanation": "לפי חוקי הכפל, מינוס כפול מינוס נותן פלוס.", "math_expression": "(-) × (-) = (+)" },
            { "verbal_explanation": "לכן המכפלה תמיד תהיה חיובית (גדולה מאפס).", "math_expression": "מכפלה חיובית" }
        ],
        "final_answer": "המכפלה תמיד חיובית",
        "options": ["תמיד שלילית", "תמיד חיובית", "תמיד אפס", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "נקודה A נמצאת ב-(2, 2) ונקודה B ב-(6, 2). מהן הקואורדינטות של <strong>אמצע הקטע</strong> AB?",
        "hint": "ה-Y זהה, לכן האמצע יהיה ממוצע ערכי ה-X.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ממוצע ה-X.", "math_expression": "(2 + 6) / 2 = 4" },
            { "verbal_explanation": "ה-Y נשאר קבוע.", "math_expression": "2" }
        ],
        "final_answer": "(4, 2)",
        "options": ["(4, 2)", "(4, 4)", "(2, 4)", "(8, 4)"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "מערכת צירים",
        "difficulty": "High",
        "question_text": "ריבוע שמרכזו בראשית הצירים (0,0) ואורך צלעו 10. מהן הקואורדינטות של <strong>הקודקוד הימני העליון</strong>?",
        "hint": "מכיוון שהמרכז ב-(0,0), הריבוע מתפרס באופן שווה לכל הכיוונים (5 יחידות לכל צד).",
        "solution_steps": [
            { "verbal_explanation": "אם הצלע היא 10, המרחק מהמרכז לכל צלע הוא 5.", "math_expression": "10 / 2 = 5" },
            { "verbal_explanation": "קודקוד ימני עליון פירושו X חיובי ו-Y חיובי.", "math_expression": "(5, 5)" }
        ],
        "final_answer": "(5, 5)",
        "options": ["(10, 10)", "(5, 5)", "(5-, 5-)", "(10, 5)"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מערכת צירים",
        "difficulty": "Low",
        "question_text": "אם נעה נקודה על <strong>קו אופקי</strong> ימינה, איזה שיעור משתנה?",
        "hint": "קו אופקי מקביל לציר ה-X.",
        "solution_steps": [
            { "verbal_explanation": "בתנועה ימינה ושמאלה רק המיקום האופקי (X) משתנה, הגובה (Y) נשאר קבוע.", "math_expression": "ה-x משתנה" }
        ],
        "final_answer": "שיעור ה-X בלבד",
        "options": ["שיעור ה-X בלבד", "שיעור ה-Y בלבד", "שני השיעורים", "אף אחד מהם"],
        "correctAnswer": 0
    },
    {
        "id": 14,
        "subTopic": "מערכת צירים",
        "difficulty": "Medium",
        "question_text": "היכן נמצאות כל הנקודות שבהן <strong>X = Y</strong>?",
        "hint": "אלו נקודות כמו (1,1), (2,2), (3-,3-).",
        "solution_steps": [
            { "verbal_explanation": "הנקודות יוצרות קו אלכסוני שעובר בדיוק במרכז הרביעים הראשון והשלישי.", "math_expression": "y = x" }
        ],
        "final_answer": "על קו אלכסוני העובר בראשית הצירים",
        "options": ["על ציר ה-X", "על ציר ה-Y", "על קו אלכסוני העובר בראשית הצירים", "רק בראשית הצירים"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "מערכת צירים",
        "difficulty": "High",
        "question_text": "נתונות הנקודות (2-, 2) ו-(6, 2). מהו <strong>אורך הקטע</strong> המחבר ביניהן?",
        "hint": "שימו לב: שיעור ה-X קבוע. חשבו את המרחק על ציר ה-Y.",
        "solution_steps": [
            { "verbal_explanation": "המרחק הוא ההפרש בין שיעורי ה-Y.", "math_expression": "6 - (-2) = 6 + 2" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "8" }
        ],
        "final_answer": "8 יחידות",
        "options": ["4", "8", "12", "0"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: קריאת גרפים (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "הגרף הבא מתאר טמפרטורה במהלך היום. מה הייתה <strong>הטמפרטורה המקסימלית</strong> ובאיזו שעה?<br><div style='text-align:center; margin:15px 0;'><svg width='220' height='120'><path d='M20,100 L60,80 L100,40 L140,60 L180,90' fill='none' stroke='#b09151' stroke-width='3'/><circle cx='100' cy='40' r='5' fill='red'/><line x1='20' y1='100' x2='200' y2='100' stroke='black'/><line x1='20' y1='20' x2='20' y2='100' stroke='black'/><text x='100' y='115' font-size='10'>14:00</text><text x='100' y='30' font-size='10'>32°C</text></svg></div>",
        "hint": "חפשו את הנקודה הגבוהה ביותר בגרף (הפסגה).",
        "solution_steps": [
            { "verbal_explanation": "הנקודה הגבוהה ביותר בגרף נמצאת מעל השעה 14:00.", "math_expression": "נקודת שיא" },
            { "verbal_explanation": "גובה הנקודה מול ציר ה-Y מראה 32 מעלות.", "math_expression": "32°C" }
        ],
        "final_answer": "32 מעלות בשעה 14:00",
        "options": ["30 מעלות ב-12:00", "32 מעלות ב-14:00", "28 מעלות ב-16:00", "35 מעלות ב-14:00"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "קריאת גרפים",
        "difficulty": "Low",
        "question_text": "בגרף שמתאר מרחק של רכב מהבית, מה המשמעות של <strong>קו אופקי</strong>?",
        "hint": "בקו אופקי, הזמן עובר אך המרחק נשאר קבוע.",
        "solution_steps": [
            { "verbal_explanation": "אם המרחק מהבית לא משתנה בזמן שהזמן רץ, סימן שהרכב לא זז.", "math_expression": "מרחק קבוע" }
        ],
        "final_answer": "הרכב בעצירה (מנוחה)",
        "options": ["הרכב נוסע מהר", "הרכב חוזר הביתה", "הרכב בעצירה (מנוחה)", "הרכב נוסע במהירות קבועה"],
        "correctAnswer": 2
    },
    {
        "id": 18,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "לפי הגרף, באיזה טווח שעות הטמפרטורה <strong>ירדה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><path d='M20,80 L80,40 L160,90' fill='none' stroke='#1e293b' stroke-width='2'/><text x='20' y='95' font-size='9'>08:00</text><text x='80' y='95' font-size='9'>12:00</text><text x='150' y='95' font-size='9'>20:00</text></svg></div>",
        "hint": "ירידה בגרף נראית כשיפוע שפונה כלפי מטה משמאל לימין.",
        "solution_steps": [
            { "verbal_explanation": "הגרף עולה עד השעה 12:00 ואז מתחיל לרדת.", "math_expression": "מ-12:00" },
            { "verbal_explanation": "הירידה נמשכת עד סוף הגרף בשעה 20:00.", "math_expression": "12:00-20:00" }
        ],
        "final_answer": "בין 12:00 ל-20:00",
        "options": ["08:00-12:00", "12:00-20:00", "כל היום", "לא ירדה בכלל"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "קריאת גרפים",
        "difficulty": "High",
        "question_text": "לפניכם גרף של שתי חברות טלפון. חברה א' (קו רציף) וחברה ב' (קו מנוקד). מאיזו כמות דקות <strong>חברה ב' משתלמת יותר</strong> (זולה יותר)?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='120'><line x1='20' y1='100' x2='180' y2='20' stroke='blue' stroke-width='2'/><line x1='20' y1='80' x2='180' y2='60' stroke='red' stroke-width='2' stroke-dasharray='4'/><circle cx='100' cy='60' r='4' fill='black'/><text x='90' y='115' font-size='10'>100 דקות</text></svg></div>",
        "hint": "חברה משתלמת יותר היא זו שהגרף שלה נמצא נמוך יותר בגרף (עלות נמוכה יותר).",
        "solution_steps": [
            { "verbal_explanation": "הגרפים נחתכים בנקודה של 100 דקות.", "math_expression": "100 דקות" },
            { "verbal_explanation": "אחרי 100 דקות, הגרף המנוקד (חברה ב') נמצא מתחת לגרף הרציף.", "math_expression": "נמוך משמע זול" }
        ],
        "final_answer": "מעל 100 דקות",
        "options": ["מתחת ל-100 דקות", "בדיוק ב-100 דקות", "מעל 100 דקות", "הן תמיד שוות"],
        "correctAnswer": 2
    },
    {
        "id": 20,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "גרף של 'גובה מים במיכל' הוא <strong>גרף רציף</strong>. מה זה אומר?",
        "hint": "חשבו האם הגובה יכול להיות 1.5 ס\"מ, או שהוא חייב לקפוץ במספרים שלמים.",
        "solution_steps": [
            { "verbal_explanation": "בגרף רציף ניתן לקבל כל ערך בטווח, כולל שברים וערכי ביניים.", "math_expression": "גרף רציף" }
        ],
        "final_answer": "שניתן למדוד גובה בכל רגע נתון, גם בערכי ביניים",
        "options": ["שרק מספרים שלמים אפשריים", "שניתן למדוד גובה בכל רגע נתון, גם בערכי ביניים", "שהגרף תמיד עולה", "שהמיכל מלא תמיד"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "קריאת גרפים",
        "difficulty": "Low",
        "question_text": "באיזו שעה הייתה הטמפרטורה <strong>0 מעלות</strong> לפי הגרף?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='120'><line x1='10' y1='60' x2='170' y2='60' stroke='black' stroke-width='2'/><path d='M20,90 L60,60 L100,30' fill='none' stroke='#b09151' stroke-width='3'/><circle cx='60' cy='60' r='5' fill='red'/><text x='50' y='110' font-size='11'>06:00</text></svg></div>",
        "hint": "חפשו את נקודת החיתוך של הגרף עם ציר ה-X (ציר הזמן).",
        "solution_steps": [
            { "verbal_explanation": "הגרף חוצה את ציר ה-X בנקודה שמסומנת כשעה 06:00.", "math_expression": "חיתוך עם הציר" }
        ],
        "final_answer": "בשעה 06:00",
        "options": ["04:00", "06:00", "08:00", "חצות"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "קריאת גרפים",
        "difficulty": "High",
        "question_text": "מכונית נוסעת במהירות קבועה של 80 קמ\"ש. איזה גרף מתאר את <strong>המרחק</strong> שלה כפונקציה של הזמן?",
        "hint": "במהירות קבועה, המרחק גדל בקצב קבוע. הגרף צריך להיות קו ישר עולה שיוצא מהראשית.",
        "solution_steps": [
            { "verbal_explanation": "הקשר הוא ישר: המרחק שווה ל-80 כפול הזמן.", "math_expression": "y = 80x" },
            { "verbal_explanation": "פונקציה כזו מיוצגת על ידי קו ישר עולה.", "math_expression": "קו ישר" }
        ],
        "final_answer": "קו ישר עולה",
        "options": ["קו אופקי", "קו ישר עולה", "קו עקום (פרבולה)", "קו יורד"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "לפי דיאגרמת העמודות, מי התלמיד שקיבל את ה<strong>ציון הגבוה ביותר</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><rect x='20' y='50' width='30' height='40' fill='#94a3b8'/><rect x='70' y='20' width='30' height='70' fill='#b09151'/><rect x='120' y='40' width='30' height='50' fill='#94a3b8'/><text x='35' y='105' font-size='10'>אורי</text><text x='85' y='105' font-size='10' font-weight='bold'>דן</text><text x='135' y='105' font-size='10'>גל</text></svg></div>",
        "hint": "העמודה הגבוהה ביותר מייצגת את הציון המקסימלי.",
        "solution_steps": [
            { "verbal_explanation": "העמודה האמצעית, השייכת לדן, היא הגבוהה ביותר בדיאגרמה.", "math_expression": "עמודה מרבית" }
        ],
        "final_answer": "דן",
        "options": ["אורי", "דן", "גל", "כולם שווים"],
        "correctAnswer": 1
    },
    {
        "id": 24,
        "subTopic": "קריאת גרפים",
        "difficulty": "High",
        "question_text": "מתי המרחק בין שני רצים היה <strong>הגדול ביותר</strong> לפי הגרף?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='120'><path d='M20,100 L180,20' fill='none' stroke='blue' stroke-width='2'/><path d='M20,100 Q100,100 180,60' fill='none' stroke='green' stroke-width='2'/><line x1='100' y1='30' x2='100' y2='90' stroke='red' stroke-dasharray='2'/><text x='90' y='115' font-size='10'>נקודת זמן T</text></svg></div>",
        "hint": "המרחק הוא הפער האנכי (הגובה) בין שני הקווים בכל רגע.",
        "solution_steps": [
            { "verbal_explanation": "נמדוד את המרחק האנכי בין שני הגרפים בנקודות שונות.", "math_expression": "פער אנכי" },
            { "verbal_explanation": "בנקודה שבה הפער בין הקו הכחול לירוק הוא המקסימלי, זהו המרחק הגדול ביותר.", "math_expression": "הפרש מקסימלי" }
        ],
        "final_answer": "בנקודה שבה הפער האנכי בין הגרפים הוא המקסימלי",
        "options": ["בנקודת הזינוק", "בנקודת הסיום", "בנקודה שבה הפער האנכי הוא המקסימלי", "כשהם נפגשים"],
        "correctAnswer": 2
    },
    {
        "id": 25,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "האם הגרף הבא מייצג <strong>פונקציה</strong>? (כלומר: האם לכל X יש Y אחד בלבד?)<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><line x1='10' y1='60' x2='110' y2='60' stroke='black'/><line x1='60' y1='10' x2='60' y2='110' stroke='black'/><circle cx='60' cy='60' r='30' fill='none' stroke='red' stroke-width='2'/></svg></div>",
        "hint": "השתמשו ב'מבחן הקו האנכי'. האם קו אנכי חוצה את הגרף ביותר מנקודה אחת?",
        "solution_steps": [
            { "verbal_explanation": "אם נעביר קו אנכי דרך המעגל, הוא יחתוך אותו בשתי נקודות.", "math_expression": "שתי נקודות" },
            { "verbal_explanation": "זה אומר שלערך X אחד יש שני ערכי Y שונים, ולכן זו לא פונקציה.", "math_expression": "לא פונקציה" }
        ],
        "final_answer": "לא, זו לא פונקציה",
        "options": ["כן", "לא, זו לא פונקציה", "רק בחלק מהמקרים", "אי אפשר לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "קריאת גרפים",
        "difficulty": "Low",
        "question_text": "באיזה חודש הייתה <strong>הצניחה הגדולה ביותר</strong> במכירות?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><path d='M20,30 L60,35 L100,90 L140,85' fill='none' stroke='black' stroke-width='2'/><text x='50' y='25' font-size='9'>פברואר</text><text x='100' y='105' font-size='9'>מרץ</text></svg></div>",
        "hint": "חפשו את הקטע התלול ביותר שפונה כלפי מטה.",
        "solution_steps": [
            { "verbal_explanation": "הקטע בין פברואר למרץ מציג את השיפוע החד ביותר כלפי מטה.", "math_expression": "ירידה תלולה" }
        ],
        "final_answer": "בין פברואר למרץ",
        "options": ["בין ינואר לפברואר", "בין פברואר למרץ", "בין מרץ לאפריל", "לא הייתה צניחה"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "קריאת גרפים",
        "difficulty": "High",
        "question_text": "גרף מחיר הנסיעה במונית מורכב ממחיר התחלתי של 10 ש\"ח ועוד 5 ש\"ח לכל קילומטר. באיזה גובה הגרף <strong>חותך את ציר ה-Y</strong>?",
        "hint": "ציר ה-Y מייצג את המחיר כאשר המרחק (X) הוא 0.",
        "solution_steps": [
            { "verbal_explanation": "כשמרחק הנסיעה הוא 0 ק\"מ, עדיין משלמים את המחיר ההתחלתי.", "math_expression": "x = 0" },
            { "verbal_explanation": "המחיר ההתחלתי הוא 10 ש\"ח, לכן הנקודה היא (0, 10).", "math_expression": "y = 10" }
        ],
        "final_answer": "בגובה 10",
        "options": ["0", "5", "10", "15"],
        "correctAnswer": 2
    },
    {
        "id": 28,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "לפי הגרף, כמה זמן ארכה <strong>ההפסקה</strong> של המטייל?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><path d='M20,90 L70,40 L130,40 L180,10' fill='none' stroke='red' stroke-width='3'/><text x='70' y='105' font-size='9'>שעה 2</text><text x='130' y='105' font-size='9'>שעה 4</text></svg></div>",
        "hint": "הפסקה מיוצגת על ידי קטע אופקי (מרחק לא משתנה).",
        "solution_steps": [
            { "verbal_explanation": "הקטע האופקי מתחיל בשעה 2 ומסתיים בשעה 4.", "math_expression": "משעה 2 ל-4" },
            { "verbal_explanation": "נחסיר את הזמנים: 4 פחות 2.", "math_expression": "2 שעות" }
        ],
        "final_answer": "שעתיים",
        "options": ["שעה אחת", "שעתיים", "3 שעות", "לא הייתה הפסקה"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "קריאת גרפים",
        "difficulty": "High",
        "question_text": "מה ניתן ללמוד מגרף שבו הקו הוא <strong>ישר העובר בראשית הצירים</strong>?",
        "hint": "זהו גרף של יחס ישר (פרופורציה).",
        "solution_steps": [
            { "verbal_explanation": "גרף כזה מראה שאם נכפיל את X פי 2, גם ה-Y יוכפל פי 2 בדיוק.", "math_expression": "y = ax" }
        ],
        "final_answer": "קיימת פרופורציה (יחס ישר) בין המשתנים",
        "options": ["שהערכים תמיד שווים", "קיימת פרופורציה (יחס ישר) בין המשתנים", "שה-Y תמיד גדול מה-X", "אין קשר בין המשתנים"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "קריאת גרפים",
        "difficulty": "Medium",
        "question_text": "לפי הגרף, מתי המהירות הייתה <strong>הכי נמוכה</strong> (אך לא אפס)?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><path d='M20,90 L60,20 L120,80 L160,10' fill='none' stroke='black' stroke-width='2'/><text x='120' y='95' font-size='9'>T</text></svg></div>",
        "hint": "חפשו את הנקודה הנמוכה ביותר בגרף (השפל) שאינה נוגעת בציר ה-X.",
        "solution_steps": [
            { "verbal_explanation": "הנקודה המסומנת ב-T היא הנקודה הנמוכה ביותר בגרף לפני שהוא מתחיל לעלות שוב.", "math_expression": "נקודת מינימום" }
        ],
        "final_answer": "בנקודה T",
        "options": ["בנקודה T", "בתחילת הגרף", "בשיא הגרף", "בסוף הגרף"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 3: תיאור גרפי של תהליכים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "ממלאים במים בקצב קבוע כלי בצורת <strong>גליל</strong>. איזה גרף מתאר את גובה המים כפונקציה של הזמן?<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='80'><ellipse cx='50' cy='15' rx='30' ry='10' fill='none' stroke='black'/><line x1='20' y1='15' x2='20' y2='65' stroke='black'/><line x1='80' y1='15' x2='80' y2='65' stroke='black'/><ellipse cx='50' cy='65' rx='30' ry='10' fill='none' stroke='black'/></svg></div>",
        "hint": "מכיוון שרוחב הכלי אחיד, הגובה יעלה באותו קצב כל הזמן.",
        "solution_steps": [
            { "verbal_explanation": "בכלי בעל רוחב קבוע, כל כמות מים שנוספת מעלה את הגובה באותה מידה.", "math_expression": "קצב קבוע" },
            { "verbal_explanation": "קצב קבוע מיוצג בגרף על ידי קו ישר עולה.", "math_expression": "קו ישר" }
        ],
        "final_answer": "קו ישר עולה",
        "options": ["קו ישר עולה", "קו עקום שהולך ונעשה תלול", "קו עקום שהולך ונעשה מתון", "קו אופקי"],
        "correctAnswer": 0
    },
    {
        "id": 32,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "ממלאים במים כלי שצורתו <strong>משפך</strong> (רחב למעלה וצר למטה). איך ייראה גרף גובה המים?",
        "hint": "בתחילה (בצלק הצר) המים יעלו מהר מאוד, וככל שהכלי יתרחב, קצב עליית הגובה יואט.",
        "solution_steps": [
            { "verbal_explanation": "בחלק הצר הגובה עולה מהר (שיפוע תלול).", "math_expression": "מהיר בהתחלה" },
            { "verbal_explanation": "בחלק הרחב הגובה עולה לאט (שיפוע מתון).", "math_expression": "איטי בהמשך" },
            { "verbal_explanation": "הגרף יהיה עקומה שהולכת ונעשית מתונה יותר.", "math_expression": "קעור" }
        ],
        "final_answer": "קו עקום שהולך ונעשה מתון יותר",
        "options": ["קו ישר עולה", "קו עקום שהולך ונעשה תלול יותר", "קו עקום שהולך ונעשה מתון יותר", "קו יורד"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "כוס קפה רותחת מונחת על השולחן בחדר ממוזג. איזה גרף מתאר את <strong>הטמפרטורה</strong> שלה?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><path d='M20,20 Q80,80 170,85' fill='none' stroke='brown' stroke-width='3'/><line x1='10' y1='90' x2='170' y2='90' stroke='black'/><text x='150' y='105' font-size='9'>זמן</text></svg></div>",
        "hint": "הקפה מתקרר מהר בהתחלה, ולאט יותר ככל שהוא מתקרב לטמפרטורת החדר.",
        "solution_steps": [
            { "verbal_explanation": "התהליך הוא של קירור, לכן הגרף חייב להיות יורד.", "math_expression": "ירידה" },
            { "verbal_explanation": "הטמפרטורה לא תרד מתחת לטמפרטורת החדר, לכן הגרף ייעצר בקו מסוים.", "math_expression": "עצירה בטמפ' חדר" }
        ],
        "final_answer": "קו יורד שמתיישר לקראת הסוף",
        "options": ["קו ישר עולה", "קו ישר יורד", "קו יורד שמתיישר לקראת הסוף", "קו בצורת זיג-זג"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "כדור נזרק <strong>אנכית למעלה</strong> וחוזר ליד. איזה גרף מתאר את גובה הכדור מהקרקע?",
        "hint": "הגובה עולה, מגיע לשיא, ואז יורד חזרה באותו אופן.",
        "solution_steps": [
            { "verbal_explanation": "התהליך סימטרי: עלייה ואז ירידה.", "math_expression": "עולה ויורד" },
            { "verbal_explanation": "בשל כוח המשיכה, המהירות משתנה והגרף יוצר צורה של קשת (פרבולה הפוכה).", "math_expression": "פרבולה" }
        ],
        "final_answer": "קו קשתי (פרבולה הפוכה)",
        "options": ["קו ישר עולה", "קו ישר יורד", "משולש (קווים ישרים)", "קו קשתי (פרבולה הפוכה)"],
        "correctAnswer": 3
    },
    {
        "id": 35,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "נר דולק הולך ומתקצר. אם אורך הנר קטן ב-2 ס\"מ בכל שעה, איזה גרף מתאר את <strong>אורך הנר</strong>?",
        "hint": "הנר קטן בקצב קבוע. זהו תהליך ליניארי יורד.",
        "solution_steps": [
            { "verbal_explanation": "קצב הירידה קבוע (2 ס\"מ לשעה).", "math_expression": "-2 לשעה" },
            { "verbal_explanation": "קצב קבוע מיוצג תמיד על ידי קו ישר.", "math_expression": "קווי" }
        ],
        "final_answer": "קו ישר יורד",
        "options": ["קו ישר עולה", "קו ישר יורד", "קו אופקי", "קו עקום"],
        "correctAnswer": 1
    },
    {
        "id": 36,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "מטיילת עלתה על הר, נחה בפסגה וירדה חזרה מהר יותר ממה שעלתה. איזה גרף מתאר את <strong>הגובה</strong> שלה?",
        "hint": "חפשו גרף עם 3 שלבים: עלייה מתונה, קטע אופקי, וירידה תלולה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עלייה מתונה (קו עולה בשיפוע קטן).", "math_expression": "עלייה מתונה" },
            { "verbal_explanation": "שלב 2: מנוחה (קו אופקי).", "math_expression": "מנוחה" },
            { "verbal_explanation": "שלב 3: ירידה מהירה (קו יורד בשיפוע גדול).", "math_expression": "ירידה מהירה" }
        ],
        "final_answer": "עלייה, קטע אופקי ואז ירידה מהירה",
        "options": ["רק עלייה וירידה", "עלייה, קטע אופקי ואז ירידה מהירה", "קו ישר עולה כל הזמן", "שני קטעים אופקיים"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Low",
        "question_text": "איזה גרף מתאר נסיעה במהירות <strong>אפס</strong>?",
        "hint": "מהירות אפס פירושה שהמרחק לא משתנה.",
        "solution_steps": [
            { "verbal_explanation": "בגרף מרחק-זמן, אם המרחק קבוע, הקו הוא אופקי.", "math_expression": "מרחק קבוע" }
        ],
        "final_answer": "קו אופקי בגרף מרחק-זמן",
        "options": ["קו אנכי", "קו אופקי בגרף מרחק-זמן", "קו ישר עולה", "נקודה בודדת"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "ממלאים בריכה באמצעות שני צינורות. לאחר שעה סגרו צינור אחד. מה יקרה ל<strong>שיפוע הגרף</strong> של כמות המים?",
        "hint": "שיפוע הגרף מייצג את קצב המילוי.",
        "solution_steps": [
            { "verbal_explanation": "בתחילה הקצב מהיר (שני צינורות), לכן השיפוע תלול.", "math_expression": "שיפוע תלול" },
            { "verbal_explanation": "לאחר סגירת צינור, הקצב יורד (צינור אחד), לכן השיפוע יהיה מתון יותר.", "math_expression": "שיפוע מתון" }
        ],
        "final_answer": "הגרף ימשיך לעלות אך בשיפוע מתון יותר",
        "options": ["הגרף יתחיל לרדת", "הגרף יהפוך לאופקי", "הגרף ימשיך לעלות אך בשיפוע מתון יותר", "השיפוע יהפוך לתלול יותר"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "מכונית האיצה מ-0 ל-100 קמ\"ש ב-10 שניות ואז המשיכה במהירות קבועה. איזה גרף מתאר את <strong>המהירות</strong> שלה?",
        "hint": "שימו לב: השאלה היא על גרף המהירות, לא המרחק!",
        "solution_steps": [
            { "verbal_explanation": "בזמן ההאצה המהירות עולה, לכן הקו עולה.", "math_expression": "האצה" },
            { "verbal_explanation": "במהירות קבועה המהירות לא משתנה, לכן הקו הופך לאופקי.", "math_expression": "מהירות קבועה" }
        ],
        "final_answer": "קו עולה ואז קו אופקי",
        "options": ["קו אופקי כל הזמן", "קו עולה כל הזמן", "קו עולה ואז קו אופקי", "קו עולה ואז יורד"],
        "correctAnswer": 2
    },
    {
        "id": 40,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "סוללת טלפון נפרקת ב-10% בכל שעה. איזה גרף מתאר את <strong>אחוז הסוללה</strong> שנותר?",
        "hint": "הסוללה מתחילה ב-100% ויורדת לאפס.",
        "solution_steps": [
            { "verbal_explanation": "זהו תהליך של ירידה בקצב קבוע.", "math_expression": "ירידה קבועה" },
            { "verbal_explanation": "לכן הגרף הוא קו ישר שיורד לכיוון ציר ה-X.", "math_expression": "קו יורד" }
        ],
        "final_answer": "קו ישר יורד",
        "options": ["קו ישר עולה", "קו ישר יורד", "קו אופקי", "קו זיג-זג"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "כלי מורכב מגליל רחב בתחתית וגליל צר בחלק העליון. ממלאים אותו במים בקצב קבוע. איך ייראה <strong>שיפוע הגרף</strong>?",
        "hint": "בגליל הרחב המים עולים לאט, ובגליל הצר הם יתחילו לעלות מהר יותר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חלק רחב - שיפוע מתון.", "math_expression": "עלייה איטית" },
            { "verbal_explanation": "שלב 2: חלק צר - שיפוע תלול.", "math_expression": "עלייה מהירה" }
        ],
        "final_answer": "קו ישר מתון ואז קו ישר תלול יותר",
        "options": ["קו ישר אחד", "קו מתון ואז תלול יותר", "קו תלול ואז מתון יותר", "קו עקום רציף"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Low",
        "question_text": "איזה תהליך מייצג <strong>קו אופקי בגובה 20</strong> בגרף טמפרטורה?",
        "hint": "הטמפרטורה נשארת קבועה על 20 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "בקו אופקי אין שינוי בערך ה-Y (הטמפרטורה).", "math_expression": "T = 20" }
        ],
        "final_answer": "הטמפרטורה נשארת קבועה על 20 מעלות",
        "options": ["התחממות מהירה", "התקררות איטית", "הטמפרטורה נשארת קבועה על 20 מעלות", "הטמפרטורה יורדת ל-0"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "בלון מתנפח כך שרדיוסו גדל ב-1 ס\"מ בכל שנייה. האם גרף <strong>הנפח</strong> שלו יהיה קו ישר?",
        "hint": "נפח כדור תלוי ברדיוס בחזקת 3.",
        "solution_steps": [
            { "verbal_explanation": "הנפח לא גדל בקצב קבוע אלא הולך וגדל הרבה יותר מהר מהרדיוס.", "math_expression": "V \u221d R\u00b3" },
            { "verbal_explanation": "לכן הגרף לא יכול להיות קו ישר, אלא עקומה שהולכת ונהיית תלולה מאוד.", "math_expression": "לא קווי" }
        ],
        "final_answer": "לא, הגרף יהיה עקומה שהולכת ונהיית תלולה",
        "options": ["כן, קו ישר", "לא, הגרף יהיה עקומה שהולכת ונהיית תלולה", "לא, הגרף יהיה אופקי", "רק אם הבלון מרובע"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "Medium",
        "question_text": "רכבת נוסעת בין שתי תחנות. היא יוצאת מתחנה א', מאיצה, נוסעת במהירות קבועה, ואז מאטה עד לעצירה בתחנה ב'. כמה <strong>שלבים</strong> יש בגרף המהירות?",
        "hint": "ספרו את השינויים במצב המהירות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: האצה (קו עולה).", "math_expression": "1" },
            { "verbal_explanation": "שלב 2: מהירות קבועה (קו אופקי).", "math_expression": "2" },
            { "verbal_explanation": "שלב 3: האטה (קו יורד).", "math_expression": "3" }
        ],
        "final_answer": "3 שלבים",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": 2
    },
    {
        "id": 45,
        "subTopic": "תיאור גרפי של תהליכים",
        "difficulty": "High",
        "question_text": "מחירון חנייה: 10 ש\"ח לשעה ראשונה או חלק ממנה, וכל שעה נוספת (או חלק ממנה) עוד 5 ש\"ח. איך נקרא גרף כזה?",
        "hint": "המחיר 'קופץ' במדרגות בכל פעם שעוברת שעה.",
        "solution_steps": [
            { "verbal_explanation": "המחיר נשאר קבוע למשך שעה ואז מזנק למעלה בבת אחת.", "math_expression": "מדרגות" }
        ],
        "final_answer": "גרף מדרגות",
        "options": ["קו ישר עולה", "גרף רציף", "גרף מדרגות", "קו ישר יורד"],
        "correctAnswer": 2
    }
];