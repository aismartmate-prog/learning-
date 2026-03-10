const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: זוויות צמודות (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "זוויות צמודות",
        "difficulty": "Low",
        "question_text": "לפניכם שני ישרים היוצרים זוויות צמודות. זווית אחת גודלה 130°. מהו גודלה של <strong>הזווית השנייה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><line x1='20' y1='60' x2='180' y2='60' stroke='#1e293b' stroke-width='3'/><line x1='100' y1='60' x2='140' y2='20' stroke='#1e293b' stroke-width='3'/><text x='70' y='55' font-family='Heebo' font-size='14'>130°</text><text x='130' y='55' font-family='Heebo' font-size='16' fill='red' font-weight='bold'>?</text></svg></div>",
        "hint": "היזכרו שזוויות צמודות משלימות יחד לקו ישר, שזה בדיוק 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הנעלמת שאנו מחפשים כ-X. מכיוון שהזוויות 'נשענות' על קו ישר אחד, הסכום של שתיהן יחד חייב להיות 180.", "math_expression": "X + 130 = 180" },
            { "verbal_explanation": "שלב 2: כדי לגלות את X, עלינו לבודד אותו. נבצע פעולה הפוכה לחיבור: נחסיר 130 מהסך הכל (180).", "math_expression": "X = 180 - 130" },
            { "verbal_explanation": "שלב 3: נחשב את ההפרש ונקבל את גודל הזווית השנייה.", "math_expression": "50°" }
        ],
        "final_answer": "50°",
        "options": ["40°", "50°", "60°", "130°"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "subTopic": "זוויות צמודות",
        "difficulty": "Medium",
        "question_text": "שתי זוויות צמודות מסומנות בביטויים האלגבריים: <strong>X</strong> ו- <strong>X + 60</strong>. מצאו את הערך של X.<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='80'><line x1='20' y1='60' x2='180' y2='60' stroke='#1e293b' stroke-width='3'/><line x1='100' y1='60' x2='70' y2='20' stroke='#1e293b' stroke-width='3'/><text x='65' y='55' font-family='Heebo' font-size='14' font-weight='bold'>X</text><text x='115' y='55' font-family='Heebo' font-size='14' font-weight='bold'>X + 60</text></svg></div>",
        "hint": "חברו את שני הביטויים והשוו אותם ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נשתמש בחוק הזוויות הצמודות ונבנה משוואה: נחבר את הזווית הראשונה (X) עם הזווית השנייה (X+60) ונשווה ל-180.", "math_expression": "X + (X + 60) = 180" },
            { "verbal_explanation": "שלב 2: נכנס איברים דומים. נחבר את האיקסים יחד (X ועוד X שווה 2X).", "math_expression": "2X + 60 = 180" },
            { "verbal_explanation": "שלב 3: נעביר את המספר 60 לצד השני על ידי חיסורו מה-180.", "math_expression": "2X = 120" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 כדי למצוא את הערך של X בודד.", "math_expression": "X = 60" }
        ],
        "final_answer": "60",
        "options": ["40", "60", "70", "120"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "היחס בין שתי זוויות צמודות הוא <strong>1:4</strong>. מהו גודלה של הזווית הגדולה מביניהן?",
        "hint": "חלקו את ה-180 מעלות למספר 'חלקים' שווה לסכום חלקי היחס (1+4).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את יחידת היחס הבסיסית כ-X. לכן, הזווית הקטנה תהיה X והזווית הגדולה תהיה 4X. סכומן 180.", "math_expression": "X + 4X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את כל ה'חלקים' (האיקסים). קיבלנו ש-5 חלקים שווים ל-180 מעלות.", "math_expression": "5X = 180" },
            { "verbal_explanation": "שלב 3: נחלק 180 ב-5 כדי לדעת כמה שווה חלק אחד (הזווית הקטנה).", "math_expression": "X = 36°" },
            { "verbal_explanation": "שלב 4: כעת נמצא את הזווית הגדולה שהיא 4 פעמים X.", "math_expression": "4 × 36 = 144°" }
        ],
        "final_answer": "144°",
        "options": ["36°", "72°", "144°", "150°"],
        "correctAnswer": 2
    },
    {
        "id": 4,
        "subTopic": "זוויות צמודות",
        "difficulty": "Medium",
        "question_text": "זווית אחת גדולה ב-20° מהזווית הצמודה לה. מהו גודלה של <strong>הזווית הקטנה</strong>?",
        "hint": "סמנו את הזווית הקטנה ב-X והגדולה ב- (X + 20).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. מכיוון שהזווית השנייה גדולה ממנה ב-20, נרשום אותה כ-X+20. יחד הן משלימות ל-180.", "math_expression": "X + (X + 20) = 180" },
            { "verbal_explanation": "שלב 2: נסדר את המשוואה על ידי חיבור הנעלמים.", "math_expression": "2X + 20 = 180" },
            { "verbal_explanation": "שלב 3: נוריד 20 מ-180 כדי לבודד את ה-2X.", "math_expression": "2X = 160" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 ונקבל את ערכה של הזווית הקטנה.", "math_expression": "X = 80°" }
        ],
        "final_answer": "80°",
        "options": ["80°", "100°", "70°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 5,
        "subTopic": "זוויות צמודות",
        "difficulty": "Low",
        "question_text": "האם שתי זוויות חדות (קטנות מ-90°) יכולות להיות <strong>זוויות צמודות</strong>?",
        "hint": "חשבו: מהו הסכום המקסימלי האפשרי של שתי זוויות שכל אחת מהן קטנה מ-90?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על שתי הזוויות הכי גדולות שיכולות להיות חדות, למשל 89 מעלות כל אחת. נבדוק את הסכום שלהן.", "math_expression": "89 + 89 = 178" },
            { "verbal_explanation": "שלב 2: נשווה ל-180. מכיוון שסכום של שתי זוויות חדות יהיה תמיד קטן מ-180, הן לא יכולות ליצור יחד קו ישר.", "math_expression": "178 < 180" },
            { "verbal_explanation": "שלב 3: לכן, המסקנה היא שהדבר בלתי אפשרי.", "math_expression": "לא ייתכן" }
        ],
        "final_answer": "לא, כי סכומן תמיד קטן מ-180°",
        "options": ["כן", "לא, כי סכומן תמיד קטן מ-180°", "כן, אם הן שוות", "רק במשולש"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "נתונות שלוש זוויות על קו ישר אחד. הזווית האמצעית היא 90°. שתי הזוויות הקיצוניות <strong>שוות זו לזו</strong>. מהו גודל כל אחת מהן?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='20' y1='80' x2='180' y2='80' stroke='#1e293b' stroke-width='3'/><line x1='100' y1='80' x2='100' y2='20' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='80' x2='60' y2='40' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='80' x2='140' y2='40' stroke='#1e293b' stroke-width='2'/><text x='100' y='50' font-family='Heebo' font-size='12' text-anchor='middle'>90°</text><text x='55' y='75' font-family='Heebo' font-size='14'>X</text><text x='140' y='75' font-family='Heebo' font-size='14'>X</text></svg></div>",
        "hint": "הסכום של שלוש הזוויות יחד הוא 180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר כל אחת מהזוויות השוות כ-X. נבנה משוואה של כל חלקי הקו הישר.", "math_expression": "X + 90 + X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את האיקסים יחד (נקבל 2X) ונשווה ל-180 פחות ה-90 שבאמצע.", "math_expression": "2X + 90 = 180 -> 2X = 90" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 כדי לגלות את גודלה של זווית אחת.", "math_expression": "X = 45°" }
        ],
        "final_answer": "45°",
        "options": ["30°", "45°", "60°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 7,
        "subTopic": "זוויות צמודות",
        "difficulty": "Medium",
        "question_text": "הפרש בין שתי זוויות צמודות הוא 40°. מצאו את גודלה של <strong>הזווית הגדולה</strong>.",
        "hint": "נסו לסמן את הקטנה ב-X ואת הגדולה ב- (X + 40).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. מכיוון שההפרש הוא 40, הזווית הגדולה תהיה X+40. יחד הן משלימות ל-180.", "math_expression": "X + (X + 40) = 180" },
            { "verbal_explanation": "שלב 2: נצמצם את המשוואה ל-2X ועוד 40.", "math_expression": "2X + 40 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 40 מהסך הכל. נקבל שפעמיים הזווית הקטנה שוות ל-140.", "math_expression": "2X = 140 -> X = 70°" },
            { "verbal_explanation": "שלב 4: מצאנו את הקטנה (70), כעת נוסיף 40 כדי למצוא את הגדולה.", "math_expression": "70 + 40 = 110°" }
        ],
        "final_answer": "110°",
        "options": ["110°", "70°", "100°", "140°"],
        "correctAnswer": 0
    },
    {
        "id": 8,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "חצי מזווית אחת שווה לזווית הצמודה לה. מהו גודל <strong>הזווית הקטנה</strong>?",
        "hint": "אם חצי מזווית א' הוא זווית ב', זה אומר שזווית א' גדולה פי 2 מזווית ב'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. לפי הנתון, הזווית השנייה גדולה ממנה פי 2 (כי החצי שלה הוא X), לכן היא 2X.", "math_expression": "X + 2X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את החלקים: 3 חלקים שווים ל-180 מעלות.", "math_expression": "3X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 כדי למצוא את X (הזווית הקטנה).", "math_expression": "X = 60°" }
        ],
        "final_answer": "60°",
        "options": ["45°", "60°", "90°", "120°"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "subTopic": "זוויות צמודות",
        "difficulty": "Medium",
        "question_text": "שתי זוויות צמודות הן <strong>3X</strong> ו- <strong>2X + 30</strong>. מהו הערך של X?",
        "hint": "המשוואה היא: סכום שני הביטויים שווה ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחבר את שני הביטויים האלגבריים המייצגים את הזוויות ונשווה ל-180.", "math_expression": "3X + (2X + 30) = 180" },
            { "verbal_explanation": "שלב 2: נחבר את האיקסים (3 ועוד 2 הם 5).", "math_expression": "5X + 30 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 30 מ-180 ונקבל ש-5 פעמים X שווים ל-150.", "math_expression": "5X = 150" },
            { "verbal_explanation": "שלב 4: נחלק ב-5 כדי למצוא את X.", "math_expression": "X = 30" }
        ],
        "final_answer": "30",
        "options": ["25", "30", "35", "50"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "זוויות צמודות",
        "difficulty": "Low",
        "question_text": "זווית אחת גדולה פי 5 מהזווית הצמודה לה. מהו גודל <strong>הזווית הקטנה</strong>?",
        "hint": "השתמשו ב-X ו- 5X.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הקטנה כ-X ואת הגדולה כ-5X. יחד הן משלימות קו ישר.", "math_expression": "X + 5X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את חלקי היחס: 6X שווים ל-180.", "math_expression": "6X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-6 ונגלה ש-X הוא 30.", "math_expression": "X = 30°" }
        ],
        "final_answer": "30°",
        "options": ["20°", "30°", "45°", "150°"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "נתון כי זווית א' צמודה לזווית ב'. זווית ג' צמודה גם היא לזווית ב'. מה ניתן לומר על זוויות <strong>א' ו-ג'</strong>?",
        "hint": "שתיהן משלימות את אותה הזווית בדיוק ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסמן את זווית ב' ב-Y. זווית א' תהיה ההשלמה שלה ל-180.", "math_expression": "א = 180 - Y" },
            { "verbal_explanation": "שלב 2: זווית ג' צמודה לאותו Y, לכן גם היא ההשלמה שלו ל-180.", "math_expression": "ג = 180 - Y" },
            { "verbal_explanation": "שלב 3: מכיוון ששני הביטויים זהים, הזוויות חייבות להיות שוות.", "math_expression": "א = ג" }
        ],
        "final_answer": "הן שוות זו לזו",
        "options": ["סכומן 180°", "הן שוות זו לזו", "ג' גדולה מא'", "אין קשר ביניהן"],
        "correctAnswer": 1
    },
    {
        "id": 12,
        "subTopic": "זוויות צמודות",
        "difficulty": "Medium",
        "question_text": "זווית אחת היא בת 75°. מהו הגודל של <strong>הזווית הצמודה לה</strong>?",
        "hint": "חיסור פשוט מ-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הנעלם X. שתי הזוויות יחד הן קו ישר.", "math_expression": "X + 75 = 180" },
            { "verbal_explanation": "שלב 2: נחסיר 75 מ-180 כדי למצוא את ההשלמה.", "math_expression": "180 - 75 = 105" }
        ],
        "final_answer": "105°",
        "options": ["95°", "105°", "115°", "25°"],
        "correctAnswer": 1
    },
    {
        "id": 13,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "שלוש זוויות צמודות זו לזו על קו ישר. זווית א' גדולה ב-10° מזווית ב', וזווית ג' גדולה ב-10° מזווית א'. מצאו את <strong>זווית א'</strong> האמצעית.",
        "hint": "סמנו את האמצעית (א') ב-X. אז ב' תהיה X-10 וג' תהיה X+10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את זווית א' כ-X. לכן ב' היא X-10 וג' היא X+10. סכום שלוש הזוויות על הקו הוא 180.", "math_expression": "(X-10) + X + (X+10) = 180" },
            { "verbal_explanation": "שלב 2: נחבר הכל. ה-(-10) וה-(+10) מבטלים זה את זה. נשארנו עם 3X.", "math_expression": "3X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-3 ונקבל שזווית א' היא 60 מעלות.", "math_expression": "X = 60°" }
        ],
        "final_answer": "60°",
        "options": ["50°", "60°", "70°", "180°"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "זוויות צמודות",
        "difficulty": "Low",
        "question_text": "אם שתי זוויות צמודות הן ישרות (90°), מה ניתן לומר על הישרים היוצרים אותן?",
        "hint": "מתי זוויות צמודות הן בדיוק 90 מעלות כל אחת?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם שתי זוויות צמודות הן 90, פירוש הדבר שהן שוות וסכומן 180.", "math_expression": "90 + 90 = 180" },
            { "verbal_explanation": "שלב 2: מצב כזה קורה רק כאשר הישרים ניצבים (מאונכים) זה לזה.", "math_expression": "ישרים מאונכים" }
        ],
        "final_answer": "הם מאונכים זה לזה",
        "options": ["הם מקבילים", "הם מאונכים זה לזה", "הם באותו אורך", "הם לא נפגשים"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "זוויות צמודות",
        "difficulty": "High",
        "question_text": "סכום שתי זוויות צמודות קטן ב-20° מפעמיים הזווית הגדולה. אם הזווית הקטנה היא 70°, האם הנתון הגיוני?",
        "hint": "חשבו קודם מהי הזווית הגדולה (השלמה ל-180), ואז בדקו את המשוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם הקטנה היא 70, הגדולה חייבת להיות 110 (כי הן צמודות).", "math_expression": "180 - 70 = 110" },
            { "verbal_explanation": "שלב 2: נבדוק את המשפט: סכום הזוויות (180) צריך להיות קטן ב-20 מפעמיים הגדולה (2*110=220).", "math_explanation": "220 - 20 = 200" },
            { "verbal_explanation": "שלב 3: נשווה: האם 180 שווה ל-200? לא. לכן הנתון לא הגיוני עבור זווית של 70.", "math_expression": "180 \u2260 200" }
        ],
        "final_answer": "לא הגיוני",
        "options": ["כן", "לא הגיוני", "רק אם הזווית ישרה", "תלוי ב-X"],
        "correctAnswer": 1
    },

    // ==============================================================
    // --- תת נושא 2: זוויות קודקודיות (8 שאלות לחלק א') ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Low",
        "question_text": "שני ישרים נחתכים יוצרים זוג זוויות קודקודיות. אם זווית אחת היא בת 45°, מהו גודל <strong>הזווית שמולה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='150'><line x1='20' y1='20' x2='130' y2='130' stroke='#1e293b' stroke-width='2'/><line x1='130' y1='20' x2='20' y2='130' stroke='#1e293b' stroke-width='2'/><text x='75' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>45°</text><text x='75' y='110' font-family='Heebo' font-size='16' fill='red' font-weight='bold'>?</text></svg></div>",
        "hint": "זוויות קודקודיות נמצאות 'גב אל גב' והן תמיד שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סוג הזוויות. מכיוון שהן נוצרו על ידי שני ישרים נחתכים והן נמצאות זו מול זו, אלו זוויות קודקודיות.", "math_expression": "קודקודיות" },
            { "verbal_explanation": "שלב 2: לפי משפט הזוויות הקודקודיות, הן תמיד שוות בגודלן לחלוטין.", "math_expression": "זווית א = זווית ב" },
            { "verbal_explanation": "שלב 3: לכן, הזווית שמול ה-45° חייבת להיות גם היא 45°.", "math_expression": "45°" }
        ],
        "final_answer": "45°",
        "options": ["45°", "135°", "90°", "180°"],
        "correctAnswer": 0
    },
    {
        "id": 17,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Medium",
        "question_text": "שני ישרים נחתכים יוצרים זוויות. אם זווית אחת היא 120°, מהו גודל <strong>הזווית הצמודה לה</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='150' height='150'><line x1='10' y1='75' x2='140' y2='75' stroke='#1e293b' stroke-width='2'/><line x1='40' y1='130' x2='110' y2='20' stroke='#1e293b' stroke-width='2'/><text x='100' y='70' font-family='Heebo' font-size='14'>120°</text><text x='65' y='70' font-family='Heebo' font-size='16' fill='red' font-weight='bold'>?</text></svg></div>",
        "hint": "שימו לב: לא ביקשו את הזווית ממול (הקודקודית), אלא את זו שיושבת לידה על אותו קו ישר.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית המבוקשת כ-X. נשים לב שהיא והזווית של ה-120° יוצרות יחד חצי סיבוב (קו ישר).", "math_expression": "צמודות" },
            { "verbal_explanation": "שלב 2: סכום זוויות צמודות הוא תמיד 180 מעלות.", "math_expression": "X + 120 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 120 מ-180 כדי למצוא את הזווית המבוקשת.", "math_expression": "60°" }
        ],
        "final_answer": "60°",
        "options": ["120°", "60°", "30°", "180°"],
        "correctAnswer": 1
    },
    {
        "id": 18,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "שתי זוויות קודקודיות מבוטאות כ- <strong>2X + 10</strong> ו- <strong>X + 40</strong>. מצאו את גודל הזווית.",
        "hint": "השוו בין שני הביטויים כי זוויות קודקודיות תמיד שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה המבוססת על השוויון בין זוויות קודקודיות.", "math_expression": "2X + 10 = X + 40" },
            { "verbal_explanation": "שלב 2: נבודד את X. נחסיר X משני האגפים ונקבל X ועוד 10 שווה 40.", "math_expression": "X + 10 = 40" },
            { "verbal_explanation": "שלב 3: נחסיר 10 ונגלה ש-X שווה ל-30.", "math_expression": "X = 30" },
            { "verbal_explanation": "שלב 4: כדי למצוא את גודל הזווית עצמה, נציב את ה-30 באחד הביטויים (למשל: 30+40).", "math_expression": "70°" }
        ],
        "final_answer": "70°",
        "options": ["30°", "40°", "70°", "110°"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Medium",
        "question_text": "סכומן של שתי זוויות קודקודיות הוא 160°. מהו גודל <strong>הזווית הצמודה</strong> לכל אחת מהן?",
        "hint": "מצאו קודם כמה שווה זווית קודקודית אחת (הן שוות!).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכיוון ששתי הזוויות הקודקודיות שוות, נחלק את הסכום שלהן ב-2 כדי למצוא אחת מהן.", "math_expression": "160 ÷ 2 = 80°" },
            { "verbal_explanation": "שלב 2: הזווית המבוקשת היא הצמודה ל-80°. צמודות משלימות ל-180.", "math_expression": "180 - 80 = 100°" }
        ],
        "final_answer": "100°",
        "options": ["80°", "100°", "160°", "20°"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "בחיתוך שני ישרים נוצרו 4 זוויות. סכום שלוש מהן הוא 300°. מה גודלה של <strong>הזווית הרביעית</strong>?",
        "hint": "סכום כל 4 הזוויות סביב נקודת החיתוך הוא סיבוב שלם (360 מעלות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזכור שארבע הזוויות יחד יוצרות מעגל שלם סביב הנקודה.", "math_expression": "360°" },
            { "verbal_explanation": "שלב 2: נחסיר את סכום שלוש הזוויות הידועות מהסך הכל.", "math_expression": "360 - 300 = 60°" }
        ],
        "final_answer": "60°",
        "options": ["30°", "60°", "90°", "120°"],
        "correctAnswer": 1
    },
    {
        "id": 21,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Low",
        "question_text": "אם זווית אחת בחיתוך ישרים היא ישרה (90°), מה ניתן לומר על <strong>כל שאר הזוויות</strong>?",
        "hint": "השתמשו בחוקי קודקודיות וצמודות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזווית הקודקודית (ממול) שווה לה, לכן גם היא 90.", "math_expression": "90°" },
            { "verbal_explanation": "שלב 2: הזוויות הצמודות (ליד) משלימות ל-180, לכן גם הן 180 פחות 90.", "math_expression": "90°, 90°" },
            { "verbal_explanation": "שלב 3: המסקנה היא שכל 4 הזוויות יהיו ישרות.", "math_expression": "כולן 90°" }
        ],
        "final_answer": "כולן יהיו בנות 90°",
        "options": ["רק אחת נוספת תהיה 90°", "כולן יהיו בנות 90°", "השאר יהיו בנות 180°", "לא ניתן לדעת"],
        "correctAnswer": 1
    },
    {
        "id": 22,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Medium",
        "question_text": "הפרש בין שתי זוויות קודקודיות הוא תמיד:",
        "hint": "זכרו את התכונה הכי חשובה של זוויות קודקודיות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זוויות קודקודיות הן תמיד שוות זו לזו בדיוק.", "math_expression": "A = B" },
            { "verbal_explanation": "שלב 2: הפרש בין שני דברים שווים הוא תמיד אפס.", "math_expression": "A - B = 0" }
        ],
        "final_answer": "0",
        "options": ["0", "90", "180", "משתנה"],
        "correctAnswer": 0
    },
    {
        "id": 23,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "אחת מתוך 4 זוויות בחיתוך ישרים קטנה פי 2 מהזווית הצמודה לה. מהו גודל <strong>הזווית הקודקודית הקטנה</strong>?",
        "hint": "סמנו את הקטנה ב-X והצמודה לה (הגדולה) ב- 2X.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. הזווית שלידה גדולה פי 2, לכן היא 2X. מכיוון שהן צמודות, סכומן 180.", "math_expression": "X + 2X = 180" },
            { "verbal_explanation": "שלב 2: 3 חלקים שווים ל-180. נמצא ש-X שווה ל-60.", "math_expression": "3X = 180 -> X = 60°" },
            { "verbal_explanation": "שלב 3: מכיוון שביקשו את הקודקודית לקטנה, היא פשוט שווה לה.", "math_expression": "60°" }
        ],
        "final_answer": "60°",
        "options": ["30°", "60°", "90°", "120°"],
        "correctAnswer": 1
    },,
    // ==============================================================
    // --- המשך תת נושא 2: זוויות קודקודיות (שאלות 24-30) ---
    // ==============================================================
    {
        "id": 24,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "בין שני ישרים נחתכים, זווית אחת היא 2X והזווית הקודקודית לה היא X + 50. מהו <strong>גודל הזווית</strong> במעלות?<br><div style='text-align:center; margin:15px 0;'><svg width='160' height='160'><line x1='20' y1='20' x2='140' y2='140' stroke='#1e293b' stroke-width='2'/><line x1='140' y1='20' x2='20' y2='140' stroke='#1e293b' stroke-width='2'/><text x='80' y='50' font-family='Heebo' font-size='14' text-anchor='middle'>2X</text><text x='80' y='120' font-family='Heebo' font-size='14' text-anchor='middle'>X + 50</text></svg></div>",
        "hint": "השתמשו בכלל שזוויות קודקודיות שוות זו לזו כדי לבנות משוואה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה שהזוויות הן קודקודיות (נמצאות זו מול זו בצומת). הכלל קובע שהן חייבות להיות שוות בגודלן, לכן נבנה משוואה שבה נשווה בין שני הביטויים.", "math_expression": "2X = X + 50" },
            { "verbal_explanation": "שלב 2: נבודד את X. נחסיר X משני אגפי המשוואה (נזיז את ה-X לצד שמאל).", "math_expression": "2X - X = 50" },
            { "verbal_explanation": "שלב 3: קיבלנו שערכו של X הוא 50. כעת נציב אותו באחד הביטויים כדי למצוא את גודל הזווית עצמה.", "math_expression": "2 × 50" },
            { "verbal_explanation": "שלב 4: נחשב את התוצאה הסופית במעלות.", "math_expression": "100°" }
        ],
        "final_answer": "100°",
        "options": ["50°", "100°", "80°", "130°"],
        "correctAnswer": 1
    },
    {
        "id": 25,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Medium",
        "question_text": "סכום שתי זוויות קודקודיות הוא 130°. מהו גודלה של <strong>זווית הצמודה</strong> לאחת מהן?",
        "hint": "קודם כל מצאו כמה שווה זווית קודקודית אחת (חצי מהסכום).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר זווית קודקודית אחת כ-X. מכיוון שהן שוות, הסכום שלהן הוא פעמיים X.", "math_expression": "2X = 130" },
            { "verbal_explanation": "שלב 2: נחלק ב-2 כדי למצוא את גודלה של כל זווית קודקודית.", "math_expression": "X = 65°" },
            { "verbal_explanation": "שלב 3: כעת עלינו למצוא את הזווית הצמודה לה. אנו יודעים שזווית וצמודתה משלימות יחד ל-180 מעלות.", "math_expression": "180 - 65" },
            { "verbal_explanation": "שלב 4: נחשב את ההפרש.", "math_expression": "115°" }
        ],
        "final_answer": "115°",
        "options": ["65°", "115°", "50°", "130°"],
        "correctAnswer": 1
    },
    {
        "id": 26,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "בחיתוך שני ישרים נוצרו 4 זוויות. זווית אחת גדולה פי 5 מהזווית הצמודה לה. מהו גודלה של <strong>הזווית הקודקודית לזווית הקטנה</strong>?",
        "hint": "סמנו את הקטנה ב-X והצמודה לה ב- 5X.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. לכן הזווית הצמודה לה היא 5X. מכיוון שהן צמודות, סכומן 180.", "math_expression": "X + 5X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את החלקים: 6 פעמים X שווים ל-180.", "math_expression": "6X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-6 ונגלה שהזווית הקטנה היא בת 30 מעלות.", "math_expression": "X = 30°" },
            { "verbal_explanation": "שלב 4: מכיוון שזוויות קודקודיות שוות, הזווית שמול הקטנה היא בדיוק באותו גודל.", "math_expression": "30°" }
        ],
        "final_answer": "30°",
        "options": ["30°", "150°", "20°", "60°"],
        "correctAnswer": 0
    },
    {
        "id": 27,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "שתי זוויות קודקודיות הן שוות בגודלן. סכום שלוש מתוך ארבע הזוויות הנוצרות בחיתוך הישרים הוא 250°. מה גודל <strong>הזווית הרביעית</strong>?",
        "hint": "כל ארבע הזוויות יחד מסביב לנקודה מהוות סיבוב שלם (360 מעלות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הרביעית כ-X. אנו יודעים שבנקודת החיתוך, כל ארבע הזוויות יחד משלימות לסיבוב מלא.", "math_expression": "360°" },
            { "verbal_explanation": "שלב 2: נחסיר את הסכום של שלוש הזוויות הנתונות (250) מסך הכל (360).", "math_expression": "360 - 250" },
            { "verbal_explanation": "שלב 3: נחשב את הערך של הזווית שנותרה.", "math_expression": "110°" }
        ],
        "final_answer": "110°",
        "options": ["110°", "70°", "180°", "90°"],
        "correctAnswer": 0
    },
    {
        "id": 28,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Medium",
        "question_text": "האם ייתכן שזוג זוויות קודקודיות יהיו <strong>זוויות ישרות</strong> (90°)?",
        "hint": "אם הן קודקודיות הן שוות. אם אחת 90, השנייה גם 90. האם זה מסתדר עם שאר הזוויות?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אם שתי זוויות קודקודיות הן 90°, אז גם שתי הזוויות הצמודות להן יהיו 90° (כי 180 פחות 90 שווה 90).", "math_expression": "90° + 90° = 180°" },
            { "verbal_explanation": "שלב 2: מצב כזה קורה בדיוק כאשר שני הישרים מאונכים זה לזה (צורת פלוס או צלב).", "math_expression": "ישרים מאונכים" },
            { "verbal_explanation": "שלב 3: לכן התשובה היא חיובית.", "math_expression": "כן" }
        ],
        "final_answer": "כן, אם הישרים מאונכים זה לזה",
        "options": ["כן", "לא", "רק אם הישרים מקבילים", "רק במשולש"],
        "correctAnswer": 0
    },
    {
        "id": 29,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "High",
        "question_text": "נתון שזווית א' קודקודית לזווית ב'. זווית ג' צמודה לזווית א'. אם זווית ג' היא 140°, מה גודלה של <strong>זווית ב'</strong>?",
        "hint": "מצאו קודם את זווית א' (צמודה ל-140) ואז זכרו שהיא שווה לב'.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את זווית א'. מכיוון שהיא צמודה לזווית בת 140°, היא משלימה אותה ל-180 מעלות.", "math_expression": "180 - 140 = 40°" },
            { "verbal_explanation": "שלב 2: כעת נסתכל על זווית ב'. נאמר שהיא קודקודית לזווית א'.", "math_expression": "קודקודיות" },
            { "verbal_explanation": "שלב 3: לפי חוק הזוויות הקודקודיות, הן שוות בגודלן. לכן ב' שווה בדיוק לערך של א' שמצאנו.", "math_expression": "40°" }
        ],
        "final_answer": "40°",
        "options": ["140°", "40°", "180°", "50°"],
        "correctAnswer": 1
    },
    {
        "id": 30,
        "subTopic": "זוויות קודקודיות",
        "difficulty": "Low",
        "question_text": "איזו אות באנגלית מתארת בצורה הטובה ביותר את המבנה של <strong>זוויות קודקודיות</strong>?",
        "hint": "חשבו על צורת שני קווים שחוצים זה את זה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על האותיות שבהן שני קווים נפגשים בנקודה אחת וממשיכים לצד השני.", "math_expression": "A, F, X, Z" },
            { "verbal_explanation": "שלב 2: האות X בנויה משני ישרים נחתכים היוצרים זוויות מוליות שוות.", "math_expression": "X" }
        ],
        "final_answer": "האות X",
        "options": ["האות X", "האות F", "האות Z", "האות L"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 3: זוויות בין מקבילים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "שני ישרים מקבילים נחתכים על ידי ישר שלישי. זווית אחת היא 110°. מה גודל ה<strong>זווית המתחלפת</strong> לה?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><line x1='20' y1='30' x2='160' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='20' y1='70' x2='160' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='100' x2='120' y2='10' stroke='#b09151' stroke-width='2'/><text x='115' y='25' font-family='Heebo' font-size='12' font-weight='bold'>110°</text><text x='65' y='85' font-family='Heebo' font-size='14' fill='red' font-weight='bold'>?</text></svg></div>",
        "hint": "זוויות מתחלפות יוצרות צורת Z (או N) והן שוות זו לזו בין ישרים מקבילים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את סוג הזוויות. הן נמצאות משני עברי הישר החותך ובמיקומים שונים (אחת למעלה ואחת למטה), מה שיוצר צורת Z. אלו זוויות מתחלפות.", "math_expression": "מתחלפות" },
            { "verbal_explanation": "שלב 2: בין ישרים מקבילים, קיים חוק שקובע שזוויות מתחלפות שוות זו לזו בגודלן.", "math_expression": "זווית א = זווית ב" },
            { "verbal_explanation": "שלב 3: נסיק שהזווית המבוקשת זהה לזווית הנתונה.", "math_expression": "110°" }
        ],
        "final_answer": "110°",
        "options": ["70°", "110°", "180°", "90°"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "בין שני מקבילים, זווית אחת היא 65°. מהו גודל ה<strong>זווית החד-צדדית</strong> לה?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><line x1='20' y1='30' x2='160' y2='30' stroke='#1e293b' stroke-width='2'/><line x1='20' y1='70' x2='160' y2='70' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='100' x2='120' y2='10' stroke='#b09151' stroke-width='2'/><text x='110' y='45' font-family='Heebo' font-size='12'>65°</text><text x='85' y='65' font-family='Heebo' font-size='14' fill='red'>?</text></svg></div>",
        "hint": "זוויות חד-צדדיות יוצרות צורת C או סוגר. הסכום שלהן משלים ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הנעלמת כ-X. אלו זוויות חד-צדדיות מכיוון שהן נמצאות באותו צד של הישר החותך ושתיהן 'בתוך' המסגרת של המקבילים.", "math_expression": "חד-צדדיות" },
            { "verbal_explanation": "שלב 2: הכלל עבור ישרים מקבילים קובע שסכום זוויות חד-צדדיות פנימיות הוא תמיד 180 מעלות.", "math_expression": "X + 65 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 65 מ-180 כדי למצוא את ערכה של X.", "math_expression": "180 - 65" },
            { "verbal_explanation": "שלב 4: נחשב את התוצאה.", "math_expression": "115°" }
        ],
        "final_answer": "115°",
        "options": ["65°", "115°", "25°", "180°"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "שתי זוויות מתאימות בין ישרים מקבילים מסומנות בביטויים: <strong>4X - 20</strong> ו- <strong>2X + 30</strong>. מהו <strong>הערך של X</strong>?",
        "hint": "בין ישרים מקבילים, זוויות מתאימות שוות זו לזו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה המבוססת על השוויון בין זוויות מתאימות (הנמצאות באותו מיקום יחסי בשני הצמתים).", "math_expression": "4X - 20 = 2X + 30" },
            { "verbal_explanation": "שלב 2: נבודד את האיקסים. נחסיר 2X משני האגפים.", "math_expression": "2X - 20 = 30" },
            { "verbal_explanation": "שלב 3: נעביר את המספר 20 לצד השני על ידי הוספתו ל-30.", "math_expression": "2X = 50" },
            { "verbal_explanation": "שלב 4: נחלק ב-2 למציאת הערך של X בודד.", "math_expression": "X = 25" }
        ],
        "final_answer": "25",
        "options": ["10", "25", "30", "50"],
        "correctAnswer": 1
    },
    {
        "id": 34,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "באיזו צורה או אות באנגלית נוכל לזהות <strong>זוויות מתחלפות</strong>?",
        "hint": "חשבו על הקו שמחבר בין המקבילים ויוצר זוויות בצדדים הפוכים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדמיין את הישרים המקבילים ואת הישר שחוצה אותם.", "math_expression": "מקבילים וחותר" },
            { "verbal_explanation": "שלב 2: זוויות מתחלפות נמצאות 'בפינות' של הקו החוצה, מה שיוצר צורה הדומה מאוד לאות Z.", "math_expression": "Z shape" }
        ],
        "final_answer": "האות Z",
        "options": ["האות F", "האות Z", "האות C", "האות X"],
        "correctAnswer": 1
    },
    {
        "id": 35,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "נתונים שני ישרים מקבילים. זווית אחת היא X. הזווית החד-צדדית לה גדולה ממנה פי 3. מה גודלה של <strong>הזווית הגדולה</strong>?",
        "hint": "בנו משוואה: סכום X ו- 3X שווה ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית הקטנה כ-X. לפי הנתון, הזווית החד-צדדית לה היא 3X. סכום זוויות חד-צדדיות הוא 180.", "math_expression": "X + 3X = 180" },
            { "verbal_explanation": "שלב 2: נחבר את חלקי היחס (האיקסים). קיבלנו ש-4X שווה ל-180 מעלות.", "math_expression": "4X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-4 כדי למצוא את X (הזווית הקטנה).", "math_expression": "X = 45°" },
            { "verbal_explanation": "שלב 4: נמצא את הזווית הגדולה שהיא פי 3 מהערך שמצאנו.", "math_expression": "3 × 45 = 135°" }
        ],
        "final_answer": "135°",
        "options": ["45°", "90°", "135°", "150°"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "כמה זוויות מתוך ה-8 שנוצרות בחיתוך של שני מקבילים שוות בגודלן לזווית החדה הנתונה?",
        "hint": "זכרו שבין מקבילים יש הרבה 'העתקים' של אותה זווית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בכל צומת יש זוג זוויות קודקודיות שוות. ישנם שני צמתים (אחד בכל ישר מקביל).", "math_expression": "2 צמתים" },
            { "verbal_explanation": "שלב 2: בכל צומת יש 2 זוויות חדות ו-2 קהות (אלא אם הן כולן ישרות).", "math_expression": "2 בכל ישר" },
            { "verbal_explanation": "שלב 3: לכן בסך הכל ישנן 4 זוויות שוות לחלוטין (הזווית עצמה ועוד 3 העתקים).", "math_expression": "4" }
        ],
        "final_answer": "4",
        "options": ["2", "4", "6", "8"],
        "correctAnswer": 1
    },
    {
        "id": 37,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "בין שני מקבילים, זווית מתחלפת פנימית אחת היא 80°. מהו גודלה של <strong>הזווית המתאימה לזווית הצמודה לה</strong>?",
        "hint": "מצאו קודם את הצמודה ל-80 ואז זכרו שמתאימות הן שוות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את הזווית הצמודה לזווית הנתונה (80°). צמודות משלימות ל-180.", "math_expression": "180 - 80 = 100°" },
            { "verbal_explanation": "שלב 2: כעת נסתכל על הזווית המתאימה לזווית שמצאנו (ה-100°).", "math_expression": "מתאימות" },
            { "verbal_explanation": "שלב 3: בין ישרים מקבילים, זוויות מתאימות שוות זו לזו בדיוק. לכן התוצאה היא 100°.", "math_expression": "100°" }
        ],
        "final_answer": "100°",
        "options": ["80°", "100°", "180°", "20°"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "בשרטוט של 'קו נשבר' בין שני מקבילים (צורת חץ), הזוויות הנוצרות בפינות הן 30° ו-40°. מה גודל <strong>הזווית שבקודקוד הנשבר (השפיץ)</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='100'><line x1='20' y1='20' x2='180' y2='20' stroke='#1e293b' stroke-width='2'/><line x1='20' y1='80' x2='180' y2='80' stroke='#1e293b' stroke-width='2'/><polyline points='150,20 100,50 150,80' fill='none' stroke='#b09151' stroke-width='3'/><text x='155' y='35' font-size='11'>30°</text><text x='155' y='75' font-size='11'>40°</text><text x='85' y='55' font-size='14' fill='red'>?</text></svg></div>",
        "hint": "העבירו קו דמיוני מקביל נוסף שעובר בדיוק דרך נקודת השבירה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נדמיין קו מקביל שלישי שעובר בדיוק באמצע. הוא מחלק את הזווית הנעלמת לשני חלקים.", "math_expression": "קו עזר" },
            { "verbal_explanation": "שלב 2: החלק העליון של הזווית מתחלף עם ה-30°, ולכן הוא שווה ל-30°.", "math_expression": "30°" },
            { "verbal_explanation": "שלב 3: החלק התחתון של הזווית מתחלף עם ה-40°, ולכן הוא שווה ל-40°.", "math_expression": "40°" },
            { "verbal_explanation": "שלב 4: הזווית הכוללת היא סכום שני החלקים האלו.", "math_expression": "30 + 40 = 70°" }
        ],
        "final_answer": "70°",
        "options": ["10°", "35°", "70°", "180°"],
        "correctAnswer": 2
    },
    {
        "id": 39,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "שני ישרים מקבילים נחתכים על ידי ישר. כל אחת מ-4 הזוויות הקהות היא בת 135°. מה גודלן של <strong>הזוויות החדות</strong>?",
        "hint": "זווית חדה וקהה באותו צומת הן זוויות צמודות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הזווית החדה כ-X. היא והזווית הקהה שיושבת לידה נמצאות על קו ישר אחד.", "math_expression": "צמודות" },
            { "verbal_explanation": "שלב 2: נחסיר את הזווית הקהה מ-180 מעלות.", "math_expression": "180 - 135" },
            { "verbal_explanation": "שלב 3: נחשב את ההפרש.", "math_expression": "45°" }
        ],
        "final_answer": "45°",
        "options": ["45°", "135°", "90°", "35°"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Low",
        "question_text": "איזו אות באנגלית מזכירה את המיקום של <strong>זוויות חד-צדדיות</strong>?",
        "hint": "הן נמצאות 'כלואות' בתוך המסגרת של המקבילים מאותו צד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשוב על אות שבה שני הקווים המקבילים נסגרים על ידי קו שלישי מאותו צד.", "math_expression": "אותיות" },
            { "verbal_explanation": "שלב 2: האות C (או סוגר מרובע) ממחישה את המבנה של זוויות חד-צדדיות.", "math_expression": "C" }
        ],
        "final_answer": "האות C",
        "options": ["F", "Z", "X", "C"],
        "correctAnswer": 3
    },
    {
        "id": 41,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "נתון שזווית א' וזווית ב' הן זוויות מתחלפות חיצוניות בין ישרים מקבילים. גודל זווית א' הוא 5X - 10 וגודל זווית ב' הוא 3X + 20. מצאו את <strong>גודל זווית א'</strong>.",
        "hint": "מתחלפות (חיצוניות או פנימיות) הן תמיד שוות בין מקבילים. השוו ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה שבה נשווה בין שני הביטויים (חוק מתחלפות).", "math_expression": "5X - 10 = 3X + 20" },
            { "verbal_explanation": "שלב 2: נחסיר 3X משני האגפים.", "math_expression": "2X - 10 = 20" },
            { "verbal_explanation": "שלב 3: נוסיף 10 לשני האגפים.", "math_expression": "2X = 30 -> X = 15" },
            { "verbal_explanation": "שלב 4: נמצא את זווית א' על ידי הצבת 15 בביטוי הראשון.", "math_expression": "5 × 15 - 10" },
            { "verbal_explanation": "שלב 5: נחשב את התוצאה הסופית.", "math_expression": "65°" }
        ],
        "final_answer": "65°",
        "options": ["15°", "65°", "35°", "115°"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "שתי זוויות חד-צדדיות בין מקבילים הן שוות בגודלן. מהו <strong>גודל כל אחת מהן</strong>?",
        "hint": "אם הן שוות וסכומן 180, מה הערך של כל אחת?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר כל זווית כ-X. סכומן הוא 180 מעלות.", "math_expression": "X + X = 180" },
            { "verbal_explanation": "שלב 2: פעמיים X שווים ל-180.", "math_expression": "2X = 180" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 ונקבל שהן זוויות ישרות.", "math_expression": "90°" }
        ],
        "final_answer": "90°",
        "options": ["45°", "90°", "180°", "60°"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "בין שני מקבילים, אחת הזוויות המתאימות היא בת 70°. מה גודלה של הזווית ה<strong>צמודה לזווית המתחלפת</strong> לה?",
        "hint": "זה נשמע מורכב, אבל נסו לעקוב אחרי 'העתקת' הזווית.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הזווית המתחלפת. מכיוון שהיא מתחלפת לזווית הנתונה (או לקודקודית שלה), ובין מקבילים הן שוות, גודלה הוא 70°.", "math_expression": "70°" },
            { "verbal_explanation": "שלב 2: כעת נמצא את הזווית הצמודה לזווית של ה-70°.", "math_expression": "צמודות" },
            { "verbal_explanation": "שלב 3: צמודות משלימות ל-180. לכן נחסיר 70 מ-180.", "math_expression": "110°" }
        ],
        "final_answer": "110°",
        "options": ["70°", "110°", "180°", "20°"],
        "correctAnswer": 1
    },
    {
        "id": 44,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "Medium",
        "question_text": "מה התנאי שחייב להתקיים כדי ששני ישרים ייחשבו ל<strong>מקבילים</strong> (על פי המשפט ההפוך)?",
        "hint": "חשבו מה נבדוק אם נראה שתי זוויות על ישרים שונים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי להוכיח שהקווים לעולם לא ייפגשו (מקבילים), עלינו למצוא זוג זוויות המקיימות את אחד החוקים הגאומטריים.", "math_expression": "הוכחה" },
            { "verbal_explanation": "שלב 2: אם נגלה שזוג זוויות מתאימות (או מתחלפות) הן שוות בגודלן, הרי שהישרים מקבילים.", "math_expression": "מתאימות שוות" }
        ],
        "final_answer": "אם הזוויות המתאימות (או המתחלפות) שוות זו לזו",
        "options": ["אם הן סכומן 90", "אם הזוויות המתאימות (או המתחלפות) שוות זו לזו", "אם הן צמודות", "אם הן קודקודיות"],
        "correctAnswer": 1
    },
    {
        "id": 45,
        "subTopic": "זוויות בין מקבילים",
        "difficulty": "High",
        "question_text": "שתי זוויות חד-צדדיות בין מקבילים הן <strong>2X + 10</strong> ו- <strong>3X + 20</strong>. מהו גודל הזווית הגדולה?",
        "hint": "חברו את הביטויים והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה משוואה שבה סכום שני הביטויים הוא 180 (חוק חד-צדדיות).", "math_expression": "(2X + 10) + (3X + 20) = 180" },
            { "verbal_explanation": "שלב 2: נחבר את האיקסים ואת המספרים. קיבלנו 5X ועוד 30 שווה ל-180.", "math_expression": "5X + 30 = 180" },
            { "verbal_explanation": "שלב 3: נחסיר 30. קיבלנו ש-5X שווים ל-150. לכן X שווה ל-30.", "math_expression": "X = 30" },
            { "verbal_explanation": "שלב 4: נציב X=30 בביטוי הגדול יותר (3X+20) כדי למצוא את המעלות.", "math_expression": "3 × 30 + 20 = 110°" }
        ],
        "final_answer": "110°",
        "options": ["70°", "110°", "30°", "150°"],
        "correctAnswer": 1
    }
];