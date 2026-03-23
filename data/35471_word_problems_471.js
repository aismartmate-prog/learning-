const questionsDB = [
    // ==========================================
    // תת נושא 1: בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור) (10 שאלות)
    // ==========================================
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "שתי מכוניות יוצאות באותו הזמן משתי ערים שהמרחק ביניהן הוא 300 ק''מ, ונוסעות זו לקראת זו. מהירות מכונית א' היא 60 קמ''ש ומהירות מכונית ב' היא 90 קמ''ש. כעבור כמה שעות ייפגשו שתי המכוניות?&rlm;",
        "options": ["2", "3", "2.5", "1.5"],
        "correctAnswer": 0,
        "hint": "המהירות המשותפת של ההתקרבות היא סכום המהירויות של שני כלי הרכב.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירויות של שתי המכוניות.", "math_expression": "v_1 = 60 \\quad , \\quad v_2 = 90" },
            { "verbal_explanation": "נרשום את המרחק הכולל בין הערים.", "math_expression": "d = 300" },
            { "verbal_explanation": "נחשב את המהירות המשותפת בה מתקרבים כלי הרכב.", "math_expression": "v = v_1 + v_2" },
            { "verbal_explanation": "נציב את המהירויות במשוואה.", "math_expression": "v = 60 + 90" },
            { "verbal_explanation": "נבצע את פעולת החיבור.", "math_expression": "v = 150" },
            { "verbal_explanation": "נרשום את משוואת הזמן.", "math_expression": "t = \\dfrac{d}{v}" },
            { "verbal_explanation": "נציב את הנתונים במשוואת הזמן.", "math_expression": "t = \\dfrac{300}{150}" },
            { "verbal_explanation": "נחשב את החלוקה למציאת הזמן.", "math_expression": "t = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "משאית יוצאת מעיר א' לעיר ב' במהירות של 80 קמ''ש. שעה לאחר מכן, יוצאת מכונית מאותה העיר ולאותו כיוון במהירות של 100 קמ''ש. מהו המרחק מעיר א' שבו תשיג המכונית את המשאית?&rlm;",
        "options": ["400", "300", "500", "450"],
        "correctAnswer": 0,
        "hint": "סמנו את זמן הנסיעה של המכונית כ-t. זמן הנסיעה של המשאית יהיה t+1. השוו את המרחקים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את זמן הנסיעה של המכונית כמשתנה.", "math_expression": "t_2 = x" },
            { "verbal_explanation": "המשאית יצאה שעה קודם, לכן זמנה גדול בשעה.", "math_expression": "t_1 = x + 1" },
            { "verbal_explanation": "נרשום את המהירויות הנתונות.", "math_expression": "v_1 = 80 \\quad , \\quad v_2 = 100" },
            { "verbal_explanation": "נרכיב משוואה המשווה בין מרחקי הנסיעה בנקודת המפגש.", "math_expression": "v_1 \\times t_1 = v_2 \\times t_2" },
            { "verbal_explanation": "נציב את הנתונים למשוואה.", "math_expression": "80(x + 1) = 100x" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "80x + 80 = 100x" },
            { "verbal_explanation": "נעביר אגפים ונבודד את המשתנה.", "math_expression": "20x = 80" },
            { "verbal_explanation": "נחלק בעשרים למציאת הזמן.", "math_expression": "x = 4" },
            { "verbal_explanation": "נחשב את המרחק באמצעות מהירות המכונית וזמנה.", "math_expression": "d = 100 \\times 4" },
            { "verbal_explanation": "נבצע את המכפלה לקבלת המרחק המבוקש.", "math_expression": "d = 400" }
        ],
        "final_answer": "400"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "אופנוען רוכב הלוך וחזור למרחק של 120 ק''מ לכל כיוון. בדרכו הלוך נסע במהירות מסוימת, ובחזור הגדיל את מהירותו ב-20 קמ''ש. סך כל זמן הנסיעה היה 5 שעות. מה הייתה מהירותו בדרך הלוך?&rlm;",
        "options": ["40", "60", "50", "30"],
        "correctAnswer": 0,
        "hint": "בנו משוואת סכום זמנים. הזמן שווה למרחק חלקי המהירות.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירות בהלוך כמשתנה.", "math_expression": "v_1 = x" },
            { "verbal_explanation": "נגדיר את המהירות בחזור.", "math_expression": "v_2 = x + 20" },
            { "verbal_explanation": "נרכיב משוואה לסכום הזמנים.", "math_expression": "\\dfrac{120}{x} + \\dfrac{120}{x + 20} = 5" },
            { "verbal_explanation": "נכפול במכנה משותף.", "math_expression": "120(x + 20) + 120x = 5x(x + 20)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "120x + 2400 + 120x = 5x^{2} + 100x" },
            { "verbal_explanation": "נכנס איברים באגף שמאל.", "math_expression": "240x + 2400 = 5x^{2} + 100x" },
            { "verbal_explanation": "נעביר הכל לאגף ימין למשוואה ריבועית.", "math_expression": "5x^{2} - 140x - 2400 = 0" },
            { "verbal_explanation": "נחלק בחמש.", "math_expression": "x^{2} - 28x - 480 = 0" },
            { "verbal_explanation": "נפרק לגורמים או נשתמש בנוסחת שורשים.", "math_expression": "(x - 40)(x + 12) = 0" },
            { "verbal_explanation": "מהירות היא חיובית ולכן נבחר בפתרון החיובי.", "math_expression": "x = 40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "הולך רגל א' יצא מנקודה X לנקודה Y. במקביל, יצא הולך רגל ב' מנקודה Y לנקודה X. הם נפגשו לאחר שעתיים. ידוע כי הולך רגל א' משלים את המסלול כולו ב-3 שעות. בכמה שעות ישלים הולך רגל ב' את המסלול?&rlm;",
        "options": ["6", "4", "5", "3.5"],
        "correctAnswer": 0,
        "hint": "סמנו את המרחק הכולל ב-d. מהירות הולך רגל א' היא d/3. השוו את סכום המרחקים שעברו עד הפגישה למרחק הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המרחק הכולל.", "math_expression": "d" },
            { "verbal_explanation": "נחשב את מהירותו של הולך רגל א'.", "math_expression": "v_1 = \\dfrac{d}{3}" },
            { "verbal_explanation": "נגדיר את מהירותו של הולך רגל ב'.", "math_expression": "v_2 = x" },
            { "verbal_explanation": "נרכיב משוואת מפגש לאחר שעתיים.", "math_expression": "2 \\times v_1 + 2 \\times v_2 = d" },
            { "verbal_explanation": "נציב את מהירות הולך רגל א'.", "math_expression": "2 \\times (\\dfrac{d}{3}) + 2x = d" },
            { "verbal_explanation": "נעביר אגפים ונבודד את המרכיב של הולך רגל ב'.", "math_expression": "2x = d - \\dfrac{2d}{3}" },
            { "verbal_explanation": "נבצע חיסור באגף הימני.", "math_expression": "2x = \\dfrac{d}{3}" },
            { "verbal_explanation": "נחלק בשתיים למציאת מהירות הולך רגל ב'.", "math_expression": "x = \\dfrac{d}{6}" },
            { "verbal_explanation": "נחשב את הזמן הנדרש להולך רגל ב' להשלים את המרחק כולו.", "math_expression": "t = \\dfrac{d}{x} = \\dfrac{d}{\\dfrac{d}{6}}" },
            { "verbal_explanation": "נבצע חילוק שברים לקבלת הזמן.", "math_expression": "t = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "סירה שטה 36 ק''מ נגד כיוון הזרם ו-36 ק''מ עם כיוון הזרם. מהירות זרם הנהר היא 3 קמ''ש. הזמן הכולל ארך 9 שעות. מהי מהירות הסירה במים עומדים?&rlm;",
        "options": ["9", "12", "15", "10"],
        "correctAnswer": 0,
        "hint": "המהירות נגד הזרם היא המהירות העצמית פחות 3. המהירות עם הזרם היא המהירות העצמית פלוס 3.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירות העצמית של הסירה.", "math_expression": "x" },
            { "verbal_explanation": "נגדיר את מהירות הסירה נגד הזרם ועם הזרם.", "math_expression": "v_1 = x - 3 \\quad , \\quad v_2 = x + 3" },
            { "verbal_explanation": "נרכיב משוואה לסכום הזמנים.", "math_expression": "\\dfrac{36}{x - 3} + \\dfrac{36}{x + 3} = 9" },
            { "verbal_explanation": "נחלק בתשע.", "math_expression": "\\dfrac{4}{x - 3} + \\dfrac{4}{x + 3} = 1" },
            { "verbal_explanation": "נכפול במכנה המשותף.", "math_expression": "4(x + 3) + 4(x - 3) = (x - 3)(x + 3)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "4x + 12 + 4x - 12 = x^{2} - 9" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "8x = x^{2} - 9" },
            { "verbal_explanation": "נסדר למשוואה ריבועית.", "math_expression": "x^{2} - 8x - 9 = 0" },
            { "verbal_explanation": "נפרק לגורמים.", "math_expression": "(x - 9)(x + 1) = 0" },
            { "verbal_explanation": "נבחר את הפתרון החיובי.", "math_expression": "x = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "מכונית עברה מחצית מהדרך במהירות של 60 קמ''ש ואת המחצית השנייה במהירות של 90 קמ''ש. מהי המהירות הממוצעת לאורך כל המסלול?&rlm;",
        "options": ["72", "75", "70", "80"],
        "correctAnswer": 0,
        "hint": "מהירות ממוצעת היא סך כל המרחק לחלק לסך כל הזמן.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר כל מחצית מהדרך כמשתנה.", "math_expression": "d" },
            { "verbal_explanation": "המרחק הכולל הוא סכום שתי המחציות.", "math_expression": "D = 2d" },
            { "verbal_explanation": "נחשב את הזמן בחלק הראשון.", "math_expression": "t_1 = \\dfrac{d}{60}" },
            { "verbal_explanation": "נחשב את הזמן בחלק השני.", "math_expression": "t_2 = \\dfrac{d}{90}" },
            { "verbal_explanation": "נחשב את הזמן הכולל.", "math_expression": "T = \\dfrac{d}{60} + \\dfrac{d}{90}" },
            { "verbal_explanation": "נבצע מכנה משותף לחיבור הזמנים.", "math_expression": "T = \\dfrac{3d}{180} + \\dfrac{2d}{180} = \\dfrac{5d}{180} = \\dfrac{d}{36}" },
            { "verbal_explanation": "נחשב מהירות ממוצעת על ידי חלוקת המרחק הכולל בזמן הכולל.", "math_expression": "v = \\dfrac{2d}{\\dfrac{d}{36}}" },
            { "verbal_explanation": "נבצע חלוקת שברים.", "math_expression": "v = 2d \\times \\dfrac{36}{d}" },
            { "verbal_explanation": "נצמצם את המרחק ונקבל את המהירות.", "math_expression": "v = 72" }
        ],
        "final_answer": "72"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "רכבת תכננה לעבור 400 ק''מ במהירות קבועה. לאחר שעתים התעכבה למשך שעה, ולכן הגדילה את מהירותה ב-20 קמ''ש והגיעה במועד המתוכנן. מה הייתה מהירותה ההתחלתית?&rlm;",
        "options": ["80", "100", "60", "90"],
        "correctAnswer": 0,
        "hint": "הזמן המתוכנן שווה לזמן בפועל: שעתיים נסיעה ועוד שעה עיכוב ועוד הזמן הנדרש להשלמת שאר המרחק במהירות המוגדלת.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירות ההתחלתית.", "math_expression": "v" },
            { "verbal_explanation": "נרשום את הזמן המתוכנן.", "math_expression": "t_1 = \\dfrac{400}{v}" },
            { "verbal_explanation": "המרחק שנותר לאחר שעתיים של נסיעה.", "math_expression": "d_1 = 400 - 2v" },
            { "verbal_explanation": "הזמן שנדרש למרחק שנותר במהירות החדשה.", "math_expression": "t_2 = \\dfrac{400 - 2v}{v + 20}" },
            { "verbal_explanation": "נרכיב משוואה המשווה בין הזמן המתוכנן לזמן בפועל.", "math_expression": "\\dfrac{400}{v} = 2 + 1 + \\dfrac{400 - 2v}{v + 20}" },
            { "verbal_explanation": "נסדר את המשוואה.", "math_expression": "\\dfrac{400}{v} - 3 = \\dfrac{400 - 2v}{v + 20}" },
            { "verbal_explanation": "נבצע מכנה משותף באגף השמאלי.", "math_expression": "\\dfrac{400 - 3v}{v} = \\dfrac{400 - 2v}{v + 20}" },
            { "verbal_explanation": "נכפול בהצלבה.", "math_expression": "(400 - 3v)(v + 20) = v(400 - 2v)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "400v + 8000 - 3v^{2} - 60v = 400v - 2v^{2}" },
            { "verbal_explanation": "נכנס איברים למשוואה ריבועית.", "math_expression": "v^{2} + 60v - 8000 = 0" },
            { "verbal_explanation": "נפרק לגורמים ונמצא את המהירות החיובית.", "math_expression": "(v - 80)(v + 100) = 0 \\Rightarrow v = 80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "המרחק בין שתי ערים הוא 90 ק''מ. רוכב אופניים נסע במהירות קבועה עיר אחת לשנייה. בדרכו חזרה, נסע 30 ק''מ, נח חצי שעה, והמשיך במהירות הגדולה ב-3 קמ''ש ממהירותו המקורית. הזמן הלוך שווה לזמן חזור. מצאו את מהירותו המקורית.&rlm;",
        "options": ["15", "18", "12", "20"],
        "correctAnswer": 0,
        "hint": "הזמן בחזור מורכב משלושה חלקים: הנסיעה לפני המנוחה, זמן המנוחה, והנסיעה לאחר המנוחה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המהירות המקורית.", "math_expression": "v" },
            { "verbal_explanation": "נרשום את הזמן הלוך.", "math_expression": "t_1 = \\dfrac{90}{v}" },
            { "verbal_explanation": "נרכיב משוואה המשווה בין הזמן הלוך לזמן חזור.", "math_expression": "\\dfrac{90}{v} = \\dfrac{30}{v} + 0.5 + \\dfrac{60}{v + 3}" },
            { "verbal_explanation": "נעביר את האיבר עם המכנה הזהה לאגף השמאלי ונחסר.", "math_expression": "\\dfrac{60}{v} = 0.5 + \\dfrac{60}{v + 3}" },
            { "verbal_explanation": "נכפול בשתיים להסרת השבר העשרוני.", "math_expression": "\\dfrac{120}{v} = 1 + \\dfrac{120}{v + 3}" },
            { "verbal_explanation": "נכפול במכנה המשותף.", "math_expression": "120(v + 3) = v(v + 3) + 120v" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "120v + 360 = v^{2} + 3v + 120v" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "v^{2} + 3v - 360 = 0" },
            { "verbal_explanation": "נפרק לגורמים ונמצא את המהירות.", "math_expression": "(v - 15)(v + 24) = 0 \\Rightarrow v = 15" }
        ],
        "final_answer": "15"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "שני רצים יוצאים מאותה נקודה במסלול מעגלי שאורכו 400 מטר, ורצים באותו כיוון. מהירות רץ א' היא 5 מטרים לשנייה ומהירות רץ ב' היא 3 מטרים לשנייה. כעבור כמה שניות ישיג רץ א' את רץ ב' בפעם הראשונה?&rlm;",
        "options": ["200", "100", "400", "150"],
        "correctAnswer": 0,
        "hint": "עקיפה במסלול מעגלי מתרחשת כאשר הרץ המהיר משלים הקפה אחת יותר מהרץ האיטי. השתמשו במהירות יחסית.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את מהירויות הרצים.", "math_expression": "v_1 = 5 \\quad , \\quad v_2 = 3" },
            { "verbal_explanation": "נחשב את המהירות היחסית ביניהם.", "math_expression": "v = v_1 - v_2 = 5 - 3 = 2" },
            { "verbal_explanation": "נגדיר את המרחק הדרוש לעקיפה, שהוא הקפה שלמה.", "math_expression": "d = 400" },
            { "verbal_explanation": "נחשב את הזמן על ידי חלוקת המרחק במהירות היחסית.", "math_expression": "t = \\dfrac{d}{v}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "t = \\dfrac{400}{2}" },
            { "verbal_explanation": "נחשב את החלוקה.", "math_expression": "t = 200" }
        ],
        "final_answer": "200"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תנועה (רב-שלביות, כולל פגישה, עקיפה והלוך-חזור)",
        "question_text": "המרחק בין עיר א' לעיר ב' הוא 210 ק''מ. מכונית יוצאת מעיר א' לעיר ב' במהירות של 60 קמ''ש. שעה לאחר מכן, מכונית שנייה יוצאת מעיר ב' לעיר א' במהירות של 90 קמ''ש. כעבור כמה שעות מרגע יציאת המכונית הראשונה הן ייפגשו?&rlm;",
        "options": ["2", "3", "2.5", "1.5"],
        "correctAnswer": 0,
        "hint": "סמנו את זמן הנסיעה של המכונית הראשונה כ-t. הזמן של המכונית השנייה הוא t-1. סכום המרחקים שלהן הוא המרחק הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את זמן הנסיעה של המכונית הראשונה.", "math_expression": "t_1 = t" },
            { "verbal_explanation": "המכונית השנייה יצאה שעה מאוחר יותר, ולכן זמנה קצר בשעה.", "math_expression": "t_2 = t - 1" },
            { "verbal_explanation": "נרכיב משוואה המבטאת את סכום המרחקים.", "math_expression": "v_1 \\times t_1 + v_2 \\times t_2 = 210" },
            { "verbal_explanation": "נציב את המהירויות והזמנים.", "math_expression": "60t + 90(t - 1) = 210" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "60t + 90t - 90 = 210" },
            { "verbal_explanation": "נכנס איברים דומים.", "math_expression": "150t - 90 = 210" },
            { "verbal_explanation": "נעביר אגפים.", "math_expression": "150t = 300" },
            { "verbal_explanation": "נחלק לקבלת הזמן.", "math_expression": "t = 2" }
        ],
        "final_answer": "2"
    },

    // ==========================================
    // תת נושא 2: בעיות הספק ועבודה (שני פועלים, עבודה בחלקים) (10 שאלות)
    // ==========================================
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "פועל א' מסיים עבודה לבדו ב-10 ימים. פועל ב' מסיים את אותה עבודה ב-15 ימים. בכמה ימים הם יסיימו את העבודה אם יעבדו יחד?&rlm;",
        "options": ["6", "5", "8", "7.5"],
        "correctAnswer": 0,
        "hint": "הספק הוא החלק מהעבודה שנעשה ביום אחד. חברו את ההספקים של שני הפועלים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ההספק של הפועל הראשון.", "math_expression": "p_1 = \\dfrac{1}{10}" },
            { "verbal_explanation": "נגדיר את ההספק של הפועל השני.", "math_expression": "p_2 = \\dfrac{1}{15}" },
            { "verbal_explanation": "נחשב את ההספק המשותף.", "math_expression": "p = p_1 + p_2 = \\dfrac{1}{10} + \\dfrac{1}{15}" },
            { "verbal_explanation": "נבצע מכנה משותף לחיבור השברים.", "math_expression": "p = \\dfrac{3}{30} + \\dfrac{2}{30} = \\dfrac{5}{30}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "p = \\dfrac{1}{6}" },
            { "verbal_explanation": "נחשב את הזמן הדרוש לסיום העבודה המשותפת.", "math_expression": "t = \\dfrac{1}{p}" },
            { "verbal_explanation": "נציב את ההספק המשותף.", "math_expression": "t = \\dfrac{1}{\\dfrac{1}{6}}" },
            { "verbal_explanation": "נחשב ונקבל את מספר הימים.", "math_expression": "t = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "שני פועלים עובדים יחד ומסיימים עבודה ב-12 ימים. פועל א' לבדו מסיים את העבודה ב-20 ימים. בכמה ימים יסיים פועל ב' לבדו את העבודה?&rlm;",
        "options": ["30", "24", "40", "25"],
        "correctAnswer": 0,
        "hint": "ההספק המשותף הוא סכום ההספקים של כל פועל בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ההספק המשותף.", "math_expression": "p = \\dfrac{1}{12}" },
            { "verbal_explanation": "נגדיר את ההספק של הפועל הראשון.", "math_expression": "p_1 = \\dfrac{1}{20}" },
            { "verbal_explanation": "נגדיר את ההספק של הפועל השני כנעלם.", "math_expression": "p_2 = \\dfrac{1}{x}" },
            { "verbal_explanation": "נרכיב משוואה המחברת את ההספקים.", "math_expression": "p_1 + p_2 = p \\Rightarrow \\dfrac{1}{20} + \\dfrac{1}{x} = \\dfrac{1}{12}" },
            { "verbal_explanation": "נבודד את הנעלם.", "math_expression": "\\dfrac{1}{x} = \\dfrac{1}{12} - \\dfrac{1}{20}" },
            { "verbal_explanation": "נבצע מכנה משותף לחיסור השברים.", "math_expression": "\\dfrac{1}{x} = \\dfrac{5}{60} - \\dfrac{3}{60} = \\dfrac{2}{60}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\dfrac{1}{x} = \\dfrac{1}{30}" },
            { "verbal_explanation": "נמצא את מספר הימים.", "math_expression": "x = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "פועל א' ופועל ב' מסיימים עבודה יחד ב-6 ימים. פועל א' זקוק ל-5 ימים פחות מפועל ב' כדי לסיים את העבודה לבדו. בכמה ימים יסיים פועל א' את העבודה לבדו?&rlm;",
        "options": ["10", "15", "12", "8"],
        "correctAnswer": 0,
        "hint": "סמנו את הזמן של א' ב-x, ואת הזמן של ב' ב-x+5. חברו את ההספקים והשוו להספק המשותף.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את זמן העבודה של הפועל הראשון.", "math_expression": "t_1 = x" },
            { "verbal_explanation": "נגדיר את זמן העבודה של הפועל השני.", "math_expression": "t_2 = x + 5" },
            { "verbal_explanation": "נרכיב משוואת הספקים.", "math_expression": "\\dfrac{1}{x} + \\dfrac{1}{x + 5} = \\dfrac{1}{6}" },
            { "verbal_explanation": "נכפול במכנה המשותף.", "math_expression": "6(x + 5) + 6x = x(x + 5)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "6x + 30 + 6x = x^{2} + 5x" },
            { "verbal_explanation": "נכנס איברים ונכין משוואה ריבועית.", "math_expression": "12x + 30 = x^{2} + 5x \\Rightarrow x^{2} - 7x - 30 = 0" },
            { "verbal_explanation": "נפרק לגורמים.", "math_expression": "(x - 10)(x + 3) = 0" },
            { "verbal_explanation": "נבחר בפתרון החיובי.", "math_expression": "x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "צינור א' ממלא בריכה ב-4 שעות, וצינור ב' מרוקן אותה ב-6 שעות. שני הצינורות נפתחים יחד. בכמה שעות תתמלא הבריכה?&rlm;",
        "options": ["12", "10", "2.4", "8"],
        "correctAnswer": 0,
        "hint": "ההספק הכולל שווה להספק המילוי פחות ההספק של הריקון.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הספק המילוי של הצינור הראשון.", "math_expression": "p_1 = \\dfrac{1}{4}" },
            { "verbal_explanation": "נגדיר את הספק הריקון של הצינור השני.", "math_expression": "p_2 = \\dfrac{1}{6}" },
            { "verbal_explanation": "נחשב את ההספק המשותף על ידי חיסור.", "math_expression": "p = \\dfrac{1}{4} - \\dfrac{1}{6}" },
            { "verbal_explanation": "נבצע מכנה משותף לחיסור השברים.", "math_expression": "p = \\dfrac{3}{12} - \\dfrac{2}{12} = \\dfrac{1}{12}" },
            { "verbal_explanation": "נחשב את הזמן על ידי חלוקת העבודה (1) בהספק המשותף.", "math_expression": "t = \\dfrac{1}{\\dfrac{1}{12}}" },
            { "verbal_explanation": "נקבל את הזמן.", "math_expression": "t = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "פועל א' מסיים עבודה ב-8 שעות, ופועל ב' ב-12 שעות. פועל א' עובד לבדו במשך שעתיים, ולאחר מכן מצטרף אליו פועל ב' והם עובדים יחד עד לסיום העבודה. כמה שעות בסך הכל נמשכה העבודה?&rlm;",
        "options": ["5.6", "6.2", "4.8", "7.5"],
        "correctAnswer": 0,
        "hint": "חשבו איזה חלק מהעבודה נעשה בשעתיים הראשונות, ואיזה חלק נותר. חשבו את הזמן הנדרש לשניהם לסיים את החלק הנותר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את החלק מהעבודה שביצע הפועל הראשון בשעתיים.", "math_expression": "w_1 = 2 \\times \\dfrac{1}{8} = \\dfrac{2}{8} = \\dfrac{1}{4}" },
            { "verbal_explanation": "נחשב את החלק הנותר מהעבודה.", "math_expression": "w_{rem} = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}" },
            { "verbal_explanation": "נחשב את ההספק המשותף של שני הפועלים יחד.", "math_expression": "p = \\dfrac{1}{8} + \\dfrac{1}{12} = \\dfrac{3}{24} + \\dfrac{2}{24} = \\dfrac{5}{24}" },
            { "verbal_explanation": "נחשב את הזמן הדרוש לסיום החלק הנותר בהספק המשותף.", "math_expression": "t_2 = \\dfrac{w_{rem}}{p} = \\dfrac{\\dfrac{3}{4}}{\\dfrac{5}{24}}" },
            { "verbal_explanation": "נבצע חלוקת שברים.", "math_expression": "t_2 = \\dfrac{3}{4} \\times \\dfrac{24}{5} = \\dfrac{72}{20} = 3.6" },
            { "verbal_explanation": "נחשב את הזמן הכולל מתחילת העבודה.", "math_expression": "t_{total} = 2 + 3.6" },
            { "verbal_explanation": "נסכם את הזמנים.", "math_expression": "t_{total} = 5.6" }
        ],
        "final_answer": "5.6"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "שני ברזים ממלאים בריכה ב-3 שעות כשהם פתוחים יחד. ברז א' לבדו ממלא את הבריכה ב-8 שעות פחות מברז ב' לבדו. כמה זמן דרוש לברז א' למלא את הבריכה לבדו?&rlm;",
        "options": ["4", "6", "12", "5"],
        "correctAnswer": 0,
        "hint": "הזמן של ברז א' הוא x. הזמן של ברז ב' הוא x+8.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את זמן המילוי של הברז הראשון.", "math_expression": "t_1 = x" },
            { "verbal_explanation": "נגדיר את זמן המילוי של הברז השני.", "math_expression": "t_2 = x + 8" },
            { "verbal_explanation": "נרכיב משוואת הספקים.", "math_expression": "\\dfrac{1}{x} + \\dfrac{1}{x + 8} = \\dfrac{1}{3}" },
            { "verbal_explanation": "נכפול במכנה משותף.", "math_expression": "3(x + 8) + 3x = x(x + 8)" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "3x + 24 + 3x = x^{2} + 8x" },
            { "verbal_explanation": "נכנס איברים ונכין משוואה ריבועית.", "math_expression": "6x + 24 = x^{2} + 8x \\Rightarrow x^{2} + 2x - 24 = 0" },
            { "verbal_explanation": "נפרק לגורמים.", "math_expression": "(x + 6)(x - 4) = 0" },
            { "verbal_explanation": "נבחר בפתרון החיובי.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "פועל א' יכול לסלול כביש ב-15 ימים. פועל ב' יכול לסלול אותו ב-10 ימים. שניהם עובדים יחד במשך 3 ימים. איזה חלק מהעבודה נותר לסלול?&rlm;",
        "options": ["1/2", "1/3", "1/4", "2/5"],
        "correctAnswer": 0,
        "hint": "חשבו את ההספק המשותף והכפילו במספר ימי העבודה כדי למצוא את החלק שבוצע. החלק שנותר הוא המשלים לאחת.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההספק המשותף של שני הפועלים.", "math_expression": "p = \\dfrac{1}{15} + \\dfrac{1}{10}" },
            { "verbal_explanation": "נבצע מכנה משותף.", "math_expression": "p = \\dfrac{2}{30} + \\dfrac{3}{30} = \\dfrac{5}{30}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "p = \\dfrac{1}{6}" },
            { "verbal_explanation": "נחשב את כמות העבודה שבוצעה בשלושה ימים.", "math_expression": "w = 3 \\times \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}" },
            { "verbal_explanation": "נחשב את החלק הנותר על ידי חיסור העבודה שבוצעה מהשלם.", "math_expression": "w_{rem} = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "מכונה א' מייצרת מכסה מסוימת ב-6 שעות. מכונה ב' מייצרת את אותה מכסה ב-x שעות. כשהן פועלות יחד הן מייצרות את המכסה ב-2.4 שעות. מצאו את x.&rlm;",
        "options": ["4", "5", "8", "3.5"],
        "correctAnswer": 0,
        "hint": "בנו משוואת הספקים ופתרו עבור הנעלם.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואת הספקים המבוססת על הנתונים.", "math_expression": "\\dfrac{1}{6} + \\dfrac{1}{x} = \\dfrac{1}{2.4}" },
            { "verbal_explanation": "נמיר את השבר העשרוני במכנה לשבר פשוט לצורך נוחות.", "math_expression": "\\dfrac{1}{2.4} = \\dfrac{10}{24} = \\dfrac{5}{12}" },
            { "verbal_explanation": "נציב את השבר הפשוט במשוואה.", "math_expression": "\\dfrac{1}{6} + \\dfrac{1}{x} = \\dfrac{5}{12}" },
            { "verbal_explanation": "נעביר את המספרים לאגף אחד כדי לבודד את הנעלם.", "math_expression": "\\dfrac{1}{x} = \\dfrac{5}{12} - \\dfrac{1}{6}" },
            { "verbal_explanation": "נבצע מכנה משותף וחיסור.", "math_expression": "\\dfrac{1}{x} = \\dfrac{5}{12} - \\dfrac{2}{12} = \\dfrac{3}{12}" },
            { "verbal_explanation": "נצמצם את השבר.", "math_expression": "\\dfrac{1}{x} = \\dfrac{1}{4}" },
            { "verbal_explanation": "נחלץ את המשתנה.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "צוות של 5 פועלים מסיים משימה ב-8 ימים. בהנחה שההספק של כולם זהה, כמה פועלים נדרשים כדי לסיים את המשימה ב-2 ימים?&rlm;",
        "options": ["20", "15", "10", "25"],
        "correctAnswer": 0,
        "hint": "כמות העבודה הכוללת נמדדת ב'ימי-עבודה' (מספר הפועלים כפול מספר הימים). סך העבודה נשאר קבוע.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סך כל העבודה הנדרשת ביחידות של ימי עבודה פועל.", "math_expression": "W = 5 \\times 8" },
            { "verbal_explanation": "העבודה היא ערך קבוע.", "math_expression": "W = 40" },
            { "verbal_explanation": "נגדיר את המצב החדש, שבו העבודה מתחלקת על פני יומיים.", "math_expression": "x \\times 2 = 40" },
            { "verbal_explanation": "נחלק בשתיים למציאת מספר הפועלים הדרוש.", "math_expression": "x = \\dfrac{40}{2}" },
            { "verbal_explanation": "נחשב את התוצאה.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות הספק ועבודה (שני פועלים, עבודה בחלקים)",
        "question_text": "פועל א' מבצע 1/3 מהעבודה ב-4 ימים. פועל ב' מבצע 1/2 מהעבודה ב-5 ימים. בכמה ימים הם יסיימו את העבודה השלמה אם יעבדו יחד מתחילתה ועד סופה?&rlm;",
        "options": ["5.45", "4.5", "6.2", "7.1"],
        "correctAnswer": 0,
        "hint": "חשבו תחילה כמה זמן לוקח לכל פועל לסיים את העבודה השלמה לבדו. לאחר מכן, חברו את ההספקים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הזמן הדרוש לפועל הראשון לסיים עבודה שלמה.", "math_expression": "t_1 = 4 \\times 3 = 12" },
            { "verbal_explanation": "נחשב את הזמן הדרוש לפועל השני לסיים עבודה שלמה.", "math_expression": "t_2 = 5 \\times 2 = 10" },
            { "verbal_explanation": "נגדיר את ההספק של הפועל הראשון.", "math_expression": "p_1 = \\dfrac{1}{12}" },
            { "verbal_explanation": "נגדיר את ההספק של הפועל השני.", "math_expression": "p_2 = \\dfrac{1}{10}" },
            { "verbal_explanation": "נחשב את ההספק המשותף.", "math_expression": "p = \\dfrac{1}{12} + \\dfrac{1}{10}" },
            { "verbal_explanation": "נבצע מכנה משותף של שישים.", "math_expression": "p = \\dfrac{5}{60} + \\dfrac{6}{60} = \\dfrac{11}{60}" },
            { "verbal_explanation": "נחשב את הזמן על ידי חלוקת עבודה בהספק.", "math_expression": "t = \\dfrac{1}{\\dfrac{11}{60}}" },
            { "verbal_explanation": "נחלץ את התוצאה כמספר עשרוני.", "math_expression": "t = \\dfrac{60}{11} \\approx 5.45" }
        ],
        "final_answer": "5.45"
    },

    // ==========================================
    // תת נושא 3: בעיות קנייה ומכירה (כולל אחוזים) (10 שאלות)
    // ==========================================
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "מחירו של מוצר עלה ב-20%, ולאחר מכן ירד ב-20%. מחירו הסופי של המוצר לאחר שתי הפעולות הוא 96 שקלים. מה היה מחירו ההתחלתי?&rlm;",
        "options": ["100", "96", "104", "92"],
        "correctAnswer": 0,
        "hint": "כל שינוי באחוזים מהווה הכפלה במקדם. עלייה של 20% היא כפל ב-1.2, וירידה היא כפל ב-0.8.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המחיר ההתחלתי כמשתנה.", "math_expression": "x" },
            { "verbal_explanation": "נרשום את מכפלת המקדמים המייצגים את שינויי האחוזים.", "math_expression": "x \\times 1.2 \\times 0.8 = 96" },
            { "verbal_explanation": "נבצע את הכפל של המקדמים.", "math_expression": "x \\times 0.96 = 96" },
            { "verbal_explanation": "נחלק במקדם לבידוד המשתנה.", "math_expression": "x = \\dfrac{96}{0.96}" },
            { "verbal_explanation": "נחשב את המנה.", "math_expression": "x = 100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "סוחר קנה \\( x \\) מוצרים בסכום כולל של 600 שקלים. 5 מוצרים נשברו, ואת השאר מכר הסוחר ברווח של 5 שקלים לכל מוצר. הרווח הכולל של הסוחר מכל העסקה היה 100 שקלים. מצאו את \\( x \\).&rlm;",
        "options": ["40", "30", "50", "20"],
        "correctAnswer": 0,
        "hint": "מחיר הקנייה ליחידה הוא 600 חלקי x. מחיר המכירה ליחידה גבוה ב-5. כמות המכירה היא x פחות 5. סך ההכנסות שוות לסך ההוצאות ועוד הרווח.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את מחיר הקנייה ליחידה.", "math_expression": "C = \\dfrac{600}{x}" },
            { "verbal_explanation": "נרשום את מחיר המכירה ליחידה.", "math_expression": "S = \\dfrac{600}{x} + 5" },
            { "verbal_explanation": "כמות המוצרים שנמכרו.", "math_expression": "Q = x - 5" },
            { "verbal_explanation": "סך ההכנסות ממכירה שווה להוצאות בתוספת הרווח הכולל.", "math_expression": "(\\dfrac{600}{x} + 5)(x - 5) = 600 + 100 = 700" },
            { "verbal_explanation": "נפתח סוגריים באגף השמאלי.", "math_expression": "600 - \\dfrac{3000}{x} + 5x - 25 = 700" },
            { "verbal_explanation": "נעביר את המספרים לאגף אחד ונסדר.", "math_expression": "5x - \\dfrac{3000}{x} - 125 = 0" },
            { "verbal_explanation": "נכפול במשתנה כדי לבטל את השבר במכנה.", "math_expression": "5x^{2} - 125x - 3000 = 0" },
            { "verbal_explanation": "נחלק בחמש לפשטות.", "math_expression": "x^{2} - 25x - 600 = 0" },
            { "verbal_explanation": "נפרק לגורמים או נשתמש בנוסחת שורשים.", "math_expression": "(x - 40)(x + 15) = 0" },
            { "verbal_explanation": "הכמות חיובית ולכן נבחר בפתרון החיובי.", "math_expression": "x = 40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "שני מוצרים עולים יחד 150 שקלים. מוצר א' נמכר ברווח של 20% ומוצר ב' נמכר בהפסד של 10%. סך ההכנסות ממכירת שני המוצרים היה 156 שקלים. מה היה מחיר הקנייה של מוצר א'?&rlm;",
        "options": ["70", "80", "60", "90"],
        "correctAnswer": 0,
        "hint": "סמנו את עלות א' כ-x, ועלות ב' כ-150 מינוס x. בנו משוואה של ההכנסות.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את עלות מוצר א' ועלות מוצר ב'.", "math_expression": "C_A = x \\quad , \\quad C_B = 150 - x" },
            { "verbal_explanation": "נרכיב משוואת הכנסות עם המקדמים המבטאים את שיעורי הרווח וההפסד.", "math_expression": "1.2x + 0.9(150 - x) = 156" },
            { "verbal_explanation": "נפתח סוגריים באגף השמאלי.", "math_expression": "1.2x + 135 - 0.9x = 156" },
            { "verbal_explanation": "נכנס איברים ונחסר 135.", "math_expression": "0.3x = 21" },
            { "verbal_explanation": "נחלק במקדם לבידוד המשתנה.", "math_expression": "x = \\dfrac{21}{0.3}" },
            { "verbal_explanation": "נחשב את ערך עלות מוצר א'.", "math_expression": "x = 70" }
        ],
        "final_answer": "70"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "חנות קנתה חולצות בסכום כולל של 1000 שקלים. 10 חולצות היו פגומות. את שאר החולצות מכרה החנות במחיר הגבוה ב-20% ממחיר הקנייה של כל חולצה. סך ההכנסות היה 1080 שקלים. כמה חולצות קנתה החנות?&rlm;",
        "options": ["100", "120", "80", "90"],
        "correctAnswer": 0,
        "hint": "סמנו את כמות החולצות ב-x. מחיר הקנייה הוא 1000 חלקי x. הכפילו מחיר זה ב-1.2 ובנו משוואה מול הכמות שנמכרה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את מחיר הקנייה לחולצה אחת.", "math_expression": "C = \\dfrac{1000}{x}" },
            { "verbal_explanation": "נגדיר את מחיר המכירה לחולצה, הגבוה בעשרים אחוז.", "math_expression": "S = 1.2 \\times \\dfrac{1000}{x} = \\dfrac{1200}{x}" },
            { "verbal_explanation": "נרכיב משוואה של הכמות שנמכרה במחיר המכירה מול ההכנסה.", "math_expression": "(x - 10) \\times \\dfrac{1200}{x} = 1080" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "1200 - \\dfrac{12000}{x} = 1080" },
            { "verbal_explanation": "נחסר מספרים חופשיים ונבודד את השבר.", "math_expression": "120 = \\dfrac{12000}{x}" },
            { "verbal_explanation": "נכפול באלכסון.", "math_expression": "120x = 12000" },
            { "verbal_explanation": "נחלק לקבלת הכמות המקורית.", "math_expression": "x = 100" }
        ],
        "final_answer": "100"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "מחירו של מוצר יורד בכל שנה באחוז קבוע של \\( x\\% \\). מחירו ההתחלתי היה 500 שקלים, וכעבור שנתיים מחירו היה 320 שקלים. מצאו את \\( x \\).&rlm;",
        "options": ["20", "15", "25", "30"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת גדילה ודעיכה או הכפילו את המחיר ההתחלתי בפקטור של ירידה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה עם פקטור ירידה שנתי לאחר שנתיים.", "math_expression": "500(1 - \\dfrac{x}{100})^{2} = 320" },
            { "verbal_explanation": "נחלק בחמש מאות כדי לבודד את הריבוע.", "math_expression": "(1 - \\dfrac{x}{100})^{2} = \\dfrac{320}{500} = 0.64" },
            { "verbal_explanation": "נוציא שורש חיובי שני אגפים.", "math_expression": "1 - \\dfrac{x}{100} = 0.8" },
            { "verbal_explanation": "נעביר אגפים.", "math_expression": "\\dfrac{x}{100} = 0.2" },
            { "verbal_explanation": "נכפול במאה לחילוץ האחוז.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "סוחר קנה מוצר ב-80 שקלים ומעוניין להרוויח עליו 25%. איזה מחיר מחירון עליו לקבוע, אם הוא מתכוון לתת הנחה של 20% על מחיר המחירון?&rlm;",
        "options": ["125", "100", "150", "120"],
        "correctAnswer": 0,
        "hint": "חשבו קודם מהו הסכום הסופי הרצוי לאחר הרווח. לאחר מכן, הגדירו את מחיר המחירון כך שלאחר הנחה של 20% יתקבל הסכום הרצוי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את המחיר הרצוי למכירה כדי להשיג את הרווח הנדרש.", "math_expression": "S = 80 \\times 1.25 = 100" },
            { "verbal_explanation": "נגדיר את מחיר המחירון כמשתנה.", "math_expression": "P" },
            { "verbal_explanation": "נרכיב משוואה של המחיר לאחר הנחת העשרים אחוז ועד למחיר המכירה.", "math_expression": "P \\times 0.8 = 100" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "P = \\dfrac{100}{0.8}" },
            { "verbal_explanation": "נחשב את ערכו הסופי של מחיר המחירון.", "math_expression": "P = 125" }
        ],
        "final_answer": "125"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "אדם קנה עטים בסכום כולל של 200 שקלים. 20 עטים הוא מכר במחיר הקנייה (ללא רווח), ואת שאר העטים מכר ברווח של 2 שקלים לעט. סך כל הרווח מהעסקה היה 20 שקלים. כמה עטים הוא קנה?&rlm;",
        "options": ["30", "40", "50", "25"],
        "correctAnswer": 0,
        "hint": "הרווח נובע רק מהעטים הנותרים (סך העטים פחות 20). כמות זו כפול 2 שקלים לעט שווה לרווח הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את כמות העטים שנקנו כמשתנה.", "math_expression": "x" },
            { "verbal_explanation": "נרשום את כמות העטים שנמכרו ברווח.", "math_expression": "Q = x - 20" },
            { "verbal_explanation": "הרווח נבע רק מכמות זו. נרכיב משוואה המקשרת את הרווח ליחידה לרווח הכולל.", "math_expression": "Q \\times 2 = 20" },
            { "verbal_explanation": "נציב את הביטוי לכמות העטים.", "math_expression": "(x - 20) \\times 2 = 20" },
            { "verbal_explanation": "נחלק בשתיים.", "math_expression": "x - 20 = 10" },
            { "verbal_explanation": "נחלץ את הכמות הכוללת.", "math_expression": "x = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "המס על מוצר מסוים עלה מ-15% ל-20%. בעקבות כך, הפרש המס ששילם הצרכן עלה ב-10 שקלים. מה היה מחירו של המוצר לפני המס?&rlm;",
        "options": ["200", "150", "250", "100"],
        "correctAnswer": 0,
        "hint": "ההפרש באחוזים (5%) מייצג את ההפרש בכסף (10 שקלים).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את מחיר המוצר ללא מס.", "math_expression": "x" },
            { "verbal_explanation": "נרכיב משוואת הפרש המסים המשולמים.", "math_expression": "0.20x - 0.15x = 10" },
            { "verbal_explanation": "נחסר את המקדמים.", "math_expression": "0.05x = 10" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = \\dfrac{10}{0.05}" },
            { "verbal_explanation": "נחשב את ערך המחיר.", "math_expression": "x = 200" }
        ],
        "final_answer": "200"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "אדם הוציא 1/3 מכספו, ולאחר מכן הוציא 1/4 מהכסף שנותר לו. לבסוף, נשארו בידו 150 שקלים. מה היה הסכום ההתחלתי שעמו יצא?&rlm;",
        "options": ["300", "400", "450", "200"],
        "correctAnswer": 0,
        "hint": "חשבו כמה נשאר אחרי ההוצאה הראשונה, והכפילו בשיעור שנותר אחרי ההוצאה השנייה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הסכום ההתחלתי.", "math_expression": "x" },
            { "verbal_explanation": "נחשב את הכסף שנותר לאחר ההוצאה הראשונה של שליש.", "math_expression": "M_1 = x - \\dfrac{1}{3}x = \\dfrac{2}{3}x" },
            { "verbal_explanation": "בהוצאה השנייה הוציא רבע מהנותר, לכן נשארו לו שלושה רבעים מאותו הנותר.", "math_expression": "M_2 = \\dfrac{3}{4} \\times M_1" },
            { "verbal_explanation": "נציב את הנותר הראשון לתוך המשוואה.", "math_expression": "M_2 = \\dfrac{3}{4} \\times \\dfrac{2}{3}x = \\dfrac{6}{12}x = \\dfrac{1}{2}x" },
            { "verbal_explanation": "נשווה את הנותר הסופי לנתון המספרי.", "math_expression": "\\dfrac{1}{2}x = 150" },
            { "verbal_explanation": "נכפול בשתיים כדי לגלות את הסכום המלא.", "math_expression": "x = 300" }
        ],
        "final_answer": "300"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות קנייה ומכירה (כולל אחוזים)",
        "question_text": "הרווח על מוצר א' הוא 30% ועל מוצר ב' הוא 40%. מחיר הקנייה של מוצר א' גדול ב-50 שקלים ממחיר הקנייה של מוצר ב'. סך הרווח משני המוצרים יחד הוא 64 שקלים. מהו מחיר הקנייה של מוצר ב'?&rlm;",
        "options": ["70", "60", "80", "50"],
        "correctAnswer": 0,
        "hint": "הגדירו את העלות של ב' כ-x, ושל א' כ-x+50. רשמו משוואה לסך הרווח.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את עלות מוצר ב'.", "math_expression": "C_B = x" },
            { "verbal_explanation": "נגדיר את עלות מוצר א' על פי הנתון.", "math_expression": "C_A = x + 50" },
            { "verbal_explanation": "נרכיב משוואה לסך הרווח של שני המוצרים.", "math_expression": "0.3(x + 50) + 0.4x = 64" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "0.3x + 15 + 0.4x = 64" },
            { "verbal_explanation": "נכנס איברים באגף שמאל.", "math_expression": "0.7x + 15 = 64" },
            { "verbal_explanation": "נחסר 15.", "math_expression": "0.7x = 49" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = \\dfrac{49}{0.7}" },
            { "verbal_explanation": "נחשב את הפתרון למוצר ב'.", "math_expression": "x = 70" }
        ],
        "final_answer": "70"
    },

    // ==========================================
    // תת נושא 4: בעיות תערובות וריכוזים (10 שאלות)
    // ==========================================
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "ל-40 ליטרים של תמיסה בריכוז של 10% כוהל, מוסיפים כמות של כוהל נקי (100%). מתקבלת תמיסה חדשה בריכוז של 20%. כמה ליטרים של כוהל נקי הוספו?&rlm;",
        "options": ["5", "4", "6", "8"],
        "correctAnswer": 0,
        "hint": "כמות הכוהל המקורית ועוד כמות הכוהל שהוספה שווה לריכוז החדש כפול הנפח הכולל החדש.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את כמות הכוהל שמוסיפים כמשתנה.", "math_expression": "x" },
            { "verbal_explanation": "נרשום משוואה של מסת הכוהל לפני התוספת, פלוס התוספת, מול הריכוז החדש בנפח המלא.", "math_expression": "40 \\times 0.1 + x \\times 1 = (40 + x) \\times 0.2" },
            { "verbal_explanation": "נחשב את הכפל בצד שמאל ונפתח סוגריים בימין.", "math_expression": "4 + x = 8 + 0.2x" },
            { "verbal_explanation": "נעביר אגפים ונכנס איברים.", "math_expression": "0.8x = 4" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = \\dfrac{4}{0.8}" },
            { "verbal_explanation": "נחשב את הערך.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "ישנם 30 ליטרים של תמיסת מלח בריכוז של 15%. כמה מים (ריכוז מלח 0%) יש לאדות כדי לקבל תמיסה בריכוז של 25%?&rlm;",
        "options": ["12", "10", "15", "8"],
        "correctAnswer": 0,
        "hint": "אידוי מים אינו משנה את כמות המלח בתמיסה, אלא רק מקטין את הנפח הכולל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את כמות המים המאודים כמשתנה.", "math_expression": "x" },
            { "verbal_explanation": "נרשום משוואה של מסת המלח שנותרת קבועה גם לאחר הקטנת הנפח.", "math_expression": "30 \\times 0.15 = (30 - x) \\times 0.25" },
            { "verbal_explanation": "נבצע את פעולת הכפל הפשוטה משמאל.", "math_expression": "4.5 = 7.5 - 0.25x" },
            { "verbal_explanation": "נעביר אגפים.", "math_expression": "0.25x = 3" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = \\dfrac{3}{0.25}" },
            { "verbal_explanation": "נקבל את הכמות המאודה.", "math_expression": "x = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מערבבים תמיסה א' בריכוז של 20% עם תמיסה ב' בריכוז של 50%. לאחר הערבוב, מקבלים 60 ליטרים של תמיסה בריכוז של 30%. כמה ליטרים של תמיסה א' נלקחו לערבוב?&rlm;",
        "options": ["40", "30", "20", "45"],
        "correctAnswer": 0,
        "hint": "סמנו כמות אחת כ-x ואת השנייה כ-60 פחות x. חברו את כמות החומר הפעיל משתיהן.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את נפח תמיסה א'.", "math_expression": "V_A = x" },
            { "verbal_explanation": "נבטא את נפח תמיסה ב' בהתבסס על הסכום הנתון.", "math_expression": "V_B = 60 - x" },
            { "verbal_explanation": "נרכיב משוואת חומר פעיל של שני המרכיבים יחד מול התמיסה החדשה.", "math_expression": "0.2x + 0.5(60 - x) = 60 \\times 0.3" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "0.2x + 30 - 0.5x = 18" },
            { "verbal_explanation": "נכנס איברים ונעביר אגפים.", "math_expression": "-0.3x = -12" },
            { "verbal_explanation": "נחלק במינוס לקבלת הנפח.", "math_expression": "x = \\dfrac{12}{0.3} = 40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מתיכים 10 ק''ג של נחושת בריכוז 80% עם 15 ק''ג של נחושת בריכוז \\( x\\% \\). הנתך המתקבל הוא בריכוז 68%. מצאו את \\( x \\).&rlm;",
        "options": ["60", "50", "70", "55"],
        "correctAnswer": 0,
        "hint": "סכום מסות החומר הפעיל מהרכיבים שווה למסת החומר הפעיל בנתך הסופי, ששוקל 25 ק''ג.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה של מסת נחושת מול התערובת.", "math_expression": "10 \\times 0.8 + 15 \\times (\\dfrac{x}{100}) = (10 + 15) \\times 0.68" },
            { "verbal_explanation": "נפשט ונחשב כפל.", "math_expression": "8 + 0.15x = 25 \\times 0.68" },
            { "verbal_explanation": "נשלים את המכפלה בימין.", "math_expression": "8 + 0.15x = 17" },
            { "verbal_explanation": "נחסר 8.", "math_expression": "0.15x = 9" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = \\dfrac{9}{0.15}" },
            { "verbal_explanation": "נמצא את הריכוז.", "math_expression": "x = 60" }
        ],
        "final_answer": "60"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "ל-50 גרם של תמיסת סוכר בריכוז 12% מוסיפים כמות של מלח (חומר שאינו מכיל סוכר). הריכוז החדש של הסוכר יורד ל-10%. כמה מלח הוסף?&rlm;",
        "options": ["10", "12", "5", "8"],
        "correctAnswer": 0,
        "hint": "הוספת מלח מגדילה את הנפח הכולל אך אינה מוסיפה חומר פעיל (סוכר). מסת הסוכר נשארה כפי שהיא.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את כמות המלח המוסף.", "math_expression": "x" },
            { "verbal_explanation": "נרכיב משוואת סוכר המציגה מסת חומר קבועה בתוך תמיסה גדולה יותר.", "math_expression": "50 \\times 0.12 = (50 + x) \\times 0.10" },
            { "verbal_explanation": "נחשב כפל ונפתח סוגריים.", "math_expression": "6 = 5 + 0.10x" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "1 = 0.1x" },
            { "verbal_explanation": "נחלק במקדם לקבלת המסה.", "math_expression": "x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מערבבים כמויות שוות של שתי תמיסות. האחת בריכוז 30% והשנייה בריכוז \\( x\\% \\). הריכוז החדש שנוצר הוא 40%. מהו \\( x \\)?&rlm;",
        "options": ["50", "45", "60", "40"],
        "correctAnswer": 0,
        "hint": "כאשר מערבבים כמויות שוות, הריכוז של התערובת הוא הממוצע החשבוני של שני הריכוזים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר שוויון כמויות למסה של יחידה אחת לכל מרכיב.", "math_expression": "m_1 = 1 \\quad , \\quad m_2 = 1" },
            { "verbal_explanation": "נרכיב משוואת חומר פעיל.", "math_expression": "1 \\times 30 + 1 \\times x = (1 + 1) \\times 40" },
            { "verbal_explanation": "נסדר את המשוואה כממוצע.", "math_expression": "30 + x = 2 \\times 40" },
            { "verbal_explanation": "נחשב כפל.", "math_expression": "30 + x = 80" },
            { "verbal_explanation": "נחסר למציאת האחוז.", "math_expression": "x = 50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "ל-20 ליטרים של תמיסה בריכוז 5%, מוסיפים 10 ליטרים של תמיסה בריכוז \\( x\\% \\) ו-10 ליטרים של מים טהורים (0%). הריכוז הסופי של התמיסה הוא 5%. מצאו את \\( x \\).&rlm;",
        "options": ["10", "15", "5", "20"],
        "correctAnswer": 0,
        "hint": "הנפח הכולל החדש הוא 40. המסה של החומר הפעיל מגיעה מהתמיסה הראשונה ומהשנייה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הנפח הכולל של התערובת.", "math_expression": "V = 20 + 10 + 10 = 40" },
            { "verbal_explanation": "נרכיב משוואה של כמות חומר פעיל בכל השלבים.", "math_expression": "20 \\times 0.05 + 10 \\times (\\dfrac{x}{100}) + 10 \\times 0 = 40 \\times 0.05" },
            { "verbal_explanation": "נחשב כפל בכל האגפים.", "math_expression": "1 + 0.1x = 2" },
            { "verbal_explanation": "נחסר אחד.", "math_expression": "0.1x = 1" },
            { "verbal_explanation": "נחלק במקדם.", "math_expression": "x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "מתוך מיכל מלא המכיל 100 ליטרים של תמיסה בריכוז 20%, מוציאים 10 ליטרים. במקומם מוסיפים למיכל 10 ליטרים של מים טהורים. מהו ריכוז התמיסה החדשה במיכל?&rlm;",
        "options": ["18%", "20%", "15%", "16%"],
        "correctAnswer": 0,
        "hint": "הוצאת 10 ליטרים משאירה במיכל 90 ליטרים של תמיסה בריכוז 20%. הוספת המים מחזירה את הנפח ל-100 ללא תוספת חומר פעיל.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את נפח התמיסה המקורית הנותר לאחר ההוצאה.", "math_expression": "V_{rem} = 100 - 10 = 90" },
            { "verbal_explanation": "נחשב את מסת החומר הפעיל בתמיסה שנותרה.", "math_expression": "M_{active} = 90 \\times 0.20 = 18" },
            { "verbal_explanation": "המים המוספים אינם מכילים חומר פעיל, והנפח חוזר למאה.", "math_expression": "V_{new} = 90 + 10 = 100" },
            { "verbal_explanation": "נחשב את הריכוז הסופי כאחוז.", "math_expression": "C = \\dfrac{18}{100} \\times 100 = 18" },
            { "verbal_explanation": "התקבלה התשובה באחוזים.", "math_expression": "18\\%" }
        ],
        "final_answer": "18%"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "תמיסה א' היא בריכוז 40% ותמיסה ב' היא בריכוז 10%. צריך להכין 30 ליטרים של תמיסה בריכוז 20%. כמה ליטרים יש לקחת מתמיסה ב'?&rlm;",
        "options": ["20", "10", "15", "25"],
        "correctAnswer": 0,
        "hint": "בטאו את נפח תמיסה א' כ-30 פחות נפח תמיסה ב'.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את נפח תמיסה ב'.", "math_expression": "V_B = x" },
            { "verbal_explanation": "נבטא את נפח תמיסה א'.", "math_expression": "V_A = 30 - x" },
            { "verbal_explanation": "נרכיב משוואת חומר פעיל לתערובת.", "math_expression": "0.4(30 - x) + 0.1x = 30 \\times 0.2" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "12 - 0.4x + 0.1x = 6" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "12 - 0.3x = 6" },
            { "verbal_explanation": "נעביר אגפים.", "math_expression": "0.3x = 6" },
            { "verbal_explanation": "נחלק במקדם למציאת הנפח.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות תערובות וריכוזים",
        "question_text": "8 ק''ג של סגסוגת המכילה 25% מתכת הותכו עם כמות מסוימת של מתכת טהורה (100%). הסגסוגת החדשה שהתקבלה מכילה 40% מהמתכת. מהי כמות המתכת הטהורה שהוספה?&rlm;",
        "options": ["2", "4", "3", "1.5"],
        "correctAnswer": 0,
        "hint": "הוסיפו x ק''ג בריכוז 100% ל-8 ק''ג בריכוז 25%. הנפח החדש הוא x+8 בריכוז 40%.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המסה שנוספה.", "math_expression": "x" },
            { "verbal_explanation": "נרכיב משוואה של חומר פעיל בלבד.", "math_expression": "8 \\times 0.25 + x \\times 1 = (8 + x) \\times 0.4" },
            { "verbal_explanation": "נחשב כפל ופתיחת סוגריים.", "math_expression": "2 + x = 3.2 + 0.4x" },
            { "verbal_explanation": "נעביר אגפים לבידוד המשתנה.", "math_expression": "x - 0.4x = 3.2 - 2" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "0.6x = 1.2" },
            { "verbal_explanation": "נחלק ב-0.6.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    // ==========================================
    // תת נושא 5: בעיות גיאומטריות המשלבות אלגברה (10 שאלות)
    // ==========================================
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "אורכו של מלבן גדול ב-3 ס''מ מרוחבו. שטח המלבן הוא 40 סמ''ר. מצאו את היקף המלבן.&rlm;",
        "options": ["26", "22", "28", "24"],
        "correctAnswer": 0,
        "hint": "סמנו את הרוחב ב-x ואת האורך ב-x+3. הרכיבו משוואה המבוססת על שטח מלבן, מצאו את הצלעות וחשבו היקף.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את רוחב המלבן כמשתנה.", "math_expression": "w = x" },
            { "verbal_explanation": "נגדיר את אורך המלבן בעזרת המשתנה והנתון.", "math_expression": "l = x + 3" },
            { "verbal_explanation": "נרכיב משוואת שטח על ידי מכפלת האורך ברוחב.", "math_expression": "x(x + 3) = 40" },
            { "verbal_explanation": "נפתח סוגריים ונסדר למשוואה ריבועית.", "math_expression": "x^{2} + 3x - 40 = 0" },
            { "verbal_explanation": "נפרק לגורמים או נשתמש בנוסחת שורשים.", "math_expression": "(x - 5)(x + 8) = 0" },
            { "verbal_explanation": "נבחר בפתרון החיובי בלבד מאחר ומדובר באורך צלע.", "math_expression": "x = 5" },
            { "verbal_explanation": "נחשב את אורך המלבן.", "math_expression": "l = 5 + 3 = 8" },
            { "verbal_explanation": "נחשב את היקף המלבן על פי סכום כל צלעותיו.", "math_expression": "P = 2(5 + 8)" },
            { "verbal_explanation": "נבצע את החישוב הסופי להיקף.", "math_expression": "P = 26" }
        ],
        "final_answer": "26"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "במשולש ישר זווית, ניצב אחד ארוך ב-7 ס''מ מהניצב השני. אורך היתר הוא 13 ס''מ. מהו שטח המשולש?&rlm;",
        "options": ["30", "60", "25", "35"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס כדי למצוא את הניצבים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שני ניצבי המשולש ישר הזווית.", "math_expression": "a = x \\quad , \\quad b = x + 7" },
            { "verbal_explanation": "נרכיב משוואה על סמך משפט פיתגורס והיתר הנתון.", "math_expression": "x^{2} + (x + 7)^{2} = 13^{2}" },
            { "verbal_explanation": "נפתח סוגריים לפי נוסחת כפל מקוצר ונחשב את ריבוע היתר.", "math_expression": "x^{2} + x^{2} + 14x + 49 = 169" },
            { "verbal_explanation": "נכנס איברים ונעביר מספרים לאגף אחד.", "math_expression": "2x^{2} + 14x - 120 = 0" },
            { "verbal_explanation": "נחלק בשתיים להקלת פתרון המשוואה הריבועית.", "math_expression": "x^{2} + 7x - 60 = 0" },
            { "verbal_explanation": "נפרק לגורמים.", "math_expression": "(x - 5)(x + 12) = 0" },
            { "verbal_explanation": "נחלץ את הפתרון החיובי לניצב הראשון.", "math_expression": "x = 5" },
            { "verbal_explanation": "נחשב את הניצב השני.", "math_expression": "b = 5 + 7 = 12" },
            { "verbal_explanation": "נחשב את שטח המשולש על ידי מחצית מכפלת הניצבים.", "math_expression": "S = \\dfrac{5 \\times 12}{2}" },
            { "verbal_explanation": "נשלים את החישוב.", "math_expression": "S = 30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "אורך של מלבן המקורי הוא 10 ס''מ ורוחבו אינו ידוע. אם נגדיל את אורך המלבן ב-20% ונקטין את רוחבו ב-10%, השטח החדש שיתקבל יהיה 108 סמ''ר. מה היה רוחבו המקורי של המלבן?&rlm;",
        "options": ["10", "12", "8", "9"],
        "correctAnswer": 0,
        "hint": "חשבו את האורך החדש. בטאו את הרוחב החדש בעזרת x ומקדם עשרוני. השוו את מכפלתם לשטח הנתון.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אורך המלבן המקורי.", "math_expression": "l = 10" },
            { "verbal_explanation": "נגדיר את רוחב המלבן המקורי במשתנה.", "math_expression": "w = x" },
            { "verbal_explanation": "נחשב את האורך החדש לאחר הגדלה בעשרים אחוזים.", "math_expression": "l_{new} = 10 \\times 1.2 = 12" },
            { "verbal_explanation": "נרשום את הרוחב החדש לאחר הקטנה בעשרה אחוזים.", "math_expression": "w_{new} = 0.9x" },
            { "verbal_explanation": "נרכיב משוואת שטח למלבן החדש.", "math_expression": "12 \\times 0.9x = 108" },
            { "verbal_explanation": "נבצע את המכפלה המספרית.", "math_expression": "10.8x = 108" },
            { "verbal_explanation": "נחלק במקדם כדי למצוא את המשתנה.", "math_expression": "x = \\dfrac{108}{10.8}" },
            { "verbal_explanation": "נקבל את הרוחב המקורי.", "math_expression": "x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "חותכים חוט מתכת שאורכו 24 ס''מ לשני חלקים. מחלק אחד יוצרים ריבוע ומחלק שני יוצרים מלבן שאורכו שווה לפעמיים רוחבו. סכום שטחי הריבוע והמלבן הוא 17 סמ''ר. מהו אורך צלע הריבוע? (הניחו שצלע הריבוע היא מספר שלם).&rlm;",
        "options": ["3", "4", "2", "5"],
        "correctAnswer": 0,
        "hint": "סמנו את צלע הריבוע ב-x ואת רוחב המלבן ב-y. בנו משוואה לסכום ההיקפים, בודדו משתנה והציבו במשוואת סכום השטחים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את צלעות הצורות במשתנים.", "math_expression": "a = x \\quad , \\quad w = y \\quad , \\quad l = 2y" },
            { "verbal_explanation": "נרכיב משוואה לסכום ההיקפים, השווה לאורך החוט.", "math_expression": "4x + 2(y + 2y) = 24" },
            { "verbal_explanation": "נכנס איברים ונצמצם את המשוואה בשתיים.", "math_expression": "4x + 6y = 24 \\Rightarrow 2x + 3y = 12" },
            { "verbal_explanation": "נבודד את כפילת המשתנה הראשון.", "math_expression": "2x = 12 - 3y" },
            { "verbal_explanation": "נרכיב משוואה לסכום שטחי הצורות.", "math_expression": "x^{2} + y(2y) = 17 \\Rightarrow x^{2} + 2y^{2} = 17" },
            { "verbal_explanation": "נכפיל את המשוואה בארבע כדי להציב ישירות את הביטוי שבודדנו.", "math_expression": "4x^{2} + 8y^{2} = 68 \\Rightarrow (2x)^{2} + 8y^{2} = 68" },
            { "verbal_explanation": "נציב את הביטוי למשוואת השטח.", "math_expression": "(12 - 3y)^{2} + 8y^{2} = 68" },
            { "verbal_explanation": "נפתח סוגריים ונסדר משוואה ריבועית.", "math_expression": "144 - 72y + 9y^{2} + 8y^{2} = 68 \\Rightarrow 17y^{2} - 72y + 76 = 0" },
            { "verbal_explanation": "נמצא את השורש השלם של המשוואה הריבועית.", "math_expression": "y = 2" },
            { "verbal_explanation": "נציב למציאת המשתנה הראשון המייצג את צלע הריבוע.", "math_expression": "2x = 12 - 3(2) = 6 \\Rightarrow x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "משולש ישר זווית חסום במעגל שרדיוסו 10 ס''מ. היקף המשולש הוא 48 ס''מ. מצאו את שטח המשולש.&rlm;",
        "options": ["96", "48", "192", "100"],
        "correctAnswer": 0,
        "hint": "במשולש ישר זווית החסום במעגל, היתר הוא קוטר המעגל. השתמשו במשפט פיתגורס ובנוסחאות כפל מקוצר.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את אורך היתר שהוא קוטר המעגל החוסם.", "math_expression": "c = 2R = 20" },
            { "verbal_explanation": "נרשום את היקף המשולש ונחלץ ממנו את סכום הניצבים.", "math_expression": "a + b + 20 = 48 \\Rightarrow a + b = 28" },
            { "verbal_explanation": "נעלה את משוואת סכום הניצבים בריבוע.", "math_expression": "(a + b)^{2} = 28^{2} \\Rightarrow a^{2} + 2ab + b^{2} = 784" },
            { "verbal_explanation": "נרשום את משפט פיתגורס לניצבים.", "math_expression": "a^{2} + b^{2} = c^{2} = 20^{2} = 400" },
            { "verbal_explanation": "נציב את ערך סכום הריבועים לתוך המשוואה הקודמת.", "math_expression": "400 + 2ab = 784" },
            { "verbal_explanation": "נבודד את האיבר המכיל את המכפלה.", "math_expression": "2ab = 384" },
            { "verbal_explanation": "נחלק בשתיים לקבלת מכפלת הניצבים.", "math_expression": "ab = 192" },
            { "verbal_explanation": "נחשב את שטח המשולש באמצעות מחצית מכפלת הניצבים.", "math_expression": "S = \\dfrac{ab}{2} = \\dfrac{192}{2}" },
            { "verbal_explanation": "התקבל השטח הסופי.", "math_expression": "S = 96" }
        ],
        "final_answer": "96"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "במעוין, סכום אורכי שני האלכסונים הוא 14 ס''מ. שטח המעוין הוא 24 סמ''ר. מהו אורך צלע המעוין?&rlm;",
        "options": ["5", "7", "6", "4"],
        "correctAnswer": 0,
        "hint": "שטח מעוין הוא מחצית מכפלת האלכסונים. מצאו את האלכסונים והשתמשו במשפט פיתגורס על חצאי האלכסונים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משוואת סכום האלכסונים.", "math_expression": "d_1 + d_2 = 14" },
            { "verbal_explanation": "נרשום את משוואת השטח המבוססת על אלכסונים ונסדר אותה.", "math_expression": "\\dfrac{d_1 \\times d_2}{2} = 24 \\Rightarrow d_1 \\times d_2 = 48" },
            { "verbal_explanation": "נציב ביטוי מהמשוואה הראשונה לתוך השנייה.", "math_expression": "d_1(14 - d_1) = 48" },
            { "verbal_explanation": "נסדר למשוואה ריבועית.", "math_expression": "d_1^{2} - 14d_1 + 48 = 0" },
            { "verbal_explanation": "נפרק לגורמים למציאת אורכי האלכסונים.", "math_expression": "(d_1 - 6)(d_1 - 8) = 0 \\Rightarrow d_1 = 6 \\quad , \\quad d_2 = 8" },
            { "verbal_explanation": "במעוין האלכסונים חוצים זה את זה ומאונכים. נחשב את חצאי האלכסונים.", "math_expression": "x = 3 \\quad , \\quad y = 4" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס לחישוב צלע המעוין.", "math_expression": "a^{2} = 3^{2} + 4^{2} = 9 + 16 = 25" },
            { "verbal_explanation": "נוציא שורש למציאת האורך.", "math_expression": "a = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "אם נגדיל את הרדיוס של מעגל נתון ב-3 ס''מ, שטח המעגל יגדל ב-\\( 33\\pi \\) סמ''ר. מה היה הרדיוס המקורי של המעגל?&rlm;",
        "options": ["4", "5", "6", "3"],
        "correctAnswer": 0,
        "hint": "בנו משוואה המשווה בין השטח המוגדל לשטח המקורי ועוד התוספת.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואת שטחים הכוללת את תוספת הרדיוס ותוספת השטח.", "math_expression": "\\pi(R + 3)^{2} - \\pi R^{2} = 33\\pi" },
            { "verbal_explanation": "נחלק את שני האגפים בפאי כדי להסיר אותו מהחישוב.", "math_expression": "(R + 3)^{2} - R^{2} = 33" },
            { "verbal_explanation": "נפתח סוגריים באמצעות נוסחת כפל מקוצר.", "math_expression": "R^{2} + 6R + 9 - R^{2} = 33" },
            { "verbal_explanation": "נצמצם את האיברים הריבועיים הזהים.", "math_expression": "6R + 9 = 33" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הימני.", "math_expression": "6R = 24" },
            { "verbal_explanation": "נחלק בשש למציאת הרדיוס המקורי.", "math_expression": "R = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "תמונה מלבנית שמידותיה 12 ס''מ על 16 ס''מ מוקפת במסגרת בעלת רוחב אחיד בכל צדדיה. ידוע כי שטח המסגרת לבדה הוא 128 סמ''ר. מהו רוחב המסגרת?&rlm;",
        "options": ["2", "3", "1.5", "4"],
        "correctAnswer": 0,
        "hint": "הוסיפו פעמיים את רוחב המסגרת לכל ממד של התמונה כדי לקבל את הממדים הכוללים. חסרו משטח זה את שטח התמונה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את רוחב המסגרת האחיד במשתנה.", "math_expression": "x" },
            { "verbal_explanation": "נגדיר את הממדים החיצוניים הכוללים של המסגרת יחד עם התמונה.", "math_expression": "l = 16 + 2x \\quad , \\quad w = 12 + 2x" },
            { "verbal_explanation": "נרכיב ביטוי לשטח החיצוני הכולל.", "math_expression": "S_{total} = (16 + 2x)(12 + 2x)" },
            { "verbal_explanation": "נחשב את שטחה הפנימי של התמונה בלבד.", "math_expression": "S_{inner} = 16 \\times 12 = 192" },
            { "verbal_explanation": "נרכיב משוואה המשווה בין ההפרש בשטחים לבין שטח המסגרת הנתון.", "math_expression": "(16 + 2x)(12 + 2x) - 192 = 128" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את המשוואה.", "math_expression": "192 + 32x + 24x + 4x^{2} - 192 = 128" },
            { "verbal_explanation": "נכנס איברים למשוואה ריבועית.", "math_expression": "4x^{2} + 56x - 128 = 0" },
            { "verbal_explanation": "נחלק בארבע להקלת הפתרון.", "math_expression": "x^{2} + 14x - 32 = 0" },
            { "verbal_explanation": "נפרק לגורמים או נשתמש בנוסחה.", "math_expression": "(x + 16)(x - 2) = 0" },
            { "verbal_explanation": "נבחר בפתרון החיובי המייצג רוחב פיזי.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "חותכים חוט מתכת שאורכו 36 ס''מ לשני חלקים. מחלק אחד יוצרים משולש שווה צלעות, ומחלק שני יוצרים ריבוע. ידוע כי אורך צלע הריבוע גדול ב-2 ס''מ מאורך צלע המשולש. מהו אורך צלע המשולש?&rlm;",
        "options": ["4", "5", "6", "3"],
        "correctAnswer": 0,
        "hint": "בנו משוואה לסכום ההיקפים (3 פעמים צלע המשולש ועוד 4 פעמים צלע הריבוע) והשוו לאורך החוט.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את אורך צלע המשולש שווה הצלעות במשתנה.", "math_expression": "a = x" },
            { "verbal_explanation": "נגדיר את אורך צלע הריבוע בהתאם לנתון.", "math_expression": "b = x + 2" },
            { "verbal_explanation": "נרכיב משוואה לסכום ההיקפים של שתי הצורות, השווה לאורך הכולל של החוט.", "math_expression": "3x + 4(x + 2) = 36" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "3x + 4x + 8 = 36" },
            { "verbal_explanation": "נכנס איברים משותפים באגף שמאלי.", "math_expression": "7x + 8 = 36" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף הימני בחסור.", "math_expression": "7x = 28" },
            { "verbal_explanation": "נחלק במקדם לבידוד סופי של המשתנה.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "word_problems_471",
        "subTopic": "בעיות גיאומטריות המשלבות אלגברה",
        "question_text": "בטרפז שווה שוקיים, הבסיס התחתון ארוך ב-16 ס''מ מהבסיס העליון. אורך השוק שווה לאורך הבסיס העליון. היקף הטרפז הוא 56 ס''מ. מהו שטח הטרפז?&rlm;",
        "options": ["108", "96", "120", "112"],
        "correctAnswer": 0,
        "hint": "היעזרו בהיקף למציאת צלעות הטרפז. לאחר מכן, הורידו גובה והשתמשו במשפט פיתגורס למציאת הגובה (מחצית הפרש הבסיסים הוא הניצב).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את אורך הבסיס העליון במשתנה.", "math_expression": "a = x" },
            { "verbal_explanation": "נגדיר את אורך הבסיס התחתון.", "math_expression": "b = x + 16" },
            { "verbal_explanation": "נגדיר את אורך השוק של הטרפז שווה השוקיים.", "math_expression": "c = x" },
            { "verbal_explanation": "נרכיב משוואה להיקף הטרפז.", "math_expression": "x + (x + 16) + 2x = 56" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "4x + 16 = 56" },
            { "verbal_explanation": "נפתור למציאת הצלע.", "math_expression": "4x = 40 \\Rightarrow x = 10" },
            { "verbal_explanation": "נמצא את החלק מהבסיס התחתון הנוצר מהורדת גובה (מחצית ההפרש בין הבסיסים).", "math_expression": "y = \\dfrac{26 - 10}{2} = 8" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס על המשולש שנוצר כדי למצוא את הגובה.", "math_expression": "h^{2} + 8^{2} = 10^{2} \\Rightarrow h^{2} = 100 - 64 = 36 \\Rightarrow h = 6" },
            { "verbal_explanation": "נחשב את שטח הטרפז באמצעות הנוסחה הסטנדרטית.", "math_expression": "S = \\dfrac{(10 + 26) \\times 6}{2}" },
            { "verbal_explanation": "נשלים את חישוב השטח.", "math_expression": "S = \\dfrac{36 \\times 6}{2} = 18 \\times 6 = 108" }
        ],
        "final_answer": "108"
    }
];