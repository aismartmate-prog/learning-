const questionsDB = [
    // ==========================================
    // תת נושא 1: חזרה על חומר כיתה ז' (10 שאלות)
    // ==========================================
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "חשבו את תוצאת תרגיל השברים הבא: \\( \\frac{2}{5} + \\frac{1}{4} \\)&rlm;",
        "options": ["13/20", "3/9", "3/20", "8/20"],
        "correctAnswer": 0,
        "hint": "כדי לחבר שברים בעלי מכנים שונים, יש למצוא תחילה מכנה משותף.",
        "solution_steps": [
            { "verbal_explanation": "נחפש מכנה משותף למספרים חמש וארבע. המכנה המשותף הקטן ביותר הוא עשרים.", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "נרחיב את השבר הראשון: נכפול את המונה והמכנה בארבע.", "math_expression": "\\frac{2 \\times 4}{5 \\times 4} = \\frac{8}{20}" },
            { "verbal_explanation": "נרחיב את השבר השני: נכפול את המונה והמכנה בחמש.", "math_expression": "\\frac{1 \\times 5}{4 \\times 5} = \\frac{5}{20}" },
            { "verbal_explanation": "נחבר את שני השברים המורחבים בעלי המכנה המשותף.", "math_expression": "\\frac{8}{20} + \\frac{5}{20}" },
            { "verbal_explanation": "בחיבור שברים, מחברים רק את המונים והמכנה נשאר זהה.", "math_expression": "\\frac{8 + 5}{20}" },
            { "verbal_explanation": "התוצאה הסופית של החיבור היא שלוש עשרה חלקי עשרים.", "math_expression": "\\frac{13}{20}" }
        ],
        "final_answer": "13/20"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "חשבו את התוצאה של תרגיל המספרים המכוונים הבא: \\( -12 - (-5) \\)&rlm;",
        "options": ["-7", "-17", "7", "17"],
        "correctAnswer": 0,
        "hint": "חיסור של מספר שלילי שקול לחיבור של מספר חיובי. 'מינוס מינוס' הופך ל'פלוס'.",
        "solution_steps": [
            { "verbal_explanation": "נסתכל על התרגיל ונזהה שני סימני מינוס ברצף.", "math_expression": "-12 - (-5)" },
            { "verbal_explanation": "הכלל קובע שחיסור של מספר שלילי הופך לפעולת חיבור.", "math_expression": "- (-5) = + 5" },
            { "verbal_explanation": "נכתוב את התרגיל מחדש בצורה פשוטה יותר.", "math_expression": "-12 + 5" },
            { "verbal_explanation": "אנו נמצאים במינוס שנים עשר ועולים חמישה צעדים למעלה.", "math_expression": "12 - 5 = 7" },
            { "verbal_explanation": "מכיוון שהחלק השלילי גדול יותר, התוצאה נשארת מתחת לאפס.", "math_expression": "-7" }
        ],
        "final_answer": "-7"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "פתרו את המשוואה הבאה ומצאו את ערכו של \\( x \\):<br>\\( 5x + 8 = 28 \\)&rlm;",
        "options": ["4", "5", "3", "20"],
        "correctAnswer": 0,
        "hint": "העבירו את המספרים החופשיים לאגף אחד על ידי חיסור, ולאחר מכן חלקו במקדם של איקס.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה מכילה משתנה ומספר חופשי באגף השמאלי.", "math_expression": "5x + 8 = 28" },
            { "verbal_explanation": "נחסר שמונה משני אגפי המשוואה כדי לבודד את איבר הכפל.", "math_expression": "28 - 8" },
            { "verbal_explanation": "נחשב את אגף ימין ונקבל את המשוואה המעודכנת.", "math_expression": "5x = 20" },
            { "verbal_explanation": "נחלק את שני האגפים בחמש כדי למצוא את המשתנה הבודד.", "math_expression": "20 \\div 5" },
            { "verbal_explanation": "תוצאת החילוק מראה שהנעלם שווה לארבע.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "במשולש נתון, אורך הבסיס הוא 10 סנטימטרים, והגובה לאותו בסיס הוא 6 סנטימטרים. מהו שטח המשולש?&rlm;",
        "options": ["30", "60", "16", "15"],
        "correctAnswer": 0,
        "hint": "נוסחת שטח משולש היא מחצית ממכפלת הבסיס והגובה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הנתונים: הבסיס שווה לעשר והגובה שווה לשש.", "math_expression": "10 \\quad , \\quad 6" },
            { "verbal_explanation": "לפי הנוסחה, יש להכפיל תחילה את הבסיס בגובה.", "math_expression": "10 \\times 6" },
            { "verbal_explanation": "תוצאת המכפלה היא שישים.", "math_expression": "60" },
            { "verbal_explanation": "מכיוון שמדובר במשולש ולא במלבן, עלינו לחלק את התוצאה בשתיים.", "math_expression": "60 \\div 2" },
            { "verbal_explanation": "שטח המשולש הוא שלושים סנטימטרים רבועים.", "math_expression": "30" }
        ],
        "final_answer": "30"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "חשבו כמה הם 40% מתוך 200 שקלים.&rlm;",
        "options": ["80", "40", "120", "100"],
        "correctAnswer": 0,
        "hint": "מצאו קודם כמה הם 10% (על ידי חלוקה בעשר), ואז כפלו את התוצאה בארבע.",
        "solution_steps": [
            { "verbal_explanation": "השלם הנתון בתרגיל הוא מאתיים.", "math_expression": "200" },
            { "verbal_explanation": "נחשב תחילה עשרה אחוזים מהשלם על ידי חלוקתו בעשר.", "math_expression": "200 \\div 10" },
            { "verbal_explanation": "עשרה אחוזים שווים לעשרים שקלים.", "math_expression": "20" },
            { "verbal_explanation": "אנו צריכים ארבעים אחוזים, שהם פי ארבעה מעשרה אחוזים. נכפול בארבע.", "math_expression": "20 \\times 4" },
            { "verbal_explanation": "התוצאה היא שמונים שקלים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "חשבו את התרגיל הבא על פי סדר פעולות חשבון:<br>\\( 20 - 4 \\times 2 + 6 \\)&rlm;",
        "options": ["18", "38", "8", "26"],
        "correctAnswer": 0,
        "hint": "כפל קודם לחיבור ולחיסור. לאחר מכן, בצעו את הפעולות משמאל לימין.",
        "solution_steps": [
            { "verbal_explanation": "נחפש את הפעולה הקודמת ביותר בתרגיל, שהיא פעולת הכפל.", "math_expression": "4 \\times 2" },
            { "verbal_explanation": "נחשב את הכפל ונקבל שמונה.", "math_expression": "8" },
            { "verbal_explanation": "נרשום את התרגיל מחדש לאחר פתרון הכפל.", "math_expression": "20 - 8 + 6" },
            { "verbal_explanation": "נבצע את הפעולות משמאל לימין. קודם נחסר שמונה מעשרים.", "math_expression": "20 - 8 = 12" },
            { "verbal_explanation": "כעת נוסיף את השש לתוצאה שקיבלנו.", "math_expression": "12 + 6 = 18" },
            { "verbal_explanation": "התוצאה הסופית של התרגיל היא שמונה עשרה.", "math_expression": "18" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "שתי זוויות צמודות נמצאות על קו ישר אחד. גודלה של זווית אחת הוא 115 מעלות. מה גודלה של הזווית השנייה?&rlm;",
        "options": ["65", "75", "180", "115"],
        "correctAnswer": 0,
        "hint": "סכום של זוויות צמודות תמיד שווה ל-180 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "זוויות צמודות משלימות זו את זו לזווית שטוחה שגודלה קבוע.", "math_expression": "180" },
            { "verbal_explanation": "גודל הזווית הידועה לנו הוא מאה וחמש עשרה מעלות.", "math_expression": "115" },
            { "verbal_explanation": "כדי למצוא את הזווית החסרה, נחסר את הזווית הידועה מתוך מאה ושמונים.", "math_expression": "180 - 115" },
            { "verbal_explanation": "נחשב את ההפרש ונקבל את התוצאה.", "math_expression": "65" },
            { "verbal_explanation": "גודל הזווית השנייה הוא שישים וחמש מעלות.", "math_expression": "65" }
        ],
        "final_answer": "65"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "תיבה עשויה מעץ. מידות התיבה הן: אורך 5 ס''מ, רוחב 4 ס''מ, וגובה 2 ס''מ. מהו נפח התיבה?&rlm;",
        "options": ["40", "20", "11", "10"],
        "correctAnswer": 0,
        "hint": "נפח תיבה מתקבל מהכפלת שלושת הממדים: אורך, רוחב וגובה.",
        "solution_steps": [
            { "verbal_explanation": "הנוסחה לחישוב נפח תיבה היא מכפלת כל שלושת הממדים שלה.", "math_expression": "5 \\times 4 \\times 2" },
            { "verbal_explanation": "נחשב תחילה את מכפלת האורך ברוחב (שטח הבסיס).", "math_expression": "5 \\times 4 = 20" },
            { "verbal_explanation": "כעת נכפול את שטח הבסיס שמצאנו בגובה התיבה.", "math_expression": "20 \\times 2" },
            { "verbal_explanation": "התוצאה הסופית של הנפח היא ארבעים סמ''ק.", "math_expression": "40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "היחס בין כמות הבנים לכמות הבנות בחוג לציור הוא 2:3 (על כל 2 בנים יש 3 בנות). בסך הכל יש בחוג 25 ילדים. כמה בנים יש בחוג?&rlm;",
        "options": ["10", "15", "5", "12"],
        "correctAnswer": 0,
        "hint": "חברו את חלקי היחס יחד כדי למצוא כמה ילדים שווים לחלק אחד, ואז כפלו בחלק של הבנים.",
        "solution_steps": [
            { "verbal_explanation": "נחבר את מספרי היחס כדי למצוא את מספר החלקים הכולל בחוג.", "math_expression": "2 + 3 = 5" },
            { "verbal_explanation": "נחלק את המספר הכולל של הילדים במספר החלקים כדי לדעת כמה ילדים יש בחלק אחד.", "math_expression": "25 \\div 5" },
            { "verbal_explanation": "חלק אחד שווה לחמישה ילדים.", "math_expression": "5" },
            { "verbal_explanation": "הבנים מהווים שני חלקים ביחס. נכפול את הערך של חלק אחד בשתיים.", "math_expression": "5 \\times 2" },
            { "verbal_explanation": "בחוג ישנם עשרה בנים.", "math_expression": "10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "חזרה על חומר כיתה ז'",
        "question_text": "אורכו של מלבן הוא 9 סנטימטרים ורוחבו 7 סנטימטרים. מהו היקף המלבן?&rlm;",
        "options": ["32", "63", "16", "25"],
        "correctAnswer": 0,
        "hint": "היקף הוא הסכום של כל ארבע צלעות המלבן (פעמיים אורך ופעמיים רוחב).",
        "solution_steps": [
            { "verbal_explanation": "היקף מלבן מורכב משתי צלעות של אורך ושתי צלעות של רוחב.", "math_expression": "2 \\times 9 + 2 \\times 7" },
            { "verbal_explanation": "נחשב את הסכום של פעמיים האורך.", "math_expression": "9 \\times 2 = 18" },
            { "verbal_explanation": "נחשב את הסכום של פעמיים הרוחב.", "math_expression": "7 \\times 2 = 14" },
            { "verbal_explanation": "נחבר את שתי התוצאות לקבלת ההיקף הכולל.", "math_expression": "18 + 14" },
            { "verbal_explanation": "היקף המלבן הוא שלושים ושניים סנטימטרים.", "math_expression": "32" }
        ],
        "final_answer": "32"
    },

    // ==========================================
    // תת נושא 2: פתרון מבחנים משנים קודמות (10 שאלות)
    // ==========================================
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "פתרו את המשוואה הבאה המכילה סוגריים:<br>\\( 4(x - 3) = 20 \\)&rlm;",
        "options": ["8", "5", "2", "11"],
        "correctAnswer": 0,
        "hint": "ניתן לחלק את שני האגפים ב-4 בתחילת הפתרון, ואז להוסיף 3.",
        "solution_steps": [
            { "verbal_explanation": "במקום לפתוח סוגריים, נחלק את כל המשוואה בארבע כדי לבטל את המקדם.", "math_expression": "20 \\div 4" },
            { "verbal_explanation": "הסוגריים נותרים לבדם באגף שמאל, ומושווים לחמש.", "math_expression": "x - 3 = 5" },
            { "verbal_explanation": "כדי לבודד את המשתנה, נוסיף שלוש לשני האגפים.", "math_expression": "5 + 3" },
            { "verbal_explanation": "נחשב את הסכום ונקבל את התשובה.", "math_expression": "8" },
            { "verbal_explanation": "הפתרון הוא שמונה.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "תלמיד קיבל בשלושה מבחנים את הציונים: 60, 80, 100. מהו הציון הממוצע שלו?&rlm;",
        "options": ["80", "90", "70", "240"],
        "correctAnswer": 0,
        "hint": "חברו את כל הציונים וחלקו את הסכום במספר המבחנים.",
        "solution_steps": [
            { "verbal_explanation": "חישוב ממוצע מתחיל בסכימה של כל הנתונים יחד.", "math_expression": "60 + 80 + 100" },
            { "verbal_explanation": "נחשב את הסכום הכולל של שלושת הציונים.", "math_expression": "240" },
            { "verbal_explanation": "נחלק את הסכום במספר המבחנים שהתקיימו, שהם שלושה.", "math_expression": "240 \\div 3" },
            { "verbal_explanation": "נבצע את פעולת החילוק.", "math_expression": "80" },
            { "verbal_explanation": "הציון הממוצע של התלמיד הוא שמונים.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "מטילים קוביית משחק סטנדרטית (1 עד 6). מהי ההסתברות שיתקבל מספר זוגי?&rlm;",
        "options": ["1/2", "1/6", "1/3", "3/4"],
        "correctAnswer": 0,
        "hint": "ספרו כמה מספרים זוגיים יש בקובייה וחלקו בסך הכל האפשרויות.",
        "solution_steps": [
            { "verbal_explanation": "מרחב המדגם המלא של הטלת קובייה כולל שש תוצאות אפשריות.", "math_expression": "6" },
            { "verbal_explanation": "המספרים הזוגיים על קובייה הם שתיים, ארבע ושש. בסך הכל שלוש תוצאות.", "math_expression": "3" },
            { "verbal_explanation": "נרשום את ההסתברות כשבר: מספר התוצאות הרצויות לחלק לכלל התוצאות.", "math_expression": "\\frac{3}{6}" },
            { "verbal_explanation": "נצמצם את השבר על ידי חלוקה בשלוש ונקבל את התשובה הסופית.", "math_expression": "\\frac{1}{2}" }
        ],
        "final_answer": "1/2"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "מחיר נעליים היה 150 שקלים. בסוף העונה ניתנה הנחה של 20%. כמה יעלו הנעליים לאחר ההנחה?&rlm;",
        "options": ["120", "130", "30", "100"],
        "correctAnswer": 0,
        "hint": "חשבו כמה שקלים מהווים 20 אחוזים, וחסרו אותם מהמחיר המקורי.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה עשרה אחוזים מהמחיר, על ידי חלוקה בעשר.", "math_expression": "150 \\div 10 = 15" },
            { "verbal_explanation": "עשרים אחוזים הם פי שניים מעשרה אחוזים. נכפול בשתיים למציאת סכום ההנחה.", "math_expression": "15 \\times 2 = 30" },
            { "verbal_explanation": "ההנחה היא בסך שלושים שקלים. נחסר סכום זה מהמחיר המקורי.", "math_expression": "150 - 30" },
            { "verbal_explanation": "המחיר החדש הוא מאה ועשרים שקלים.", "math_expression": "120" }
        ],
        "final_answer": "120"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "שני ישרים נחתכים ויוצרים זוויות קודקודיות. זווית אחת היא \\( 2x \\) והזווית שמולה היא \\( 70 \\) מעלות. מהו הערך של \\( x \\)?&rlm;",
        "options": ["35", "70", "140", "20"],
        "correctAnswer": 0,
        "hint": "זוויות קודקודיות תמיד שוות זו לזו. השוו ביניהן ופתרו.",
        "solution_steps": [
            { "verbal_explanation": "הכלל קובע שזוויות קודקודיות הנמצאות אחת מול השנייה תמיד שוות בגודלן.", "math_expression": "2x = 70" },
            { "verbal_explanation": "המשוואה שלנו אומרת שפעמיים איקס שווה לשבעים.", "math_expression": "2x = 70" },
            { "verbal_explanation": "כדי למצוא איקס בודד, נחלק את שני האגפים בשתיים.", "math_expression": "70 \\div 2" },
            { "verbal_explanation": "תוצאת החילוק היא שלושים וחמש.", "math_expression": "35" },
            { "verbal_explanation": "המשתנה שחיפשנו שווה לשלושים וחמש.", "math_expression": "x = 35" }
        ],
        "final_answer": "35"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "פשטו את הביטוי האלגברי הבא וכנסו איברים דומים:<br>\\( 3x + 5 - x + 4 \\)&rlm;",
        "options": ["2x + 9", "4x + 9", "2x + 1", "4x + 1"],
        "correctAnswer": 0,
        "hint": "חברו את המשתנים בנפרד, ואת המספרים בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נזהה ונכנס את האיברים המכילים את המשתנה איקס.", "math_expression": "3x - x" },
            { "verbal_explanation": "שלושה איקס פחות איקס אחד שווה לשני איקס.", "math_expression": "2x" },
            { "verbal_explanation": "כעת נכנס את המספרים החופשיים שאין להם משתנה.", "math_expression": "5 + 4" },
            { "verbal_explanation": "חמש ועוד ארבע שווה לתשע.", "math_expression": "9" },
            { "verbal_explanation": "נחבר את שתי התוצאות לביטוי אחד מפושט.", "math_expression": "2x + 9" }
        ],
        "final_answer": "2x + 9"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "נתונה הפונקציה: \\( y = 2x + 7 \\). מה יהיה ערכו של \\( y \\) אם נציב \\( x = 5 \\)?&rlm;",
        "options": ["17", "12", "24", "10"],
        "correctAnswer": 0,
        "hint": "החליפו את איקס במספר 5, זכרו שכפל קודם לחיבור.",
        "solution_steps": [
            { "verbal_explanation": "נציב את המספר חמש במקום המשתנה איקס בתוך הפונקציה.", "math_expression": "y = 2 \\times 5 + 7" },
            { "verbal_explanation": "לפי סדר פעולות חשבון, נבצע את פעולת הכפל לפני החיבור.", "math_expression": "2 \\times 5 = 10" },
            { "verbal_explanation": "נכתוב את התרגיל המעודכן עם תוצאת הכפל.", "math_expression": "y = 10 + 7" },
            { "verbal_explanation": "נחבר את המספרים ונקבל את התוצאה הסופית של הפונקציה.", "math_expression": "17" },
            { "verbal_explanation": "ערכו של וואי הוא שבע עשרה.", "math_expression": "y = 17" }
        ],
        "final_answer": "17"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "נהג עבר מרחק של 240 קילומטרים במשך 3 שעות של נסיעה רצופה. מה הייתה מהירות נסיעתו הממוצעת?&rlm;",
        "options": ["80", "70", "90", "720"],
        "correctAnswer": 0,
        "hint": "מהירות מחושבת על ידי חלוקת המרחק בזמן שלקח לעבור אותו.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את המרחק הכולל נתון בשאלה.", "math_expression": "240" },
            { "verbal_explanation": "נזהה את הזמן שבו התבצעה הנסיעה.", "math_expression": "3" },
            { "verbal_explanation": "נזכור שמהירות מחושבת כמרחק מחולק בזמן.", "math_expression": "240 \\div 3" },
            { "verbal_explanation": "נבצע את פעולת החילוק.", "math_expression": "80" },
            { "verbal_explanation": "המהירות הייתה שמונים קילומטרים בשעה.", "math_expression": "80" }
        ],
        "final_answer": "80"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "סכומם של שלושה מספרים עוקבים (כמו 4,5,6) הוא 30. מהו המספר הראשון והקטן ביותר מביניהם?&rlm;",
        "options": ["9", "10", "8", "11"],
        "correctAnswer": 0,
        "hint": "המספרים הם x, ואז x+1, ואז x+2. סכומם שווה ל-30.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שלושת המספרים העוקבים בעזרת נעלם אחד.", "math_expression": "x \\quad , \\quad x + 1 \\quad , \\quad x + 2" },
            { "verbal_explanation": "נבנה משוואה על ידי חיבור שלושת המספרים והשוואתם לשלושים.", "math_expression": "x + x + 1 + x + 2 = 30" },
            { "verbal_explanation": "נכנס איברים דומים באגף השמאלי.", "math_expression": "3x + 3 = 30" },
            { "verbal_explanation": "נחסר שלוש מהאגף הימני.", "math_expression": "3x = 27" },
            { "verbal_explanation": "נחלק בשלוש למציאת המספר הראשון.", "math_expression": "27 \\div 3 = 9" },
            { "verbal_explanation": "המספר הקטן ביותר הוא תשע.", "math_expression": "x = 9" }
        ],
        "final_answer": "9"
    },
    {
        "topic": "meitzav_practice_grade_8",
        "subTopic": "פתרון מבחנים משנים קודמות",
        "question_text": "היקף של ריבוע הוא 40 סנטימטרים. מהו שטחו של הריבוע?&rlm;",
        "options": ["100", "400", "1600", "20"],
        "correctAnswer": 0,
        "hint": "קודם יש למצוא את אורך הצלע על ידי חלוקת ההיקף ב-4. אחר כך, כפלו את הצלע בעצמה כדי לקבל שטח.",
        "solution_steps": [
            { "verbal_explanation": "לריבוע יש ארבע צלעות השוות זו לזו. לכן, נמצא את אורך הצלע על ידי חלוקת ההיקף בארבע.", "math_expression": "40 \\div 4" },
            { "verbal_explanation": "תוצאת החילוק מראה שאורך כל צלע הוא עשרה סנטימטרים.", "math_expression": "10" },
            { "verbal_explanation": "שטח ריבוע מחושב על ידי הכפלת הצלע בעצמה.", "math_expression": "10 \\times 10" },
            { "verbal_explanation": "נבצע את ההכפלה.", "math_expression": "100" },
            { "verbal_explanation": "שטח הריבוע הוא מאה סנטימטרים רבועים.", "math_expression": "100" }
        ],
        "final_answer": "100"
    }
];