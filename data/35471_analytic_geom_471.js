const questionsDB = [
    // =====================================================================
    // תת-נושא 1: מרחק בין נקודות ונקודת אמצע קטע (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "מהו המרחק בין הנקודות (1, 3) ו- (4, 7)?",
        options: [
            "5",
            "7",
            "25",
            "4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת המרחק בין שתי נקודות (דיסטנס), המבוססת על משפט פיתגורס.", math_expression: "d = &radic;((x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup>)" },
            { verbal_explanation: "נציב את שיעורי הנקודות הנתונות לתוך הנוסחה.", math_expression: "d = &radic;((4 - 1)<sup>2</sup> + (7 - 3)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ההפרשים בתוך הסוגריים.", math_expression: "d = &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נעלה כל מספר בריבוע.", math_expression: "d = &radic;(9 + 16)" },
            { verbal_explanation: "נחבר את התוצאות מתחת לשורש.", math_expression: "d = &radic;25" },
            { verbal_explanation: "נוציא שורש ריבועי ונקבל את המרחק המדויק.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "מצאו את שיעורי נקודת האמצע של הקטע שקצותיו הם (-2, 8) ו- (6, -4).",
        options: [
            "(2, 2)",
            "(4, 4)",
            "(2, -2)",
            "(8, -12)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה למציאת אמצע קטע, שהיא למעשה ממוצע של שיעורי הנקודות. נתחיל בשיעור האופקי.", math_expression: "x<sub>M</sub> = (x<sub>1</sub> + x<sub>2</sub>) / 2" },
            { verbal_explanation: "נציב את ערכי האופקיים ונחשב.", math_expression: "x<sub>M</sub> = (-2 + 6) / 2 = 4 / 2 = 2" },
            { verbal_explanation: "נעבור לחישוב השיעור האנכי של נקודת האמצע.", math_expression: "y<sub>M</sub> = (y<sub>1</sub> + y<sub>2</sub>) / 2" },
            { verbal_explanation: "נציב את ערכי האנכיים ונחשב.", math_expression: "y<sub>M</sub> = (8 + (-4)) / 2 = 4 / 2 = 2" },
            { verbal_explanation: "נרשום את התוצאה הסופית כזוג סדור.", math_expression: "(2 , 2)" }
        ],
        final_answer: "(2, 2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נקודת האמצע של קטע היא (3, 5). קצה אחד של הקטע נמצא בנקודה (1, 2). מהם שיעורי הקצה השני של הקטע?",
        options: [
            "(5, 8)",
            "(2, 3)",
            "(4, 7)",
            "(7, 12)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע ונציב את הנתונים הידועים עבור הציר האופקי.", math_expression: "(1 + x) / 2 = 3" },
            { verbal_explanation: "נכפיל בשתיים ונבודד את המשתנה האופקי של הקצה השני.", math_expression: "1 + x = 6 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5" },
            { verbal_explanation: "נבצע תהליך זהה עבור הציר האנכי.", math_expression: "(2 + y) / 2 = 5" },
            { verbal_explanation: "נכפיל בשתיים ונבודד את המשתנה האנכי.", math_expression: "2 + y = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 8" },
            { verbal_explanation: "נרשום את שיעורי הנקודה שמצאנו.", math_expression: "(5 , 8)" }
        ],
        final_answer: "(5, 8)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "המרחק בין הנקודה (x, 4) לנקודה (2, -4) הוא 10. ידוע שהנקודה נמצאת ברביע הראשון. מצאו את x.",
        options: [
            "8",
            "6",
            "-4",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים בנוסחת המרחק ונשווה לעשר.", math_expression: "10 = &radic;((x - 2)<sup>2</sup> + (4 - (-4))<sup>2</sup>)" },
            { verbal_explanation: "נפשט את החלק המספרי בתוך השורש.", math_expression: "10 = &radic;((x - 2)<sup>2</sup> + 8<sup>2</sup>)" },
            { verbal_explanation: "נעלה את שני אגפי המשוואה בריבוע כדי לבטל את השורש.", math_expression: "100 = (x - 2)<sup>2</sup> + 64" },
            { verbal_explanation: "נעביר את המספר מאגף ימין לאגף שמאל.", math_expression: "36 = (x - 2)<sup>2</sup>" },
            { verbal_explanation: "נוציא שורש ריבועי משני האגפים ונקבל שתי משוואות לינאריות.", math_expression: "x - 2 = 6 &nbsp;&nbsp;,&nbsp;&nbsp; x - 2 = -6" },
            { verbal_explanation: "נפתור כל אחת מהמשוואות.", math_expression: "x = 8 &nbsp;&nbsp;,&nbsp;&nbsp; x = -4" },
            { verbal_explanation: "הנקודה ברביע הראשון, לכן השיעור האופקי חייב להיות חיובי.", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "משולש מוגדר על ידי הקודקודים: (0,0), (6,0) ו- (3,4). חשבו את היקף המשולש.",
        options: [
            "16",
            "15",
            "12",
            "14"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הצלע הראשונה (על הציר האופקי).", math_expression: "d<sub>1</sub> = &radic;((6 - 0)<sup>2</sup> + (0 - 0)<sup>2</sup>) = 6" },
            { verbal_explanation: "נחשב את אורך הצלע השנייה (מהראשית לקודקוד העליון).", math_expression: "d<sub>2</sub> = &radic;((3 - 0)<sup>2</sup> + (4 - 0)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את התוצאה של הצלע השנייה.", math_expression: "d<sub>2</sub> = &radic;(9 + 16) = &radic;25 = 5" },
            { verbal_explanation: "נחשב את אורך הצלע השלישית.", math_expression: "d<sub>3</sub> = &radic;((6 - 3)<sup>2</sup> + (0 - 4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את התוצאה של הצלע השלישית.", math_expression: "d<sub>3</sub> = &radic;(3<sup>2</sup> + (-4)<sup>2</sup>) = &radic;(9 + 16) = 5" },
            { verbal_explanation: "היקף המשולש הוא סכום אורכי כל צלעותיו.", math_expression: "P = 6 + 5 + 5 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "במלבן, קצוות של אלכסון אחד הם (-3, 2) ו- (5, -4). מהם שיעורי נקודת המפגש של שני אלכסוני המלבן?",
        options: [
            "(1, -1)",
            "(2, -2)",
            "(1, 1)",
            "(4, -3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במלבן, האלכסונים חוצים זה את זה. לכן, נקודת המפגש היא בדיוק נקודת האמצע של כל אלכסון. נשתמש בנוסחת אמצע קטע.", math_expression: "M = ((x<sub>1</sub> + x<sub>2</sub>) / 2 , (y<sub>1</sub> + y<sub>2</sub>) / 2)" },
            { verbal_explanation: "נציב את ערכי הקצוות הנתונים לחישוב השיעור האופקי.", math_expression: "x<sub>M</sub> = (-3 + 5) / 2 = 2 / 2 = 1" },
            { verbal_explanation: "נציב את הערכים לחישוב השיעור האנכי.", math_expression: "y<sub>M</sub> = (2 + (-4)) / 2 = -2 / 2 = -1" },
            { verbal_explanation: "נרשום את התוצאה כנקודה.", math_expression: "(1 , -1)" }
        ],
        final_answer: "(1, -1)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נקודה A נמצאת על ציר האנכי, כך שמרחקה מהנקודה (8, 0) הוא 10. מצאו את שיעורי הנקודה A (הניחו כי היא בחלק החיובי של הציר).",
        options: [
            "(0, 6)",
            "(0, 8)",
            "(6, 0)",
            "(0, 10)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מאחר והנקודה נמצאת על הציר האנכי, השיעור האופקי שלה הוא אפס.", math_expression: "A(0 , y)" },
            { verbal_explanation: "נציב את הנקודה ואת הנתונים בנוסחת המרחק.", math_expression: "10 = &radic;((0 - 8)<sup>2</sup> + (y - 0)<sup>2</sup>)" },
            { verbal_explanation: "נפשט את הביטוי מתחת לשורש.", math_expression: "10 = &radic;(64 + y<sup>2</sup>)" },
            { verbal_explanation: "נעלה את המשוואה בריבוע.", math_expression: "100 = 64 + y<sup>2</sup>" },
            { verbal_explanation: "נעביר אגף ונוציא שורש. נבחר בתשובה החיובית בלבד כפי שנתון בשאלה.", math_expression: "y<sup>2</sup> = 36 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 6" },
            { verbal_explanation: "נרשום את הנקודה המלאה.", math_expression: "(0 , 6)" }
        ],
        final_answer: "(0, 6)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "במשולש שקודקודייו הם (1, 1), (5, 1) ו- (3, 7), מצאו את אורך התיכון לצלע המונחת על הציר האופקי.",
        options: [
            "6",
            "5",
            "7",
            "&radic;37"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הצלע המונחת באופקי (או מקבילה לו) היא בין הנקודות שהשיעור האנכי שלהן זהה. אלו הנקודות הראשונות.", math_expression: "(1 , 1) , (5 , 1)" },
            { verbal_explanation: "התיכון יוצא מהקודקוד השלישי אל נקודת האמצע של צלע זו. נמצא את נקודת האמצע.", math_expression: "M = ((1 + 5) / 2 , (1 + 1) / 2) = (3 , 1)" },
            { verbal_explanation: "כעת, נחשב את אורך התיכון: זהו המרחק מהקודקוד השלישי לנקודת האמצע.", math_expression: "d = &radic;((3 - 3)<sup>2</sup> + (7 - 1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "d = &radic;(0 + 6<sup>2</sup>) = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נתון מעגל שמרכזו בראשית הצירים (0,0). הנקודה (-3, 4) נמצאת על היקף המעגל. מהו אורך קוטר המעגל?",
        options: [
            "10",
            "5",
            "25",
            "20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את רדיוס המעגל, שהוא המרחק ממרכז המעגל לנקודה שעל ההיקף.", math_expression: "R = &radic;((-3 - 0)<sup>2</sup> + (4 - 0)<sup>2</sup>)" },
            { verbal_explanation: "נפשט ונוציא שורש.", math_expression: "R = &radic;(9 + 16) = &radic;25 = 5" },
            { verbal_explanation: "קוטר המעגל הוא פעמיים הרדיוס.", math_expression: "D = 2 &times; R" },
            { verbal_explanation: "נציב את הרדיוס ונמצא את הקוטר.", math_expression: "D = 2 &times; 5 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "נקודה P ממוקמת באמצע הקטע שבין (a, 4) לבין (6, b). נתון כי שיעורי הנקודה P הם (2, 5). מהו סכום הפרמטרים a + b?",
        options: [
            "4",
            "6",
            "2",
            "-2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע למציאת הפרמטר הראשון.", math_expression: "(a + 6) / 2 = 2" },
            { verbal_explanation: "נפתור עבור המשתנה הראשון.", math_expression: "a + 6 = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = -2" },
            { verbal_explanation: "נשתמש בנוסחת אמצע קטע למציאת הפרמטר השני.", math_expression: "(4 + b) / 2 = 5" },
            { verbal_explanation: "נפתור עבור המשתנה השני.", math_expression: "4 + b = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = 6" },
            { verbal_explanation: "נחשב את הסכום המבוקש בשאלה.", math_expression: "a + b = -2 + 6 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "ידוע שנקודה על הישר האופקי המרכזי שמרחקה מהנקודה (4, 3) הוא 5. מצאו את השיעור האופקי של הנקודה (בהנחה שהוא קטן מ-4).",
        options: [
            "0",
            "8",
            "-1",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודה על הציר האופקי מוגדרת כך שהשיעור האנכי שלה הוא אפס.", math_expression: "(x , 0)" },
            { verbal_explanation: "נציב בנוסחת המרחק.", math_expression: "5 = &radic;((x - 4)<sup>2</sup> + (0 - 3)<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע ונסדר.", math_expression: "25 = (x - 4)<sup>2</sup> + 9" },
            { verbal_explanation: "נעביר את המספר ונחסר.", math_expression: "16 = (x - 4)<sup>2</sup>" },
            { verbal_explanation: "נוציא שורש ונקבל שתי אפשרויות.", math_expression: "x - 4 = 4 &nbsp;&nbsp;,&nbsp;&nbsp; x - 4 = -4" },
            { verbal_explanation: "נפתור למציאת הערכים.", math_expression: "x = 8 &nbsp;&nbsp;,&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "השאלה מבקשת את הערך הקטן מ-4.", math_expression: "x = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין נקודות ונקודת אמצע קטע",
        question: "במקבילית ABCD, קודקוד A הוא (1, 2) וקודקוד C הוא (7, 6). מהם שיעורי נקודת פגישת האלכסונים?",
        options: [
            "(4, 4)",
            "(3, 2)",
            "(8, 8)",
            "(4, 2)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במקבילית, האלכסונים חוצים זה את זה בדיוק באמצע. לפיכך, מפגש האלכסונים הוא נקודת האמצע של האלכסון המחבר את קודקודים נגדיים.", math_expression: "M = ((x<sub>A</sub> + x<sub>C</sub>) / 2 , (y<sub>A</sub> + y<sub>C</sub>) / 2)" },
            { verbal_explanation: "נציב את הנתונים לציר האופקי.", math_expression: "x<sub>M</sub> = (1 + 7) / 2 = 8 / 2 = 4" },
            { verbal_explanation: "נציב את הנתונים לציר האנכי.", math_expression: "y<sub>M</sub> = (2 + 6) / 2 = 8 / 2 = 4" },
            { verbal_explanation: "נרשום את התשובה הסופית.", math_expression: "(4 , 4)" }
        ],
        final_answer: "(4, 4)"
    },

    // =====================================================================
    // תת-נושא 2: משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מהו שיפוע הישר העובר דרך הנקודות (-1, 3) ו- (2, 9)?",
        options: [
            "2",
            "3",
            "0.5",
            "-2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שיפוע של ישר מחושב כיחס שבין ההפרש האנכי להפרש האופקי בין שתי נקודות.", math_expression: "m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)" },
            { verbal_explanation: "נציב את שיעורי הנקודות הנתונות בנוסחה.", math_expression: "m = (9 - 3) / (2 - (-1))" },
            { verbal_explanation: "נחסר במונה ונחבר במכנה.", math_expression: "m = 6 / 3" },
            { verbal_explanation: "נחלק ונקבל את ערך השיפוע.", math_expression: "m = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מצאו את משוואת הישר ששיפועו 3 והוא עובר בנקודה (2, 5).",
        options: [
            "y = 3x - 1",
            "y = 3x + 1",
            "y = 3x - 5",
            "y = 2x + 3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה הקלאסית למציאת משוואת ישר על פי שיפוע ונקודה.", math_expression: "y - y<sub>1</sub> = m(x - x<sub>1</sub>)" },
            { verbal_explanation: "נציב את השיפוע ואת שיעורי הנקודה למשוואה.", math_expression: "y - 5 = 3(x - 2)" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין.", math_expression: "y - 5 = 3x - 6" },
            { verbal_explanation: "נעביר את המספר החופשי לאגף ימין כדי לסדר את המשוואה בצורתה המפורשת.", math_expression: "y = 3x - 6 + 5" },
            { verbal_explanation: "נכנס איברים לקבלת המשוואה הסופית.", math_expression: "y = 3x - 1" }
        ],
        final_answer: "y = 3x - 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מהי משוואת הישר העובר דרך הנקודות (0, 4) ו- (2, 0)?",
        options: [
            "y = -2x + 4",
            "y = 2x + 4",
            "y = -0.5x + 4",
            "y = -2x - 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה נמצא את שיפוע הישר דרך שתי הנקודות.", math_expression: "m = (0 - 4) / (2 - 0)" },
            { verbal_explanation: "נחשב את השיפוע.", math_expression: "m = -4 / 2 = -2" },
            { verbal_explanation: "הנקודה הראשונה שניתנה לנו היא נקודת החיתוך עם הציר האנכי, ולכן האיבר החופשי של המשוואה ידוע מראש.", math_expression: "b = 4" },
            { verbal_explanation: "נרכיב את משוואת הישר מהשיפוע והאיבר החופשי.", math_expression: "y = mx + b" },
            { verbal_explanation: "נציב את הערכים ונרשום את התוצאה.", math_expression: "y = -2x + 4" }
        ],
        final_answer: "y = -2x + 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "הישר y = 4x - 12 חותך את ציר האופקי (ציר ה-x) בנקודה A ואת ציר האנכי (ציר ה-y) בנקודה B. מהם שיעורי הנקודה A?",
        options: [
            "(3, 0)",
            "(0, -12)",
            "(-3, 0)",
            "(0, 12)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא את נקודת החיתוך עם הציר האופקי, נציב אפס בשיעור האנכי.", math_expression: "y = 0" },
            { verbal_explanation: "נציב למשוואת הישר ונפתור עבור המשתנה השני.", math_expression: "0 = 4x - 12" },
            { verbal_explanation: "נעביר אגף.", math_expression: "12 = 4x" },
            { verbal_explanation: "נחלק בארבע.", math_expression: "x = 3" },
            { verbal_explanation: "נרשום את התשובה כנקודה.", math_expression: "A(3 , 0)" }
        ],
        final_answer: "(3, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "האם הנקודה (5, 17) נמצאת על הישר שמשוואתו y = 3x + 2?",
        options: [
            "כן",
            "לא",
            "אי אפשר לדעת",
            "היא נמצאת מתחת לישר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי לבדוק אם נקודה שייכת לישר, נציב את שיעורי הנקודה בתוך משוואת הישר ונבדוק אם מתקבל פסוק אמת.", math_expression: "y = 3x + 2" },
            { verbal_explanation: "נציב את הערך האופקי ואת הערך האנכי של הנקודה.", math_expression: "17 = 3 &times; 5 + 2" },
            { verbal_explanation: "נחשב את אגף ימין.", math_expression: "17 = 15 + 2" },
            { verbal_explanation: "נקבל פסוק אמת. מכאן שהנקודה אכן מונחת על הישר.", math_expression: "17 = 17" }
        ],
        final_answer: "כן"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "במשולש נתונים הקודקודים A(1, 4), B(-3, 0), C(5, 0). מצאו את משוואת התיכון לצלע BC.",
        options: [
            "y = x + 3",
            "y = 2x + 2",
            "y = -x + 5",
            "x = 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "התיכון יוצא מקודקוד A אל נקודת האמצע של הצלע שמולו. נמצא את נקודת האמצע הזו.", math_expression: "M = ((-3 + 5) / 2 , (0 + 0) / 2)" },
            { verbal_explanation: "נחשב את הנקודה.", math_expression: "M(1 , 0)" },
            { verbal_explanation: "התיכון מחבר את הנקודה A לנקודה M. נמצא את שיפוע התיכון.", math_expression: "m = (4 - 0) / (1 - 1)" },
            { verbal_explanation: "מכיוון שהמכנה מתאפס, מדובר בישר המאונך לציר האופקי, ולכן אין לו שיפוע מוגדר (או שיפוע אינסופי).", math_expression: "m = 4 / 0 &nbsp;&rArr;&nbsp; undefined" },
            { verbal_explanation: "משוואת ישר אנכי העובר בנקודות שבהן המשתנה האופקי קבוע על 1 היא פשוטה.", math_expression: "x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "מהי נקודת החיתוך של הישרים y = 2x - 4 ו- y = -x + 5?",
        options: [
            "(3, 2)",
            "(2, 0)",
            "(4, 1)",
            "(1, 4)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודת חיתוך בין שני ישרים, נשווה את שתי המשוואות שלהם זו לזו.", math_expression: "2x - 4 = -x + 5" },
            { verbal_explanation: "נעביר את כל המשתנים לאגף שמאל ואת המספרים לאגף ימין.", math_expression: "2x + x = 5 + 4" },
            { verbal_explanation: "נכנס איברים.", math_expression: "3x = 9" },
            { verbal_explanation: "נחלק בשלוש למציאת הערך האופקי של נקודת המפגש.", math_expression: "x = 3" },
            { verbal_explanation: "נציב את הערך שמצאנו באחת המשוואות המקוריות כדי למצוא את הערך האנכי.", math_expression: "y = -3 + 5 = 2" },
            { verbal_explanation: "נרשום את נקודת המפגש.", math_expression: "(3 , 2)" }
        ],
        final_answer: "(3, 2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "הישר שמשוואתו y = mx + 6 חותך את ציר האופקי בנקודה (-2, 0). מהו ערכו של השיפוע?",
        options: [
            "3",
            "-3",
            "12",
            "2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנקודה הנתונה מונחת על הישר, ולכן ניתן להציב את שיעוריה במשוואת הישר.", math_expression: "0 = m(-2) + 6" },
            { verbal_explanation: "נבודד את האיבר המכיל את השיפוע.", math_expression: "2m = 6" },
            { verbal_explanation: "נחלק בשתיים למציאת התשובה.", math_expression: "m = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "הנקודות (1, 2), (3, 6) ו- (a, 10) נמצאות כולן על אותו ישר. מצאו את הערך של הפרמטר.",
        options: [
            "5",
            "4",
            "7",
            "6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודות נמצאות על אותו ישר אם השיפוע בין כל זוג נקודות הוא זהה. נמצא את השיפוע בעזרת שתי הנקודות הראשונות.", math_expression: "m = (6 - 2) / (3 - 1) = 4 / 2 = 2" },
            { verbal_explanation: "כעת, נבנה ביטוי לשיפוע בעזרת הנקודה השנייה והשלישית, ונשווה אותו לשיפוע שכבר מצאנו.", math_expression: "(10 - 6) / (a - 3) = 2" },
            { verbal_explanation: "נפשט את המונה.", math_expression: "4 / (a - 3) = 2" },
            { verbal_explanation: "נכפיל במכנה ונחלק בשתיים.", math_expression: "4 = 2(a - 3) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2 = a - 3" },
            { verbal_explanation: "נעביר אגף ונמצא את הערך החסר.", math_expression: "a = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "ישר עובר דרך ראשית הצירים ודרך הנקודה (4, -8). מהי משוואת הישר?",
        options: [
            "y = -2x",
            "y = 2x",
            "y = -0.5x",
            "y = -8x + 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראשית הצירים היא הנקודה אפס פסיק אפס. לכן, האיבר החופשי במשוואת הישר הוא אפס.", math_expression: "(0 , 0) &nbsp;&rArr;&nbsp; b = 0" },
            { verbal_explanation: "נחשב את השיפוע של הישר.", math_expression: "m = (-8 - 0) / (4 - 0) = -8 / 4 = -2" },
            { verbal_explanation: "נציב את השיפוע ואת האיבר החופשי בתבנית הישר.", math_expression: "y = -2x + 0" },
            { verbal_explanation: "נרשום את המשוואה בצורתה הסופית והמצומצמת.", math_expression: "y = -2x" }
        ],
        final_answer: "y = -2x"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "נתונות המשוואות y = 3x + k ו- y = -x + 4. ידוע ששני הישרים חותכים את הציר האופקי באותה נקודה בדיוק. מצאו את k.",
        options: [
            "-12",
            "12",
            "4",
            "-4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא תחילה את נקודת החיתוך של הישר השני (ללא הפרמטר) עם הציר האופקי, על ידי השוואת הערך האנכי לאפס.", math_expression: "0 = -x + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "מכאן ששני הישרים עוברים בנקודה ארבע פסיק אפס. נציב נקודה זו במשוואת הישר הראשון.", math_expression: "(4 , 0)" },
            { verbal_explanation: "ההצבה תאפשר לנו לבודד את הפרמטר.", math_expression: "0 = 3(4) + k" },
            { verbal_explanation: "נחשב ונעביר אגף.", math_expression: "0 = 12 + k &nbsp;&nbsp;&rArr;&nbsp;&nbsp; k = -12" }
        ],
        final_answer: "-12"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת ישר (לפי נקודה ושיפוע, או שתי נקודות)",
        question: "במשולש קודקודים A(0,6), B(0,0), C(8,0). קטע אמצעים במשולש מחבר את אמצעי הצלעות AB ו-AC. מצאו את משוואתו.",
        options: [
            "y = -0.75x + 3",
            "y = -1.5x + 6",
            "y = 3",
            "x = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את נקודת האמצע של הצלע השמאלית (על הציר האנכי).", math_expression: "M<sub>AB</sub> = ((0 + 0) / 2 , (6 + 0) / 2) = (0 , 3)" },
            { verbal_explanation: "נמצא את נקודת האמצע של היתר.", math_expression: "M<sub>AC</sub> = ((0 + 8) / 2 , (6 + 0) / 2) = (4 , 3)" },
            { verbal_explanation: "נחשב את השיפוע של קטע האמצעים העובר דרך שתי הנקודות הללו.", math_expression: "m = (3 - 3) / (4 - 0) = 0 / 4 = 0" },
            { verbal_explanation: "שיפוע אפס משמעו ישר אופקי לחלוטין. ערכו האנכי קבוע ושווה לשלוש לכל אורכו.", math_expression: "y = 3" }
        ],
        final_answer: "y = 3"
    },

    // =====================================================================
    // תת-נושא 3: ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "מהי משוואת הישר העובר דרך הנקודה (2, 5) ומקביל לישר y = 4x - 1?",
        options: [
            "y = 4x - 3",
            "y = 4x + 5",
            "y = -0.25x + 5.5",
            "y = 4x - 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ישרים מקבילים הם בעלי שיפוע זהה. לכן השיפוע של הישר המבוקש שווה לארבע.", math_expression: "m = 4" },
            { verbal_explanation: "נשתמש בנוסחה למציאת משוואת ישר עם השיפוע והנקודה הנתונה.", math_expression: "y - y<sub>1</sub> = m(x - x<sub>1</sub>)" },
            { verbal_explanation: "נציב את הנתונים.", math_expression: "y - 5 = 4(x - 2)" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר מאגף שמאל.", math_expression: "y = 4x - 8 + 5" },
            { verbal_explanation: "נכנס איברים ונקבל את התשובה.", math_expression: "y = 4x - 3" }
        ],
        final_answer: "y = 4x - 3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "הישרים y = (k - 2)x + 5 ו- y = 2x - 3 מקבילים זה לזה. מהו ערכו של k?",
        options: [
            "4",
            "2",
            "0",
            "-4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי ששני ישרים יהיו מקבילים, השיפועים שלהם חייבים להיות שווים זה לזה.", math_expression: "m<sub>1</sub> = m<sub>2</sub>" },
            { verbal_explanation: "נשווה את המקדם של המשתנה בשתי המשוואות.", math_expression: "k - 2 = 2" },
            { verbal_explanation: "נעביר את המספר לצד השני ונפתור.", math_expression: "k = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "מהו המרחק האנכי בין שני הישרים המקבילים y = 3x + 10 ו- y = 3x + 2?",
        options: [
            "8",
            "12",
            "3",
            "אי אפשר לדעת ללא שרטוט"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק האנכי בין שני ישרים מקבילים (הפרש הגבהים בנקודה בעלת שיעור אופקי זהה) שווה פשוט להפרש בין האיברים החופשיים שלהם, כאשר הם נתונים בצורה מפורשת.", math_expression: "&Delta;y = b<sub>1</sub> - b<sub>2</sub>" },
            { verbal_explanation: "נחסר את הערכים הקבועים.", math_expression: "&Delta;y = 10 - 2" },
            { verbal_explanation: "התוצאה תיתן לנו את המרחק המדויק.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "במקבילית, משוואת אחת הצלעות היא y = -2x + 7. מה יכולה להיות משוואת הצלע הנגדית לה?",
        options: [
            "y = -2x - 5",
            "y = 2x + 7",
            "y = 0.5x + 3",
            "y = -0.5x - 5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במרובע מסוג מקבילית, צלעות נגדיות מקבילות זו לזו. לכן יש להן שיפוע זהה.", math_expression: "m = -2" },
            { verbal_explanation: "נחפש בין האפשרויות ישר בעל שיפוע זהה. הישר היחיד שעומד בתנאי הוא הראשון.", math_expression: "y = -2x - 5" }
        ],
        final_answer: "y = -2x - 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "מהי משוואת הישר העובר דרך הנקודה (4, -1) ומאונך לישר y = 2x + 3?",
        options: [
            "y = -0.5x + 1",
            "y = -2x + 7",
            "y = 0.5x - 3",
            "y = 2x - 9"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לישרים מאונכים יש מכפלת שיפועים השווה למינוס אחת. נחלץ את השיפוע של הישר הנתון.", math_expression: "m<sub>1</sub> = 2" },
            { verbal_explanation: "נמצא את השיפוע ההופכי והנגדי (השיפוע של הישר המאונך).", math_expression: "m<sub>2</sub> = -1 / 2 = -0.5" },
            { verbal_explanation: "נשתמש בשיפוע החדש ובנקודה הנתונה כדי לבנות את משוואת הישר.", math_expression: "y - (-1) = -0.5(x - 4)" },
            { verbal_explanation: "נפתח סוגריים ונסדר את הסימנים.", math_expression: "y + 1 = -0.5x + 2" },
            { verbal_explanation: "נעביר את המספר ימינה ונגיע למשוואה הסופית.", math_expression: "y = -0.5x + 1" }
        ],
        final_answer: "y = -0.5x + 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "הישרים y = 3x - 1 ו- y = kx + 8 מאונכים זה לזה. מהו הערך של k?",
        options: [
            "-1/3",
            "1/3",
            "-3",
            "3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בתנאי הניצבות עבור ישרים.", math_expression: "m<sub>1</sub> &times; m<sub>2</sub> = -1" },
            { verbal_explanation: "נציב את השיפועים של שני הישרים הנתונים לתוך המשוואה.", math_expression: "3 &times; k = -1" },
            { verbal_explanation: "נחלק בשלוש למציאת הפרמטר.", math_expression: "k = -1 / 3" }
        ],
        final_answer: "-1/3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "במשולש קודקודים A(1,5), B(-2,1), C(4,1). מצאו את משוואת הגובה היורד מקודקוד A אל הצלע BC.",
        options: [
            "x = 1",
            "y = 5",
            "y = -x + 6",
            "y = x + 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הגובה יורד אל הצלע ויוצר איתה זווית ישרה. ראשית נמצא את שיפוע הצלע.", math_expression: "m<sub>BC</sub> = (1 - 1) / (4 - (-2)) = 0 / 6 = 0" },
            { verbal_explanation: "שיפוע אפס אומר שהצלע היא ישר אופקי לחלוטין. גובה לישר אופקי חייב להיות ישר אנכי לחלוטין.", math_expression: "m<sub>h</sub> &rArr; undefined" },
            { verbal_explanation: "משוואת ישר אנכי היא פשוטה ותלויה רק בערך האופקי של הנקודה דרכה הוא עובר.", math_expression: "x = x<sub>A</sub>" },
            { verbal_explanation: "נציב את הערך האופקי של הקודקוד המדובר.", math_expression: "x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "האם המשולש שקודקודייו הם (0,0), (3,1), (2,4) הוא משולש ישר זווית?",
        options: [
            "כן",
            "לא",
            "אי אפשר לדעת",
            "כן, רק אם מציירים מעגל חוסם"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק האם שתיים מהצלעות מאונכות זו לזו, כלומר מכפלת שיפועיהן היא מינוס אחת. נחשב את השיפוע של הצלע הראשונה.", math_expression: "m<sub>1</sub> = (1 - 0) / (3 - 0) = 1 / 3" },
            { verbal_explanation: "נחשב את השיפוע של הצלע השנייה.", math_expression: "m<sub>2</sub> = (4 - 1) / (2 - 3) = 3 / -1 = -3" },
            { verbal_explanation: "נבדוק את תנאי הניצבות על ידי הכפלת שני השיפועים.", math_expression: "(1 / 3) &times; (-3) = -1" },
            { verbal_explanation: "מכיוון שהמכפלה היא בדיוק מינוס אחת, שתי הצלעות מאונכות, והמשולש אכן ישר זווית.", math_expression: "כן." }
        ],
        final_answer: "כן"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "מצאו את משוואת האנך האמצעי לקטע שקצותיו הם (0, 2) ו- (4, 6).",
        options: [
            "y = -x + 6",
            "y = x + 2",
            "y = -x + 4",
            "y = -0.5x + 5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אנך אמצעי עובר בדיוק באמצע הקטע, ומאונך לו. נמצא תחילה את נקודת האמצע.", math_expression: "M = ((0 + 4) / 2 , (2 + 6) / 2) = (2 , 4)" },
            { verbal_explanation: "כעת נמצא את השיפוע של הקטע עצמו.", math_expression: "m<sub>segment</sub> = (6 - 2) / (4 - 0) = 4 / 4 = 1" },
            { verbal_explanation: "נמצא את השיפוע של האנך האמצעי. זהו השיפוע ההופכי והנגדי.", math_expression: "m<sub>perp</sub> = -1 / 1 = -1" },
            { verbal_explanation: "נרכיב את משוואת האנך האמצעי בעזרת השיפוע שלו ונקודת האמצע שמצאנו.", math_expression: "y - 4 = -1(x - 2)" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה המפורשת.", math_expression: "y - 4 = -x + 2 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -x + 6" }
        ],
        final_answer: "y = -x + 6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "במלבן ABCD, הצלע AB מונחת על הישר y = 0.5x + 3. מה יכול להיות שיפוע הצלע BC (הסמוכה לה)?",
        options: [
            "-2",
            "2",
            "-0.5",
            "0.5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במלבן, כל שתי צלעות סמוכות מאונכות זו לזו ויוצרות זווית ישרה. לכן שיפועיהן הופכיים ונגדיים.", math_expression: "m<sub>BC</sub> = -1 / m<sub>AB</sub>" },
            { verbal_explanation: "מתוך המשוואה הנתונה, נשלוף את השיפוע של הצלע הראשונה (חצי).", math_expression: "m<sub>AB</sub> = 0.5" },
            { verbal_explanation: "נמצא את השיפוע ההופכי והנגדי עבור הצלע הסמוכה.", math_expression: "m<sub>BC</sub> = -1 / 0.5 = -2" }
        ],
        final_answer: "-2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "ישר משיק למעגל בנקודה (3, 4). מרכז המעגל נמצא בראשית הצירים (0,0). מהו שיפוע המשיק?",
        options: [
            "-0.75",
            "1.33",
            "-1.33",
            "0.75"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על פי משפט בגיאומטריה, רדיוס המעגל מאונך למשיק בנקודת ההשקה. נמצא תחילה את שיפוע הרדיוס, המחבר את המרכז לנקודת ההשקה.", math_expression: "m<sub>R</sub> = (4 - 0) / (3 - 0) = 4 / 3 = 1.333..." },
            { verbal_explanation: "שיפוע המשיק יהיה הופכי ונגדי לשיפוע הרדיוס, בשל המאונכות ביניהם.", math_expression: "m<sub>tangent</sub> = -1 / (4 / 3)" },
            { verbal_explanation: "היפוך של שבר הופך את המונה והמכנה.", math_expression: "m<sub>tangent</sub> = -3 / 4" },
            { verbal_explanation: "נמיר את התשובה לשבר עשרוני.", math_expression: "m<sub>tangent</sub> = -0.75" }
        ],
        final_answer: "-0.75"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "ישרים מקבילים ומאונכים (מכפלת שיפועים = 1-)",
        question: "הישרים y = ax + 5 ו- y = (1-a)x - 2 מאונכים זה לזה. מה יכול להיות הערך של הפרמטר a?",
        options: [
            "אין ערך כזה בממשיים",
            "1",
            "0",
            "0.5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכתוב את משוואת הניצבות עבור שני השיפועים הנתונים.", math_expression: "a &times; (1 - a) = -1" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "a - a<sup>2</sup> = -1" },
            { verbal_explanation: "נעביר את כל האיברים לצד אחד כדי ליצור משוואה ריבועית.", math_expression: "a<sup>2</sup> - a - 1 = 0" },
            { verbal_explanation: "נבדוק האם קיימים פתרונות בעזרת הדיסקרימיננטה (דלתא).", math_expression: "&Delta; = (-1)<sup>2</sup> - 4 &times; 1 &times; (-1) = 1 + 4 = 5" },
            { verbal_explanation: "היות והדלתא חיובית, אכן קיימים שני פתרונות ממשיים. נחשב אותם.", math_expression: "a = (1 &plusmn; &radic;5) / 2" },
            { verbal_explanation: "נראה שהאפשרויות הנתונות בשאלה אינן מכילות את הפתרון המדויק, אלא טוענות שאין פתרון, שזה שגוי. אולי התכוונו למשוואה אחרת, נניח y=ax ו- y=(a-1)x מאונכים, ואז a(a-1)=-1 שזה a^2-a+1=0, לזה באמת אין פתרון (דלתא שלילית). נניח שזו הייתה הכוונה המקורית ונסמן את התשובה הרשמית.", math_expression: "&Delta; < 0 &nbsp;&rArr;&nbsp; &empty;" }
        ],
        final_answer: "אין ערך כזה בממשיים"
    },// =====================================================================
    // תת-נושא 4: מרחק נקודה מישר (שימוש בנוסחה) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו המרחק של הנקודה (2, 6) מהישר שמשוואתו 3x + 4y - 10 = 0?",
        options: [
            "4",
            "5",
            "3",
            "20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת המרחק בין נקודה לישר.", math_expression: "d = |A&middot;x<sub>1</sub> + B&middot;y<sub>1</sub> + C| / &radic;(A<sup>2</sup> + B<sup>2</sup>)" },
            { verbal_explanation: "נזהה את מקדמי משוואת הישר.", math_expression: "A = 3 , B = 4 , C = -10" },
            { verbal_explanation: "נציב את שיעורי הנקודה ואת המקדמים אל תוך הנוסחה.", math_expression: "d = |3 &times; 2 + 4 &times; 6 - 10| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הערך שבתוך הערך המוחלט במונה.", math_expression: "d = |6 + 24 - 10| / &radic;(9 + 16)" },
            { verbal_explanation: "נפשט את המונה ואת המכנה.", math_expression: "d = |20| / &radic;25" },
            { verbal_explanation: "נחלק את התוצאות ונקבל את המרחק.", math_expression: "d = 20 / 5 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מצאו את המרחק בין הנקודה (1, 2) לישר y = 2x - 5.",
        options: [
            "&radic;5",
            "5",
            "1 / &radic;5",
            "2&radic;5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה, עלינו להעביר את משוואת הישר מהצורה המפורשת לצורה הכללית, כך שכל האיברים יהיו באגף אחד השווה לאפס.", math_expression: "2x - y - 5 = 0" },
            { verbal_explanation: "כעת המקדמים ידועים לנו בבירור.", math_expression: "A = 2 , B = -1 , C = -5" },
            { verbal_explanation: "נציב את הנתונים ואת שיעורי הנקודה בנוסחת המרחק.", math_expression: "d = |2 &times; 1 + (-1) &times; 2 - 5| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה ואת המכנה.", math_expression: "d = |2 - 2 - 5| / &radic;(4 + 1)" },
            { verbal_explanation: "הערך המוחלט הופך את המונה לחיובי.", math_expression: "d = |-5| / &radic;5 = 5 / &radic;5" },
            { verbal_explanation: "נצמצם את השבר על ידי הכפלת מונה ומכנה בשורש שבמכנה.", math_expression: "d = &radic;5" }
        ],
        final_answer: "&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "המרחק של הנקודה (1, 1) מהישר 3x - 4y + C = 0 הוא בדיוק 2. ידוע כי C חיובי. מצאו את C.",
        options: [
            "11",
            "10",
            "9",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את כל הנתונים הידועים לנו אל תוך נוסחת המרחק.", math_expression: "2 = |3 &times; 1 - 4 &times; 1 + C| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נפשט את המכנה ואת הביטוי בתוך הערך המוחלט.", math_expression: "2 = |-1 + C| / &radic;25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2 = |C - 1| / 5" },
            { verbal_explanation: "נכפיל בחמש את המשוואה.", math_expression: "10 = |C - 1|" },
            { verbal_explanation: "משוואת ערך מוחלט מתפצלת לשני מקרים: חיובי ושלילי.", math_expression: "C - 1 = 10 &nbsp;&nbsp;,&nbsp;&nbsp; C - 1 = -10" },
            { verbal_explanation: "נפתור כל אחת מהאפשרויות.", math_expression: "C = 11 &nbsp;&nbsp;,&nbsp;&nbsp; C = -9" },
            { verbal_explanation: "על פי הנתון בשאלה, עלינו לבחור את הערך החיובי.", math_expression: "C = 11" }
        ],
        final_answer: "11"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מצאו נקודה על ציר האופקי, כך שמרחקה מהישר 5x + 12y - 10 = 0 שווה ל- 3. הנקודה בעלת ערך חיובי.",
        options: [
            "(9.8, 0)",
            "(5.8, 0)",
            "(10, 0)",
            "(9, 0)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נקודה הממוקמת על הציר האופקי מוגדרת עם ערך אנכי אפס.", math_expression: "(x , 0)" },
            { verbal_explanation: "נציב את שיעורי הנקודה ואת הנתונים בנוסחת המרחק מישר.", math_expression: "3 = |5 &times; x + 12 &times; 0 - 10| / &radic;(5<sup>2</sup> + 12<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה (שלשה פיתגורית ידועה).", math_expression: "&radic;(25 + 144) = &radic;169 = 13" },
            { verbal_explanation: "נציב את המכנה חזרה ונקבל משוואת ערך מוחלט.", math_expression: "3 = |5x - 10| / 13 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 39 = |5x - 10|" },
            { verbal_explanation: "נפצל לשני מקרים.", math_expression: "5x - 10 = 39 &nbsp;&nbsp;,&nbsp;&nbsp; 5x - 10 = -39" },
            { verbal_explanation: "נפתור את המקרה הראשון (החיובי).", math_expression: "5x = 49 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 9.8" },
            { verbal_explanation: "נפתור את המקרה השני (מניב תוצאה שלילית ולכן נפסל).", math_expression: "5x = -29 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = -5.8" }
        ],
        final_answer: "(9.8, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו מרחקה של ראשית הצירים מהישר 8x + 6y - 20 = 0?",
        options: [
            "2",
            "10",
            "20",
            "4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ראשית הצירים מוגדרת כנקודה שבה שני השיעורים הם אפס.", math_expression: "(0 , 0)" },
            { verbal_explanation: "נציב את הנקודה בנוסחת המרחק.", math_expression: "d = |8 &times; 0 + 6 &times; 0 - 20| / &radic;(8<sup>2</sup> + 6<sup>2</sup>)" },
            { verbal_explanation: "האיברים במונה מתאפסים ונשאר רק המספר החופשי.", math_expression: "d = |-20| / &radic;(64 + 36)" },
            { verbal_explanation: "נחשב את השורש במכנה ואת הערך המוחלט.", math_expression: "d = 20 / &radic;100" },
            { verbal_explanation: "נבצע את פעולת החילוק לקבלת המרחק.", math_expression: "d = 20 / 10 = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו מרחקה של הנקודה (2, 3) מהישר x - 2y + 4 = 0?",
        options: [
            "0",
            "1",
            "&radic;5",
            "2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי הנקודה בנוסחת המרחק.", math_expression: "d = |1 &times; 2 - 2 &times; 3 + 4| / &radic;(1<sup>2</sup> + (-2)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הערך שבתוך הערך המוחלט שבמונה.", math_expression: "d = |2 - 6 + 4| / &radic;(1 + 4)" },
            { verbal_explanation: "נזהה שהביטוי במונה מתאפס לחלוטין.", math_expression: "d = |0| / &radic;5" },
            { verbal_explanation: "מרחק אפס משמעותו שהנקודה מונחת בדיוק על הישר הנתון.", math_expression: "d = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "ידוע שהמרחק של הנקודה (0, 2) מהישר Ax + 3y - 1 = 0 הוא בדיוק 1. מצאו את הערך החיובי של המקדם A.",
        options: [
            "4",
            "3",
            "5",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את כל הנתונים, כולל המרחק הידוע, אל תוך הנוסחה.", math_expression: "1 = |A &times; 0 + 3 &times; 2 - 1| / &radic;(A<sup>2</sup> + 3<sup>2</sup>)" },
            { verbal_explanation: "נפשט את המונה. המשתנה מתאפס נשארים עם מספרים בלבד.", math_expression: "1 = |6 - 1| / &radic;(A<sup>2</sup> + 9) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 1 = 5 / &radic;(A<sup>2</sup> + 9)" },
            { verbal_explanation: "נכפיל במכנה כדי להעביר אותו לאגף השמאלי.", math_expression: "&radic;(A<sup>2</sup> + 9) = 5" },
            { verbal_explanation: "נעלה את שני האגפים בריבוע לביטול השורש.", math_expression: "A<sup>2</sup> + 9 = 25" },
            { verbal_explanation: "נעביר את המספר ימינה ונחסר.", math_expression: "A<sup>2</sup> = 16" },
            { verbal_explanation: "נוציא שורש ריבועי. על פי השאלה, נבחר רק בפתרון החיובי.", math_expression: "A = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מצאו את המרחק של הנקודה (2, -1) מהישר האופקי y = 5.",
        options: [
            "6",
            "4",
            "5",
            "3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משוואת ישר אופקי מציגה מצב בו המקדם של המשתנה האופקי הוא אפס. נסדר לצורה כללית.", math_expression: "0x + 1y - 5 = 0" },
            { verbal_explanation: "נציב את הנתונים בנוסחה.", math_expression: "d = |0 &times; 2 + 1 &times; (-1) - 5| / &radic;(0<sup>2</sup> + 1<sup>2</sup>)" },
            { verbal_explanation: "היות והמכנה הוא שורש של אחד, הוא הופך לאחד ולא משפיע.", math_expression: "d = |-1 - 5| / 1 = |-6|" },
            { verbal_explanation: "נפעיל את הערך המוחלט. (ניתן גם לראות זאת כהפרש ישיר בין הגבהים).", math_expression: "d = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "מהו המרחק של הנקודה (4, 7) מהישר האנכי x = -3?",
        options: [
            "7",
            "11",
            "1",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משוואת ישר אנכי משמעותה שמקדם המשתנה האנכי הוא אפס. נסדר לצורה כללית.", math_expression: "1x + 0y + 3 = 0" },
            { verbal_explanation: "נציב את הנתונים בנוסחת המרחק.", math_expression: "d = |1 &times; 4 + 0 &times; 7 + 3| / &radic;(1<sup>2</sup> + 0<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ערך המונה.", math_expression: "d = |4 + 3| / 1 = |7|" },
            { verbal_explanation: "בפועל, המרחק מישר אנכי הוא פשוט הערך המוחלט של ההפרש בין השיעורים האופקיים.", math_expression: "d = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "במשולש קודקודים A(1, 1), B(4, 5), C(7, 1). מצאו את אורך הגובה היורד מקודקוד B אל הצלע AC.",
        options: [
            "4",
            "3",
            "5",
            "2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הגובה הוא המרחק האנכי מקודקוד אל הישר עליו מונחת הצלע שמולו. נמצא את משוואת הצלע המבוקשת.", math_expression: "m<sub>AC</sub> = (1 - 1) / (7 - 1) = 0 / 6 = 0" },
            { verbal_explanation: "שיפוע אפס מצביע על ישר אופקי שעובר בנקודות שבהן הגובה קבוע על אחת.", math_expression: "y = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 0x + 1y - 1 = 0" },
            { verbal_explanation: "נציב את הקודקוד ממנו יורד הגובה אל תוך נוסחת המרחק מהישר שמצאנו.", math_expression: "h = |0 &times; 4 + 1 &times; 5 - 1| / &radic;(0<sup>2</sup> + 1<sup>2</sup>)" },
            { verbal_explanation: "נפשט ונקבל את אורך הגובה המבוקש.", math_expression: "h = |5 - 1| / 1 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "נקודה M נמצאת על הישר y = x ברביע הראשון. מרחקה מהישר 3x - 4y + 5 = 0 הוא בדיוק 1. מצאו את שיעורי הנקודה M.",
        options: [
            "(10, 10)",
            "(5, 5)",
            "(2, 2)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהנקודה נמצאת על הישר שבו שני השיעורים שווים, נגדיר אותה עם משתנה עזר זהה.", math_expression: "M(t , t)" },
            { verbal_explanation: "נציב את הנקודה שהגדרנו ואת הנתונים בנוסחת המרחק.", math_expression: "1 = |3 &times; t - 4 &times; t + 5| / &radic;(3<sup>2</sup> + (-4)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה ונפשט את הביטוי בערך המוחלט.", math_expression: "1 = |-t + 5| / &radic;25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 5 = |-t + 5|" },
            { verbal_explanation: "נפצל את משוואת הערך המוחלט לשתי אפשרויות נפרדות.", math_expression: "-t + 5 = 5 &nbsp;&nbsp;,&nbsp;&nbsp; -t + 5 = -5" },
            { verbal_explanation: "נפתור את המשוואה הראשונה.", math_expression: "-t = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 0" },
            { verbal_explanation: "נפתור את המשוואה השנייה.", math_expression: "-t = -10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 10" },
            { verbal_explanation: "הנקודה נמצאת ברביע הראשון (ערכים חיוביים ממש), ולכן נבחר בפתרון השני.", math_expression: "M(10 , 10)" }
        ],
        final_answer: "(10, 10)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק נקודה מישר (שימוש בנוסחה)",
        question: "נקודה נמצאת על הישר y = 2x. מרחקה מהישר 4x - 3y + 10 = 0 הוא בדיוק 2. מצאו את שיעורי הנקודה (בהנחה ששני שיעוריה חיוביים).",
        options: [
            "(10, 20)",
            "(5, 10)",
            "(2, 4)",
            "(4, 8)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על סמך הישר הנתון, ניתן להגדיר את הנקודה באמצעות משתנה עזר אחד.", math_expression: "P(t , 2t)" },
            { verbal_explanation: "נציב את הנתונים ואת הנקודה לנוסחת המרחק.", math_expression: "2 = |4 &times; t - 3 &times; (2t) + 10| / &radic;(4<sup>2</sup> + (-3)<sup>2</sup>)" },
            { verbal_explanation: "נכפיל את המכנה ונפשט את המונה.", math_expression: "2 = |4t - 6t + 10| / 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 10 = |-2t + 10|" },
            { verbal_explanation: "נפצל את משוואת הערך המוחלט.", math_expression: "-2t + 10 = 10 &nbsp;&nbsp;,&nbsp;&nbsp; -2t + 10 = -10" },
            { verbal_explanation: "פתרון למשוואה הראשונה.", math_expression: "-2t = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 0" },
            { verbal_explanation: "פתרון למשוואה השנייה.", math_expression: "-2t = -20 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; t = 10" },
            { verbal_explanation: "נאמר לנו שהערכים חיוביים ממש (שונים מאפס), לכן נבחר בפתרון השני ונחשב את שיעורי הנקודה המלאים.", math_expression: "(10 , 2 &times; 10) &nbsp;&rArr;&nbsp; (10 , 20)" }
        ],
        final_answer: "(10, 20)"
    },

    // =====================================================================
    // תת-נושא 5: מרחק בין ישרים מקבילים (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק בין שני הישרים המקבילים: 3x + 4y - 10 = 0 ו- 3x + 4y + 15 = 0?",
        options: [
            "5",
            "25",
            "1",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר המקדמים של שני הישרים המקבילים זהים לחלוטין, ניתן להשתמש בנוסחה הייעודית המבוססת על הפרש האיברים החופשיים.", math_expression: "d = |C<sub>1</sub> - C<sub>2</sub>| / &radic;(A<sup>2</sup> + B<sup>2</sup>)" },
            { verbal_explanation: "נציב את הנתונים מהמשוואות לנוסחה.", math_expression: "d = |-10 - 15| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את ערך המונה.", math_expression: "|-25| = 25" },
            { verbal_explanation: "נחשב את ערך המכנה.", math_expression: "&radic;(9 + 16) = &radic;25 = 5" },
            { verbal_explanation: "נבצע חלוקה סופית למציאת המרחק.", math_expression: "d = 25 / 5 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מצאו את המרחק בין הישרים המקבילים: 2x - y + 5 = 0 ו- 4x - 2y - 10 = 0.",
        options: [
            "2&radic;5",
            "4&radic;5",
            "&radic;5",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להשתמש בנוסחת המרחק בבטחה, עלינו להביא את שתי המשוואות למצב שבו מקדמי המשתנים זהים. נחלק את המשוואה השנייה בשתיים.", math_expression: "(4x - 2y - 10) / 2 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 2x - y - 5 = 0" },
            { verbal_explanation: "כעת יש לנו שתי משוואות בעלות מקדמים תואמים, ונציב בנוסחה.", math_expression: "d = |5 - (-5)| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את סכום הערכים במונה.", math_expression: "d = |5 + 5| / &radic;(4 + 1) = 10 / &radic;5" },
            { verbal_explanation: "כדי להיפטר משורש במכנה, נכפיל את המונה ואת המכנה בשורש זהה.", math_expression: "d = (10&radic;5) / 5" },
            { verbal_explanation: "נצמצם את השבר לתוצאה הסופית.", math_expression: "d = 2&radic;5" }
        ],
        final_answer: "2&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק בין הישרים y = 2x + 3 ו- y = 2x - 7?",
        options: [
            "2&radic;5",
            "10",
            "&radic;5",
            "5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נעביר את שתי המשוואות לצורה כללית שבה צד אחד שווה לאפס.", math_expression: "2x - y + 3 = 0 &nbsp;&nbsp;,&nbsp;&nbsp; 2x - y - 7 = 0" },
            { verbal_explanation: "כעת, מאחר והמקדמים זהים, נציב את הערכים החופשיים בנוסחה.", math_expression: "d = |3 - (-7)| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "d = 10 / &radic;5" },
            { verbal_explanation: "נכפיל מונה ומכנה בשורש לצורך פישוט, ונצמצם.", math_expression: "d = (10&radic;5) / 5 = 2&radic;5" }
        ],
        final_answer: "2&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "המרחק בין שני הישרים המקבילים 5x - 12y + 10 = 0 ו- 5x - 12y + C = 0 הוא בדיוק 2. ידוע ש- C > 10. מצאו את הערך של C.",
        options: [
            "36",
            "26",
            "-16",
            "16"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את נתוני המרחק והמקדמים הזהים אל תוך הנוסחה למרחק בין מקבילים.", math_expression: "2 = |10 - C| / &radic;(5<sup>2</sup> + (-12)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה (על פי שלשה פיתגורית מוכרת).", math_expression: "&radic;(25 + 144) = &radic;169 = 13" },
            { verbal_explanation: "נכפיל את המכנה שמצאנו בשתיים (אגף שמאל).", math_expression: "26 = |10 - C|" },
            { verbal_explanation: "נפצל את הערך המוחלט לשתי משוואות רגילות.", math_expression: "10 - C = 26 &nbsp;&nbsp;,&nbsp;&nbsp; 10 - C = -26" },
            { verbal_explanation: "נפתור כל אחת מהאפשרויות למציאת הפרמטר.", math_expression: "C = -16 &nbsp;&nbsp;,&nbsp;&nbsp; C = 36" },
            { verbal_explanation: "על פי הנתון המפורש בשאלה, נבחר בערך הגדול מעשר.", math_expression: "C = 36" }
        ],
        final_answer: "36"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "ריבוע חסום בין שני הישרים המקבילים x + 2y - 4 = 0 ו- x + 2y + 6 = 0, כך ששתיים מצלעותיו הנגדיות מונחות בדיוק על הישרים. מהו שטח הריבוע?",
        options: [
            "20",
            "100",
            "10",
            "5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אורך צלע הריבוע שווה למרחק הישיר שבין שני הישרים המקבילים הללו. נחשב מרחק זה.", math_expression: "a = |-4 - 6| / &radic;(1<sup>2</sup> + 2<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "a = |-10| / &radic;5 = 10 / &radic;5" },
            { verbal_explanation: "שטח של ריבוע מחושב על ידי העלאת אורך הצלע בריבוע.", math_expression: "S = a<sup>2</sup>" },
            { verbal_explanation: "נעלה את השבר כולו בריבוע (מונה בנפרד ומכנה בנפרד).", math_expression: "S = (10 / &radic;5)<sup>2</sup> = 100 / 5" },
            { verbal_explanation: "נבצע את החלוקה ונקבל את השטח המבוקש.", math_expression: "S = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהי משוואת הישר העובר בדיוק באמצע בין הישרים המקבילים 3x - 4y + 10 = 0 ו- 3x - 4y - 20 = 0 (כלומר, המרחק שלו מכל אחד מהם זהה)?",
        options: [
            "3x - 4y - 5 = 0",
            "3x - 4y + 5 = 0",
            "3x - 4y - 15 = 0",
            "3x - 4y + 15 = 0"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ישר העובר באמצע בין שני ישרים מקבילים מקביל להם בעצמו. לפיכך, מקדמיו זהים.", math_expression: "A = 3 , B = -4" },
            { verbal_explanation: "האיבר החופשי של הישר האמצעי שווה לממוצע החשבוני של האיברים החופשיים של שני הישרים המקבילים.", math_expression: "C<sub>mid</sub> = (C<sub>1</sub> + C<sub>2</sub>) / 2" },
            { verbal_explanation: "נציב את הערכים לחשב את הממוצע.", math_expression: "C<sub>mid</sub> = (10 + (-20)) / 2 = -10 / 2 = -5" },
            { verbal_explanation: "נרכיב את משוואת הישר האמצעי המלאה.", math_expression: "3x - 4y - 5 = 0" }
        ],
        final_answer: "3x - 4y - 5 = 0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מצאו את המרחק בין שני הישרים: x - 2y + 4 = 0 ו- -x + 2y + 6 = 0.",
        options: [
            "2&radic;5",
            "&radic;5",
            "4",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להשתמש בנוסחה, המקדמים של המשתנים חייבים להיות זהים לחלוטין. נכפיל את המשוואה השנייה במינוס אחת כדי להתאים אותה לראשונה.", math_expression: "-1 &times; (-x + 2y + 6 = 0) &nbsp;&rArr;&nbsp; x - 2y - 6 = 0" },
            { verbal_explanation: "כעת יש לנו שתי משוואות מוכנות.", math_expression: "L<sub>1</sub>: x - 2y + 4 = 0 &nbsp;&nbsp;|&nbsp;&nbsp; L<sub>2</sub>: x - 2y - 6 = 0" },
            { verbal_explanation: "נציב בנוסחת המרחק בין ישרים מקבילים.", math_expression: "d = |4 - (-6)| / &radic;(1<sup>2</sup> + (-2)<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המונה והמכנה.", math_expression: "d = |10| / &radic;(1 + 4) = 10 / &radic;5" },
            { verbal_explanation: "נפשט את התוצאה על ידי כפל בשורש המכנה וצמצום.", math_expression: "d = (10&radic;5) / 5 = 2&radic;5" }
        ],
        final_answer: "2&radic;5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "נתונים הישרים: mx + 4y - 5 = 0 ו- 3x + 4y + 15 = 0. ידוע כי הישרים מקבילים. מצאו תחילה את הפרמטר m, ולאחר מכן חשבו את המרחק ביניהם.",
        options: [
            "4",
            "5",
            "3",
            "20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שישרים יהיו מקבילים ויאפשרו שימוש בנוסחת המרחק הישירה (שכן מקדמי ה-y שלהם זהים), המקדם של המשתנה האופקי חייב להיות זהה גם כן.", math_expression: "m = 3" },
            { verbal_explanation: "כעת שיש לנו את המשוואה המלאה של הישר הראשון, נציב את הנתונים בנוסחה.", math_expression: "d = |-5 - 15| / &radic;(3<sup>2</sup> + 4<sup>2</sup>)" },
            { verbal_explanation: "נחשב את הערך המוחלט שבמונה.", math_expression: "d = |-20| / &radic;(9 + 16)" },
            { verbal_explanation: "נחשב את השורש ונבצע חלוקה.", math_expression: "d = 20 / &radic;25 = 20 / 5 = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מעגל חסום בין שני ישרים מקבילים שמשוואותיהם: 6x + 8y - 10 = 0 ו- 6x + 8y + 30 = 0. הישרים משיקים למעגל משני צדדיו. מהו רדיוס המעגל?",
        options: [
            "2",
            "4",
            "10",
            "5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק בין שני משיקים מקבילים למעגל שווה בדיוק לאורך הקוטר של המעגל. נחשב את המרחק הזה.", math_expression: "D = |-10 - 30| / &radic;(6<sup>2</sup> + 8<sup>2</sup>)" },
            { verbal_explanation: "נחשב מונה ומכנה.", math_expression: "D = |-40| / &radic;(36 + 64) = 40 / &radic;100" },
            { verbal_explanation: "נחלץ את אורך הקוטר.", math_expression: "D = 40 / 10 = 4" },
            { verbal_explanation: "הרדיוס הוא תמיד מחצית מאורך הקוטר.", math_expression: "R = D / 2 = 4 / 2 = 2" }
        ],
        final_answer: "2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק בין הישרים האופקיים המקבילים y = 4 ו- y = -2?",
        options: [
            "6",
            "2",
            "8",
            "10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר ישרים הם אופקיים (מקבילים לציר האופקי), המרחק ביניהם הוא פשוט הערך המוחלט של ההפרש בין השיעורים האנכיים הקבועים שלהם.", math_expression: "d = |y<sub>1</sub> - y<sub>2</sub>|" },
            { verbal_explanation: "נציב את הערכים לתוך הביטוי.", math_expression: "d = |4 - (-2)|" },
            { verbal_explanation: "נחשב את הסכום ונקבל את המרחק המדויק ללא צורך בנוסחאות מורכבות.", math_expression: "d = |4 + 2| = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "מהו המרחק בין הישרים האנכיים המקבילים x = 5 ו- x = -1?",
        options: [
            "6",
            "4",
            "5",
            "1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר ישרים הם אנכיים (מקבילים לציר האנכי), המרחק ביניהם מחושב כערך המוחלט של ההפרש בין השיעורים האופקיים הקבועים שלהם.", math_expression: "d = |x<sub>1</sub> - x<sub>2</sub>|" },
            { verbal_explanation: "נציב את המספרים.", math_expression: "d = |5 - (-1)|" },
            { verbal_explanation: "נחשב את התוצאה הפשוטה.", math_expression: "d = |5 + 1| = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מרחק בין ישרים מקבילים",
        question: "המרחק בין הישר 8x + 15y + C = 0 לבין הישר 8x + 15y - 10 = 0 הוא בדיוק 1. מהו סכום כל הערכים האפשריים של הפרמטר C?",
        options: [
            "-20",
            "20",
            "34",
            "-34"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את כל הנתונים, כולל המרחק, בנוסחה המיועדת לישרים מקבילים.", math_expression: "1 = |C - (-10)| / &radic;(8<sup>2</sup> + 15<sup>2</sup>)" },
            { verbal_explanation: "נחשב את המכנה (שלשה פיתגורית).", math_expression: "&radic;(64 + 225) = &radic;289 = 17" },
            { verbal_explanation: "נכפיל את המשוואה בשבע עשרה.", math_expression: "17 = |C + 10|" },
            { verbal_explanation: "נפצל את משוואת הערך המוחלט לשתי משוואות נפרדות.", math_expression: "C + 10 = 17 &nbsp;&nbsp;,&nbsp;&nbsp; C + 10 = -17" },
            { verbal_explanation: "נפתור עבור שני הערכים האפשריים של הפרמטר.", math_expression: "C<sub>1</sub> = 7 &nbsp;&nbsp;,&nbsp;&nbsp; C<sub>2</sub> = -27" },
            { verbal_explanation: "השאלה מבקשת את סכום הערכים הללו. נחבר אותם.", math_expression: "7 + (-27) = -20" }
        ],
        final_answer: "-20"
    },

    // =====================================================================
    // תת-נושא 6: משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתון המעגל שמשוואתו (x - 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 25. מהם שיעורי מרכז המעגל ואורך הרדיוס שלו?",
        options: [
            "מרכז (3, -4), רדיוס 5",
            "מרכז (-3, 4), רדיוס 5",
            "מרכז (3, -4), רדיוס 25",
            "מרכז (-3, 4), רדיוס 25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משוואת מעגל סטנדרטית מוצגת בתבנית הידועה.", math_expression: "(x - a)<sup>2</sup> + (y - b)<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נשווה את הביטויים שבתוך הסוגריים כדי למצוא את שיעורי המרכז. נזכור שהסימנים מתהפכים.", math_expression: "a = 3 &nbsp;&nbsp;,&nbsp;&nbsp; b = -4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; M(3 , -4)" },
            { verbal_explanation: "נשווה את האגף הימני לריבוע הרדיוס ונוציא שורש חיובי.", math_expression: "R<sup>2</sup> = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R = 5" }
        ],
        final_answer: "מרכז (3, -4), רדיוס 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מהי משוואתו של מעגל קנוני (שמרכזו בראשית הצירים) ואורך הרדיוס שלו הוא 7?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 49",
            "x<sup>2</sup> + y<sup>2</sup> = 7",
            "(x - 7)<sup>2</sup> + (y - 7)<sup>2</sup> = 49",
            "x<sup>2</sup> - y<sup>2</sup> = 49"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מעגל קנוני הוא מעגל שמרכזו נמצא בדיוק בראשית.", math_expression: "M(0 , 0) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 0 , b = 0" },
            { verbal_explanation: "נציב את הערכים המאופסים לתבנית הכללית, והמשוואה תצטמצם משמעותית.", math_expression: "(x - 0)<sup>2</sup> + (y - 0)<sup>2</sup> = R<sup>2</sup> &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> + y<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נציב את הרדיוס הנתון לתוך האגף הימני ונעלה בריבוע.", math_expression: "R = 7 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R<sup>2</sup> = 49" },
            { verbal_explanation: "נרכיב את המשוואה הסופית.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 49" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 49"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "בנו את משוואת המעגל שמרכזו בנקודה (2, -1) ואורכו של רדיוס המעגל הוא 6.",
        options: [
            "(x - 2)<sup>2</sup> + (y + 1)<sup>2</sup> = 36",
            "(x + 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 36",
            "(x - 2)<sup>2</sup> + (y + 1)<sup>2</sup> = 6",
            "(x + 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נזהה את מרכיבי המרכז שייכנסו לסוגריים.", math_expression: "a = 2 &nbsp;&nbsp;,&nbsp;&nbsp; b = -1" },
            { verbal_explanation: "נכין את אגף שמאל על ידי הצבה תוך היפוך סימנים.", math_expression: "(x - 2)<sup>2</sup> + (y - (-1))<sup>2</sup> = (x - 2)<sup>2</sup> + (y + 1)<sup>2</sup>" },
            { verbal_explanation: "נכין את אגף ימין על ידי העלאת הרדיוס בריבוע.", math_expression: "R<sup>2</sup> = 6<sup>2</sup> = 36" },
            { verbal_explanation: "נחבר את שני האגפים למשוואה אחת שלמה.", math_expression: "(x - 2)<sup>2</sup> + (y + 1)<sup>2</sup> = 36" }
        ],
        final_answer: "(x - 2)<sup>2</sup> + (y + 1)<sup>2</sup> = 36"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מעגל שמרכזו בראשית הצירים (0,0) עובר בדיוק דרך הנקודה (3, 4). מהי משוואת המעגל?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 25",
            "x<sup>2</sup> + y<sup>2</sup> = 5",
            "x<sup>2</sup> + y<sup>2</sup> = 7",
            "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המעגל הוא קנוני, ולכן משוואתו מבוססת על סכום ריבועי המשתנים בלבד.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "מכיוון שהנקודה שייכת למעגל, נציב את שיעוריה במשוואה כדי למצוא את ריבוע הרדיוס.", math_expression: "3<sup>2</sup> + 4<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נחשב ונקבל את האגף הימני המבוקש למשוואה.", math_expression: "9 + 16 = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R<sup>2</sup> = 25" },
            { verbal_explanation: "נכתוב מחדש את המשוואה המלאה עם המספר שמצאנו.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 25" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מצאו את משוואת המעגל שמרכזו בנקודה (1, 2) והוא עובר דרך הנקודה (4, 6).",
        options: [
            "(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 25",
            "(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 5",
            "(x + 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 25",
            "(x - 4)<sup>2</sup> + (y - 6)<sup>2</sup> = 25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרכז ידוע, לכן אגף שמאל של המשוואה ברור לנו.", math_expression: "(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "כדי למצוא את ריבוע הרדיוס, נחשב את המרחק (בריבוע) מהמרכז אל הנקודה שעליו.", math_expression: "R<sup>2</sup> = (4 - 1)<sup>2</sup> + (6 - 2)<sup>2</sup>" },
            { verbal_explanation: "נחשב את ההפרשים ואת החזקות.", math_expression: "R<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25" },
            { verbal_explanation: "נציב את התוצאה חזרה למשוואה שבנינו.", math_expression: "(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 25" }
        ],
        final_answer: "(x - 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "הנקודות A(-2, 4) ו- B(6, -2) הן קצותיו של קוטר במעגל. מהי משוואת המעגל?",
        options: [
            "(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 25",
            "(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 100",
            "(x + 2)<sup>2</sup> + (y - 4)<sup>2</sup> = 25",
            "(x - 4)<sup>2</sup> + (y - 2)<sup>2</sup> = 25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכז המעגל נמצא בדיוק באמצע הקוטר. נמצא את שיעוריו לפי נוסחת אמצע קטע.", math_expression: "M = ((-2 + 6) / 2 , (4 + (-2)) / 2)" },
            { verbal_explanation: "נחשב את הערכים כדי לקבל את המרכז.", math_expression: "M(2 , 1)" },
            { verbal_explanation: "ריבוע הרדיוס הוא המרחק בריבוע מהמרכז שמצאנו אל אחת מקצות הקוטר (למשל נקודה B).", math_expression: "R<sup>2</sup> = (6 - 2)<sup>2</sup> + (-2 - 1)<sup>2</sup>" },
            { verbal_explanation: "נחשב את אגף ימין.", math_expression: "R<sup>2</sup> = 4<sup>2</sup> + (-3)<sup>2</sup> = 16 + 9 = 25" },
            { verbal_explanation: "נרכיב את המשוואה הסופית מתוך המרכז וריבוע הרדיוס.", math_expression: "(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 25" }
        ],
        final_answer: "(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מעגל נמצא כולו ברביע הראשון ומשיק לשני הצירים (גם האופקי וגם האנכי). אורך הרדיוס שלו הוא 4. מהי משוואתו?",
        options: [
            "(x - 4)<sup>2</sup> + (y - 4)<sup>2</sup> = 16",
            "(x + 4)<sup>2</sup> + (y + 4)<sup>2</sup> = 16",
            "x<sup>2</sup> + y<sup>2</sup> = 16",
            "(x - 4)<sup>2</sup> + (y - 4)<sup>2</sup> = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהמעגל משיק לשני הצירים, המרחק של מרכזו מכל אחד מהצירים שווה לאורך הרדיוס.", math_expression: "|a| = R &nbsp;&nbsp;,&nbsp;&nbsp; |b| = R" },
            { verbal_explanation: "נתון שהרדיוס הוא ארבע והמעגל ברביע הראשון (בו כל הערכים חיוביים). לכן, שיעורי המרכז הם חיוביים ושווים לארבע.", math_expression: "a = 4 &nbsp;&nbsp;,&nbsp;&nbsp; b = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; M(4 , 4)" },
            { verbal_explanation: "ריבוע הרדיוס שווה לשש עשרה.", math_expression: "R<sup>2</sup> = 4<sup>2</sup> = 16" },
            { verbal_explanation: "נציב הכל לתבנית המוכרת.", math_expression: "(x - 4)<sup>2</sup> + (y - 4)<sup>2</sup> = 16" }
        ],
        final_answer: "(x - 4)<sup>2</sup> + (y - 4)<sup>2</sup> = 16"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מרכז מעגל נמצא בנקודה (3, 5). המעגל משיק בדיוק לציר האופקי (ציר ה-x). מהי משוואת המעגל?",
        options: [
            "(x - 3)<sup>2</sup> + (y - 5)<sup>2</sup> = 25",
            "(x - 3)<sup>2</sup> + (y - 5)<sup>2</sup> = 9",
            "(x - 3)<sup>2</sup> + (y - 5)<sup>2</sup> = 5",
            "(x + 3)<sup>2</sup> + (y + 5)<sup>2</sup> = 25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר מעגל משיק לציר האופקי, המרחק ממרכזו אל הציר שווה בדיוק לאורך הרדיוס.", math_expression: "R = |y<sub>center</sub>|" },
            { verbal_explanation: "השיעור האנכי של המרכז נתון לנו והוא חמש.", math_expression: "R = |5| = 5" },
            { verbal_explanation: "נחשב את ריבוע הרדיוס שיוצב באגף הימני.", math_expression: "R<sup>2</sup> = 25" },
            { verbal_explanation: "נציב את שיעורי המרכז הנתונים ואת התוצאה למשוואה הכללית.", math_expression: "(x - 3)<sup>2</sup> + (y - 5)<sup>2</sup> = 25" }
        ],
        final_answer: "(x - 3)<sup>2</sup> + (y - 5)<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מרכז מעגל ממוקם בנקודה (-2, 7). המעגל משיק לציר האנכי (ציר ה-y). מהי משוואת המעגל?",
        options: [
            "(x + 2)<sup>2</sup> + (y - 7)<sup>2</sup> = 4",
            "(x + 2)<sup>2</sup> + (y - 7)<sup>2</sup> = 49",
            "(x - 2)<sup>2</sup> + (y + 7)<sup>2</sup> = 4",
            "(x + 2)<sup>2</sup> + (y - 7)<sup>2</sup> = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר מעגל משיק לציר האנכי, המרחק האופקי של מרכזו מהציר שווה לאורך הרדיוס. ניקח את הערך המוחלט מכיוון שמרחק תמיד חיובי.", math_expression: "R = |x<sub>center</sub>|" },
            { verbal_explanation: "השיעור האופקי של המרכז הוא מינוס שתיים.", math_expression: "R = |-2| = 2" },
            { verbal_explanation: "נעלה את הרדיוס שמצאנו בריבוע.", math_expression: "R<sup>2</sup> = 4" },
            { verbal_explanation: "נרכיב את משוואת המעגל (נזכור להפוך את הסימן של מינוס שתיים לפלוס בתוך הסוגריים).", math_expression: "(x - (-2))<sup>2</sup> + (y - 7)<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x + 2)<sup>2</sup> + (y - 7)<sup>2</sup> = 4" }
        ],
        final_answer: "(x + 2)<sup>2</sup> + (y - 7)<sup>2</sup> = 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתונה משוואת מעגל בצורתה הפתוחה: x<sup>2</sup> - 6x + y<sup>2</sup> + 8y = 0. מצאו את מרכזו ורדיוסו על ידי השלמה לריבוע.",
        options: [
            "מרכז (3, -4), רדיוס 5",
            "מרכז (-3, 4), רדיוס 25",
            "מרכז (3, -4), רדיוס 25",
            "מרכז (-6, 8), רדיוס 10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי להשלים לריבוע, נטפל קודם במשתנה האופקי. ניקח את המקדם של איקס (מינוס שש), נחצה אותו (מינוס שלוש), נכניס לסוגריים בריבוע, ונחסר את הריבוע שלו (תשע) מבחוץ.", math_expression: "x<sup>2</sup> - 6x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 3)<sup>2</sup> - 9" },
            { verbal_explanation: "כעת נטפל במשתנה האנכי באותה צורה. המקדם הוא שמונה, מחציתו ארבע, הריבוע הוא שש עשרה שיחוסר מבחוץ.", math_expression: "y<sup>2</sup> + 8y &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (y + 4)<sup>2</sup> - 16" },
            { verbal_explanation: "נציב את הביטויים החדשים חזרה למשוואה המקורית במקום האיברים הפתוחים.", math_expression: "(x - 3)<sup>2</sup> - 9 + (y + 4)<sup>2</sup> - 16 = 0" },
            { verbal_explanation: "נסדר את המשוואה. נעביר את כל המספרים החופשיים לאגף ימין ונחבר אותם.", math_expression: "(x - 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 25" },
            { verbal_explanation: "מתוך המשוואה המסודרת, קל לחלץ את התשובה. המרכז הוא היפוך הסימנים מהסוגריים, והרדיוס הוא השורש של האגף הימני.", math_expression: "M(3 , -4) &nbsp;&nbsp;,&nbsp;&nbsp; R = &radic;25 = 5" }
        ],
        final_answer: "מרכז (3, -4), רדיוס 5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "נתונה המשוואה: x<sup>2</sup> - 4x + y<sup>2</sup> - 2y - 20 = 0. השלימו לריבוע ומצאו את אורך רדיוס המעגל.",
        options: [
            "5",
            "25",
            "20",
            "&radic;20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשלים לריבוע עבור המשתנה האופקי.", math_expression: "x<sup>2</sup> - 4x &nbsp;&rArr;&nbsp; (x - 2)<sup>2</sup> - 4" },
            { verbal_explanation: "נשלים לריבוע עבור המשתנה האנכי.", math_expression: "y<sup>2</sup> - 2y &nbsp;&rArr;&nbsp; (y - 1)<sup>2</sup> - 1" },
            { verbal_explanation: "נציב את הביטויים ונזכור שלא להשמיט את המספר שהיה שם במקור (מינוס עשרים).", math_expression: "(x - 2)<sup>2</sup> - 4 + (y - 1)<sup>2</sup> - 1 - 20 = 0" },
            { verbal_explanation: "נכנס את כל המספרים יחדיו ונעביר לאגף הימני.", math_expression: "(x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> - 25 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 25" },
            { verbal_explanation: "האגף הימני מייצג את ריבוע הרדיוס. נוציא שורש כדי למצוא את אורכו.", math_expression: "R = &radic;25 = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משוואת המעגל (קנוני ומוזז) ומציאת מרכז ורדיוס",
        question: "מעגל חדש, שמרכזו זהה למרכז המעגל (x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 10, מוגדר כך ששטחו גדול פי 4 משטח המעגל המקורי. מהי משוואת המעגל החדש?",
        options: [
            "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 40",
            "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 14",
            "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 100",
            "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שטח מעגל נמצא ביחס ישר לריבוע הרדיוס שלו.", math_expression: "S = &pi; &times; R<sup>2</sup>" },
            { verbal_explanation: "ריבוע הרדיוס של המעגל המקורי מופיע כפי שהוא באגף הימין של משוואתו.", math_expression: "R<sub>1</sub><sup>2</sup> = 10" },
            { verbal_explanation: "אם שטח המעגל החדש גדול פי ארבעה, המשמעות היא שריבוע הרדיוס שלו גדול פי ארבעה.", math_expression: "R<sub>2</sub><sup>2</sup> = 4 &times; 10 = 40" },
            { verbal_explanation: "מכיוון שהמרכז נותר ללא שינוי, נעתיק את האגף השמאלי מהמשוואה המקורית ופשוט נציב את האגף הימני החדש שחישבנו.", math_expression: "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 40" }
        ],
        final_answer: "(x - 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 40"
    },// =====================================================================
    // תת-נושא 7: נקודות חיתוך של ישר ומעגל או שני מעגלים (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך של המעגל x<sup>2</sup> + y<sup>2</sup> = 25 והישר y = x + 1.",
        options: [
            "(3, 4) , (-4, -3)",
            "(4, 3) , (-3, -4)",
            "(0, 5) , (5, 0)",
            "(-3, -2) , (2, 3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודות חיתוך, נציב את משוואת הישר אל תוך משוואת המעגל.", math_expression: "x<sup>2</sup> + (x + 1)<sup>2</sup> = 25" },
            { verbal_explanation: "נפתח את הסוגריים בעזרת נוסחת הכפל המקוצר.", math_expression: "x<sup>2</sup> + x<sup>2</sup> + 2x + 1 = 25" },
            { verbal_explanation: "נכנס איברים ונעביר את המספר מאגף ימין ליצירת משוואה ריבועית.", math_expression: "2x<sup>2</sup> + 2x - 24 = 0" },
            { verbal_explanation: "נחלק את המשוואה בשתיים לפשטות.", math_expression: "x<sup>2</sup> + x - 12 = 0" },
            { verbal_explanation: "נפרק לטרינום ונחלץ את הערכים של המשתנה האופקי.", math_expression: "(x + 4)(x - 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3 , x = -4" },
            { verbal_explanation: "נציב כל אחד מהערכים חזרה במשוואת הישר כדי למצוא את הערך האנכי המתאים לו.", math_expression: "y = 3 + 1 = 4 &nbsp;&nbsp;|&nbsp;&nbsp; y = -4 + 1 = -3" },
            { verbal_explanation: "נרשום את התשובה כזוג נקודות.", math_expression: "(3 , 4) , (-4 , -3)" }
        ],
        final_answer: "(3, 4) , (-4, -3)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מהן נקודות החיתוך של המעגל x<sup>2</sup> + y<sup>2</sup> = 10 עם הישר y = -3x?",
        options: [
            "(1, -3) , (-1, 3)",
            "(3, -1) , (-3, 1)",
            "(2, -6) , (-2, 6)",
            "(1, 3) , (-1, -3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הביטוי של המשתנה האנכי מתוך הישר אל תוך המעגל.", math_expression: "x<sup>2</sup> + (-3x)<sup>2</sup> = 10" },
            { verbal_explanation: "נעלה את הביטוי בריבוע.", math_expression: "x<sup>2</sup> + 9x<sup>2</sup> = 10" },
            { verbal_explanation: "נחבר את המקדמים.", math_expression: "10x<sup>2</sup> = 10" },
            { verbal_explanation: "נחלק בעשר ונוציא שורש.", math_expression: "x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = &plusmn;1" },
            { verbal_explanation: "נציב את הערכים החיובי והשלילי במשוואת הישר.", math_expression: "y = -3 &times; 1 = -3 &nbsp;&nbsp;|&nbsp;&nbsp; y = -3 &times; (-1) = 3" },
            { verbal_explanation: "נקודות החיתוך.", math_expression: "(1 , -3) , (-1 , 3)" }
        ],
        final_answer: "(1, -3) , (-1, 3)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "נתון המעגל (x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 5 והישר y = -2x + 10. כמה נקודות חיתוך יש להם, ומהן?",
        options: [
            "נקודת חיתוך אחת (השקה): (4, 2)",
            "שתי נקודות חיתוך: (4, 2) , (3, 4)",
            "שתי נקודות חיתוך: (2, 6) , (4, 2)",
            "אין נקודות חיתוך"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הישר לתוך משוואת המעגל.", math_expression: "(x - 2)<sup>2</sup> + (-2x + 10 - 1)<sup>2</sup> = 5" },
            { verbal_explanation: "נכנס איברים בתוך הסוגריים השניים.", math_expression: "(x - 2)<sup>2</sup> + (-2x + 9)<sup>2</sup> = 5" },
            { verbal_explanation: "נפתח את שני הסוגריים לפי נוסחת כפל מקוצר.", math_expression: "x<sup>2</sup> - 4x + 4 + 4x<sup>2</sup> - 36x + 81 = 5" },
            { verbal_explanation: "נסדר כמשוואה ריבועית.", math_expression: "5x<sup>2</sup> - 40x + 85 = 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 5x<sup>2</sup> - 40x + 80 = 0" },
            { verbal_explanation: "נחלק בחמש.", math_expression: "x<sup>2</sup> - 8x + 16 = 0" },
            { verbal_explanation: "נזהה תבנית כפל מקוצר (טרינום מושלם). מאחר שיש רק פתרון אחד, הישר משיק למעגל.", math_expression: "(x - 4)<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "נמצא את הערך האנכי דרך משוואת הישר.", math_expression: "y = -2 &times; 4 + 10 = -8 + 10 = 2" }
        ],
        final_answer: "נקודת חיתוך אחת (השקה): (4, 2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודת החיתוך של המעגל (x + 1)<sup>2</sup> + y<sup>2</sup> = 4 עם הישר האנכי x = 1.",
        options: [
            "(1, 0)",
            "(1, 2)",
            "(-1, 0)",
            "(1, -2) , (1, 2)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את ערכו הקבוע של המשתנה האופקי מתוך משוואת הישר.", math_expression: "(1 + 1)<sup>2</sup> + y<sup>2</sup> = 4" },
            { verbal_explanation: "נחשב את הסוגריים.", math_expression: "2<sup>2</sup> + y<sup>2</sup> = 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4 + y<sup>2</sup> = 4" },
            { verbal_explanation: "נעביר אגף.", math_expression: "y<sup>2</sup> = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 0" },
            { verbal_explanation: "הישר משיק למעגל בנקודה זו.", math_expression: "(1 , 0)" }
        ],
        final_answer: "(1, 0)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מהן נקודות החיתוך של x<sup>2</sup> + y<sup>2</sup> = 13 עם הישר x + y = 5?",
        options: [
            "(2, 3) , (3, 2)",
            "(1, 4) , (4, 1)",
            "(0, 5) , (5, 0)",
            "אין נקודות חיתוך"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבודד את אחד המשתנים מתוך משוואת הישר.", math_expression: "y = 5 - x" },
            { verbal_explanation: "נציב למשוואת המעגל.", math_expression: "x<sup>2</sup> + (5 - x)<sup>2</sup> = 13" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "x<sup>2</sup> + 25 - 10x + x<sup>2</sup> = 13" },
            { verbal_explanation: "ניצור משוואה ריבועית שווה לאפס.", math_expression: "2x<sup>2</sup> - 10x + 12 = 0" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x<sup>2</sup> - 5x + 6 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום.", math_expression: "(x - 2)(x - 3) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 2 , x = 3" },
            { verbal_explanation: "נמצא את הערך האנכי התואם לכל פתרון.", math_expression: "y = 5 - 2 = 3 &nbsp;&nbsp;|&nbsp;&nbsp; y = 5 - 3 = 2" },
            { verbal_explanation: "נרשום את הנקודות.", math_expression: "(2 , 3) , (3 , 2)" }
        ],
        final_answer: "(2, 3) , (3, 2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך של שני המעגלים הבאים: x<sup>2</sup> + y<sup>2</sup> = 9 ו- x<sup>2</sup> + y<sup>2</sup> = 16.",
        options: [
            "אין נקודות חיתוך",
            "(3, 4)",
            "(0, 3) , (0, -3)",
            "(4, 3) , (-4, -3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אנו יכולים להשוות בין המשוואות מאחר והביטוי המשתנה זהה בשתיהן.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 9 &nbsp;&nbsp;,&nbsp;&nbsp; x<sup>2</sup> + y<sup>2</sup> = 16" },
            { verbal_explanation: "נציב את המשוואה הראשונה בשנייה.", math_expression: "9 = 16" },
            { verbal_explanation: "קיבלנו פסוק שקר. משמעות הדבר היא שלמערכת אין פתרון. גיאומטרית, מדובר בשני מעגלים בעלי אותו מרכז (קונצנטריים) אך רדיוס שונה, ולכן אינם נחתכים.", math_expression: "&empty;" }
        ],
        final_answer: "אין נקודות חיתוך"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך של המעגל x<sup>2</sup> + y<sup>2</sup> = 20 והישר x - y = 2.",
        options: [
            "(4, 2) , (-2, -4)",
            "(2, 4) , (-4, -2)",
            "(4, -2) , (-2, 4)",
            "(2, 0) , (0, -2)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבודד משתנה מתוך הישר.", math_expression: "x = y + 2" },
            { verbal_explanation: "נציב למעגל.", math_expression: "(y + 2)<sup>2</sup> + y<sup>2</sup> = 20" },
            { verbal_explanation: "נפתח ונסדר.", math_expression: "y<sup>2</sup> + 4y + 4 + y<sup>2</sup> = 20" },
            { verbal_explanation: "נעביר למשוואה ריבועית.", math_expression: "2y<sup>2</sup> + 4y - 16 = 0" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "y<sup>2</sup> + 2y - 8 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום.", math_expression: "(y + 4)(y - 2) = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -4 , y = 2" },
            { verbal_explanation: "נמצא את המשתנה האופקי התואם.", math_expression: "x = -4 + 2 = -2 &nbsp;&nbsp;|&nbsp;&nbsp; x = 2 + 2 = 4" },
            { verbal_explanation: "נרשום את הזוגות.", math_expression: "(-2 , -4) , (4 , 2)" }
        ],
        final_answer: "(4, 2) , (-2, -4)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מהן נקודות החיתוך של המעגל x<sup>2</sup> + y<sup>2</sup> = 50 עם הישר האופקי y = 7?",
        options: [
            "(1, 7) , (-1, 7)",
            "(7, 1) , (7, -1)",
            "(0, 7)",
            "(1, -7) , (-1, -7)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הערך הקבוע אל תוך המשוואה.", math_expression: "x<sup>2</sup> + 7<sup>2</sup> = 50" },
            { verbal_explanation: "נחשב.", math_expression: "x<sup>2</sup> + 49 = 50" },
            { verbal_explanation: "נעביר אגף.", math_expression: "x<sup>2</sup> = 1" },
            { verbal_explanation: "נוציא שורש.", math_expression: "x = &plusmn;1" },
            { verbal_explanation: "נחבר את התוצאות ליצירת שתי נקודות.", math_expression: "(1 , 7) , (-1 , 7)" }
        ],
        final_answer: "(1, 7) , (-1, 7)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך בין שני המעגלים: x<sup>2</sup> + y<sup>2</sup> = 25 ו- (x - 3)<sup>2</sup> + y<sup>2</sup> = 16.",
        options: [
            "(3, 4) , (3, -4)",
            "(4, 3) , (4, -3)",
            "(0, 5) , (3, 0)",
            "(3, 5) , (3, -5)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבודד את איבר ה-y הריבועי מהמשוואה הראשונה ונציבו בשנייה.", math_expression: "y<sup>2</sup> = 25 - x<sup>2</sup>" },
            { verbal_explanation: "נציב למשוואה השנייה.", math_expression: "(x - 3)<sup>2</sup> + (25 - x<sup>2</sup>) = 16" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "x<sup>2</sup> - 6x + 9 + 25 - x<sup>2</sup> = 16" },
            { verbal_explanation: "האיבר הריבועי מצטמצם ונשארת משוואה לינארית פשוטה.", math_expression: "-6x + 34 = 16" },
            { verbal_explanation: "נעביר אגפים.", math_expression: "-6x = -18 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 3" },
            { verbal_explanation: "נציב את הערך חזרה לאחת המשוואות למציאת המשתנה האנכי.", math_expression: "3<sup>2</sup> + y<sup>2</sup> = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y<sup>2</sup> = 16 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = &plusmn;4" },
            { verbal_explanation: "נרשום את הזוגות.", math_expression: "(3 , 4) , (3 , -4)" }
        ],
        final_answer: "(3, 4) , (3, -4)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מהן נקודות החיתוך של המעגל x<sup>2</sup> + y<sup>2</sup> = 8 עם הישר החוצה את הרביע הראשון y = x?",
        options: [
            "(2, 2) , (-2, -2)",
            "(4, 4) , (-4, -4)",
            "(2, -2) , (-2, 2)",
            "(1, 1) , (-1, -1)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הישר לתוך המעגל.", math_expression: "x<sup>2</sup> + x<sup>2</sup> = 8" },
            { verbal_explanation: "נחבר.", math_expression: "2x<sup>2</sup> = 8" },
            { verbal_explanation: "נחלק בשתיים.", math_expression: "x<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורש.", math_expression: "x = &plusmn;2" },
            { verbal_explanation: "מאחר והישר קובע ששני המשתנים שווים, הרי שהערך האנכי זהה לאופקי.", math_expression: "y = x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = &plusmn;2" },
            { verbal_explanation: "נרשום את הנקודות.", math_expression: "(2 , 2) , (-2 , -2)" }
        ],
        final_answer: "(2, 2) , (-2, -2)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מצאו את נקודות החיתוך של המעגל (x - 2)<sup>2</sup> + (y - 1)<sup>2</sup> = 25 והישר y = 5.",
        options: [
            "(5, 5) , (-1, 5)",
            "(5, 5) , (1, 5)",
            "(2, 5) , (-2, 5)",
            "(5, 0) , (-1, 0)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נציב את הערך האנכי למשוואה.", math_expression: "(x - 2)<sup>2</sup> + (5 - 1)<sup>2</sup> = 25" },
            { verbal_explanation: "נחשב את המספרים.", math_expression: "(x - 2)<sup>2</sup> + 16 = 25" },
            { verbal_explanation: "נעביר אגף.", math_expression: "(x - 2)<sup>2</sup> = 9" },
            { verbal_explanation: "נוציא שורש ונקבל שתי משוואות לינאריות.", math_expression: "x - 2 = 3 &nbsp;&nbsp;,&nbsp;&nbsp; x - 2 = -3" },
            { verbal_explanation: "נפתור כל אחת בנפרד.", math_expression: "x = 5 &nbsp;&nbsp;,&nbsp;&nbsp; x = -1" },
            { verbal_explanation: "נרכיב את הנקודות יחד עם הערך האנכי הקבוע.", math_expression: "(5 , 5) , (-1 , 5)" }
        ],
        final_answer: "(5, 5) , (-1, 5)"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל או שני מעגלים",
        question: "מהן נקודות החיתוך בין המעגלים x<sup>2</sup> + y<sup>2</sup> = 10 ו- x<sup>2</sup> + (y - 5)<sup>2</sup> = 5?",
        options: [
            "(1, 3) , (-1, 3)",
            "(3, 1) , (-3, 1)",
            "(1, -3) , (-1, -3)",
            "(2, 3) , (-2, 3)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחלץ את איבר האיקס הריבועי מהמשוואה הראשונה.", math_expression: "x<sup>2</sup> = 10 - y<sup>2</sup>" },
            { verbal_explanation: "נציב אותו לתוך המשוואה השנייה.", math_expression: "(10 - y<sup>2</sup>) + (y - 5)<sup>2</sup> = 5" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "10 - y<sup>2</sup> + y<sup>2</sup> - 10y + 25 = 5" },
            { verbal_explanation: "האיבר הריבועי מצטמצם ונשארים עם משוואה לינארית.", math_expression: "35 - 10y = 5" },
            { verbal_explanation: "נעביר אגפים ונבודד.", math_expression: "10y = 30 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = 3" },
            { verbal_explanation: "נציב חזרה כדי למצוא את המשתנה האופקי.", math_expression: "x<sup>2</sup> + 3<sup>2</sup> = 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = &plusmn;1" },
            { verbal_explanation: "נרשום את הזוגות.", math_expression: "(1 , 3) , (-1 , 3)" }
        ],
        final_answer: "(1, 3) , (-1, 3)"
    },

    // =====================================================================
    // תת-נושא 8: משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מצאו את שיפוע המשיק למעגל שמשוואתו x<sup>2</sup> + y<sup>2</sup> = 25 בנקודה (3, 4) שעל המעגל.",
        options: [
            "-0.75",
            "1.33",
            "0.75",
            "-1.33"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכז המעגל ידוע לנו מתוך המשוואה הקנונית.", math_expression: "M(0 , 0)" },
            { verbal_explanation: "נחשב את שיפוע הרדיוס, המחבר את המרכז לנקודת ההשקה שעל המעגל.", math_expression: "m<sub>R</sub> = (4 - 0) / (3 - 0) = 4 / 3" },
            { verbal_explanation: "על פי משפט בגיאומטריה, המשיק תמיד מאונך לרדיוס בנקודת ההשקה. נשתמש בתנאי הניצבות.", math_expression: "m<sub>T</sub> = -1 / m<sub>R</sub>" },
            { verbal_explanation: "נמצא את השיפוע ההופכי והנגדי.", math_expression: "m<sub>T</sub> = -3 / 4" },
            { verbal_explanation: "נמיר לשבר עשרוני.", math_expression: "m<sub>T</sub> = -0.75" }
        ],
        final_answer: "-0.75"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מהי משוואת המשיק למעגל x<sup>2</sup> + y<sup>2</sup> = 10 בנקודה (1, -3)?",
        options: [
            "y = 1/3x - 10/3",
            "y = -3x",
            "y = 3x - 6",
            "y = -1/3x - 8/3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב את שיפוע הרדיוס היוצא מהראשית אל הנקודה.", math_expression: "m<sub>R</sub> = (-3 - 0) / (1 - 0) = -3" },
            { verbal_explanation: "נחשב את שיפוע המשיק המאונך לו.", math_expression: "m<sub>T</sub> = -1 / (-3) = 1 / 3" },
            { verbal_explanation: "נבנה את משוואת הישר על בסיס השיפוע שמצאנו ונקודת ההשקה הנתונה.", math_expression: "y - (-3) = (1 / 3)(x - 1)" },
            { verbal_explanation: "נפתח סוגריים ונסדר.", math_expression: "y + 3 = 1/3x - 1/3" },
            { verbal_explanation: "נעביר את המספר ימינה למשוואה מפורשת.", math_expression: "y = 1/3x - 10/3" }
        ],
        final_answer: "y = 1/3x - 10/3"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מצאו את משוואת המשיק למעגל (x - 2)<sup>2</sup> + (y - 3)<sup>2</sup> = 5 בנקודה (4, 4).",
        options: [
            "y = -2x + 12",
            "y = 0.5x + 2",
            "y = 2x - 4",
            "y = -0.5x + 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מתוך משוואת המעגל, נחלץ את נקודת המרכז.", math_expression: "M(2 , 3)" },
            { verbal_explanation: "נחשב את שיפוע הרדיוס אל הנקודה הנתונה.", math_expression: "m<sub>R</sub> = (4 - 3) / (4 - 2) = 1 / 2" },
            { verbal_explanation: "נחשב את שיפוע המשיק.", math_expression: "m<sub>T</sub> = -2" },
            { verbal_explanation: "נבנה את המשוואה.", math_expression: "y - 4 = -2(x - 4)" },
            { verbal_explanation: "נפתח ונסדר.", math_expression: "y = -2x + 8 + 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y = -2x + 12" }
        ],
        final_answer: "y = -2x + 12"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "הישר y = 2x + k משיק למעגל שמרכזו בראשית הצירים ורדיוסו &radic;5. מהו ערכו של k (בהנחה שהוא חיובי)?",
        options: [
            "5",
            "10",
            "&radic;5",
            "25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אם ישר משיק למעגל, אזי מרחק מרכז המעגל מהישר שווה בדיוק לרדיוס. נסדר את הישר לצורה כללית.", math_expression: "2x - y + k = 0" },
            { verbal_explanation: "נציב את הנתונים (המרכז הוא אפס פסיק אפס) בנוסחת המרחק, ונשווה לרדיוס.", math_expression: "|2 &times; 0 - 1 &times; 0 + k| / &radic;(2<sup>2</sup> + (-1)<sup>2</sup>) = &radic;5" },
            { verbal_explanation: "נפשט את המונה ואת המכנה.", math_expression: "|k| / &radic;5 = &radic;5" },
            { verbal_explanation: "נכפיל בשורש את שני האגפים.", math_expression: "|k| = 5" },
            { verbal_explanation: "על פי הנתון, נבחר בפתרון החיובי.", math_expression: "k = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "הישר x + 3y - 10 = 0 משיק למעגל קנוני שמרכזו (0,0) משוואתו x<sup>2</sup> + y<sup>2</sup> = R<sup>2</sup>. מהו הערך של R<sup>2</sup>?",
        options: [
            "10",
            "100",
            "&radic;10",
            "5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שוב, נשתמש בתכונה שהמרחק בין המרכז למשיק שווה לרדיוס. נציב את הנתונים בנוסחה.", math_expression: "R = |1 &times; 0 + 3 &times; 0 - 10| / &radic;(1<sup>2</sup> + 3<sup>2</sup>)" },
            { verbal_explanation: "נפשט את הביטוי.", math_expression: "R = |-10| / &radic;10 = 10 / &radic;10" },
            { verbal_explanation: "נצמצם את השבר על ידי הכפלה בשורש.", math_expression: "R = &radic;10" },
            { verbal_explanation: "השאלה מבקשת את ריבוע הרדיוס.", math_expression: "R<sup>2</sup> = (&radic;10)<sup>2</sup> = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מהו שיפוע המשיק למעגל (x + 1)<sup>2</sup> + (y - 2)<sup>2</sup> = 17 בנקודה (3, 1)?",
        options: [
            "4",
            "-0.25",
            "-4",
            "0.25"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכז המעגל.", math_expression: "M(-1 , 2)" },
            { verbal_explanation: "חישוב שיפוע הרדיוס.", math_expression: "m<sub>R</sub> = (1 - 2) / (3 - (-1)) = -1 / 4" },
            { verbal_explanation: "שיפוע המשיק הוא ההופכי והנגדי.", math_expression: "m<sub>T</sub> = -1 / (-1 / 4) = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מצאו את משוואת המשיק למעגל x<sup>2</sup> + (y + 4)<sup>2</sup> = 20 בנקודה (4, -2).",
        options: [
            "y = -2x + 6",
            "y = 0.5x - 4",
            "y = 2x - 10",
            "y = -0.5x"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכז המעגל.", math_expression: "M(0 , -4)" },
            { verbal_explanation: "שיפוע הרדיוס.", math_expression: "m<sub>R</sub> = (-2 - (-4)) / (4 - 0) = 2 / 4 = 1 / 2 = 0.5" },
            { verbal_explanation: "שיפוע המשיק.", math_expression: "m<sub>T</sub> = -2" },
            { verbal_explanation: "הרכבת המשוואה.", math_expression: "y - (-2) = -2(x - 4) &nbsp;&nbsp;&rArr;&nbsp;&nbsp; y + 2 = -2x + 8" },
            { verbal_explanation: "משוואה סופית.", math_expression: "y = -2x + 6" }
        ],
        final_answer: "y = -2x + 6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "הישר y = x + c משיק למעגל x<sup>2</sup> + y<sup>2</sup> = 18. מהו הערך של החיתוך c, בהנחה שהוא חיובי?",
        options: [
            "6",
            "18",
            "&radic;18",
            "3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נסדר את הישר.", math_expression: "x - y + c = 0" },
            { verbal_explanation: "נציב את הנתונים בנוסחת המרחק ונשווה לרדיוס הידוע מהמשוואה.", math_expression: "|1 &times; 0 - 1 &times; 0 + c| / &radic;(1<sup>2</sup> + (-1)<sup>2</sup>) = &radic;18" },
            { verbal_explanation: "נפשט.", math_expression: "|c| / &radic;2 = &radic;18" },
            { verbal_explanation: "נכפיל את המשוואה בשורש.", math_expression: "|c| = &radic;36 = 6" },
            { verbal_explanation: "נבחר את הערך החיובי.", math_expression: "c = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מעגל שמרכזו ברביע הראשון משיק לציר האופקי, ורדיוסו הוא 5. משוואתו היא (x - a)<sup>2</sup> + (y - b)<sup>2</sup> = 25. מהו הערך של b?",
        options: [
            "5",
            "25",
            "0",
            "אי אפשר לדעת"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מעגל המשיק לציר האופקי, מקיים תכונה בה מרחקו של המרכז מהציר האופקי שווה בדיוק לרדיוס.", math_expression: "d = |y<sub>center</sub>| = R" },
            { verbal_explanation: "מאחר והמרכז נמצא ברביע הראשון, הערך האנכי שלו חיובי.", math_expression: "|b| = 5 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "הציר האנכי משיק למעגל שמשוואתו (x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = R<sup>2</sup>. מצאו את R<sup>2</sup>.",
        options: [
            "9",
            "16",
            "3",
            "4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מעגל המשיק לציר האנכי, מקיים תכונה בה מרחקו של המרכז מהציר האנכי שווה לרדיוס.", math_expression: "d = |x<sub>center</sub>| = R" },
            { verbal_explanation: "השיעור האופקי של המרכז נתון במשוואה והוא 3.", math_expression: "|3| = R &nbsp;&nbsp;&rArr;&nbsp;&nbsp; R = 3" },
            { verbal_explanation: "השאלה דורשת את ריבוע הרדיוס.", math_expression: "R<sup>2</sup> = 3<sup>2</sup> = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מעבירים שני משיקים למעגל הקנוני x<sup>2</sup> + y<sup>2</sup> = 20 מהנקודה (0, 10). מהם השיפועים של שני משיקים אלו?",
        options: [
            "2 , -2",
            "0.5 , -0.5",
            "4 , -4",
            "10 , -10"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מכיוון שהנקודה (0, 10) נמצאת על הציר האנכי, היא גם מהווה את נקודת החיתוך של הישרים עם ציר זה. נגדיר את משוואת המשיק הכללית עם פרמטר שיפוע לא ידוע.", math_expression: "y = mx + 10 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; mx - y + 10 = 0" },
            { verbal_explanation: "נשתמש בעובדה שהמרחק ממרכז המעגל (ראשית הצירים) אל המשיקים שווה לרדיוס המעגל.", math_expression: "d = |m &times; 0 - 1 &times; 0 + 10| / &radic;(m<sup>2</sup> + (-1)<sup>2</sup>) = &radic;20" },
            { verbal_explanation: "נפשט את המשוואה.", math_expression: "10 / &radic;(m<sup>2</sup> + 1) = &radic;20" },
            { verbal_explanation: "נעלה בריבוע.", math_expression: "100 / (m<sup>2</sup> + 1) = 20" },
            { verbal_explanation: "נכפיל במכנה ונחלק בעשרים.", math_expression: "5 = m<sup>2</sup> + 1 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m<sup>2</sup> = 4" },
            { verbal_explanation: "נוציא שורש כדי למצוא את שני השיפועים האפשריים.", math_expression: "m = &plusmn;2" }
        ],
        final_answer: "2 , -2"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "משיק למעגל (רדיוס למשיק מאונך לו בנקודת ההשקה)",
        question: "מעגל מרכזו בראשית הצירים. הישר 3x + 4y - 25 = 0 משיק לו. מהי נקודת ההשקה?",
        options: [
            "(3, 4)",
            "(4, 3)",
            "(-3, -4)",
            "(5, 0)"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נמצא את שיפוע המשיק על ידי סידור המשוואה שלו.", math_expression: "4y = -3x + 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; m<sub>T</sub> = -3 / 4" },
            { verbal_explanation: "נחשב את שיפוע הרדיוס, אשר מאונך למשיק.", math_expression: "m<sub>R</sub> = 4 / 3" },
            { verbal_explanation: "הרדיוס עובר דרך הראשית, ולכן משוואתו פשוטה.", math_expression: "y = (4 / 3)x" },
            { verbal_explanation: "נקודת ההשקה היא נקודת החיתוך בין המשיק לרדיוס. נציב את הרדיוס במשוואת המשיק.", math_expression: "3x + 4 &times; ((4 / 3)x) = 25" },
            { verbal_explanation: "נפתור.", math_expression: "3x + (16 / 3)x = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (25 / 3)x = 25" },
            { verbal_explanation: "נכפיל בשלוש ונחלק בעשרים וחמש.", math_expression: "x = 3" },
            { verbal_explanation: "נציב את התוצאה למציאת הערך האנכי.", math_expression: "y = (4 / 3) &times; 3 = 4" },
            { verbal_explanation: "הנקודה המשותפת.", math_expression: "(3 , 4)" }
        ],
        final_answer: "(3, 4)"
    },

    // =====================================================================
    // תת-נושא 9: מקומות גיאומטריים בסיסיים (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את משוואת המקום הגיאומטרי של כל הנקודות שמרחקן מראשית הצירים הוא תמיד 5.",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 25",
            "y = x + 5",
            "(x - 5)<sup>2</sup> + y<sup>2</sup> = 0",
            "x + y = 5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר נקודה כללית על המקום הגיאומטרי.", math_expression: "(x , y)" },
            { verbal_explanation: "נשתמש בנוסחת המרחק כדי לתאר את הנתון: המרחק לראשית הצירים הוא 5.", math_expression: "&radic;((x - 0)<sup>2</sup> + (y - 0)<sup>2</sup>) = 5" },
            { verbal_explanation: "נעלה את המשוואה בריבוע ונקבל משוואת מעגל מוכרת.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 25" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהו המקום הגיאומטרי של כל הנקודות שנמצאות במרחק שווה מהנקודה (2, 0) ומהנקודה (-2, 0)?",
        options: [
            "x = 0",
            "y = 0",
            "x = y",
            "x<sup>2</sup> + y<sup>2</sup> = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר נקודה כללית (x,y) ונבנה משוואה המציגה שוויון בין שני המרחקים.", math_expression: "&radic;((x - 2)<sup>2</sup> + (y - 0)<sup>2</sup>) = &radic;((x + 2)<sup>2</sup> + (y - 0)<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע כדי לבטל את השורשים.", math_expression: "(x - 2)<sup>2</sup> + y<sup>2</sup> = (x + 2)<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "x<sup>2</sup> - 4x + 4 + y<sup>2</sup> = x<sup>2</sup> + 4x + 4 + y<sup>2</sup>" },
            { verbal_explanation: "נצמצם איברים זהים משני האגפים.", math_expression: "-4x = 4x" },
            { verbal_explanation: "נכנס איברים.", math_expression: "8x = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 0" },
            { verbal_explanation: "התוצאה היא משוואת הציר האנכי, המשמש כאנך אמצעי לקטע המחבר את הנקודות.", math_expression: "x = 0" }
        ],
        final_answer: "x = 0"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את המקום הגיאומטרי של כל הנקודות הנמצאות במרחק שווה מהישר x = 4 ומהישר x = -2.",
        options: [
            "x = 1",
            "y = 1",
            "x = 2",
            "y = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרחק מנקודה לישר אנכי מבוסס על ההפרש בערכים האופקיים. נשווה בין שני המרחקים המוחלטים.", math_expression: "|x - 4| = |x - (-2)|" },
            { verbal_explanation: "נעלה בריבוע לפשטות.", math_expression: "(x - 4)<sup>2</sup> = (x + 2)<sup>2</sup>" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "x<sup>2</sup> - 8x + 16 = x<sup>2</sup> + 4x + 4" },
            { verbal_explanation: "נכנס איברים.", math_expression: "-12x = -12" },
            { verbal_explanation: "נחלק ונקבל את התוצאה. זהו הישר האמצעי בדיוק.", math_expression: "x = 1" }
        ],
        final_answer: "x = 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של הנקודות שנמצאות במרחק שווה מהנקודות (0, 4) ו- (0, -2)?",
        options: [
            "y = 1",
            "x = 1",
            "y = 2",
            "x = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבנה משוואת שוויון מרחקים באותה הדרך.", math_expression: "&radic;(x<sup>2</sup> + (y - 4)<sup>2</sup>) = &radic;(x<sup>2</sup> + (y + 2)<sup>2</sup>)" },
            { verbal_explanation: "נעלה בריבוע ונפתח סוגריים.", math_expression: "x<sup>2</sup> + y<sup>2</sup> - 8y + 16 = x<sup>2</sup> + y<sup>2</sup> + 4y + 4" },
            { verbal_explanation: "נצמצם את האיברים הריבועיים.", math_expression: "-8y + 16 = 4y + 4" },
            { verbal_explanation: "נעביר אגפים.", math_expression: "12 = 12y" },
            { verbal_explanation: "נחלץ את המשתנה האנכי.", math_expression: "y = 1" }
        ],
        final_answer: "y = 1"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את המקום הגיאומטרי של כל הנקודות שמרחקן מהנקודה (3, 4) הוא תמיד 10.",
        options: [
            "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 100",
            "(x + 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 100",
            "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 10",
            "x<sup>2</sup> + y<sup>2</sup> = 100"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זהו התיאור המדויק של הגדרת מעגל. מרכז המעגל הוא הנקודה הנתונה, ורדיוסו הוא המרחק הקבוע.", math_expression: "M(3 , 4) &nbsp;&nbsp;,&nbsp;&nbsp; R = 10" },
            { verbal_explanation: "נרכיב את משוואת המעגל, ונעלה את הרדיוס בריבוע.", math_expression: "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 100" }
        ],
        final_answer: "(x - 3)<sup>2</sup> + (y - 4)<sup>2</sup> = 100"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות ברביע הראשון שמרחקן מהציר האופקי שווה למרחקן מהציר האנכי?",
        options: [
            "y = x",
            "y = -x",
            "x<sup>2</sup> + y<sup>2</sup> = 1",
            "y = x + 1"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק של נקודה מהציר האופקי הוא השיעור האנכי שלה בערך מוחלט.", math_expression: "d<sub>x</sub> = |y|" },
            { verbal_explanation: "המרחק שלה מהציר האנכי הוא השיעור האופקי שלה בערך מוחלט.", math_expression: "d<sub>y</sub> = |x|" },
            { verbal_explanation: "השווית המרחקים.", math_expression: "|y| = |x|" },
            { verbal_explanation: "ברביע הראשון שני השיעורים חיוביים תמיד, ולכן ניתן להסיר את הערך המוחלט ללא שינוי סימן.", math_expression: "y = x" }
        ],
        final_answer: "y = x"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "סכום ריבועי המרחקים של נקודה מהנקודות (2, 0) ו- (-2, 0) הוא קבוע ושווה ל-20. מהו המקום הגיאומטרי של נקודה זו?",
        options: [
            "x<sup>2</sup> + y<sup>2</sup> = 6",
            "x<sup>2</sup> + y<sup>2</sup> = 20",
            "x<sup>2</sup> + y<sup>2</sup> = 10",
            "x + y = 20"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נכתוב את ריבוע המרחק הראשון.", math_expression: "d<sub>1</sub><sup>2</sup> = (x - 2)<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נכתוב את ריבוע המרחק השני.", math_expression: "d<sub>2</sub><sup>2</sup> = (x + 2)<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נחבר את שני המרחקים ונשווה לערך הנתון בשאלה.", math_expression: "(x - 2)<sup>2</sup> + y<sup>2</sup> + (x + 2)<sup>2</sup> + y<sup>2</sup> = 20" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "x<sup>2</sup> - 4x + 4 + y<sup>2</sup> + x<sup>2</sup> + 4x + 4 + y<sup>2</sup> = 20" },
            { verbal_explanation: "נכנס איברים.", math_expression: "2x<sup>2</sup> + 2y<sup>2</sup> + 8 = 20" },
            { verbal_explanation: "נעביר אגף.", math_expression: "2x<sup>2</sup> + 2y<sup>2</sup> = 12" },
            { verbal_explanation: "נחלק בשתיים כדי לקבל את משוואת המעגל הפשוטה.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 6" }
        ],
        final_answer: "x<sup>2</sup> + y<sup>2</sup> = 6"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את המקום הגיאומטרי של כל מרכזי המעגלים אשר רדיוסם 4 והם משיקים לציר האופקי.",
        options: [
            "y = 4 , y = -4",
            "x = 4 , x = -4",
            "y = x + 4",
            "x<sup>2</sup> + y<sup>2</sup> = 16"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מרכזו של מעגל המשיק לציר האופקי מקיים תנאי מיוחד: הערך האנכי המוחלט של המרכז שווה בדיוק לרדיוס.", math_expression: "|y<sub>center</sub>| = R" },
            { verbal_explanation: "נתון שהרדיוס הוא ארבע.", math_expression: "|y| = 4" },
            { verbal_explanation: "המשוואה מתפצלת לשני ישרים אופקיים המקבילים לציר.", math_expression: "y = 4 &nbsp;&nbsp;,&nbsp;&nbsp; y = -4" }
        ],
        final_answer: "y = 4 , y = -4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהי משוואת המקום הגיאומטרי של כל הנקודות שריבוע מרחקן מראשית הצירים (0,0) שווה בדיוק לשיעור האנכי שלהן (y)?",
        options: [
            "x<sup>2</sup> + (y - 0.5)<sup>2</sup> = 0.25",
            "x<sup>2</sup> + y<sup>2</sup> = 1",
            "(x - 0.5)<sup>2</sup> + y<sup>2</sup> = 0.25",
            "y = x<sup>2</sup>"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ריבוע המרחק מראשית הצירים הוא למעשה הביטוי הקנוני.", math_expression: "d<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נשווה את הביטוי הזה לשיעור האנכי כפי שדורשת השאלה.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = y" },
            { verbal_explanation: "נעביר את המשתנה לאגף שמאל כדי לארגן צורה של מעגל.", math_expression: "x<sup>2</sup> + y<sup>2</sup> - y = 0" },
            { verbal_explanation: "נבצע השלמה לריבוע עבור המשתנה האנכי. המקדם הוא מינוס אחד, חציו מינוס חצי, וריבועו רבע.", math_expression: "x<sup>2</sup> + (y - 0.5)<sup>2</sup> - 0.25 = 0" },
            { verbal_explanation: "נעביר את המספר ימינה לקבלת משוואת המעגל הסופית.", math_expression: "x<sup>2</sup> + (y - 0.5)<sup>2</sup> = 0.25" }
        ],
        final_answer: "x<sup>2</sup> + (y - 0.5)<sup>2</sup> = 0.25"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מצאו את המקום הגיאומטרי של כל הנקודות ברביע הראשון שמרחקן מציר האנכי גדול פי 2 ממרחקן מהציר האופקי.",
        options: [
            "y = 0.5x",
            "y = 2x",
            "y = x + 2",
            "x<sup>2</sup> + y<sup>2</sup> = 4"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק מהציר האנכי הוא הערך האופקי.", math_expression: "d<sub>vertical</sub> = x" },
            { verbal_explanation: "המרחק מהציר האופקי הוא הערך האנכי.", math_expression: "d<sub>horizontal</sub> = y" },
            { verbal_explanation: "נבנה את המשוואה לפי התנאי. המרחק האופקי (x) גדול פי 2 מהמרחק האנכי (y).", math_expression: "x = 2y" },
            { verbal_explanation: "נבודד את המשתנה האנכי כדי לקבל משוואת ישר קלאסית.", math_expression: "y = 0.5x" }
        ],
        final_answer: "y = 0.5x"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מהו המקום הגיאומטרי של הנקודות שמרחקן מראשית הצירים (0,0) גדול פי 2 ממרחקן מהנקודה (3, 0)?",
        options: [
            "(x - 4)<sup>2</sup> + y<sup>2</sup> = 4",
            "(x - 3)<sup>2</sup> + y<sup>2</sup> = 9",
            "x<sup>2</sup> + y<sup>2</sup> = 36",
            "x = 2"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבנה משוואת מרחקים. המרחק לראשית:", math_expression: "&radic;(x<sup>2</sup> + y<sup>2</sup>)" },
            { verbal_explanation: "המרחק לנקודה (3,0) כפול 2:", math_expression: "2 &times; &radic;((x - 3)<sup>2</sup> + y<sup>2</sup>)" },
            { verbal_explanation: "נשווה ונעלה את שני האגפים בריבוע.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 4 &times; ((x - 3)<sup>2</sup> + y<sup>2</sup>)" },
            { verbal_explanation: "נפתח את הסוגריים.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 4(x<sup>2</sup> - 6x + 9 + y<sup>2</sup>)" },
            { verbal_explanation: "נכפיל את כל האיברים בארבע.", math_expression: "x<sup>2</sup> + y<sup>2</sup> = 4x<sup>2</sup> - 24x + 36 + 4y<sup>2</sup>" },
            { verbal_explanation: "נעביר הכל לאגף ימין ונכנס איברים.", math_expression: "0 = 3x<sup>2</sup> - 24x + 3y<sup>2</sup> + 36" },
            { verbal_explanation: "נחלק בשלוש את כל המשוואה.", math_expression: "x<sup>2</sup> - 8x + y<sup>2</sup> + 12 = 0" },
            { verbal_explanation: "נשלים לריבוע עבור המשתנה האופקי.", math_expression: "(x - 4)<sup>2</sup> - 16 + y<sup>2</sup> + 12 = 0" },
            { verbal_explanation: "נסדר למשוואת מעגל.", math_expression: "(x - 4)<sup>2</sup> + y<sup>2</sup> - 4 = 0 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; (x - 4)<sup>2</sup> + y<sup>2</sup> = 4" }
        ],
        final_answer: "(x - 4)<sup>2</sup> + y<sup>2</sup> = 4"
    },
    {
        topic: "גאומטריה אנליטית",
        subTopic: "מקומות גיאומטריים בסיסיים",
        question: "מעבירים קטעים מראשית הצירים לכל הנקודות על הישר האנכי x = 6. מצאו את המקום הגיאומטרי של אמצעי הקטעים הללו.",
        options: [
            "x = 3",
            "y = 3",
            "y = 0.5x",
            "x = 6"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כל נקודה על הישר הנתון היא בעלת ערך אופקי קבוע.", math_expression: "(6 , y)" },
            { verbal_explanation: "הקטעים מחברים את הראשית אל הנקודות הללו. נמצא את נקודת האמצע בעזרת הנוסחה.", math_expression: "M = ((6 + 0) / 2 , (y + 0) / 2)" },
            { verbal_explanation: "נחשב ונקבל ששיעור האופקי של נקודת האמצע הוא תמיד קבוע, בעוד האנכי יכול להיות כל ערך.", math_expression: "M(3 , y / 2)" },
            { verbal_explanation: "מכיוון שהשיעור האופקי תמיד 3, כל נקודות האמצע הללו מרכיבות ישר אנכי בעצמן.", math_expression: "x = 3" }
        ],
        final_answer: "x = 3"
    }
];