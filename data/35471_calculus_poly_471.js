const questionsDB = [
    // =====================================================================
    // תת-נושא 1: נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש) (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "מהי פונקציית הנגזרת של הפולינום הבא?<br>f(x) = x<sup>4</sup> - 3x<sup>2</sup> + 5x - 7<br><svg viewBox='0 0 200 100' width='180' height='90' style='display:block; margin: 15px auto;'><path d='M 20,80 Q 60,-20 100,60 T 180,20' fill='none' stroke='#3b82f6' stroke-width='4' stroke-linecap='round'/><circle cx='60' cy='18' r='5' fill='#ef4444'/><circle cx='135' cy='75' r='5' fill='#10b981'/><line x1='35' y1='18' x2='85' y2='18' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/><line x1='110' y1='75' x2='160' y2='75' stroke='#10b981' stroke-width='2' stroke-dasharray='4,4'/><text x='60' y='10' font-size='10' fill='#ef4444' text-anchor='middle'>y'=0</text></svg>",
        options: [
            "f'(x) = 4x^3 - 6x + 5",
            "f'(x) = 4x^3 - 6x",
            "f'(x) = 4x^4 - 6x^2 + 5x",
            "f'(x) = x^3 - x + 5"
        ],
        hint: "השתמשו בכלל החזקה: הורידו את המעריך למטה כמקדם, והפחיתו 1 מהמעריך הישן. הנגזרת של מספר קבוע חופשי היא 0.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את האיבר הראשון: החזקה 4 יורדת ומכפילה את האיקס, והחזקה קטנה ל-3.", math_expression: "4x^3" },
            { verbal_explanation: "נגזור את האיבר השני: החזקה 2 יורדת ומכפילה את המקדם -3, והחזקה קטנה ל-1.", math_expression: "-6x" },
            { verbal_explanation: "נגזור את האיבר השלישי: הנגזרת של איקס היא 1, לכן נשאר רק המקדם.", math_expression: "5" },
            { verbal_explanation: "מספר חופשי נופל (אפס). נחבר את הכל לפונקציית נגזרת אחת.", math_expression: "f'(x) = 4x^3 - 6x + 5" }
        ],
        final_answer: "f'(x) = 4x^3 - 6x + 5"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "גזרו את הפונקציה הבאה (פונקציה הכוללת משתנה במכנה):<br>g(x) = 10 / x<sup>2</sup>",
        options: [
            "g'(x) = -20 / x^3",
            "g'(x) = 20 / x^3",
            "g'(x) = -10 / x^2",
            "g'(x) = 10x"
        ],
        hint: "לפני הגזירה, קל יותר להעלות את ה-x למונה על ידי הפיכת החזקה לשלילית: 10 כפול איקס בחזקת מינוס 2. עכשיו גזרו רגיל.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להימנע מנוסחאות מסובכות, נמיר את השבר לחזקה שלילית לפי חוקי חזקות.", math_expression: "g(x) = 10x^(-2)" },
            { verbal_explanation: "נפעיל את כלל החזקה: המעריך (מינוס 2) יורד ומוכפל במקדם.", math_expression: "-2 &times; 10 = -20" },
            { verbal_explanation: "נחסר אחד מהמעריך הישן כדי לקבל את המעריך החדש (מינוס 3).", math_expression: "-20x^(-3)" },
            { verbal_explanation: "נחזיר את המשתנה למכנה כדי לקבל חזקה חיובית כנהוג.", math_expression: "g'(x) = -20 / x^3" }
        ],
        final_answer: "g'(x) = -20 / x^3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "מצאו את ערך הנגזרת בנקודה שבה x = 2 עבור הפונקציה הבאה:<br>y = 2x<sup>3</sup> - 4x + 1",
        options: [
            "20",
            "10",
            "24",
            "16"
        ],
        hint: "קודם מצאו את פונקציית הנגזרת y'. לאחר מכן הציבו בתוכה את המספר 2 במקום x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נמצא את פונקציית הנגזרת לפי חוקי הגזירה הבסיסיים.", math_expression: "y' = 6x^2 - 4" },
            { verbal_explanation: "התבקשנו למצוא את השיפוע (הנגזרת) עבור איקס שווה 2. נציב בפונקציה.", math_expression: "y'(2) = 6(2)^2 - 4" },
            { verbal_explanation: "נחשב את החזקה ואז את הכפל.", math_expression: "6(4) - 4 = 24 - 4" },
            { verbal_explanation: "נחשב את ההפרש לקבלת הערך הסופי.", math_expression: "20" }
        ],
        final_answer: "20"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "גזרו את הפונקציה הבאה הכוללת שורש:<br>f(x) = 5&radic;x",
        options: [
            "f'(x) = 2.5 / &radic;x",
            "f'(x) = 5 / &radic;x",
            "f'(x) = 1 / (2&radic;x)",
            "f'(x) = 2.5&radic;x"
        ],
        hint: "הנגזרת של שורש x היא 1 חלקי (2 כפול שורש x). המקדם 5 נשאר בכפל.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת הנגזרת הבסיסית של פונקציית שורש ריבועי.", math_expression: "(&radic;x)' = 1 / (2&radic;x)" },
            { verbal_explanation: "המקדם המספרי 5 נשאר במקומו גם לאחר הגזירה.", math_expression: "f'(x) = 5 &times; (1 / (2&radic;x))" },
            { verbal_explanation: "נכניס את המקדם למונה ונצמצם את השבר (חמש לחלק לשתיים זה שתיים וחצי).", math_expression: "f'(x) = 2.5 / &radic;x" }
        ],
        final_answer: "f'(x) = 2.5 / &radic;x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "פשטו את הפונקציה הבאה, ולאחר מכן גזרו:<br>y = (x - 3)(x + 3)",
        options: [
            "y' = 2x",
            "y' = x^2 - 9",
            "y' = 2x - 3",
            "y' = 1"
        ],
        hint: "מדובר בהפרש ריבועים. פתיחת הסוגריים תיתן y = x² - 9. עכשיו פשוט גזרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לגזור בקלות, נשתמש בנוסחת הפרש ריבועים לפתיחת הסוגריים.", math_expression: "y = x^2 - 9" },
            { verbal_explanation: "כעת יש לנו פולינום פשוט. הנגזרת של איקס בריבוע היא שני איקס.", math_expression: "2x" },
            { verbal_explanation: "הקבוע מינוס 9 נעלם (אפס). נרשום את הנגזרת.", math_expression: "y' = 2x" }
        ],
        final_answer: "y' = 2x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "מהי הנגזרת השנייה (f'') של הפונקציה הבאה?<br>f(x) = 2x<sup>4</sup> - 5x<sup>3</sup>",
        options: [
            "f''(x) = 24x^2 - 30x",
            "f''(x) = 8x^3 - 15x^2",
            "f''(x) = 24x - 30",
            "f''(x) = 48x - 30"
        ],
        hint: "נגזרת שנייה פירושה לגזור פעמיים. מצאו את הנגזרת הראשונה, ומיד גזרו אותה שוב.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנגזרת הראשונה של הפונקציה.", math_expression: "f'(x) = 8x^3 - 15x^2" },
            { verbal_explanation: "נגזור שוב את התוצאה שקיבלנו כדי למצוא את הנגזרת השנייה.", math_expression: "f''(x) = 24x^2 - 30x" }
        ],
        final_answer: "f''(x) = 24x^2 - 30x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "גזרו את הפונקציה הבאה (המכנה מספרי בלבד):<br>h(x) = (x<sup>3</sup> - 6x) / 3",
        options: [
            "h'(x) = x^2 - 2",
            "h'(x) = 3x^2 - 6",
            "h'(x) = (3x^2 - 6) / 9",
            "h'(x) = x^2 - 6"
        ],
        hint: "כאשר המכנה הוא קבוע מספרי, פשוט גזרו את המונה כרגיל והשאירו את המכנה כמו שהוא.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כיוון שהמכנה הוא מספר, נוכל להתייחס אליו כמקדם קבוע. אין צורך בכלל המנה.", math_expression: "h(x) = (1/3) &times; (x^3 - 6x)" },
            { verbal_explanation: "נגזור את תוכן הסוגריים.", math_expression: "h'(x) = (1/3) &times; (3x^2 - 6)" },
            { verbal_explanation: "נחלק כל איבר בשלוש לקבלת התוצאה הסופית.", math_expression: "h'(x) = x^2 - 2" }
        ],
        final_answer: "h'(x) = x^2 - 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "באיזו נקודה מתאפסת הנגזרת של הפונקציה הבאה (כלומר, מתי y' = 0)?<br>y = x<sup>2</sup> - 8x + 12",
        options: [
            "4",
            "8",
            "-4",
            "2"
        ],
        hint: "גזרו את הפונקציה, השוו את הנגזרת לאפס ופתרו את המשוואה הפשוטה שמתקבלת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את פונקציית הנגזרת על ידי גזירה רגילה.", math_expression: "y' = 2x - 8" },
            { verbal_explanation: "נשווה לאפס כפי שנדרש.", math_expression: "2x - 8 = 0" },
            { verbal_explanation: "נעביר את המספר לצד ימין.", math_expression: "2x = 8" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "מהו שיפוע הישר המשיק לפונקציה f(x) = 5x + 3 בכל נקודה על הגרף?",
        options: [
            "5",
            "3",
            "0",
            "5x"
        ],
        hint: "בפונקציה קווית (קו ישר), השיפוע קבוע והוא המקדם של איקס. גזירה תיתן לכם את אותו המספר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזרת היא השיפוע. נגזור את הפונקציה הקווית הנתונה.", math_expression: "f'(x) = 5" },
            { verbal_explanation: "השיפוע הוא מספר קבוע (5) שאינו תלוי באיקס.", math_expression: "5" }
        ],
        final_answer: "5"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרות בסיסיות (חזקות, מכפלה בקבוע, סכום/הפרש)",
        question: "גזרו את הפונקציה הבאה המכילה את הפרמטר a:<br>y = ax<sup>3</sup> - 2a<sup>2</sup>x",
        options: [
            "y' = 3ax^2 - 2a^2",
            "y' = 3x^2 - 2a",
            "y' = 3ax^2 - 4ax",
            "y' = ax^2 - 2a^2"
        ],
        hint: "הפרמטר a מתנהג בדיוק כמו מספר. הנגזרת של ax³ היא 3ax². הנגזרת של קבוע כפול x היא הקבוע עצמו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתייחס לאות a כאל מקדם מספרי. נגזור את האיבר הראשון (החזקה 3 יורדת).", math_expression: "3ax^2" },
            { verbal_explanation: "באיבר השני, כל מה שמופיע לפני האיקס הוא המקדם. בגזירה, האיקס נעלם.", math_expression: "-2a^2" },
            { verbal_explanation: "נחבר את האיברים לנגזרת שלמה.", math_expression: "y' = 3ax^2 - 2a^2" }
        ],
        final_answer: "y' = 3ax^2 - 2a^2"
    },

    // =====================================================================
    // תת-נושא 2: נגזרת של מכפלה ונגזרת של מנה (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "גזרו את הפונקציה הבאה לפי כלל נגזרת מכפלה (בלי לפתוח סוגריים):<br>y = (2x - 1)(x<sup>2</sup> + 3)",
        options: [
            "y' = 6x^2 - 2x + 6",
            "y' = 2x^2 + 6",
            "y' = 6x^2 - 2x",
            "y' = 4x"
        ],
        hint: "נוסחת המכפלה: נגזרת החלק הראשון כפול השני, פלוס הראשון כפול נגזרת החלק השני.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ את שני חלקי המכפלה ונגזור אותם בנפרד.", math_expression: "u = 2x - 1 => u' = 2 , v = x^2 + 3 => v' = 2x" },
            { verbal_explanation: "נציב בנוסחת נגזרת מכפלה.", math_expression: "y' = 2(x^2 + 3) + (2x - 1)(2x)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "y' = 2x^2 + 6 + 4x^2 - 2x" },
            { verbal_explanation: "נכנס איברים לקבלת התשובה הסופית.", math_expression: "y' = 6x^2 - 2x + 6" }
        ],
        final_answer: "y' = 6x^2 - 2x + 6"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מהי הנגזרת של פונקציית המנה הבאה?<br>f(x) = (3x + 1) / (x - 2)<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><path d='M 100,0 L 100,150' fill='none' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4,4'/><path d='M 0,75 L 200,75' fill='none' stroke='#94a3b8' stroke-width='2'/><path d='M 20,130 Q 90,130 95,20' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 105,130 Q 110,20 180,20' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='120' y1='0' x2='120' y2='150' stroke='#ef4444' stroke-width='2' stroke-dasharray='6,4'/><text x='130' y='140' font-size='12' fill='#ef4444' font-weight='bold'>x=2</text></svg>",
        options: [
            "f'(x) = -7 / (x - 2)^2",
            "f'(x) = 7 / (x - 2)^2",
            "f'(x) = 3 / (x - 2)^2",
            "f'(x) = -3 / (x - 2)^2"
        ],
        hint: "נוסחת מנה: גוזרים מונה, מכפילים במכנה. מחסרים את המונה כפול נגזרת המכנה. מחלקים הכל במכנה בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה מונה ומכנה ונגזור אותם.", math_expression: "u = 3x + 1 => u' = 3 , v = x - 2 => v' = 1" },
            { verbal_explanation: "נציב בנוסחת המנה (שימו לב לחיסור במונה).", math_expression: "f'(x) = [3(x - 2) - (3x + 1)(1)] / (x - 2)^2" },
            { verbal_explanation: "נפתח סוגריים במונה (המינוס משנה סימנים).", math_expression: "f'(x) = (3x - 6 - 3x - 1) / (x - 2)^2" },
            { verbal_explanation: "נכנס איברים במונה. האיקסים מתבטלים.", math_expression: "f'(x) = -7 / (x - 2)^2" }
        ],
        final_answer: "f'(x) = -7 / (x - 2)^2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "גזרו את הפונקציה המשלבת x עם שורש x:<br>y = x &times; &radic;x",
        options: [
            "y' = 1.5&radic;x",
            "y' = 1 / (2&radic;x)",
            "y' = x + 1 / (2&radic;x)",
            "y' = 2.5&radic;x"
        ],
        hint: "במקום להסתבך עם כלל מכפלה, אפשר לאחד חזקות: x בחזקת 1 כפול x בחזקת חצי נותן x בחזקת 1.5. גזרו את זה רגיל.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נאחד את החזקות (שורש שווה לחזקת חצי).", math_expression: "y = x^1 &times; x^0.5 = x^1.5" },
            { verbal_explanation: "נגזור לפי כלל החזקה (המעריך יורד ומוכפל).", math_expression: "y' = 1.5x^0.5" },
            { verbal_explanation: "נחזיר את חזקת החצי לסימון של שורש.", math_expression: "y' = 1.5&radic;x" }
        ],
        final_answer: "y' = 1.5&radic;x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מצאו את הנקודות בהן הנגזרת מתאפסת עבור פונקציית המנה הבאה:<br>y = (x<sup>2</sup> + 16) / x",
        options: [
            "x = 4 , x = -4",
            "x = 16 , x = -16",
            "x = 2 , x = -2",
            "אין נקודות כאלה"
        ],
        hint: "מכיוון שהמכנה הוא x בודד, פצלו את השבר לשניים: x פלוס 16/x. גזרו והשוו ל-0.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפצל את השבר כדי להקל על הגזירה.", math_expression: "y = (x^2 / x) + (16 / x) = x + 16x^(-1)" },
            { verbal_explanation: "נגזור כל חלק בנפרד.", math_expression: "y' = 1 - 16x^(-2) = 1 - 16 / x^2" },
            { verbal_explanation: "נשווה לאפס למציאת נקודות קיצון.", math_expression: "1 - 16 / x^2 = 0" },
            { verbal_explanation: "נעביר אגף ונכפיל במכנה.", math_expression: "1 = 16 / x^2 => x^2 = 16" },
            { verbal_explanation: "נוציא שורש לקבלת שני הפתרונות.", math_expression: "x = 4 , x = -4" }
        ],
        final_answer: "x = 4 , x = -4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מהי הנגזרת של הפונקציה הבאה בנקודה שבה x = 1?<br>f(x) = x<sup>2</sup>(x - 2)",
        options: [
            "-1",
            "0",
            "1",
            "-2"
        ],
        hint: "פתחו את הסוגריים כדי לקבל פולינום רגיל, גזרו אותו, ואז הציבו את המספר 1.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים לקבלת פולינום נוח לגזירה.", math_expression: "f(x) = x^3 - 2x^2" },
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "f'(x) = 3x^2 - 4x" },
            { verbal_explanation: "נציב את הערך הנדרש בנגזרת.", math_expression: "f'(1) = 3(1)^2 - 4(1)" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "3 - 4 = -1" }
        ],
        final_answer: "-1"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מהי הנגזרת של הפונקציה הבאה (המכילה פרמטר a במכנה)?<br>y = (x<sup>2</sup> - 5) / a",
        options: [
            "y' = 2x / a",
            "y' = 2x",
            "y' = (2ax - x^2) / a^2",
            "y' = -2x / a^2"
        ],
        hint: "המכנה כאן הוא פרמטר קבוע, ולכן אין צורך בכלל מנה. הוא משמש פשוט כמקדם מספרי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המכנה a נחשב לקבוע. נוציא אותו הצידה כמקדם.", math_expression: "y = (1/a) &times; (x^2 - 5)" },
            { verbal_explanation: "נגזור את הפולינום שבסוגריים בלבד.", math_expression: "y' = (1/a) &times; 2x" },
            { verbal_explanation: "נחזיר לצורת שבר.", math_expression: "y' = 2x / a" }
        ],
        final_answer: "y' = 2x / a"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מצאו את הנגזרת של הפונקציה:<br>g(x) = (2x + 1) / (2x - 1)",
        options: [
            "g'(x) = -4 / (2x - 1)^2",
            "g'(x) = 4 / (2x - 1)^2",
            "g'(x) = -2 / (2x - 1)^2",
            "g'(x) = 1"
        ],
        hint: "הנגזרת של המונה היא 2, והנגזרת של המכנה היא 2. הציבו בכלל המנה בזהירות עם המינוס שבאמצע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ מונה ומכנה ואת נגזרותיהם.", math_expression: "u = 2x+1 => u' = 2 , v = 2x-1 => v' = 2" },
            { verbal_explanation: "נציב בכלל המנה.", math_expression: "g'(x) = [2(2x - 1) - 2(2x + 1)] / (2x - 1)^2" },
            { verbal_explanation: "נפתח את הסוגריים במונה.", math_expression: "g'(x) = [4x - 2 - 4x - 2] / (2x - 1)^2" },
            { verbal_explanation: "נחבר את המספרים במונה לקבלת התשובה הסופית.", math_expression: "g'(x) = -4 / (2x - 1)^2" }
        ],
        final_answer: "g'(x) = -4 / (2x - 1)^2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "פונקציה המייצגת הכנסות נתונה על ידי: R(x) = x(50 - x).<br>מהי הנגזרת השולית R'(x)?",
        options: [
            "50 - 2x",
            "50 - x^2",
            "x - 50",
            "50"
        ],
        hint: "במקום להשתמש בכלל מכפלה, פתחו סוגריים וגזרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "R(x) = 50x - x^2" },
            { verbal_explanation: "נגזור איבר-איבר.", math_expression: "R'(x) = 50 - 2x" }
        ],
        final_answer: "50 - 2x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "גזרו את הפונקציה הבאה, המכילה פרמטר a במכפלה:<br>y = ax(x - 4)",
        options: [
            "y' = 2ax - 4a",
            "y' = a(x - 4)",
            "y' = ax - 4a",
            "y' = 2ax"
        ],
        hint: "הכפילו את ה-ax בכל מה שבתוך הסוגריים, ואז גזרו לפי x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים.", math_expression: "y = ax^2 - 4ax" },
            { verbal_explanation: "נגזור את האיבר הראשון (החזקה יורדת ומוכפלת).", math_expression: "2ax" },
            { verbal_explanation: "נגזור את האיבר השני (המשתנה יורד ונשאר מקדם).", math_expression: "-4a" },
            { verbal_explanation: "נחבר לתוצאה אחת.", math_expression: "y' = 2ax - 4a" }
        ],
        final_answer: "y' = 2ax - 4a"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של מכפלה ונגזרת של מנה",
        question: "מהי הנגזרת של הפונקציה הבאה (הפרמטר a ממוקם במונה)?<br>y = (ax + 2) / x",
        options: [
            "y' = -2 / x^2",
            "y' = a / x^2",
            "y' = (a - 2) / x^2",
            "y' = -2a / x^2"
        ],
        hint: "כמו מקודם, מומלץ לפצל את השבר לפני הגזירה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נפצל את השבר כדי להפריד איברים.", math_expression: "y = (ax / x) + (2 / x)" },
            { verbal_explanation: "נצמצם את השבר הראשון ונשתמש בחזקה שלילית לשני.", math_expression: "y = a + 2x^(-1)" },
            { verbal_explanation: "נגזור (הפרמטר a הופך לאפס כי הוא מספר קבוע).", math_expression: "y' = 0 - 2x^(-2)" },
            { verbal_explanation: "נחזיר למכנה.", math_expression: "y' = -2 / x^2" }
        ],
        final_answer: "y' = -2 / x^2"
    },

    // =====================================================================
    // תת-נושא 3: נגזרת של פונקציה מורכבת (כלל השרשרת) (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מהי הנגזרת של הפונקציה המורכבת הבאה?<br>y = (2x + 3)<sup>4</sup>",
        options: [
            "y' = 8(2x + 3)^3",
            "y' = 4(2x + 3)^3",
            "y' = 8(2x + 3)^4",
            "y' = 2(2x + 3)^3"
        ],
        hint: "כלל השרשרת: גוזרים 'מבחוץ' (מורידים את החזקה ומפחיתים אותה ב-1), ואז כופלים הכל בנגזרת של מה שבתוך הסוגריים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בכלל השרשרת. שלב א: הנגזרת החיצונית (החזקה 4 יורדת למטה).", math_expression: "4(2x + 3)^3" },
            { verbal_explanation: "שלב ב: הנגזרת הפנימית (של תוכן הסוגריים).", math_expression: "(2x + 3)' = 2" },
            { verbal_explanation: "נכפיל את שניהם יחד.", math_expression: "y' = 4(2x + 3)^3 &times; 2" },
            { verbal_explanation: "נכפיל את המספרים שבחוץ לתוצאה סופית.", math_expression: "y' = 8(2x + 3)^3" }
        ],
        final_answer: "y' = 8(2x + 3)^3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מהו ערך הנגזרת בנקודה x = 2 עבור הפונקציה:<br>y = (x<sup>2</sup> - 3)<sup>3</sup>",
        options: [
            "12",
            "3",
            "24",
            "9"
        ],
        hint: "גזרו את הפונקציה לפי כלל השרשרת (הנגזרת הפנימית הפעם תהיה 2x). הציבו 2 במקום המשתנה בנגזרת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור לפי כלל השרשרת (חיצוני כפול פנימי).", math_expression: "y' = 3(x^2 - 3)^2 &times; 2x" },
            { verbal_explanation: "נכפיל את האיברים שמחוץ לסוגריים.", math_expression: "y' = 6x(x^2 - 3)^2" },
            { verbal_explanation: "נציב את הערך הנתון בנגזרת.", math_expression: "y'(2) = 6(2) &times; ((2)^2 - 3)^2" },
            { verbal_explanation: "נחשב את הסוגריים.", math_expression: "y'(2) = 12 &times; (4 - 3)^2" },
            { verbal_explanation: "התוצאה (1 בריבוע זה 1).", math_expression: "12" }
        ],
        final_answer: "12"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "גזרו את פונקציית השורש המורכבת הבאה:<br>y = &radic;(x<sup>2</sup> + 5)",
        options: [
            "y' = x / &radic;(x^2 + 5)",
            "y' = 2x / &radic;(x^2 + 5)",
            "y' = 1 / (2&radic;(x^2 + 5))",
            "y' = x / (2&radic;(x^2 + 5))"
        ],
        hint: "הנגזרת של שורש היא: הנגזרת הפנימית, לחלק לפעמיים השורש.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת שורש מורכב: הנגזרת הפנימית עולה למונה, והמכנה הוא פעמיים השורש כולו.", math_expression: "y' = (x^2 + 5)' / (2&radic;(x^2 + 5))" },
            { verbal_explanation: "הנגזרת הפנימית במונה היא שני איקס.", math_expression: "y' = 2x / (2&radic;(x^2 + 5))" },
            { verbal_explanation: "נצמצם את המספר 2 במונה ובמכנה.", math_expression: "y' = x / &radic;(x^2 + 5)" }
        ],
        final_answer: "y' = x / &radic;(x^2 + 5)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "גזרו את הפונקציה (הכוללת פרמטרים):<br>y = &radic;(ax + b)",
        options: [
            "y' = a / (2&radic;(ax + b))",
            "y' = 1 / (2&radic;(ax + b))",
            "y' = a / &radic;(ax + b)",
            "y' = 2a / &radic;(ax + b)"
        ],
        hint: "אותה נוסחה. הנגזרת הפנימית של הביטוי הלינארי היא פשוט המקדם שלו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנוסחה אומרת: נגזרת פנימית לחלק לפעמיים השורש.", math_expression: "y' = Inner' / (2 &times; Root)" },
            { verbal_explanation: "הנגזרת הפנימית (גוזרים לפי x).", math_expression: "(ax + b)' = a" },
            { verbal_explanation: "נציב את הכל במשוואה אחת.", math_expression: "y' = a / (2&radic;(ax + b))" }
        ],
        final_answer: "y' = a / (2&radic;(ax + b))"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מהי הנגזרת של הפונקציה הבאה?<br>y = 1 / (3x - 1)<sup>2</sup>",
        options: [
            "y' = -6 / (3x - 1)^3",
            "y' = 6 / (3x - 1)^3",
            "y' = -2 / (3x - 1)^3",
            "y' = -6 / (3x - 1)^2"
        ],
        hint: "המירו את המכנה לחזקה שלילית ואז הפעילו את כלל השרשרת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעלה את המכנה למונה ונהפוך לחזקה שלילית.", math_expression: "y = (3x - 1)^(-2)" },
            { verbal_explanation: "נגזור לפי כלל השרשרת: המעריך יורד, ומוכפל בנגזרת הפנימית.", math_expression: "y' = -2(3x - 1)^(-3) &times; 3" },
            { verbal_explanation: "נכפיל את המקדמים.", math_expression: "y' = -6(3x - 1)^(-3)" },
            { verbal_explanation: "נחזיר למכנה לתצוגה נכונה.", math_expression: "y' = -6 / (3x - 1)^3" }
        ],
        final_answer: "y' = -6 / (3x - 1)^3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "עבור איזו נקודה הנגזרת מתאפסת (נקודת קיצון)?<br>y = (x - 4)<sup>2</sup>",
        options: [
            "x = 4",
            "x = -4",
            "x = 2",
            "אין נקודה כזו"
        ],
        hint: "גזרו לפי כלל השרשרת והשוו את מה שקיבלתם ל-0.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור (הנגזרת הפנימית שווה לאחת).", math_expression: "y' = 2(x - 4)^1 &times; 1 = 2x - 8" },
            { verbal_explanation: "נשווה לאפס למציאת הקיצון.", math_expression: "2x - 8 = 0" },
            { verbal_explanation: "נעביר אגף.", math_expression: "2x = 8" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x = 4" }
        ],
        final_answer: "x = 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "פונקציה המשלבת מכפלה ושרשרת. גזרו בזהירות:<br>y = x(x + 1)<sup>3</sup>",
        options: [
            "y' = (x + 1)^2 * (4x + 1)",
            "y' = 3x(x + 1)^2",
            "y' = (x + 1)^3 + 3x",
            "y' = 4x(x + 1)^2"
        ],
        hint: "היעזרו בכלל המכפלה, כאשר באחד החלקים תשתמשו בכלל השרשרת. לבסוף, הוציאו גורם משותף (x+1) בריבוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הפונקציות בתוך המכפלה ונגזור אותן.", math_expression: "u = x => u' = 1 , v = (x+1)^3 => v' = 3(x+1)^2" },
            { verbal_explanation: "נציב בכלל המכפלה.", math_expression: "y' = 1(x+1)^3 + x &times; 3(x+1)^2" },
            { verbal_explanation: "נוציא גורם משותף (הסוגריים בחזקה הקטנה יותר).", math_expression: "y' = (x+1)^2 &times; [(x+1) + 3x]" },
            { verbal_explanation: "נכנס איברים בתוך הסוגריים.", math_expression: "y' = (x+1)^2 &times; (4x + 1)" }
        ],
        final_answer: "y' = (x + 1)^2 * (4x + 1)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מהי הנגזרת השנייה (y'') של הפונקציה הבאה?<br>y = (2x - 1)<sup>3</sup>",
        options: [
            "y'' = 24(2x - 1)",
            "y'' = 12(2x - 1)",
            "y'' = 6(2x - 1)^2",
            "y'' = 24x - 12"
        ],
        hint: "גזרו פעמיים לפי כלל השרשרת.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנגזרת הראשונה (נגזרת פנימית היא 2).", math_expression: "y' = 3(2x - 1)^2 &times; 2 = 6(2x - 1)^2" },
            { verbal_explanation: "נגזור שוב לקבלת הנגזרת השנייה.", math_expression: "y'' = 12(2x - 1)^1 &times; 2" },
            { verbal_explanation: "נכפיל מקדמים.", math_expression: "y'' = 24(2x - 1)" }
        ],
        final_answer: "y'' = 24(2x - 1)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מצאו את הנגזרת של פולינום בחזקה:<br>y = (x<sup>2</sup> - 4x)<sup>2</sup>",
        options: [
            "y' = 4(x^2 - 4x)(x - 2)",
            "y' = 2(x^2 - 4x)",
            "y' = 2(2x - 4)",
            "y' = (2x - 4)(x^2 - 4x)^2"
        ],
        hint: "גזרו: פעמיים הפונקציה עצמה, כפול הנגזרת הפנימית. ניתן להוציא גורם משותף '2' מתוך הנגזרת הפנימית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור לפי כלל השרשרת.", math_expression: "y' = 2(x^2 - 4x)^1 &times; (2x - 4)" },
            { verbal_explanation: "נוציא גורם משותף 2 מתוך הסוגריים של הנגזרת הפנימית.", math_expression: "(2x - 4) = 2(x - 2)" },
            { verbal_explanation: "נציב חזרה בנגזרת ונכפיל את המקדמים שבחוץ.", math_expression: "y' = 2(x^2 - 4x) &times; 2(x - 2)" },
            { verbal_explanation: "התוצאה הסופית והנקייה.", math_expression: "y' = 4(x^2 - 4x)(x - 2)" }
        ],
        final_answer: "y' = 4(x^2 - 4x)(x - 2)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נגזרת של פונקציה מורכבת (כלל השרשרת)",
        question: "מהו ערך הנגזרת בנקודה x = 2 עבור הפונקציה?<br>y = &radic;(4x + 1)",
        options: [
            "2 / 3",
            "4 / 3",
            "1 / 6",
            "2"
        ],
        hint: "גזרו והציבו 2 במקום איקס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את פונקציית השורש.", math_expression: "y' = 4 / (2&radic;(4x + 1))" },
            { verbal_explanation: "נצמצם את השבר (4 לחלק ל-2).", math_expression: "y' = 2 / &radic;(4x + 1)" },
            { verbal_explanation: "נציב את הערך הנתון בתוך פונקציית הנגזרת.", math_expression: "y'(2) = 2 / &radic;(4(2) + 1)" },
            { verbal_explanation: "נחשב את מה שבתוך השורש.", math_expression: "y'(2) = 2 / &radic;9" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "2 / 3" }
        ],
        final_answer: "2 / 3"
    },
    // =====================================================================
    // תת-נושא 4: משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים) (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את משוואת המשיק לגרף הפונקציה f(x) = x<sup>2</sup> - 4x + 5 בנקודה שבה x = 3.<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><path d='M 40,20 Q 100,150 160,20' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='80' y1='100' x2='180' y2='20' stroke='#ef4444' stroke-width='2'/><circle cx='142' cy='50' r='5' fill='#10b981'/><text x='140' y='70' font-size='12' font-weight='bold'>x=3</text></svg>",
        options: [
            "y = 2x - 4",
            "y = 2x + 2",
            "y = 4x - 5",
            "y = x - 1"
        ],
        hint: "כדי למצוא משוואת ישר צריכים שיפוע ונקודה. הציבו x=3 בפונקציה למציאת ערך ה-y של הנקודה. גזרו את הפונקציה והציבו x=3 בנגזרת למציאת השיפוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את ערך האיקס בפונקציה המקורית כדי למצוא את שיעור ה-y של נקודת ההשקה.", math_expression: "f(3) = 3^2 - 4(3) + 5 = 9 - 12 + 5" },
            { verbal_explanation: "נחשב את ערך הנקודה השלמה.", math_expression: "y = 2 => (3, 2)" },
            { verbal_explanation: "נגזור את הפונקציה כדי למצוא את פונקציית השיפוע.", math_expression: "f'(x) = 2x - 4" },
            { verbal_explanation: "נציב את האיקס בנגזרת למציאת השיפוע המדויק בנקודה זו.", math_expression: "m = 2(3) - 4 = 6 - 4 = 2" },
            { verbal_explanation: "נרכיב את משוואת הישר לפי שיפוע ונקודה.", math_expression: "y - 2 = 2(x - 3)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר ימינה לקבלת המשוואה הסופית.", math_expression: "y = 2x - 6 + 2 => y = 2x - 4" }
        ],
        final_answer: "y = 2x - 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את משוואת המשיק לגרף הפונקציה y = x<sup>3</sup> - 2x + 4 בנקודת החיתוך שלה עם ציר ה-y.",
        options: [
            "y = -2x + 4",
            "y = 2x + 4",
            "y = 3x - 2",
            "y = -2x - 4"
        ],
        hint: "חיתוך עם ציר ה-y אומר ש-x שווה לאפס. הציבו x=0 בפונקציה כדי למצוא את הנקודה, ובנגזרת כדי למצוא את השיפוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת החיתוך עם ציר ה-y מתקבלת כאשר מציבים אפס במקום איקס.", math_expression: "y(0) = 0^3 - 2(0) + 4 = 4 => (0, 4)" },
            { verbal_explanation: "נגזור את הפונקציה למציאת השיפוע.", math_expression: "y' = 3x^2 - 2" },
            { verbal_explanation: "נציב את ערך האיקס של הנקודה בתוך הנגזרת.", math_expression: "m = 3(0)^2 - 2 = -2" },
            { verbal_explanation: "נבנה את משוואת הישר המשיק.", math_expression: "y - 4 = -2(x - 0)" },
            { verbal_explanation: "נסדר את המשוואה לתוצאה הסופית.", math_expression: "y = -2x + 4" }
        ],
        final_answer: "y = -2x + 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "נתונה הפונקציה f(x) = x<sup>2</sup> + 3x. מצאו את הנקודה על גרף הפונקציה שבה המשיק מקביל לישר y = 5x - 2.",
        options: [
            "(1, 4)",
            "(2, 10)",
            "(-1, -2)",
            "(0, 0)"
        ],
        hint: "ישרים מקבילים הם בעלי שיפוע זהה. שיפוע הישר הנתון הוא 5. לכן, גזרו את הפונקציה, השוו את הנגזרת ל-5, וגלו את איקס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הישר המשיק מקביל לישר ששיפועו הוא חמש. לכן שיפוע המשיק הוא חמש.", math_expression: "m = 5" },
            { verbal_explanation: "נגזור את הפונקציה שלנו.", math_expression: "f'(x) = 2x + 3" },
            { verbal_explanation: "נשווה את הנגזרת לשיפוע הידוע לנו.", math_expression: "2x + 3 = 5" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "2x = 2" },
            { verbal_explanation: "נחלק בשתיים למציאת שיעור האיקס של הנקודה.", math_expression: "x = 1" },
            { verbal_explanation: "נציב את האיקס בחזרה בפונקציה המקורית כדי למצוא את שיעור ה-y השלם של הנקודה.", math_expression: "f(1) = 1^2 + 3(1) = 4 => (1, 4)" }
        ],
        final_answer: "(1, 4)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "באילו נקודות (ערכי x) המשיק לגרף הפונקציה y = x<sup>3</sup> - 3x<sup>2</sup> + 1 הוא <b>ישר אופקי</b> (מקביל לציר ה-x)?",
        options: [
            "x = 0 , x = 2",
            "x = 3 , x = -1",
            "x = 1 , x = -1",
            "אין נקודות כאלה"
        ],
        hint: "ישר אופקי (המקביל לציר ה-x) הוא בעל שיפוע 0. כלומר, עליכם לגזור את הפונקציה, להשוות לאפס, ולפתור.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שיפוע של ישר אופקי שווה תמיד לאפס. לכן נשווה את הנגזרת לאפס.", math_expression: "m = 0" },
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "y' = 3x^2 - 6x" },
            { verbal_explanation: "נשווה לאפס את פונקציית השיפוע.", math_expression: "3x^2 - 6x = 0" },
            { verbal_explanation: "נוציא גורם משותף כדי לפתור את המשוואה הריבועית בקלות.", math_expression: "3x(x - 2) = 0" },
            { verbal_explanation: "נקבל שני פתרונות המאפסים את המשוואה.", math_expression: "x = 0 , x = 2" }
        ],
        final_answer: "x = 0 , x = 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את משוואת המשיק לגרף הפונקציה y = (x - 2)<sup>3</sup> בנקודה שבה x = 3.",
        options: [
            "y = 3x - 8",
            "y = 3x - 1",
            "y = x - 2",
            "y = 2x - 3"
        ],
        hint: "הציבו את הנקודה למציאת ה-y. לאחר מכן, גזרו את הפונקציה לפי כלל השרשרת, הציבו בנגזרת את x=3 כדי למצוא שיפוע, והרכיבו משוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את האיקס בפונקציה המקורית כדי לקבל את ערך ה-y של הנקודה.", math_expression: "y(3) = (3 - 2)^3 = 1^3 = 1 => (3, 1)" },
            { verbal_explanation: "נגזור את הפונקציה לפי כלל השרשרת (הנגזרת הפנימית היא 1 לכן אינה משפיעה).", math_expression: "y' = 3(x - 2)^2" },
            { verbal_explanation: "נציב את האיקס בנגזרת לקבלת השיפוע.", math_expression: "m = 3(3 - 2)^2 = 3(1)^2 = 3" },
            { verbal_explanation: "נבנה משוואת ישר עם הנקודה והשיפוע שמצאנו.", math_expression: "y - 1 = 3(x - 3)" },
            { verbal_explanation: "נפתח סוגריים ונעביר אגף.", math_expression: "y = 3x - 9 + 1 => y = 3x - 8" }
        ],
        final_answer: "y = 3x - 8"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "נתונה הפונקציה y = x<sup>2</sup> + 4. מעבירים משיק לפונקציה בנקודה x = 2. האם המשיק הזה עובר גם דרך ראשית הצירים (0,0)?",
        options: [
            "כן",
            "לא",
            "עובר רק דרך ציר ה-x",
            "חסרים נתונים"
        ],
        hint: "מצאו קודם את משוואת המשיק המלאה (נקודה, שיפוע, בניית משוואה). לאחר מכן, בידקו האם הנקודה (0,0) מקיימת את המשוואה שיצרתם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הערך בפונקציה למציאת הנקודה המלאה.", math_expression: "y(2) = 2^2 + 4 = 4 + 4 = 8 => (2, 8)" },
            { verbal_explanation: "נגזור למציאת פונקציית השיפוע.", math_expression: "y' = 2x" },
            { verbal_explanation: "נחשב את השיפוע הספציפי בנקודה.", math_expression: "m = 2(2) = 4" },
            { verbal_explanation: "נבנה את משוואת הישר.", math_expression: "y - 8 = 4(x - 2)" },
            { verbal_explanation: "נסדר את המשוואה.", math_expression: "y = 4x - 8 + 8 => y = 4x" },
            { verbal_explanation: "ישר שמשוואתו אינה מכילה מספר חופשי (כלומר רק y=mx) תמיד חותך בדיוק בראשית הצירים (אפס, אפס).", math_expression: "y(0) = 4(0) = 0" }
        ],
        final_answer: "כן"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את שיעור ה-y של הנקודה בה המשיק לפונקציה f(x) = 2x<sup>2</sup> - 8x הוא בעל שיפוע שווה לאפס.",
        options: [
            "-8",
            "2",
            "0",
            "-16"
        ],
        hint: "גזרו את הפונקציה והשוו את הנגזרת לאפס. את ה-x שתקבלו, חזרו והציבו בפונקציה המקורית כדי למצוא את ה-y.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "f'(x) = 4x - 8" },
            { verbal_explanation: "נשווה את השיפוע (הנגזרת) לאפס כפי שהתבקשנו.", math_expression: "4x - 8 = 0" },
            { verbal_explanation: "נמצא את ערכו של איקס.", math_expression: "4x = 8 => x = 2" },
            { verbal_explanation: "נציב את האיקס בחזרה בפונקציה המקורית כדי למצוא את ערך הגובה בנקודה.", math_expression: "f(2) = 2(2)^2 - 8(2) = 2(4) - 16" },
            { verbal_explanation: "נחשב את החיסור לקבלת ה-y המבוקש.", math_expression: "8 - 16 = -8" }
        ],
        final_answer: "-8"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "לפונקציה y = ax<sup>2</sup> + x יש משיק בנקודה שבה x = 1. ידוע ששיפוע המשיק הזה שווה ל-5. מהו ערכו של הפרמטר a?",
        options: [
            "2",
            "4",
            "5",
            "1"
        ],
        hint: "הפרמטר נשאר כחלק מהנגזרת. גזרו (עם ה-a), הציבו בנגזרת את המספר 1, והשוו הכל ל-5.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה כאשר הפרמטר מתנהג כמקדם קבוע.", math_expression: "y' = 2ax + 1" },
            { verbal_explanation: "נציב את נתוני נקודת ההשקה: ידוע לנו שהאיקס הוא 1 והשיפוע הוא 5.", math_expression: "2a(1) + 1 = 5" },
            { verbal_explanation: "נחסר אחד משני האגפים.", math_expression: "2a = 4" },
            { verbal_explanation: "נחלק בשתיים למציאת הפרמטר המבוקש.", math_expression: "a = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את משוואת המשיק לפונקציה הרציונלית (עם מכנה קבוע) y = (x<sup>3</sup> - 3x<sup>2</sup>) / 3 בנקודה x = 1.",
        options: [
            "y = -x + 1/3",
            "y = x - 5/3",
            "y = -x - 1/3",
            "y = 2x - 1"
        ],
        hint: "הציבו קודם למציאת ה-y. גזרו את המונה בלבד והשאירו את המכנה (3) כפי שהוא. הציבו x=1 בנגזרת למציאת השיפוע.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הערך למציאת שיעור ה-y. אחת בשלישית זה אחת.", math_expression: "y(1) = (1^3 - 3(1)^2) / 3 = (1 - 3) / 3 = -2/3" },
            { verbal_explanation: "נגזור את הפונקציה (המכנה לא גורם לכלל מנה, הוא פשוט מקדם).", math_expression: "y' = (3x^2 - 6x) / 3" },
            { verbal_explanation: "נצמצם את הנגזרת לחלוקה נוחה.", math_expression: "y' = x^2 - 2x" },
            { verbal_explanation: "נציב בנגזרת כדי למצוא שיפוע.", math_expression: "m = 1^2 - 2(1) = 1 - 2 = -1" },
            { verbal_explanation: "נבנה את משוואת המשיק עם הנקודה והשיפוע.", math_expression: "y - (-2/3) = -1(x - 1)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר ימינה.", math_expression: "y + 2/3 = -x + 1 => y = -x + 1 - 2/3 => y = -x + 1/3" }
        ],
        final_answer: "y = -x + 1/3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "משיק לפונקציה (מציאת משוואת משיק, משיקים מקבילים)",
        question: "מצאו את משוואת הישר המשיק לפונקציית השורש y = 5&radic;x בנקודה שבה x = 4.",
        options: [
            "y = 1.25x + 5",
            "y = 2.5x",
            "y = 1.25x - 5",
            "y = x + 6"
        ],
        hint: "הציבו את הערך (4) בפונקציה למציאת ה-y. הנגזרת היא 5 מחולק ב-(2 כפול שורש x). הציבו 4 בנגזרת למציאת השיפוע והרכיבו משוואה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את ה-y של נקודת ההשקה. שורש מארבע הוא שתיים.", math_expression: "y(4) = 5&radic;4 = 5 * 2 = 10 => (4, 10)" },
            { verbal_explanation: "נגזור את פונקציית השורש.", math_expression: "y' = 5 / (2&radic;x)" },
            { verbal_explanation: "נציב את הערך לקבלת השיפוע בנקודה.", math_expression: "m = 5 / (2&radic;4) = 5 / (2 * 2) = 5 / 4 = 1.25" },
            { verbal_explanation: "נרכיב משוואת ישר עם הנקודה והשיפוע שמצאנו.", math_expression: "y - 10 = 1.25(x - 4)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר כדי לסדר משוואה.", math_expression: "y = 1.25x - 5 + 10 => y = 1.25x + 5" }
        ],
        final_answer: "y = 1.25x + 5"
    },

    // =====================================================================
    // תת-נושא 5: חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים) (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מהו תחום ההגדרה של הפונקציה הפולינומית f(x) = 4x<sup>5</sup> - 3x<sup>2</sup> + 7?",
        options: [
            "כל x",
            "x &ge; 0",
            "x &ne; 0",
            "x &gt; 0"
        ],
        hint: "פונקציות פולינומיות (ללא שברים עם x במכנה וללא שורשים מזוגיים) מוגדרות תמיד עבור כל המספרים הממשיים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הפונקציה אינה מכילה חלוקה באפס.", math_expression: "No Division" },
            { verbal_explanation: "הפונקציה אינה מכילה שורש למספר שלילי.", math_expression: "No Square Roots" },
            { verbal_explanation: "לכן, פונקציית פולינום רגילה מוגדרת ורציפה תמיד עבור כל ערך מספרי.", math_expression: "All x" }
        ],
        final_answer: "כל x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מהי נקודת החיתוך של הפונקציה f(x) = x<sup>3</sup> - 5x<sup>2</sup> + 6x - 8 עם <b>ציר ה-y</b>?",
        options: [
            "(0, -8)",
            "(0, 8)",
            "(-8, 0)",
            "(0, 0)"
        ],
        hint: "חיתוך עם ציר ה-y מתקבל תמיד כאשר מציבים x=0 בתוך הפונקציה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "חיתוך עם הציר האנכי משמעו שהערך של איקס שווה לאפס.", math_expression: "x = 0" },
            { verbal_explanation: "נציב אפס בפונקציה. כל איבר המכיל את המשתנה יתאפס ויעלם.", math_expression: "f(0) = 0^3 - 5(0)^2 + 6(0) - 8" },
            { verbal_explanation: "יישאר רק המספר החופשי של הפולינום.", math_expression: "f(0) = -8" }
        ],
        final_answer: "(0, -8)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מצאו את כל נקודות החיתוך של הפונקציה y = x<sup>2</sup> - 9 עם <b>ציר ה-x</b>.<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><path d='M 10,10 Q 100,200 190,10' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='0' y1='100' x2='200' y2='100' stroke='#94a3b8' stroke-width='2'/><circle cx='46' cy='100' r='5' fill='#ef4444'/><circle cx='154' cy='100' r='5' fill='#ef4444'/></svg>",
        options: [
            "(3, 0) , (-3, 0)",
            "(9, 0) , (-9, 0)",
            "(3, 0)",
            "(0, -9)"
        ],
        hint: "חיתוך עם ציר ה-x אומר ש-y שווה לאפס. השוו את הפונקציה ל-0 ופתרו בעזרת שורש.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "חיתוך עם הציר האופקי משמעו הצבת אפס במקום y.", math_expression: "x^2 - 9 = 0" },
            { verbal_explanation: "נעביר את המספר לאגף השני.", math_expression: "x^2 = 9" },
            { verbal_explanation: "נוציא שורש כדי למצוא את שני הפתרונות האפשריים.", math_expression: "x = 3 , x = -3" },
            { verbal_explanation: "נכתוב אותם כנקודות על המישור.", math_expression: "(3, 0) , (-3, 0)" }
        ],
        final_answer: "(3, 0) , (-3, 0)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מצאו את נקודות החיתוך של הפונקציה הפולינומית ממעלה שלישית y = x<sup>3</sup> - 4x עם ציר ה-x.",
        options: [
            "(0, 0) , (2, 0) , (-2, 0)",
            "(0, 0) , (4, 0)",
            "(2, 0) , (-2, 0)",
            "(4, 0) , (-4, 0)"
        ],
        hint: "השוו ל-0. הוציאו גורם משותף x. יישאר לכם משוואה x(x² - 4) = 0. מכאן קל לראות את כל הפתרונות.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את הפונקציה לאפס.", math_expression: "x^3 - 4x = 0" },
            { verbal_explanation: "נוציא גורם משותף כדי לפרק את הפולינום למכפלה פשוטה.", math_expression: "x(x^2 - 4) = 0" },
            { verbal_explanation: "מכפלה שווה לאפס רק אם אחד הגורמים מתאפס. הגורם הראשון נותן לנו את הפתרון הראשון.", math_expression: "x = 0" },
            { verbal_explanation: "הגורם השני הוא משוואה ריבועית קטנה, שפתרונה מעניק לנו עוד שתי נקודות.", math_expression: "x^2 - 4 = 0 => x = 2 , x = -2" },
            { verbal_explanation: "נרשום את שלושת הפתרונות כנקודות.", math_expression: "(0, 0) , (2, 0) , (-2, 0)" }
        ],
        final_answer: "(0, 0) , (2, 0) , (-2, 0)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מצאו את נקודות החיתוך בין שתי הפונקציות הבאות (פרבולה וקו ישר):<br>f(x) = x<sup>2</sup><br>g(x) = x + 2",
        options: [
            "(2, 4) , (-1, 1)",
            "(2, 4) , (1, 1)",
            "(4, 2) , (1, -1)",
            "(-2, 4) , (1, 3)"
        ],
        hint: "כדי למצוא חיתוך בין פונקציות, השוו את הביטויים שלהן זה לזה (x² = x + 2). העבירו לאגף אחד ופתרו כמשוואה ריבועית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא מפגש בין פונקציות, נשווה את הביטויים שלהן זה לזה.", math_expression: "x^2 = x + 2" },
            { verbal_explanation: "נעביר הכל שמאלה לקבלת משוואה השווה לאפס.", math_expression: "x^2 - x - 2 = 0" },
            { verbal_explanation: "נפרק לטרינום (סכום מינוס 1, מכפלה מינוס 2).", math_expression: "(x - 2)(x + 1) = 0 => x = 2 , x = -1" },
            { verbal_explanation: "נציב את הערכים באחת הפונקציות (למשל בישר) כדי למצוא את הגובה המתאים לכל חיתוך.", math_expression: "g(2) = 2 + 2 = 4 => (2, 4)" },
            { verbal_explanation: "נציב את הערך השני.", math_expression: "g(-1) = -1 + 2 = 1 => (-1, 1)" }
        ],
        final_answer: "(2, 4) , (-1, 1)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מהי נקודת החיתוך של הפונקציה הבאה עם ציר ה-y?<br>y = (x - 2)(x + 3)(x - 1)",
        options: [
            "(0, 6)",
            "(0, -6)",
            "(6, 0)",
            "(0, -5)"
        ],
        hint: "אין צורך לפתוח סוגריים. פשוט הציבו x=0 בתוך הסוגריים והכפילו את המספרים שקיבלתם.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "חיתוך עם הציר האנכי מתקבל בהצבת אפס במקום המשתנה איקס.", math_expression: "x = 0" },
            { verbal_explanation: "נציב בתוך כל קבוצת סוגריים ונחשב את התוכן של כל אחת.", math_expression: "y(0) = (0 - 2)(0 + 3)(0 - 1)" },
            { verbal_explanation: "נכפיל את המספרים שהתקבלו זה בזה.", math_expression: "y(0) = (-2) * 3 * (-1)" },
            { verbal_explanation: "מכפלה של שני שליליים הופכת לחיובית.", math_expression: "y = 6 => (0, 6)" }
        ],
        final_answer: "(0, 6)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "כמה נקודות חיתוך עם ציר ה-x יש לגרף הפונקציה y = x<sup>2</sup> + 4?",
        options: [
            "אפס נקודות",
            "נקודה אחת",
            "שתי נקודות",
            "אינסוף נקודות"
        ],
        hint: "נסו להשוות את הפונקציה לאפס. תגיעו למשוואה x² = -4. האם קיים שורש למספר שלילי?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ננסה למצוא חיתוך עם הציר האופקי על ידי השוואה לאפס.", math_expression: "x^2 + 4 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה.", math_expression: "x^2 = -4" },
            { verbal_explanation: "אין שום מספר ממשי שנעלה אותו בריבוע ונקבל תוצאה שלילית, ולכן למשוואה זו אין פתרון. הגרף מרחף מעל הציר.", math_expression: "No Solution" }
        ],
        final_answer: "אפס נקודות"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מצאו את נקודת החיתוך עם ציר ה-x של הפונקציה y = (x - 3)<sup>2</sup>.",
        options: [
            "(3, 0)",
            "(-3, 0)",
            "(0, 9)",
            "(9, 0)"
        ],
        hint: "השוו לאפס וגלו פתרון יחיד. כשיש פתרון יחיד למשוואה ריבועית, משמעות הדבר היא שגרף הפונקציה משיק לציר ה-x בנקודה זו ולא רק חותך אותו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה את הפונקציה לאפס למציאת החיתוך.", math_expression: "(x - 3)^2 = 0" },
            { verbal_explanation: "נוציא שורש כדי להיפטר מהחזקה השנייה.", math_expression: "x - 3 = 0" },
            { verbal_explanation: "נעביר אגף. קיבלנו פתרון בודד, מה שמעיד על נקודת השקה של הגרף עם הציר.", math_expression: "x = 3 => (3, 0)" }
        ],
        final_answer: "(3, 0)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "מצאו את נקודת החיתוך של הפונקציה y = 2x<sup>3</sup> - 16 עם ציר ה-x.",
        options: [
            "(2, 0)",
            "(4, 0)",
            "(8, 0)",
            "(-2, 0)"
        ],
        hint: "השוו ל-0. העבירו את ה-16, חלקו ב-2. תקבלו x³ = 8. איזה מספר בחזקת 3 נותן 8?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה לאפס את פונקציית הפולינום ממעלה שלישית.", math_expression: "2x^3 - 16 = 0" },
            { verbal_explanation: "נעביר אגף.", math_expression: "2x^3 = 16" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x^3 = 8" },
            { verbal_explanation: "נוציא שורש שלישי למציאת הערך. (שתיים כפול שתיים כפול שתיים נותן שמונה).", math_expression: "x = 2 => (2, 0)" }
        ],
        final_answer: "(2, 0)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "חקירת פונקציה פולינומית (תחום הגדרה, חיתוך צירים)",
        question: "לפונקציה y = -x<sup>2</sup> + 10x - 24 יש שתי נקודות חיתוך עם ציר ה-x. מהו המרחק (אורך הקטע) בין שתי הנקודות הללו?",
        options: [
            "2",
            "10",
            "4",
            "6"
        ],
        hint: "פתרו את המשוואה הריבועית באמצעות טרינום או נוסחת שורשים כדי למצוא את שתי הנקודות. לאחר מכן חשבו את ההפרש ביניהן.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשווה לאפס את הפונקציה הריבועית. רצוי להכפיל את כל המשוואה במינוס אחת כדי שיהיה קל יותר לעבוד עם טרינום.", math_expression: "x^2 - 10x + 24 = 0" },
            { verbal_explanation: "נפרק לטרינום (סכום מינוס עשר, מכפלה עשרים וארבע חיובי).", math_expression: "(x - 6)(x - 4) = 0" },
            { verbal_explanation: "מצאנו את שתי נקודות החיתוך.", math_expression: "x = 6 , x = 4" },
            { verbal_explanation: "המרחק ביניהן הוא ההפרש הפשוט על ציר האיקס.", math_expression: "d = 6 - 4 = 2" }
        ],
        final_answer: "2"
    },

    // =====================================================================
    // תת-נושא 6: נקודות קיצון ותחומי עלייה וירידה (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "מהו שיעור ה-x של נקודת הקיצון עבור הפונקציה f(x) = x<sup>2</sup> - 6x + 5?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><path d='M 30,20 Q 100,200 170,20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='110' r='5' fill='#ef4444'/><line x1='70' y1='110' x2='130' y2='110' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/></svg>",
        options: [
            "3",
            "6",
            "-3",
            "5"
        ],
        hint: "בנקודת קיצון הנגזרת מתאפסת. גזרו את הפונקציה, השוו ל-0 ופתרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את נקודת הקיצון על ידי גזירת הפונקציה.", math_expression: "f'(x) = 2x - 6" },
            { verbal_explanation: "נשווה את הנגזרת לאפס, שכן שם שיפוע המשיק מתאזן ומשנה כיוון.", math_expression: "2x - 6 = 0" },
            { verbal_explanation: "נעביר אגף.", math_expression: "2x = 6" },
            { verbal_explanation: "נחלק בשתיים למציאת הערך הנדרש.", math_expression: "x = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "איזה סוג של נקודת קיצון (מינימום או מקסימום) יש לפונקציה y = -x<sup>2</sup> + 4x בנקודה שבה x = 2?",
        options: [
            "מקסימום (Maximum)",
            "מינימום (Minimum)",
            "נקודת פיתול",
            "אין נקודת קיצון"
        ],
        hint: "אפשר לגזור פעם שנייה (y''). אם הנגזרת השנייה שלילית, זו נקודת מקסימום (צורה של כיפה). אם היא חיובית, זו נקודת מינימום (קערה).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לסווג את הנקודה במהירות, נמצא תחילה את הנגזרת הראשונה.", math_expression: "y' = -2x + 4" },
            { verbal_explanation: "נשתמש במבחן הנגזרת השנייה לסיווג. נגזור את התוצאה שוב.", math_expression: "y'' = -2" },
            { verbal_explanation: "הנגזרת השנייה היא שלילית באופן קבוע. ערך שלילי מעיד תמיד על נקודת מקסימום מקומית (הפונקציה קעורה כלפי מטה).", math_expression: "y'' < 0 => Max" }
        ],
        final_answer: "מקסימום (Maximum)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "מהו תחום העלייה של הפונקציה y = x<sup>2</sup> - 8x?",
        options: [
            "x > 4",
            "x < 4",
            "x > 8",
            "כל x"
        ],
        hint: "פונקציה עולה כאשר הנגזרת שלה גדולה מאפס (y' > 0). גזרו, ופתרו את אי-השוויון.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום עלייה מוגדר כאזור בו שיפוע הפונקציה חיובי, כלומר הנגזרת גדולה מאפס.", math_expression: "y' > 0" },
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "y' = 2x - 8" },
            { verbal_explanation: "נציב באי השוויון.", math_expression: "2x - 8 > 0" },
            { verbal_explanation: "נעביר אגף ונחלק בשתיים לקבלת התחום המדויק.", math_expression: "2x > 8 => x > 4" }
        ],
        final_answer: "x > 4"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "לפונקציה y = x<sup>3</sup> - 3x יש שתי נקודות קיצון. מצאו את שיעורי ה-x שלהן.",
        options: [
            "1 , -1",
            "0 , 3",
            "3 , -3",
            "2 , -2"
        ],
        hint: "גזרו והשוו ל-0. הנגזרת היא 3x² - 3. השוו לאפס, העבירו את 3 וגלו מהו ה-x.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה ממעלה שלישית.", math_expression: "y' = 3x^2 - 3" },
            { verbal_explanation: "נשווה לאפס לאיתור נקודות קיצון אפשריות.", math_expression: "3x^2 - 3 = 0" },
            { verbal_explanation: "נעביר אגף ונחלק בשלוש.", math_expression: "3x^2 = 3 => x^2 = 1" },
            { verbal_explanation: "נוציא שורש כדי לקבל את שתי הנקודות המאפסות.", math_expression: "x = 1 , x = -1" }
        ],
        final_answer: "1 , -1"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "מהו תחום הירידה של הפונקציה y = x<sup>3</sup> - 3x<sup>2</sup>?",
        options: [
            "0 < x < 2",
            "x > 2",
            "x < 0",
            "-2 < x < 0"
        ],
        hint: "הנגזרת צריכה להיות קטנה מאפס. הנגזרת היא 3x² - 6x. זהי פרבולה מחייכת של נגזרת. היא שלילית (תחום ירידה) בין שורשיה. השוו לאפס למציאת השורשים.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחום ירידה מוגדר כאשר הנגזרת שלילית.", math_expression: "y' < 0" },
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "y' = 3x^2 - 6x" },
            { verbal_explanation: "נמצא קודם את נקודות ההתאפסות של הנגזרת (השורשים).", math_expression: "3x(x - 2) = 0 => x = 0 , x = 2" },
            { verbal_explanation: "הנגזרת היא פרבולה מחייכת, ולכן היא יורדת מתחת לציר (שלילית) בין שני השורשים שלה. נרשום את התחום הפנימי.", math_expression: "0 < x < 2" }
        ],
        final_answer: "0 < x < 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "נתונה פונקציית הנגזרת של פונקציה מסוימת: f'(x) = x - 5. <br>עבור אילו ערכי x הפונקציה המקורית f(x) נמצאת בירידה?",
        options: [
            "x < 5",
            "x > 5",
            "x = 5",
            "כל x"
        ],
        hint: "פונקציה במגמת ירידה היכן שהנגזרת שלה קטנה מאפס. כלומר, היכן ש- (x - 5) קטן מ-0.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אנו לא צריכים לגזור כי הנגזרת כבר נתונה לנו. נבדוק מתי היא שלילית.", math_expression: "f'(x) < 0" },
            { verbal_explanation: "נציב את הביטוי של הנגזרת לאי השוויון.", math_expression: "x - 5 < 0" },
            { verbal_explanation: "נעביר את המספר ימינה לקבלת התחום המדויק.", math_expression: "x < 5" }
        ],
        final_answer: "x < 5"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "כמה נקודות קיצון בסך הכל יש לפונקציה y = x<sup>4</sup> - 2x<sup>2</sup>?",
        options: [
            "שלוש",
            "אחת",
            "שתיים",
            "אפס"
        ],
        hint: "הנגזרת היא פולינום ממעלה שלישית. השוו ל-0 והוציאו גורם משותף.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה כדי לחפש נקודות קיצון.", math_expression: "y' = 4x^3 - 4x" },
            { verbal_explanation: "נשווה לאפס ונוציא גורם משותף מירבי המכיל את המשתנה.", math_expression: "4x(x^2 - 1) = 0" },
            { verbal_explanation: "הגורם הראשון מאפס את המשוואה בנקודה אחת.", math_expression: "4x = 0 => x = 0" },
            { verbal_explanation: "הגורם השני מספק שתי נקודות איפוס נוספות.", math_expression: "x^2 - 1 = 0 => x = 1 , x = -1" },
            { verbal_explanation: "סך הכל מצאנו שלוש נקודות קיצון נפרדות.", math_expression: "Total = 3" }
        ],
        final_answer: "שלוש"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "מצאו את הנקודה בה הנגזרת של הפונקציה y = x<sup>3</sup> מתאפסת. האם זו נקודת קיצון?",
        options: [
            "x = 0, זו אינה נקודת קיצון",
            "x = 0, זו נקודת מינימום",
            "x = 0, זו נקודת מקסימום",
            "x = 3, זו נקודת קיצון"
        ],
        hint: "הנגזרת היא 3x². היא מתאפסת רק ב-0. שימו לב שהנגזרת (3x²) תמיד חיובית (פרט ל-0), ולכן הפונקציה עולה תמיד ולא משנה כיוון. נקודה כזו נקראת פיתול.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור את הפונקציה.", math_expression: "y' = 3x^2" },
            { verbal_explanation: "נשווה לאפס למציאת הנקודה החשודה.", math_expression: "3x^2 = 0 => x = 0" },
            { verbal_explanation: "נבדוק את סימן הנגזרת. מכיוון שאיקס מועלה בריבוע, התוצאה תהיה תמיד חיובית. כלומר, הפונקציה עולה לפני אפס, וממשיכה לעלות גם אחריו.", math_expression: "x^2 >= 0" },
            { verbal_explanation: "כיוון שאין החלפת כיוון (מעלייה לירידה ולהיפך), לא מדובר בנקודת קיצון, אלא בנקודת פיתול (שהשיפוע בה מתאזן לרגע).", math_expression: "Not Extrema" }
        ],
        final_answer: "x = 0, זו אינה נקודת קיצון"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "לפונקציה y = x<sup>2</sup> + ax יש נקודת מינימום בנקודה x = 3. מהו ערכו של הפרמטר a?",
        options: [
            "-6",
            "6",
            "-3",
            "3"
        ],
        hint: "הידיעה שיש שם קיצון אומרת דבר אחד ברור: אם נציב x=3 בנגזרת, התוצאה חייבת להיות 0. גזרו, הציבו 3 במקום x, השוו לאפס, ומצאו את a.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתון שקיימת נקודת קיצון. משמעות הדבר היא שהנגזרת מתאפסת שם.", math_expression: "y'(3) = 0" },
            { verbal_explanation: "נגזור את הפונקציה הכוללת את הפרמטר המספרי a.", math_expression: "y' = 2x + a" },
            { verbal_explanation: "נציב את נתוני הקיצון הידועים לנו בתוך פונקציית הנגזרת.", math_expression: "2(3) + a = 0" },
            { verbal_explanation: "נפתור משוואה אלגברית קלה.", math_expression: "6 + a = 0 => a = -6" }
        ],
        final_answer: "-6"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות קיצון ותחומי עלייה וירידה",
        question: "מהו הערך המקסימלי (ערך ה-y הגבוה ביותר) אליו מגיעה הפונקציה f(x) = -2x<sup>2</sup> + 12x - 10 ?",
        options: [
            "8",
            "3",
            "10",
            "-10"
        ],
        hint: "מצאו את ה-x של קודקוד הפרבולה (על ידי גזירה והשוואה לאפס). לאחר מכן, זכרו שהשאלה מבקשת את 'הערך המקסימלי', כלומר את ה-y. הציבו את ה-x חזרה בפונקציה המקורית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את המקסימום, נמצא את נקודת הקיצון. נגזור את הפונקציה.", math_expression: "f'(x) = -4x + 12" },
            { verbal_explanation: "נשווה לאפס ונמצא את הערך של איקס.", math_expression: "-4x + 12 = 0 => 4x = 12 => x = 3" },
            { verbal_explanation: "השאלה מבקשת את הערך המקסימלי עצמו (הגובה, ה-y). לכן נציב את האיקס בפונקציה המקורית.", math_expression: "f(3) = -2(3)^2 + 12(3) - 10" },
            { verbal_explanation: "נחשב את החזקה והכפל.", math_expression: "f(3) = -2(9) + 36 - 10 = -18 + 36 - 10" },
            { verbal_explanation: "נחשב את הסכום הסופי לקבלת גובה הפונקציה בנקודת השיא.", math_expression: "f(3) = 8" }
        ],
        final_answer: "8"
    },
    // =====================================================================
    // תת-נושא 7: נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "מצאו את נקודת הפיתול (שיעור ה-x) של הפונקציה הבאה:<br>y = x<sup>3</sup> - 6x<sup>2</sup> + 5<br><svg viewBox='0 0 200 120' width='160' height='96' style='display:block; margin: 15px auto;'><path d='M 20,100 Q 60,10 100,60 T 180,20' fill='none' stroke='#3b82f6' stroke-width='3'/><circle cx='100' cy='60' r='5' fill='#ef4444'/><line x1='50' y1='10' x2='150' y2='110' stroke='#10b981' stroke-width='2' stroke-dasharray='4,4'/></svg>",
        options: [
            "x = 2",
            "x = 6",
            "x = 3",
            "x = 0"
        ],
        hint: "נקודת פיתול היא הנקודה שבה הפונקציה עוברת מקעירות מעלה לקעירות מטה (או להפך). כדי למצוא אותה, גזרו את הפונקציה פעמיים, והשוו את הנגזרת השנייה לאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא פיתול, נגזור פעם אחת את הפונקציה.", math_expression: "y' = 3x^2 - 12x" },
            { verbal_explanation: "נגזור פעם שנייה לקבלת הנגזרת השנייה.", math_expression: "y'' = 6x - 12" },
            { verbal_explanation: "נשווה את הנגזרת השנייה לאפס.", math_expression: "6x - 12 = 0" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "6x = 12" },
            { verbal_explanation: "נחלק בשש למציאת הנקודה בה משתנה הקעירות.", math_expression: "x = 2" }
        ],
        final_answer: "x = 2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "עבור אילו ערכי x הפונקציה y = x<sup>4</sup> - 6x<sup>2</sup> קעורה כלפי מעלה (צורה של 'קערה מחייכת')?",
        options: [
            "x > 1 או x < -1",
            "-1 < x < 1",
            "x > 6 או x < -6",
            "x > 0"
        ],
        hint: "פונקציה קעורה כלפי מעלה כאשר הנגזרת השנייה שלה גדולה מאפס (y'' > 0). גזרו פעמיים ופתרו את אי-השוויון הריבועי.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "התנאי לקעירות כלפי מעלה הוא שהנגזרת השנייה תהיה חיובית.", math_expression: "y'' > 0" },
            { verbal_explanation: "נמצא את הנגזרת הראשונה.", math_expression: "y' = 4x^3 - 12x" },
            { verbal_explanation: "נמצא את הנגזרת השנייה.", math_expression: "y'' = 12x^2 - 12" },
            { verbal_explanation: "נציב באי השוויון כדי לבדוק מתי היא חיובית.", math_expression: "12x^2 - 12 > 0" },
            { verbal_explanation: "נעביר אגף ונחלק ב-12.", math_expression: "x^2 > 1" },
            { verbal_explanation: "הפתרון של אי-שוויון ריבועי זה הוא הקצוות (מעבר ל-1 ומתחת למינוס 1).", math_expression: "x > 1 , x < -1" }
        ],
        final_answer: "x > 1 או x < -1"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "נתונה הפונקציה f(x) = x<sup>3</sup> + ax<sup>2</sup>.<br>ידוע שלפונקציה יש נקודת פיתול בדיוק ב- x = 1.<br>מהו ערכו של הפרמטר a?",
        options: [
            "-3",
            "3",
            "-1",
            "6"
        ],
        hint: "אם יש פיתול ב-x=1, זה אומר שהנגזרת השנייה מתאפסת כשמציבים בה 1. גזרו פעמיים, הציבו 1, השוו ל-0 וגלו את a.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור פעם ראשונה.", math_expression: "f'(x) = 3x^2 + 2ax" },
            { verbal_explanation: "נגזור פעם שנייה.", math_expression: "f''(x) = 6x + 2a" },
            { verbal_explanation: "נתון שנקודת הפיתול היא ב-1, לכן נציב איקס שווה אחת ונשווה לאפס.", math_expression: "6(1) + 2a = 0" },
            { verbal_explanation: "נעביר את המספר אגף.", math_expression: "2a = -6" },
            { verbal_explanation: "נחלק בשתיים למציאת הפרמטר.", math_expression: "a = -3" }
        ],
        final_answer: "-3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "כאשר הנגזרת השנייה של פונקציה היא שלילית (f''(x) < 0) בתחום מסוים, מה אנו יודעים על גרף הפונקציה המקורית f(x) באותו התחום?",
        options: [
            "היא קעורה כלפי מטה ('קערה בוכה')",
            "היא קעורה כלפי מעלה ('קערה מחייכת')",
            "היא בהכרח פונקציה יורדת",
            "היא בהכרח פונקציה עולה"
        ],
        hint: "נגזרת שנייה בודקת את ה'קעירות'. חיובי = מחייך (למעלה). שלילי = בוכה (למטה).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ערך הנגזרת השנייה מצביע על שינוי השיפוע. כשהיא שלילית, זה אומר שהשיפוע הולך וקטן.", math_expression: "f''(x) < 0" },
            { verbal_explanation: "מבחינה גרפית, שיפוע שהולך וקטן יוצר צורה של פרבולה הפוכה, המכונה 'קעורה כלפי מטה'.", math_expression: "Downwards" }
        ],
        final_answer: "היא קעורה כלפי מטה ('קערה בוכה')"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "מצאו את נקודת הפיתול (ערך ה-x) של הפונקציה הבאה:<br>y = -2x<sup>3</sup> + 12x<sup>2</sup> - 4x + 1",
        options: [
            "2",
            "6",
            "-2",
            "4"
        ],
        hint: "נגזרת ראשונה ואז נגזרת שנייה. הנגזרת השנייה תהיה ישר פשוט שתצטרכו להשוות לאפס.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנגזרת הראשונה.", math_expression: "y' = -6x^2 + 24x - 4" },
            { verbal_explanation: "נמצא את הנגזרת השנייה.", math_expression: "y'' = -12x + 24" },
            { verbal_explanation: "נשווה את הנגזרת השנייה לאפס.", math_expression: "-12x + 24 = 0" },
            { verbal_explanation: "נעביר את האיקס לאגף ימין כדי שיהיה חיובי.", math_expression: "24 = 12x" },
            { verbal_explanation: "נחלק בשתיים-עשרה.", math_expression: "x = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "כמה נקודות פיתול יש לפונקציה y = x<sup>4</sup>?",
        options: [
            "אפס (אין לה נקודות פיתול)",
            "אחת (ב- x=0)",
            "שתיים (ב- x=1 ו- x=-1)",
            "אינסוף"
        ],
        hint: "גזרו פעמיים והשוו לאפס. תקבלו ש-x=0 מאפס את הנגזרת השנייה. אבל שימו לב: האם הסימן משתנה לפני ואחרי 0? x בריבוע תמיד חיובי!",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגזור פעם ראשונה.", math_expression: "y' = 4x^3" },
            { verbal_explanation: "נגזור פעם שנייה ונשווה לאפס.", math_expression: "y'' = 12x^2 => 12x^2 = 0 => x = 0" },
            { verbal_explanation: "נקודת פיתול דורשת שהקעירות תשנה את הכיוון שלה (מפלוס למינוס). נבדוק את סימן הנגזרת השנייה לכל מספר.", math_expression: "12x^2 > 0" },
            { verbal_explanation: "בגלל החזקה הזוגית, הנגזרת השנייה תמיד חיובית (תמיד קעורה מעלה). הקעירות לא משתנה, ולכן זו לא נקודת פיתול.", math_expression: "0" }
        ],
        final_answer: "אפס (אין לה נקודות פיתול)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "נתונה הנגזרת השנייה של פונקציה מסוימת: y'' = 6x - 18.<br>עבור איזה תחום הפונקציה המקורית קעורה כלפי מטה?",
        options: [
            "x < 3",
            "x > 3",
            "x > 0",
            "x < 18"
        ],
        hint: "קעירות כלפי מטה (בוכה) מתרחשת כאשר הנגזרת השנייה קטנה מ-0. הציבו: 6x - 18 קטן מאפס, ופתרו.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קעירות כלפי מטה משמעותה נגזרת שנייה שלילית.", math_expression: "y'' < 0" },
            { verbal_explanation: "נציב את הנגזרת השנייה הנתונה לתוך אי השוויון.", math_expression: "6x - 18 < 0" },
            { verbal_explanation: "נעביר את המספר ימינה.", math_expression: "6x < 18" },
            { verbal_explanation: "נחלק בשש לקבלת התחום המדויק.", math_expression: "x < 3" }
        ],
        final_answer: "x < 3"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "מצאו את שיעור ה-y של נקודת הפיתול עבור הפונקציה:<br>y = x<sup>3</sup> - 3x<sup>2</sup> + 4",
        options: [
            "2",
            "1",
            "4",
            "0"
        ],
        hint: "גזרו פעמיים, מצאו את ה-x של נקודת הפיתול, ואז זכרו לחזור ולהציב אותו בפונקציה המקורית כדי למצוא את הגובה (y).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את הנגזרת הראשונה.", math_expression: "y' = 3x^2 - 6x" },
            { verbal_explanation: "נמצא את השנייה ונשווה לאפס למציאת האיקס.", math_expression: "y'' = 6x - 6 = 0 => 6x = 6 => x = 1" },
            { verbal_explanation: "נציב את האיקס בפונקציה המקורית כדי למצוא את הגובה (y).", math_expression: "y(1) = 1^3 - 3(1)^2 + 4" },
            { verbal_explanation: "נחשב את הפעולות בחשבון.", math_expression: "y(1) = 1 - 3 + 4" },
            { verbal_explanation: "התוצאה הסופית המייצגת את הגובה.", math_expression: "y = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "לפונקציה מסוימת יש נקודת <b>מקסימום מקומי</b> ב- x = 2.<br>מה ניתן להסיק בוודאות על הנגזרת השנייה בנקודה זו?",
        options: [
            "f''(2) < 0",
            "f''(2) > 0",
            "f''(2) = 0",
            "f''(2) = 2"
        ],
        hint: "נקודת מקסימום נמצאת על 'גבעה', ולכן צורת הפונקציה באזור זה היא של קערה הפוכה (קעורה כלפי מטה). ומה הכלל לגבי קעירות מטה?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודת מקסימום מאפסת את הנגזרת הראשונה (השיפוע מתיישר).", math_expression: "f'(2) = 0" },
            { verbal_explanation: "סביב נקודת מקסימום הפונקציה יורדת בחזרה למטה, מה שיוצר צורה קעורה כלפי מטה.", math_expression: "f''(x) < 0" }
        ],
        final_answer: "f''(2) < 0"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "נקודות פיתול ותחומי קעירות (כלפי מעלה/מטה) - נגזרת שנייה",
        question: "בנקודת הפיתול של הפונקציה, המשיק לגרף הפונקציה...",
        options: [
            "חוצה את גרף הפונקציה מצידה האחד לצידה השני",
            "מקביל בהכרח לציר ה-x",
            "מקביל בהכרח לציר ה-y",
            "לא קיים כלל"
        ],
        hint: "זהו תכונה גיאומטרית מיוחדת של נקודות פיתול. כיוון שהקעירות משנה כיוון בדיוק שם, המשיק לא יכול להישאר 'מחוץ' לקערה.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בנקודת קיצון רגילה, המשיק נושק לפונקציה ונשאר מחוץ לצורת הקערה.", math_expression: "f'(x) = 0" },
            { verbal_explanation: "בנקודת פיתול, הקעירות משתנה ולכן המשיק חייב 'לחתוך' או לחצות את הגרף בדיוק באותה הנקודה כדי להמשיך להתאים לשיפוע החדש.", math_expression: "f''(x) = 0" }
        ],
        final_answer: "חוצה את גרף הפונקציה מצידה האחד לצידה השני"
    },

    // =====================================================================
    // תת-נושא 8: שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת) (10 שאלות)
    // =====================================================================
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "ידוע שפונקציה f(x) <b>עולה</b> כאשר x > 2, ו<b>יורדת</b> כאשר x < 2.<br>איזה מהמשפטים הבאים מתאר נכון את הגרף של הנגזרת f'(x)?",
        options: [
            "חותך את ציר ה-x בנקודה x=2, ועובר משלילי לחיובי",
            "חותך את ציר ה-x בנקודה x=2, ועובר מחיובי לשלילי",
            "גרף הנגזרת הוא פרבולה שקודקודה ב-x=2",
            "גרף הנגזרת תמיד חיובי"
        ],
        hint: "ירידה של הפונקציה = נגזרת שלילית. עלייה של הפונקציה = נגזרת חיובית. ב-2 יש החלפת כיוון.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר איקס קטן משתיים, הפונקציה יורדת, כלומר הנגזרת נמצאת מתחת לציר האיקס.", math_expression: "x < 2 => f'(x) < 0" },
            { verbal_explanation: "כאשר איקס גדול משתיים, הפונקציה עולה, כלומר הנגזרת נמצאת מעל ציר האיקס.", math_expression: "x > 2 => f'(x) > 0" },
            { verbal_explanation: "מכאן שגרף הנגזרת חותך את האפס ועולה כלפי מעלה ממינוס לפלוס.", math_expression: "f'(2) = 0" }
        ],
        final_answer: "חותך את ציר ה-x בנקודה x=2, ועובר משלילי לחיובי"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "גרף הנגזרת f'(x) הוא פרבולה 'מחייכת' אשר חותכת את ציר ה-x בשתי נקודות: x = -1 ו- x = 3.<br>היכן תהיה לפונקציה המקורית f(x) נקודת <b>מקסימום</b>?<br><svg viewBox='0 0 200 150' width='160' height='120' style='display:block; margin: 15px auto;'><path d='M 10,10 Q 100,200 190,10' fill='none' stroke='#ef4444' stroke-width='3'/><line x1='0' y1='100' x2='200' y2='100' stroke='#94a3b8' stroke-width='2'/><circle cx='46' cy='100' r='5' fill='#10b981'/><circle cx='154' cy='100' r='5' fill='#10b981'/><text x='35' y='120' font-size='12' font-weight='bold'>-1</text><text x='165' y='120' font-size='12' font-weight='bold'>3</text><text x='170' y='30' font-size='12' font-weight='bold' fill='#ef4444'>y'</text></svg>",
        options: [
            "x = -1",
            "x = 3",
            "x = 1",
            "אין לה נקודת מקסימום"
        ],
        hint: "כדי למצוא מקסימום, חפשו מעבר מעלייה לירידה, כלומר מקום שבו הנגזרת עוברת מהחלק החיובי (מעל הציר) לחלק השלילי (מתחת לציר).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנגזרת מתאפסת בשני המקומות שצוינו, כך ששם יש נקודות קיצון אפשריות.", math_expression: "f'(-1) = 0 , f'(3) = 0" },
            { verbal_explanation: "לפני מינוס אחת, הפרבולה המחייכת נמצאת מעל הציר (הפונקציה עולה). אחרי מינוס אחת, הפרבולה יורדת אל מתחת לציר (הפונקציה מתחילה לרדת).", math_expression: "x < -1 => f'(x) > 0" },
            { verbal_explanation: "מעבר מעלייה לירידה מגדיר נקודת מקסימום (פסגה).", math_expression: "x = -1 => Max" }
        ],
        final_answer: "x = -1"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "פונקציה f(x) היא פולינום ממעלה שלישית בעל מקדם חיובי (לדוגמה y = x<sup>3</sup>).<br>מה תהיה הצורה הכללית של גרף הנגזרת f'(x)?",
        options: [
            "פרבולה 'מחייכת' (קעורה כלפי מעלה)",
            "פרבולה 'בוכה' (קעורה כלפי מטה)",
            "קו ישר עולה",
            "קו ישר יורד"
        ],
        hint: "גזירה של איקס בשלישית נותנת שלוש איקס בריבוע. מה הצורה של גרף שמכיל איקס בריבוע עם מקדם חיובי?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכתוב את הפונקציה הכללית כאשר המקדם חיובי.", math_expression: "f(x) = ax^3 => a > 0" },
            { verbal_explanation: "נגזור אותה. חזקה שלישית יורדת לחזקה שנייה.", math_expression: "f'(x) = 3ax^2" },
            { verbal_explanation: "משוואה עם איקס בריבוע היא תמיד פרבולה. מכיוון שהמקדם חיובי (3a גדול מאפס), הפרבולה מחייכת.", math_expression: "3a > 0 => U" }
        ],
        final_answer: "פרבולה 'מחייכת' (קעורה כלפי מעלה)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "נתון שגרף הנגזרת f'(x) נמצא <b>תמיד מעל ציר ה-x</b> עבור כל ערך של x.<br>מה ניתן להסיק לגבי גרף הפונקציה f(x)?",
        options: [
            "הפונקציה עולה לכל x",
            "הפונקציה יורדת לכל x",
            "לפונקציה יש רק נקודת מינימום אחת",
            "הפונקציה קבועה ואינה משתנה"
        ],
        hint: "נגזרת שערכה חיובי מייצגת שיפוע חיובי. אם השיפוע חיובי תמיד, איך מתנהגת הפונקציה?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "גרף מעל ציר האיקס פירושו שהערך חיובי תמיד.", math_expression: "f'(x) > 0" },
            { verbal_explanation: "נגזרת חיובית מעידה על כך שהשיפוע של הפונקציה חיובי, ולכן היא כל הזמן מטפסת למעלה.", math_expression: "Upwards" }
        ],
        final_answer: "הפונקציה עולה לכל x"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "לפונקציה f(x) יש <b>נקודת פיתול</b> ב- x = 4.<br>מה קורה בגרף של פונקציית הנגזרת f'(x) בנקודה זו?",
        options: [
            "יש לה נקודת קיצון (מינימום או מקסימום)",
            "היא חותכת את ציר ה-x",
            "היא אינה מוגדרת",
            "היא משיקה לציר ה-y"
        ],
        hint: "בנקודת פיתול הנגזרת השנייה מתאפסת. הנגזרת השנייה היא בעצם הנגזרת של הנגזרת הראשונה! כלומר, ה'שיפוע' של פונקציית הנגזרת שווה לאפס ב-4.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "התנאי לקיום פיתול הוא שהנגזרת השנייה מתאפסת.", math_expression: "f''(4) = 0" },
            { verbal_explanation: "הנגזרת השנייה היא הנגזרת של פונקציית הנגזרת הראשונה. לכן, אם היא מתאפסת, זה אומר שפונקציית הנגזרת עצמה הגיעה לשיא או לשפל (קיצון).", math_expression: "(f')'(4) = 0 => Max / Min" }
        ],
        final_answer: "יש לה נקודת קיצון (מינימום או מקסימום)"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "גרף הפונקציה f(x) נוגע בציר ה-x בנקודה x = 2 אך <b>אינו חוצה אותו</b> (רק משיק לו).<br>אילו מהתנאים הבאים חייבים להתקיים בנקודה זו?",
        options: [
            "f(2) = 0  וגם  f'(2) = 0",
            "f(2) = 0  וגם  f'(2) > 0",
            "f(2) > 0  וגם  f'(2) = 0",
            "f(2) = 0  וגם  f''(2) = 0"
        ],
        hint: "נגיעה בציר מבלי לחצות אותו מעידה על כך שהגובה הוא 0 (כי היא על הציר) והשיפוע שם מתאזן לרגע וחוזר אחורה (נקודת קיצון על הציר).",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנקודה נמצאת על הציר האופקי, ולכן גובה הפונקציה שם הוא אפס.", math_expression: "f(2) = 0" },
            { verbal_explanation: "כיוון שהפונקציה לא חוצה את הציר אלא רק משיקה וחוזרת בחזרה, מדובר בנקודת קיצון שבה השיפוע המקומי הוא גם כן אפס.", math_expression: "f'(2) = 0" }
        ],
        final_answer: "f(2) = 0  וגם  f'(2) = 0"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "התבוננו בגרף הנגזרת: גרף הנגזרת הוא <b>קו ישר העובר בראשית הצירים (0,0) ובעל שיפוע חיובי</b>.<br>מהי הצורה הכללית של הפונקציה המקורית f(x)?",
        options: [
            "פרבולה 'מחייכת' שקודקודה על ציר ה-y",
            "פרבולה 'בוכה' שקודקודה על ציר ה-x",
            "קו ישר מקביל לציר ה-x",
            "פונקציה ממעלה שלישית"
        ],
        hint: "הנגזרת היא קו ישר כמו y = 2x. אם הנגזרת היא 2x, איזה סוג של פונקציה יצרה אותה כשנגזרה?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכתוב משוואה לקו ישר העובר בראשית עם שיפוע חיובי.", math_expression: "f'(x) = ax => a > 0" },
            { verbal_explanation: "נשאל את עצמנו: איזו פונקציה תיתן נגזרת של איקס בחזקת אחת? התשובה היא פונקציה עם איקס בחזקת שתיים.", math_expression: "f(x) = (a/2) * x^2" },
            { verbal_explanation: "פונקציה עם חזקה ריבועית ומקדם חיובי מייצגת תמיד פרבולה מחייכת.", math_expression: "U" }
        ],
        final_answer: "פרבולה 'מחייכת' שקודקודה על ציר ה-y"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "נתון שגרף הנגזרת הוא קו אופקי קבוע: f'(x) = -3.<br>איזה מהגרפים מתאר את הפונקציה המקורית f(x)?",
        options: [
            "קו ישר היורד משמאל לימין",
            "קו ישר העולה משמאל לימין",
            "פרבולה הפוכה",
            "קו אופקי המקביל לציר ה-x"
        ],
        hint: "הנגזרת מייצגת את השיפוע של הפונקציה. שיפוע קבוע ובלתי משתנה, שהוא מספר שלילי, מתאר פונקציה אחת ספציפית בגיאומטריה אנליטית.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנגזרת היא קבוע, מה שאומר שהשיפוע של הפונקציה לעולם אינו משתנה.", math_expression: "m = -3" },
            { verbal_explanation: "פונקציה בעלת שיפוע קבוע היא קו ישר (פונקציה ליניארית). בגלל שהשיפוע שלילי, הקו יורד.", math_expression: "y = -3x + c" }
        ],
        final_answer: "קו ישר היורד משמאל לימין"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "לפונקציה f(x) יש מקסימום מקומי ב- x = -2 ומינימום מקומי ב- x = 5.<br>באילו נקודות יחתוך גרף הנגזרת f'(x) את ציר ה-x?",
        options: [
            "רק ב- x = -2 ו- x = 5",
            "רק ב- x = 0",
            "בין הערכים -2 ל- 5",
            "הוא לא יחתוך את ציר ה-x כלל"
        ],
        hint: "תזכורת: נקודות הקיצון של פונקציה נוצרות בדיוק במקומות שבהם הנגזרת שלה מתאפסת (שווה לאפס). התאפסות גרפית פירושה חיתוך עם הציר.",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המקומות שבהם הפונקציה מגיעה לשיא או לשפל, הם המקומות שבהם השיפוע שלה (הנגזרת) מתאזן ומשתווה לאפס.", math_expression: "f'(-2) = 0 , f'(5) = 0" },
            { verbal_explanation: "נגזרת ששווה לאפס משמעותה שהגובה של הנגזרת על הגרף הוא אפס, כלומר היא חותכת את הציר באותם מקומות בדיוק.", math_expression: "x = -2 , x = 5" }
        ],
        final_answer: "רק ב- x = -2 ו- x = 5"
    },
    {
        topic: "חשבון דיפרנציאלי - פולינומים",
        subTopic: "שרטוט גרף הפונקציה והתאמת גרפים (פונקציה מול נגזרת)",
        question: "גרף הנגזרת f'(x) נמצא <b>כולו מתחת לציר ה-x</b> (שלילי לכל x).<br>מה ניתן לדעת בוודאות על הפונקציה f(x)?",
        options: [
            "שהיא במגמת ירידה לכל אורך התחום",
            "שיש לה נקודת מינימום אחת לפחות",
            "שהיא במגמת עלייה לכל אורך התחום",
            "שהיא מקבילה לציר ה-x"
        ],
        hint: "כשגרף הנגזרת למטה, זה אומר שערכי הנגזרת שליליים. מה קורה לפונקציה כשהנגזרת שלה שלילית?",
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מיקום הגרף של הנגזרת מתחת לציר האופקי אומר שערכו תמיד מינוס.", math_expression: "f'(x) < 0" },
            { verbal_explanation: "כלל בסיסי: נגזרת שלילית גוררת ירידה של הפונקציה המקורית לאורך אותו התחום.", math_expression: "Downwards" }
        ],
        final_answer: "שהיא במגמת ירידה לכל אורך התחום"
    }
];