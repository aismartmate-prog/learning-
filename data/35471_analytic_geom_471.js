const questionsDB = [
    // =====================================================================
    // תת-נושא 1: מרחק בין נקודות ונקודת אמצע קטע (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "מצאו את המרחק בין שתי הנקודות A(2, 1) ו-B(6, 4) במישור הקרטזי.<br><svg viewBox='0 0 200 150' width='180' height='130' style='display:block; margin: 15px auto;'><line x1='20' y1='130' x2='180' y2='130' stroke='#94a3b8' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='140' stroke='#94a3b8' stroke-width='2'/><line x1='50' y1='110' x2='110' y2='50' stroke='#3b82f6' stroke-width='3'/><circle cx='50' cy='110' r='4' fill='#ef4444'/><circle cx='110' cy='50' r='4' fill='#ef4444'/><text x='50' y='125' font-weight='bold' font-size='12' text-anchor='middle'>A(2,1)</text><text x='110' y='40' font-weight='bold' font-size='12' text-anchor='middle'>B(6,4)</text><line x1='50' y1='110' x2='110' y2='110' stroke='#cbd5e1' stroke-width='2' stroke-dasharray='4,4'/><line x1='110' y1='110' x2='110' y2='50' stroke='#cbd5e1' stroke-width='2' stroke-dasharray='4,4'/></svg>",
        options: [
            "5",
            "7",
            "25",
            "4"
        ],
        hint: "השתמשו בנוסחת המרחק (דיסטנס) המבוססת על משפט פיתגורס: שורש של סכום ריבועי ההפרשים של שיעורי ה-x ושיעורי ה-y.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את המרחק בין שתי נקודות, נציב את שיעורי ה-x וה-y שלהן בנוסחת המרחק (Distance).", math_expression: "d = &radic;((x_2 - x_1)<sup>2</sup> + (y_2 - y_1)<sup>2</sup>)" },
            { verbal_explanation: "נציב את ערכי הנקודות הנתונות לנו בשאלה אל תוך הנוסחה.", math_expression: "d = &radic;((6 - 2)<sup>2</sup> + (4 - 1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ההפרשים בתוך כל אחד מהסוגריים.", math_expression: "d = &radic;(4<sup>2</sup> + 3<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע את התוצאות.", math_expression: "d = &radic;(16 + 9)" },
            { verbal_explanation: "נחבר את המספרים מתחת לשורש.", math_expression: "d = &radic;25" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את אורך הקטע המדויק.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נתון קטע שקצותיו הם בנקודות (-2, 8) ו-(6, -4).<br>מהם שיעורי נקודת אמצע הקטע?",
        options: [
            "(2, 2)",
            "(4, 4)",
            "(2, 6)",
            "(4, 2)"
        ],
        hint: "נוסחת אמצע קטע היא הממוצע החשבוני של שיעורי ה-x והממוצע החשבוני של שיעורי ה-y של קצות הקטע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את שיעור ה-x של נקודת האמצע, נחבר את שיעורי ה-x של קצות הקטע ונחלק בשתיים.", math_expression: "x_M = (-2 + 6) / 2" },
            { verbal_explanation: "נחשב את שבר ה-x.", math_expression: "x_M = 4 / 2 = 2" },
            { verbal_explanation: "נחזור על הפעולה עבור שיעור ה-y: נחבר את שיעורי ה-y של הקצוות ונחלק בשתיים.", math_expression: "y_M = (8 + (-4)) / 2" },
            { verbal_explanation: "נחשב את שבר ה-y.", math_expression: "y_M = 4 / 2 = 2" },
            { verbal_explanation: "נאחד את התוצאות לנקודה אחת במישור.", math_expression: "(2, 2)" }
        ],
        final_answer: "(2, 2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "הנקודה M(4, 5) היא נקודת האמצע של הקטע AB. <br>ידוע ששיעורי הנקודה A הם (1, 2). <br>מהם שיעורי הנקודה B (הקצה השני של הקטע)?",
        options: [
            "(7, 8)",
            "(6, 7)",
            "(3, 3)",
            "(5, 8)"
        ],
        hint: "הציבו את הנקודה הידועה ואת נקודת האמצע בנוסחת אמצע הקטע, ובנו שתי משוואות נפרדות: אחת לחילוץ x של הקצה השני ואחת לחילוץ y.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסמן את שיעורי הנקודה B ב-x ו-y. נציב את הנתונים בנוסחת אמצע קטע עבור ציר x.", math_expression: "(1 + x) / 2 = 4" },
            { verbal_explanation: "נכפיל בשתיים את המשוואה כדי לחלץ את ה-x של הנקודה B.", math_expression: "1 + x = 8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 7" },
            { verbal_explanation: "נרכיב משוואה דומה עבור ציר ה-y, ונציב את הנתונים הידועים.", math_expression: "(2 + y) / 2 = 5" },
            { verbal_explanation: "נכפיל בשתיים כדי לחלץ את ה-y של הנקודה B.", math_expression: "2 + y = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 8" },
            { verbal_explanation: "נקודת הקצה השנייה מורכבת משני הערכים שמצאנו.", math_expression: "(7, 8)" }
        ],
        final_answer: "(7, 8)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "המרחק בין הנקודה (x, 5) לבין הנקודה (3, 1) הוא בדיוק 5 יחידות אורך.<br>מצאו את ערכו של x, אם ידוע כי x &gt; 3.",
        options: [
            "6",
            "7",
            "0",
            "8"
        ],
        hint: "הציבו את הנקודות והמרחק בתוך נוסחת הדיסטנס. כדי להיפטר מהשורש הריבועי, העלו את שני אגפי המשוואה בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את שתי הנקודות ואת המרחק הידוע ביניהן לתוך נוסחת המרחק.", math_expression: "&radic;((x - 3)<sup>2</sup> + (5 - 1)<sup>2</sup>) = 5" },
            { verbal_explanation: "נחשב את ההפרש בסוגריים הימניים.", math_expression: "&radic;((x - 3)<sup>2</sup> + 4<sup>2</sup>) = 5" },
            { verbal_explanation: "נעלה את שני אגפי המשוואה בריבוע כדי לבטל את השורש.", math_expression: "(x - 3)<sup>2</sup> + 16 = 25" },
            { verbal_explanation: "נעביר את 16 לאגף הימני על ידי חיסור.", math_expression: "(x - 3)<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורש משני האגפים. מכיוון שנתון x>3, הביטוי (x-3) הוא חיובי, ולכן ניקח את השורש החיובי בלבד.", math_expression: "x - 3 = 3" },
            { verbal_explanation: "נעביר אגפים ונמצא את ערכו של x.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נתון משולש שקודקודיו הם: A(0, 8) , B(-3, 0) , C(3, 0).<br>קטע AD הוא התיכון לצלע BC. מהו אורכו של התיכון AD?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><line x1='20' y1='120' x2='180' y2='120' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#94a3b8' stroke-width='2'/><polygon points='100,20 40,120 160,120' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='100' y1='20' x2='100' y2='120' stroke='#ef4444' stroke-width='3' stroke-dasharray='4,4'/><circle cx='100' cy='20' r='4' fill='#0f172a'/><circle cx='40' cy='120' r='4' fill='#0f172a'/><circle cx='160' cy='120' r='4' fill='#0f172a'/><text x='125' y='25' font-weight='bold'>A(0,8)</text><text x='30' y='140' font-weight='bold'>B</text><text x='170' y='140' font-weight='bold'>C</text></svg>",
        options: [
            "8",
            "10",
            "6",
            "5"
        ],
        hint: "תיכון מחלק את הצלע שאליה הוא יורד לשני חלקים שווים. לכן, נקודה D היא נקודת האמצע של הצלע BC. מצאו אותה ואז חשבו מרחק.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון ש-AD הוא תיכון, הנקודה D היא נקודת האמצע של הקטע המחבר את B ו-C. נחשב את שיעוריה בעזרת נוסחת אמצע קטע.", math_expression: "x_D = (-3 + 3) / 2 = 0 / 2 = 0" },
            { verbal_explanation: "שיעור ה-y של שתי הנקודות הוא אפס, ולכן גם האמצע הוא אפס.", math_expression: "y_D = (0 + 0) / 2 = 0" },
            { verbal_explanation: "נקודת האמצע שמצאנו היא למעשה ראשית הצירים.", math_expression: "D(0, 0)" },
            { verbal_explanation: "אורך התיכון הוא המרחק בין הקודקוד A לנקודה D. מכיוון ששתי הנקודות נמצאות על ציר ה-y (שיעור ה-x שלהן הוא 0), המרחק הוא פשוט ההפרש בין שיעורי ה-y.", math_expression: "d = 8 - 0 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נקודה הנמצאת על ציר ה-x נמצאת במרחק שווה מהנקודות (0, 3) ו- (4, 5).<br>מהו שיעור ה-x של נקודה זו?",
        options: [
            "4",
            "2",
            "5",
            "3"
        ],
        hint: "נקודה על ציר ה-x היא מהצורה (x, 0). השוו את נוסחת המרחק בין נקודה זו לנקודה הראשונה, לנוסחת המרחק בינה לבין הנקודה השנייה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודה המונחת על ציר ה-x מתאפיינת בכך ששיעור ה-y שלה הוא אפס.", math_expression: "(x, 0)" },
            { verbal_explanation: "נשווה את המרחק מהנקודה שלנו לנקודה הראשונה, למרחק מהנקודה שלנו לנקודה השנייה. נעלה את שני הצדדים בריבוע מראש כדי לבטל את השורש בנוסחה.", math_expression: "(x - 0)<sup>2</sup> + (0 - 3)<sup>2</sup> = (x - 4)<sup>2</sup> + (0 - 5)<sup>2</sup>" },
            { verbal_explanation: "נפתח את החזקות ואת הסוגריים.", math_expression: "x<sup>2</sup> + 9 = (x - 4)<sup>2</sup> + 25" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין בעזרת כפל מקוצר.", math_expression: "x<sup>2</sup> + 9 = x<sup>2</sup> - 8x + 16 + 25" },
            { verbal_explanation: "נכנס איברים דומים. האיקס בריבוע מצטמצם משני האגפים.", math_expression: "9 = -8x + 41" },
            { verbal_explanation: "נעביר את המשתנה שמאלה ואת המספר ימינה.", math_expression: "8x = 41 - 9 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 8x = 32" },
            { verbal_explanation: "נחלק בשמונה למציאת התשובה.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "AB הוא קוטר במעגל. קצות הקוטר הם בנקודות A(-2, 3) ו- B(4, 11).<br>מהו אורך רדיוס המעגל?",
        options: [
            "5",
            "10",
            "25",
            "8"
        ],
        hint: "הקוטר הוא המרחק המלא בין שתי הנקודות. הרדיוס הוא בדיוק חצי מהקוטר. (אפשרות נוספת: למצוא את המרכז בעזרת נקודת אמצע ואז מרחק למרכז).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הקוטר השלם (המרחק בין הנקודות A ו-B) באמצעות נוסחת הדיסטנס.", math_expression: "d = &radic;((4 - (-2))<sup>2</sup> + (11 - 3)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את החיבור והחיסור בתוך הסוגריים.", math_expression: "d = &radic;(6<sup>2</sup> + 8<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע.", math_expression: "d = &radic;(36 + 64)" },
            { verbal_explanation: "נחבר ונוציא שורש כדי למצוא את אורך הקוטר.", math_expression: "d = &radic;100 = 10" },
            { verbal_explanation: "רדיוס המעגל שווה למחצית מאורך הקוטר. לכן נחלק בשתיים.", math_expression: "R = 10 / 2 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נתון משולש שקודקודיו הם (0, 0), (0, 3) ו-(4, 0).<br>מהו היקף המשולש?",
        options: [
            "12",
            "14",
            "7",
            "10"
        ],
        hint: "זהו משולש ישר זווית שיושב בדיוק על הצירים. מצאו את אורכי שתי צלעותיו (הניצבים) ישירות מהקואורדינטות, ואת הצלע השלישית (היתר) באמצעות דיסטנס או פיתגורס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנקודות (0,0) ו-(0,3) נמצאות שתיהן על ציר ה-y, ולכן המרחק ביניהן הוא ההפרש בשיעורי ה-y.", math_expression: "a = 3 - 0 = 3" },
            { verbal_explanation: "הנקודות (0,0) ו-(4,0) נמצאות שתיהן על ציר ה-x, ולכן המרחק ביניהן הוא ההפרש בשיעורי ה-x.", math_expression: "b = 4 - 0 = 4" },
            { verbal_explanation: "הצלע השלישית היא היתר. נחשב את אורכה בעזרת נוסחת המרחק (או משפט פיתגורס, שזה אותו הדבר).", math_expression: "c = &radic;(3<sup>2</sup> + 4<sup>2</sup>) = &radic;(9 + 16)" },
            { verbal_explanation: "נוציא שורש לקבלת הצלע השלישית.", math_expression: "c = &radic;25 = 5" },
            { verbal_explanation: "היקף המשולש הוא סכום שלוש הצלעות.", math_expression: "P = 3 + 4 + 5 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "הנקודה P(x, 2x) נמצאת ברביע הראשון (x &gt; 0). המרחק שלה מראשית הצירים (0,0) הוא &radic;20.<br>מצאו את ערכו של x.",
        options: [
            "2",
            "4",
            "10",
            "1"
        ],
        hint: "מרחק מראשית הצירים מחושב כשיישור פיתגורס פשוט: x² + y² = d². הציבו את שיעורי הנקודה והמרחק הנתון.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק של נקודה מראשית הצירים מתואר על ידי נוסחת המרחק כאשר נקודה אחת היא (0,0). נציב את הנתונים למשוואה כשהמרחק מועלה בריבוע.", math_expression: "x<sup>2</sup> + (2x)<sup>2</sup> = (&radic;20)<sup>2</sup>" },
            { verbal_explanation: "נפתח את החזקות בשני הצדדים.", math_expression: "x<sup>2</sup> + 4x<sup>2</sup> = 20" },
            { verbal_explanation: "נכנס איברים באגף שמאל.", math_expression: "5x<sup>2</sup> = 20" },
            { verbal_explanation: "נחלק בחמש.", math_expression: "x<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורש. נבחר את השורש החיובי מכיוון שנתון שהנקודה ברביע הראשון.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "הנקודה M היא אמצע הקטע המחבר את הנקודות A(0, 0) ו- B(8, 12).<br>הנקודה N היא אמצע הקטע המחבר את הנקודות A ו- M.<br>מהם שיעורי הנקודה N?",
        options: [
            "(2, 3)",
            "(4, 6)",
            "(6, 9)",
            "(1, 1.5)"
        ],
        hint: "זוהי בעיה רב-שלבית. השתמשו פעמיים בנוסחת אמצע קטע: פעם ראשונה למציאת M בין A ל-B, ופעם שנייה למציאת N בין A ל-M.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את שיעורי הנקודה M, שהיא האמצע של הקטע AB.", math_expression: "x_M = (0 + 8) / 2 = 4 &nbsp;,&nbsp; y_M = (0 + 12) / 2 = 6" },
            { verbal_explanation: "נקודת האמצע הראשונה היא:", math_expression: "M(4, 6)" },
            { verbal_explanation: "כעת, נמצא את שיעורי הנקודה N, המוגדרת כאמצע הקטע בין A ל-M.", math_expression: "x_N = (0 + 4) / 2 = 2 &nbsp;,&nbsp; y_N = (0 + 6) / 2 = 3" },
            { verbal_explanation: "נאחד את התוצאות לנקודה סופית.", math_expression: "N(2, 3)" }
        ],
        final_answer: "(2, 3)"
    },

    // =====================================================================
    // תת-נושא 2: משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות) (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מצאו את משוואת הישר שעובר דרך הנקודה (2, -1) ושיפועו הוא 3.",
        options: [
            "y = 3x - 7",
            "y = 3x - 1",
            "y = 3x + 7",
            "y = -1x + 2"
        ],
        hint: "השתמשו בנוסחה המפורסמת למציאת משוואת ישר: y - y1 = m(x - x1), והציבו בה את השיפוע (m) ואת שיעורי הנקודה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את השיפוע הנתון ואת קואורדינטות הנקודה אל תוך נוסחת משוואת הישר.", math_expression: "y - (-1) = 3(x - 2)" },
            { verbal_explanation: "נסדר את סימני המינוס הכפולים.", math_expression: "y + 1 = 3(x - 2)" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין.", math_expression: "y + 1 = 3x - 6" },
            { verbal_explanation: "נעביר את המספר אחד לאגף הימני בחיסור כדי לבודד את המשתנה y.", math_expression: "y = 3x - 6 - 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 3x - 7" }
        ],
        final_answer: "y = 3x - 7"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "ישר עובר דרך שתי הנקודות: A(1, 4) ו- B(3, 10).<br>מהי משוואתו של הישר?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><line x1='20' y1='130' x2='180' y2='130' stroke='#94a3b8' stroke-width='2'/><line x1='30' y1='10' x2='30' y2='140' stroke='#94a3b8' stroke-width='2'/><line x1='30' y1='130' x2='150' y2='10' stroke='#ef4444' stroke-width='3'/><circle cx='60' cy='100' r='4' fill='#0f172a'/><circle cx='100' cy='60' r='4' fill='#0f172a'/><text x='85' y='115' font-weight='bold' font-size='12'>A(1,4)</text><text x='130' y='60' font-weight='bold' font-size='12'>B(3,10)</text></svg>",
        options: [
            "y = 3x + 1",
            "y = 2x + 2",
            "y = 3x - 2",
            "y = 4x"
        ],
        hint: "שלב א': מצאו את שיפוע הישר בעזרת נוסחת השיפוע (הפרש ה-y חלקי הפרש ה-x). שלב ב': הציבו את השיפוע שמצאתם ואת אחת הנקודות בנוסחת משוואת הישר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את שיפוע הישר (m) דרך הנוסחה המבוססת על שתי הנקודות הנתונות.", math_expression: "m = (10 - 4) / (3 - 1)" },
            { verbal_explanation: "נבצע את החיסור במונה ובמכנה ונחלק.", math_expression: "m = 6 / 2 = 3" },
            { verbal_explanation: "כעת, נבחר את אחת הנקודות (למשל הנקודה A) ונציב אותה יחד עם השיפוע שמצאנו בנוסחת משוואת הישר.", math_expression: "y - 4 = 3(x - 1)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר ימינה.", math_expression: "y = 3x - 3 + 4" },
            { verbal_explanation: "נכנס איברים ונקבל את התשובה הסופית.", math_expression: "y = 3x + 1" }
        ],
        final_answer: "y = 3x + 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "ישר חותך את ציר ה-y בנקודה שבה y = 5, וחותך את ציר ה-x בנקודה שבה x = 2. <br>מהי משוואת הישר?",
        options: [
            "y = -2.5x + 5",
            "y = 2.5x + 5",
            "y = -2x + 5",
            "y = -5x + 2"
        ],
        hint: "נקודת חיתוך עם ציר y היא הנקודה (0, 5). נקודת חיתוך עם ציר x היא הנקודה (2, 0). מצאו את השיפוע בעזרתן.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את שתי נקודות החיתוך כזוגות סדורים על מערכת הצירים.", math_expression: "(0, 5) , (2, 0)" },
            { verbal_explanation: "נחשב את שיפוע הישר בין שתי הנקודות הללו.", math_expression: "m = (0 - 5) / (2 - 0)" },
            { verbal_explanation: "נחשב את השבר. מינוס חמש חלקי שתיים שווה למינוס שתיים וחצי.", math_expression: "m = -5 / 2 = -2.5" },
            { verbal_explanation: "כיוון שחיתוך ציר ה-y נתון לנו, הוא מהווה את האיבר החופשי (b) במשוואת הישר, ולכן נוכל לכתוב את המשוואה מיד.", math_expression: "y = -2.5x + 5" }
        ],
        final_answer: "y = -2.5x + 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מהי משוואתו של ישר המקביל לציר ה-x ועובר דרך הנקודה (4, -6)?",
        options: [
            "y = -6",
            "x = 4",
            "y = -6x",
            "y = 4"
        ],
        hint: "לישר שמקביל לציר ה-x אין שום שיפוע (השיפוע הוא 0). לכן, המשוואה שלו מורכבת רק ממשתנה ה-y ומהגובה הקבוע שלו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ישר המקביל לציר ה-x הוא ישר אופקי לחלוטין. שיפועו מוגדר כאפס.", math_expression: "m = 0" },
            { verbal_explanation: "נציב את השיפוע הזה ואת הנקודה הנתונה לתוך נוסחת משוואת הישר.", math_expression: "y - (-6) = 0(x - 4)" },
            { verbal_explanation: "מכיוון שהשיפוע הוא אפס, כל צד ימין של המשוואה מתאפס.", math_expression: "y + 6 = 0" },
            { verbal_explanation: "נעביר אגף ונקבל משוואה של קו קבוע המייצג גובה אחיד.", math_expression: "y = -6" }
        ],
        final_answer: "y = -6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "נתון הישר y = 2x + b שעובר דרך הנקודה (3, 10). <br>מצאו את נקודת החיתוך של ישר זה עם ציר ה-x.",
        options: [
            "(-2, 0)",
            "(2, 0)",
            "(0, -2)",
            "(4, 0)"
        ],
        hint: "הציבו את הנקודה הנתונה בתוך משוואת הישר כדי למצוא את הפרמטר b. לאחר מכן, הציבו y=0 במשוואה המלאה כדי למצוא חיתוך עם ציר x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי הנקודה הידועה לתוך משוואת הישר החלקית כדי למצוא את הערך של הפרמטר החופשי b.", math_expression: "10 = 2(3) + b" },
            { verbal_explanation: "נחשב את המכפלה ונעביר אגף כדי לבודד את הפרמטר.", math_expression: "10 = 6 + b &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = 4" },
            { verbal_explanation: "נרשום את משוואת הישר המלאה והסופית.", math_expression: "y = 2x + 4" },
            { verbal_explanation: "כדי למצוא את נקודת החיתוך עם ציר ה-x, נציב אפס במקום y ונפתור עבור x.", math_expression: "0 = 2x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; -2x = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -2" },
            { verbal_explanation: "נרשום את הנקודה.", math_expression: "(-2, 0)" }
        ],
        final_answer: "(-2, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "השיפוע של ישר העובר דרך הנקודות (k, 4) ו- (3, k) הוא -2. <br>מצאו את ערכו של הפרמטר k.",
        options: [
            "2",
            "-2",
            "4",
            "3"
        ],
        hint: "השתמשו בנוסחה למציאת שיפוע דרך שתי נקודות. הציבו בה את הנקודות הנתונות, השוו את הביטוי המתקבל לשיפוע הידוע (-2), ופתרו משוואה עבור k.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת השיפוע ונציב לתוכה את שיעורי שתי הנקודות יחד עם השיפוע הנתון.", math_expression: "m = (k - 4) / (3 - k) = -2" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה במכנה כדי להיפטר מהשבר.", math_expression: "k - 4 = -2(3 - k)" },
            { verbal_explanation: "נפתח סוגריים באגף ימין.", math_expression: "k - 4 = -6 + 2k" },
            { verbal_explanation: "נעביר את המשתנים לאגף אחד ואת המספרים לאגף השני.", math_expression: "k - 2k = -6 + 4" },
            { verbal_explanation: "נכנס איברים ונקבל את התשובה.", math_expression: "-k = -2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "נתון משולש ABC שקודקודיו הם: A(0, 4) , B(-3, 0) , C(3, 0).<br>מצאו את משוואת הגובה היורד מקודקוד B אל הצלע AC.",
        options: [
            "y = 0.75x + 2.25",
            "y = -0.75x - 2.25",
            "y = 0.75x - 2.25",
            "y = 1.25x + 2"
        ],
        hint: "שלב 1: מצאו את השיפוע של הצלע AC. שלב 2: הגובה מאונך לצלע, ולכן שיפועו הוא הופכי ונגדי לשיפוע שמצאתם. שלב 3: בנו את משוואת הגובה בעזרת שיפועו והנקודה B שממנה הוא יוצא.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של הצלע AC שעליה מונח הגובה.", math_expression: "m_{AC} = (0 - 4) / (3 - 0) = -4 / 3" },
            { verbal_explanation: "הגובה אנך לצלע, ולכן שיפועו שווה להופכי והנגדי של שיפוע הצלע.", math_expression: "m_{alt} = 3 / 4 = 0.75" },
            { verbal_explanation: "כעת יש לנו את שיפוע הגובה, וידוע שהוא יוצא מקודקוד B. נציב בנוסחת הישר.", math_expression: "y - 0 = 0.75(x - (-3))" },
            { verbal_explanation: "נסדר את סימני המינוס ונפתח סוגריים.", math_expression: "y = 0.75(x + 3) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 0.75x + 2.25" }
        ],
        final_answer: "y = 0.75x + 2.25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מצאו את נקודת החיתוך בין שני הישרים הבאים:<br>y = 3x - 2<br>y = -x + 6",
        options: [
            "(2, 4)",
            "(1, 1)",
            "(3, 3)",
            "(4, -2)"
        ],
        hint: "כדי למצוא נקודת מפגש בין שני ישרים, פשוט השוו את הביטויים של ה-y שלהם זה לזה ופתרו את המשוואה כדי למצוא את x. לאחר מכן הציבו באחת המשוואות למציאת y.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שבשתי המשוואות y מבודד, נשווה את שני הביטויים זה לזה כדי למצוא את שיעור ה-x של נקודת המפגש.", math_expression: "3x - 2 = -x + 6" },
            { verbal_explanation: "נעביר את האיקסים שמאלה ואת המספרים ימינה.", math_expression: "3x + x = 6 + 2" },
            { verbal_explanation: "נכנס איברים משני האגפים.", math_expression: "4x = 8" },
            { verbal_explanation: "נחלק בארבע למציאת שיעור ה-x.", math_expression: "x = 2" },
            { verbal_explanation: "נציב את x שמצאנו באחת מהמשוואות המקוריות (למשל בראשונה) כדי לחשב את שיעור ה-y של הנקודה.", math_expression: "y = 3(2) - 2 = 6 - 2 = 4" },
            { verbal_explanation: "נרשום את התוצאה הסופית כזוג סדור.", math_expression: "(2, 4)" }
        ],
        final_answer: "(2, 4)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "האם הנקודה (5, 12) נמצאת על הישר העובר דרך הנקודות (1, 4) ו- (3, 8)?",
        options: [
            "כן",
            "לא",
            "חסרים נתונים",
            "הנקודה היא חיתוך ציר ה-y"
        ],
        hint: "מצאו את משוואת הישר העובר דרך שתי הנקודות הנתונות. לאחר מכן, הציבו את הנקודה (5, 12) במשוואה שקיבלתם ובדקו האם מתקבל פסוק אמת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לבדוק זאת, נמצא קודם כל את משוואת הישר. נתחיל במציאת שיפועו.", math_expression: "m = (8 - 4) / (3 - 1) = 4 / 2 = 2" },
            { verbal_explanation: "נרכיב את משוואת הישר בעזרת השיפוע ואחת הנקודות.", math_expression: "y - 4 = 2(x - 1) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 2x - 2 + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 2x + 2" },
            { verbal_explanation: "כעת, נציב את הנקודה הנתונה בתוך משוואת הישר כדי לבדוק אם היא מקיימת אותה.", math_expression: "12 = 2(5) + 2" },
            { verbal_explanation: "נחשב את אגף ימין ונראה שאכן נוצר פסוק אמת מלא. לכן הנקודה בוודאות יושבת על הישר.", math_expression: "12 = 12" }
        ],
        final_answer: "כן"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "ישר עובר דרך הנקודה (2, 3) וחותך את הצירים כך שחיתוך ה-x שלו שווה בדיוק לחיתוך ה-y שלו, ושניהם חיוביים (מסומנים באות a).<br>מהו הערך של a?",
        options: [
            "5",
            "1",
            "6",
            "3"
        ],
        hint: "הנקודות שבהן הישר חותך את הצירים הן (a,0) ו-(0,a). בנו את משוואת הישר שלהן (תגלו שהשיפוע הוא מינוס 1). הציבו את הנקודה (2,3) במשוואה זו כדי למצוא את a.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הישר חותך את הצירים בנקודות שניתן להגדיר כזוגות סדורים עם פרמטר.", math_expression: "(a, 0) , (0, a)" },
            { verbal_explanation: "נחשב את השיפוע של הישר באמצעות שתי נקודות אלו.", math_expression: "m = (a - 0) / (0 - a) = a / -a = -1" },
            { verbal_explanation: "נקודת החיתוך עם ציר ה-y היא הפרמטר החופשי של הישר. נבנה את משוואת הישר.", math_expression: "y = -x + a" },
            { verbal_explanation: "ידוע שהישר עובר דרך הנקודה הידועה הנתונה בשאלה. נציב אותה במשוואה המפושטת.", math_expression: "3 = -2 + a" },
            { verbal_explanation: "נעביר את המספר אגף כדי לחשוף את התשובה הסופית.", math_expression: "a = 5" }
        ],
        final_answer: "5"
    },

    // =====================================================================
    // תת-נושא 3: ישרים מקבילים ומאונכים (מכפלת שיפועים = -1) (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "מהי משוואתו של ישר המקביל לישר y = 4x - 1, ועובר דרך הנקודה (1, 5)?",
        options: [
            "y = 4x + 1",
            "y = 4x - 1",
            "y = -0.25x + 5.25",
            "y = 4x + 5"
        ],
        hint: "לישרים מקבילים יש בדיוק את אותו השיפוע. קחו את השיפוע של הישר הנתון, ובנו משוואה חדשה יחד עם הנקודה הנתונה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ישרים מקבילים חולקים שיפוע זהה. השיפוע של הישר המקורי שנתון לנו הוא המקדם של המשתנה איקס.", math_expression: "m = 4" },
            { verbal_explanation: "נציב את השיפוע הזה ואת הנקודה הנתונה לנו בנוסחה הקלאסית למציאת ישר.", math_expression: "y - 5 = 4(x - 1)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר ימינה למציאת המשוואה הסופית.", math_expression: "y = 4x - 4 + 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 4x + 1" }
        ],
        final_answer: "y = 4x + 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "מצאו את משוואתו של ישר המאונך לישר y = 0.5x + 3, ועובר דרך הנקודה (2, -2).<br><svg viewBox='0 0 200 120' width='160' height='100' style='display:block; margin: 15px auto;'><line x1='20' y1='80' x2='180' y2='20' stroke='#94a3b8' stroke-width='2'/><line x1='60' y1='20' x2='120' y2='120' stroke='#3b82f6' stroke-width='3'/><path d='M 93,52 L 102,57 L 97,66' fill='none' stroke='#ef4444' stroke-width='2'/></svg>",
        options: [
            "y = -2x + 2",
            "y = -2x - 2",
            "y = 0.5x - 3",
            "y = 2x - 6"
        ],
        hint: "שיפועים של ישרים מאונכים הם הופכיים ונגדיים זה לזה. אם שיפוע הישר הנתון הוא חצי, השיפוע של המאונך לו הוא מינוס שתיים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את שיפוע הישר המקורי הנתון.", math_expression: "m_1 = 0.5" },
            { verbal_explanation: "כדי למצוא את השיפוע של הישר המאונך לו, נשתמש בכלל ההופכי והנגדי (מכפלתם היא מינוס אחת).", math_expression: "m_2 = -1 / 0.5 = -2" },
            { verbal_explanation: "נשתמש בשיפוע החדש יחד עם הנקודה הנתונה להרכבת המשוואה.", math_expression: "y - (-2) = -2(x - 2)" },
            { verbal_explanation: "נפשט את המשוואה ונגיע לתוצאה הסופית.", math_expression: "y + 2 = -2x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -2x + 2" }
        ],
        final_answer: "y = -2x + 2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "נתונות שלוש נקודות במישור: A(1, 2) , B(3, 6) , C(x, 5).<br>ידוע כי הישר AB מאונך לישר BC. מצאו את ערכו של x.",
        options: [
            "5",
            "4",
            "3.5",
            "2"
        ],
        hint: "חשבו את שיפוע הקטע AB בעזרת שתי הנקודות הנתונות. מצאו את השיפוע ההופכי והנגדי לו (זה יהיה שיפוע BC). לאחר מכן, השוו את נוסחת השיפוע של BC לערך זה ופתרו עבור x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של הקטע השלם והידוע, AB.", math_expression: "m_{AB} = (6 - 2) / (3 - 1) = 4 / 2 = 2" },
            { verbal_explanation: "מכיוון שהקטעים מאונכים זה לזה, שיפועו של הקטע השני חייב להיות הופכי ונגדי.", math_expression: "m_{BC} = -0.5" },
            { verbal_explanation: "נבטא את שיפוע הקטע השני בעזרת הנוסחה, תוך שימוש בנקודה הלא ידועה, ונשווה לערך שמצאנו.", math_expression: "(5 - 6) / (x - 3) = -0.5" },
            { verbal_explanation: "נפשט את המונה של השבר.", math_expression: "-1 / (x - 3) = -0.5" },
            { verbal_explanation: "נכפיל את המשוואה במכנה.", math_expression: "-1 = -0.5(x - 3)" },
            { verbal_explanation: "נחלק במינוס חצי את שני האגפים ונעביר אגף.", math_expression: "2 = x - 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "נתונים שני ישרים המקבילים זה לזה.<br>הישר הראשון הוא: y = (k - 2)x + 1<br>הישר השני עובר דרך ראשית הצירים (0,0) ודרך הנקודה (2, 6).<br>מהו ערכו של הפרמטר k?",
        options: [
            "5",
            "3",
            "1",
            "4"
        ],
        hint: "ישרים מקבילים הם בעלי שיפועים זהים. מצאו את שיפוע הישר השני בעזרת שתי הנקודות הנתונות, והשוו אותו לשיפוע הישר הראשון המובע באמצעות הפרמטר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את שיפועו של הישר השני דרך שתי הנקודות הנתונות.", math_expression: "m = (6 - 0) / (2 - 0) = 6 / 2 = 3" },
            { verbal_explanation: "ישרים מקבילים דורשים שיפועים שווים. נשווה את השיפוע שמצאנו לשיפוע של הישר הראשון המוצג בעזרת פרמטר.", math_expression: "k - 2 = 3" },
            { verbal_explanation: "נעביר את המספר ימינה ונחלץ את הפרמטר.", math_expression: "k = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "שני הישרים הבאים מאונכים זה לזה במישור (מכפלת שיפועיהם שווה למינוס אחת):<br>ישר א': y = ax + 2<br>ישר ב': y = 4x + 1<br>מהו ערכו של הפרמטר a?",
        options: [
            "-0.25",
            "0.25",
            "-4",
            "4"
        ],
        hint: "הכפילו את שני השיפועים (a ו-4) זה בזה והשוו למינוס אחת (או פשוט מצאו את ההופכי והנגדי של 4).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "השיפוע של ישר א' מסומן באמצעות הפרמטר. השיפוע של ישר ב' הוא ארבע.", math_expression: "m_1 = a &nbsp;,&nbsp; m_2 = 4" },
            { verbal_explanation: "חוק ניצבות (מאונכים) אומר שמכפלת השיפועים חייבת להיות שווה למינוס אחת.", math_expression: "a &times; 4 = -1" },
            { verbal_explanation: "נחלק בארבע למציאת הערך הנדרש.", math_expression: "a = -1 / 4 = -0.25" }
        ],
        final_answer: "-0.25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "מצאו את משוואתו של 'האנך האמצעי' לקטע המחבר את הנקודות A(0, 0) ו- B(4, 8).",
        options: [
            "y = -0.5x + 5",
            "y = 2x + 4",
            "y = -0.5x + 3",
            "y = -2x + 10"
        ],
        hint: "אנך אמצעי הוא קו שעובר בדיוק באמצע הקטע, וגם מאונך לו. מצאו את נקודת האמצע, את השיפוע של הקטע, הסיקו ממנו את שיפוע האנך והרכיבו משוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה, נמצא את נקודת האמצע של הקטע המדובר, שדרכה יעבור האנך.", math_expression: "x_M = (0 + 4) / 2 = 2 &nbsp;,&nbsp; y_M = (0 + 8) / 2 = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; M(2, 4)" },
            { verbal_explanation: "נחשב את שיפוע הקטע המקורי.", math_expression: "m_{AB} = (8 - 0) / (4 - 0) = 8 / 4 = 2" },
            { verbal_explanation: "האנך האמצעי בהכרח מאונך לקטע, ולכן שיפועו הוא הופכי ונגדי.", math_expression: "m_{\perp} = -1 / 2 = -0.5" },
            { verbal_explanation: "נרכיב את משוואת האנך בעזרת הנקודה והשיפוע החדשים.", math_expression: "y - 4 = -0.5(x - 2)" },
            { verbal_explanation: "נפשט למשוואת ישר סופית ותקנית.", math_expression: "y = -0.5x + 1 + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -0.5x + 5" }
        ],
        final_answer: "y = -0.5x + 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "קודקודי משולש הם: A(0, 4) , B(-3, 0) , C(3, 0).<br>מהי משוואת הגובה היורד מקודקוד A אל הצלע BC?",
        options: [
            "x = 0",
            "y = 4",
            "y = x",
            "x = 4"
        ],
        hint: "שימו לב: הצלע BC מונחת כולה על ציר ה-x. גובה אליה חייב להיות מאונך לציר ה-x, ולכן הוא קו אנכי שמשוואתו היא x=קבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבחין בכך ששיעור ה-y של שתי הנקודות המרכיבות את הבסיס הוא אפס. כלומר, הצלע מונחת על ציר ה-x האופקי (שיפוע אפס).", math_expression: "m_{BC} = (0 - 0) / (3 - (-3)) = 0" },
            { verbal_explanation: "ישר המאונך לישר אופקי הוא ישר אנכי לחלוטין (מקביל לציר ה-y). משוואתו מוגדרת רק על ידי ערך קבוע של איקס.", math_expression: "x = const" },
            { verbal_explanation: "הגובה יוצא מהקודקוד העליון, שבו שיעור האיקס הוא אפס. לכן, משוואת הגובה היא ציר ה-y עצמו.", math_expression: "x = 0" }
        ],
        final_answer: "x = 0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "שניים מקודקודיו הנגדיים של ריבוע ABCD הם: A(1, 1) ו- C(5, 5).<br>מהי משוואת הישר שעליו מונח האלכסון השני (BD) של הריבוע?",
        options: [
            "y = -x + 6",
            "y = x",
            "y = -x + 2",
            "y = -0.5x + 3"
        ],
        hint: "בריבוע, האלכסונים מאונכים זה לזה וחוצים זה את זה. לכן, משוואת האלכסון BD היא בעצם האנך האמצעי של האלכסון AC.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אלכסוני הריבוע חוצים זה את זה. נמצא את נקודת המפגש שלהם (שהיא אמצע הקטע הידוע לנו).", math_expression: "x_M = (1 + 5) / 2 = 3 &nbsp;,&nbsp; y_M = (1 + 5) / 2 = 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; M(3, 3)" },
            { verbal_explanation: "נמצא את השיפוע של האלכסון הידוע.", math_expression: "m_{AC} = (5 - 1) / (5 - 1) = 4 / 4 = 1" },
            { verbal_explanation: "אלכסוני הריבוע מאונכים זה לזה, לכן שיפוע האלכסון השני הוא הופכי ונגדי.", math_expression: "m_{BD} = -1" },
            { verbal_explanation: "נבנה את המשוואה של האלכסון השני בעזרת הנקודה והשיפוע.", math_expression: "y - 3 = -1(x - 3)" },
            { verbal_explanation: "נסדר את המשוואה.", math_expression: "y = -x + 3 + 3 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -x + 6" }
        ],
        final_answer: "y = -x + 6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "הישרים y = 2x + 3 ו- y = mx + b מקבילים זה לזה. <br>הישר השני עובר דרך הנקודה (0, -1). <br>מהי משוואתו של הישר השני?",
        options: [
            "y = 2x - 1",
            "y = 2x + 3",
            "y = -0.5x - 1",
            "y = 3x - 1"
        ],
        hint: "ישרים מקבילים בעלי שיפוע זהה. נקודה עם x=0 היא נקודת החיתוך עם ציר ה-y, שנותנת לכם ישירות את איבר ה-b במשוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בגלל שידוע לנו שהישרים מקבילים, יש להם את אותו השיפוע בדיוק. לכן אנו יודעים את ערכו של הפרמטר הראשון במשוואה.", math_expression: "m = 2" },
            { verbal_explanation: "ידוע שהישר השני עובר בנקודה מיוחדת על ציר ה-y. ערך ה-y של נקודה זו הוא בהכרח הערך של הפרמטר החופשי של הישר.", math_expression: "b = -1" },
            { verbal_explanation: "נרכיב את משוואת הישר מהנתונים שמצאנו.", math_expression: "y = 2x - 1" }
        ],
        final_answer: "y = 2x - 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = -1)",
        question: "מהי משוואת הישר העובר דרך ראשית הצירים וגם מאונך לישר y = -(1/3)x + 2?",
        options: [
            "y = 3x",
            "y = -3x",
            "y = (1/3)x",
            "y = 3x + 2"
        ],
        hint: "ישר שעובר דרך ראשית הצירים משוואתו היא y = mx (בלי איבר חופשי). מצאו רק את השיפוע החדש לפי כלל הניצבות.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הישר הנתון הוא בעל שיפוע שלילי של שליש.", math_expression: "m_1 = -1 / 3" },
            { verbal_explanation: "הישר שאנו מחפשים מאונך לו, ולכן שיפועו הופכי ונגדי.", math_expression: "m_2 = 3" },
            { verbal_explanation: "ראשית הצירים היא הנקודה אפס פסיק אפס. לכן, אין לישר חיתוך מוזז עם הציר ואין לו איבר חופשי בביטוי.", math_expression: "b = 0" },
            { verbal_explanation: "נרכיב את משוואת הישר הטהורה מהנתונים הללו.", math_expression: "y = 3x" }
        ],
        final_answer: "y = 3x"
    },
    // =====================================================================
    // תת-נושא 4: מרחק נקודה מישר (שימוש בנוסחה) (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו המרחק הקצר ביותר מראשית הצירים (0,0) אל הישר שמשוואתו 3x + 4y - 20 = 0?<br><svg viewBox='0 0 200 150' width='180' height='130' style='display:block; margin: 15px auto;'><line x1='10' y1='120' x2='190' y2='120' stroke='#94a3b8' stroke-width='2'/><line x1='40' y1='10' x2='40' y2='140' stroke='#94a3b8' stroke-width='2'/><path d='M 10,80 L 190,20' stroke='#3b82f6' stroke-width='3' fill='none'/><circle cx='40' cy='120' r='4' fill='#ef4444'/><line x1='40' y1='120' x2='95' y2='52' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/><path d='M 85,55 L 88,63 L 97,60' fill='none' stroke='#ef4444' stroke-width='2'/></svg>",
        options: [
            "4",
            "5",
            "20",
            "10"
        ],
        hint: "הציבו את שיעורי ראשית הצירים בנוסחת המרחק: הערך המוחלט של משוואת הישר, חלקי השורש הריבועי של סכום ריבועי המקדמים A ו-B.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת המרחק מנקודה לישר דורשת את משוואת הישר בצורה הכללית ואת שיעורי הנקודה.", math_expression: "d = |Ax_1 + By_1 + C| / &radic;(A<sup>2</sup> + B<sup>2</sup>)" },
            { verbal_explanation: "נזהה את המקדמים מתוך משוואת הישר הנתונה.", math_expression: "A = 3 , B = 4 , C = -20" },
            { verbal_explanation: "נציב את שיעורי ראשית הצירים יחד עם המקדמים אל תוך הנוסחה.", math_expression: "d = |3(0) + 4(0) - 20| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הביטוי בתוך הערך המוחלט במונה, ואת הסכום מתחת לשורש במכנה.", math_expression: "d = |-20| / &radic;(9 + 16)" },
            { verbal_explanation: "הערך המוחלט הופך את המונה לחיובי. נוציא שורש מהמכנה.", math_expression: "d = 20 / &radic;25 = 20 / 5" },
            { verbal_explanation: "נבצע את פעולת החילוק לקבלת המרחק הסופי.", math_expression: "d = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מצאו את המרחק בין הנקודה (1, 2) לבין הישר y = 2x + 5.",
        options: [
            "&radic;5",
            "5",
            "&radic;20",
            "1"
        ],
        hint: "לפני השימוש בנוסחה, חובה לסדר את משוואת הישר לצורה הכללית (העבירו הכל לאגף אחד כך שהמשוואה תהיה שווה לאפס).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להשתמש בנוסחת המרחק, עלינו להעביר את משוואת הישר מההצגה המפורשת להצגה כללית (הכל באגף אחד השווה לאפס).", math_expression: "2x - y + 5 = 0" },
            { verbal_explanation: "כעת نזהה את המקדמים של המשוואה הכללית.", math_expression: "A = 2 , B = -1 , C = 5" },
            { verbal_explanation: "נציב את המקדמים ואת הנקודה הנתונה לתוך נוסחת המרחק.", math_expression: "d = |2(1) - 1(2) + 5| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הביטויים במונה ובמכנה.", math_expression: "d = |2 - 2 + 5| / &radic;(4 + 1)" },
            { verbal_explanation: "נכנס איברים לקבלת התשובה. מקובל להשאיר שורשים במכנה או להרחיב, במקרה זה נשאיר כך.", math_expression: "d = 5 / &radic;5" },
            { verbal_explanation: "כדי לפשט את הביטוי (כיוון שחמש שווה לשורש חמש כפול שורש חמש), נצמצם את השבר.", math_expression: "d = &radic;5" }
        ],
        final_answer: "&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "המרחק מהנקודה (2, 1) לישר שמשוואתו 3x - 4y + C = 0 הוא בדיוק 2 יחידות.<br>ידוע כי C &gt; 0. מהו ערכו של C?",
        options: [
            "8",
            "12",
            "10",
            "2"
        ],
        hint: "הציבו את כל הנתונים בנוסחת המרחק והשוו ל-2. תקבלו משוואת ערך מוחלט. זכרו שלערך מוחלט יכולים להיות שני פתרונות (חיובי ושלילי לבפנים).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הנקודה ואת המרחק הידוע בתוך נוסחת המרחק כדי למצוא את הפרמטר החסר.", math_expression: "2 = |3(2) - 4(1) + C| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה (שלשה פיתגורית מוכרת).", math_expression: "2 = |6 - 4 + C| / &radic;25" },
            { verbal_explanation: "נפשט את המונה ואת המכנה.", math_expression: "2 = |2 + C| / 5" },
            { verbal_explanation: "נכפיל את המשוואה בחמש כדי להיפטר מהשבר.", math_expression: "|2 + C| = 10" },
            { verbal_explanation: "משוואת ערך מוחלט מתפצלת לשני מקרים: הביטוי הפנימי שווה לעשר, או למינוס עשר.", math_expression: "2 + C = 10 &nbsp;&nbsp;,&nbsp;&nbsp; 2 + C = -10" },
            { verbal_explanation: "נפתור כל משוואה בנפרד.", math_expression: "C = 8 &nbsp;&nbsp;,&nbsp;&nbsp; C = -12" },
            { verbal_explanation: "השאלה מבקשת את הערך החיובי של הפרמטר, לכן נבחר בפתרון המתאים.", math_expression: "C = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "הנקודה A מונחת על ציר ה-x בחלקו החיובי. המרחק מנקודה A לישר 4x + 3y - 12 = 0 הוא 4 יחידות אורך.<br>מהו שיעור ה-x של הנקודה A?",
        options: [
            "8",
            "4",
            "10",
            "3"
        ],
        hint: "נקודה על ציר ה-x נראית כך: (x, 0). הציבו נקודה זו בנוסחת המרחק, השוו ל-4, ופתרו עבור x חיובי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהנקודה על ציר ה-x, שיעור ה-y שלה הוא אפס.", math_expression: "A(x, 0)" },
            { verbal_explanation: "נציב את הנקודה בנוסחת המרחק, ונשווה לנתון.", math_expression: "4 = |4(x) + 3(0) - 12| / &radic;(4<sup>2</sup> + 3<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה ונסדר את המונה.", math_expression: "4 = |4x - 12| / 5" },
            { verbal_explanation: "נכפיל בחמש.", math_expression: "|4x - 12| = 20" },
            { verbal_explanation: "נפצל את משוואת הערך המוחלט לשני מקרים אפשריים.", math_expression: "4x - 12 = 20 &nbsp;&nbsp;,&nbsp;&nbsp; 4x - 12 = -20" },
            { verbal_explanation: "נפתור את המשוואה הראשונה.", math_expression: "4x = 32 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 8" },
            { verbal_explanation: "נפתור את המשוואה השנייה.", math_expression: "4x = -8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -2" },
            { verbal_explanation: "נבחר את הערך החיובי בלבד, כנדרש בנתוני השאלה.", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "קדקודי משולש הם: A(0, 0), B(6, 0), C(3, 4).<br>מצאו את אורך הגובה היורד מקדקוד C לצלע AB (כלומר, המרחק מ-C לישר AB).",
        options: [
            "4",
            "5",
            "3",
            "6"
        ],
        hint: "הישר AB מונח בדיוק על ציר ה-x. המרחק של נקודה כלשהי מציר ה-x הוא פשוט הערך המוחלט של שיעור ה-y שלה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתבונן בשיעורי הנקודות A ו-B. לשתיהן שיעור y שווה לאפס, כלומר שתיהן מונחות על ציר ה-x.", math_expression: "y_A = 0 &nbsp;,&nbsp; y_B = 0" },
            { verbal_explanation: "לכן, משוואת הישר שעליו מונחת הצלע AB היא פשוט משוואת ציר ה-x.", math_expression: "y = 0" },
            { verbal_explanation: "המרחק של נקודה C מהישר הזה הוא אורך הגובה המבוקש. מרחק של כל נקודה מציר ה-x מוגדר כערך המוחלט של שיעור ה-y שלה.", math_expression: "h = |y_C| = |4|" },
            { verbal_explanation: "נקבל שהגובה שווה בדיוק לארבע.", math_expression: "h = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "נתון ישר שמשוואתו y = 2x. מהו המרחק בין הנקודה (-1, 3) לישר זה?",
        options: [
            "&radic;5",
            "5",
            "&radic;20",
            "1"
        ],
        hint: "העבירו את משוואת הישר לצורה כללית Ax + By + C = 0, והציבו את המקדמים ואת הנקודה הנתונה בנוסחת הדיסטנס מישר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את המשוואה לצורה כללית לקראת שימוש בנוסחה.", math_expression: "2x - y = 0" },
            { verbal_explanation: "נזהה את המקדמים (האיבר החופשי הוא אפס).", math_expression: "A = 2 , B = -1 , C = 0" },
            { verbal_explanation: "נציב את הנקודה בנוסחת המרחק.", math_expression: "d = |2(-1) - 1(3) + 0| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ערך המונה ואת המכנה.", math_expression: "d = |-2 - 3| / &radic;(4 + 1) = |-5| / &radic;5" },
            { verbal_explanation: "נפעיל את הערך המוחלט.", math_expression: "d = 5 / &radic;5" },
            { verbal_explanation: "נצמצם את השבר על ידי כך שנזכור שחמש שווה לשורש חמש בריבוע.", math_expression: "d = &radic;5" }
        ],
        final_answer: "&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "ידוע שמרכז מעגל נמצא בנקודה (4, 3) והישר 3x - 4y + 10 = 0 משיק למעגל.<br>מהו רדיוס המעגל?",
        options: [
            "2",
            "4",
            "5",
            "10"
        ],
        hint: "רדיוס המעגל מאונך למשיק בנקודת ההשקה. כלומר, אורך הרדיוס שווה למרחק הגיאומטרי שבין מרכז המעגל לבין הישר המשיק לו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט בגיאומטריה, המרחק מהמרכז לישר משיק שווה בדיוק לאורך הרדיוס.", math_expression: "R = d" },
            { verbal_explanation: "נשתמש בנוסחת המרחק מנקודה לישר כדי למצוא את הרדיוס.", math_expression: "R = |3(4) - 4(3) + 10| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הפעולות במונה.", math_expression: "R = |12 - 12 + 10| / &radic;25" },
            { verbal_explanation: "האיברים במונה מקזזים זה את זה בחלקם, ונחשב את השורש במכנה.", math_expression: "R = 10 / 5" },
            { verbal_explanation: "נבצע את חלוקת השבר.", math_expression: "R = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "המרחק בין הנקודה (a, a) לישר x + y - 6 = 0 הוא &radic;2.<br>מצאו את הערכים האפשריים של הפרמטר a.",
        options: [
            "2 , 4",
            "1 , 5",
            "3 , -3",
            "4 , 6"
        ],
        hint: "הנקודה מוצבת כ-(a, a). הציבו פרמטר זה גם במקום x וגם במקום y בנוסחת המרחק, השוו ל-&radic;2 ופתרו את משוואת הערך המוחלט.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי הנקודה בעלת הפרמטר בתוך נוסחת המרחק לישר, ונשווה לנתון.", math_expression: "&radic;2 = |1(a) + 1(a) - 6| / &radic;(1<sup>2</sup> + 1<sup>2</sup>)" },
            { verbal_explanation: "נכנס איברים במונה ונחשב את המכנה.", math_expression: "&radic;2 = |2a - 6| / &radic;2" },
            { verbal_explanation: "נכפיל את שני האגפים בשורש שתיים כדי להיפטר מהשבר.", math_expression: "&radic;2 &times; &radic;2 = |2a - 6|" },
            { verbal_explanation: "שורש שתיים כפול עצמו שווה לשתיים.", math_expression: "2 = |2a - 6|" },
            { verbal_explanation: "נפצל למשוואת ערך מוחלט סטנדרטית (שני מקרים).", math_expression: "2a - 6 = 2 &nbsp;&nbsp;,&nbsp;&nbsp; 2a - 6 = -2" },
            { verbal_explanation: "נפתור את המשוואה הראשונה.", math_expression: "2a = 8 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 4" },
            { verbal_explanation: "נפתור את המשוואה השנייה.", math_expression: "2a = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 2" },
            { verbal_explanation: "שני הפתרונות חוקיים ותקינים.", math_expression: "2 , 4" }
        ],
        final_answer: "2 , 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "נתונים שני ישרים הנחתכים בנקודה: y = x ו- y = -x + 4.<br>מהו המרחק מנקודת החיתוך שלהם אל הישר שמשוואתו 3x - 4y + 7 = 0?",
        options: [
            "1",
            "2",
            "5",
            "3"
        ],
        hint: "קודם כל מצאו את נקודת המפגש של שני הישרים על ידי השוואת המשוואות שלהם. רק לאחר מכן הפעילו את נוסחת המרחק עבור הנקודה שמצאתם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את נקודת החיתוך של שני הישרים על ידי השוואתם זה לזה.", math_expression: "x = -x + 4" },
            { verbal_explanation: "נעביר אגף ונחלק.", math_expression: "2x = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "נציב באחת המשוואות כדי למצוא את שיעור ה-y.", math_expression: "y = 2" },
            { verbal_explanation: "נקודת החיתוך היא:", math_expression: "(2, 2)" },
            { verbal_explanation: "כעת نציב את הנקודה הזו בנוסחת המרחק לישר השלישי.", math_expression: "d = |3(2) - 4(2) + 7| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "d = |6 - 8 + 7| / &radic;25" },
            { verbal_explanation: "נבצע את פעולות החשבון לקבלת המרחק הסופי.", math_expression: "d = |5| / 5 = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו המרחק בין הנקודה (0, 7) לישר האופקי y = 3?",
        options: [
            "4",
            "10",
            "7",
            "3"
        ],
        hint: "כשמדובר בישר אופקי וישר מקביל לו (או נקודה מעליו), המרחק הוא פשוט ההפרש בין שיעורי ה-y, ללא צורך בנוסחה המסורבלת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניתן להשתמש בנוסחה הכללית, אך זהו מקרה פרטי ופשוט יותר. הישר הנתון הוא אופקי לחלוטין (מקביל לציר ה-x).", math_expression: "y = 3" },
            { verbal_explanation: "המרחק האנכי מנקודה אל ישר אופקי נמדד אך ורק על ידי ההפרש בין שיעור ה-y של הנקודה לבין הגובה הקבוע של הישר (בערך מוחלט).", math_expression: "d = |y_1 - y_{line}|" },
            { verbal_explanation: "נציב את הערכים ונחשב את ההפרש.", math_expression: "d = |7 - 3| = 4" }
        ],
        final_answer: "4"
    },

    // =====================================================================
    // תת-נושא 5: מרחק בין ישרים מקבילים (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מצאו את המרחק בין שני הישרים המקבילים הבאים:<br>3x + 4y - 10 = 0<br>3x + 4y + 15 = 0<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><line x1='10' y1='10' x2='150' y2='140' stroke='#3b82f6' stroke-width='3'/><line x1='50' y1='10' x2='190' y2='140' stroke='#ef4444' stroke-width='3'/><line x1='80' y1='75' x2='110' y2='65' stroke='#10b981' stroke-width='2' stroke-dasharray='4,4'/><text x='100' y='60' font-size='14' font-weight='bold' fill='#047857'>d</text></svg>",
        options: [
            "5",
            "1",
            "25",
            "10"
        ],
        hint: "כאשר שני הישרים המקבילים מוצגים בצורה הכללית עם אותם מקדמים (A ו-B), המרחק ביניהם מחושב על ידי הנוסחה: הערך המוחלט של הפרש האיברים החופשיים (C), חלקי השורש של סכום ריבועי המקדמים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוודא שהמקדמים של שני הישרים אכן זהים לפני השימוש בנוסחה המקוצרת.", math_expression: "A = 3 , B = 4" },
            { verbal_explanation: "נוסחת המרחק בין ישרים מקבילים משתמשת בהפרש האיברים החופשיים שלהם.", math_expression: "d = |C_1 - C_2| / &radic;(A<sup>2</sup> + B<sup>2</sup>)" },
            { verbal_explanation: "נציב את הנתונים לתוך הנוסחה.", math_expression: "d = |15 - (-10)| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה (חיסור של מספר שלילי הופך לחיבור) ואת המכנה.", math_expression: "d = |25| / &radic;(9 + 16)" },
            { verbal_explanation: "נוציא את השורש ונבצע את חלוקת השבר.", math_expression: "d = 25 / 5 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק בין הישרים המקבילים y = 2x + 1 ו- y = 2x - 4?",
        options: [
            "&radic;5",
            "5",
            "1",
            "&radic;20"
        ],
        hint: "אל תחסרו פשוט בין המספרים 1 ו-4! עליכם להעביר קודם כל את שתי המשוואות לצורה כללית (Ax + By + C = 0), ורק אז להשתמש בנוסחה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את שתי המשוואות להצגה כללית בה כל האיברים באגף אחד.", math_expression: "2x - y + 1 = 0 &nbsp;,&nbsp; 2x - y - 4 = 0" },
            { verbal_explanation: "כעת المקדמים תואמים, נציב בנוסחת המרחק בין מקבילים.", math_expression: "d = |1 - (-4)| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "d = |5| / &radic;(4 + 1)" },
            { verbal_explanation: "נקבל את השבר כולל השורש.", math_expression: "d = 5 / &radic;5" },
            { verbal_explanation: "על ידי הרחבה בשורש (או צמצום החמש), נגיע לביטוי אלגנטי יותר.", math_expression: "d = &radic;5" }
        ],
        final_answer: "&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "שני הישרים הבאים מקבילים: <br>x + 2y - 4 = 0<br>2x + 4y + 12 = 0<br>מהו המרחק ביניהם?",
        options: [
            "&radic;20",
            "16",
            "8",
            "20"
        ],
        hint: "שימו לב שהמקדמים (A,B) בשני הישרים אינם זהים! הכפילו את המשוואה הראשונה פי 2 (או חלקו את השנייה ב-2) כדי להשוות את המקדמים לפני השימוש בנוסחה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להשתמש בנוסחת המרחק המהירה, מקדמי המשתנים חייבים להיות זהים לחלוטין. נכפיל את המשוואה הראשונה פי שתיים.", math_expression: "2(x + 2y - 4) = 2(0) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2x + 4y - 8 = 0" },
            { verbal_explanation: "המשוואה השנייה נשארת ללא שינוי.", math_expression: "2x + 4y + 12 = 0" },
            { verbal_explanation: "כעת נציב את הנתונים החדשים בנוסחת המרחק.", math_expression: "d = |12 - (-8)| / &radic;(2<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה ואת המכנה.", math_expression: "d = |20| / &radic;(4 + 16) = 20 / &radic;20" },
            { verbal_explanation: "כפי שעשינו קודם, מספר חלקי השורש של עצמו שווה לשורש של המספר.", math_expression: "d = &radic;20" }
        ],
        final_answer: "&radic;20"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מצאו משוואת ישר המקביל לישר 3x + 4y = 0, ונמצא במרחק של 2 יחידות ממנו. (הניחו שהאיבר החופשי חיובי).",
        options: [
            "3x + 4y + 10 = 0",
            "3x + 4y + 2 = 0",
            "3x + 4y - 10 = 0",
            "3x + 4y + 8 = 0"
        ],
        hint: "הישר המבוקש ייראה כך: 3x + 4y + C = 0. הציבו זאת בנוסחת המרחק יחד עם הישר המקורי (שה-C שלו הוא 0), והשוו ל-2.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהישר המבוקש מקביל לישר הנתון, נשתמש באותם מקדמים, ונסמן את האיבר החופשי בפרמטר נעלם.", math_expression: "3x + 4y + C = 0" },
            { verbal_explanation: "האיבר החופשי של הישר המקורי הוא אפס. נציב את המידע בנוסחת המרחק.", math_expression: "2 = |C - 0| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה המוכר.", math_expression: "2 = |C| / 5" },
            { verbal_explanation: "נכפיל בחמש.", math_expression: "|C| = 10" },
            { verbal_explanation: "הפתרונות לערך המוחלט הם 10 או מינוס 10. השאלה מבקשת את הפתרון שבו האיבר החופשי חיובי.", math_expression: "C = 10" },
            { verbal_explanation: "נציב בחזרה את הפרמטר כדי לרשום את המשוואה המלאה.", math_expression: "3x + 4y + 10 = 0" }
        ],
        final_answer: "3x + 4y + 10 = 0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "ריבוע כלוא בין שני ישרים מקבילים, כך ששתיים מצלעותיו הנגדיות מונחות בדיוק על הישרים הללו. <br>משוואות הישרים הן: 3x + 4y - 5 = 0 ו- 3x + 4y + 5 = 0. <br>מהו שטחו של הריבוע?",
        options: [
            "4",
            "2",
            "10",
            "25"
        ],
        hint: "המרחק בין שני הישרים המקבילים מהווה בדיוק את אורך הצלע של הריבוע החסום. חשבו את המרחק, ולאחר מכן העלו אותו בריבוע למציאת השטח.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אורך צלע הריבוע שווה למרחק האנכי שבין שני הישרים המקבילים.", math_expression: "a = d" },
            { verbal_explanation: "נחשב את המרחק בעזרת הנוסחה.", math_expression: "a = |5 - (-5)| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נפשט את המונה והמכנה.", math_expression: "a = |10| / 5 = 2" },
            { verbal_explanation: "שטח ריבוע שווה לצלע כפול עצמה.", math_expression: "S = a<sup>2</sup>" },
            { verbal_explanation: "נציב את אורך הצלע שמצאנו ונחשב את השטח.", math_expression: "S = 2<sup>2</sup> = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהי המשוואה של קו האמצע (Midline) העובר בדיוק במרחק שווה בין שני הישרים המקבילים:<br>2x - 3y + 10 = 0<br>2x - 3y - 4 = 0",
        options: [
            "2x - 3y + 3 = 0",
            "2x - 3y + 6 = 0",
            "2x - 3y + 7 = 0",
            "2x - 3y + 14 = 0"
        ],
        hint: "ישר האמצע מקביל לשני הישרים הנתונים, ולכן יש לו את אותם מקדמים בדיוק. האיבר החופשי שלו (C) הוא פשוט הממוצע החשבוני של האיברים החופשיים של שני הישרים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהישר המבוקש נמצא במרחק שווה משני הישרים והוא מקביל להם, המקדמים שלו יהיו זהים לשלהם.", math_expression: "2x - 3y + C = 0" },
            { verbal_explanation: "האיבר החופשי של ישר כזה מהווה את נקודת האמצע בין שני האיברים החופשיים הנתונים, ולכן נחשב אותו כממוצע פשוט.", math_expression: "C = (C_1 + C_2) / 2" },
            { verbal_explanation: "נציב את הנתונים אל הנוסחה.", math_expression: "C = (10 + (-4)) / 2" },
            { verbal_explanation: "נחשב את הערך.", math_expression: "C = 6 / 2 = 3" },
            { verbal_explanation: "נכתוב את משוואת הישר המלאה.", math_expression: "2x - 3y + 3 = 0" }
        ],
        final_answer: "2x - 3y + 3 = 0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "נתונים שני ישרים מקבילים עם פרמטר p באחד מהם:<br>4x - 3y + 12 = 0<br>4x - 3y + p = 0<br>ידוע שהמרחק בין הישרים הוא 4 יחידות אורך, וכן ש- p &gt; 0.<br>מהו ערכו של הפרמטר p?",
        options: [
            "32",
            "20",
            "-8",
            "8"
        ],
        hint: "הציבו את הנוסחה למרחק בין מקבילים, השוו ל-4, ופתרו משוואת ערך מוחלט עבור p.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את נתוני שני הישרים לתוך נוסחת המרחק, ונשווה למרחק הידוע.", math_expression: "4 = |p - 12| / &radic;(4<sup>2</sup> + (-3)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה (שהוא שורש של עשרים וחמש).", math_expression: "4 = |p - 12| / 5" },
            { verbal_explanation: "נכפיל את המשוואה בחמש.", math_expression: "20 = |p - 12|" },
            { verbal_explanation: "נפצל את משוואת הערך המוחלט לשתי אפשרויות לפתרון.", math_expression: "p - 12 = 20 &nbsp;&nbsp;,&nbsp;&nbsp; p - 12 = -20" },
            { verbal_explanation: "נפתור את הראשונה.", math_expression: "p = 32" },
            { verbal_explanation: "נפתור את השנייה.", math_expression: "p = -8" },
            { verbal_explanation: "מכיוון שהתבקשנו למצוא ערך חיובי לפרמטר, נפסול את התשובה השנייה.", math_expression: "p = 32" }
        ],
        final_answer: "32"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "במשולש, אורך אחת הצלעות הוא 10. צלע זו מונחת על הישר 3x + 4y - 2 = 0. הקודקוד השלישי של המשולש מונח על הישר המקביל 3x + 4y + 23 = 0.<br>מהו שטח המשולש?",
        options: [
            "25",
            "50",
            "20",
            "12.5"
        ],
        hint: "המרחק האנכי בין שני הישרים המקבילים מהווה בדיוק את גובה המשולש. שטח המשולש הוא (בסיס כפול גובה) חלקי 2.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לחשב את שטח המשולש אנו זקוקים לאורך הבסיס ולגובה. אורך הבסיס נתון.", math_expression: "b = 10" },
            { verbal_explanation: "הגובה למשולש זה הוא למעשה המרחק בין הישר שעליו הבסיס לבין הישר המקביל שעליו הקודקוד. נחשב מרחק זה.", math_expression: "h = |23 - (-2)| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את השבר לקבלת הגובה.", math_expression: "h = |25| / 5 = 5" },
            { verbal_explanation: "נציב את הבסיס ואת הגובה בנוסחת שטח משולש.", math_expression: "S = (b &times; h) / 2" },
            { verbal_explanation: "נחשב את התוצאה הסופית לשטח.", math_expression: "S = (10 &times; 5) / 2 = 50 / 2 = 25" }
        ],
        final_answer: "25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק הגיאומטרי בין שני הישרים האנכיים x = 4 ו- x = -2?",
        options: [
            "6",
            "2",
            "8",
            "4"
        ],
        hint: "ישרים שמשוואתם מהצורה x=c מקבילים לציר ה-y. המרחק ביניהם הוא פשוט ההפרש האופקי בין ערכי ה-x שלהם (בערך מוחלט).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ישרים אנכיים מיוחדים בכך שהם אינם דורשים נוסחת מרחק מורכבת. ניתן להתייחס למרחק ביניהם כמרחק על פני ציר ה-x.", math_expression: "d = |x_1 - x_2|" },
            { verbal_explanation: "נציב את הערכים ונחסר את הקטן מהגדול (או נשתמש בערך מוחלט).", math_expression: "d = |4 - (-2)|" },
            { verbal_explanation: "נחשב את ההפרש לקבלת המרחק המדויק.", math_expression: "d = |4 + 2| = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "הישרים y = 0.5x ו- x - 2y + 8 = 0 הם מקבילים.<br>מהו המרחק ביניהם?",
        options: [
            "8 / &radic;5",
            "4 / &radic;5",
            "8",
            "4"
        ],
        hint: "העבירו את הישר הראשון לצורה הכללית (ללא שברים במקדמים, הכפילו פי 2) וודאו שהמקדמים זהים לישר השני לפני ההצבה בנוסחה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתחיל בסידור משוואת הישר הראשון לצורה כללית.", math_expression: "-0.5x + y = 0" },
            { verbal_explanation: "נכפיל במינוס שתיים כדי להיפטר מהשבר ולקבל מקדמים שלמים וזהים למשוואה השנייה.", math_expression: "x - 2y = 0" },
            { verbal_explanation: "משוואת הישר השני נתונה כבר בצורה המתאימה.", math_expression: "x - 2y + 8 = 0" },
            { verbal_explanation: "נציב את הנתונים לתוך הנוסחה (המקדם A הוא אחת, המקדם B הוא מינוס שתיים).", math_expression: "d = |8 - 0| / &radic;(1<sup>2</sup> + (-2)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את השבר, ונשאיר עם השורש במכנה כפי שמופיע בתשובות.", math_expression: "d = 8 / &radic;(1 + 4) = 8 / &radic;5" }
        ],
        final_answer: "8 / &radic;5"
    },
    // =====================================================================
    // תת-נושא 6: משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתונה משוואת המעגל הבאה:<br>(x - 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 25<br>מהם שיעורי מרכז המעגל ואורך הרדיוס שלו?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><line x1='10' y1='75' x2='190' y2='75' stroke='#94a3b8' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#94a3b8' stroke-width='2'/><circle cx='130' cy='115' r='30' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='130' cy='115' r='4' fill='#ef4444'/><line x1='130' y1='115' x2='160' y2='115' stroke='#ef4444' stroke-width='2'/></svg>",
        options: [
            "M(3, -4) , R = 5",
            "M(-3, 4) , R = 25",
            "M(3, -4) , R = 25",
            "M(-3, 4) , R = 5"
        ],
        hint: "משוואת מעגל סטנדרטית נכתבת בצורה (x - a)² + (y - b)² = R². שימו לב לסימני המינוס שמובנים בתוך הנוסחה מול המספרים המופיעים, ואל תשכחו להוציא שורש מהאגף הימני.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכתוב את הצורה הכללית של משוואת מעגל לצורך השוואה והתאמה.", math_expression: "(x - a)<sup>2</sup> + (y - b)<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נשווה את האיבר הראשון. הנוסחה מכילה מינוס, לכן נקבל ערך חיובי למרכז בציר ה-x.", math_expression: "a = 3" },
            { verbal_explanation: "נשווה את האיבר השני. הפלוס במשוואה מעיד על מינוס כפול מינוס, לכן הערך המקורי שלילי.", math_expression: "-b = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = -4" },
            { verbal_explanation: "נקודת מרכז המעגל שגילינו היא:", math_expression: "M(3, -4)" },
            { verbal_explanation: "נשווה את אגף ימין המייצג את הרדיוס בריבוע, ונוציא שורש כדי למצוא את אורך הרדיוס (תמיד חיובי).", math_expression: "R<sup>2</sup> = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R = 5" }
        ],
        final_answer: "M(3, -4) , R = 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מעגל שמרכזו מונח בדיוק על ראשית הצירים עובר דרך הנקודה הבאה:<br>(3, 4)<br>מהי משוואתו של המעגל הזה?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 25",
            "x<sup>2</sup> + y<sup>2</sup> = 5",
            "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 25",
            "x<sup>2</sup> + y<sup>2</sup> = 9"
        ],
        hint: "מעגל שמרכזו בראשית נקרא מעגל קנוני ומשוואתו x² + y² = R². הציבו את הנקודה הנתונה במקום המשתנים כדי למצוא את רדיוסו בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מעגל קנוני שמרכזו באפס-אפס לא מכיל תזוזות, והמשוואה שלו פשוטה מאוד.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "כדי למצוא את הרדיוס, נציב את הנקודה שעל המעגל לתוך משוואה זו.", math_expression: "3<sup>2</sup> + 4<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נחשב את החזקות.", math_expression: "9 + 16 = 25" },
            { verbal_explanation: "מצאנו את הרדיוס בריבוע. נציב אותו בחזרה למשוואה הכללית.", math_expression: "R<sup>2</sup> = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> + y<sup>2</sup> = 25" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "קטע העובר דרך שתי הנקודות הבאות משמש כקוטר של מעגל שלם:<br>A(-2, 0) , B(2, 0)<br>מהי משוואת המעגל?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 4",
            "(x + 2)<sup>2</sup> + y<sup>2</sup> = 4",
            "x<sup>2</sup> + y<sup>2</sup> = 16",
            "x<sup>2</sup> + (y - 2)<sup>2</sup> = 4"
        ],
        hint: "מרכז המעגל נמצא תמיד בדיוק באמצע הקוטר. הרדיוס שווה למחצית מאורך הקוטר. השתמשו בנוסחאות אמצע קטע ודיסטנס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את מרכז המעגל על ידי חישוב נקודת האמצע של הקוטר.", math_expression: "x_M = (-2 + 2) / 2 = 0 &nbsp;,&nbsp; y_M = (0 + 0) / 2 = 0" },
            { verbal_explanation: "המרכז נמצא בראשית הצירים, לכן זהו מעגל קנוני.", math_expression: "M(0, 0)" },
            { verbal_explanation: "הרדיוס הוא המרחק ממרכז המעגל לכל אחת מהנקודות על שפתו. המרחק מאפס לשתיים הוא שתי יחידות.", math_expression: "R = 2" },
            { verbal_explanation: "נרכיב את המשוואה ונעלה את הרדיוס בריבוע.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 2<sup>2</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> + y<sup>2</sup> = 4" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "השלימו לריבוע ומצאו את מרכז ורדיוס המעגל שמשוואתו:<br>x<sup>2</sup> - 4x + y<sup>2</sup> + 6y = 12",
        options: [
            "M(2, -3) , R = 5",
            "M(-2, 3) , R = 25",
            "M(2, -3) , R = 12",
            "M(-4, 6) , R = 5"
        ],
        hint: "הוסיפו לשני אגפי המשוואה מספרים שישלימו את האיברים לדו-איבר בריבוע. המספר שצריך להוסיף הוא תמיד המחצית של המקדם, מועלית בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בטכניקת השלמה לריבוע. עבור האיקסים, חצי מהמקדם מינוס 4 הוא מינוס 2. בריבוע זה 4. לכן נוסיף 4.", math_expression: "(x<sup>2</sup> - 4x + 4) - 4" },
            { verbal_explanation: "עבור ה-y, חצי מהמקדם 6 הוא 3. בריבוע זה 9. לכן נוסיף 9.", math_expression: "(y<sup>2</sup> + 6y + 9) - 9" },
            { verbal_explanation: "נכתוב את המשוואה ונוסיף את המספרים לשני האגפים כדי לשמור על איזון.", math_expression: "(x<sup>2</sup> - 4x + 4) + (y<sup>2</sup> + 6y + 9) = 12 + 4 + 9" },
            { verbal_explanation: "נארוז את הביטויים בעזרת כפל מקוצר, ונחבר את אגף ימין.", math_expression: "(x - 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 25" },
            { verbal_explanation: "מהמשוואה החדשה נחלץ את שיעורי המרכז (היפוך סימן) ונוציא שורש מהרדיוס.", math_expression: "M(2, -3) &nbsp;,&nbsp; R = &radic;25 = 5" }
        ],
        final_answer: "M(2, -3) , R = 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתון מעגל שמשוואתו היא:<br>(x - 3)<sup>2</sup> + (y - 3)<sup>2</sup> = 9<br>היכן ממוקמת הנקודה (3, 6) ביחס למעגל?",
        options: [
            "על שפת המעגל בדיוק",
            "בתוך המעגל (קרובה למרכז)",
            "מחוץ למעגל",
            "זוהי מרכז המעגל"
        ],
        hint: "הציבו את הנקודה באגף השמאלי של המשוואה. אם התוצאה שווה בדיוק ל-9, הנקודה על המעגל. אם היא קטנה מ-9, היא בפנים. אם גדולה, היא בחוץ.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לבדוק מיקום של נקודה ביחס למעגל, נציב אותה בצד השמאלי של משוואת המעגל, המייצג את ריבוע המרחק מהמרכז.", math_expression: "D<sup>2</sup> = (3 - 3)<sup>2</sup> + (6 - 3)<sup>2</sup>" },
            { verbal_explanation: "נחשב את ערך הביטוי שהתקבל.", math_expression: "D<sup>2</sup> = 0<sup>2</sup> + 3<sup>2</sup> = 9" },
            { verbal_explanation: "נשווה את התוצאה לאגף הימני המקורי של המשוואה (הרדיוס בריבוע).", math_expression: "9 = 9" },
            { verbal_explanation: "כיוון שריבוע המרחק שווה בדיוק לרדיוס בריבוע, המסקנה היא שהנקודה מונחת ממש על השפה של המעגל.", math_expression: "R = D" }
        ],
        final_answer: "על שפת המעגל בדיוק"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מעגל נמצא ברביע הראשון בלבד. הוא משיק לציר ה-x וגם משיק לציר ה-y. רדיוס המעגל שווה ל-3 ס\"מ.<br>מהי משוואת המעגל?",
        options: [
            "(x - 3)<sup>2</sup> + (y - 3)<sup>2</sup> = 9",
            "(x + 3)<sup>2</sup> + (y + 3)<sup>2</sup> = 9",
            "x<sup>2</sup> + (y - 3)<sup>2</sup> = 9",
            "(x - 3)<sup>2</sup> + y<sup>2</sup> = 9"
        ],
        hint: "מעגל שמשיק לשני הצירים ברביע הראשון, מרכזו חייב להיות במרחק שווה של רדיוס משני הצירים. לכן קואורדינטות המרכז הן חיוביות ושוות לרדיוס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מעגל שמשיק לציר ה-x, המרחק ממרכזו אליו שווה לרדיוס (לכן שיעור ה-y הוא 3). מעגל שמשיק לציר ה-y, המרחק ממרכזו אליו שווה לרדיוס.", math_expression: "x_M = R = 3 &nbsp;,&nbsp; y_M = R = 3" },
            { verbal_explanation: "מכיוון שהמעגל ברביע הראשון, שני שיעורי המרכז חיוביים. נרשום את נקודת המרכז.", math_expression: "M(3, 3)" },
            { verbal_explanation: "נרכיב את המשוואה תוך העלאת הרדיוס בריבוע באגף ימין.", math_expression: "(x - 3)<sup>2</sup> + (y - 3)<sup>2</sup> = 3<sup>2</sup> = 9" }
        ],
        final_answer: "(x - 3)<sup>2</sup> + (y - 3)<sup>2</sup> = 9"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מצאו את נקודות החיתוך של המעגל הבא עם ציר ה-x:<br>(x - 2)<sup>2</sup> + y<sup>2</sup> = 4",
        options: [
            "(4, 0) , (0, 0)",
            "(2, 0) , (4, 0)",
            "(0, 0)",
            "אין נקודות חיתוך"
        ],
        hint: "נקודת חיתוך עם ציר x מתקיימת כאשר y שווה לאפס. הציבו ערך זה ופתרו את המשוואה הריבועית הפשוטה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את החיתוך עם הציר האופקי, נציב אפס בשיעור ה-y של המשוואה.", math_expression: "(x - 2)<sup>2</sup> + 0<sup>2</sup> = 4" },
            { verbal_explanation: "נשארנו עם משוואה שניתן לפתור על ידי הוצאת שורש ריבועי.", math_expression: "(x - 2)<sup>2</sup> = 4" },
            { verbal_explanation: "השורש הריבועי של 4 נותן לנו שתי אפשרויות שונות.", math_expression: "x - 2 = 2 &nbsp;&nbsp;,&nbsp;&nbsp; x - 2 = -2" },
            { verbal_explanation: "נפתור את האפשרות הראשונה על ידי העברת אגף.", math_expression: "x = 2 + 2 = 4" },
            { verbal_explanation: "נפתור את האפשרות השנייה.", math_expression: "x = -2 + 2 = 0" },
            { verbal_explanation: "נרשום את התוצאות שהתקבלו כנקודות על המישור.", math_expression: "(4, 0) , (0, 0)" }
        ],
        final_answer: "(4, 0) , (0, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתון מעגל המיוצג על ידי המשוואה:<br>(x + 1)<sup>2</sup> + (y - 5)<sup>2</sup> = 16<br>מעגל שני הוא קונצנטרי למעגל הראשון (בעל מרכז משותף), אך הרדיוס שלו כפול בגודלו.<br>מהי משוואת המעגל השני?",
        options: [
            "(x + 1)<sup>2</sup> + (y - 5)<sup>2</sup> = 64",
            "(x + 1)<sup>2</sup> + (y - 5)<sup>2</sup> = 32",
            "(x - 1)<sup>2</sup> + (y + 5)<sup>2</sup> = 64",
            "(x + 2)<sup>2</sup> + (y - 10)<sup>2</sup> = 16"
        ],
        hint: "מרכז משותף אומר שהצד השמאלי של המשוואה נשאר בדיוק אותו דבר. רדיוס כפול אומר שצריך למצוא קודם את הרדיוס הנוכחי, להכפיל אותו פי 2, ואז להעלות את התוצאה בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכז המעגלים נשאר זהה בשתי המשוואות. נוציא את הרדיוס של המעגל הראשון מתוך אגף ימין.", math_expression: "R_1 = &radic;16 = 4" },
            { verbal_explanation: "נתון שרדיוס המעגל השני גדול פי שתיים.", math_expression: "R_2 = 4 &times; 2 = 8" },
            { verbal_explanation: "כדי לכתוב את המשוואה של המעגל החדש, נעלה את הרדיוס החדש בריבוע.", math_expression: "R_2<sup>2</sup> = 8<sup>2</sup> = 64" },
            { verbal_explanation: "נשלים את המשוואה הסופית כשהצד השמאלי זהה למקור לחלוטין.", math_expression: "(x + 1)<sup>2</sup> + (y - 5)<sup>2</sup> = 64" }
        ],
        final_answer: "(x + 1)<sup>2</sup> + (y - 5)<sup>2</sup> = 64"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתון מעגל קנוני שמשוואתו:<br>x<sup>2</sup> + y<sup>2</sup> = R<sup>2</sup><br>המעגל חוסם בתוכו ריבוע ששטחו שווה ל-18 סמ\"ר.<br>מהי משוואת המעגל?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 9",
            "x<sup>2</sup> + y<sup>2</sup> = 18",
            "x<sup>2</sup> + y<sup>2</sup> = 36",
            "x<sup>2</sup> + y<sup>2</sup> = 3"
        ],
        hint: "בריבוע החסום במעגל, האלכסון של הריבוע הוא בדיוק הקוטר של המעגל. שטח ריבוע שווה גם למחצית מכפלת אלכסוניו. השתמשו בזה למציאת הקוטר, וממנו את הרדיוס בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזכור שעבור ריבוע החסום במעגל, האלכסון שלו הוא בדיוק קוטר המעגל.", math_expression: "Diag = d = 2R" },
            { verbal_explanation: "שטח ריבוע ניתן לחישוב על ידי מכפלת האלכסונים חלקי שתיים. נציב את קוטר המעגל ונשווה לשטח הנתון.", math_expression: "S = d<sup>2</sup> / 2 = 18" },
            { verbal_explanation: "נכפיל את שני אגפי המשוואה בשתיים כדי למצוא את הקוטר בריבוע.", math_expression: "d<sup>2</sup> = 36" },
            { verbal_explanation: "קוטר הוא פעמיים רדיוס. נציב זאת במקום d בתוך הסוגריים.", math_expression: "(2R)<sup>2</sup> = 36" },
            { verbal_explanation: "נפתח חזקה להעלאה בריבוע.", math_expression: "4R<sup>2</sup> = 36" },
            { verbal_explanation: "נחלק בארבע למציאת הרדיוס בריבוע, שהוא בדיוק אגף ימין של משוואת המעגל.", math_expression: "R<sup>2</sup> = 9" },
            { verbal_explanation: "נכתוב את משוואת המעגל השלמה.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 9" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 9"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "שטחו של מעגל נתון הוא 25&pi; סמ\"ר, ומרכזו נמצא בנקודה (0, 7).<br>מהי משוואתו המלאה של מעגל זה?",
        options: [
            "x<sup>2</sup> + (y - 7)<sup>2</sup> = 25",
            "x<sup>2</sup> + (y + 7)<sup>2</sup> = 25",
            "(x - 7)<sup>2</sup> + y<sup>2</sup> = 5",
            "x<sup>2</sup> + y<sup>2</sup> = 25"
        ],
        hint: "נוסחת השטח למעגל היא פאי כפול הרדיוס בריבוע. השוו את הנוסחה לנתון כדי לחלץ את הרדיוס בריבוע, ולאחר מכן הרכיבו את המשוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת השטח קובעת שהשטח שווה לפאי כפול הרדיוס בריבוע. נשווה לנתון ונצמצם את הפאי משני הצדדים.", math_expression: "&pi;R<sup>2</sup> = 25&pi; &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R<sup>2</sup> = 25" },
            { verbal_explanation: "יש לנו את הרדיוס בריבוע. הנקודה הנתונה מספקת לנו את המרכז. שיעור האיקס הוא אפס, ולכן הביטוי עבורו פשוט.", math_expression: "(x - 0)<sup>2</sup> = x<sup>2</sup>" },
            { verbal_explanation: "שיעור הוואי הוא שבע חיובי, ולכן בתוך הסוגריים יופיע סימן מינוס על פי הכלל.", math_expression: "(y - 7)<sup>2</sup>" },
            { verbal_explanation: "נחבר הכל למשוואה אחת תקנית.", math_expression: "x<sup>2</sup> + (y - 7)<sup>2</sup> = 25" }
        ],
        final_answer: "x<sup>2</sup> + (y - 7)<sup>2</sup> = 25"
    },

    // =====================================================================
    // תת-נושא 7: נקודות חיתוך של ישר ומעגל או שני מעגלים (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודת החיתוך הנמצאת ברביע הראשון בין המעגל והישר הבאים:<br>x<sup>2</sup> + y<sup>2</sup> = 18<br>y = x",
        options: [
            "(3, 3)",
            "(9, 9)",
            "(4, 4)",
            "(18, 18)"
        ],
        hint: "הציבו את משוואת הישר לתוך המעגל. מכיוון ש-y=x, החליפו את y ב-x ופתרו משוואה ריבועית פשוטה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את נקודות החיתוך, נציב את משוואת הישר אל תוך משוואת המעגל.", math_expression: "x<sup>2</sup> + x<sup>2</sup> = 18" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי.", math_expression: "2x<sup>2</sup> = 18" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורש. מכיוון שהתבקשנו למצוא את הנקודה ברביע הראשון (שבו הכל חיובי), נבחר רק בפתרון החיובי.", math_expression: "x = 3" },
            { verbal_explanation: "נציב את ה-x שמצאנו במשוואת הישר כדי למצוא את ה-y.", math_expression: "y = 3" },
            { verbal_explanation: "נאגד את התוצאות לנקודה אחת מסודרת.", math_expression: "(3, 3)" }
        ],
        final_answer: "(3, 3)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "כמה נקודות חיתוך יש בין המעגל והישר הבאים?<br>x<sup>2</sup> + y<sup>2</sup> = 16<br>y = 5",
        options: [
            "אין נקודות חיתוך",
            "נקודה אחת (הישר משיק)",
            "שתי נקודות",
            "אינסוף נקודות"
        ],
        hint: "נסו להציב y=5 במשוואת המעגל. האם מתקבלת משוואה הגיונית עם פתרון ממשי? (רמז: הרדיוס הוא 4, והישר בגובה 5).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משוואת הישר האופקי בתוך משוואת המעגל לקבלת משוואה עם נעלם אחד.", math_expression: "x<sup>2</sup> + 5<sup>2</sup> = 16" },
            { verbal_explanation: "נחשב את החזקה.", math_expression: "x<sup>2</sup> + 25 = 16" },
            { verbal_explanation: "נעביר את המספר לאגף ימין.", math_expression: "x<sup>2</sup> = -9" },
            { verbal_explanation: "התקבלה משוואה שדורשת להוציא שורש ממספר שלילי. במספרים ממשיים אין לכך פתרון, ולכן הישר עובר מחוץ למעגל ואין חיתוך.", math_expression: "&empty;" }
        ],
        final_answer: "אין נקודות חיתוך"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "נתונים שני מעגלים:<br>x<sup>2</sup> + y<sup>2</sup> = 25<br>(x - 6)<sup>2</sup> + y<sup>2</sup> = 25<br>מהו שיעור ה-x של נקודת החיתוך בין שני המעגלים הללו?",
        options: [
            "3",
            "4",
            "0",
            "6"
        ],
        hint: "מערכת של שני מעגלים נפתרת בקלות על ידי חילוץ משתנה שחוזר על עצמו במדויק. חלצו את y² מהמשוואה הראשונה והציבו אותו במשוואה השנייה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ את הביטוי עבור חזקת ה-y מתוך משוואת המעגל הראשון.", math_expression: "y<sup>2</sup> = 25 - x<sup>2</sup>" },
            { verbal_explanation: "נציב ביטוי זה אל תוך משוואת המעגל השני במקום החזקה של ה-y.", math_expression: "(x - 6)<sup>2</sup> + 25 - x<sup>2</sup> = 25" },
            { verbal_explanation: "נפתח את הסוגריים לפי נוסחת כפל מקוצר של הפרש.", math_expression: "x<sup>2</sup> - 12x + 36 + 25 - x<sup>2</sup> = 25" },
            { verbal_explanation: "נכנס איברים. החזקות של איקס מתבטלות לחלוטין, וגם ה-25 מתבטל משני האגפים.", math_expression: "-12x + 36 = 0" },
            { verbal_explanation: "נעביר אגפים ונבודד את המשתנה.", math_expression: "12x = 36" },
            { verbal_explanation: "נחלק בשתים עשרה ונקבל את שיעור ה-x המבוקש.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "נתון מעגל וישר המיוצגים על ידי המשוואות:<br>(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 10<br>y = -x + 5<br>מצאו את נקודות החיתוך ביניהם.",
        options: [
            "(5, 0) , (1, 4)",
            "(3, 2) , (1, 4)",
            "(2, 3) , (4, 1)",
            "(0, 5) , (5, 0)"
        ],
        hint: "הציבו את כל הביטוי של y ממשוואת הישר אל תוך הסוגריים השניים במשוואת המעגל, פשטו ופתרו את המשוואה הריבועית שמתקבלת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משוואת הישר במקום y במשוואת המעגל המלאה.", math_expression: "(x - 2)<sup>2</sup> + (-x + 5 - 1)<sup>2</sup> = 10" },
            { verbal_explanation: "נפשט את הביטוי המספרי בתוך הסוגריים השניים.", math_expression: "(x - 2)<sup>2</sup> + (-x + 4)<sup>2</sup> = 10" },
            { verbal_explanation: "נפתח את שתי קבוצות הסוגריים בעזרת כפל מקוצר.", math_expression: "(x<sup>2</sup> - 4x + 4) + (x<sup>2</sup> - 8x + 16) = 10" },
            { verbal_explanation: "נכנס איברים ונעביר הכל שמאלה ליצירת משוואה ריבועית השווה לאפס.", math_expression: "2x<sup>2</sup> - 12x + 20 = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2x<sup>2</sup> - 12x + 10 = 0" },
            { verbal_explanation: "נחלק את המשוואה בשתיים כדי להקל על הפתרון.", math_expression: "x<sup>2</sup> - 6x + 5 = 0" },
            { verbal_explanation: "נפרק לטרינום (מכפלה 5, סכום מינוס שש) ונחלץ את ה-x.", math_expression: "(x - 5)(x - 1) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5 , x = 1" },
            { verbal_explanation: "נציב את כל אחד מהערכים חזרה במשוואת הישר למציאת שיעורי ה-y.", math_expression: "y(5) = -5 + 5 = 0 &nbsp;,&nbsp; y(1) = -1 + 5 = 4" },
            { verbal_explanation: "נרשום את התוצאות כזוגות סדורים.", math_expression: "(5, 0) , (1, 4)" }
        ],
        final_answer: "(5, 0) , (1, 4)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "הישר הבא חותך את המעגל בשתי נקודות:<br>x = 5<br>x<sup>2</sup> + y<sup>2</sup> = 169<br>מהו אורך המיתר שנוצר בין שתי נקודות החיתוך הללו?",
        options: [
            "24",
            "12",
            "13",
            "10"
        ],
        hint: "זהו ישר אנכי. הציבו x=5 במשוואת המעגל כדי למצוא את שני ערכי ה-y. המרחק בין שתי הנקודות הוא פשוט ההפרש המוחלט האנכי ביניהן.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משוואת הישר האנכי לתוך משוואת המעגל.", math_expression: "5<sup>2</sup> + y<sup>2</sup> = 169" },
            { verbal_explanation: "נחשב את החזקה.", math_expression: "25 + y<sup>2</sup> = 169" },
            { verbal_explanation: "נעביר אגף.", math_expression: "y<sup>2</sup> = 144" },
            { verbal_explanation: "נוציא שורש כדי למצוא את שיעורי ה-y של שתי הנקודות המרכיבות את קצות המיתר.", math_expression: "y = 12 , y = -12" },
            { verbal_explanation: "מכיוון שהנקודות נמצאות על אותו קו אנכי בדיוק, אורך המיתר הוא המרחק הישיר ביניהן (חיסור ה-y הנמוך מה-y הגבוה).", math_expression: "d = 12 - (-12) = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "שני מעגלים משיקים זה לזה מבחוץ. המעגל הראשון קנוני ומקורו ב-(0,0).<br>מרכז המעגל השני הוא ב-(10, 0) ורדיוסו שווה ל-4.<br>מהו אורך הרדיוס (R) של המעגל הראשון?",
        options: [
            "6",
            "4",
            "14",
            "10"
        ],
        hint: "כאשר שני מעגלים משיקים זה לזה מבחוץ, המרחק המדויק בין שני המרכזים שלהם שווה בדיוק לסכום שני הרדיוסים יחד.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק בין מרכזי שני המעגלים. שניהם מונחים על ציר ה-x, ולכן המרחק הוא ההפרש הפשוט בין קואורדינטות ה-x.", math_expression: "d = 10 - 0 = 10" },
            { verbal_explanation: "כלל ההשקה החיצונית קובע שהמרחק בין המרכזים שווה לסכום הרדיוסים של שני המעגלים.", math_expression: "R_1 + R_2 = d" },
            { verbal_explanation: "נציב את הנתונים הידועים לנו למשוואה הפשוטה.", math_expression: "R_1 + 4 = 10" },
            { verbal_explanation: "נעביר את המספר אגף כדי לבודד ולמצוא את הרדיוס המבוקש.", math_expression: "R_1 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "האם הישר הבא עובר דרך מרכז המעגל המוצג?<br>y = 0.5x<br>(x - 4)<sup>2</sup> + (y - 2)<sup>2</sup> = 20",
        options: [
            "כן",
            "לא",
            "הוא משיק למעגל מבחוץ",
            "חסרים נתונים"
        ],
        hint: "מצאו את נקודת המרכז של המעגל מתוך המשוואה שלו. לאחר מכן, הציבו את שיעוריה במשוואת הישר כדי לראות אם היא מקיימת את המשוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראשית נחלץ את שיעורי מרכז המעגל מתוך משוואתו המסודרת (זכרו להפוך סימנים).", math_expression: "M(4, 2)" },
            { verbal_explanation: "כעת, כדי לבדוק האם הישר עובר ממש דרך המרכז הזה, נציב את הנקודה במשוואת הישר הנתון.", math_expression: "2 = 0.5(4)" },
            { verbal_explanation: "נחשב את אגף ימין ונראה שהפסוק המתקבל הוא פסוק אמת מלא.", math_expression: "2 = 2" },
            { verbal_explanation: "מסקנה: הנקודה מקיימת את משוואת הישר, ולכן הישר אכן עובר במרכז המעגל.", math_expression: "True" }
        ],
        final_answer: "כן"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך של המעגל הבא עם ציר ה-y:<br>(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 25",
        options: [
            "(0, 8) , (0, 0)",
            "(0, 5) , (0, -5)",
            "(3, 0) , (0, 4)",
            "אין נקודות חיתוך"
        ],
        hint: "חיתוך עם ציר y אומר ששיעור ה-x שווה לאפס. הציבו x=0 ופתרו את המשוואה הריבועית בעזרת הוצאת שורש לכל אגף.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת חיתוך עם ציר y מתאפיינת תמיד בכך ששיעור ה-x שלה הוא אפס. נציב זאת.", math_expression: "(0 - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 25" },
            { verbal_explanation: "נחשב את הריבוע של המספר שקיבלנו בסוגריים הראשונים.", math_expression: "9 + (y - 4)<sup>2</sup> = 25" },
            { verbal_explanation: "נעביר את התשע לאגף ימין על ידי חיסור.", math_expression: "(y - 4)<sup>2</sup> = 16" },
            { verbal_explanation: "נוציא שורש ריבועי לשני האגפים. נקבל שתי תשובות אפשריות.", math_expression: "y - 4 = 4 &nbsp;&nbsp;,&nbsp;&nbsp; y - 4 = -4" },
            { verbal_explanation: "נפתור כל חלק.", math_expression: "y = 8 &nbsp;&nbsp;,&nbsp;&nbsp; y = 0" },
            { verbal_explanation: "נרשום את התוצאות שהתקבלו כנקודות על המישור.", math_expression: "(0, 8) , (0, 0)" }
        ],
        final_answer: "(0, 8) , (0, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "נתון מעגל וישר:<br>x<sup>2</sup> + y<sup>2</sup> = 20<br>y = 2x<br>מצאו את נקודת החיתוך שנמצאת ברביע הראשון.",
        options: [
            "(2, 4)",
            "(4, 8)",
            "(1, 2)",
            "(5, 10)"
        ],
        hint: "מערכת משוואות פשוטה בהצבה. החליפו את y במשוואת המעגל בביטוי '2x', זכרו להעלות את הכל בריבוע ופתרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הביטוי עבור y מתוך משוואת הישר, ישירות אל תוך משוואת המעגל.", math_expression: "x<sup>2</sup> + (2x)<sup>2</sup> = 20" },
            { verbal_explanation: "נפתח את החזקה באגף השמאלי (המספר והמשתנה עולים בריבוע).", math_expression: "x<sup>2</sup> + 4x<sup>2</sup> = 20" },
            { verbal_explanation: "נכנס איברים.", math_expression: "5x<sup>2</sup> = 20" },
            { verbal_explanation: "נחלק בחמש ונוציא שורש. נבחר בפתרון החיובי כיוון שהנקודה המבוקשת ברביע הראשון.", math_expression: "x<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2" },
            { verbal_explanation: "נציב את הערך חזרה במשוואת הישר כדי למצוא את שיעור ה-y התואם.", math_expression: "y = 2(2) = 4" },
            { verbal_explanation: "נרשום את הנקודה הסופית.", math_expression: "(2, 4)" }
        ],
        final_answer: "(2, 4)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "כמה נקודות חיתוך יש בין הישר והמעגל הבאים?<br>y = 2<br>x<sup>2</sup> + (y - 5)<sup>2</sup> = 9",
        options: [
            "נקודה אחת",
            "שתי נקודות",
            "אין נקודות חיתוך",
            "אינסוף"
        ],
        hint: "זהו ישר אופקי. הציבו y=2 בתוך משוואת המעגל ובידקו כמה פתרונות שונים של x מתקבלים מהמשוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משוואת הישר האופקי (ערך מספרי קבוע) לתוך משוואת המעגל.", math_expression: "x<sup>2</sup> + (2 - 5)<sup>2</sup> = 9" },
            { verbal_explanation: "נחשב את הביטוי בתוך הסוגריים.", math_expression: "x<sup>2</sup> + (-3)<sup>2</sup> = 9" },
            { verbal_explanation: "נעלה את המינוס שלוש בריבוע.", math_expression: "x<sup>2</sup> + 9 = 9" },
            { verbal_explanation: "נעביר את המספר ימינה ונקבל משוואה השווה לאפס.", math_expression: "x<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "מכיוון שקיבלנו פתרון אחד ויחיד למשוואה הריבועית (אפס שווה רק לאפס), אנו מסיקים שהישר נוגע במעגל רק פעם אחת. (הישר משיק למעגל).", math_expression: "1" }
        ],
        final_answer: "נקודה אחת"
    },

    // =====================================================================
    // תת-נושא 8: משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה) (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מצאו את משוואת המשיק למעגל הקנוני הבא, בנקודה (3, 4) שעליו:<br>x<sup>2</sup> + y<sup>2</sup> = 25",
        options: [
            "y = -0.75x + 6.25",
            "y = 0.75x + 1.75",
            "y = -1.33x + 8",
            "y = -0.75x + 5"
        ],
        hint: "המרכז הוא ב-(0,0). מצאו את שיפוע הרדיוס מהמרכז לנקודה (3,4). המשיק מאונך תמיד לרדיוס בנקודת ההשקה, ולכן שיפועו הוא הופכי ונגדי לשיפוע הרדיוס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נחשב את שיפוע הרדיוס המחבר את מרכז המעגל הקנוני עם נקודת ההשקה הנתונה לנו.", math_expression: "m_R = (4 - 0) / (3 - 0) = 4 / 3" },
            { verbal_explanation: "על פי הכלל הגיאומטרי, המשיק מאונך לרדיוס בנקודת ההשקה. לכן, שיפוע המשיק יהיה הופכי ונגדי (מכפלתם מינוס אחת).", math_expression: "m_T = -3 / 4 = -0.75" },
            { verbal_explanation: "נרכיב את משוואת קו המשיק תוך שימוש בנקודת ההשקה והשיפוע החדש שמצאנו.", math_expression: "y - 4 = -0.75(x - 3)" },
            { verbal_explanation: "נפתח את הסוגריים ונעביר את המספר ימינה לקבלת המשוואה הסופית של הישר.", math_expression: "y = -0.75x + 2.25 + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -0.75x + 6.25" }
        ],
        final_answer: "y = -0.75x + 6.25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מהי משוואת המשיק למעגל המוזז הבא, בראשית הצירים (0,0)?<br>(x - 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 25",
        options: [
            "y = 0.75x",
            "y = -0.75x",
            "y = 1.33x",
            "y = -1.33x"
        ],
        hint: "נקודת המרכז של המעגל היא (3, -4). נקודת ההשקה היא ראשית הצירים. מצאו את שיפוע הרדיוס ביניהן, מצאו את ההופכי ונגדי שלו, ובנו משוואה שעוברת בראשית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את מרכז המעגל מתוך המשוואה המוזזת שלו.", math_expression: "M(3, -4)" },
            { verbal_explanation: "נחשב את שיפוע הרדיוס המחבר את המרכז לנקודת ההשקה, שהיא ראשית הצירים.", math_expression: "m_R = (-4 - 0) / (3 - 0) = -4 / 3" },
            { verbal_explanation: "נמצא את שיפוע המשיק לפי כלל הניצבות (הופכי ונגדי).", math_expression: "m_T = 3 / 4 = 0.75" },
            { verbal_explanation: "ישר שעובר בראשית הצירים חותך את ציר ה-y באפס ולכן אינו מכיל איבר חופשי. נרכיב את משוואתו הטהורה.", math_expression: "y = 0.75x" }
        ],
        final_answer: "y = 0.75x"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מעבירים משיק מהנקודה החיצונית P(10, 0) למעגל שמשוואתו:<br>x<sup>2</sup> + y<sup>2</sup> = 36<br>הנקודה T היא נקודת ההשקה. מהו אורך הקטע המשיק PT?",
        options: [
            "8",
            "64",
            "10",
            "6"
        ],
        hint: "שרטטו משולש שקודקודיו הם מרכז המעגל O, נקודת ההשקה T, והנקודה P. המשולש OTP הוא משולש ישר זווית. השתמשו במשפט פיתגורס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "רדיוס המעגל חולץ מתוך המשוואה (השורש של שלושים ושש).", math_expression: "R = 6" },
            { verbal_explanation: "המרחק ממרכז המעגל הקנוני אל הנקודה החיצונית מונח כולו על ציר ה-x, והוא ישמש כיתר במשולש שייווצר.", math_expression: "d = 10" },
            { verbal_explanation: "במשולש ישר הזווית OTP, הרדיוס והמשיק הם הניצבים, והמרחק לנקודה הוא היתר. נפעיל את משפט פיתגורס.", math_expression: "PT<sup>2</sup> + 6<sup>2</sup> = 10<sup>2</sup>" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "PT<sup>2</sup> + 36 = 100" },
            { verbal_explanation: "נחסר ונוציא שורש למציאת אורך קטע ההשקה.", math_expression: "PT<sup>2</sup> = 64 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; PT = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מעגל שמרכזו בנקודה (2, 3) משיק לישר האופקי y = 7 בנקודה (4, 7).<br>מהו אורך רדיוס המעגל?",
        options: [
            "4",
            "&radic;20",
            "&radic;16",
            "5"
        ],
        hint: "הרדיוס הוא קטע המחבר את מרכז המעגל עם נקודת ההשקה. כל שעליכם לעשות הוא להציב את שתי הנקודות הללו בנוסחת המרחק (דיסטנס).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הרדיוס מוגדר כמרחק הגיאומטרי שבין מרכז המעגל לנקודת ההשקה המונחת על שפתו. נציב בנוסחת הדיסטנס.", math_expression: "R = &radic;((4 - 2)<sup>2</sup> + (7 - 3)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ההפרשים בתוך הסוגריים.", math_expression: "R = &radic;(2<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע כל איבר ונחבר אותם לקבלת אורך הרדיוס המדויק מתחת לשורש.", math_expression: "R = &radic;(4 + 16) = &radic;20" }
        ],
        final_answer: "&radic;20"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "האם הישר הבא משיק למעגל הקנוני שרדיוסו 5?<br>3x - 4y + 25 = 0<br>x<sup>2</sup> + y<sup>2</sup> = 25",
        options: [
            "כן, הוא משיק למעגל",
            "לא, הוא חותך אותו פעמיים",
            "לא, הוא אינו נוגע במעגל",
            "חסרים נתונים לקביעה"
        ],
        hint: "ישר משיק למעגל אם ורק אם המרחק ממרכז המעגל אל הישר שווה במדויק לאורך רדיוס המעגל. השתמשו בנוסחת המרחק מנקודה לישר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "רדיוס המעגל הנתון הוא שורש של עשרים וחמש.", math_expression: "R = 5" },
            { verbal_explanation: "נשתמש בנוסחת המרחק מנקודה לישר, כדי לבדוק את המרחק ממרכז המעגל הקנוני אל הישר החשוד כמשיק.", math_expression: "d = |3(0) - 4(0) + 25| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הערכים.", math_expression: "d = |25| / &radic;(9 + 16) = 25 / &radic;25" },
            { verbal_explanation: "נחלץ את המרחק המדויק על ידי חלוקה.", math_expression: "d = 25 / 5 = 5" },
            { verbal_explanation: "מכיוון שהמרחק מהישר למרכז המעגל שווה בדיוק לאורך הרדיוס, מוכח גיאומטרית שהישר אכן נושק למעגל בנקודה אחת.", math_expression: "d = R" }
        ],
        final_answer: "כן, הוא משיק למעגל"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "למעגל שמשוואתו x<sup>2</sup> + y<sup>2</sup> = 20 מעבירים משיק ששיפועו הוא 2. משוואת המשיק היא מהצורה:<br>y = 2x + n<br>מהם הערכים האפשריים של הפרמטר n?",
        options: [
            "10 , -10",
            "5 , -5",
            "20 , -20",
            "4 , -4"
        ],
        hint: "הציבו את משוואת המשיק (y = 2x + n) במשוואת המעגל. סדרו למשוואה ריבועית של x. כדי שישר ישיק למעגל, למשוואה חייב להיות פתרון יחיד - לכן הדיסקרימיננטה צריכה להיות שווה אפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את משוואת המשיק המכילה את הפרמטר הנעלם בתוך משוואת המעגל.", math_expression: "x<sup>2</sup> + (2x + n)<sup>2</sup> = 20" },
            { verbal_explanation: "נפתח את הסוגריים לפי כפל מקוצר של סכום בריבוע.", math_expression: "x<sup>2</sup> + 4x<sup>2</sup> + 4nx + n<sup>2</sup> - 20 = 0" },
            { verbal_explanation: "נכנס איברים למשוואה ריבועית קלאסית ומסודרת לפי החזקות של x.", math_expression: "5x<sup>2</sup> + 4nx + (n<sup>2</sup> - 20) = 0" },
            { verbal_explanation: "התנאי להשקה הוא שלמשוואה זו יהיה פתרון יחיד, כלומר הדיסקרימיננטה (דלתא) שלה חייבת להתאפס.", math_expression: "(4n)<sup>2</sup> - 4(5)(n<sup>2</sup> - 20) = 0" },
            { verbal_explanation: "נחשב את הביטויים ונפתח סוגריים.", math_expression: "16n<sup>2</sup> - 20(n<sup>2</sup> - 20) = 0" },
            { verbal_explanation: "נכנס איברים.", math_expression: "16n<sup>2</sup> - 20n<sup>2</sup> + 400 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; -4n<sup>2</sup> + 400 = 0" },
            { verbal_explanation: "נעביר אגף, נחלק בארבע ונוציא שורשים למציאת הערכים האפשריים של הפרמטר החופשי.", math_expression: "n<sup>2</sup> = 100 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; n = 10 , n = -10" }
        ],
        final_answer: "10 , -10"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "נתון מעגל שרדיוסו 4 ס\"מ והוא חותך את ציר ה-x. הישר האופקי y = 3 משיק למעגל בנקודה (2, 3).<br>מהן קואורדינטות מרכז המעגל, בהנחה שהוא מונח מתחת למשיק?",
        options: [
            "(2, -1)",
            "(2, 7)",
            "(4, 3)",
            "(-2, 3)"
        ],
        hint: "הרדיוס מאונך למשיק בנקודת ההשקה. מאחר והמשיק אופקי, הרדיוס מונח על קו אנכי ולכן שיעור ה-x של המרכז זהה לשיעור ה-x של הנקודה. שיעור ה-y של המרכז נמוך ב-4 יחידות.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המשיק הוא קו אופקי, לכן הרדיוס המאונך אליו הוא קו אנכי לחלוטין. המשמעות היא ששיעור ה-x של המרכז זהה לאיקס של נקודת ההשקה.", math_expression: "x_M = 2" },
            { verbal_explanation: "כיוון שהמעגל מונח מתחת למשיק (המרכז נמצא למטה), נחסר את הרדיוס משיעור ה-y של נקודת ההשקה כדי לרדת אליו.", math_expression: "y_M = 3 - 4 = -1" },
            { verbal_explanation: "נאגד את שתי התשובות לכדי נקודה אחת המייצגת את המרכז.", math_expression: "(2, -1)" }
        ],
        final_answer: "(2, -1)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מהי משוואת המשיק למעגל הבא העובר דרך הנקודה (4, 1) שעליו?<br>(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 10",
        options: [
            "y = 3x - 11",
            "y = -3x + 13",
            "y = 0.33x - 0.33",
            "y = 3x + 1"
        ],
        hint: "מצאו את מרכז המעגל מהמשוואה. חשבו את שיפוע הרדיוס המחבר את המרכז לנקודה הנתונה. שיפוע המשיק יהיה הפוך ונגדי. בנו משוואת ישר עם הנקודה הנתונה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את מרכז המעגל על פי המשוואה המוזזת שלו.", math_expression: "M(1, 2)" },
            { verbal_explanation: "נחשב את שיפוע הרדיוס המחבר את המרכז לנקודת ההשקה שניתנה לנו.", math_expression: "m_R = (1 - 2) / (4 - 1) = -1 / 3" },
            { verbal_explanation: "שיפוע המשיק מאונך לרדיוס, לכן נמצא את ההופכי והנגדי שלו.", math_expression: "m_T = 3" },
            { verbal_explanation: "נרכיב משוואת ישר למשיק בעזרת הנקודה הנתונה והשיפוע הניצב שמצאנו.", math_expression: "y - 1 = 3(x - 4)" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגף לקבלת התשובה המסודרת.", math_expression: "y = 3x - 12 + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 3x - 11" }
        ],
        final_answer: "y = 3x - 11"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מראשית הצירים (0,0) מעבירים משיק למעגל שמשוואתו:<br>(x - 5)<sup>2</sup> + y<sup>2</sup> = 9<br>מהו אורכו של קטע ההשקה מהראשית ועד לנקודת ההשקה שעל המעגל?",
        options: [
            "4",
            "5",
            "16",
            "3"
        ],
        hint: "שרטטו משולש ישר זווית שהקודקודים שלו הם: ראשית הצירים, מרכז המעגל והמשיק. היתר הוא המרחק למרכז. ניצב אחד הוא הרדיוס. הניצב השני הוא המשיק.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ את הנתונים מהמשוואה: המרכז הוא בחמש פסיק אפס, והרדיוס שווה לשלוש.", math_expression: "M(5, 0) &nbsp;,&nbsp; R = 3" },
            { verbal_explanation: "נחשב את המרחק מהראשית אל מרכז המעגל. מרחק זה יהווה את היתר במשולש ישר הזווית.", math_expression: "d = 5 - 0 = 5" },
            { verbal_explanation: "נפעיל את משפט פיתגורס. ריבוע הניצב המייצג את המשיק, ועוד ריבוע הרדיוס, שווים לריבוע היתר.", math_expression: "PT<sup>2</sup> + 3<sup>2</sup> = 5<sup>2</sup>" },
            { verbal_explanation: "נחשב ונחלץ את הניצב החסר (שלשה פיתגורית).", math_expression: "PT<sup>2</sup> + 9 = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; PT<sup>2</sup> = 16" },
            { verbal_explanation: "נוציא שורש לקבלת האורך.", math_expression: "PT = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "שני מעגלים משיקים זה לזה בנקודה (4, 0). מעגל אחד מיוצג על ידי x<sup>2</sup> + y<sup>2</sup> = 16 והשני על ידי (x - 10)<sup>2</sup> + y<sup>2</sup> = 36.<br>מהי משוואת המשיק המשותף לשניהם העובר בנקודת ההשקה?",
        options: [
            "x = 4",
            "y = 0",
            "y = x - 4",
            "x = 10"
        ],
        hint: "מרכזי המעגלים נמצאים על ציר ה-x (קו אופקי). המשיק בנקודת ההשקה ביניהם תמיד מאונך לרדיוס, ולכן במקרה זה הוא חייב להיות קו אנכי לחלוטין (ערך x קבוע).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכזי שני המעגלים נמצאים על ציר ה-x האופקי (שיעורי הוואי שלהם שווים אפס).", math_expression: "y_M = 0" },
            { verbal_explanation: "נקודת ההשקה מונחת על אותו ציר אופקי המחבר את המרכזים. המשיק אליה חייב להיות מאונך לציר, לכן הוא קו אנכי שהמשוואה שלו מכילה רק קבוע איקס.", math_expression: "x = const" },
            { verbal_explanation: "הערך של אותו קבוע הוא בהכרח שיעור ה-x של הנקודה עצמה שניתנה לנו בשאלה.", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },

    // =====================================================================
    // תת-נושא 9: מקומות גיאומטריים בסיסיים (10 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות במישור, שמרחקן מראשית הצירים קבוע ושווה בדיוק ל-5?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 25",
            "y = 5",
            "x<sup>2</sup> + y<sup>2</sup> = 5",
            "x + y = 25"
        ],
        hint: "הצורה המוגדרת כאוסף הנקודות הנמצאות במרחק שווה (רדיוס) מנקודה קבועה (מרכז) היא ההגדרה הגיאומטרית הקלאסית למעגל.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסמן נקודה כללית על המקום הגיאומטרי שאותו אנו חוקרים.", math_expression: "P(x, y)" },
            { verbal_explanation: "נכתוב את תנאי המרחק מהנקודה לראשית הצירים תוך שימוש בנוסחת המרחק, ונשווה לנתון הגיאומטרי בשאלה.", math_expression: "&radic;((x - 0)<sup>2</sup> + (y - 0)<sup>2</sup>) = 5" },
            { verbal_explanation: "נפשט את המשתנים ונעלה את שני האגפים בריבוע לקבלת המשוואה המלאה והמוכרת של המקום הגיאומטרי (מעגל קנוני).", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 25" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות במישור, שהמרחק שלהן מהנקודה (0, 0) שווה בדיוק למרחק שלהן מהנקודה (6, 8)?",
        options: [
            "y = -0.75x + 6.25",
            "y = 1.33x",
            "x<sup>2</sup> + y<sup>2</sup> = 100",
            "y = 0.75x + 6.25"
        ],
        hint: "אוסף הנקודות הממוקמות במרחק שווה משתי נקודות יוצר תמיד את 'האנך האמצעי' של הקטע המחבר אותן. מצאו את נקודת האמצע שלו ואת שיפועו ההופכי-נגדי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המקום הגיאומטרי הוא האנך האמצעי לקטע. נחשב את נקודת האמצע של הקטע המדובר.", math_expression: "x_M = (0 + 6) / 2 = 3 &nbsp;,&nbsp; y_M = (0 + 8) / 2 = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; M(3, 4)" },
            { verbal_explanation: "נמצא את השיפוע המקורי של הקטע בין הנקודות.", math_expression: "m = (8 - 0) / (6 - 0) = 8 / 6 = 4 / 3" },
            { verbal_explanation: "נמצא את השיפוע של האנך האמצעי (הופכי ונגדי).", math_expression: "m_{\perp} = -3 / 4 = -0.75" },
            { verbal_explanation: "נרכיב משוואת ישר בעזרת השיפוע החדש ונקודת האמצע שמצאנו קודם.", math_expression: "y - 4 = -0.75(x - 3)" },
            { verbal_explanation: "נפתח סוגריים ונסדר למשוואה הסופית.", math_expression: "y = -0.75x + 2.25 + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -0.75x + 6.25" }
        ],
        final_answer: "y = -0.75x + 6.25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות ברביע הראשון, שהמרחק שלהן מציר ה-x שווה בדיוק למרחק שלהן מציר ה-y?",
        options: [
            "y = x",
            "y = -x",
            "x<sup>2</sup> + y<sup>2</sup> = 1",
            "y = 2x"
        ],
        hint: "המרחק של נקודה מציר ה-x הוא שיעור ה-y שלה, והמרחק שלה מציר ה-y הוא שיעור ה-x. השוו ביניהם בערך מוחלט.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרחק של נקודה כללית מציר ה-x נמדד לפי הגובה שלה, כלומר הערך המוחלט של שיעור ה-y.", math_expression: "d_x = |y|" },
            { verbal_explanation: "מרחק של נקודה מציר ה-y נמדד לפי הרוחב שלה, קרי הערך המוחלט של שיעור ה-x.", math_expression: "d_y = |x|" },
            { verbal_explanation: "נדרוש שהמרחקים יהיו שווים.", math_expression: "|y| = |x|" },
            { verbal_explanation: "ברביע הראשון שני המשתנים חיוביים ולכן ניתן להשמיט את הערך המוחלט ולקבל את משוואת חוצה הזווית של הרביע.", math_expression: "y = x" }
        ],
        final_answer: "y = x"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את משוואת המקום הגיאומטרי של כל הנקודות שהמרחק שלהן מהנקודה (4, 0) גדול פי 2 מהמרחק שלהן מהנקודה (1, 0).",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 4",
            "x = 2",
            "y = x<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = 16"
        ],
        hint: "בנו משוואה אלגברית המבטאת את התנאי: הדיסטנס לנקודה הראשונה שווה לפעמיים הדיסטנס לשנייה. העלו הכל בריבוע (זכרו להעלות גם את 2 ל-4) ופשטו את המשוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסמן נקודה כללית כנעלמים. נרכיב משוואת דיסטנס כפי שמתואר (דיסטנס לראשונה שווה לפעמיים הדיסטנס לשנייה).", math_expression: "&radic;((x - 4)<sup>2</sup> + y<sup>2</sup>) = 2&radic;((x - 1)<sup>2</sup> + y<sup>2</sup>)" },
            { verbal_explanation: "נעלה את שני אגפי המשוואה בריבוע כדי לבטל את השורשים, ונזכור להעלות גם את המקדם מחוץ לשורש.", math_expression: "(x - 4)<sup>2</sup> + y<sup>2</sup> = 4((x - 1)<sup>2</sup> + y<sup>2</sup>)" },
            { verbal_explanation: "נפתח את החזקות הפנימיות בעזרת נוסחת כפל מקוצר של הפרש.", math_expression: "x<sup>2</sup> - 8x + 16 + y<sup>2</sup> = 4(x<sup>2</sup> - 2x + 1 + y<sup>2</sup>)" },
            { verbal_explanation: "נפתח את הסוגריים באגף הימני.", math_expression: "x<sup>2</sup> - 8x + 16 + y<sup>2</sup> = 4x<sup>2</sup> - 8x + 4 + 4y<sup>2</sup>" },
            { verbal_explanation: "נכנס איברים למקום אחד משותף.", math_expression: "3x<sup>2</sup> + 3y<sup>2</sup> = 12" },
            { verbal_explanation: "נחלק בשלוש כדי לקבל את תבנית המעגל הנקייה.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 4" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "משולש בנוי כך שקודקודו התחתון נמצא בראשית הצירים (0,0), וקודקודו הימני מונח קבוע בנקודה (6, 0).<br>הקודקוד השלישי נע במישור כך ששטח המשולש נשאר תמיד שווה ל-12.<br>מהי משוואת המקום הגיאומטרי שעליו נע הקודקוד השלישי (בהנחה ש- y &gt; 0)?",
        options: [
            "y = 4",
            "x = 4",
            "x<sup>2</sup> + y<sup>2</sup> = 16",
            "y = x"
        ],
        hint: "הבסיס של המשולש מונח על ציר ה-x, ואורכו הקבוע הוא 6. הגובה למשולש הוא פשוט ערך ה-y של הקודקוד השלישי. בנו משוואת שטח והשוו ל-12.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בסיס המשולש מונח על ציר ה-x ואורכו הוא המרחק מראשית הצירים אל קצה הבסיס.", math_expression: "b = 6" },
            { verbal_explanation: "הגובה שיורד מהקודקוד השלישי לבסיס תלוי אך ורק בשיעור ה-y שלו.", math_expression: "h = y" },
            { verbal_explanation: "נרכיב משוואה עבור שטח המשולש ונשווה אותה לשטח הקבוע הנתון לנו.", math_expression: "(6 &times; y) / 2 = 12" },
            { verbal_explanation: "נפשט את השבר בצד השמאלי.", math_expression: "3y = 12" },
            { verbal_explanation: "נחלק בשלוש למציאת משוואת המקום הגיאומטרי (ישר אופקי קבוע).", math_expression: "y = 4" }
        ],
        final_answer: "y = 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את משוואת המקום הגיאומטרי של כל הנקודות, שהמרחק שלהן מהישר y = 8 שווה בדיוק למרחק שלהן מהישר y = 2.",
        options: [
            "y = 5",
            "x = 5",
            "x<sup>2</sup> + y<sup>2</sup> = 9",
            "y = 3"
        ],
        hint: "האוסף של כל הנקודות הנמצאות במרחק שווה משני ישרים מקבילים הוא בעצם 'קו אמצע' המקביל אליהם, ועובר בדיוק בממוצע שלהם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרכיב שוויון בין נוסחת המרחק של הנקודה מהישר הראשון, למרחקה מהישר השני.", math_expression: "|y - 8| = |y - 2|" },
            { verbal_explanation: "שני ערכים מוחלטים שווים כאשר הם שווים מבפנים או נגדיים. כיוון שהשוואה ישירה תוביל לפסוק שקר, נבחר באופציה של הנגדי.", math_expression: "y - 8 = -(y - 2)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "y - 8 = -y + 2" },
            { verbal_explanation: "נעביר את המשתנים שמאלה ואת המספרים ימינה.", math_expression: "2y = 10" },
            { verbal_explanation: "נחלק בשתיים לקבלת הישר המרכזי.", math_expression: "y = 5" }
        ],
        final_answer: "y = 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מעגל בנוי כך שהוא תמיד עובר דרך שתי נקודות קבועות במישור: (0,0) ו- (0,6).<br>מרכז המעגל יכול לזוז. מהי משוואת המקום הגיאומטרי שעליו יכול לנוע מרכז המעגל?",
        options: [
            "y = 3",
            "x = 3",
            "x<sup>2</sup> + y<sup>2</sup> = 9",
            "y = x"
        ],
        hint: "מרכזו של כל מעגל נמצא במרחק שווה (רדיוס) מכל הנקודות שעל היקפו. לכן, הבעיה דורשת למצוא את המקום הגיאומטרי שמרחקו שווה משתי הנקודות הקבועות (האנך האמצעי שלהן).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרכז מונח על האנך האמצעי של הקטע המחבר את הנקודות הנתונות. נחשב את נקודת האמצע על ציר ה-y.", math_expression: "y_M = (0 + 6) / 2 = 3" },
            { verbal_explanation: "שיעור ה-x של האמצע הוא אפס.", math_expression: "x_M = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (0, 3)" },
            { verbal_explanation: "המיתר שנוצר בין הנקודות הוא אנכי לחלוטין. לכן, האנך למיתר זה יהיה ישר אופקי לחלוטין העובר בגובה האמצע.", math_expression: "y = 3" }
        ],
        final_answer: "y = 3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "נקודה P נעה במישור הקרטזי. סכום ריבועי המרחקים שלה מהנקודות (2, 0) ו- (-2, 0) הוא תמיד 20.<br>מהי משוואת המקום הגיאומטרי של תנועת הנקודה P?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 6",
            "y = x",
            "x<sup>2</sup> + y<sup>2</sup> = 10",
            "y = 2x<sup>2</sup>"
        ],
        hint: "בנו משוואה: ריבוע הדיסטנס מהנקודה הראשונה, פלוס ריבוע הדיסטנס מהנקודה השנייה, שווים ל-20. פשטו וצמצמו איברים נגדיים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרשום את ריבוע המרחק מהנקודה הימנית (אין צורך בשורש כי המרחק מועלה בריבוע מראש).", math_expression: "D_A<sup>2</sup> = (x - 2)<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נרשום את ריבוע המרחק מהנקודה השמאלית.", math_expression: "D_B<sup>2</sup> = (x + 2)<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נחבר את שניהם למשוואה שערכה הכללי עשרים.", math_expression: "(x - 2)<sup>2</sup> + y<sup>2</sup> + (x + 2)<sup>2</sup> + y<sup>2</sup> = 20" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "x<sup>2</sup> - 4x + 4 + y<sup>2</sup> + x<sup>2</sup> + 4x + 4 + y<sup>2</sup> = 20" },
            { verbal_explanation: "האיברים שמכילים ארבע איקס מתקזזים. נחבר את השאר.", math_expression: "2x<sup>2</sup> + 2y<sup>2</sup> + 8 = 20" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "2x<sup>2</sup> + 2y<sup>2</sup> = 12" },
            { verbal_explanation: "נחלק בשתיים לקבלת מעגל קנוני נקי.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 6" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "נתון המעגל הבא:<br>x<sup>2</sup> + y<sup>2</sup> = 36<br>מעבירים רדיוסים ממרכז המעגל לנקודות על ההיקף, ומסמנים נקודה חדשה בדיוק באמצע של כל רדיוס.<br>מהי משוואת המקום הגיאומטרי של כל הנקודות הללו (אמצעי הרדיוסים)?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 9",
            "x<sup>2</sup> + y<sup>2</sup> = 18",
            "y = x",
            "x<sup>2</sup> + y<sup>2</sup> = 3"
        ],
        hint: "נסמן את נקודת האמצע כ-(x,y). מאחר והיא נמצאת בדיוק בחצי הדרך אל המעגל הגדול, הנקודה שעל המעגל הגדול שווה ל-(2x, 2y). הציבו זאת במשוואה המקורית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת האמצע נמצאת בין הראשית לנקודת הקצה שעל המעגל. לכן, נקודת הקצה גדולה בממדיה פי שתיים מנקודת האמצע.", math_expression: "(2x, 2y)" },
            { verbal_explanation: "מכיוון שהנקודה הכפולה מונחת על המעגל המקורי, נציב אותה אל תוך המשוואה שלו.", math_expression: "(2x)<sup>2</sup> + (2y)<sup>2</sup> = 36" },
            { verbal_explanation: "נפעיל את החזקות.", math_expression: "4x<sup>2</sup> + 4y<sup>2</sup> = 36" },
            { verbal_explanation: "נחלק בארבע ונקבל את משוואת המעגל החדש והפנימי.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 9" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 9"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות שהמרחק שלהן מהישר האנכי x = -2 שווה בדיוק למרחק שלהן מהישר האנכי x = 6?",
        options: [
            "x = 2",
            "x = 4",
            "y = 2",
            "x = 8"
        ],
        hint: "בדיוק כמו עם ישרים אופקיים, האוסף של הנקודות במרחק שווה יוצר קו מרכזי אנכי העובר בממוצע שבין הישרים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את הממוצע האנכי שעובר בדיוק באמצע בין שני הישרים.", math_expression: "x = (x_1 + x_2) / 2" },
            { verbal_explanation: "נציב את משוואות הישרים הנתונים בנוסחה.", math_expression: "x = (-2 + 6) / 2" },
            { verbal_explanation: "נחשב את המונה ונחלק לקבלת המשוואה הסופית.", math_expression: "x = 4 / 2 = 2" }
        ],
        final_answer: "x = 2"
    }
];