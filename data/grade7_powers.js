const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: מושג החזקה (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "מושג החזקה",
        "difficulty": "Low",
        "question_text": "רשמו את המכפלה הבאה כחזקה: <strong> 4 × 4 × 4 </strong><br><div style='text-align:center; margin:15px 0;'><svg width='180' height='60'><text x='90' y='40' font-family='Heebo' font-size='18' text-anchor='middle'>4 × 4 × 4 = ?</text></svg></div>",
        "hint": "חזקה היא דרך מקוצרת לכתוב מכפלה של מספר בעצמו. ספרו כמה פעמים המספר מופיע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה מהו המספר שחוזר על עצמו במכפלה. המספר הוא 4, וזה יהיה ה'בסיס' של החזקה שלנו.", "math_expression": "4" },
            { "verbal_explanation": "שלב 2: נספור כמה פעמים המספר 4 מופיע במכפלה. הוא מופיע 3 פעמים. מספר זה יהיה ה'מעריך' (החזקה).", "math_expression": "3" },
            { "verbal_explanation": "שלב 3: נרשום את התוצאה כחזקה: הבסיס למטה והמעריך למעלה מימין.", "math_expression": "4³" }
        ],
        "final_answer": "4³",
        "options": ["3⁴", "4³", "12", "4 × 3"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "מהו הערך של החזקה <strong> 5² </strong>? (חמש בריבוע)<br><div style='text-align:center; margin:15px 0;'><svg width='100' height='100'><rect x='10' y='10' width='80' height='80' fill='#fdfbf7' stroke='#b09151' stroke-width='2'/><line x1='10' y1='26' x2='90' y2='26' stroke='#e2e8f0'/><line x1='10' y1='42' x2='90' y2='42' stroke='#e2e8f0'/><line x1='10' y1='58' x2='90' y2='58' stroke='#e2e8f0'/><line x1='10' y1='74' x2='90' y2='74' stroke='#e2e8f0'/><line x1='26' y1='10' x2='26' y2='90' stroke='#e2e8f0'/><line x1='42' y1='10' x2='42' y2='90' stroke='#e2e8f0'/><line x1='58' y1='10' x2='58' y2='90' stroke='#e2e8f0'/><line x1='74' y1='10' x2='74' y2='90' stroke='#e2e8f0'/><text x='50' y='115' font-size='12' text-anchor='middle'>שטח ריבוע של 5 על 5</text></svg></div>",
        "hint": "חזקה שנייה (ריבוע) פירושה להכפיל את המספר בעצמו פעם אחת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הפעולה. המעריך הוא 2, לכן עלינו להכפיל את הבסיס (5) בעצמו.", "math_expression": "5 × 5" },
            { "verbal_explanation": "שלב 2: נחשב את המכפלה.", "math_expression": "25" }
        ],
        "final_answer": "25",
        "options": ["10", "25", "52", "15"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "מושג החזקה",
        "difficulty": "Low",
        "question_text": "חשבו את הערך של <strong> 2⁴ </strong> (שתיים בחזקת ארבע).",
        "hint": "הכפילו את המספר 2 בעצמו 4 פעמים: 2 כפול 2 כפול 2 כפול 2.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את החזקה כמכפלה חוזרת של הבסיס 2.", "math_expression": "2 × 2 × 2 × 2" },
            { "verbal_explanation": "שלב 2: נבצע את החישוב בשלבים. 2 כפול 2 זה 4. 4 כפול 2 זה 8. 8 כפול 2 זה 16.", "math_expression": "4 → 8 → 16" }
        ],
        "final_answer": "16",
        "options": ["8", "16", "32", "6"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "מושג החזקה",
        "difficulty": "High",
        "question_text": "מהו המספר הגדול יותר: <strong> 3² </strong> או <strong> 2³ </strong>?",
        "hint": "חשבו את הערך של כל חזקה בנפרד והשוו ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הערך של 3². זהו 3 כפול 3.", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של 2³. זהו 2 כפול 2 כפול 2.", "math_expression": "2³ = 8" },
            { "verbal_explanation": "שלב 3: נשווה בין התוצאות. 9 גדול מ-8.", "math_expression": "9 > 8" }
        ],
        "final_answer": "3² (התוצאה היא 9)",
        "options": ["3²", "2³", "הם שווים", "אי אפשר לדעת"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "מושג החזקה",
        "difficulty": "Low",
        "question_text": "מהו הערך של כל מספר (שונה מאפס) שמועלה ב<strong>חזקת 0</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='60'><text x='60' y='40' font-family='Heebo' font-size='20' text-anchor='middle'>X⁰ = ?</text></svg></div>",
        "hint": "זהו חוק יסוד בחזקות. בדקו מה קורה לכל מספר בחזקת 0.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור את חוק החזקות: כל מספר (מלבד 0) שמועלה בחזקת 0, ערכו הוא תמיד קבוע.", "math_expression": "a⁰ = 1" }
        ],
        "final_answer": "1",
        "options": ["0", "1", "המספר עצמו", "אין לזה ערך"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "חשבו את ערך הביטוי: <strong> 10³ </strong>",
        "hint": "בחזקות של 10, המעריך (המספר למעלה) אומר לנו כמה אפסים יהיו בתוצאה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הפעולה כמכפלה של 10 בעצמו 3 פעמים.", "math_expression": "10 × 10 × 10" },
            { "verbal_explanation": "שלב 2: נחשב: 10 כפול 10 זה 100. 100 כפול 10 זה 1,000.", "math_expression": "1000" }
        ],
        "final_answer": "1,000",
        "options": ["30", "100", "1,000", "10,000"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "מושג החזקה",
        "difficulty": "High",
        "question_text": "נתון: <strong> 2 × 2 × 2 × 2 × 2 = 2ˣ </strong>. מהו הערך של X?",
        "hint": "ספרו כמה פעמים המספר 2 מוכפל בעצמו באגף שמאל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את X כמעריך החזקה שאנו מחפשים. נספור את המופעים של 2 בצד שמאל.", "math_expression": "1, 2, 3, 4, 5" },
            { "verbal_explanation": "שלב 2: מכיוון שיש 5 פעמים את המספר 2, החזקה המקבילה היא 2⁵.", "math_expression": "2⁵" },
            { "verbal_explanation": "שלב 3: נשווה בין המעריכים ונגלה ש-X שווה ל-5.", "math_expression": "X = 5" }
        ],
        "final_answer": "5",
        "options": ["2", "5", "10", "32"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "איזה מהביטויים הבאים שווה ל- <strong> 3 × 4 </strong>?",
        "hint": "שימו לב: זוהי פעולת כפל רגילה, לא חזקה. חזקה היא מכפלה של מספר בעצמו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ערך המכפלה 3 כפול 4.", "math_expression": "12" },
            { "verbal_explanation": "שלב 2: נבדוק את האפשרויות. האם 4³ (4*4*4) הוא 12? לא. האם 3+3+3+3 הוא 12? כן.", "math_expression": "3 + 3 + 3 + 3 = 12" },
            { "verbal_explanation": "שלב 3: נזכור: כפל הוא קיצור של פעולת חיבור חוזרת של אותו מספר.", "math_expression": "3 + 3 + 3 + 3" }
        ],
        "final_answer": "3 + 3 + 3 + 3",
        "options": ["3⁴", "4³", "3 + 3 + 3 + 3", "3³ + 3"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "מושג החזקה",
        "difficulty": "Low",
        "question_text": "מהו הערך של <strong> 1¹⁰⁰ </strong> (אחד בחזקת מאה)?",
        "hint": "דמיינו שאתם מכפילים 1 כפול 1 כפול 1... מאה פעמים. מה תהיה התוצאה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המספר 1 כפול עצמו תמיד נשאר 1, לא משנה כמה פעמים נבצע את הפעולה.", "math_expression": "1 × 1 × 1... = 1" }
        ],
        "final_answer": "1",
        "options": ["100", "1", "0", "101"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "מושג החזקה",
        "difficulty": "High",
        "question_text": "מצאו את X אם ידוע ש: <strong> 3ˣ = 81 </strong>",
        "hint": "הכפילו את 3 בעצמו שוב ושוב עד שתגיעו ל-81. ספרו את מספר ההכפלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל להכפיל: 3 כפול 3 הם 9 (זה 3²).", "math_expression": "3² = 9" },
            { "verbal_explanation": "שלב 2: נכפיל שוב: 9 כפול 3 הם 27 (זה 3³).", "math_expression": "3³ = 27" },
            { "verbal_explanation": "שלב 3: נכפיל שוב: 27 כפול 3 הם 81 (זה 3⁴).", "math_expression": "3⁴ = 81" },
            { "verbal_explanation": "שלב 4: מצאנו שהמספר 3 מופיע 4 פעמים, לכן המעריך X הוא 4.", "math_expression": "X = 4" }
        ],
        "final_answer": "4",
        "options": ["3", "4", "5", "27"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "חשבו: <strong> 0⁵ </strong> (אפס בחזקת חמש).",
        "hint": "אפס כפול אפס כפול אפס...",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נכפיל את המספר 0 בעצמו 5 פעמים.", "math_expression": "0 × 0 × 0 × 0 × 0" },
            { "verbal_explanation": "שלב 2: מכפלה של אפס בכל מספר (כולל עצמו) היא תמיד אפס.", "math_expression": "0" }
        ],
        "final_answer": "0",
        "options": ["0", "1", "5", "אין פתרון"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "מושג החזקה",
        "difficulty": "High",
        "question_text": "חשבו את הערך של: <strong> 2³ + 2² </strong>",
        "hint": "חשבו כל חזקה בנפרד ואז חברו את התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ערך החזקה הראשונה: 2 בשלישית (2*2*2).", "math_expression": "8" },
            { "verbal_explanation": "שלב 2: נחשב את ערך החזקה השנייה: 2 בריבוע (2*2).", "math_expression": "4" },
            { "verbal_explanation": "שלב 3: נחבר את שתי התוצאות.", "math_expression": "8 + 4 = 12" }
        ],
        "final_answer": "12",
        "options": ["32", "12", "10", "16"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "מהי הדרך הנכונה לקרוא את הביטוי <strong> 6² </strong>?",
        "hint": "חזקה שנייה נקראת לעיתים קרובות על שם צורה גאומטרית בעלת שטח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בחזקה שנייה, התוצאה מייצגת שטח של ריבוע שצלעו היא הבסיס. לכן אנו קוראים לזה 'שש בריבוע'.", "math_expression": "6²" }
        ],
        "final_answer": "שש בריבוע",
        "options": ["שש בשלישית", "שש בריבוע", "שש כפול שתיים", "שתיים בחזקת שש"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "מושג החזקה",
        "difficulty": "High",
        "question_text": "נתון ריבוע שאורך צלעו הוא 7 ס\"מ. מהו <strong>שטח הריבוע</strong>? (כתבו כחזקה וחשבו את הערך).",
        "hint": "שטח ריבוע מחושב על ידי צלע כפול צלע.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הגדרת השטח. שטח ריבוע הוא אורך הצלע (7) מועלה בחזקת 2.", "math_expression": "7²" },
            { "verbal_explanation": "שלב 2: נחשב את הערך: 7 כפול 7.", "math_expression": "49" }
        ],
        "final_answer": "7² = 49 סמ\"ר",
        "options": ["14", "28", "49", "7"],
        "correctAnswer": 2
    },
    {
        "id": 15,
        "subTopic": "מושג החזקה",
        "difficulty": "Medium",
        "question_text": "חשבו: <strong> 4¹ </strong> (ארבע בחזקת אחת).",
        "hint": "כמה פעמים המספר 4 מופיע?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חזקת 1 אומרת שהמספר מופיע פעם אחת בלבד ללא הכפלה נוספת. לכן הערך הוא המספר עצמו.", "math_expression": "4" }
        ],
        "final_answer": "4",
        "options": ["1", "4", "8", "0"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: בסיס ומעריך (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Low",
        "question_text": "בחזקה <strong> 7³ </strong>, מהו ה<strong>בסיס</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='80'><text x='50' y='60' font-family='Heebo' font-size='40' fill='#1e293b'>7</text><text x='75' y='30' font-family='Heebo' font-size='20' fill='#b09151'>3</text></svg></div>",
        "hint": "הבסיס הוא המספר הגדול שכתוב למטה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את חלקי החזקה. המספר שנמצא 'על הקרקע' ומוכפל בעצמו נקרא בסיס.", "math_expression": "7" }
        ],
        "final_answer": "7",
        "options": ["3", "7", "21", "343"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Low",
        "question_text": "בחזקה <strong> 2⁸ </strong>, מהו ה<strong>מעריך</strong>?",
        "hint": "המעריך (או החזקה) הוא המספר הקטן שכתוב למעלה מימין.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המעריך מציין כמה פעמים נכפיל את הבסיס. כאן המספר למעלה הוא 8.", "math_expression": "8" }
        ],
        "final_answer": "8",
        "options": ["2", "8", "16", "256"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Medium",
        "question_text": "מי מהבאים הוא ה<strong>בסיס</strong> בביטוי <strong> 10ˣ </strong>?",
        "hint": "גם אם יש אות, המיקום של הבסיס לא משתנה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הבסיס הוא הערך התחתון בביטוי החזקה. כאן המספר 10 נמצא למטה.", "math_expression": "10" }
        ],
        "final_answer": "10",
        "options": ["X", "10", "10X", "אין בסיס"],
        "correctAnswer": 1
    },
    {
        "id": 19,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "נתונה החזקה <strong> (-3)² </strong>. מהו ה<strong>בסיס</strong>?",
        "hint": "כאשר יש סוגריים, כל מה שבתוך הסוגריים נחשב לבסיס החזקה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הסוגריים 'עוטפים' את המינוס יחד עם המספר 3. לכן, הפעולה היא הכפלה של מינוס 3 בעצמו.", "math_expression": "(-3) × (-3)" },
            { "verbal_explanation": "שלב 2: הבסיס הוא כל הערך שבתוך הסוגריים.", "math_expression": "-3" }
        ],
        "final_answer": "3-",
        "options": ["3", "3-", "2", "9"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "נתון הביטוי <strong> -5² </strong>. מהו ה<strong>בסיס</strong> במקרה זה?",
        "hint": "שימו לב: כאן אין סוגריים. החזקה 'נדבקת' רק למספר שצמוד אליה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בהיעדר סוגריים, החזקה פועלת רק על המספר 5. המינוס נשאר בחוץ ומחכה לתוצאה.", "math_expression": "-(5 × 5)" },
            { "verbal_explanation": "שלב 2: לכן הבסיס שמועלה בריבוע הוא רק המספר 5.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["5", "5-", "2", "25-"],
        "correctAnswer": 0
    },
    {
        "id": 21,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Medium",
        "question_text": "אם המעריך הוא 2 והבסיס הוא 9, איך נכתוב את החזקה?",
        "hint": "זכרו: בסיס למטה, מעריך למעלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נציב את הבסיס (9) בחלק התחתון.", "math_expression": "9" },
            { "verbal_explanation": "שלב 2: נציב את המעריך (2) למעלה מצד ימין.", "math_expression": "9²" }
        ],
        "final_answer": "9²",
        "options": ["2⁹", "9²", "18", "92"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "בביטוי <strong> (a+b)⁴ </strong>, מהו הבסיס?",
        "hint": "הסתכלו על כל מה שנמצא 'מתחת' למעריך 4 בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המעריך 4 חל על כל מה שכלול בתוך הסוגריים שלפניו.", "math_expression": "a + b" }
        ],
        "final_answer": "a+b",
        "options": ["a", "b", "a+b", "4"],
        "correctAnswer": 2
    },
    {
        "id": 23,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Medium",
        "question_text": "מה קורה לערך החזקה ככל ש<strong>המעריך גדל</strong> (עבור בסיס גדול מ-1)?",
        "hint": "חשבו על 2², 2³, 2⁴... האם התוצאות גדלות או קטנות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ככל שהמעריך גדל, אנו מכפילים את המספר בעצמו פעמים רבות יותר.", "math_expression": "2²=4, 2³=8, 2⁴=16" },
            { "verbal_explanation": "שלב 2: לכן ערך החזקה ילך ויגדל.", "math_expression": "גדל" }
        ],
        "final_answer": "הוא גדל",
        "options": ["הוא גדל", "הוא קטן", "הוא נשאר זהה", "הוא הופך לשלילי"],
        "correctAnswer": 0
    },
    {
        "id": 24,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Low",
        "question_text": "איזה חלק בחזקה מציין <strong>כמה פעמים</strong> נכפיל את המספר?",
        "hint": "בסיס או מעריך?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המעריך הוא ה'מונה' של החזקה - הוא מורה לנו על כמות החזרות של פעולת הכפל.", "math_expression": "מעריך" }
        ],
        "final_answer": "המעריך",
        "options": ["הבסיס", "המעריך", "התוצאה", "סימן הכפל"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "נתון: <strong> בסיס = X, מעריך = 0 </strong>. מהו ערך החזקה אם X אינו אפס?",
        "hint": "השתמשו בחוק שדיברנו עליו קודם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את החזקה לפי הנתונים.", "math_expression": "X⁰" },
            { "verbal_explanation": "שלב 2: לפי חוק המעריך אפס, התוצאה היא תמיד 1.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["X", "0", "1", "אין פתרון"],
        "correctAnswer": 2
    },
    {
        "id": 26,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Medium",
        "question_text": "בחזקה <strong> 0.5² </strong>, מהו הבסיס?",
        "hint": "הבסיס יכול להיות גם שבר או מספר עשרוני.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הבסיס הוא המספר שמוכפל בעצמו. כאן מדובר בחצי (0.5).", "math_expression": "0.5" }
        ],
        "final_answer": "0.5",
        "options": ["0.5", "2", "0.25", "5"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Low",
        "question_text": "בביטוי <strong> 100¹ </strong>, מהו המעריך?",
        "hint": "המספר הקטן למעלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המעריך הוא 1, מה שאומר שהמספר 100 מופיע פעם אחת.", "math_expression": "1" }
        ],
        "final_answer": "1",
        "options": ["100", "1", "0", "10"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "אם נחליף בין הבסיס למעריך בחזקה <strong> 4² </strong>, איזו חזקה נקבל ומה יהיה ערכה?",
        "hint": "הפכו את המקומות: 2 יהיה למטה ו-4 יהיה למעלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבצע את ההחלפה. נקבל 2 בחזקת 4.", "math_expression": "2⁴" },
            { "verbal_explanation": "שלב 2: נחשב את הערך החדש: 2*2*2*2.", "math_expression": "16" }
        ],
        "final_answer": "2⁴ שערכו 16",
        "options": ["2⁴ שערכו 16", "4² שערכו 16", "2⁴ שערכו 8", "4² שערכו 8"],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "subTopic": "בסיס ומעריך",
        "difficulty": "Medium",
        "question_text": "מהו הבסיס בביטוי <strong> (2×3)⁵ </strong>?",
        "hint": "הסתכלו על מה שנמצא בתוך הסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הסוגריים מאחדים את המכפלה 2*3 לבסיס אחד שמועלה בחזקת 5.", "math_expression": "2 × 3" }
        ],
        "final_answer": "2 × 3 (או 6)",
        "options": ["2", "3", "5", "2 × 3"],
        "correctAnswer": 3
    },
    {
        "id": 30,
        "subTopic": "בסיס ומעריך",
        "difficulty": "High",
        "question_text": "נתון שהמעריך הוא X והבסיס הוא 3. ערך החזקה הוא 27. מהו <strong>X</strong>?",
        "hint": "3 בחזקת מה שווה ל-27?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את המשוואה: 3 בחזקת X שווה 27.", "math_expression": "3ˣ = 27" },
            { "verbal_explanation": "שלב 2: נבדוק חזקות של 3: 3*3=9, 9*3=27.", "math_expression": "3³ = 27" },
            { "verbal_explanation": "שלב 3: המעריך X חייב להיות 3.", "math_expression": "X = 3" }
        ],
        "final_answer": "3",
        "options": ["2", "3", "9", "1"],
        "correctAnswer": 1
    },// ==============================================================
    // --- תת נושא 3: סדר פעולות עם חזקות (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Low",
        "question_text": "חשבו את תוצאת התרגיל הבא המשלב חיבור וחזקה: <strong> 3 + 2⁴ </strong><br><div style='text-align:center; margin:15px 0;'><svg width='220' height='100'><path d='M110,20 L50,80 L170,80 Z' fill='#f8fafc' stroke='#b09151' stroke-width='2'/><text x='110' y='45' font-size='14' font-weight='bold' text-anchor='middle'>חזקה ושורש</text><text x='110' y='70' font-size='12' text-anchor='middle'>כפל, חילוק, חיבור, חיסור</text></svg></div>",
        "hint": "בפירמידת סדר פעולות חשבון, חזקה נמצאת בראש (אחרי סוגריים) ולכן היא קודמת לפעולת החיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתבונן בתרגיל ונזהה את הפעולות. יש לנו פעולת חיבור ופעולת חזקה. לפי חוקי סדר פעולות חשבון, פעולת החזקה קודמת לחיבור ולכפל. לכן עלינו לטפל קודם כל בביטוי של החזקה.", "math_expression": "2⁴" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של החזקה לבדה. המספר 2 בחזקת 4 משמעותו להכפיל את המספר 2 בעצמו ארבע פעמים ברצף.", "math_expression": "2 × 2 × 2 × 2 = 16" },
            { "verbal_explanation": "שלב 3: כעת נחזור לתרגיל המקורי ונציב את התוצאה שקיבלנו (16) במקום ביטוי החזקה. נבצע את פעולת החיבור הפשוטה שנותרה.", "math_expression": "3 + 16 = 19" }
        ],
        "final_answer": "19",
        "options": ["11", "19", "25", "20"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה הסופית של התרגיל: <strong> 5 × 3² </strong>?",
        "hint": "אל תכפילו קודם 5 ב-3! זכרו שחזקה חזקה יותר מכפל ולכן מתבצעת לפניו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: עלינו להחליט מהי הפעולה הראשונה. למרות שהכפל מופיע ראשון מימין לשמאל, החזקה (בריבוע) נמצאת בעדיפות עליונה יותר במתמטיקה. נחשב את 3 בריבוע.", "math_expression": "3² = 3 × 3 = 9" },
            { "verbal_explanation": "שלב 2: נחליף את החזקה שבתרגיל בתוצאה שקיבלנו. התרגיל הופך לתרגיל כפל רגיל.", "math_expression": "5 × 9" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה כדי לקבל את התשובה הסופית.", "math_expression": "45" }
        ],
        "final_answer": "45",
        "options": ["15", "225", "45", "30"],
        "correctAnswer": 2
    },
    {
        "id": 33,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "חשבו את ערך הביטוי הכולל סוגריים: <strong> (2 + 3)² </strong>",
        "hint": "כאשר יש סוגריים, הם תמיד 'עוקפים' את כל שאר החוקים. פתרו קודם את מה שבתוכם, ורק אז העלו את התוצאה בחזקה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במתמטיקה, הסוגריים הם ה'מפקד העליון'. למרות שחזקה היא פעולה חזקה, עלינו קודם כל לבצע את החישוב שכלוא בתוך הסוגריים.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "שלב 2: כעת אנו לוקחים את התוצאה של הסוגריים (5) ומעלים אותה בחזקה המופיעה מחוץ להם (חזקת 2, או בריבוע).", "math_expression": "5²" },
            { "verbal_explanation": "שלב 3: נחשב את החזקה על ידי הכפלת המספר 5 בעצמו.", "math_expression": "5 × 5 = 25" }
        ],
        "final_answer": "25",
        "options": ["13", "25", "10", "15"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Medium",
        "question_text": "חשבו את ההפרש בתרגיל הבא: <strong> 10² - 6² </strong>",
        "hint": "חשבו את הערך של כל חזקה בנפרד, ורק בסוף בצעו את פעולת החיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שיש לנו שתי פעולות חזקה נפרדות ופעולת חיסור ביניהן. נחשב את החזקה הראשונה: 10 בריבוע (10 כפול 10).", "math_expression": "10² = 100" },
            { "verbal_explanation": "שלב 2: נחשב את החזקה השנייה: 6 בריבוע (6 כפול 6).", "math_expression": "6² = 36" },
            { "verbal_explanation": "שלב 3: כעת נציב את התוצאות חזרה לתרגיל המקורי ונבצע את פעולת החיסור שנותרה.", "math_expression": "100 - 36" },
            { "verbal_explanation": "שלב 4: נחשב את ההפרש הסופי.", "math_expression": "64" }
        ],
        "final_answer": "64",
        "options": ["64", "16", "4", "8"],
        "correctAnswer": 0
    },
    {
        "id": 35,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "מהו הערך של הנעלם <strong>X</strong> במשוואה הבאה: <strong> 2 × X² = 50 </strong>?",
        "hint": "בפתרון משוואות אנו עובדים 'הפוך' מסדר הפעולות. חלקו קודם ב-2 כדי 'לנקות' את המספרים מסביב ל-X, ורק אז התמודדו עם החזקה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המטרה שלנו היא לבודד את X. נתחיל בלהיפטר מפעולת הכפל ב-2 שנמצאת מחוץ לחזקה. נעשה זאת על ידי חלוקת שני אגפי המשוואה ב-2.", "math_expression": "X² = 50 ÷ 2" },
            { "verbal_explanation": "שלב 2: נחשב את התוצאה שקיבלנו באגף ימין. קיבלנו ש-X בריבוע שווה ל-25.", "math_expression": "X² = 25" },
            { "verbal_explanation": "שלב 3: כעת נשאל את עצמנו: איזה מספר חיובי, כאשר נכפיל אותו בעצמו, ייתן לנו 25?", "math_expression": "5 × 5 = 25" },
            { "verbal_explanation": "שלב 4: מכאן אנו מסיקים שערכו של X הוא 5.", "math_expression": "X = 5" }
        ],
        "final_answer": "5",
        "options": ["5", "25", "10", "12.5"],
        "correctAnswer": 0
    },
    {
        "id": 36,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Medium",
        "question_text": "חשבו שלב אחר שלב: <strong> (10 ÷ 2)³ </strong>",
        "hint": "הסוגריים מכריחים אותנו לבצע את פעולת החילוק קודם, למרות שיש חזקה בחוץ.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לפי חוקי סדר פעולות חשבון, סוגריים תמיד קודמים לכל דבר אחר. לכן נפתור קודם את פעולת החילוק שכלואה בתוך הסוגריים.", "math_expression": "10 ÷ 2 = 5" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה (5) במקום הסוגריים, ונעלה אותה בחזקת 3 (בשלישית) כפי שנדרש.", "math_expression": "5³" },
            { "verbal_explanation": "שלב 3: נחשב את החזקה על ידי הכפלת המספר בעצמו 3 פעמים: 5 כפול 5 זה 25, ו-25 כפול 5 ייתן לנו את התשובה.", "math_expression": "5 × 5 × 5 = 125" }
        ],
        "final_answer": "125",
        "options": ["15", "30", "125", "100"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "מהי התוצאה של הביטוי: <strong> 4³ ÷ 2 </strong>?",
        "hint": "כאן אין סוגריים, ולכן החזקה קודמת לפעולת החילוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסקור את התרגיל ונזהה שאין סוגריים. במצב כזה, חזקה נמצאת בעדיפות גבוהה יותר מחילוק. לכן נחשב קודם את 4 בשלישית.", "math_expression": "4³ = 4 × 4 × 4 = 64" },
            { "verbal_explanation": "שלב 2: נחליף את ביטוי החזקה בתוצאה שחישבנו (64), ונבצע את פעולת החילוק ב-2.", "math_expression": "64 ÷ 2" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה הסופית, שהיא בעצם החצי של 64.", "math_expression": "32" }
        ],
        "final_answer": "32",
        "options": ["8", "16", "32", "6"],
        "correctAnswer": 2
    },
    {
        "id": 38,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "חשבו את התרגיל המורכב הבא: <strong> 2 × 3² + 4 × 2² </strong>",
        "hint": "עבדו בצורה מסודרת: קודם פתרו את כל החזקות, לאחר מכן בצעו את פעולות הכפל, ורק בסוף חברו את התוצאות יחד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: התרגיל מכיל חיבור, כפל וחזקות. נתחיל בחישוב כל החזקות בנפרד, שכן הן בראש סדר העדיפויות. 3 בריבוע זה 9, ו-2 בריבוע זה 4.", "math_expression": "3² = 9 , 2² = 4" },
            { "verbal_explanation": "שלב 2: נציב את הערכים שחישבנו בחזרה לתוך התרגיל. כעת יש לנו תרגיל עם כפל וחיבור.", "math_expression": "2 × 9 + 4 × 4" },
            { "verbal_explanation": "שלב 3: לפי סדר הפעולות, כפל קודם לחיבור. נבצע את שתי פעולות הכפל בנפרד.", "math_expression": "18 + 16" },
            { "verbal_explanation": "שלב 4: נותרנו עם פעולת חיבור פשוטה. נחבר את התוצאות לקבלת התשובה הסופית.", "math_expression": "34" }
        ],
        "final_answer": "34",
        "options": ["34", "52", "100", "44"],
        "correctAnswer": 0
    },
    {
        "id": 39,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Low",
        "question_text": "חשבו את הערך של: <strong> 1⁷ + 0⁹ </strong>",
        "hint": "היזכרו בחוקים המיוחדים של המספרים 1 ו-0 בחזקות. כמה זה 1 כפול 1? וכמה זה 0 כפול 0?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את האיבר הראשון. חוק החזקות קובע שהמספר 1 מועלה בכל חזקה שהיא יישאר תמיד 1 (כי 1 כפול 1 כפול 1... זה 1).", "math_expression": "1⁷ = 1" },
            { "verbal_explanation": "שלב 2: נחשב את האיבר השני. המספר 0 מועלה בכל חזקה (חיובית) יישאר תמיד 0 (כי 0 כפול 0 זה 0).", "math_expression": "0⁹ = 0" },
            { "verbal_explanation": "שלב 3: נציב את הערכים בתרגיל ונחבר ביניהם.", "math_expression": "1 + 0 = 1" }
        ],
        "final_answer": "1",
        "options": ["1", "0", "16", "2"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Medium",
        "question_text": "חשבו את התוצאה של חזקה בתוך חזקה: <strong> (2²)³ </strong>",
        "hint": "פתרו את מה שבתוך הסוגריים קודם (2 בריבוע), ואת התוצאה שתקבלו העלו בחזקה השלישית (בחוץ).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל תמיד ממה שנמצא עמוק בתוך הסוגריים. נחשב את הערך של 2 בריבוע.", "math_expression": "2² = 2 × 2 = 4" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה שקיבלנו (4) בחזרה לתוך הסוגריים. כעת עלינו להעלות את 4 בחזקת 3.", "math_expression": "4³" },
            { "verbal_explanation": "שלב 3: נחשב את החזקה החדשה: 4 כפול 4 זה 16, ו-16 כפול 4 נותן את התוצאה הסופית.", "math_expression": "4 × 4 × 4 = 64" }
        ],
        "final_answer": "64",
        "options": ["32", "64", "12", "16"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "מצאו את הערך של הביטוי: <strong> 100 - (2 × 5)² </strong>",
        "hint": "סדר הפעולות הכרחי כאן: קודם סוגריים, אחר כך חזקה, ובסוף חיסור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל מהסוגריים, שהם בעדיפות הגבוהה ביותר. נחשב את המכפלה שבפנים: 2 כפול 5.", "math_expression": "2 × 5 = 10" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה חזרה. עכשיו עלינו להעלות את ה-10 שקיבלנו בחזקת 2 (לפני שמבצעים את החיסור!).", "math_expression": "100 - (10)²" },
            { "verbal_explanation": "שלב 3: נחשב את הערך של 10 בריבוע, שזה 100.", "math_expression": "10² = 100" },
            { "verbal_explanation": "שלב 4: כעת נבצע את פעולת החיסור האחרונה בתרגיל.", "math_expression": "100 - 100 = 0" }
        ],
        "final_answer": "0",
        "options": ["0", "50", "90", "75"],
        "correctAnswer": 0
    },
    {
        "id": 42,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Low",
        "question_text": "התבוננו בתרגיל הבא: <strong> 4 + 2 × 3² </strong>. איזו פעולה מתבצעת <strong>אחרונה</strong>?",
        "hint": "חשבו על סדר הקדימויות מהראשונה לאחרונה: חזקה, כפל, ואז חיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסקור את סדר הפעולות מהחזקה ביותר לחלשה ביותר. הפעולה הראשונה שתתבצע היא החזקה (3²).", "math_expression": "פעולה 1: חזקה" },
            { "verbal_explanation": "שלב 2: לאחר מכן, תתבצע פעולת הכפל (2 כפול התוצאה של החזקה).", "math_expression": "פעולה 2: כפל" },
            { "verbal_explanation": "שלב 3: הפעולה 'החלשה' ביותר, שתישאר לסוף, היא פעולת החיבור (הוספת ה-4).", "math_expression": "פעולה 3: חיבור" }
        ],
        "final_answer": "פעולת החיבור (+)",
        "options": ["חזקה", "כפל", "חיבור", "הכל יחד"],
        "correctAnswer": 2
    },
    {
        "id": 43,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "חשבו את תוצאת התרגיל המורכב: <strong> (3² - 2²) × (5 + 1) </strong>",
        "hint": "פתרו כל זוג סוגריים בנפרד (זכרו שבתוך הסוגריים החזקות קודמות לחיסור), ואז כפלו ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתחיל מהסוגריים השמאליים. בתוכם יש חזקות וחיסור, לכן נחשב קודם את החזקות. 3 בריבוע זה 9, ו-2 בריבוע זה 4.", "math_expression": "(9 - 4)" },
            { "verbal_explanation": "שלב 2: נסיים לפתור את הסוגריים השמאליים על ידי ביצוע החיסור.", "math_expression": "9 - 4 = 5" },
            { "verbal_explanation": "שלב 3: במקביל, נפתור את הסוגריים הימניים. 5 ועוד 1 שווה ל-6.", "math_expression": "(5 + 1) = 6" },
            { "verbal_explanation": "שלב 4: כעת, לאחר שפישטנו את שני צידי התרגיל, נכפיל את התוצאות זו בזו.", "math_expression": "5 × 6 = 30" }
        ],
        "final_answer": "30",
        "options": ["30", "15", "60", "24"],
        "correctAnswer": 0
    },
    {
        "id": 44,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של חלוקת שתי חזקות: <strong> 8² ÷ 2³ </strong>?",
        "hint": "חשבו את הערך המדויק של כל חזקה בנפרד ואז בצעו את החילוק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את החזקה באגף שמאל: 8 בריבוע (8 כפול 8).", "math_expression": "8² = 64" },
            { "verbal_explanation": "שלב 2: נחשב את החזקה באגף ימין: 2 בשלישית (2 כפול 2 כפול 2).", "math_expression": "2³ = 8" },
            { "verbal_explanation": "שלב 3: נציב את התוצאות לתוך התרגיל המקורי ונבצע את פעולת החילוק.", "math_expression": "64 ÷ 8 = 8" }
        ],
        "final_answer": "8",
        "options": ["4", "8", "16", "1"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "סדר פעולות עם חזקות",
        "difficulty": "High",
        "question_text": "חשבו בזהירות את הביטוי הבא: <strong> 5 + 2 × (10 - 2²) </strong>",
        "hint": "היכנסו לתוך הסוגריים. בתוכם יש חזקה וחיסור - מי קודם? לאחר שסיימתם את הסוגריים, בצעו כפל, ולבסוף חיבור.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניגש ישר לסוגריים. בתוכם עלינו לחשב קודם את החזקה לפני החיסור. 2 בריבוע זה 4.", "math_expression": "(10 - 4)" },
            { "verbal_explanation": "שלב 2: נשלים את הפעולה שבתוך הסוגריים.", "math_expression": "10 - 4 = 6" },
            { "verbal_explanation": "שלב 3: נחזור לתרגיל המקורי עם התוצאה שקיבלנו. התרגיל עכשיו הוא 5 ועוד 2 כפול 6. לפי סדר הפעולות, נבצע את הכפל קודם.", "math_expression": "2 × 6 = 12" },
            { "verbal_explanation": "שלב 4: לסיום, נחבר את התוצאה למספר 5 שחיכה מתחילת התרגיל.", "math_expression": "5 + 12 = 17" }
        ],
        "final_answer": "17",
        "options": ["17", "42", "13", "20"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 4: שורש ריבועי (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "שורש ריבועי",
        "difficulty": "Low",
        "question_text": "מהו ה<strong>שורש הריבועי</strong> של המספר 49? ( √49 )<br><div style='text-align:center; margin:15px 0;'><svg width='120' height='120'><rect x='10' y='10' width='100' height='100' fill='#f8fafc' stroke='#1e293b' stroke-width='2' stroke-dasharray='4'/><text x='60' y='65' font-size='18' text-anchor='middle'>S = 49</text><text x='60' y='135' font-size='14' text-anchor='middle'>צלע = ?</text></svg></div>",
        "hint": "שורש ריבועי הוא כמו לשאול: 'איזה מספר חיובי שכאשר אכפיל אותו בעצמו, ייתן לי 49?'",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבין שפעולת השורש הריבועי היא הפעולה ההפוכה להעלאה בחזקה שנייה (ריבוע). אנו מחפשים מספר נעלם X המקיים X בריבוע שווה ל-49.", "math_expression": "X² = 49" },
            { "verbal_explanation": "שלב 2: נעבור על לוח הכפל בראשנו ונחפש מספר שכפול עצמו נותן 49.", "math_expression": "7 × 7 = 49" },
            { "verbal_explanation": "שלב 3: מצאנו שהמספר הוא 7. לכן השורש הריבועי של 49 הוא 7.", "math_expression": "√49 = 7" }
        ],
        "final_answer": "7",
        "options": ["6", "7", "8", "49"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "חשבו את סכום השורשים בתרגיל הבא: <strong> √81 + √100 </strong>",
        "hint": "שורש מתנהג כמו חזקה מבחינת סדר פעולות. חשבו כל שורש בנפרד, ורק לאחר מכן חברו את התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את השורש של 81. נחפש איזה מספר כפול עצמו שווה ל-81. התשובה היא 9.", "math_expression": "√81 = 9" },
            { "verbal_explanation": "שלב 2: נמצא את השורש של 100. נחפש איזה מספר כפול עצמו שווה ל-100. התשובה היא 10.", "math_expression": "√100 = 10" },
            { "verbal_explanation": "שלב 3: נציב את התוצאות בתרגיל המקורי ונבצע פעולת חיבור פשוטה.", "math_expression": "9 + 10 = 19" }
        ],
        "final_answer": "19",
        "options": ["181", "19", "21", "90"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "שורש ריבועי",
        "difficulty": "Low",
        "question_text": "מהו השורש הריבועי של <strong>1</strong>? ( √1 )",
        "hint": "אל תסתבכו! שאלו את עצמכם: איזה מספר כפול עצמו ייתן בדיוק 1?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש מספר שלם שכאשר הוא מוכפל בעצמו, התוצאה נשארת ללא שינוי.", "math_expression": "? × ? = 1" },
            { "verbal_explanation": "שלב 2: המספר היחיד (החיובי) שמקיים זאת הוא המספר 1 עצמו.", "math_expression": "1 × 1 = 1" },
            { "verbal_explanation": "שלב 3: לכן, השורש של 1 הוא תמיד 1.", "math_expression": "√1 = 1" }
        ],
        "final_answer": "1",
        "options": ["0", "1", "0.5", "אין שורש"],
        "correctAnswer": 1
    },
    {
        "id": 49,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "חשבו בזהירות את הביטוי הבא: <strong> √(14 + 11) </strong>",
        "hint": "שימו לב שהחיבור נמצא *בתוך* השורש. לכן יש להתייחס אליו כאילו הוא בתוך סוגריים ולחשב אותו קודם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: קו השורש הנמתח מעל למספרים פועל בדיוק כמו סוגריים. עלינו קודם כל לפשט את הביטוי שמתחתיו על ידי חיבור המספרים.", "math_expression": "14 + 11 = 25" },
            { "verbal_explanation": "שלב 2: כעת, לאחר שקיבלנו מספר אחד מתחת לשורש, נוכל להוציא ממנו את השורש הריבועי.", "math_expression": "√25" },
            { "verbal_explanation": "שלב 3: נשאל איזה מספר כפול עצמו נותן 25, והתשובה היא 5.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["5", "25", "10", "15"],
        "correctAnswer": 0
    },
    {
        "id": 50,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "נתון שטח של ריבוע והוא 64 סמ\"ר. מהו <strong>אורך הצלע</strong> של הריבוע?",
        "hint": "אורך הצלע של ריבוע הוא תמיד השורש הריבועי של השטח שלו, כיוון ששטח מחושב על ידי 'צלע כפול צלע'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הבעיה בצורה גיאומטרית ואלגברית. נסמן את אורך הצלע שאנו מחפשים כ-X. אנו יודעים ששטח ריבוע הוא הצלע כפול עצמה.", "math_expression": "X² = 64" },
            { "verbal_explanation": "שלב 2: כדי למצוא את אורך הצלע X, עלינו לבצע את הפעולה ההפוכה לחזקה, כלומר למצוא את השורש הריבועי של שטח הריבוע (64).", "math_expression": "X = √64" },
            { "verbal_explanation": "שלב 3: נחשב את השורש. המספר החיובי שכפול עצמו שווה ל-64 הוא 8.", "math_expression": "X = 8" }
        ],
        "final_answer": "8 סמ\"ר",
        "options": ["32 סמ\"ר", "16 סמ\"ר", "8 סמ\"ר", "4 סמ\"ר"],
        "correctAnswer": 2
    },
    {
        "id": 51,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "מהי התוצאה של תרגיל הכפל הבא: <strong> 2 × √36 </strong>?",
        "hint": "בדומה לחזקות, פעולת השורש קודמת לפעולת הכפל.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סדר הפעולות. חילוץ שורש נמצא בעדיפות עליונה ויש לבצעו לפני הכפל. נמצא את השורש של 36.", "math_expression": "√36 = 6" },
            { "verbal_explanation": "שלב 2: נציב את התוצאה (6) חזרה לתרגיל המקורי במקום השורש.", "math_expression": "2 × 6" },
            { "verbal_explanation": "שלב 3: נבצע את פעולת הכפל כדי לקבל את התשובה הסופית.", "math_expression": "12" }
        ],
        "final_answer": "12",
        "options": ["72", "12", "38", "18"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "איזה מספר שלם נמצא בדיוק באמצע בין <strong> √16 </strong> לבין <strong> √36 </strong>?",
        "hint": "חשבו את הערך המדויק של כל אחד מהשורשים, ואז מצאו איזה מספר שלם חסר ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הערך של השורש הראשון. איזה מספר כפול עצמו הוא 16?", "math_expression": "√16 = 4" },
            { "verbal_explanation": "שלב 2: נחשב את הערך של השורש השני. איזה מספר כפול עצמו הוא 36?", "math_expression": "√36 = 6" },
            { "verbal_explanation": "שלב 3: כעת נשאל את עצמנו: איזה מספר שלם נמצא בין 4 ל-6? התשובה היא כמובן 5.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["3", "5", "7", "10"],
        "correctAnswer": 1
    },
    {
        "id": 53,
        "subTopic": "שורש ריבועי",
        "difficulty": "Low",
        "question_text": "מהו הערך של <strong> √0 </strong>?",
        "hint": "איזה מספר חיובי או אפס, כאשר נכפיל אותו בעצמו, ייתן לנו 0?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחפש מספר שאם נכפיל אותו בעצמו נקבל אפס.", "math_expression": "? × ? = 0" },
            { "verbal_explanation": "שלב 2: המספר היחיד בעולם המקיים זאת הוא אפס עצמו, שכן אפס כפול כל דבר שווה אפס.", "math_expression": "0 × 0 = 0" },
            { "verbal_explanation": "שלב 3: מכאן שהשורש של אפס הוא תמיד אפס.", "math_expression": "√0 = 0" }
        ],
        "final_answer": "0",
        "options": ["0", "1", "אין לזה ערך", "מינוס 1"],
        "correctAnswer": 0
    },
    {
        "id": 54,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "חשבו את תוצאת הביטוי המשלב שורש וחזקה: <strong> (√16)² </strong>",
        "hint": "מה קורה כאשר מעלים שורש ריבועי בחזקה שנייה (בריבוע)? נסו לחשב את השורש קודם כדי להבין את הקסם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לפי חוקי סדר פעולות, נתחיל מהסוגריים פנימה ונחשב את השורש של 16.", "math_expression": "√16 = 4" },
            { "verbal_explanation": "שלב 2: כעת ניקח את התוצאה (4) ונעלה אותה בריבוע כפי שמופיע מחוץ לסוגריים.", "math_expression": "4² = 4 × 4" },
            { "verbal_explanation": "שלב 3: נחשב ונקבל 16. המסקנה החשובה: פעולת חזקה ריבועית ופעולת שורש ריבועי הן 'פעולות מבטלות' אחת את השנייה (כמו חיבור וחיסור של אותו מספר).", "math_expression": "16" }
        ],
        "final_answer": "16",
        "options": ["4", "8", "16", "256"],
        "correctAnswer": 2
    },
    {
        "id": 55,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "עבור מספרים חיוביים הגדולים מ-1, האם המספר המקורי תמיד יהיה <strong>גדול יותר</strong> מהשורש הריבועי שלו?",
        "hint": "בדקו זאת על ידי לקיחת דוגמה. בחרו מספר שקל להוציא לו שורש (כמו 9 או 100) והשוו את המספר לשורש שלו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ניקח מספר לדוגמה שגדול מ-1, למשל את המספר 9. נמצא את השורש שלו.", "math_expression": "√9 = 3" },
            { "verbal_explanation": "שלב 2: נשווה בין המספר המקורי לשורש שקיבלנו. נראה בבירור ש-9 גדול מ-3.", "math_expression": "9 > 3" },
            { "verbal_explanation": "שלב 3: זהו כלל אצבע במתמטיקה: הוצאת שורש (למספרים מעל 1) 'מכווצת' את המספר ומקטינה את ערכו.", "math_expression": "נכון" }
        ],
        "final_answer": "כן, כל מספר הגדול מ-1 יהיה גדול מהשורש שלו",
        "options": ["כן, כל מספר הגדול מ-1 יהיה גדול מהשורש שלו", "לא", "רק אם המספר הוא זוגי", "רק אם המספר הוא 0"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "חשבו את ערך הביטוי המורכב הבא: <strong> √(100 ÷ 4) </strong>",
        "hint": "זכרו שקו השורש משמש כמו סוגריים. עליכם לבצע את חלוקת המספרים קודם כל, ורק מהתוצאה להוציא שורש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתמקד קודם כל במה שקורה מתחת לקורת הגג של השורש. נחשב את תרגיל החילוק 100 לחלק ל-4.", "math_expression": "100 ÷ 4 = 25" },
            { "verbal_explanation": "שלב 2: כעת אנו נשארים עם ביטוי פשוט יותר: שורש של התוצאה שקיבלנו.", "math_expression": "√25" },
            { "verbal_explanation": "שלב 3: נמצא איזה מספר מוכפל בעצמו נותן 25, וזו התשובה הסופית.", "math_expression": "5" }
        ],
        "final_answer": "5",
        "options": ["10", "5", "25", "2.5"],
        "correctAnswer": 1
    },
    {
        "id": 57,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "איזה מהמספרים הבאים מוגדר כ<strong>'מספר ריבועי'</strong>? (כלומר, מספר שיש לו שורש ריבועי שהוא מספר שלם)",
        "hint": "נסו לדמיין את ה'אלכסון' של לוח הכפל. חפשו את המספר שמופיע שם (כמו 4, 9, 16, 25...).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבדוק את המספר 20. ננסה לחשוב האם יש מספר שלם שכפול עצמו שווה ל-20. 4 כפול 4 זה 16, 5 כפול 5 זה 25. דילגנו על 20, לכן הוא לא מספר ריבועי.", "math_expression": "לא 20" },
            { "verbal_explanation": "שלב 2: נבדוק את המספר 36. נשאל את עצמנו איזה מספר כפול עצמו ייתן 36. נמצא ש-6 כפול 6 שווה בדיוק ל-36.", "math_expression": "6 × 6 = 36" },
            { "verbal_explanation": "שלב 3: מסקנה: 36 הוא המספר הריבועי מבין האפשרויות, מכיוון שהשורש שלו הוא מספר שלם (6).", "math_expression": "36" }
        ],
        "final_answer": "36",
        "options": ["20", "36", "50", "10"],
        "correctAnswer": 1
    },
    {
        "id": 58,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "חשבו את הביטוי שמייצג את 'שלשת פיתגורס': <strong> √(3² + 4²) </strong>",
        "hint": "אל תיפלו למלכודת! אי אפשר 'לבטל' את השורש עם החזקות כשיש ביניהן סימן חיבור. חשבו את החזקות, חברו אותן, ורק בסוף הוציאו שורש לתוצאה הכוללת.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב קודם את החזקות שנמצאות מתחת לשורש. 3 בריבוע זה 9, ו-4 בריבוע זה 16.", "math_expression": "√(9 + 16)" },
            { "verbal_explanation": "שלב 2: נבצע את פעולת החיבור כדי לקבל מספר אחד כולל תחת השורש.", "math_expression": "9 + 16 = 25" },
            { "verbal_explanation": "שלב 3: כעת נחשב את השורש הריבועי של 25. התוצאה היא 5 (שימו לב שהתשובה היא לא 7, כלומר לא 3+4).", "math_expression": "√25 = 5" }
        ],
        "final_answer": "5",
        "options": ["7", "5", "25", "1"],
        "correctAnswer": 1
    },
    {
        "id": 59,
        "subTopic": "שורש ריבועי",
        "difficulty": "High",
        "question_text": "פתרו את המשוואה הבאה ומצאו את ערכו של הנעלם X: <strong> √X = 8 </strong>",
        "hint": "כדי 'לחלץ' את ה-X מהשורש, עלינו לבצע פעולה הפוכה בשני אגפי המשוואה. מהי הפעולה ההפוכה לשורש ריבועי?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשוואה שואלת אותנו 'השורש של איזה מספר ייתן לנו 8?'. כדי לבודד את X, עלינו להיפטר מהשורש. נעשה זאת על ידי העלאת שני אגפי המשוואה בריבוע.", "math_expression": "(√X)² = 8²" },
            { "verbal_explanation": "שלב 2: באגף שמאל, החזקה השנייה מבטלת את השורש ואנו נשארים עם X נקי. באגף ימין עלינו לחשב כמה זה 8 בריבוע.", "math_expression": "X = 8 × 8" },
            { "verbal_explanation": "שלב 3: נחשב את המכפלה כדי למצוא את ערכו המדויק של הנעלם.", "math_expression": "X = 64" }
        ],
        "final_answer": "64",
        "options": ["4", "16", "64", "8"],
        "correctAnswer": 2
    },
    {
        "id": 60,
        "subTopic": "שורש ריבועי",
        "difficulty": "Medium",
        "question_text": "חשבו את השורש הריבועי של מספר גדול: <strong> √400 </strong>",
        "hint": "כדי לפתור זאת בקלות, התעלמו לרגע מהאפסים. מה השורש של 4? אחר כך הוסיפו למספר שקיבלתם אפס אחד בלבד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר מוציאים שורש למאות שלמות, ניתן לפשט את הבעיה. נמצא קודם את השורש של המספר המוביל, שהוא 4. השורש שלו הוא 2.", "math_expression": "√4 = 2" },
            { "verbal_explanation": "שלב 2: כל זוג אפסים בתוך השורש (כמו ה-00 ב-400) הופך לאפס בודד מחוץ לשורש. לכן נוסיף 0 אחד למספר 2 שקיבלנו.", "math_expression": "2 → 20" },
            { "verbal_explanation": "שלב 3: נוודא את התשובה על ידי הכפלתה בעצמה: 20 כפול 20 הם אכן 400. התשובה נכונה.", "math_expression": "20 × 20 = 400" }
        ],
        "final_answer": "20",
        "options": ["20", "40", "100", "200"],
        "correctAnswer": 0
    }
];