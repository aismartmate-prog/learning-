const questionsDB = [
    // ==============================================================
    // --- תת נושא 1: בעיות תנועה (15 שאלות) ---
    // ==============================================================
    {
        "id": 1,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "מכונית נסעה במהירות קבועה של <strong>80 קמ\"ש</strong> במשך <strong>3 שעות</strong>. מהו <strong>המרחק</strong> שעברה המכונית?<br><div style='text-align:center; margin:15px 0;'><svg width='250' height='60'><line x1='20' y1='40' x2='230' y2='40' stroke='#1e293b' stroke-width='4' stroke-dasharray='10,5'/><rect x='30' y='15' width='40' height='20' rx='5' fill='#b09151'/><circle cx='40' cy='35' r='5' fill='#1e293b'/><circle cx='60' cy='35' r='5' fill='#1e293b'/><path d='M80,25 L120,25' stroke='#b09151' stroke-width='2' marker-end='url(#arrow)'/><text x='100' y='15' font-size='12' text-anchor='middle'>V = 80</text><text x='125' y='55' font-size='12' text-anchor='middle'>T = 3 שעות</text></svg></div>",
        "hint": "הנוסחה הבסיסית בבעיות תנועה היא: מרחק (S) = מהירות (V) כפול זמן (T).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנתונים בבעיה. המהירות (v) היא 80 קמ\"ש. הזמן (t) הוא 3 שעות.", "math_expression": "v = 80 , t = 3" },
            { "verbal_explanation": "שלב 2: נשתמש בנוסחת הדרך: הדרך שווה למהירות כפול הזמן.", "math_expression": "s = v * t" },
            { "verbal_explanation": "שלב 3: נציב את הנתונים ונחשב: 80 כפול 3 שווה 240.", "math_expression": "s = 80 * 3 = 240" }
        ],
        "final_answer": "240 ק\"מ",
        "options": ["240 ק\"מ", "83 ק\"מ", "160 ק\"מ", "320 ק\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "רכבת עברה מרחק של <strong>300 ק\"מ</strong> במהירות קבועה של <strong>100 קמ\"ש</strong>. כמה <strong>זמן</strong> נמשכה הנסיעה?",
        "hint": "אם נסדר את הנוסחה מחדש, הזמן שווה למרחק לחלק למהירות (T = S / V).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנתונים שלנו הם הדרך (s = 300) והמהירות (v = 100). אנו מחפשים את הזמן (t).", "math_expression": "s = 300 , v = 100" },
            { "verbal_explanation": "שלב 2: כדי למצוא זמן, מחלקים את סך כל הדרך במהירות הנסיעה.", "math_expression": "t = s / v" },
            { "verbal_explanation": "שלב 3: נציב: 300 לחלק ל-100 שווה ל-3. הנסיעה ארכה 3 שעות.", "math_expression": "t = 300 / 100 = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["4 שעות", "2 שעות", "3 שעות", "5 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 3,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "רוכב אופניים עבר <strong>60 ק\"מ</strong> במשך <strong>4 שעות</strong>. מה הייתה <strong>מהירות</strong> הרכיבה שלו קמ\"ש?",
        "hint": "מהירות היא המרחק שעוברים בשעה אחת. חלקו את המרחק הכולל במספר השעות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנתונים: הדרך (s) היא 60, הזמן (t) הוא 4. מחפשים מהירות (v).", "math_expression": "s = 60 , t = 4" },
            { "verbal_explanation": "שלב 2: כדי למצוא מהירות, נחלק את הדרך בזמן.", "math_expression": "v = s / t" },
            { "verbal_explanation": "שלב 3: נציב: 60 לחלק ל-4 שווה ל-15. המהירות היא 15 קמ\"ש.", "math_expression": "v = 60 / 4 = 15" }
        ],
        "final_answer": "15 קמ\"ש",
        "options": ["20 קמ\"ש", "15 קמ\"ש", "12 קמ\"ש", "24 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "שתי מכוניות יצאו <strong>באותו זמן</strong> משתי ערים שונות ונסעו <strong>זו לקראת זו</strong>. מכונית א' נסעה במהירות <strong>70 קמ\"ש</strong>, ומכונית ב' במהירות <strong>80 קמ\"ש</strong>. הן נפגשו כעבור <strong>שעתיים</strong>. מהו <strong>המרחק בין שתי הערים</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='280' height='50'><path d='M20,30 L130,30' stroke='#1e293b' stroke-width='2' marker-end='url(#arrow)'/><text x='70' y='20' font-size='12'>א' (70 קמ\"ש)</text><path d='M260,30 L150,30' stroke='#1e293b' stroke-width='2' marker-end='url(#arrow)'/><text x='210' y='20' font-size='12'>ב' (80 קמ\"ש)</text><circle cx='140' cy='30' r='4' fill='red'/><text x='140' y='15' font-size='10' fill='red'>פגישה</text></svg></div>",
        "hint": "בבעיית פגישה, המרחק הכולל שווה לסכום המרחקים שעברה כל מכונית בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הדרך שעברה מכונית א'. היא נסעה שעתיים במהירות 70, לכן עברה 140 ק\"מ.", "math_expression": "S1 = 70 * 2 = 140" },
            { "verbal_explanation": "שלב 2: נחשב את הדרך שעברה מכונית ב'. היא נסעה שעתיים במהירות 80, לכן עברה 160 ק\"מ.", "math_expression": "S2 = 80 * 2 = 160" },
            { "verbal_explanation": "שלב 3: כיוון שהן יצאו משני קצות המסלול ונפגשו, המרחק בין הערים הוא סכום הדרכים שעברו יחד.", "math_expression": "140 + 160 = 300" }
        ],
        "final_answer": "300 ק\"מ",
        "options": ["150 ק\"מ", "300 ק\"מ", "280 ק\"מ", "320 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "שני הולכי רגל יצאו בו זמנית מנקודה אחת וצעדו <strong>בכיוונים מנוגדים</strong>. הראשון הלך במהירות <strong>4 קמ\"ש</strong> והשני במהירות <strong>5 קמ\"ש</strong>. כעבור כמה זמן יהיה המרחק ביניהם <strong>27 ק\"מ</strong>?",
        "hint": "בכל שעה שעוברת, הם מתרחקים זה מזה ב-9 ק\"מ (4+5). בנו משוואה: הזמן (t) כפול המהירות המשותפת שווה למרחק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר שני גופים נעים בכיוונים מנוגדים, מהירות ההתרחקות המשותפת שלהם היא סכום המהירויות.", "math_expression": "V = 4 + 5 = 9" },
            { "verbal_explanation": "שלב 2: הם מתרחקים ב-9 ק\"מ כל שעה. המרחק הכולל הנדרש הוא 27 ק\"מ. נרכיב משוואה למציאת הזמן (t).", "math_expression": "9 * t = 27" },
            { "verbal_explanation": "שלב 3: נחלק ב-9 כדי למצוא את הזמן.", "math_expression": "t = 27 / 9 = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["4 שעות", "2.5 שעות", "3 שעות", "5 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 6,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "משאית יצאה מתל אביב לאילת במהירות <strong>60 קמ\"ש</strong>. <strong>שעה אחת לאחר מכן</strong>, יצאה מאותו מקום מכונית פרטית באותו כיוון במהירות <strong>80 קמ\"ש</strong>. כעבור כמה שעות מרגע יציאתה <strong>תשיג</strong> המכונית את המשאית?",
        "hint": "כשהם נפגשים, הם עברו בדיוק את אותו המרחק. סמנו ב-t את זמן הנסיעה של המכונית. המשאית נסעה שעה אחת יותר, כלומר (t+1).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את t כזמן הנסיעה של המכונית שהוקמה אחרונה. הדרך שלה תהיה 80t.", "math_expression": "S מכונית = 80t" },
            { "verbal_explanation": "שלב 2: המשאית נסעה שעה אחת יותר, לכן הזמן שלה הוא (t+1). הדרך שלה תהיה 60 כפול הזמן הזה.", "math_expression": "S משאית = 60(t + 1)" },
            { "verbal_explanation": "שלב 3: בנקודת המפגש/ההשגה, הדרכים שוות. נשווה בין הביטויים ונפתח סוגריים.", "math_expression": "80t = 60t + 60" },
            { "verbal_explanation": "שלב 4: נעביר את 60t אגף (בחיסור) ונקבל 20t = 60. נחלק ב-20 ונקבל את t.", "math_expression": "20t = 60 \u2192 t = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["4 שעות", "2 שעות", "3 שעות", "1.5 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רוכב אופנוע נסע מעיר א' לעיר ב' במהירות <strong>40 קמ\"ש</strong>. בדרכו חזרה, בגלל רוח נגדית, נסע במהירות <strong>30 קמ\"ש</strong>. זמן הנסיעה הלוך וחזור <strong>יחד</strong> היה <strong>7 שעות</strong>. מהו <strong>המרחק</strong> בין שתי הערים?",
        "hint": "המרחק שווה בשני הכיוונים (נסמנו ב-S). הזמן הלוך (S/40) ועוד הזמן חזור (S/30) שווים יחד ל-7 שעות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הדרך בין הערים כ-x. הזמן להלוך הוא הדרך חלקי המהירות: x/40.", "math_expression": "T1 = x / 40" },
            { "verbal_explanation": "שלב 2: הזמן לחזור הוא הדרך חלקי מהירות החזרה: x/30.", "math_expression": "T2 = x / 30" },
            { "verbal_explanation": "שלב 3: סכום הזמנים הוא 7. נחבר וניצור משוואה.", "math_expression": "x/40 + x/30 = 7" },
            { "verbal_explanation": "שלב 4: נכפיל את כל המשוואה במכנה משותף 120. נקבל: 3x + 4x = 840. כלומר 7x = 840. נחלק ב-7.", "math_expression": "x = 120" }
        ],
        "final_answer": "120 ק\"מ",
        "options": ["150 ק\"מ", "120 ק\"מ", "100 ק\"מ", "140 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "רכבת נוסעים עוברת מרחק מסוים ב-<strong>4 שעות</strong>. רכבת משא עוברת את <strong>אותו המרחק</strong> ב-<strong>6 שעות</strong>. מהירות רכבת הנוסעים <strong>גדולה ב-30 קמ\"ש</strong> ממהירות רכבת המשא. מהי מהירות רכבת המשא?",
        "hint": "הגדירו את מהירות רכבת המשא כ-v. מהירות הנוסעים היא v+30. הדרך שווה, לכן: 6 כפול v שווה ל-4 כפול (v+30).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסמן את מהירות רכבת המשא באות v. מהירות הנוסעים היא v+30.", "math_expression": "משא = v , נוסעים = v + 30" },
            { "verbal_explanation": "שלב 2: נבטא את הדרך של כל רכבת. דרך המשא היא 6v. דרך הנוסעים היא 4 כפול (v+30).", "math_expression": "S1 = 6v , S2 = 4(v + 30)" },
            { "verbal_explanation": "שלב 3: מכיוון שהמרחק זהה, נשווה בין הדרכים ונפתח סוגריים.", "math_expression": "6v = 4v + 120" },
            { "verbal_explanation": "שלב 4: נעביר את 4v אגף ונקבל 2v = 120. נחלק ב-2.", "math_expression": "v = 60" }
        ],
        "final_answer": "60 קמ\"ש",
        "options": ["50 קמ\"ש", "90 קמ\"ש", "60 קמ\"ש", "80 קמ\"ש"],
        "correctAnswer": 2
    },
    {
        "id": 9,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "סירה שטה בנהר מנקודה א' לנקודה ב' <strong>עם כיוון הזרם</strong> במשך <strong>שעתיים</strong>. הדרך חזרה, <strong>נגד כיוון הזרם</strong>, לקחה לה <strong>3 שעות</strong>. מהירות זרם הנהר היא <strong>2 קמ\"ש</strong>. מהי <strong>מהירות הסירה במים עומדים</strong>?",
        "hint": "עם הזרם המהירות היא (v+2). נגד הזרם המהירות היא (v-2). הדרך שווה: 2 כפול (v+2) שווה ל-3 כפול (v-2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסמן את מהירות הסירה העצמית כ-v. בדרך הלוך הזרם עוזר לה, לכן המהירות היא v+2. הדרך היא 2 כפול (v+2).", "math_expression": "S הלוך = 2(v + 2)" },
            { "verbal_explanation": "שלב 2: בדרך חזור הזרם מפריע לה, לכן המהירות היא v-2. הדרך היא 3 כפול (v-2).", "math_expression": "S חזור = 3(v - 2)" },
            { "verbal_explanation": "שלב 3: הדרך היא אותה דרך. נשווה בין הביטויים ונפתח סוגריים.", "math_expression": "2v + 4 = 3v - 6" },
            { "verbal_explanation": "שלב 4: נעביר אגפים. נעביר את 2v ימינה ואת 6- שמאלה (יהפוך לפלוס). נקבל ש-v שווה ל-10.", "math_expression": "v = 10" }
        ],
        "final_answer": "10 קמ\"ש",
        "options": ["8 קמ\"ש", "10 קמ\"ש", "12 קמ\"ש", "14 קמ\"ש"],
        "correctAnswer": 1
    },
    {
        "id": 10,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "רן הלך ברגל מביתו לפארק במהירות <strong>5 קמ\"ש</strong> במשך <strong>חצי שעה</strong>. מהו המרחק מהבית לפארק?",
        "hint": "שימו לב ליחידות המידה! המהירות היא בקמ\"ש, לכן את הזמן יש להציב בשעות (חצי שעה = 0.5 שעות).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המהירות נתונה בקילומטרים לשעה (v=5).", "math_expression": "v = 5" },
            { "verbal_explanation": "שלב 2: הזמן הוא חצי שעה. נרשום זאת כשבר עשרוני כדי להתאים ליחידות.", "math_expression": "t = 0.5" },
            { "verbal_explanation": "שלב 3: נכפיל מהירות בזמן למציאת הדרך: 5 כפול חצי.", "math_expression": "S = 5 * 0.5 = 2.5" }
        ],
        "final_answer": "2.5 ק\"מ",
        "options": ["10 ק\"מ", "2.5 ק\"מ", "5 ק\"מ", "15 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 11,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "שני רוכבים יצאו מאותו מקום ונסעו <strong>באותו כיוון</strong>. רוכב א' נסע במהירות <strong>20 קמ\"ש</strong>. רוכב ב' נסע במהירות <strong>25 קמ\"ש</strong>. כעבור כמה זמן יהיה המרחק ביניהם <strong>15 ק\"מ</strong>?",
        "hint": "מכיוון שהם נוסעים באותו כיוון, רוכב ב' משיג את א' בקצב של 5 ק\"מ בכל שעה (25 פחות 20).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כאשר נוסעים באותו כיוון, המרחק ביניהם נוצר בגלל 'הפרש המהירויות'. נחסיר את המהירות הקטנה מהגדולה.", "math_expression": "הפרש = 25 - 20 = 5" },
            { "verbal_explanation": "שלב 2: המשמעות היא שבכל שעה נוצר פער של 5 ק\"מ. אנו רוצים פער של 15 ק\"מ.", "math_expression": "5 * t = 15" },
            { "verbal_explanation": "שלב 3: נחלק ב-5 כדי למצוא את הזמן.", "math_expression": "t = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["3 שעות", "2 שעות", "5 שעות", "4 שעות"],
        "correctAnswer": 0
    },
    {
        "id": 12,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "מרחק בין ערים הוא <strong>400 ק\"מ</strong>. מכונית א' יצאה מעיר אחת לשנייה במהירות <strong>60 קמ\"ש</strong>. <strong>שעה אחת לאחר מכן</strong>, יצאה מכונית ב' מהעיר השנייה לקראתה במהירות <strong>110 קמ\"ש</strong>. כמה שעות נסעה מכונית א' עד לנקודת המפגש?",
        "hint": "הגדירו את הזמן של א' כ-t. הזמן של ב' קטן בשעה, כלומר (t-1). סכום הדרכים הוא 400.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את t כזמן שנסעה מכונית א'. הדרך שעברה תהיה 60t.", "math_expression": "S1 = 60t" },
            { "verbal_explanation": "שלב 2: מכונית ב' יצאה באיחור של שעה, ולכן נסעה פחות זמן. הזמן שלה הוא (t-1). הדרך שלה היא 110 כפול (t-1).", "math_expression": "S2 = 110(t - 1)" },
            { "verbal_explanation": "שלב 3: הן יצאו משני קצוות ונפגשו, לכן סכום הדרכים שווה למרחק הכולל. נבנה משוואה ונפתח סוגריים.", "math_expression": "60t + 110t - 110 = 400" },
            { "verbal_explanation": "שלב 4: נכנס איברים ונעביר אגפים: 170t = 510. נחלק ב-170.", "math_expression": "t = 3" }
        ],
        "final_answer": "3 שעות",
        "options": ["4 שעות", "3.5 שעות", "3 שעות", "2 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 13,
        "subTopic": "בעיות תנועה",
        "difficulty": "Medium",
        "question_text": "מטוס עובר מרחק של <strong>1200 ק\"מ</strong> בטיסה שמתחלקת לשני חלקים שווים באורכם. בחצי הראשון טס במהירות <strong>200 קמ\"ש</strong>, ובחצי השני טס במהירות <strong>300 קמ\"ש</strong>. מהו <strong>זמן הטיסה הכולל</strong>?",
        "hint": "המרחק הכולל הוא 1200, לכן כל חצי הוא 600 ק\"מ. חשבו את הזמן לכל חצי בנפרד (דרך לחלק למהירות) וחברו אותם.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את הזמן של החצי הראשון (600 ק\"מ) על ידי חלוקת הדרך במהירות הראשונה.", "math_expression": "T1 = 600 / 200 = 3" },
            { "verbal_explanation": "שלב 2: נחשב את הזמן של החצי השני (עוד 600 ק\"מ) על ידי חלוקת הדרך במהירות השנייה.", "math_expression": "T2 = 600 / 300 = 2" },
            { "verbal_explanation": "שלב 3: נחבר את שני הזמנים לקבלת זמן הטיסה הכולל.", "math_expression": "3 + 2 = 5" }
        ],
        "final_answer": "5 שעות",
        "options": ["4.5 שעות", "5 שעות", "6 שעות", "4 שעות"],
        "correctAnswer": 1
    },
    {
        "id": 14,
        "subTopic": "בעיות תנועה",
        "difficulty": "High",
        "question_text": "תלמיד הלך לבית הספר במהירות <strong>4 קמ\"ש</strong>. אילו היה רוכב על אופניים במהירות <strong>12 קמ\"ש</strong>, היה חוסך <strong>חצי שעה (0.5 שעות)</strong> מהדרך. מהו <strong>המרחק</strong> לבית הספר?",
        "hint": "המרחק x קבוע. הזמן בהליכה (x/4) גדול מהזמן באופניים (x/12) בדיוק בחצי שעה. משוואה: x/4 - x/12 = 0.5.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבטא את זמן ההליכה כמרחק (x) חלקי מהירות ההליכה.", "math_expression": "T הליכה = x / 4" },
            { "verbal_explanation": "שלב 2: נבטא את זמן הרכיבה כמרחק חלקי מהירות הרכיבה.", "math_expression": "T אופניים = x / 12" },
            { "verbal_explanation": "שלב 3: ההפרש בין הזמנים (הזמן האיטי פחות הזמן המהיר) הוא חצי שעה.", "math_expression": "x/4 - x/12 = 0.5" },
            { "verbal_explanation": "שלב 4: נכפיל במכנה משותף 12. נקבל: 3x - x = 6. כלומר 2x = 6. נחלק ב-2.", "math_expression": "x = 3" }
        ],
        "final_answer": "3 ק\"מ",
        "options": ["4 ק\"מ", "3 ק\"מ", "2 ק\"מ", "6 ק\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 15,
        "subTopic": "בעיות תנועה",
        "difficulty": "Low",
        "question_text": "אצן רץ במהירות <strong>12 קמ\"ש</strong> למשך <strong>20 דקות</strong>. איזה מרחק הוא עבר?",
        "hint": "20 דקות אינן שוות ל-20 שעות! עליכם להמיר את הדקות לשעות (20 דקות הן שליש שעה).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נתאים את היחידות. המהירות היא בקמ\"ש (לשעה), ולכן גם הזמן חייב להיות בשעות. 20 דקות מתוך 60 הן 1/3 שעה.", "math_expression": "t = 20/60 = 1/3" },
            { "verbal_explanation": "שלב 2: נציב בנוסחת הדרך. הדרך שווה למהירות (12) כפול הזמן (שליש).", "math_expression": "S = 12 * (1/3)" },
            { "verbal_explanation": "שלב 3: 12 כפול שליש, זה כמו לחלק 12 ב-3.", "math_expression": "4" }
        ],
        "final_answer": "4 ק\"מ",
        "options": ["4 ק\"מ", "240 ק\"מ", "2.4 ק\"מ", "5 ק\"מ"],
        "correctAnswer": 0
    },

    // ==============================================================
    // --- תת נושא 2: בעיות הספק ועבודה (15 שאלות) ---
    // ==============================================================
    {
        "id": 16,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Low",
        "question_text": "צבעי יכול לצבוע חדר שלם ב-<strong>4 שעות</strong>. איזה חלק מהחדר (הספק) הוא צובע <strong>בשעה אחת</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='50'><rect x='20' y='10' width='160' height='30' fill='#f8fafc' stroke='#1e293b' stroke-width='2'/><line x1='60' y1='10' x2='60' y2='40' stroke='#1e293b' stroke-width='1'/><line x1='100' y1='10' x2='100' y2='40' stroke='#1e293b' stroke-width='1'/><line x1='140' y1='10' x2='140' y2='40' stroke='#1e293b' stroke-width='1'/><rect x='20' y='10' width='40' height='30' fill='#b09151'/><text x='40' y='30' font-size='12' fill='white' text-anchor='middle'>שעה 1</text></svg></div>",
        "hint": "הספק מוגדר כחלק מהעבודה שנעשה ביחידת זמן אחת. העבודה השלמה מסומנת תמיד כ-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: בבעיות עבודה, עבודה שלמה מסומנת במספר 1.", "math_expression": "עבודה = 1" },
            { "verbal_explanation": "שלב 2: ההספק מחושב על ידי חלוקת העבודה השלמה (1) בזמן שלוקח לסיים אותה (4 שעות).", "math_expression": "הספק = 1 / 4" },
            { "verbal_explanation": "שלב 3: לכן, בכל שעה הצבעי מסיים רבע מהחדר.", "math_expression": "1/4 מהחדר" }
        ],
        "final_answer": "רבע מהחדר (1/4)",
        "options": ["חצי מהחדר (1/2)", "רבע מהחדר (1/4)", "שליש מהחדר (1/3)", "את כל החדר"],
        "correctAnswer": 1
    },
    {
        "id": 17,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Low",
        "question_text": "מכונת הדפסה מדפיסה <strong>100 דפים בדקה</strong>. כעבור <strong>5 דקות</strong>, כמה דפים היא הדפיסה?",
        "hint": "זוהי נוסחת העבודה הבסיסית: עבודה = הספק כפול זמן (ממש כמו דרך = מהירות כפול זמן).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנתונים. ההספק (קצב העבודה) הוא 100 דפים לדקה. הזמן הוא 5 דקות.", "math_expression": "p = 100 , t = 5" },
            { "verbal_explanation": "שלב 2: סך העבודה שווה להספק כפול הזמן.", "math_expression": "w = p * t" },
            { "verbal_explanation": "שלב 3: נציב: 100 כפול 5.", "math_expression": "500" }
        ],
        "final_answer": "500 דפים",
        "options": ["500 דפים", "105 דפים", "20 דפים", "5000 דפים"],
        "correctAnswer": 0
    },
    {
        "id": 18,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "צינור א' ממלא בריכה ריקה ב-<strong>3 שעות</strong>. צינור ב' ממלא את אותה בריכה ב-<strong>6 שעות</strong>. אם נפתח את <strong>שני הצינורות יחד</strong>, תוך כמה שעות תתמלא הבריכה?",
        "hint": "מצאו את ההספק של כל צינור בנפרד (1/3 ו- 1/6). חברו את ההספקים כדי לקבל את ההספק המשותף. ואז חלקו עבודה שלמה (1) בהספק המשותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הספק צינור א' הוא שליש בריכה בשעה. הספק צינור ב' הוא שישית בריכה בשעה.", "math_expression": "P1 = 1/3 , P2 = 1/6" },
            { "verbal_explanation": "שלב 2: נחבר את ההספקים. שליש זה שתי שישיות. נחבר ונקבל שלוש שישיות, שזה בדיוק חצי (1/2).", "math_expression": "1/3 + 1/6 = 3/6 = 1/2" },
            { "verbal_explanation": "שלב 3: ההספק המשותף שלהם הוא חצי בריכה בשעה. לכן, ייקח להם שעתיים למלא בריכה שלמה אחת.", "math_expression": "t = 1 / (1/2) = 2" }
        ],
        "final_answer": "2 שעות",
        "options": ["4.5 שעות", "9 שעות", "2 שעות", "3 שעות"],
        "correctAnswer": 2
    },
    {
        "id": 19,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "פועל ותיק מסיים לבנות קיר ב-<strong>4 ימים</strong>. פועל מתלמד מסיים את אותו קיר ב-<strong>12 ימים</strong>. הם החליטו לעבוד <strong>יחד</strong> על קיר חדש. בכמה ימים יסיימו?",
        "hint": "ההספקים הם 1/4 ו- 1/12 ליום. חברו אותם בעזרת מכנה משותף 12, ואת התוצאה הפכו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הספק הותיק הוא 1/4 קיר ביום. הספק המתלמד הוא 1/12 קיר ביום.", "math_expression": "P1 = 1/4 , P2 = 1/12" },
            { "verbal_explanation": "שלב 2: נחבר הספקים. נרחיב את 1/4 ל- 3/12. נחבר: 3/12 + 1/12 שווה ל-4/12. נצמצם ונקבל שליש (1/3).", "math_expression": "1/4 + 1/12 = 4/12 = 1/3" },
            { "verbal_explanation": "שלב 3: יחד הם בונים שליש קיר ביום. לכן, לבניית קיר שלם יידרשו 3 ימים.", "math_expression": "t = 1 / (1/3) = 3" }
        ],
        "final_answer": "3 ימים",
        "options": ["8 ימים", "3 ימים", "4 ימים", "6 ימים"],
        "correctAnswer": 1
    },
    {
        "id": 20,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "High",
        "question_text": "ברז אחד יכול למלא מיכל ב-<strong>10 דקות</strong>. בחלק התחתון של המיכל יש חור <strong>שמרוקן</strong> אותו ב-<strong>15 דקות</strong>. אם פותחים את הברז וגם החור פתוח, תוך כמה דקות יתמלא המיכל?",
        "hint": "שימו לב: החור *עושה עבודה שלילית* (מחסיר מהמים). לכן מחסרים את ההספק שלו מהספק הברז: 1/10 פחות 1/15.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההספק החיובי של הברז הממלא הוא 1/10 בדקה. ההספק השלילי של החור המרוקן הוא 1/15.", "math_expression": "P מילוי = 1/10 , P ריקון = 1/15" },
            { "verbal_explanation": "שלב 2: נחשב את ההספק המשותף על ידי חיסור. המכנה המשותף הוא 30. (3/30) פחות (2/30) משאיר לנו 1/30 בדקה.", "math_expression": "1/10 - 1/15 = 3/30 - 2/30 = 1/30" },
            { "verbal_explanation": "שלב 3: ההספק נטו הוא 1/30 מיכל בדקה. לכן, יידרשו 30 דקות למלא מיכל שלם אחד.", "math_expression": "t = 1 / (1/30) = 30" }
        ],
        "final_answer": "30 דקות",
        "options": ["25 דקות", "5 דקות", "30 דקות", "12.5 דקות"],
        "correctAnswer": 2
    },
    {
        "id": 21,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "שלושה מדפסות מדפיסות יחד עיתון ב-<strong>שעתיים</strong>. ידוע שלכל המדפסות יש <strong>הספק זהה</strong>. בכמה שעות תסיים <strong>מדפסת אחת בלבד</strong> את כל העבודה לבדה?",
        "hint": "אם שלוש מדפסות עובדות יחד ומסיימות בשעתיים, מדפסת אחת עובדת פי 3 לאט יותר, ולכן ייקח לה פי 3 יותר זמן.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזמן שלוקח לשלושתן יחד הוא 2 שעות. ההספק המשותף של שלושתן הוא 1/2 עבודה בשעה.", "math_expression": "P משותף = 1/2" },
            { "verbal_explanation": "שלב 2: כיוון שהן זהות, ההספק של מדפסת אחת קטן פי 3. נחלק חצי ב-3 ונקבל 1/6.", "math_expression": "P בודד = (1/2) / 3 = 1/6" },
            { "verbal_explanation": "שלב 3: הספק של 1/6 אומר שמדפסת אחת עושה שישית מהעבודה בשעה, ולכן תסיים ב-6 שעות.", "math_expression": "t = 6" }
        ],
        "final_answer": "6 שעות",
        "options": ["6 שעות", "5 שעות", "2/3 שעה", "1.5 שעות"],
        "correctAnswer": 0
    },
    {
        "id": 22,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "דני יכול לנקות את החצר ב-<strong>6 שעות</strong>. הוא עבד לבדו במשך <strong>שעתיים</strong>. איזה חלק מהחצר הוא <strong>כבר ניקה</strong>?",
        "hint": "מצאו קודם את ההספק לשעה (1/6). הכפילו את ההספק הזה במספר השעות שהוא עבד (2).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההספק של דני הוא 1/6 מהחצר בשעה אחת.", "math_expression": "p = 1/6" },
            { "verbal_explanation": "שלב 2: העבודה שהוא עשה שווה להספק שלו כפול הזמן שעבד (2 שעות).", "math_expression": "w = (1/6) * 2" },
            { "verbal_explanation": "שלב 3: נחשב: 2 כפול שישית זה שתי שישיות. נצמצם ונקבל שליש.", "math_expression": "w = 2/6 = 1/3" }
        ],
        "final_answer": "שליש מהחצר (1/3)",
        "options": ["חצי מהחצר (1/2)", "שליש מהחצר (1/3)", "רבע מהחצר (1/4)", "שתי חמישיות"],
        "correctAnswer": 1
    },
    {
        "id": 23,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "High",
        "question_text": "מכונה א' אורזת חבילה ב-<strong>20 דקות</strong>. מכונה ב' אורזת את אותה חבילה ב-<strong>30 דקות</strong>. מכונה א' עבדה לבדה במשך <strong>10 דקות</strong>. לאחר מכן הצטרפה אליה מכונה ב', והן סיימו את האריזה <strong>יחד</strong>. כמה דקות הן עבדו יחד?",
        "hint": "ב-10 דקות, מכונה א' עשתה חצי עבודה (10 מתוך 20). נשאר להן חצי עבודה לסיים יחד. חלקו חצי עבודה בהספק המשותף.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מכונה א' עבדה 10 מתוך 20 הדקות שדרושות לה, לכן סיימה בדיוק חצי (1/2) מהעבודה.", "math_expression": "עבודה שנותרה = 1 - 1/2 = 1/2" },
            { "verbal_explanation": "שלב 2: ההספק המשותף שלהן הוא סכום ההספקים: 1/20 ועוד 1/30. נרחיב למכנה 60 ונקבל: 3/60 + 2/60 = 5/60, שמצטמצם ל-1/12 בדקה.", "math_expression": "P משותף = 1/12" },
            { "verbal_explanation": "שלב 3: נחשב את הזמן המשותף: העבודה שנותרה (1/2) חלקי ההספק המשותף (1/12). חצי חלקי 1/12 זה כמו חצי כפול 12, שזה 6 דקות.", "math_expression": "t = (1/2) / (1/12) = 6" }
        ],
        "final_answer": "6 דקות",
        "options": ["5 דקות", "8 דקות", "6 דקות", "4 דקות"],
        "correctAnswer": 2
    },
    {
        "id": 24,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Low",
        "question_text": "פועל ייצור מרכיב <strong>5 כיסאות בשעה</strong>. כמה כיסאות הוא ירכיב במשמרת של <strong>8 שעות</strong>?",
        "hint": "הספק (5) כפול זמן (8).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנתונים. ההספק p הוא 5. הזמן t הוא 8.", "math_expression": "p = 5 , t = 8" },
            { "verbal_explanation": "שלב 2: נציב בנוסחת העבודה: w = p * t.", "math_expression": "w = 5 * 8" },
            { "verbal_explanation": "שלב 3: נחשב את התוצאה.", "math_expression": "40" }
        ],
        "final_answer": "40 כיסאות",
        "options": ["40 כיסאות", "13 כיסאות", "35 כיסאות", "45 כיסאות"],
        "correctAnswer": 0
    },
    {
        "id": 25,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "High",
        "question_text": "יוסי ודני עובדים יחד במלצרות ומסדרים את האולם ב-<strong>4 שעות</strong>. ידוע שאם יוסי עובד לבד, לוקח לו <strong>6 שעות</strong> לסדר את האולם. בכמה שעות דני יכול לסדר את האולם <strong>לבדו</strong>?",
        "hint": "ההספק המשותף (1/4) שווה להספק של יוסי (1/6) ועוד ההספק של דני (נסמנו 1/x). פתרו: 1/4 פחות 1/6.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההספק המשותף הוא רבע (1/4) בשעה. ההספק של יוסי לבדו הוא שישית (1/6) בשעה.", "math_expression": "P משותף = 1/4 , P יוסי = 1/6" },
            { "verbal_explanation": "שלב 2: ההספק של דני הוא ההפרש ביניהם: 1/4 פחות 1/6. נרחיב למכנה משותף 12.", "math_expression": "P דני = 3/12 - 2/12 = 1/12" },
            { "verbal_explanation": "שלב 3: אם ההספק של דני הוא 1/12 בשעה, אז ייקח לו 12 שעות לבצע את כל העבודה לבדו.", "math_expression": "t = 12" }
        ],
        "final_answer": "12 שעות",
        "options": ["10 שעות", "8 שעות", "2 שעות", "12 שעות"],
        "correctAnswer": 3
    },
    {
        "id": 26,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "בריכה מתמלאת על ידי ברז ב-<strong>8 שעות</strong>. אם פותחים את הברז ל-<strong>6 שעות</strong> בלבד, איזה <strong>אחוז</strong> מהבריכה יתמלא?",
        "hint": "מצאו איזה חלק (בשבר) מהווה 6 מתוך 8, והמירו אותו לאחוזים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההספק של הברז הוא שמינית בריכה בשעה (1/8). בזמן של 6 שעות, הוא ימלא 6 שמיניות מהבריכה.", "math_expression": "w = 6 * (1/8) = 6/8" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר 6/8 על ידי חלוקה ב-2. נקבל 3/4 (שלושה רבעים).", "math_expression": "6/8 = 3/4" },
            { "verbal_explanation": "שלב 3: שלושה רבעים שווים תמיד ל-75 אחוזים.", "math_expression": "75%" }
        ],
        "final_answer": "75%",
        "options": ["60%", "75%", "80%", "68%"],
        "correctAnswer": 1
    },
    {
        "id": 27,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Medium",
        "question_text": "מכונה חקלאית קוצרת שדה ב-<strong>5 ימים</strong>. בעל השדה קנה <strong>עוד מכונה זהה בדיוק</strong>. בכמה ימים יקצרו שתי המכונות <strong>יחד</strong> את השדה?",
        "hint": "אם יש כוח עבודה כפול, הזמן מתקצר בדיוק בחצי.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ההספק של כל מכונה הוא 1/5 מהשדה ביום.", "math_expression": "P = 1/5" },
            { "verbal_explanation": "שלב 2: כששתיהן עובדות יחד, ההספק מוכפל פי 2. 1/5 ועוד 1/5 שווה 2/5 ביום.", "math_expression": "P משותף = 2/5" },
            { "verbal_explanation": "שלב 3: הזמן הדרוש הוא עבודה שלמה (1) לחלק ל-2/5. כלומר להפוך את השבר ל- 5/2, שהם שניים וחצי ימים.", "math_expression": "t = 5 / 2 = 2.5" }
        ],
        "final_answer": "2.5 ימים",
        "options": ["10 ימים", "2.5 ימים", "3 ימים", "2 ימים"],
        "correctAnswer": 1
    },
    {
        "id": 28,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "High",
        "question_text": "צינור ממלא מיכל ב-<strong>x שעות</strong>. צינור שני ממלא אותו ב-<strong>2x שעות</strong> (פי 2 לאט יותר). איזה ביטוי מתאר את ההספק <strong>המשותף</strong> שלהם לשעה אחת?",
        "hint": "חברו את ההספקים האלגבריים. ההספק הראשון הוא 1/x, השני הוא 1/(2x). מצאו מכנה משותף (2x).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את ההספקים של כל צינור בנפרד כביטוי אלגברי.", "math_expression": "P1 = 1/x , P2 = 1/(2x)" },
            { "verbal_explanation": "שלב 2: נחבר את ההספקים. נרחיב את השבר הראשון על ידי הכפלת המונה והמכנה פי 2.", "math_expression": "2/(2x) + 1/(2x)" },
            { "verbal_explanation": "שלב 3: נחבר את המונים ונקבל את ההספק המשותף.", "math_expression": "3 / (2x)" }
        ],
        "final_answer": "3 / (2x)",
        "options": ["1 / (3x)", "3 / (2x)", "2 / (3x)", "1 / (2x²)"],
        "correctAnswer": 1
    },
    {
        "id": 29,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "High",
        "question_text": "קבלן מעסיק פועלים בעלי הספק זהה. <strong>4 פועלים</strong> בונים גדר ב-<strong>6 שעות</strong>. כמה שעות יידרשו ל-<strong>3 פועלים</strong> בלבד לבנות את אותה גדר?",
        "hint": "זו בעיית 'יחס הפוך'. פחות פועלים = יותר זמן. מצאו קודם כמה שעות לוקח לפועל *אחד* בודד (4 כפול 6), ואז חלקו ב-3 פועלים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב כמה 'שעות עבודה' כוללות דורשת בניית הגדר. 4 פועלים שעובדים 6 שעות משקיעים סך הכל 24 שעות-פועל.", "math_expression": "עבודה כוללת = 4 * 6 = 24" },
            { "verbal_explanation": "שלב 2: כלומר, לפועל אחד בודד היה לוקח 24 שעות לסיים.", "math_expression": "פועל יחיד = 24 שעות" },
            { "verbal_explanation": "שלב 3: אנו מפזרים את 24 השעות על פני 3 פועלים במקום 4. נחלק 24 ב-3.", "math_expression": "t = 24 / 3 = 8" }
        ],
        "final_answer": "8 שעות",
        "options": ["8 שעות", "4.5 שעות", "12 שעות", "9 שעות"],
        "correctAnswer": 0
    },
    {
        "id": 30,
        "subTopic": "בעיות הספק ועבודה",
        "difficulty": "Low",
        "question_text": "צינור ממלא בריכה בקצב (הספק) של <strong>1000 ליטרים לשעה</strong>. קיבולת הבריכה היא <strong>4500 ליטרים</strong>. תוך כמה זמן תתמלא הבריכה?",
        "hint": "העבודה (4500) שווה להספק (1000) כפול הזמן (t). חלקו עבודה בהספק.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את הנתונים. העבודה הדרושה היא 4500 ליטר. ההספק הוא 1000 לשעה.", "math_expression": "W = 4500 , P = 1000" },
            { "verbal_explanation": "שלב 2: לפי הנוסחה (t = W/P), הזמן מתקבל מחלוקת העבודה בהספק.", "math_expression": "t = 4500 / 1000" },
            { "verbal_explanation": "שלב 3: פעולת החילוק מזיזה את הנקודה העשרונית 3 צעדים שמאלה.", "math_expression": "4.5" }
        ],
        "final_answer": "4.5 שעות",
        "options": ["4.5 שעות", "3.5 שעות", "5 שעות", "4 שעות"],
        "correctAnswer": 0
    },,
    // ==============================================================
    // --- תת נושא 3: בעיות תערובות וריכוזים (15 שאלות) ---
    // ==============================================================
    {
        "id": 31,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Low",
        "question_text": "הכינו משקה פטל. שפכו <strong>20 גרם</strong> של תרכיז פטל (חומר טהור) לתוך קנקן, והוסיפו מים כך שמשקל המשקה הכולל (התערובת) הגיע ל- <strong>100 גרם</strong>. מהו <strong>ריכוז</strong> הפטל במשקה?",
        "hint": "ריכוז מחושב תמיד כיחס: כמות החומר הטהור לחלק לכמות התערובת הכוללת (ואז הופכים לאחוזים).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נזהה את כמות החומר הטהור. יש לנו 20 גרם תרכיז פטל.", "math_expression": "טהור = 20" },
            { "verbal_explanation": "שלב 2: נזהה את כמות התערובת הכוללת (סך כל המשקה). נתון שהיא 100 גרם.", "math_expression": "שלם = 100" },
            { "verbal_explanation": "שלב 3: נחשב את הריכוז: חומר טהור לחלק לשלם. 20 מתוך 100 הם בדיוק 20%.", "math_expression": "20 / 100 = 20%" }
        ],
        "final_answer": "20%",
        "options": ["80%", "20%", "100%", "25%"],
        "correctAnswer": 1
    },
    {
        "id": 32,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Low",
        "question_text": "בתמיסת מי מלח שמשקלה <strong>200 גרם</strong>, ריכוז המלח הוא <strong>15%</strong>. כמה <strong>גרם מלח</strong> (חומר טהור) יש בתמיסה?",
        "hint": "הכפילו את המשקל הכולל בריכוז כדי למצוא את החומר הטהור. כמה הם 15% מתוך 200?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: המשקל הכולל של התמיסה הוא 200 גרם. זהו ה-100% שלנו.", "math_expression": "שלם = 200" },
            { "verbal_explanation": "שלב 2: ריכוז המלח הוא 15%. המשמעות היא ש-15% מהמשקל הם מלח טהור.", "math_expression": "15% מתוך 200" },
            { "verbal_explanation": "שלב 3: נחשב: 10% מ-200 הם 20. חצי מזה (5%) הם 10. יחד נקבל 30 גרם.", "math_expression": "20 + 10 = 30" }
        ],
        "final_answer": "30 גרם",
        "options": ["15 גרם", "30 גרם", "45 גרם", "200 גרם"],
        "correctAnswer": 1
    },
    {
        "id": 33,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Medium",
        "question_text": "מערבבים <strong>10 ק\"ג</strong> של תמיסת סוכר בריכוז <strong>20%</strong> עם <strong>10 ק\"ג של מים טהורים</strong> (0% סוכר). מהו ריכוז הסוכר בתמיסה החדשה?",
        "hint": "כשמוסיפים מים טהורים, כמות הסוכר לא משתנה, אבל התמיסה גדלה! לכן הריכוז יירד.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא כמה סוכר יש בהתחלה. 20% מתוך 10 ק\"ג הם 2 ק\"ג סוכר.", "math_expression": "סוכר = 2" },
            { "verbal_explanation": "שלב 2: משקל התמיסה החדשה הוא המשקל הישן (10) ועוד המים שהוספנו (10). סך הכל 20 ק\"ג.", "math_expression": "משקל כולל = 10 + 10 = 20" },
            { "verbal_explanation": "שלב 3: נחשב את הריכוז החדש: 2 ק\"ג סוכר מתוך 20 ק\"ג תערובת. השבר 2/20 מצטמצם ל- 1/10 שהם 10%.", "math_expression": "2 / 20 = 10%" }
        ],
        "final_answer": "10%",
        "options": ["20%", "15%", "10%", "0%"],
        "correctAnswer": 2
    },
    {
        "id": 34,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Medium",
        "question_text": "לתוך <strong>40 גרם</strong> של תמיסת אלכוהול בריכוז <strong>10%</strong>, הוסיפו עוד <strong>10 גרם של אלכוהול נקי</strong> (100%). מהו ריכוז האלכוהול בתמיסה החדשה?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='60'><rect x='20' y='20' width='60' height='40' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><rect x='20' y='50' width='60' height='10' fill='#b09151'/><text x='50' y='15' font-size='12'>40g (10%)</text><path d='M90,40 L110,40' stroke='#1e293b' stroke-width='2'/><path d='M100,30 L100,50' stroke='#1e293b' stroke-width='2'/><rect x='120' y='40' width='40' height='20' fill='#b09151' stroke='#1e293b' stroke-width='2'/><text x='140' y='35' font-size='12'>10g טהור</text></svg></div>",
        "hint": "חישבו מחדש: כמה אלכוהול טהור יש עכשיו בסך הכל? וכמה שוקלת התערובת כולה?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: האלכוהול בהתחלה: 10% מתוך 40 גרם הם 4 גרם. נוסיף את ה-10 גרם החדשים. סך הכל אלכוהול טהור: 14 גרם.", "math_expression": "טהור = 4 + 10 = 14" },
            { "verbal_explanation": "שלב 2: משקל התערובת: 40 גרם שהיו, ועוד 10 גרם שהוספנו. סך הכל 50 גרם תערובת.", "math_expression": "שלם = 40 + 10 = 50" },
            { "verbal_explanation": "שלב 3: הריכוז החדש הוא 14 מתוך 50. נרחיב ל-100 (נכפיל פי 2) ונקבל 28 מתוך 100.", "math_expression": "14 / 50 = 28 / 100 = 28%" }
        ],
        "final_answer": "28%",
        "options": ["14%", "20%", "28%", "50%"],
        "correctAnswer": 2
    },
    {
        "id": 35,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "מערבבים <strong>20 ק\"ג</strong> תמיסת מלח בריכוז <strong>30%</strong> עם <strong>30 ק\"ג</strong> תמיסת מלח בריכוז <strong>20%</strong>. מהו הריכוז של התמיסה שהתקבלה?",
        "hint": "מצאו כמה ק\"ג מלח טהור יש בתמיסה הראשונה וכמה בשנייה. חברו את כמויות המלח, וחברו את המשקלים הכוללים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: מלח בתמיסה א': 30% מ-20 ק\"ג. 10% הם 2, לכן 30% הם 6 ק\"ג מלח.", "math_expression": "מלח א' = 6" },
            { "verbal_explanation": "שלב 2: מלח בתמיסה ב': 20% מ-30 ק\"ג. 10% הם 3, לכן 20% הם 6 ק\"ג מלח.", "math_expression": "מלח ב' = 6" },
            { "verbal_explanation": "שלב 3: התערובת החדשה שוקלת 50 ק\"ג (20+30), ויש בה 12 ק\"ג מלח (6+6). נחשב את הריכוז: 12 מתוך 50. נרחיב ל-100 ונקבל 24%.", "math_expression": "12 / 50 = 24 / 100 = 24%" }
        ],
        "final_answer": "24%",
        "options": ["25%", "50%", "24%", "26%"],
        "correctAnswer": 2
    },
    {
        "id": 36,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "יש לנו <strong>100 ק\"ג</strong> של תמיסת מי-ים בריכוז מלח של <strong>2%</strong>. מאדים (מרתיחים) מהתמיסה <strong>50 ק\"ג של מים טהורים</strong> (המים מתאדים, המלח נשאר). מה יהיה <strong>ריכוז המלח החדש</strong>?",
        "hint": "כשמאדים מים, כמות המלח לא משתנה! אבל המשקל הכולל של התערובת יורד, ולכן הריכוז יעלה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את כמות המלח הטהור ההתחלתית. 2% מתוך 100 ק\"ג הם בדיוק 2 ק\"ג מלח.", "math_expression": "מלח טהור = 2" },
            { "verbal_explanation": "שלב 2: לאחר ש-50 ק\"ג מים מתאדים, משקל התמיסה החדשה הוא רק 50 ק\"ג (100 פחות 50).", "math_expression": "משקל חדש = 100 - 50 = 50" },
            { "verbal_explanation": "שלב 3: כמות המלח נשארה 2 ק\"ג. נחשב ריכוז: 2 ק\"ג מתוך 50 ק\"ג. נרחיב ל-100 ונקבל 4%.", "math_expression": "2 / 50 = 4 / 100 = 4%" }
        ],
        "final_answer": "4%",
        "options": ["1%", "2%", "4%", "8%"],
        "correctAnswer": 2
    },
    {
        "id": 37,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Low",
        "question_text": "תמיסה שוקלת <strong>60 גרם</strong>. ידוע שיש בה <strong>15 גרם מלח</strong>. מה אחוז המלח בתמיסה?",
        "hint": "בנו שבר: חומר טהור (15) חלקי סך הכל תערובת (60). צמצמו את השבר כדי לזהות אותו.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הריכוז שווה לחלק (המלח) חלקי השלם (התמיסה). נרשום: 15 חלקי 60.", "math_expression": "15 / 60" },
            { "verbal_explanation": "שלב 2: נצמצם את השבר. 15 נכנס ב-60 בדיוק 4 פעמים. לכן השבר המצומצם הוא 1/4 (רבע).", "math_expression": "1 / 4" },
            { "verbal_explanation": "שלב 3: רבע שווה תמיד ל-25%.", "math_expression": "25%" }
        ],
        "final_answer": "25%",
        "options": ["15%", "25%", "30%", "20%"],
        "correctAnswer": 1
    },
    {
        "id": 38,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Medium",
        "question_text": "לתמיסת כוהל בריכוז <strong>40%</strong> הוסיפו כמות זהה של <strong>מים טהורים</strong>. מה יהיה הריכוז החדש?",
        "hint": "כאשר מכפילים את נפח התמיסה על ידי הוספת מים (0%), הריכוז פשוט נחצה לשניים (יורד בחצי).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נניח משקל נוח לחישוב: 100 גרם תמיסה. כמות הכוהל תהיה 40 גרם.", "math_expression": "כוהל = 40" },
            { "verbal_explanation": "שלב 2: מוסיפים כמות זהה של מים (עוד 100 גרם). משקל התמיסה החדש הוא 200 גרם.", "math_expression": "משקל כולל = 200" },
            { "verbal_explanation": "שלב 3: הריכוז החדש הוא 40 מתוך 200. נצמצם ב-2 ונקבל 20 מתוך 100, שהם 20%.", "math_expression": "40 / 200 = 20%" }
        ],
        "final_answer": "20%",
        "options": ["40%", "20%", "10%", "80%"],
        "correctAnswer": 1
    },
    {
        "id": 39,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "יש ברשותנו <strong>20 גרם</strong> של תמיסת חומצה בריכוז <strong>30%</strong>. כמה גרם <strong>מים</strong> יש להוסיף כדי שהריכוז יירד ל-<strong>20%</strong>?",
        "hint": "כמות החומצה הטהורה (6 גרם) נשארת קבועה. כעת ה-6 גרם האלו צריכים להיות שווים ל-20% (חמישית) מהתמיסה החדשה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את החומצה. 30% מתוך 20 הם 6 גרם. כמות זו לא משתנה.", "math_expression": "חומצה = 6" },
            { "verbal_explanation": "שלב 2: בתמיסה החדשה, ה-6 גרם האלו מהווים 20%. 20% שווים לחמישית מהשלם.", "math_expression": "20% = 1/5 = 6" },
            { "verbal_explanation": "שלב 3: אם חמישית מהתמיסה החדשה היא 6 גרם, משקל התמיסה כולה הוא 30 גרם (6 כפול 5).", "math_expression": "משקל חדש = 30" },
            { "verbal_explanation": "שלב 4: התחלנו עם 20 גרם וסיימנו עם 30 גרם. כלומר, הוספנו בדיוק 10 גרם מים.", "math_expression": "30 - 20 = 10" }
        ],
        "final_answer": "10 גרם מים",
        "options": ["10 גרם מים", "20 גרם מים", "5 גרם מים", "6 גרם מים"],
        "correctAnswer": 0
    },
    {
        "id": 40,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Medium",
        "question_text": "בתעשיית תכשיטים מכינים סגסוגת. מערבבים <strong>400 גרם נחושת</strong> עם <strong>100 גרם זהב טהור</strong>. מהו אחוז <strong>הזהב</strong> בסגסוגת (בתערובת כולה)?",
        "hint": "אל תטעו! השלם הוא לא 400. השלם הוא הסכום של הנחושת והזהב יחד (500 גרם).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את משקל התערובת הכוללת. 400 גרם נחושת ועוד 100 גרם זהב נותנים 500 גרם סגסוגת.", "math_expression": "שלם = 400 + 100 = 500" },
            { "verbal_explanation": "שלב 2: אנו מחפשים את אחוז הזהב, שמשקלו 100 גרם. נבנה שבר: 100 חלקי 500.", "math_expression": "100 / 500" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר על ידי חלוקה ב-5 (כדי להגיע למכנה 100). 100 לחלק ל-5 הם 20.", "math_expression": "20 / 100 = 20%" }
        ],
        "final_answer": "20%",
        "options": ["25%", "20%", "80%", "100%"],
        "correctAnswer": 1
    },
    {
        "id": 41,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "כמה גרם <strong>מלח טהור (100%)</strong> יש להוסיף ל-<strong>90 גרם</strong> של מים (0%), כדי לקבל תמיסת מלח בריכוז <strong>10%</strong>?",
        "hint": "הגדירו את המלח כ-x. כמות המלח תהיה x, ומשקל התערובת יהיה (90+x). המשוואה: x / (90+x) = 10 / 100.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נסמן את כמות המלח שנוסיף ב-x. משקל התערובת החדשה יהיה 90 פלוס x.", "math_expression": "שלם = 90 + x" },
            { "verbal_explanation": "שלב 2: אנו רוצים שהריכוז יהיה 10% (שזה עשירית, 1/10). לכן כמות המלח חלקי השלם שווה לעשירית.", "math_expression": "x / (90 + x) = 1 / 10" },
            { "verbal_explanation": "שלב 3: נכפיל בהצלבה: 10 כפול x שווה ל- (90+x) כפול 1. נקבל 10x = 90 + x.", "math_expression": "10x = 90 + x" },
            { "verbal_explanation": "שלב 4: נעביר את ה-x אגף (בחיסור): 9x = 90. נחלק ב-9 ונקבל x = 10.", "math_expression": "x = 10" }
        ],
        "final_answer": "10 גרם מלח",
        "options": ["9 גרם מלח", "10 גרם מלח", "11 גרם מלח", "15 גרם מלח"],
        "correctAnswer": 1
    },
    {
        "id": 42,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Low",
        "question_text": "רוקח רוצה להכין תמיסת יוד בריכוז <strong>50%</strong>. יש לו בקבוק המכיל <strong>30 גרם</strong> של יוד טהור. כמה גרם של תמיסה כוללת הוא יכול להכין?",
        "hint": "היוד הטהור הוא החומר הפעיל (30). הריכוז המבוקש הוא חצי (50%). אם חצי שווה 30, מה השלם?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הריכוז הרצוי הוא 50%, כלומר היוד צריך להוות בדיוק מחצית ממשקל התמיסה.", "math_expression": "50% = 1/2" },
            { "verbal_explanation": "שלב 2: משקל היוד נתון כ-30 גרם. אם חצי תמיסה היא 30 גרם, התמיסה כולה תהיה כפולה מזה.", "math_expression": "100% = 30 * 2" },
            { "verbal_explanation": "שלב 3: התוצאה היא משקל התמיסה הכולל שהרוקח יקבל.", "math_expression": "60" }
        ],
        "final_answer": "60 גרם",
        "options": ["15 גרם", "60 גרם", "100 גרם", "80 גרם"],
        "correctAnswer": 1
    },
    {
        "id": 43,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "מערבבים כמויות <strong>שוות</strong> של תמיסה א' (בריכוז <strong>10%</strong>) ותמיסה ב' (בריכוז <strong>30%</strong>). מה יהיה ריכוז התערובת שהתקבלה?",
        "hint": "כאשר מערבבים משקלים שווים לחלוטין, הריכוז החדש הוא בדיוק הממוצע של שני הריכוזים הקודמים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: חוק חשוב בתערובות: אם המשקלים זהים, ניתן לעשות ממוצע חשבוני של הריכוזים.", "math_expression": "משקלים שווים = ממוצע" },
            { "verbal_explanation": "שלב 2: נחבר את הריכוזים: 10% פלוס 30% שווים 40%.", "math_expression": "10 + 30 = 40" },
            { "verbal_explanation": "שלב 3: נחלק ב-2 (כי יש שתי תמיסות שוות) כדי למצוא את הריכוז החדש.", "math_expression": "40 / 2 = 20%" }
        ],
        "final_answer": "20%",
        "options": ["40%", "15%", "20%", "25%"],
        "correctAnswer": 2
    },
    {
        "id": 44,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "Medium",
        "question_text": "בבקבוק מיץ פטל יש <strong>100 מ\"ל</strong>, מתוכם <strong>25 מ\"ל</strong> תרכיז. לכוס נמזגו רק <strong>40 מ\"ל</strong> מהמשקה. כמה תרכיז יש בכוס שנמזגה?",
        "hint": "הריכוז אחיד בכל הבקבוק (הרי המשקה מעורבב היטב). מצאו את אחוז התרכיז בבקבוק המקורי, והפעילו אותו על ה-40 מ\"ל שבכוס.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נמצא את ריכוז המשקה המקורי: 25 מתוך 100 שווים ל-25% (שזה רבע).", "math_expression": "25 / 100 = 25%" },
            { "verbal_explanation": "שלב 2: כוס שנמזגת מכילה בדיוק את אותו הריכוז (רבע ממנה הוא תרכיז). נחשב 25% מתוך ה-40 מ\"ל שבכוס.", "math_expression": "40 * (1/4)" },
            { "verbal_explanation": "שלב 3: רבע מ-40 שווה ל-10. בכוס יש 10 מ\"ל תרכיז.", "math_expression": "10" }
        ],
        "final_answer": "10 מ\"ל",
        "options": ["10 מ\"ל", "25 מ\"ל", "4 מ\"ל", "15 מ\"ל"],
        "correctAnswer": 0
    },
    {
        "id": 45,
        "subTopic": "בעיות תערובות וריכוזים",
        "difficulty": "High",
        "question_text": "יש לנו קנקן עם <strong>30 כוסות</strong> תה מתוק בריכוז סוכר של <strong>20%</strong>. כמה כוסות תה צריך <strong>לשפוך החוצה</strong> כדי שריכוז הסוכר בקנקן ישתנה ל-15%?",
        "hint": "קראו היטב את השאלה. האם שפיכת תה החוצה משנה את המתיקות שלו?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זוהי 'שאלת מלכודת'. תמיסה (משקה) מעורבבת באופן אחיד. הריכוז שלה קבוע בכל טיפה.", "math_expression": "ריכוז אחיד" },
            { "verbal_explanation": "שלב 2: כאשר אנו שופכים חלק מהמשקה החוצה, אנו מקטינים את הכמות, אבל לא את הריכוז (המשקה לא נעשה פחות מתוק!).", "math_expression": "20% נשאר 20%" },
            { "verbal_explanation": "שלב 3: לכן, אי אפשר לשנות את הריכוז רק על ידי הוצאת חלק מהתערובת המוכנה.", "math_expression": "בלתי אפשרי" }
        ],
        "final_answer": "בלתי אפשרי לשנות ריכוז כך.",
        "options": ["5 כוסות", "15 כוסות", "בלתי אפשרי לשנות ריכוז כך.", "כל התשובות נכונות"],
        "correctAnswer": 2
    },

    // ==============================================================
    // --- תת נושא 4: בעיות גיאומטריות באלגברה (15 שאלות) ---
    // ==============================================================
    {
        "id": 46,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Low",
        "question_text": "במלבן, האורך גדול ב-<strong>4 ס\"מ</strong> מהרוחב. היקף המלבן הוא <strong>24 ס\"מ</strong>. מהו <strong>רוחב המלבן</strong>?<br><div style='text-align:center; margin:15px 0;'><svg width='180' height='100'><rect x='20' y='20' width='140' height='60' fill='#f1f5f9' stroke='#1e293b' stroke-width='2'/><text x='90' y='15' font-size='12'>x + 4</text><text x='10' y='55' font-size='12'>x</text></svg></div>",
        "hint": "למלבן יש שתי צלעות של אורך ושתי צלעות של רוחב. ההיקף הוא סכום כולן: x + x + (x+4) + (x+4) = 24.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר משתנים. הרוחב הוא x. האורך הוא x+4.", "math_expression": "רוחב = x , אורך = x + 4" },
            { "verbal_explanation": "שלב 2: נבנה משוואה להיקף (סכום 4 הצלעות): פעמיים רוחב ועוד פעמיים אורך שווה 24.", "math_expression": "2x + 2(x + 4) = 24" },
            { "verbal_explanation": "שלב 3: נפתח סוגריים ונכנס איברים: 2x + 2x + 8 = 24. כלומר 4x + 8 = 24.", "math_expression": "4x = 16" },
            { "verbal_explanation": "שלב 4: נחלק ב-4 למציאת ה-x (הרוחב).", "math_expression": "x = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["8 ס\"מ", "4 ס\"מ", "6 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 47,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Medium",
        "question_text": "במשולש, זווית אחת היא בגודל <strong>x</strong>. הזווית השנייה גדולה ממנה ב-<strong>20°</strong>, והזווית השלישית גדולה <strong>פי 2</strong> מהזווית הראשונה. מהו גודל הזווית <strong>הראשונה (x)</strong>?",
        "hint": "סכום הזוויות במשולש הוא תמיד 180°. חברו את שלושת הביטויים (x, x+20, 2x) והשוו ל-180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את שלוש הזוויות על פי הנתונים: x, x+20, 2x.", "math_expression": "x , x+20 , 2x" },
            { "verbal_explanation": "שלב 2: סכום זוויות במשולש שווה ל-180 מעלות. נבנה משוואה המראה את החיבור שלהן.", "math_expression": "x + x + 20 + 2x = 180" },
            { "verbal_explanation": "שלב 3: נכנס איברים דומים (משפחת ה-x לחוד). סך הכל יש לנו 4x ועוד 20 שווים 180.", "math_expression": "4x + 20 = 180" },
            { "verbal_explanation": "שלב 4: נעביר את ה-20 אגף ונקבל 4x = 160. נחלק ב-4.", "math_expression": "x = 40°" }
        ],
        "final_answer": "40 מעלות",
        "options": ["60 מעלות", "40 מעלות", "80 מעלות", "30 מעלות"],
        "correctAnswer": 1
    },
    {
        "id": 48,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Low",
        "question_text": "שטח של מלבן הוא <strong>50 סמ\"ר</strong>. ידוע שאורך צלע אחת שלו הוא <strong>5 ס\"מ</strong>. מהו אורך הצלע השנייה <strong>(x)</strong>?",
        "hint": "שטח מלבן מחושב על ידי הכפלת שתי צלעות סמוכות (אורך כפול רוחב). 5 כפול x שווה 50.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנוסחה לשטח מלבן היא צלע כפול צלע.", "math_expression": "S = a * b" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים שלנו לתוך הנוסחה.", "math_expression": "50 = 5 * x" },
            { "verbal_explanation": "שלב 3: נחלק ב-5 כדי לבודד את הנעלם x ולגלות את אורך הצלע החסרה.", "math_expression": "x = 10" }
        ],
        "final_answer": "10 ס\"מ",
        "options": ["10 ס\"מ", "45 ס\"מ", "25 ס\"מ", "5 ס\"מ"],
        "correctAnswer": 0
    },
    {
        "id": 49,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Medium",
        "question_text": "במשולש <strong>שווה שוקיים</strong>, אורך הבסיס הוא <strong>x</strong>, ואורך כל אחת מהשוקיים (השוות) גדול ב-<strong>4 ס\"מ</strong> מהבסיס. היקף המשולש הוא <strong>35 ס\"מ</strong>. מהו אורך <strong>הבסיס</strong>?",
        "hint": "ההיקף הוא סכום כל שלוש הצלעות. בסיס (x) ועוד שוק א' (x+4) ועוד שוק ב' (x+4) שווים 35.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במשולש שווה שוקיים שתי שוקיים שוות זו לזו. אורכן הוא x+4.", "math_expression": "צלעות: x , x+4 , x+4" },
            { "verbal_explanation": "שלב 2: נבנה משוואה להיקף (סכום הצלעות שווה ל-35).", "math_expression": "x + (x+4) + (x+4) = 35" },
            { "verbal_explanation": "שלב 3: נכנס איברים: יש לנו שלושה איקסים ועוד 8 שווים 35.", "math_expression": "3x + 8 = 35" },
            { "verbal_explanation": "שלב 4: נעביר את ה-8 אגף (35 פחות 8 שווה 27). נחלק 3x = 27 ב-3.", "math_expression": "x = 9" }
        ],
        "final_answer": "9 ס\"מ",
        "options": ["13 ס\"מ", "8 ס\"מ", "9 ס\"מ", "10 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 50,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Low",
        "question_text": "שתי זוויות צמודות נמצאות על <strong>ישר אחד</strong> (זווית שטוחה). האחת שווה ל- <strong>x</strong> והשנייה שווה ל- <strong>3x</strong>. מהו גודלה של הזווית הקטנה (x)?<br><div style='text-align:center; margin:15px 0;'><svg width='200' height='70'><line x1='10' y1='60' x2='190' y2='60' stroke='#1e293b' stroke-width='2'/><line x1='100' y1='60' x2='160' y2='10' stroke='#1e293b' stroke-width='2'/><path d='M120,60 A20,20 0 0,0 115,45' fill='none' stroke='#b09151' stroke-width='2'/><text x='130' y='50' font-size='12'>3x</text><path d='M80,60 A20,20 0 0,1 110,40' fill='none' stroke='#b09151' stroke-width='2'/><text x='70' y='50' font-size='12'>x</text></svg></div>",
        "hint": "זוויות צמודות על קו ישר משלימות תמיד ל-180 מעלות (כמו חצי עיגול).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: זווית שטוחה, הנוצרת על קו ישר, היא בת 180 מעלות.", "math_expression": "סכום = 180°" },
            { "verbal_explanation": "שלב 2: סכום שתי הזוויות יחד הוא הקו השלם. נבנה משוואה.", "math_expression": "x + 3x = 180" },
            { "verbal_explanation": "שלב 3: נכנס איברים (4x שווה ל-180) ונחלק ב-4.", "math_expression": "x = 180 / 4 = 45" }
        ],
        "final_answer": "45 מעלות",
        "options": ["45 מעלות", "135 מעלות", "90 מעלות", "60 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 51,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "נתונים שני ריבועים. אורך הצלע של הריבוע הראשון הוא <strong>x</strong>. אורך הצלע של הריבוע השני הוא <strong>x + 2</strong>. סכום ההיקפים של שני הריבועים יחד הוא <strong>40 ס\"מ</strong>. מהו אורך הצלע של הריבוע הקטן?",
        "hint": "היקף ריבוע הוא 4 פעמים הצלע שלו. היקף א': 4x. היקף ב': 4 פעמים (x+2). חברו אותם ל-40.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נחשב את ההיקף של הריבוע הקטן. יש לו 4 צלעות באורך x.", "math_expression": "היקף א' = 4x" },
            { "verbal_explanation": "שלב 2: נחשב את ההיקף של הריבוע הגדול. נכפיל את הצלע שלו (x+2) ב-4 (חובה לפתוח סוגריים!).", "math_expression": "היקף ב' = 4(x + 2) = 4x + 8" },
            { "verbal_explanation": "שלב 3: נבנה משוואה: סכום ההיקפים שווה ל-40.", "math_expression": "4x + 4x + 8 = 40" },
            { "verbal_explanation": "שלב 4: 8x + 8 = 40. נעביר 8 ונקבל 8x = 32. נחלק ב-8 ונקבל את התשובה.", "math_expression": "x = 4" }
        ],
        "final_answer": "4 ס\"מ",
        "options": ["6 ס\"מ", "4 ס\"מ", "2 ס\"מ", "8 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 52,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Medium",
        "question_text": "שתי זוויות משלימות יחד לזווית ישרה (<strong>90°</strong>). זווית אחת שווה ל- <strong>x</strong> והזווית השנייה גדולה ממנה ב- <strong>20°</strong>. מה גודל הזווית הקטנה (x)?",
        "hint": "זווית ישרה היא 90 מעלות. חברו את שתי הזוויות (x ועוד x+20) והשוו ל-90.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הזוויות שלנו הן x ו-(x+20). הנתון אומר שהסכום שלהן הוא בדיוק 90°.", "math_expression": "x + (x + 20) = 90" },
            { "verbal_explanation": "שלב 2: נכנס את איברי ה-x יחד ונקבל משוואה פשוטה.", "math_expression": "2x + 20 = 90" },
            { "verbal_explanation": "שלב 3: נעביר את ה-20 אגף בחיסור: 2x = 70. נחלק ב-2 למציאת הזווית הקטנה.", "math_expression": "x = 35°" }
        ],
        "final_answer": "35 מעלות",
        "options": ["35 מעלות", "55 מעלות", "45 מעלות", "20 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 53,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "אורכו של מלבן <strong>גדול פי 3</strong> מרוחבו. היקף המלבן הוא <strong>48 ס\"מ</strong>. מהו <strong>שטח המלבן</strong>?",
        "hint": "שאלה בשני שלבים! 1. סמנו רוחב ב-x, אורך ב-3x. בנו משוואת היקף ומצאו את הצלעות. 2. כפלו אותן כדי למצוא שטח.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הצלעות. הרוחב הוא x. האורך גדול פי 3, לכן הוא 3x.", "math_expression": "רוחב = x , אורך = 3x" },
            { "verbal_explanation": "שלב 2: משוואת ההיקף: פעמיים רוחב ועוד פעמיים אורך שווה ל-48.", "math_expression": "2x + 2(3x) = 48" },
            { "verbal_explanation": "שלב 3: נפתור: 2x + 6x = 48 -> 8x = 48 -> x=6. לכן הרוחב הוא 6 והאורך הוא 18 (3 כפול 6).", "math_expression": "רוחב = 6 , אורך = 18" },
            { "verbal_explanation": "שלב 4: המשימה הייתה למצוא שטח (אורך כפול רוחב). נכפיל 6 ב-18.", "math_expression": "S = 6 * 18 = 108" }
        ],
        "final_answer": "108 סמ\"ר",
        "options": ["48 סמ\"ר", "108 סמ\"ר", "24 סמ\"ר", "216 סמ\"ר"],
        "correctAnswer": 1
    },
    {
        "id": 54,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Low",
        "question_text": "שני קווים ישרים נחתכים יוצרים 'זוויות קודקודיות'. נתון שזווית אחת היא <strong>2x + 10</strong> והזווית הקודקודית לה היא <strong>3x - 20</strong>. מהו ערכו של x?",
        "hint": "כלל חשוב בגיאומטריה: זוויות קודקודיות (שנמצאות 'גב אל גב' בצומת X) שוות זו לזו בדיוק! בנו משוואת שוויון.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הכלל אומר שזוויות קודקודיות שוות ביניהן.", "math_expression": "זווית א' = זווית ב'" },
            { "verbal_explanation": "שלב 2: נציב את הביטויים משני צידי סימן השוויון כדי לבנות משוואה.", "math_expression": "2x + 10 = 3x - 20" },
            { "verbal_explanation": "שלב 3: נסדר את המשוואה: נעביר את 2x ימינה (נקבל x בודד) ואת מינוס 20 שמאלה (יהפוך לפלוס 20).", "math_expression": "10 + 20 = 3x - 2x \u2192 x = 30" }
        ],
        "final_answer": "30",
        "options": ["10", "30", "50", "20"],
        "correctAnswer": 1
    },
    {
        "id": 55,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "במשולש, זווית A גדולה <strong>פי 2</strong> מזווית B. זווית C גדולה <strong>ב-20°</strong> מזווית A. מהו גודלה של <strong>זווית B</strong>?",
        "hint": "הגדירו את זווית B כ-x. זווית A תהיה 2x. זווית C תהיה (2x + 20). סכום שלושתן שווה 180.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את הקטנה ביותר, זווית B, כ-x. מכאן נגזור את השאר.", "math_expression": "B = x" },
            { "verbal_explanation": "שלב 2: זווית A גדולה פי 2, לכן A=2x. זווית C גדולה ב-20 מ-A, לכן C = 2x+20.", "math_expression": "A = 2x , C = 2x + 20" },
            { "verbal_explanation": "שלב 3: סכום זוויות משולש הוא 180°. נבנה משוואה: x + 2x + 2x + 20 = 180.", "math_expression": "5x + 20 = 180" },
            { "verbal_explanation": "שלב 4: נעביר אגף (5x = 160) ונחלק ב-5. נקבל את ערכה של x (שהיא זווית B).", "math_expression": "x = 32°" }
        ],
        "final_answer": "32 מעלות",
        "options": ["32 מעלות", "64 מעלות", "84 מעלות", "40 מעלות"],
        "correctAnswer": 0
    },
    {
        "id": 56,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Medium",
        "question_text": "הביטוי להיקף של <strong>מעוין</strong> נתון בתור: <strong>4x + 12</strong>. מהו הביטוי המייצג אורך של <strong>צלע אחת</strong> במעוין?",
        "hint": "למעוין, ממש כמו לריבוע, יש 4 צלעות שוות בדיוק. קחו את ההיקף הכולל וחלקו אותו ב-4 (בעזרת חוק הפילוג).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: במעוין כל 4 הצלעות שוות. לכן היקף הוא פשוט צלע אחת כפול 4.", "math_expression": "היקף = צלע * 4" },
            { "verbal_explanation": "שלב 2: כדי לחזור חזרה מההיקף אל הצלע הבודדת, עלינו לחלק את כל הביטוי (4x+12) ב-4.", "math_expression": "(4x + 12) / 4" },
            { "verbal_explanation": "שלב 3: נחלק לפי חוק הפילוג. 4x חלקי 4 נותן x. בנוסף, 12 חלקי 4 נותן 3.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3",
        "options": ["x + 12", "4x + 3", "x + 3", "2x + 6"],
        "correctAnswer": 2
    },
    {
        "id": 57,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "נתון מלבן. אם נגדיל את אורך המלבן ב-<strong>2 ס\"מ</strong> ונגדיל את רוחב המלבן גם ב-<strong>2 ס\"מ</strong>, נקבל מלבן חדש שהיקפו הוא <strong>30 ס\"מ</strong>. מה היה <strong>היקף המלבן המקורי</strong>?",
        "hint": "לא צריך למצוא את הצלעות עצמן (אי אפשר). חשבו: כמה צלעות הוגדלו ב-2? סך הכל ההיקף גדל ב-8! החסירו זאת מההיקף החדש.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: למלבן יש 4 צלעות (2 אורכים ו-2 רוחבים).", "math_expression": "2*אורך + 2*רוחב" },
            { "verbal_explanation": "שלב 2: אם הגדלנו כל אורך ב-2 (תוספת 4), וכל רוחב ב-2 (תוספת 4), בסך הכל הוספנו להיקף 8 ס\"מ.", "math_expression": "+ 8 ס\"מ להיקף" },
            { "verbal_explanation": "שלב 3: ההיקף החדש (לאחר התוספות) הוא 30. כדי למצוא את ההיקף המקורי, נחסיר את התוספת של ה-8 ס\"מ שזיהינו.", "math_expression": "30 - 8 = 22" }
        ],
        "final_answer": "22 ס\"מ",
        "options": ["28 ס\"מ", "26 ס\"מ", "22 ס\"מ", "24 ס\"מ"],
        "correctAnswer": 2
    },
    {
        "id": 58,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "Medium",
        "question_text": "במקבילית, שתי זוויות סמוכות (אחת ליד השנייה) מיוצגות על ידי <strong>x</strong> ו- <strong>3x</strong>. מהו גודלה של הזווית הקהה (הגדולה)?",
        "hint": "כלל במקבילית: סכום שתי זוויות סמוכות הוא תמיד 180° (הן משלימות למשולש או לקו ישר מקביל).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: תכונת המקבילית קובעת כי זוויות סמוכות סכומן 180 מעלות (זוויות חד צדדיות בין ישרים מקבילים).", "math_expression": "x + 3x = 180" },
            { "verbal_explanation": "שלב 2: נכנס איברים (4x = 180) ונחלק ב-4 כדי למצוא את ה-x הקטן.", "math_expression": "x = 45" },
            { "verbal_explanation": "שלב 3: שואלים אותנו על הזווית הקהה (הגדולה), שהיא 3x. נכפיל את ה-45 פי 3.", "math_expression": "3 * 45 = 135" }
        ],
        "final_answer": "135 מעלות",
        "options": ["45 מעלות", "90 מעלות", "135 מעלות", "150 מעלות"],
        "correctAnswer": 2
    },
    {
        "id": 59,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "שטחו של <strong>משולש ישר זווית</strong> הוא <strong>24 סמ\"ר</strong>. ניצב אחד שווה ל- <strong>6 ס\"מ</strong>. הניצב השני שווה ל- <strong>x</strong>. מהו אורכו של הניצב השני?",
        "hint": "נוסחת שטח משולש היא בסיס כפול גובה (במשולש ישר זווית אלו הניצבים), לחלק ל-2. (6 כפול x) חלקי 2 שווה 24.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: שטח משולש ישר זווית הוא מחצית מכפלת הניצבים שלו.", "math_expression": "S = (a * b) / 2" },
            { "verbal_explanation": "שלב 2: נציב את הנתונים במשוואה.", "math_expression": "(6 * x) / 2 = 24" },
            { "verbal_explanation": "שלב 3: נצמצם את השבר בשמאל (6 לחלק ל-2 זה 3). נקבל 3x = 24.", "math_expression": "3x = 24" },
            { "verbal_explanation": "שלב 4: נחלק ב-3 למציאת הניצב החסר.", "math_expression": "x = 8" }
        ],
        "final_answer": "8 ס\"מ",
        "options": ["4 ס\"מ", "8 ס\"מ", "12 ס\"מ", "16 ס\"מ"],
        "correctAnswer": 1
    },
    {
        "id": 60,
        "subTopic": "בעיות גיאומטריות באלגברה",
        "difficulty": "High",
        "question_text": "חוט תיל באורך של <strong>60 ס\"מ</strong> כופף כדי ליצור צורה של <strong>משולש שווה צלעות</strong>. לאחר מכן, פתחו את החוט ויצרו ממנו צורה של <strong>ריבוע</strong>. מהו <strong>ההפרש</strong> באורכי הצלעות בין שתי הצורות?",
        "hint": "ההיקף נשאר קבוע (60). במשולש שווה צלעות מחלקים ל-3. בריבוע מחלקים ל-4. מצאו את ההפרש בין התוצאות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: החוט הוא ההיקף. ניצור משולש שווה צלעות (3 צלעות). אורך צלע המשולש יהיה ההיקף חלקי 3.", "math_expression": "צלע משולש = 60 / 3 = 20" },
            { "verbal_explanation": "שלב 2: נפתח את החוט (חזרנו ל-60) וניצור ריבוע (4 צלעות). אורך צלע הריבוע יהיה ההיקף חלקי 4.", "math_expression": "צלע ריבוע = 60 / 4 = 15" },
            { "verbal_explanation": "שלב 3: נמצא את ההפרש באורכים על ידי חיסור פשוט.", "math_expression": "20 - 15 = 5" }
        ],
        "final_answer": "5 ס\"מ",
        "options": ["15 ס\"מ", "20 ס\"מ", "5 ס\"מ", "0 ס\"מ"],
        "correctAnswer": 2
    },,
    // ==============================================================
    // --- תת נושא 5: בעיות מבנה עשרוני (15 שאלות) ---
    // ==============================================================
    {
        "id": 61,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Low",
        "question_text": "נתון מספר דו-ספרתי. ספרת העשרות היא <strong>x</strong> וספרת האחדות היא <strong>y</strong>. איזה ביטוי אלגברי מתאר את <strong>הערך</strong> האמיתי של המספר כולו?",
        "hint": "חישבו על המספר 45: הוא מורכב מ-4 פעמים 10, ועוד 5. כנ\"ל כאן, ספרת העשרות שווה פי 10 מערכה.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ספרת העשרות מיוצגת על ידי x. מכיוון שהיא ממוקמת במיקום העשרות, הערך שהיא תורמת למספר הוא 10 כפול x.", "math_expression": "10 * x = 10x" },
            { "verbal_explanation": "שלב 2: ספרת האחדות מיוצגת על ידי y. מיקום האחדות שווה פי 1, ולכן הערך שלה הוא פשוט y.", "math_expression": "1 * y = y" },
            { "verbal_explanation": "שלב 3: נחבר את שני הערכים יחד כדי לקבל את הביטוי השלם המייצג את המספר.", "math_expression": "10x + y" }
        ],
        "final_answer": "10x + y",
        "options": ["x + y", "10x + y", "10y + x", "xy"],
        "correctAnswer": 1
    },
    {
        "id": 62,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Low",
        "question_text": "מה קורה לערך של המספר הדו-ספרתי <strong>10x + y</strong> אם <strong>נחליף בין מיקומי הספרות</strong> שלו?",
        "hint": "האחדות (y) הופכות לעשרות (ויוכפלו ב-10) והעשרות (x) הופכות לאחדות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: לאחר ההחלפה, האות y קופצת למקום העשרות. לכן הערך שלה יהיה כעת 10 כפול y.", "math_expression": "10 * y = 10y" },
            { "verbal_explanation": "שלב 2: האות x זזה למקום האחדות, ולכן הערך שלה יהיה פשוט x.", "math_expression": "1 * x = x" },
            { "verbal_explanation": "שלב 3: נחבר את הערכים החדשים לקבלת הביטוי של המספר ה'הפוך'.", "math_expression": "10y + x" }
        ],
        "final_answer": "10y + x",
        "options": ["10x + y", "y + x", "10y + x", "xy"],
        "correctAnswer": 2
    },
    {
        "id": 63,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Medium",
        "question_text": "במספר דו-ספרתי, ספרת העשרות היא <strong>x</strong>. ספרת האחדות <strong>גדולה ב-3</strong> מספרת העשרות. מהו <strong>סכום הספרות</strong> של המספר?",
        "hint": "שימו לב: שואלים על *סכום הספרות* (כלומר רק חיבור שלהן יחד) ולא על ערך המספר כולו!",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את שתי הספרות שלנו. העשרות היא x, והאחדות היא x+3.", "math_expression": "עשרות = x , אחדות = x+3" },
            { "verbal_explanation": "שלב 2: כשמבקשים 'סכום ספרות', פשוט מחברים אותן זו לזו (ללא הכפלה ב-10).", "math_expression": "x + (x + 3)" },
            { "verbal_explanation": "שלב 3: נכנס איברים ונקבל את הביטוי המפושט.", "math_expression": "2x + 3" }
        ],
        "final_answer": "2x + 3",
        "options": ["10x + 3", "2x + 3", "x + 3", "11x + 3"],
        "correctAnswer": 1
    },
    {
        "id": 64,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "במספר דו-ספרתי, ספרת העשרות היא <strong>2</strong>. נתון שערך המספר כולו <strong>שווה פי 4</strong> מסכום ספרותיו (כאשר y מייצגת את ספרת האחדות). מהי <strong>ספרת האחדות (y)</strong>?",
        "hint": "ערך המספר הוא 20+y. סכום הספרות הוא 2+y. בנו משוואה: הערך שווה ל-4 פעמים הסכום.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נבנה את ערך המספר: העשרות היא 2 (שווה 20), והאחדות y. הערך הוא 20+y.", "math_expression": "ערך = 20 + y" },
            { "verbal_explanation": "שלב 2: נבנה את סכום הספרות, שהוא פשוט החיבור ביניהן.", "math_expression": "סכום = 2 + y" },
            { "verbal_explanation": "שלב 3: נבנה משוואה לפי הנתון: הערך (20+y) שווה פי 4 מהסכום.", "math_expression": "20 + y = 4(2 + y)" },
            { "verbal_explanation": "שלב 4: נפתח סוגריים: 20+y = 8+4y. נעביר את y ואת 8 אגפים. נקבל 12 = 3y, ולכן נחלק ב-3.", "math_expression": "3y = 12 \u2192 y = 4" }
        ],
        "final_answer": "4",
        "options": ["2", "6", "4", "8"],
        "correctAnswer": 2
    },
    {
        "id": 65,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Low",
        "question_text": "סכום הספרות של מספר דו-ספרתי הוא <strong>12</strong>. אם ספרת העשרות מיוצגת על ידי <strong>x</strong>, איזה ביטוי מתאר את <strong>ספרת האחדות</strong>?",
        "hint": "אם אנחנו יודעים את הסכום הכולל (12) ואת אחד החלקים (x), איך נמצא את החלק השני?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: אנו יודעים שחיבור שתי הספרות נותן 12.", "math_expression": "x + אחדות = 12" },
            { "verbal_explanation": "שלב 2: כדי לבודד את ספרת האחדות, נעביר את x בחיסור לאגף השני.", "math_expression": "אחדות = 12 - x" },
            { "verbal_explanation": "שלב 3: לכן, ספרת האחדות מיוצגת על ידי 12 פחות x.", "math_expression": "12 - x" }
        ],
        "final_answer": "12 - x",
        "options": ["x - 12", "12x", "12 - x", "12 / x"],
        "correctAnswer": 2
    },
    {
        "id": 66,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Medium",
        "question_text": "בהמשך לשאלה הקודמת: סכום הספרות הוא <strong>12</strong> וספרת העשרות היא <strong>x</strong>. מהו הביטוי המפושט המייצג את <strong>ערך המספר</strong> כולו?",
        "hint": "הכפילו את העשרות (x) ב-10, והוסיפו את האחדות (12-x). לאחר מכן כנסו איברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ספרת העשרות היא x, ולכן היא תורמת למספר את הערך של 10x.", "math_expression": "ערך עשרות = 10x" },
            { "verbal_explanation": "שלב 2: ספרת האחדות היא הביטוי שמצאנו: 12-x. נחבר אותו לערך העשרות.", "math_expression": "10x + (12 - x)" },
            { "verbal_explanation": "שלב 3: נכנס איברים משפחת x (10 פחות 1) ונקבל את הביטוי המפושט הסופי.", "math_expression": "9x + 12" }
        ],
        "final_answer": "9x + 12",
        "options": ["10x + 12", "9x + 12", "11x - 12", "12x + 10"],
        "correctAnswer": 1
    },
    {
        "id": 67,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "כלל מתמטי מעניין: אם לוקחים מספר דו-ספרתי (10x + y) ו<strong>מחסרים</strong> ממנו את המספר הכתוב בסדר ספרות הפוך (10y + x), התוצאה שתתקבל <strong>תמיד תתחלק ללא שארית ב...</strong>?",
        "hint": "בצעו את פעולת החיסור: (10x + y) פחות (10y + x). פתחו סוגריים בזהירות וכנסו איברים.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את תרגיל החיסור בין המספר למספר ההפוך שלו. חובה לשים סוגריים כי אנו מחסרים את כל הביטוי.", "math_expression": "(10x + y) - (10y + x)" },
            { "verbal_explanation": "שלב 2: נפתח סוגריים. המינוס משנה את הסימנים בפנים.", "math_expression": "10x + y - 10y - x" },
            { "verbal_explanation": "שלב 3: נכנס איברים: 10x פחות x זה 9x. ובנוסף y פחות 10y זה מינוס 9y.", "math_expression": "9x - 9y" },
            { "verbal_explanation": "שלב 4: קיבלנו 9x - 9y. ניתן להוציא את 9 מחוץ לסוגריים, מה שמוכיח שההפרש תמיד כפולה של 9!", "math_expression": "9(x - y)" }
        ],
        "final_answer": "יתחלק ב-9",
        "options": ["יתחלק ב-10", "יתחלק ב-9", "יתחלק ב-2", "יתחלק ב-11"],
        "correctAnswer": 1
    },
    {
        "id": 68,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "ומה קורה אם <strong>נחבר</strong> מספר דו-ספרתי למספר הכתוב בסדר ספרות הפוך? במה <strong>תמיד יתחלק</strong> הסכום שלהם?",
        "hint": "חברו: (10x + y) ועוד (10y + x). איזה מספר נוצר כמקדם משותף ל-x ול-y?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את סכום שני הביטויים.", "math_expression": "(10x + y) + (10y + x)" },
            { "verbal_explanation": "שלב 2: נכנס איברים: 10x ועוד x זה 11x. בנוסף, y ועוד 10y זה 11y.", "math_expression": "11x + 11y" },
            { "verbal_explanation": "שלב 3: נוכל להוציא 11 כגורם משותף. מכאן נובע שהסכום תמיד מתחלק ב-11 ללא שארית.", "math_expression": "11(x + y)" }
        ],
        "final_answer": "יתחלק ב-11",
        "options": ["יתחלק ב-11", "יתחלק ב-9", "יתחלק ב-10", "יתחלק ב-5"],
        "correctAnswer": 0
    },
    {
        "id": 69,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "סכום ספרותיו של מספר דו-ספרתי הוא <strong>9</strong>. אם נחליף בין מקום הספרות, יתקבל מספר <strong>הגדול ב-9</strong> מהמספר המקורי. מהו <strong>המספר המקורי</strong>?",
        "hint": "כפי שלמדנו בשאלה 67, ההפרש הוא תמיד 9(y-x). אם ההפרש הוא 9, אז y-x = 1. איזה זוג ספרות נותן סכום 9 והפרש 1?",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: הנתון הראשון קובע שסכום הספרות הוא 9.", "math_expression": "x + y = 9" },
            { "verbal_explanation": "שלב 2: הנתון השני אומר שההפרש בין המספר ההפוך למקורי הוא 9. ההפרש הזה מיוצג תמיד כ-9(y-x).", "math_expression": "9y - 9x = 9" },
            { "verbal_explanation": "שלב 3: אם נחלק את המשוואה ב-9, נגלה ש: y-x=1. כלומר, ספרת האחדות (y) גדולה באחד מספרת העשרות (x).", "math_expression": "y - x = 1" },
            { "verbal_explanation": "שלב 4: נחפש זוג ספרות שסכומן 9 והפרשן 1. אלו הספרות 4 ו-5. מאחר ו-y גדולה יותר (כי המספר ההפוך גדול יותר), x=4 ו-y=5.", "math_expression": "x = 4 , y = 5 \u2192 45" }
        ],
        "final_answer": "45",
        "options": ["54", "45", "36", "63"],
        "correctAnswer": 1
    },
    {
        "id": 70,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Low",
        "question_text": "נעבור למספר תלת-ספרתי. ספרת המאות היא <strong>x</strong>, ספרת העשרות היא <strong>y</strong>, וספרת האחדות היא <strong>z</strong>. מהו הביטוי המייצג את <strong>הערך</strong> של המספר?",
        "hint": "זכרו את ערך המיקום: ספרת המאות מוכפלת ב-100, ספרת העשרות ב-10, והאחדות ב-1.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: ספרת המאות מיוצגת על ידי x, והמיקום שלה תורם 100 על כל יחידה.", "math_expression": "מאות = 100x" },
            { "verbal_explanation": "שלב 2: ספרת העשרות היא y, והמיקום שלה תורם 10.", "math_expression": "עשרות = 10y" },
            { "verbal_explanation": "שלב 3: ספרת האחדות היא z.", "math_expression": "אחדות = z" },
            { "verbal_explanation": "שלב 4: חיבור של שלושתם נותן את הערך האמיתי של המספר התלת-ספרתי.", "math_expression": "100x + 10y + z" }
        ],
        "final_answer": "100x + 10y + z",
        "options": ["x + y + z", "100x + 10y + z", "xyz", "100z + 10y + x"],
        "correctAnswer": 1
    },
    {
        "id": 71,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Medium",
        "question_text": "במספר דו-ספרתי, ספרת העשרות <strong>גדולה ב-2</strong> מספרת האחדות. <strong>סכום</strong> הספרות הוא <strong>10</strong>. מהו <strong>המספר המקורי</strong>?",
        "hint": "סמנו את ספרת האחדות ב-x. לכן העשרות תהיה (x+2). חברו אותן יחד להשוואה ל-10.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את האחדות כ-x. העשרות תהיה גדולה ב-2, כלומר x+2.", "math_expression": "אחדות = x , עשרות = x+2" },
            { "verbal_explanation": "שלב 2: נבנה משוואה על פי סכום הספרות ששווה ל-10.", "math_expression": "x + (x + 2) = 10" },
            { "verbal_explanation": "שלב 3: נכנס איברים: 2x + 2 = 10. נעביר את 2 אגף: 2x = 8. נחלק ב-2 למציאת x.", "math_expression": "x = 4" },
            { "verbal_explanation": "שלב 4: מצאנו שהאחדות היא 4. העשרות גדולה ב-2 (כלומר 6). המספר הוא 64.", "math_expression": "64" }
        ],
        "final_answer": "64",
        "options": ["46", "64", "28", "82"],
        "correctAnswer": 1
    },
    {
        "id": 72,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "ערכו של מספר דו-ספרתי שווה <strong>פי 5</strong> מסכום ספרותיו. נתון כי ספרת העשרות היא <strong>4</strong>. מהי ספרת <strong>האחדות (y)</strong>?",
        "hint": "ערך המספר הוא 40+y. סכום הספרות הוא 4+y. בנו משוואה: 40+y = 5*(4+y).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נרשום את ערך המספר: 40 בגלל ספרת העשרות (4), פלוס y לאחדות.", "math_expression": "ערך = 40 + y" },
            { "verbal_explanation": "שלב 2: סכום הספרות הוא פשוט חיבור שלהן: 4 פלוס y.", "math_expression": "סכום = 4 + y" },
            { "verbal_explanation": "שלב 3: הערך שווה פי 5 מהסכום. נבנה משוואה ונפתח סוגריים.", "math_expression": "40 + y = 5(4 + y) \u2192 40 + y = 20 + 5y" },
            { "verbal_explanation": "שלב 4: נעביר אגפים: נעביר את ה-20 שמאלה (נקבל 20) ואת ה-y ימינה (נקבל 4y). נחלק ב-4.", "math_expression": "20 = 4y \u2192 y = 5" }
        ],
        "final_answer": "5",
        "options": ["4", "6", "5", "0"],
        "correctAnswer": 2
    },
    {
        "id": 73,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "Medium",
        "question_text": "נתון מספר דו-ספרתי שהערך שלו הוא <strong>10x + y</strong>. אם <strong>נוסיף את הספרה 0</strong> לסוף המספר (מימין לספרת האחדות), איזה ביטוי יתאר את <strong>הערך החדש</strong>?",
        "hint": "הוספת אפס בסוף מספר שלם פשוט מכפילה את כולו ב-10 (למשל: 35 הופך ל-350).",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: פעולת הוספת 0 מימין בספרות עשרוניות היא בדיוק כמו הכפלת המספר השלם פי 10.", "math_expression": "כפל ב-10" },
            { "verbal_explanation": "שלב 2: לכן, ניקח את כל הביטוי של הערך המקורי, ונכפיל אותו ב-10 בעזרת סוגריים.", "math_expression": "10 * (10x + y)" },
            { "verbal_explanation": "שלב 3: נפתח את הסוגריים. העשרות הופכות למאות (100x), והאחדות הופכות לעשרות (10y).", "math_expression": "100x + 10y" }
        ],
        "final_answer": "100x + 10y",
        "options": ["10x + y + 0", "100x + y", "100x + 10y", "1000x + 100y"],
        "correctAnswer": 2
    },
    {
        "id": 74,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "בספרה דו-ספרתית, אם נכפיל את ספרת העשרות <strong>פי 3</strong>, סכום הספרות החדש שייווצר יהיה <strong>15</strong>. נתון בנוסף שספרת האחדות היא <strong>3</strong>. מה היה המספר <strong>המקורי</strong>?",
        "hint": "הסכום החדש מורכב מספרת האחדות (3) ועוד ספרת העשרות החדשה (3x). שניהם שווים 15.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: נגדיר את ספרת העשרות המקורית כ-x. ספרת העשרות החדשה (לאחר ההכפלה) היא 3x.", "math_expression": "עשרות חדשה = 3x" },
            { "verbal_explanation": "שלב 2: סכום הספרות החדש (15) הוא החיבור של האחדות (3) והעשרות החדשה (3x).", "math_expression": "3x + 3 = 15" },
            { "verbal_explanation": "שלב 3: נעביר את ה-3 לאגף הימני (15 פחות 3 זה 12) ונקבל 3x = 12. נחלק ב-3.", "math_expression": "3x = 12 \u2192 x = 4" },
            { "verbal_explanation": "שלב 4: מצאנו שספרת העשרות המקורית הייתה 4. יחד עם האחדות (3) המספר הוא 43.", "math_expression": "43" }
        ],
        "final_answer": "43",
        "options": ["23", "34", "43", "53"],
        "correctAnswer": 2
    },
    {
        "id": 75,
        "subTopic": "בעיות מבנה עשרוני",
        "difficulty": "High",
        "question_text": "במספר דו-ספרתי, ספרת האחדות קטנה מ-8 וספרת העשרות גדולה מ-2. מהו <strong>המספר הגדול ביותר</strong> שיכול להיות מורכב מנתונים אלו?",
        "hint": "כדי ליצור את המספר הגדול ביותר האפשרי, עליכם לבחור את הספרה הגבוהה ביותר האפשרית לעשרות, ולספרת האחדות.",
        "solution_steps": [
            { "verbal_explanation": "שלב 1: כדי למקסם את ערך המספר, נרצה קודם כל את ספרת העשרות הגדולה ביותר. הנתון 'גדולה מ-2' לא מגביל אותנו מלבחור בספרה המקסימלית: 9.", "math_expression": "עשרות = 9" },
            { "verbal_explanation": "שלב 2: נרצה את ספרת האחדות הגדולה ביותר. הנתון קובע שהיא חייבת להיות קטנה מ-8. הספרה השלמה הגדולה ביותר העומדת בתנאי היא 7.", "math_expression": "אחדות = 7" },
            { "verbal_explanation": "שלב 3: נרכיב את המספר משתי הספרות שמצאנו.", "math_expression": "97" }
        ],
        "final_answer": "97",
        "options": ["97", "87", "98", "27"],
        "correctAnswer": 0
    }
];