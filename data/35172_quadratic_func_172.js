const questionsDB = [
    // קודקוד וציר סימטריה (12 שאלות)
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ואת משוואת ציר הסימטריה שלה:\n\\( y = x^{2} - 6x + 5 \\)",
        options: ["קודקוד: (3, -4), ציר סימטריה: x=3", "קודקוד: (-3, 4), ציר סימטריה: x=-3", "קודקוד: (3, 4), ציר סימטריה: x=3", "קודקוד: (-3, -4), ציר סימטריה: x=-3"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת שיעור האיקס של הקודקוד: מינוס בי לחלק לפעמיים אי. לאחר מכן הציבו את התוצאה במשוואה המקורית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נזהה את מקדמי הפרבולה מתוך המשוואה.", math_expression: "a=1, b=-6, c=5" },
            { verbal_explanation: "שלב 2: נציב את המקדמים בנוסחת ציר הסימטריה והקודקוד.", math_expression: "x = -(-6) : (2x1)" },
            { verbal_explanation: "שלב 3: נחשב את המונה והמכנה כדי לקבל את שיעור האיקס.", math_expression: "x = 6 : 2 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 4: מצאנו את משוואת ציר הסימטריה. כעת נציב את הערך במשוואה כדי למצוא את שיעור הוואי של הקודקוד.", math_expression: "y = 3^{2} - 6(3) + 5" },
            { verbal_explanation: "שלב 5: נבצע את פעולות החזקה והכפל.", math_expression: "y = 9 - 18 + 5" },
            { verbal_explanation: "שלב 6: נחבר ונחסר את המספרים לקבלת התוצאה הסופית.", math_expression: "y = -4" },
            { verbal_explanation: "שלב 7: נרשום את הפתרון המלא הכולל את הקודקוד וציר הסימטריה.", math_expression: "(3, -4) , x=3" }
        ],
        final_answer: "קודקוד: (3, -4), ציר סימטריה: x=3"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ואת משוואת ציר הסימטריה שלה:\n\\( y = -x^{2} + 4x - 3 \\)",
        options: ["קודקוד: (2, 1), ציר סימטריה: x=2", "קודקוד: (-2, -1), ציר סימטריה: x=-2", "קודקוד: (2, -1), ציר סימטריה: x=2", "קודקוד: (4, 3), ציר סימטריה: x=4"],
        correctAnswer: 0,
        hint: "שימו לב שמקדם א הוא מינוס אחד. אל תשכחו להציב את המינוס גם בחישוב ערך הוואי של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים של הפונקציה הריבועית.", math_expression: "a=-1, b=4, c=-3" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה למציאת איקס קודקוד.", math_expression: "x = -4 : (2x(-1))" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החילוק.", math_expression: "x = -4 : -2 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: נציב איקס שווה שתיים בפונקציה. חשוב לשים את השתיים בסוגריים כדי לא לבלבל עם המינוס של המקדם.", math_expression: "y = -(2)^{2} + 4(2) - 3" },
            { verbal_explanation: "שלב 5: חישוב חזקה וכפל.", math_expression: "y = -4 + 8 - 3" },
            { verbal_explanation: "שלב 6: סיכום הערכים למציאת וואי קודקוד.", math_expression: "y = 1" },
            { verbal_explanation: "שלב 7: כתיבת התשובה הסופית.", math_expression: "(2, 1) , x=2" }
        ],
        final_answer: "קודקוד: (2, 1), ציר סימטריה: x=2"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהם שיעורי קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = 2x^{2} + 8x + 6 \\)",
        options: ["קודקוד: (-2, -2), ציר סימטריה: x=-2", "קודקוד: (2, 28), ציר סימטריה: x=2", "קודקוד: (-2, 2), ציר סימטריה: x=-2", "קודקוד: (-4, 6), ציר סימטריה: x=-4"],
        correctAnswer: 0,
        hint: "המקדם אי הוא שתיים. הקפידו לחלק נכון את מינוס בי בפעמיים אי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת המקדמים מהמשוואה הנתונה.", math_expression: "a=2, b=8, c=6" },
            { verbal_explanation: "שלב 2: חישוב איקס קודקוד בעזרת הנוסחה.", math_expression: "x = -8 : (2x2)" },
            { verbal_explanation: "שלב 3: חלוקת מינוס שמונה בארבע.", math_expression: "x = -8 : 4 \\Rightarrow x = -2" },
            { verbal_explanation: "שלב 4: הצבת מינוס שתיים במשוואה למציאת וואי. הקפידו על סוגריים מסביב למספר השלילי.", math_expression: "y = 2(-2)^{2} + 8(-2) + 6" },
            { verbal_explanation: "שלב 5: העלאה בריבוע וכפל.", math_expression: "y = 2(4) - 16 + 6" },
            { verbal_explanation: "שלב 6: חישוב סופי של אגף ימין.", math_expression: "y = 8 - 16 + 6 \\Rightarrow y = -2" },
            { verbal_explanation: "שלב 7: רישום הפתרון המסכם.", math_expression: "(-2, -2) , x=-2" }
        ],
        final_answer: "קודקוד: (-2, -2), ציר סימטריה: x=-2"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = -3x^{2} - 12x \\)",
        options: ["קודקוד: (-2, 12), ציר סימטריה: x=-2", "קודקוד: (2, -36), ציר סימטריה: x=2", "קודקוד: (-2, -12), ציר סימטריה: x=-2", "קודקוד: (-4, 0), ציר סימטריה: x=-4"],
        correctAnswer: 0,
        hint: "במשוואה זו חסר האיבר החופשי סי ולכן הוא שווה לאפס. זה לא משפיע על חישוב איקס הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים, תוך ציון שערכו של סי הוא אפס.", math_expression: "a=-3, b=-12, c=0" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת ציר הסימטריה.", math_expression: "x = -(-12) : (2x(-3))" },
            { verbal_explanation: "שלב 3: ביצוע החישוב במכנה ובמונה.", math_expression: "x = 12 : -6 \\Rightarrow x = -2" },
            { verbal_explanation: "שלב 4: הצבת הערך שהתקבל במשוואת הפרבולה.", math_expression: "y = -3(-2)^{2} - 12(-2)" },
            { verbal_explanation: "שלב 5: העלאת המינוס שתיים בריבוע תוך שמירה על המקדם השלילי.", math_expression: "y = -3(4) + 24" },
            { verbal_explanation: "שלב 6: השלמת החישוב למציאת שיעור הוואי.", math_expression: "y = -12 + 24 \\Rightarrow y = 12" },
            { verbal_explanation: "שלב 7: התשובה הסופית כנקודה וכמשוואת ישר.", math_expression: "(-2, 12) , x=-2" }
        ],
        final_answer: "קודקוד: (-2, 12), ציר סימטריה: x=-2"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהו קודקוד הפרבולה ומהי משוואת ציר הסימטריה שלה:\n\\( y = x^{2} - 9 \\)",
        options: ["קודקוד: (0, -9), ציר סימטריה: x=0", "קודקוד: (3, 0), ציר סימטריה: x=3", "קודקוד: (-3, 0), ציר סימטריה: x=-3", "קודקוד: (0, 9), ציר סימטריה: x=0"],
        correctAnswer: 0,
        hint: "שימו לב שחסר האיבר עם האיקס, כלומר המקדם בי שווה לאפס. מה זה אומר על ציר הסימטריה?",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים כאשר בי שווה לאפס.", math_expression: "a=1, b=0, c=-9" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הקודקוד.", math_expression: "x = -0 : (2x1)" },
            { verbal_explanation: "שלב 3: מאחר והמונה הוא אפס, גם התוצאה היא אפס.", math_expression: "x = 0 : 2 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 4: הצבת איקס שווה אפס בפונקציה המקורית.", math_expression: "y = 0^{2} - 9" },
            { verbal_explanation: "שלב 5: חישוב ערך הוואי.", math_expression: "y = 0 - 9 \\Rightarrow y = -9" },
            { verbal_explanation: "שלב 6: המסקנה היא שציר הסימטריה הוא ציר הוואי עצמו.", math_expression: "x=0" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה.", math_expression: "(0, -9)" }
        ],
        final_answer: "קודקוד: (0, -9), ציר סימטריה: x=0"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ואת משוואת ציר הסימטריה:\n\\( y = x^{2} - 4x \\)",
        options: ["קודקוד: (2, -4), ציר סימטריה: x=2", "קודקוד: (-2, 12), ציר סימטריה: x=-2", "קודקוד: (4, 0), ציר סימטריה: x=4", "קודקוד: (2, 0), ציר סימטריה: x=2"],
        correctAnswer: 0,
        hint: "במשוואה זו חסר האיבר החופשי סי. פעלו לפי השלבים הרגילים בעזרת מקדמי א ו-ב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדמים.", math_expression: "a=1, b=-4, c=0" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה.", math_expression: "x = -(-4) : (2x1)" },
            { verbal_explanation: "שלב 3: חלוקת ארבע בשתיים.", math_expression: "x = 4 : 2 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: הצבת שתיים במשוואה.", math_expression: "y = 2^{2} - 4(2)" },
            { verbal_explanation: "שלב 5: העלאה בריבוע וכפל.", math_expression: "y = 4 - 8" },
            { verbal_explanation: "שלב 6: חישוב התוצאה.", math_expression: "y = -4" },
            { verbal_explanation: "שלב 7: רישום הפתרון.", math_expression: "(2, -4) , x=2" }
        ],
        final_answer: "קודקוד: (2, -4), ציר סימטריה: x=2"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = -x^{2} - 2x + 8 \\)",
        options: ["קודקוד: (-1, 9), ציר סימטריה: x=-1", "קודקוד: (1, 5), ציר סימטריה: x=1", "קודקוד: (-1, 7), ציר סימטריה: x=-1", "קודקוד: (-2, 8), ציר סימטריה: x=-2"],
        correctAnswer: 0,
        hint: "הקפידו על סימני המינוס בנוסחה ובמהלך ההצבה, במיוחד כשמעלים מספר שלילי בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ המקדמים.", math_expression: "a=-1, b=-2, c=8" },
            { verbal_explanation: "שלב 2: הצבה למציאת שיעור איקס של הקודקוד.", math_expression: "x = -(-2) : (2x(-1))" },
            { verbal_explanation: "שלב 3: ביצוע החלוקה.", math_expression: "x = 2 : -2 \\Rightarrow x = -1" },
            { verbal_explanation: "שלב 4: הצבת הפתרון שקיבלנו בחזרה למשוואה.", math_expression: "y = -(-1)^{2} - 2(-1) + 8" },
            { verbal_explanation: "שלב 5: חישוב החזקה (מינוס אחד בריבוע הוא אחד, אך יש מינוס לפניו).", math_expression: "y = -1 + 2 + 8" },
            { verbal_explanation: "שלב 6: חיבור האיברים.", math_expression: "y = 9" },
            { verbal_explanation: "שלב 7: סיום ורישום התשובה.", math_expression: "(-1, 9) , x=-1" }
        ],
        final_answer: "קודקוד: (-1, 9), ציר סימטריה: x=-1"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ואת משוואת ציר הסימטריה:\n\\( y = 0.5x^{2} - 4x + 8 \\)",
        options: ["קודקוד: (4, 0), ציר סימטריה: x=4", "קודקוד: (2, 2), ציר סימטריה: x=2", "קודקוד: (4, 8), ציר סימטריה: x=4", "קודקוד: (-4, 32), ציר סימטריה: x=-4"],
        correctAnswer: 0,
        hint: "כאשר המקדם א הוא שבר עשרוני חצי, חלוקה בו שקולה להכפלה בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המקדמים כולל המקדם העשרוני.", math_expression: "a=0.5, b=-4, c=8" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה.", math_expression: "x = -(-4) : (2x0.5)" },
            { verbal_explanation: "שלב 3: המכנה הוא אחת, לכן קל לבצע את החלוקה.", math_expression: "x = 4 : 1 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 4: מציאת ערך וואי על ידי הצבה במשוואה.", math_expression: "y = 0.5(4)^{2} - 4(4) + 8" },
            { verbal_explanation: "שלב 5: העלאה בריבוע.", math_expression: "y = 0.5(16) - 16 + 8" },
            { verbal_explanation: "שלב 6: ביצוע הכפל והחיבור.", math_expression: "y = 8 - 16 + 8 \\Rightarrow y = 0" },
            { verbal_explanation: "שלב 7: כתיבת נקודת הקיצון והציר.", math_expression: "(4, 0) , x=4" }
        ],
        final_answer: "קודקוד: (4, 0), ציר סימטריה: x=4"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהם שיעורי קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = -0.5x^{2} + 2x - 1 \\)",
        options: ["קודקוד: (2, 1), ציר סימטריה: x=2", "קודקוד: (-2, -7), ציר סימטריה: x=-2", "קודקוד: (2, -1), ציר סימטריה: x=2", "קודקוד: (4, -1), ציר סימטריה: x=4"],
        correctAnswer: 0,
        hint: "המכנה בנוסחת הקודקוד יהיה מינוס אחד, דבר שיפשט את חישוב האיקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מדויק של המקדמים.", math_expression: "a=-0.5, b=2, c=-1" },
            { verbal_explanation: "שלב 2: שימוש בנוסחה.", math_expression: "x = -2 : (2x(-0.5))" },
            { verbal_explanation: "שלב 3: חישוב המכנה וביצוע החלוקה.", math_expression: "x = -2 : -1 \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 4: נציב את הערך בפונקציה הריבועית.", math_expression: "y = -0.5(2)^{2} + 2(2) - 1" },
            { verbal_explanation: "שלב 5: חישוב החזקה והמכפלה.", math_expression: "y = -0.5(4) + 4 - 1" },
            { verbal_explanation: "שלב 6: סיכום האיברים.", math_expression: "y = -2 + 4 - 1 \\Rightarrow y = 1" },
            { verbal_explanation: "שלב 7: התוצאה המלאה.", math_expression: "(2, 1) , x=2" }
        ],
        final_answer: "קודקוד: (2, 1), ציר סימטריה: x=2"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ואת משוואת ציר הסימטריה:\n\\( y = 4x^{2} - 4x + 1 \\)",
        options: ["קודקוד: (0.5, 0), ציר סימטריה: x=0.5", "קודקוד: (1, 1), ציר סימטריה: x=1", "קודקוד: (0.5, 1), ציר סימטריה: x=0.5", "קודקוד: (-0.5, 4), ציר סימטריה: x=-0.5"],
        correctAnswer: 0,
        hint: "הקודקוד במקרה זה כולל שבר עשרוני. ניתן לעבוד עם המספר חצי ללא קושי מיוחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המקדמים הם ארבע, מינוס ארבע, ואחת.", math_expression: "a=4, b=-4, c=1" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת ציר הסימטריה.", math_expression: "x = -(-4) : (2x4)" },
            { verbal_explanation: "שלב 3: חלוקת ארבע בשמונה מצמצמת לחצי.", math_expression: "x = 4 : 8 \\Rightarrow x = 0.5" },
            { verbal_explanation: "שלב 4: הצבת חצי במשוואה המקורית.", math_expression: "y = 4(0.5)^{2} - 4(0.5) + 1" },
            { verbal_explanation: "שלב 5: חצי בריבוע שווה לרבע.", math_expression: "y = 4(0.25) - 2 + 1" },
            { verbal_explanation: "שלב 6: ארבע כפול רבע שווה אחת, נשלים את החישוב.", math_expression: "y = 1 - 2 + 1 \\Rightarrow y = 0" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "(0.5, 0) , x=0.5" }
        ],
        final_answer: "קודקוד: (0.5, 0), ציר סימטריה: x=0.5"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מצאו את קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = -2x^{2} + 10x - 8 \\)",
        options: ["קודקוד: (2.5, 4.5), ציר סימטריה: x=2.5", "קודקוד: (5, -8), ציר סימטריה: x=5", "קודקוד: (-2.5, -45.5), ציר סימטריה: x=-2.5", "קודקוד: (2.5, 0), ציר סימטריה: x=2.5"],
        correctAnswer: 0,
        hint: "קודקוד יכול להופיע גם כשבר עשרוני. בצעו את פעולת החלוקה וההצבה בזהירות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המקדמים.", math_expression: "a=-2, b=10, c=-8" },
            { verbal_explanation: "שלב 2: הצבת המקדמים בנוסחה הרלוונטית.", math_expression: "x = -10 : (2x(-2))" },
            { verbal_explanation: "שלב 3: ביצוע חלוקת מינוס עשר במינוס ארבע.", math_expression: "x = -10 : -4 \\Rightarrow x = 2.5" },
            { verbal_explanation: "שלב 4: מציאת ערך וואי על ידי הצבת שתיים וחצי.", math_expression: "y = -2(2.5)^{2} + 10(2.5) - 8" },
            { verbal_explanation: "שלב 5: חישוב החזקה (שש נקודה עשרים וחמש).", math_expression: "y = -2(6.25) + 25 - 8" },
            { verbal_explanation: "שלב 6: כפל במינוס שתיים וסיכום.", math_expression: "y = -12.5 + 25 - 8 \\Rightarrow y = 4.5" },
            { verbal_explanation: "שלב 7: התשובה המלאה המוצגת בפורמט הרצוי.", math_expression: "(2.5, 4.5) , x=2.5" }
        ],
        final_answer: "קודקוד: (2.5, 4.5), ציר סימטריה: x=2.5"
    },
    {
        topic: "parabola_172",
        subTopic: "קודקוד וציר סימטריה",
        question_text: "מהם שיעורי קודקוד הפרבולה ומשוואת ציר הסימטריה:\n\\( y = x^{2} + 5x + 6 \\)",
        options: ["קודקוד: (-2.5, -0.25), ציר סימטריה: x=-2.5", "קודקוד: (2.5, 24.75), ציר סימטריה: x=2.5", "קודקוד: (-5, 6), ציר סימטריה: x=-5", "קודקוד: (-2, 0), ציר סימטריה: x=-2"],
        correctAnswer: 0,
        hint: "חלוקה של מספר אי-זוגי בשתיים תיתן שבר עשרוני המסתיימת בחצי. אל תחששו מזה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי מקדמי המשוואה.", math_expression: "a=1, b=5, c=6" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת ציר הסימטריה.", math_expression: "x = -5 : (2x1)" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החלוקה לשבר עשרוני.", math_expression: "x = -2.5" },
            { verbal_explanation: "שלב 4: מציאת ערך וואי על ידי הצבה במשוואת הפרבולה.", math_expression: "y = (-2.5)^{2} + 5(-2.5) + 6" },
            { verbal_explanation: "שלב 5: חישוב החזקה והכפל.", math_expression: "y = 6.25 - 12.5 + 6" },
            { verbal_explanation: "שלב 6: חיבור וחיסור האיברים להשלמת המשימה.", math_expression: "y = -0.25" },
            { verbal_explanation: "שלב 7: הרישום הרשמי של התשובה.", math_expression: "(-2.5, -0.25) , x=-2.5" }
        ],
        final_answer: "קודקוד: (-2.5, -0.25), ציר סימטריה: x=-2.5"
    },

    // נקודות חיתוך עם הצירים (אפסים) (12 שאלות)
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה עם ציר האיקס ועם ציר הוואי:\n\\( y = x^{2} - 5x + 6 \\)",
        options: ["ציר איקס: (2,0) ו-(3,0) | ציר וואי: (0,6)", "ציר איקס: (-2,0) ו-(-3,0) | ציר וואי: (0,-6)", "ציר איקס: (6,0) | ציר וואי: (0,5)", "ציר איקס: (1,0) ו-(6,0) | ציר וואי: (0,6)"],
        correctAnswer: 0,
        hint: "לחיתוך עם ציר איקס הציבו וואי שווה אפס ופתרו משוואה ריבועית. לחיתוך עם ציר וואי הציבו איקס שווה אפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: למציאת חיתוך עם ציר איקס, נציב וואי שווה לאפס במשוואה.", math_expression: "x^{2} - 5x + 6 = 0" },
            { verbal_explanation: "שלב 2: נשתמש בטרינום. המספרים שכפלם שש וסכומם מינוס חמש הם מינוס שתיים ומינוס שלוש.", math_expression: "(x - 2)(x - 3) = 0" },
            { verbal_explanation: "שלב 3: נשווה כל סוגריים לאפס כדי למצוא את שיעורי האיקס.", math_expression: "x = 2 , x = 3" },
            { verbal_explanation: "שלב 4: נרשום את נקודות החיתוך עם ציר איקס.", math_expression: "(2, 0) , (3, 0)" },
            { verbal_explanation: "שלב 5: למציאת חיתוך עם ציר וואי, נציב איקס שווה לאפס.", math_expression: "y = 0^{2} - 5(0) + 6" },
            { verbal_explanation: "שלב 6: החישוב הוא פשוט ונותן לנו את האיבר החופשי.", math_expression: "y = 6" },
            { verbal_explanation: "שלב 7: נרשום את נקודת החיתוך עם ציר הוואי.", math_expression: "(0, 6)" }
        ],
        final_answer: "ציר איקס: (2,0) ו-(3,0) | ציר וואי: (0,6)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה עם ציר האיקס ועם ציר הוואי:\n\\( y = -x^{2} + x + 12 \\)",
        options: ["ציר איקס: (4,0) ו-(-3,0) | ציר וואי: (0,12)", "ציר איקס: (-4,0) ו-(3,0) | ציר וואי: (0,12)", "ציר איקס: (4,0) ו-(3,0) | ציר וואי: (0,-12)", "אין חיתוך עם ציר איקס | ציר וואי: (0,12)"],
        correctAnswer: 0,
        hint: "כאשר אתם משווים לאפס, כדאי להכפיל את כל המשוואה במינוס אחד כדי להקל על מציאת הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת וואי שווה לאפס למציאת חיתוך עם ציר איקס.", math_expression: "-x^{2} + x + 12 = 0" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במינוס אחד כדי לעבוד עם מקדם חיובי.", math_expression: "x^{2} - x - 12 = 0" },
            { verbal_explanation: "שלב 3: מציאת טרינום שמכפלתו מינוס שתים עשרה וסכומו מינוס אחת.", math_expression: "(x - 4)(x + 3) = 0" },
            { verbal_explanation: "שלב 4: מציאת שני הפתרונות למשוואה הריבועית.", math_expression: "x = 4 , x = -3" },
            { verbal_explanation: "שלב 5: רישום נקודות החיתוך עם ציר איקס.", math_expression: "(4, 0) , (-3, 0)" },
            { verbal_explanation: "שלב 6: למציאת חיתוך עם ציר וואי, נציב איקס שווה לאפס ונקבל את האיבר החופשי.", math_expression: "y = -0^{2} + 0 + 12 \\Rightarrow y = 12" },
            { verbal_explanation: "שלב 7: רישום נקודת החיתוך עם ציר הוואי.", math_expression: "(0, 12)" }
        ],
        final_answer: "ציר איקס: (4,0) ו-(-3,0) | ציר וואי: (0,12)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה החסרה הבאה עם הצירים:\n\\( y = x^{2} - 16 \\)",
        options: ["ציר איקס: (4,0) ו-(-4,0) | ציר וואי: (0,-16)", "ציר איקס: (16,0) ו-(-16,0) | ציר וואי: (0,4)", "ציר איקס: אין | ציר וואי: (0,-16)", "ציר איקס: (4,0) | ציר וואי: (0,-16)"],
        correctAnswer: 0,
        hint: "כאשר חסר האיבר האמצעי (בי שווה אפס), ניתן לפתור את המשוואה על ידי העברת אגפים והוצאת שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת וואי שווה לאפס.", math_expression: "x^{2} - 16 = 0" },
            { verbal_explanation: "שלב 2: העברת שש עשרה לאגף ימין.", math_expression: "x^{2} = 16" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי לקבלת שני הפתרונות.", math_expression: "x = \\pm 4" },
            { verbal_explanation: "שלב 4: רישום נקודות החיתוך עם ציר האיקס.", math_expression: "(4, 0) , (-4, 0)" },
            { verbal_explanation: "שלב 5: הצבת איקס שווה לאפס במשוואה.", math_expression: "y = 0^{2} - 16" },
            { verbal_explanation: "שלב 6: קבלת ערכו של וואי.", math_expression: "y = -16" },
            { verbal_explanation: "שלב 7: כתיבת נקודת החיתוך עם ציר הוואי.", math_expression: "(0, -16)" }
        ],
        final_answer: "ציר איקס: (4,0) ו-(-4,0) | ציר וואי: (0,-16)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה הבאה עם הצירים:\n\\( y = 2x^{2} - 8x \\)",
        options: ["ציר איקס: (0,0) ו-(4,0) | ציר וואי: (0,0)", "ציר איקס: (2,0) ו-(-2,0) | ציר וואי: (0,-8)", "ציר איקס: (4,0) | ציר וואי: (0,8)", "ציר איקס: (0,0) ו-(8,0) | ציר וואי: (0,-8)"],
        correctAnswer: 0,
        hint: "שימו לב שחסר האיבר החופשי (סי שווה אפס). המשמעות היא שהפרבולה חותכת את ראשית הצירים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נציב וואי שווה לאפס.", math_expression: "2x^{2} - 8x = 0" },
            { verbal_explanation: "שלב 2: נוציא גורם משותף על מנת לפתור את המשוואה.", math_expression: "2x(x - 4) = 0" },
            { verbal_explanation: "שלב 3: נשווה את הגורם הראשון לאפס ונפתור.", math_expression: "2x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 4: נשווה את הגורם השני לאפס ונפתור.", math_expression: "x - 4 = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 5: נרשום את נקודות החיתוך עם ציר איקס.", math_expression: "(0, 0) , (4, 0)" },
            { verbal_explanation: "שלב 6: נציב איקס שווה לאפס. מיד נראה שהתוצאה היא אפס כי אין איבר חופשי.", math_expression: "y = 2(0)^{2} - 8(0) = 0" },
            { verbal_explanation: "שלב 7: נרשום את החיתוך עם ציר הוואי (המתלכד עם אחת מנקודות האיקס).", math_expression: "(0, 0)" }
        ],
        final_answer: "ציר איקס: (0,0) ו-(4,0) | ציר וואי: (0,0)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה הבאה עם הצירים:\n\\( y = x^{2} - 4x + 4 \\)",
        options: ["ציר איקס: (2,0) | ציר וואי: (0,4)", "ציר איקס: (2,0) ו-(-2,0) | ציר וואי: (0,4)", "ציר איקס: אין | ציר וואי: (0,-4)", "ציר איקס: (4,0) ו-(1,0) | ציר וואי: (0,4)"],
        correctAnswer: 0,
        hint: "ישויות שהן כפל מקוצר או טרינום מיוחד מניבות שורש יחיד, כלומר נקודת חיתוך אחת בלבד עם ציר איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואה לאפס למציאת חיתוך ציר איקס.", math_expression: "x^{2} - 4x + 4 = 0" },
            { verbal_explanation: "שלב 2: זיהוי התבנית ככפל מקוצר של ריבוע הפרש.", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 3: חילוץ הערך היחיד של איקס המקיים את המשוואה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 4: קביעת נקודת החיתוך הבודדת עם ציר איקס.", math_expression: "(2, 0)" },
            { verbal_explanation: "שלב 5: מציאת חיתוך עם ציר וואי על ידי הצבת אפס במקום איקס.", math_expression: "y = 0^{2} - 4(0) + 4" },
            { verbal_explanation: "שלב 6: התוצאה היא האיבר החופשי.", math_expression: "y = 4" },
            { verbal_explanation: "שלב 7: רישום נקודת החיתוך עם ציר הוואי.", math_expression: "(0, 4)" }
        ],
        final_answer: "ציר איקס: (2,0) | ציר וואי: (0,4)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מהן נקודות החיתוך עם הצירים של הפונקציה:\n\\( y = -2x^{2} + 8 \\)",
        options: ["ציר איקס: (2,0) ו-(-2,0) | ציר וואי: (0,8)", "ציר איקס: (4,0) ו-(-4,0) | ציר וואי: (0,8)", "ציר איקס: אין | ציר וואי: (0,-8)", "ציר איקס: (2,0) | ציר וואי: (0,-8)"],
        correctAnswer: 0,
        hint: "חלוקת המשוואה במינוס שתיים לפני הוצאת השורש תקל עליכם למצוא את האפסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נציב וואי שווה לאפס.", math_expression: "-2x^{2} + 8 = 0" },
            { verbal_explanation: "שלב 2: נעביר את השמונה לאגף השני.", math_expression: "-2x^{2} = -8" },
            { verbal_explanation: "שלב 3: נחלק במינוס שתיים.", math_expression: "x^{2} = 4" },
            { verbal_explanation: "שלב 4: נוציא שורש למציאת שני הערכים.", math_expression: "x = \\pm 2" },
            { verbal_explanation: "שלב 5: נרשום את נקודות החיתוך עם הציר האופקי.", math_expression: "(2, 0) , (-2, 0)" },
            { verbal_explanation: "שלב 6: נמצא את החיתוך עם הציר האנכי על ידי הצבת איקס שווה לאפס.", math_expression: "y = -2(0)^{2} + 8 \\Rightarrow y = 8" },
            { verbal_explanation: "שלב 7: נרשום את הנקודה על ציר וואי.", math_expression: "(0, 8)" }
        ],
        final_answer: "ציר איקס: (2,0) ו-(-2,0) | ציר וואי: (0,8)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה עם ציר האיקס ועם ציר הוואי:\n\\( y = x^{2} + 7x + 10 \\)",
        options: ["ציר איקס: (-2,0) ו-(-5,0) | ציר וואי: (0,10)", "ציר איקס: (2,0) ו-(5,0) | ציר וואי: (0,10)", "ציר איקס: (-10,0) ו-(1,0) | ציר וואי: (0,-10)", "ציר איקס: (2,0) ו-(-5,0) | ציר וואי: (0,-10)"],
        correctAnswer: 0,
        hint: "הטרינום כולל רק סימני חיבור, לכן שני המספרים שתמצאו בפירוק צריכים להיות חיוביים (והשורשים עצמם יהיו שליליים).",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה לאפס למציאת אפסי הפונקציה.", math_expression: "x^{2} + 7x + 10 = 0" },
            { verbal_explanation: "שלב 2: פירוק למכפלת גורמים על ידי טרינום (מכפלה עשר, סכום שבע).", math_expression: "(x + 2)(x + 5) = 0" },
            { verbal_explanation: "שלב 3: מציאת ערכי האיקס שמאפסים כל סוגריים.", math_expression: "x = -2 , x = -5" },
            { verbal_explanation: "שלב 4: רישום נקודות החיתוך עם ציר האופקי.", math_expression: "(-2, 0) , (-5, 0)" },
            { verbal_explanation: "שלב 5: מציאת החיתוך עם הציר האנכי, נציב איקס אפס.", math_expression: "y = 0^{2} + 7(0) + 10" },
            { verbal_explanation: "שלב 6: חישוב התוצאה והבנה שהיא האיבר החופשי.", math_expression: "y = 10" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה על ציר וואי.", math_expression: "(0, 10)" }
        ],
        final_answer: "ציר איקס: (-2,0) ו-(-5,0) | ציר וואי: (0,10)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה הבאה עם הצירים:\n\\( y = -x^{2} - 6x - 9 \\)",
        options: ["ציר איקס: (-3,0) | ציר וואי: (0,-9)", "ציר איקס: (3,0) | ציר וואי: (0,9)", "ציר איקס: (3,0) ו-(-3,0) | ציר וואי: (0,-9)", "אין חיתוך עם ציר איקס | ציר וואי: (0,-9)"],
        correctAnswer: 0,
        hint: "הוציאו מינוס אחד כגורם משותף מחוץ לסוגריים ותגלו כפל מקוצר פשוט.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת וואי שווה לאפס.", math_expression: "-x^{2} - 6x - 9 = 0" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במינוס אחד לקבלת סימנים נוחים.", math_expression: "x^{2} + 6x + 9 = 0" },
            { verbal_explanation: "שלב 3: זיהוי נוסחת כפל מקוצר.", math_expression: "(x + 3)^{2} = 0" },
            { verbal_explanation: "שלב 4: חילוץ התשובה היחידה לאיקס.", math_expression: "x = -3" },
            { verbal_explanation: "שלב 5: רישום הנקודה הבודדת שבה הפרבולה משיקה לציר איקס.", math_expression: "(-3, 0)" },
            { verbal_explanation: "שלב 6: הצבת איקס אפס למציאת החיתוך עם הציר האנכי.", math_expression: "y = -(0)^{2} - 6(0) - 9 \\Rightarrow y = -9" },
            { verbal_explanation: "שלב 7: רישום הנקודה המלאה.", math_expression: "(0, -9)" }
        ],
        final_answer: "ציר איקס: (-3,0) | ציר וואי: (0,-9)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מהן נקודות החיתוך של הפונקציה הריבועית הבאה עם הצירים:\n\\( y = 3x^{2} - 12x + 9 \\)",
        options: ["ציר איקס: (1,0) ו-(3,0) | ציר וואי: (0,9)", "ציר איקס: (-1,0) ו-(-3,0) | ציר וואי: (0,-9)", "ציר איקס: (9,0) ו-(3,0) | ציר וואי: (0,1)", "ציר איקס: אין | ציר וואי: (0,9)"],
        correctAnswer: 0,
        hint: "חלקו את כל איברי הפונקציה בשלוש לאחר שהשוויתם לאפס כדי להקל על מציאת השורשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואה לאפס.", math_expression: "3x^{2} - 12x + 9 = 0" },
            { verbal_explanation: "שלב 2: חלוקת כל המשוואה בשלוש.", math_expression: "x^{2} - 4x + 3 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום (מכפלה שלוש, סכום מינוס ארבע).", math_expression: "(x - 1)(x - 3) = 0" },
            { verbal_explanation: "שלב 4: מציאת ערכי איקס.", math_expression: "x = 1 , x = 3" },
            { verbal_explanation: "שלב 5: כתיבת הנקודות על ציר איקס.", math_expression: "(1, 0) , (3, 0)" },
            { verbal_explanation: "שלב 6: מציאת נקודת החיתוך עם ציר וואי על ידי הצבת איקס אפס במשוואה המקורית.", math_expression: "y = 3(0)^{2} - 12(0) + 9 = 9" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה על ציר וואי.", math_expression: "(0, 9)" }
        ],
        final_answer: "ציר איקס: (1,0) ו-(3,0) | ציר וואי: (0,9)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה הבאה עם הצירים:\n\\( y = -3x^{2} + 27 \\)",
        options: ["ציר איקס: (3,0) ו-(-3,0) | ציר וואי: (0,27)", "ציר איקס: (9,0) ו-(-9,0) | ציר וואי: (0,-27)", "ציר איקס: אין חיתוך | ציר וואי: (0,27)", "ציר איקס: (3,0) | ציר וואי: (0,-27)"],
        correctAnswer: 0,
        hint: "משוואה ריבועית חסרה. העבירו את המספר לאגף ימין וחלקו במקדם לפני שתוציאו שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת וואי שווה לאפס.", math_expression: "-3x^{2} + 27 = 0" },
            { verbal_explanation: "שלב 2: העברת איקסים וחילוק במינוס שלוש.", math_expression: "-3x^{2} = -27 \\Rightarrow x^{2} = 9" },
            { verbal_explanation: "שלב 3: הוצאת שורש למציאת ערכי איקס.", math_expression: "x = \\pm 3" },
            { verbal_explanation: "שלב 4: רישום הנקודות עם הציר האופקי.", math_expression: "(3, 0) , (-3, 0)" },
            { verbal_explanation: "שלב 5: חישוב החיתוך עם הציר האנכי, נציב איקס שווה לאפס.", math_expression: "y = -3(0)^{2} + 27" },
            { verbal_explanation: "שלב 6: התוצאה היא האיבר החופשי.", math_expression: "y = 27" },
            { verbal_explanation: "שלב 7: הנקודה הנדרשת.", math_expression: "(0, 27)" }
        ],
        final_answer: "ציר איקס: (3,0) ו-(-3,0) | ציר וואי: (0,27)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מהן נקודות החיתוך של הפונקציה:\n\\( y = x^{2} + x - 2 \\)",
        options: ["ציר איקס: (1,0) ו-(-2,0) | ציר וואי: (0,-2)", "ציר איקס: (-1,0) ו-(2,0) | ציר וואי: (0,2)", "ציר איקס: (1,0) ו-(2,0) | ציר וואי: (0,-2)", "ציר איקס: אין חיתוך | ציר וואי: (0,-2)"],
        correctAnswer: 0,
        hint: "בטרינום שבו המכפלה שלילית, אחד המספרים חיובי והשני שלילי. שימו לב מי מהם גדול יותר בערכו המוחלט.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת הפונקציה לאפס.", math_expression: "x^{2} + x - 2 = 0" },
            { verbal_explanation: "שלב 2: פירוק לטרינום (סכום אחת, מכפלה מינוס שתיים).", math_expression: "(x - 1)(x + 2) = 0" },
            { verbal_explanation: "שלב 3: מציאת הערכים המאפסים כל סוגריים.", math_expression: "x = 1 , x = -2" },
            { verbal_explanation: "שלב 4: רישום הנקודות המתאימות לציר איקס.", math_expression: "(1, 0) , (-2, 0)" },
            { verbal_explanation: "שלב 5: מציאת החיתוך עם ציר וואי (האיבר החופשי).", math_expression: "y = 0^{2} + 0 - 2" },
            { verbal_explanation: "שלב 6: התוצאה המתקבלת מההצבה.", math_expression: "y = -2" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה לציר וואי.", math_expression: "(0, -2)" }
        ],
        final_answer: "ציר איקס: (1,0) ו-(-2,0) | ציר וואי: (0,-2)"
    },
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך עם הצירים (אפסים)",
        question_text: "מצאו את נקודות החיתוך של הפרבולה הבאה עם הצירים:\n\\( y = 0.5x^{2} - 2x - 6 \\)",
        options: ["ציר איקס: (6,0) ו-(-2,0) | ציר וואי: (0,-6)", "ציר איקס: (-6,0) ו-(2,0) | ציר וואי: (0,6)", "ציר איקס: (3,0) ו-(-1,0) | ציר וואי: (0,-6)", "אין חיתוך עם ציר איקס | ציר וואי: (0,-6)"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה בשתיים כדי להעלים את השבר העשרוני ולהקל על הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת אפס למציאת חיתוך ציר אופקי.", math_expression: "0.5x^{2} - 2x - 6 = 0" },
            { verbal_explanation: "שלב 2: הכפלת כל המשוואה בשתיים.", math_expression: "x^{2} - 4x - 12 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום.", math_expression: "(x - 6)(x + 2) = 0" },
            { verbal_explanation: "שלב 4: חילוץ התוצאות מתוך הסוגריים.", math_expression: "x = 6 , x = -2" },
            { verbal_explanation: "שלב 5: רישום הנקודות על ציר איקס.", math_expression: "(6, 0) , (-2, 0)" },
            { verbal_explanation: "שלב 6: מציאת החיתוך עם ציר וואי מהמשוואה המקורית.", math_expression: "y = 0.5(0)^{2} - 2(0) - 6 = -6" },
            { verbal_explanation: "שלב 7: הרישום הסופי של החיתוך האנכי.", math_expression: "(0, -6)" }
        ],
        final_answer: "ציר איקס: (6,0) ו-(-2,0) | ציר וואי: (0,-6)"
    },

    // תחומי עליה וירידה (12 שאלות)
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו את תחומי העלייה והירידה של הפרבולה:\n\\( y = x^{2} - 8x + 12 \\)",
        options: ["עליה: איקס גדול מ-4 | ירידה: איקס קטן מ-4", "עליה: איקס קטן מ-4 | ירידה: איקס גדול מ-4", "עליה: איקס גדול מ-8 | ירידה: איקס קטן מ-8", "עליה: איקס קטן מ-2 | ירידה: איקס גדול מ-2"],
        correctAnswer: 0,
        hint: "מצאו קודם את שיעור האיקס של הקודקוד. מכיוון שהפרבולה 'מחייכת' (המקדם א חיובי), היא יורדת לפני הקודקוד ועולה אחריו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי סוג הפרבולה. מקדם א חיובי, לכן יש נקודת מינימום.", math_expression: "a=1 > 0" },
            { verbal_explanation: "שלב 2: מציאת קודקוד הפרבולה בעזרת נוסחת ציר הסימטריה.", math_expression: "x = -(-8) : (2x1)" },
            { verbal_explanation: "שלב 3: חישוב הערך.", math_expression: "x = 8 : 2 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 4: הבנת משמעות המינימום: הפונקציה יורדת עד לנקודה זו ועולה אחריה.", math_expression: "\\text{מינימום ב } x=4" },
            { verbal_explanation: "שלב 5: כתיבת תחום הירידה (איקסים קטנים מארבע).", math_expression: "x < 4" },
            { verbal_explanation: "שלב 6: כתיבת תחום העלייה (איקסים גדולים מארבע).", math_expression: "x > 4" },
            { verbal_explanation: "שלב 7: רישום התשובה הסופית כנדרש.", math_expression: "\\text{עליה: } x>4 \\text{ , ירידה: } x<4" }
        ],
        final_answer: "עליה: איקס גדול מ-4 | ירידה: איקס קטן מ-4"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו את תחומי העלייה והירידה של הפרבולה:\n\\( y = -x^{2} + 6x - 5 \\)",
        options: ["עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3", "עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3", "עליה: איקס קטן מ-6 | ירידה: איקס גדול מ-6", "עליה: איקס גדול מ-1 | ירידה: איקס קטן מ-1"],
        correctAnswer: 0,
        hint: "זוהי פרבולה 'בוכה' (מקדם א שלילי) ולכן יש לה נקודת מקסימום. היא עולה עד לקודקוד ויורדת לאחריו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי פרבולת מקסימום בגלל המקדם השלילי.", math_expression: "a = -1 < 0" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת ציר הסימטריה למציאת קודקוד.", math_expression: "x = -6 : (2x(-1))" },
            { verbal_explanation: "שלב 3: ביצוע חלוקה.", math_expression: "x = -6 : -2 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 4: הגדרת התנהגות הפונקציה לפני נקודת המקסימום (עולה).", math_expression: "\\text{עליה כאשר } x < 3" },
            { verbal_explanation: "שלב 5: הגדרת התנהגות הפונקציה אחרי נקודת המקסימום (יורדת).", math_expression: "\\text{ירידה כאשר } x > 3" },
            { verbal_explanation: "שלב 6: אימות ההתאמה בין הגרף לתחומים הרשומים.", math_expression: "\\text{מקסימום}" },
            { verbal_explanation: "שלב 7: סיכום התוצאות.", math_expression: "\\text{עליה: } x<3 \\text{ , ירידה: } x>3" }
        ],
        final_answer: "עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהם תחומי העלייה והירידה של:\n\\( y = 2x^{2} + 12x + 10 \\)",
        options: ["עליה: איקס גדול מ-(-3) | ירידה: איקס קטן מ-(-3)", "עליה: איקס קטן מ-(-3) | ירידה: איקס גדול מ-(-3)", "עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3", "עליה: איקס קטן מ-6 | ירידה: איקס גדול מ-6"],
        correctAnswer: 0,
        hint: "הפרבולה ישרה (מינימום). מצאו את נקודת הקודקוד שלה לפי הנוסחה ולאחר מכן הגדירו תחומים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי סוג הפרבולה.", math_expression: "a=2 \\Rightarrow \\text{מינימום}" },
            { verbal_explanation: "שלב 2: מציאת איקס קודקוד.", math_expression: "x = -12 : (2x2)" },
            { verbal_explanation: "שלב 3: החישוב נותן לנו את ציר הסימטריה.", math_expression: "x = -12 : 4 \\Rightarrow x = -3" },
            { verbal_explanation: "שלב 4: מכיוון שיש נקודת מינימום, הערכים קטנים מנקודה זו הם בירידה.", math_expression: "x < -3 \\Rightarrow \\text{ירידה}" },
            { verbal_explanation: "שלב 5: הערכים הגדולים מנקודה זו הם בעלייה.", math_expression: "x > -3 \\Rightarrow \\text{עליה}" },
            { verbal_explanation: "שלב 6: וידוא נכונות התחומים בהתאם לגרף פרבולה מחייכת.", math_expression: "\\text{מינימום}" },
            { verbal_explanation: "שלב 7: רישום הפתרון לבחירה.", math_expression: "\\text{עליה: } x > -3 \\text{ , ירידה: } x < -3" }
        ],
        final_answer: "עליה: איקס גדול מ-(-3) | ירידה: איקס קטן מ-(-3)"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו תחומי עליה וירידה עבור הפרבולה:\n\\( y = -2x^{2} - 8x \\)",
        options: ["עליה: איקס קטן מ-(-2) | ירידה: איקס גדול מ-(-2)", "עליה: איקס גדול מ-(-2) | ירידה: איקס קטן מ-(-2)", "עליה: איקס קטן מ-2 | ירידה: איקס גדול מ-2", "עליה: איקס גדול מ-0 | ירידה: איקס קטן מ-0"],
        correctAnswer: 0,
        hint: "זו פרבולה הפוכה. מצאו את נקודת המקסימום שבה הפונקציה מפסיקה לעלות ומתחילה לרדת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי פרבולת מקסימום.", math_expression: "a = -2 < 0" },
            { verbal_explanation: "שלב 2: מציאת ציר הסימטריה.", math_expression: "x = -(-8) : (2x(-2))" },
            { verbal_explanation: "שלב 3: חישוב איקס של קודקוד.", math_expression: "x = 8 : -4 \\Rightarrow x = -2" },
            { verbal_explanation: "שלב 4: בפונקציית מקסימום, הגרף עולה לפני הנקודה.", math_expression: "x < -2 \\Rightarrow \\text{עליה}" },
            { verbal_explanation: "שלב 5: לאחר הנקודה הגרף יורד.", math_expression: "x > -2 \\Rightarrow \\text{ירידה}" },
            { verbal_explanation: "שלב 6: בדיקה ורישום המסקנות.", math_expression: "\\text{קודקוד במינוס שתיים}" },
            { verbal_explanation: "שלב 7: תבנית התשובה הנדרשת.", math_expression: "\\text{עליה: } x < -2 \\text{ , ירידה: } x > -2" }
        ],
        final_answer: "עליה: איקס קטן מ-(-2) | ירידה: איקס גדול מ-(-2)"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהם תחומי העלייה והירידה של הפונקציה:\n\\( y = x^{2} - 25 \\)",
        options: ["עליה: איקס גדול מ-0 | ירידה: איקס קטן מ-0", "עליה: איקס קטן מ-0 | ירידה: איקס גדול מ-0", "עליה: איקס גדול מ-5 | ירידה: איקס קטן מ-5", "עליה: איקס קטן מ-5 | ירידה: איקס גדול מ-5"],
        correctAnswer: 0,
        hint: "כאשר האיבר בי חסר (כלומר המקדם של איקס הוא אפס), ציר הסימטריה נמצא תמיד באפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי פרבולת מינימום שבה מקדם בי שווה אפס.", math_expression: "a=1, b=0" },
            { verbal_explanation: "שלב 2: מציאת ציר הסימטריה על פי הנוסחה.", math_expression: "x = -0 : 2 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 3: הפונקציה היא מסוג מינימום.", math_expression: "\\text{מינימום באפס}" },
            { verbal_explanation: "שלב 4: מסיקים שלפני אפס הגרף יורד.", math_expression: "\\text{ירידה: } x < 0" },
            { verbal_explanation: "שלב 5: מסיקים שאחרי אפס הגרף עולה.", math_expression: "\\text{עליה: } x > 0" },
            { verbal_explanation: "שלב 6: וידוא כל הנתונים בראש.", math_expression: "x=0" },
            { verbal_explanation: "שלב 7: רישום הפתרון הסופי.", math_expression: "\\text{עליה: } x>0 \\text{ , ירידה: } x<0" }
        ],
        final_answer: "עליה: איקס גדול מ-0 | ירידה: איקס קטן מ-0"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו את התחומים עבור הפרבולה הבאה:\n\\( y = -x^{2} + 16 \\)",
        options: ["עליה: איקס קטן מ-0 | ירידה: איקס גדול מ-0", "עליה: איקס גדול מ-0 | ירידה: איקס קטן מ-0", "עליה: איקס קטן מ-4 | ירידה: איקס גדול מ-4", "עליה: איקס גדול מ-4 | ירידה: איקס קטן מ-4"],
        correctAnswer: 0,
        hint: "זוהי פרבולה הפוכה אשר קודקודה יושב בדיוק על ציר הוואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי פרבולת מקסימום עם מקדם בי מאופס.", math_expression: "a=-1, b=0" },
            { verbal_explanation: "שלב 2: קביעת ציר הסימטריה (איקס של הקודקוד).", math_expression: "x = 0" },
            { verbal_explanation: "שלב 3: נקודת מקסימום משמעותה שהפונקציה מגיעה לשיא ויורדת.", math_expression: "\\text{מקסימום}" },
            { verbal_explanation: "שלב 4: לפני ההגעה לשיא (משמאל לציר וואי), הפונקציה עולה.", math_expression: "\\text{עליה: } x < 0" },
            { verbal_explanation: "שלב 5: לאחר השיא (מימין לציר וואי), הפונקציה יורדת.", math_expression: "\\text{ירידה: } x > 0" },
            { verbal_explanation: "שלב 6: אימות על ידי הצבת ערכים דמיוניים.", math_expression: "\\text{בדיקה}" },
            { verbal_explanation: "שלב 7: ניסוח כפי שמופיע באפשרויות.", math_expression: "\\text{עליה: איקס קטן מאפס | ירידה: איקס גדול מאפס}" }
        ],
        final_answer: "עליה: איקס קטן מ-0 | ירידה: איקס גדול מ-0"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו תחומי עליה וירידה לפרבולה:\n\\( y = x^{2} - 10x + 25 \\)",
        options: ["עליה: איקס גדול מ-5 | ירידה: איקס קטן מ-5", "עליה: איקס קטן מ-5 | ירידה: איקס גדול מ-5", "עליה: איקס גדול מ-10 | ירידה: איקס קטן מ-10", "עליה: כל איקס | ירידה: אין"],
        correctAnswer: 0,
        hint: "הפונקציה הזו משיקה לציר האיקס. קודקודה נמצא על ציר האיקס עצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הפונקציה היא פרבולת מינימום.", math_expression: "a=1 > 0" },
            { verbal_explanation: "שלב 2: מציאת ציר הסימטריה בנוסחה הרגילה.", math_expression: "x = -(-10) : 2" },
            { verbal_explanation: "שלב 3: הערך המתקבל הוא חמש.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 4: זו נקודת המינימום היחידה.", math_expression: "\\text{מינימום ב } x=5" },
            { verbal_explanation: "שלב 5: ירידה מתרחשת לפני הקודקוד.", math_expression: "x < 5" },
            { verbal_explanation: "שלב 6: עליה מתרחשת לאחר הקודקוד.", math_expression: "x > 5" },
            { verbal_explanation: "שלב 7: רישום הפתרון בצורה מסודרת.", math_expression: "\\text{עליה: } x>5 \\text{ , ירידה: } x<5" }
        ],
        final_answer: "עליה: איקס גדול מ-5 | ירידה: איקס קטן מ-5"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "מצאו את התחומים של:\n\\( y = -x^{2} - 8x - 14 \\)",
        options: ["עליה: איקס קטן מ-(-4) | ירידה: איקס גדול מ-(-4)", "עליה: איקס גדול מ-(-4) | ירידה: איקס קטן מ-(-4)", "עליה: איקס קטן מ-4 | ירידה: איקס גדול מ-4", "עליה: איקס גדול מ-8 | ירידה: איקס קטן מ-8"],
        correctAnswer: 0,
        hint: "שימו לב היטב לסימנים בחישוב ציר הסימטריה, המונה והמכנה שניהם יהיו שליליים או חיוביים תלוי איך תציבו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מקדם א שלילי ולכן הגרף הוא פרבולת מקסימום.", math_expression: "a = -1" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה: מינוס של מינוס שמונה לחלק למינוס שתיים.", math_expression: "x = 8 : -2" },
            { verbal_explanation: "שלב 3: התוצאה של ציר הסימטריה היא שלילית.", math_expression: "x = -4" },
            { verbal_explanation: "שלב 4: מאחר וזה מקסימום, הפונקציה עולה תחילה.", math_expression: "\\text{עליה: } x < -4" },
            { verbal_explanation: "שלב 5: ואז הפונקציה יורדת לאחר השיא.", math_expression: "\\text{ירידה: } x > -4" },
            { verbal_explanation: "שלב 6: אין צורך לחשב את ערך הוואי לשם מציאת התחומים.", math_expression: "\\text{נקודת מקסימום במינוס ארבע}" },
            { verbal_explanation: "שלב 7: בחירת התשובה הנכונה מהרשימה.", math_expression: "\\text{עליה: איקס קטן ממינוס ארבע}" }
        ],
        final_answer: "עליה: איקס קטן מ-(-4) | ירידה: איקס גדול מ-(-4)"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו את התחומים עבור:\n\\( y = 0.5x^{2} - 3x \\)",
        options: ["עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3", "עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3", "עליה: איקס גדול מ-1.5 | ירידה: איקס קטן מ-1.5", "עליה: איקס קטן מ-1.5 | ירידה: איקס גדול מ-1.5"],
        correctAnswer: 0,
        hint: "חלוקה של מספר בחצי מקבילה למעשה להכפלתו בשתיים. היעזרו בכך לחישוב הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים של הפונקציה (מינימום).", math_expression: "a = 0.5 > 0" },
            { verbal_explanation: "שלב 2: מציאת ציר הסימטריה.", math_expression: "x = -(-3) : (2x0.5)" },
            { verbal_explanation: "שלב 3: חישוב המכנה שהוא אחת.", math_expression: "x = 3 : 1 \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 4: הבנת ההתנהגות (יורדת ואז עולה).", math_expression: "\\text{מינימום ב } x=3" },
            { verbal_explanation: "שלב 5: תחום ירידה.", math_expression: "x < 3" },
            { verbal_explanation: "שלב 6: תחום עלייה.", math_expression: "x > 3" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "\\text{עליה: } x>3 \\text{ , ירידה: } x<3" }
        ],
        final_answer: "עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהם התחומים במשוואה הבאה:\n\\( y = -0.5x^{2} - 2x + 1 \\)",
        options: ["עליה: איקס קטן מ-(-2) | ירידה: איקס גדול מ-(-2)", "עליה: איקס גדול מ-(-2) | ירידה: איקס קטן מ-(-2)", "עליה: איקס קטן מ-2 | ירידה: איקס גדול מ-2", "עליה: איקס גדול מ-2 | ירידה: איקס קטן מ-2"],
        correctAnswer: 0,
        hint: "הפרבולה הפוכה. שוב, שימו לב כי פעמיים המקדם א שווה למינוס אחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הפרבולה היא מקסימום בגלל מקדם א שלילי.", math_expression: "a = -0.5 < 0" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הקודקוד.", math_expression: "x = -(-2) : (2x(-0.5))" },
            { verbal_explanation: "שלב 3: חלוקת שתיים במינוס אחת.", math_expression: "x = 2 : -1 \\Rightarrow x = -2" },
            { verbal_explanation: "שלב 4: זו נקודת שיא שממנה הגרף מתחיל לרדת.", math_expression: "\\text{מקסימום במינוס שתיים}" },
            { verbal_explanation: "שלב 5: תחום העלייה הוא לפני השיא.", math_expression: "\\text{עליה: } x < -2" },
            { verbal_explanation: "שלב 6: תחום הירידה הוא אחרי השיא.", math_expression: "\\text{ירידה: } x > -2" },
            { verbal_explanation: "שלב 7: התשובה הדרושה לבחירה.", math_expression: "\\text{עליה: איקס קטן ממינוס שתיים}" }
        ],
        final_answer: "עליה: איקס קטן מ-(-2) | ירידה: איקס גדול מ-(-2)"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "קבעו את תחומי הפונקציה הריבועית:\n\\( y = 3x^{2} + 18x \\)",
        options: ["עליה: איקס גדול מ-(-3) | ירידה: איקס קטן מ-(-3)", "עליה: איקס קטן מ-(-3) | ירידה: איקס גדול מ-(-3)", "עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3", "עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3"],
        correctAnswer: 0,
        hint: "הפרבולה מטיפוס מינימום. חלקו מינוס שמונה עשרה בפעמיים שלוש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי סוג פרבולה כמינימום.", math_expression: "a=3 > 0" },
            { verbal_explanation: "שלב 2: חישוב הקודקוד.", math_expression: "x = -18 : (2x3)" },
            { verbal_explanation: "שלב 3: תוצאת החילוק של מינוס שמונה עשרה בשש.", math_expression: "x = -3" },
            { verbal_explanation: "שלב 4: קביעת נקודת המינימום.", math_expression: "\\text{נקודת שפל במינוס שלוש}" },
            { verbal_explanation: "שלב 5: החלק היורד של הגרף.", math_expression: "x < -3" },
            { verbal_explanation: "שלב 6: החלק העולה של הגרף.", math_expression: "x > -3" },
            { verbal_explanation: "שלב 7: סידור התשובה.", math_expression: "\\text{עליה: } x>-3 \\text{ , ירידה: } x<-3" }
        ],
        final_answer: "עליה: איקס גדול מ-(-3) | ירידה: איקס קטן מ-(-3)"
    },
    {
        topic: "parabola_172",
        subTopic: "תחומי עליה וירידה",
        question_text: "מהם תחומי העלייה והירידה של:\n\\( y = -3x^{2} + 18x - 10 \\)",
        options: ["עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3", "עליה: איקס גדול מ-3 | ירידה: איקס קטן מ-3", "עליה: איקס קטן מ-(-3) | ירידה: איקס גדול מ-(-3)", "עליה: איקס גדול מ-(-3) | ירידה: איקס קטן מ-(-3)"],
        correctAnswer: 0,
        hint: "שימו לב, מקדם א הוא מינוס שלוש, כך שהמכנה בחילוק יהיה מינוס שש. הפרבולה היא הפוכה (מקסימום).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי פרבולת מקסימום.", math_expression: "a = -3 < 0" },
            { verbal_explanation: "שלב 2: חישוב איקס של ציר הסימטריה.", math_expression: "x = -18 : (2x(-3))" },
            { verbal_explanation: "שלב 3: חלוקה מדויקת של מינוס שמונה עשרה במינוס שש.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 4: זוהי נקודת שיא, לכן לפניה יש עליה.", math_expression: "\\text{עליה: } x < 3" },
            { verbal_explanation: "שלב 5: ואחריה יש ירידה.", math_expression: "\\text{ירידה: } x > 3" },
            { verbal_explanation: "שלב 6: בדיקה שהסימנים נכונים בהתאם לגרף פרבולה בוכה.", math_expression: "\\text{נכון}" },
            { verbal_explanation: "שלב 7: התשובה הנבחרת.", math_expression: "\\text{עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3}" }
        ],
        final_answer: "עליה: איקס קטן מ-3 | ירידה: איקס גדול מ-3"
    },// ==========================================
    // תת נושא 4: תחומי חיוביות ושליליות (12 שאלות)
    // ==========================================

    // שאלה מספר 37
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מצאו את תחומי החיוביות והשליליות של הפרבולה הבאה:\n\\( y = x^{2} - 4x + 3 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='380' y2='100' stroke='#64748b' stroke-width='2'/><line x1='200' y1='20' x2='200' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 100 20 Q 200 250 300 20' fill='none' stroke='#3b82f6' stroke-width='4'/><rect x='20' y='20' width='110' height='80' fill='#3b82f6' opacity='0.2'/><rect x='270' y='20' width='110' height='80' fill='#3b82f6' opacity='0.2'/></svg></div>",
        options: ["חיובית: איקס גדול משלוש או קטן מאחת | שלילית: איקס בין אחת לשלוש", "חיובית: איקס בין אחת לשלוש | שלילית: איקס גדול משלוש או קטן מאחת", "חיובית: איקס גדול משלוש | שלילית: איקס קטן מאחת", "חיובית: כל איקס | שלילית: אין"],
        correctAnswer: 0,
        hint: "מצאו את נקודות החיתוך עם ציר איקס תחילה. מכיוון שהפרבולה מחייכת, היא חיובית (מעל הציר) בקצוות ושלילית (מתחת לציר) בין נקודות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה את הפונקציה לאפס כדי למצוא את נקודות האפס שלה.", math_expression: "x^{2} - 4x + 3 = 0" },
            { verbal_explanation: "שלב 2: נפרק לטרינום. מספרים שמכפלתם שלוש וסכומם מינוס ארבע הם מינוס אחת ומינוס שלוש.", math_expression: "(x - 1)(x - 3) = 0" },
            { verbal_explanation: "שלב 3: נחלץ את נקודות החיתוך על ידי השוואת כל סוגריים לאפס.", math_expression: "x = 1 , x = 3" },
            { verbal_explanation: "שלב 4: נזהה את סוג הפרבולה. המקדם של איקס בריבוע חיובי ולכן היא ישרה (מחייכת).", math_expression: "a = 1" },
            { verbal_explanation: "שלב 5: נסיק שהפרבולה יורדת מתחת לציר איקס בין אחת לשלוש ולכן התחום השלילי נמצא שם.", math_expression: "1 < x < 3" },
            { verbal_explanation: "שלב 6: מעל ציר איקס (התחום החיובי) הגרף נמצא מימין לשלוש ומשמאל לאחת.", math_expression: "x > 3 , x < 1" },
            { verbal_explanation: "שלב 7: נרשום את התשובה הסופית במדויק. עבור וואי חיובי ועבור וואי שלילי.", math_expression: "y>0 \\Rightarrow x>3 , x<1 \\quad | \\quad y<0 \\Rightarrow 1<x<3" }
        ],
        final_answer: "חיובית: איקס גדול משלוש או קטן מאחת | שלילית: איקס בין אחת לשלוש"
    },

    // שאלה מספר 38
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו את תחומי החיוביות והשליליות של הפונקציה:\n\\( y = -x^{2} + 6x - 8 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='380' y2='150' stroke='#64748b' stroke-width='2'/><line x1='200' y1='20' x2='200' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 100 180 Q 200 -50 300 180' fill='none' stroke='#ef4444' stroke-width='4'/><rect x='115' y='20' width='170' height='130' fill='#ef4444' opacity='0.2'/></svg></div>",
        options: ["חיובית: איקס בין שתיים לארבע | שלילית: איקס גדול מארבע או קטן משתיים", "חיובית: איקס גדול מארבע או קטן משתיים | שלילית: איקס בין שתיים לארבע", "חיובית: איקס גדול מארבע | שלילית: איקס קטן משתיים", "חיובית: איקס קטן מארבע | שלילית: איקס גדול מארבע"],
        correctAnswer: 0,
        hint: "שימו לב שהפרבולה הפוכה. היא תהיה חיובית (השטח המסומן מעל הציר) בדיוק בין שתי נקודות החיתוך שלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת האפסים על ידי השוואת הפונקציה לאפס.", math_expression: "-x^{2} + 6x - 8 = 0" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה במינוס אחת לטובת נוחות החישוב.", math_expression: "x^{2} - 6x + 8 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום.", math_expression: "(x - 2)(x - 4) = 0" },
            { verbal_explanation: "שלב 4: חילוץ האפסים של המשוואה.", math_expression: "x = 2 , x = 4" },
            { verbal_explanation: "שלב 5: חזרה לפונקציה המקורית לזיהוי המקדם. הוא שלילי ולכן זו פרבולה בוכה.", math_expression: "a = -1" },
            { verbal_explanation: "שלב 6: הגרף נמצא מעל ציר איקס (חיובי) בחלק המרכזי.", math_expression: "2 < x < 4" },
            { verbal_explanation: "שלב 7: הגרף נמצא מתחת לציר איקס (שלילי) מחוץ לתחום זה.", math_expression: "y>0 \\Rightarrow 2<x<4 \\quad | \\quad y<0 \\Rightarrow x>4 , x<2" }
        ],
        final_answer: "חיובית: איקס בין שתיים לארבע | שלילית: איקס גדול מארבע או קטן משתיים"
    },

    // שאלה מספר 39
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מצאו את התחומים עבור הפרבולה הבאה:\n\\( y = x^{2} - 25 \\)",
        options: ["חיובית: איקס גדול מחמש או קטן ממינוס חמש | שלילית: איקס בין מינוס חמש לחמש", "חיובית: איקס בין מינוס חמש לחמש | שלילית: איקס גדול מחמש או קטן ממינוס חמש", "חיובית: איקס גדול מעשרים וחמש | שלילית: איקס קטן מעשרים וחמש", "חיובית: כל איקס | שלילית: אין"],
        correctAnswer: 0,
        hint: "העבירו את העשרים וחמש לאגף השני, הוציאו שורש לקבלת החיתוכים, וציירו סקיצה קטנה בראש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס למציאת נקודות האפס.", math_expression: "x^{2} - 25 = 0" },
            { verbal_explanation: "שלב 2: העברת המספר לאגף ימין.", math_expression: "x^{2} = 25" },
            { verbal_explanation: "שלב 3: הוצאת שורש לקבלת שתי נקודות חיתוך.", math_expression: "x = 5 , x = -5" },
            { verbal_explanation: "שלב 4: זוהי פרבולה מחייכת היורדת מתחת לציר בין שתי הנקודות הללו.", math_expression: "a = 1" },
            { verbal_explanation: "שלב 5: התחום השלילי הוא החלק האמצעי.", math_expression: "-5 < x < 5" },
            { verbal_explanation: "שלב 6: התחום החיובי הוא בשני הקצוות החיצוניים.", math_expression: "x > 5 , x < -5" },
            { verbal_explanation: "שלב 7: הרישום הסופי התואם לגרף.", math_expression: "y>0 \\Rightarrow x>5 , x<-5 \\quad | \\quad y<0 \\Rightarrow -5<x<5" }
        ],
        final_answer: "חיובית: איקס גדול מחמש או קטן ממינוס חמש | שלילית: איקס בין מינוס חמש לחמש"
    },

    // שאלה מספר 40
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו מתי הפונקציה הבאה חיובית ומתי שלילית:\n\\( y = -x^{2} + 9 \\)",
        options: ["חיובית: איקס בין מינוס שלוש לשלוש | שלילית: איקס גדול משלוש או קטן ממינוס שלוש", "חיובית: איקס גדול משלוש או קטן ממינוס שלוש | שלילית: איקס בין מינוס שלוש לשלוש", "חיובית: איקס גדול מתשע | שלילית: איקס קטן מתשע", "חיובית: איקס קטן משלוש | שלילית: איקס גדול משלוש"],
        correctAnswer: 0,
        hint: "הפרבולה הפוכה. החלק החיובי שלה יהיה התחום הכלוא בין שתי נקודות החיתוך.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת אפס במקום וואי.", math_expression: "-x^{2} + 9 = 0" },
            { verbal_explanation: "שלב 2: העברת איקס בריבוע אגף כדי להיפטר מהמינוס.", math_expression: "x^{2} = 9" },
            { verbal_explanation: "שלב 3: הוצאת שורש למציאת חיתוכים.", math_expression: "x = 3 , x = -3" },
            { verbal_explanation: "שלב 4: מאחר והפרבולה בוכה, היא עולה מעל ציר איקס.", math_expression: "a = -1" },
            { verbal_explanation: "שלב 5: התחום החיובי מוגדר בין שתי הנקודות.", math_expression: "-3 < x < 3" },
            { verbal_explanation: "שלב 6: התחום השלילי נמצא משני עברי הנקודות כלפי מטה.", math_expression: "x > 3 , x < -3" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של התחומים במתמטיקה נטו.", math_expression: "y>0 \\Rightarrow -3<x<3 \\quad | \\quad y<0 \\Rightarrow x>3 , x<-3" }
        ],
        final_answer: "חיובית: איקס בין מינוס שלוש לשלוש | שלילית: איקס גדול משלוש או קטן ממינוס שלוש"
    },

    // שאלה מספר 41
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו את תחומי החיוביות והשליליות של הפרבולה:\n\\( y = x^{2} - 6x + 9 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='380' y2='150' stroke='#64748b' stroke-width='2'/><line x1='200' y1='20' x2='200' y2='180' stroke='#64748b' stroke-width='2'/><path d='M 100 20 Q 200 280 300 20' fill='none' stroke='#10b981' stroke-width='4'/><circle cx='200' cy='150' r='6' fill='#10b981'/></svg></div>",
        options: ["חיובית: כל איקס שונה משלוש | שלילית: אף פעם", "חיובית: כל איקס | שלילית: איקס שווה שלוש", "חיובית: איקס גדול משלוש | שלילית: איקס קטן משלוש", "חיובית: איקס בין מינוס שלוש לשלוש | שלילית: אין"],
        correctAnswer: 0,
        hint: "מדובר בכפל מקוצר. לפרבולה יש רק נקודת חיתוך אחת (השקה) והיא כולה מעל ציר איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס למציאת אפסים.", math_expression: "x^{2} - 6x + 9 = 0" },
            { verbal_explanation: "שלב 2: זיהוי כפל מקוצר או שימוש בטרינום.", math_expression: "(x - 3)^{2} = 0" },
            { verbal_explanation: "שלב 3: מציאת נקודת האפס היחידה.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 4: זוהי פרבולה מחייכת המשיקה לציר איקס בנקודה זו כפי שמופיע באיור.", math_expression: "a = 1" },
            { verbal_explanation: "שלב 5: לכן הפונקציה לעולם אינה יורדת מתחת לציר, כלומר התחום השלילי הוא קבוצה ריקה.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 6: היא חיובית בכל מקום מלבד נקודת ההשקה עצמה (שבה היא שווה אפס).", math_expression: "x \\neq 3" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "y>0 \\Rightarrow x \\neq 3 \\quad | \\quad y<0 \\Rightarrow \\emptyset" }
        ],
        final_answer: "חיובית: כל איקס שונה משלוש | שלילית: אף פעם"
    },

    // שאלה מספר 42
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מהם תחומי החיוביות והשליליות של הפונקציה הבאה:\n\\( y = -x^{2} - 4x - 4 \\)",
        options: ["חיובית: אף פעם | שלילית: כל איקס שונה ממינוס שתיים", "חיובית: כל איקס שונה ממינוס שתיים | שלילית: אף פעם", "חיובית: איקס גדול ממינוס שתיים | שלילית: איקס קטן ממינוס שתיים", "חיובית: איקס קטן משתיים | שלילית: איקס גדול משתיים"],
        correctAnswer: 0,
        hint: "בדומה לשאלה הקודמת, גם כאן יש השקה, אך הפרבולה הפוכה לחלוטין ולכן נמצאת כולה מתחת לציר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס והכפלה במינוס אחת.", math_expression: "x^{2} + 4x + 4 = 0" },
            { verbal_explanation: "שלב 2: שימוש בנוסחת כפל מקוצר של סכום.", math_expression: "(x + 2)^{2} = 0" },
            { verbal_explanation: "שלב 3: חילוץ הנקודה המאפסת היחידה.", math_expression: "x = -2" },
            { verbal_explanation: "שלב 4: המקדם של איקס בריבוע שלילי, ולכן הפרבולה בוכה.", math_expression: "a = -1" },
            { verbal_explanation: "שלב 5: הגרף נמצא כולו מתחת לציר איקס, למעט נקודת ההשקה. כלומר היא שלילית שם.", math_expression: "x \\neq -2" },
            { verbal_explanation: "שלב 6: מכאן שאין לפונקציה חלקים חיוביים (מעל הציר).", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 7: הרישום הרשמי.", math_expression: "y>0 \\Rightarrow \\emptyset \\quad | \\quad y<0 \\Rightarrow x \\neq -2" }
        ],
        final_answer: "חיובית: אף פעם | שלילית: כל איקס שונה ממינוס שתיים"
    },

    // שאלה מספר 43
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו את התחומים עבור הפרבולה הבאה:\n\\( y = x^{2} + 5 \\)",
        options: ["חיובית: כל איקס | שלילית: אף פעם", "חיובית: אף פעם | שלילית: כל איקס", "חיובית: איקס גדול מחמש | שלילית: איקס קטן מחמש", "חיובית: איקס גדול מאפס | שלילית: איקס קטן מאפס"],
        correctAnswer: 0,
        hint: "נסו להשוות לאפס ולפתור. מה קורה כשמנסים להוציא שורש ממספר שלילי? הגרף מרחף באוויר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניסיון למצוא חיתוך עם ציר איקס על ידי השוואה לאפס.", math_expression: "x^{2} + 5 = 0" },
            { verbal_explanation: "שלב 2: העברת אגף.", math_expression: "x^{2} = -5" },
            { verbal_explanation: "שלב 3: אין פתרון ממשי למשוואה זו, כלומר הגרף לא חותך את הציר (קבוצה ריקה).", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 4: בודקים את סוג הפרבולה. מקדם חיובי אומר שהיא מחייכת.", math_expression: "a = 1" },
            { verbal_explanation: "שלב 5: פרבולה מחייכת שאינה חותכת את הציר נמצאת בהכרח כולה מעליו.", math_expression: "y > 0" },
            { verbal_explanation: "שלב 6: לפיכך היא חיובית עבור כל ערך של איקס.", math_expression: "-\\infty < x < \\infty" },
            { verbal_explanation: "שלב 7: רישום התשובה המתמטית.", math_expression: "y>0 \\Rightarrow -\\infty < x < \\infty \\quad | \\quad y<0 \\Rightarrow \\emptyset" }
        ],
        final_answer: "חיובית: כל איקס | שלילית: אף פעם"
    },

    // שאלה מספר 44
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מהם תחומי החיוביות והשליליות של הפונקציה הבאה:\n\\( y = -x^{2} - 2 \\)",
        options: ["חיובית: אף פעם | שלילית: כל איקס", "חיובית: כל איקס | שלילית: אף פעם", "חיובית: איקס גדול ממינוס שתיים | שלילית: איקס קטן ממינוס שתיים", "חיובית: איקס קטן מאפס | שלילית: איקס גדול מאפס"],
        correctAnswer: 0,
        hint: "הפרבולה הפוכה וקודקודה נמצא מתחת לציר איקס. הסיקו מכך היכן היא ממוקמת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה לאפס לקבלת חיתוכים.", math_expression: "-x^{2} - 2 = 0" },
            { verbal_explanation: "שלב 2: נעביר אגף.", math_expression: "-x^{2} = 2 \\Rightarrow x^{2} = -2" },
            { verbal_explanation: "שלב 3: הפונקציה אינה חותכת את הציר.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 4: הפרבולה היא מסוג מקסימום.", math_expression: "a = -1" },
            { verbal_explanation: "שלב 5: פרבולה בוכה שאינה חותכת את הציר נמצאת תמיד מתחתיו.", math_expression: "y < 0" },
            { verbal_explanation: "שלב 6: היא שלילית תמיד לכל איקס ואין לה חלקים חיוביים.", math_expression: "-\\infty < x < \\infty" },
            { verbal_explanation: "שלב 7: ניסוח המסקנה.", math_expression: "y>0 \\Rightarrow \\emptyset \\quad | \\quad y<0 \\Rightarrow -\\infty < x < \\infty" }
        ],
        final_answer: "חיובית: אף פעם | שלילית: כל איקס"
    },

    // שאלה מספר 45
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו את התחומים עבור הפרבולה הבאה:\n\\( y = 2x^{2} - 8x \\)",
        options: ["חיובית: איקס גדול מארבע או קטן מאפס | שלילית: איקס בין אפס לארבע", "חיובית: איקס בין אפס לארבע | שלילית: איקס גדול מארבע או קטן מאפס", "חיובית: איקס גדול מארבע | שלילית: איקס קטן מארבע", "חיובית: איקס קטן מאפס | שלילית: איקס גדול מאפס"],
        correctAnswer: 0,
        hint: "הוציאו גורם משותף למציאת החיתוכים. מאחר והפרבולה מחייכת, השליליות נמצאת בין שני השורשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס והוצאת גורם משותף.", math_expression: "2x(x - 4) = 0" },
            { verbal_explanation: "שלב 2: חילוץ הפתרון הראשון.", math_expression: "2x = 0 \\Rightarrow x = 0" },
            { verbal_explanation: "שלב 3: חילוץ הפתרון השני.", math_expression: "x - 4 = 0 \\Rightarrow x = 4" },
            { verbal_explanation: "שלב 4: הגרף הוא פרבולת מינימום בגלל שהמקדם חיובי.", math_expression: "a = 2" },
            { verbal_explanation: "שלב 5: לכן הגרף יורד מתחת לציר בין האפסים (שלילית).", math_expression: "0 < x < 4" },
            { verbal_explanation: "שלב 6: ועולה מעל הציר מחוץ לאפסים (חיובית).", math_expression: "x > 4 , x < 0" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "y>0 \\Rightarrow x>4 , x<0 \\quad | \\quad y<0 \\Rightarrow 0<x<4" }
        ],
        final_answer: "חיובית: איקס גדול מארבע או קטן מאפס | שלילית: איקס בין אפס לארבע"
    },

    // שאלה מספר 46
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מהם תחומי החיוביות והשליליות של:\n\\( y = -3x^{2} + 12x \\)",
        options: ["חיובית: איקס בין אפס לארבע | שלילית: איקס גדול מארבע או קטן מאפס", "חיובית: איקס גדול מארבע או קטן מאפס | שלילית: איקס בין אפס לארבע", "חיובית: איקס גדול משלוש | שלילית: איקס קטן משלוש", "חיובית: כל איקס | שלילית: אף פעם"],
        correctAnswer: 0,
        hint: "שימו לב, זוהי פרבולה הפוכה. היא חותכת את הצירים באפס ובארבע, ולכן התחום שבו היא חיובית כלוא ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אפסים על ידי השוואה לאפס.", math_expression: "-3x(x - 4) = 0" },
            { verbal_explanation: "שלב 2: מציאת ערכי חיתוך.", math_expression: "x = 0 , x = 4" },
            { verbal_explanation: "שלב 3: זיהוי פרבולת מקסימום בגלל המקדם השלילי.", math_expression: "a = -3" },
            { verbal_explanation: "שלב 4: פרבולת מקסימום עולה מעל הציר בין השורשים שלה.", math_expression: "0 < x < 4" },
            { verbal_explanation: "שלב 5: לכן התחום החיובי הוא שם.", math_expression: "y > 0" },
            { verbal_explanation: "שלב 6: והיא יורדת מתחת לציר ביתר המקומות.", math_expression: "x > 4 , x < 0" },
            { verbal_explanation: "שלב 7: רישום הפתרון.", math_expression: "y>0 \\Rightarrow 0<x<4 \\quad | \\quad y<0 \\Rightarrow x>4 , x<0" }
        ],
        final_answer: "חיובית: איקס בין אפס לארבע | שלילית: איקס גדול מארבע או קטן מאפס"
    },

    // שאלה מספר 47
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "קבעו את התחומים עבור הפרבולה הבאה:\n\\( y = 0.5x^{2} - 2x - 6 \\)",
        options: ["חיובית: איקס גדול משש או קטן ממינוס שתיים | שלילית: איקס בין מינוס שתיים לשש", "חיובית: איקס בין מינוס שתיים לשש | שלילית: איקס גדול משש או קטן ממינוס שתיים", "חיובית: איקס גדול משש | שלילית: איקס קטן ממינוס שתיים", "חיובית: איקס קטן משש | שלילית: איקס גדול ממינוס שתיים"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה בשתיים כדי למצוא את האפסים בקלות בעזרת טרינום. זכרו שזו פרבולה מחייכת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס והכפלת כל המשוואה בשתיים.", math_expression: "x^{2} - 4x - 12 = 0" },
            { verbal_explanation: "שלב 2: פירוק בעזרת טרינום.", math_expression: "(x - 6)(x + 2) = 0" },
            { verbal_explanation: "שלב 3: חילוץ הנקודות המאפסות.", math_expression: "x = 6 , x = -2" },
            { verbal_explanation: "שלב 4: המקדם המקורי חיובי ולכן היא פרבולת מינימום.", math_expression: "a = 0.5" },
            { verbal_explanation: "שלב 5: מכאן שהתחום השלילי נמצא בין השורשים.", math_expression: "-2 < x < 6" },
            { verbal_explanation: "שלב 6: והתחום החיובי נמצא מחוץ לשורשים אלו.", math_expression: "x > 6 , x < -2" },
            { verbal_explanation: "שלב 7: רישום התוצאה במתמטיקה.", math_expression: "y>0 \\Rightarrow x>6 , x<-2 \\quad | \\quad y<0 \\Rightarrow -2<x<6" }
        ],
        final_answer: "חיובית: איקס גדול משש או קטן ממינוס שתיים | שלילית: איקס בין מינוס שתיים לשש"
    },

    // שאלה מספר 48
    {
        topic: "parabola_172",
        subTopic: "תחומי חיוביות ושליליות",
        question_text: "מהם תחומי החיוביות והשליליות של הפונקציה:\n\\( y = -0.5x^{2} + 4x - 8 \\)",
        options: ["חיובית: אף פעם | שלילית: כל איקס שונה מארבע", "חיובית: כל איקס שונה מארבע | שלילית: אף פעם", "חיובית: איקס גדול מארבע | שלילית: איקס קטן מארבע", "חיובית: איקס בין מינוס ארבע לארבע | שלילית: אין"],
        correctAnswer: 0,
        hint: "הכפילו במינוס שתיים לאחר ההשוואה לאפס. תקבלו כפל מקוצר של פרבולה בוכה המשיקה לציר מתחתיו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס והכפלה במינוס שתיים כדי לפשט.", math_expression: "x^{2} - 8x + 16 = 0" },
            { verbal_explanation: "שלב 2: זיהוי ביטוי של כפל מקוצר.", math_expression: "(x - 4)^{2} = 0" },
            { verbal_explanation: "שלב 3: מציאת השורש היחיד.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 4: המקדם המקורי הוא שלילי, משמע הפרבולה בוכה.", math_expression: "a = -0.5" },
            { verbal_explanation: "שלב 5: משיקה לציר מלמטה, ולכן אין לה שום תחום חיובי מעל הציר.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 6: היא שלילית בכל שאר המקומות מלבד נקודת ההשקה.", math_expression: "x \\neq 4" },
            { verbal_explanation: "שלב 7: רישום התשובה.", math_expression: "y>0 \\Rightarrow \\emptyset \\quad | \\quad y<0 \\Rightarrow x \\neq 4" }
        ],
        final_answer: "חיובית: אף פעם | שלילית: כל איקס שונה מארבע"
    },

    // ==========================================
    // תת נושא 5: נקודות חיתוך בין פרבולה לישר (12 שאלות)
    // ==========================================

    // שאלה מספר 49
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודת החיתוך בין הפרבולה לישר הבאים (המשיקים זה לזה):\n\\( y = x^{2} - 5x + 6 \\)\n\\( y = x - 3 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 100 20 Q 200 250 300 20' fill='none' stroke='#8b5cf6' stroke-width='4'/><line x1='50' y1='170' x2='350' y2='50' stroke='#f59e0b' stroke-width='3'/><circle cx='250' cy='90' r='6' fill='#f59e0b'/></svg></div>",
        options: ["x=3, y=0", "x=1, y=-2", "x=2, y=-1", "אין חיתוך"],
        correctAnswer: 0,
        hint: "השוו בין המשוואות. תקבלו תבנית של כפל מקוצר, שמשמעותה שהישר משיק לפרבולה בנקודה אחת בדיוק כפי שמוצג באיור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשווה את שני הביטויים של הפונקציות כדי למצוא את החיתוך.", math_expression: "x^{2} - 5x + 6 = x - 3" },
            { verbal_explanation: "שלב 2: נעביר את איברי הישר לאגף שמאל בשינוי סימנים.", math_expression: "x^{2} - 5x - x + 6 + 3 = 0" },
            { verbal_explanation: "שלב 3: נכנס איברים דומים לקבלת משוואה ריבועית.", math_expression: "x^{2} - 6x + 9 = 0" },
            { verbal_explanation: "שלב 4: נזהה תבנית של כפל מקוצר במשוואה שהתקבלה.", math_expression: "(x - 3)^{2} = 0" },
            { verbal_explanation: "שלב 5: נחלץ את ערך האיקס.", math_expression: "x = 3" },
            { verbal_explanation: "שלב 6: נציב את ערך האיקס במשוואת הישר הקלה יותר למציאת ערך וואי.", math_expression: "3 - 3 = 0" },
            { verbal_explanation: "שלב 7: נרשום את התוצאה הסופית של נקודת ההשקה בלבד.", math_expression: "x=3, y=0" }
        ],
        final_answer: "x=3, y=0"
    },

    // שאלה מספר 50
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר:\n\\( y = -x^{2} + 4x \\)\n\\( y = -x + 4 \\)",
        options: ["x=1, y=3 ; x=4, y=0", "x=-1, y=5 ; x=-4, y=8", "x=2, y=2 ; x=3, y=1", "אין חיתוך"],
        correctAnswer: 0,
        hint: "השוו בין המשוואות והעבירו את כל האיברים לאגף ימין כדי שהמקדם של איקס בריבוע יהפוך לחיובי ויקל עליכם את פירוק הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת הפונקציות כדי למצוא נקודות משותפות.", math_expression: "-x^{2} + 4x = -x + 4" },
            { verbal_explanation: "שלב 2: העברת איברי אגף שמאל לימין לקבלת מקדם חיובי.", math_expression: "0 = x^{2} - 4x - x + 4" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים במשוואה הריבועית.", math_expression: "x^{2} - 5x + 4 = 0" },
            { verbal_explanation: "שלב 4: פירוק בעזרת שיטת טרינום.", math_expression: "(x - 1)(x - 4) = 0" },
            { verbal_explanation: "שלב 5: מציאת שני ערכי איקס מהסוגריים.", math_expression: "x = 1 , x = 4" },
            { verbal_explanation: "שלב 6: הצבה במשוואת הישר למציאת שיעורי וואי מתאימים.", math_expression: "y = -(1) + 4 = 3 \\quad , \\quad y = -(4) + 4 = 0" },
            { verbal_explanation: "שלב 7: רישום הפתרון כזוגות נתונים.", math_expression: "x=1, y=3 \\quad ; \\quad x=4, y=0" }
        ],
        final_answer: "x=1, y=3 ; x=4, y=0"
    },

    // שאלה מספר 51
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר האופקי:\n\\( y = x^{2} - 2x \\)\n\\( y = 3 \\)",
        options: ["x=3, y=3 ; x=-1, y=3", "x=1, y=3 ; x=-3, y=3", "x=2, y=3 ; x=0, y=3", "אין חיתוך"],
        correctAnswer: 0,
        hint: "מאחר ומשוואת הישר היא ערך קבוע, פשוט הציבו את המספר שלוש במקום וואי ופתרו את המשוואה שמתקבלת כרגיל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הערך שלוש במשוואת הפרבולה.", math_expression: "3 = x^{2} - 2x" },
            { verbal_explanation: "שלב 2: העברת המספר שלוש לאגף השני כדי לאפס את המשוואה.", math_expression: "x^{2} - 2x - 3 = 0" },
            { verbal_explanation: "שלב 3: פירוק לטרינום כאשר הסכום הוא מינוס שתיים והמכפלה היא מינוס שלוש.", math_expression: "(x - 3)(x + 1) = 0" },
            { verbal_explanation: "שלב 4: חילוץ ערכי איקס הפותרים את המשוואה מהסוגריים.", math_expression: "x = 3 , x = -1" },
            { verbal_explanation: "שלב 5: שיעור הוואי של שתי הנקודות הללו ידוע ונתון מראש מהישר.", math_expression: "y = 3" },
            { verbal_explanation: "שלב 6: התאמת ערך הוואי לכל אחד מערכי האיקס שנמצאו.", math_expression: "(3, 3) \\quad , \\quad (-1, 3)" },
            { verbal_explanation: "שלב 7: הרישום המסכם כפי שנדרש באפשרויות.", math_expression: "x=3, y=3 \\quad ; \\quad x=-1, y=3" }
        ],
        final_answer: "x=3, y=3 ; x=-1, y=3"
    },

    // שאלה מספר 52
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "חקרו את נקודות החיתוך במערכת הבאה:\n\\( y = x^{2} + 2x + 5 \\)\n\\( y = 2x + 1 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 100 20 Q 200 200 300 20' fill='none' stroke='#8b5cf6' stroke-width='4'/><line x1='50' y1='180' x2='350' y2='150' stroke='#f59e0b' stroke-width='3'/></svg></div>",
        options: ["אין חיתוך", "x=2, y=5", "x=-2, y=-3", "x=0, y=1"],
        correctAnswer: 0,
        hint: "השוו את המשוואות והעבירו אגפים. תגלו שהאיקסים מצטמצמים ונשארת משוואה ללא פתרון ממשי, כלומר הישר והפרבולה אינם נפגשים כלל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת שני הביטויים של הפונקציות זה לזה.", math_expression: "x^{2} + 2x + 5 = 2x + 1" },
            { verbal_explanation: "שלב 2: העברת איברי הישר שמאלה בשינוי סימן לחיסור.", math_expression: "x^{2} + 2x - 2x + 5 - 1 = 0" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים מראה שהנעלם איקס מתבטל לחלוטין.", math_expression: "x^{2} + 4 = 0" },
            { verbal_explanation: "שלב 4: העברת המספר ארבע לאגף ימין לקראת הוצאת שורש.", math_expression: "x^{2} = -4" },
            { verbal_explanation: "שלב 5: הבנה מתמטית שאין מספר ממשי שריבועו שלילי ולכן למשוואה אין פתרון.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 6: המסקנה הגרפית היא שהגרפים אינם נחתכים לעולם, כפי שרואים באיור.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 7: בחירת התשובה הנכונה.", math_expression: "\\emptyset" }
        ],
        final_answer: "אין חיתוך"
    },

    // שאלה מספר 53
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך במערכת המשוואות:\n\\( y = 2x^{2} - 4x \\)\n\\( y = -2 \\)",
        options: ["x=1, y=-2", "x=2, y=-2", "x=0, y=-2", "אין חיתוך"],
        correctAnswer: 0,
        hint: "הציבו מינוס שתיים במשוואה, חלקו את כל האיברים בשתיים והשתמשו בכפל מקוצר. תקבלו נקודת השקה אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מינוס שתיים ממשוואת הישר אל תוך משוואת הפרבולה.", math_expression: "2x^{2} - 4x = -2" },
            { verbal_explanation: "שלב 2: העברת המספר לאגף שמאל כדי לאפס את המשוואה.", math_expression: "2x^{2} - 4x + 2 = 0" },
            { verbal_explanation: "שלב 3: חלוקת כל המשוואה בשתיים לפשטות העבודה.", math_expression: "x^{2} - 2x + 1 = 0" },
            { verbal_explanation: "שלב 4: זיהוי התבנית ככפל מקוצר של ריבוע ההפרש.", math_expression: "(x - 1)^{2} = 0" },
            { verbal_explanation: "שלב 5: הוצאת שורש ומציאת ערכו היחיד של איקס.", math_expression: "x = 1" },
            { verbal_explanation: "שלב 6: שילוב ערך הוואי הנתון לנו מראש כדי להרכיב את הנקודה.", math_expression: "y = -2" },
            { verbal_explanation: "שלב 7: התוצאה הסופית של הנקודה הבודדת שבה יש השקה.", math_expression: "x=1, y=-2" }
        ],
        final_answer: "x=1, y=-2"
    },

    // שאלה מספר 54
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר הבא:\n\\( y = -x^{2} + 5x - 6 \\)\n\\( y = x - 2 \\)",
        options: ["x=2, y=0 ; x=2, y=0", "x=2, y=0 ; x=2, y=0", "x=2, y=0", "אין חיתוך"],
        correctAnswer: 2,
        hint: "העבירו הכל לאגף ימין כדי לקבל מקדם חיובי לאיקס בריבוע. הטרינום או הכפל המקוצר יהיה פשוט מאוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואות אחת לשנייה.", math_expression: "-x^{2} + 5x - 6 = x - 2" },
            { verbal_explanation: "שלב 2: העברת כל האיברים לימין כדי לקבל איקס בריבוע חיובי.", math_expression: "0 = x^{2} - 5x + x - 2 + 6" },
            { verbal_explanation: "שלב 3: כינוס איברים למשוואה ריבועית מסודרת.", math_expression: "0 = x^{2} - 4x + 4" },
            { verbal_explanation: "שלב 4: זיהוי המשוואה ככפל מקוצר של ריבוע.", math_expression: "(x - 2)^{2} = 0" },
            { verbal_explanation: "שלב 5: מציאת הפתרון היחיד לאיקס שמאפס את המשוואה.", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: הצבת האיקס במשוואת הישר הקלה למציאת הוואי.", math_expression: "2 - 2 = 0" },
            { verbal_explanation: "שלב 7: רישום נקודת החיתוך היחידה (נקודת השקה).", math_expression: "x=2, y=0" }
        ],
        final_answer: "x=2, y=0"
    },

    // שאלה מספר 55
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך במערכת:\n\\( y = 0.5x^{2} - 2 \\)\n\\( y = x - 2 \\)<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><path d='M 100 20 Q 200 250 300 20' fill='none' stroke='#8b5cf6' stroke-width='4'/><line x1='80' y1='150' x2='320' y2='30' stroke='#f59e0b' stroke-width='3'/><circle cx='130' cy='125' r='6' fill='#f59e0b'/><circle cx='265' cy='58' r='6' fill='#f59e0b'/></svg></div>",
        options: ["x=0, y=-2 ; x=2, y=0", "x=2, y=0 ; x=-2, y=-4", "x=0, y=0 ; x=4, y=2", "אין חיתוך"],
        correctAnswer: 0,
        hint: "השוו את המשוואות, כנסו איברים ואז הכפילו בשתיים כדי לבטל את החצי של המקדם. תגלו שהאיבר החופשי נעלם לחלוטין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואות זו לזו.", math_expression: "0.5x^{2} - 2 = x - 2" },
            { verbal_explanation: "שלב 2: העברת איברי הישר שמאלה כדי לאפס אגף.", math_expression: "0.5x^{2} - x - 2 + 2 = 0" },
            { verbal_explanation: "שלב 3: כינוס איברים מראה שהמספרים מתבטלים לחלוטין.", math_expression: "0.5x^{2} - x = 0" },
            { verbal_explanation: "שלב 4: הכפלת המשוואה בשתיים כדי לעבוד עם מספרים שלמים.", math_expression: "x^{2} - 2x = 0" },
            { verbal_explanation: "שלב 5: פירוק בעזרת הוצאת גורם משותף מחוץ לסוגריים.", math_expression: "x(x - 2) = 0" },
            { verbal_explanation: "שלב 6: מציאת שני ערכי האיקס.", math_expression: "x = 0 , x = 2" },
            { verbal_explanation: "שלב 7: הצבה במשוואת הישר למציאת שיעורי הוואי וסיום התרגיל.", math_expression: "y = 0 - 2 = -2 \\quad ; \\quad y = 2 - 2 = 0" }
        ],
        final_answer: "x=0, y=-2 ; x=2, y=0"
    },

    // שאלה מספר 56
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר האופקי:\n\\( y = x^{2} - 9 \\)\n\\( y = 0 \\)",
        options: ["x=3, y=0 ; x=-3, y=0", "x=9, y=0 ; x=-9, y=0", "x=0, y=3 ; x=0, y=-3", "אין חיתוך"],
        correctAnswer: 0,
        hint: "הישר שווה לאפס, משמע מדובר למעשה במציאת נקודות החיתוך של הפרבולה עם ציר איקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת אפס במקום וואי במשוואת הפרבולה.", math_expression: "x^{2} - 9 = 0" },
            { verbal_explanation: "שלב 2: העברת המספר אגף.", math_expression: "x^{2} = 9" },
            { verbal_explanation: "שלב 3: הוצאת שורש ריבועי למציאת האיקסים.", math_expression: "x = \\pm 3" },
            { verbal_explanation: "שלב 4: פיצול הפתרונות שנמצאו.", math_expression: "x = 3 , x = -3" },
            { verbal_explanation: "שלב 5: התאמת שיעור הוואי הנתון בשאלה לכל נקודה.", math_expression: "y = 0" },
            { verbal_explanation: "שלב 6: כתיבת הנקודה הראשונה כזוג סדור.", math_expression: "x=3, y=0" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה השנייה וסיכום כלל הפתרונות.", math_expression: "x=3, y=0 \\quad ; \\quad x=-3, y=0" }
        ],
        final_answer: "x=3, y=0 ; x=-3, y=0"
    },

    // שאלה מספר 57
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר:\n\\( y = -2x^{2} + 8 \\)\n\\( y = -2x + 4 \\)",
        options: ["x=2, y=0 ; x=-1, y=6", "x=-2, y=0 ; x=1, y=6", "x=4, y=-4 ; x=-1, y=6", "אין חיתוך"],
        correctAnswer: 0,
        hint: "לאחר שתשוו בין המשוואות, חלקו הכל בשתיים או במינוס שתיים כדי שיהיה קל יותר לפרק לטרינום את המשוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת שתי המשוואות.", math_expression: "-2x^{2} + 8 = -2x + 4" },
            { verbal_explanation: "שלב 2: העברת כל האיברים לאגף ימין כדי לקבל מקדם חיובי.", math_expression: "0 = 2x^{2} - 2x + 4 - 8" },
            { verbal_explanation: "שלב 3: כינוס איברים דומים במשוואה הריבועית.", math_expression: "2x^{2} - 2x - 4 = 0" },
            { verbal_explanation: "שלב 4: חלוקת כל המשוואה בשתיים לפשטות העבודה.", math_expression: "x^{2} - x - 2 = 0" },
            { verbal_explanation: "שלב 5: שימוש בטרינום למציאת שורשים (מכפלה מינוס שתיים, סכום מינוס אחת).", math_expression: "(x - 2)(x + 1) = 0" },
            { verbal_explanation: "שלב 6: חילוץ ערכי האיקס שמאפסים את המשוואה.", math_expression: "x = 2 , x = -1" },
            { verbal_explanation: "שלב 7: מציאת ערכי וואי בהצבה למשוואת הישר.", math_expression: "y = -2(2)+4 = 0 \\quad ; \\quad y = -2(-1)+4 = 6" }
        ],
        final_answer: "x=2, y=0 ; x=-1, y=6"
    },

    // שאלה מספר 58
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך במערכת:\n\\( y = x^{2} - x - 6 \\)\n\\( y = -x - 2 \\)",
        options: ["x=2, y=-4 ; x=-2, y=0", "x=1, y=-3 ; x=-1, y=-1", "x=3, y=-5 ; x=-3, y=1", "אין חיתוך"],
        correctAnswer: 0,
        hint: "לאחר שתשוו ותעבירו אגפים, תראו שהאיקסים מצטמצמים כליל ונשארת משוואה חסרת איבר אמצעי הקלה לפתרון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואת המשוואות כדי למצוא חיתוך.", math_expression: "x^{2} - x - 6 = -x - 2" },
            { verbal_explanation: "שלב 2: העברת איברים מאגף ימין לשמאל.", math_expression: "x^{2} - x + x - 6 + 2 = 0" },
            { verbal_explanation: "שלב 3: כינוס איברים מראה כי המשתנה איקס ממעלה ראשונה מתבטל.", math_expression: "x^{2} - 4 = 0" },
            { verbal_explanation: "שלב 4: העברת המספר ארבע לימין.", math_expression: "x^{2} = 4" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי לקבלת שני פתרונות.", math_expression: "x = 2 , x = -2" },
            { verbal_explanation: "שלב 6: הצבה במשוואת הישר למציאת וואי עבור איקס שווה שתיים.", math_expression: "y = -(2) - 2 = -4" },
            { verbal_explanation: "שלב 7: הצבה למציאת וואי עבור איקס שווה מינוס שתיים.", math_expression: "y = -(-2) - 2 = 0" }
        ],
        final_answer: "x=2, y=-4 ; x=-2, y=0"
    },

    // שאלה מספר 59
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "מצאו את נקודות החיתוך בין הפרבולה לישר האופקי:\n\\( y = -x^{2} + 10x - 25 \\)\n\\( y = 0 \\)",
        options: ["x=5, y=0", "x=-5, y=0", "x=10, y=0", "אין חיתוך"],
        correctAnswer: 0,
        hint: "הישר הנתון הוא למעשה ציר איקס. הכפילו את המשוואה שתקבלו במינוס אחת וזהו את הכפל המקוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס.", math_expression: "-x^{2} + 10x - 25 = 0" },
            { verbal_explanation: "שלב 2: הכפלת כל האיברים במינוס אחת לשם פשטות.", math_expression: "x^{2} - 10x + 25 = 0" },
            { verbal_explanation: "שלב 3: זיהוי תבנית כפל מקוצר של ריבוע ההפרש.", math_expression: "(x - 5)^{2} = 0" },
            { verbal_explanation: "שלב 4: השוואה לאפס וקבלת פתרון יחיד לאיקס.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 5: הבנה שזוהי נקודת השקה יחידה של הפרבולה והציר.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 6: שיעור הוואי נתון ממשוואת הישר.", math_expression: "y = 0" },
            { verbal_explanation: "שלב 7: כתיבת הפתרון הסופי.", math_expression: "x=5, y=0" }
        ],
        final_answer: "x=5, y=0"
    },

    // שאלה מספר 60
    {
        topic: "parabola_172",
        subTopic: "נקודות חיתוך בין פרבולה לישר",
        question_text: "חקרו את מערכת המשוואות:\n\\( y = x^{2} + 4x + 4 \\)\n\\( y = -1 \\)",
        options: ["אין חיתוך", "x=-2, y=-1", "x=0, y=-1", "x=2, y=-1"],
        correctAnswer: 0,
        hint: "הציבו מינוס אחת במקום וואי ונסו לפתור את המשוואה. תראו שמתקבל מצב שבו הביטוי הריבועי שווה למספר שלילי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת מינוס אחת במקום וואי במשוואת הפרבולה.", math_expression: "x^{2} + 4x + 4 = -1" },
            { verbal_explanation: "שלב 2: העברת מינוס אחת לאגף שמאל כדי לאפס את המשוואה.", math_expression: "x^{2} + 4x + 5 = 0" },
            { verbal_explanation: "שלב 3: ניסיון להשתמש בנוסחת השורשים. נחשב תחילה את דלתא.", math_expression: "4^{2} - 4 \\times 1 \\times 5" },
            { verbal_explanation: "שלב 4: חישוב הערך של הדלתא.", math_expression: "16 - 20 = -4" },
            { verbal_explanation: "שלב 5: הערך שהתקבל עבור דלתא הוא שלילי.", math_expression: "-4 < 0" },
            { verbal_explanation: "שלב 6: מכאן נובע שאין פתרון ממשי למשוואה הריבועית.", math_expression: "\\emptyset" },
            { verbal_explanation: "שלב 7: מסקנה: הגרפים אינם נחתכים לעולם.", math_expression: "\\emptyset" }
        ],
        final_answer: "אין חיתוך"
    },

    // ==========================================
    // תת נושא 6: שטחים הכלואים בפרבולה (12 שאלות)
    // ==========================================

    // שאלה מספר 61
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "נתונה הפרבולה \\( y = -x^{2} + 16 \\). משולש כלוא בפרבולה כך שקודקודו העליון הוא קודקוד הפרבולה, ובסיסו מונח על ציר האיקס בין שתי נקודות החיתוך. חשבו את שטח המשולש.<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='380' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 100 150 Q 200 -50 300 150' fill='none' stroke='#ec4899' stroke-width='4'/><polygon points='100,150 300,150 200,50' fill='#ec4899' opacity='0.3' stroke='#ec4899' stroke-width='2'/></svg></div>",
        options: ["64 יח''ר", "32 יח''ר", "16 יח''ר", "128 יח''ר"],
        correctAnswer: 0,
        hint: "מצאו את נקודות החיתוך עם הציר האופקי כדי לחשב את אורך הבסיס, ואת קודקוד הפרבולה כדי לדעת את גובה המשולש. שטח משולש הוא בסיס כפול גובה חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת נקודות החיתוך עם ציר איקס על ידי השוואה לאפס ובידוד האיקס בריבוע.", math_expression: "-x^{2} + 16 = 0 \\Rightarrow x^{2} = 16" },
            { verbal_explanation: "שלב 2: חילוץ הנקודות על ידי הוצאת שורש.", math_expression: "x = 4 , x = -4" },
            { verbal_explanation: "שלב 3: חישוב אורך הבסיס כמרחק המוחלט בין שתי הנקודות הללו על הציר.", math_expression: "4 - (-4) = 8" },
            { verbal_explanation: "שלב 4: מציאת קודקוד הפרבולה. מכיוון שחסר בי במשוואה, הקודקוד יושב על ציר הוואי וערכו נתון.", math_expression: "x = 0 \\Rightarrow y = 16" },
            { verbal_explanation: "שלב 5: גובה המשולש הוא בדיוק ערך הוואי של הקודקוד.", math_expression: "16" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת שטח משולש שהיא בסיס כפול גובה לחלק לשתיים.", math_expression: "\\dfrac{8 \\times 16}{2}" },
            { verbal_explanation: "שלב 7: חישוב הפעולה המתמטית לקבלת השטח הסופי.", math_expression: "64" }
        ],
        final_answer: "64 יח''ר"
    },

    // שאלה מספר 62
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "נתונה הפרבולה \\( y = x^{2} - 9 \\). משולש כלוא בה כך שבסיסו מונח על ציר האיקס בין נקודות החיתוך, וקודקודו התחתון הוא קודקוד הפרבולה. חשבו את שטחו.",
        options: ["27 יח''ר", "54 יח''ר", "18 יח''ר", "9 יח''ר"],
        correctAnswer: 0,
        hint: "גובה המשולש נמדד כמרחק וכערך חיובי תמיד, ולכן יש לקחת את הערך המוחלט של שיעור הוואי של הקודקוד התחתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת נקודות החיתוך עם ציר איקס על ידי השוואה לאפס והוצאת שורש.", math_expression: "x^{2} - 9 = 0 \\Rightarrow x = \\pm 3" },
            { verbal_explanation: "שלב 2: חישוב אורך הבסיס של המשולש המונח על הציר.", math_expression: "3 - (-3) = 6" },
            { verbal_explanation: "שלב 3: מציאת קודקוד הפרבולה (האיקס שווה לאפס בגלל שחסר בי במשוואה הריבועית).", math_expression: "x = 0 \\Rightarrow y = -9" },
            { verbal_explanation: "שלב 4: הגובה של המשולש הוא המרחק מציר איקס לקודקוד, והוא נלקח תמיד בערך מוחלט (חיובי).", math_expression: "9" },
            { verbal_explanation: "שלב 5: רישום נוסחת השטח למשולש (בסיס כפול גובה חלקי שתיים).", math_expression: "\\dfrac{6 \\times 9}{2}" },
            { verbal_explanation: "שלב 6: ביצוע פעולת הכפל במונה.", math_expression: "\\dfrac{54}{2}" },
            { verbal_explanation: "שלב 7: מציאת התוצאה הסופית של החלוקה.", math_expression: "27" }
        ],
        final_answer: "27 יח''ר"
    },

    // שאלה מספר 63
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "נתונה הפרבולה \\( y = -x^{2} + 25 \\). מלבן חסום בין הפרבולה לציר האיקס. שניים מקודקודי המלבן מונחים על ציר האיקס בנקודות מינוס שלוש ושלוש. מהו שטח המלבן?",
        options: ["96 יח''ר", "48 יח''ר", "150 יח''ר", "32 יח''ר"],
        correctAnswer: 0,
        hint: "הבסיס של המלבן הוא המרחק שבין מינוס שלוש לשלוש. גובהו נקבע על ידי חישוב ערך הפונקציה באחת הנקודות הללו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך בסיס המלבן המונח על הציר.", math_expression: "3 - (-3) = 6" },
            { verbal_explanation: "שלב 2: מציאת גובה המלבן על ידי הצבת שיעור איקס שווה שלוש בפונקציה הנתונה.", math_expression: "y = -(3)^{2} + 25" },
            { verbal_explanation: "שלב 3: חישוב הערך המספרי של פונקציית הגובה.", math_expression: "y = -9 + 25 = 16" },
            { verbal_explanation: "שלב 4: הגובה של המלבן נקבע להיות שש עשרה יחידות.", math_expression: "16" },
            { verbal_explanation: "שלב 5: נוסחת שטח מלבן היא פשוט מכפלת הבסיס בגובה.", math_expression: "6 \\times 16" },
            { verbal_explanation: "שלב 6: ביצוע פעולת הכפל (עשר כפול שש ועוד שש כפול שש).", math_expression: "60 + 36 = 96" },
            { verbal_explanation: "שלב 7: הרישום הסופי של השטח המבוקש.", math_expression: "96" }
        ],
        final_answer: "96 יח''ר"
    },

    // שאלה מספר 64
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "מלבן חסום בפרבולה \\( y = -x^{2} + 100 \\). קודקודי הבסיס התחתון מונחים על ציר איקס בנקודות שבהן איקס שווה לחמש ומינוס חמש. חשבו את שטחו.<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='380' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 50 150 Q 200 -100 350 150' fill='none' stroke='#ec4899' stroke-width='4'/><rect x='150' y='67' width='100' height='83' fill='#ec4899' opacity='0.3' stroke='#ec4899' stroke-width='2'/></svg></div>",
        options: ["750 יח''ר", "375 יח''ר", "1000 יח''ר", "500 יח''ר"],
        correctAnswer: 0,
        hint: "בדיוק כמו בתרגיל הקודם, מצאו את הבסיס תחילה ואז הציבו את אחד משיעורי האיקס בפרבולה כדי למצוא את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב בסיס המלבן המונח על ציר האיקס.", math_expression: "5 - (-5) = 10" },
            { verbal_explanation: "שלב 2: הצבת המספר חמש במשוואה למציאת גובה המלבן המקסימלי בנקודה זו.", math_expression: "y = -(5)^{2} + 100" },
            { verbal_explanation: "שלב 3: ביצוע החזקה והחיסור במשוואה.", math_expression: "y = -25 + 100 = 75" },
            { verbal_explanation: "שלב 4: הגובה הרלוונטי נמצא.", math_expression: "75" },
            { verbal_explanation: "שלב 5: חישוב השטח על ידי הכפלת הממדים זה בזה.", math_expression: "10 \\times 75" },
            { verbal_explanation: "שלב 6: הוספת אפס למספר בעקבות פעולת הכפל בעשר.", math_expression: "750" },
            { verbal_explanation: "שלב 7: התשובה המסכמת של השטח הכלוא.", math_expression: "750" }
        ],
        final_answer: "750 יח''ר"
    },

    // שאלה מספר 65
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "טרפז שווה שוקיים כלוא בפרבולה \\( y = -x^{2} + 36 \\). בסיסו התחתון הוא הקטע המחבר את נקודות החיתוך עם ציר איקס. קודקודי בסיסו העליון מונחים על הפרבולה בשיעורי איקס שווים למינוס ארבע וארבע. חשבו את השטח.",
        options: ["200 יח''ר", "100 יח''ר", "240 יח''ר", "120 יח''ר"],
        correctAnswer: 0,
        hint: "נוסחת שטח טרפז היא: סכום הבסיסים כפול הגובה, לחלק לשתיים. מצאו את שני הבסיסים ואת הגובה (ערך הוואי של הבסיס העליון).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת חיתוך ציר איקס למציאת קצוות הבסיס התחתון.", math_expression: "-x^{2} + 36 = 0 \\Rightarrow x = \\pm 6" },
            { verbal_explanation: "שלב 2: חישוב אורך הבסיס התחתון.", math_expression: "6 - (-6) = 12" },
            { verbal_explanation: "שלב 3: חישוב אורך הבסיס העליון מתוך הנתון הקובע את קצותיו.", math_expression: "4 - (-4) = 8" },
            { verbal_explanation: "שלב 4: מציאת הגובה על ידי הצבת איקס שווה ארבע במשוואת הפרבולה.", math_expression: "y = -(4)^{2} + 36 = -16 + 36 = 20" },
            { verbal_explanation: "שלב 5: גובה הטרפז הכלוא הוא עשרים.", math_expression: "20" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת השטח של טרפז.", math_expression: "\\dfrac{(12 + 8) \\times 20}{2}" },
            { verbal_explanation: "שלב 7: חישוב ופישוט התוצאה להגעה לשטח.", math_expression: "\\dfrac{20 \\times 20}{2} = 200" }
        ],
        final_answer: "200 יח''ר"
    },

    // שאלה מספר 66
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "טרפז כלוא בפרבולה \\( y = -x^{2} + 64 \\). בסיסו התחתון מחבר את האפסים של הפרבולה, ובסיסו העליון מתוח בין הנקודות שבהן איקס שווה שתיים ומינוס שתיים. מהו השטח?<div style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 400 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='150' x2='380' y2='150' stroke='#64748b' stroke-width='2'/><path d='M 50 150 Q 200 -100 350 150' fill='none' stroke='#ec4899' stroke-width='4'/><polygon points='100,150 300,150 250,55 150,55' fill='#ec4899' opacity='0.3' stroke='#ec4899' stroke-width='2'/></svg></div>",
        options: ["600 יח''ר", "300 יח''ר", "480 יח''ר", "1200 יח''ר"],
        correctAnswer: 0,
        hint: "מצאו את אפסי הפרבולה (השורשים) המשמשים כבסיס התחתון. אחר כך חשבו את גובה הטרפז כערך הפונקציה בבסיס העליון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אפסי הפרבולה (השוואה לאפס והוצאת שורש).", math_expression: "x^{2} = 64 \\Rightarrow x = \\pm 8" },
            { verbal_explanation: "שלב 2: אורך בסיס תחתון לפי המרחק בין האפסים.", math_expression: "8 - (-8) = 16" },
            { verbal_explanation: "שלב 3: אורך בסיס עליון, מחושב על פי הנתונים.", math_expression: "2 - (-2) = 4" },
            { verbal_explanation: "שלב 4: מציאת הגובה על ידי הצבה במשוואה.", math_expression: "y = -(2)^{2} + 64 = 60" },
            { verbal_explanation: "שלב 5: הצבה בנוסחה של שטח הטרפז.", math_expression: "\\dfrac{(16 + 4) \\times 60}{2}" },
            { verbal_explanation: "שלב 6: ביצוע החיבור בתוך הסוגריים והכפלת התוצאה בגובה.", math_expression: "\\dfrac{20 \\times 60}{2} = \\dfrac{1200}{2}" },
            { verbal_explanation: "שלב 7: התשובה הסופית לאחר פעולת החלוקה.", math_expression: "600" }
        ],
        final_answer: "600 יח''ר"
    },

    // שאלה מספר 67
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "בפרבולה \\( y = -x^{2} + 8x \\) חסום משולש. בסיס המשולש הוא קטע על ציר האיקס המחבר את נקודות החיתוך. הקודקוד העליון של המשולש הוא קודקוד הפרבולה. חשבו את שטחו.",
        options: ["64 יח''ר", "32 יח''ר", "128 יח''ר", "16 יח''ר"],
        correctAnswer: 0,
        hint: "מדובר בפרבולה שחסר בה האיבר החופשי. מצאו את החיתוכים בעזרת הוצאת גורם משותף ואת הקודקוד בעזרת נוסחת ציר הסימטריה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת החיתוכים על ידי הוצאת גורם משותף איקס.", math_expression: "x(-x + 8) = 0 \\Rightarrow x = 0 , x = 8" },
            { verbal_explanation: "שלב 2: חישוב בסיס המשולש הכלוא.", math_expression: "8 - 0 = 8" },
            { verbal_explanation: "שלב 3: מציאת שיעור האיקס של קודקוד הפרבולה שישמש למציאת הגובה.", math_expression: "x = -8 : -2 = 4" },
            { verbal_explanation: "שלב 4: מציאת הגובה עצמו על ידי הצבת ארבע במשוואה.", math_expression: "y = -(4)^{2} + 8(4) = -16 + 32 = 16" },
            { verbal_explanation: "שלב 5: חישוב השטח על ידי הצבת הנתונים בנוסחת המשולש.", math_expression: "\\dfrac{8 \\times 16}{2}" },
            { verbal_explanation: "שלב 6: חלוקת שמונה בשתיים כדי להקל על הכפל.", math_expression: "4 \\times 16" },
            { verbal_explanation: "שלב 7: התוצאה הסופית.", math_expression: "64" }
        ],
        final_answer: "64 יח''ר"
    },

    // שאלה מספר 68
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "מלבן חסום בין הפרבולה \\( y = -x^{2} + 6x \\) לציר איקס. קודקודי הבסיס שלו יושבים על הציר בנקודות שבהן איקס שווה לאחת וחמש. חשבו את שטח המלבן.",
        options: ["20 יח''ר", "10 יח''ר", "15 יח''ר", "25 יח''ר"],
        correctAnswer: 0,
        hint: "הבסיס הוא פשוט המרחק בין חמש לאחת על ציר האיקס. הגובה הוא ערך הפונקציה באחת הנקודות הללו כיוון שהמלבן סימטרי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב בסיס המלבן הכלוא.", math_expression: "5 - 1 = 4" },
            { verbal_explanation: "שלב 2: הצבת המספר אחת בפונקציה למציאת גובהו של המלבן בנקודה זו.", math_expression: "y = -(1)^{2} + 6(1)" },
            { verbal_explanation: "שלב 3: חישוב התוצאה.", math_expression: "y = -1 + 6 = 5" },
            { verbal_explanation: "שלב 4: הגדרת ממדי המלבן שנתגלו.", math_expression: "4 , 5" },
            { verbal_explanation: "שלב 5: הצבה בנוסחת השטח למלבן שאינה מצריכה חלוקה בשתיים.", math_expression: "4 \\times 5" },
            { verbal_explanation: "שלב 6: ביצוע הכפל.", math_expression: "20" },
            { verbal_explanation: "שלב 7: רישום הפתרון של השטח הכולל.", math_expression: "20" }
        ],
        final_answer: "20 יח''ר"
    },

    // שאלה מספר 69
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "חשבו את שטח המשולש שקודקודיו הם נקודות החיתוך עם ציר איקס וקודקוד הפרבולה:\n\\( y = 2x^{2} - 8 \\)",
        options: ["16 יח''ר", "32 יח''ר", "8 יח''ר", "24 יח''ר"],
        correctAnswer: 0,
        hint: "זו פרבולה מחייכת, ולכן קודקודה נמצא מתחת לציר איקס, אך המרחק המייצג את הגובה תמיד נלקח בערך מוחלט (חיובי).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת החיתוכים עם ציר איקס על ידי השוואה לאפס וחלוקה.", math_expression: "2x^{2} - 8 = 0 \\Rightarrow 2x^{2} = 8 \\Rightarrow x^{2} = 4" },
            { verbal_explanation: "שלב 2: השורשים שהתקבלו הם שתיים ומינוס שתיים.", math_expression: "x = \\pm 2" },
            { verbal_explanation: "שלב 3: הבסיס מחושב כמרחק ביניהם לאורך הציר.", math_expression: "2 - (-2) = 4" },
            { verbal_explanation: "שלב 4: מציאת הקודקוד, שמונח על ציר הוואי (האיבר החופשי).", math_expression: "x = 0 \\Rightarrow y = -8" },
            { verbal_explanation: "שלב 5: גובה המשולש נלקח תמיד כגודל חיובי.", math_expression: "8" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת השטח.", math_expression: "\\dfrac{4 \\times 8}{2}" },
            { verbal_explanation: "שלב 7: השלמת החישוב.", math_expression: "16" }
        ],
        final_answer: "16 יח''ר"
    },

    // שאלה מספר 70
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "טרפז חסום תחת הפרבולה \\( y = -x^{2} + 4x + 5 \\). בסיסו התחתון נמצא בין נקודות האפס של הפרבולה, ובסיסו העליון נפרש בין איקס שווה אחת לאיקס שווה שלוש. מצאו את שטחו.",
        options: ["32 יח''ר", "16 יח''ר", "48 יח''ר", "24 יח''ר"],
        correctAnswer: 0,
        hint: "האפסים הם נקודות החיתוך עם ציר איקס. חשבו אותם בעזרת הוצאת המינוס ופירוק הטרינום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: השוואה לאפס להשגת קצוות הבסיס התחתון.", math_expression: "-x^{2} + 4x + 5 = 0" },
            { verbal_explanation: "שלב 2: הכפלה במינוס אחת ופירוק לטרינום מסודר.", math_expression: "x^{2} - 4x - 5 = 0 \\Rightarrow (x - 5)(x + 1) = 0" },
            { verbal_explanation: "שלב 3: אורך הבסיס התחתון לפי המרחק בין חמש למינוס אחת.", math_expression: "5 - (-1) = 6" },
            { verbal_explanation: "שלב 4: אורך הבסיס העליון הנתון מראש בשאלה.", math_expression: "3 - 1 = 2" },
            { verbal_explanation: "שלב 5: מציאת הגובה על ידי הצבת שיעור איקס של אחת בפונקציה.", math_expression: "y = -(1)^{2} + 4(1) + 5 = -1 + 4 + 5 = 8" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת טרפז.", math_expression: "\\dfrac{(6 + 2) \\times 8}{2}" },
            { verbal_explanation: "שלב 7: חלוקה וקבלת התוצאה של השטח.", math_expression: "\\dfrac{8 \\times 8}{2} = 32" }
        ],
        final_answer: "32 יח''ר"
    },

    // שאלה מספר 71
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "מלבן חסום בתוך השטח הכלוא של הפרבולה \\( y = -x^{2} + 8x - 12 \\). בסיסו נח על הציר בין הנקודות שלוש וחמש. חשבו את שטחו.",
        options: ["6 יח''ר", "3 יח''ר", "12 יח''ר", "9 יח''ר"],
        correctAnswer: 0,
        hint: "הפרבולה אמנם חותכת את הציר בנקודות שתיים ושש, אך אלו אינם קודקודי המלבן שלנו. היעזרו בנקודות שניתנו בשאלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב רוחב בסיס המלבן הנתון.", math_expression: "5 - 3 = 2" },
            { verbal_explanation: "שלב 2: מציאת גובה המלבן על ידי הצבת איקס שווה שלוש בפונקציה.", math_expression: "y = -(3)^{2} + 8(3) - 12" },
            { verbal_explanation: "שלב 3: העלאה בריבוע תוך הקפדה על המינוס החיצוני.", math_expression: "y = -9 + 24 - 12" },
            { verbal_explanation: "שלב 4: חישוב התוצאה לקבלת הגובה.", math_expression: "y = 3" },
            { verbal_explanation: "שלב 5: הבנת ממדי הצורה המלבנית.", math_expression: "2 , 3" },
            { verbal_explanation: "שלב 6: חישוב השטח.", math_expression: "2 \\times 3" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "6" }
        ],
        final_answer: "6 יח''ר"
    },

    // שאלה מספר 72
    {
        topic: "parabola_172",
        subTopic: "שטחים הכלואים בפרבולה (משולש, טרפז, מלבן)",
        question_text: "חשבו את שטח המשולש שקודקודיו הם נקודות החיתוך עם ציר איקס וקודקוד הפרבולה:\n\\( y = -0.5x^{2} + 8 \\)",
        options: ["32 יח''ר", "64 יח''ר", "16 יח''ר", "48 יח''ר"],
        correctAnswer: 0,
        hint: "הכפילו את המשוואה בשתיים כדי למצוא את האפסים בקלות. הגובה הוא פשוט הערך המקסימלי של הפרבולה על ציר וואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת נקודות החיתוך עם הציר האופקי על ידי השוואה לאפס.", math_expression: "-0.5x^{2} + 8 = 0" },
            { verbal_explanation: "שלב 2: העברת השמונה והכפלה בשתיים או חלוקה בחצי.", math_expression: "-0.5x^{2} = -8 \\Rightarrow x^{2} = 16" },
            { verbal_explanation: "שלב 3: חילוץ הנקודות.", math_expression: "x = \\pm 4" },
            { verbal_explanation: "שלב 4: חישוב אורך הבסיס.", math_expression: "4 - (-4) = 8" },
            { verbal_explanation: "שלב 5: מציאת הקודקוד על ציר הוואי (שווה לאיבר החופשי).", math_expression: "y = 8" },
            { verbal_explanation: "שלב 6: הצבה בנוסחת משולש.", math_expression: "\\dfrac{8 \\times 8}{2}" },
            { verbal_explanation: "שלב 7: סיום החישוב (שישים וארבע חלקי שתיים).", math_expression: "32" }
        ],
        final_answer: "32 יח''ר"
    }
];