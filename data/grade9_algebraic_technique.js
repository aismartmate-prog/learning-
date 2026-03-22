// ========================================================================
// שכבת גיל: כיתה ט' | נושא: טכניקה אלגברית ופירוק לגורמים (48 שאלות)
// >>> עובד לפי גרסה 2.1 המושלמת <<<
// חוקי פורמט שנשמרו בקפדנות: 
// 1. אפשרויות התשובה (options), הפתרון הסופי והשלמים המתמטיים חפים מ-\( \) (המערכת עוטפת לבד!).
// 2. חזקות נכתבות עם ^ ומוצגות תקנית למעלה.
// 3. שברים מוצגים אנכית (מונה/מכנה) בעזרת \frac.
// 4. כפל מוצג כאיקס קטן בעזרת \times.
// 5. חילוק מוצג בעזרת נקודתיים (:).
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חוק הפילוג המורחב (פתיחת סוגריים) (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתחו את הסוגריים בביטוי הבא ובצעו כינוס איברים דומים:\n\\( (x + 2)(x + 5) = ? \\)",
        options: [
            "x^2 + 7x + 10", 
            "x^2 + 10", 
            "2x + 7", 
            "x^2 + 7x + 7"
        ],
        correctAnswer: 0,
        hint: "הכפילו את \\( x \\) בשני האיברים של הסוגריים השניים, ולאחר מכן הכפילו את המספר 2 בשני האיברים. לבסוף, חברו את האיברים שבאמצע.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את האיבר הראשון מהסוגריים הראשונים בשני האיברים שבסוגריים השניים.", math_expression: "x \\times x = x^2 \\quad , \\quad x \\times 5 = 5x" },
            { verbal_explanation: "שלב ב': נכפיל את המספר 2 בשני האיברים שבסוגריים השניים.", math_expression: "2 \\times x = 2x \\quad , \\quad 2 \\times 5 = 10" },
            { verbal_explanation: "שלב ג': נרשום את כל התוצאות יחד כשרשרת חיבור ארוכה.", math_expression: "x^2 + 5x + 2x + 10" },
            { verbal_explanation: "שלב ד': נבצע כינוס איברים עבור האיברים הדומים (\\( 5x \\) ועוד \\( 2x \\) הם \\( 7x \\)).", math_expression: "x^2 + 7x + 10" }
        ],
        final_answer: "x^2 + 7x + 10"
    },
    // שאלה 2
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "שימו לב לסימנים השליליים! פתחו את הסוגריים הבאים:\n\\( (x - 3)(x + 4) = ? \\)",
        options: [
            "x^2 + x - 12", 
            "x^2 - x - 12", 
            "x^2 + 7x - 12", 
            "x^2 - 12"
        ],
        correctAnswer: 0,
        hint: "זכרו שסימן המינוס שייך למספר 3. לכן עליכם להכפיל במינוס 3.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את ה-\\( x \\) בשני האיברים שבסוגריים השניים.", math_expression: "x \\times x = x^2 \\quad , \\quad x \\times 4 = 4x" },
            { verbal_explanation: "שלב ב': נכפיל את המינוס 3 בשני האיברים שבסוגריים השניים.", math_expression: "-3 \\times x = -3x \\quad , \\quad -3 \\times 4 = -12" },
            { verbal_explanation: "שלב ג': נרשום את כל התוצאות יחד.", math_expression: "x^2 + 4x - 3x - 12" },
            { verbal_explanation: "שלב ד': כינוס איברים (\\( 4x \\) פחות \\( 3x \\) משאיר אותנו עם \\( 1x \\)).", math_expression: "x^2 + x - 12" }
        ],
        final_answer: "x^2 + x - 12"
    },
    // שאלה 3
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתיחת סוגריים עם מקדמים: פשטו את הביטוי הבא:\n\\( (2x + 1)(x - 2) = ? \\)",
        options: [
            "2x^2 - 3x - 2", 
            "2x^2 + 3x - 2", 
            "2x^2 - 4x - 2", 
            "2x^2 - x - 2"
        ],
        correctAnswer: 0,
        hint: "הקפידו על המקדם 2: \\( 2x \\times x = 2x^2 \\) ו-\\( 2x \\times (-2) = -4x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את \\( 2x \\) בכל איבר בסוגריים השניים.", math_expression: "2x \\times x = 2x^2 \\quad , \\quad 2x \\times (-2) = -4x" },
            { verbal_explanation: "שלב ב': נכפיל את 1 בכל איבר בסוגריים השניים.", math_expression: "1 \\times x = 1x \\quad , \\quad 1 \\times (-2) = -2" },
            { verbal_explanation: "שלב ג': נחבר את החלקים.", math_expression: "2x^2 - 4x + 1x - 2" },
            { verbal_explanation: "שלב ד': כינוס איברים (חוב של 4 פלוס 1 נותן חוב של 3).", math_expression: "2x^2 - 3x - 2" }
        ],
        final_answer: "2x^2 - 3x - 2"
    },
    // שאלה 4
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "מלכודת סימנים! פשטו את הביטוי הכולל מינוס חיצוני:\n\\( -(x - 1)(x + 3) = ? \\)",
        options: [
            "-x^2 - 2x + 3", 
            "-x^2 + 2x + 3", 
            "-x^2 - 2x - 3", 
            "x^2 + 2x - 3"
        ],
        correctAnswer: 0,
        hint: "השאירו את המינוס החיצוני מחוץ לחישוב בשלב הראשון. פתחו סוגריים, כנסו איברים, ורק בסוף הפכו את כל הסימנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את הסוגריים תוך שמירה על המינוס בחוץ.", math_expression: "- (x^2 + 3x - 1x - 3)" },
            { verbal_explanation: "שלב ב': נכנס איברים בתוך הסוגריים.", math_expression: "- (x^2 + 2x - 3)" },
            { verbal_explanation: "שלב ג': נכניס את המינוס פנימה ונשנה את כל הסימנים.", math_expression: "-x^2 - 2x + 3" }
        ],
        final_answer: "-x^2 - 2x + 3"
    },
    // שאלה 5
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "אתגר תלת-איבר! פתחו את הסוגריים וכנסו איברים:\n\\( (x^2 + x + 1)(x - 1) = ? \\)",
        options: [
            "x^3 - 1", 
            "x^3 + 1", 
            "x^3 - x^2 - 1", 
            "x^3 - x - 1"
        ],
        correctAnswer: 0,
        hint: "יש לבצע 6 הכפלות בסך הכל. אל תיבהלו, רוב האיברים יבטלו אחד את השני בשלב הכינוס.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את ה-\\( x^2 \\) מהסוגריים הראשונים בשני האיברים.", math_expression: "x^2 \\times x = x^3 \\quad , \\quad x^2 \\times (-1) = -x^2" },
            { verbal_explanation: "שלב ב': נכפיל את ה-\\( x \\) האמצעי בשני האיברים.", math_expression: "x \\times x = x^2 \\quad , \\quad x \\times (-1) = -x" },
            { verbal_explanation: "שלב ג': נכפיל את המספר 1 בשני האיברים.", math_expression: "1 \\times x = x \\quad , \\quad 1 \\times (-1) = -1" },
            { verbal_explanation: "שלב ד': נרשום הכל יחד.", math_expression: "x^3 - x^2 + x^2 - x + x - 1" },
            { verbal_explanation: "שלב ה': איברי הריבוע מתבטלים ואיברי ה-\\( x \\) מתבטלים. נשארנו עם:", math_expression: "x^3 - 1" }
        ],
        final_answer: "x^3 - 1"
    },
    // שאלה 6
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתיחת סוגריים עם כופל מספרי לפני כן. פשטו:\n\\( 3(x - 2)(x + 2) = ? \\)",
        options: [
            "3x^2 - 12", 
            "3x^2 - 4", 
            "3x^2 + 12", 
            "3x^2 - 6x - 12"
        ],
        correctAnswer: 0,
        hint: "מומלץ להשאיר את המספר 3 מחוץ לסוגריים גדולים, לפתוח את צמד הסוגריים, ורק בסוף להכפיל הכל ב-3.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשמור את 3 בחוץ ונפתח את שני הסוגריים הפנימיים.", math_expression: "3(x^2 + 2x - 2x - 4)" },
            { verbal_explanation: "שלב ב': נכנס איברים בתוך הסוגריים (ה-\\( 2x \\) מתבטל עם מינוס \\( 2x \\)).", math_expression: "3(x^2 - 4)" },
            { verbal_explanation: "שלב ג': נכניס את המספר 3 פנימה בעזרת פילוג.", math_expression: "3 \\times x^2 - 3 \\times 4 = 3x^2 - 12" }
        ],
        final_answer: "3x^2 - 12"
    },
    // שאלה 7
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "עבודה עם שני משתנים שונים. פשטו את הביטוי:\n\\( (x + y)(x - y) = ? \\)",
        options: [
            "x^2 - y^2", 
            "x^2 - 2xy - y^2", 
            "x^2 + y^2", 
            "x^2 - xy - y^2"
        ],
        correctAnswer: 0,
        hint: "זהו פיתוח קלאסי. שימו לב מה קורה לאיברי האמצע שמכילים גם \\( x \\) וגם \\( y \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את איברי הסוגריים הראשונים בשניים.", math_expression: "x \\times x = x^2 \\quad , \\quad x \\times (-y) = -xy" },
            { verbal_explanation: "שלב ב': נכפיל את המשתנה \\( y \\) בשני האיברים.", math_expression: "y \\times x = xy \\quad , \\quad y \\times (-y) = -y^2" },
            { verbal_explanation: "שלב ג': נחבר את החלקים.", math_expression: "x^2 - xy + xy - y^2" },
            { verbal_explanation: "שלב ד': האיברים האמצעיים מתבטלים לאפס.", math_expression: "x^2 - y^2" }
        ],
        final_answer: "x^2 - y^2"
    },
    // שאלה 8
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתיחת סוגריים המשלבת שבר! פשטו את הביטוי הבא:\n\\( \\frac{1}{2}(2x + 4)(x - 1) = ? \\)",
        options: [
            "x^2 + x - 2", 
            "x^2 + 2x - 2", 
            "x^2 - x - 2", 
            "\\frac{1}{2}x^2 + x - 2"
        ],
        correctAnswer: 0,
        hint: "מומלץ להכניס את השבר \\( \\frac{1}{2} \\) אל תוך הסוגריים הראשונים בלבד תחילה (כלומר לחלק ב-2), ורק אז לבצע כפל סוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את החצי בשני האיברים של הסוגריים הראשונים.", math_expression: "(\\frac{1}{2} \\times 2x + \\frac{1}{2} \\times 4) = (x + 2)" },
            { verbal_explanation: "שלב ב': כעת נכפיל את הסוגריים החדשים שקיבלנו בסוגריים השניים.", math_expression: "(x + 2)(x - 1)" },
            { verbal_explanation: "שלב ג': נפתח את הסוגריים כרגיל.", math_expression: "x^2 - 1x + 2x - 2" },
            { verbal_explanation: "שלב ד': נכנס איברים.", math_expression: "x^2 + x - 2" }
        ],
        final_answer: "x^2 + x - 2"
    },
    // שאלה 9
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פשטו את הביטוי הבא על ידי פתיחת סוגריים וכינוס:\n\\( (3x - 1)(2x - 4) = ? \\)",
        options: [
            "6x^2 - 14x + 4", 
            "6x^2 - 10x - 4", 
            "5x^2 - 14x + 4", 
            "6x^2 - 14x - 4"
        ],
        correctAnswer: 0,
        hint: "הקפידו על כפל של מספרים שליליים: מינוס 1 כפול מינוס 4 נותן פלוס 4.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את \\( 3x \\) בכל איבר בסוגריים השניים.", math_expression: "3x \\times 2x = 6x^2 \\quad , \\quad 3x \\times (-4) = -12x" },
            { verbal_explanation: "שלב ב': נכפיל את המינוס 1 בכל איבר בסוגריים השניים.", math_expression: "-1 \\times 2x = -2x \\quad , \\quad -1 \\times (-4) = 4" },
            { verbal_explanation: "שלב ג': נרשום הכל יחד.", math_expression: "6x^2 - 12x - 2x + 4" },
            { verbal_explanation: "שלב ד': נכנס איברים (מינוס \\( 12x \\) ומינוס \\( 2x \\) שווים מינוס \\( 14x \\)).", math_expression: "6x^2 - 14x + 4" }
        ],
        final_answer: "6x^2 - 14x + 4"
    },
    // שאלה 10
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "תלת איבר נוסף עם סימנים מעורבים. פשטו:\n\\( (x - 2)(x^2 + 2x + 4) = ? \\)",
        options: [
            "x^3 - 8", 
            "x^3 + 8", 
            "x^3 - 4x^2 - 8", 
            "x^3 - 2x^2 + 8"
        ],
        correctAnswer: 0,
        hint: "בצעו 6 הכפלות מסודרות. שימו לב שרוב האיברים יבטלו זה את זה (יתאפסו) בשלב כינוס האיברים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את ה-\\( x \\) בשלושת האיברים שבסוגריים השניים.", math_expression: "x \\times x^2 = x^3 \\quad , \\quad x \\times 2x = 2x^2 \\quad , \\quad x \\times 4 = 4x" },
            { verbal_explanation: "שלב ב': נכפיל את מינוס 2 בשלושת האיברים.", math_expression: "-2 \\times x^2 = -2x^2 \\quad , \\quad -2 \\times 2x = -4x \\quad , \\quad -2 \\times 4 = -8" },
            { verbal_explanation: "שלב ג': נרשום הכל בשורה אחת ארוכה.", math_expression: "x^3 + 2x^2 + 4x - 2x^2 - 4x - 8" },
            { verbal_explanation: "שלב ד': כינוס איברים. \\( 2x^2 \\) ומינוס \\( 2x^2 \\) מתאפסים. \\( 4x \\) ומינוס \\( 4x \\) מתאפסים. נשארנו רק עם הקצוות.", math_expression: "x^3 - 8" }
        ],
        final_answer: "x^3 - 8"
    },
    // שאלה 11
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "מינוס חיצוני בשילוב מקדמים:\n\\( -(2x - 3)(x + 4) = ? \\)",
        options: [
            "-2x^2 - 5x + 12", 
            "-2x^2 + 5x + 12", 
            "-2x^2 - 5x - 12", 
            "2x^2 - 5x - 12"
        ],
        correctAnswer: 0,
        hint: "התעלמו מהמינוס החיצוני בשלב הראשון. פתחו את הסוגריים כרגיל בתוך סוגריים מרובעים גדולים, ורק בסוף הפכו את כל הסימנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נשאיר את המינוס בחוץ ונכפיל את הסוגריים הפנימיים כרגיל.", math_expression: "- (2x^2 + 8x - 3x - 12)" },
            { verbal_explanation: "שלב ב': נבצע כינוס איברים בתוך הסוגריים המרובעים (\\( 8x - 3x = 5x \\)).", math_expression: "- (2x^2 + 5x - 12)" },
            { verbal_explanation: "שלב ג': כעת נכניס את המינוס פנימה. מינוס לפני סוגריים הופך כל סימן בפנים לסימן הנגדי שלו.", math_expression: "-2x^2 - 5x + 12" }
        ],
        final_answer: "-2x^2 - 5x + 12"
    },
    // שאלה 12
    {
        topic: "algebraic_technique",
        subTopic: "חוק הפילוג המורחב",
        question_text: "פתיחת סוגריים זהים לחלוטין. מה תהיה התוצאה של:\n\\( (x + 1)(x + 1) = ? \\)",
        options: [
            "x^2 + 2x + 1", 
            "x^2 + 1", 
            "2x + 2", 
            "x^2 + x + 1"
        ],
        correctAnswer: 0,
        hint: "למרות שהסוגריים זהים, עדיין מבצעים את כל 4 ההכפלות כרגיל (או שמשתמשים בנוסחת הכפל המקוצר).",
        solution_steps: [
            { verbal_explanation: "שלב א': נכפיל את \\( x \\) בשני האיברים.", math_expression: "x \\times x = x^2 \\quad , \\quad x \\times 1 = x" },
            { verbal_explanation: "שלב ב': נכפיל את 1 בשני האיברים.", math_expression: "1 \\times x = x \\quad , \\quad 1 \\times 1 = 1" },
            { verbal_explanation: "שלב ג': נחבר ונכנס איברים דומים (\\( x + x = 2x \\)).", math_expression: "x^2 + 2x + 1" }
        ],
        final_answer: "x^2 + 2x + 1"
    },

    // ==========================================================
    // תת נושא 2: הוצאת גורם משותף (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוציאו גורם משותף מקסימלי מהביטוי הבא:\n\\( 4x^2 + 8x = ? \\)",
        options: [
            "4x(x + 2)", 
            "2x(2x + 4)", 
            "4(x^2 + 2x)", 
            "x(4x + 8)"
        ],
        correctAnswer: 0,
        hint: "חפשו את המספר הגדול ביותר שמחלק גם את 4 וגם את 8, וכן את החזקה הנמוכה ביותר של המשתנה \\( x \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את הגורם המשותף למספרים 4 ו-8, שהוא המספר 4.", math_expression: "" },
            { verbal_explanation: "שלב ב': נמצא את הגורם המשותף למשתנים \\( x^2 \\) ו-\\( x \\), שהוא המשתנה בעל החזקה הנמוכה יותר: \\( x \\).", math_expression: "" },
            { verbal_explanation: "שלב ג': הגורם המשותף המקסימלי הוא \\( 4x \\). נחלק כל איבר ב-\\( 4x \\) כדי לראות מה נשאר בסוגריים.", math_expression: "4x^2 : 4x = x \\quad , \\quad 8x : 4x = 2" },
            { verbal_explanation: "שלב ד': נרשום את התשובה הסופית.", math_expression: "4x(x + 2)" }
        ],
        final_answer: "4x(x + 2)"
    },
    // שאלה 14
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוציאו גורם משותף מקסימלי מהביטוי הבא:\n\\( 15x^3 - 5x^2 = ? \\)",
        options: [
            "5x^2(3x - 1)", 
            "5x(3x^2 - x)", 
            "x^2(15x - 5)", 
            "5x^2(3x)"
        ],
        correctAnswer: 0,
        hint: "הקפידו לחלק כל איבר בגורם המשותף. שימו לב מה נשאר כשמחלקים איבר בדיוק בעצמו (התשובה היא 1, לא אפס).",
        solution_steps: [
            { verbal_explanation: "שלב א': הגורם המשותף למספרים 15 ו-5 הוא המספר 5.", math_expression: "" },
            { verbal_explanation: "שלב ב': הגורם המשותף למשתנים \\( x^3 \\) ו-\\( x^2 \\) הוא המשתנה בחזקה הקטנה: \\( x^2 \\). הגורם הכולל הוא \\( 5x^2 \\).", math_expression: "" },
            { verbal_explanation: "שלב ג': נחלק איבר ראשון.", math_expression: "15x^3 : 5x^2 = 3x" },
            { verbal_explanation: "שלב ד': נחלק איבר שני בעצמו.", math_expression: "-5x^2 : 5x^2 = -1" },
            { verbal_explanation: "שלב ה': נרכיב את התשובה.", math_expression: "5x^2(3x - 1)" }
        ],
        final_answer: "5x^2(3x - 1)"
    },
    // שאלה 15
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם משותף שלילי. פשטו את הביטוי:\n\\( -3x^2 - 9x = ? \\)",
        options: [
            "-3x(x + 3)", 
            "-3x(x - 3)", 
            "3x(-x - 3)", 
            "-3(x^2 + 3x)"
        ],
        correctAnswer: 0,
        hint: "כשמוציאים גורם משותף בסימן מינוס, כל הסימנים של האיברים שנשארים בתוך הסוגריים מתהפכים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את הגורם המשותף \\( -3x \\) אל מחוץ לסוגריים.", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק את האיבר הראשון. מינוס לחלק למינוס נותן פלוס.", math_expression: "-3x^2 : (-3x) = x" },
            { verbal_explanation: "שלב ג': נחלק את האיבר השני. גם כאן מינוס לחלק למינוס נותן פלוס.", math_expression: "-9x : (-3x) = 3" },
            { verbal_explanation: "שלב ד': התוצאה שומרת על פלוסים בתוך הסוגריים.", math_expression: "-3x(x + 3)" }
        ],
        final_answer: "-3x(x + 3)"
    },
    // שאלה 16
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם משותף עם שבר! פשטו את הביטוי:\n\\( \\frac{1}{2}x^2 + \\frac{1}{2}x = ? \\)",
        options: [
            "\\frac{1}{2}x(x + 1)", 
            "\\frac{1}{2}x(x)", 
            "x(\\frac{1}{2}x + 1)", 
            "\\frac{1}{2}x(x^2 + x)"
        ],
        correctAnswer: 0,
        hint: "השבר \\( \\frac{1}{2} \\) הוא מספר לכל דבר, ואם הוא מופיע בשני האיברים, הוא חלק מהגורם המשותף.",
        solution_steps: [
            { verbal_explanation: "שלב א': המקדם \\( \\frac{1}{2} \\) משותף לשני האיברים. המשתנה \\( x \\) משותף גם הוא. נוציא \\( \\frac{1}{2}x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק איבר ראשון ב-\\(\\frac{1}{2}x\\).", math_expression: "(\\frac{1}{2}x^2) : (\\frac{1}{2}x) = x" },
            { verbal_explanation: "שלב ג': נחלק איבר שני בעצמו.", math_expression: "(\\frac{1}{2}x) : (\\frac{1}{2}x) = 1" },
            { verbal_explanation: "שלב ד': נרשום את התוצאה.", math_expression: "\\frac{1}{2}x(x + 1)" }
        ],
        final_answer: "\\frac{1}{2}x(x + 1)"
    },
    // שאלה 17
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "גורם משותף שהוא ביטוי שלם! פרקו לגורמים:\n\\( x(y + 1) + 2(y + 1) = ? \\)",
        options: [
            "(y + 1)(x + 2)", 
            "x(y + 1) + 2", 
            "2x(y + 1)", 
            "(y + 1)(2x)"
        ],
        correctAnswer: 0,
        hint: "התייחסו לסוגריים כולן כיחידה אחת. מכיוון שהסוגריים מופיעים פעמיים, אפשר להוציא אותם מחוץ לסוגריים חדשים בתור גורם משותף.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שהסוגריים \\( (y + 1) \\) חוזרים על עצמם גם באיבר השמאלי וגם באיבר הימני.", math_expression: "" },
            { verbal_explanation: "שלב ב': נוציא את כל ה'בלוק' הזה החוצה, ונפתח סוגריים חדשים לשאריות שנותרו מכל צד.", math_expression: "(y + 1) \\times [ ... ]" },
            { verbal_explanation: "שלב ג': משמאל נשאר \\( x \\), מימין נשאר פלוס 2. נכניס אותם לסוגריים.", math_expression: "(y + 1)(x + 2)" }
        ],
        final_answer: "(y + 1)(x + 2)"
    },
    // שאלה 18
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם משותף הכולל שני משתנים שונים. פשטו:\n\\( 3x^2y - 6xy^2 = ? \\)",
        options: [
            "3xy(x - 2y)", 
            "3xy(x - y)", 
            "3x(y - 2y^2)", 
            "xy(3x - 6y)"
        ],
        correctAnswer: 0,
        hint: "במספרים - המחלק הוא 3. במשתנה איקס - מוציאים \\( x \\). במשתנה וואי - מוציאים \\( y \\).",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא גורם משותף למספרים: 3.", math_expression: "" },
            { verbal_explanation: "שלב ב': גורם משותף ל- \\( x \\) הוא החזקה הנמוכה (\\( x \\)). גורם משותף ל- \\( y \\) הוא החזקה הנמוכה (\\( y \\)).", math_expression: "3xy" },
            { verbal_explanation: "שלב ג': נחלק איבר ראשון ב-\\( 3xy \\).", math_expression: "3x^2y : 3xy = x" },
            { verbal_explanation: "שלב ד': נחלק איבר שני ב-\\( 3xy \\).", math_expression: "-6xy^2 : 3xy = -2y" },
            { verbal_explanation: "שלב ה': התוצאה הסופית.", math_expression: "3xy(x - 2y)" }
        ],
        final_answer: "3xy(x - 2y)"
    },
    // שאלה 19
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם משותף מתוך שלושה איברים (תלת איבר). פרקו:\n\\( 7x^4 - 14x^3 + 21x^2 = ? \\)",
        options: [
            "7x^2(x^2 - 2x + 3)", 
            "7x(x^3 - 2x^2 + 3x)", 
            "x^2(7x^2 - 14x + 21)", 
            "7x^2(x^2 - 2x - 3)"
        ],
        correctAnswer: 0,
        hint: "גורם משותף חייב לחלק את כל שלושת האיברים. 7 מתחלק בכולם, והחזקה הנמוכה ביותר היא 2.",
        solution_steps: [
            { verbal_explanation: "שלב א': המספר הגדול ביותר שמחלק את 7, 14 ו-21 הוא 7.", math_expression: "" },
            { verbal_explanation: "שלב ב': החזקה הקטנה ביותר של המשתנה היא \\( x^2 \\). לכן הגורם הוא \\( 7x^2 \\).", math_expression: "7x^2 \\times [ ... ]" },
            { verbal_explanation: "שלב ג': נחלק כל איבר בגורם המשותף.", math_expression: "7x^4 : 7x^2 = x^2 \\quad , \\quad -14x^3 : 7x^2 = -2x \\quad , \\quad 21x^2 : 7x^2 = 3" },
            { verbal_explanation: "שלב ד': נרשום יחד.", math_expression: "7x^2(x^2 - 2x + 3)" }
        ],
        final_answer: "7x^2(x^2 - 2x + 3)"
    },
    // שאלה 20
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת ביטוי כגורם משותף בשילוב מינוס. פשטו:\n\\( x(a - b) - y(a - b) = ? \\)",
        options: [
            "(a - b)(x - y)", 
            "(a - b)(x + y)", 
            "(a + b)(x - y)", 
            "x(a - b) - y"
        ],
        correctAnswer: 0,
        hint: "הסוגריים \\( (a - b) \\) חוזרים בשני צידי המינוס, לכן הם בעצמם הגורם המשותף.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את הבלוק המשותף \\( (a - b) \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נוציא את הבלוק הזה אל מחוץ לסוגריים חדשים.", math_expression: "(a - b) \\times [ ... ]" },
            { verbal_explanation: "שלב ג': משמאל למינוס נשאר \\( x \\), ומימין נשאר \\( y \\). השילוב נותן \\( (x - y) \\).", math_expression: "(a - b)(x - y)" }
        ],
        final_answer: "(a - b)(x - y)"
    },
    // שאלה 21
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "צמצום שברים באמצעות הוצאת גורם משותף! פשטו את השבר:\n\\( \\frac{2x^2 + 4x}{2x} = ? \\)",
        options: [
            "x + 2", 
            "x^2 + 2", 
            "2x + 4", 
            "x + 4x"
        ],
        correctAnswer: 0,
        hint: "אסור לצמצם ישר! הוציאו תחילה \\( 2x \\) כגורם משותף במונה. ואז צמצמו אותו עם המכנה כיחידה שלמה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף במונה: מתוך שני האיברים נוציא \\( 2x \\).", math_expression: "2x(x + 2)" },
            { verbal_explanation: "שלב ב': נרשום את השבר מחדש עם המונה המפורק.", math_expression: "\\frac{2x(x + 2)}{2x}" },
            { verbal_explanation: "שלב ג': נצמצם את הכופל \\( 2x \\) מהמונה עם ה-\\( 2x \\) במכנה.", math_expression: "x + 2" }
        ],
        final_answer: "x + 2"
    },
    // שאלה 22
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "צמצום שבר (חלק 2): פשטו את השבר הבא:\n\\( \\frac{x^3 - x^2}{x^2} = ? \\)",
        options: [
            "x - 1", 
            "x", 
            "x^2 - 1", 
            "x - x^2"
        ],
        correctAnswer: 0,
        hint: "הוציאו \\( x^2 \\) כגורם משותף במונה. זכרו שחלוקת איבר בעצמו (כמו \\( x^2 : x^2 \\)) נותנת 1.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את החזקה הנמוכה במונה (\\( x^2 \\)) כגורם משותף.", math_expression: "x^2(x - 1)" },
            { verbal_explanation: "שלב ב': נרשום את השבר מחדש.", math_expression: "\\frac{x^2(x - 1)}{x^2}" },
            { verbal_explanation: "שלב ג': נצמצם את \\( x^2 \\) שמופיע למעלה ולמטה.", math_expression: "x - 1" }
        ],
        final_answer: "x - 1"
    },
    // שאלה 23
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת מינוס משתנה כגורם משותף. פרקו:\n\\( -x^2 + x = ? \\)",
        options: [
            "-x(x - 1)", 
            "-x(x + 1)", 
            "x(-x + 1)", 
            "-1(x^2 - x)"
        ],
        correctAnswer: 0,
        hint: "הוציאו מינוס איקס (\\( -x \\)). כשמוציאים מינוס, הסימן של המספר הבא מתהפך.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את \\( -x \\) כגורם משותף מחוץ לסוגריים.", math_expression: "" },
            { verbal_explanation: "שלב ב': חלוקת האיבר הראשון: מינוס חלקי מינוס שווה פלוס.", math_expression: "-x^2 : (-x) = x" },
            { verbal_explanation: "שלב ג': חלוקת האיבר השני: פלוס חלקי מינוס שווה מינוס.", math_expression: "x : (-x) = -1" },
            { verbal_explanation: "שלב ד': התשובה הסופית.", math_expression: "-x(x - 1)" }
        ],
        final_answer: "-x(x - 1)"
    },
    // שאלה 24
    {
        topic: "algebraic_technique",
        subTopic: "הוצאת גורם משותף",
        question_text: "הוצאת גורם אחרונה לנושא זה! פשטו:\n\\( 10x^2 - 5x = ? \\)",
        options: [
            "5x(2x - 1)", 
            "5x(2x)", 
            "10x(x - 0.5)", 
            "5x^2(2 - 1)"
        ],
        correctAnswer: 0,
        hint: "המספר 5 מחלק את שני המקדמים, והמשתנה \\( x \\) מופיע בשניהם.",
        solution_steps: [
            { verbal_explanation: "שלב א': הגורם המשותף המקסימלי הוא \\( 5x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': נחלק איבר ראשון.", math_expression: "10x^2 : 5x = 2x" },
            { verbal_explanation: "שלב ג': נחלק איבר שני בעצמו.", math_expression: "-5x : 5x = -1" },
            { verbal_explanation: "שלב ד': נרשום כתשובה סופית.", math_expression: "5x(2x - 1)" }
        ],
        final_answer: "5x(2x - 1)"
    },

    // ==========================================================
    // תת נושא 3: נוסחאות הכפל המקוצר (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "שימוש בנוסחת דו-איבר בריבוע (סכום). פשטו:\n\\( (x + 5)^2 = ? \\)",
        options: [
            "x^2 + 10x + 25", 
            "x^2 + 25", 
            "x^2 + 5x + 25", 
            "x^2 + 10x + 10"
        ],
        correctAnswer: 0,
        hint: "הנוסחה היא: הראשון בריבוע, ועוד פעמיים הראשון כפול השני, ועוד השני בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב א': נעלה את האיבר הראשון בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': האיבר האמצעי הוא פעמיים מכפלת האיברים (2 כפול \\( x \\) כפול 5).", math_expression: "2 \\times x \\times 5 = 10x" },
            { verbal_explanation: "שלב ג': נעלה את האיבר השני בריבוע.", math_expression: "5^2 = 25" },
            { verbal_explanation: "שלב ד': נחבר הכל לטרינום אחד.", math_expression: "x^2 + 10x + 25" }
        ],
        final_answer: "x^2 + 10x + 25"
    },
    // שאלה 26
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "שימוש בנוסחת דו-איבר בריבוע (הפרש). פשטו:\n\\( (x - 4)^2 = ? \\)",
        options: [
            "x^2 - 8x + 16", 
            "x^2 - 16", 
            "x^2 + 8x + 16", 
            "x^2 - 4x + 16"
        ],
        correctAnswer: 0,
        hint: "בנוסחת ההפרש, האיבר האמצעי מקבל סימן מינוס, אבל האיבר האחרון תמיד נשאר חיובי (כי מספר שלילי בריבוע הופך חיובי).",
        solution_steps: [
            { verbal_explanation: "שלב א': האיבר הראשון בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': האיבר האמצעי מקבל מינוס: מינוס 2 כפול \\( x \\) כפול 4.", math_expression: "- 2 \\times x \\times 4 = -8x" },
            { verbal_explanation: "שלב ג': האיבר השני בריבוע (מינוס 4 כפול מינוס 4).", math_expression: "(-4)^2 = 16" },
            { verbal_explanation: "שלב ד': חיבור החלקים לטרינום.", math_expression: "x^2 - 8x + 16" }
        ],
        final_answer: "x^2 - 8x + 16"
    },
    // שאלה 27
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "העלאה בריבוע של איבר עם מקדם. פשטו:\n\\( (2x + 3)^2 = ? \\)",
        options: [
            "4x^2 + 12x + 9", 
            "2x^2 + 12x + 9", 
            "4x^2 + 6x + 9", 
            "4x^2 + 9"
        ],
        correctAnswer: 0,
        hint: "כשמעלים את \\( 2x \\) בריבוע, יש להעלות גם את ה-2 בריבוע (מקבלים 4) וגם את ה-\\( x \\) בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב א': נעלה את \\( 2x \\) בריבוע כיחידה אחת.", math_expression: "(2x)^2 = 4x^2" },
            { verbal_explanation: "שלב ב': איבר אמצעי (פעמיים \\( 2x \\) כפול 3).", math_expression: "2 \\times 2x \\times 3 = 12x" },
            { verbal_explanation: "שלב ג': האיבר השני בריבוע.", math_expression: "3^2 = 9" },
            { verbal_explanation: "שלב ד': חיבור החלקים.", math_expression: "4x^2 + 12x + 9" }
        ],
        final_answer: "4x^2 + 12x + 9"
    },
    // שאלה 28
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "הפרש בריבוע עם מקדם נעלם. פשטו:\n\\( (3x - 1)^2 = ? \\)",
        options: [
            "9x^2 - 6x + 1", 
            "3x^2 - 6x + 1", 
            "9x^2 - 1", 
            "9x^2 - 3x + 1"
        ],
        correctAnswer: 0,
        hint: "האיבר הראשון בריבוע נותן \\( 9x^2 \\). מה לגבי איבר האמצע והסוף?",
        solution_steps: [
            { verbal_explanation: "שלב א': העלאת איבר ראשון בריבוע.", math_expression: "(3x)^2 = 9x^2" },
            { verbal_explanation: "שלב ב': איבר אמצעי (פעמיים 3x כפול 1 עם סימן מינוס).", math_expression: "-2 \\times 3x \\times 1 = -6x" },
            { verbal_explanation: "שלב ג': איבר אחרון בריבוע (מינוס 1 כפול מינוס 1 נותן פלוס 1).", math_expression: "(-1)^2 = 1" },
            { verbal_explanation: "שלב ד': חיבור החלקים.", math_expression: "9x^2 - 6x + 1" }
        ],
        final_answer: "9x^2 - 6x + 1"
    },
    // שאלה 29
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "נוסחת הפרש הריבועים (מכפלת סכום והפרש). פשטו:\n\\( (x + 6)(x - 6) = ? \\)",
        options: [
            "x^2 - 36", 
            "x^2 - 12x - 36", 
            "x^2 + 36", 
            "x^2 - 12"
        ],
        correctAnswer: 0,
        hint: "כשכופלים סוגריים זהים שרק הסימן שביניהם שונה, איברי האמצע נופלים. נשאר רק הראשון בריבוע פחות השני בריבוע.",
        solution_steps: [
            { verbal_explanation: "זוהי תבנית קלאסית של הפרש ריבועים. הנוסחה היא \\( a^2 - b^2 \\).", math_expression: "(x+6)(x-6) = x^2 - 6^2" },
            { verbal_explanation: "האיבר הראשון \\( x \\) מועלה בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "האיבר השני 6 מועלה בריבוע ומוחסר מהראשון.", math_expression: "6^2 = 36" },
            { verbal_explanation: "התוצאה הסופית מתקבלת.", math_expression: "x^2 - 36" }
        ],
        final_answer: "x^2 - 36"
    },
    // שאלה 30
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "הפרש ריבועים עם מקדם. פשטו:\n\\( (2x - 5)(2x + 5) = ? \\)",
        options: [
            "4x^2 - 25", 
            "2x^2 - 25", 
            "4x^2 - 10", 
            "4x^2 - 20x - 25"
        ],
        correctAnswer: 0,
        hint: "גם כאן איברי האמצע מתבטלים. העלו את \\( 2x \\) בריבוע בשלמותו והחסירו את ריבוע ה-5.",
        solution_steps: [
            { verbal_explanation: "נפעיל את נוסחת הפרש הריבועים.", math_expression: "(a-b)(a+b) = a^2 - b^2" },
            { verbal_explanation: "האיבר הראשון בריבוע מחושב במלואו.", math_expression: "(2x)^2 = 4x^2" },
            { verbal_explanation: "האיבר השני בריבוע מחושב ומוחסר.", math_expression: "5^2 = 25" },
            { verbal_explanation: "התוצאה הסופית.", math_expression: "4x^2 - 25" }
        ],
        final_answer: "4x^2 - 25"
    },
    // שאלה 31
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "צמצום שבר בעזרת פירוק של הפרש ריבועים. פשטו את השבר:\n\\( \\frac{x^2 - 9}{x - 3} = ? \\)",
        options: [
            "x + 3", 
            "x - 3", 
            "x - 9", 
            "x + 9"
        ],
        correctAnswer: 0,
        hint: "פרקו את המונה לשני סוגריים. 9 הוא הריבוע של 3. לאחר הפירוק, צמצמו את הסוגריים הזהים במונה ובמכנה.",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שהמונה הוא הפרש ריבועים ונקבל מכפלה.", math_expression: "x^2 - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "שלב ב': נרשום את השבר מחדש עם המונה המפורק.", math_expression: "\\frac{(x - 3)(x + 3)}{x - 3}" },
            { verbal_explanation: "שלב ג': נצמצם את הבלוק \\( (x - 3) \\) שמופיע למעלה ולמטה.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },
    // שאלה 32
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "צמצום שבר נוסף. פשטו את השבר:\n\\( \\frac{x^2 - 25}{x + 5} = ? \\)",
        options: [
            "x - 5", 
            "x + 5", 
            "x - 25", 
            "x + 25"
        ],
        correctAnswer: 0,
        hint: "פרקו את המונה \\( x^2 - 25 \\) למכפלת שני סוגריים. אילו סוגריים יצטמצמו עם המכנה?",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה לפי נוסחת הפרש הריבועים.", math_expression: "x^2 - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "שלב ב': נציב בשבר המקורי.", math_expression: "\\frac{(x - 5)(x + 5)}{x + 5}" },
            { verbal_explanation: "שלב ג': נצמצם את הגורם \\( (x + 5) \\) למעלה ולמטה.", math_expression: "x - 5" }
        ],
        final_answer: "x - 5"
    },
    // שאלה 33
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "העלאה בריבוע של שבר! פשטו:\n\\( (x + \\frac{1}{2})^2 = ? \\)",
        options: [
            "x^2 + x + \\frac{1}{4}", 
            "x^2 + \\frac{1}{4}", 
            "x^2 + \\frac{1}{2}x + \\frac{1}{4}", 
            "x^2 + 2x + \\frac{1}{4}"
        ],
        correctAnswer: 0,
        hint: "פעלו לפי הנוסחה: האיבר האמצעי הוא פעמיים המכפלה, כלומר פעמיים \\( x \\) כפול חצי (שזה 1).",
        solution_steps: [
            { verbal_explanation: "שלב א': האיבר הראשון בריבוע.", math_expression: "x^2" },
            { verbal_explanation: "שלב ב': פעמיים האיבר הראשון כפול השני. מכיוון ש-2 כפול חצי שווה 1, נקבל \\( x \\) שלם.", math_expression: "2 \\times x \\times \\frac{1}{2} = x" },
            { verbal_explanation: "שלב ג': האיבר השני בריבוע. חצי כפול חצי זה רבע.", math_expression: "(\\frac{1}{2})^2 = \\frac{1}{4}" },
            { verbal_explanation: "שלב ד': נחבר הכל.", math_expression: "x^2 + x + \\frac{1}{4}" }
        ],
        final_answer: "x^2 + x + \\frac{1}{4}"
    },
    // שאלה 34
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "פעולה הפוכה: ארזו את הטרינום חזרה לתוך נוסחת כפל מקוצר:\n\\( x^2 - 10x + 25 = ? \\)",
        options: [
            "(x - 5)^2", 
            "(x + 5)^2", 
            "(x - 25)^2", 
            "(x - 5)(x + 5)"
        ],
        correctAnswer: 0,
        hint: "הוציאו שורש מהאיבר הראשון (\\( x^2 \\)) ומהאיבר האחרון (25). בדקו אם פעמיים המכפלה נותנת את איבר האמצע עם הסימן הנכון.",
        solution_steps: [
            { verbal_explanation: "שלב א': השורש של \\( x^2 \\) הוא \\( x \\), והשורש של 25 הוא 5.", math_expression: "" },
            { verbal_explanation: "שלב ב': מכיוון שהסימן של איבר האמצע הוא מינוס, נציב מינוס בין האיברים בתוך הסוגריים.", math_expression: "(x - 5)" },
            { verbal_explanation: "שלב ג': נבדוק אם הפיתוח של \\( (x - 5)^2 \\) מחזיר אותנו לטרינום המקורי. פעמיים מינוס 5 כפול \\( x \\) שווה מינוס \\( 10x \\), כך שזה נכון.", math_expression: "" },
            { verbal_explanation: "התשובה הסופית.", math_expression: "(x - 5)^2" }
        ],
        final_answer: "(x - 5)^2"
    },
    // שאלה 35
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "פעולה הפוכה עם מקדם: ארזו את הטרינום חזרה:\n\\( 4x^2 + 12x + 9 = ? \\)",
        options: [
            "(2x + 3)^2", 
            "(4x + 3)^2", 
            "(2x + 9)^2", 
            "(2x - 3)^2"
        ],
        correctAnswer: 0,
        hint: "מהו השורש של \\( 4x^2 \\)? מהו השורש של 9? האם 2 כפול המכפלה שלהם נותן 12?",
        solution_steps: [
            { verbal_explanation: "שלב א': השורש הריבועי של \\( 4x^2 \\) הוא \\( 2x \\).", math_expression: "" },
            { verbal_explanation: "שלב ב': השורש הריבועי של 9 הוא 3.", math_expression: "" },
            { verbal_explanation: "שלב ג': נבדוק את איבר האמצע. פעמיים \\( 2x \\) כפול 3 אכן נותן \\( 12x \\).", math_expression: "2 \\times 2x \\times 3 = 12x" },
            { verbal_explanation: "לכן ניתן לארוז את הביטוי לסוגריים בריבוע.", math_expression: "(2x + 3)^2" }
        ],
        final_answer: "(2x + 3)^2"
    },
    // שאלה 36
    {
        topic: "algebraic_technique",
        subTopic: "נוסחאות הכפל המקוצר",
        question_text: "שאלת אתגר: פשטו את ההפרש בין שתי נוסחאות כפל מקוצר:\n\\( (x + 3)^2 - (x - 3)^2 = ? \\)",
        options: [
            "12x", 
            "0", 
            "2x^2 + 18", 
            "6x"
        ],
        correctAnswer: 0,
        hint: "פתחו את שני הביטויים בנפרד לפי הנוסחאות, ואז חסרו אותם. הקפידו לשים סוגריים מסביב לפיתוח של הביטוי השני כדי לא לטעות בסימנים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את נוסחת החיבור.", math_expression: "x^2 + 6x + 9" },
            { verbal_explanation: "שלב ב': נפתח את נוסחת החיסור, ונשמור עליה בתוך סוגריים בגלל המינוס שמחוץ.", math_expression: "- (x^2 - 6x + 9)" },
            { verbal_explanation: "שלב ג': נכניס את המינוס כדי להפוך סימנים.", math_expression: "-x^2 + 6x - 9" },
            { verbal_explanation: "שלב ד': נחבר את הכל יחד. ה-\\( x^2 \\) נופל, וה-9 נופל.", math_expression: "x^2 + 6x + 9 - x^2 + 6x - 9" },
            { verbal_explanation: "נשארנו רק עם חיבור איברי ה-\\( x \\).", math_expression: "6x + 6x = 12x" }
        ],
        final_answer: "12x"
    },

    // ==========================================================
    // תת נושא 4: פירוק טרינום ריבועי (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "פרקו את הטרינום הבא למכפלה של שני סוגריים:\n\\( x^2 + 5x + 6 = ? \\)",
        options: [
            "(x + 2)(x + 3)", 
            "(x + 1)(x + 6)", 
            "(x - 2)(x - 3)", 
            "(x + 5)(x + 6)"
        ],
        correctAnswer: 0,
        hint: "עליכם למצוא שני מספרים שהמכפלה שלהם היא 6, וסכומם (חיבור) הוא 5.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחפש זוג מספרים שמכפלתם היא 6.", math_expression: "" },
            { verbal_explanation: "האפשרויות הן 1 ו-6, או 2 ו-3.", math_expression: "" },
            { verbal_explanation: "שלב ב': נבדוק איזה זוג נותן סכום של 5.", math_expression: "" },
            { verbal_explanation: "הזוג המנצח הוא 2 ו-3. לכן נרשום אותם בתוך הסוגריים.", math_expression: "(x + 2)(x + 3)" }
        ],
        final_answer: "(x + 2)(x + 3)"
    },
    // שאלה 38
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "פרקו את הטרינום (סימן מינוס באמצע):\n\\( x^2 - 7x + 10 = ? \\)",
        options: [
            "(x - 2)(x - 5)", 
            "(x + 2)(x + 5)", 
            "(x - 1)(x - 10)", 
            "(x + 2)(x - 5)"
        ],
        correctAnswer: 0,
        hint: "המכפלה חיובית (10) והסכום שלילי (-7), לכן שני המספרים חייבים להיות שליליים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נחפש שני מספרים שמכפלתם 10.", math_expression: "" },
            { verbal_explanation: "מכיוון שהמכפלה חיובית אך הסכום שלילי, נבדוק זוגות של מספרים שליליים: (-1, -10) או (-2, -5).", math_expression: "" },
            { verbal_explanation: "שלב ב': נבדוק סכום. סכום של מינוס 2 ומינוס 5 הוא בדיוק מינוס 7.", math_expression: "-2 + (-5) = -7" },
            { verbal_explanation: "נרשום את התוצאה.", math_expression: "(x - 2)(x - 5)" }
        ],
        final_answer: "(x - 2)(x - 5)"
    },
    // שאלה 39
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "פרקו את הטרינום (סימן מינוס בסוף):\n\\( x^2 + 2x - 8 = ? \\)",
        options: [
            "(x + 4)(x - 2)", 
            "(x - 4)(x + 2)", 
            "(x + 8)(x - 1)", 
            "(x - 4)(x - 2)"
        ],
        correctAnswer: 0,
        hint: "מכפלה שלילית (-8) אומרת שאחד חיובי ואחד שלילי. הסכום החיובי (2) אומר שהמספר החיובי מביניהם הוא הגדול יותר.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכפלה שווה -8. זוגות אפשריים: (1, 8) או (2, 4) עם סימנים שונים.", math_expression: "" },
            { verbal_explanation: "שלב ב': הסכום שווה 2 חיובי. לכן, ניתן את הסימן החיובי למספר הגדול (4) ואת השלילי למספר הקטן (2).", math_expression: "4 + (-2) = 2" },
            { verbal_explanation: "המספרים שמצאנו הם 4 ומינוס 2.", math_expression: "(x + 4)(x - 2)" }
        ],
        final_answer: "(x + 4)(x - 2)"
    },
    // שאלה 40
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "פרקו את הטרינום (כל הסימנים שליליים):\n\\( x^2 - 3x - 10 = ? \\)",
        options: [
            "(x - 5)(x + 2)", 
            "(x + 5)(x - 2)", 
            "(x - 10)(x + 1)", 
            "(x - 5)(x - 2)"
        ],
        correctAnswer: 0,
        hint: "מכפלה שלילית (-10) אומרת שהסימנים שונים. הסכום השלילי (-3) אומר שהמספר השלילי מביניהם הוא הגדול יותר.",
        solution_steps: [
            { verbal_explanation: "שלב א': מכפלה שווה -10. סכום שווה -3.", math_expression: "" },
            { verbal_explanation: "הזוגות ל-10 הם 1 ו-10, או 2 ו-5.", math_expression: "" },
            { verbal_explanation: "שלב ב': כדי לקבל סכום של -3, ניתן את המינוס למספר 5, ואת הפלוס ל-2.", math_expression: "-5 + 2 = -3" },
            { verbal_explanation: "המספרים שמצאנו הם מינוס 5 ופלוס 2.", math_expression: "(x - 5)(x + 2)" }
        ],
        final_answer: "(x - 5)(x + 2)"
    },
    // שאלה 41
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "תרגיל טרינום נוסף:\n\\( x^2 - 9x + 20 = ? \\)",
        options: [
            "(x - 4)(x - 5)", 
            "(x + 4)(x + 5)", 
            "(x - 2)(x - 10)", 
            "(x - 20)(x + 1)"
        ],
        correctAnswer: 0,
        hint: "איזה כפל נותן 20 חיובי, וחיבור נותן מינוס 9?",
        solution_steps: [
            { verbal_explanation: "המכפלה חיובית, הסכום שלילי. שני המספרים חייבים להיות שליליים.", math_expression: "" },
            { verbal_explanation: "זוגות עבור 20: 1 ו-20, 2 ו-10, 4 ו-5.", math_expression: "" },
            { verbal_explanation: "הזוג היחיד שסכומו הוא 9 (או -9 עם המינוסים) הוא 4 ו-5.", math_expression: "-4 + (-5) = -9" },
            { verbal_explanation: "התוצאה הסופית מתקבלת.", math_expression: "(x - 4)(x - 5)" }
        ],
        final_answer: "(x - 4)(x - 5)"
    },
    // שאלה 42
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "פרקו את הטרינום הבא:\n\\( x^2 + x - 12 = ? \\)",
        options: [
            "(x + 4)(x - 3)", 
            "(x - 4)(x + 3)", 
            "(x + 6)(x - 2)", 
            "(x - 6)(x + 2)"
        ],
        correctAnswer: 0,
        hint: "כאן המקדם של \\( x \\) האמצעי הוא בעצם 1 מוסתר. איזה מספרים כפלם -12 וסכומם +1?",
        solution_steps: [
            { verbal_explanation: "מכפלה שלילית (-12), סכום חיובי מוסתר (+1).", math_expression: "" },
            { verbal_explanation: "נבדוק זוגות ל-12: 1 ו-12, 2 ו-6, 3 ו-4.", math_expression: "" },
            { verbal_explanation: "כדי לקבל +1 מחיבור, ניקח 4 חיובי ו-3 שלילי.", math_expression: "4 + (-3) = 1" },
            { verbal_explanation: "נרשום את הפירוק.", math_expression: "(x + 4)(x - 3)" }
        ],
        final_answer: "(x + 4)(x - 3)"
    },
    // שאלה 43
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "שימוש בטרינום לפתרון משוואה ריבועית. מצאו את הפתרונות למשוואה:\n\\( x^2 - 8x + 15 = 0 \\)",
        options: [
            "x=3 \\quad , \\quad x=5", 
            "x=-3 \\quad , \\quad x=-5", 
            "x=15 \\quad , \\quad x=1", 
            "x=-15 \\quad , \\quad x=-1"
        ],
        correctAnswer: 0,
        hint: "לאחר פירוק הטרינום, זכרו שכדי שהמכפלה תתאפס, המשתנה \\( x \\) צריך להיות שווה למספר הנגדי מזה שמופיע בסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את הטרינום. מספרים שכפלם 15 וסכומם -8 הם -3 ו- -5.", math_expression: "(x - 3)(x - 5) = 0" },
            { verbal_explanation: "שלב ב': נשווה כל אחד מהסוגריים לאפס כדי למצוא מתי המשוואה מתאפסת.", math_expression: "x - 3 = 0 \\quad \\text{או} \\quad x - 5 = 0" },
            { verbal_explanation: "שלב ג': נעביר אגפים ונמצא את הפתרונות.", math_expression: "x = 3 \\quad , \\quad x = 5" }
        ],
        final_answer: "x=3 \\quad , \\quad x=5"
    },
    // שאלה 44
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "טרינום עם גורם משותף מקדים! פרקו לגורמים:\n\\( 2x^2 + 10x + 12 = ? \\)",
        options: [
            "2(x + 2)(x + 3)", 
            "2(x + 6)(x + 1)", 
            "(2x + 4)(x + 3)", 
            "2(x - 2)(x - 3)"
        ],
        correctAnswer: 0,
        hint: "לפני שתפעילו את שיטת הטרינום, הוציאו את המספר 2 כגורם משותף מכל האיברים.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את 2 מחוץ לסוגריים ונקבל טרינום פשוט יותר.", math_expression: "2(x^2 + 5x + 6)" },
            { verbal_explanation: "שלב ב': נתמקד רק בטרינום שבפנים. מספרים שכפלם 6 וסכומם 5 הם 2 ו-3.", math_expression: "" },
            { verbal_explanation: "שלב ג': נפרק את הטרינום הפנימי, ולא נשכח את המקדם 2 שמחכה בחוץ.", math_expression: "2(x + 2)(x + 3)" }
        ],
        final_answer: "2(x + 2)(x + 3)"
    },
    // שאלה 45
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "עוד טרינום עם גורם משותף: פרקו את הביטוי:\n\\( 3x^2 - 15x + 18 = ? \\)",
        options: [
            "3(x - 2)(x - 3)", 
            "3(x + 2)(x + 3)", 
            "3(x - 6)(x - 1)", 
            "(3x - 6)(x - 3)"
        ],
        correctAnswer: 0,
        hint: "הוציאו את המספר 3 כגורם משותף, ואז פרקו את הטרינום הפנימי (כפל שווה 6, סכום שווה -5).",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא 3 החוצה כגורם משותף.", math_expression: "3(x^2 - 5x + 6)" },
            { verbal_explanation: "שלב ב': נחפש זוג שמכפלתו 6 וסכומו -5. המספרים הם -2 ו- -3.", math_expression: "" },
            { verbal_explanation: "שלב ג': נרכיב את הפירוק המלא.", math_expression: "3(x - 2)(x - 3)" }
        ],
        final_answer: "3(x - 2)(x - 3)"
    },
    // שאלה 46
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "טרינום שמתחיל במינוס. פרקו אותו:\n\\( -x^2 - 4x + 5 = ? \\)",
        options: [
            "-(x + 5)(x - 1)", 
            "-(x - 5)(x + 1)", 
            "(x + 5)(x - 1)", 
            "-(x + 5)(x + 1)"
        ],
        correctAnswer: 0,
        hint: "הוציאו מינוס 1 אל מחוץ לסוגריים כדי שיהיה קל יותר לעבוד עם טרינום שמתחיל ב-\\( x^2 \\) חיובי.",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא מינוס כגורם משותף. כל הסימנים יתהפכו.", math_expression: "- (x^2 + 4x - 5)" },
            { verbal_explanation: "שלב ב': נחפש זוג שמכפלתו -5 וסכומו +4. הזוג הוא +5 ו- -1.", math_expression: "" },
            { verbal_explanation: "שלב ג': נרכיב את הסוגריים, כולל המינוס שהוצאנו בהתחלה.", math_expression: "-(x + 5)(x - 1)" }
        ],
        final_answer: "-(x + 5)(x - 1)"
    },
    // שאלה 47
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "צמצום שברים בעזרת פירוק טרינום! פשטו את השבר:\n\\( \\frac{x^2 + 4x + 3}{x + 1} = ? \\)",
        options: [
            "x + 3", 
            "x + 4", 
            "x + 1", 
            "x - 3"
        ],
        correctAnswer: 0,
        hint: "פרקו תחילה את המונה בעזרת שיטת הטרינום למכפלת שני סוגריים. אילו סוגריים יצטמצמו עם המכנה?",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה (כפל ל-3, סכום ל-4). המספרים הם 1 ו-3.", math_expression: "x^2 + 4x + 3 = (x + 1)(x + 3)" },
            { verbal_explanation: "שלב ב': נרשום את השבר מחדש עם המונה המפורק.", math_expression: "\\frac{(x + 1)(x + 3)}{x + 1}" },
            { verbal_explanation: "שלב ג': נצמצם את הגורם \\( (x + 1) \\) שמופיע למעלה ולמטה.", math_expression: "x + 3" }
        ],
        final_answer: "x + 3"
    },
    // שאלה 48
    {
        topic: "algebraic_technique",
        subTopic: "פירוק טרינום ריבועי",
        question_text: "שאלת סיום וצמצום! פשטו את השבר האלגברי:\n\\( \\frac{x^2 - 5x + 6}{x - 2} = ? \\)",
        options: [
            "x - 3", 
            "x + 3", 
            "x - 2", 
            "x + 2"
        ],
        correctAnswer: 0,
        hint: "פרקו את המונה. המספרים שנותנים מכפלה 6 וסכום מינוס 5 הם מינוס 2 ומינוס 3.",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את הטרינום במונה.", math_expression: "x^2 - 5x + 6 = (x - 2)(x - 3)" },
            { verbal_explanation: "שלב ב': נרשום מחדש את השבר המלא.", math_expression: "\\frac{(x - 2)(x - 3)}{x - 2}" },
            { verbal_explanation: "שלב ג': נצמצם את הבלוק הזהה במונה ובמכנה.", math_expression: "x - 3" }
        ],
        final_answer: "x - 3"
    }

];